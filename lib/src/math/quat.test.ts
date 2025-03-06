/** @see https://tools.glowbuzzer.com/rotationconverter */

import { TgdQuat, TgdVec3 } from "@tgd/math"

function expectVector(actual: number[], expected: number[], precision = 5) {
    expect(actual.length).toBe(expected.length)
    for (const [index, x] of actual.entries())
        expect(x).toBeCloseTo(expected[index], precision)
}
describe("math/quat.ts", () => {
    const cases: Array<
        [
            X: [number, number, number],
            Y: [number, number, number],
            Z: [number, number, number],
            Q: [number, number, number, number]
        ]
    > = [
        [
            [-1, 0, 0],
            [0, 1, 0],
            [0, 0, -1],
            [0, 1, 0, 0],
        ],
        [
            [0.8, 0.4, -0.447214],
            [0.4, 0.2, 0.894427],
            [0.447214, -0.894427, 0],
            [-0.632456, -0.316228, 0, 0.707107],
        ],
        [
            [0.857143, -0.285714, -0.428571],
            [0.171429, 0.942857, -0.285714],
            [0.485714, 0.171429, 0.857143],
            [0.119523, -0.239046, 0.119523, 0.956183],
        ],
        [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1],
            [0, 0, 0, 1],
        ],
    ]
    describe("TgdQuat.fromAxes()", () => {
        const quat = new TgdQuat(0, 0, 0, 0)
        for (const [X, Y, Z, Q] of cases) {
            it(`should get ${string_(Q)} from ${string_(X)}, ${string_(
                Y
            )} and ${string_(Z)}`, () => {
                const axisX = new TgdVec3(...X)
                const axisY = new TgdVec3(...Y)
                const axisZ = new TgdVec3(...Z)
                quat.fromAxes(axisX, axisY, axisZ)
                const got = [quat.x, quat.y, quat.z, quat.w]
                const exp: number[] = [...Q]
                expect(got[0]).toBeCloseTo(exp[0], 5)
                expect(got[1]).toBeCloseTo(exp[1], 5)
                expect(got[2]).toBeCloseTo(exp[2], 5)
                expect(got[3]).toBeCloseTo(exp[3], 5)
            })
        }
    })
    describe("TgdQuat.toAxisX()", () => {
        const quat = new TgdQuat(0, 0, 0, 0)
        for (const [X, _Y, _Z, Q] of cases) {
            it(`should get ${string_(X)} from ${string_(Q)}`, () => {
                quat.from(Q)
                const axisX = new TgdVec3()
                quat.toAxisX(axisX)
                const gotX = [axisX.x, axisX.y, axisX.z]
                expectVector(gotX, X, 5)
            })
        }
    })
    describe("TgdQuat.toAxisY()", () => {
        const quat = new TgdQuat(0, 0, 0, 0)
        for (const [_X, Y, _Z, Q] of cases) {
            it(`should get ${string_(Y)} from ${string_(Q)}`, () => {
                quat.from(Q)
                const axisY = new TgdVec3()
                quat.toAxisY(axisY)
                const gotY = [axisY.x, axisY.y, axisY.z]
                expectVector(gotY, Y, 5)
            })
        }
    })
    describe("TgdQuat.toAxisZ()", () => {
        const quat = new TgdQuat(0, 0, 0, 0)
        for (const [_X, _Y, Z, Q] of cases) {
            it(`should get ${string_(Z)} from ${string_(Q)}`, () => {
                quat.from(Q)
                const axisZ = new TgdVec3()
                quat.toAxisZ(axisZ)
                const gotZ = [axisZ.x, axisZ.y, axisZ.z]
                expectVector(gotZ, Z, 5)
            })
        }
    })
})

function string_(input: Iterable<number>): string {
    const array = [...input]
    return `[${array.map(n => `${n}`).join(", ")}]`
}
