import {
    TgdContext,
    TgdFilterBlur,
    tgdLoadImage,
    TgdPainterFilter,
    TgdPainterLogic,
    TgdTexture2D,
} from "@tolokoban/tgd"
import { ViewSlider, ViewTooltip } from "@tolokoban/ui"

import View, { Assets } from "@/components/demo/Tgd"

import BackgroundURL from "../../../marylin.webp"
import React from "react"

function init(context: TgdContext) {
    // #begin
    const params = { strength: 1 }
    const texture = new TgdTexture2D(context).loadBitmap(
        tgdLoadImage(BackgroundURL)
    )
    const size = 32
    const horizontalBlurFilter = new TgdFilterBlur({
        size,
        direction: 0,
    })
    const verticalBlurFilter = new TgdFilterBlur({
        size,
        direction: 90,
    })
    const filter = new TgdPainterFilter(context, {
        texture,
        filters: [horizontalBlurFilter, verticalBlurFilter],
    })
    context.add(
        filter,
        new TgdPainterLogic((time) => {
            horizontalBlurFilter.strength = params.strength
            verticalBlurFilter.strength = params.strength
        })
    )
    context.play()
    return params
    // #end
}

export default function Demo() {
    const tgd = useTgd(init)
    const [strength, setStrength] = useUniform(tgd, "strength", 1)

    return (
        <View onReady={tgd.init} width="512px" height="512px">
            <ViewTooltip
                color="primary-1"
                content={
                    <div>
                        Strength of the blur: <b>{strength.toFixed(2)}</b>
                    </div>
                }
            >
                <ViewSlider
                    value={strength}
                    onChange={setStrength}
                    min={0}
                    max={2}
                    step={0.05}
                />
            </ViewTooltip>
        </View>
    )
}

function useTgd<T extends { [key: string]: number }>(
    init: (context: TgdContext, assets: Assets) => T
) {
    const ref = React.useRef<{
        init: (context: TgdContext, assets: Assets) => void
        params: T | undefined
    }>({
        init: (context: TgdContext, assets: Assets) => {
            ref.current.params = init(context, assets)
        },
        params: undefined,
    })
    return ref.current
}

function useUniform<T extends Record<string, number>, S extends keyof T>(
    tgd: {
        init: (context: TgdContext, assets: Assets) => void
        params: T | undefined
    },
    param: S,
    initialValue: number
): [value: number, setValue: (value: number) => void] {
    const [value, setValue] = React.useState(initialValue)
    React.useEffect(() => {
        const { params } = tgd
        if (!params) return
        ;(params as Record<S, number>)[param] = value
    }, [value])
    return [value, setValue]
}
