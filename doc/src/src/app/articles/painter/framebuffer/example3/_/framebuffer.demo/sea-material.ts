import {
    TgdCodeBloc,
    TgdContext,
    TgdMaterial,
    TgdProgram,
    TgdTexture2D,
    WebglAttributeType,
} from "@tolokoban/tgd"

export class SeaMaterial extends TgdMaterial {
    public readonly varyings: { [name: string]: WebglAttributeType } = {
        varZ: "float",
        varNormal: "vec3",
    }
    public readonly fragmentShaderCode: TgdCodeBloc
    public readonly vertexShaderCode: TgdCodeBloc
    public texture: TgdTexture2D | undefined = undefined

    constructor(private readonly context: TgdContext) {
        super()
        this.vertexShaderCode = [
            "varNormal = mat3(uniModelViewMatrix) * mat3(uniTransfoMatrix) * NORMAL;",
            "varZ = -.2 * (uniModelViewMatrix * uniTransfoMatrix * POSITION).z;",
        ]
        this.fragmentShaderCode = [
            `vec2 uv = gl_FragCoord.xy * uniInverseScreenSize;`,
            `vec4 color = texture(texDiffuse, uv);`,
            "float dist = color.a - varZ;",
            "dist = clamp(dist * 10.0, 0.0, 0.9);",
            "color *= 4.0;",
            "float s = .01;",
            "color += texture(texDiffuse, uv + vec2(dist * s, 0));",
            "color += texture(texDiffuse, uv - vec2(dist * s, 0));",
            "color += texture(texDiffuse, uv + vec2(0, dist * s));",
            "color += texture(texDiffuse, uv - vec2(0, dist * s));",
            "color *= .125;",
            `vec3 result = mix(color.rgb, vec3(0, 0, .4), pow(dist, 0.5));`,
            `float specular = clamp(varNormal.z, 0.0, 1.0) * .3;`,
            "return vec4(result + vec3(specular), 1.0);",
        ]
        this.uniforms.uniInverseScreenSize = "vec2"
        this.uniforms.texDiffuse = "sampler2D"
    }

    setUniforms(program: TgdProgram, _time: number): void {
        const { texture, context } = this
        if (texture) texture.activate(0, program, "texDiffuse")
        program.uniform2f(
            "uniInverseScreenSize",
            1 / context.width,
            1 / context.height
        )
    }
}
