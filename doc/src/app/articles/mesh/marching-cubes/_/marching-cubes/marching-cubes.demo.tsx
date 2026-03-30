import {
    type ArrayNumber3,
    type ArrayNumber4,
    type MakeGeometryFromVolumeOptions,
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialFaceOrientation,
    TgdPainterAxes,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterState,
    tgdCalcDegToRad,
    tgdCalcRandom,
    tgdMakeGeometryFromVolume,
    tgdSdfCapsule,
    tgdSdfSphere,
    webglPresetDepth,
} from "@tolokoban/tgd"

import View from "@/components/demo/Tgd"

type Tree = {
    point: ArrayNumber4
    children?: Tree[]
}

function init(ctx: TgdContext) {
    ctx.camera.fitSpaceAtTarget(12, 12)
    new TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000,
    })
    const tree: Tree = {
        point: [0, 0.5, 0, 0.5],
        children: [
            dendrite(1, 0.5, 85, 0),
            dendrite(1, 0.5, -60, 0),
            dendrite(1, 0.5, -60, 120),
            dendrite(1, 0.5, -60, 240),
        ],
    }
    const bbox = computeBBox(tree)
    const bboxCorner = bbox.min
    const bboxSize: ArrayNumber3 = [bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1], bbox.max[2] - bbox.min[2]]
    console.log("🐞 [marching-cubes.demo@61] bbox =", bbox) // @FIXME: Remove this line written on 2026-02-10 at 15:57
    console.log("🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =", bboxCorner, bboxSize) // @FIXME: Remove this line written on 2026-02-10 at 15:56
    const sdfList: Array<(p: ArrayNumber3) => number> = makeListOfSDF(tree)
    // #begin Initializing WebGL
    const options: MakeGeometryFromVolumeOptions = {
        bboxCorner,
        bboxSize,
        voxelSize: 1 / 16,
        sdfPoint(x, y, z) {
            const p: ArrayNumber3 = [x, y, z]
            const o: ArrayNumber3 = [0, 0.5, 0]
            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)
            for (const sdf of sdfList) {
                distance = Math.min(distance, sdf(p))
            }
            return distance
        },
        smoothingLevel: 2,
    }
    const geometry = tgdMakeGeometryFromVolume(options)
    const mesh = new TgdPainterMesh(ctx, {
        geometry,
        material: new TgdMaterialFaceOrientation(),
    })
    const state = new TgdPainterState(ctx, {
        depth: webglPresetDepth.less,
        children: [mesh],
    })
    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)
    ctx.paint()
    // #end
    state.add(new TgdPainterAxes(ctx, { scale: 2 }))
}

export default function Demo() {
    return <View onReady={init} gizmo options={{ alpha: false }} />
}

function makeListOfSDF(tree: Tree): ((p: ArrayNumber3) => number)[] {
    const sdfList: ((p: ArrayNumber3) => number)[] = []
    recursiveListOfSDF(tree, sdfList)
    return sdfList
}

function recursiveListOfSDF({ point, children }: Tree, sdfList: ((p: ArrayNumber3) => number)[]) {
    if (!children) return

    const [x0, y0, z0, r0] = point
    for (const child of children) {
        const [x1, y1, z1, r1] = child.point
        const sdf = (p: ArrayNumber3) => tgdSdfCapsule(p, [x0, y0, z0], [x1, y1, z1], r0, r1)
        sdfList.push(sdf)
        recursiveListOfSDF(child, sdfList)
    }
}

interface BBox {
    min: ArrayNumber3
    max: ArrayNumber3
}

function computeBBox(tree: Tree): BBox {
    const fringe = [tree]
    const min: ArrayNumber3 = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    const max: ArrayNumber3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
    while (fringe.length > 0) {
        const item = fringe.pop()
        if (!item) continue

        const [x, y, z, r0] = item.point
        console.log("🐞 [marching-cubes.demo@150] x, y, z =", x, y, z) // @FIXME: Remove this line written on 2026-02-10 at 16:02
        const r = r0 * 1.1
        min[0] = Math.min(min[0], x - r)
        max[0] = Math.max(min[0], x + r)
        min[1] = Math.min(min[1], y - r)
        max[1] = Math.max(min[1], y + r)
        min[2] = Math.min(min[2], z - r)
        max[2] = Math.max(min[2], z + r)
        if (item.children) fringe.push(...item.children)
    }
    return { min, max }
}

function dendrite(length: number, radius: number, lat: number, lng: number, x = 0, y = 0, z = 0): Tree {
    const radius2 = radius * tgdCalcRandom(0.5, 1.1)
    const lat0 = lat + tgdCalcRandom(-30, 30)
    const lng0 = lng + tgdCalcRandom(-30, 30)
    const latAng = tgdCalcDegToRad(lat0)
    const lngAng = tgdCalcDegToRad(lng0)
    const vy = Math.sin(latAng)
    const r = Math.cos(latAng)
    const vx = r * Math.cos(lngAng)
    const vz = r * Math.sin(lngAng)
    const x2 = x + vx * length
    const y2 = y + vy * length
    const z2 = z + vz * length
    const tree: Tree = {
        point: [x, y, z, radius],
        children: [],
    }
    if (radius2 > 0.1) {
        const count = Math.max(1, Math.floor(tgdCalcRandom(0, 3)))
        for (let loop = 0; loop < count; loop++) {
            tree.children?.push(
                dendrite(
                    length * tgdCalcRandom(0.5, 1.1),
                    radius2,
                    lat0 + tgdCalcRandom(-30, 30),
                    lng0 + tgdCalcRandom(-30, 30),
                    x2,
                    y2,
                    z2,
                ),
            )
        }
    }
    return tree
}
