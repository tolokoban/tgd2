import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterHueRotation,
    TgdLoaderGlb,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterGroup,
    TgdPainterLogic,
    TgdPainterMeshGltf,
    TgdPainterState,
} from "@tolokoban/tgd"

import TestPainter from "./painter"
import View from "@/components/demo/Tgd"

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
        distance: 3,
        far: 100,
        near: 0.1,
        fovy: Math.PI / 2,
        zoom: 1,
    })
    context.camera = camera
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
    })
    context.paint()
    const action = async () => {
        const asset = await TgdLoaderGlb.glb("mesh/suzanne.glb")
        if (!asset) return

        console.log("Suzanne has been loaded!")
        const state = new TgdPainterState(context, {
            depth: {
                func: "LESS",
                mask: true,
                range: [0, 1],
            },
            children: [
                new TgdPainterClear(context, {
                    color: [0, 0.3, 0, 1],
                    depth: 1,
                }),
            ],
        })
        const fb = new TgdPainterFramebuffer(context, {
            depthBuffer: true,
            viewportMatchingScale: 1,
        })
        fb.add(state)
        const mesh = new TgdPainterMeshGltf(context, {
            asset,
        })
        // state.add(new TestPainter(context))
        state.add(mesh)
        const hue = new TgdFilterHueRotation()
        context.add(
            fb,
            new TgdPainterFilter(context, {
                filters: [hue],
                texture: fb.texture,
            }),
            new TgdPainterLogic(time => (hue.hueShiftInDegrees = time * 0.1))
        )
        // context.add(group)
        context.paint()
        console.log("========================================")
        console.log(context.debugHierarchy())
    }
    void action()
}
