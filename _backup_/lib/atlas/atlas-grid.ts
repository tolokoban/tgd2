export type TgdTypeAtlasGridItem = [
    col: number,
    row: number,
    width?: number,
    height?: number
]

export interface TgdTypeAtlasGridOptions {
    cols: number
    rows: number
    items?: { [name: string]: TgdTypeAtlasGridItem }
    defaultCellWidth?: number
    defaultCellHeight?: number
}

interface AtlasGridItem {
    u: number
    v: number
    w: number
    h: number
}

export class TgdAtlasGrid {
    private readonly items = new Map<string, AtlasGridItem>()
    public readonly cols: number
    public readonly rows: number
    public readonly defaultCellWidth: number
    public readonly defaultCellHeight: number

    constructor(options: TgdTypeAtlasGridOptions) {
        this.cols = options.cols
        this.rows = options.rows
        this.defaultCellWidth = options.defaultCellWidth ?? 1
        this.defaultCellHeight = options.defaultCellHeight ?? 1
        const factorCol = 1 / options.cols
        const factorRow = 1 / options.rows
        const items = options.items ?? {}
        for (const name of Object.keys(items)) {
            const [
                col,
                row,
                width = this.defaultCellWidth,
                height = this.defaultCellHeight,
            ] = items[name]
            this.items.set(name, {
                u: col * factorCol,
                v: row * factorRow,
                w: width * factorCol,
                h: height * factorRow,
            })
        }
    }

    getUV(name: string): AtlasGridItem | undefined {
        return this.items.get(name)
    }
}
