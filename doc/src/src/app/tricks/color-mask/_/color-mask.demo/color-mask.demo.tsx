import {
    TgdContext,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterMeshGltf,
    TgdPainterState,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

import SuzanneURL from "@/assets/mesh/suzanne.glb"
import React from "react"
import { ViewPanel, ViewSwitch } from "@tolokoban/ui"

interface Controller {
    setColor(red: boolean, green: boolean, blue: boolean): void
}

function init(context: TgdContext, assets: Assets): Controller {
    // #begin
    const invisible = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzanne,
    })
    const cube = new TgdPainterMesh(context)
    cube.transfo.setScale(1.6)
    const clear = new TgdPainterClear(context, {
        depth: 1,
        color: [0.3, 0.2, 0.1, 1],
    })
    const mask = new TgdPainterState(context, {
        color: true,
        children: [invisible],
    })
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: webglPresetDepth.lessOrEqual,
            children: [mask, cube],
        }),
        new TgdPainterLogic(time => {
            invisible.transfo.setEulerRotation(0, time * 10, 0)
            cube.transfo.setPosition(2 * Math.cos(time), 0, 0)
            cube.transfo.setEulerRotation(time * 17.945, 0, 0)
        })
    )
    context.play()
    // #end
    return {
        setColor(red: boolean, green: boolean, blue: boolean) {
            mask.color.red = red
            mask.color.green = green
            mask.color.blue = blue
        },
    }
}

export default function Demo() {
    const [R, setR] = React.useState(true)
    const [G, setG] = React.useState(true)
    const [B, setB] = React.useState(true)
    const refController = React.useRef<Controller | null>(null)
    const handleInit = (context: TgdContext, assets: Assets) => {
        refController.current = init(context, assets)
    }
    React.useEffect(() => {
        const ctrl = refController.current
        if (!ctrl) return

        ctrl.setColor(R, G, B)
    }, [R, G, B])

    return (
        <View
            onReady={handleInit}
            assets={{
                glb: {
                    suzanne: SuzanneURL,
                },
            }}
        >
            <ViewPanel display="flex" gap="L" justifyContent="center">
                <ViewSwitch value={R} onChange={setR}>
                    Red
                </ViewSwitch>
                <ViewSwitch value={G} onChange={setG}>
                    Green
                </ViewSwitch>
                <ViewSwitch value={B} onChange={setB}>
                    Blue
                </ViewSwitch>
            </ViewPanel>
        </View>
    )
}
