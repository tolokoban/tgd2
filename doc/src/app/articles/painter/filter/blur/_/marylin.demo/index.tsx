import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/demo/Column"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = "    const texture = context.textures2D.create({\n        image: BackgroundURL,\n    })\n    const hueFilter = new TgdFilterHueRotation()\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [hueFilter],\n    })\n    context.add(\n        filter,\n        new TgdPainterLogic(time => (hueFilter.hueShiftInDegrees = time * 0.1))\n    )\n    context.play()"
const FULL = "import {\n    TgdContext,\n    TgdFilterHueRotation,\n    TgdPainterFilter,\n    TgdPainterLogic,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = context.textures2D.create({\n        image: BackgroundURL,\n    })\n    const hueFilter = new TgdFilterHueRotation()\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [hueFilter],\n    })\n    context.add(\n        filter,\n        new TgdPainterLogic(time => (hueFilter.hueShiftInDegrees = time * 0.1))\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

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