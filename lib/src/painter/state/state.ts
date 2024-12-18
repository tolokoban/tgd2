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
import { TgdPainterFunction } from "@tgd/types/painter"

export interface TgdPainterStateOptions {
    children: TgdPainter[]
    color: boolean | [boolean, boolean, boolean, boolean]
    blend: WebglBlendOptions
    depth: WebglDepthOptions
    cull: WebglCullOptions
    stencil: WebglStencilOptions
    name: string
    /**
     * Function to execute before painting.
     */
    onEnter?: TgdPainterFunction
    /**
     * Function to execute after painting.
     */
    onExit?: TgdPainterFunction
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
            onEnter,
            onExit,
        }: Partial<TgdPainterStateOptions> = {}
    ) {
        const { gl } = context
        const onEnterActions: Array<() => void> = []
        const onExitActions: Array<() => void> = []
        const colorMask: undefined | [boolean, boolean, boolean, boolean] =
            figureOutColorMask(color)
        if (Array.isArray(colorMask)) {
            onEnterActions.push(() => {
                this._color = gl.getParameter(gl.COLOR_WRITEMASK) as [
                    boolean,
                    boolean,
                    boolean,
                    boolean
                ]
                gl.colorMask(...colorMask)
            })
            onExitActions.push(() => {
                gl.colorMask(...(this._color ?? [true, true, true, true]))
            })
        }
        if (blend) {
            onEnterActions.push(() => {
                this._blend = webglBlendGet(gl)
                webglBlendSet(gl, blend)
            })
            onExitActions.push(() => {
                if (this._blend) webglBlendSet(gl, this._blend)
            })
        }
        if (depth) {
            onEnterActions.push(() => {
                this._depth = webglDepthGet(gl)
                webglDepthSet(gl, depth)
            })
            onExitActions.push(() => {
                if (this._depth) webglDepthSet(gl, this._depth)
            })
        }
        if (cull) {
            onEnterActions.push(() => {
                this._cull = webglCullGet(gl)
                webglCullSet(gl, cull)
            })
            onExitActions.push(() => {
                if (this._cull) webglCullSet(gl, this._cull)
            })
        }
        if (stencil) {
            onEnterActions.push(() => {
                this._stencil = webglStencilGet(gl)
                webglStencilSet(gl, stencil)
            })
            onExitActions.push(() => {
                if (this._stencil) webglStencilSet(gl, this._stencil)
            })
        }
        super(children, {
            onEnter(time, delay) {
                onEnter?.(time, delay)
                onEnterActions.forEach(f => f())
            },
            onExit(time, delay) {
                onExitActions.forEach(f => f())
                onExit?.(time, delay)
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
