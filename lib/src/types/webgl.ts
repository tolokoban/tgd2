export type WebglType =
    | "BYTE"
    | "UNSIGNED_BYTE"
    | "SHORT"
    | "UNSIGNED_SHORT"
    | "UNSIGNED_SHORT_5_6_5"
    | "UNSIGNED_SHORT_5_5_5_1"
    | "UNSIGNED_SHORT_4_4_4_4"
    | "INT"
    | "UNSIGNED_INT"
    | "UNSIGNED_INT_5_9_9_9_REV"
    | "UNSIGNED_INT_2_10_10_10_REV"
    | "UNSIGNED_INT_10F_11F_11F_REV"
    | "UNSIGNED_INT_24_8"
    | "HALF_FLOAT"
    | "FLOAT"

export type WebglWrap = "REPEAT" | "CLAMP_TO_EDGE" | "MIRRORED_REPEAT"

export type WebglMinFilter =
    | "LINEAR"
    | "NEAREST"
    | "NEAREST_MIPMAP_NEAREST"
    | "LINEAR_MIPMAP_NEAREST"
    | "NEAREST_MIPMAP_LINEAR"
    | "LINEAR_MIPMAP_LINEAR"

export type WebglMagFilter = "LINEAR" | "NEAREST"

/** POINTS, LINE_STRIP, LINE_LOOP, LINES, TRIANGLE_FAN, TRIANGLE_STRIP or TRIANGLES. */
export type WebglDrawMode =
    | "POINTS"
    | "LINE_STRIP"
    | "LINE_LOOP"
    | "LINES"
    | "TRIANGLE_STRIP"
    | "TRIANGLE_FAN"
    | "TRIANGLES"

export type WebglImage =
    | ImageData
    | HTMLImageElement
    | HTMLCanvasElement
    | HTMLVideoElement
    | ImageBitmap

export function isWebglImage(data: unknown): data is WebglImage {
    return (
        data instanceof ImageData ||
        data instanceof HTMLImageElement ||
        data instanceof HTMLCanvasElement ||
        data instanceof HTMLVideoElement ||
        data instanceof ImageBitmap
    )
}

export type WebglDepthFunc =
    /** never pass */
    | "NEVER"
    /** pass if the incoming value is less than the depth buffer value */
    | "LESS"
    /** pass if the incoming value equals the depth buffer value */
    | "EQUAL"
    /** pass if the incoming value is less than or equal to the depth buffer value */
    | "LEQUAL"
    /** pass if the incoming value is greater than the depth buffer value */
    | "GREATER"
    /** pass if the incoming value is not equal to the depth buffer value */
    | "NOTEQUAL"
    /** pass if the incoming value is greater than or equal to the depth buffer value */
    | "GEQUAL"
    /** always pass */
    | "ALWAYS"

export enum WebglEnumDepthFunc {
    /** never pass */
    NEVER = WebGL2RenderingContext.NEVER,
    /** pass if the incoming value is less than the depth buffer value */
    LESS = WebGL2RenderingContext.LESS,
    /** pass if the incoming value equals the depth buffer value */
    EQUAL = WebGL2RenderingContext.EQUAL,
    /** pass if the incoming value is less than or equal to the depth buffer value */
    LEQUAL = WebGL2RenderingContext.LEQUAL,
    /** pass if the incoming value is greater than the depth buffer value */
    GREATER = WebGL2RenderingContext.GREATER,
    /** pass if the incoming value is not equal to the depth buffer value */
    NOTEQUAL = WebGL2RenderingContext.NOTEQUAL,
    /** pass if the incoming value is greater than or equal to the depth buffer value */
    GEQUAL = WebGL2RenderingContext.GEQUAL,
    /** always pass */
    ALWAYS = WebGL2RenderingContext.ALWAYS,
}

export type WebglBlendEquation =
    /**  source + destination (default value) */
    | "FUNC_ADD"
    /**  source - destination */
    | "FUNC_SUBTRACT"
    /**  destination - source */
    | "FUNC_REVERSE_SUBTRACT"
    /**  Minimum of source and destination */
    | "MIN"
    /**  Maximum of source and destination */
    | "MAX"

export enum WebglEnumBlendEquation {
    /**  source + destination (default value) */
    FUNC_ADD = WebGL2RenderingContext.FUNC_ADD,
    /**  source - destination */
    FUNC_SUBTRACT = WebGL2RenderingContext.FUNC_SUBTRACT,
    /**  destination - source */
    FUNC_REVERSE_SUBTRACT = WebGL2RenderingContext.FUNC_REVERSE_SUBTRACT,
    /**  Minimum of source and destination */
    MIN = WebGL2RenderingContext.MIN,
    /**  Maximum of source and destination */
    MAX = WebGL2RenderingContext.MAX,
}

