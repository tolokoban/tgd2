import { TgdContextInterface, TgdProgram } from "@/types"
import { TgdPainter } from "@/painter/painter"
import { TgdVertexArray } from "@/vao"
import { TgdDataset } from "@/dataset"

import VERT from "./segments.vert"
import FRAG from "./segments.frag"
import { TgdVec4 } from "@/math"

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

/**
 * @example
 * ```
 * const factory = new TgdPainterSegmentsData()
 * factory.add(
 *   [0, 0, 0, .2],
 *   [1, 0, 0, .1],
 * )
 * factory.add(
 *   [0, 0, 0, .2],
 *   [0, 1, 0, .1],
 * )
 * factory.add(
 *   [0, 0, 0, .2],
 *   [0, 0, 1, .1],
 * )
 * const segments = new TgdPainterSegments(
 *   segment, factory
 * )
 * ```
 */
export class TgdPainterSegments extends TgdPainter {
    private readonly vao: TgdVertexArray
    private readonly prg: TgdProgram
    private readonly vertexCount: number
    private readonly instanceCount: number

    constructor(
        private readonly context: TgdContextInterface,
        factory: { makeDataset: () => InstanceDataset; readonly count: number },
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
        const instance = factory.makeDataset()
        this.vao = context.createVAO(prg, [capsule, instance], elements)
        this.vertexCount = elements.length
        this.instanceCount = instance.count
    }

    delete(): void {
        throw new Error("Method not implemented.")
    }

    paint(time: number, delay: number): void {
        const { context, prg, vao, vertexCount, instanceCount } = this
        const { gl, camera } = context
        prg.use()
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixViewModel)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        vao.bind()
        gl.drawElementsInstanced(
            gl.TRIANGLES,
            vertexCount,
            gl.UNSIGNED_BYTE,
            0,
            instanceCount
        )
    }
}

type Array4 = [x: number, y: number, z: number, r: number] | TgdVec4

type InstanceDataset = TgdDataset<{
    attAxyzr: "vec4"
    attBxyzr: "vec4"
}>

export class TgdPainterSegmentsData {
    private _count = 0
    private attAxyzr: number[] = []
    private attBxyzr: number[] = []

    get count() {
        return this._count
    }

    /**
     * @param param0 Point A: coords and radius.
     * @param param1 Point B: coords and radius.
     */
    add([xA, yA, zA, radiusA]: Array4, [xB, yB, zB, radiusB]: Array4) {
        this.attAxyzr.push(xA, yA, zA, radiusA)
        this.attBxyzr.push(xB, yB, zB, radiusB)
        this._count++
    }

    makeDataset(): InstanceDataset {
        const dataset = new TgdDataset(
            {
                attAxyzr: "vec4",
                attBxyzr: "vec4",
            },
            {
                divisor: 1,
            }
        )
        dataset.set("attAxyzr", new Float32Array(this.attAxyzr))
        dataset.set("attBxyzr", new Float32Array(this.attBxyzr))
        return dataset
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
        let oldIndexB = 4
        let elemIndex = 6
        for (let i = 0; i < roundness; i++) {
            const ang = (Math.PI * (i + 1)) / (roundness + 1)
            const x = Math.cos(ang)
            const y = Math.sin(ang)
            // We set z to 0 because it's related to tip A.
            offset.push(x, y, 0)
            elements.push(0, oldIndexA, elemIndex)
            oldIndexA = elemIndex
            elemIndex++
            // We set z to 1 because it's related to tip B.
            offset.push(x, -y, 1)
            elements.push(3, elemIndex, oldIndexB)
            oldIndexB = elemIndex
            elemIndex++
        }
        elements.push(0, oldIndexA, 2)
        elements.push(3, 5, oldIndexB)
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
