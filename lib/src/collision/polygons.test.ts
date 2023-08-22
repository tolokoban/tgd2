import { Vector2 } from "../calc"
import { TgdCollisionPolygons } from "./polygons"

describe("collision/polygons.ts", () => {
    describe("TgdCollisionPolygons", () => {
        const cases: Array<
            [
                a1: Vector2,
                a2: Vector2,
                b1: Vector2,
                b2: Vector2,
                hit: Vector2 | null
            ]
        > = [
            [[0, 0], [9, 0], [0, 5], [9, 5], null],
            [
                [0, 0],
                [9, 0],
                [5, 5],
                [5, -5],
                [5, 0],
            ],
            [
                [2, 1],
                [6, 5],
                [2, 5],
                [6, 1],
                [4, 3],
            ],
            [[2, 1], [6, 5], [2, 5], [3, 4], null],
        ]
        for (const [a1, a2, b1, b2, expected] of cases) {
            if (!expected) {
                it(`should find no intersection between [${a1}]-[${a2}] and [${b1}]-[${b2}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a1, a2]])
                    collisions.hitTest(b1, b2)
                    expect(collisions.hit).toEqual(false)
                })
                it(`should find no intersection between [${a2}]-[${a1}] and [${b1}]-[${b2}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a2, a1]])
                    collisions.hitTest(b1, b2)
                    expect(collisions.hit).toEqual(false)
                })
                it(`should find no intersection between [${a1}]-[${a2}] and [${b2}]-[${b1}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a1, a2]])
                    collisions.hitTest(b2, b1)
                    expect(collisions.hit).toEqual(false)
                })
                it(`should find no intersection between [${a2}]-[${a1}] and [${b2}]-[${b1}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a2, a1]])
                    collisions.hitTest(b2, b1)
                    expect(collisions.hit).toEqual(false)
                })
            } else {
                it(`[${a1}]-[${a2}] and [${b1}]-[${b2}] should intersect in [${expected}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a1, a2]])
                    collisions.hitTest(b1, b2)
                    expect(collisions.hit).toEqual(true)
                    expect(collisions.hitX).toBeCloseTo(expected[0], 3)
                    expect(collisions.hitY).toBeCloseTo(expected[1], 3)
                })
                it(`[${a2}]-[${a1}] and [${b1}]-[${b2}] should intersect in [${expected}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a2, a1]])
                    collisions.hitTest(b1, b2)
                    expect(collisions.hit).toEqual(true)
                    expect(collisions.hitX).toBeCloseTo(expected[0], 3)
                    expect(collisions.hitY).toBeCloseTo(expected[1], 3)
                })
                it(`[${a1}]-[${a2}] and [${b2}]-[${b1}] should intersect in [${expected}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a1, a2]])
                    collisions.hitTest(b2, b1)
                    expect(collisions.hit).toEqual(true)
                    expect(collisions.hitX).toBeCloseTo(expected[0], 3)
                    expect(collisions.hitY).toBeCloseTo(expected[1], 3)
                })
                it(`[${a2}]-[${a1}] and [${b2}]-[${b1}] should intersect in [${expected}]`, () => {
                    const collisions = new TgdCollisionPolygons([[a2, a1]])
                    collisions.hitTest(b2, b1)
                    expect(collisions.hit).toEqual(true)
                    expect(collisions.hitX).toBeCloseTo(expected[0], 3)
                    expect(collisions.hitY).toBeCloseTo(expected[1], 3)
                })
            }
        }
    })
})
