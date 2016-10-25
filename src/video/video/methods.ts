import {library} from '../../util/ffi';
import types from '../../types/types';
import * as ref from 'ref';
import {getError} from '../../basic/sdl-error';
import {GLAttr} from './structs';

let lib = Object.create(null);
library({
  SDL_GL_GetAttribute: [types.int, [types.uint32, types.int_p]],
  SDL_GL_SetAttribute: [types.int, [types.uint32, types.int]]
}, lib);

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
