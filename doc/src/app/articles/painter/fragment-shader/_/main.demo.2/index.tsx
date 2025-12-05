/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext): TgdContext {\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_palette(),\n            ...tgdCodeFunction_fbm({ G: 0.5 }),\n        },\n        mainCode: [\n            \"vec2 p = uv2polar(varUV);\",\n            \"float color = fbm(vec3(p.xx, uniTime));\",\n            \"FragColor = palette(color);\",\n        ],\n    })\n    shader.debug()\n    context.add(new TgdPainterFragmentShader(context, { shader }))\n    context.play()\n    return context\n}"}
const FULL = "import {\n    tgdCodeFunction_fbm,\n    tgdCodeFunction_palette,\n    tgdCodeFunction_uv2polar,\n    TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext): TgdContext {\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_palette(),\n            ...tgdCodeFunction_fbm({ G: 0.5 }),\n        },\n        mainCode: [\n            \"vec2 p = uv2polar(varUV);\",\n            \"float color = fbm(vec3(p.xx, uniTime));\",\n            \"FragColor = palette(color);\",\n        ],\n    })\n    shader.debug()\n    context.add(new TgdPainterFragmentShader(context, { shader }))\n    context.play()\n    return context\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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