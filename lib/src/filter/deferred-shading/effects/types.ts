import type { TgdCodeFunctions } from "@tgd/shader/code"
import type { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import type { WebglUniformType } from "@tgd/types"

/**
 * Part of the fragment shader of {@link TgdFilterDeferredShading} that deals with one effect.
 */
export interface DeferredShadingEffect {
    textures: Record<string, TgdTexture2D | TgdTextureCube>
    uniforms: Record<string, WebglUniformType>
    functions: TgdCodeFunctions
    /** Lines of code to insert in the main function of the fragment shader. */
    code: string[]
}
