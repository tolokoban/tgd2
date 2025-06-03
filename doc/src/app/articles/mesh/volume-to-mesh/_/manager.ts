import {
    tgdCalcDegToRad,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterState,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"

import React from "react"
import { PainterCube } from "./painter-cube"

class VolumeToMeshManager {
    private _context: TgdContext | null = null

    set context(context: TgdContext) {
        const { camera } = context
        if (camera instanceof TgdCameraPerspective) {
            camera.fovy = tgdCalcDegToRad(90)
            camera.transfo.distance = 3
        }
        new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 1000,
        })
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
        state.add(new PainterCube(context))
        context.add(clear, state)
        context.paint()
    }
}

export function useVolumeToMeshManager(): VolumeToMeshManager {
    const ref = React.useRef<VolumeToMeshManager | null>(null)
    if (!ref.current) ref.current = new VolumeToMeshManager()
    return ref.current
}
