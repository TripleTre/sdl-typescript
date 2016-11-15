"use strict";
const struct_1 = require('../video/video/struct');
const ffi_1 = require('../util/ffi');
const types_1 = require('../types/types');
const Struct = require('ref-struct');
const ref = require('ref');
exports.Render_p = ref.refType(Struct({}));
(function (renderFlags) {
    /** The renderer is a software fallback */
    renderFlags[renderFlags["software"] = 1] = "software";
    /**< The renderer uses hardware acceleration */
    renderFlags[renderFlags["accelerated"] = 2] = "accelerated";
    /**< Present is synchronized with the refresh rate */
    renderFlags[renderFlags["presentSync"] = 4] = "presentSync";
    /**< The renderer supports rendering to texture */
    renderFlags[renderFlags["targetTexture"] = 8] = "targetTexture";
})(exports.renderFlags || (exports.renderFlags = {}));
var renderFlags = exports.renderFlags;
let lib = Object.create(null);
ffi_1.library({
    SDL_CreateRenderer: [exports.Render_p, [struct_1.Window_p, types_1.default.int, types_1.default.uint32]]
}, lib);
/**
 * 为窗口创建 2D 绘图环境.
 * @param {SdlWindow_t} window
 * @param {number} index the index of the rendering driver to initialize, or -1 to initialize the first one supporting the requested flags
 * @param {number} flags 0, or one or more SDL_RendererFlags OR'd together;
 */
function createRender(window, index, flags) {
    return lib.SDL_CreateRenderer(window, index, flags);
}
exports.createRender = createRender;
//# sourceMappingURL=index.js.map