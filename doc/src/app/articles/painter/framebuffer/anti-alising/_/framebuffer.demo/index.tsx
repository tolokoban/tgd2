/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./framebuffer.demo"

const FOCUS = {"Detail #1":"\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0, 0, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context).loadBitmap(assets.image.grid);\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tmesh.transfo.setEulerRotation(36, 60, 0);\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 1 / 8,\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t},\n\t\t}),\n\t\tchildren: [clear, meshPainter],\n\t});\n\tconst filterAA = new TgdFilterAntiAliasing();\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [filterAA],\n\t\tflipY: true,\n\t});\n\tglobalThis.setInterval(() => {\n\t\tfilterAA.strength = 1 - filterAA.strength;\n\t\tcontext.paint();\n\t}, 2000);\n\tcontext.add(framebuffer, filters);\n\tcontext.paint();"}
const FULL = "import {\n\ttype TgdContext,\n\tTgdPainterBackground,\n\tTgdFilterAntiAliasing,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterLogic,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdGeometryBox,\n\tTgdMaterialDiffuse,\n\ttgdCalcModuloDiscrete,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport GridURL from \"@/assets/image/uv-grid-3x2.webp\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0, 0, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context).loadBitmap(assets.image.grid);\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tgeometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tmesh.transfo.setEulerRotation(36, 60, 0);\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tviewportMatchingScale: 1 / 8,\n\t\ttextureColor0: new TgdTexture2D(context, {\n\t\t\tparams: {\n\t\t\t\tmagFilter: \"LINEAR\",\n\t\t\t\tminFilter: \"LINEAR\",\n\t\t\t},\n\t\t}),\n\t\tchildren: [clear, meshPainter],\n\t});\n\tconst filterAA = new TgdFilterAntiAliasing();\n\tconst filters = new TgdPainterFilter(context, {\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [filterAA],\n\t\tflipY: true,\n\t});\n\tglobalThis.setInterval(() => {\n\t\tfilterAA.strength = 1 - filterAA.strength;\n\t\tcontext.paint();\n\t}, 2000);\n\tcontext.add(framebuffer, filters);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tassets={{\n\t\t\t\timage: { grid: GridURL },\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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