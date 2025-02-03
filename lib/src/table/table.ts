export class TgdTable {
    public static computeByteLength(
        cols: number,
        rows: number,
        dimensions: number,
        bytesPerElement: number
    ) {
        const bytesPerRow = cols * dimensions * bytesPerElement
        while ((bytesPerElement & 3) !== 0) {
            bytesPerElement++
        }
        return rows * bytesPerRow
    }

    public readonly bytePadding: number

    private readonly bytesPerRow: number
    private readonly bytesPerVector: number
    private readonly view: DataView

    constructor(
        public readonly buffer: ArrayBuffer,
        public readonly cols: number,
        public readonly rows: number,
        public readonly dimensions: number,
        public readonly bytesPerElement: number
    ) {
        const expectedByteLength = TgdTable.computeByteLength(
            cols,
            rows,
            dimensions,
            bytesPerElement
        )

        if (buffer.byteLength < expectedByteLength) {
            throw Error(`Your data is ${buffer.byteLength} bytes long.
But for a ${cols}x${rows} table we need at least ${expectedByteLength} bytes!
Please use TgdTable.computeByteLength() to get the correct length (with all needed paddings).`)
        }
        const bytesPerVector = dimensions * bytesPerElement
        this.bytesPerVector = bytesPerVector
        const bytesPerRow = cols * bytesPerElement
        let bytePadding = 0
        while ((bytesPerRow & 3) !== 0) {
            bytePadding++
        }
        this.bytePadding = bytePadding
        this.bytesPerRow = bytesPerRow + bytePadding
        this.bytesPerElement = bytesPerElement
        this.view = new DataView(buffer)
    }

    private offset(col: number, row: number, dimension = 0) {
        const byteOffset =
            row * this.bytesPerRow +
            col * this.bytesPerVector +
            this.bytesPerElement * dimension
        return byteOffset
    }

    setFloat32(value: number, col: number, row: number, dimension: number) {
        const byteOffset = this.offset(col, row, dimension)
        this.view.setFloat32(byteOffset, value)
    }

    getFloat32(col: number, row: number, dimension: number) {
        const byteOffset = this.offset(col, row, dimension)
        return this.view.getFloat32(byteOffset)
    }
}

export class TgdTableFloat32 {
    private readonly table: TgdTable

    constructor(
        public readonly cols: number,
        public readonly rows: number,
        public readonly dimensions: number
    ) {
        const byteLength = TgdTable.computeByteLength(
            cols,
            rows,
            dimensions,
            Float32Array.BYTES_PER_ELEMENT
        )
        const buffer = new ArrayBuffer(byteLength)
        this.table = new TgdTable(
            buffer,
            cols,
            rows,
            dimensions,
            Float32Array.BYTES_PER_ELEMENT
        )
    }

    get buffer() {
        return this.table.buffer
    }

    set(value: number, col: number, row: number, dimension: number) {
        this.table.setFloat32(value, col, row, dimension)
    }

    get(col: number, row: number, dimension: number) {
        return this.table.getFloat32(col, row, dimension)
    }
}
