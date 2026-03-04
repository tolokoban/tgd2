import {
    tgdCanvasCreatePalette,
    type TgdContext,
    TgdControllerCameraOrbit,
    type TgdDataGlb,
    TgdDataset,
    TgdPainterClear,
    TgdPainterPointsCloud,
    TgdPainterPointsCloudMorphing,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd"
import Monkey1URL from "@/assets/mesh/high-res-monkey.glb"
import Monkey2URL from "@/assets/mesh/high-res-monkey-deformed.glb"
import View, { type Assets } from "@/components/demo/Tgd"

function makeDataset(glb: TgdDataGlb) {
    const dataset = new TgdDataset({
        POSITION: "vec4",
    })
    glb.setAttrib(dataset, "POSITION")
    const { set } = dataset.getAttribAccessor("POSITION")
    const count = dataset.count
    const radius = 0.01
    for (let i = 0; i < count; i++) {
        set(radius, i, 3)
    }
    return dataset
}

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.transfo.distance = 5
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.5,
        speedZoom: 1,
    })
    const clear = new TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    })
    const texture = new TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
    }).loadBitmap(tgdCanvasCreatePalette(["#f74", "#ff0", "#59f"]))
    const dataset1 = makeDataset(assets.glb.monkey1)
    const dataset2 = makeDataset(assets.glb.monkey2)
    const cloud = new TgdPainterPointsCloudMorphing(context, {
        mix: 1,
        data: [
            [
                {
                    point: new Float32Array(dataset1.data),
                    uv: makeUV(dataset1.count, 1),
                },
                {
                    point: new Float32Array(dataset2.data),
                    uv: makeUV(dataset2.count, 0),
                },
            ],
        ],
        texture,
    })
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [cloud],
    })
    context.add(clear, state)
    context.paint()
    // #end
    return (settings: Record<string, number>) => {
        cloud.mix = settings.mix
        context.paint()
    }
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            options={{
                preserveDrawingBuffer: true,
            }}
            assets={{
                glb: { monkey1: Monkey1URL, monkey2: Monkey2URL },
            }}
            settings={{
                mix: {
                    label: "mix",
                    value: 0,
                },
            }}
        />
    )
}

function makeUV(count: number, value: number) {
    const data = new Float32Array(count * 2)
    for (let i = 0; i < data.length; i++) {
        data[i] = value
    }
    return data
}
