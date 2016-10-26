import {library} from '../../util/ffi';
import types from '../../types/types';
import * as ref from 'ref';
import {getError} from '../../basic/sdl-error';
import {GLAttr} from './structs';
import * as ffi from 'ffi';
import {nullOrSelf} from '../../util/buffer-util';

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
