import {
    TgdColor,
    type TgdContext,
    TgdFilterDeferredShading,
    TgdFilterGlow,
    TgdMaterialFlatTexture,
    type TgdMeshWithTextures,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterFilter,
    TgdPainterState,
} from "@tolokoban/tgd"
import { ViewInputColor, ViewInputNumber, ViewOptions, ViewPanel, ViewSwitch } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import HelmetURL from "@/assets/mesh/helmet.glb"

/** What the user can change in the panel. The names are the ones of the fields of TgdFilterGlow. */
interface Settings {
    radius: number
    strength: number
    scale: number
    levels: number
    falloff: number
    threshold: number
    knee: number
    tint: string
    blend: "additive" | "screen"
    hdr: boolean
    downsampleFilter: "default" | "13-tap"
}

const DEFAULT_SETTINGS: Settings = {
    radius: 0.05,
    strength: 1.5,
    scale: 0.5,
    levels: 5,
    falloff: 0.7,
    threshold: 0,
    knee: 0.5,
    tint: "#fff",
    blend: "additive",
    hdr: false,
    downsampleFilter: "default",
}

interface Scene {
    context: TgdContext
    glow: TgdFilterGlow
}

function init(context: TgdContext, assets: Assets): TgdFilterGlow {
    // #begin Initializing WebGL
    // glTF stores metallic in BLUE and roughness in GREEN.
    const { helmet: asset } = assets.glb
    const gltfMaterial = asset.getMaterial(0)
    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0
    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0
    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0
    const indexNormals = gltfMaterial.normalTexture?.index ?? 0
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
    const deferred = new TgdPainterDeferredShading(context, { meshes: [helmet] })
    const lighting = new TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        skyboxTexture: "#557",
    })
    const glow = new TgdFilterGlow(context, {
        ...DEFAULT_SETTINGS,
        tint: parseTint(DEFAULT_SETTINGS.tint),
        textureEmission: deferred.textureEmission,
    })
    context.camera.fitSpaceAtTarget(2.2, 2.2)
    context.add(
        new TgdPainterClear(context, { color: [0.05, 0.05, 0.08, 1], depth: 1 }),
        deferred,
        // Nothing is painted (alpha = 0) where there is no mesh nor glow.
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [
                new TgdPainterFilter(context, {
                    texture: deferred.textureAlbedo,
                    filters: [lighting, glow],
                    flipY: true,
                }),
            ],
        }),
    )
    context.paint()
    // #end
    return glow
}

export default function Demo() {
    const refScene = React.useRef<Scene | null>(null)
    const [settings, setSettings] = React.useState<Settings>(DEFAULT_SETTINGS)
    const update = (changes: Partial<Settings>) => {
        setSettings({ ...settings, ...changes })
        const scene = refScene.current
        if (!scene) return

        applySettings(scene, changes)
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refScene.current = { context, glow: init(context, assets) }
            }}
            assets={{ glb: { helmet: HelmetURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" flexDirection="column" gap="S">
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewInputNumber label="radius" value={settings.radius} onChange={(radius) => update({ radius })} />
                    <ViewInputNumber
                        label="strength"
                        value={settings.strength}
                        onChange={(strength) => update({ strength })}
                    />
                    <ViewInputColor label="tint" value={settings.tint} onChange={(tint) => update({ tint })} />
                    <ViewOptions value={settings.blend} onChange={(blend) => update({ blend })}>
                        <div key="additive">additive</div>
                        <div key="screen">screen</div>
                    </ViewOptions>
                </ViewPanel>
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewInputNumber label="scale" value={settings.scale} onChange={(scale) => update({ scale })} />
                    <ViewInputNumber label="levels" value={settings.levels} onChange={(levels) => update({ levels })} />
                    <ViewInputNumber
                        label="falloff"
                        value={settings.falloff}
                        onChange={(falloff) => update({ falloff })}
                    />
                    <ViewInputNumber
                        label="threshold"
                        value={settings.threshold}
                        onChange={(threshold) => update({ threshold })}
                    />
                    <ViewInputNumber label="knee" value={settings.knee} onChange={(knee) => update({ knee })} />
                </ViewPanel>
                <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                    <ViewOptions
                        value={settings.downsampleFilter}
                        onChange={(downsampleFilter) => update({ downsampleFilter })}>
                        <div key="default">default</div>
                        <div key="13-tap">13-tap</div>
                    </ViewOptions>
                    <ViewSwitch value={settings.hdr} onChange={(hdr) => update({ hdr })}>
                        hdr
                    </ViewSwitch>
                </ViewPanel>
            </ViewPanel>
        </View>
    )
}

// #begin applySettings()
/**
 * Every option of TgdFilterGlow is a public field that can be changed at any time.
 * Changing `levels`, `hdr` or `downsampleFilter` rebuilds the passes before the next paint.
 */
function applySettings({ context, glow }: Scene, changes: Partial<Settings>) {
    const { tint, ...others } = changes
    Object.assign(glow, others)
    if (tint !== undefined) glow.tint = parseTint(tint)
    context.paint()
}
// #end

// #begin parseTint()
function parseTint(tint: string): [number, number, number] {
    const color = new TgdColor(tint)
    return [color.R, color.G, color.B]
}
// #end
