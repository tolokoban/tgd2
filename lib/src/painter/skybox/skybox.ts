import type { TgdCamera } from "@tgd/camera"
import { TgdColor } from "@tgd/color"
import type { TgdContext } from "@tgd/context"
import { TgdMat4, TgdTransfo, type TgdTransfoOptions, TgdVec4 } from "@tgd/math"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdTextureCube } from "@tgd/texture"
import type { ArrayNumber4, TgdTextureCubeOptions } from "@tgd/types"
import { TgdUniformBufferObject } from "@tgd/uniform"
import { ensureArrayNumber4 } from "@tgd/utils"
import { TgdPainterProgram } from "../program"

export type TgdPainterSkyboxOptions = {
    texture: TgdTextureCubeOptions | TgdTextureCube
    camera?: TgdCamera
    transfo?: Partial<TgdTransfoOptions> | TgdTransfo
    z?: number
    tint?: ArrayNumber4 | TgdColor | TgdVec4
    zoom?: number
}

export class TgdPainterSkybox extends TgdPainter {
    public readonly transfo: TgdTransfo
    public camera: TgdCamera
    public z = 1

    private readonly _texture: TgdTextureCube
    private readonly painter: TgdPainterProgram
    private _zoom = 1
    private readonly matrix = new TgdMat4()
    private readonly tmpMat = new TgdMat4()
    private readonly uniTint = new TgdVec4(1, 1, 1, 1)
    private readonly textureMustBeCleanedup
    private readonly uniformBlock: TgdUniformBufferObject<"uniZ" | "uniZoom" | "uniTint" | "uniMatrix" | "uniTransfo">

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterSkyboxOptions,
    ) {
        super()
        this.name = "TgdPainterSkybox"
        this.zoom = options.zoom ?? 1
        this.z = options.z ?? 1
        this.transfo = new TgdTransfo(options.transfo)
        this.camera = options.camera ?? context.camera
        const [r, g, b, a] = ensureArrayNumber4(options.tint, [1, 1, 1, 1])
        this.uniTint.reset(r, g, b, a)
        if (options.texture instanceof TgdTextureCube) {
            this.textureMustBeCleanedup = false
            this._texture = options.texture
        } else {
            this.textureMustBeCleanedup = true
            this._texture = new TgdTextureCube(context, options.texture)
        }
        const uniformBlock = (this.uniformBlock = new TgdUniformBufferObject(context, {
            uniforms: {
                uniZ: "float",
                uniZoom: "float",
                uniTint: "vec4",
                uniMatrix: "mat4",
                uniTransfo: "mat4",
            },
        }))
        const attPoint = [-1, +1, +1, +1, -1, -1, +1, -1]
        const painter = new TgdPainterProgram(context, {
            drawMode: "TRIANGLE_STRIP",
            dataset: {
                attribs: {
                    attPoint: {
                        type: "vec2",
                        data: new Float32Array(attPoint),
                    },
                },
            },
            textures: {
                uniTexture: this._texture,
            },
            uniforms: { uniformBlock },
            varying: {
                varPoint: "vec4",
            },
            vert: {
                mainCode: [
                    "varPoint = vec4(attPoint.xy / uniZoom, 1.0, 1.0);",
                    "gl_Position = vec4(attPoint.xy, uniZ, 1.0);",
                ],
            },
            frag: {
                mainCode: [
                    "vec4 t = uniTransfo * uniMatrix * varPoint;",
                    "FragColor = texture(uniTexture, normalize(t.xyz)) * uniTint;",
                ],
            },
        })
        this.painter = painter
    }

    get zoom(): number {
        return this._zoom
    }
    set zoom(zoom: number) {
        if (zoom == this._zoom) return

        this._zoom = zoom
    }

    delete(): void {
        if (this.textureMustBeCleanedup) {
            this._texture.delete()
        }
        this.painter.delete()
    }

    paint(time: number, delta: number): void {
        const { context, z, zoom, uniTint, uniformBlock, painter, camera, matrix, tmpMat } = this
        const uniforms = uniformBlock.values
        camera.screenWidth = context.width
        camera.screenHeight = context.height
        matrix.from(camera.matrixProjection)
        tmpMat.fromMat3(this.transfo.matrix).multiply(camera.matrixModelView)
        tmpMat.m03 = 0
        tmpMat.m13 = 0
        tmpMat.m23 = 0
        matrix.multiply(tmpMat).invert()
        uniforms.uniZ = z
        uniforms.uniZoom = zoom
        uniforms.uniTint = uniTint
        uniforms.uniMatrix = matrix
        uniforms.uniTransfo = this.transfo.matrix
        painter.paint(time, delta)
    }
}
