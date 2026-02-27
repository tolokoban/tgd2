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
    TgdPainterLogic,
    TgdPainterNode,
    TgdMaterial,
    TgdPainterSegmentsData,
    TgdPainterSegments,
    webglPresetCull,
    TgdMaterialFaceOrientation,
    TgdMaterialNormals,
    TgdPainterSegmentsMorphing,
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
    const ring1 = makeRing(context, material1)
    const node1 = new TgdPainterNode({
        children: [mesh1, ring1],
    })
    const material2 = new TgdMaterialDiffuse({
        color,
        lockLightsToCamera: true,
        ambient: new TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
    })
    // const material2 = new TgdMaterialNormals()
    const mesh2 = new TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material2,
    })
    const ring2 = makeRing(context, material2)
    const node2 = new TgdPainterNode({
        children: [mesh2, ring2],
    })
    // #end
    const scissor1 = new TgdPainterScissor(context, {
        children: [node1],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1,
    })
    const scissor2 = new TgdPainterScissor(context, {
        children: [node2],
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
            cull: webglPresetCull.back,
            children: [scissor1, scissor2],
        }),
        new TgdPainterLogic((time, delta) => {
            const speed = 0.1
            const angX = delta * 0.49541 * speed
            const angY = delta * 0.31789 * speed
            const angZ = delta * 0.57892 * speed
            node1.transfo.orbitAroundX(angX)
            node1.transfo.orbitAroundY(angY)
            node1.transfo.orbitAroundZ(angZ)
            node2.transfo.orbitAroundX(angX)
            node2.transfo.orbitAroundY(angY)
            node2.transfo.orbitAroundZ(angZ)
        })
    )
    ring2.debug()
    context.play()
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

function makeRing(context: TgdContext, material: TgdMaterial) {
    const data = new TgdPainterSegmentsData()
    const count = 16
    const y = -0.5
    const r = 0.2
    const R = 1
    for (let i = 0; i < count; i++) {
        const x0 = R * Math.cos((i * Math.PI * 2) / count)
        const z0 = R * Math.sin((i * Math.PI * 2) / count)
        const x1 = R * Math.cos(((i + 1) * Math.PI * 2) / count)
        const z1 = R * Math.sin(((i + 1) * Math.PI * 2) / count)
        const u0 = i / count
        const u1 = (i + 1) / count
        data.add([x0, y, z0, r], [x1, y, z1, r], [u0, u0], [u1, u1])
    }
    return new TgdPainterSegments(context, {
        roundness: 5,
        material,
        dataset: data.makeDataset(),
    })
    // return new TgdPainterSegmentsMorphing(context, {
    //     roundness: 5,
    //     material,
    //     datasetsPairs: [[data.makeDataset(), data.makeDataset()]],
    // })
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
    const [split, setSplit] = useFloat(0.1, srv?.split)
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
                controller={{
                    inertiaOrbit: 1000,
                }}
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
