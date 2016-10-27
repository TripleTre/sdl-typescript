import {init, InitOption, wasInit} from './basic/sdl';
import {setError, getError, clearError} from './basic/sdl-error';
import {alloc} from 'ref';
import {GLAttr, createWindow, createWindowAndRenderer, glGetDrawableSize, GLContext_t, glGetCurrentContext, glGetCurrentWindow, getClosestDisplayMode} from './video/video';
import * as ffi from 'ffi';
import types from './types/types';
import * as ref from 'ref';
import {PixelFormat} from './pixels';

let o = PixelFormat;
init(InitOption.SDL_INIT_VIDEO);

let mode = getClosestDisplayMode(0, {
  format: 0,
  w: 1920,
  h: 1080,
  refresh_rate: 0
});
console.log(getError());
console.log(mode);

// let window = createWindow('gl context', 0, 0, 960, 540, 0x00000020);
// // let context = createGLContext(window);

// let GLClearColorFunction = ffi.Function(types.void, [types.double, types.double, types.double, types.double]);
// let GLGetErrorFunction = ffi.Function(types.uint32, [types.void]);
// let GLClearFunction = ffi.Function(types.void, [types.uint32]);
// console.log(glGetDrawableSize(window));
// // console.log(glGetCurrentWindow(), window);
// console.log(getError());
