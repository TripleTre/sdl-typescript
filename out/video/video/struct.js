"use strict";
const Struct = require('ref-struct');
const types_1 = require('../../types/types');
const ref = require('ref');
exports.DisplayMode_c = Struct({
    format: types_1.default.uint32,
    w: types_1.default.int,
    h: types_1.default.int,
    refresh_rate: types_1.default.int,
    driverdata: types_1.default.void_p,
});
exports.DisplayMode_p = ref.refType(exports.DisplayMode_c);
//# sourceMappingURL=struct.js.map