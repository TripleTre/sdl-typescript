"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
let lib = Object.create(null);
ffi_1.library({
    SDL_Init: [types_1.default.int32, [types_1.default.uint32]],
    SDL_InitSubSystem: [types_1.default.int32, [types_1.default.uint32]],
    SDL_QuitSubSystem: [types_1.default.void, [types_1.default.uint32]],
    SDL_Quit: [types_1.default.void, []],
    SDL_WasInit: [types_1.default.uint32, [types_1.default.uint32]]
}, lib);
(function (InitOption) {
    /**
     * timer subsystem
     */
    InitOption[InitOption["SDL_INIT_TIMER"] = 1] = "SDL_INIT_TIMER";
    /**
     * audio subsystem
     */
    InitOption[InitOption["SDL_INIT_AUDIO"] = 16] = "SDL_INIT_AUDIO";
    /**
     * video subsystem. Automatically initializes the SDL_INIT_EVENTS subsystem
     */
    InitOption[InitOption["SDL_INIT_VIDEO"] = 32] = "SDL_INIT_VIDEO";
    /**
     * joystick subsystem
     */
    InitOption[InitOption["SDL_INIT_JOYSTICK"] = 512] = "SDL_INIT_JOYSTICK";
    /**
     * haptic (force feedback) subsystem
     */
    InitOption[InitOption["SDL_INIT_HAPTIC"] = 4096] = "SDL_INIT_HAPTIC";
    /**
     * controller subsystem. Automatically initializes the SDL_INIT_JOYSTICK subsystem
     */
    InitOption[InitOption["SDL_INIT_GAMECONTROLLER"] = 8192] = "SDL_INIT_GAMECONTROLLER";
    /**
     * events subsystem
     */
    InitOption[InitOption["SDL_INIT_EVENTS"] = 16384] = "SDL_INIT_EVENTS";
    /**
     * compatibility; this flag is ignored
     */
    InitOption[InitOption["SDL_INIT_NOPARACHUTE"] = 1048576] = "SDL_INIT_NOPARACHUTE";
    /**
     * all of the above subsystems
     */
    InitOption[InitOption["SDL_INIT_EVERYTHING"] = 1077809] = "SDL_INIT_EVERYTHING";
})(exports.InitOption || (exports.InitOption = {}));
var InitOption = exports.InitOption;
/**
 * 初始化诸如: timer, audio, video 等SDL子系统， 这个函数必须在调任任何 SDL 函数前调用。
 * @param {flags} 初始化选项
 * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
 */
function init(flags) {
    return lib.SDL_Init(flags);
}
exports.init = init;
/**
 * 初始化参数指定的 SDL 子系统。 可以在其他 SDL 函数调用后调用。
 * @param {flags} 初始化选项
 * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
 */
function initSubSystem(flags) {
    return lib.SDL_InitSubSystem(flags);
}
exports.initSubSystem = initSubSystem;
/**
 * 关闭并清理所有 SDL 子系统。
 */
function quit() {
    return lib.SDL_Quit();
}
exports.quit = quit;
/**
 * 关闭指定的 SDL 子系统。
 * @param {flags} 要关闭的子系统
 */
function quitSubSystem(flags) {
    return lib.SDL_QuitSubSystem(flags);
}
exports.quitSubSystem = quitSubSystem;
/**
 * 测试指定的系统是否已经初始化完成
 * @param {flags} 需要测试的系统的位掩码，如果传入 0 则测试所有子系统
 * @return 如果未初始化返回 0 ， 否则返回传入参数相同的掩码
 */
function wasInit(flags) {
    return lib.SDL_WasInit(flags);
}
exports.wasInit = wasInit;
//# sourceMappingURL=sdl.js.map