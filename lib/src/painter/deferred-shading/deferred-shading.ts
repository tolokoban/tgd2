import { TgdContext } from "@tgd/context"
import type { TgdGeometry } from "@tgd/geometry"
import type { TgdMaterial } from "@tgd/material"
import { tgdCalcClamp } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import {
    ensureArray,
    webglBlendGet,
    webglBlendSet,
    webglCreateFramebuffer,
    webglCullGet,
    webglCullSet,
    webglDepthGet,
    webglDepthSet,
    webglLookup,
    webglPresetBlend,
    webglPresetCull,
    webglPresetDepth,
} from "@tgd/utils"
import { tgdMaterialApplyUniforms } from "../mesh/material-program"
import { TgdMeshTree, type TgdMeshTreeBatch } from "../mesh/tree"
import type { TgdMesh } from "../mesh/types"
import { TgdPainter } from "../painter"

/**
 * A {@link TgdMesh} with optional textures for the material parameters
 * written in {@link TgdPainterDeferredShading.textureMetallicRoughnessSpecularBakedAO}.
 * The textures are read with the UV coordinates of the geometry.
 * Only one channel of each texture is used: RED by default, or the one given
 * by `metallicChannel`, `roughnessChannel`, `specularChannel` or `bakedAOChannel`.
 * For instance, a glTF `metallicRoughnessTexture` holds metallic in BLUE and roughness in GREEN:
 * ```ts
 * textures: {
 *     metallic: texture,
 *     metallicChannel: "b",
 *     roughness: texture,
 *     roughnessChannel: "g",
 * }
 * ```
 *
 * `normals` is a tangent space normal map (as glTF `normalTexture`): it bends the normals
 * written in {@link TgdPainterDeferredShading.textureNormals} to simulate bumps on the surface.
 * The TBN basis comes from the `attTangent` attribute of the geometry
 * (vec4, `bitangent = cross(normal, tangent.xyz) * tangent.w`).
 * If the geometry has no tangents, the basis is computed from the screen space derivatives
 * of the position and the UV coordinates.
 *
 * When a texture is missing, a default value is used:
 * - `metallic`: 0.0
 * - `roughness`: 0.5
 * - `specular`: 0.5
 * - `bakedAO`: 1.0
 *
 * `emission` is the RGBA color of the light emitted by the surface (as glTF `emissiveTexture`).
 * It is written as is in {@link TgdPainterDeferredShading.textureEmission},
 * or `(0, 0, 0, 1)` if missing.
 *
 * Unlike `material`, the textures are not inherited by the children.
 */
export interface TgdMeshWithTextures extends TgdMesh {
    children?: TgdMeshWithTextures[]
    textures?: Partial<{
        normals: TgdTexture2D
        metallic: TgdTexture2D
        metallicChannel: "r" | "g" | "b" | "a"
        roughness: TgdTexture2D
        roughnessChannel: "r" | "g" | "b" | "a"
        specular: TgdTexture2D
        specularChannel: "r" | "g" | "b" | "a"
        bakedAO: TgdTexture2D
        bakedAOChannel: "r" | "g" | "b" | "a"
        emission: TgdTexture2D
    }>
}

export interface TgdPainterDeferredShadingOptions {
    /**
     * Meshes to paint.
     * `children`, `visible` and `material` work like in {@link TgdPainterMeshes}:
     * a mesh without `material` uses the one of its closest ancestor,
     * and it is not painted if there is none.
     *
     * The optional `textures` of a mesh fill
     * {@link TgdPainterDeferredShading.textureMetallicRoughnessSpecularBakedAO}
     * and {@link TgdPainterDeferredShading.textureEmission}.
     */
    meshes?: TgdMeshWithTextures[]
    /**
     * If not `false`, {@link TgdPainterDeferredShading.textureIDs} is filled
     * with the `id` of the meshes in a second pass.
     * The pass can be switched on/off at runtime with
     * {@link TgdPainterDeferredShading.enableIDs}.
     *
     * By default the resolution of `textureIDs` is 1.
     * But that can be changed by using a number here.
     * For instance, `enableIDs: 1/4` will create a texture
     * with a width and a height divided by 4 compared to
     * `textureAlbedo`.
     *
     * Default to **false**
     */
    enableIDs?: boolean | number
}

