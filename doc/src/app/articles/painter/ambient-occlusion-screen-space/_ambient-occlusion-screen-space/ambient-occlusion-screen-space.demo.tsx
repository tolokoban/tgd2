import {
    type ArrayNumber3,
    type TgdContext,
    TgdFilter,
    TgdFilterBlur,
    TgdGeometryBox,
    TgdGeometryPlane,
    TgdLight,
    TgdMaterialDiffuse,
    type TgdMesh,
    TgdPainterAmbientOcclusionScreenSpace,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterGroup,
    TgdPainterMeshes,
    TgdPainterState,
    TgdTexture2D,
    TgdTransfo,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel, ViewSlider, ViewSwitch } from "@tolokoban/ui"
import React from "react"
import View, { type Assets } from "@/components/demo/Tgd"
import SuzanneURL from "@/assets/mesh/suzanne.glb"

type Mode = "scene" | "ao" | "both"
type Scale = "1" | "0.5" | "0.25" | "0.125"
type Quality = "low" | "medium" | "high"

/** Current values of the UI controls. */
interface Settings {
    mode: Mode
    scale: Scale
    blur: boolean
    radius: number
    quality: Quality
}

interface Refs {
    assets: Assets
    /** Holds the whole scene, so we can rebuild it when `quality` changes. */
    root: TgdPainterGroup
    /** Textures that are not owned by any painter. */
    textures: TgdTexture2D[]
    /** One group per mode: only the one of the current mode is active. */
    groups: Record<Mode, TgdPainterGroup>
    /** Same as `groups`, but with a blurred textureAO. */
    groupsBlur: Record<Mode, TgdPainterGroup>
    /** Copy of textureAO into a texture that can be sampled with bilinear interpolation. */
    copy: TgdPainterFramebuffer
    blurs: TgdFilterBlur[]
    ao: TgdPainterAmbientOcclusionScreenSpace
}

/** Space between the plane and the objects. */
const GAP = 0.05

function init(context: TgdContext, assets: Assets, refRefs: { current: Refs | null }, settings: Settings) {
    // #begin Initializing WebGL
    const root = new TgdPainterGroup()
    context.add(root)
    refRefs.current = buildScene(context, assets, root, settings)
    context.camera.near = 0.1
    context.camera.far = 50
    context.camera.transfo.orientation = new TgdTransfo({ position: [3, 4, 5] }).lookAt([0, 0, 0]).orientation
    context.camera.fitSpaceAtTarget(6, 6)
    context.play()
    // #end
}

