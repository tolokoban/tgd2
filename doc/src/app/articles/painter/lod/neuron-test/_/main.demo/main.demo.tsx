// import NegX from "@/assets/cubemap/sky/negX.webp"
// import NegY from "@/assets/cubemap/sky/negY.webp"
// import NegZ from "@/assets/cubemap/sky/negZ.webp"
// import PosX from "@/assets/cubemap/sky/posX.webp"
// import PosY from "@/assets/cubemap/sky/posY.webp"
// import PosZ from "@/assets/cubemap/sky/posZ.webp"
import View, { type Assets } from "@/components/demo/Tgd"
import {
    type ArrayNumber4,
    TgdBoundingBox,
    tgdCalcMapRange,
    tgdColorMakeHueWheel,
    type TgdContext,
    TgdDataset,
    TgdGeometry,
    tgdLoadArrayBuffer,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterLOD,
    TgdPainterMesh,
    TgdPainterState,
    TgdVec3,
    webglPresetDepth,
} from "@tolokoban/tgd"
import { OctreeInfo } from "./info"

const MAX_ZOOM = 12

// #begin
function init(context: TgdContext, assets: Assets) {
    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({
        steps: 6,
    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)
    const materials = [0, 1, 2, 3, 4, 5].map(
        (level) =>
            new TgdMaterialDiffuse({
                color: COLORS[level],
                lockLightsToCamera: true,
            }),
    )
    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })
    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()
    bbox.debug()
    const vecMin = new TgdVec3(bbox.min)
    const vecMax = new TgdVec3(bbox.max)
    const vecDim = new TgdVec3(vecMax).subtract(vecMin)
    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)
    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)
    const { camera } = context
    camera.transfo.position = center
    camera.near = 1
    camera.far = radius * 1
    camera.fitSpaceAtTarget(radius, radius)
    const availableFiles = new Set<string>(OctreeInfo.files.split(","))
    const lod = new TgdPainterLOD(context, {
        bbox,
        async factory(x: number, y: number, z: number, level: number) {
            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)
            if (!geometry) return null

            return new TgdPainterMesh(context, {
                geometry,
                material: new TgdMaterialDiffuse({
                    color: [Math.random(), Math.random(), Math.random(), 1],
                    lockLightsToCamera: true,
                }), // materials[level], // new TgdMaterialFaceOrientation()
            })
        },
        subdivisions: 4,
        surfaceThreshold: 1,
    })
    context.add(
        clear,
        new TgdPainterState(context, {
            children: [lod],
            depth: webglPresetDepth.less,
            // cull: webglPresetCull.back,
        }),
    )
    context.paint()
    return (settings: { zoom: number }) => {
        const { camera } = context
        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)
        camera.near = Math.max(1, camera.transfo.distance - radius)
        camera.far = camera.transfo.distance + radius
    }
}
// #end

export default function Demo() {
    return (
        <View
            disableDefaultDoubleTap
            onReady={init}
            gizmo
            controller={{
                inertiaOrbit: 1000,
                inertiaZoom: 1000,
                speedZoom: 0,
            }}
            settings={{
                zoom: {
                    label: "Zoom",
                    value: 1,
                    min: 1,
                    max: MAX_ZOOM,
                },
            }}
        />
    )
}

function toBin(value: number, level: number): string {
    return value.toString(2).padStart(level, "0")
}

async function loadGeometry(
    x: number,
    y: number,
    z: number,
    level: number,
    availableFiles: Set<string>,
): Promise<TgdGeometry | null> {
    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`
    if (!availableFiles.has(id)) return null

    const url = level === 0 ? "./assets/neuron/02/0.bin" : `./assets/neuron/02/${id}.bin`
    console.log("Loading LOD block:", url)
    const buffer = await tgdLoadArrayBuffer(url)
    if (!buffer) throw new Error(`Unable to load ${url}!`)

    console.debug(new Float32Array(buffer))
    const data = buffer.slice(4)
    const dataset = new TgdDataset(
        {
            POSITION: "vec3",
            NORMAL: "vec3",
        },
        {
            data,
        },
    )
    const geometry = new TgdGeometry({
        dataset,
        attPosition: "POSITION",
        attNormal: "NORMAL",
    })
    geometry.debug()
    return geometry
}
