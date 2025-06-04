import {
    tgdCalcDegToRad,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterAxes,
    TgdPainterClear,
    TgdPainterState,
    webglPresetBlend,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"

import React from "react"
import { PainterCube } from "./painter-cube"
import { PainterMidPoints } from "./mid-points"
import { PainterCorners } from "./corners"
import { PainterTriangles } from "./triangles"
import { PainterWireframe } from "./wireframe"

class VolumeToMeshManager {
    private _context: TgdContext | null = null
    private midPointsPainter: PainterMidPoints | null = null
    private cornersPainter: PainterCorners | null = null
    private trianglesPainter: PainterTriangles | null = null
    private wireframePainter: PainterWireframe | null = null

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
        const wireframe = new PainterWireframe(context)
        this.wireframePainter = wireframe
        const midPoints = new PainterMidPoints(context)
        this.midPointsPainter = midPoints
        const corners = new PainterCorners(context)
        this.cornersPainter = corners
        const triangles = new PainterTriangles(context)
        this.trianglesPainter = triangles
        state.add(
            new TgdPainterAxes(context, { scale: 2 }),
            new PainterCube(context),
            wireframe,
            new TgdPainterState(context, {
                blend: webglPresetBlend.premultipliedAlpha,
                children: [midPoints, corners, triangles],
            })
        )
        context.add(clear, state)
        context.paint()
    }

    /**
     * There are 256 cases, ranging from 0 to 255.
     */
    set caseNumber(value: number) {
        const { cornersPainter: corners, midPointsPainter: midPoints } = this
        if (corners) corners.caseNumber = value
        if (midPoints) midPoints.caseNumber = value
    }
    get caseNumber() {
        return this.cornersPainter?.caseNumber ?? 0
    }

    set triangles(value: string) {
        const { trianglesPainter, wireframePainter } = this
        if (trianglesPainter) trianglesPainter.triangles = value
        if (wireframePainter) wireframePainter.triangles = value
    }
}

export function useVolumeToMeshManager(): VolumeToMeshManager {
    const ref = React.useRef<VolumeToMeshManager | null>(null)
    if (!ref.current) ref.current = new VolumeToMeshManager()
    return ref.current
}
