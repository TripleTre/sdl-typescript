import struct from 'ref-struct';
import types from '../types/types';

export let windowEvent = struct({
  type: types.uint32,
  timestamp: types.uint32,
  windowID: types.uint32,
  event: types.uint8,
  padding1: types.uint8,
  padding2: types.uint8,
  padding3: types.uint8,
  data1: types.int32,
  data2: types.int32,
});

export let keyboardEvent = struct({
  type: types.uint32,
  timestamp: types.uint32,
  windowID: types.uint32,
  state: types.uint8,
  repeat: types.uint8
});