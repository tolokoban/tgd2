import {
    TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdTexture2D,
    TgdVertexArray,
} from "@tolokoban/tgd"

export class PainterTriangle extends TgdPainter {
    public readonly data = new Uint8Array(2048 * 2048)
    private readonly texture: TgdTexture2D
    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram

    constructor(private readonly context: TgdContext) {
        super()
        this.texture = context.textures2D.create({
            width: 2048,
            height: 2048,
            magFilter: "NEAREST",
            minFilter: "LINEAR",
            type: "UNSIGNED_BYTE",
            format: "LUMINANCE",
            internalFormat: "LUMINANCE",
            data: this.data,
        })
        const x = 1 / (2 * Math.sqrt(3))
        const dataset = new TgdDataset({
            attPosition: "vec2",
            attUV: "vec2",
        })
        // prettier-ignore
        dataset.set("attPosition", new Float32Array([
             0, +1,
            +x, -1,
            -x, -1,
        ]))
        // prettier-ignore
        dataset.set("attUV", new Float32Array([
            0, 0,
            1, 1,
            0, 1,
        ]))
        this.prg = context.programs.create({
            vert: new TgdShaderVertex({
                attributes: {
                    attPosition: "vec2",
                    attUV: "vec2",
                },
                varying: {
                    varUV: "vec2",
                },
                mainCode: ["gl_Position = vec4(attPosition, 0.0, 1.0);"],
            }).code,
            frag: new TgdShaderFragment({
                uniforms: {
                    uniTexture: "sampler2D",
                },
                varying: {
                    varUV: "vec2",
                },
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: ["FragColor = texture(uniTexture, varUV);"],
            }).code,
        })
        this.vao = context.createVAO(this.prg, [dataset])
    }

    delete(): void {
        this.context.textures2D.delete(this.texture)
        this.vao.delete()
    }

    paint(time: number, delay: number): void {
        const { context, prg, texture, vao } = this
        prg.use()
        texture.activate(prg, "uniTexture")
        vao.bind()
        context.gl.drawArrays(context.gl.TRIANGLES, 0, 3)
        vao.unbind()
    }
}
