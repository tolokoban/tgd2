import { TgdContext } from "@tgd/context"
import { TgdPainterGroup } from "../group"
import { TgdPainter } from "../painter"
import {
    webglBlendGet,
    WebglBlendOptions,
    webglBlendSet,
    webglDepthGet,
    WebglDepthOptions,
    webglDepthSet,
} from "@tgd/utils/state"
import {
    webglCullGet,
    WebglCullOptions,
    webglCullSet,
} from "@tgd/utils/state/cull"

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    blend: WebglBlendOptions
    depth: WebglDepthOptions
    cull: WebglCullOptions
    name: string
}

export class TgdPainterState extends TgdPainterGroup {
    private _blend?: WebglBlendOptions
    private _depth?: WebglDepthOptions
    private _cull?: WebglCullOptions

    constructor(
        context: TgdContext,
        {
            blend,
            depth,
            cull,
            name,
            children = [],
        }: Partial<TgdPainterStateOptions> = {}
    ) {
        const { gl } = context
        const onEnter: Array<() => void> = []
        const onExit: Array<() => void> = []
        if (blend) {
            onEnter.push(() => {
                this._blend = webglBlendGet(gl)
                webglBlendSet(gl, blend)
            })
            onExit.push(() => {
                if (this._blend) webglBlendSet(gl, this._blend)
            })
        }
        if (depth) {
            onEnter.push(() => {
                this._depth = webglDepthGet(gl)
                webglDepthSet(gl, depth)
            })
            onExit.push(() => {
                if (this._depth) webglDepthSet(gl, this._depth)
            })
        }
        if (cull) {
            onEnter.push(() => {
                this._cull = webglCullGet(gl)
                webglCullSet(gl, cull)
            })
            onExit.push(() => {
                if (this._cull) webglCullSet(gl, this._cull)
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
        this.name = name ?? `State/${this.name}`
    }
}
