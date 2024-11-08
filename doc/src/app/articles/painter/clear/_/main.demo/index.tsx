/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    /**\n     * While transitioning to another color, we don't want the user\n     * to be able to click.\n     */\n    let enabled = false\n    canvas.addEventListener(\"click\", () => {\n        /**\n         * On click, we want to interpolate to another random color.\n         */\n        const colorInterpolator = tgdActionCreateVec3Interpolation({\n            from: new TgdVec3([clear.red, clear.green, clear.blue]),\n            to: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n            action: ([red, green, blue]) => {\n                clear.red = red\n                clear.green = green\n                clear.blue = blue\n            },\n        })\n        ctx.animSchedule({\n            duration: 500,\n            action: colorInterpolator,\n            onEnd: () => (enabled = true),\n        })\n        clear.red = Math.random() + 1\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}"}
const FULL = "import {\n    ArrayNumber3,\n    tgdActionCreateVec3Interpolation,\n    TgdContext,\n    TgdPainterClear,\n    TgdVec3,\n} from \"@tolokoban/tgd\"\n\nfunction init(canvas: HTMLCanvasElement): TgdContext {\n    const ctx = new TgdContext(canvas)\n    const clear = new TgdPainterClear(ctx, { color: [1, 0.7, 0, 1] })\n    ctx.add(clear)\n    /**\n     * While transitioning to another color, we don't want the user\n     * to be able to click.\n     */\n    let enabled = false\n    canvas.addEventListener(\"click\", () => {\n        /**\n         * On click, we want to interpolate to another random color.\n         */\n        const colorInterpolator = tgdActionCreateVec3Interpolation({\n            from: new TgdVec3([clear.red, clear.green, clear.blue]),\n            to: new TgdVec3([Math.random(), Math.random(), Math.random()]),\n            action: ([red, green, blue]) => {\n                clear.red = red\n                clear.green = green\n                clear.blue = blue\n            },\n        })\n        ctx.animSchedule({\n            duration: 500,\n            action: colorInterpolator,\n            onEnd: () => (enabled = true),\n        })\n        clear.red = Math.random() + 1\n        clear.green = Math.random()\n        clear.blue = Math.random()\n        ctx.paint()\n    })\n    ctx.paint()\n    return ctx\n}\n\nexport default function Demo() {\n    const handleMount = (canvas: HTMLCanvasElement | null) => {\n        if (canvas) init(canvas)\n    }\n    return (\n        <canvas\n            ref={handleMount}\n            style={{\n                width: \"320px\",\n                height: \"240px\",\n                background: \"#000\",\n            }}\n        ></canvas>\n    )\n}\n"

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