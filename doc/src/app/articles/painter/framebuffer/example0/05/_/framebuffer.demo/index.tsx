/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })"}
const FULL = "import {\n    TgdContext,\n    TgdFilterChromaticAberration,\n    TgdFilterHueRotation,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport TextureURL from \"@/assets/image/whale-1024.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 6\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color: texture,\n        }),\n    })\n    mesh.transfo.setPosition(-0.5, 0, 0)\n    const mesh2 = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color: texture,\n        }),\n    })\n    mesh2.transfo.setPosition(0.5, 0, 0)\n    const meshPainter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [clear, mesh, mesh2],\n    })\n    const fb = new TgdPainterFramebuffer(context, {\n        children: [meshPainter],\n        depthBuffer: true,\n        textureColor0: new TgdTexture2D(context),\n    })\n    const chromaticAberrationFilter = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const hueRotationFilter = new TgdFilterHueRotation()\n    const filters = new TgdPainterFilter(context, {\n        filters: [hueRotationFilter, chromaticAberrationFilter],\n        texture: fb.textureColor0,\n    })\n    context.add(\n        fb,\n        filters,\n        new TgdPainterLogic((time, delay) => {\n            mesh.transfo.orbitAroundX(delay * Math.sin(time * 0.5))\n            mesh.transfo.orbitAroundZ(delay * 0.341)\n            mesh2.transfo.orbitAroundX(delay * Math.sin(time * 0.714))\n            mesh2.transfo.orbitAroundZ(-delay * 0.471)\n            chromaticAberrationFilter.strength = Math.sin(time) * 10\n            hueRotationFilter.hueShiftInRadians += delay\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    texture: TextureURL,\n                },\n            }}\n        />\n    )\n}\n"

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