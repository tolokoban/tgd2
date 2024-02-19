import { TgdCamera } from "@/camera"
import { TgdDataset } from "@/dataset"
import { TgdInputs } from "@/input"
import {
    TgdResourceTexture2D,
    TgdResourceTextureCube,
    TgdResourceProgram,
} from "@/resource"
import { TgdProgram } from "@/types"
import { TgdVertexArray } from "@/vao"
import { TgdPainterFunction } from "./painter"

export type TgdContextInterface = {
    readonly gl: WebGL2RenderingContext
    readonly inputs: TgdInputs
    camera: TgdCamera
    readonly programs: TgdResourceProgram
    readonly textures2D: TgdResourceTexture2D
    readonly texturesCube: TgdResourceTextureCube
    createVAO(
        program?: TgdProgram,
        datasets?: TgdDataset<any>[],
        elements?: Uint8Array | Uint16Array | Uint32Array
    ): TgdVertexArray
    paint: () => void
    onEnter: TgdPainterFunction | undefined
    onExit: TgdPainterFunction | undefined
}
