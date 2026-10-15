/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./meshes.demo"

const FOCUS = {"Initializing WebGL":"    // The moon's transfo is relative to the box's one.\n    // It has no material, so it uses the box's one.\n    const moon: TgdMesh = {\n        geometry: new TgdGeometrySphereIco(),\n        transfo: new TgdTransfo({ position: [0, 0, 1] }),\n        visible: true,\n    }\n    const box: TgdMesh = {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        children: [moon],\n    }\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({\n            texture: assets.glb.suzanne.createTexture2D(context, 0),\n        }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    context.add(\n        new TgdPainterClear(context, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMeshes(context, { meshes: [box, suzanne] })],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n            // Heart beat: a short sharp pulse every second.\n            const beat = Math.abs(Math.sin(time * Math.PI)) ** 8\n            suzanne.transfo.setScale(0.8 + 0.4 * beat)\n            moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475))\n        }),\n    )\n    context.camera.fitSpaceAtTarget(9, 9)\n    context.play()"}
const FULL = "import {\n    type TgdContext,\n    TgdGeometryBox,\n    TgdGeometrySphereIco,\n    TgdMaterialFlatTexture,\n    TgdMaterialNormals,\n    type TgdMesh,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMeshes,\n    TgdPainterState,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    // The moon's transfo is relative to the box's one.\n    // It has no material, so it uses the box's one.\n    const moon: TgdMesh = {\n        geometry: new TgdGeometrySphereIco(),\n        transfo: new TgdTransfo({ position: [0, 0, 1] }),\n        visible: true,\n    }\n    const box: TgdMesh = {\n        geometry: new TgdGeometryBox(),\n        material: new TgdMaterialNormals(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        children: [moon],\n    }\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({\n            texture: assets.glb.suzanne.createTexture2D(context, 0),\n        }),\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    context.add(\n        new TgdPainterClear(context, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [new TgdPainterMeshes(context, { meshes: [box, suzanne] })],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)\n            // Heart beat: a short sharp pulse every second.\n            const beat = Math.abs(Math.sin(time * Math.PI)) ** 8\n            suzanne.transfo.setScale(0.8 + 0.4 * beat)\n            moon.transfo.distance = 2 * Math.abs(Math.cos(time * 2.8475))\n        }),\n    )\n    context.camera.fitSpaceAtTarget(9, 9)\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} assets={{ glb: { suzanne: SuzanneURL } }} controller={{ inertiaOrbit: 1000 }} gizmo />\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <div>
                <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                    {full ? "Show code details" : "Show full code"}
                </ViewButton>
            </div>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}