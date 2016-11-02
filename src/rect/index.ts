// todo 这种不依赖 SDL 的函数， 应该用 js 重写
import Struct = require('ref-struct');
import types from '../types/types';
import * as ref from 'ref';
import {library} from '../util/ffi';
import {Buffer} from 'buffer';
import ArrayType = require('ref-array');

export type Rect_t = {
  x: number,
  y: number,
  w: number,
  h: number
};

export let Rect_c = Struct({
  x: types.int,
  y: types.int,
  w: types.int,
  h: types.int
});

export let Rect_p = ref.refType(Rect_c);

export type Point_t = {
  x: number,
  y: number
};

export let Point_c = Struct({
  x: types.int,
  y: types.int
});

export let Point_p = ref.refType(Point_c);

let lib = Object.create(null);
library({
  SDL_EnclosePoints:   [types.int, [Point_p, types.int, Rect_p, Rect_p]],
  SDL_HasIntersection: [types.uint32, [Rect_p, Rect_p]],
  SDL_IntersectRect:   [types.uint8, [Rect_p, Rect_p, Rect_p]],
  SDL_UnionRect:       [Rect_p, [Rect_p, Rect_p, Rect_p]]
}, lib);

let Point_p_Array = ArrayType(Point_p);

export const EMPTY_RECT = {x:0, y:0, w:0, h:0};

/**
 * 获取能包围给定的所有点的最小矩形。
 * @param {points} 要包含的点
 * @param {clip} 不包含矩形
 * @return
 */
export function enclosePoints(points: Array<Point_t>, clip?: Rect_t): Rect_t {
  let count = points.length,
      res = Point_c(points[0]),
      points_p = new Point_p_Array(points.map(v => Point_c(v).ref())),
      result = (new Rect_c()).ref();
  clip = clip === undefined ? ref.NULL : Rect_c(clip).ref();
  if(lib.SDL_EnclosePoints(points_p[0], count, clip, result)) {
    let jsRet = ref.deref(result);
    return {
      x: jsRet.x,
      y: jsRet.y,
      w: jsRet.w,
      h: jsRet.h
    };
  } else {
    return EMPTY_RECT;
  }
}

/**
 * 判断两个矩形是否有交集。
 */
export function hasIntersection(rectA: Rect_t, rectB: Rect_t): boolean {
  let rectA_p = new Rect_c(rectA).ref(),
      rectB_p = new Rect_c(rectB).ref();
  return lib.SDL_HasIntersection(rectA_p, rectB_p) === 1;
}

/**
 * 计算两个矩形的交集。
 * @param {rectA}
 * @param {rectB}
 * @return 返回 rectA 和 rectB 的公共部分；如果没有公共部分返回null。
 */
export function intersectRect(rectA: Rect_t, rectB: Rect_t): Rect_t {
  let rectA_p = new Rect_c(rectA).ref(),
      rectB_p = new Rect_c(rectB).ref(),
      result_p = new Rect_c().ref();
  if (lib.SDL_IntersectRect(rectA_p, rectB_p, result_p) === 1) {
    let result = ref.deref(result_p);
    return {
      x: result.x,
      y: result.y,
      w: result.w,
      h: result.h
    };
  } else {
    return EMPTY_RECT;
  }
}

/**
 * 判断点是否在矩形内。
 */
export function pointInRect(point: Point_t, rect: Rect_t): boolean {
  return ( (point.x >= rect.x) && (point.x < (rect.x + rect.w)) &&
             (point.y >= rect.y) && (point.y < (rect.y + rect.h)) );
}

/**
 * 判断矩形的面积是否为空。
 */
export function rectEmpty(rect: Rect_t): boolean {
  return rect.w === 0 || rect.h === 0;
}

/**
 * 判断矩形是否相等。
 */
export function rectEquals(rectA: Rect_t, rectB: Rect_t): boolean {
  return (rectA.x == rectB.x) && (rectA.y == rectB.y) &&
            (rectA.w == rectB.w) && (rectA.h == rectB.h);
}

/**
 * 计算两个矩形的并集。这里按照 SDL 的行为， 不支持负坐标。
 */
export function unionRect(rectA: Rect_t, rectB: Rect_t): Rect_t {
  let minX, minY, maxX, maxY, xs, ys;
  let ab = function(a, b){
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  };
  xs = [rectA.x, rectB.x, rectA.x + rectA.w, rectB.x + rectB.w].sort(ab);
  ys = [rectA.y, rectB.y, rectA.y + rectA.h, rectB.y + rectB.h].sort(ab);
  minX = xs[0];
  maxX = xs[3];
  minY = ys[0];
  maxY = ys[3];
  return {
    x: minX,
    y: minY,
    w: maxX - minX,
    h: maxY - minY
  }
}
