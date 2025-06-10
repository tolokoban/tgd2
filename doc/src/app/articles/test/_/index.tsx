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
    TgdPainterNode,
    TgdMaterialGhost,
    TgdMaterialDiffuse,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

import SuzaneURL from "@/assets/mesh/suzanne.glb"

export default function DemoContainer() {
    return <View onReady={init} gizmo />
}

function init(context: TgdContext) {
    const camera = new TgdCameraPerspective({
        transfo: { distance: 15 },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 8,
        zoom: 1,
    })
    context.camera = camera
    camera.transfo.orientation.face("+X+Y+Z")
    camera.transfo.setPosition(0, 0, -3)
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
        const mesh = new TgdPainterNode({
            children: [
                new TgdPainterMeshGltf(context, {
                    asset,
                }),
            ],
            transfo: {
                position: [0, 0, -3],
            },
        })
        const axes = new TgdPainterAxes(context, { scale: 10 })
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [
                new TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                mesh,
                axes,
            ],
        })
        const hue = new TgdFilterHueRotation()
        context.add(
            state,
            new TgdPainterLogic((time, delay) => {
                const { camera } = context
                const { axisX, axisY, axisZ } = camera.transfo
                axes.updateAxes(axisX, axisY, axisZ)
                console.log("🚀 [index] axisX.x =", axisX.x) // @FIXME: Remove this line written on 2025-06-10 at 18:13
            })
        )
        context.play()
        document.addEventListener("keydown", evt => {
            const step = tgdCalcDegToRad(15)
            let angX = 0
            let angY = 0
            switch (evt.key) {
                case "0":
                    context.camera.transfo.orientation.face("+X+Y+Z")
                    context.camera.zoom = 1
                    context.camera.transfo.setPosition(0, 0, 0).setDistance(15)
                    break
                case ".":
                    context.camera.zoom = 1
                    break
                case "6":
                    angY = step
                    break
                case "4":
                    angY = -step
                    break
                case "8":
                    angX = -step
                    break
                case "2":
                    angX = step
                    break
                case " ":
                    context.camera.transfo.debug("SPACE")
                    context.paint()
                    return
            }
            context.camera.transfo.orbitAroundX(angX)
            context.camera.transfo.orbitAroundY(angY)
            context.camera.debug("Camera")
            context.paint()
        })
    }
    void action()
}
