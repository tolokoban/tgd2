import { WebglAttributeType } from "@tgd/types"
import { TgdMaterial } from "./material"
import { TgdCodeBloc } from "@tgd/shader/code"

/**
 * This material is to be used along with `TgdPainterBackgroundWithDepth`.
 * It will only convert the distance to the camera (float between 0.0 and 1.0) into the color channels R, G and B.
 * @see TgdPainterBackgroundWithDepth
 */
export class TgdMaterialDepth extends TgdMaterial {
    public readonly varyings: { [name: string]: WebglAttributeType }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc

    constructor() {
        super()
        this.fragmentShaderCode = [
            `int z = int(float(0xFFFFFF) * gl_FragCoord.z);`,
            `float r = float(z & 0xFF) / 255.0;`,
            `z >>= 8;`,
            `float g = float(z & 0xFF) / 255.0;`,
            `z >>= 8;`,
            `float b = float(z & 0xFF) / 255.0;`,
            `return vec4(r, g, b, 1);`
        ]
        this.vertexShaderCode = []
        this.varyings = {}
    }

    setUniforms(): void {}
}
