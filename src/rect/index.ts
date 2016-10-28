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
  SDL_EnclosePoints: [types.int, [Point_p, types.int, Rect_p, Rect_p]]
}, lib);

let Point_p_Array = ArrayType(Point_p);

export function enclosePoints(points: Array<Point_t>, clip: Rect_t = null) {
  let count = points.length;
  Point_c(points[0]);
  let points_p = new Point_p_Array(points.map(v => Point_c(v)));
  let result = (new Rect_c).ref();
  lib.SDL_EnclosePoints(points_p, count, clip, result);
  console.log(result);
}
