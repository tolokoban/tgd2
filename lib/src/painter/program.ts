import type { TgdContext } from "@tgd/context"
import { TgdDataset, type TgdDatasetOptions, type TgdDatasetType, type TgdDatasetTypeRecord } from "@tgd/dataset"
import { TgdConsole } from "@tgd/debug"
import { TgdProgram } from "@tgd/program"
import {
    type TgdCodeBloc,
    type TgdCodeFunctions,
    type TgdCodeVariables,
    TgdShaderFragment,
    TgdShaderVertex,
    tgdCodeStringify,
} from "@tgd/shader"
import type { TgdTypeArrayForElements, WebglAttributeType, WebglUniformType } from "@tgd/types"
import type { TgdPainterFunction } from "@tgd/types/painter"
import { ensureArray, webglElementTypeFromTypedArray, webglLookup } from "@tgd/utils"
import { TgdPainterLogic, TgdTexture2D, TgdTextureCube, TgdVertexArray } from "@tolokoban/tgd"
import { TgdUniformBufferObject, type TgdUniformBufferObjectOptions } from "./../uniform/uniform-buffer-object"
import { TgdPainter } from "./painter"
import { TgdPainterState, type TgdPainterStateOptions } from "./state"

interface DatasetOptions extends Partial<Omit<TgdDatasetOptions, "data" | "buffer">> {
    attribs: Record<
        string,
        {
            type: TgdDatasetType
            data:
                | ArrayBuffer
                | Int8Array
                | Uint8Array
                | Int16Array
                | Uint16Array
                | Uint32Array
                | Float32Array
                | { buffer: ArrayBuffer }
        }
    >
}

export interface TgdPainterProgramOptions {
    drawMode:
        | "POINTS"
        | "LINE_STRIP"
        | "LINE_LOOP"
        | "LINES"
        | "TRIANGLE_STRIP"
        | "TRIANGLE_FAN"
        | "TRIANGLES"
        | WebGL2RenderingContext["POINTS"]
        | WebGL2RenderingContext["LINE_STRIP"]
        | WebGL2RenderingContext["LINE_LOOP"]
        | WebGL2RenderingContext["LINES"]
        | WebGL2RenderingContext["TRIANGLE_STRIP"]
        | WebGL2RenderingContext["TRIANGLE_FAN"]
        | WebGL2RenderingContext["TRIANGLES"]
    uniforms?: Record<string, TgdUniformBufferObject | Omit<TgdUniformBufferObjectOptions, "bindingPoint">>
    textures?: Record<string, TgdTexture2D | TgdTextureCube>
    dataset: TgdDataset | DatasetOptions | (TgdDataset | DatasetOptions)[]
    varying?: TgdCodeVariables<WebglAttributeType>
    vert: Partial<{
        precision: "lowp" | "mediump" | "highp"
        functions: TgdCodeFunctions
        mainCode: TgdCodeBloc
        header: TgdCodeBloc
    }>
    frag: Partial<{
        precision: "lowp" | "mediump" | "highp"
        outputs: TgdCodeVariables<WebglAttributeType>
        functions: TgdCodeFunctions | TgdCodeBloc
        mainCode: TgdCodeBloc
        header: TgdCodeBloc
    }>
    elements?: TgdTypeArrayForElements
    state?: Partial<Omit<TgdPainterStateOptions, "children">>
    elementsCount?: number
    elementsOffset?: number
    instancesCount?: number
    onEnter?: TgdPainterFunction
    onDelete?: () => void
}

export class TgdPainterProgram extends TgdPainter {
    public elementsCount = 0
    public elementsOffset = 0
    public instancesCount = 0
    public readonly textures: Record<string, TgdTexture2D | TgdTextureCube>

    private readonly uniformBlocks: TgdUniformBufferObject[] = []
    private readonly uniformBlocksToDelete: TgdUniformBufferObject[] = []
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly drawMode: number
    private readonly painterState: TgdPainterState
    private readonly hasElements: boolean
    private readonly elementsType: number
    private readonly onEnter?: TgdPainterFunction
    private readonly onDelete?: () => void

