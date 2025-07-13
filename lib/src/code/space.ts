import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Transform a vertex coords from world space to camera space.
 */
export function tgdCodeFunction_vertexFromWorldToCamera({
    name = "vertexFromWorldToCamera",
    uniModelViewMatrix = "uniModelViewMatrix",
}: {
    name?: string
    uniModelViewMatrix?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec4 ${name}(vec4 vertex) {
    return ${uniModelViewMatrix} * vertex;
}
`,
    }
}

/**
 * Transform a mormal coords from world space to camera space.
 */
export function tgdCodeFunction_normalFromWorldToCamera({
    name = "normalFromWorldToCamera",
    uniModelViewMatrix = "uniModelViewMatrix",
}: {
    name?: string
    uniModelViewMatrix?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec3 ${name}(vec3 normal) {
    return mat3(${uniModelViewMatrix}) * normal;
}
`,
    }
}

/**
 * Transform a vertex coords from world space to camera space.
 */
export function tgdCodeFunction_vertexFromWorldToScreen({
    name = "vertexFromWorldToScreen",
    uniModelViewMatrix = "uniModelViewMatrix",
    uniProjectionMatrix = "uniProjectionMatrix",
}: {
    name?: string
    uniModelViewMatrix?: string
    uniProjectionMatrix?: string
} = {}): TgdCodeFunctions {
    return {
        [name]: `vec4 ${name}(vec4 vertex) {
    return ${uniProjectionMatrix} * ${uniModelViewMatrix} * vertex;
}
`,
    }
}
