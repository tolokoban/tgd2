import { type TgdMat2, type TgdMat3, type TgdMat4, TgdVec2, TgdVec3, TgdVec4 } from "@tgd/math"
import { TgdProgram } from "@tgd/program"
import { tgdCodeStringify, type TgdCodeBloc } from "@tgd/shader"
import type { TgdContext } from "./../context/context"
import { TgdConsole } from "@tgd/debug"

type UniformBufferObjectType =
    | "bool"
    | "int"
    | "uint"
    | "float"
    | "double"
    | "vec2"
    | "bvec2"
    | "ivec2"
    | "uvec2"
    | "dvec2"
    | "vec3"
    | "bvec3"
    | "ivec3"
    | "uvec3"
    | "dvec3"
    | "vec4"
    | "bvec4"
    | "ivec4"
    | "uvec4"
    | "dvec4"
    | "mat2"
    | "mat3"
    | "mat4"

export interface TgdUniformBufferObjectOptions<
    S extends string = string,
    T extends Record<S, UniformBufferObjectType> = Record<S, UniformBufferObjectType>,
> {
    uniforms: T
    values?: Partial<{
        [key in keyof T]: Values[T[key]]
    }>
}

export class TgdUniformBufferObject<
    S extends string = string,
    T extends Record<S, UniformBufferObjectType> = Record<S, UniformBufferObjectType>,
