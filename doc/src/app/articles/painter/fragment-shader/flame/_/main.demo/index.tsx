/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./main.demo"

const FOCUS = {"Detail #1":"function init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: \"sampler2D\",\n        },\n        mainCode: [\n            \"float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));\",\n            \"shift -= .0;\",\n            \"shift *= .25 * (1.0 - varUV.y);\",\n            \"vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));\",\n            \"FragColor = vec4(color.rgb * color.a, 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, \"uniTexture\")\n            },\n        })\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log(\"🐞 [main.demo@34] settings =\", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}"}
const FULL = "import {\n    tgdCodeFunction_fbm,\n    TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport FlameURL from \"./flame.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: \"sampler2D\",\n        },\n        mainCode: [\n            \"float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));\",\n            \"shift -= .0;\",\n            \"shift *= .25 * (1.0 - varUV.y);\",\n            \"vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));\",\n            \"FragColor = vec4(color.rgb * color.a, 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, \"uniTexture\")\n            },\n        })\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log(\"🐞 [main.demo@34] settings =\", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            options={{ alpha: false }}\n            assets={{\n                image: {\n                    flame: FlameURL,\n                },\n            }}\n            onReady={init}\n            settings={{\n                exponent: {\n                    label: \"uniExponent\",\n                    min: 0,\n                    max: 1,\n                    value: 0.5,\n                },\n            }}\n        />\n    )\n}\n"

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