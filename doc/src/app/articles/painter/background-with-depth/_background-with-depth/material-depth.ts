import { TgdMaterial, TgdProgram } from "@tolokoban/tgd"

export class MaterialDepth extends TgdMaterial {
    public min = 0.9975
    public max = 0.9988

    constructor() {
        super({
            uniforms: {
                uniMin: "float",
                uniMax: "float",
            },
            fragmentShaderCode: [
                "vec4 R = vec4(1,0,0,1);",
                "vec4 G = vec4(0,1,0,1);",
                "vec4 B = vec4(0,0,1,1);",
                "float depth = gl_FragCoord.z;",
                "float light = clamp(",
                ["(depth - uniMin) / (uniMax - uniMin),", "0.0,", "1.0"],
                ");",
                "return vec4(vec3(light), 1);",
            ],
            setUniforms: ({ program }: { program: TgdProgram }): void => {
                program.uniform1f("uniMin", this.min)
                program.uniform1f("uniMax", this.max)
            },
        })
    }
}
