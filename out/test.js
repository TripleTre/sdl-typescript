"use strict";
const conosle_1 = require('./log/conosle');
const console = require('console');
const sdl_error_1 = require('./basic/sdl-error');
const video_1 = require('./video/video');
// init(InitOption.SDL_INIT_VIDEO);
// let window = createWindow('window', 0, 0, 100, 100, 0);
// let render = createRender(window, -1, renderFlags.targetTexture);
console.log(sdl_error_1.getError());
conosle_1.error('redere䷍');
console.log('getDisplayBounds: ', video_1.getDisplayBounds(0));
//# sourceMappingURL=test.js.map