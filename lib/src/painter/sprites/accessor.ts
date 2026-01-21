import { TgdDataset } from "@tgd/dataset"
import { Accessor } from "./types"

export class AccessorProxy implements Accessor {
    private accessor: Accessor | null = null
    private _dataset: TgdDataset | undefined = undefined

    constructor(public readonly attributeName: string) {}

    get dataset() {
        return this._dataset
    }
    set dataset(value: TgdDataset | undefined) {
        this._dataset = value
        if (value) {
            this.accessor = value.getAttribAccessor(this.attributeName)
        }
    }
    readonly get = (index: number, dimension?: number | undefined) =>
        this.accessor?.get(index, dimension) ?? 0

    readonly set = (
        value: number,
        index: number,
        dimension?: number | undefined
    ) => {
        const { accessor } = this
        if (!accessor) return

        accessor.set(value, index, dimension)
    }
}
