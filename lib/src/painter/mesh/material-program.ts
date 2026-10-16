import type { TgdContext } from "@tgd/context"
import type { TgdMaterial } from "@tgd/material"
import { TgdProgram } from "@tgd/program"
import type { TgdCodeVariables } from "@tgd/shader"
import { TgdShaderFragment, TgdShaderVertex } from "@tgd/shader"
import type { WebglUniformType } from "@tgd/types"
import type { TgdUniformBufferObjectCamera } from "@tgd/uniform"
import { ensureArray } from "@tgd/utils"

/**
 * Names of the attributes a geometry provides to a material.
 */
export interface TgdMaterialProgramAttributes {
    attPosition: string
    attNormal: string
    attTangent: string
    attUV: string
}

/**
 * Create the program that paints a geometry with a material.
 *
 * The vertex shader expects the uniforms `uniTransfoMatrix`, `uniModelViewMatrix`
 * and `uniProjectionMatrix`. The last two come from `uniformCamera` if it is defined.
 * Both shaders declare `uniMaterial_ScreenSize`, set by `tgdMaterialApplyUniforms()`.
 *
 * Warning: the attribute names of `material` are overwritten with the ones of `attributes`.
 */
export function tgdMaterialCreateProgram(
    gl: WebGL2RenderingContext,
    material: TgdMaterial,
    attributes: TgdMaterialProgramAttributes,
    uniformCamera?: TgdUniformBufferObjectCamera,
): TgdProgram {
    const { attPosition, attNormal, attTangent, attUV } = attributes
    material.attPosition = attPosition
    material.attNormal = attNormal
    material.attTangent = attTangent
    material.attUV = attUV
    const uniforms: TgdCodeVariables<WebglUniformType> = {
        uniTransfoMatrix: "mat4",
        uniMaterial_ScreenSize: "vec2",
        ...removeDuplicatedUniforms(material.uniforms, uniformCamera),
    }
    if (!uniformCamera) {
        uniforms.uniModelViewMatrix = "mat4"
        uniforms.uniProjectionMatrix = "mat4"
    }
    const vert = new TgdShaderVertex({
        uniforms,
        header: uniformCamera?.toShaderCode("uniformCamera"),
        attributes: {
            [attPosition]: "vec4",
            [attNormal]: "vec3",
            // `w` is the handedness of the TBN basis: bitangent = cross(normal, tangent.xyz) * tangent.w
            [attTangent]: "vec4",
            [attUV]: "vec2",
        },
        varying: material.varyings,
        functions: {
            ...material.extraVertexShaderFunctions,
            getPosition: ["vec4 getPosition(vec4 pos) {", [material.vertexShaderCodeForGetPosition ?? "return pos;"], "}"],
            applyMaterial: [
                "void applyMaterial(vec3 position, vec3 normal, vec2 uv) {",
                [material.vertexShaderCode],
                "}",
            ],
        },
        mainCode: [
            `vec4 position = getPosition(${attPosition});`,
            "gl_Position = uniProjectionMatrix * uniModelViewMatrix * uniTransfoMatrix * position;",
            `applyMaterial(position.xyz, ${attNormal}.xyz, ${attUV}.xy);`,
        ],
    })
    const frag = new TgdShaderFragment({
        header: [
            ...ensureArray(material.fragmentShaderHeader),
            ...ensureArray(uniformCamera?.toShaderCode("uniformCamera")),
        ],
        uniforms: {
            uniMaterial_ScreenSize: "vec2",
            ...removeDuplicatedUniforms(material.uniforms, uniformCamera),
        },
        outputs: { FragColor: "vec4" },
        varying: material.varyings,
        functions: {
            ...material.extraFragmentShaderFunctions,
            applyMaterial: ["vec4 applyMaterial() {", [material.fragmentShaderCode], "}"],
        },
        mainCode: ["FragColor = applyMaterial();"],
    })
    if (material.debug) {
        vert.debug()
        frag.debug()
    }
    const prg = new TgdProgram(gl, {
        vert: vert.code,
        frag: frag.code,
    })
    if (uniformCamera) {
        uniformCamera.bindToProgram(prg, "uniformCamera")
    }
    return prg
}

/**
 * Set `uniMaterial_ScreenSize`, call `material.setUniforms()`
 * and activate the material's textures.
 * The program must already be in use.
 */
export function tgdMaterialApplyUniforms(
    material: TgdMaterial,
    context: TgdContext,
    program: TgdProgram,
    time: number,
    delta: number,
) {
    if (program.hasUniform("uniMaterial_ScreenSize")) {
        program.uniform2f("uniMaterial_ScreenSize", context.width, context.height)
    }
    material.setUniforms?.({ context, program, time, delta })
    const { textures } = material
    const samplerNames = Object.keys(textures)
    for (let unit = 0; unit < samplerNames.length; unit++) {
        const uniformName = samplerNames[unit]
        const texture = textures[uniformName]
        texture.activate(unit, program, uniformName)
    }
}

function removeDuplicatedUniforms(
    uniforms: { [name: string]: WebglUniformType },
    uniformCamera: TgdUniformBufferObjectCamera | undefined,
): TgdCodeVariables<WebglUniformType> | undefined {
    const copy = structuredClone(uniforms)
    for (const name of uniformCamera?.names ?? []) {
        delete copy[name]
    }
    return copy
}
