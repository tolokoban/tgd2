/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./points-cloud.demo"

const FOCUS = {
    "Detail #1":
        '    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();',
}
const FULL =
    'import {\n    tgdCanvasCreatePalette,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdDataset,\n    TgdGeometryBox,\n    TgdMaterialFaceOrientation,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterPointsCloud,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport MonkeyURL from "@/assets/mesh/high-res-monkey.glb";\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();\n    return (settings: Record<string, number>) => {\n        cloud.shadowIntensity = settings.shadowIntensity;\n        cloud.shadowThickness = settings.shadowThickness;\n        cloud.specularExponent = settings.specularExponent;\n        cloud.specularIntensity = settings.specularIntensity;\n        cloud.light = settings.light;\n        context.paint();\n    };\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                shadowIntensity: {\n                    label: "shadowIntensity",\n                    value: 0.5,\n                },\n                shadowThickness: {\n                    label: "shadowThickness",\n                    value: 1,\n                    min: 0,\n                    max: 2,\n                },\n                specularExponent: {\n                    label: "specularExponent",\n                    value: 10,\n                    min: -20,\n                    max: 20,\n                },\n                specularIntensity: {\n                    label: "specularIntensity",\n                    value: 0.33,\n                },\n                light: {\n                    label: "light",\n                    value: 1,\n                },\n            }}\n        />\n    );\n}\n'

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return (
        <>
            <div className="half-left">
                <Demo />
            </div>
            <div className="half-right">
                <div>
                    <ViewButton variant="elevated" onClick={() => setFull(!full)}>
                        {full ? "Show code details" : "Show full code"}
                    </ViewButton>
                </div>
                <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
            </div>
        </>
    )
}
