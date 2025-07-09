import {
    TgdCodeBloc,
    TgdMaterial,
    TgdProgram,
    TgdTexture2D,
} from "@tolokoban/tgd"

export class PositionMaterial extends TgdMaterial {
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc = []
    public texture: TgdTexture2D | undefined = undefined

    constructor() {
        super()
        this.varyings.varPosition = "vec4"
        this.vertexShaderCode = [
            `varPosition = uniModelViewMatrix * uniTransfoMatrix * vec4(position, 1);`,
        ]
        this.fragmentShaderCode = [
            "vec4 G = vec4(0,1,0,1);",
            "vec4 R = vec4(1, 0, 0, 1);",
            "float z = -varPosition.z * .2;",
            `return vec4(z, z, z, 1);`,
        ]
    }

    setUniforms(_program: TgdProgram, _time: number, _delay: number): void {}
}
