/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marching-cubes.demo"

const FOCUS = {"Initializing WebGL":"    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner: [-2, -2, -2],\n        bboxSize: [4, 4, 4],\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const a: ArrayNumber3 = [-1, 0, 0]\n            const b: ArrayNumber3 = [+1, 0, 0]\n            const c: ArrayNumber3 = [-1, +1, 0]\n            return tgdSdfCapsule(p, a, b, 0.5, 0)\n            // return Math.min(\n            //     tgdSdfCapsule(p, a, b, 0.5, 0),\n            //     tgdSdfCapsule(p, a, c, 0.25, 0.1)\n            // )\n        },\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const dataPoint = tgdMakePointsCloudFromVolume(options, 1)\n    console.log(\"🚀 [marching-cubes.demo] dataPoint =\", dataPoint) // @FIXME: Remove this line written on 2025-06-06 at 15:42\n    const cloud = new TgdPainterPointsCloud(ctx, {\n        dataPoint,\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [cloud, mesh],\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        state\n    )\n    ctx.paint()"}
const FULL = "import {\n    ArrayNumber3,\n    MakeGeometryFromVolumeOptions,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    tgdMakeGeometryFromVolume,\n    tgdMakePointsCloudFromVolume,\n    TgdMaterialFaceOrientation,\n    TgdPainterAxes,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterPointsCloud,\n    TgdPainterState,\n    tgdSdfCapsule,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.transfo.distance = 9\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner: [-2, -2, -2],\n        bboxSize: [4, 4, 4],\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const a: ArrayNumber3 = [-1, 0, 0]\n            const b: ArrayNumber3 = [+1, 0, 0]\n            const c: ArrayNumber3 = [-1, +1, 0]\n            return tgdSdfCapsule(p, a, b, 0.5, 0)\n            // return Math.min(\n            //     tgdSdfCapsule(p, a, b, 0.5, 0),\n            //     tgdSdfCapsule(p, a, c, 0.25, 0.1)\n            // )\n        },\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const dataPoint = tgdMakePointsCloudFromVolume(options, 1)\n    console.log(\"🚀 [marching-cubes.demo] dataPoint =\", dataPoint) // @FIXME: Remove this line written on 2025-06-06 at 15:42\n    const cloud = new TgdPainterPointsCloud(ctx, {\n        dataPoint,\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [cloud, mesh],\n    })\n    ctx.add(\n        new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n        state\n    )\n    ctx.paint()\n    state.add(new TgdPainterAxes(ctx, { scale: 2 }))\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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