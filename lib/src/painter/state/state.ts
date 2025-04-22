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
import { webglLookup } from "@tgd/utils"

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
        const self = {
            color: {
                red: true,
                green: true,
                blue: true,
                alpha: true,
            },
        }
        const { onEnterActions, onExitActions } = prepareActions(
            self,
            options.gl,
            options
        )
        for (const action of onEnterActions) action()
        action()
        for (const action of onExitActions) action()
    }

    public static debug(gl: WebGL2RenderingContext) {
        const depth = webglDepthGet(gl)
        console.log("Depth:", {
            enabled: depth.enabled,
            func: webglLookup(depth.func),
            mask: depth.mask,
            range: [depth.rangeMin, depth.rangeMax],
        })
        console.log("Cull:", webglCullGet(gl))
        console.log("Blend:", webglBlendGet(gl))
    }

    readonly color = {
        red: true,
        green: true,
        blue: true,
        alpha: true,
    }

    constructor(
        context: { gl: WebGL2RenderingContext },
        options: Partial<TgdPainterStateOptions> = {}
    ) {
        super(options.children)
        const { gl } = context
        const { onEnterActions, onExitActions } = prepareActions(
            this,
            gl,
            options
        )
        this.onEnter = (time, delay) => {
            options.onEnter?.(time, delay)
            for (const f of onEnterActions) f()
        }
        this.onExit = (time, delay) => {
            for (const f of onExitActions) f()
            options.onExit?.(time, delay)
        }
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
    self: {
        color: { red: boolean; green: boolean; blue: boolean; alpha: boolean }
    },
    gl: WebGL2RenderingContext,
    options: Partial<TgdPainterStateOptions>
) {
    const { color, blend, depth, cull, stencil } = options
    const onEnterActions: Array<() => void> = []
    const onExitActions: Array<() => void> = []
    const colorMask: undefined | [boolean, boolean, boolean, boolean] =
        figureOutColorMask(color)
    const [red, green, blue, alpha] = colorMask ?? [true, true, true, true]
    self.color.red = red
    self.color.green = green
    self.color.blue = blue
    self.color.alpha = alpha
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
            gl.colorMask(
                self.color.red,
                self.color.green,
                self.color.blue,
                self.color.alpha
            )
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