    constructor(
        private readonly context: TgdContext,
        {
            onEnter,
            onDelete,
            uniforms = {},
            textures = {},
            varying,
            vert,
            frag,
            dataset,
            elements,
            drawMode,
            state,
            elementsCount,
            elementsOffset,
            instancesCount,
        }: TgdPainterProgramOptions,
    ) {
        super()
        this.textures = textures
        this.onEnter = onEnter
        this.onDelete = onDelete
        const datasets: TgdDataset[] = ensureArray(dataset).map((item) => {
            if (item instanceof TgdDataset) return item
            const attributesDefinition: TgdDatasetTypeRecord = {}
            for (const attribName of Object.keys(item.attribs)) {
                attributesDefinition[attribName] = item.attribs[attribName].type
            }
            const ds = new TgdDataset(attributesDefinition, item)
            for (const attribName of Object.keys(item.attribs)) {
                ds.set(attribName, item.attribs[attribName].data)
            }
            return ds
        })
        this.drawMode = typeof drawMode === "number" ? drawMode : context.gl[drawMode]
        const uniformsHeader = ensureArray(this.uniformsToCode(uniforms))
        const uniformsForTextures = texturesToUniforms(textures)
        const vertexShader = new TgdShaderVertex({
            ...vert,
            uniforms: uniformsForTextures,
            attributes: resolveAttributesFromDataset(datasets),
            header: [...uniformsHeader, ...ensureArray(vert.header)],
            varying,
        })
        const fragmentShader = new TgdShaderFragment({
            ...frag,
            uniforms: uniformsForTextures,
            header: [...uniformsHeader, ...ensureArray(vert.header)],
            varying,
        })
        const program = new TgdProgram(context.gl, {
            vert: vertexShader,
            frag: fragmentShader,
        })
        this.prg = program
        const vao = new TgdVertexArray(context.gl, program, datasets, elements)
        this.vao = vao
        this.painterState = new TgdPainterState(context, {
            ...state,
            children: [new TgdPainterLogic(this.internalPaint)],
        })
        this.elementsCount = elementsCount ?? resolveElementsCount(datasets, elements)
        this.elementsOffset = elementsOffset ?? 0
        this.instancesCount = instancesCount ?? resolveInstancesCount(datasets)
        this.hasElements = !!elements
        this.elementsType = elements ? webglElementTypeFromTypedArray(elements) : 0
        const setBindingPoints = new Set<number>()
        Object.keys(uniforms).forEach((blockName, index) => {
            const block = this.uniformBlocks[index]
            if (setBindingPoints.has(block.bindingPoint)) {
                const code: TgdCodeBloc = Object.keys(uniforms).map((blockName, index) =>
                    this.uniformBlocks[index].toShaderCode(blockName),
                )
                throw new Error(
                    `[TgdPainterProgram] Uniform blocks must have distincts binding points!\n${tgdCodeStringify(code)}`,
                )
            }
            setBindingPoints.add(block.bindingPoint)
            block.bindToProgram(program, blockName)
        })
    }

    delete(): void {
        this.onDelete?.()
        for (const block of this.uniformBlocksToDelete) {
            block.delete()
        }
        this.prg.delete()
        this.vao.delete()
    }

    paint(time: number, delta: number): void {
        this.painterState.paint(time, delta)
    }

    debug(caption?: string) {
        console.log(caption ?? this.name)
        console.log({
            drawMode: webglLookup(this.drawMode),
            elementsCount: this.elementsCount,
            elementsOffset: this.elementsOffset,
            instancesCount: this.instancesCount,
        })
        this.vao.debug()
    }

    private readonly internalPaint = (time: number, delta: number) => {
        const {
            context,
            onEnter,
            textures,
            uniformBlocks,
            prg,
            vao,
            elementsType,
            elementsCount,
            elementsOffset,
            instancesCount,
            drawMode: mode,
        } = this
        const { gl } = context
        prg.use()
        let unit = 0
        for (const name of Object.keys(textures)) {
            const texture = textures[name]
            texture.activate(unit++, prg, name)
        }
        onEnter?.(time, delta)
        for (const block of uniformBlocks) {
            block.updateData()
        }
        vao.bind()
        if (this.hasElements) {
            if (instancesCount > 0) {
                gl.drawElementsInstanced(mode, elementsCount, elementsType, elementsOffset, instancesCount)
            } else {
                gl.drawElements(mode, elementsCount, elementsType, elementsOffset)
            }
        } else {
            if (instancesCount > 0) {
                gl.drawArraysInstanced(mode, elementsOffset, elementsCount, instancesCount)
            } else {
                gl.drawArrays(mode, elementsOffset, elementsCount)
            }
        }
        vao.unbind()
    }

