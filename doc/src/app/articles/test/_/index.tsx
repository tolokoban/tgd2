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
    TgdMat3,
    TgdPainterMesh,
    TgdGeometryBox,
    TgdMaterialNormals,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

import SuzaneURL from "@/assets/mesh/suzanne.glb"

export default function DemoContainer() {
    return <View onReady={init} />
}

function init(context: TgdContext) {
    const camera = new TgdCameraPerspective({
        distance: 15,
        far: 100,
        near: 0.1,
        fovy: Math.PI / 8,
        zoom: 1,
    })
    camera.transfo.moveAlongAxes(2, 0, 0)
    context.camera = camera
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
        geo: {
            lat: 0,
            lng: 0,
            minLat: tgdCalcDegToRad(-60),
            maxLat: tgdCalcDegToRad(+60),
        },
    })
    context.paint()
    const action = async () => {
        const asset = await tgdLoadGlb(SuzaneURL)
        if (!asset) return

        console.log("Suzanne has been loaded!")
        const mesh = new TgdPainterMeshGltf(context, {
            asset,
        })
        const box = new TgdPainterMesh(context, {
            geometry: new TgdGeometryBox(),
            material: new TgdMaterialNormals(),
        })
        box.transfo.setPosition(0, 0, 0).distance = 2
        const box2 = new TgdPainterMesh(context, {
            geometry: new TgdGeometryBox(),
            material: new TgdMaterialNormals(),
        })
        box2.transfo.setPosition(0, 1, 0)
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [
                new TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                // mesh,
                box,
                box2,
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
            })
            // new TgdPainterLogic((_time, delay) =>
            //     box.transfo.orbitAroundY(delay)
            // )
        )
        context.play()
        document.addEventListener("keydown", evt => {
            const step = tgdCalcDegToRad(15)
            switch (evt.key) {
                case "0":
                    context.camera.face("+X+Y+Z")
                    context.camera.transfo.distance = 15
                    context.camera.zoom = 1
                    context.camera.transfo.setPosition(0, 0, 0)
                    mesh.transfo.orientation.face("+X+Y+Z")
                    break
                case ".":
                    context.camera.zoom = 1
                    break
                case "6":
                    if (evt.shiftKey) {
                        context.camera.transfo.orbitAroundY(step)
                    } else {
                        box.transfo.orbitAroundY(step)
                    }
                    break
                case "4":
                    if (evt.shiftKey) {
                        context.camera.transfo.orbitAroundY(-step)
                    } else {
                        box.transfo.orbitAroundY(-step)
                    }
                    break
                case "8":
                    if (evt.shiftKey) {
                        context.camera.transfo.orbitAroundX(-step)
                    } else {
                        box.transfo.orbitAroundX(-step)
                    }
                    break
                case "2":
                    if (evt.shiftKey) {
                        context.camera.transfo.orbitAroundX(step)
                    } else {
                        box.transfo.orbitAroundX(step)
                    }
                    break
            }
            context.paint()
        })
    }
    void action()
}
