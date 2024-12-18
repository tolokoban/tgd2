import { TgdCamera } from "@tgd/camera"
import { TgdDataset } from "@tgd/dataset"
import { TgdInputs } from "@tgd/input"
import {
    TgdResourceTexture2D,
    TgdResourceTextureCube,
    TgdResourceProgram,
} from "@tgd/resource"
import { TgdProgram, TgdTypeArrayForElements } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"
import { TgdPainterFunction } from "./painter"
import { TgdAnimation } from "./animation"

export type TgdContextInterface = {
    readonly gl: WebGL2RenderingContext
    readonly canvas: HTMLCanvasElement
    readonly inputs: TgdInputs
    readonly programs: TgdResourceProgram
    readonly textures2D: TgdResourceTexture2D
    readonly texturesCube: TgdResourceTextureCube
    readonly time: number
    camera: TgdCamera
    animSchedule(animation: TgdAnimation): TgdAnimation
    animCancel(animation: TgdAnimation): void
    createVAO(
        program?: TgdProgram,
        datasets?: TgdDataset[],
        elements?: TgdTypeArrayForElements
    ): TgdVertexArray
    takeSnapshot(target: HTMLCanvasElement): void
    paint: () => void
    onEnter: TgdPainterFunction | undefined
    onExit: TgdPainterFunction | undefined
    debugHierarchy(): void
}
