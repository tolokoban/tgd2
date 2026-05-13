/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./_material.demo"

const FOCUS = {"Initializing WebGL":"    const texture1 = new TgdTexture2D(context).loadBitmap(assets.image.image1)\n    const texture2 = new TgdTexture2D(context).loadBitmap(assets.image.image2)\n    const textures = [texture1, texture2]\n    const material = new TgdMaterialFlatTexture({\n        texture: texture1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })"}
const FULL = "import {\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialFlat,\n    TgdMaterialFlatTexture,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    tgdCalcRandom3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport Image1URL from \"@/assets/image/uv-grid.webp\"\nimport Image2URL from \"@/assets/image/whale-1024.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture1 = new TgdTexture2D(context).loadBitmap(assets.image.image1)\n    const texture2 = new TgdTexture2D(context).loadBitmap(assets.image.image2)\n    const textures = [texture1, texture2]\n    const material = new TgdMaterialFlatTexture({\n        texture: texture1,\n    })\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [mesh],\n        }),\n    )\n    context.paint()\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })\n    return ({ texture }: { texture: number }) => {\n        material.texture = textures[texture]\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n                image: {\n                    image1: Image1URL,\n                    image2: Image2URL,\n                },\n            }}\n            settings={{\n                texture: {\n                    label: \"texture\",\n                    value: 0,\n                    step: [\"UV Grid\", \"Whale\"],\n                },\n            }}\n            gizmo\n        />\n    )\n}\n"

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