> {
    public readonly bindingPoint: number
    public readonly values = {} as {
        [key in S]: Values[T[key]]
    }

    private readonly data: ArrayBuffer
    private readonly view: DataView
    private readonly uniforms: T
    private readonly buffer: WebGLBuffer
    private dirty = true

    constructor(
        public readonly context: TgdContext,
        { uniforms, values }: TgdUniformBufferObjectOptions<S, T>,
    ) {
        this.bindingPoint = context.uniformBufferObjects.add(this)
        this.uniforms = uniforms
        // Offset in floats (not bytes).
        let offsetInFloats = 0
        for (const name of Object.keys(uniforms) as S[]) {
            const type = uniforms[name]
            const { modulo, length } = LAYOUTS[type]
            // Word alignment.
            while (offsetInFloats % modulo !== 0) offsetInFloats++
            this.makeAccessor(name, type, offsetInFloats)
            offsetInFloats += length
        }
        const bytesLength = Float32Array.BYTES_PER_ELEMENT * 4 * Math.ceil(offsetInFloats / 4)
        this.data = new ArrayBuffer(bytesLength)
        this.view = new DataView(this.data)
        if (values) {
            const keys = Object.keys(values) as S[]
            for (const key of keys) {
                const val = values[key]
                if (val === undefined) continue

                this.values[key] = val
            }
        }
        const { gl } = context
        this.buffer = gl.createBuffer()
        gl.bindBufferBase(gl.UNIFORM_BUFFER, this.bindingPoint, this.buffer)
        gl.bufferData(gl.UNIFORM_BUFFER, this.data.byteLength, gl.DYNAMIC_DRAW)
        context.checkError("TgdUniformBufferObject")
    }

    get names() {
        return Object.keys(this.uniforms)
    }

    delete() {
        const { context } = this
        context.uniformBufferObjects.remove(this)
        const { gl } = context
        gl.deleteBuffer(this.buffer)
    }

    bindToProgram(program: TgdProgram | WebGLProgram, blockName: string) {
        const { gl } = this.context
        const glPrg = program instanceof TgdProgram ? program.program : program
        gl.uniformBlockBinding(glPrg, gl.getUniformBlockIndex(glPrg, blockName), this.bindingPoint)
    }

    updateData() {
        if (!this.dirty) return

        const { data } = this
        const { gl } = this.context
        gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer)
        gl.bufferSubData(gl.UNIFORM_BUFFER, 0, data)
        this.dirty = false
    }

    toShaderCode(blockName: string, instanceName?: string): TgdCodeBloc {
        const { uniforms } = this
        return [
            `/* Binding point: ${this.bindingPoint} */`,
            `layout(std140) uniform ${blockName} {`,
            (Object.keys(uniforms) as S[]).map((key) => `${uniforms[key]} ${key};`),
            instanceName ? `} ${instanceName};` : "};",
        ]
    }

    debug(caption?: string) {
        const out = new TgdConsole({ text: caption ?? "TgdUniformBufferObject", bold: true })
        out.add(tgdCodeStringify(this.toShaderCode("myUniformBlock")))
        const array = new Float32Array(this.data)
        for (let i = 0; i < array.length; i++) {
            if (i % 4 === 0) out.nl()
            out.add(`${array[i]}`.slice(0, 8).padStart(10, " "))
        }
        out.nl()
        out.debug()
    }

    private makeAccessor(name: string, type: string, offsetInFloats: number) {
        const { values } = this
        const byteOffset = offsetInFloats * 4
        switch (type) {
            case "bool":
                Object.defineProperty(values, name, {
                    set: (value: boolean) => {
                        this.view.setUint8(byteOffset, value ? 1 : 0)
                        this.dirty = true
                    },
                    get: () => this.view.getUint8(byteOffset) !== 0,
                })
                break
            case "int":
                Object.defineProperty(values, name, {
                    set: (value: number) => {
                        this.view.setInt32(byteOffset, value, true)
                        this.dirty = true
                    },
                    get: () => this.view.getInt32(byteOffset, true),
                })
                break
            case "uint":
                Object.defineProperty(values, name, {
                    set: (value: number) => {
                        this.view.setUint32(byteOffset, value, true)
                        this.dirty = true
                    },
                    get: () => this.view.getUint32(byteOffset, true),
                })
                break
            case "float":
                Object.defineProperty(values, name, {
                    set: (value: number) => {
                        this.view.setFloat32(byteOffset, value, true)
                        this.dirty = true
                    },
                    get: () => this.view.getFloat32(byteOffset, true),
                })
                break
            case "double":
                Object.defineProperty(values, name, {
                    set: (value: number) => {
                        this.view.setFloat64(byteOffset, value, true)
                        this.dirty = true
                    },
                    get: () => this.view.getFloat64(byteOffset, true),
                })
                break
            case "vec2":
                Object.defineProperty(values, name, {
                    set: ([x, y]: TgdVec2) => {
                        this.view.setFloat32(byteOffset, x, true)
                        this.view.setFloat32(byteOffset + 4, y, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec2(this.view.getFloat32(byteOffset, true), this.view.getFloat32(byteOffset + 4, true)),
                })
                break
            case "vec3":
                Object.defineProperty(values, name, {
                    set: ([x, y, z]: TgdVec3) => {
                        this.view.setFloat32(byteOffset, x, true)
                        this.view.setFloat32(byteOffset + 4, y, true)
                        this.view.setFloat32(byteOffset + 8, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec3(
                            this.view.getFloat32(byteOffset, true),
                            this.view.getFloat32(byteOffset + 4, true),
                            this.view.getFloat32(byteOffset + 8, true),
                        ),
                })
                break
            case "vec4":
                Object.defineProperty(values, name, {
                    set: ([x, y, z, w]: TgdVec3) => {
                        this.view.setFloat32(byteOffset, x, true)
                        this.view.setFloat32(byteOffset + 4, y, true)
                        this.view.setFloat32(byteOffset + 8, z, true)
                        this.view.setFloat32(byteOffset + 12, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec4(
                            this.view.getFloat32(byteOffset, true),
                            this.view.getFloat32(byteOffset + 4, true),
                            this.view.getFloat32(byteOffset + 8, true),
                            this.view.getFloat32(byteOffset + 12, true),
                        ),
                })
                break
            case "dvec2":
                Object.defineProperty(values, name, {
                    set: ([x, y]: TgdVec2) => {
                        this.view.setFloat64(byteOffset, x, true)
                        this.view.setFloat64(byteOffset + 4, y, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec2(this.view.getFloat64(byteOffset, true), this.view.getFloat64(byteOffset + 4, true)),
                })
                break
            case "dvec3":
                Object.defineProperty(values, name, {
                    set: ([x, y, z]: TgdVec3) => {
                        this.view.setFloat64(byteOffset, x, true)
                        this.view.setFloat64(byteOffset + 4, y, true)
                        this.view.setFloat64(byteOffset + 8, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec3(
                            this.view.getFloat64(byteOffset, true),
                            this.view.getFloat64(byteOffset + 4, true),
                            this.view.getFloat64(byteOffset + 8, true),
                        ),
                })
                break
            case "dvec4":
                Object.defineProperty(values, name, {
                    set: ([x, y, z, w]: TgdVec3) => {
                        this.view.setFloat64(byteOffset, x, true)
                        this.view.setFloat64(byteOffset + 4, y, true)
                        this.view.setFloat64(byteOffset + 8, z, true)
                        this.view.setFloat64(byteOffset + 12, w, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec4(
                            this.view.getFloat64(byteOffset, true),
                            this.view.getFloat64(byteOffset + 4, true),
                            this.view.getFloat64(byteOffset + 8, true),
                            this.view.getFloat64(byteOffset + 12, true),
                        ),
                })
                break
            case "ivec2":
                Object.defineProperty(values, name, {
                    set: ([x, y]: TgdVec2) => {
                        this.view.setInt32(byteOffset, x, true)
                        this.view.setInt32(byteOffset + 4, y, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec2(this.view.getInt32(byteOffset, true), this.view.getInt32(byteOffset + 4, true)),
                })
                break
            case "ivec3":
                Object.defineProperty(values, name, {
                    set: ([x, y, z]: TgdVec3) => {
                        this.view.setInt32(byteOffset, x, true)
                        this.view.setInt32(byteOffset + 4, y, true)
                        this.view.setInt32(byteOffset + 8, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec3(
                            this.view.getInt32(byteOffset, true),
                            this.view.getInt32(byteOffset + 4, true),
                            this.view.getInt32(byteOffset + 8, true),
                        ),
                })
                break
            case "ivec4":
                Object.defineProperty(values, name, {
                    set: ([x, y, z, w]: TgdVec3) => {
                        this.view.setInt32(byteOffset, x, true)
                        this.view.setInt32(byteOffset + 4, y, true)
                        this.view.setInt32(byteOffset + 8, z, true)
                        this.view.setInt32(byteOffset + 12, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec4(
                            this.view.getInt32(byteOffset, true),
                            this.view.getInt32(byteOffset + 4, true),
                            this.view.getInt32(byteOffset + 8, true),
                            this.view.getInt32(byteOffset + 12, true),
                        ),
                })
                break
            case "uvec2":
                Object.defineProperty(values, name, {
                    set: ([x, y]: TgdVec2) => {
                        this.view.setUint32(byteOffset, x, true)
                        this.view.setUint32(byteOffset + 4, y, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec2(this.view.getUint32(byteOffset, true), this.view.getUint32(byteOffset + 4, true)),
                })
                break
            case "uvec3":
                Object.defineProperty(values, name, {
                    set: ([x, y, z]: TgdVec3) => {
                        this.view.setUint32(byteOffset, x, true)
                        this.view.setUint32(byteOffset + 4, y, true)
                        this.view.setUint32(byteOffset + 8, z, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec3(
                            this.view.getUint32(byteOffset, true),
                            this.view.getUint32(byteOffset + 4, true),
                            this.view.getUint32(byteOffset + 8, true),
                        ),
                })
                break
            case "uvec4":
                Object.defineProperty(values, name, {
                    set: ([x, y, z, w]: TgdVec3) => {
                        this.view.setUint32(byteOffset, x, true)
                        this.view.setUint32(byteOffset + 4, y, true)
                        this.view.setUint32(byteOffset + 8, z, true)
                        this.view.setUint32(byteOffset + 12, w, true)
                        this.dirty = true
                    },
                    get: () =>
                        new TgdVec4(
                            this.view.getUint32(byteOffset, true),
                            this.view.getUint32(byteOffset + 4, true),
                            this.view.getUint32(byteOffset + 8, true),
                            this.view.getUint32(byteOffset + 12, true),
                        ),
                })
                break
            case "mat2":
                Object.defineProperty(values, name, {
                    set: (mat2: TgdMat2) => {
                        let src = 0
                        let dst = byteOffset
                        for (let row = 0; row < 2; row++) {
                            for (let col = 0; col < 2; col++) {
                                this.view.setFloat32(dst, mat2[src++], true)
                                dst += 4
                            }
                            dst += 8
                        }
                        this.dirty = true
                    },
                })
                break
            case "mat3":
                Object.defineProperty(values, name, {
                    set: (mat3: TgdMat4) => {
                        let src = 0
                        let dst = byteOffset
                        for (let row = 0; row < 3; row++) {
                            for (let col = 0; col < 3; col++) {
                                this.view.setFloat32(dst, mat3[src++], true)
                                dst += 4
                            }
                            dst += 4
                        }
                        this.dirty = true
                    },
                })
                break
            case "mat4":
                Object.defineProperty(values, name, {
                    set: (mat4: TgdMat4) => {
                        let src = 0
                        let dst = byteOffset
                        for (let row = 0; row < 4; row++) {
                            for (let col = 0; col < 4; col++) {
                                this.view.setFloat32(dst, mat4[src++], true)
                                dst += 4
                            }
                        }
                        this.dirty = true
                    },
                })
                break
            default:
                throw new Error(`[TgdUniformBufferObject] Type "${type}" has been implemented yet!`)
        }
    }
}

type Values = {
    bool: number
    int: number
    uint: number
    float: number
    double: number
    vec2: Readonly<TgdVec2>
    bvec2: Readonly<TgdVec2>
    ivec2: Readonly<TgdVec2>
    uvec2: Readonly<TgdVec2>
    dvec2: Readonly<TgdVec2>
    vec3: Readonly<TgdVec3>
    bvec3: Readonly<TgdVec3>
    ivec3: Readonly<TgdVec3>
    uvec3: Readonly<TgdVec3>
    dvec3: Readonly<TgdVec3>
    vec4: Readonly<TgdVec4>
    bvec4: Readonly<TgdVec4>
    ivec4: Readonly<TgdVec4>
    uvec4: Readonly<TgdVec4>
    dvec4: Readonly<TgdVec4>
    mat2: Readonly<TgdMat2>
    mat3: Readonly<TgdMat3>
    mat4: Readonly<TgdMat4>
}

/**
 * Modulo is used for the padding necessary with Layout std140.
 * The length is in floats.
 */
const LAYOUTS: Record<UniformBufferObjectType, { modulo: number; length: number; rows: number }> = {
    bool: { modulo: 1, length: 1, rows: 1 },
    int: { modulo: 1, length: 1, rows: 1 },
    uint: { modulo: 1, length: 1, rows: 1 },
    float: { modulo: 1, length: 1, rows: 1 },
    double: { modulo: 2, length: 2, rows: 1 },
    vec2: { modulo: 2, length: 2, rows: 1 },
    bvec2: { modulo: 2, length: 2, rows: 1 },
    ivec2: { modulo: 2, length: 2, rows: 1 },
    uvec2: { modulo: 2, length: 2, rows: 1 },
    dvec2: { modulo: 2, length: 2, rows: 1 },
    vec3: { modulo: 4, length: 3, rows: 1 },
    bvec3: { modulo: 4, length: 3, rows: 1 },
    ivec3: { modulo: 4, length: 3, rows: 1 },
    uvec3: { modulo: 4, length: 3, rows: 1 },
    dvec3: { modulo: 4, length: 3, rows: 1 },
    vec4: { modulo: 4, length: 4, rows: 1 },
    bvec4: { modulo: 4, length: 4, rows: 1 },
    ivec4: { modulo: 4, length: 4, rows: 1 },
    uvec4: { modulo: 4, length: 4, rows: 1 },
    dvec4: { modulo: 4, length: 4, rows: 1 },
    mat2: { modulo: 4, length: 8, rows: 2 },
    mat3: { modulo: 4, length: 12, rows: 3 },
    mat4: { modulo: 4, length: 16, rows: 4 },
}
