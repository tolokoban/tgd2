/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"\n    context.camera = new TgdCameraPerspective({\n        distance: 4,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI * 0.25,\n        zoom: 1,\n    })\n    const orbit = new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n        latlng: {\n            lat: Math.PI * 0.1,\n            minLat: Math.PI * 0.1,\n        },\n    })\n    const framebufferRender = new TgdPainterFramebuffer(context)\n    const framebufferCopy = new TgdPainterFramebuffer(context)\n    const material = new Material()\n    material.texture = context.textures2D.create({\n        image: assets.image.background,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        // cull: webglPresetCull.front,\n        children: [\n            new TgdPainterClear(context, {\n                color: new TgdVec4(0, 0.1, 0.3),\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n            }),\n            new TgdPainterAxis(context, { scale: 2 }),\n        ],\n    })\n    context.add(\n        painter,\n        new TgdPainterLogic((time, delay) => {\n            // console.log(\"logic...\")\n            // orbit.orbitLatLng(0.75 * Math.PI * Math.sin(time * 0.001), 0)\n        })\n    )\n    // orbit.orbitLatLng(Math.PI, 0)\n    context.paint()"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdFilterHueRotation,\n    TgdFilterZoom,\n    TgdPainterAxis,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdVec4,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport { Material } from \"./material\"\n\n// import WorldURL from \"./world.glb\"\nimport WorldURL from \"@/assets/mesh/suzanne.glb\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\n    context.camera = new TgdCameraPerspective({\n        distance: 4,\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI * 0.25,\n        zoom: 1,\n    })\n    const orbit = new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n        latlng: {\n            lat: Math.PI * 0.1,\n            minLat: Math.PI * 0.1,\n        },\n    })\n    const framebufferRender = new TgdPainterFramebuffer(context)\n    const framebufferCopy = new TgdPainterFramebuffer(context)\n    const material = new Material()\n    material.texture = context.textures2D.create({\n        image: assets.image.background,\n    })\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        // cull: webglPresetCull.front,\n        children: [\n            new TgdPainterClear(context, {\n                color: new TgdVec4(0, 0.1, 0.3),\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n            }),\n            new TgdPainterAxis(context, { scale: 2 }),\n        ],\n    })\n    context.add(\n        painter,\n        new TgdPainterLogic((time, delay) => {\n            // console.log(\"logic...\")\n            // orbit.orbitLatLng(0.75 * Math.PI * Math.sin(time * 0.001), 0)\n        })\n    )\n    // orbit.orbitLatLng(Math.PI, 0)\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    world: WorldURL,\n                },\n                // image: {\n                //     background: BackgroundURL,\n                // },\n            }}\n        />\n    )\n}\n"

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