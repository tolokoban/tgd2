import {
    TgdCameraOrthographic,
    type TgdContext,
    TgdFilterDeferredShading,
    TgdGeometryBox,
    TgdLight,
    TgdMaterialFlat,
    TgdMaterialFlatTexture,
    type TgdMeshWithTextures,
    TgdPainterDeferredShadingTextures,
    TgdPainterFilter,
    TgdPainterShadow,
    TgdPainterSkybox,
    TgdPainterState,
    TgdTexture2D,
    TgdTextureCube,
    TgdTransfo,
    TgdVec3,
    tgdCanvasCreateCreateGradientvertical,
    tgdCanvasCreateGradientHorizontal,
} from "@tolokoban/tgd"
import { ViewInputNumber, ViewOptions, ViewPanel } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import HelmetURL from "@/assets/mesh/helmet.glb"
import PosX from "@/assets/cubemap/sky/contrast/posX.webp"
import PosY from "@/assets/cubemap/sky/contrast/posY.webp"
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp"
import NegX from "@/assets/cubemap/sky/contrast/negX.webp"
import NegY from "@/assets/cubemap/sky/contrast/negY.webp"
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp"

type Mode = "skybox" | "color"

interface Scene {
    filters: Record<Mode, TgdFilterDeferredShading>
    painters: Record<Mode, TgdPainterFilter>
}

function init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {
    // #begin Initializing WebGL
    // Metallic grows from left to right, and roughness from top to bottom.
    const box: TgdMeshWithTextures = {
        geometry: new TgdGeometryBox(),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),
        visible: true,
        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),
        textures: {
            metallic: new TgdTexture2D(context, {
                load: tgdCanvasCreateGradientHorizontal(64, ["#000", "#fff"]),
            }),
            roughness: new TgdTexture2D(context, {
                load: tgdCanvasCreateCreateGradientvertical(64, ["#000", "#fff"]),
            }),
        },
    }
    // glTF stores metallic in BLUE and roughness in GREEN.
    const { helmet: asset } = assets.glb
    const gltfMaterial = asset.getMaterial(0)
    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0
    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0
    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0
    const indexNormals = gltfMaterial.normalTexture?.index ?? 0
    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)
    const helmet: TgdMeshWithTextures = {
        geometry: asset.makeGeometry(),
        transfo: asset.createTransfoFromNode(asset.getNode(0)),
        visible: true,
        material: new TgdMaterialFlatTexture({
            texture: asset.createTexture2D(context, indexBaseColor),
        }),
        textures: {
            normals: asset.createTexture2D(context, indexNormals),
            metallic: textureMetallicRoughness,
            metallicChannel: "b",
            roughness: textureMetallicRoughness,
            roughnessChannel: "g",
            bakedAO: asset.createTexture2D(context, indexOcclusion),
            bakedAOChannel: "r",
        },
    }
    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, helmet] })
    const skybox = new TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    })
    // The shadow camera depends on the initial position of the main camera.
    context.camera.fitSpaceAtTarget(4, 4)
    const shadow = new TgdPainterShadow(context, {
        camera: makeShadowCamera(context),
        meshes: [box, helmet],
    })
    // The light camera looks toward its -Z axis.
    const [lx, ly, lz] = shadow.camera.transfo.axisZ
    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })
    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }
    const filters: Record<Mode, TgdFilterDeferredShading> = {
        skybox: new TgdFilterDeferredShading(context, {
            deferredShading: deferred,
            skyboxTexture: skybox,
            light,
            shadow: shadowOptions,
        }),
        // A 1×1 cube texture is created from this color.
        color: new TgdFilterDeferredShading(context, {
            deferredShading: deferred,
            skyboxTexture: "#7af",
            light,
            shadow: shadowOptions,
        }),
    }
    const painters: Record<Mode, TgdPainterFilter> = {
        skybox: makePainterFilter(context, deferred, filters.skybox),
        color: makePainterFilter(context, deferred, filters.color),
    }
    refScene.current = { filters, painters }
    applyMode(painters, "skybox")
    context.add(
        shadow,
        deferred,
        new TgdPainterSkybox(context, { texture: skybox }),
        // Nothing is painted (alpha = 0) where there is no mesh.
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [painters.skybox, painters.color],
        }),
        (_time: number, delta: number) => {
            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refScene = React.useRef<Scene | null>(null)
    const [mode, setMode] = React.useState<Mode>("skybox")
    const [strength, setStrength] = React.useState(1)
    const [exponent, setExponent] = React.useState(2.2)
    const handleModeChange = (value: Mode) => {
        setMode(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyMode(scene.painters, value)
        context.paint()
    }
    const handleStrengthChange = (value: number) => {
        setStrength(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyStrength(scene.filters, value)
        context.paint()
    }
    const handleExponentChange = (value: number) => {
        setExponent(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyExponent(scene.filters, value)
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refScene)
            }}
            assets={{
                glb: { helmet: HelmetURL },
                image: {
                    posX: PosX,
                    posY: PosY,
                    posZ: PosZ,
                    negX: NegX,
                    negY: NegY,
                    negZ: NegZ,
                },
            }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                <ViewOptions value={mode} onChange={handleModeChange}>
                    <div key="skybox">skybox texture</div>
                    <div key="color">skybox color</div>
                </ViewOptions>
                <ViewInputNumber label="skyboxStrength" value={strength} onChange={handleStrengthChange} />
                <ViewInputNumber label="skyboxExponent" value={exponent} onChange={handleExponentChange} />
            </ViewPanel>
        </View>
    )
}

// #begin makePainterFilter()
/**
 * The albedo is the input texture of the filter.
 */
function makePainterFilter(
    context: TgdContext,
    deferred: TgdPainterDeferredShadingTextures,
    filter: TgdFilterDeferredShading,
) {
    return new TgdPainterFilter(context, {
        texture: deferred.textureAlbedo,
        filters: [filter],
        flipY: true,
    })
}
// #end

// #begin makeShadowCamera()
/**
 * The light is at the top left of the initial camera,
 * at a distance of 8 from it, and looks at the camera's target.
 */
function makeShadowCamera(context: TgdContext) {
    const { transfo } = context.camera
    const target = new TgdVec3(transfo.position)
    const offset = new TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8)
    const position = new TgdVec3(transfo.actualPosition).add(offset)
    const distance = new TgdVec3(position).subtract(target).size
    const light = new TgdCameraOrthographic({
        transfo: new TgdTransfo({ distance: 0, position }),
        // Half of the height of the visible area.
        spaceHeight: 3,
        near: Math.max(0.1, distance - 5),
        far: distance + 5,
    })
    light.transfo.lookAt(target)
    // Square shadow texture.
    light.screenWidth = 1
    light.screenHeight = 1
    return light
}
// #end

// #begin applyMode()
function applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {
    for (const key of Object.keys(painters) as Mode[]) {
        painters[key].active = key === mode
    }
}
// #end

// #begin applyStrength()
function applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {
    for (const filter of Object.values(filters)) {
        filter.skyboxStrength = strength
    }
}
// #end

// #begin applyExponent()
function applyExponent(filters: Record<Mode, TgdFilterDeferredShading>, exponent: number) {
    for (const filter of Object.values(filters)) {
        filter.skyboxExponent = exponent
    }
}
// #end
