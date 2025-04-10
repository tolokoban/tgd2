import { ArrayNumber3 } from "@tgd/types"
import { TgdVec3 } from "./vec3"
import { expectVectorsToBeClose } from "./common.test"

describe("tgd/math/vec3.ts", () => {
    describe("TgdVec3.distanceToLineSquared()", () => {
        const cases: Array<
            [
                [number, number, number],
                [number, number, number],
                [number, number, number],
                number
            ]
        > = [
            [[4, 3, 0], [17, 0, 0], [1, 0, 0], 3 * 3],
            [[4, 3, 0], [0, -23, 0], [0, 1, 0], 4 * 4],
            [[4, 3, 0], [-4, 0, 0], [-1, 0, 0], 3 * 3],
            [[4, 3, 0], [0, -9, 0], [0, -1, 0], 4 * 4],
            [[4, 3, 0], [0, 0, 0], [0, 0, 1], 4 * 4 + 3 * 3],
        ]
        for (const [[mx, my, mz], [ox, oy, oz], [dx, dy, dz], exp] of cases) {
            it(`distance between (${mx}, ${my}, ${mz}) and line (${ox}, ${oy}, ${oz})->(${dx}, ${dy}, ${dz}) should be ${exp}`, () => {
                const M = new TgdVec3(mx, my, mz)
                const O = new TgdVec3(ox, oy, oz)
                const D = new TgdVec3(dx, dy, dz)
                const got = M.distanceToLineSquared(O, D)
                expect(got).toBeCloseTo(exp, 6)
            })
        }
    })
    describe(`TgdVec3.rotateAround()`, () => {
        const cases: Array<[ArrayNumber3, ArrayNumber3, number, ArrayNumber3]> =
            [
                [[1, 0, 0], [0, 1, 0], Math.PI / 2, [0, 0, -1]],
                [
                    [1, 2, 3],
                    [-0.3714, -0.5571, -0.7428],
                    1,
                    [1.018111, 2.344218, 2.732781],
                ],
            ]
        for (const [from, axis, angleInRadians, to] of cases) {
            it(`${from} should rotate around ${axis} and become ${to}`, () => {
                const vec = new TgdVec3(from)
                vec.rotateAround(axis, angleInRadians)
                expectVectorsToBeClose(vec, to, 3)
            })
        }
    })
})
