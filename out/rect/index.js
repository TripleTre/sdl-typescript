"use strict";
// todo 这种不依赖 SDL 的函数， 应该用 js 重写
const Struct = require('ref-struct');
const types_1 = require('../types/types');
const ref = require('ref');
const ffi_1 = require('../util/ffi');
const ArrayType = require('ref-array');
exports.Rect_c = Struct({
    x: types_1.default.int,
    y: types_1.default.int,
    w: types_1.default.int,
    h: types_1.default.int
});
exports.Rect_p = ref.refType(exports.Rect_c);
exports.Point_c = Struct({
    x: types_1.default.int,
    y: types_1.default.int
});
exports.Point_p = ref.refType(exports.Point_c);
let lib = Object.create(null);
ffi_1.library({
    SDL_EnclosePoints: [types_1.default.int, [exports.Point_p, types_1.default.int, exports.Rect_p, exports.Rect_p]],
    SDL_HasIntersection: [types_1.default.uint32, [exports.Rect_p, exports.Rect_p]],
    SDL_IntersectRect: [types_1.default.uint8, [exports.Rect_p, exports.Rect_p, exports.Rect_p]],
    SDL_UnionRect: [exports.Rect_p, [exports.Rect_p, exports.Rect_p, exports.Rect_p]]
}, lib);
let Point_p_Array = ArrayType(exports.Point_p);
exports.EMPTY_RECT = { x: 0, y: 0, w: 0, h: 0 };
/**
 * 获取能包围给定的所有点的最小矩形。
 * @param {points} 要包含的点
 * @param {clip} 不包含矩形
 * @return
 */
function enclosePoints(points, clip) {
    let count = points.length, res = exports.Point_c(points[0]), points_p = new Point_p_Array(points.map(v => exports.Point_c(v).ref())), result = (new exports.Rect_c()).ref();
    clip = clip === undefined ? ref.NULL : exports.Rect_c(clip).ref();
    if (lib.SDL_EnclosePoints(points_p[0], count, clip, result)) {
        let jsRet = ref.deref(result);
        return {
            x: jsRet.x,
            y: jsRet.y,
            w: jsRet.w,
            h: jsRet.h
        };
    }
    else {
        return exports.EMPTY_RECT;
    }
}
exports.enclosePoints = enclosePoints;
/**
 * 判断两个矩形是否有交集。
 */
function hasIntersection(rectA, rectB) {
    let rectA_p = new exports.Rect_c(rectA).ref(), rectB_p = new exports.Rect_c(rectB).ref();
    return lib.SDL_HasIntersection(rectA_p, rectB_p) === 1;
}
exports.hasIntersection = hasIntersection;
/**
 * 计算两个矩形的交集。
 * @param {rectA}
 * @param {rectB}
 * @return 返回 rectA 和 rectB 的公共部分；如果没有公共部分返回null。
 */
function intersectRect(rectA, rectB) {
    let rectA_p = new exports.Rect_c(rectA).ref(), rectB_p = new exports.Rect_c(rectB).ref(), result_p = new exports.Rect_c().ref();
    if (lib.SDL_IntersectRect(rectA_p, rectB_p, result_p) === 1) {
        let result = ref.deref(result_p);
        return {
            x: result.x,
            y: result.y,
            w: result.w,
            h: result.h
        };
    }
    else {
        return exports.EMPTY_RECT;
    }
}
exports.intersectRect = intersectRect;
/**
 * 判断点是否在矩形内。
 */
function pointInRect(point, rect) {
    return ((point.x >= rect.x) && (point.x < (rect.x + rect.w)) &&
        (point.y >= rect.y) && (point.y < (rect.y + rect.h)));
}
exports.pointInRect = pointInRect;
/**
 * 判断矩形的面积是否为空。
 */
function rectEmpty(rect) {
    return rect.w === 0 || rect.h === 0;
}
exports.rectEmpty = rectEmpty;
/**
 * 判断矩形是否相等。
 */
function rectEquals(rectA, rectB) {
    return (rectA.x == rectB.x) && (rectA.y == rectB.y) &&
        (rectA.w == rectB.w) && (rectA.h == rectB.h);
}
exports.rectEquals = rectEquals;
/**
 * 计算两个矩形的并集。这里按照 SDL 的行为， 不支持负坐标。
 */
function unionRect(rectA, rectB) {
    let minX, minY, maxX, maxY, xs, ys;
    let ab = function (a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else if (a === b) {
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
    };
}
exports.unionRect = unionRect;
//# sourceMappingURL=index.js.map