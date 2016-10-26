"use strict";
const RefStruct = require('ref-struct');
const types_1 = require('../types/types');
const ffi_1 = require('../util/ffi');
const ffi = require('ffi');
const ref = require('ref');
(function (AssertState) {
    AssertState[AssertState["retry"] = 0] = "retry";
    AssertState[AssertState["break"] = 1] = "break";
    AssertState[AssertState["abort"] = 2] = "abort";
    AssertState[AssertState["ignore"] = 3] = "ignore";
    AssertState[AssertState["alwaysIgnore"] = 4] = "alwaysIgnore";
})(exports.AssertState || (exports.AssertState = {}));
var AssertState = exports.AssertState;
;
let assertData = RefStruct.struct({
    always_ignore: types_1.default.int,
    trigger_count: types_1.default.uint,
    condition: types_1.default.CString,
    filename: types_1.default.CString,
    linenum: types_1.default.int,
    function: types_1.default.CString,
    next: types_1.default.void_p
});
let SDL_AssertionHandler = ffi.Function(types_1.default.uint32, [ref.refType(assertData), types_1.default.void_p]);
let lib = Object.create(null);
ffi_1.library({
    // SDL_assert: [types.void, []],
    SDL_GetAssertionHandler: [SDL_AssertionHandler, []]
}, lib);
// export function assert(exp: bool): void {
//   lib.SDL_assert(exp);
// }
function getAssertionHandler() {
    return lib.SDL_GetAssertionHandler();
}
exports.getAssertionHandler = getAssertionHandler;
//# sourceMappingURL=sdl-assert.js.map