import { TgdResource } from "@/resource/resource"
import { TdgTexture2DImpl } from "@/texture"
import { TdgTexture2D, TdgTexture2DOptions } from "@/types"

export class TdgResourceTexture2D extends TgdResource<
    TdgTexture2DOptions,
    TdgTexture2D
> {
    constructor(
        private readonly gl: WebGL2RenderingContext,
        private readonly refresh: () => void
    ) {
        super()
    }

    protected actualCreate(input: TdgTexture2DOptions): TdgTexture2D {
        return new TdgTexture2DImpl(this.gl, this.refresh, input)
    }

    protected actualDelete(object: TdgTexture2D): void {
        if (object instanceof TdgTexture2DImpl) object.delete()
    }

    protected makeKeyFromInput(
        input: TdgTexture2DOptions
    ): TdgTexture2DOptions {
        return input
    }
}
