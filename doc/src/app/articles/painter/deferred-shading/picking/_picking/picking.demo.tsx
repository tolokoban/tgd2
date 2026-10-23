import {
    tgdCanvasCreateWithContext2D,
    TgdColor,
    type TgdContext,
    TgdFilter,
    TgdFilterDeferredShading,
    TgdFilterVerbatim,
    TgdGeometryBox,
    TgdGeometryGltf,
    TgdGeometryPlane,
    TgdGeometrySphereIco,
    TgdMaterial,
    TgdMaterialDiffuse,
    TgdMaterialFlatTexture,
    TgdMaterialToon,
    type TgdMesh,
    TgdPainterBackground,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterFilter,
    TgdPainterState,
    TgdTexture2D,
    TgdTransfo,
    TgdVec4,
} from "@tolokoban/tgd"
import { ViewOptions, ViewPanel, ViewSwitch } from "@tolokoban/ui"
import React from "react"
import SuzanneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"

type Resolution = "1" | "1/2" | "1/4" | "1/8"

const RESOLUTIONS: Record<Resolution, number> = {
    "1": 1,
    "1/2": 1 / 2,
    "1/4": 1 / 4,
    "1/8": 1 / 8,
}

const COUNT = 12

function init(context: TgdContext, assets: Assets, onHover: (id: number) => void): TgdPainterDeferredShading {
    // #begin Initializing WebGL
    const textureBackground = makeBackgroundTexture(context)
    // A ring of objects, with an id from 1 to COUNT.
    const colors: TgdVec4[] = []
    const highlights: TgdVec4[] = []
    const materials: TgdMaterial[] = []
    const children: TgdMesh[] = []
    const box = new TgdGeometryBox({ sizeX: 0.6, sizeY: 0.6, sizeZ: 0.6 })
    const sphere = new TgdGeometrySphereIco({ radius: 0.4, subdivisions: 2 })
    const suzanne = new TgdGeometryGltf({ data: assets.glb.suzanne })
    // We alternate: box > sphere > suzanne > box > ...
    const geometries = [box, sphere, suzanne]
    // Suzanne is about 2 units wide: we scale it down to the size of the others.
    const scales = [1, 1, 0.35]
    for (let index = 0; index < COUNT; index++) {
        const angle = (2 * Math.PI * index) / COUNT
        const color = TgdColor.fromHSL(index / COUNT, 0.8, 0.5).toVec4()
        const material = new TgdMaterialToon({ color, shades: 4 })
        const scale = scales[index % scales.length]
        colors.push(color)
        highlights.push(highlightColor(color))
        materials.push(material)
        children.push({
            id: index + 1,
            geometry: geometries[index % geometries.length],
            material,
            transfo: new TgdTransfo({
                position: [2 * Math.cos(angle), 0, 2 * Math.sin(angle)],
                scale: [scale, scale, scale],
            }),
            visible: true,
        })
    }
    const root: TgdMesh = { transfo: new TgdTransfo(), visible: true, children }
    // This mesh has no id: it cannot be picked, but it hides the objects behind it.
    // It does not belong to the rotating root, so it keeps facing the initial camera.
    const plane: TgdMesh = {
        geometry: new TgdGeometryPlane({ sizeX: 2.4, sizeY: 2.4 }),
        material: new TgdMaterialFlatTexture({ texture: textureBackground }),
        transfo: new TgdTransfo(),
        visible: true,
    }
    const deferred = new TgdPainterDeferredShading(context, {
        meshes: [root, plane],
        enableIDs: true,
    })
    // Last position of the pointer, in screen space (between -1 and +1).
    const pointer = { x: 0, y: 0 }
    context.inputs.pointer.eventHover.addListener((event) => {
        pointer.x = event.current.x
        pointer.y = event.current.y
    })
    context.inputs.pointer.eventTap.addListener((event) => {
        const id = deferred.readID(event.x, event.y)
        if (id > 0) {
            const index = id - 1
            colors[index] = TgdColor.fromHSL(Math.random(), 1, 0.5).toVec4()
            highlights[index] = highlightColor(colors[index])
        }
    })
    context.add(
        (_time: number, delta: number) => {
            root.transfo.orbitAroundY(delta * 0.2)
        },
        deferred,
        // The objects move, so we pick at every frame, even if the pointer does not move.
        () => {
            const id = deferred.readID(pointer.x, pointer.y)
            highlight(materials, colors, highlights, id)
            onHover(id)
        },
        new TgdPainterClear(context, { depth: 1 }),
        new TgdPainterBackground(context, {
            texture: textureBackground,
        }),
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [
                new TgdPainterFilter(context, {
                    texture: deferred.textureAlbedo,
                    filters: [
                        new TgdFilterDeferredShading(context, {
                            ...deferred,
                            cavity: {},
                        }),
                    ],
                }),
            ],
            // children: [new TgdPainterBackground(context, { texture: deferred.textureAlbedo, scaleY: -1 })],
        }),
    )
    context.camera.transfo.orbitAroundX(-0.4)
    plane.transfo.orientation = context.camera.transfo.orientation
    context.camera.fitSpaceAtTarget(5.5, 5.5)
    context.play()
    // #end
    return deferred
}

