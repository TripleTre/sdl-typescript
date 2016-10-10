"use strict";
const ref_struct_1 = require('ref-struct');
const types_1 = require('../../../types/types');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ref_struct_1.default({
    type: types_1.default.uint32,
    timestamp: types_1.default.uint32,
    windowID: types_1.default.uint32,
    event: types_1.default.uint8,
    padding1: types_1.default.uint8,
    padding2: types_1.default.uint8,
    padding3: types_1.default.uint8,
    data1: types_1.default.int32,
    data2: types_1.default.int32,
});
//# sourceMappingURL=WindowEventStruct.js.map