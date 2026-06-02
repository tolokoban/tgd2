/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./add.demo"

const FOCUS = {"Detail #1":"\tconst camera = new TgdCameraPerspective();\n\tcamera.spaceHeightAtTarget = 2;\n\tcontext.camera = camera;\n\tconst planes = [\n\t\t[1, 0, 0],\n\t\t[0, 1, 0],\n\t\t[0, 0, 1],\n\t\t[1, 1, 1],\n\t].map(([R, G, B], index) => makePlane(context, R, G, B, index));\n\tconst state = new TgdPainterState(context, {\n\t\tblend: \"add\",\n\t\tchildren: planes,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n\t\tnew TgdPainterBackground(context, {\n\t\t\ttexture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n\t\t}),\n\t\tstate,\n\t);\n\tcontext.paint();"}
const FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdGeometryPlane,\n\tTgdMaterialFlat,\n\tTgdPainterBackground,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport BackgroundURL from \"@/assets/image/dino.webp\";\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst camera = new TgdCameraPerspective();\n\tcamera.spaceHeightAtTarget = 2;\n\tcontext.camera = camera;\n\tconst planes = [\n\t\t[1, 0, 0],\n\t\t[0, 1, 0],\n\t\t[0, 0, 1],\n\t\t[1, 1, 1],\n\t].map(([R, G, B], index) => makePlane(context, R, G, B, index));\n\tconst state = new TgdPainterState(context, {\n\t\tblend: \"add\",\n\t\tchildren: planes,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n\t\tnew TgdPainterBackground(context, {\n\t\t\ttexture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n\t\t}),\n\t\tstate,\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\toptions={{\n\t\t\t\tdepth: true,\n\t\t\t\talpha: false,\n\t\t\t\tantialias: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzanne: SuzanneURL,\n\t\t\t\t},\n\t\t\t\timage: {\n\t\t\t\t\tbackground: BackgroundURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makePlane(\n\tcontext: TgdContext,\n\tR: number,\n\tG: number,\n\tB: number,\n\tindex: number,\n) {\n\tconst angle = index * 0.5 * Math.PI;\n\tconst radius = 0.6;\n\tconst x = radius * Math.cos(angle);\n\tconst y = radius * Math.sin(angle);\n\tconsole.log(\"🐞 [blend.demo@68] x, y =\", x, y); // @FIXME: Remove this line written on 2026-03-20 at 18:38\n\treturn new TgdPainterMesh(context, {\n\t\ttransfo: {\n\t\t\tposition: [x, y, 0],\n\t\t},\n\t\tgeometry: new TgdGeometryPlane(),\n\t\tmaterial: new TgdMaterialFlat({\n\t\t\tcolor: [R, G, B, 0.6],\n\t\t}),\n\t});\n}\n"

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