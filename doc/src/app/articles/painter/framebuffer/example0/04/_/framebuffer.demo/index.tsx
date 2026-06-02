/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"\tconst fb = new TgdPainterFramebufferWithAntiAliasing(context, {\n\t\tchildren: [meshPainter],\n\t\tdepthBuffer: true,\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst filters = new TgdPainterFilter(context, {\n\t\tfilters: [\n\t\t\tnew TgdFilterChromaticAberration({\n\t\t\t\tstrength: 10,\n\t\t\t}),\n\t\t],\n\t\ttexture: fb.textureColor0,\n\t});\n\tcontext.add(\n\t\tfb,\n\t\tfilters,\n\t\tnew TgdPainterLogic((time, delay) => {\n\t\t\tmesh.transfo.orbitAroundX(delay * Math.sin(time));\n\t\t\tmesh.transfo.orbitAroundZ(delay * 1.341);\n\t\t}),\n\t);"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdFilterChromaticAberration,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterFramebufferWithAntiAliasing,\n\tTgdPainterLogic,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport TextureURL from \"@/assets/image/whale-1024.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5;\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0, 0, 0, 1],\n\t});\n\tconst texture = new TgdTexture2D(context).loadBitmap(assets.image.texture);\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor: texture,\n\t\t}),\n\t});\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [clear, mesh],\n\t});\n\tconst fb = new TgdPainterFramebufferWithAntiAliasing(context, {\n\t\tchildren: [meshPainter],\n\t\tdepthBuffer: true,\n\t\ttextureColor0: new TgdTexture2D(context),\n\t});\n\tconst filters = new TgdPainterFilter(context, {\n\t\tfilters: [\n\t\t\tnew TgdFilterChromaticAberration({\n\t\t\t\tstrength: 10,\n\t\t\t}),\n\t\t],\n\t\ttexture: fb.textureColor0,\n\t});\n\tcontext.add(\n\t\tfb,\n\t\tfilters,\n\t\tnew TgdPainterLogic((time, delay) => {\n\t\t\tmesh.transfo.orbitAroundX(delay * Math.sin(time));\n\t\t\tmesh.transfo.orbitAroundZ(delay * 1.341);\n\t\t}),\n\t);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\timage: {\n\t\t\t\t\ttexture: TextureURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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