export interface TgdAttribute {
    type: "float"
    dimension: number
    divisor: number
}

interface TgdAttributeDefinition {
    dimension: number
    divisor: number
    bytesPerElement: number
    getter(view: DataView, byteOffset: number): number
    setter(view: DataView, byteOffset: number, value: number): void
}

export class TgdAttributes<
    T extends { [key: string]: Partial<TgdAttribute> | number }
> {
    public readonly stride: number
    private buffer: ArrayBuffer | undefined = undefined
    private readonly data: { [key: string]: ArrayBufferLike } = {}
    private readonly definitions: { [key: string]: TgdAttributeDefinition }

    constructor(def: T) {
        let stride = 0
        const data: { [key: string]: ArrayBuffer } = {}
        const definitions: { [key: string]: TgdAttributeDefinition } = {}
        for (const key of Object.keys(def)) {
            data[key] = new ArrayBuffer(0)
            const dataDef: TgdAttributeDefinition = makeDataDefinition(def[key])
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

    sendToArrayBuffer(
        gl: WebGL2RenderingContext,
        buffer: WebGLBuffer,
        verticesCount: number,
        dynamic: boolean
    ) {
        const data = this.get(verticesCount)
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            data,
            dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW
        )
        return data
    }

    define(gl: WebGL2RenderingContext, prg: WebGLProgram) {
        let offsetDestination = 0
        const { definitions } = this
        for (const name of Object.keys(definitions)) {
            const def = definitions[name]
            const att = gl.getAttribLocation(prg, name)
            if (att < 0) {
                throw Error(makeNotFoundAttributeError(name, gl, prg))
            }
            console.log(name, att)
            gl.enableVertexAttribArray(att)
            gl.vertexAttribPointer(
                att,
                def.dimension,
                gl.FLOAT,
                false,
                this.stride,
                offsetDestination
            )
            gl.vertexAttribDivisor(att, def.divisor)
            const bytes = def.dimension * def.bytesPerElement
            offsetDestination += bytes
        }
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

function makeDataDefinition(
    attribute: Partial<TgdAttribute> | number
): TgdAttributeDefinition {
    const dataDef: TgdAttribute =
        typeof attribute === "number"
            ? {
                  dimension: attribute,
                  type: "float",
                  divisor: 0,
              }
            : {
                  type: "float",
                  dimension: 1,
                  divisor: 0,
                  ...attribute,
              }

    switch (dataDef.type) {
        case "float":
            return makeDataDefinitionFloat(dataDef)
        default:
            throw Error(
                `Unable to create a Data for an attribute of type "${dataDef.type}"!`
            )
    }
}

function makeDataDefinitionFloat(
    dataDef: TgdAttribute
): TgdAttributeDefinition {
    const bytesPerElement = Float32Array.BYTES_PER_ELEMENT
    return {
        dimension: dataDef.dimension,
        divisor: dataDef.divisor,
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

function makeNotFoundAttributeError(
    name: string,
    gl: WebGL2RenderingContext,
    prg: WebGLProgram
): string {
    return `Unable to find atribute "${name}"!`
}