export default function Demo() {
    const refDeferred = React.useRef<TgdPainterDeferredShading | null>(null)
    const [hovered, setHovered] = React.useState(0)
    const [enableIDs, setEnableIDs] = React.useState(true)
    const [resolution, setResolution] = React.useState<Resolution>("1")
    const handleEnableIDsChange = (value: boolean) => {
        setEnableIDs(value)
        const deferred = refDeferred.current
        if (deferred) deferred.enableIDs = value
    }
    const handleResolutionChange = (value: Resolution) => {
        setResolution(value)
        const deferred = refDeferred.current
        if (deferred) deferred.resolutionIDs = RESOLUTIONS[value]
    }
    return (
        <View
            onReady={(context: TgdContext, assets: Assets) => {
                refDeferred.current = init(context, assets, setHovered)
            }}
            assets={{ glb: { suzanne: SuzanneURL } }}
            controller={{ inertiaOrbit: 1000 }}
            gizmo>
            <ViewPanel display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap" gap="S">
                <ViewSwitch value={enableIDs} onChange={handleEnableIDsChange}>
                    enableIDs
                </ViewSwitch>
                <ViewOptions value={resolution} onChange={handleResolutionChange}>
                    <div key="1">1</div>
                    <div key="1/2">1/2</div>
                    <div key="1/4">1/4</div>
                    <div key="1/8">1/8</div>
                </ViewOptions>
                <div>{hovered > 0 ? `Hovered id: ${hovered}` : "Nothing hovered"}</div>
            </ViewPanel>
        </View>
    )
}

// #begin highlight()
/**
 * The hovered object is painted in white, the others with their own color.
 */
function highlight(materials: { color: TgdVec4 }[], colors: TgdVec4[], highlights: TgdVec4[], id: number) {
    for (let index = 0; index < materials.length; index++) {
        materials[index].color = index + 1 === id ? highlights[index] : colors[index]
    }
}

function highlightColor(input: TgdVec4): TgdVec4 {
    const color = new TgdColor(input)
    // color.R += 0.5 * (1 - color.R)
    // color.G += 0.5 * (1 - color.G)
    // color.B += 0.5 * (1 - color.B)
    color.R *= 0.5
    color.G *= 0.5
    color.B *= 0.5
    return color.toVec4()
}
// #end

function makeBackgroundTexture(context: TgdContext): TgdTexture2D {
    const W = 2048
    const H = 2048
    const { canvas, ctx } = tgdCanvasCreateWithContext2D(W, H)

    ctx.fillStyle = new TgdColor(0.2, 0.3, 0.4, 1).toString()
    ctx.fillRect(0, 0, W, H)
    ctx.font = `${Math.min(W, H) / 10}px serif`
    ctx.fillStyle = new TgdColor(0.8, 0.6, 0.4, 1).toString()
    ctx.fillText("Pick an object", W / 6, H / 4)
    const texture = new TgdTexture2D(context).loadBitmap(canvas)
    return texture
}
