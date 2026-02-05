/* eslint-disable unicorn/prevent-abbreviations */
import type {
    TgdBuffer,
    TgdBufferOptionTarget,
    TgdBufferOptionUsage,
} from "@tgd/buffer"
import type { TgdProgram } from "@tgd/program"

export type TgdDatasetType = "float" | "vec2" | "vec3" | "vec4"

export interface TgdDatasetOptions {
    divisor: number
    target: TgdBufferOptionTarget
    usage: TgdBufferOptionUsage
    /**
     * When passing a Dataset to a VAO, you can use
     * this prop to tell the VAO to use this buffer
     * instead of creating a new one.
     */
    buffer?: TgdBuffer
}

export type TgdDatasetTypeRecord = Record<string, TgdDatasetType>

export class TgdDataset {
    private stride = 0
    private definitions: Record<string, AttributeInternalRepresentation> = {}
    private _data = new ArrayBuffer(0)
    private _count = 0

    public readonly buffer: TgdBuffer | undefined
    public target: TgdBufferOptionTarget
    public usage: TgdBufferOptionUsage

    constructor(
        private readonly attributesDefinition: TgdDatasetTypeRecord,
        private readonly options: Partial<TgdDatasetOptions> = {}
    ) {
        this.buffer = options.buffer
        this.target = options.target ?? "ARRAY_BUFFER"
        this.usage = options.usage ?? "STATIC_DRAW"
        this.initialize(attributesDefinition, options)
    }

    private initialize(
        attributesDefinition: TgdDatasetTypeRecord,
        options: Partial<TgdDatasetOptions> = {}
    ) {
        for (const name of Object.keys(attributesDefinition)) {
            const definition = attributesDefinition[name]
            this.attributesDefinition[name] = definition
        }
        const divisor = options.divisor ?? 0
        let stride = 0
        const data: { [key: string]: ArrayBuffer } = {}
        const definitions: Record<string, AttributeInternalRepresentation> = {}
        for (const name of Object.keys(attributesDefinition)) {
            data[name] = new ArrayBuffer(0)
            const definition: AttributeInternalRepresentation = {
                dimension: DIMS[attributesDefinition[name]],
                byteOffset: stride,
                bytesPerElement: Float32Array.BYTES_PER_ELEMENT,
                divisor,
                getter(view: DataView, byteOffset: number) {
                    const offset =
                        byteOffset >= view.byteLength
                            ? byteOffset % view.byteLength
                            : byteOffset
                    return view.getFloat32(offset, true)
                },
                setter(view: DataView, byteOffset: number, value: number) {
                    view.setFloat32(byteOffset, value, true)
                },
            }
            definitions[name] = definition
            stride += definition.bytesPerElement * definition.dimension
        }
        this.definitions = definitions
        this.stride = stride
        this._data = resize(this._data, this.count * this.stride)
    }

    assertAttributes(attributesDefinition: TgdDatasetTypeRecord) {
        if (
            JSON.stringify(attributesDefinition) !==
            JSON.stringify(this.attributesDefinition)
        ) {
            throw new Error(
                `This TgdDataset was expected to have these attributes:\n${JSON.stringify(
                    attributesDefinition,
                    null,
                    2
                )}\nbut it has these attributes instead:\n${JSON.stringify(
                    this.attributesDefinition,
                    null,
                    2
                )}`
            )
        }
    }

    /**
     * Throw an exception if the attribute `attribName` does not exist,
     * or if it is not of any of the `types`.
     * @param attribName
     * @param types
     */
    assertAttribType(attribName: string, ...types: string[]): this {
        const type = this.attributesDefinition[attribName]
        if (!type)
            throw new Error(
                `Attribute "${attribName}" does not exist! Available names are: ${Object.keys(
                    this.attributesDefinition
                ).join(", ")}.`
            )

        if (!types.includes(type)) {
            throw new Error(
                `Attribute "${attribName}" is of type "${type}", which is not ${types.join(
                    " nor "
                )}!`
            )
        }
        return this
    }

