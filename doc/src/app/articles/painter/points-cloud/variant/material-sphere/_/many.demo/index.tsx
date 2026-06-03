/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./points-cloud.demo"

const FOCUS = {"Detail #1":"\tcontext.camera.transfo.distance = 5\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst dataset = makeDataset(assets.glb.monkey)\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count) // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision: \"low\" }),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()"}
const FULL = "import {\n\tTgdColor,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\ttype TgdDataGlb,\n\tTgdDataset,\n\tTgdPainterClear,\n\tTgdPainterPointsCloud,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCanvasCreatePalette,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport MonkeyURL from \"@/assets/mesh/high-res-monkey.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 5\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tmaxZoom: 5,\n\t\tminZoom: 0.5,\n\t\tspeedZoom: 1,\n\t})\n\tconst clear = new TgdPainterClear(context, {\n\t\tcolor: [0.1, 0.2, 0.3, 1],\n\t\tdepth: 1,\n\t})\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(createPalette())\n\tconst dataset = makeDataset(assets.glb.monkey)\n\tconsole.log(\"🐞 [points-cloud.demo@52] dataset.count =\", dataset.count) // @FIXME: Remove this line written on 2026-06-02 at 15:07\n\tconst cloud = new TgdPainterPointsCloud(context, {\n\t\tdataPoint: new Float32Array(dataset.data),\n\t\tdataUV: new Float32Array(makeUV(assets.glb.monkey)),\n\t\ttexture,\n\t\tfragCode: TgdPainterPointsCloud.fragCodeSphere({ depthPrecision: \"low\" }),\n\t})\n\tconst state = new TgdPainterState(context, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [cloud],\n\t})\n\tcontext.add(clear, state)\n\tcontext.paint()\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\toptions={{\n\t\t\t\tpreserveDrawingBuffer: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: { monkey: MonkeyURL },\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction makeDataset(glb: TgdDataGlb) {\n\tconst dataset = new TgdDataset({\n\t\tPOSITION: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"POSITION\")\n\tconst { set } = dataset.getAttribAccessor(\"POSITION\")\n\tconst count = dataset.count\n\tconst radius = 0.01\n\tfor (let i = 0; i < count; i++) {\n\t\tset(radius, i, 3)\n\t}\n\treturn dataset\n}\n\nfunction makeUV(glb: TgdDataGlb) {\n\tconst uvs: number[] = []\n\tconst dataset = new TgdDataset({\n\t\tNORMAL: \"vec4\",\n\t})\n\tglb.setAttrib(dataset, \"NORMAL\")\n\tconst { get } = dataset.getAttribAccessor(\"NORMAL\")\n\tconst count = dataset.count\n\tfor (let i = 0; i < count; i++) {\n\t\tconst nx = get(i, 0)\n\t\tconst ny = get(i, 1)\n\t\t// const nz = get(i, 2);\n\t\tconst u = 0.5 * (1 + nx)\n\t\tconst v = 0.5 * (1 + ny)\n\t\tuvs.push(u, v)\n\t}\n\treturn uvs\n}\n\nfunction createPalette() {\n\tconst colors: TgdColor[] = []\n\tconst S = 1\n\tfor (const L of [0.1, 0.5, 0.9]) {\n\t\tfor (const H of [0, 0.2, 0.4, 0.6, 0.8, 1]) {\n\t\t\tcolors.push(TgdColor.fromHSL(H, S, L))\n\t\t}\n\t}\n\treturn tgdCanvasCreatePalette(colors, 6)\n}\n"

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