/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(canvas: HTMLCanvasElement): TgdContext {\n\tconst ctx = new TgdContext(canvas);\n\tconst clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] });\n\tctx.add(clear);\n\t/**\n\t * While transitioning to another color, we don't want the user\n\t * to be able to click.\n\t */\n\tlet enabled = false;\n\tcanvas.addEventListener(\"click\", () => {\n\t\t/**\n\t\t * On click, we want to interpolate to another random color.\n\t\t */\n\t\tconst colorInterpolator = tgdActionCreateVec3Interpolation({\n\t\t\tfrom: new TgdVec3([clear.red, clear.green, clear.blue]),\n\t\t\tto: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n\t\t\taction: ([red, green, blue]) => {\n\t\t\t\tclear.red = red;\n\t\t\t\tclear.green = green;\n\t\t\t\tclear.blue = blue;\n\t\t\t},\n\t\t});\n\t\tctx.animSchedule({\n\t\t\tduration: 0.5,\n\t\t\taction: colorInterpolator,\n\t\t\tonEnd: () => (enabled = true),\n\t\t});\n\t\tclear.red = Math.random() + 1;\n\t\tclear.green = Math.random();\n\t\tclear.blue = Math.random();\n\t});\n\tctx.paint();\n\treturn ctx;\n}"}
const FULL = "import {\n\ttgdActionCreateVec3Interpolation,\n\tTgdContext,\n\tTgdPainterClear,\n\tTgdVec3,\n} from \"@tolokoban/tgd\";\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n\tconst ctx = new TgdContext(canvas);\n\tconst clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] });\n\tctx.add(clear);\n\t/**\n\t * While transitioning to another color, we don't want the user\n\t * to be able to click.\n\t */\n\tlet enabled = false;\n\tcanvas.addEventListener(\"click\", () => {\n\t\t/**\n\t\t * On click, we want to interpolate to another random color.\n\t\t */\n\t\tconst colorInterpolator = tgdActionCreateVec3Interpolation({\n\t\t\tfrom: new TgdVec3([clear.red, clear.green, clear.blue]),\n\t\t\tto: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n\t\t\taction: ([red, green, blue]) => {\n\t\t\t\tclear.red = red;\n\t\t\t\tclear.green = green;\n\t\t\t\tclear.blue = blue;\n\t\t\t},\n\t\t});\n\t\tctx.animSchedule({\n\t\t\tduration: 0.5,\n\t\t\taction: colorInterpolator,\n\t\t\tonEnd: () => (enabled = true),\n\t\t});\n\t\tclear.red = Math.random() + 1;\n\t\tclear.green = Math.random();\n\t\tclear.blue = Math.random();\n\t});\n\tctx.paint();\n\treturn ctx;\n}\n\nexport default function Demo() {\n\tconst handleMount = (canvas: HTMLCanvasElement | null) => {\n\t\tif (canvas) init(canvas);\n\t};\n\treturn (\n\t\t<canvas\n\t\t\tref={handleMount}\n\t\t\tstyle={{\n\t\t\t\twidth: \"320px\",\n\t\t\t\theight: \"240px\",\n\t\t\t\tbackground: \"#000\",\n\t\t\t}}\n\t\t></canvas>\n\t);\n}\n"

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