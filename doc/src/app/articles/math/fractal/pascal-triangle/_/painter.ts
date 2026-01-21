import {
    type TgdContext,
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
        this.texture = new TgdTexture2D(context, {
            storage: {
                width: 2048,
                height: 2048,
                internalFormat: "R8",
            },
            params: {
                magFilter: "NEAREST",
                minFilter: "LINEAR",
            },
        }).loadData(this.data, {
            width: 2048,
            height: 2048,
            format: "RED",
            internalFormat: "R8",
        })
        const x = 1 / (2 * Math.sqrt(3))
        const dataset = new TgdDataset({
            attPosition: "vec2",
            attUV: "vec2",
        })
        // prettier-ignore
        dataset.set("attPosition", new Float32Array([0, +1, +x, -1, -x, -1]))
        // prettier-ignore
        dataset.set("attUV", new Float32Array([0, 0, 1, 1, 0, 1]))
        this.prg = new TgdProgram(context.gl, {
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
        this.vao = new TgdVertexArray(context.gl, this.prg, [dataset])
    }

    delete(): void {
        this.texture.delete()
        this.vao.delete()
    }

    paint(time: number, delay: number): void {
        const { context, prg, texture, vao } = this
        prg.use()
        texture.activate(0, prg, "uniTexture")
        vao.bind()
        context.gl.drawArrays(context.gl.TRIANGLES, 0, 3)
        vao.unbind()
    }
}
