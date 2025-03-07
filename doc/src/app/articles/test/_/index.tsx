import {
    tgdLoadGlb,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterHueRotation,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
    TgdPainterFramebuffer,
    tgdCalcDegToRad,
    TgdPainterAxes,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

import SuzaneURL from "@/assets/mesh/suzanne.glb"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(context: TgdContext) {
    document.addEventListener("keydown", evt => {
        console.log("🚀 [index] evt.key = ", evt.key) // @FIXME: Remove this line written on 2024-02-16 at 16:02
        switch (evt.key) {
            case "0":
                context.camera.face("+X+Y+Z")
                break
            case ".":
                context.camera.zoom = 1
                break
        }
        context.paint()
    })
    const camera = new TgdCameraPerspective({
        distance: 3.5,
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    context.camera = camera
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 0,
        geo: {
            lat: 0,
            lng: 0,
            minLat: tgdCalcDegToRad(-45),
            maxLat: tgdCalcDegToRad(+45),
        },
    })
    context.paint()
    const action = async () => {
        const asset = await tgdLoadGlb(SuzaneURL)
        if (!asset) return

        console.log("Suzanne has been loaded!")
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [
                new TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                new TgdPainterMeshGltf(context, {
                    asset,
                }),
                new TgdPainterAxes(context, { scale: 10 }),
            ],
        })
        const fb = new TgdPainterFramebuffer(context, {
            depthBuffer: true,
            viewportMatchingScale: 1,
        })
        fb.add(state)
        const hue = new TgdFilterHueRotation()
        context.add(
            // fb,
            state,
            new TgdPainterFilter(context, {
                filters: [hue],
                texture: fb.textureColor0,
                flipY: true,
            }),
            new TgdPainterLogic(time => (hue.hueShiftInDegrees = time * 0.1))
        )
        context.paint()
        console.log("========================================")
        console.log(context.debugHierarchy())
    }
    void action()
}
