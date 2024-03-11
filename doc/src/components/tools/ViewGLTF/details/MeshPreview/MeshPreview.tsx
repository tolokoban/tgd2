import React from "react"
import { Theme } from "@tolokoban/ui"
import {
    TgdCameraOrthographic,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterDepth,
    TgdPainterMeshGltf,
    TgdParserGLTransfertFormatBinary,
    TgdVec3,
} from "@tolokoban/tgd"

import Tgd from "@/components/demo/Tgd"

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
    const [context, setContext] = React.useState<TgdContext | null>(null)
    console.log("🚀 [MeshPreview] context = ", context) // @FIXME: Remove this line written on 2024-03-08 at 16:10
    const handleMountCanvas = (canvas: HTMLCanvasElement | null) => {
        if (!canvas || canvas === context?.canvas) return

        console.log("🚀 [MeshPreview] canvas = ", canvas) // @FIXME: Remove this line written on 2024-03-08 at 16:09
        setContext(new TgdContext(canvas))
    }
    useTgdContext(context, asset, meshIndex, primitiveIndex)
    return (
        <canvas
            ref={handleMountCanvas}
            className={$.join(className, Style.MeshPreview)}
        ></canvas>
    )
}

function useTgdContext(
    context: TgdContext | null,
    asset: TgdParserGLTransfertFormatBinary,
    meshIndex: number,
    primitiveIndex: number
) {
    React.useEffect(() => {
        if (!context) return

        context.removeAll()
        context.stateReset()
        const clear = new TgdPainterClear(context, {
            color: [0.2, 0.2, 0.2, 1],
            depth: 1,
        })
        const depth = new TgdPainterDepth(context, { enabled: true })
        const mesh = new TgdPainterMeshGltf(context, {
            asset,
            meshIndex,
            primitiveIndex,
        })
        const bbox = mesh.computeBoundingBox()
        console.log("🚀 [MeshPreview] bbox = ", bbox) // @FIXME: Remove this line written on 2024-03-08 at 16:36
        const diag = TgdVec3.distance(bbox.min, bbox.max)
        const center = TgdVec3.newFromMix(bbox.min, bbox.max)
        // context.camera = new TgdCameraOrthographic()
        context.camera.target = center
        context.camera.distance = diag
        context.camera.spaceHeightAtTarget = diag
        context.camera.near = diag * 1e-3
        context.camera.far = diag * 10
        context.camera.setOrientation(0, 0, 0, 1)
        context.add(clear, depth, mesh)
        context.paint()
        const controller = new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 500,
        })
        return () => {
            controller.detach()
        }
    }, [context, asset, meshIndex, primitiveIndex])
}
