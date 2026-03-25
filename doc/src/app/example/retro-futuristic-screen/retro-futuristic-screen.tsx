import {
    tgdCanvasCreateWithContext2D,
    type TgdContext,
    TgdDataGlb,
    tgdLoadFont,
    TgdMaterialGlobal,
    TgdPainter,
    TgdPainterClear,
    TgdPainterMesh,
    TgdPainterProgram,
    TgdPainterSkybox,
    TgdPainterState,
    TgdTexture2D,
    TgdTextureCube,
    TgdUniformBufferObject,
    TgdUniformBufferObjectCamera,
    WebglImage,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import ScreenURL from "./screen.glb"
import DustURL from "./dust.webp"
import FuzarFontURL from "./Fuzar_GX.woff2"
import imagePosX from "@/assets/cubemap/1024/electric-board/posX.webp" // +X
import imagePosY from "@/assets/cubemap/1024/electric-board/posY.webp" // +Y
import imagePosZ from "@/assets/cubemap/1024/electric-board/posZ.webp" // +Z
import imageNegX from "@/assets/cubemap/1024/electric-board/negX.webp" // -X
import imageNegY from "@/assets/cubemap/1024/electric-board/negY.webp" // -Y
import imageNegZ from "@/assets/cubemap/1024/electric-board/negZ.webp" // -Z

const COLOR = "#5e9"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.transfo.setPosition(0, 2, 0)
    context.camera.fitSpaceAtTarget(9, 7)
    const clear = new TgdPainterClear(context, {
        depth: 1,
    })
    const uniformCamera = new TgdUniformBufferObjectCamera(context)
    const imageLetters = assets.image.letters
    const imageDust = assets.image.dust
    const cameraSkybox = context.camera.clone()
    const painterSkybox = new TgdPainterSkybox(context, {
        tint: [0.4, 0.4, 0.4, 1],
        camera: cameraSkybox,
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    })
    const skybox = new TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    })
    const painterScreen = new PainterScreen(context, {
        uniformCamera,
        imageLetters,
        imageDust,
        assetScreen: assets.glb.screen,
        skybox,
    })
    const geometry = assets.glb.screen.makeGeometry({
        meshIndex: "Mesh",
    })
    const material = new TgdMaterialGlobal({
        ambientColor: skybox,
    })
    const foot = new TgdPainterMesh(context, {
        geometry,
        material,
    })
    context.add(
        painterSkybox,
        new TgdPainterState(context, {
            depth: "less",
            children: [clear, foot, painterScreen],
        }),
        (time) => {
            const angX = Math.abs(10 * Math.sin(time * 0.341))
            const angY = 30 * Math.sin(time * 0.5)
            context.camera.transfo.setEulerRotation(angX, angY, 0)
            cameraSkybox.zoom = 0.3
            cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0)
        },
    )
    context.play()
    // #end
}

export default function RetroFuturisticScreen() {
    return (
        <View
            fullscreen
            onReady={init}
            options={{
                antialias: true,
                alpha: false,
                // preserveDrawingBuffer: true,
            }}
            assets={{
                glb: { screen: ScreenURL },
                image: { dust: DustURL, imagePosX, imagePosY, imagePosZ, imageNegX, imageNegY, imageNegZ },
            }}
        />
    )
}

interface PainterScreenOptions {
    imageLetters: WebglImage
    imageDust: WebglImage
    uniformCamera: TgdUniformBufferObjectCamera
    assetScreen: TgdDataGlb
    skybox: TgdTextureCube
}

class PainterScreen extends TgdPainter {
    private readonly textureLetters: TgdTexture2D
    private readonly textureDust: TgdTexture2D
    private readonly program: TgdPainterProgram
    private readonly uniformBlock: TgdUniformBufferObject<"uniTime">

