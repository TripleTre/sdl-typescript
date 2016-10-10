"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
void ;
void ;
/**
 * 关闭指定的 SDL 子系统
 * @param flags 要关闭的子系统
 */
SDL_QuitSubSystem: 
let lib = Object.create(null);
ffi_1.library({
    SDL_Init: [types_1.default.int32, [types_1.default.uint32]],
    SDL_InitSubSystem: [types_1.default.int32, [types_1.default.uint32]]
}, lib);
var initOption;
(function (initOption) {
    initOption[initOption["SDL_INIT_TIMER"] = 1] = "SDL_INIT_TIMER";
    initOption[initOption["SDL_INIT_AUDIO"] = 16] = "SDL_INIT_AUDIO";
    initOption[initOption["SDL_INIT_VIDEO"] = 32] = "SDL_INIT_VIDEO";
    initOption[initOption["SDL_INIT_JOYSTICK"] = 512] = "SDL_INIT_JOYSTICK";
    initOption[initOption["SDL_INIT_HAPTIC"] = 4096] = "SDL_INIT_HAPTIC";
    initOption[initOption["SDL_INIT_GAMECONTROLLER"] = 8192] = "SDL_INIT_GAMECONTROLLER";
    initOption[initOption["SDL_INIT_EVENTS"] = 16384] = "SDL_INIT_EVENTS";
    initOption[initOption["SDL_INIT_NOPARACHUTE"] = 1048576] = "SDL_INIT_NOPARACHUTE";
    initOption[initOption["SDL_INIT_EVERYTHING"] = 1077809] = "SDL_INIT_EVERYTHING";
})(initOption || (initOption = {}));
lib.;
//# sourceMappingURL=sdl.js.map