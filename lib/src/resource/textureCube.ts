import { TgdResource } from "@/resource/resource"
import { TgdTextureCubeImpl } from "@/texture"
import {
    TgdTextureCube,
    TgdTextureCubeOptions,
    TgdContextInterface,
} from "@/types"

export class TgdResourceTextureCube extends TgdResource<
    TgdTextureCubeOptions,
    TgdTextureCube
> {
    constructor(public readonly context: TgdContextInterface) {
        super()
    }

    protected actualCreate(input: TgdTextureCubeOptions): TgdTextureCube {
        return new TgdTextureCubeImpl(this.context, input)
    }

    protected actualDelete(object: TgdTextureCube): void {
        if (object instanceof TgdTextureCubeImpl) object.delete()
    }
}
