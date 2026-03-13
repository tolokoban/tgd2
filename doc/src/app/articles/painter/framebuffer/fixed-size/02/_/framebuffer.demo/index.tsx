/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const cubeInside = new CubePainter(context, texture, 1)\n    const textureColor0 = new TgdTexture2D(context).loadBitmap(tgdCanvasCreate(512, 512))\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        fixedSize: true,\n        depthBuffer: true,\n        textureColor0,\n        children: [cubeInside],\n    })\n    const cubeOutside = new CubePainter(context, textureColor0, 0.2)\n    context.camera.fitSpaceAtTarget(1.8, 1.8)\n    context.add(framebuffer, cubeOutside)\n    context.play()"}
const FULL = "import {\n    tgdCanvasCreate,\n    TgdContext,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFramebuffer,\n    TgdPainterGroup,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ImageURL from \"@/assets/image/uv-grid-2x2.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const cubeInside = new CubePainter(context, texture, 1)\n    const textureColor0 = new TgdTexture2D(context).loadBitmap(tgdCanvasCreate(512, 512))\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        fixedSize: true,\n        depthBuffer: true,\n        textureColor0,\n        children: [cubeInside],\n    })\n    const cubeOutside = new CubePainter(context, textureColor0, 0.2)\n    context.camera.fitSpaceAtTarget(1.8, 1.8)\n    context.add(framebuffer, cubeOutside)\n    context.play()\n}\n\nclass CubePainter extends TgdPainterGroup {\n    constructor(context: TgdContext, texture: TgdTexture2D, rotationSpeed = 1) {\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.2, 0.1, 1],\n            depth: 1,\n        })\n        const cube = new TgdPainterMesh(context, {\n            material: new TgdMaterialDiffuse({\n                color: texture,\n                light: new TgdLight({\n                    direction: [-2, 1, -5],\n                }),\n                lockLightsToCamera: true,\n            }),\n        })\n        const state = new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"off\",\n            children: [\n                cube,\n                (time) => {\n                    cube.transfo.setEulerRotation(time * rotationSpeed * 71.54, time * rotationSpeed * 47.51, 0)\n                },\n            ],\n        })\n        super([clear, state])\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo={false}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            assets={{\n                image: { texture: ImageURL },\n            }}\n        />\n    )\n}\n"

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