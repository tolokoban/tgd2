/* eslint-disable unicorn/prevent-abbreviations */
import { TgdDataset } from "@tgd/dataset"
import { ArrayNumber3 } from "@tgd/types"
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
    dataset.set(attPosition, points)
    const geometry = new TgdGeometry({
        dataset,
        attPosition,
        elements: elements,
        drawMode: "TRIANGLES",
    })
    geometry.computeNormals()
    return geometry
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

    constructor(private readonly options: MakeGeometryFromVolumeOptions) {
        this.configurations = tgdDataMarchingCubesConfigurations()
        this.corners = tgdDataMarchingCubesVoxelCorners()
        this.midPoints = tgdDataMarchingCubesVoxelMidPoints()
        const { bboxSize, voxelSize } = options
        this.dimX = Math.ceil(bboxSize[0] / voxelSize)
        this.dimY = Math.ceil(bboxSize[1] / voxelSize)
        this.dimZ = Math.ceil(bboxSize[2] / voxelSize)
        this.volume = this.computeVolume()
    }

    getMesh() {
        this._points.splice(0)
        this._elements.splice(0)
        this.march(this.addTriangles)
        return {
            points: new Float32Array(this._points),
            elements: new Uint32Array(this._elements),
        }
    }

    getPointsCloud(radiusMultiplier: number): Float32Array {
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
        return new Float32Array(points)
    }

    private readonly addTriangles = (
        xi: number,
        yi: number,
        zi: number,
        x: number,
        y: number,
        z: number
    ): { points: Float32Array; elements: Uint32Array } => {
        const { midPoints, options } = this
        const { voxelSize } = options
        const config = this.configurations[this.getConfigIndex(xi, yi, zi)]
        for (let i = 0; i < config.length; i += 3) {
            const a = config[i + 0]
            const b = config[i + 1]
            const c = config[i + 2]
            const xa = x + midPoints[a * 3 + 0] * voxelSize
            const ya = y + midPoints[a * 3 + 1] * voxelSize
            const za = z + midPoints[a * 3 + 2] * voxelSize
            this.getPointElement(xa, ya, za)
            const xb = x + midPoints[b * 3 + 0] * voxelSize
            const yb = y + midPoints[b * 3 + 1] * voxelSize
            const zb = z + midPoints[b * 3 + 2] * voxelSize
            this.getPointElement(xb, yb, zb)
            const xc = x + midPoints[c * 3 + 0] * voxelSize
            const yc = y + midPoints[c * 3 + 1] * voxelSize
            const zc = z + midPoints[c * 3 + 2] * voxelSize
            this.getPointElement(xc, yc, zc)
        }
        return {
            points: new Float32Array(this._points),
            elements: new Uint32Array(this._elements),
        }
    }

    private getPointElement(x: number, y: number, z: number) {
        this._points.push(x, y, z)
        const elem = this._elements.length
        this._elements.push(elem)
        return elem
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