export type WebglBlendFunc =
    /**
     * 0,0,0,0
     *
     * Multiplies all colors by 0.
     */
    | "ZERO"
    /**
     * 1,1,1,1
     *
     * Multiplies all colors by 1.
     */
    | "ONE"
    /**
     * RS, GS, BS, AS
     *
     * Multiplies all colors by the source colors.
     */
    | "SRC_COLOR"
    /**
     * 1-RS, 1-GS, 1-BS, 1-AS
     *
     * Multiplies all colors by 1 minus each source color.
     */
    | "ONE_MINUS_SRC_COLOR"
    /**
     * RD, GD, BD, AD
     *
     * Multiplies all colors by the destination color.
     */
    | "DST_COLOR"
    /**
     * 1-RD, 1-GD, 1-BD, 1-AD
     *
     * Multiplies all colors by 1 minus each destination color.
     */
    | "ONE_MINUS_DST_COLOR"
    /**
     * AS, AS, AS, AS
     *
     * Multiplies all colors by the source alpha value.
     */
    | "SRC_ALPHA"
    /**
     * 1-AS, 1-AS, 1-AS, 1-AS
     *
     * Multiplies all colors by 1 minus the source alpha value.
     */
    | "ONE_MINUS_SRC_ALPHA"
    /**
     * AD, AD, AD, AD
     *
     * Multiplies all colors by the destination alpha value.
     */
    | "DST_ALPHA"
    /**
     * 1-AD, 1-AD, 1-AD, 1-AD
     *
     * Multiplies all colors by 1 minus the destination alpha value.
     */
    | "ONE_MINUS_DST_ALPHA"
    /**
     * RC, GC, BC, AC
     *
     * Multiplies all colors by a constant color.
     */
    | "CONSTANT_COLOR"
    /**
     * 1-RC, 1-GC, 1-BC, 1-AC
     *
     * Multiplies all colors by 1 minus a constant color.
     */
    | "ONE_MINUS_CONSTANT_COLOR"
    /**
     * AC, AC, AC, AC
     *
     * Multiplies all colors by a constant alpha value.
     */
    | "CONSTANT_ALPHA"
    /**
     * 1-AC, 1-AC, 1-AC, 1-AC
     *
     * Multiplies all colors by 1 minus a constant alpha value.
     */
    | "ONE_MINUS_CONSTANT_ALPHA"
    /**
     * min(AS, 1 - AD), min(AS, 1 - AD), min(AS, 1 - AD), 1
     *
     * Multiplies the RGB colors by the smaller of either the source alpha value or the value of 1 minus the destination alpha value. The alpha value is multiplied by 1.
     */
    | "SRC_ALPHA_SATURATE"

export enum WebglEnumBlendFunc {
    /**
     * 0,0,0,0
     *
     * Multiplies all colors by 0.
     */
    ZERO = WebGL2RenderingContext.ZERO,
    /**
     * 1,1,1,1
     *
     * Multiplies all colors by 1.
     */
    ONE = WebGL2RenderingContext.ONE,
    /**
     * RS, GS, BS, AS
     *
     * Multiplies all colors by the source colors.
     */
    SRC_COLOR = WebGL2RenderingContext.SRC_COLOR,
    /**
     * 1-RS, 1-GS, 1-BS, 1-AS
     *
     * Multiplies all colors by 1 minus each source color.
     */
    ONE_MINUS_SRC_COLOR = WebGL2RenderingContext.ONE_MINUS_SRC_COLOR,
    /**
     * RD, GD, BD, AD
     *
     * Multiplies all colors by the destination color.
     */
    DST_COLOR = WebGL2RenderingContext.DST_COLOR,
    /**
     * 1-RD, 1-GD, 1-BD, 1-AD
     *
     * Multiplies all colors by 1 minus each destination color.
     */
    ONE_MINUS_DST_COLOR = WebGL2RenderingContext.ONE_MINUS_DST_COLOR,
    /**
     * AS, AS, AS, AS
     *
     * Multiplies all colors by the source alpha value.
     */
    SRC_ALPHA = WebGL2RenderingContext.SRC_ALPHA,
    /**
     * 1-AS, 1-AS, 1-AS, 1-AS
     *
     * Multiplies all colors by 1 minus the source alpha value.
     */
    ONE_MINUS_SRC_ALPHA = WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA,
    /**
     * AD, AD, AD, AD
     *
     * Multiplies all colors by the destination alpha value.
     */
    DST_ALPHA = WebGL2RenderingContext.DST_ALPHA,
    /**
     * 1-AD, 1-AD, 1-AD, 1-AD
     *
     * Multiplies all colors by 1 minus the destination alpha value.
     */
    ONE_MINUS_DST_ALPHA = WebGL2RenderingContext.ONE_MINUS_DST_ALPHA,
    /**
     * RC, GC, BC, AC
     *
     * Multiplies all colors by a constant color.
     */
    CONSTANT_COLOR = WebGL2RenderingContext.CONSTANT_COLOR,
    /**
     * 1-RC, 1-GC, 1-BC, 1-AC
     *
     * Multiplies all colors by 1 minus a constant color.
     */
    ONE_MINUS_CONSTANT_COLOR = WebGL2RenderingContext.ONE_MINUS_CONSTANT_COLOR,
    /**
     * AC, AC, AC, AC
     *
     * Multiplies all colors by a constant alpha value.
     */
    CONSTANT_ALPHA = WebGL2RenderingContext.CONSTANT_ALPHA,
    /**
     * 1-AC, 1-AC, 1-AC, 1-AC
     *
     * Multiplies all colors by 1 minus a constant alpha value.
     */
    ONE_MINUS_CONSTANT_ALPHA = WebGL2RenderingContext.ONE_MINUS_CONSTANT_ALPHA,
    /**
     * min(AS, 1 - AD), min(AS, 1 - AD), min(AS, 1 - AD), 1
     *
     * Multiplies the RGB colors by the smaller of either the source alpha value or the value of 1 minus the destination alpha value. The alpha value is multiplied by 1.
     */
    SRC_ALPHA_SATURATE = WebGL2RenderingContext.SRC_ALPHA_SATURATE,
}

