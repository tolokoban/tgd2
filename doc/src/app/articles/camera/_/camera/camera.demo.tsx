import {
    ArrayNumber4,
    tgdCalcClamp,
    tgdCalcRandom3,
    TgdCameraOrthographic,
    TgdCameraPerspective,
    TgdContext,
    TgdLight,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterGroupCamera,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterScissor,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import React from "react"
import { useFloat } from "@/utils/hooks/float"
import { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from "@tolokoban/ui"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const { camera } = context
    camera.fitSpaceAtTarget(2, 2)
    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]
    const material = new TgdMaterialDiffuse({
        color,
        ambient: new TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
        lockLightsToCamera: true,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material,
    })
    const { near, far } = camera
    const camOrtho = new TgdCameraOrthographic({ near, far })
    const camPersp = new TgdCameraPerspective({ near, far })
    // #end
    const scissor1 = new TgdPainterScissor(context, {
        children: [
            new TgdPainterGroupCamera(context, {
                camera: camOrtho,
                children: [mesh],
            }),
        ],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1,
    })
    const scissor2 = new TgdPainterScissor(context, {
        children: [
            new TgdPainterGroupCamera(context, {
                camera: camPersp,
                children: [mesh],
            }),
        ],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1,
    })
    context.add(
        new TgdPainterLogic(() => {
            camPersp.fitSpaceAtTarget(2, 2)
            camPersp.fromTransfo(camera.transfo)
            camPersp.zoom = camera.zoom
            camOrtho.fitSpaceAtTarget(2, 2)
            camOrtho.fromTransfo(camera.transfo)
            camOrtho.zoom = camera.zoom
            console.log("🐞 [camera.demo@80] camera.zoom =", camera.zoom) // @FIXME: Remove this line written on 2026-02-12 at 14:29
        }),
        new TgdPainterClear(context, {
            color: [0.3, 0.3, 0.3, 1],
            depth: 1,
        }),
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [scissor1, scissor2],
        }),
    )
    context.paint()
    return {
        split(value: number) {
            const a = tgdCalcClamp(value, 0, 1)
            scissor1.x = 0
            scissor1.width = a
            scissor2.x = a
            scissor2.width = 1 - a
            context.paint()
        },
        zoom(value: number) {
            context.camera.zoom = value
            context.paint()
        },
    }
}

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const srv = ref.current
    const [split, setSplit] = useFloat(0.5, srv?.split)
    const [zoom, setZoom] = React.useState(1)
    const handleApplyZoom = () => {
        if (srv) srv.zoom(zoom)
    }

    return (
        <div>
            <View
                onReady={(scene: TgdContext, assets: Assets) => {
                    ref.current = init(scene, assets)
                }}
                assets={{
                    glb: {
                        suzane: SuzaneURL,
                    },
                }}
                gizmo
                controller={{
                    inertiaOrbit: 1000,
                    inertiaPanning: 1000,
                }}>
                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />
                <ViewPanel fullwidth display="flex" justifyContent="space-between" alignItems="center">
                    <div>Orthographic</div>
                    <div>Perspective</div>
                </ViewPanel>
                <ViewPanel display="flex" alignItems="center" gap="M">
                    <ViewInputNumber value={zoom} onChange={setZoom} />
                    <ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>
                </ViewPanel>
            </View>
        </div>
    )
}
