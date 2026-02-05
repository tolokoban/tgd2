import { TgdBuffer } from "@tgd/buffer"
import type { TgdDataset } from "@tgd/dataset"
import type { TgdProgram } from "@tgd/program"
import type { TgdTypeArrayForElements } from "@tgd/types"

export class TgdVertexArray {
    public readonly vao: WebGLVertexArrayObject

    private readonly drawBuffers: TgdBuffer[] = []
    private readonly elemBuffer: TgdBuffer | null = null
    private readonly buffersToDelete = new Set<TgdBuffer>()
    /**
     * Number of owners that share this VAO.
     */
    private ownersCount = 1

    constructor(
        public readonly gl: WebGL2RenderingContext,
        private readonly program?: TgdProgram,
        private readonly datasets?: Readonly<TgdDataset>[],
        private elements?: TgdTypeArrayForElements
    ) {
        const vao = gl.createVertexArray()
        if (!vao) throw new Error("Unable to create VertexArrayObject!")

        this.vao = vao
        if (!program || !datasets) return

        gl.bindVertexArray(vao)
        this.drawBuffers = datasets.map((dataset) => {
            // const buffer = new TgdBuffer(gl, {
            //     data: dataset.data,
            //     target: dataset.target,
            //     usage: dataset.usage,
            // })
            const buffer = resolveBuffer(gl, dataset, this.buffersToDelete)
            buffer.bind()
            dataset.defineAttributes(gl, program)
            return buffer
        })
        if (elements) {
            const buffer = new TgdBuffer(gl, {
                data: elements,
                target: "ELEMENT_ARRAY_BUFFER",
            })
            buffer.bind()
            this.elemBuffer = buffer
        }
        gl.bindVertexArray(null)
        this.debug()
    }

    share() {
        this.ownersCount++
    }

    /**
     * When you change the data of a dataset,
     * you must call this function to update the VAO.
     * Because datasets do not own any buffer.
     */
    updateDataset(dataset: TgdDataset) {
        const { datasets } = this
        if (!datasets) {
            console.error(
                "You cannot update any dataset because no dataset has been attached to this VAO yet!"
            )
            return false
        }
        const index = datasets.indexOf(dataset)
        if (index === -1) {
            console.error("This dataset is not bound to this VAO!")
            dataset.debug()
            this.debug()
            return false
        }
        const buffer = this.getBuffer(index)
        if (!buffer) {
            console.error(
                `There is no buffer with index #${index} in this VAO!`
            )
            this.debug()
            return false
        }
        buffer.bufferData({
            data: dataset.data,
        })
        return true
    }

    updateElements(elements: number[]) {
        if (!this.elements) {
            throw new Error("This VAO has no elements data!")
        }
        if (!this.elemBuffer) {
            throw new Error("This VAO has no elements buffer!")
        }
        switch (this.elements.BYTES_PER_ELEMENT) {
            case 1:
                this.elements = new Uint8Array(elements)
                break
            case 2:
                this.elements = new Uint16Array(elements)
                break
            case 4:
                this.elements = new Uint32Array(elements)
                break
            default:
                throw new Error(
                    `Don't know how to deal with ${this.elements.BYTES_PER_ELEMENT} bytes per element!`
                )
        }
        this.elemBuffer.bufferData({ data: this.elements })
    }

    getBuffer(index: number): TgdBuffer | undefined {
        return this.drawBuffers[index]
    }

    toCode({ indent = "" }: Partial<{ indent: string }> = {}) {
        const lines: string[] = [
            "function createVAO(",
            "  gl: WebGL2RenderingContext,",
            `  prg: WebGLProgram${this.datasets
                ?.map((_ds, index) => `, data${index}: ArrayBuffer`)
                .join("")}`,
            ") {",
            "  const vao = gl.createVertexArray()",
            "  gl.bindVertexArray(vao)",
        ]
        if (this.datasets)
            for (const [index, dataset] of this.datasets.entries()) {
                lines.push(
                    `  const buff${index} = gl.createBuffer()`,
                    `  gl.bindBuffer(gl.${dataset.target}, buff${index})`,
                    `  gl.bufferData(gl.${dataset.target}, data${index}, gl.${dataset.usage})`,
                    dataset.toCode({ indent: `${indent}  ` })
                )
            }
        lines.push("  return vao", "}")
        return lines.map((line) => `${indent}${line}`).join("\n")
    }

    debug(caption = "TgdVertexArray") {
        console.log(caption)
        if (this.program) this.program.debug()
        if (this.datasets) {
            for (const [index, dataset] of this.datasets.entries()) {
                dataset.debug(`   Dataset #${index}`)
            }
        }
        if (this.elements) console.log("Elements:", this.elements)
    }

    bind() {
        this.gl.bindVertexArray(this.vao)
    }

    unbind() {
        this.gl.bindVertexArray(null)
    }

    delete() {
        this.ownersCount--
        if (this.ownersCount > 0) return

        const { gl, vao, drawBuffers, elemBuffer } = this
        gl.deleteVertexArray(vao)
        for (const buff of drawBuffers) {
            if (this.buffersToDelete.has(buff)) buff.delete()
        }
        if (elemBuffer) elemBuffer.delete()
    }
}

function resolveBuffer(
    gl: WebGL2RenderingContext,
    dataset: Readonly<TgdDataset>,
    buffersToDelete: Set<TgdBuffer>
): TgdBuffer {
    const buffer =
        dataset.buffer ??
        new TgdBuffer(gl, {
            data: dataset.data,
            target: dataset.target,
            usage: dataset.usage,
        })
    if (!dataset.buffer) buffersToDelete.add(buffer)
    return buffer
}
