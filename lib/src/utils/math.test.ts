import { tgdCalcModulo, tgdCalcRandom } from "./math"

describe(`tgdCalc*()`, () => {
    describe(`tgdCalcModulo()`, () => {
        const cases: Array<
            [value: number, min: number, max: number, expected: number]
        > = [
            [-3, 10, 20, 17],
            [3, 10, 20, 13],
            [13, 10, 20, 13],
            [13, 20, 10, 13],
            [23, 10, 20, 13],
            [3.14, 1, 1.5, 1.14],
            [3.64, 1, 1.5, 1.14],
            [tgdCalcRandom(-100, 100), 1.618, 1.618, 1.618],
            [7, 20, 10, 17],
        ]
        for (const [value, min, max, expected] of cases) {
            it(`should have (${value}, ${min}, ${max}) === ${expected}`, () => {
                expect(tgdCalcModulo(value, min, max)).toBeCloseTo(expected, 6)
            })
        }
    })
})
