import {library} from '../util/ffi';
import types from '../types/types';
import * as ref from 'ref';

/**
 * log 种类
 */
export enum LogCategory {
  SDL_LOG_CATEGORY_APPLICATION = 0,
  SDL_LOG_CATEGORY_ERROR       = 1,
  SDL_LOG_CATEGORY_ASSERT      = 2,
  SDL_LOG_CATEGORY_SYSTEM      = 3,
  SDL_LOG_CATEGORY_AUDIO       = 4,
  SDL_LOG_CATEGORY_VIDEO       = 5,
  SDL_LOG_CATEGORY_RENDER      = 6,
  SDL_LOG_CATEGORY_INPUT       = 7,
  SDL_LOG_CATEGORY_TEST        = 8,
  SDL_LOG_CATEGORY_RESERVED1   = 9,
  SDL_LOG_CATEGORY_RESERVED2   = 10,
  SDL_LOG_CATEGORY_RESERVED3   = 11,
  SDL_LOG_CATEGORY_RESERVED4   = 12,
  SDL_LOG_CATEGORY_RESERVED5   = 13,
  SDL_LOG_CATEGORY_RESERVED6   = 14,
  SDL_LOG_CATEGORY_RESERVED7   = 15,
  SDL_LOG_CATEGORY_RESERVED8   = 16,
  SDL_LOG_CATEGORY_RESERVED9   = 17,
  SDL_LOG_CATEGORY_RESERVED10  = 18,
  SDL_LOG_CATEGORY_CUSTOM      = 19
}

/**
 * log 优先级
 */
export enum LogCritical {
  SDL_LOG_PRIORITY_VERBOSE  = 1,
  SDL_LOG_PRIORITY_DEBUG    = 2,
  SDL_LOG_PRIORITY_INFO     = 3,
  SDL_LOG_PRIORITY_WARN     = 4,
  SDL_LOG_PRIORITY_ERROR    = 5,
  SDL_LOG_PRIORITY_CRITICAL = 6,
  SDL_NUM_LOG_PRIORITIES    = 7
}

let lib = Object.create(null);
library({
  SDL_Log:         [types.void, [types.CString]],
  SDL_LogCritical: [types.void, [types.int32, types.CString]],
  SDL_LogDebug:    [types.void, [types.int32, types.CString]],
  SDL_LogError:    [types.void, [types.int32, types.CString]]，
  SDL_LogInfo:     [types.void, [types.int32, types.CString]],
  SDL_LogSetOutputFunction: [types.void, [SDL_LogOutputFunction, ref.refType(types.void)]], // ref.refType(types.void) = void 类型的指针
}, lib);

export function log(message: string): void {
  lib.SDL_Log(message);
}

export function logCritial(category: LogCritical, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogCritical(category, message);
}

export function logDebug(category: LogCritical, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogCritical(category, message);
}

export function logError(category: LogCritical, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogError(category, message);
}

export function logInfo(category: LogCritical, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogInfo(category, message);
}