/* eslint-disable unicorn/prevent-abbreviations */
import { TgdDataset } from "@tgd/dataset"
import { ArrayNumber3, TgdTypeArrayForElements } from "@tgd/types"
import { TgdGeometry } from "../../geometry"
import { TgdVec3 } from "@tgd/math"
import {
    tgdDataMarchingCubesConfigurations,
    tgdDataMarchingCubesVoxelCorners,
    tgdDataMarchingCubesVoxelMidPoints,
} from "./data"

export interface MakeGeometryFromVolumeOptions {
    bboxCorner: ArrayNumber3 | TgdVec3
    bboxSize: ArrayNumber3 | TgdVec3
    /**
     * Size of the side of the voxel we use to mesh the volume.
     */
    voxelSize: number
    /**
     * Signed distance function that defines the volume.
     * @returns A Negative number if `point` is inside the volume.
     */
    sdfPoint(x: number, y: number, z: number): number
    /**
     * By default the name of the attribute position is "POSITION".
     */
    attPosition?: string
    /**
     * Marching cubes make blocky meshes.
     * One level of smoothing can improve this.
     * If it's not enough, just increase the level of smoothing.
     */
    smoothingLevel?: number
}

export function tgdMakePointsCloudFromVolume(
    options: MakeGeometryFromVolumeOptions,
    radiusMultiplier = 1
) {
    const helper = new VolumeHelper(options)
    return helper.getPointsCloud(radiusMultiplier)
}

export function tgdMakeGeometryFromVolume(
    options: MakeGeometryFromVolumeOptions
): TgdGeometry {
    const { attPosition = "POSITION" } = options
    const helper = new VolumeHelper(options)
    const { points, elements } = helper.getMesh()
    const dataset = new TgdDataset({
        [attPosition]: "vec3",
    })
    const smoothingLevel = options.smoothingLevel ?? 0
    let position: Float32Array = points
    for (let loop = 0; loop < smoothingLevel; loop++) {
        position = tgdGeometrySmoothVertices(position, elements)
    }
    dataset.set(attPosition, position)
    const geometry = new TgdGeometry({
        dataset,
        attPosition,
        elements: elements,
        drawMode: "TRIANGLES",
    })
    geometry.computeNormals()
    return geometry
}

function tgdGeometrySmoothVertices(
    positions: Float32Array,
    elements: TgdTypeArrayForElements
): Float32Array {
    const smoothedPositions = new Float32Array(positions.length)
    const weights = new Float32Array(positions.length / 3)
    for (let k = 0; k < elements.length; k += 3) {
        const aa = elements[k + 0]
        const bb = elements[k + 1]
        const cc = elements[k + 2]
        const a = aa * 3
        const b = bb * 3
        const c = cc * 3
        const xa = positions[a + 0]
        const ya = positions[a + 1]
        const za = positions[a + 2]
        const xb = positions[b + 0]
        const yb = positions[b + 1]
        const zb = positions[b + 2]
        const xc = positions[c + 0]
        const yc = positions[c + 1]
        const zc = positions[c + 2]
        const x = xa + xb + xc
        const y = ya + yb + yc
        const z = za + zb + zc
        smoothedPositions[a + 0] += x
        smoothedPositions[a + 1] += y
        smoothedPositions[a + 2] += z
        smoothedPositions[b + 0] += x
        smoothedPositions[b + 1] += y
        smoothedPositions[b + 2] += z
        smoothedPositions[c + 0] += x
        smoothedPositions[c + 1] += y
        smoothedPositions[c + 2] += z
        weights[aa] += 3
        weights[bb] += 3
        weights[cc] += 3
    }
    for (let i = 0; i < weights.length; i++) {
        const w = 1 / weights[i]
        const k = i * 3
        smoothedPositions[k + 0] *= w
        smoothedPositions[k + 1] *= w
        smoothedPositions[k + 2] *= w
    }
    return smoothedPositions
}

class VolumeHelper {
    /** Number of voxels in the X axis */
    private readonly dimX: number
    /** Number of voxels in the Y axis */
    private readonly dimY: number
    /** Number of voxels in the Z axis */
    private readonly dimZ: number

    private readonly volume: Uint8Array
    private readonly configurations: readonly number[][]
    private readonly corners: Readonly<Float32Array>
    private readonly midPoints: Readonly<Float32Array>
    private readonly _points: number[] = []
    private readonly _elements: number[] = []
    private elementsCount = 0
    private readonly _cache = new Map<string, number>()

    constructor(private readonly options: MakeGeometryFromVolumeOptions) {
        const time0 = Date.now()
        this.configurations = tgdDataMarchingCubesConfigurations()
        this.corners = tgdDataMarchingCubesVoxelCorners()
        this.midPoints = tgdDataMarchingCubesVoxelMidPoints()
        const { bboxSize, voxelSize } = options
        this.dimX = Math.ceil(bboxSize[0] / voxelSize)
        this.dimY = Math.ceil(bboxSize[1] / voxelSize)
        this.dimZ = Math.ceil(bboxSize[2] / voxelSize)
        this.volume = this.computeVolume()
        console.log("Volume: ", Date.now() - time0, "ms")
    }

    getMesh() {
        const time0 = Date.now()
        this.elementsCount = 0
        this._cache.clear()
        this._points.splice(0)
        this._elements.splice(0)
        this.addTriangles()
        console.log("Triangles: ", Date.now() - time0, "ms")
        return {
            points: new Float32Array(this._points),
            elements: new Uint32Array(this._elements),
        }
    }