    private uniformsToCode(
        uniforms: Record<string, TgdUniformBufferObject | Omit<TgdUniformBufferObjectOptions, "bindingPoint">>,
    ) {
        const code: TgdCodeBloc = []
        const setNames = new Set<string>()
        const setDuplicated = new Set<string>()
        const names: Record<string, string[]> = {}
        for (const blockName of Object.keys(uniforms)) {
            const block = this.resolveUniformBlock(uniforms[blockName])
            this.uniformBlocks.push(block)
            names[blockName] = block.names
            code.push(...ensureArray(block.toShaderCode(blockName)))
            for (const name of block.names) {
                if (setNames.has(name)) setDuplicated.add(name)
                else setNames.add(name)
            }
        }
        if (setDuplicated.size > 0) {
            // There is a duplicate!
            const out = new TgdConsole({
                text: "[TgdPainterProgram] You have duplicated names in your uniform blocks:\n",
                color: "#f33",
            })
            for (const blockName of Object.keys(names)) {
                out.add(`  ${blockName}`, { bold: true }).add(": ")
                names[blockName].forEach((name, index) => {
                    if (index > 0) out.add(", ")
                    out.add(
                        name,
                        setDuplicated.has(name)
                            ? {
                                  bold: true,
                                  color: "#f33",
                              }
                            : undefined,
                    )
                })
                out.nl()
            }
            out.error()
        }
        return code
    }

    private resolveUniformBlock(obj: TgdUniformBufferObject | TgdUniformBufferObjectOptions): TgdUniformBufferObject {
        if (obj instanceof TgdUniformBufferObject) return obj

        return new TgdUniformBufferObject(this.context, obj)
    }
}

function resolveAttributesFromDataset(datasets: TgdDataset[]): TgdCodeVariables<WebglAttributeType> | undefined {
    const attributes: TgdCodeVariables<WebglAttributeType> = {}
    const setNames = new Set<string>()
    const setDuplicated = new Set<string>()
    for (const dataset of datasets) {
        for (const name of dataset.attributesNames) {
            if (setNames.has(name)) setDuplicated.add(name)
            else setNames.add(name)
            attributes[name] = dataset.getType(name)
        }
    }
    if (setDuplicated.size > 0) {
        // There is a duplicate!
        const out = new TgdConsole({
            text: "[TgdPainterProgram] You have duplicated names in your datasets:\n",
            color: "#f33",
        })
        for (const dataset of datasets) {
            out.add(`  ${dataset.name}`, { bold: true }).add(": ")
            dataset.attributesNames.forEach((name, index) => {
                if (index > 0) out.add(", ")
                out.add(
                    name,
                    setDuplicated.has(name)
                        ? {
                              bold: true,
                              color: "#f33",
                          }
                        : undefined,
                )
            })
            out.nl()
        }
        out.error()
    }
    return attributes
}

function resolveElementsCount(datasets: TgdDataset[], elements: TgdTypeArrayForElements | undefined): number {
    if (elements) return elements.length
    const counts = datasets.filter((ds) => ds.divisor === 0).map((ds) => ds.count)
    if (counts.length === 0) {
        throw new Error(
            "[TgdPainterProgram] You must give at least one Dataset with divisor 0 in the constructor!\nOr you can specify elementsCount.",
        )
    }
    if (counts.length === 1) return counts[0]
    counts.sort()
    const [first] = counts
    const last = counts[counts.length - 1]
    if (first === last) return first

    throw new Error(
        `[TgdPainterPogram] I cannot resolve elementsCount because your datasets have different counts!\n${datasets
            .filter((ds) => ds.divisor === 0)
            .map((ds) => `  ${ds.name}: count == ${ds.count}`)}`,
    )
}

function resolveInstancesCount(datasets: TgdDataset[]): number {
    const counts = datasets.filter((ds) => ds.divisor > 0).map((ds) => ds.count / ds.divisor)
    if (counts.length === 0) return 0
    if (counts.length === 1) return counts[0]
    counts.sort()
    const [first] = counts
    const last = counts[counts.length - 1]
    if (first === last) return first

    throw new Error(
        `[TgdPainterPogram] I cannot resolve elementsCount because your instance datasets have different counts!\n${datasets
            .filter((ds) => ds.divisor > 0)
            .map((ds) => `  ${ds.name}: count == ${ds.count} / ${ds.divisor} == ${ds.count / ds.divisor}`)}`,
    )
}

function texturesToUniforms(textures: Record<string, TgdTexture2D | TgdTextureCube>) {
    const uniforms: Record<string, WebglUniformType> = {}
    for (const name of Object.keys(textures)) {
        uniforms[name] = resolveTextureType(textures[name])
    }
    return uniforms
}

function resolveTextureType(texture: TgdTexture2D | TgdTextureCube) {
    if (texture instanceof TgdTexture2D) return "sampler2D"

    if (texture instanceof TgdTextureCube) return "samplerCube"

    console.error("[resolveTextureType] Don't know the type of this texture:", texture)
    throw new Error("[resolveTextureType] Don't know the type of this texture!")
}
