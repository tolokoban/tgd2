import {
    TgdContext,
    TgdPainterClear,
    TgdPainterState,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"

import React from "react"

class VolumeToMeshManager {
    private _context: TgdContext | null = null

    set context(context: TgdContext) {
        if (this._context) this._context.destroy()
        this._context = context
        const clear = new TgdPainterClear(context, {
            color: [0, 0, 0, 1],
            depth: 1,
        })
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.off,
        })
        context.add(clear, state)
        context.paint()
    }
}

export function useVolumeToMeshManager(): VolumeToMeshManager {
    const ref = React.useRef<VolumeToMeshManager | null>(null)
    if (!ref.current) ref.current = new VolumeToMeshManager()
    return ref.current
}
