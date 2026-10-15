import {
    type TgdContext,
    TgdGeometryBox,
    TgdGeometrySphereIco,
    TgdMaterialFlatTexture,
    TgdMaterialNormals,
    type TgdMesh,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMeshes,
    TgdPainterState,
    TgdTransfo,
} from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    // The moon's transfo is relative to the box's one.
    // It has no material, so it uses the box's one.
    const moon: TgdMesh = {
        geometry: new TgdGeometrySphereIco(),
        transfo: new TgdTransfo({ position: [0, 0, 1] }),
        visible: true,
    }
    const box: TgdMesh = {
        geometry: new TgdGeometryBox(),
        material: new TgdMaterialNormals(),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),
        visible: true,
        children: [moon],
    }
    const suzanne: TgdMesh = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new TgdMaterialFlatTexture({
            texture: assets.glb.suzanne.createTexture2D(context, 0),
        }),
        transfo: new TgdTransfo(),
        visible: true,
    }
    context.add(
        new TgdPainterClear(context, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),
        new TgdPainterState(context, {
            depth: "less",
            cull: "back",
            children: [new TgdPainterMeshes(context, { meshes: [box, suzanne] })],
        }),
        new TgdPainterLogic((time, delta) => {
            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)
            // Heart beat: a short sharp pulse every second.
            const beat = Math.abs(Math.sin(time * Math.PI)) ** 8
            suzanne.transfo.setScale(0.8 + 0.4 * beat)
            moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475))
        }),
    )
    context.camera.fitSpaceAtTarget(9, 9)
    context.play()
    // #end
}

export default function Demo() {
    return <View onReady={init} assets={{ glb: { suzanne: SuzanneURL } }} controller={{ inertiaOrbit: 1000 }} gizmo />
}
