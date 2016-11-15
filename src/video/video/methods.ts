import {renderFlags, Render_p} from '../../render/index';
import * as path from 'path';
import * as console from 'console';
import {library} from '../../util/ffi';
import types from '../../types/types';
import * as ref from 'ref';
import {getError} from '../../basic/sdl-error';
import {GLAttr} from './enum';
import * as ffi from 'ffi';
import {nullOrSelf} from '../../util/buffer-util';
import {Window_p, DisplayMode_p, DisplayMode_t, DisplayMode_c} from './struct';
import {Rect_p, Rect_t, Rect_c, EMPTY_RECT} from '../../rect';
import {error} from '../../log/console';

let lib = Object.create(null);
library({
  SDL_CreateWindow:              [Window_p, [types.CString, types.int, types.int, types.int, types.int, types.uint32]],
  SDL_CreateWindowAndRenderer:   [types.int, [types.int, types.int, types.uint32, ref.refType(Window_p), ref.refType(Render_p)]],
  SDL_CreateWindowFrom:          [Window_p, [types.void_p]],
  SDL_DestroyWindow:             [types.void, [types.void_p]],
  SDL_DisableScreenSaver:        [types.void, []],
  SDL_EnableScreenSaver:         [types.void, []],
  SDL_GL_CreateContext:          [types.void_p, [types.void_p]],
  SDL_GL_DeleteContext:          [types.void, [types.void_p]],
  SDL_GL_ExtensionSupported:     [types.uint8, [types.CString]],
  SDL_GL_GetAttribute:           [types.int, [types.uint32, types.int_p]],
  SDL_GL_GetCurrentContext:      [types.void_p, []],
  SDL_GL_GetCurrentWindow:       [types.void_p, []],
  SDL_GL_GetDrawableSize:        [types.void, [types.void_p, types.int_p, types.int_p]],
  SDL_GL_GetProcAddress:         [types.void_p, [types.CString]],
  SDL_GL_GetSwapInterval:        [types.int, []],
  SDL_GL_LoadLibrary:            [types.int, [types.CString]],
  SDL_GL_MakeCurrent:            [types.int, [types.void_p, types.void_p]],
  SDL_GL_ResetAttributes:        [types.void, []],
  SDL_GL_SetSwapInterval:        [types.int, [types.int]],
  SDL_GL_SwapWindow:             [types.void, [types.void_p]],
  SDL_GL_UnloadLibrary:          [types.void, []],
  SDL_GetClosestDisplayMode:     [DisplayMode_p, [types.int, DisplayMode_p, DisplayMode_p]],
  SDL_GetCurrentDisplayMode:     [types.int, [types.int, DisplayMode_p]],
  SDL_GetCurrentVideoDriver:     [types.CString, []],
  SDL_GetDesktopDisplayMode:     [types.int, [types.int, DisplayMode_p]],
  SDL_GetDisplayBounds:          [types.int, [types.int, Rect_p]],
  SDL_GetDisplayDPI:             [types.int, [types.int, types.float_p, types.float_p, types.float_p]],
  SDL_GetDisplayMode:            [types.int, [types.int, types.int, DisplayMode_p]],
  SDL_GetDisplayName:            [types.CString_p, [types.int]],
  // SDL_GetDisplayUsableBounds: [types.int, [types.int, Rect_p]],
  SDL_GetGrabbedWindow:          [Window_p, []],
  SDL_GetNumDisplayModes:        [types.int, [types.int]],
  SDL_GetNumVideoDisplays:       [types.int, []],
  SDL_GetNumVideoDrivers:        [types.int, []],
  SDL_GetVideoDriver:            [types.CString_p, [types.int]],
  SDL_GetWindowBordersSize:      [types.int, [Window_p, types.int_p, types.int_p, types.int_p, types.int_p]],
  SDL_GL_SetAttribute:           [types.int, [types.uint32, types.int]]
}, lib);

export type SdlWindow_t = {};
export type GLContext_t = {};

