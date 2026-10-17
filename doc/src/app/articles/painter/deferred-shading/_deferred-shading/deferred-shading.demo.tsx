import {
    type TgdContext,
    TgdFilter,
    TgdGeometryBox,
    TgdMaterialFaceOrientation,
    TgdMaterialFlatTexture,
    type TgdMeshWithTextures,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterDeferredShadingTextures,
    TgdPainterFilter,
    TgdPainterGroup,
    TgdPainterState,
    TgdTexture2D,
    TgdTransfo,
    tgdCanvasCreateCreateGradientvertical,
    tgdCanvasCreateGradientHorizontal,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import HelmetURL from "@/assets/mesh/helmet.glb"

type Mode = "scene" | "normals" | "depth" | "albedo" | "material"

type Groups = Record<Mode, TgdPainterGroup>

function init(context: TgdContext, assets: Assets, refGroups: { current: Groups | null }) {
    // #begin Initializing WebGL
    const material = new TgdMaterialFaceOrientation()
    // Metallic grows from left to right, and specular from top to bottom.
    // Roughness and baked AO keep their default values (0.5 and 1.0).
    const box: TgdMeshWithTextures = {
        geometry: new TgdGeometryBox(),
        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),
        visible: true,
        material,
        textures: {
            metallic: new TgdTexture2D(context, {
                load: tgdCanvasCreateGradientHorizontal(64, ["#000", "#fff"]),
            }),
            specular: new TgdTexture2D(context, {
                load: tgdCanvasCreateCreateGradientvertical(64, ["#000", "#fff"]),
            }),
        },
    }
    // The helmet comes with glTF PBR textures:
    // - metallicRoughnessTexture: metallic in BLUE, roughness in GREEN.
    // - occlusionTexture: baked ambient occlusion in RED.
    // - normalTexture: normal map that bends the normals to simulate bumps.
    //   The geometry has no tangents, so they are computed from the UV coordinates.
    // The `...Channel` attributes tell which channel to read in each texture (RED by default).
    // There is no specular texture in this file: the default value (0.5) is used.
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
    const meshes = [box, helmet]
    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes })
    const makeBackground = (texture: TgdTexture2D) =>
        new TgdPainterGroup([new TgdPainterBackground(context, { texture, scaleY: -1 })])
    const groups: Groups = {
        scene: makeBackground(deferred.textureAlbedo),
        normals: makeBackground(deferred.textureNormals),
        depth: new TgdPainterGroup([
            new TgdPainterFilter(context, {
                texture: deferred.textureDepth,
                filters: [makeFilterLinearDepth(context)],
                flipY: true,
            }),
        ]),
        albedo: makeBackground(deferred.textureAlbedo),
        material: makeBackground(deferred.textureMetallicRoughnessSpecularBakedAO),
    }
    refGroups.current = groups
    applyMode(groups, "scene")
    context.add(
        deferred,
        new TgdPainterClear(context, { color: [0.3, 0.22, 0, 1], depth: 1 }),
        // The scene is the albedo texture, blended over the clear color.
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [groups.scene],
        }),
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "off",
            children: [groups.depth, groups.normals, groups.albedo, groups.material],
        }),
        (_time, delta) => {
            box.transfo.orbitAroundX(delta * 0.71).orbitAroundY(delta * 0.94)
        },
    )
    // A short depth range makes the linearized depth easier to see.
    context.camera.near = 1
    context.camera.far = 20
    context.camera.fitSpaceAtTarget(5, 5)
    context.play()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refGroups = React.useRef<Groups | null>(null)
    const [mode, setMode] = React.useState<Mode>("scene")
    const handleModeChange = (value: Mode) => {
        setMode(value)
        const context = refContext.current
        const groups = refGroups.current
        if (!context || !groups) return

        applyMode(groups, value)
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refGroups)
            }}
            assets={{ glb: { helmet: HelmetURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap">
                <ViewOptions value={mode} onChange={handleModeChange}>
                    <div key="scene">scene</div>
                    <div key="normals">normals</div>
                    <div key="depth">depth</div>
                    <div key="albedo">albedo</div>
                    <div key="material">material</div>
                </ViewOptions>
            </ViewPanel>
        </View>
    )
}

// #begin applyMode()
/**
 * Show the scene, or one of the textures of the deferred shading.
 */
function applyMode(groups: Groups, mode: Mode) {
    for (const key of Object.keys(groups) as Mode[]) {
        groups[key].active = key === mode
    }
}
// #end

// #begin makeFilterLinearDepth()
/**
 * The depth texture is not linear with a perspective camera.
 * This filter unprojects it to show the distance from the camera
 * between 0 (near plane) and 1 (far plane).
 */
function makeFilterLinearDepth(context: TgdContext) {
    return new TgdFilter({
        uniforms: {
            uniProjectionMatrixInverse: "mat4",
            uniNear: "float",
            uniFar: "float",
        },
        fragmentShaderCode: [
            "float depth = texture(uniTexture, varUV).r;",
            "vec4 p = uniProjectionMatrixInverse * vec4(0.0, 0.0, depth * 2.0 - 1.0, 1.0);",
            "float z = (-p.z / p.w - uniNear) / (uniFar - uniNear);",
            "FragColor = vec4(vec3(z), 1.0);",
        ],
        setUniforms: ({ program }) => {
            const { camera } = context
            program.uniformMatrix4fv("uniProjectionMatrixInverse", camera.matrixProjectionInverse)
            program.uniform1f("uniNear", camera.near)
            program.uniform1f("uniFar", camera.far)
        },
    })
}
// #end
