export type WebglType = "UNSIGNED_BYTE" | "UNSIGNED_INT"

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

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
 */
export type WebglPixelStoreFormat =
    | "RGB"
    | "RGBA"
    | "LUMINANCE_ALPHA"
    | "ALPHA"
    | "LUMINANCE"
    | "DEPTH_COMPONENT"
    | "DEPTH_COMPONENT16"
    | "DEPTH_COMPONENT24"
    | "DEPTH_COMPONENT32F"

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
