import { TgdMat4 } from "@tgd/math"
import { TgdPainter } from "../painter"
import { TgdTransfo, TgdTransfoOptions } from "../../math/transfo"
import { TgdInterfaceTransformablePainter } from "../../interface"

export interface TgdPainterNodeOptions {
    transfo: TgdTransfo | Partial<TgdTransfoOptions>
    target: TgdInterfaceTransformablePainter
    children: TgdPainterNode[]
    logic(time: number, delay: number): void
}

/**
 * A Node can hold others Nodes or any object providing the
 * TgdPainterNodeChild interface.
 *
 * Each Node is a local space for its children.
 *
 * All objects implementing `TgdInterfaceTransformable` have a `transfo` attribute
 * that controls its position/orientation/scale in the world coordinate system. If
 * you need an object's transformation to be defined in another object coordinate
 * system, you just have to wrap it in a `TgdPainterNode`.
 *
 * As long as a `Transformable` is hold by the `painter` attribute of a `TgdPainterNode`,
 * it will be controlled by the node.
 * That means, you should not use its `transfo` attribute because it will be
 * overwritten by the node.
 *
 * @example
 * ```
 * const body = new TgdPainterNode({
 *   target: new TgdPainterMesh(context)
 * })
 * const leftArm = new TgdPainterNode({
 *   transfo: { poition: [1, 0, 0] },
 *   target: new TgdPainterMesh(context)
 * })
 * const rightArm = new TgdPainterNode({
 *   transfo: { poition: [-1, 0, 0] },
 *   target: new TgdPainterMesh(context)
 * })
 * body.add( leftArm, rightArm )
 * ```
 */
export class TgdPainterNode extends TgdPainter {
    public readonly transfo: TgdTransfo
    public target: TgdInterfaceTransformablePainter | null = null

    private readonly parentMatrix = new TgdMat4()
    private readonly globalMatrix = new TgdMat4()
    private readonly children: TgdPainterNode[] = []
    private readonly logic?: (time: number, delay: number) => void

    constructor(options: Partial<TgdPainterNodeOptions> = {}) {
        super()
        const { children = [], target = null, transfo, logic } = options
        for (const child of children) this.add(child)
        this.target = target
        this.transfo = new TgdTransfo(transfo)
        this.logic = logic
    }

    delete(): void {
        for (const child of this.children) {
            child.delete()
        }
        this.target?.delete?.()
    }

    add(...children: TgdPainterNode[]): this {
        for (const child of children) {
            this.children.push(child)
        }
        return this
    }

    remove(...children: TgdPainterNode[]) {
        for (const child of children) {
            const nodePosition = this.children.indexOf(child)
            if (nodePosition !== -1) this.children.splice(nodePosition, 1)
        }
    }

    paint(time: number, delay: number): void {
        this.logic?.(time, delay)
        this.parentMatrix.reset()
        const fringe: TgdPainterNode[] = [this]
        while (fringe.length > 0) {
            const node = fringe.shift() as TgdPainterNode
            node.globalMatrix
                .from(node.parentMatrix)
                .multiply(node.transfo.matrix)
            if (node.target) {
                node.target.transfo.matrix.from(node.globalMatrix)
                node.target.paint?.(time, delay)
            }
            for (const child of node.children) {
                child.parentMatrix.from(node.globalMatrix)
                fringe.push(child)
            }
        }
    }
}
