import { TgdCodeBloc } from "@tgd/shader"

interface TgdUniformBufferObjectItem {
    typ: keyof Mapping
    dim?: number
}

interface Mapping {
    sampler2D: number
    sampler2DArray: number
    sampler3D: number
    samplerCube: number
    bool: number
    int: number
    uint: number
    float: number
    double: number
    vec2: number
    bvec2: number
    ivec2: number
    uvec2: number
    dvec2: number
    vec3: number
    bvec3: number
    ivec3: number
    uvec3: number
    dvec3: number
    vec4: number
    bvec4: number
    ivec4: number
    uvec4: number
    dvec4: number
    mat2: number
    mat3: number
    mat4: number
}

type Values<D extends Record<string, TgdUniformBufferObjectItem>> = {
    [key in keyof D]: D[key]["dim"] extends number
        ? Array<Mapping[D[key]["typ"]]>
        : Mapping[D[key]["typ"]]
}

export class TgdUniformBufferObject<
    D extends Record<string, TgdUniformBufferObjectItem>
> {
    private readonly data: ArrayBuffer
    public readonly values = {} as Values<D>

    constructor(private readonly def: D) {
        let offset = 0
        for (const name of Object.keys(def)) {
            const { modulo, length } = getLayout(def[name])
            // Word alignment.
            while (offset % modulo !== 0) offset++
            const dim = def[name].dim ?? 1
            if (dim < 1) {
                throw Error(
                    `Dimension of uniform "${name}" must be at least 1!`
                )
            }
            offset += length * dim
        }
        this.data = new ArrayBuffer(4 * Math.ceil(offset / 4))
        const view = new DataView(this.data)
        offset = 0
        for (const name of Object.keys(def)) {
            offset = makeAccessor(this.values, name, def[name], view, offset)
        }
    }

    glsl({
        blockName,
        instanceName,
    }: {
        blockName: string
        instanceName?: string
    }): TgdCodeBloc {
        return [
            `layout(std140) uniform ${blockName} {`,
            instanceName ? `} ${instanceName};` : "};",
        ]
    }
}

const LAYOUTS: Record<keyof Mapping, { modulo: number; length: number }> = {
    sampler2D: { modulo: 1, length: 1 },
    sampler2DArray: { modulo: 1, length: 1 },
    sampler3D: { modulo: 1, length: 1 },
    samplerCube: { modulo: 1, length: 1 },
    bool: { modulo: 1, length: 1 },
    int: { modulo: 1, length: 1 },
    uint: { modulo: 1, length: 1 },
    float: { modulo: 1, length: 1 },
    double: { modulo: 2, length: 2 },
    vec2: { modulo: 2, length: 2 },
    bvec2: { modulo: 2, length: 2 },
    ivec2: { modulo: 2, length: 2 },
    uvec2: { modulo: 2, length: 2 },
    dvec2: { modulo: 2, length: 2 },
    vec3: { modulo: 4, length: 3 },
    bvec3: { modulo: 4, length: 3 },
    ivec3: { modulo: 4, length: 3 },
    uvec3: { modulo: 4, length: 3 },
    dvec3: { modulo: 4, length: 3 },
    vec4: { modulo: 4, length: 4 },
    bvec4: { modulo: 4, length: 4 },
    ivec4: { modulo: 4, length: 4 },
    uvec4: { modulo: 4, length: 4 },
    dvec4: { modulo: 4, length: 4 },
    mat2: { modulo: 4, length: 8 },
    mat3: { modulo: 4, length: 12 },
    mat4: { modulo: 4, length: 16 },
}

function getLayout(def: TgdUniformBufferObjectItem) {
    return LAYOUTS[def.typ]
}

function makeAccessor<D extends Record<string, TgdUniformBufferObjectItem>>(
    values: Values<D>,
    name: string,
    def: TgdUniformBufferObjectItem,
    view: DataView<ArrayBuffer>,
    offset: number
): number {
    const { modulo, length } = getLayout(def)
    const { typ } = def
    const dim = def.dim ?? 1
    // Word alignment.
    while (offset % modulo !== 0) offset++
    switch (typ) {
        case "sampler2D":
        case "sampler2DArray":
        case "sampler3D":
        case "samplerCube":
        case "bool":
        case "int":
        case "uint":
            if (dim === 1) {
                Object.defineProperty(values, name, {
                    set(v: number) {},
                })
            } else {
                Object.defineProperty(values, name, {
                    set(v: number) {},
                })
            }
    }
}
