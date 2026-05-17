import { TgdTexture2D, TgdTextureCube } from "@tgd/texture"
import { WebglUniformType } from "@tgd/types"

export function tgdTextureRecordToUniforms(textures: Record<string, TgdTexture2D | TgdTextureCube>) {
    const uniforms: Record<string, WebglUniformType> = {}
    for (const name of Object.keys(textures)) {
        uniforms[name] = tgdTextureResolveGLSLType(textures[name])
    }
    return uniforms
}

export function tgdTextureResolveGLSLType(texture: TgdTexture2D | TgdTextureCube) {
    if (texture instanceof TgdTexture2D) return "sampler2D"

    if (texture instanceof TgdTextureCube) return "samplerCube"

    console.error("[resolveTextureType] Don't know the type of this texture:", texture)
    throw new Error("[resolveTextureType] Don't know the type of this texture!")
}
