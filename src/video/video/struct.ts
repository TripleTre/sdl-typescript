import Struct = require('ref-struct');
import types from '../../types/types';
import * as ref from 'ref';

export type DisplayMode_t = {
  /**
   * one of the SDL_PixelFormatEnum values;
   */
  format: number,
  /**
   * width, in screen coordinates
   */
  w: number,
  /**
   * height, in screen coordinates
   */
  h: number,
  /**
   * refresh rate (in Hz), or 0 for unspecified
   */
  refresh_rate: number,
  /**
   * driver-specific data, initialize to 0
   */
  driverdata?: any
};

export let DisplayMode_c = Struct({
  format:       types.uint32,
  w:            types.int,
  h:            types.int,
  refresh_rate: types.int,
  driverdata:   types.void_p,
});

export let DisplayMode_p = ref.refType(DisplayMode_c);
