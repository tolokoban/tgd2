import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import Column from "@/components/demo/Column"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = "    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const size = 32\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: new TgdVec2(1, 0),\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: new TgdVec2(0, 1),\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(filter)\n    context.paint()"
const FULL = "import {\n    TgdContext,\n    TgdFilterBlur,\n    TgdPainterFilter,\n    TgdVec2,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = context.textures2D.create({\n        image: BackgroundURL,\n        width: 512,\n        height: 512,\n    })\n    const size = 32\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: new TgdVec2(1, 0),\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: new TgdVec2(0, 1),\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(filter)\n    context.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n"

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