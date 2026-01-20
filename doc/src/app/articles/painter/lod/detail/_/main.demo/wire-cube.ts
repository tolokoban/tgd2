import {
    type TgdContext,
    TgdDataset,
    TgdPainter,
    TgdProgram,
    TgdShaderFragment,
    TgdShaderVertex,
    TgdVertexArray,
} from "@tolokoban/tgd"

const EPSILON = 1e-1 // 1e-3
const X0 = -1 + EPSILON
const X1 = +1 - EPSILON
const Y0 = -1 + EPSILON
const Y1 = +1 - EPSILON
const Z0 = 0 + EPSILON
const Z1 = +1 - EPSILON

export class WireCube extends TgdPainter {
    // prettier-ignore
    public data = new Float32Array([
		X0, Y0, Z0, 1,  // 0
		X0, Y1, Z0, 1,  // 1
		X1, Y0, Z0, 1,  // 2
		X1, Y1, Z0, 1,  // 3
		X0, Y0, Z1, 1,  // 4
		X0, Y1, Z1, 1,  // 5
		X1, Y0, Z1, 1,  // 6
		X1, Y1, Z1, 1,  // 7
    ])

    private readonly prg: TgdProgram
    private readonly dataset: TgdDataset
    private readonly vao: TgdVertexArray

    constructor(private readonly context: TgdContext) {
        super()
        const prg = new TgdProgram(context.gl, {
            vert: new TgdShaderVertex({
                attributes: {
                    attPosition: "vec4",
                },
                mainCode: ["gl_Position = attPosition;"],
            }).code,
            frag: new TgdShaderFragment({
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: "FragColor = vec4(1, 1, 1, 0.5);",
            }).code,
        })
        this.prg = prg
        const dataset = new TgdDataset(
            {
                attPosition: "vec4",
            },
            {
                usage: "DYNAMIC_DRAW",
            }
        )
        dataset.count = 8
        this.dataset = dataset
        // prettier-ignore
        const elements = new Uint8Array([
            0, 1, 0, 2, 0, 4,
            1, 3, 1, 5,
            2, 3, 2, 6,
            3, 7,
            4, 5, 4, 6,
            5, 7,
            6, 7
        ])
        const vao = new TgdVertexArray(context.gl, prg, [dataset], elements)
        this.vao = vao
        prg.debug()
    }

    delete() {
        this.prg.delete()
        this.vao.delete()
    }

    paint() {
        const { context, data, prg, vao, dataset } = this
        prg.use()
        const { gl } = context
        dataset.data = data.buffer
        vao.updateDataset(dataset)
        vao.bind()
        gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0)
        vao.unbind()
    }
}
