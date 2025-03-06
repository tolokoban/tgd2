export function expectVectorsToBeClose(
    v1: ArrayLike<number>,
    v2: ArrayLike<number>,
    precision = 5
) {
    try {
        if (v1.length !== v2.length) throw new Error("Different sizes!")
        // eslint-disable-next-line unicorn/no-for-loop
        for (let index = 0; index < v1.length; index++) {
            const d = Math.abs(v1[index] - v2[index])
            if (d > Math.pow(10, -precision))
                throw new Error(`${v1[index]} is not close to ${v2[index]}!`)
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : `${error}`
        throw new Error(`[${v1}] is not close to [${v2}]: ${message}`)
    }
}

describe(`expectVectorsToBeClose()`, () => {
    it(`should be defined`, () => {
        expect(expectVectorsToBeClose).toBeDefined()
    })
})