    getPointsCloud(radiusMultiplier: number): Float32Array {
        const time0 = Date.now()
        const { voxelSize } = this.options
        const points: number[] = []
        this.march(
            (
                xi: number,
                yi: number,
                zi: number,
                x: number,
                y: number,
                z: number
            ) => {
                if (this.isInside(xi, yi, zi)) {
                    points.push(x, y, z, voxelSize * radiusMultiplier)
                }
            }
        )
        console.log("PontsCould: ", Date.now() - time0, "ms")
        return new Float32Array(points)
    }

    private readonly addTriangles = (): {
        points: Float32Array
        elements: Uint32Array
    } => {
        const { midPoints, options, dimX, dimY, dimZ } = this
        const { voxelSize, bboxCorner } = options
        const [cornerX, cornerY, cornerZ] = bboxCorner
        for (let xi = 0; xi < dimX; xi++) {
            const x = cornerX + voxelSize * xi
            for (let yi = 0; yi < dimY; yi++) {
                const y = cornerY + voxelSize * yi
                for (let zi = 0; zi < dimZ; zi++) {
                    const z = cornerZ + voxelSize * zi
                    const config =
                        this.configurations[this.getConfigIndex(xi, yi, zi)]
                    for (let i = 0; i < config.length; i += 3) {
                        const a = config[i + 0]
                        const b = config[i + 1]
                        const c = config[i + 2]
                        const xam = midPoints[a * 3 + 0]
                        const yam = midPoints[a * 3 + 1]
                        const zam = midPoints[a * 3 + 2]
                        const xa = x + xam * voxelSize
                        const ya = y + yam * voxelSize
                        const za = z + zam * voxelSize
                        this.addPointElement(
                            xa,
                            ya,
                            za,
                            key(xi + xam, yi + yam, zi + zam)
                        )
                        const xbm = midPoints[b * 3 + 0]
                        const ybm = midPoints[b * 3 + 1]
                        const zbm = midPoints[b * 3 + 2]
                        const xb = x + xbm * voxelSize
                        const yb = y + ybm * voxelSize
                        const zb = z + zbm * voxelSize
                        this.addPointElement(
                            xb,
                            yb,
                            zb,
                            key(xi + xbm, yi + ybm, zi + zbm)
                        )
                        const xcm = midPoints[c * 3 + 0]
                        const ycm = midPoints[c * 3 + 1]
                        const zcm = midPoints[c * 3 + 2]
                        const xc = x + xcm * voxelSize
                        const yc = y + ycm * voxelSize
                        const zc = z + zcm * voxelSize
                        this.addPointElement(
                            xc,
                            yc,
                            zc,
                            key(xi + xcm, yi + ycm, zi + zcm)
                        )
                    }
                }
            }
        }
        return {
            points: new Float32Array(this._points),
            elements: new Uint32Array(this._elements),
        }
    }

    private addPointElement(x: number, y: number, z: number, k: string): void {
        const cache = this._cache.get(k)
        if (typeof cache === "number") {
            this._elements.push(cache)
        } else {
            this._points.push(x, y, z)
            const elem = this.elementsCount++
            this._cache.set(k, elem)
            this._elements.push(elem)
        }
    }

    private getConfigIndex(xi: number, yi: number, zi: number): number {
        const { corners } = this
        let configIndex = 0
        let bit = 1
        for (let i = 0; i < corners.length; i += 3) {
            const vx = corners[i + 0]
            const vy = corners[i + 1]
            const vz = corners[i + 2]
            if (this.isInside(xi + vx, yi + vy, zi + vz)) {
                configIndex += bit
            }
            bit <<= 1
        }
        return configIndex
    }

    private march(
        func: (
            xi: number,
            yi: number,
            zi: number,
            x: number,
            y: number,
            z: number
        ) => void
    ) {
        console.log("------------------------------------------------------")
        const { dimX, dimY, dimZ, options } = this
        const { voxelSize, bboxCorner } = options
        const [cornerX, cornerY, cornerZ] = bboxCorner
        for (let xi = 0; xi < dimX; xi++) {
            const x = cornerX + voxelSize * xi
            for (let yi = 0; yi < dimY; yi++) {
                const y = cornerY + voxelSize * yi
                for (let zi = 0; zi < dimZ; zi++) {
                    const z = cornerZ + voxelSize * zi
                    func(xi, yi, zi, x, y, z)
                }
            }
        }
    }

    private isInside(xi: number, yi: number, zi: number) {
        const { dimY, dimZ } = this
        const index = zi + yi * (dimZ + 1) + xi * (dimZ + 1) * (dimY + 1)
        return this.volume[index] === 1
    }

    private computeVolume(): Uint8Array<ArrayBufferLike> {
        const { bboxCorner, voxelSize, sdfPoint } = this.options
        const { dimX, dimY, dimZ } = this
        const [cornerX, cornerY, cornerZ] = bboxCorner
        const volume = new Uint8Array((dimX + 1) * (dimY + 1) * (dimZ + 1))
        let index = 0
        for (let xi = 0; xi <= dimX; xi++) {
            const x = cornerX + voxelSize * xi
            for (let yi = 0; yi <= dimY; yi++) {
                const y = cornerY + voxelSize * yi
                for (let zi = 0; zi <= dimZ; zi++) {
                    const z = cornerZ + voxelSize * zi
                    const distance = sdfPoint(x, y, z)
                    volume[index++] = distance < 0 ? 1 : 0
                }
            }
        }
        return volume
    }
}

function key(x: number, y: number, z: number) {
    return `${(x + x).toFixed(0)}/${(y + y).toFixed(0)}/${(z + z).toFixed(0)}`
}
