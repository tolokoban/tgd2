/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./zoom.demo"

const FOCUS = {"Detail #1":"\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\twrapS: \"MIRRORED_REPEAT\",\n\t\t\twrapT: \"MIRRORED_REPEAT\",\n\t\t},\n\t}).loadBitmap(assets.image.marylin)\n\tconst zoomFilter = new TgdFilterZoom({ zoom: 1 })\n\tcontext.add(\n\t\tnew TgdPainterFilter(context, {\n\t\t\ttexture,\n\t\t\tfilters: [zoomFilter],\n\t\t}),\n\t)\n\tcontext.paint()"}
const FULL = "import { type TgdContext, TgdFilterZoom, TgdPainterFilter, TgdTexture2D } from \"@tolokoban/tgd\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport MarylinURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst texture = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\twrapS: \"MIRRORED_REPEAT\",\n\t\t\twrapT: \"MIRRORED_REPEAT\",\n\t\t},\n\t}).loadBitmap(assets.image.marylin)\n\tconst zoomFilter = new TgdFilterZoom({ zoom: 1 })\n\tcontext.add(\n\t\tnew TgdPainterFilter(context, {\n\t\t\ttexture,\n\t\t\tfilters: [zoomFilter],\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn ({ zoom, x, y }: { zoom: number; x: number; y: number }) => {\n\t\tzoomFilter.zoom = zoom\n\t\tzoomFilter.translation.reset(x, y)\n\t\tcontext.paint()\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\twidth=\"512px\"\n\t\t\theight=\"512px\"\n\t\t\tassets={{ image: { marylin: MarylinURL } }}\n\t\t\tsettings={{\n\t\t\t\tzoom: { label: \"zoom\", value: 1, min: 0.25, max: 4 },\n\t\t\t\tx: { label: \"translation X\", value: 0, min: -1, max: 1 },\n\t\t\t\ty: { label: \"translation Y\", value: 0, min: -1, max: 1 },\n\t\t\t}}\n\t\t/>\n\t)\n}\n"

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