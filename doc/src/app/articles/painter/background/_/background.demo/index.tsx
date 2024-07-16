import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./background.demo"

const FOCUS = "    const texture = ctx.textures2D.create({\n        image: BackgroundURL,\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"
const FULL = "import { TgdContext, TgdPainterBackground } from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./helmet.webp\"\n\nfunction init(ctx: TgdContext) {\n    const texture = ctx.textures2D.create({\n        image: BackgroundURL,\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

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