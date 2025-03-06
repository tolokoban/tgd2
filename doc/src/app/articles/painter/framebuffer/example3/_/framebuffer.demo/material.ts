import {
    TgdCodeBloc,
    TgdMaterial,
    TgdProgram,
    TgdTexture2D,
} from "@tolokoban/tgd"

export class Material extends TgdMaterial {
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc = ["varUV = TEXCOORD_0;"]
    public texture: TgdTexture2D | null = null

    constructor() {
        super()
        this.fragmentShaderCode = [
            `vec4 color1 = texture(texDiffuse, varUV * 1.0);`,
            `float k = 0.7071067811865476;`,
            `float ang = uniTime * .777;`,
            `vec4 color2 = vec4(`,
            [
                `0.5 + k * sin(ang - 2.0943951023931953),`,
                `0.5 + k * sin(ang),`,
                `0.5 + k * sin(ang + 2.0943951023931953),`,
                `1.0`,
            ],
            `);`,
            `vec2 p = 2.0 * (varUV - vec2(.5));`,
            `vec2 polar = vec2(`,
            [`length(p),`, `atan(p.y, p.x)`],
            `);`,
            `float alpha = 0.1 + 0.3 * (cos(uniTime * 1.451) * sin(uniTime) + 1.0);`,
            `polar.y -= uniTime * 1.421 * (1.0 + pow(polar.x, .5));`,
            `polar.x += 0.25 * sin(0.75 * uniTime + polar.y * 3.0) * cos(uniTime * 1.751);`,
            `float beta = 1.0 - smoothstep(0.0, 0.1 + 0.1 * abs(sin(uniTime * 1.1474) * cos(uniTime) * 1.452), abs(fract(polar.x * 0.90) - 0.5));`,
            `return mix(color1, color2, max(alpha, beta));`,
        ]
        this.varyings.varUV = "vec2"
        this.uniforms.texDiffuse = "sampler2D"
        this.uniforms.uniTime = "float"
    }

    setUniforms(program: TgdProgram, time: number): void {
        const { texture } = this
        if (texture) texture.activate(0, program, "texDiffuse")
        program.uniform1f("uniTime", time * 1e-3)
    }
}
