/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color: texture,\n        }),\n    })"}
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport TextureURL from \"@/assets/image/whale-1024.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 5\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color: texture,\n        }),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [clear, mesh],\n    })\n    context.add(\n        meshPainter,\n        new TgdPainterLogic((time, delay) => {\n            mesh.transfo.orbitAroundX(delay * Math.sin(time))\n            mesh.transfo.orbitAroundZ(delay * 1.341)\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    texture: TextureURL,\n                },\n            }}\n        />\n    )\n}\n"

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