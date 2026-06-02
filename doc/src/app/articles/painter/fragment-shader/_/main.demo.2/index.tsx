/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_uv2polar(),\n\t\t\t...tgdCodeFunction_palette(),\n\t\t\t...tgdCodeFunction_fbm({ G: 0.5 }),\n\t\t},\n\t\tmainCode: [\n\t\t\t\"vec2 p = uv2polar(varUV);\",\n\t\t\t\"float color = fbm(vec3(p.xx, uniTime));\",\n\t\t\t\"FragColor = palette(color);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(new TgdPainterFragmentShader(context, { shader }));\n\tcontext.play();\n}"}
const FULL = "import {\n\ttgdCodeFunction_fbm,\n\ttgdCodeFunction_palette,\n\ttgdCodeFunction_uv2polar,\n\ttype TgdContext,\n\tTgdPainterFragmentShader,\n\tTgdShaderFragment,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_uv2polar(),\n\t\t\t...tgdCodeFunction_palette(),\n\t\t\t...tgdCodeFunction_fbm({ G: 0.5 }),\n\t\t},\n\t\tmainCode: [\n\t\t\t\"vec2 p = uv2polar(varUV);\",\n\t\t\t\"float color = fbm(vec3(p.xx, uniTime));\",\n\t\t\t\"FragColor = palette(color);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(new TgdPainterFragmentShader(context, { shader }));\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />;\n}\n"

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