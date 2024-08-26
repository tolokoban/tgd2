import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "../group"
import { TgdPainter } from "../painter"
import { Blend, BlendOptions, getBlend, setBlend, toBlend } from "./blend"
import { Cull, CullOptions, getCull, setCull, toCull } from "./cull"
import { Depth, DepthOptions, getDepth, setDepth, toDepth } from "./depth"

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    blend: BlendOptions
    depth: DepthOptions
    cull: CullOptions
    name: string
}

export class TgdPainterState extends TgdPainterGroup {
    private blend: Blend = false
    private depth: Depth = false
    private cull: Cull = false

    constructor(
        context: TgdContext,
        options: Partial<TgdPainterStateOptions> = {}
    ) {
        const { children = [] } = options
        const { gl } = context
        const blend = toBlend(gl, options.blend)
        const depth = toDepth(gl, options.depth)
        const cull = toCull(gl, options.cull)
        const onEnter: Array<() => void> = []
        const onExit: Array<() => void> = []
        if (typeof blend !== "undefined") {
            onEnter.push(() => {
                this.blend = getBlend(gl)
                setBlend(gl, blend)
            })
            onExit.push(() => {
                setBlend(gl, this.blend)
            })
        }
        if (typeof depth !== "undefined") {
            onEnter.push(() => {
                this.depth = getDepth(gl)
                setDepth(gl, depth)
            })
            onExit.push(() => {
                setDepth(gl, this.depth)
            })
        }
        if (typeof cull !== "undefined") {
            onEnter.push(() => {
                this.cull = getCull(gl)
                setCull(gl, cull)
            })
            onExit.push(() => {
                setCull(gl, this.cull)
            })
        }
        super(children, {
            onEnter(_time, _delay) {
                onEnter.forEach(f => f())
            },
            onExit(_time, _delay) {
                onExit.forEach(f => f())
            },
        })
        this.name = options.name ?? `State/${this.name}`
    }
}
