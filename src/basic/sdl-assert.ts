import * as struct from 'ref-struct';
import types from '../types/types';
import {library} from '../util/ffi';
import * as ffi from 'ffi';
import * as ref from 'ref';

export enum AssertState {
  retry:  0,
  break:  1,
  abort:  2,
  ignore: 3,
  alwaysIgnore: 4
};

export let assertData = struct({
  always_ignore: types.int, 
  trigger_count: types.uint,
  condition:     types.CString,
  filename:      types.CString,
  linenum:       types.int,
  function:      types.CString,
  next:          types.void_p
});

let SDL_AssertionHandler = ffi.Function(types.uint32, [ref.refType(assertData), types.void_p])

let lib = Object.create(null);

library({
  // SDL_assert: [types.void, []],
  SDL_GetAssertionHandler: [SDL_AssertionHandler, []]
}, lib);

// export function assert(exp: bool): void {
//   lib.SDL_assert(exp);
// }

export function getAssertionHandler(): any {
  return lib.SDL_GetAssertionHandler();
}

