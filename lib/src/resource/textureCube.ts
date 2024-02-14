import { TgdResource } from "@/resource/resource"
import { TdgTextureCubeImpl } from "@/texture"
import {
    TdgTextureCube,
    TdgTextureCubeOptions,
    TgdContextInterface,
} from "@/types"

export class TdgResourceTextureCube extends TgdResource<
    TdgTextureCubeOptions,
    TdgTextureCube
> {
    constructor(public readonly context: TgdContextInterface) {
        super()
    }

    protected actualCreate(input: TdgTextureCubeOptions): TdgTextureCube {
        return new TdgTextureCubeImpl(this.context, input)
    }

    protected actualDelete(object: TdgTextureCube): void {
        if (object instanceof TdgTextureCubeImpl) object.delete()
    }

    protected makeKeyFromInput(
        input: TdgTextureCubeOptions
    ): TdgTextureCubeOptions {
        return input
    }
}
