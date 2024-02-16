import { TgdContextInterface, TgdProgram } from "@/types"
import { TgdPainter } from "@/painter/painter"
import { TgdVertexArray } from "@/vao"
import { TgdDataset } from "@/dataset"

import VERT from "./segments.vert"
import FRAG from "./segments.frag"

export type TgdPainterSegmentsOptions = {
    /**
     * How round the tip will be?
     *  - **0** means that the tip is flat.
     *  - **1** will gives you a triangled tip.
     *  - **>1** starts to have a semi-circle shape.
     *
     * **0** is the fastest to render, but you will have
     * a bad connection at joints between segments.
     *
     * Default to **3**.
     */
    roundness?: number
}

export class TgdPainterSegments extends TgdPainter {
    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram
    private readonly count: number

    constructor(
        private readonly context: TgdContextInterface,
        { roundness = 3 }: TgdPainterSegmentsOptions = {}
    ) {
        super()
        if (roundness > 125) {
            throw Error("[TgdPainterSegments] Max roundness is 125!")
        }
        if (roundness < 0) {
            throw Error("[TgdPainterSegments] Min roundness is 0!")
        }
        const prg = context.programs.create({
            vert: VERT,
            frag: FRAG,
        })
        this.prg = prg
        const { capsule, elements } = makeCapsule(roundness)
        this.vao = context.createVAO(prg, [capsule], elements)
        this.count = elements.length
    }

    delete(): void {
        throw new Error("Method not implemented.")
    }

    paint(time: number, delay: number): void {
        const { context, prg, vao, count } = this
        const { gl, camera } = context
        prg.use()
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixViewModel)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_BYTE, 0)
    }
}

type CapsuleDataset = TgdDataset<{
    attOffset: "vec3"
}>

/**
 * The capsule is a 2D shape (x,y) that will be uses
 * as a pattern for the segment.
 * The segment will expand this template along Y axis.
 * The tip pointing toward +Y is called A.
 * The tip pointing toward -Y is called B.
 * The z coodinates indicates to which tip the point
 * is attached: 1 for A and 0 for B.
 */
function makeCapsule(roundness: number): {
    capsule: CapsuleDataset
    elements: Uint8Array
} {
    // prettier-ignore
    const offset: number[] =[
         0, 0, 1,
         1, 0, 1,
        -1, 0, 1,
         0, 0, 0,
         1, 0, 0,
        -1, 0, 0,
    ]
    // prettier-ignore
    const elements: number[] = [
        0, 3, 1,
        3, 4, 1,
        0, 2, 5,
        3, 0, 5,
    ]
    if (roundness > 0) {
        let oldIndexA = 1
        for (let i = 0; i < roundness; i++) {
            const elemIndex = Math.floor(offset.length / 3)
            const ang = (Math.PI * (i + 1)) / (roundness + 1)
            const x = Math.cos(ang)
            const y = Math.sin(ang)
            offset.push(x, y)
            elements.push(0, oldIndexA, elemIndex)
            oldIndexA = elemIndex
        }
    }
    const capsule: CapsuleDataset = new TgdDataset({
        attOffset: "vec3",
    })
    capsule.set("attOffset", new Float32Array(offset))
    return {
        capsule,
        elements: new Uint8Array(elements),
    }
}
