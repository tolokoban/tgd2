import { TgdDataset } from "@tgd/dataset"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import { TgdPainter } from "../painter"
import { TgdContext } from "@tgd/context"
import { TgdBuffer } from "@tgd/buffer"
import { resolveErrorMessage } from "@tgd/utils"
import { TgdProgram } from "@tgd/program"
import { TgdVertexArray } from "@tgd/vao"

export interface TgdPainterParticlesUniformsContext {
    time: number
    delta: number
    prg: TgdProgram
}

export interface TgdPainterParticlesOptions {
    name?: string
    dataset: TgdDataset
    drawMode: "POINTS" | "LINES" | "TRIANGLES"
    shader: {
        vert: TgdShaderVertex
        frag: TgdShaderFragment
    }
    setUniforms?(options: TgdPainterParticlesUniformsContext): void
    prefixAttribute?: string
    prefixVarying?: string
}

export class TgdPainterParticles extends TgdPainter {
    protected static counter = 0

    public readonly count: number

    public drawMode: "POINTS" | "LINES" | "TRIANGLES"

    public setUniforms?: (options: TgdPainterParticlesUniformsContext) => void

    private readonly vaos: [TgdVertexArray, TgdVertexArray]
    private readonly buffers: [TgdBuffer, TgdBuffer]
    private readonly prg: TgdProgram
    private pingPong = 0

    constructor(
        public readonly context: TgdContext,
        {
            name,
            dataset,
            shader,
            drawMode,
            setUniforms,
            prefixAttribute = "att",
            prefixVarying = "var",
        }: TgdPainterParticlesOptions,
    ) {
        super()
        this.name = name ?? `TgdPainterParticles#${TgdPainterParticles.counter++}`
        this.setUniforms = setUniforms
        this.drawMode = drawMode
        try {
            const { gl } = context
            const varyings: string[] = []
            const vert = shader.vert.clone()
            const frag = shader.frag.clone()
            for (const attName of Object.keys(vert.attributes)) {
                if (!attName.startsWith(prefixAttribute)) {
                    throw new Error(
                        `All attributes must be prefixed with "${prefixAttribute}"! But "${attName}" is not.
You can use "prefixAttribute" to change the prefix.
If you don't want any prefix, just set "prefixAttribute" to "".`,
                    )
                }

                const varName = `${prefixVarying}${attName.slice(prefixAttribute.length)}`
                vert.varying[varName] = vert.attributes[attName]
                frag.varying[varName] = vert.varying[varName]
                vert.mainCodeHeaders.push(`${varName} = ${attName};`)
                varyings.push(varName)
            }
            dataset.usage = "DYNAMIC_READ"
            this.count = dataset.count
            const prg = new TgdProgram(gl, {
                vert,
                frag,
                transformFeedback: {
                    bufferMode: "INTERLEAVED_ATTRIBS",
                    varyings,
                },
            })
            this.prg = prg
            prg.debug()
            const vaoIn = new TgdVertexArray(gl, prg, [dataset])
            const bufferIn = vaoIn.getBuffer(0)
            if (!bufferIn) throw new Error("Unable to get buffer!")

            const vaoOut = new TgdVertexArray(gl, prg, [dataset.clone()])
            const bufferOut = vaoOut.getBuffer(0)
            if (!bufferOut) throw new Error("Unable to get buffer!")

            this.vaos = [vaoIn, vaoOut]
            this.buffers = [bufferIn, bufferOut]

            vaoIn.debug("Input")
            vaoOut.debug("Output")
        } catch (error) {
            this.delete()
            const message = resolveErrorMessage(error)
            throw new Error(`[${this.name}] ${message}`)
        }
    }

    paint(time: number, delta: number): void {
        const { context, drawMode, prg, vaos, buffers, count, pingPong, setUniforms } = this
        const { gl } = context
        const src = pingPong
        const dst = 1 - pingPong
        prg.use()
        if (setUniforms) {
            setUniforms({ time, delta, prg })
        }
        vaos[src].bind()
        gl.bindBuffer(gl.ARRAY_BUFFER, null)
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffers[dst].buffer)
        gl.beginTransformFeedback(gl[drawMode])
        gl.drawArrays(gl[drawMode], 0, count)
        gl.endTransformFeedback()
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, null)
        vaos[src].unbind()
        this.pingPong = dst
    }

    delete(): void {
        this.prg?.delete()
        if (this.vaos) {
            const [vaoIn, vaoOut] = this.vaos
            vaoIn?.delete()
            vaoOut?.delete()
        }
        if (this.buffers) {
            const [bufferIn, bufferOut] = this.buffers
            bufferIn?.delete()
            bufferOut?.delete()
        }
    }
}