    renameAttributes(newNames: string[]): this {
        const { definitions } = this
        const oldNames = Object.keys(definitions)
        if (oldNames.length !== newNames.length) {
            throw new Error(
                `[TgdDataset] This dataset has ${
                    oldNames.length
                } attributes, but ${newNames.length} new names were given!`
            )
        }
        const newDefinitions: Record<string, AttributeInternalRepresentation> =
            {}
        let index = 0
        for (const oldName of oldNames) {
            const newName = newNames[index]
            newDefinitions[newName] = definitions[oldName]
            index++
        }
        this.definitions = newDefinitions
        return this
    }

    addAttributes(attributesDefinition: TgdDatasetTypeRecord): this {
        const oldDataset = this.clone()
        for (const key of Object.keys(attributesDefinition)) {
            const oldType = this.attributesDefinition[key]
            const newType = attributesDefinition[key]
            if (oldType && oldType !== newType) {
                throw new Error(
                    `It is not allowed to change the type of attribute "${key}" from "${oldType}" to "${newType}"! Prefer removing the attribute first.`
                )
            }
        }
        this.initialize(
            {
                ...this.attributesDefinition,
                ...attributesDefinition,
            },
            this.options
        )
        this.count = oldDataset.count
        for (const attribName of oldDataset.attributesNames) {
            try {
                const { get } = oldDataset.getAttribAccessor(attribName)
                const { set } = this.getAttribAccessor(attribName)
                for (let index = 0; index < oldDataset.count; index++) {
                    const definition = this.getDef(attribName)
                    for (let dim = 0; dim < definition.dimension; dim++) {
                        set(get(index, dim), index, dim)
                    }
                }
            } catch (error) {
                const message =
                    error instanceof Error
                        ? error.message
                        : JSON.stringify(error)
                throw new Error(
                    `Unable to clone attribute "${attribName}"!\n${message}`
                )
            }
        }
        return this
    }

    clone(): TgdDataset {
        const ds = new TgdDataset(
            structuredClone(this.attributesDefinition),
            this.options
        )
        ds.count = this.count
        const source = new DataView(this._data)
        const definition = new DataView(ds._data)
        for (let offset = 0; offset < source.byteLength; offset++) {
            definition.setUint8(offset, source.getUint8(offset))
        }
        return ds
    }

    copyAttributes({
        fromIndex,
        toIndex,
        toDataset = this,
    }: {
        fromIndex: number
        toIndex: number
        toDataset?: TgdDataset
    }) {
        const { stride } = this
        if (stride !== toDataset.stride) {
            console.error("Failed to copy attributes between datasets!")
            this.debug("From:")
            toDataset.debug("To:")
            throw new Error(
                `[TgdDataset.copyAttributes] Unable to copy attributes from a dataset with stride ${stride} to one with stride ${toDataset.stride}!`
            )
        }
        const fromData = this._data
        const fromOffset = fromIndex * stride
        const fromArray = new Uint8Array(fromData)
        const toData = toDataset._data
        const toOffset = toIndex * stride
        const toArray = new Uint8Array(toData)
        const size = stride
        toArray.set(fromArray.subarray(fromOffset, fromOffset + size), toOffset)
    }

    /**
     * Warning!
     *
     * This ArrayBuffer will be detached as soon as its
     * size is changed!
     */
    get data(): Readonly<ArrayBuffer> {
        return this._data
    }
    /**
     * Dataset does not own any GL Buffer.
     * So setting its data won't change anything in WebGL.
     * You can use a `TgdVertexArray` for this.
     */
    set data(arrayBuffer: Readonly<ArrayBuffer>) {
        if (this._data === arrayBuffer) return

        this._data = arrayBuffer
        this.count = Math.floor(arrayBuffer.byteLength / this.stride)
    }

    /** Get number of attributes. */
    get count() {
        return this._count
    }
    /** Set number of attributes (reallocate data accordingly) */
    set count(count: number) {
        if (this._count === count) return

        this._count = count
        this._data = resize(this._data, count * this.stride)
    }

