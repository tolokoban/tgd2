import { TgdResource } from "@/resource/resource"
import { TdgTextureCubeImpl } from "@/texture"
import { TdgTextureCube, TdgTextureCubeOptions } from "@/types"

export class TdgResourceTextureCube extends TgdResource<
    TdgTextureCubeOptions,
    TdgTextureCube
> {
    constructor(
        private readonly gl: WebGL2RenderingContext,
        private readonly refresh: () => void
    ) {
        super()
    }

    protected actualCreate(input: TdgTextureCubeOptions): TdgTextureCube {
        return new TdgTextureCubeImpl(this.gl, this.refresh, input)
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
