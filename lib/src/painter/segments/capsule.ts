import { TgdDataset } from "@tgd/dataset"
import { TgdGeometry } from "@tgd/geometry"

const TAU = 2 * Math.PI

/**
 * The capsule is a 3D shape mae of a cylinder
 * and two hemispheres, all of radius 1.
 * The roundness gives use the number of faces around the cylinder.
 * Every vertex has 4 coordinates: x, y, z, and a number that will
 * be 0.0 for bottom tip, and 1.1 for top tip.
 * The cylinder is aligned along Z axis.
 */
export function makeCapsule(roundness: number): TgdGeometry {
    roundness = Math.max(3, roundness)
    const tips: number[] = []
    const offset: number[] = []
    const elements: number[] = []
    const angleStep = TAU / roundness
    for (let face = 0; face < roundness; face++) {
        const angle = angleStep * face
        const x = Math.cos(angle)
        const y = Math.sin(angle)
        offset.push(x, y, +1)
        tips.push(1)
        offset.push(x, y, -1)
        tips.push(0)
        const top1 = face * 2
        const bottom1 = top1 + 1
        const top2 = ((face + 1) % roundness) * 2
        const bottom2 = top2 + 1
        elements.push(top2, top1, bottom1)
        elements.push(top2, bottom1, bottom2)
    }
    const rings = Math.max(2, Math.ceil(roundness / 2))
    const angleStepRing = (0.5 * Math.PI) / rings
    for (let ring = 1; ring < rings; ring++) {
        const phi = angleStepRing * ring
        const z = Math.sin(phi)
        const radius = Math.cos(phi)
        for (let face1 = 0; face1 < roundness; face1++) {
            const angle = angleStep * face1
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            offset.push(x, y, z + 1)
            tips.push(1)
            offset.push(x, y, -z - 1)
            tips.push(0)
            const face2 = (face1 + 1) % roundness
            const idx0 = (ring - 1) * roundness * 2
            const idx1 = ring * roundness * 2
            const top1r0 = idx0 + face1 * 2
            const top2r0 = idx0 + face2 * 2
            const top1r1 = idx1 + face1 * 2
            const top2r1 = idx1 + face2 * 2
            elements.push(top1r0, top2r0, top2r1)
            elements.push(top2r1, top1r1, top1r0)
            elements.push(top1r0 + 1, top2r1 + 1, top2r0 + 1)
            elements.push(top2r1 + 1, top1r0 + 1, top1r1 + 1)
        }
    }
    offset.push(0, 0, +2)
    tips.push(1)
    offset.push(0, 0, -2)
    tips.push(0)
    const baseIndex = tips.length - 2 * (roundness + 1)
    const endIndex = tips.length - 2
    for (let face0 = 0; face0 < roundness; face0++) {
        const face1 = (face0 + 1) % roundness
        const idx0 = face0 * 2 + baseIndex
        const idx1 = face1 * 2 + baseIndex
        elements.push(idx0 + 0, idx1 + 0, endIndex + 0)
        elements.push(idx1 + 1, idx0 + 1, endIndex + 1)
    }
    const capsule = new TgdDataset({
        attTip: "float",
        POSITION: "vec3",
        NORMAL: "vec3",
    })
    capsule.set("POSITION", new Float32Array(offset))
    capsule.set("attTip", new Float32Array(tips))
    const geometry = new TgdGeometry({
        dataset: capsule,
        elements: new Uint16Array(elements),
        computeNormalsIfMissing: true,
        // attPosition: "attPosition",
        // attNormal: "attNormal",
    })
    const { set, get } = capsule.getAttribAccessor("NORMAL")
    // The cylinder must be really flat
    for (let idx = 0; idx < roundness * 2; idx += 2) {
        set(0, idx, 2)
        set(0, idx + 1, 2)
        const x = (get(idx, 0) + get(idx + 1, 0)) / 2
        const y = (get(idx, 1) + get(idx + 1, 1)) / 2
        set(x, idx, 0)
        set(y, idx, 1)
        set(x, idx + 1, 0)
        set(y, idx + 1, 1)
    }
    // We collapse the cylinder because it will
    // be instantiated with two tips points and radii.
    for (let idx = 0; idx < tips.length; idx++) {
        const shiftZ = tips[idx] === 0 ? +1 : -1
        offset[idx * 3 + 2] += shiftZ
    }
    capsule.set("POSITION", new Float32Array(offset))
    capsule.set("attTip", new Float32Array(tips))
    return geometry
}
