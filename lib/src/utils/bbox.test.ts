import { TgdDataset } from "@tgd/dataset"
import { tgdComputeBoundingBox3D } from "./bbox"
import { ArrayNumber3 } from "@tgd/types"

describe("utils/bbox.ts", () => {
    function makeDS(
        positions: [x: number, y: number, z: number][]
    ): TgdDataset {
        const ds = new TgdDataset({ POSITION: "vec3" })
        const data = new Float32Array(3 * positions.length)
        for (let i = 0; i < positions.length; i++) {
            const ptr = i * 3
            const [x, y, z] = positions[i]
            data[ptr + 0] = x
            data[ptr + 1] = y
            data[ptr + 2] = z
        }
        ds.set("POSITION", data)
        return ds
    }
    function checkBBox(ds: TgdDataset, min: ArrayNumber3, max: ArrayNumber3) {
        const bbox = tgdComputeBoundingBox3D(ds)
        expect([...bbox.min]).toEqual([...min])
        expect([...bbox.max]).toEqual([...max])
    }
    describe("tgdComputeBoundingBox3D()", () => {
        it("should work with only one position", () => {
            const ds = makeDS([[1, 2, 3]])
            checkBBox(ds, [1, 2, 3], [1, 2, 3])
        })
        const cases: Array<
            [
                positions: [x: number, y: number, z: number][],
                min: [x: number, y: number, z: number],
                max: [x: number, y: number, z: number]
            ]
        > = [
            [
                [
                    [9, 2, 5],
                    [2, 6, 4],
                    [0, 8, 1],
                ],
                [0, 2, 1],
                [9, 8, 5],
            ],
        ]
        for (const [positions, min, max] of cases) {
            it(`should find bbox of ${positions}`, () => {
                const ds = makeDS(positions)
                checkBBox(ds, min, max)
            })
        }
    })
})
