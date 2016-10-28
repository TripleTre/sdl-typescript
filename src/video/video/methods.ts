import {library} from '../../util/ffi';
import types from '../../types/types';
import * as ref from 'ref';
import {getError} from '../../basic/sdl-error';
import {GLAttr} from './enum';
import * as ffi from 'ffi';
import {nullOrSelf} from '../../util/buffer-util';
import {DisplayMode_c, DisplayMode_t, DisplayMode_p} from './struct';

let lib = Object.create(null);
library({
  SDL_CreateWindow:            [types.void_p, [types.CString, types.int, types.int, types.int, types.int, types.uint32]],
  SDL_CreateWindowAndRenderer: [types.int, [types.int, types.int, types.uint32, types.void_p, types.void_p]],
  SDL_CreateWindowFrom:        [types.void_p, [types.void_p]],
  SDL_DestroyWindow:           [types.void, [types.void_p]],
  SDL_DisableScreenSaver:      [types.void, []],
  SDL_EnableScreenSaver:       [types.void, []],
  SDL_GL_CreateContext:        [types.void_p, [types.void_p]],
  SDL_GL_DeleteContext:        [types.void, [types.void_p]],
  SDL_GL_ExtensionSupported:   [types.uint8, [types.CString]],
  SDL_GL_GetAttribute:         [types.int, [types.uint32, types.int_p]],
  SDL_GL_GetCurrentContext:    [types.void_p, []],
  SDL_GL_GetCurrentWindow:     [types.void_p, []],
  SDL_GL_GetDrawableSize:      [types.void, [types.void_p, types.int_p, types.int_p]],
  SDL_GL_GetProcAddress:       [types.void_p, [types.CString]],
  SDL_GL_GetSwapInterval:      [types.int, []],
  SDL_GL_LoadLibrary:          [types.int, [types.CString]],
  SDL_GL_MakeCurrent:          [types.int, [types.void_p, types.void_p]],
  SDL_GL_ResetAttributes:      [types.void, []],
  SDL_GL_SetSwapInterval:      [types.int, [types.int]],
  SDL_GL_SwapWindow:           [types.void, [types.void_p]],
  SDL_GL_UnloadLibrary:        [types.void, []],
  SDL_GetClosestDisplayMode:   [DisplayMode_p, [types.int, DisplayMode_p, DisplayMode_p]],
  SDL_GetCurrentDisplayMode:   [types.int, [types.int, DisplayMode_p]],
  SDL_GetCurrentVideoDriver:   [types.CString, []],
  SDL_GetDesktopDisplayMode:   [types.int, [types.int, DisplayMode_p]],
  // SDL_GetDisplayBounds: [types.int, [types.int, ]]
  SDL_GL_SetAttribute:         [types.int, [types.uint32, types.int]]
}, lib);

export type SdlWindow_t = {};
export type GLContext_t = {};

export function createWindow(title: string, x: number, y: number, w: number, h: number, flags: number): SdlWindow_t {
  let ret: SdlWindow_t = lib.SDL_CreateWindow(title, x, y, w, h, flags);
  if (ret == null) {
    throw new Error('create window failed, ' + getError());
  }
  return ret;
}

/**
 * 
 */
export function createWindowAndRenderer(w: number, h: number, flags: number): {window: SdlWindow_t, renderer: any} {
  let window: SdlWindow_t = ref.alloc(types.void_p);
  let renderer = ref.alloc(types.void_p);
  let ret = lib.SDL_CreateWindowAndRenderer(w, h, flags, window, renderer);
  if (ret < 0) {
    throw new Error('create window failed, ' + getError());
  }
  return {
    window,
    renderer
  };
}

export function createWindowFrom() {
  //
}

export function destroyWindow(window: SdlWindow_t): void {
  lib.SDL_DestroyWindow(window);
}

/**
 * 禁用屏幕保护程序，在 SDL 退出后会重新启用。
 */
export function disableScreenSaver(): void {
  lib.SDL_DisableScreenSaver();
}

