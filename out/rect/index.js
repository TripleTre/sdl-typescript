"use strict";
const Struct = require('ref-struct');
const types_1 = require('../types/types');
const ref = require('ref');
const ffi_1 = require('../util/ffi');
const ArrayType = require('ref-array');
exports.Rect_c = Struct({
    x: types_1.default.int,
    y: types_1.default.int,
    w: types_1.default.int,
    h: types_1.default.int
});
exports.Rect_p = ref.refType(exports.Rect_c);
exports.Point_c = Struct({
    x: types_1.default.int,
    y: types_1.default.int
});
exports.Point_p = ref.refType(exports.Point_c);
let lib = Object.create(null);
ffi_1.library({
    SDL_EnclosePoints: [types_1.default.int, [exports.Point_p, types_1.default.int, exports.Rect_p, exports.Rect_p]]
}, lib);
let Point_p_Array = ArrayType(exports.Point_p);
function enclosePoints(points, clip = null) {
    let count = points.length;
    exports.Point_c(points[0]);
    let points_p = new Point_p_Array(points.map(v => exports.Point_c(v)));
    let result = (new exports.Rect_c).ref();
    lib.SDL_EnclosePoints(points_p, count, clip, result);
    console.log(result);
}
exports.enclosePoints = enclosePoints;
//# sourceMappingURL=index.js.map