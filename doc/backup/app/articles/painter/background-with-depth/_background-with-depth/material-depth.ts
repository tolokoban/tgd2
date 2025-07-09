import {
    TgdMaterial,
    TgdProgram,
    TgdCodeBloc,
    WebglUniformType,
} from "@tolokoban/tgd"

export class MaterialDepth extends TgdMaterial {
    public min = 0.9975
    public max = 0.9988

    readonly uniforms: { [name: string]: WebglUniformType } = {
        uniMin: "float",
        uniMax: "float",
    }

    readonly fragmentShaderCode: TgdCodeBloc = [
        "vec4 R = vec4(1,0,0,1);",
        "vec4 G = vec4(0,1,0,1);",
        "vec4 B = vec4(0,0,1,1);",
        "float depth = gl_FragCoord.z;",
        "float light = clamp(",
        ["(depth - uniMin) / (uniMax - uniMin),", "0.0,", "1.0"],
        ");",
        "return vec4(vec3(light), 1);",
    ]

    readonly vertexShaderCode: TgdCodeBloc = []

    setUniforms(program: TgdProgram, time: number, delay: number): void {
        program.uniform1f("uniMin", this.min)
        program.uniform1f("uniMax", this.max)
    }
}
