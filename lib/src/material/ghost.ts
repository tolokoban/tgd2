import { ArrayNumber4 } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"

export type TgdMaterialGhostOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
    exponent: number
    intensity: number
}>

const DEFAULT_COLOR = new TgdVec4(0.6, 1, 0.9, 1)

export class TgdMaterialGhost extends TgdMaterial {
    public exponent: number = 3
    public intensity: number = 3

    constructor({
        color = DEFAULT_COLOR,
        exponent = 3,
        intensity = 3,
    }: TgdMaterialGhostOptions = {}) {
        super({
            uniforms: {
                uniMaterialGhostExponent: "float",
                uniMaterialGhostIntensity: "float",
            },
            setUniforms: ({ program }) => {
                program.uniform1f("uniMaterialGhostExponent", this.exponent)
                program.uniform1f("uniMaterialGhostIntensity", this.intensity)
            },
            fragmentShaderCode: [
                `float light = 1.0 - varNormal.z;`,
                `light = pow(light, uniMaterialGhostExponent);`,
                `vec4 color = vec4(${color.join(", ")});`,
                `return vec4(color.rgb * uniMaterialGhostIntensity, color.a) * light;`,
            ],
            vertexShaderCode: () => [
                `varNormal = mat3(uniModelViewMatrix) * ${this.attNormal};`,
            ],
            varyings: {
                varNormal: "vec3",
            },
        })
        this.intensity = intensity
        this.exponent = exponent
    }
}
