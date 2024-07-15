import {
    TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdCameraPerspective,
    TgdPainterState,
    TgdLoaderGlb,
    TgdPainterMesh,
    TgdMaterialDiffuse,
    TgdGeometry,
    TgdVec4,
    TgdDataset,
    TgdPainterFramebuffer,
    TgdPainterFilter,
    TgdFilterHueRotation,
} from "@tolokoban/tgd"

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
    const clear = new TgdPainterClear(context, {
        color: [1, 0.5, 0.5, 1],
        depth: 1,
    })
    context.add(clear)
    const state = new TgdPainterState(context, {
        depth: {
            func: "LESS",
            mask: true,
            range: [0, 1],
        },
    })
    const fb = new TgdPainterFramebuffer(context, {
        depthBuffer: true,
        viewportMatchingScale: 0.5,
    })
    fb.add(
        new TgdPainterClear(context, {
            color: [0, 0, 0, 1],
        }),
        state
    )
    context.add(fb)
    context.add(
        new TgdPainterFilter(context, {
            filters: [new TgdFilterHueRotation()],
            texture: fb.texture,
        })
    )
    context.paint()
    const action = async () => {
        const asset = await TgdLoaderGlb.glb("mesh/suzanne.glb")
        if (!asset) return

        context.paint()
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
        })
        asset.setAttrib(dataset, "POSITION", 0, 0)
        asset.setAttrib(dataset, "NORMAL", 0, 0)
        const mesh = new TgdPainterMesh(context, {
            geometry: new TgdGeometry({
                dataset,
                elements: asset.getMeshPrimitiveIndices(0, 0),
                drawMode: "TRIANGLES",
                computeNormalsIfMissing: true,
            }),
            material: new TgdMaterialDiffuse({
                color: new TgdVec4(1, 0.666, 0, 1),
            }),
        })
        state.add(mesh)
        clear.red = 0.5
        context.paint()
    }
    void action()
}