export function enableScreenSaver(): void {
  lib.SDL_EnableScreenSaver();
}

/**
 * 为当前窗口创建 openGL 上下文， 以使用 openGL 绘图
 */
export function glCreateContext(window: SdlWindow_t): GLContext_t {
  return lib.SDL_GL_CreateContext(window);
}

export function glDeleteContext(context: GLContext_t): void {
  lib.SDL_GL_DeleteContext(context);
}

export function glExtensionSupported(extension: string): boolean {
  return !!lib.SDL_GL_ExtensionSupported(extension);
}

/**
 * 获取当前活跃的 openGL context。
 * @return 调用成功时返回openGL context， 否则返回 null。 调用 getError 获取错误信息
 */
export function glGetCurrentContext(): GLContext_t {
  let ret = lib.SDL_GL_GetCurrentContext();
  return nullOrSelf(ret);
}

export function glGetCurrentWindow(): SdlWindow_t {
  let ret = lib.SDL_GL_GetCurrentWindow();
  return nullOrSelf(ret);
}

// todo 这个函数与 SDL_GetWindowSize 在高分屏上有什么区别
/**
 * 获取窗口的可绘制区域大小，单位像素。
 * @return {w: number, h: number}
 */
export function glGetDrawableSize(window: SdlWindow_t): {w: number, h: number} {
  let w = ref.alloc('int', 0);
  let h = ref.alloc('int', 0);
  lib.SDL_GL_GetDrawableSize(window, w, h);
  return {
    w: ref.deref(w),
    h: ref.deref(h)
  };
}

/**
 * 根据名字获取 openGL 函数。
 * @param {creator} ffi.Function 生成的对象， 用来生成 js 函数。
 * @param {func} 要获取的 openGL 函数名称
 * @return 转换后的 js 函数。
 */
export function glGetProcAddress(creator: any, func: string): Function {
  return creator.toFunction(lib.SDL_GL_GetProcAddress(func));
}

/**
 * 获取当前 gl context 的交换间隔。
 * @return 0 表示未开启垂直同步。
 *         1 表示开启了垂直同步。
 *        -1 if late swaps happen immediately instead of waiting for the next retrace;
 *        调用 getError 获取更多信息。
 */
export function glGetSwapInterval(): number { // todo 对计算机图形学还不了解，这里可能理解有误，需要更正
  return lib.SDL_GL_GetSwapInterval()
}

/**
 * 动态加载 openGL 库， 之后可以调用 glGetProcAddress 获取 openGL 函数。 此函数必须在初始化 InitOption.SDL_INIT_VIDEO 之后，
 * 创建 openGL 窗口之前调用。
 * @param {path} 平台相关的 openGL 库名称，或者不传参数加载默认的库。
 * @return 0 表示操作成功。
 *         负值 代表错误代码， 调用 getError 获取更多信息。
 */
export function glLoadLibrary(path?: string): number {
  return lib.SDL_GL_LoadLibrary(path);
}

/**
 * 为相应的窗口设置 openGL context。
 * @param {window} 与 context 参数相关联的窗口。
 *        {context} 与 window 参数相关联的 openGL context。
 * @return 0 表示成功
 *        负值 代表错误代码， 调用 getError 获取更多信息。
 */
export function glMakeCurrent(window: SdlWindow_t, context: GLContext_t): number {
  return lib.SDL_GL_MakeCurrent(window, context);
}

/**
 * 重置 opengl context 的所有属性为其默认值。
 */
export function glResetArrtibutes(): void {
  lib.SDL_GL_ResetAttributes();
}

/**
 * 设置交换缓冲区的间隔。
 * @param {interval} 0 立即刷新；
 *                   1 垂直同步；
 *                  -1 Some systems allow specifying -1 for the interval, to enable late swap tearing. Late swap 
 *                     tearing works the same as vsync, but if you've already missed the vertical retrace for a 
 *                     given frame, it swaps buffers immediately, which might be less jarring for the user during 
 *                     occasional framerate drops. If application requests late swap tearing and the system does 
 *                     not support it, this function will fail and return -1. In such a case, you should probably 
 *                     retry the call with 1 for the interval. 
 * @return 0 操作成功
 *         -1 参数值错误， 调用 getError 获取更多信息。
 */
