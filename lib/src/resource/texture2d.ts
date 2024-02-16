import { TgdResource } from "@/resource/resource"
import { TdgTexture2DImpl } from "@/texture"
import { TdgTexture2D, TdgTexture2DOptions } from "@/types"

export class TdgResourceTexture2D extends TgdResource<
    Partial<TdgTexture2DOptions>,
    TdgTexture2D
> {
    constructor(
        private readonly gl: WebGL2RenderingContext,
        private readonly refresh: () => void
    ) {
        super()
    }

    protected actualCreate(input: Partial<TdgTexture2DOptions>): TdgTexture2D {
        return new TdgTexture2DImpl(this.gl, this.refresh, input)
    }

    protected actualDelete(object: TdgTexture2D): void {
        if (object instanceof TdgTexture2DImpl) object.delete()
    }

    protected makeKeyFromInput(
        input: Partial<TdgTexture2DOptions>
    ): Partial<TdgTexture2DOptions> {
        return input
    }
}