/** Order of the material parameters in the channels of `textureMetallicRoughnessSpecularBakedAO`. */
const PARAMS = ["metallic", "roughness", "specular", "bakedAO"] as const
/** Values used when a mesh has no texture for a parameter. */
const DEFAULT_PARAMS = [0, 0.5, 0.5, 1] as const
/** Sampler names of the parameters textures, in the order of `PARAMS`. */
const PARAMS_SAMPLERS = [
    "uniDeferredShading_Metallic",
    "uniDeferredShading_Roughness",
    "uniDeferredShading_Specular",
    "uniDeferredShading_BakedAO",
] as const

/** Sampler name of the normal map. */
const NORMALS_SAMPLER = "uniDeferredShading_Normals"
/** Sampler name of the emission texture. */
const EMISSION_SAMPLER = "uniDeferredShading_Emission"
/** Value used when a mesh has no emission texture. */
const DEFAULT_EMISSION = [0, 0, 0, 1] as const
/** Number of texture units used by the textures of a mesh: the parameters, the normal map and the emission. */
const TEXTURE_UNITS_COUNT = PARAMS.length + 2
/** Sampler name of the depth texture in the IDs pass. */
const IDS_DEPTH_SAMPLER = "uniDeferredShading_Depth"

/**
 * Framebuffer that holds the surface normals, the depth, the albedo and the material parameters
 * of meshes seen from the camera of the context, to be used for deferred shading.
 * The results are stored in {@link TgdPainterDeferredShading.textureNormals},
 * {@link TgdPainterDeferredShading.textureDepth}, {@link TgdPainterDeferredShading.textureAlbedo},
 * {@link TgdPainterDeferredShading.textureMetallicRoughnessSpecularBakedAO}
 * and {@link TgdPainterDeferredShading.textureEmission}.
 * The five textures are rendered in a single pass.
 * The size of the textures follows the size of the context.
 *
 * If {@link TgdPainterDeferredShading.enableIDs} is `true`, a second pass writes
 * the `id` of the meshes in {@link TgdPainterDeferredShading.textureIDs}.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [suzanne] })
 * context.add(deferred, new TgdPainterProgram(context, {
 *     textures: {
 *         uniNormals: deferred.textureNormals,
 *         uniDepth: deferred.textureDepth,
 *         uniAlbedo: deferred.textureAlbedo,
 *         uniMaterial: deferred.textureMetallicRoughnessSpecularBakedAO,
 *     },
 *     ...
 * }))
 * ```
 *
 * @see {@link TgdPainterDeferredShadingOptions}
 */
export class TgdPainterDeferredShading extends TgdPainter {
    /**
     * If `true`, the `id` of the meshes is written in {@link TgdPainterDeferredShading.textureIDs}
     * in a second pass. You can switch it on/off at runtime.
     *
     * Initialized with the `enableIDs` option.
     */
    public enableIDs: boolean
    /**
     * Ratio between the size of {@link TgdPainterDeferredShading.textureIDs}
     * and the size of the other textures.
     *
     * Initialized with the `enableIDs` option when it is a number, 1 otherwise.
     */
    public resolutionIDs: number
    /**
     * Holds the `id` of the meshes (`R32UI`).
     * Cleared with 0.
     *
     * Only the meshes with an `id` greater than 0 are painted, in a second pass
     * that is done only if {@link TgdPainterDeferredShading.enableIDs} is `true`
     * and at least one mesh has such an `id`.
     * The meshes without `id` still hide the ones behind them,
     * because the pass is tested against {@link TgdPainterDeferredShading.textureDepth}.
     * The materials are ignored in this pass:
     * a material that moves the vertices will give wrong IDs.
     *
     * Its size is the one of the context multiplied by {@link TgdPainterDeferredShading.resolutionIDs}.
     * Read it with a `usampler2D` and `texelFetch()`.
     */
    public readonly textureIDs: TgdTexture2D
    /**
     * Surface normals in the camera space (`RGB10_A2`).
     * The normal `N` is encoded as `N * 0.5 + 0.5` in the RGB channels,
     * so decode it with `texture(...).xyz * 2.0 - 1.0`.
     * The alpha channel is 1 where a mesh has been painted, and 0 elsewhere.
     *
     * If a mesh has a `normals` texture (see {@link TgdMeshWithTextures}),
     * the normals are bent by this normal map.
     *
     * Its size is the one of the context.
     */
    public readonly textureNormals: TgdTexture2D
    /**
     * Depth buffer (`DEPTH_COMPONENT24`) used for the depth test of this pass.
     * It holds the window depth of the nearest fragment, between 0 (near plane) and 1 (far plane).
     * Texels where nothing has been painted hold 1.
     *
     * With a perspective camera, this depth is **not linear**.
     * To get the position in the camera space, unproject it with the inverse
     * of the projection matrix:
     * ```glsl
     * float depth = texture(uniDepth, uv).r;
     * vec4 p = uniProjectionMatrixInverse * vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
     * vec3 position = p.xyz / p.w;
     * ```
     *
     * Its size is the one of the context.
     * It uses `NEAREST` filtering, because depth textures cannot be linearly filtered.
     * Read it with a `sampler2D`: the depth is in the RED channel.
     */
    public readonly textureDepth: TgdTexture2D
    /**
     * Color of the meshes (`RGBA8`), as computed by their material.
     * Texels where nothing has been painted hold `(0, 0, 0, 0)`.
     *
     * The material is used as is: if it computes lighting (like `TgdMaterialDiffuse`),
     * the lighting will be in this texture. To get the pure albedo,
     * use an unlit material (like `TgdMaterialFlat` or `TgdMaterialFlatTexture`).
     * The WebGL state of the materials (depth, cull, blend…) is ignored.
     *
     * Its size is the one of the context.
     */
    public readonly textureAlbedo: TgdTexture2D
    /**
     * Material parameters (`RGBA8`), with the following channels:
     * - R: Metallic
     * - G: Roughness
     * - B: Specular
     * - A: Baked Ambient Occlusion
     *
     * They are read from one channel (RED by default) of the `textures` of each mesh
     * (see {@link TgdMeshWithTextures}), or take their default values
     * (0, 0.5, 0.5, 1) when a texture is missing.
     * Texels where nothing has been painted hold the default values too.
     *
     * Its size is the one of the context.
     */
    public readonly textureMetallicRoughnessSpecularBakedAO: TgdTexture2D
    /**
     * Color of the light emitted by the meshes (`RGBA8`).
     *
     * It is read from the `emission` texture of each mesh
     * (see {@link TgdMeshWithTextures}), or takes the default value
     * `(0, 0, 0, 1)` when the texture is missing.
     * Texels where nothing has been painted hold the default value too.
     *
     * Its size is the one of the context.
     */
    public readonly textureEmission: TgdTexture2D

