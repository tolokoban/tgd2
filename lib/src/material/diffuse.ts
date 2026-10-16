import { TgdColor, type TgdColorType } from "@tgd/color"
import { TgdLight } from "@tgd/light"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import type { TgdProgram } from "@tgd/program"
import type { TgdCodeBloc } from "@tgd/shader"
import { TgdTexture2D } from "@tgd/texture"
import type {
    WebglAttributeType,
    WebglUniformType,
} from "@tgd/types"
import { TgdMaterial } from "./material"

/**
 * What `TgdMaterialDiffuse.color` accepts, depending on how the material
 * has been created: nothing if it has been created with a texture
 * (the texture cannot be changed), any color otherwise.
 */
export type TgdMaterialDiffuseColor<C extends TgdColorType | TgdTexture2D> =
    C extends TgdTexture2D ? never : TgdColorType

export type TgdMaterialDiffuseOptions<
    C extends TgdColorType | TgdTexture2D = TgdColorType,
> = Partial<{
    /**
     * A color or a texture. A color can be changed later with
     * `TgdMaterialDiffuse.color`, but a texture cannot.
     */
    color: C
    light: TgdLight
    ambient: TgdLight
    specularExponent: number
    specularIntensity: number
    lockLightsToCamera: boolean
    /**
     * Every fragment with an alpha strictly lower than `alphaCut`
     * will be discarded.
     */
    alphaCut: number
}>

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)

export class TgdMaterialDiffuse<
    C extends TgdColorType | TgdTexture2D = TgdColorType,
> extends TgdMaterial {
    public light = new TgdLight({
        direction: [-0.3, 0.3, -1],
    })
    public ambient = new TgdLight({ color: new TgdVec4(0.2, 0.1, 0, 0) })
    public specularExponent = 20
    public specularIntensity = 1
    public alphaCut = 0

    private readonly _color = new TgdVec4()
    private _texture: TgdTexture2D | null
    private readonly lightColor = new TgdVec3()
    private readonly ambientColor = new TgdVec3()

    constructor(options: TgdMaterialDiffuseOptions<C> = {}) {
        const alphaCut = options.alphaCut ?? 0
        const texture = options.color instanceof TgdTexture2D ? options.color : null
        const hasTexture = texture !== null
        const uniforms: { [name: string]: WebglUniformType } = {
            uniAlphaCut: "float",
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
        }
        if (!hasTexture) {
            uniforms.uniColor = "vec4"
        }
        const fragmentShaderCode: TgdCodeBloc = [
            hasTexture
                ? "vec4 color = texture(uniTextureColor, varUV);"
                : "vec4 color = uniColor;",
            "if (color.a < uniAlphaCut) discard;",
            `vec3 normal = ${options.lockLightsToCamera ? "mat3(uniModelViewMatrix) * " : ""}normalize(varNormal);`,
            "float light = 1.0 - dot(normal, uniLightDir);",
            options.lockLightsToCamera
                ? "light = max(0.0, light - 1.0);"
                : "light *= .5;",
            `vec3 reflection = ${options.lockLightsToCamera ? "" : "mat3(uniModelViewMatrix) * "}reflect(uniLightDir, normal);`,
            "float spec = max(0.0, reflection.z);",
            "spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;",
            "color = vec4(",
            "  color.rgb * (",
            "    uniAmbient + uniLight * light",
            "  ) + vec3(spec),",
            "  1.0",
            ");",
            "return color;",
        ]
        const varyings: { [name: string]: WebglAttributeType } = {
            varNormal: "vec3",
        }
        if (hasTexture) {
            varyings.varUV = "vec2"
        }
        const vertexShaderCode = () => {
            const code: TgdCodeBloc = [
                `varNormal = mat3(uniTransfoMatrix) * ${this.attNormal};`,
            ]
            if (hasTexture) {
                code.push(`varUV = ${this.attUV};`)
            }
            return code
        }

        super({
            uniforms,
            textures: hasTexture
                ? {
                    uniTextureColor: texture,
                }
                : {},
            varyings,
            vertexShaderCode,
            fragmentShaderCode,
            setUniforms: ({ program }: { program: TgdProgram }): void => {
                if (!hasTexture) program.uniform4fv("uniColor", this._color)
                program.uniform1f("uniAlphaCut", this.alphaCut)
                program.uniform3fv("uniLightDir", this.light.direction)
                this.lightColor.from(this.light.color).scale(this.light.color.w)
                program.uniform3fv("uniLight", this.lightColor)
                this.ambientColor.from(this.ambient.color).scale(this.ambient.color.w)
                program.uniform3fv("uniAmbient", this.ambientColor)
                program.uniform1f("uniSpecularExponent", this.specularExponent)
                program.uniform1f("uniSpecularIntensity", this.specularIntensity)
            },
        })

        this.alphaCut = alphaCut

        this._texture = texture
        if (!texture) {
            new TgdColor(
                (options.color as TgdColorType | undefined) ?? DEFAULT_COLOR,
            ).toVec4(this._color)
        }
        if (options.light) {
            this.light = options.light
        }
        if (options.ambient) {
            this.ambient = options.ambient
        }
        if (typeof options.specularExponent === "number") {
            this.specularExponent = options.specularExponent
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity
        }
    }

    /**
     * The texture of the material, or `null` if it has been created with a color.
     */
    get texture(): TgdTexture2D | null {
        return this._texture
    }

    /**
     * The color or the texture of the material.
     * A material created with a color only accepts colors.
     * The texture of a material created with a texture cannot be changed.
     */
    get color(): C extends TgdTexture2D ? TgdTexture2D : Readonly<TgdVec4> {
        return (this._texture ?? this._color) as C extends TgdTexture2D
            ? TgdTexture2D
            : Readonly<TgdVec4>
    }
    set color(color: TgdMaterialDiffuseColor<C>) {
        if (this._texture) {
            console.error(
                "[TgdMaterialDiffuse] This material has been created with a texture, and changing the texture is not allowed!\nPrefer to update the current texture itself.",
            )
            return
        }
        if (color instanceof TgdTexture2D) {
            throw new Error(
                "[TgdMaterialDiffuse] This material has been created with a color, it cannot receive a texture!",
            )
        }
        new TgdColor(color).toVec4(this._color)
    }
}
