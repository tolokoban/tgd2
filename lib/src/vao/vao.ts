import { TgdBuffer } from "@tgd/buffer"
import { TgdDataset } from "@tgd/dataset"
import { TgdProgram } from "@tgd/types"

export class TgdVertexArray {
    public readonly vao: WebGLVertexArrayObject

    private readonly drawBuffers: TgdBuffer[] = []
    private readonly elemBuffer: TgdBuffer | null = null

    constructor(
        public readonly gl: WebGL2RenderingContext,
        program?: TgdProgram,
        datasets?: TgdDataset<any>[],
        elements?: Uint8Array | Uint16Array | Uint32Array
    ) {
        const vao = gl.createVertexArray()
        if (!vao) throw Error("Unable to create VertexArrayObject!")

        this.vao = vao
        if (!program || !datasets) return

        gl.bindVertexArray(vao)
        this.drawBuffers = datasets.map(dataset => {
            const buffer = new TgdBuffer(gl, dataset.dataView, {
                target: dataset.target,
                usage: dataset.usage,
            })
            buffer.bind()
            dataset.defineAttributes(gl, program)
            return buffer
        })
        if (elements) {
            const buffer = new TgdBuffer(gl, elements, {
                target: "ELEMENT_ARRAY_BUFFER",
            })
            buffer.bind()
            this.elemBuffer = buffer
        }
        gl.bindVertexArray(null)
    }

    bind() {
        this.gl.bindVertexArray(this.vao)
    }

    unbind() {
        this.gl.bindVertexArray(null)
    }

    delete() {
        const { gl, vao, drawBuffers, elemBuffer } = this
        gl.deleteVertexArray(vao)
        drawBuffers.forEach(buff => buff.delete())
        if (elemBuffer) elemBuffer.delete()
    }
}