    constructor(
        public readonly context: TgdContext,
        { uniformCamera, imageDust, assetScreen, skybox }: PainterScreenOptions,
    ) {
        super()
        const W = 3
        const H = 2
        const elements = assetScreen.getMeshPrimitiveIndices("Screen")
        const dataset = assetScreen.makeDataset({
            meshIndex: "Screen",
        })
        dataset.debug()
        const uniformBlock = new TgdUniformBufferObject(context, {
            uniforms: {
                uniTime: "float",
            },
        })
        this.uniformBlock = uniformBlock
        this.textureLetters = new TgdTexture2D(context, {
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapR: "REPEAT",
                wrapS: "REPEAT",
                wrapT: "REPEAT",
            },
        })
        const scale = 512
        const { ctx, canvas } = tgdCanvasCreateWithContext2D(W * scale, H * scale * 2)
        this.initCanvas(canvas, ctx)
        this.loadFont(canvas, ctx)
        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)
        this.program = new TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                blend: "add",
                cull: "off",
            },
            uniforms: { uniformCamera, uniformBlock },
            dataset,
            elements,
            textures: {
                uniTextureLetters: this.textureLetters,
                uniTextureDust: this.textureDust,
                uniTextureSkybox: skybox,
            },
            varying: {
                varUV: "vec2",
                varNormal: "vec3",
                varPosition: "vec4",
            },
            vert: {
                mainCode: [
                    "varNormal = NORMAL;",
                    "varUV = TEXCOORD_0;",
                    "varPosition = vec4(POSITION, 1.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;",
                ],
            },
            frag: {
                mainCode: [
                    "vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));",
                    "float dist = fract(uniTime) - fract(varUV.y);",
                    "if (dist < 0.0) dist += 1.0;",
                    "dist = 1.0 / (6.0 * dist);",
                    "color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);",
                    "color.rgb *= texture(uniTextureDust, varUV).r;",
                    "FragColor = color;",
                    "if (!gl_FrontFacing) return;",
                    "vec3 N = normalize(varNormal);",
                    "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",
                    "vec3 R = reflect(-V, N);",
                    "vec3 specular = textureLod(uniTextureSkybox, -R, 0.0).rgb;",
                    "specular = pow(specular, vec3(5.0));",
                    "FragColor.rgb += specular * .5;",
                    "FragColor.rgb += vec3(-.1, .05, -.1);",
                ],
            },
        })
    }

    delete() {
        this.textureLetters.delete()
        this.program.delete()
    }

    paint(time: number, delta: number) {
        this.uniformBlock.values.uniTime = time
        this.program.paint(time, delta)
    }

    private initCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        const { width, height } = canvas
        const text = "Loading FUZAR..."
        ctx.font = `bold ${width / 12}px monospace`
        const measure = ctx.measureText(text)
        ctx.fillStyle = COLOR
        const h = height / 5
        const x = (width - measure.width) / 2
        for (let y = h; y < height; y += h) {
            ctx.fillText(text, x, y)
        }
        this.textureLetters.loadBitmap(canvas)
    }

    private loadFont(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        tgdLoadFont("Fuzar", FuzarFontURL).then(() => {
            const { width, height } = canvas
            ctx.clearRect(0, 0, width, height)
            const fontSize = width / 8
            const margin = fontSize / 3
            ctx.font = `italic ${fontSize}px Fuzar`
            ctx.fillStyle = COLOR
            let x = margin
            let y = fontSize * 3
            let bold = false
            let italic = false
            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. "0123456789"`
            for (const word of text.split(" ")) {
                italic = false
                bold = false
                if (word.startsWith("_")) italic = true
                if (word.startsWith("*")) italic = false
                const cleanWord = removeStyle(word)
                ctx.font = `${bold ? "bold " : ""}${italic ? "italic " : ""} ${fontSize}px Fuzar`
                const measure = ctx.measureText(`${cleanWord} `)
                if (x > width - measure.width - 2 * margin) {
                    x = margin
                    y += fontSize
                }
                ctx.fillText(cleanWord, x, y)
                x += measure.width
            }
            // ctx.lineWidth = 0.5
            // ctx.strokeStyle = "#5f57"
            // for (let h = 0; h < height; h += fontSize / 8) {
            //     const y = Math.floor(h) + 0.5
            //     ctx.beginPath()
            //     ctx.moveTo(0, y)
            //     ctx.lineTo(width, y)
            //     ctx.stroke()
            // }
            this.textureLetters.loadBitmap(canvas)
            this.context.paint()
        })
    }
}

function removeStyle(word: string) {
    while ("*_".includes(word.charAt(0))) word = word.slice(1)
    return word
}
