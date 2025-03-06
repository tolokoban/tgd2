import { expectVectorsToBeClose } from "./common.test"
import { TgdMat3 } from "./mat3"
import { TgdVec3 } from "./vec3"

describe(`TgdMat3`, () => {
    describe(`multiply()`, () => {
        it(`should multiply two mat3`, () => {
            const a = new TgdMat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
            const b = new TgdMat3(19, 18, 17, 16, 15, 14, 13, 12, 11)
            a.multiply(b)
            expectVectorsToBeClose(
                a,
                [210, 264, 318, 174, 219, 264, 138, 174, 210]
            )
        })
    })
    describe(`toAxes[X,Y,Z](0)`, () => {
        const m = new TgdMat3(1, 2, 3, 4, 5, 6, 7, 8, 9)
        it(`should extract axis X`, () => {
            const v = new TgdVec3()
            m.toAxisX(v)
            expectVectorsToBeClose(v, [1, 4, 7])
        })
        it(`should extract axis Y`, () => {
            const v = new TgdVec3()
            m.toAxisY(v)
            expectVectorsToBeClose(v, [2, 5, 8])
        })
        it(`should extract axis Z`, () => {
            const v = new TgdVec3()
            m.toAxisZ(v)
            expectVectorsToBeClose(v, [3, 6, 9])
        })
    })
})
