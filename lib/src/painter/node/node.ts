import { TgdMat4, TgdQuat, TgdVec3 } from "@tgd/math"
import { TgdPainter } from "../painter"
import { TgdTransfo, TgdTransfoOptions } from "../../math/transfo"
import { TgdInterfaceTransformablePainter } from "../../interface"

export interface TgdPainterNodeOptions {
    name?: string
    transfo: TgdTransfo | Partial<TgdTransfoOptions>
    children: TgdPainterNodeChild[]
    /**
     * Do we call the `paint()` method of the targets?
     * Default to `true`.
     */
    paintTheTargets?: boolean
    logic(this: TgdPainterNode, time: number, delay: number): void
}

export type TgdPainterNodeChild =
    | TgdPainterNode
    | TgdInterfaceTransformablePainter

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

    private readonly parentMatrix = new TgdMat4()
    /**
     * globalMatrix = parentMatrix * transfo
     */
    private readonly globalMatrix = new TgdMat4()
    private readonly nodes: TgdPainterNode[] = []
    private readonly targets: TgdInterfaceTransformablePainter[] = []
    private readonly logic?: (time: number, delay: number) => void
    private readonly paintTheTargets: boolean

    constructor(options: Partial<TgdPainterNodeOptions> = {}) {
        super()
        const {
            children = [],
            transfo,
            logic,
            paintTheTargets = true,
            name = `TgdPainterNode/${this.name}`,
        } = options
        this.paintTheTargets = paintTheTargets
        for (const child of children) this.add(child)
        this.transfo = new TgdTransfo(transfo)
        this.logic = logic?.bind(this)
        this.name = name
    }

    delete(): void {
        for (const child of this.nodes) {
            child.delete()
        }
        for (const target of this.targets) target.delete?.()
    }

    add(...children: TgdPainterNodeChild[]): this {
        for (const child of children) {
            if (child instanceof TgdPainterNode) {
                this.nodes.push(child)
            } else {
                this.targets.push(child)
            }
        }
        return this
    }

    remove(...children: TgdPainterNodeChild[]): this {
        for (const child of children) {
            if (child instanceof TgdPainterNode) {
                const nodePosition = this.nodes.indexOf(child)
                if (nodePosition !== -1) this.nodes.splice(nodePosition, 1)
            } else {
                const index = this.targets.indexOf(child)
                if (index !== -1) this.targets.splice(index, 1)
            }
        }
        return this
    }

    getNodes(): TgdPainterNode[] {
        return [...this.nodes]
    }

    getTargets(): TgdInterfaceTransformablePainter[] {
        return [...this.targets]
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
            node.logic?.(time, delay)
            for (const target of node.targets) {
                target.transfo.matrix.from(node.globalMatrix)
                if (this.paintTheTargets) target.paint?.(time, delay)
            }
            for (const child of node.nodes) {
                child.parentMatrix.from(node.globalMatrix)
                fringe.push(child)
            }
        }
    }

    debug(caption = "TgdPainterNode") {
        console.log(caption)
        actualDebug(this)
    }
}

function actualDebug(node: TgdPainterNode, indent = "| ") {
    console.log(
        `${indent}${node.name}  [${format(node.transfo.orientation)}] (${format(
            node.transfo.position
        )})`
    )
    const targets = node.getTargets()
    if (targets.length > 0) {
        if (targets.length === 1) {
            console.log(`${indent}  Target: ${targets[0].name ?? "..."}`)
        } else {
            console.log(`${indent}  Targets (${targets.length})`)
            for (const target of targets) {
                console.log(`${indent}    ${target.name ?? "..."}`)
            }
        }
    }
    const nodes = node.getNodes()
    if (nodes.length > 0) {
        console.log(`${indent}  Nodes (${nodes.length})`)
        for (const child of nodes) {
            actualDebug(child, `${indent}  | `)
        }
    }
}

function format(vec: TgdQuat | TgdVec3): string {
    const list: string[] = [...vec].map(v => v.toFixed(3))
    return list.join(", ")
}
