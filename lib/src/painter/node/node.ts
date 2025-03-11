import { TgdMat4 } from "@tgd/math"
import { TgdPainter } from "../painter"
import { TgdTransfo, TgdTransfoOptions } from "../../math/transfo"
import { TgdInterfaceTransformable } from "../../interface"

interface TgdPainterNodeChild extends TgdInterfaceTransformable {
    paint(time: number, delay: number): void
    delete(): void
}

export interface TgdPainterNodeOptions {
    transfo: TgdTransfo | Partial<TgdTransfoOptions>
    painter: TgdPainterNodeChild
    children: TgdPainterNode[]
}

/**
 * A Node can hold others Nodes or any object providing the
 * TgdPainterNodeChild interface.
 *
 * Each Node is a local space for its children.
 */
export class TgdPainterNode extends TgdPainter {
    public readonly transfo: TgdTransfo
    public painter: TgdPainterNodeChild | null = null

    private readonly parentMatrix = new TgdMat4()
    private readonly globalMatrix = new TgdMat4()
    private readonly children: TgdPainterNode[] = []

    constructor(options: Partial<TgdPainterNodeOptions> = {}) {
        super()
        const { children = [], painter = null, transfo } = options
        for (const child of children) this.add(child)
        this.painter = painter
        this.transfo = new TgdTransfo(transfo)
    }

    delete(): void {
        for (const child of this.children) {
            child.delete()
        }
        this.painter?.delete()
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
        this.parentMatrix.reset()
        const fringe: TgdPainterNode[] = [this]
        while (fringe.length > 0) {
            const node = fringe.shift() as TgdPainterNode
            node.globalMatrix
                .from(node.parentMatrix)
                .multiply(node.transfo.matrix)
            if (node.painter) {
                node.painter.transfo.matrix.from(node.globalMatrix)
                node.painter.paint(time, delay)
            }
            for (const child of node.children) {
                child.parentMatrix.from(node.globalMatrix)
                fringe.push(child)
            }
        }
    }
}
