import {
    tgdCalcDegToRad,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterFramebufferWithAntiAliasing,
    TgdPainterGroup,
    TgdPainterMeshGltf,
    TgdPainterState,
    TgdTexture2D,
    TgdVec4,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd"
import View, { Assets } from "@/components/demo/Tgd"

// import WorldURL from "./world.glb"
import WorldURL from "@/assets/mesh/chinese-chandelier.glb"
import GridURL from "@/assets/mesh/grid-10x10.glb"
import { PainterSea } from "./sea"
import { MaterialDiffuse } from "./diffuse"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera = new TgdCameraPerspective({
        transfo: { distance: 2 },
        far: 100,
        near: 0.01,
        fovy: tgdCalcDegToRad(35),
        zoom: 1,
    })
    new TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
        geo: {
            lat: tgdCalcDegToRad(50),
            minLat: tgdCalcDegToRad(-20),
            maxLat: tgdCalcDegToRad(80),
        },
    })
    const clear = new TgdPainterClear(context, {
        color: new TgdVec4(0, 0, 0, 1),
        depth: 1,
        stencil: 0,
    })
    const mesh = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        cull: webglPresetCull.back,
        children: [
            new TgdPainterMeshGltf(context, {
                asset: assets.glb.world,
                material: ({ color }) => new MaterialDiffuse({ color }),
            }),
        ],
    })
    const meshOpaque = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        cull: webglPresetCull.back,
        children: [
            new TgdPainterMeshGltf(context, {
                asset: assets.glb.world,
                material: ({ color }) => new TgdMaterialDiffuse({ color }),
            }),
        ],
    })
    const sea = new PainterSea(context)
    const scene = new TgdPainterGroup([clear, mesh])
    const framebuffer = new TgdPainterFramebufferWithAntiAliasing(context, {
        textureColor0: new TgdTexture2D(context),
        children: [scene],
    })
    if (framebuffer.textureColor0) sea.texture = framebuffer.textureColor0
    context.add(framebuffer, clear, meshOpaque, sea)
    context.logic.add((time) => {
        sea.y = Math.sin(time * 0.4) * 0.5
    })
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            options={{ antialias: true, stencil: true, depth: true }}
            onReady={init}
            assets={{
                glb: {
                    world: WorldURL,
                    see: GridURL,
                },
            }}
        />
    )
}
