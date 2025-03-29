/* eslint-disable unicorn/prevent-abbreviations */
import { TgdCamera, TgdCameraPerspective } from "@tgd/camera"
import { TgdContext, TgdContextOptions } from "@tgd/context"
import { TgdControllerCameraOrbit } from "@tgd/controller"
import { TgdEvent } from "@tgd/event"
import { TgdQuat, TgdMat3, TgdVec3 } from "@tgd/math"
import { TgdPainterClear, TgdPainterDepth, TgdPainterLogic } from "@tgd/painter"
import { TgdInputPointerEventTap } from "@tgd/types"
import { TipsPainter } from "./painter/tips"

export interface TgdCanvasGizmoOptions extends TgdContextOptions {
    canvas?: HTMLCanvasElement
}

/**
 * The Gizmo displays the orientation of an attached camera.
 * You can click one of the axis to force the camera to face it.
 */
export class TgdCanvasGizmo {
    /**
     * The user clicked a tip, so we dispatch the target orientation.
     */
    public eventTipClick = new TgdEvent<{
        from: Readonly<TgdQuat>
        to: Readonly<TgdQuat>
    }>()

    private _canvas: HTMLCanvasElement | null = null
    private context: TgdContext | null = null
    private contextExternal: TgdContext | null = null
    private readonly cameraInternal = new TgdCameraPerspective({
        fovy: Math.PI / 3,
        near: 0.01,
        far: 10,
        transfo: { distance: 2.7 },
    })
    private orbiter: TgdControllerCameraOrbit | null = null
    private tipsPainter: TipsPainter | null = null

    constructor(private readonly options: TgdCanvasGizmoOptions = {}) {
        if (options.canvas) this.canvas = options.canvas
    }

    /**
     * Attach the camera we want to track and control.
     */
    attachContext(context: TgdContext) {
        this.detach()
        this.contextExternal = context
        this.attach()
    }

    detach() {
        if (!this.contextExternal) return

        this.contextExternal.eventPaint.removeListener(this.handleExternalPaint)
        this.contextExternal = null
    }

    private attach() {
        this.contextExternal?.eventPaint.addListener(this.handleExternalPaint)
        this.context?.paint()
    }

    private readonly handleExternalPaint = () => {
        this.context?.paint()
    }

    private readonly handleInternalToExternal = (internalCamera: TgdCamera) => {
        const { contextExternal } = this
        if (contextExternal?.camera) {
            contextExternal.camera.transfo.orientation =
                internalCamera.transfo.orientation
            contextExternal.paint()
        }
    }

    get canvas() {
        return this._canvas
    }
    set canvas(canvas: HTMLCanvasElement | null) {
        if (canvas === this._canvas) return

        this._canvas = canvas
        if (this.context) {
            this.context.inputs.pointer.eventTap.removeListener(this.handleTap)
            this.context.destroy()
            this.context = null
            const { orbiter } = this
            if (orbiter) {
                orbiter.detach()
                orbiter.eventChange.removeListener(
                    this.handleInternalToExternal
                )
            }
        }
        this.tipsPainter?.delete()
        if (!canvas) return

        const context = new TgdContext(canvas, {
            alpha: true,
            depth: true,
            antialias: true,
            name: "GizmoCanvas",
            ...this.options,
        })
        context.inputs.pointer.eventTap.addListener(this.handleTap)
        this.context = context
        context.camera = this.cameraInternal
        this.orbiter = new TgdControllerCameraOrbit(context, {
            speedPanning: 0,
            speedZoom: 0,
        })
        this.orbiter.eventChange.addListener(this.handleInternalToExternal)
        const painter = new TipsPainter(context)
        this.tipsPainter = painter
        context.add(
            new TgdPainterLogic(() => {
                const srcTransfo = this.contextExternal?.camera.transfo
                if (!srcTransfo) return

                const dstTransfo = this.context?.camera.transfo
                if (!dstTransfo) return

                dstTransfo.orientation = srcTransfo.orientation
            }),
            new TgdPainterClear(context, {
                color: [0, 0, 0, 0],
                depth: 1,
            }),
            new TgdPainterDepth(context, { enabled: true }),
            painter
        )
        context.paint()
    }

    private readonly handleTap = (event: TgdInputPointerEventTap) => {
        const camera = this.context?.camera
        if (!camera) return

        const { origin, direction } = camera.castRay(event.x, event.y)
        const maxDistance = 1
        let bestDistance = maxDistance
        let bestTip = TIPS[0]
        for (const tip of TIPS) {
            const distance = tip.distanceToLineSquared(origin, direction)
            if (distance < bestDistance) {
                bestDistance = distance
                bestTip = tip
            }
        }
        if (bestDistance < maxDistance) {
            const axisX = new TgdVec3()
            const axisY = new TgdVec3()
            const axisZ = bestTip
            axisX.from(this.findAxisX())
            if (axisX.isClose(axisZ)) {
                axisY.from(this.findAxisY())
                axisX.from(axisY).cross(axisZ)
            } else {
                axisY.from(axisZ).cross(axisX)
            }
            const quat = new TgdQuat().fromAxes(axisX, axisY, axisZ)
            if (quat.isEqual(camera.transfo.orientation)) {
                quat.rotateAroundY(Math.PI)
            }
            this.eventTipClick.dispatch({
                from: camera.transfo.orientation,
                to: quat,
            })
        }
    }

    private findAxisX(): TgdVec3 {
        let bestScore = 0
        let bestTip = TIPS[0]
        const vec = new TgdVec3()
        const mat = new TgdMat3()
        mat.fromQuat(this.cameraInternal.transfo.orientation).transpose()
        for (const tip of TIPS) {
            vec.from(tip).applyMatrix(mat)
            if (vec.x > bestScore) {
                bestScore = vec.x
                bestTip = tip
            }
        }
        return bestTip
    }

    private findAxisY(): TgdVec3 {
        let bestScore = 0
        let bestTip = TIPS[0]
        const vec = new TgdVec3()
        const mat = new TgdMat3()
        mat.fromQuat(this.cameraInternal.transfo.orientation).transpose()
        for (const tip of TIPS) {
            vec.from(tip).applyMatrix(mat)
            if (vec.y > bestScore) {
                bestScore = vec.y
                bestTip = tip
            }
        }
        return bestTip
    }
}

const TIPS: TgdVec3[] = [
    new TgdVec3(1, 0, 0),
    new TgdVec3(0, 1, 0),
    new TgdVec3(0, 0, 1),
    new TgdVec3(-1, 0, 0),
    new TgdVec3(0, -1, 0),
    new TgdVec3(0, 0, -1),
]
