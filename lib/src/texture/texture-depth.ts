import { TgdTexture2D } from "./texture2d"

interface TgdTextureDepthStorage {
    width: number
    height: number
    type: "DEPTH_COMPONENT24" | "DEPTH_COMPONENT16" | "DEPTH_COMPONENT32F"
}

export class TgdTextureDepth extends TgdTexture2D {
    constructor(
        public readonly context: {
            gl: WebGL2RenderingContext
            paint?: () => void
        },
        {
            width = 1,
            height = 1,
            type = "DEPTH_COMPONENT24",
        }: Partial<TgdTextureDepthStorage> = {}
    ) {
        super(context, {
            storage: { width, height, internalFormat: type },
        })
        this.setParams({
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        })
        switch (type) {
            case "DEPTH_COMPONENT16":
                this.resize = this.resize16
                break
            case "DEPTH_COMPONENT24":
                this.resize = this.resize24
                break
            default:
                this.resize = this.resize32F
                break
        }
    }

    readonly resize: (width: number, height: number) => void

    private readonly resize16 = (width: number, height: number) => {
        const { context } = this
        const { gl } = context

        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.DEPTH_COMPONENT16,
            width,
            height,
            0,
            gl.DEPTH_COMPONENT,
            gl.UNSIGNED_SHORT,
            null
        )
    }

    private readonly resize24 = (width: number, height: number) => {
        const { context } = this
        const { gl } = context

        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.DEPTH_COMPONENT24,
            width,
            height,
            0,
            gl.DEPTH_COMPONENT,
            gl.UNSIGNED_INT,
            null
        )
    }

    private readonly resize32F = (width: number, height: number) => {
        const { context } = this
        const { gl } = context

        this.bind()
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.DEPTH_COMPONENT32F,
            width,
            height,
            0,
            gl.DEPTH_COMPONENT,
            gl.FLOAT,
            null
        )
    }
}
