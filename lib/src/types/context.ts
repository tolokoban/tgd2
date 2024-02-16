import { TgdCamera } from "@/camera"
import { TgdDataset } from "@/dataset"
import { TgdInputs } from "@/input"
import {
    TdgResourceTexture2D,
    TdgResourceTextureCube,
    TgdResourceProgram,
} from "@/resource"
import { TgdProgram } from "@/types"
import { TgdVertexArray } from "@/vao"

export type TgdContextInterface = {
    readonly gl: WebGL2RenderingContext
    readonly inputs: TgdInputs
    camera: TgdCamera
    readonly programs: TgdResourceProgram
    readonly textures2D: TdgResourceTexture2D
    readonly texturesCube: TdgResourceTextureCube
    createVAO(
        program?: TgdProgram,
        datasets?: TgdDataset<any>[],
        elements?: Uint8Array | Uint16Array | Uint32Array
    ): TgdVertexArray
    paint: () => void
}
