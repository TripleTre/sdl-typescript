"use strict";
const sdl_1 = require('./basic/sdl');
const sdl_error_1 = require('./basic/sdl-error');
const video_1 = require('./video/video');
const pixels_1 = require('./pixels');
let o = pixels_1.PixelFormat;
sdl_1.init(sdl_1.InitOption.SDL_INIT_VIDEO);
let mode = video_1.getClosestDisplayMode(0, {
    format: 0,
    w: 1920,
    h: 1080,
    refresh_rate: 0
});
console.log(sdl_error_1.getError());
console.log(mode);
// let window = createWindow('gl context', 0, 0, 960, 540, 0x00000020);
// // let context = createGLContext(window);
// let GLClearColorFunction = ffi.Function(types.void, [types.double, types.double, types.double, types.double]);
// let GLGetErrorFunction = ffi.Function(types.uint32, [types.void]);
// let GLClearFunction = ffi.Function(types.void, [types.uint32]);
// console.log(glGetDrawableSize(window));
// // console.log(glGetCurrentWindow(), window);
// console.log(getError());
//# sourceMappingURL=test.js.map