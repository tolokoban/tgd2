import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/demo/Column"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./background2.demo"

const FOCUS = "    const texture = ctx.textures2D.create({\n        image: BackgroundURL,\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    const logic = new TgdPainterLogic(time => {\n        background.x = Math.cos(time * 0.000251)\n        background.y = Math.cos(time * 0.000745)\n        background.zoom = Math.sin(time * 0.0001) * 3\n    })\n    ctx.add(background, logic)\n    ctx.play()"
const FULL = "import {\n    TgdContext,\n    TgdPainterBackground,\n    TgdPainterLogic,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./locomotive.webp\"\n\nfunction init(ctx: TgdContext) {\n    const texture = ctx.textures2D.create({\n        image: BackgroundURL,\n    })\n    const background = new TgdPainterBackground(ctx, texture)\n    const logic = new TgdPainterLogic(time => {\n        background.x = Math.cos(time * 0.000251)\n        background.y = Math.cos(time * 0.000745)\n        background.zoom = Math.sin(time * 0.0001) * 3\n    })\n    ctx.add(background, logic)\n    ctx.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n"

export default function DemoContainer() {
    const [full, setFull] = React.useState(false)
    return <>
        <Column align="halfLeft"><Demo /></Column>
        <Column align="halfRight">
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
        </Column>
    </>
}