"use strict";
const index_1 = require('./render/index');
const console = require('console');
const sdl_1 = require('./basic/sdl');
const video_1 = require('./video/video');
sdl_1.init(sdl_1.InitOption.SDL_INIT_VIDEO);
let window = video_1.createWindow('test', 100, 100, 600, 400, 0);
let render = index_1.createRender(window, -1, index_1.renderFlags.accelerated);
// console.log(getDisplayBounds(0));
// console.log(getDisplayDPI(0));
// console.log(getDisplayMode(0, 0));
// console.log(getDisplayName(0));
// console.log(getGrabbedWindow(), window);
// console.log(getNumDisplayModes(0));
// console.log(getNumVideoDisplays());
console.log(video_1.getVideoDriver(0));
//# sourceMappingURL=test.js.map