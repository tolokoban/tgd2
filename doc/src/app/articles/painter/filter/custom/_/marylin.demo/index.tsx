/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = {"Detail #1":"    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: \"float\",\n            uniAspectRatio: \"float\",\n            uniAspectRatioInverse: \"float\",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f(\"uniTime\", time)\n            program.uniform1f(\"uniAspectRatio\", context.aspectRatio)\n            program.uniform1f(\n                \"uniAspectRatioInverse\",\n                context.aspectRatioInverse\n            )\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            \"vec2 polar = uv2polar(varUV);\",\n            \"float strength = sin(uniTime);\",\n            \"polar.y += strength * polar.x;\",\n            \"vec2 uv = polar2uv(polar);\",\n            \"FragColor = texture(uniTexture, uv);\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        })\n    )\n    context.play()"}
const FULL = "import {\n    tgdCodeFunction_polar2uv,\n    tgdCodeFunction_uv2polar,\n    TgdContext,\n    TgdFilter,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const filter = new TgdFilter({\n        uniforms: {\n            uniTime: \"float\",\n            uniAspectRatio: \"float\",\n            uniAspectRatioInverse: \"float\",\n        },\n        setUniforms({ program, time }) {\n            program.uniform1f(\"uniTime\", time)\n            program.uniform1f(\"uniAspectRatio\", context.aspectRatio)\n            program.uniform1f(\n                \"uniAspectRatioInverse\",\n                context.aspectRatioInverse\n            )\n        },\n        extraFunctions: {\n            ...tgdCodeFunction_uv2polar(),\n            ...tgdCodeFunction_polar2uv(),\n        },\n        fragmentShaderCode: [\n            \"vec2 polar = uv2polar(varUV);\",\n            \"float strength = sin(uniTime);\",\n            \"polar.y += strength * polar.x;\",\n            \"vec2 uv = polar2uv(polar);\",\n            \"FragColor = texture(uniTexture, uv);\",\n        ],\n    })\n    context.add(\n        new TgdPainterFilter(context, {\n            texture,\n            filters: [filter],\n        })\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

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