import type { TgdCamera } from "@tgd/camera"
import { TgdColor, type TgdColorType } from "@tgd/color"
import type { WebglParams } from "@tgd/context/webgl-params"
import type { TgdTexture2D } from "@tgd/texture"
import type { ArrayNumber4 } from "@tgd/types"
import { TgdMaterial, type TgdMaterialContext } from "./material"

export type TgdMaterialShadowOptions<C extends TgdCamera = TgdCamera> = {
    /**
     * The color of the material is multiplied by this tint
     * for the fragments that are in the shadow.
     * Defaults to `[0.5, 0.5, 0.5, 1]`.
     */
    tint?: TgdColorType
    /**
     * Camera looking from the light.
     * It must be the one used to compute `texture`.
     */
    camera: C
    /**
     * Texture holding the distance from the light of the nearest fragment.
     * It is usually {@link TgdPainterShadow.texture}.
     */
    texture: TgdTexture2D
    /**
     * The material on which to apply a tint for the shadows.
     */
    material: TgdMaterial
    /**
     * A fragment is in the shadow if its distance from the light is greater
     * than the one stored in the texture plus `bias`.
     * This prevents surfaces from shadowing themselves ("shadow acne").
     * Defaults to `0.01`.
     */
    bias?: number
    /**
     * In "low" accuracy, the UV is divided by `w` in the vertex shader.
     * That works perfectly well for **orthographic** cameras.
     * For a perspective (spot) camera, the shadow edges will be
     * slightly off on large triangles
     * The fix is to pass the clip-space vec4 as the varying and
     * do the divide in the fragment shader.
     * This is what `accuracy` "high" does. But it is slower.
     * 
     * Defaults to "low"
     */
    accuracy?: "low" | "high"
}

const DEFAULT_TINT: ArrayNumber4 = [0.5, 0.5, 0.5, 1]

/**
 * Wrap a material to tint the fragments that are hidden from a light.
 *
 * The distances from the light are read from a texture, which is usually
 * computed by a {@link TgdPainterShadow} with the same camera.
 *
 * @see {@link TgdMaterialShadowOptions}
 */
export class TgdMaterialShadow<C extends TgdCamera = TgdCamera> extends TgdMaterial {
    /**
     * @see {@link TgdMaterialShadowOptions.camera}
     */
    public readonly camera: C
    /**
     * @see {@link TgdMaterialShadowOptions.texture}
     */
    public readonly texture: TgdTexture2D
    /**
     * @see {@link TgdMaterialShadowOptions.material}
     */
    public readonly material: TgdMaterial
    /**
     * @see {@link TgdMaterialShadowOptions.bias}
     */
    public bias: number
    /**
     * @see {@link TgdMaterialShadowOptions.accuracy}
     */
    public readonly accuracy: "low" | "high"

    private _tint: TgdColor