export function createWindow(title: string, x: number, y: number, w: number, h: number, flags: number): SdlWindow_t {
  let ret: SdlWindow_t = lib.SDL_CreateWindow(title, x, y, w, h, flags);
  if (ret == null) {
    error(getError());
    return null;
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
    error(getError());
    return {
      window: null,
      renderer: null
    };
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
 * @param {SdlWindow_t} window 指定窗口
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
 * @param {any} creator ffi.Function 生成的对象， 用来生成 js 函数。
 * @param {string} func 要获取的 openGL 函数名称
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
 * @param {string} path 平台相关的 openGL 库名称，或者不传参数加载默认的库。
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
 * @param {number} interval 0 立即刷新；
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
 * @param {SdlWindow_t} window 要刷新的窗口
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
 * @param {number} displayIndex 显示设备序号。
 * @param {DisplayMode_t} desired 期望值。
 * @return 成功时返回与期望值最接近的模式；失败则返回 null，调用 getError 获取更多信息。
 */
export function getClosestDisplayMode(displayIndex: number, desired: DisplayMode_t): DisplayMode_t {
  desired.driverdata = ref.alloc('int', 0);
  let desired_p = DisplayMode_c(desired).ref();
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetClosestDisplayMode(displayIndex, desired_p, result_p);
  if (nullOrSelf(ret) === null) {
    error(getError());
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
 * @param {number} displayIndex 显示设备序号
 * @return 成功时返回显示模式对象；失败则返回 null，调用 getError 获取更多信息。
 */
export function getCurrentClosestDisplayMode(displayIndex: number): DisplayMode_t {
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetCurrentDisplayMode(displayIndex, result_p);
  if (nullOrSelf(ret) === null) {
    error(getError());
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
 * @param {number} displayIndex 显示设备序号
 * @return 成功时返回显示模式对象；失败则返回 null，调用 getError 获取更多信息。
 */
export function getDesktopDisplayMode(displayIndex: number): DisplayMode_t {
  let result_p = (new DisplayMode_c).ref();
  let ret = lib.SDL_GetDesktopDisplayMode(displayIndex, result_p);
  if (ret < 0) {
    error(getError());
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
 * @param {GLAttr} attr 要查询的 GLAttr 属性。
 * @return 要查询属性的值。
 */
export function glGetAttribute(attr: GLAttr): number {
  // todo 是否必须用这种形式传指针
  let ret = ref.alloc('int');
  let res = lib.SDL_GL_GetAttribute(attr, ret);
  if (res < 0) {
    error(getError());
    return res;
  }
  return ref.deref(ret);
}

/**
 * 返回显示设备的像素尺寸。
 * @param {number} displayIndex 显示设备序号
 * @return 表示显示设备尺寸的矩形， 如果出错返回 null
 */
export function getDisplayBounds(displayIndex: number): Rect_t{
  let rect_p = new Rect_c(EMPTY_RECT).ref(), rect = ref.deref(rect_p);
  let result = lib.SDL_GetDisplayBounds(displayIndex, rect_p);
  if (result < 0) {
    error(getError());
    return null;
  }
  return {
    x: rect.x,
    y: rect.y,
    w: rect.w,
    h: rect.h
  }
}

// todo error
export function getDisplayDPI(displayIndex: number): any {
  let ddpi = ref.alloc('float', 0)
     ,hdpi = ref.alloc('float', 0)
     ,vdpi = ref.alloc('float', 0)
     ,result = lib.SDL_GetDisplayDPI(displayIndex, ddpi, hdpi, vdpi);
  if (result < 0) {
    error(getError());
    return null;
  }
  return {
    ddpi: ref.deref(ddpi),
    hdpi: ref.deref(hdpi),
    vdpi: ref.deref(vdpi)
  }
}

/**
 * Use this function to get information about a specific display mode. 
 * @param {number} displayIndex the index of the display to query
 * @param {number} modeIndex the index of the display mode to query
 * @return {DisplayMode_t}
 */
export function getDisplayMode(displayIndex: number, modeIndex: number): DisplayMode_t {
  let displayMode, display_p, result;
  display_p = new DisplayMode_c().ref()
  result = lib.SDL_GetDisplayMode(displayIndex, modeIndex, display_p);
  if (result < 0) {
    error(getError());
    return null;
  }
  displayMode = ref.deref(display_p);
  return {
    format: displayMode.format,
    w: displayMode.w,
    h: displayMode.h,
    refresh_rate: displayMode.refresh_rate,
    driverdata: displayMode.driverdata
  }
}

/**
 * Use this function to get the name of a display in UTF-8 encoding. 
 * @param {number} displayIndex the index of display from which the name should be queried
 * @return Returns the name of a display or NULL for an invalid display index or failure;
 */
export function getDisplayName(displayIndex: number): string {
  let result;
  result = lib.SDL_GetDisplayName(displayIndex);
  if (result.length === 0) {
    error(getError());
    return null;
  }
  return ref.readCString(result);
}

/**
 * Use this function to get the usable desktop area represented by a display, with the primary display located at 0,0. 
 * @param {number} displayIndex the index of the display to query the usable bounds from
 * @return {Rect_t} the SDL_Rect structure filled in with the display bounds
 */
/* export function getDisplayUsableBounds(displayIndex: number): Rect_t {
  let result, rect, rect_p = new Rect_c().ref();
  result = lib.SDL_GetDisplayUsableBounds(displayIndex, rect_p);
  if (result < 0) {
    error(getError());
    return null;
  }
  rect = ref.deref(rect_p);
  return {
    x: rect.x,
    y: rect.y,
    w: rect.w,
    h: rect.h
  }
} */

/**
 * Use this function to get the window that currently has an input grab enabled. 
 */
export function getGrabbedWindow(): SdlWindow_t {
  return lib.SDL_GetGrabbedWindow();
}

/**
 * Use this function to get the number of available display modes.
 * @param {number} displayIndex the index of the display to query.
 */
export function getNumDisplayModes(displayIndex: number): number {
  return lib.SDL_GetNumDisplayModes(displayIndex);
}

/**
 * Use this function to get the number of available video displays. 
 * @return Returns a number >= 1 or a negative error code on failure; 
 */
export function getNumVideoDisplays(): number {
  let result = lib.SDL_GetNumVideoDisplays();
  if (result < 1) {
    error(getError());
  }
  return result;
}

/**
 * Use this function to get the number of video drivers compiled into SDL. 
 * @return Returns a number >= 1 on success or a negative error code on failure;
 */
export function getNumVideoDrivers(): number {
  let result = lib.SDL_GetNumVideoDrivers();
  if (result < 1) {
    error(getError());
  }
  return result;
}

/**
 * Use this function to get the name of a built in video driver. 
 * @param {number} driverIndex the index of a video driver
 * @return Returns the name of the video driver with the given index.
 */
export function getVideoDriver(driverIndex: number): string {
  let result = lib.SDL_GetVideoDriver(driverIndex);
  if (result.length === 0) {
    return null;
  }
  return ref.readCString(result);
}

export function getWindowBordersSize(window: SdlWindow_t): any {
  let top, left, bottom, right;
  top = ref.alloc('int', 0);
  left = ref.alloc('int', 0);
  bottom = ref.alloc('int', 0);
  right = ref.alloc('int', 0);
  let result = lib.SDL_GetWindowBordersSize(window, top, left, bottom, right);
  if (result < 0) {
    error(getError());
  }
}

/**
 * 设置 OpenGL 窗口的属性， 必须在创建窗口之前调用。
 * @param {GLAttr} attr 要设置的属性。
 * @param {number} value 要设置的属性值。
 * 
 */
export function glSetAttribute(attr: GLAttr, value: number): number {
  let res = lib.SDL_GL_SetAttribute(attr, value);
  if (res < 0) {
    error(getError());
  }
  return res;
}
