import {
    type TgdContext,
    TgdFilterAntiAliasing,
    TgdFilterDeferredShading,
    TgdGeometryBox,
    TgdLight,
    TgdMaterialFlat,
    type TgdMeshWithTextures,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterFilter,
    TgdPainterState,
    TgdTransfo,
} from "@tolokoban/tgd"
import View, { type Assets } from "@/components/demo/Tgd"
import SuzanneURL from "@/assets/mesh/suzanne-low.glb"

const BACKGROUND: [number, number, number, number] = [0.9, 0.92, 0.95, 1]

function init(context: TgdContext, assets: Assets) {
    // Low resolution and pixelated canvas, to see the pixels.
    context.resolution = 0.5
    if (context.canvas instanceof HTMLCanvasElement) context.canvas.style.imageRendering = "pixelated"
    context.camera.fitSpaceAtTarget(2.5, 2.5)
    // #begin
    // The flat faces of a low poly mesh give sharp creases to the cavity.
    const suzanne: TgdMeshWithTextures = {
        geometry: assets.glb.suzanne.makeGeometry(),
        transfo: new TgdTransfo(),
        visible: true,
        material: new TgdMaterialFlat({ color: [0.9, 0.5, 0.2, 1] }),
    }
    const box: TgdMeshWithTextures = {
        geometry: new TgdGeometryBox({ sizeX: 0.5, sizeY: 0.5, sizeZ: 0.5 }),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 1.3 }),
        visible: true,
        material: new TgdMaterialFlat({ color: [0.2, 0.5, 0.9, 1] }),
    }
    const deferred = new TgdPainterDeferredShading(context, { meshes: [suzanne, box] })
    const shading = new TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        skyboxTexture: "#bcd",
        light: new TgdLight({ color: [1, 0.95, 0.9, 1], direction: [-1, -1, -1] }),
        // Thin bright and dark lines on the edges: the worst case for aliasing.
        cavity: { ridge: 2, valley: 2 },
    })
    // The deferred shading has no anti-aliasing, and the background is transparent.
    const filterAA = new TgdFilterAntiAliasing({ alpha: true })
    context.add(
        deferred,
        new TgdPainterClear(context, { color: BACKGROUND, depth: 1 }),
        // Nothing is painted (alpha = 0) where there is no mesh.
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [
                new TgdPainterFilter(context, {
                    texture: deferred.textureAlbedo,
                    filters: [shading, filterAA],
                    flipY: true,
                }),
            ],
        }),
        (_time, delta) => {
            suzanne.transfo.orbitAroundY(delta * 0.2)
            box.transfo.orbitAroundY(-delta * 0.3).orbitAroundX(delta * 0.17)
        },
    )
    context.play()
    // #end
    return ({ fxaa, subpixel, edgeThreshold }: { fxaa: number; subpixel: number; edgeThreshold: number }) => {
        filterAA.strength = fxaa
        filterAA.subpixel = subpixel
        filterAA.edgeThreshold = edgeThreshold
    }
}

export default function Demo() {
    return (
        <View
            onReady={init}
            controller={{ inertiaOrbit: 1000 }}
            assets={{ glb: { suzanne: SuzanneURL } }}
            settings={{
                fxaa: { label: "FXAA", value: 1, step: ["off", "on"] },
                subpixel: { label: "subpixel", value: 0.75, min: 0, max: 1 },
                edgeThreshold: { label: "edgeThreshold", value: 0.166, min: 0.063, max: 0.333 },
            }}
        />
    )
}
