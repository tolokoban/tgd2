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
import { ViewInputNumber, ViewOptions, ViewPanel, ViewSwitch } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import HelmetURL from "@/assets/mesh/helmet.glb"
import SuzanneURL from "@/assets/mesh/suzanne-low.glb"
import PosX from "@/assets/cubemap/sky/contrast/posX.webp"
import PosY from "@/assets/cubemap/sky/contrast/posY.webp"
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp"
import NegX from "@/assets/cubemap/sky/contrast/negX.webp"
import NegY from "@/assets/cubemap/sky/contrast/negY.webp"
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp"

type Mode = "skybox" | "color"

/** What the user can change in the panel. */
interface Settings {
    mode: Mode
    strength: number
    exponent: number
    shading: boolean
    cavity: boolean
    ridge: number
    valley: number
    ambientOcclusion: boolean
    ambientOcclusionIntensity: number
    ambientOcclusionBlur: boolean
    ambientOcclusionCombineWithLight: boolean
}

const DEFAULT_SETTINGS: Settings = {
    mode: "skybox",
    strength: 1,
    exponent: 2.2,
    shading: true,
    cavity: true,
    ridge: 1,
    valley: 1,
    ambientOcclusion: true,
    ambientOcclusionIntensity: 1,
    ambientOcclusionBlur: true,
    ambientOcclusionCombineWithLight: false,
}

/**
 * Everything the filters need, so we can rebuild them when `shading`, `cavity`
 * or `ambientOcclusion` changes.
 */
interface SceneBase {
    deferred: TgdPainterDeferredShadingTextures
    skybox: TgdTextureCube
    light: TgdLight
    shadow: TgdPainterShadow
    /** Parent of the filter painters. */
    state: TgdPainterState
}

interface SceneFilters {
    filters: Record<Mode, TgdFilterDeferredShading>
    painters: Record<Mode, TgdPainterFilter>
}

type Scene = SceneBase & SceneFilters

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
    // Orbits on the other side of the helmet, in the opposite direction.
    // Without textures, metallic is 0 and roughness is 0.5.
    const suzanne: TgdMeshWithTextures = {
        geometry: assets.glb.suzanne.makeGeometry(),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }).orbitAroundY(Math.PI),
        visible: true,
        material: new TgdMaterialFlat({ color: [0.6, 0.1, 0.3, 1] }),
    }
    // glTF stores metallic in BLUE and roughness in GREEN.
    const { helmet: asset } = assets.glb
    const gltfMaterial = asset.getMaterial(0)
    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0
    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0
    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0
    const indexNormals = gltfMaterial.normalTexture?.index ?? 0
    // The emission texture is optional in glTF.
    const indexEmission = gltfMaterial.emissiveTexture?.index
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
            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),
        },
    }
    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, suzanne, helmet] })
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
        meshes: [box, suzanne, helmet],
    })
    // The light camera looks toward its -Z axis.
    const [lx, ly, lz] = shadow.camera.transfo.axisZ
    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })
    // Nothing is painted (alpha = 0) where there is no mesh.
    const state = new TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
    })
    const base: SceneBase = { deferred, skybox, light, shadow, state }
    refScene.current = { ...base, ...rebuildFilters(context, base, DEFAULT_SETTINGS) }
    context.add(
        shadow,
        deferred,
        new TgdPainterSkybox(context, { texture: skybox }),
        state,
        (_time: number, delta: number) => {
            box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094)
            const speed = -0.06247 * delta
            suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84)
        },
    )
    context.play()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refScene = React.useRef<Scene | null>(null)
    const [mode, setMode] = React.useState<Mode>(DEFAULT_SETTINGS.mode)
    const [strength, setStrength] = React.useState(DEFAULT_SETTINGS.strength)
    const [exponent, setExponent] = React.useState(DEFAULT_SETTINGS.exponent)
    const [shading, setShading] = React.useState(DEFAULT_SETTINGS.shading)
    const [cavity, setCavity] = React.useState(DEFAULT_SETTINGS.cavity)
    const [ridge, setRidge] = React.useState(DEFAULT_SETTINGS.ridge)
    const [valley, setValley] = React.useState(DEFAULT_SETTINGS.valley)
    const [ambientOcclusion, setAmbientOcclusion] = React.useState(DEFAULT_SETTINGS.ambientOcclusion)
    const [ambientOcclusionIntensity, setAmbientOcclusionIntensity] = React.useState(
        DEFAULT_SETTINGS.ambientOcclusionIntensity,
    )
    const [ambientOcclusionBlur, setAmbientOcclusionBlur] = React.useState(DEFAULT_SETTINGS.ambientOcclusionBlur)
    const [ambientOcclusionCombineWithLight, setAmbientOcclusionCombineWithLight] = React.useState(
        DEFAULT_SETTINGS.ambientOcclusionCombineWithLight,
    )
    const settings: Settings = {
        mode,
        strength,
        exponent,
        shading,
        cavity,
        ridge,
        valley,
        ambientOcclusion,
        ambientOcclusionIntensity,
        ambientOcclusionBlur,
        ambientOcclusionCombineWithLight,
    }
    /** Some options can only be set in the constructor of the filters. */
    const rebuild = (changes: Partial<Settings>) => {
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        Object.assign(scene, rebuildFilters(context, scene, { ...settings, ...changes }))
        context.paint()
    }
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
    const handleCavityChange = (value: boolean) => {
        setCavity(value)
        rebuild({ cavity: value })
    }
    const handleShadingChange = (value: boolean) => {
        setShading(value)
        rebuild({ shading: value })
    }
    const handleAmbientOcclusionChange = (value: boolean) => {
        setAmbientOcclusion(value)
        rebuild({ ambientOcclusion: value })
    }
    const handleAmbientOcclusionBlurChange = (value: boolean) => {
        setAmbientOcclusionBlur(value)
        rebuild({ ambientOcclusionBlur: value })
    }
    const handleAmbientOcclusionCombineWithLightChange = (value: boolean) => {
        setAmbientOcclusionCombineWithLight(value)
        rebuild({ ambientOcclusionCombineWithLight: value })
    }
    const handleAmbientOcclusionIntensityChange = (value: number) => {
        setAmbientOcclusionIntensity(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyAmbientOcclusionIntensity(scene.filters, value)
        context.paint()
    }
    const handleRidgeChange = (value: number) => {
        setRidge(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyCavity(scene.filters, value, valley)
        context.paint()
    }
    const handleValleyChange = (value: number) => {
        setValley(value)
        const context = refContext.current
        const scene = refScene.current
        if (!context || !scene) return

        applyCavity(scene.filters, ridge, value)
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refScene)
            }}
            assets={{
                glb: { helmet: HelmetURL, suzanne: SuzanneURL },
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
            <ViewPanel display="flex" flexDirection="column" gap="S">
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewOptions value={mode} onChange={handleModeChange}>
                        <div key="skybox">skybox texture</div>
                        <div key="color">skybox color</div>
                    </ViewOptions>
                    <ViewInputNumber label="skyboxStrength" value={strength} onChange={handleStrengthChange} />
                    <ViewInputNumber label="skyboxExponent" value={exponent} onChange={handleExponentChange} />
                </ViewPanel>
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewSwitch value={shading} onChange={handleShadingChange}>
                        Shading
                    </ViewSwitch>
                    <ViewSwitch value={cavity} onChange={handleCavityChange}>
                        Cavity
                    </ViewSwitch>
                    <ViewInputNumber label="Ridge" value={ridge} onChange={handleRidgeChange} enabled={cavity} />
                    <ViewInputNumber label="Valley" value={valley} onChange={handleValleyChange} enabled={cavity} />
                </ViewPanel>
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewSwitch value={ambientOcclusion} onChange={handleAmbientOcclusionChange}>
                        Ambient Occlusion
                    </ViewSwitch>
                    <ViewInputNumber
                        label="Intensity"
                        value={ambientOcclusionIntensity}
                        onChange={handleAmbientOcclusionIntensityChange}
                        enabled={ambientOcclusion}
                    />
                    <ViewSwitch
                        value={ambientOcclusionBlur}
                        onChange={handleAmbientOcclusionBlurChange}
                        enabled={ambientOcclusion}>
                        Blur
                    </ViewSwitch>
                    <ViewSwitch
                        value={ambientOcclusionCombineWithLight}
                        onChange={handleAmbientOcclusionCombineWithLightChange}
                        enabled={ambientOcclusion && shading}>
                        Combine with light
                    </ViewSwitch>
                </ViewPanel>
            </ViewPanel>
        </View>
    )
}

