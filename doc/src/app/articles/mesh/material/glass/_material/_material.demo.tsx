import {
    ArrayNumber4,
    TgdContext,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    tgdCalcRandom3,
    webglPresetDepth,
    TgdTextureCube,
    TgdPainterLogic,
    TgdPainterSkybox,
    TgdMaterialGlass,
    TgdColor,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import React from "react"
import { useFloat } from "@/utils/hooks/float"
import { ViewButton, ViewInputNumber, ViewPanel } from "@tolokoban/ui"

import SpecimenURL from "@/assets/mesh/specimen.glb"
import PosX from "@/assets/cubemap/sky/posX.webp"
import PosY from "@/assets/cubemap/sky/posY.webp"
import PosZ from "@/assets/cubemap/sky/posZ.webp"
import NegX from "@/assets/cubemap/sky/negX.webp"
import NegY from "@/assets/cubemap/sky/negY.webp"
import NegZ from "@/assets/cubemap/sky/negZ.webp"

function init(context: TgdContext, assets: Assets) {
    context.camera.fitSpaceAtTarget(14, 1.1)
    // #begin Initializing WebGL
    const color: ArrayNumber4 = [1, 1, 1, 1]
    const skybox = new TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    })
    const material = new TgdMaterialGlass({
        color,
        ambientColor: skybox,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.specimen,
        material,
    })
    // #end
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    })
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [mesh],
        }),
        new TgdPainterLogic((time) => {
            mesh.transfo.setEulerRotation(0, Math.sin(time) * 20, 0)
            const color = new TgdColor(0.1, 0.2, 0.3, 1)
            color.rgb2hsl().H = time * 0.1
            color.hsl2rgb()
            clear.red = color.R
            clear.green = color.G
            clear.blue = color.B
        })
    )
    context.play()
    return {
        specularExponent(value: number) {
            material.specularExponent = value
            context.paint()
        },
        specularIntensity(value: number) {
            material.specularIntensity = value
            context.paint()
        },
        opacityMin(value: number) {
            material.opacityMin = value
            context.paint()
        },
        opacityMax(value: number) {
            material.opacityMax = value
            context.paint()
        },
    }
}

export default function Demo() {
    const ref = React.useRef<ReturnType<typeof init> | null>(null)
    const srv = ref.current
    const [specularExponent, setSpecularExponent] = useFloat(
        2.2,
        srv?.specularExponent
    )
    const [specularIntensity, setSpecularIntensity] = useFloat(
        2,
        srv?.specularIntensity
    )
    const [opacityMin, setOpacityMin] = useFloat(0, srv?.opacityMin)
    const [opacityMax, setOpacityMax] = useFloat(0.05, srv?.opacityMax)
    return (
        <div>
            <View
                onReady={(scene: TgdContext, assets: Assets) => {
                    ref.current = init(scene, assets)
                }}
                assets={{
                    glb: {
                        specimen: SpecimenURL,
                    },
                    image: {
                        posX: PosX,
                        posY: PosY,
                        posZ: PosZ,
                        negX: NegX,
                        negY: NegY,
                        negZ: NegZ,
                    },
                }}
                controller={{
                    inertiaOrbit: 1000,
                }}
            >
                <ViewPanel
                    display="flex"
                    flex-wrap="wrap"
                    justifyContent="space-around"
                    alignItems="center"
                    gap="S"
                    width="600px"
                    maxWidth="600px"
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
                    flex-wrap="wrap"
                    justifyContent="space-around"
                    alignItems="center"
                    gap="S"
                    width="600px"
                    maxWidth="600px"
                >
                    <ViewInputNumber
                        label="opacityMin"
                        value={opacityMin}
                        onChange={setOpacityMin}
                    />
                    <ViewInputNumber
                        label="opacityMax"
                        value={opacityMax}
                        onChange={setOpacityMax}
                    />
                </ViewPanel>
            </View>
        </div>
    )
}