    get attributesNames(): string[] {
        return Object.keys(this.attributesDefinition)
    }

    getAttribAccessor(attribName: string): {
        get: (index: number, dimension?: number) => number
        set: (value: number, index: number, dimension?: number) => void
    } {
        const definition = this.getDef(attribName)
        const view = new DataView(this.data)
        const stride = this.stride
        return {
            get(index: number, dimension = 0): number {
                const byteOffset =
                    definition.byteOffset +
                    stride * index +
                    dimension * definition.bytesPerElement
                return definition.getter(view, byteOffset)
            },
            set(value: number, index: number, dimension = 0): void {
                const byteOffset =
                    definition.byteOffset +
                    stride * index +
                    dimension * definition.bytesPerElement
                definition.setter(view, byteOffset, value)
            },
        }
    }

    /**
     * Set the data for one attribute.
     *
     * If you try to set more element that the current buffer
     * can hold, the buffer will be expanded.
     * And the property `count` will change accordingly.
     *
     * @param attribName If the attribute does not exist,
     * you will get an exception.
     * @param value The ArrayBuffer holding the data you
     * want to set to this attribute
     * @param param2
     */
    set(
        attribName: string,
        value:
            | ArrayBuffer
            | Int8Array
            | Uint8Array
            | Int16Array
            | Uint16Array
            | Uint32Array
            | Float32Array
            | { buffer: ArrayBuffer },
        {
            byteOffset = 0,
            byteStride,
            first = 0,
            count = Number.POSITIVE_INFINITY,
            targetFirst = 0,
        }: Partial<{
            /**
             * First byte of meaningful data in this buffer.
             */
            byteOffset: number
            /**
             * Number of bytes between two elements.
             * If data is packed, you can leave it undefined.
             */
            byteStride: number
            /**
             * Index if the first source element.
             * Default to 0.
             */
            first: number
            /**
             * Maximum number of elements to store.
             * Default to Infinity.
             */
            count: number
            /**
             * Index if the first destination element.
             * Default to 0.
             */
            targetFirst: number
        }> = {}
    ) {
        const {
            bytesPerElement,
            dimension,
            byteOffset: attribByteOffset,
        } = this.getDef(attribName)
        const buffer = value instanceof ArrayBuffer ? value : value.buffer
        const chunkLength = bytesPerElement * dimension
        const sourceStride = byteStride ?? chunkLength
        let sourceOffset = byteOffset + sourceStride * first
        const dstStride = this.stride
        let dstOffset = targetFirst * dstStride + attribByteOffset
        this.count = Math.max(
            this.count,
            Math.min(
                count,
                Math.floor((buffer.byteLength - sourceOffset) / sourceStride)
            )
        )
        const sourceStop = buffer.byteLength - sourceStride + 1
        const dstStop = this._data.byteLength + attribByteOffset - dstStride + 1
        const sourceBuffer = new Uint8Array(buffer)
        const dstBuffer = new Uint8Array(this._data)
        let index = 0
        while (
            index < count &&
            sourceOffset < sourceStop &&
            dstOffset < dstStop
        ) {
            dstBuffer.set(
                sourceBuffer.subarray(sourceOffset, sourceOffset + chunkLength),
                dstOffset
            )
            index++
            sourceOffset += sourceStride
            dstOffset += dstStride
        }
    }

    private getDef(attribName: string): AttributeInternalRepresentation {
        const definition = this.definitions[attribName]
        if (!definition)
            throw new Error(
                `[TgdDataset] Attribute "${String(
                    attribName
                )}" not found in this DataSet!\nAvailable names are: ${Object.keys(
                    this.definitions
                )
                    .map((name) => JSON.stringify(name))
                    .join(", ")}.`
            )
        return definition
    }

