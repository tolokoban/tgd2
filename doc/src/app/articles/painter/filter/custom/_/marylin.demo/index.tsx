import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = "    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const filter = new TgdFilter({\n        uniforms: {\n            uniThreshold: \"float\",\n        },\n        setUniforms(program, time) {\n            const threshold = 2 * Math.abs(Math.sin(time * 1e-4))\n            program.uniform1f(\"uniThreshold\", threshold)\n        },\n        fragmentShaderCode: [\n            \"float threshold = uniThreshold;\",\n            \"vec4 pixel = texture(uniTexture, varUV);\",\n            \"float value = pixel.r + pixel.g + pixel.b;\",\n            \"if (value > threshold) {\",\n            [\"FragColor = vec4(0, 0.2, 0.4, 1.0);\"],\n            \"} else {\",\n            [\n                \"float strength = (threshold - value) / threshold;\",\n                \"FragColor = vec4(threshold, threshold * .667, threshold * 0.1, 1);\",\n            ],\n            \"}\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        })\n    )\n    context.play()"
const FULL = "import {\n    TgdContext,\n    TgdFilter,\n    TgdFilterBlur,\n    TgdPainterFilter,\n    TgdVec2,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const filter = new TgdFilter({\n        uniforms: {\n            uniThreshold: \"float\",\n        },\n        setUniforms(program, time) {\n            const threshold = 2 * Math.abs(Math.sin(time * 1e-4))\n            program.uniform1f(\"uniThreshold\", threshold)\n        },\n        fragmentShaderCode: [\n            \"float threshold = uniThreshold;\",\n            \"vec4 pixel = texture(uniTexture, varUV);\",\n            \"float value = pixel.r + pixel.g + pixel.b;\",\n            \"if (value > threshold) {\",\n            [\"FragColor = vec4(0, 0.2, 0.4, 1.0);\"],\n            \"} else {\",\n            [\n                \"float strength = (threshold - value) / threshold;\",\n                \"FragColor = vec4(threshold, threshold * .667, threshold * 0.1, 1);\",\n            ],\n            \"}\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <div className="half-left"><Demo /></div>
        <div className="half-right">
            <button
                style={{ all: "inherit", display: "contents" }}
                onClick={() => setFull(!full)}
            >
                <ViewPanel display="flex" gap={".5em"}>
                    <input type="checkbox" checked={full} onChange={() => setFull(!full)}/>
                    <label style={{ cursor: "pointer" }}>
                        Afficher le code complet
                    </label>
                </ViewPanel>
            </button>
            <CodeViewer language="tsx" value={full ? FULL : FOCUS} />
        </div>
    </>
}