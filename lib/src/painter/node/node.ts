import { TgdMat4 } from "@tgd/math"
import { TgdPainter } from "../painter"
import { TgdTransfo } from "../../math/transfo"

export interface TgdPainterNodeChild {
    paint(time: number, delay: number): void
    delete(): void
    transfo: TgdTransfo
}

export interface TgdPainterNodeOptions {
    children: Array<TgdPainterNode | TgdPainterNodeChild>
}

/**
 * A Node can hold others Nodes or any object providing the
 * TgdPainterNodeChild interface.
 *
 * Each Node is a local space for its children.
 */
export class TgdPainterNode extends TgdPainter {
    public parentTransfo: TgdTransfo = new TgdTransfo()
    public readonly transfo = new TgdTransfo()

    private readonly matrixTransfo = new TgdMat4()
    private parentUpdateCount = 0
    private updateCount = 0
    private readonly childrenNodes: TgdPainterNode[] = []
    private readonly children: TgdPainterNodeChild[] = []

    constructor(options: Partial<TgdPainterNodeOptions> = {}) {
        super()
        const { children = [] } = options
        for (const child of children) this.add(child)
    }

    delete(): void {
        for (const child of this.children) {
            child.delete()
        }
        for (const child of this.childrenNodes) {
            child.delete()
        }
    }

    add(...children: Array<TgdPainterNode | TgdPainterNodeChild>) {
        for (const child of children) {
            if (child instanceof TgdPainterNode) {
                this.childrenNodes.push(child)
            } else {
                this.children.push(child)
            }
        }
    }

    remove(...children: Array<TgdPainterNode | TgdPainterNodeChild>) {
        for (const child of children) {
            if (child instanceof TgdPainterNode) {
                const nodePosition = this.childrenNodes.indexOf(child)
                if (nodePosition !== -1)
                    this.childrenNodes.splice(nodePosition, 1)
            } else {
                const childPosition = this.children.indexOf(child)
                if (childPosition !== -1) this.children.splice(childPosition, 1)
            }
        }
    }

    paint(time: number, delay: number): void {
        const {
            transfo,
            parentTransfo,
            matrixTransfo,
            parentUpdateCount,
            updateCount,
            children,
            childrenNodes,
        } = this
        if (
            transfo.updateCount > updateCount ||
            parentTransfo.updateCount > parentUpdateCount
        ) {
            this.updateCount = transfo.updateCount
            this.parentUpdateCount = parentTransfo.updateCount
            matrixTransfo.from(parentTransfo.matrix).multiply(transfo.matrix)
        }
        for (const child of children) {
            child.transfo.matrix = matrixTransfo
            child.paint(time, delay)
        }
        for (const child of childrenNodes) {
            child.parentTransfo.matrix = matrixTransfo
            child.paint(time, delay)
        }
    }
}