export function glSetSwapInterval(interval: 0 | 1 | -1): number {
  return lib.SDL_GL_SetSwapInterval(interval);
}

/**
 * 刷新使用 opengl 渲染的窗口。
 */
export function glSwapWindow(window: SdlWindow_t): void {
  lib.SDL_GL_SwapWindow(window);
}

/**
 * 卸载之前由 glLoadLibrary 函数装载的 opengl 库， 在 glGetProcAddress 完成后即可调用这个函数。
 */
export function glUnloadLibrary(): void {
  lib.SDL_GL_UnloadLibrary();
}

/**
 * 根据给定的 DisplayMode 返回与其值最接近的一种。(DisplayMode 应该是只有固定几种，与设备有关)
 * @param displayIndex 显示设备序号。
 * @param desired 期望值。
 * @return 成功时返回与期望值最接近的模式；失败则返回 null，调用 getError 获取更多信息。
 */
export function getClosestDisplayMode(displayIndex: number, desired: DisplayMode_t): DisplayMode_t {
  desired.driverdata = ref.alloc('int', 0);
  let desired_p = DisplayMode_c(desired).ref();
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetClosestDisplayMode(displayIndex, desired_p, result_p);
  if (nullOrSelf(ret) === null) {
    return null;
  }
  let result = ref.deref(result_p);
  return {
    format: result.format,
    w: result.w,
    h: result.h,
    refresh_rate: result.refresh_rate,
    driverdata: result.driverdata
  }
}

/**
 * 获取当前显示模式信息。
 * @param {displayIndex} 显示设备序号
 * @return 成功时返回显示模式对象；失败则返回 null，调用 getError 获取更多信息。
 */
export function getCurrentClosestDisplayMode(displayIndex: number): DisplayMode_t {
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetCurrentDisplayMode(displayIndex, result_p);
  if (nullOrSelf(ret) === null) {
    return null;
  }
  let result = ref.deref(result_p);
  return {
    format: result.format,
    w: result.w,
    h: result.h,
    refresh_rate: result.refresh_rate,
    driverdata: result.driverdata
  }
}

/**
 * 获取当前显卡驱动程序名称。
 */
export function getCurrentVideoDriver(): string {
  return lib.SDL_GetCurrentVideoDriver();
}

/**
 * 获取桌面显示模式。
 * @param {displayIndex} 显示设备序号
 * @return 成功时返回显示模式对象；失败则返回 null，调用 getError 获取更多信息。
 */
export function getDesktopDisplayMode(displayIndex: number): DisplayMode_t {
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetDesktopDisplayMode(displayIndex, result_p);
  if (ret < 0) {
    return null;
  }
  let result = ref.deref(result_p);
  return {
    format: result.format,
    w: result.w,
    h: result.h,
    refresh_rate: result.refresh_rate,
    driverdata: result.driverdata
  }
}

/**
 * 获取当前 gl 上下文中指定属性的实际值。
 * @param {attr} 要查询的 GLAttr 属性。
 * @return 要查询属性的值。
 */
export function glGetAttribute(attr: GLAttr): number {
  // todo 是否必须用这种形式传指针
  let ret = ref.alloc('int');
  let res = lib.SDL_GL_GetAttribute(attr, ret);
  if (res < 0) {
    throw new Error('get gl attribute failed, ' + getError());
  }
  return ref.deref(ret);
}

/**
 * 设置 OpenGL 窗口的属性， 必须在创建窗口之前调用。
 * @param {attr} 要设置的属性。
 * @param {value} 要设置的属性值。
 * 
 */
export function glSetAttribute(attr: GLAttr, value: number): number {
  let res = lib.SDL_GL_SetAttribute(attr, value);
  if (res < 0) {
    throw new Error('set gl attribute failed, ' + getError());
  }
  return res;
}
