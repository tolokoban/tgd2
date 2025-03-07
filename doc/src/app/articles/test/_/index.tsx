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
        distance: 3.5,
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4,
        zoom: 1,
    })
    camera.moveTarget(2, 0, 0)
    context.camera = camera
    camera.face("+X+Y+Z")
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
        // geo: {
        //     lat: 0,
        //     lng: 0,
        //     minLat: tgdCalcDegToRad(-45),
        //     maxLat: tgdCalcDegToRad(+45),
        // },
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
        box.transfo.setPosition(2, 0, 0)
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [
                new TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                mesh,
                box,
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
            // new TgdPainterLogic(time => (hue.hueShiftInDegrees = time * 0.1)),
        )
        context.paint()
        document.addEventListener("keydown", evt => {
            const step = tgdCalcDegToRad(15)
            switch (evt.key) {
                case "0":
                    context.camera.face("+X+Y+Z")
                    mesh.transfo.orientation.face("+X+Y+Z")
                    break
                case ".":
                    context.camera.zoom = 1
                    break
                case "6":
                    if (!evt.shiftKey) {
                        context.camera.orbitAroundY(step)
                    } else {
                        mesh.transfo.orbitAroundY(step)
                    }
                    break
                case "4":
                    if (!evt.shiftKey) {
                        context.camera.orbitAroundY(-step)
                    } else {
                        mesh.transfo.orbitAroundY(-step)
                    }
                    break
                case "8":
                    if (!evt.shiftKey) {
                        context.camera.orbitAroundX(-step)
                    } else {
                        mesh.transfo.orbitAroundX(-step)
                    }
                    break
                case "2":
                    if (!evt.shiftKey) {
                        context.camera.orbitAroundX(step)
                    } else {
                        mesh.transfo.orbitAroundX(step)
                    }
                    break
            }
            context.paint()
        })
    }
    void action()
}
