import React from "react"
import { Theme } from "@tolokoban/ui"
import {
    TgdCanvasGizmo,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterDepth,
    TgdPainterMeshGltf,
    TgdParserGLTransfertFormatBinary,
    TgdQuat,
    TgdVec3,
    tgdActionCreateCameraInterpolation,
    tgdEasingFunctionOutBack,
    TgdPainterNode,
} from "@tolokoban/tgd"

import Style from "./NodePreview.module.css"

const $ = Theme.classNames

export interface NodePreviewProps {
    className?: string
    asset: TgdParserGLTransfertFormatBinary
    nodeIndices: number[]
}

export default function NodePreview({
    className,
    asset,
    nodeIndices,
}: NodePreviewProps) {
    const refGizmo = React.useRef(new TgdCanvasGizmo())
    const [context, setContext] = React.useState<TgdContext | null>(null)
    const refCenter = React.useRef(new TgdVec3(0, 0, 0))
    refCenter.current = useTgdContext(context, asset, nodeIndices)
    const handleMountCanvasScene = (canvas: HTMLCanvasElement | null) => {
        if (!canvas || canvas === context?.canvas) return

        const ctx = new TgdContext(canvas)
        setContext(ctx)
        refGizmo.current.attachCamera(ctx.camera)
        const resetCamera = (evt: { from: TgdQuat; to: TgdQuat }) => {
            const center = refCenter.current
            ctx.animSchedule({
                duration: 300,
                action: tgdActionCreateCameraInterpolation(ctx.camera, {
                    target: center,
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
    nodeIndices: number[]
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
        const depth = new TgdPainterDepth(context, { enabled: true })
        context.add(clear, depth)
        const nodes: TgdPainterNode[] = nodeIndices.map(nodeIndex =>
            createNodePainter(context, nodeIndex, asset)
        )
        nodes.forEach(node => context.add(node))
        // const bbox = mesh.computeBoundingBox()
        // const diag = TgdVec3.distance(bbox.min, bbox.max)
        // const center = TgdVec3.newFromMix(bbox.min, bbox.max)
        // context.camera = new TgdCameraOrthographic()
        const diag = 10
        context.camera.target = [0, 0, 0]
        context.camera.distance = diag
        context.camera.spaceHeightAtTarget = diag
        context.camera.near = diag * 1e-3
        context.camera.far = diag * 10
        context.camera.setOrientation(0, 0, 0, 1)
        context.paint()
        const controller = new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 500,
        })
        setCenter(new TgdVec3(center))
        return () => {
            controller.detach()
        }
    }, [context, asset, nodeIndices])
    return center
}

function createNodePainter(
    context: TgdContext,
    nodeIndex: number,
    asset: TgdParserGLTransfertFormatBinary
): TgdPainterNode {
    const node = asset.getNode(nodeIndex)
    const painter = new TgdPainterNode()
    if (node.matrix) {
        painter.transfo.matrix = node.matrix
    } else {
        if (node.rotation) painter.transfo.orientation = node.rotation
        if (node.scale) painter.transfo.scale = node.scale
        if (node.translation) painter.transfo.position = node.translation
    }
    painter.transfo.matrix.debug(node.name ?? `Node #${nodeIndex}`)
    if (typeof node.mesh === "number") {
        const mesh = new TgdPainterMeshGltf(context, {
            asset,
            meshIndex: node.mesh,
            primitiveIndex: 0,
        })
        painter.add(mesh)
    }
    const children = node.children ?? []
    for (const child of children) {
        painter.add(createNodePainter(context, child, asset))
    }
    return painter
}
