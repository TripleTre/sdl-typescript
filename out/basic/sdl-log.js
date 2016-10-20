"use strict";
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
const ref = require('ref');
/**
 * log 种类
 */
(function (LogCategory) {
    LogCategory[LogCategory["SDL_LOG_CATEGORY_APPLICATION"] = 0] = "SDL_LOG_CATEGORY_APPLICATION";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_ERROR"] = 1] = "SDL_LOG_CATEGORY_ERROR";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_ASSERT"] = 2] = "SDL_LOG_CATEGORY_ASSERT";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_SYSTEM"] = 3] = "SDL_LOG_CATEGORY_SYSTEM";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_AUDIO"] = 4] = "SDL_LOG_CATEGORY_AUDIO";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_VIDEO"] = 5] = "SDL_LOG_CATEGORY_VIDEO";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RENDER"] = 6] = "SDL_LOG_CATEGORY_RENDER";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_INPUT"] = 7] = "SDL_LOG_CATEGORY_INPUT";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_TEST"] = 8] = "SDL_LOG_CATEGORY_TEST";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED1"] = 9] = "SDL_LOG_CATEGORY_RESERVED1";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED2"] = 10] = "SDL_LOG_CATEGORY_RESERVED2";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED3"] = 11] = "SDL_LOG_CATEGORY_RESERVED3";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED4"] = 12] = "SDL_LOG_CATEGORY_RESERVED4";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED5"] = 13] = "SDL_LOG_CATEGORY_RESERVED5";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED6"] = 14] = "SDL_LOG_CATEGORY_RESERVED6";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED7"] = 15] = "SDL_LOG_CATEGORY_RESERVED7";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED8"] = 16] = "SDL_LOG_CATEGORY_RESERVED8";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED9"] = 17] = "SDL_LOG_CATEGORY_RESERVED9";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_RESERVED10"] = 18] = "SDL_LOG_CATEGORY_RESERVED10";
    LogCategory[LogCategory["SDL_LOG_CATEGORY_CUSTOM"] = 19] = "SDL_LOG_CATEGORY_CUSTOM";
})(exports.LogCategory || (exports.LogCategory = {}));
var LogCategory = exports.LogCategory;
/**
 * log 优先级
 */
(function (LogCritical) {
    LogCritical[LogCritical["SDL_LOG_PRIORITY_VERBOSE"] = 1] = "SDL_LOG_PRIORITY_VERBOSE";
    LogCritical[LogCritical["SDL_LOG_PRIORITY_DEBUG"] = 2] = "SDL_LOG_PRIORITY_DEBUG";
    LogCritical[LogCritical["SDL_LOG_PRIORITY_INFO"] = 3] = "SDL_LOG_PRIORITY_INFO";
    LogCritical[LogCritical["SDL_LOG_PRIORITY_WARN"] = 4] = "SDL_LOG_PRIORITY_WARN";
    LogCritical[LogCritical["SDL_LOG_PRIORITY_ERROR"] = 5] = "SDL_LOG_PRIORITY_ERROR";
    LogCritical[LogCritical["SDL_LOG_PRIORITY_CRITICAL"] = 6] = "SDL_LOG_PRIORITY_CRITICAL";
    LogCritical[LogCritical["SDL_NUM_LOG_PRIORITIES"] = 7] = "SDL_NUM_LOG_PRIORITIES";
})(exports.LogCritical || (exports.LogCritical = {}));
var LogCritical = exports.LogCritical;
let lib = Object.create(null);
ffi_1.library({
    SDL_Log: [types_1.default.void, [types_1.default.CString]],
    SDL_LogCritical: [types_1.default.void, [types_1.default.int32, types_1.default.CString]],
    SDL_LogDebug: [types_1.default.void, [types_1.default.int32, types_1.default.CString]],
    SDL_LogError: [types_1.default.void, [types_1.default.int32, types_1.default.CString]],
    SDL_LogInfo: [types_1.default.void, [types_1.default.int32, types_1.default.CString]],
    SDL_LogSetOutputFunction: [types_1.default.void, [SDL_LogOutputFunction, ref.refType(types_1.default.void)]],
}, lib);
function log(message) {
    lib.SDL_Log(message);
}
exports.log = log;
function logCritial(category, message) {
    message = ref.allocCString(message, 'utf8');
    lib.SDL_LogCritical(category, message);
}
exports.logCritial = logCritial;
function logDebug(category, message) {
    message = ref.allocCString(message, 'utf8');
    lib.SDL_LogCritical(category, message);
}
exports.logDebug = logDebug;
function logError(category, message) {
    message = ref.allocCString(message, 'utf8');
    lib.SDL_LogError(category, message);
}
exports.logError = logError;
function logInfo(category, message) {
    message = ref.allocCString(message, 'utf8');
    lib.SDL_LogInfo(category, message);
}
exports.logInfo = logInfo;
//# sourceMappingURL=sdl-log.js.map