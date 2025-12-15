/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext) {\n    const uniforms = {\n        uniExponent: 0.5,\n    }\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_palette({\n                a: [0.502, 0.502, 0.502, 1],\n                b: [0.502, 0.502, 0.502, 1],\n                c: [1.0, 1.0, 1.0, 1],\n                d: [0.0, 0.329, 0.671, 1],\n            }),\n            ...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n        },\n        uniforms: {\n            uniExponent: \"float\",\n        },\n        mainCode: [\n            \"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n            \"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n            \"vec4 color = palette(index);\",\n            \"float light = pow(dot(color, color), uniExponent);\",\n            \"FragColor = color * vec4(vec3(light), 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                program.uniform1f(\"uniExponent\", uniforms.uniExponent)\n            },\n        })\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        uniforms.uniExponent = settings.uniExponent\n    }\n}"}
const FULL = "import {\n    tgdCodeFunction_fbm,\n    tgdCodeFunction_palette,\n    TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const uniforms = {\n        uniExponent: 0.5,\n    }\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_palette({\n                a: [0.502, 0.502, 0.502, 1],\n                b: [0.502, 0.502, 0.502, 1],\n                c: [1.0, 1.0, 1.0, 1],\n                d: [0.0, 0.329, 0.671, 1],\n            }),\n            ...tgdCodeFunction_fbm({ octaves: 4, G: 0.5 }),\n        },\n        uniforms: {\n            uniExponent: \"float\",\n        },\n        mainCode: [\n            \"float scale = 2.0 + 1.5 * sin(uniTime * .23);\",\n            \"float index = fbm(vec3(scale * varUV + vec2(uniTime * .2, 0.0), uniTime * .1));\",\n            \"vec4 color = palette(index);\",\n            \"float light = pow(dot(color, color), uniExponent);\",\n            \"FragColor = color * vec4(vec3(light), 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                program.uniform1f(\"uniExponent\", uniforms.uniExponent)\n            },\n        })\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        uniforms.uniExponent = settings.uniExponent\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            settings={{\n                uniExponent: {\n                    label: \"uniExponent\",\n                    min: -10,\n                    max: 10,\n                    step: 0.02,\n                    value: 0.5,\n                },\n            }}\n        />\n    )\n}\n"

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