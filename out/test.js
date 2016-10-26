"use strict";
const sdl_1 = require('./basic/sdl');
const sdl_error_1 = require('./basic/sdl-error');
const video_1 = require('./video/video');
const ffi = require('ffi');
const types_1 = require('./types/types');
sdl_1.init(sdl_1.InitOption.SDL_INIT_VIDEO);
let window = video_1.createWindow('gl context', 0, 0, 960, 540, 0x00000020);
// let context = createGLContext(window);
let GLClearColorFunction = ffi.Function(types_1.default.void, [types_1.default.double, types_1.default.double, types_1.default.double, types_1.default.double]);
let GLGetErrorFunction = ffi.Function(types_1.default.uint32, [types_1.default.void]);
let GLClearFunction = ffi.Function(types_1.default.void, [types_1.default.uint32]);
console.log(video_1.glGetDrawableSize(window));
// console.log(glGetCurrentWindow(), window);
console.log(sdl_error_1.getError());
//# sourceMappingURL=test.js.map