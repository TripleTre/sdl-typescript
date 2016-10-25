"use strict";
(function (GLAttr) {
    /**
     * the minimum number of bits for the red channel of the color buffer; defaults to 3
     */
    GLAttr[GLAttr["redSize"] = 0] = "redSize";
    /**
     * the minimum number of bits for the green channel of the color buffer; defaults to 3
     */
    GLAttr[GLAttr["greenSize"] = 1] = "greenSize";
    /**
     * the minimum number of bits for the blue channel of the color buffer; defaults to 2
     */
    GLAttr[GLAttr["blueSize"] = 2] = "blueSize";
    /**
     * the minimum number of bits for the alpha channel of the color buffer; defaults to 0
     */
    GLAttr[GLAttr["alphaSize"] = 3] = "alphaSize";
    /**
     * the minimum number of bits for frame buffer size; defaults to 0
     */
    GLAttr[GLAttr["bufferSize"] = 4] = "bufferSize";
    /**
     * whether the output is single or double buffered; defaults to double buffering on
     */
    GLAttr[GLAttr["doubleBuffer"] = 5] = "doubleBuffer";
    /**
     * the minimum number of bits in the depth buffer; defaults to 16
     */
    GLAttr[GLAttr["depthSize"] = 6] = "depthSize";
    /**
     * the minimum number of bits in the stencil buffer; defaults to 0
     */
    GLAttr[GLAttr["stencilSize"] = 7] = "stencilSize";
    /**
     * the minimum number of bits for the red channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumRedSize"] = 8] = "accumRedSize";
    /**
     * the minimum number of bits for the green channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumGreenSize"] = 9] = "accumGreenSize";
    /**
     * the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumBlueSize"] = 10] = "accumBlueSize";
    /**
     * the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0
     */
    GLAttr[GLAttr["accumAlpahSize"] = 11] = "accumAlpahSize";
    /**
     * whether the output is stereo 3D; defaults to off
     */
    GLAttr[GLAttr["stereo"] = 12] = "stereo";
    /**
     * the number of buffers used for multisample anti-aliasing(抗锯齿); defaults to 0; see Remarks for details
     */
    GLAttr[GLAttr["multisampleBuffers"] = 13] = "multisampleBuffers";
    /**
     * the number of samples used around the current pixel used for multisample anti-aliasing; defaults to 0; see Remarks for details
     */
    GLAttr[GLAttr["multisampleSamples"] = 14] = "multisampleSamples";
    /**
     * set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either
     */
    GLAttr[GLAttr["acceleratedVisual"] = 15] = "acceleratedVisual";
    /**
     * OpenGL context major version; see Remarks for details
     */
    GLAttr[GLAttr["contextMajorVersion"] = 17] = "contextMajorVersion";
    /**
     * OpenGL context minor version; see Remarks for details
     */
    GLAttr[GLAttr["contextMinorVersion"] = 18] = "contextMinorVersion";
    /**
     * some combination of 0 or more of elements of the SDL_GLcontextFlag enumeration; defaults to 0
     */
    GLAttr[GLAttr["contextFlags"] = 20] = "contextFlags";
    /**
     * type of GL context (Core, Compatibility, ES). See SDL_GLprofile; default value depends on platform
     */
    GLAttr[GLAttr["contextProfileMask"] = 21] = "contextProfileMask";
    /**
     * OpenGL context sharing; defaults to 0
     */
    GLAttr[GLAttr["shareWidthCurrentContext"] = 22] = "shareWidthCurrentContext";
    /**
     * requests sRGB capable visual; defaults to 0 (>= SDL 2.0.1)
     */
    GLAttr[GLAttr["frameBufferSPGBCapable"] = 23] = "frameBufferSPGBCapable";
    /**
     * sets context the release behavior; defaults to 1 (>= SDL 2.0.4)
     */
    GLAttr[GLAttr["contextReleaseBehavior"] = 24] = "contextReleaseBehavior";
})(exports.GLAttr || (exports.GLAttr = {}));
var GLAttr = exports.GLAttr;
//# sourceMappingURL=GLAttr.js.map