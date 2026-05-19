/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n    const material = new TgdMaterialFaceOrientation()\n    const geometries = [\n        new TgdGeometrySphereIco({\n            center: [+0.5, 0, 0],\n        }),\n        new TgdGeometryBox({\n            center: [-0.51, 1, 0],\n        }),\n        new TgdGeometrySphereIco({\n            center: [-0.5, 0, 0],\n        }),\n        new TgdGeometryBox({\n            center: [+0.51, 1, 0],\n        }),\n    ]\n    const geometry = TgdGeometry.join(geometries)\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [mesh],\n            depth: webglPresetDepth.less,\n        }),\n    )\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaPanning: 1000,\n        inertiaZoom: 1000,\n    })\n}"}
const FULL = "import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometry,\n    TgdGeometryBox,\n    TgdGeometrySphereIco,\n    TgdMaterialFaceOrientation,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1] })\n    const material = new TgdMaterialFaceOrientation()\n    const geometries = [\n        new TgdGeometrySphereIco({\n            center: [+0.5, 0, 0],\n        }),\n        new TgdGeometryBox({\n            center: [-0.51, 1, 0],\n        }),\n        new TgdGeometrySphereIco({\n            center: [-0.5, 0, 0],\n        }),\n        new TgdGeometryBox({\n            center: [+0.51, 1, 0],\n        }),\n    ]\n    const geometry = TgdGeometry.join(geometries)\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [mesh],\n            depth: webglPresetDepth.less,\n        }),\n    )\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaPanning: 1000,\n        inertiaZoom: 1000,\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo />\n}\n"

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