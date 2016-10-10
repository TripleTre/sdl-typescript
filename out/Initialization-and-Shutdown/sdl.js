"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
let lib = Object.create(null);
ffi_1.library({
    SDL_Init: [types_1.default.int32, [types_1.default.uint32]],
    SDL_InitSubSystem: [types_1.default.int32, [types_1.default.uint32]],
    SDL_QuitSubSystem: [types_1.default.void, [types_1.default.uint32]],
    SDL_Quit: [types_1.default.void, [types_1.default.void]]
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    lib: lib,
    enum: {
        initOption
    }
};
//# sourceMappingURL=sdl.js.map