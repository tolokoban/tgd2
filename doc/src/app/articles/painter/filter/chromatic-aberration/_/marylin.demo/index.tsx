import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = "    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(\n        filters,\n        new TgdPainterLogic(\n            time => (filter.strength = 5 * Math.abs(Math.sin(time * 1e-3)))\n        )\n    )\n    context.play()"
const FULL = "import {\n    TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    TgdPainterFilter,\n    TgdPainterLogic,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./tgd.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(\n        filters,\n        new TgdPainterLogic(\n            time => (filter.strength = 5 * Math.abs(Math.sin(time * 1e-3)))\n        )\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

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