export default function Demo() {
    const refContext = React.useRef<TgdContext | null>(null)
    const refRefs = React.useRef<Refs | null>(null)
    const [mode, setMode] = React.useState<Mode>("both")
    const [scale, setScale] = React.useState<Scale>("1")
    const [blur, setBlur] = React.useState(true)
    const [radius, setRadius] = React.useState(0.5)
    // Same default as TgdPainterAmbientOcclusionScreenSpace.
    const [quality, setQuality] = React.useState<Quality>("medium")
    const handleModeChange = (value: Mode) => {
        setMode(value)
        const context = refContext.current
        const refs = refRefs.current
        if (!context || !refs) return

        activateGroups(refs, value, blur)
        context.paint()
    }
    const handleBlurChange = (value: boolean) => {
        setBlur(value)
        const context = refContext.current
        const refs = refRefs.current
        if (!context || !refs) return

        activateGroups(refs, mode, value)
        context.paint()
    }
    const handleRadiusChange = (value: number) => {
        setRadius(value)
        const context = refContext.current
        const refs = refRefs.current
        if (!context || !refs) return

        refs.ao.radius = value
        context.paint()
    }
    const handleScaleChange = (value: Scale) => {
        setScale(value)
        const context = refContext.current
        const refs = refRefs.current
        if (!context || !refs) return

        applyScale(refs, value)
        context.paint()
    }
    const handleQualityChange = (value: Quality) => {
        setQuality(value)
        const context = refContext.current
        const refs = refRefs.current
        if (!context || !refs) return

        // The number of samples is baked in the shader: we need a new painter.
        refRefs.current = rebuildScene(context, refs, { mode, scale, blur, radius, quality: value })
        context.paint()
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refContext.current = context
                init(context, assets, refRefs, { mode, scale, blur, radius, quality })
            }}
            assets={{ glb: { suzanne: SuzanneURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexWrap="wrap"
                gap="S"
                width="640px"
                maxWidth="100%">
                <ViewOptions value={mode} onChange={handleModeChange} label="View">
                    <div key="scene">scene</div>
                    <div key="ao">textureAO</div>
                    <div key="both">both</div>
                </ViewOptions>
                <ViewOptions label="quality" value={quality} onChange={handleQualityChange}>
                    <div key="low">low</div>
                    <div key="medium">medium</div>
                    <div key="high">high</div>
                </ViewOptions>
                <ViewOptions label="viewportMatchingScale" value={scale} onChange={handleScaleChange}>
                    <div key="2">2</div>
                    <div key="1">1</div>
                    <div key="0.5">1/2</div>
                    <div key="0.25">1/4</div>
                </ViewOptions>
                <ViewSwitch value={blur} onChange={handleBlurChange}>
                    Blur
                </ViewSwitch>
                <ViewSlider
                    value={radius}
                    onChange={handleRadiusChange}
                    min={0}
                    max={5}
                    step={0.1}
                    text={(value) => `radius: ${value.toFixed(1)}`}
                    wide
                />
            </ViewPanel>
        </View>
    )
}

// #begin buildScene()
/**
 * Create all the painters of the scene and add them to `root`.
 */
function buildScene(
    context: TgdContext,
    assets: Assets,
    root: TgdPainterGroup,
    { mode, scale, blur, radius, quality }: Settings,
): Refs {
    const material = new TgdMaterialDiffuse({
        color: "rgb(255, 215, 175)",
        ambient: new TgdLight({
            color: [0.5, 0.5, 0.5, 1],
        }),
    })
    // The plane lies at y = 0, facing +Y.
    const plane: TgdMesh = {
        geometry: new TgdGeometryPlane({ sizeX: 12, sizeY: 12, vecX: [1, 0, 0], vecY: [0, 0, -1] }),
        transfo: new TgdTransfo(),
        visible: true,
        material,
    }
    const suzanneGeometry = assets.glb.suzanne.makeGeometry()
    const [, suzanneMinY] = suzanneGeometry.computeBoundingBox().min
    const suzanne: TgdMesh = {
        geometry: suzanneGeometry,
        transfo: new TgdTransfo({ position: [0, GAP - suzanneMinY, 0], scale: [1.2, 1, 1.2] }),
        visible: true,
        material,
    }
    const cubes = [
        makeCube(material, [-2.5, 0, -1], 0.3),
        makeCube(material, [2.2, 0, -1.5], -0.5),
        makeCube(material, [-1.5, 0, 2], 0.9),
        makeCube(material, [2, 0, 1.8], 0),
        makeCube(material, [0, 0, -3], 0.2),
    ]
    const meshes = [plane, suzanne, ...cubes]
    const deferred = new TgdPainterDeferredShading(context, { meshes })
    const ao = new TgdPainterAmbientOcclusionScreenSpace(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        quality,
        radius,
        bias: 0.02,
        viewportMatchingScale: 1,
    })
    // The scene is rendered into a texture, to be combined with textureAO later.
    const textureScene = new TgdTexture2D(context)
    const framebuffer = new TgdPainterFramebuffer(context, {
        textureColor0: textureScene,
        depthBuffer: true,
        children: [
            new TgdPainterClear(context, { color: [0.1, 0.22, 0.3, 1], depth: 1 }),
            new TgdPainterState(context, {
                depth: "lessOrEqual",
                cull: "back",
                blend: "off",
                children: [new TgdPainterMeshes(context, { meshes })],
            }),
        ],
    })
    // textureAO has a single channel (R32F): we display it in shades of grey.
    const filterGrey = new TgdFilter({
        fragmentShaderCode: ["float ao = texture(uniTexture, varUV).r;", "FragColor = vec4(vec3(ao), 1.0);"],
    })
    // Apply the ambient occlusion to the scene by multiplying the colors.
    const filterBoth = new TgdFilter({
        textures: { uniTextureAO: ao.textureAO },
        fragmentShaderCode: [
            "vec4 color = texture(uniTexture, varUV);",
            "float ao = texture(uniTextureAO, varUV).r;",
            "FragColor = vec4(color.rgb * ao, color.a);",
        ],
    })
    const groups: Record<Mode, TgdPainterGroup> = {
        scene: new TgdPainterGroup([new TgdPainterFilter(context, { texture: textureScene, flipY: true })]),
        ao: new TgdPainterGroup([
            new TgdPainterFilter(context, { texture: ao.textureAO, filters: [filterGrey], flipY: true }),
        ]),
        both: new TgdPainterGroup([
            new TgdPainterFilter(context, { texture: textureScene, filters: [filterBoth], flipY: true }),
        ]),
    }
    // textureAO uses R32F with NEAREST filtering, but the blur relies on bilinear interpolation.
    // So we copy it into a RGBA8 texture with LINEAR filtering first.
    const textureAOLinear = new TgdTexture2D(context, {
        params: {
            magFilter: "LINEAR",
            minFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
    })
    const copy = new TgdPainterFramebuffer(context, {
        textureColor0: textureAOLinear,
        children: [new TgdPainterFilter(context, { texture: ao.textureAO, flipY: true })],
    })
    // Horizontal and vertical blurs.
    const blurs = TgdFilterBlur.createPair({ size: 4 })
    // Here, uniTexture is the blurred textureAO.
    const filterBothBlur = new TgdFilter({
        textures: { uniTextureScene: textureScene },
        fragmentShaderCode: [
            "vec4 color = texture(uniTextureScene, varUV);",
            "float ao = texture(uniTexture, varUV).r;",
            "FragColor = vec4(color.rgb * ao, color.a);",
        ],
    })
    const groupsBlur: Record<Mode, TgdPainterGroup> = {
        scene: groups.scene,
        ao: new TgdPainterGroup([
            new TgdPainterFilter(context, { texture: textureAOLinear, filters: [...blurs, filterGrey], flipY: true }),
        ]),
        both: new TgdPainterGroup([
            new TgdPainterFilter(context, {
                texture: textureAOLinear,
                filters: [...blurs, filterBothBlur],
                flipY: true,
            }),
        ]),
    }
    const refs: Refs = {
        assets,
        root,
        textures: [textureScene, textureAOLinear],
        groups,
        groupsBlur,
        copy,
        blurs,
        ao,
    }
    // Start with the initial values of the UI controls.
    activateGroups(refs, mode, blur)
    applyScale(refs, scale)
    root.add(
        // Must come first: the meshes have to move before being painted.
        makeBounce(suzanne),
        deferred,
        ao,
        framebuffer,
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "off",
            children: [copy, groups.scene, groups.ao, groups.both, groupsBlur.ao, groupsBlur.both],
        }),
    )
    return refs
}
// #end

