import {
    type TgdContext,
    TgdPainter,
    TgdPainterClear,
    TgdPainterProgram,
    TgdTexture2D,
    TgdUniformBufferObject,
    TgdUniformBufferObjectCamera,
    WebglImage,
} from "@tolokoban/tgd"

import View, { Assets } from "@/components/demo/Tgd"

import LettersURL from "./letters.webp"
import DustURL from "./dust.webp"

function init(context: TgdContext, assets: Assets) {
    // #begin
    context.camera.transfo.setPosition(0, 0.5, 0)
    context.camera.fitSpaceAtTarget(2, 3)
    const clear = new TgdPainterClear(context, {
        color: [0.2, 0.1, 0, 1],
        depth: 1,
    })
    const uniformCamera = new TgdUniformBufferObjectCamera(context)
    const imageLetters = assets.image.letters
    const imageDust = assets.image.dust
    const painterScreen = new PainterScreen(context, { uniformCamera, imageLetters, imageDust })
    context.add(clear, painterScreen)
    context.play()
    // #end
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            width="512px"
            height="512px"
            controller={{
                inertiaOrbit: 1000,
            }}
            options={{
                preserveDrawingBuffer: true,
            }}
            assets={{ image: { letters: LettersURL, dust: DustURL } }}
        />
    )
}

interface PainterScreenOptions {
    imageLetters: WebglImage
    imageDust: WebglImage
    uniformCamera: TgdUniformBufferObjectCamera
}

class PainterScreen extends TgdPainter {
    private readonly textureLetters: TgdTexture2D
    private readonly textureDust: TgdTexture2D
    private readonly program: TgdPainterProgram
    private readonly uniformBlock: TgdUniformBufferObject<"uniTime">

    constructor(
        public readonly context: TgdContext,
        { uniformCamera, imageLetters, imageDust }: PainterScreenOptions,
    ) {
        super()
        const W = 1
        const H = 1.6
        const D = 0.1
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
        }).loadBitmap(imageLetters)
        this.textureDust = new TgdTexture2D(context).loadBitmap(imageDust)
        // prettier-ignore
        const attPos = [
            -W, 0, +D,
            +W, 0, +D,
            +W, H, +D,
            -W, H, +D,
            -W, 0, -D,
            +W, 0, -D,
            +W, H, -D,
            -W, H, -D,
        ]
        // prettier-ignore
        const attUV = [
            0, 1,
            1, 1,
            1, 0,
            0, 0,
            0, 1,
            1, 1,
            1, 0,
            0, 0,
        ]
        this.program = new TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                depth: "off",
                blend: "add",
                cull: "off",
            },
            uniforms: { uniformCamera, uniformBlock },
            dataset: {
                attribs: {
                    attPos: { type: "vec3", data: new Float32Array(attPos) },
                    attUV: { type: "vec2", data: new Float32Array(attUV) },
                },
            },
            elements: new Uint8Array([0, 1, 2, 0, 2, 3, 4, 0, 3, 4, 3, 7, 1, 5, 6, 1, 6, 2, 5, 4, 7, 5, 7, 6]),
            textures: {
                uniTextureLetters: this.textureLetters,
                uniTextureDust: this.textureDust,
            },
            varying: {
                varUV: "vec2",
            },
            vert: {
                mainCode: [
                    "varUV = attUV;",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(attPos, 1.0);",
                ],
            },
            frag: {
                mainCode: [
                    "vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.1 * uniTime));",
                    "float dist = fract(uniTime) - fract(varUV.y);",
                    "if (dist < 0.0) dist += 1.0;",
                    "dist = 1.0 / (8.0 * dist);",
                    "color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.2);",
                    "color.rgb *= texture(uniTextureDust, varUV).r;",
                    "FragColor = color;",
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
}