    constructor(options: TgdMaterialShadowOptions<C>) {
        const { material } = options
        const high = options.accuracy === "high"
        const n = findFreeSuffix(material)
        const uniModelViewMatrix = `uniMaterialShadow_ModelViewMatrix_${n}`
        const uniProjectionMatrix = `uniMaterialShadow_ProjectionMatrix_${n}`
        const uniTint = `uniMaterialShadow_Tint_${n}`
        const uniBias = `uniMaterialShadow_Bias_${n}`
        const uniTexture = `uniMaterialShadow_Texture_${n}`
        const varClipSpace = `varMaterialShadow_clipSpace_${n}`
        const varUV = `varMaterialShadow_UV_${n}`
        const varDistance = `varMaterialShadow_distance_${n}`
        const position = `materialShadow_position_${n}`
        const screen = `materialShadow_screen_${n}`
        const applyBaseMaterial = `materialShadow_applyBaseMaterial_${n}`
        super({
            attPosition: material.attPosition,
            attNormal: material.attNormal,
            attTangent: material.attTangent,
            attUV: material.attUV,
            debug: material.debug,
            textures: {
                ...material.textures,
                [uniTexture]: options.texture,
            },
            uniforms: {
                ...material.uniforms,
                [uniModelViewMatrix]: "mat4",
                [uniProjectionMatrix]: "mat4",
                [uniTint]: "vec4",
                [uniBias]: "float",
            },
            varyings: {
                ...material.varyings,
                ...(high ? { [varClipSpace]: "vec4" } : { [varUV]: "vec2" }),
                [varDistance]: "float",
            },
            extraVertexShaderFunctions: () => {
                this.syncAttributes()
                return material.extraVertexShaderFunctions
            },
            vertexShaderCodeForGetPosition: () => {
                this.syncAttributes()
                return material.vertexShaderCodeForGetPosition ?? "return pos;"
            },
            vertexShaderCode: () => {
                this.syncAttributes()
                return [
                    material.vertexShaderCode,
                    `vec4 ${position} = ${uniModelViewMatrix} * uniTransfoMatrix * vec4(position, 1.0);`,
                    // The light looks toward -Z.
                    `${varDistance} = -${position}.z;`,
                    `vec4 ${screen} = ${uniProjectionMatrix} * ${position};`,
                    high
                        ? `${varClipSpace} = ${screen};`
                        : `${varUV} = 0.5 * (vec2(1.0) + ${screen}.xy / ${screen}.w);`,
                ]
            },
            fragmentShaderHeader: () => {
                this.syncAttributes()
                return material.fragmentShaderHeader
            },
            extraFragmentShaderFunctions: () => {
                this.syncAttributes()
                return {
                    ...material.extraFragmentShaderFunctions,
                    [applyBaseMaterial]: [`vec4 ${applyBaseMaterial}() {`, material.fragmentShaderCode, "}"],
                }
            },
            fragmentShaderCode: [
                `vec4 color = ${applyBaseMaterial}();`,
                high
                    ? `vec2 uv = 0.5 * (vec2(1.0) + ${varClipSpace}.xy / ${varClipSpace}.w);`
                    : `vec2 uv = ${varUV};`,
                // Outside of the light's frustum, there is no shadow.
                "if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return color;",
                `float distanceFromLight = texture(${uniTexture}, uv).r;`,
                `if (distanceFromLight + ${uniBias} < ${varDistance}) {`,
                `    color *= ${uniTint};`,
                "}",
                "return color;",
            ],
            setUniforms: (materialContext: TgdMaterialContext) => {
                material.setUniforms?.(materialContext)
                const { program } = materialContext
                const { camera, _tint: tint } = this
                program.uniformMatrix4fv(uniModelViewMatrix, camera.matrixModelView)
                program.uniformMatrix4fv(uniProjectionMatrix, camera.matrixProjection)
                program.uniform4f(uniTint, tint.R, tint.G, tint.B, tint.A)
                program.uniform1f(uniBias, this.bias)
            },
        })
        this._tint = new TgdColor(options.tint ?? DEFAULT_TINT)
        this.camera = options.camera
        this.texture = options.texture
        this.material = material
        this.bias = options.bias ?? 0.01
        this.accuracy = options.accuracy ?? "low"
    }

    /**
     * @see {@link TgdMaterialShadowOptions.tint}
     */
    get tint(): Readonly<TgdColor> {
        return this._tint
    }
    set tint(tint: TgdColorType) {
        if (this._tint === tint) return

        this._tint = new TgdColor(tint)
    }

    /**
     * The state (cull, blend, depth, ...) is the one of the wrapped material.
     */
    public applyState(context: { gl: WebGL2RenderingContext; webglParams: WebglParams }, action: () => void) {
        this.material.applyState(context, action)
    }

    /**
     * The painters overwrite the attribute names of the material they get,
     * so we have to forward them to the wrapped material before getting its code.
     */
    private syncAttributes() {
        const { material } = this
        material.attPosition = this.attPosition
        material.attNormal = this.attNormal
        material.attTangent = this.attTangent
        material.attUV = this.attUV
    }
}

/**
 * A `TgdMaterialShadow` can wrap another `TgdMaterialShadow`.
 * To prevent names conflicts, all the uniforms, varyings, functions
 * and local variables get a numerical suffix that is not used
 * by the wrapped material.
 */
function findFreeSuffix(material: TgdMaterial): number {
    const names = new Set([...Object.keys(material.uniforms), ...Object.keys(material.varyings)])
    let n = 1
    while (names.has(`uniMaterialShadow_Tint_${n}`)) n++
    return n
}
