import {
    ArrayNumber4,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdLight,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdPainterScissor,
    tgdCalcRandom3,
    webglPresetDepth,
    tgdCalcClamp,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import React from "react"
import { useFloat } from "@/utils/hooks/float"
import {
    ViewButton,
    ViewInputNumber,
    ViewPanel,
    ViewSlider,
} from "@tolokoban/ui"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]
    const material1 = new TgdMaterialDiffuse({
        color,
        ambient: new TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
    })
    const mesh1 = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material1,
    })
    const material2 = new TgdMaterialDiffuse({
        color,
        lockLightsToCamera: true,
        ambient: new TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
    })
    const mesh2 = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material2,
    })
    // #end
    const scissor1 = new TgdPainterScissor(context, {
        children: [mesh1],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1,
    })
    const scissor2 = new TgdPainterScissor(context, {
        children: [mesh2],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1,
    })
    context.add(
        new TgdPainterClear(context, {
            color: [0.3, 0.3, 0.3, 1],
            depth: 1,
        }),
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [scissor1, scissor2],
        })
    )
    context.paint()
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 2000,
    })
    return {
        specularExponent(value: number) {
            material1.specularExponent = value
            material2.specularExponent = value
            context.paint()
        },
        specularIntensity(value: number) {
            material1.specularIntensity = value
            material2.specularIntensity = value
            context.paint()
        },
        split(value: number) {
            const a = tgdCalcClamp(value, 0, 1)
            scissor1.x = 0
            scissor1.width = a
            scissor2.x = a
            scissor2.width = 1 - a
            context.paint()
        },
    }
}

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const srv = ref.current
    const [specularExponent, setSpecularExponent] = useFloat(
        20,
        srv?.specularExponent
    )
    const [specularIntensity, setSpecularIntensity] = useFloat(
        1,
        srv?.specularIntensity
    )
    const [split, setSplit] = useFloat(0.5, srv?.split)
    return (
        <div>
            <View
                onReady={(scene: TgdContext, assets: Assets) => {
                    ref.current = init(scene, assets)
                }}
                assets={{
                    glb: {
                        suzane: SuzaneURL,
                    },
                }}
                gizmo
            >
                <ViewSlider
                    value={split}
                    onChange={setSplit}
                    min={0}
                    max={1}
                    step={1e-2}
                />
                <ViewPanel
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <ViewInputNumber
                        label="specularExponent"
                        value={specularExponent}
                        onChange={setSpecularExponent}
                    />
                    <ViewInputNumber
                        label="specularIntensity"
                        value={specularIntensity}
                        onChange={setSpecularIntensity}
                    />
                </ViewPanel>
                <ViewPanel
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(1)
                            setSpecularIntensity(0.5)
                        }}
                    >
                        Brushed Metal
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(0.25)
                            setSpecularIntensity(0.125)
                        }}
                    >
                        Soft Light
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(50)
                            setSpecularIntensity(2)
                        }}
                    >
                        Car Paint
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularIntensity(0)
                        }}
                    >
                        Plastic
                    </ViewButton>
                </ViewPanel>
            </View>
        </div>
    )
}