    /**
     * Enable the vertex attrib array, and set
     * the vertex attrib pointer for every declared
     * attribute.
     */
    defineAttributes(gl: WebGL2RenderingContext, prg: TgdProgram) {
        let offsetDestination = 0
        const { definitions } = this
        for (const name of Object.keys(definitions)) {
            const definition = definitions[name]
            if (prg.hasAttribute(name)) {
                const att = prg.getAttribLocation(name)
                gl.enableVertexAttribArray(att)
                gl.vertexAttribPointer(
                    att,
                    definition.dimension,
                    gl.FLOAT,
                    false,
                    this.stride,
                    offsetDestination
                )
                gl.vertexAttribDivisor(att, definition.divisor)
            }
            const bytes = definition.dimension * definition.bytesPerElement
            offsetDestination += bytes
        }
    }

    toCode({ indent = "" }: Partial<{ indent: string }> = {}) {
        const lines: string[] = []
        let offsetDestination = 0
        const { definitions } = this
        for (const name of Object.keys(definitions)) {
            const definition = definitions[name]
            const att = `$${name}`
            lines.push(
                `const ${att} = gl.getAttribLocation(prg, "${name}")`,
                `gl.enableVertexAttribArray(${att})`,
                "gl.vertexAttribPointer(",
                `  ${att},`,
                `  ${definition.dimension},  // Dimension`,
                "  gl.FLOAT,",
                "  false,",
                `  ${this.stride},   // Stride`,
                `  ${offsetDestination}   // Offset`,
                ")",
                `gl.vertexAttribDivisor(${att}, ${definition.divisor})`
            )
            const bytes = definition.dimension * definition.bytesPerElement
            offsetDestination += bytes
        }
        return lines.map((line) => `${indent}${line}`).join("\n")
    }

    debug(caption = "Dataset") {
        console.log(
            caption,
            "   count:",
            this.count,
            "   target:",
            this.target,
            "   usage:",
            this.usage
        )
        const rows: [name: string, type: string, offset: string][] = [
            ["Name", "type", "offset"],
        ]
        for (const attName of Object.keys(this.definitions)) {
            const definition = this.definitions[attName]
            rows.push([
                attName,
                this.attributesDefinition[attName],
                `${definition.byteOffset}`,
            ])
        }
        const sizes: number[] = [0, 1, 2].map((index) =>
            rows.reduce(
                (previous, current) =>
                    Math.max(previous, current[index].length),
                0
            )
        )
        for (const [name, type, offset] of rows)
            console.log(
                `%c${name.padEnd(sizes[0] + 2)}${type.padStart(
                    sizes[1] + 2
                )}${offset.padStart(sizes[2] + 2)}`,
                "font-family:monospace"
            )

        for (const attName of Object.keys(this.definitions)) {
            const definition = this.definitions[attName]
            if (!definition) continue

            const { get } = this.getAttribAccessor(attName)
            const data: number[][] = []
            for (let index = 0; index < this.count; index++) {
                const items: number[] = []
                for (let dim = 0; dim < definition.dimension; dim++) {
                    items.push(get(index, dim))
                }
                data.push(items)
            }
            console.log(`Attribute "${attName}":`, data)
        }
    }
}

const DIMS: Record<TgdDatasetType, number> = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
}

interface AttributeInternalRepresentation {
    dimension: number
    bytesPerElement: number
    byteOffset: number
    divisor: number
    getter(this: void, view: DataView, byteOffset: number): number
    setter(this: void, view: DataView, byteOffset: number, value: number): void
}

function resizeFast(buff: ArrayBuffer, newSize?: number): ArrayBuffer {
    return buff.transfer(newSize)
}

function resizeSlow(inBuff: ArrayBuffer, newSize?: number): ArrayBuffer {
    const outBuff = new ArrayBuffer(newSize ?? inBuff.byteLength)
    new Uint8Array(outBuff).set(new Uint8Array(inBuff))
    return outBuff
}

const resize =
    typeof ArrayBuffer.prototype.transfer === "function"
        ? resizeFast
        : resizeSlow
