import { TgdContext } from "@tgd/context"
import type { TgdGeometry } from "@tgd/geometry"
import type { TgdMaterial } from "@tgd/material"
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
 * written in {@link TgdPainterDeferredShadingTextures.textureMetallicRoughnessSpecularBakedAO}.
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
 * written in {@link TgdPainterDeferredShadingTextures.textureNormals} to simulate bumps on the surface.
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
    }>
}

export interface TgdPainterDeferredShadingTexturesOptions {
    /**
     * Meshes to paint.
     * `children`, `visible` and `material` work like in {@link TgdPainterMeshes}:
     * a mesh without `material` uses the one of its closest ancestor,
     * and it is not painted if there is none.
     *
     * The optional `textures` of a mesh fill
     * {@link TgdPainterDeferredShadingTextures.textureMetallicRoughnessSpecularBakedAO}.
     */
    meshes?: TgdMeshWithTextures[]
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
/** Number of texture units used by the textures of a mesh: the parameters and the normal map. */
const TEXTURE_UNITS_COUNT = PARAMS.length + 1

/**
 * Framebuffer that holds the surface normals, the depth, the albedo and the material parameters
 * of meshes seen from the camera of the context, to be used for deferred shading.
 * The results are stored in {@link TgdPainterDeferredShadingTextures.textureNormals},
 * {@link TgdPainterDeferredShadingTextures.textureDepth}, {@link TgdPainterDeferredShadingTextures.textureAlbedo}
 * and {@link TgdPainterDeferredShadingTextures.textureMetallicRoughnessSpecularBakedAO}.
 * The four textures are rendered in a single pass.
 * The size of the textures follows the size of the context.
 *
 * A mesh can have `children`. Their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `geometry` is not painted, but its children are.
 *
 * @example
 * ```ts
 * const deferred = new TgdPainterDeferredShading(context, { meshes: [suzanne] })
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
 * @see {@link TgdPainterDeferredShadingTexturesOptions}
 */
export class TgdPainterDeferredShadingTextures extends TgdPainter {
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

    private readonly tree: TgdMeshTree
    private framebuffer: WebGLFramebuffer | null = null
    private framebufferWidth = 0
    private framebufferHeight = 0
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
    private readonly clearDepth = new Float32Array([1])
    /** 1 for each parameter that has a texture in the current mesh, reused to avoid allocations. */
    private readonly hasTexture = [0, 0, 0, 0]
    /** Arguments of the current `paint()`, used by `handleBatch()`. */
    private time = 0
    private delta = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterDeferredShadingTexturesOptions = {},
    ) {
        super()
        const { gl } = context
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
    }

    add(mesh: TgdMeshWithTextures) {
        this.tree.add(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `paint()`.
     */
    remove(mesh: TgdMeshWithTextures) {
        this.tree.remove(mesh)
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
        gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer)
    }

    private readonly paintMeshes = () => {
        const { context, clearNormals, clearAlbedo, clearParams, clearDepth } = this
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
     * The normal map uses the last texture unit.
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
    }

    /**
     * (Re)create the framebuffer if the size has changed.
     */
    private updateFramebuffer(width: number, height: number): WebGLFramebuffer {
        const { framebuffer, framebufferWidth, framebufferHeight } = this
        if (framebuffer && width === framebufferWidth && height === framebufferHeight) return framebuffer

        this.deleteFramebuffer()
        const { context, textureNormals, textureDepth, textureAlbedo, textureMetallicRoughnessSpecularBakedAO } = this
        const { gl } = context
        textureNormals.resize(width, height)
        textureDepth.resize(width, height)
        textureAlbedo.resize(width, height)
        textureMetallicRoughnessSpecularBakedAO.resize(width, height)
        const newFramebuffer = webglCreateFramebuffer(gl)
        const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING) as WebGLFramebuffer | null
        gl.bindFramebuffer(gl.FRAMEBUFFER, newFramebuffer)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, textureNormals.glTexture, 0)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, textureAlbedo.glTexture, 0)
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT2,
            gl.TEXTURE_2D,
            textureMetallicRoughnessSpecularBakedAO.glTexture,
            0,
        )
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, textureDepth.glTexture, 0)
        // The draw buffers are part of the framebuffer state.
        gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2])
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

    private deleteFramebuffer() {
        const { gl } = this.context
        if (this.framebuffer) gl.deleteFramebuffer(this.framebuffer)
        this.framebuffer = null
        this.framebufferWidth = 0
        this.framebufferHeight = 0
    }

    delete() {
        this.tree.delete()
        this.deleteFramebuffer()
        this.textureNormals.delete()
        this.textureDepth.delete()
        this.textureAlbedo.delete()
        this.textureMetallicRoughnessSpecularBakedAO.delete()
        this.textureWhite.delete()
    }
}

/**
 * Same shaders as `tgdMaterialCreateProgram()`, but the fragment shader
 * writes the normal (bent by the optional normal map) and the material parameters
 * beside the color of the material.
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
        },
        varying,
        outputs: {
            FragNormal: "vec4",
            FragAlbedo: "vec4",
            FragParams: "vec4",
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
 * @returns The channels to read in the textures of the mesh, in the order of `PARAMS`.
 * For instance: `"bgrr"`.
 */
function getChannels(mesh: TgdMeshWithTextures): string {
    const { textures } = mesh
    if (!textures) return "rrrr"

    return `${textures.metallicChannel ?? "r"}${textures.roughnessChannel ?? "r"}${textures.specularChannel ?? "r"
        }${textures.bakedAOChannel ?? "r"}`
}
