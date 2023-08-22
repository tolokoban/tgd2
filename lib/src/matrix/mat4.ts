export class TgdMatrix4 {
    public readonly data: Float32Array

    constructor(data?: Float32Array | number[] | { data: Float32Array }) {
        if (!data) {
            // prettier-ignore
            this.data = new Float32Array([
                1, 0, 0, 0,
                0, 1, 0, 0, 
                0, 0, 1, 0,
                0, 0, 0, 1,
            ])
        } else if (Array.isArray(data)) {
            if (data.length !== 16) {
                throw Error(
                    "In new TgdMatrix4(data), data must have exactly 16 elements!"
                )
            }

            this.data = new Float32Array(data)
        } else if (data instanceof Float32Array) {
            if (data.length !== 16) {
                throw Error(
                    "In new TgdMatrix4(data), data must have exactly 16 elements!"
                )
            }

            this.data = new Float32Array(data)
        } else {
            if (data.data.length !== 16) {
                throw Error(
                    "In new TgdMatrix4(mat), mat.data must have exactly 16 elements!"
                )
            }

            this.data = new Float32Array(data.data)
        }
    }

    get v00() {
        return this.data[0]
    }
    set v00(v: number) {
        this.data[0] = v
    }

    get v01() {
        return this.data[1]
    }
    set v01(v: number) {
        this.data[1] = v
    }

    get v02() {
        return this.data[2]
    }
    set v02(v: number) {
        this.data[2] = v
    }

    get v03() {
        return this.data[3]
    }
    set v03(v: number) {
        this.data[3] = v
    }

    get v10() {
        return this.data[4]
    }
    set v10(v: number) {
        this.data[4] = v
    }

    get v11() {
        return this.data[5]
    }
    set v11(v: number) {
        this.data[5] = v
    }

    get v12() {
        return this.data[6]
    }
    set v12(v: number) {
        this.data[6] = v
    }

    get v13() {
        return this.data[7]
    }
    set v13(v: number) {
        this.data[7] = v
    }

    get v20() {
        return this.data[8]
    }
    set v20(v: number) {
        this.data[8] = v
    }

    get v21() {
        return this.data[9]
    }
    set v21(v: number) {
        this.data[9] = v
    }

    get v22() {
        return this.data[10]
    }
    set v22(v: number) {
        this.data[10] = v
    }

    get v23() {
        return this.data[11]
    }
    set v23(v: number) {
        this.data[11] = v
    }

    get v30() {
        return this.data[12]
    }
    set v30(v: number) {
        this.data[12] = v
    }

    get v31() {
        return this.data[13]
    }
    set v31(v: number) {
        this.data[13] = v
    }

    get v32() {
        return this.data[14]
    }
    set v32(v: number) {
        this.data[14] = v
    }

    get v33() {
        return this.data[15]
    }
    set v33(v: number) {
        this.data[15] = v
    }
}
