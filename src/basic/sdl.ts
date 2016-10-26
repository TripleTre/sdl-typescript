import {library} from '../util/ffi';
import types from '../types/types';

let lib: any = Object.create(null);
library({
  SDL_Init:          [types.int32, [types.uint32]], // must be called before createWindow
  SDL_InitSubSystem: [types.int32, [types.uint32]],
  SDL_QuitSubSystem: [types.void, [types.uint32]],
  SDL_Quit:          [types.void, []],
  SDL_WasInit:       [types.uint32, [types.uint32]]
}, lib);

export enum InitOption {
  /**
   * timer subsystem
   */
  SDL_INIT_TIMER          = 0x00000001,
  /**
   * audio subsystem
   */
  SDL_INIT_AUDIO          = 0x00000010,
  /**
   * video subsystem. Automatically initializes the SDL_INIT_EVENTS subsystem
   */
  SDL_INIT_VIDEO          = 0x00000020,
  /**
   * joystick subsystem
   */
  SDL_INIT_JOYSTICK       = 0x00000200,
  /**
   * haptic (force feedback) subsystem
   */
  SDL_INIT_HAPTIC         = 0x00001000,
  /**
   * controller subsystem. Automatically initializes the SDL_INIT_JOYSTICK subsystem
   */
  SDL_INIT_GAMECONTROLLER = 0x00002000,
  /**
   * events subsystem
   */
  SDL_INIT_EVENTS         = 0x00004000,
  /**
   * compatibility; this flag is ignored
   */
  SDL_INIT_NOPARACHUTE    = 0x00100000,
  /**
   * all of the above subsystems
   */
  SDL_INIT_EVERYTHING     = 1077809
}

/**
 * 初始化诸如: timer, audio, video 等SDL子系统， 这个函数必须在调任任何 SDL 函数前调用。
 * @param {flags} 初始化选项
 * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
 */
export function init(flags: number): number {
  return lib.SDL_Init(flags);
}

/**
 * 初始化参数指定的 SDL 子系统。 可以在其他 SDL 函数调用后调用。
 * @param {flags} 初始化选项
 * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
 */
export function initSubSystem(flags: number): number {
  return lib.SDL_InitSubSystem(flags);
}

/**
 * 关闭并清理所有 SDL 子系统。
 */
export function quit(): void {
  return lib.SDL_Quit();
}

/**
 * 关闭指定的 SDL 子系统。
 * @param {flags} 要关闭的子系统
 */
export function quitSubSystem(flags: number): void {
  return lib.SDL_QuitSubSystem(flags);
}

/**
 * 测试指定的系统是否已经初始化完成
 * @param {flags} 需要测试的系统的位掩码，如果传入 0 则测试所有子系统
 * @return 如果未初始化返回 0 ， 否则返回传入参数相同的掩码
 */
export function wasInit(flags: number): number {
  return lib.SDL_WasInit(flags);
}