export enum WebglEnumStencilFunction {
    /** Never pass. */
    NEVER = WebGL2RenderingContext.NEVER,
    /** Pass if (ref & mask) < (stencil & mask). */
    LESS = WebGL2RenderingContext.LESS,
    /** Pass if (ref & mask) = (stencil & mask). */
    EQUAL = WebGL2RenderingContext.EQUAL,
    /** Pass if (ref & mask) <= (stencil & mask). */
    LEQUAL = WebGL2RenderingContext.LEQUAL,
    /** Pass if (ref & mask) > (stencil & mask). */
    GREATER = WebGL2RenderingContext.GREATER,
    /** Pass if (ref & mask) !== (stencil & mask). */
    NOTEQUAL = WebGL2RenderingContext.NOTEQUAL,
    /** Pass if (ref & mask) >= (stencil & mask). */
    GEQUAL = WebGL2RenderingContext.GEQUAL,
    /** Always pass. */
    ALWAYS = WebGL2RenderingContext.ALWAYS,
}

export enum WebglEnumStencilOperation {
    /** Keeps the current value. */
    KEEP = WebGL2RenderingContext.KEEP,
    /** Sets the stencil buffer value to 0. */
    ZERO = WebGL2RenderingContext.ZERO,
    /** Sets the stencil buffer value to the reference value as specified by WebGLRenderingContext.stencilFunc(). */
    REPLACE = WebGL2RenderingContext.REPLACE,
    /** Increments the current stencil buffer value. Clamps to the maximum representable unsigned value. */
    INCR = WebGL2RenderingContext.INCR,
    /** Increments the current stencil buffer value. Wraps stencil buffer value to zero when incrementing the maximum representable unsigned value. */
    INCR_WRAP = WebGL2RenderingContext.INCR_WRAP,
    /** Decrements the current stencil buffer value. Clamps to 0. */
    DECR = WebGL2RenderingContext.DECR,
    /** Decrements the current stencil buffer value. Wraps stencil buffer value to the maximum representable unsigned value when decrementing a stencil buffer value of 0. */
    DECR_WRAP = WebGL2RenderingContext.DECR_WRAP,
    /** Inverts the current stencil buffer value bitwise. */
    INVERT = WebGL2RenderingContext.INVERT,
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
 */
export type WebglTextureInternalFormatForImage =
    | "RGB"
    | "RGBA"
    | "ALPHA"
    | "LUMINANCE"
    | "LUMINANCE_ALPHA"

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
 */
export type WebglTextureInternalFormatForData =
    | "R8"
    | "R8_SNORM"
    | "RG8"
    | "RG8_SNORM"
    | "RGB8"
    | "RGB8_SNORM"
    | "RGB565"
    | "RGBA4"
    | "RGB5_A1"
    | "RGBA8"
    | "RGBA8_SNORM"
    | "RGB10_A2"
    | "RGB10_A2UI"
    | "SRGB8"
    | "SRGB8_ALPHA8"
    | "R16F"
    | "RG16F"
    | "RGB16F"
    | "RGBA16F"
    | "R32F"
    | "RG32F"
    | "RGB32F"
    | "RGBA32F"
    | "R11F_G11F_B10F"
    | "RGB9_E5"
    | "R8I"
    | "R8UI"
    | "R16I"
    | "R16UI"
    | "R32I"
    | "R32UI"
    | "RG8I"
    | "RG8UI"
    | "RG16I"
    | "RG16UI"
    | "RG32I"
    | "RG32UI"
    | "RGB8I"
    | "RGB8UI"
    | "RGB16I"
    | "RGB16UI"
    | "RGB32I"
    | "RGB32UI"
    | "RGBA8I"
    | "RGBA8UI"
    | "RGBA16I"
    | "RGBA16UI"
    | "RGBA32I"
    | "RGBA32UI"

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
 */
export type WebglPixelStoreFormat =
    | "RGB"
    | "RGBA"
    | "R16F"
    | "RG16F"
    | "RGB16F"
    | "RGBA16F"
    | "LUMINANCE_ALPHA"
    | "ALPHA"
    | "LUMINANCE"
    | "DEPTH_COMPONENT"
    | "DEPTH_COMPONENT16"
    | "DEPTH_COMPONENT24"
    | "DEPTH_COMPONENT32F"

export type WebglPixelStorage2DArrayFormat =
    | "R8"
    | "R16F"
    | "R32F"
    | "R8UI"
    | "RG8"
    | "RG16F"
    | "RG32F"
    | "RG8UI"
    | "RGB8"
    | "SRGB8"
    | "RGB565"
    | "R11F_G11F_B10F"
    | "RGB9_E5"
    | "RGB16F"
    | "RGB32F"
    | "RGB8UI"
    | "RGBA8"
    | "SRGB8_ALPHA8"
    | "RGB5_A1"
    | "RGBA4"
    | "RGBA16F"
    | "RGBA32F"
    | "RGBA8UI"

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getTexParameter
 */
export type WebglTexParameter =
    | "TEXTURE_MAG_FILTER"
    | "TEXTURE_MIN_FILTER"
    | "TEXTURE_WRAP_S"
    | "TEXTURE_WRAP_T"
    | "TEXTURE_BASE_LEVEL"
    | "TEXTURE_COMPARE_FUNC"
    | "TEXTURE_COMPARE_MODE"
    | "TEXTURE_IMMUTABLE_FORMAT"
    | "TEXTURE_IMMUTABLE_LEVELS"
    | "TEXTURE_MAX_LEVEL"
    | "TEXTURE_MAX_LOD"
    | "TEXTURE_MIN_LOD"
    | "TEXTURE_WRAP_R"

export type WebglUniformType =
    | "sampler2D"
    | "sampler2DArray"
    | "sampler3D"
    | "samplerCube"
    | "bool"
    | "int"
    | "uint"
    | "float"
    | "double"
    | "vec2"
    | "bvec2"
    | "ivec2"
    | "uvec2"
    | "dvec2"
    | "vec3"
    | "bvec3"
    | "ivec3"
    | "uvec3"
    | "dvec3"
    | "vec4"
    | "bvec4"
    | "ivec4"
    | "uvec4"
    | "dvec4"
    | "mat2"
    | "mat3"
    | "mat4"

export type WebglAttributeType =
    | "bool"
    | "int"
    | "uint"
    | "float"
    | "double"
    | "vec2"
    | "bvec2"
    | "ivec2"
    | "uvec2"
    | "dvec2"
    | "vec3"
    | "bvec3"
    | "ivec3"
    | "uvec3"
    | "dvec3"
    | "vec4"
    | "bvec4"
    | "ivec4"
    | "uvec4"
    | "dvec4"
    | "mat2"
    | "mat3"
    | "mat4"

export enum WebglEnumCullFace {
    FRONT = WebGL2RenderingContext.FRONT,
    BACK = WebGL2RenderingContext.BACK,
    FRONT_AND_BACK = WebGL2RenderingContext.FRONT_AND_BACK,
}

export enum WebglEnumTex2DInternalFormat {
    /** : Discards the red, green and blue components and reads the alpha component. */
    ALPHA = WebGL2RenderingContext.ALPHA,
    /** : Discards the alpha components and reads the red, green and blue components. */
    RGB = WebGL2RenderingContext.RGB,
    /** : Red, green, blue and alpha components are read from the color buffer. */
    RGBA = WebGL2RenderingContext.RGBA,
    /** : Each color component is a luminance component, alpha is 1.0. */
    LUMINANCE = WebGL2RenderingContext.LUMINANCE,
    /** : Each component is a luminance/alpha component. */
    LUMINANCE_ALPHA = WebGL2RenderingContext.LUMINANCE_ALPHA,
}
