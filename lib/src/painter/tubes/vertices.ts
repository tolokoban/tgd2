import { TgdDataset } from "@tgd/dataset"

export class Vertices {
    private _points: number[] = []
    private _count = 0

    add(
        x: number,
        y: number,
        z: number,
        dx: number,
        dy: number,
        dz: number,
        nx: number,
        ny: number,
        nz: number,
        u: number,
        v: number,
    ): number {
        const { count } = this
        this._points.push(x, y, z, dx, dy, dz, nx, ny, nz, u, v)
        this._count++
        return count
    }

    get count() {
        return this._count
    }

    get points() {
        return new Float32Array(this._points)
    }

    get dataset() {
        const dataset = new TgdDataset(
            {
                attCenter: "vec3",
                attDirection: "vec3",
                attNormal: "vec3",
                attUV: "vec2",
            },
            {
                data: new Float32Array(this._points).buffer,
            },
        )
        return dataset
    }
}
