/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const material = new TgdMaterial({\n        varyings: { varPosition: \"vec3\" },\n        vertexShaderCodeForGetPosition: [\n            \"float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);\",\n            \"return vec4(pos.xy, pos.z + h, pos.w);\",\n        ],\n        vertexShaderCode: [\"varPosition = position;\"],\n        fragmentShaderCode: [\n            \"vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));\",\n            \"float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));\",\n            \"vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);\",\n            \"return vec4(color * light, 1);\",\n        ],\n    })\n    const meshes = [2, 8, 32].map((subdivisions, index) => {\n        const mesh = new TgdPainterMesh(context, {\n            geometry: new TgdGeometryGrid({\n                sizeX: 1.5,\n                sizeY: 1.5,\n                subdivisions,\n            }),\n            material,\n        })\n        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2)\n        return mesh\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: meshes,\n            depth: \"less\",\n        }),\n    )\n    context.camera.fitSpaceAtTarget(5.5, 2)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n}"}
const FULL = "import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryGrid,\n    TgdMaterial,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.1, 0.1, 1],\n        depth: 1,\n    })\n    const material = new TgdMaterial({\n        varyings: { varPosition: \"vec3\" },\n        vertexShaderCodeForGetPosition: [\n            \"float h = 0.2 * sin(6.0 * pos.x) * cos(6.0 * pos.y);\",\n            \"return vec4(pos.xy, pos.z + h, pos.w);\",\n        ],\n        vertexShaderCode: [\"varPosition = position;\"],\n        fragmentShaderCode: [\n            \"vec3 normal = normalize(cross(dFdx(varPosition), dFdy(varPosition)));\",\n            \"float light = 0.3 + 0.7 * abs(dot(normal, normalize(vec3(1, 2, 3))));\",\n            \"vec3 color = mix(vec3(0, .3, 1), vec3(1, .8, .2), varPosition.z * 2.5 + 0.5);\",\n            \"return vec4(color * light, 1);\",\n        ],\n    })\n    const meshes = [2, 8, 32].map((subdivisions, index) => {\n        const mesh = new TgdPainterMesh(context, {\n            geometry: new TgdGeometryGrid({\n                sizeX: 1.5,\n                sizeY: 1.5,\n                subdivisions,\n            }),\n            material,\n        })\n        mesh.transfo.setPosition(index - 1, 0, (index - 1) * 2)\n        return mesh\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: meshes,\n            depth: \"less\",\n        }),\n    )\n    context.camera.fitSpaceAtTarget(5.5, 2)\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        inertiaZoom: 1000,\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo />\n}\n"

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