// #begin rebuildScene()
/**
 * Release all the GPU resources of the scene, and build it again.
 */
function rebuildScene(context: TgdContext, { assets, root, textures }: Refs, settings: Settings): Refs {
    // Deletes the painters too.
    root.removeAll()
    for (const texture of textures) texture.delete()
    return buildScene(context, assets, root, settings)
}
// #end

// #begin activateGroups()
/**
 * Only the group of the current `mode` is active.
 * The copy of textureAO is only needed when we blur it.
 */
function activateGroups({ groups, groupsBlur, copy }: Refs, mode: Mode, blur: boolean) {
    for (const key of Object.keys(groups) as Mode[]) {
        groups[key].active = false
        groupsBlur[key].active = false
    }
    ;(blur ? groupsBlur : groups)[mode].active = true
    copy.active = blur && mode !== "scene"
}
// #end

// #begin applyScale()
function applyScale({ ao, blurs }: Refs, scale: Scale) {
    // textureAO will be resized on next paint.
    ao.viewportMatchingScale = Number(scale)
    // The blur is applied at full resolution: we widen it to cover the same number of AO pixels.
    for (const filter of blurs) filter.strength = 1 / Number(scale)
}
// #end

// #begin makeBounce()
/**
 * Suzanne bounces from her current Y to Y + 1, and back, in one second.
 */
function makeBounce(mesh: TgdMesh) {
    const [x, y, z] = mesh.transfo.position
    return (time: number) => {
        mesh.transfo.setPosition(x, y + Math.abs(Math.sin(Math.PI * time)), z)
    }
}
// #end

// #begin makeCube()
/**
 * A cube of size 1 floating `GAP` above the plane,
 * rotated by `angle` radians around the Y axis.
 */
function makeCube(material: TgdMaterialDiffuse, [x, y, z]: ArrayNumber3, angle: number): TgdMesh {
    const transfo = new TgdTransfo({ position: [x, y + 0.5 + GAP, z] })
    transfo.orbitAroundY(angle)
    return {
        geometry: new TgdGeometryBox(),
        transfo,
        visible: true,
        material,
    }
}
// #end
