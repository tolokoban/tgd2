/**
 * Warning! This code has been generated automatically.
 */
import React from "react"
import { ViewButton } from "@tolokoban/ui"
import CodeViewer from "@/components/demo/CodeViewer"
import Demo from "./marylin.demo"

const FOCUS = {"Detail #1":"    const params = { strength: 1 }\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const size = 32\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 0,\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 90,\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(\n        filter,\n        new TgdPainterLogic((time) => {\n            horizontalBlurFilter.strength = params.strength\n            verticalBlurFilter.strength = params.strength\n        })\n    )\n    context.play()\n    return params"}
const FULL = "import {\n    TgdContext,\n    TgdFilterBlur,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdPainterLogic,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport { ViewSlider, ViewTooltip } from \"@tolokoban/ui\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"../../../marylin.webp\"\nimport React from \"react\"\n\nfunction init(context: TgdContext) {\n    const params = { strength: 1 }\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdLoadImage(BackgroundURL)\n    )\n    const size = 32\n    const horizontalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 0,\n    })\n    const verticalBlurFilter = new TgdFilterBlur({\n        size,\n        direction: 90,\n    })\n    const filter = new TgdPainterFilter(context, {\n        texture,\n        filters: [horizontalBlurFilter, verticalBlurFilter],\n    })\n    context.add(\n        filter,\n        new TgdPainterLogic((time) => {\n            horizontalBlurFilter.strength = params.strength\n            verticalBlurFilter.strength = params.strength\n        })\n    )\n    context.play()\n    return params\n}\n\nexport default function Demo() {\n    const tgd = useTgd(init)\n    const [strength, setStrength] = useUniform(tgd, \"strength\", 1)\n\n    return (\n        <View onReady={tgd.init} width=\"512px\" height=\"512px\">\n            <ViewTooltip\n                color=\"primary-1\"\n                content={\n                    <div>\n                        Strength of the blur: <b>{strength.toFixed(2)}</b>\n                    </div>\n                }\n            >\n                <ViewSlider\n                    value={strength}\n                    onChange={setStrength}\n                    min={0}\n                    max={2}\n                    step={0.05}\n                />\n            </ViewTooltip>\n        </View>\n    )\n}\n\nfunction useTgd<T extends { [key: string]: number }>(\n    init: (context: TgdContext, assets: Assets) => T\n) {\n    const ref = React.useRef<{\n        init: (context: TgdContext, assets: Assets) => void\n        params: T | undefined\n    }>({\n        init: (context: TgdContext, assets: Assets) => {\n            ref.current.params = init(context, assets)\n        },\n        params: undefined,\n    })\n    return ref.current\n}\n\nfunction useUniform<T extends Record<string, number>, S extends keyof T>(\n    tgd: {\n        init: (context: TgdContext, assets: Assets) => void\n        params: T | undefined\n    },\n    param: S,\n    initialValue: number\n): [value: number, setValue: (value: number) => void] {\n    const [value, setValue] = React.useState(initialValue)\n    React.useEffect(() => {\n        const { params } = tgd\n        if (!params) return\n        ;(params as Record<S, number>)[param] = value\n    }, [value])\n    return [value, setValue]\n}\n"

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