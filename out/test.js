"use strict";
const sdl_1 = require('./basic/sdl');
console.log(Date.now());
for (let i = 1000000; i > 0; i--) {
    sdl_1.init(sdl_1.InitOption.SDL_INIT_VIDEO);
}
console.log(Date.now());
//# sourceMappingURL=test.js.map