import { TgdDataset } from "@tgd/dataset"
import { TgdGeometry } from "./geometry"
import { ArrayNumber2, ArrayNumber3 } from "@tgd/types"
import { TgdVec3 } from "@tgd/math"

export interface TgdGeometryPlaneOptions {
    sizeX?: number
    sizeY?: number
    vecX?: ArrayNumber3
    vecY?: ArrayNumber3
    uv0?: ArrayNumber2
    uv1?: ArrayNumber2
}

export class TgdGeometryPlane extends TgdGeometry {
    constructor({
        sizeX = 1,
        sizeY = 1,
        vecX = [1, 0, 0],
        vecY = [0, 1, 0],
        uv0 = [0, 0],
        uv1 = [1, 1],
    }: TgdGeometryPlaneOptions = {}) {
        const vec = (x: number, y: number): ArrayNumber3 => {
            const sx = x * sizeX
            const sy = y * sizeY
            return [
                sx * vecX[0] + sy * vecY[0],
                sx * vecX[1] + sy * vecY[1],
                sx * vecX[2] + sy * vecY[2],
            ]
        }
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
            TEXCOORD_0: "vec2",
        })
        const H = 0.5
        // prettier-ignore
        dataset.set("POSITION", new Float32Array([
            ...vec(+H, -H),
            ...vec(-H, -H),
            ...vec(+H, +H),
            ...vec(-H, +H),
        ]))
        const [u0, v0] = uv0
        const [u1, v1] = uv1
        // prettier-ignore
        dataset.set("TEXCOORD_0", new Float32Array([
            u1, v1,
            u0, v1,
            u1, v0,
            u0, v0,
        ]))
        const [nx, ny, nz] = new TgdVec3(vecX)
            .normalize()
            .cross(new TgdVec3(vecY).normalize())

        // prettier-ignore
        dataset.set("NORMAL", new Float32Array([
            nx, ny, nz,
            nx, ny, nz,
            nx, ny, nz,
            nx, ny, nz,
        ]))
        super({
            dataset,
            drawMode: "TRIANGLE_STRIP",
        })
    }
}
