import type { TgdProgram } from "@tgd/program"
import type { TgdTexture2D } from "@tgd/texture"
import { TgdMaterial, type TgdMaterialOptions } from "./material"

export interface TgdMaterialMaskOptions extends Partial<TgdMaterialOptions> {
    texture: TgdTexture2D
    flipY?: boolean
}

/**
 * Reveal a background texture.
 *
 * You can use it in a techbnique to smooth your shading.
 * 1. Render your scene in a FBO with low resolution and the material you want.
 * 2. Use this material with the FBO texture to smooth the previous material.
 */
export class TgdMaterialMask extends TgdMaterial {
    constructor(options: TgdMaterialMaskOptions) {
        super({
            uniforms: {
                uniViewportInverse: "vec2",
                uniTexture: "sampler2D",
            },
            fragmentShaderCode: [
                "highp vec2 uv = gl_FragCoord.xy * uniViewportInverse;",
                options.flipY
                    ? "return texture(uniTexture, vec2(uv.x, 1.0 - uv.y));"
                    : "return texture(uniTexture, uv);",
            ],
            setUniforms: ({ program }: { program: TgdProgram }): void => {
                const invW = 1 / program.gl.drawingBufferWidth
                const invH = 1 / program.gl.drawingBufferHeight
                options.texture.activate(0, program, "uniTexture")
                program.uniform2f("uniViewportInverse", invW, invH)
            },
        })
    }
}
