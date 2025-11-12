import {
    ArrayNumber3,
    ArrayNumber4,
    WebglAttributeType,
    WebglUniformType,
} from "@tgd/types"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdLight } from "@tgd/light"
import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { TgdProgram } from "@tgd/program"
import { tgdCanvasCreateFill } from "@tgd/utils"
import { TgdCamera } from "@tgd/camera"

export type TgdMaterialGlobalOptions = Partial<{
    color: TgdVec4 | ArrayNumber4 | TgdTexture2D
    lights: TgdLight[]
    ambientColor: TgdVec3 | ArrayNumber3 | TgdTextureCube
    ambientIntensity: number
    specularExponent: number
    specularIntensity: number
    normalMap: TgdTexture2D
}>

const DEFAULT_COLOR = new TgdVec4(0.8, 0.6, 0.1, 1)
const DEFAULT_AMBIENT = new TgdVec3(0.8, 0.8, 0.8)

export class TgdMaterialGlobal extends TgdMaterial {
    public specularExponent = 2.2
    public specularIntensity = 2

    private textureColor: TgdTexture2D | null = null
    private mustDeleteTextureColor = false
    private textureAmbient: TgdTextureCube | null = null
    private mustDeleteTextureAmbient = false

    constructor(private readonly options: TgdMaterialGlobalOptions = {}) {
        const uniforms: { [name: string]: WebglUniformType } = {
            uniTransfoMatrix: "mat4",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            texColor: "sampler2D",
            texAmbient: "samplerCube",
            uniCameraPosition: "vec3",
        }
        const fragmentShaderCode: TgdCodeBloc = [
            `vec3 N = normalize(varNormal);`,
            `vec3 L = normalize(varPosition.xyz - uniCameraPosition);`,
            `vec3 R = reflect(L, N);`,
            `vec3 color = texture(texAmbient, R).rgb;`,
            `color = pow(color, vec3(uniSpecularExponent));`,
            `color *= uniSpecularIntensity;`,
            `return vec4(color, 1) * texture(texColor, varUV);`,
        ]
        const varyings: { [name: string]: WebglAttributeType } = {
            varUV: "vec2",
            varNormal: "vec3",
            varPosition: "vec4",
        }
        const vertexShaderCode = () => {
            const code: TgdCodeBloc = [
                `varUV = ${this.attUV};`,
                `varNormal = mat3(uniTransfoMatrix) * ${this.attNormal};`,
                `varPosition = uniTransfoMatrix * ${this.attPosition};`,
            ]
            return code
        }

        super({
            delete: () => {
                if (this.mustDeleteTextureAmbient) this.textureAmbient?.delete()
                if (this.mustDeleteTextureColor) this.textureColor?.delete()
            },
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode,
            setUniforms: ({
                program,
                camera,
            }: {
                program: TgdProgram
                camera: TgdCamera
            }) => {
                if (!this.textureColor) {
                    // Lazy creation of a texture from an unique color.
                    this.textureColor = new TgdTexture2D(program)
                    const color = this.options.color ?? DEFAULT_COLOR
                    if (!(color instanceof TgdTexture2D)) {
                        this.textureColor.loadBitmap(
                            tgdCanvasCreateFill(1, 1, color)
                        )
                    }
                    this.mustDeleteTextureColor = true
                }
                if (!this.textureAmbient) {
                    // Lazy creation of a texture from an unique color.
                    const color = this.options.ambientColor ?? DEFAULT_AMBIENT
                    const canvas = tgdCanvasCreateFill(
                        1,
                        1,
                        color instanceof TgdTextureCube
                            ? DEFAULT_AMBIENT
                            : color
                    )
                    this.textureAmbient = new TgdTextureCube(program, {
                        imagePosX: canvas,
                        imagePosY: canvas,
                        imagePosZ: canvas,
                        imageNegX: canvas,
                        imageNegY: canvas,
                        imageNegZ: canvas,
                    })
                    this.mustDeleteTextureAmbient = true
                }
                this.textureColor.activate(0, program, "texColor")
                this.textureAmbient.activate(1, program, "texAmbient")
                program.uniform3fv(
                    "uniCameraPosition",
                    camera.transfo.actualPosition
                )
                program.uniform1f("uniSpecularExponent", this.specularExponent)
                program.uniform1f(
                    "uniSpecularIntensity",
                    this.specularIntensity
                )
            },
        })

        // if (options.light) {
        //     this.light = options.light
        // }
        // if (options.ambient) {
        //     this.ambient = options.ambient
        // }
        if (typeof options.specularExponent === "number") {
            this.specularExponent = options.specularExponent
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity
        }
        if (options.color instanceof TgdTexture2D) {
            this.textureColor = options.color
        }
        if (options.ambientColor instanceof TgdTextureCube) {
            this.textureAmbient = options.ambientColor
        }
    }
}
