"use strict";
const sdl_1 = require('./basic/sdl');
const sdl_error_1 = require('./basic/sdl-error');
const video_1 = require('./video/video');
sdl_1.init(sdl_1.InitOption.SDL_INIT_VIDEO);
let window = video_1.createWindow('window', 0, 0, 1000, 1000, 0);
console.log(sdl_error_1.getError());
console.log('getDisplayBounds: ', video_1.getDisplayBounds(1));
//# sourceMappingURL=test.js.map