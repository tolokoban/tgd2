/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n\tconst uniforms = {\n\t\tuniExponent: 0.5,\n\t};\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_palette({\n\t\t\t\ta: [0.502, 0.502, 0.502, 1],\n\t\t\t\tb: [0.502, 0.502, 0.502, 1],\n\t\t\t\tc: [1.0, 1.0, 1.0, 1],\n\t\t\t\td: [0.0, 0.329, 0.671, 1],\n\t\t\t}),\n\t\t\t...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n\t\t},\n\t\tuniforms: {\n\t\t\tuniExponent: \"float\",\n\t\t},\n\t\tmainCode: [\n\t\t\t\"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n\t\t\t\"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n\t\t\t\"vec4 color = palette(index);\",\n\t\t\t\"float light = pow(dot(color, color), uniExponent);\",\n\t\t\t\"FragColor = color * vec4(vec3(light), 1.0);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(\n\t\tnew TgdPainterFragmentShader(context, {\n\t\t\tshader,\n\t\t\tsetUniforms: ({ program }) => {\n\t\t\t\tprogram.uniform1f(\"uniExponent\", uniforms.uniExponent);\n\t\t\t},\n\t\t}),\n\t);\n\tcontext.play();\n\treturn (settings: Record<string, number>) => {\n\t\tuniforms.uniExponent = settings.uniExponent;\n\t};\n}"}
const FULL = "import {\n\ttgdCodeFunction_fbm,\n\ttgdCodeFunction_palette,\n\ttype TgdContext,\n\tTgdPainterFragmentShader,\n\tTgdShaderFragment,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext) {\n\tconst uniforms = {\n\t\tuniExponent: 0.5,\n\t};\n\tconst shader = new TgdShaderFragment({\n\t\tfunctions: {\n\t\t\t...tgdCodeFunction_palette({\n\t\t\t\ta: [0.502, 0.502, 0.502, 1],\n\t\t\t\tb: [0.502, 0.502, 0.502, 1],\n\t\t\t\tc: [1.0, 1.0, 1.0, 1],\n\t\t\t\td: [0.0, 0.329, 0.671, 1],\n\t\t\t}),\n\t\t\t...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n\t\t},\n\t\tuniforms: {\n\t\t\tuniExponent: \"float\",\n\t\t},\n\t\tmainCode: [\n\t\t\t\"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n\t\t\t\"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n\t\t\t\"vec4 color = palette(index);\",\n\t\t\t\"float light = pow(dot(color, color), uniExponent);\",\n\t\t\t\"FragColor = color * vec4(vec3(light), 1.0);\",\n\t\t],\n\t});\n\tshader.debug();\n\tcontext.add(\n\t\tnew TgdPainterFragmentShader(context, {\n\t\t\tshader,\n\t\t\tsetUniforms: ({ program }) => {\n\t\t\t\tprogram.uniform1f(\"uniExponent\", uniforms.uniExponent);\n\t\t\t},\n\t\t}),\n\t);\n\tcontext.play();\n\treturn (settings: Record<string, number>) => {\n\t\tuniforms.uniExponent = settings.uniExponent;\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tsettings={{\n\t\t\t\tuniExponent: {\n\t\t\t\t\tlabel: \"uniExponent\",\n\t\t\t\t\tmin: -10,\n\t\t\t\t\tmax: 10,\n\t\t\t\t\tstep: 0.02,\n\t\t\t\t\tvalue: 0.5,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n"

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