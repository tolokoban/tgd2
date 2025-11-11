import { webglPresetCull } from "@tgd/utils"
import { ArrayNumber4, WebglAttributeType, WebglUniformType } from "@tgd/types"
import { TgdVec4 } from "@tgd/math"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"
import { TgdProgram } from "@tgd/program"
import { TgdPainterStateOptions } from "@tgd/painter"

export type TgdMaterialHullOptions = Partial<{
    color: ArrayNumber4 | TgdVec4
    /**
     * Thickness of the line in percentage of the height.
     * Default to 1 %.
     */
    expansion: number
    /**
     * The more you shift to the back, the more you will get only
     * the contours.
     * Default to 0.01
     */
    zShift: number
    attNormal: string
}>

const DEFAULT_COLOR: ArrayNumber4 = [0.111, 0.333, 0.999, 1]

export class TgdMaterialHull extends TgdMaterial {
    public color: TgdVec4
    public thickness = 1
    public zShift = 0.01

    constructor(options: TgdMaterialHullOptions = {}) {
        super({
            uniforms: {
                uniColor: "vec4",
                uniExpansion: "float",
                uniZ: "float",
            },
            fragmentShaderCode: [`return uniColor;`],
            vertexShaderCode: [
                "vec3 n = normalize(vec3((mat3(uniModelViewMatrix) * normal).xy, 0));",
                "float size = uniExpansion * gl_Position.w;",
                "n *= size;",
                "gl_Position.xy += n.xy;",
                "gl_Position.z += size * uniZ;",
            ],
            setUniforms: ({ program }: { program: TgdProgram }): void => {
                program.uniform4fv("uniColor", this.color)
                program.uniform1f("uniExpansion", this.thickness * 0.01)
                program.uniform1f("uniZ", this.zShift)
            },
            state: { cull: webglPresetCull.front },
        })

        this.color = new TgdVec4(options.color ?? DEFAULT_COLOR)
        this.thickness = options.expansion ?? 1
        this.zShift = options.zShift ?? 0.01
    }
}
