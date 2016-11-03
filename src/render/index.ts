import {SdlWindow_t} from '../video/video/methods';
import {Window_p} from '../video/video/struct';
import {library} from '../util/ffi';
import types from '../types/types';
import Struct = require('ref-struct');
import * as ref from 'ref';

export let Render_p = ref.refType(Struct({}));
export type Render_t = {};

export enum renderFlags {
   /** The renderer is a software fallback */
  software = 0x00000001,
  /**< The renderer uses hardware acceleration */
  accelerated = 0x00000002,
  /**< Present is synchronized with the refresh rate */
  presentSync = 0x00000004,
  /**< The renderer supports rendering to texture */
  targetTexture = 0x00000008
}

let lib = Object.create(null);
library({
  SDL_CreateRenderer: [Render_p, [Window_p, types.int, types.uint32]]
}, lib);

/**
 * 为窗口创建 2D 绘图环境. 
 * @param {window}
 * @param {index} the index of the rendering driver to initialize, or -1 to initialize the first one supporting the requested flags
 * @param {flags} 0, or one or more SDL_RendererFlags OR'd together;
 */
export function createRender(window: SdlWindow_t, index: number, flags: number): Render_t{
  return lib.SDL_CreateRenderer(window, index, flags);
}
