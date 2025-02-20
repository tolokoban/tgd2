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
    public static do(
        options: Omit<
            Partial<TgdPainterStateOptions>,
            "children" | "onEnter" | "onExit"
        > & {
            gl: WebGL2RenderingContext
        },
        action: () => void
    ) {
        const { onEnterActions, onExitActions } = prepareActions(
            options.gl,
            options
        )
        onEnterActions.forEach(action => action())
        action()
        onExitActions.forEach(action => action())
    }

    constructor(
        context: TgdContext,
        options: Partial<TgdPainterStateOptions> = {}
    ) {
        const { gl } = context
        const { onEnterActions, onExitActions } = prepareActions(gl, options)
        super(options.children, {
            onEnter(time, delay) {
                options.onEnter?.(time, delay)
                onEnterActions.forEach(f => f())
            },
            onExit(time, delay) {
                onExitActions.forEach(f => f())
                options.onExit?.(time, delay)
            },
        })
        this.name = options.name ?? `State/${this.name}`
    }
}

function figureOutColorMask(
    color: boolean | [boolean, boolean, boolean, boolean] | undefined
): [boolean, boolean, boolean, boolean] | undefined {
    if (color === true) return [true, true, true, true]
    if (color === false) return [false, false, false, false]
    return color
}

function prepareActions(
    gl: WebGL2RenderingContext,
    options: Partial<TgdPainterStateOptions>
) {
    const { color, blend, depth, cull, stencil } = options
    const onEnterActions: Array<() => void> = []
    const onExitActions: Array<() => void> = []
    const colorMask: undefined | [boolean, boolean, boolean, boolean] =
        figureOutColorMask(color)
    if (Array.isArray(colorMask)) {
        let savedColorMask:
            | [boolean, boolean, boolean, boolean]
            | null
            | undefined
        onEnterActions.push(() => {
            savedColorMask = gl.getParameter(gl.COLOR_WRITEMASK) as [
                boolean,
                boolean,
                boolean,
                boolean
            ]
            gl.colorMask(...colorMask)
        })
        onExitActions.push(() => {
            gl.colorMask(...(savedColorMask ?? [true, true, true, true]))
        })
    }
    if (blend) {
        let savedBlend: WebglBlendOptions
        onEnterActions.push(() => {
            savedBlend = webglBlendGet(gl)
            webglBlendSet(gl, blend)
        })
        onExitActions.push(() => {
            if (savedBlend) webglBlendSet(gl, savedBlend)
        })
    }
    if (depth) {
        let savedDepth: WebglDepthOptions
        onEnterActions.push(() => {
            savedDepth = webglDepthGet(gl)
            webglDepthSet(gl, depth)
        })
        onExitActions.push(() => {
            if (savedDepth) webglDepthSet(gl, savedDepth)
        })
    }
    if (cull) {
        let savedCull: WebglCullOptions
        onEnterActions.push(() => {
            savedCull = webglCullGet(gl)
            webglCullSet(gl, cull)
        })
        onExitActions.push(() => {
            if (savedCull) webglCullSet(gl, savedCull)
        })
    }
    if (stencil) {
        let savedStencil: WebglStencilOptions
        onEnterActions.push(() => {
            savedStencil = webglStencilGet(gl)
            webglStencilSet(gl, stencil)
        })
        onExitActions.push(() => {
            if (savedStencil) webglStencilSet(gl, savedStencil)
        })
    }
    return { onEnterActions, onExitActions }
}
