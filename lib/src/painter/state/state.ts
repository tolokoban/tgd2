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
    webglCullGet,
    WebglCullOptions,
    webglCullSet,
    WebglStencilOptions,
    webglStencilGet,
    webglStencilSet,
} from "@tgd/utils/state"

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    color: boolean | [boolean, boolean, boolean, boolean]
    blend: WebglBlendOptions
    depth: WebglDepthOptions
    cull: WebglCullOptions
    stencil: WebglStencilOptions
    name: string
}

export class TgdPainterState extends TgdPainterGroup {
    private _color?: [boolean, boolean, boolean, boolean]
    private _blend?: WebglBlendOptions
    private _depth?: WebglDepthOptions
    private _cull?: WebglCullOptions
    private _stencil?: WebglStencilOptions

    constructor(
        context: TgdContext,
        {
            color,
            blend,
            depth,
            cull,
            stencil,
            name,
            children = [],
        }: Partial<TgdPainterStateOptions> = {}
    ) {
        const { gl } = context
        const onEnter: Array<() => void> = []
        const onExit: Array<() => void> = []
        const colorMask: undefined | [boolean, boolean, boolean, boolean] =
            figureOutColorMask(color)
        if (Array.isArray(colorMask)) {
            onEnter.push(() => {
                this._color = gl.getParameter(gl.COLOR_WRITEMASK) as [
                    boolean,
                    boolean,
                    boolean,
                    boolean
                ]
                gl.colorMask(...colorMask)
            })
            onExit.push(() => {
                gl.colorMask(...(this._color ?? [true, true, true, true]))
            })
        }
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
        if (stencil) {
            onEnter.push(() => {
                this._stencil = webglStencilGet(gl)
                webglStencilSet(gl, stencil)
            })
            onExit.push(() => {
                if (this._stencil) webglStencilSet(gl, this._stencil)
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

function figureOutColorMask(
    color: boolean | [boolean, boolean, boolean, boolean] | undefined
): [boolean, boolean, boolean, boolean] | undefined {
    if (color === true) return [true, true, true, true]
    if (color === false) return [false, false, false, false]
    return color
}
