"use strict";
const sdl_1 = require('./basic/sdl');
const video_1 = require('./video/video');
sdl_1.init(sdl_1.InitOption.SDL_INIT_EVERYTHING);
console.log(video_1.glSetAttribute(video_1.GLAttr.alphaSize, 12));
console.log(video_1.glGetAttribute(video_1.GLAttr.alphaSize));
// log('windowEvent');
// assert(false);
// console.log(getAssertionHandler());
//# sourceMappingURL=test.js.map