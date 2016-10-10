import {library} from '../util/ffi';
import types from '../types/types';

interface SDL_init_shoutdown {
  /**
   * 初始化诸如: timer, audio, video 等SDL子系统， 这个函数必须在调任任何 SDL 函数前调用。
   * @param flags 初始化选项
   * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
   */
  SDL_Init(flags: number): number;
  /**
   * 初始化参数指定的 SDL 子系统。 可以在其他 SDL 函数调用后调用。
   * @param flags 初始化选项
   * @return 0 表示初始化成功， 负值表示出现错误，调用 SDL_GetError 获取更多信息。
   */
  SDL_InitSubSystem(flags: number): number;
  /**
   * 关闭并清理所有 SDL 子系统。
   */
  SDL_Quit(): void;
  /**
   * 关闭指定的 SDL 子系统
   * @param flags 要关闭的子系统
   */
  SDL_QuitSubSystem(flags: number): void;
}

let lib: SDL_init_shoutdown = Object.create(null);
library({
  SDL_Init:          [types.int32, [types.uint32]], // must be called before createWindow
  SDL_InitSubSystem: [types.int32, [types.uint32]],
  SDL_QuitSubSystem: [types.void, [types.uint32]],
  SDL_Quit:          [types.void, [types.void]]
}, lib);

enum initOption {
  SDL_INIT_TIMER          = 0x00000001,
  SDL_INIT_AUDIO          = 0x00000010,
  SDL_INIT_VIDEO          = 0x00000020,
  SDL_INIT_JOYSTICK       = 0x00000200,
  SDL_INIT_HAPTIC         = 0x00001000,
  SDL_INIT_GAMECONTROLLER = 0x00002000,
  SDL_INIT_EVENTS         = 0x00004000,
  SDL_INIT_NOPARACHUTE    = 0x00100000,
  SDL_INIT_EVERYTHING     = 1077809
}

export default {
  lib: lib,
  enum: {
    initOption
  }
}
