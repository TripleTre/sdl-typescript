import {library} from '../util/ffi';
import * as ffi from 'ffi';
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

let SDL_LogOutputFunction = ffi.Function(types.void, [ref.refType(types.void), types.int32, types.uint32, types.CString]);
let SDL_LogOutputFunction_P = ref.refType(SDL_LogOutputFunction);

let lib: any = {};
library({
  SDL_Log:                  [types.void, [types.CString]],
  SDL_LogCritical:          [types.void, [types.int32, types.CString]],
  SDL_LogDebug:             [types.void, [types.int32, types.CString]],
  SDL_LogError:             [types.void, [types.int32, types.CString]],
  SDL_LogGetOutputFunction: [types.void, [SDL_LogOutputFunction_P, ref.refType(types.void_p)]],
  SDL_LogGetPriority:       [types.uint32, [types.int32]],
  SDL_LogInfo:              [types.void, [types.int32, types.CString]],
  SDL_LogSetOutputFunction: [types.void, [SDL_LogOutputFunction, types.void_p]],
  SDL_LogMessage:           [types.void, [types.int32, types.uint32, types.CString]],
  SDL_LogResetPriorities:   [types.void, []],
  SDL_LogSetAllPriority:    [types.void, [types.uint32]],
  SDL_LogSetPriority:       [types.void, [types.int32, types.uint32]],
  SDL_LogVerbose:           [types.void, [types.int32, types.CString]],
  SDL_LogWarn:              [types.void, [types.int32, types.CString]]
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

/**
 * 自定义 log 方法。
 * @param {callback} 自定义的 log 方法， 回调函数的第一个参数是一个空指针，第二个参数是消息类别，
 *                   第三个参数是消息优先级， 第四个参数是消息体。
 */
export function setOutputFunction(callback: Function): void {
  let cb = SDL_LogOutputFunction.toPointer(callback);
  lib.SDL_LogSetOutputFunction(cb, null);
}

export function getOutputFunction(): Function {
  let ret = SDL_LogOutputFunction.toPointer(function() {});
  lib.SDL_LogGetOutputFunction(ret, null);
  return SDL_LogOutputFunction.toFunction(ret);
}

/**
 * 返回对应 log 种类的默认优先级。
 */
export function getPriority(category: LogCategory): LogCritical {
  return lib.SDL_LogGetPriority(category);
}

export function logMessage(category: LogCategory, priority: LogCritical, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogMessage(category, priority, message);
}

/**
 * 重置各 log 种类默认的优先级。
 */
export function resetPriority(): void {
  lib.SDL_LogResetPriorities();
}

export function setAllPriority(priority: LogCritical): void {
  lib.SDL_LogSetAllPriority(priority);
}

export function logVerbose(category: LogCategory, message: string): void {
  message = ref.allocCString(message, 'utf8');
  lib.SDL_LogVerbose(category, message);
}

export function setPriority(category: LogCategory, priority: LogCritical): void {
  lib.SDL_LogSetPriority(category, priority);
}
