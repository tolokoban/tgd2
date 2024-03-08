import { TgdContext } from "@tgd/context"
import { TgdDataset } from "@tgd/dataset"
import { TgdPainter } from "@tgd/painter/painter"
import { TgdProgram } from "@tgd/types"
import { TgdVertexArray } from "@tgd/vao"
import { TgdParserGLTransfertFormatBinary } from "@tgd/parser"
import { TgdVec3, TgdVec4 } from "@tgd/math"
import {
    TgdMaterial,
    TgdMaterialDiffuse,
    TgdMaterialGhost,
    TgdMaterialNormals,
} from "@tgd/material"

import { TgdShaderVertex } from "@tgd/shader/vertex"
import { TgdShaderFragment } from "@tgd/shader/fragment"

export interface TgdPainterMeshGltfOptions {
    asset: TgdParserGLTransfertFormatBinary
    meshIndex: number
    primitiveIndex?: number
}

/**
 */
export class TgdPainterMeshGltf extends TgdPainter {
    private readonly prg: TgdProgram
    private readonly vao: TgdVertexArray
    private readonly elementsType: number
    private readonly elementsCount: number
    private readonly dataset: TgdDataset
    private readonly material: TgdMaterial
    private bboxMin: TgdVec3 | null = null
    private bboxMax: TgdVec3 | null = null

    constructor(
        private readonly context: TgdContext,
        options: TgdPainterMeshGltfOptions
    ) {
        super()
        const { asset, meshIndex, primitiveIndex = 0 } = options
        const color = figureColor(asset, meshIndex, primitiveIndex, context)
        const material = new TgdMaterialDiffuse({
            color,
        })
        // const material = new TgdMaterialNormals()
        // const material = new TgdMaterialGhost()
        this.material = material
        const vert = new TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                ...material.uniforms,
            },
            attributes: {
                POSITION: "vec4",
                NORMAL: "vec3",
                TEXCOORD_0: "vec2",
            },
            varying: material.varyings,
            functions: {
                "void applyMaterial()": material.vertexShaderCode,
            },
            mainCode: [
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * POSITION;",
                "applyMaterial();",
            ],
        }).code
        const frag = new TgdShaderFragment({
            uniforms: material.uniforms,
            outputs: { FragColor: "vec4" },
            varying: material.varyings,
            functions: {
                "vec4 applyMaterial()": material.fragmentShaderCode,
            },
            mainCode: [`FragColor = applyMaterial();`],
        }).code
        console.log("🚀 [gltf] vert = ", vert) // @FIXME: Remove this line written on 2024-03-08 at 22:04
        console.log("🚀 [gltf] frag = ", frag) // @FIXME: Remove this line written on 2024-03-08 at 22:04
        const prg = context.programs.create({
            vert,
            frag,
        })
        // const vec3 SHIFT = vec3(1.0, 1.0, 1.0);
        // vec3 normal = normalize(varNormal);
        // vec3 color = (normal + SHIFT) * 0.5;
        // return vec4(color, 1.0);
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
            TEXCOORD_0: "vec2",
        })
        this.dataset = dataset
        asset.setAttrib(dataset, "POSITION", meshIndex, primitiveIndex)
        asset.setAttrib(dataset, "NORMAL", meshIndex, primitiveIndex)
        asset.setAttrib(dataset, "TEXCOORD_0", meshIndex, primitiveIndex)
        const { elemType, elemData, elemCount } = asset.getMeshPrimitiveIndices(
            meshIndex,
            primitiveIndex
        )
        this.prg = prg
        this.vao = context.createVAO(prg, [dataset], elemData)
        this.elementsType = elemType
        this.elementsCount = elemCount
    }

    computeBoundingBox(): {
        min: Readonly<TgdVec3>
        max: Readonly<TgdVec3>
    } {
        if (this.bboxMin && this.bboxMax) {
            return {
                min: this.bboxMin,
                max: this.bboxMax,
            }
        }

        const { dataset } = this
        const { get } = dataset.getAttribAccessor("POSITION")
        const min = new TgdVec3(get(0, 0), get(0, 1), get(0, 2))
        const max = new TgdVec3(min)
        for (let index = 1; index < dataset.count; index++) {
            const x = get(index, 0)
            const y = get(index, 1)
            const z = get(index, 2)
            min.x = Math.min(min.x, x)
            max.x = Math.max(max.x, x)
            min.y = Math.min(min.y, y)
            max.y = Math.max(max.y, y)
            min.z = Math.min(min.z, z)
            max.z = Math.max(max.z, z)
        }
        this.bboxMin = min
        this.bboxMax = max
        return { min, max }
    }

    public readonly paint = () => {
        const { context, prg, material } = this
        const { gl, camera } = context
        gl.enable(gl.CULL_FACE)
        gl.cullFace(gl.BACK)
        prg.use()
        material.setUniforms(prg)
        prg.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        prg.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        this.vao.bind()
        gl.drawElements(gl.TRIANGLES, this.elementsCount, this.elementsType, 0)
        this.vao.unbind()
    }

    delete(): void {
        this.vao.delete()
    }
}

const DEFAULT_COLOR = new TgdVec4(0.8, 0.8, 0.8, 1)

function figureColor(
    asset: TgdParserGLTransfertFormatBinary,
    meshIndex: number,
    primitiveIndex: number,
    context: TgdContext
) {
    const primitive = asset.getMeshPrimitive(meshIndex, primitiveIndex)
    const materialIndex = primitive.material ?? 0
    const pbr = asset.getMaterial(materialIndex).pbrMetallicRoughness
    if (!pbr) return DEFAULT_COLOR

    if (pbr.baseColorTexture) {
        const textureIndex =
            asset.getMaterial(materialIndex).pbrMetallicRoughness
                ?.baseColorTexture?.index
        console.log(
            "🚀 [gltf] materialIndex, asset.getMaterial(materialIndex) = ",
            materialIndex,
            asset.getMaterial(materialIndex)
        ) // @FIXME: Remove this line written on 2024-03-08 at 23:28
        const textureOptions = asset.getTexture2DOptions(textureIndex ?? 0)
        const color = context.textures2D.create(textureOptions)
        return color
    }
    if (pbr.baseColorFactor) {
        return new TgdVec4(...pbr.baseColorFactor)
    }
    return DEFAULT_COLOR
}
