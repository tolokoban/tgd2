import {
    ArrayNumber4,
    TgdContext,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
    tgdCalcRandom3,
    webglPresetDepth,
    TgdMaterialPrincipled,
    TgdTextureCube,
    TgdPainterLogic,
    TgdPainterSkybox,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"
import React from "react"
import { useFloat } from "@/utils/hooks/float"
import { ViewButton, ViewInputNumber, ViewPanel } from "@tolokoban/ui"

import SuzaneURL from "@/assets/mesh/suzanne.glb"
import PosX from "@/assets/cubemap/sky/posX.webp"
import PosY from "@/assets/cubemap/sky/posY.webp"
import PosZ from "@/assets/cubemap/sky/posZ.webp"
import NegX from "@/assets/cubemap/sky/negX.webp"
import NegY from "@/assets/cubemap/sky/negY.webp"
import NegZ from "@/assets/cubemap/sky/negZ.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]
    const skybox = new TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    })
    const material = new TgdMaterialPrincipled({
        color,
        ambientColor: skybox,
    })
    const mesh = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material,
    })
    // #end
    context.add(
        new TgdPainterClear(context, {
            color: [0.3, 0.3, 0.3, 1],
            depth: 1,
        }),
        new TgdPainterSkybox(context, {
            camera: context.camera,
            imagePosX: assets.image.posX,
            imagePosY: assets.image.posY,
            imagePosZ: assets.image.posZ,
            imageNegX: assets.image.negX,
            imageNegY: assets.image.negY,
            imageNegZ: assets.image.negZ,
        }),
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [mesh],
        }),
        new TgdPainterLogic((time) => {
            mesh.transfo.setEulerRotation(0, -time * 20, 0)
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
                    image: {
                        posX: PosX,
                        posY: PosY,
                        posZ: PosZ,
                        negX: NegX,
                        negY: NegY,
                        negZ: NegZ,
                    },
                }}
                gizmo
                controller={{
                    inertiaOrbit: 1000,
                }}
            >
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
                            setSpecularIntensity(1)
                        }}
                    >
                        Brushed Metal
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(0.25)
                            setSpecularIntensity(1.5)
                        }}
                    >
                        Soft Light
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(2.2)
                            setSpecularIntensity(2)
                        }}
                    >
                        Car Paint
                    </ViewButton>
                    <ViewButton
                        variant="text"
                        color="primary-5"
                        onClick={() => {
                            setSpecularExponent(0)
                            setSpecularIntensity(1)
                        }}
                    >
                        Plastic
                    </ViewButton>
                </ViewPanel>
            </View>
        </div>
    )
}