    private readonly tree: TgdMeshTree
    private framebuffer: WebGLFramebuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
    /** Only the meshes with an `id` greater than 0. */
    private readonly treeIDs: TgdMeshTree
    private framebufferIDs: WebGLFramebuffer | null = null
    private framebufferIDsWidth = 0
    private framebufferIDsHeight = 0
    /** Bound instead of the missing textures of a mesh. */
    private readonly textureWhite: TgdTexture2D
    /**
     * The textures of the meshes use the last texture units,
     * to leave the first ones to the materials.
     */
    private readonly firstTextureUnit: number
    /** Values used to clear the textures. */
    private readonly clearNormals = new Float32Array(4)
    private readonly clearAlbedo = new Float32Array(4)
    private readonly clearParams = new Float32Array(DEFAULT_PARAMS)
    private readonly clearEmission = new Float32Array(DEFAULT_EMISSION)
    private readonly clearDepth = new Float32Array([1])
    private readonly clearIDs = new Uint32Array(1)
    /** Integer framebuffers can only be read as `RGBA_INTEGER`. */
    private readonly readIDPixel = new Uint32Array(4)
    /** 1 for each parameter that has a texture in the current mesh, reused to avoid allocations. */
    private readonly hasTexture = [0, 0, 0, 0]
    /** Arguments of the current `paint()`, used by `handleBatch()`. */
    private time = 0
    private delta = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterDeferredShadingOptions = {},
    ) {
        super()
        const { gl } = context
        const { enableIDs = false } = options
        this.enableIDs = enableIDs !== false
        this.resolutionIDs = typeof enableIDs === "number" ? enableIDs : 1
        this.firstTextureUnit = (gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS) as number) - TEXTURE_UNITS_COUNT
        this.textureWhite = new TgdTexture2D(context, {
            name: `${this.name}/textureWhite`,
            color: [1, 1, 1, 1],
        })
        this.textureNormals = new TgdTexture2D(context, {
            name: `${this.name}/textureNormals`,
            storage: {
                format: "RGB10_A2 / RGBA / UNSIGNED_INT_2_10_10_10_REV",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureDepth = new TgdTexture2D(context, {
            name: `${this.name}/textureDepth`,
            storage: {
                format: "DEPTH_COMPONENT24 / DEPTH_COMPONENT / UNSIGNED_INT",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureAlbedo = new TgdTexture2D(context, {
            name: `${this.name}/textureAlbedo`,
            storage: {
                format: "RGBA8 / RGBA / UNSIGNED_BYTE",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureMetallicRoughnessSpecularBakedAO = new TgdTexture2D(context, {
            name: `${this.name}/textureMetallicRoughnessSpecularBakedAO`,
            storage: {
                format: "RGBA8 / RGBA / UNSIGNED_BYTE",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureEmission = new TgdTexture2D(context, {
            name: `${this.name}/textureEmission`,
            storage: {
                format: "RGBA8 / RGBA / UNSIGNED_BYTE",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.textureIDs = new TgdTexture2D(context, {
            name: `${this.name}/textureIDs`,
            storage: {
                format: "R32UI / RED_INTEGER / UNSIGNED_INT",
            },
            // Integer textures cannot be linearly filtered.
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
                wrapR: "CLAMP_TO_EDGE",
            },
        })
        this.tree = new TgdMeshTree(context, {
            meshes: options.meshes,
            // The channels read in the textures are part of the shader code.
            programKey: (geometry, mesh: TgdMeshWithTextures) =>
                `${geometry.attPosition}/${geometry.attNormal}/${geometry.attTangent}/${geometry.attUV}/${getChannels(mesh)}`,
            createProgram: (geometry, material, mesh: TgdMeshWithTextures) => {
                if (!material)
                    throw new Error("[TgdPainterDeferredShading] A material is required to create a program!")

                return createProgram(context.gl, geometry, material, getChannels(mesh))
            },
            beforeDraw: this.handleBeforeDraw,
        })
        this.treeIDs = new TgdMeshTree(context, {
            meshes: options.meshes,
            ignoreMaterials: true,
            programKey: (geometry) => geometry.attPosition,
            createProgram: (geometry) => createProgramIDs(context.gl, geometry),
            beforeDraw: this.handleBeforeDrawIDs,
            filter: hasID,
        })
    }

    add(mesh: TgdMeshWithTextures) {
        this.tree.add(mesh)
        this.treeIDs.add(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `paint()`.
     */
    remove(mesh: TgdMeshWithTextures) {
        this.tree.remove(mesh)
        this.treeIDs.remove(mesh)
    }

    paint(time: number, delta: number): void {
        this.time = time
        this.delta = delta
        this.tree.update()
        const { context } = this
        const { gl } = context
        const width = Math.max(1, Math.round(context.width))
        const height = Math.max(1, Math.round(context.height))
        const framebuffer = this.updateFramebuffer(width, height)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)
        context.paintInCustomSize(width, height, this.paintMeshes)
        if (this.enableIDs) this.paintIDs(width, height)
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    /**
     * Read the `id` of the mesh painted at a point of the screen, for object picking.
     * Coordinates are the ones of the pointer events: between -1 and +1, with Y going up.
     *
     * The value comes from the last `paint()`. Reading it stalls the GPU pipeline,
     * so avoid calling this method many times per frame.
     *
     * @returns The `id` of the mesh, or 0 if there is none or if
     * {@link TgdPainterDeferredShading.enableIDs} is `false`.
     */
    readID(xScreen: number, yScreen: number): number {
        const { framebufferIDs, framebufferIDsWidth, framebufferIDsHeight, readIDPixel } = this
        if (!this.enableIDs || !framebufferIDs) return 0

        const { gl } = this.context
        const pixelX = tgdCalcClamp(Math.floor(0.5 * (xScreen + 1) * framebufferIDsWidth), 0, framebufferIDsWidth - 1)
        const pixelY = tgdCalcClamp(Math.floor(0.5 * (yScreen + 1) * framebufferIDsHeight), 0, framebufferIDsHeight - 1)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferIDs)
        gl.readPixels(pixelX, pixelY, 1, 1, gl.RGBA_INTEGER, gl.UNSIGNED_INT, readIDPixel)
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
        return readIDPixel[0]
    }

    /**
     * Second pass: write the `id` of the meshes in `textureIDs`.
     */
    private paintIDs(width: number, height: number) {
        this.treeIDs.update()
        const { context } = this
        const { gl } = context
        const widthIDs = Math.max(1, Math.round(width * this.resolutionIDs))
        const heightIDs = Math.max(1, Math.round(height * this.resolutionIDs))
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.updateFramebufferIDs(widthIDs, heightIDs))
        context.paintInCustomSize(widthIDs, heightIDs, this.paintMeshesIDs)
    }

    private readonly paintMeshesIDs = () => {
        const { context, treeIDs } = this
        const { gl } = context
        gl.clearBufferuiv(gl.COLOR, 0, this.clearIDs)
        if (treeIDs.count === 0) return

        const previousDepth = webglDepthGet(context)
        const previousCull = webglCullGet(context)
        const previousBlend = webglBlendGet(context)
        // The depth test is done in the fragment shader, against `textureDepth`.
        webglDepthSet(context, webglPresetDepth.off)
        webglCullSet(context, webglPresetCull.back)
        webglBlendSet(context, webglPresetBlend.off)
        treeIDs.forEachBatch(this.handleBatchIDs)
        webglDepthSet(context, previousDepth)
        webglCullSet(context, previousCull)
        webglBlendSet(context, previousBlend)
    }

    private readonly handleBatchIDs = (batch: TgdMeshTreeBatch) => {
        const { context, textureDepth, textureIDs } = this
        const { camera } = context
        const { program } = batch
        program.use()
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        program.uniform2f(
            "uniDeferredShading_Scale",
            textureDepth.width / textureIDs.width,
            textureDepth.height / textureIDs.height,
        )
        textureDepth.activate(0, program, IDS_DEPTH_SAMPLER)
        batch.draw()
    }

    private readonly handleBeforeDrawIDs = (mesh: TgdMesh, program: TgdProgram) => {
        program.uniform1ui("uniDeferredShading_ID", mesh.id ?? 0)
    }

    private readonly paintMeshes = () => {
        const { context, clearNormals, clearAlbedo, clearParams, clearEmission, clearDepth } = this
        const { gl } = context
        const previousDepth = webglDepthGet(context)
        const previousCull = webglCullGet(context)
        const previousBlend = webglBlendGet(context)
        webglDepthSet(context, webglPresetDepth.less)
        webglCullSet(context, webglPresetCull.back)
        // The alpha channels hold data, not opacity.
        webglBlendSet(context, webglPresetBlend.off)
        gl.clearBufferfv(gl.COLOR, 0, clearNormals)
        gl.clearBufferfv(gl.COLOR, 1, clearAlbedo)
        gl.clearBufferfv(gl.COLOR, 2, clearParams)
        gl.clearBufferfv(gl.COLOR, 3, clearEmission)
        gl.clearBufferfv(gl.DEPTH, 0, clearDepth)
        this.tree.forEachBatch(this.handleBatch)
        webglDepthSet(context, previousDepth)
        webglCullSet(context, previousCull)
        webglBlendSet(context, previousBlend)
    }

    private readonly handleBatch = (batch: TgdMeshTreeBatch) => {
        const { context, time, delta } = this
        const { camera } = context
        const { program, material } = batch
        if (!material) return

        program.use()
        tgdMaterialApplyUniforms(material, context, program, time, delta)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        batch.draw()
    }

    /**
     * Bind the textures of the mesh, or a white texture and a default value for the missing ones.
     * The normal map and the emission use the last texture units.
     */
    private readonly handleBeforeDraw = (mesh: TgdMeshWithTextures, program: TgdProgram) => {
        const { textureWhite, firstTextureUnit, hasTexture } = this
        const { textures } = mesh
        for (let index = 0; index < PARAMS.length; index++) {
            const texture = textures?.[PARAMS[index]]
            hasTexture[index] = texture ? 1 : 0
            const bound = texture ?? textureWhite
            bound.activate(firstTextureUnit + index, program, PARAMS_SAMPLERS[index])
        }
        program.uniform4f("uniDeferredShading_HasTexture", hasTexture[0], hasTexture[1], hasTexture[2], hasTexture[3])
        const normals = textures?.normals
        const boundNormals = normals ?? textureWhite
        boundNormals.activate(firstTextureUnit + PARAMS.length, program, NORMALS_SAMPLER)
        program.uniform1f("uniDeferredShading_HasNormals", normals ? 1 : 0)
        const emission = textures?.emission
        const boundEmission = emission ?? textureWhite
        boundEmission.activate(firstTextureUnit + PARAMS.length + 1, program, EMISSION_SAMPLER)
        program.uniform1f("uniDeferredShading_HasEmission", emission ? 1 : 0)
    }

    /**
     * (Re)create the framebuffer if the size has changed.
     */
    private updateFramebuffer(width: number, height: number): WebGLFramebuffer {
        const { framebuffer, framebufferWidth, framebufferHeight } = this
        if (framebuffer && width === framebufferWidth && height === framebufferHeight) return framebuffer

        this.deleteFramebuffer()
        const {
            context,
            textureNormals,
            textureDepth,
            textureAlbedo,
            textureMetallicRoughnessSpecularBakedAO,
            textureEmission,
        } = this
        const { gl } = context
        textureNormals.resize(width, height)
        textureDepth.resize(width, height)
        textureAlbedo.resize(width, height)
        textureMetallicRoughnessSpecularBakedAO.resize(width, height)
        textureEmission.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        textureNormals.attachToFramebuffer(gl.COLOR_ATTACHMENT0)
        textureAlbedo.attachToFramebuffer(gl.COLOR_ATTACHMENT1)
        textureMetallicRoughnessSpecularBakedAO.attachToFramebuffer(gl.COLOR_ATTACHMENT2)
        textureEmission.attachToFramebuffer(gl.COLOR_ATTACHMENT3)
        textureDepth.attachToFramebuffer(gl.DEPTH_ATTACHMENT)
        // The draw buffers are part of the framebuffer state.
        gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2, gl.COLOR_ATTACHMENT3])
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            context.console.error(`[TgdPainterDeferredShading] The framebuffer is incomplete: ${webglLookup(status)}!`)
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
        this.framebuffer = newFramebuffer
        this.framebufferWidth = width
        this.framebufferHeight = height
        return newFramebuffer
    }

    /**
     * (Re)create the framebuffer of the IDs pass if the size has changed.
     */
    private updateFramebufferIDs(width: number, height: number): WebGLFramebuffer {
        const { framebufferIDs, framebufferIDsWidth, framebufferIDsHeight } = this
        if (framebufferIDs && width === framebufferIDsWidth && height === framebufferIDsHeight) return framebufferIDs

        this.deleteFramebufferIDs()
        const { context, textureIDs } = this
        const { gl } = context
        textureIDs.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        textureIDs.attachToFramebuffer(gl.COLOR_ATTACHMENT0)
        gl.drawBuffers([gl.COLOR_ATTACHMENT0])
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
        if (status !== gl.FRAMEBUFFER_COMPLETE) {
            context.console.error(
                `[TgdPainterDeferredShading] The IDs framebuffer is incomplete: ${webglLookup(status)}!`,
            )
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
        this.framebufferIDs = newFramebuffer
        this.framebufferIDsWidth = width
        this.framebufferIDsHeight = height
        return newFramebuffer
    }

    private deleteFramebufferIDs() {
        const { gl } = this.context
        if (this.framebufferIDs) gl.deleteFramebuffer(this.framebufferIDs)
        this.framebufferIDs = null
        this.framebufferIDsWidth = 0
        this.framebufferIDsHeight = 0
    }

    private deleteFramebuffer() {
        const { gl } = this.context
        if (this.framebuffer) gl.deleteFramebuffer(this.framebuffer)
        this.framebuffer = null
        this.framebufferWidth = 0
        this.framebufferHeight = 0
    }

    delete() {
        this.tree.delete()
        this.treeIDs.delete()
        this.deleteFramebuffer()
        this.deleteFramebufferIDs()
        this.textureIDs.delete()
        this.textureNormals.delete()
        this.textureDepth.delete()
        this.textureAlbedo.delete()
        this.textureMetallicRoughnessSpecularBakedAO.delete()
        this.textureEmission.delete()
        this.textureWhite.delete()
    }
}

/**
 * Same shaders as `tgdMaterialCreateProgram()`, but the fragment shader
 * writes the normal (bent by the optional normal map), the material parameters
 * and the emission beside the color of the material.
 * Our varyings are prefixed with `varDeferredShading_` (and our uniforms with `uniDeferredShading_`)
 * to avoid collisions with the ones of the material.
 *
 * Warning: the attribute names of `material` are overwritten with the ones of `geometry`.
 */
function createProgram(
    gl: WebGL2RenderingContext,
    geometry: TgdGeometry,
    material: TgdMaterial,
    channels: string,
): TgdProgram {
    const [metallicChannel, roughnessChannel, specularChannel, bakedAOChannel] = channels
    const { attPosition, attNormal, attTangent, attUV } = geometry
    material.attPosition = attPosition
    material.attNormal = attNormal
    material.attTangent = attTangent
    material.attUV = attUV
    const varying = {
        ...material.varyings,
        varDeferredShading_Normal: "vec3",
        varDeferredShading_Tangent: "vec4",
        varDeferredShading_Position: "vec3",
        varDeferredShading_UV: "vec2",
    } as const
    const vert = new TgdShaderVertex({
        uniforms: {
            ...material.uniforms,
            uniTransfoMatrix: "mat4",
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4",
            uniMaterial_ScreenSize: "vec2",
        },
        attributes: {
            [attPosition]: "vec4",
            [attNormal]: "vec3",
            // `w` is the handedness of the TBN basis: bitangent = cross(normal, tangent.xyz) * tangent.w
            [attTangent]: "vec4",
            [attUV]: "vec2",
        },
        varying,
        functions: {
            ...material.extraVertexShaderFunctions,
            getPosition: [
                "vec4 getPosition(vec4 pos) {",
                [material.vertexShaderCodeForGetPosition ?? "return pos;"],
                "}",
            ],
            applyMaterial: [
                "void applyMaterial(vec3 position, vec3 normal, vec2 uv) {",
                [material.vertexShaderCode],
                "}",
            ],
        },
        mainCode: [
            "mat4 deferredShading_modelView = uniModelViewMatrix * uniTransfoMatrix;",
            `vec4 deferredShading_position = getPosition(${attPosition});`,
            "vec4 deferredShading_viewPosition = deferredShading_modelView * deferredShading_position;",
            `varDeferredShading_Normal = mat3(deferredShading_modelView) * ${attNormal};`,
            // Without tangent attribute, WebGL gives (0, 0, 0, 1).
            `varDeferredShading_Tangent = vec4(mat3(deferredShading_modelView) * ${attTangent}.xyz, ${attTangent}.w);`,
            "varDeferredShading_Position = deferredShading_viewPosition.xyz;",
            `varDeferredShading_UV = ${attUV}.xy;`,
            "gl_Position = uniProjectionMatrix * deferredShading_viewPosition;",
            `applyMaterial(deferredShading_position.xyz, ${attNormal}.xyz, ${attUV}.xy);`,
        ],
    })
    const frag = new TgdShaderFragment({
        header: ensureArray(material.fragmentShaderHeader),
        uniforms: {
            ...material.uniforms,
            uniMaterial_ScreenSize: "vec2",
            uniDeferredShading_HasTexture: "vec4",
            uniDeferredShading_Metallic: "sampler2D",
            uniDeferredShading_Roughness: "sampler2D",
            uniDeferredShading_Specular: "sampler2D",
            uniDeferredShading_BakedAO: "sampler2D",
            uniDeferredShading_HasNormals: "float",
            [NORMALS_SAMPLER]: "sampler2D",
            uniDeferredShading_HasEmission: "float",
            [EMISSION_SAMPLER]: "sampler2D",
        },
        varying,
        // The order of the outputs must match the color attachments of the framebuffer.
        outputs: {
            // COLOR_ATTACHMENT0 → `textureNormals` (RGB10_A2).
            // View space normal, bent by the optional normal map, packed from [-1, 1] to [0, 1]
            // in RGB (`N * 0.5 + 0.5`). Alpha is always 1.
            FragNormal: "vec4",
            // COLOR_ATTACHMENT1 → `textureAlbedo` (RGBA8).
            // Color of the surface, as returned by the `applyMaterial()` of the mesh's material.
            FragAlbedo: "vec4",
            // COLOR_ATTACHMENT2 → `textureMetallicRoughnessSpecularBakedAO` (RGBA8).
            // Material parameters in [0, 1]: R = metallic, G = roughness, B = specular, A = baked AO.
            // Each one comes from a channel of its texture, or falls back to `DEFAULT_PARAMS`.
            FragParams: "vec4",
            // COLOR_ATTACHMENT3 → `textureEmission` (RGBA8).
            // RGBA color of the light emitted by the surface, or `DEFAULT_EMISSION` (black) without texture.
            FragEmission: "vec4",
        },
        functions: {
            ...material.extraFragmentShaderFunctions,
            applyMaterial: ["vec4 applyMaterial() {", [material.fragmentShaderCode], "}"],
            deferredShading_getNormal: [
                "vec3 deferredShading_getNormal() {",
                [
                    "vec3 N = normalize(varDeferredShading_Normal);",
                    "if (uniDeferredShading_HasNormals < 0.5) return N;",
                    `vec3 bump = texture(${NORMALS_SAMPLER}, varDeferredShading_UV).xyz * 2.0 - 1.0;`,
                    // Derivatives are undefined in non-uniform control flow: compute them before the `if`.
                    "vec3 dp1 = dFdx(varDeferredShading_Position);",
                    "vec3 dp2 = dFdy(varDeferredShading_Position);",
                    "vec2 duv1 = dFdx(varDeferredShading_UV);",
                    "vec2 duv2 = dFdy(varDeferredShading_UV);",
                    "vec3 T = varDeferredShading_Tangent.xyz;",
                    "mat3 TBN;",
                    "if (dot(T, T) > 1e-8) {",
                    [
                        "T = normalize(T - N * dot(N, T));",
                        "vec3 B = cross(N, T) * varDeferredShading_Tangent.w;",
                        "TBN = mat3(T, B, N);",
                    ],
                    "} else {",
                    [
                        "// Cotangent frame from the screen space derivatives.",
                        "vec3 dp2perp = cross(dp2, N);",
                        "vec3 dp1perp = cross(N, dp1);",
                        "vec3 dpdu = dp2perp * duv1.x + dp1perp * duv2.x;",
                        "vec3 dpdv = dp2perp * duv1.y + dp1perp * duv2.y;",
                        "float scale = inversesqrt(max(1e-12, max(dot(dpdu, dpdu), dot(dpdv, dpdv))));",
                        "// glTF normal maps have +Y up, but the V coordinate goes down in the image.",
                        "TBN = mat3(dpdu * scale, -dpdv * scale, N);",
                    ],
                    "}",
                    "return normalize(TBN * bump);",
                ],
                "}",
            ],
        },
        mainCode: [
            // `applyMaterial()` can discard the fragment.
            "FragAlbedo = applyMaterial();",
            "FragNormal = vec4(deferredShading_getNormal() * 0.5 + 0.5, 1.0);",
            "vec4 deferredShading_params = vec4(",
            [
                `texture(uniDeferredShading_Metallic, varDeferredShading_UV).${metallicChannel},`,
                `texture(uniDeferredShading_Roughness, varDeferredShading_UV).${roughnessChannel},`,
                `texture(uniDeferredShading_Specular, varDeferredShading_UV).${specularChannel},`,
                `texture(uniDeferredShading_BakedAO, varDeferredShading_UV).${bakedAOChannel}`,
            ],
            ");",
            `FragParams = mix(vec4(${DEFAULT_PARAMS.map((value) => value.toFixed(1)).join(", ")}), deferredShading_params, uniDeferredShading_HasTexture);`,
            `FragEmission = mix(vec4(${DEFAULT_EMISSION.map((value) => value.toFixed(1)).join(", ")}), texture(${EMISSION_SAMPLER}, varDeferredShading_UV), uniDeferredShading_HasEmission);`,
        ],
    })
    if (material.debug) {
        vert.debug()
        frag.debug()
    }
    return new TgdProgram(gl, {
        vert: vert.code,
        frag: frag.code,
    })
}

/**
 * Program of the IDs pass: it writes the `uniDeferredShading_ID` of the mesh,
 * but only where the fragment is not behind `textureDepth`.
 * That way, meshes without `id` still hide the ones behind them.
 */
function createProgramIDs(gl: WebGL2RenderingContext, geometry: TgdGeometry): TgdProgram {
    const { attPosition } = geometry
    const vert = new TgdShaderVertex({
        uniforms: {
            uniTransfoMatrix: "mat4",
            uniModelViewMatrix: "mat4",
            uniProjectionMatrix: "mat4",
        },
        attributes: {
            [attPosition]: "vec4",
        },
        mainCode: [`gl_Position = uniProjectionMatrix * (uniModelViewMatrix * uniTransfoMatrix) * ${attPosition};`],
    })
    const frag = new TgdShaderFragment({
        // The default precision of integers is `mediump` in fragment shaders.
        header: ["precision highp int;"],
        uniforms: {
            uniDeferredShading_ID: "uint",
            // Size of `textureDepth` divided by the size of `textureIDs`.
            uniDeferredShading_Scale: "vec2",
            [IDS_DEPTH_SAMPLER]: "sampler2D",
        },
        outputs: {
            // COLOR_ATTACHMENT0 → `textureIDs` (R32UI).
            FragID: "uint",
        },
        mainCode: [
            `float depth = texelFetch(${IDS_DEPTH_SAMPLER}, ivec2(gl_FragCoord.xy * uniDeferredShading_Scale), 0).r;`,
            // The tolerance grows with the slope, because `textureDepth` may have another resolution.
            "if (gl_FragCoord.z > depth + fwidth(gl_FragCoord.z) + 1e-5) discard;",
            "FragID = uniDeferredShading_ID;",
        ],
    })
    return new TgdProgram(gl, {
        vert: vert.code,
        frag: frag.code,
    })
}

function hasID(mesh: TgdMesh): boolean {
    return (mesh.id ?? 0) > 0
}

/**
 * @returns The channels to read in the textures of the mesh, in the order of `PARAMS`.
 * For instance: `"bgrr"`.
 */
function getChannels(mesh: TgdMeshWithTextures): string {
    const { textures } = mesh
    if (!textures) return "rrrr"

    return `${textures.metallicChannel ?? "r"}${textures.roughnessChannel ?? "r"}${textures.specularChannel ?? "r"
        }${textures.bakedAOChannel ?? "r"}`
}
