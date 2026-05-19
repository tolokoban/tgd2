export class TgdExtensions {
    /**
     * Render to 32-bit float color buffers
     *
     * Enables rendering to textures with 32-bit floating-point components
     * (R32F, RG32F, RGBA32F, R16F, RG16F, RGBA16F) as color-renderable formats in framebuffers.
     */
    public readonly EXT_color_buffer_float: EXT_color_buffer_float | null
    /**
     * Render to 16-bit float color buffers
     *
     * Enables rendering to textures with 16-bit half-float components
     * (R16F, RG16F, RGBA16F) as color-renderable formats in framebuffers.
     */
    public readonly EXT_color_buffer_half_float: EXT_color_buffer_half_float | null
    /**
     * Blending with float textures
     *
     * Allows blending operations on framebuffer attachments that use
     * 32-bit or 16-bit floating-point formats. Without this extension,
     * blending is disabled when rendering to float targets.
     */
    public readonly EXT_float_blend: EXT_float_blend | null
    /**
     * BC6H/BC7 compressed texture formats
     *
     * Exposes BC6H (HDR) and BC7 (high-quality LDR) block compression
     * formats, commonly used on desktop GPUs for high-fidelity textures
     * with a fixed 8:1 compression ratio.
     */
    public readonly EXT_texture_compression_bptc: EXT_texture_compression_bptc | null
    /**
     * BC4/BC5 compressed texture formats
     *
     * Exposes BC4 (single-channel) and BC5 (two-channel) block compression
     * formats, ideal for normal maps and grayscale data where only one or
     * two components are needed.
     */
    public readonly EXT_texture_compression_rgtc: EXT_texture_compression_rgtc | null
    /**
     * Anisotropic texture filtering
     *
     * Improves texture quality at oblique viewing angles by sampling
     * more texels along the axis of maximum distortion. Controlled via
     * the TEXTURE_MAX_ANISOTROPY_EXT parameter on texture objects.
     */
    public readonly EXT_texture_filter_anisotropic: EXT_texture_filter_anisotropic | null
    /**
     * Non-blocking shader compilation status query
     *
     * Allows querying COMPLETION_STATUS_KHR to check if a shader or
     * program has finished compiling/linking without blocking the main
     * thread, enabling asynchronous shader pipelines.
     */
    public readonly KHR_parallel_shader_compile: KHR_parallel_shader_compile | null
    /**
     * Linear filtering for 32-bit float textures
     *
     * Enables LINEAR and LINEAR_MIPMAP_* filtering modes on textures
     * with 32-bit float components. Without this extension, only NEAREST
     * filtering is guaranteed for float textures.
     */
    public readonly OES_texture_float_linear: OES_texture_float_linear | null
    /**
     * Linear filtering for 16-bit half-float textures
     *
     * Enables LINEAR and LINEAR_MIPMAP_* filtering modes on textures
     * with 16-bit half-float components. Without this extension, only
     * NEAREST filtering is guaranteed for half-float textures.
     */
    public readonly OES_texture_half_float_linear: OES_texture_half_float_linear | null
    /**
     * Multi-view rendering for VR/AR
     *
     * Renders to multiple views (e.g. left/right eye) in a single draw
     * call using gl_ViewID_OVR in the shader, significantly reducing
     * CPU overhead for stereoscopic rendering.
     */
    public readonly OVR_multiview2: OVR_multiview2 | null
    /**
     * Render to 32-bit float color buffers (WebGL1 variant)
     *
     * WebGL1-era extension that enables float color-renderable formats.
     * In WebGL2 contexts, prefer EXT_color_buffer_float instead; this
     * is kept for broader compatibility.
     */
    public readonly WEBGL_color_buffer_float: WEBGL_color_buffer_float | null
    /**
     * ASTC compressed texture formats
     *
     * Exposes Adaptive Scalable Texture Compression with variable block
     * sizes (4x4 to 12x12), supporting LDR and HDR content. Widely
     * available on mobile GPUs (ARM Mali, Qualcomm Adreno).
     */
    public readonly WEBGL_compressed_texture_astc: WEBGL_compressed_texture_astc | null
    /**
     * ETC2/EAC compressed texture formats
     *
     * Exposes ETC2 (RGB/RGBA) and EAC (1-2 channel) compression formats
     * mandated by OpenGL ES 3.0. Guaranteed on conformant mobile GPUs
     * but may use software decompression on desktop.
     */
    public readonly WEBGL_compressed_texture_etc: WEBGL_compressed_texture_etc | null
    /**
     * ETC1 compressed texture format
     *
     * Exposes the legacy ETC1 RGB-only compression format. Superseded
     * by ETC2 but still useful for older Android devices that lack
     * OpenGL ES 3.0 support.
     */
    public readonly WEBGL_compressed_texture_etc1: WEBGL_compressed_texture_etc1 | null
    /**
     * PVRTC compressed texture formats (iOS)
     *
     * Exposes PowerVR Texture Compression (2bpp and 4bpp, RGB/RGBA)
     * used primarily on Apple iOS devices with Imagination Technologies
     * GPUs. Not available on most Android or desktop hardware.
     */
    public readonly WEBGL_compressed_texture_pvrtc: WEBGL_compressed_texture_pvrtc | null
    /**
     * S3TC/DXT compressed texture formats
     *
     * Exposes DXT1 (BC1), DXT3 (BC2), and DXT5 (BC3) block compression
     * formats. Ubiquitous on desktop GPUs (NVIDIA, AMD, Intel) but
     * rarely supported on mobile.
     */
    public readonly WEBGL_compressed_texture_s3tc: WEBGL_compressed_texture_s3tc | null
    /**
     * S3TC compressed textures with sRGB encoding
     *
     * Same as WEBGL_compressed_texture_s3tc but with sRGB color space
     * decoding, enabling hardware gamma-correct sampling without
     * manual conversion in the shader.
     */
    public readonly WEBGL_compressed_texture_s3tc_srgb: WEBGL_compressed_texture_s3tc_srgb | null
    /**
     * Expose GPU vendor/renderer strings
     *
     * Provides UNMASKED_VENDOR_WEBGL and UNMASKED_RENDERER_WEBGL
     * parameters for getParameter(), revealing the actual GPU driver
     * identity. Useful for analytics and GPU-specific workarounds.
     */
    public readonly WEBGL_debug_renderer_info: WEBGL_debug_renderer_info | null
    /**
     * Access translated shader source
     *
     * Exposes getTranslatedShaderSource() to retrieve the platform-
     * specific shader code (e.g. HLSL, Metal) that the driver actually
     * compiles, useful for debugging shader translation issues.
     */
    public readonly WEBGL_debug_shaders: WEBGL_debug_shaders | null
    /**
     * Simulate context loss/restore for testing
     *
     * Provides loseContext() and restoreContext() methods to manually
     * trigger WebGL context loss and restoration events, enabling
     * robust testing of resource recovery logic.
     */
    public readonly WEBGL_lose_context: WEBGL_lose_context | null
    /**
     * Batch multiple draw calls into one
     *
     * Provides multiDrawArrays and multiDrawElements to submit multiple
     * draw commands in a single API call, reducing driver overhead when
     * rendering many independent meshes with the same state.
     */
    public readonly WEBGL_multi_draw: WEBGL_multi_draw | null

    private readonly logs: [caption: string, styles: string[]][] = []

    constructor(public readonly gl: WebGL2RenderingContext) {
        this.EXT_color_buffer_float = this.activate("EXT_color_buffer_float") as EXT_color_buffer_float | null
        this.EXT_color_buffer_half_float = this.activate(
            "EXT_color_buffer_half_float",
        ) as EXT_color_buffer_half_float | null
        this.EXT_float_blend = this.activate("EXT_float_blend") as EXT_float_blend | null
        this.EXT_texture_compression_bptc = this.activate(
            "EXT_texture_compression_bptc",
        ) as EXT_texture_compression_bptc | null
        this.EXT_texture_compression_rgtc = this.activate(
            "EXT_texture_compression_rgtc",
        ) as EXT_texture_compression_rgtc | null
        this.EXT_texture_filter_anisotropic = this.activate(
            "EXT_texture_filter_anisotropic",
        ) as EXT_texture_filter_anisotropic | null
        this.KHR_parallel_shader_compile = this.activate(
            "KHR_parallel_shader_compile",
        ) as KHR_parallel_shader_compile | null
        this.OES_texture_float_linear = this.activate("OES_texture_float_linear") as OES_texture_float_linear | null
        this.OES_texture_half_float_linear = this.activate(
            "OES_texture_half_float_linear",
        ) as OES_texture_half_float_linear | null
        this.OVR_multiview2 = this.activate("OVR_multiview2") as OVR_multiview2 | null
        this.WEBGL_color_buffer_float = this.activate("WEBGL_color_buffer_float") as WEBGL_color_buffer_float | null
        this.WEBGL_compressed_texture_astc = this.activate(
            "WEBGL_compressed_texture_astc",
        ) as WEBGL_compressed_texture_astc | null
        this.WEBGL_compressed_texture_etc = this.activate(
            "WEBGL_compressed_texture_etc",
        ) as WEBGL_compressed_texture_etc | null
        this.WEBGL_compressed_texture_etc1 = this.activate(
            "WEBGL_compressed_texture_etc1",
        ) as WEBGL_compressed_texture_etc1 | null
        this.WEBGL_compressed_texture_pvrtc = this.activate(
            "WEBGL_compressed_texture_pvrtc",
        ) as WEBGL_compressed_texture_pvrtc | null
        this.WEBGL_compressed_texture_s3tc = this.activate(
            "WEBGL_compressed_texture_s3tc",
        ) as WEBGL_compressed_texture_s3tc | null
        this.WEBGL_compressed_texture_s3tc_srgb = this.activate(
            "WEBGL_compressed_texture_s3tc_srgb",
        ) as WEBGL_compressed_texture_s3tc_srgb | null
        this.WEBGL_debug_renderer_info = this.activate("WEBGL_debug_renderer_info") as WEBGL_debug_renderer_info | null
        this.WEBGL_debug_shaders = this.activate("WEBGL_debug_shaders") as WEBGL_debug_shaders | null
        this.WEBGL_lose_context = this.activate("WEBGL_lose_context") as WEBGL_lose_context | null
        this.WEBGL_multi_draw = this.activate("WEBGL_multi_draw") as WEBGL_multi_draw | null
    }

    activate(extensionName: string) {
        const ext = this.gl.getExtension(extensionName)
        this.logs.push([
            `WebGL2 extension %c${extensionName}%c: %c${ext ? "ENABLED" : "DISABLED"}`,
            ["font-weight:900", "font-weight:300", ext ? "color:#0f0" : "color:#f00"],
        ])
        return ext
    }

    debug() {
        for (const [caption, styles] of this.logs) {
            console.debug(caption, ...styles)
        }
    }
}
