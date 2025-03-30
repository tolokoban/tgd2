import React from "react"
import { Theme } from "@tolokoban/ui"
import {
    TgdCanvasGizmo,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdParserGLTransfertFormatBinary,
    tgdActionCreateCameraInterpolation,
    tgdEasingFunctionOutBack,
    TgdPainterState,
    webglPresetDepth,
    TgdVec3,
    TgdQuat,
} from "@tolokoban/tgd"

import Style from "./MeshPreview.module.css"

const $ = Theme.classNames

export interface MeshPreviewProps {
    className?: string
    asset: TgdParserGLTransfertFormatBinary
    meshIndex: number
    primitiveIndex: number
}

export default function MeshPreview({
    className,
    asset,
    meshIndex,
    primitiveIndex,
}: MeshPreviewProps) {
    const refGizmo = React.useRef(new TgdCanvasGizmo())
    const [context, setContext] = React.useState<TgdContext | null>(null)
    const refCenter = React.useRef(new TgdVec3(0, 0, 0))
    refCenter.current = useTgdContext(context, asset, meshIndex, primitiveIndex)
    const handleMountCanvasScene = (canvas: HTMLCanvasElement | null) => {
        if (!canvas || canvas === context?.canvas) return

        const ctx = new TgdContext(canvas)
        setContext(ctx)
        refGizmo.current.attachContext(ctx)
        const resetCamera = (evt: { from: TgdQuat; to: TgdQuat }) => {
            const center = refCenter.current
            ctx.animSchedule({
                duration: 300,
                action: tgdActionCreateCameraInterpolation(ctx.camera, {
                    position: center,
                    orientation: evt.to,
                    zoom: 1,
                }),
                easingFunction: tgdEasingFunctionOutBack,
            })
        }
        refGizmo.current.eventTipClick.addListener(resetCamera)
        return () => refGizmo.current.eventTipClick.removeListener(resetCamera)
    }
    const handleMountCanvasGizmo = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        refGizmo.current.canvas = canvas
    }
    return (
        <div className={$.join(className, Style.MeshPreview)}>
            <canvas
                className={Style.scene}
                ref={handleMountCanvasScene}
            ></canvas>
            <canvas
                className={Style.gizmo}
                ref={handleMountCanvasGizmo}
            ></canvas>
        </div>
    )
}

function useTgdContext(
    context: TgdContext | null,
    asset: TgdParserGLTransfertFormatBinary,
    meshIndex: number,
    primitiveIndex: number
) {
    const [center, setCenter] = React.useState(new TgdVec3(0, 0, 0))
    React.useEffect(() => {
        if (!context) return

        context.removeAll()
        context.stateReset()
        const clear = new TgdPainterClear(context, {
            color: [0.2, 0.2, 0.2, 1],
            depth: 1,
        })
        const mesh = new TgdPainterMeshGltf(context, {
            asset,
            meshIndex,
            primitiveIndex,
        })
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [mesh],
        })
        const bbox = mesh.computeBoundingBox()
        const diag = TgdVec3.distance(bbox.min, bbox.max)
        const center = TgdVec3.newFromMix(bbox.min, bbox.max)
        // context.camera = new TgdCameraOrthographic()
        context.camera.transfo.position = center
        context.camera.transfo.distance = diag
        context.camera.spaceHeightAtTarget = diag
        context.camera.near = diag * 1e-3
        context.camera.far = diag * 10
        context.camera.transfo.setOrientation(0, 0, 0, 1)
        context.add(clear, state)
        context.paint()
        const controller = new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 500,
        })
        setCenter(new TgdVec3(center))
        return () => {
            controller.detach()
        }
    }, [context, asset, meshIndex, primitiveIndex])
    return center
}