// #begin rebuildFilters()
/**
 * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`
 * can only be set in the constructor.
 * The previous ones, if any, are deleted.
 */
function rebuildFilters(
    context: TgdContext,
    scene: SceneBase & Partial<SceneFilters>,
    settings: Settings,
): SceneFilters {
    const { deferred, skybox, light, shadow, state } = scene
    // The painters do not own the filters, so we delete both.
    state.removeAll()
    for (const filter of Object.values(scene.filters ?? {})) filter.delete()
    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }
    const cavity = settings.cavity ? { ridge: settings.ridge, valley: settings.valley } : undefined
    const ambientOcclusion = settings.ambientOcclusion
        ? {
              intensity: settings.ambientOcclusionIntensity,
              blur: settings.ambientOcclusionBlur,
              combineWithLight: settings.ambientOcclusionCombineWithLight,
          }
        : undefined
    const filters: Record<Mode, TgdFilterDeferredShading> = {
        skybox: new TgdFilterDeferredShading(context, {
            textureNormals: deferred.textureNormals,
            textureDepth: deferred.textureDepth,
            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
            shading: settings.shading,
            skyboxTexture: skybox,
            skyboxStrength: settings.strength,
            skyboxExponent: settings.exponent,
            light,
            shadow: shadowOptions,
            cavity,
            ambientOcclusion,
        }),
        // A 1×1 cube texture is created from this color.
        color: new TgdFilterDeferredShading(context, {
            textureNormals: deferred.textureNormals,
            textureDepth: deferred.textureDepth,
            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
            shading: settings.shading,
            skyboxTexture: "#7af",
            skyboxStrength: settings.strength,
            skyboxExponent: settings.exponent,
            light,
            shadow: shadowOptions,
            cavity,
            ambientOcclusion,
        }),
    }
    const painters: Record<Mode, TgdPainterFilter> = {
        skybox: makePainterFilter(context, deferred, filters.skybox),
        color: makePainterFilter(context, deferred, filters.color),
    }
    applyMode(painters, settings.mode)
    state.add(painters.skybox, painters.color)
    return { filters, painters }
}
// #end

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

// #begin applyCavity()
function applyCavity(filters: Record<Mode, TgdFilterDeferredShading>, ridge: number, valley: number) {
    for (const filter of Object.values(filters)) {
        filter.cavityRidge = ridge
        filter.cavityValley = valley
    }
}
// #end

// #begin applyAmbientOcclusionIntensity()
function applyAmbientOcclusionIntensity(filters: Record<Mode, TgdFilterDeferredShading>, intensity: number) {
    for (const filter of Object.values(filters)) {
        filter.ambientOcclusionIntensity = intensity
    }
}
// #end
