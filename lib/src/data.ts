export interface DataAttribute {
    dimension: number
    type: "float"
}

interface DataDefinition {
    dimension: number
    bytesPerElement: number
    getter(view: DataView, byteOffset: number): number
    setter(view: DataView, byteOffset: number, value: number): void
}

class Data<T extends { [key: string]: DataAttribute | number }> {
    public readonly stride
    private buffer: ArrayBuffer | undefined = undefined
    private readonly data: { [key: string]: ArrayBufferLike } = {}
    private readonly definitions: { [key: string]: DataDefinition }

    constructor(def: T) {
        let stride = 0
        const data: { [key: string]: ArrayBuffer } = {}
        const definitions: { [key: string]: DataDefinition } = {}
        for (const key of Object.keys(def)) {
            data[key] = new ArrayBuffer(0)
            const dataDef = makeDataDefinition(def[key])
            definitions[key] = dataDef
            stride += dataDef.bytesPerElement * dataDef.dimension
        }
        this.data = data
        this.definitions = definitions
        this.stride = stride
    }

    get(verticesCount: number): ArrayBuffer {
        const byteLength = this.stride * verticesCount
        if (!this.buffer || this.buffer.byteLength < byteLength) {
            this.checkIfWeHaveEnoughData(verticesCount)
            this.buffer = new ArrayBuffer(byteLength)
            const viewDestination = new DataView(this.buffer)
            let offsetDestination = 0
            const { data, definitions } = this
            for (let vertex = 0; vertex < verticesCount; vertex++) {
                for (const key of Object.keys(definitions)) {
                    const def = definitions[key]
                    const buff: ArrayBufferLike = data[key]
                    const viewSource = new DataView(buff)
                    let offsetSource =
                        def.bytesPerElement * def.dimension * vertex
                    for (let dim = 0; dim < def.dimension; dim++) {
                        def.setter(
                            viewDestination,
                            offsetDestination,
                            def.getter(viewSource, offsetSource)
                        )
                        offsetSource += def.bytesPerElement
                        offsetDestination += def.bytesPerElement
                    }
                }
            }
        }
        return this.buffer
    }

    set(attribName: keyof T, value: ArrayBuffer) {
        if (isObject(value) && value.buffer instanceof ArrayBuffer) {
            value = value.buffer
        }
        this.data[attribName as string] = value
        this.buffer = undefined
    }

    private checkIfWeHaveEnoughData(verticesCount: number) {
        const { data, definitions } = this
        for (const key of Object.keys(definitions)) {
            const buff = data[key]
            if (!buff) {
                throw Error(
                    `No data has been set for attribute "${key}"!\nPlease use something like this:\n    data.set("${key}", new Float32Array([4, 3]))`
                )
            }
            const def = definitions[key]
            const byteLength =
                def.bytesPerElement * def.dimension * verticesCount
            if (buff.byteLength < byteLength) {
                throw Error(
                    `Attribute "${key}" has only ${buff.byteLength} bytes, but we need at least ${byteLength}!`
                )
            }
        }
    }
}

export function makeData<T extends { [key: string]: DataAttribute | number }>(
    def: T
): Data<typeof def> {
    return new Data<typeof def>(def)
}

function makeDataDefinition(attribute: DataAttribute | number): DataDefinition {
    const dataDef: DataAttribute =
        typeof attribute === "number"
            ? {
                  dimension: attribute,
                  type: "float",
              }
            : attribute

    switch (dataDef.type) {
        case "float":
            return makeDataDefinitionFloat(dataDef)
            break
        default:
            throw Error(
                `Unable to create a Data for an attribute of type "${dataDef.type}"!`
            )
    }
}

function makeDataDefinitionFloat(dataDef: DataAttribute): DataDefinition {
    const bytesPerElement = Float32Array.BYTES_PER_ELEMENT
    return {
        dimension: dataDef.dimension,
        bytesPerElement,
        getter(view: DataView, byteOffset: number) {
            return view.getFloat32(byteOffset)
        },
        setter(view: DataView, byteOffset: number, value: number) {
            view.setFloat32(byteOffset, value)
        },
    }
}

function isObject(data: unknown): data is Record<string, unknown> {
    if (!data) return false
    return typeof data === "object"
}
