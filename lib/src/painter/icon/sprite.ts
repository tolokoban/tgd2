/** biome-ignore-all lint/suspicious/noAssignInExpressions: <explanation> */
import type { TgdColor } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { TgdVec4 } from "@tgd/math"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdPainterProgram } from "@tgd/painter/program"
import type { TgdPainterSpritesAtlas } from "@tgd/painter/sprites"
import type { TgdTexture2D } from "@tgd/texture"
import type { ArrayNumber4 } from "@tgd/types"
import { TgdUniformBufferObject } from "@tgd/uniform"
import { ensureTgdVec4 } from "@tgd/utils"
export interface PainterSpriteOptions {
    texture: TgdTexture2D
    atlas?: TgdPainterSpritesAtlas
    index?: number
    color?: ArrayNumber4 | TgdVec4 | TgdColor
}

export class PainterSprite extends TgdPainter {
    private readonly program: TgdPainterProgram
    private readonly atlas: TgdPainterSpritesAtlas
    private readonly uniformBlock: TgdUniformBufferObject<"uniUV" | "uniColor">
    private _index = -1
    private _color = new TgdVec4()
    private readonly uniUV = new TgdVec4()

    constructor(
        context: TgdContext,
        {
            texture,
            atlas = [
                {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: 1,
                },
            ],
            index = 0,
            color,
        }: PainterSpriteOptions,
    ) {
        super()
        const uniformBlock = (this.uniformBlock = new TgdUniformBufferObject(context, {
            uniforms: {
                uniUV: "vec4",
                uniColor: "vec4",
            },
        }))
        // prettier-ignore
        const attPos = [
            +1, -1,
            +1, +1,
            -1, -1,
            -1, +1
        ]
        // prettier-ignore
        const attUV = [
            1, 1,
            1, 0,
            0, 1,
            0, 0
        ]
        this.program = new TgdPainterProgram(context, {
            drawMode: "TRIANGLE_STRIP",
            state: {
                depth: "off",
                cull: "off",
                blend: "off",
            },
            textures: {
                uniTexture: texture,
            },
            uniforms: { uniformBlock },
            dataset: {
                attribs: {
                    attPos: {
                        type: "vec2",
                        data: new Float32Array(attPos),
                    },
                    attUV: {
                        type: "vec2",
                        data: new Float32Array(attUV),
                    },
                },
            },
            varying: {
                varUV: "vec2",
            },
            vert: {
                mainCode: ["varUV = attUV * uniUV.zw + uniUV.xy;", "gl_Position = vec4(attPos, 0.0, 1.0);"],
            },
            frag: {
                mainCode: [
                    "vec4 color = texture(uniTexture, varUV);",
                    `if (color.a < ${2 / 0xff}) discard;`,
                    "FragColor = uniColor * color;",
                ],
            },
        })
        this.atlas = atlas
        this.index = index
        this.color = ensureTgdVec4(color, new TgdVec4(1, 1, 1, 1))
    }

    get index(): number {
        return this._index
    }
    set index(index: number) {
        if (this._index === index) return

        this._index = index
        const { x, y, width, height } = this.atlas[index] ?? { x: 0, y: 0, width: 0, height: 0 }
        this.uniUV.x = x
        this.uniUV.y = y
        this.uniUV.z = width
        this.uniUV.w = height
        this.uniUV.debug()
        this.uniformBlock.values.uniUV = this.uniUV
    }

    get color(): TgdVec4 {
        return this._color
    }
    set color(color: TgdVec4) {
        if (this._color === color) return

        this._color = color
        this.uniformBlock.values.uniColor = color
    }

    delete(): void {
        this.program.delete()
    }

    paint(time: number, delta: number): void {
        this.program.paint(time, delta)
    }
}
