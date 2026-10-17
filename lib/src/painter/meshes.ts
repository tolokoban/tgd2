import type { TgdContext } from "@tgd/context"
import { tgdMaterialApplyUniforms, tgdMaterialCreateProgram } from "./mesh/material-program"
import { TgdMeshTree, type TgdMeshTreeBatch } from "./mesh/tree"
import type { TgdMesh } from "./mesh/types"
import { TgdPainter } from "./painter"

export interface TgdPainterMeshesOptions {
    meshes?: TgdMesh[]
}

/**
 * Paint a list of meshes, each with its own geometry, material and transfo.
 *
 * A mesh can have `children`. They are painted after their parent,
 * and their `transfo` is relative to the parent's one.
 * If `visible` is false, neither the mesh nor its children are painted.
 * A mesh without `material` uses the one of its closest ancestor that has one.
 * A mesh without `geometry` (or without any material) is not painted,
 * but its children are. That's useful for grouping meshes.
 *
 * Meshes sharing the same material (and the same attribute names) share the same program.
 * The WebGL state (depth, cull, blend…) is the one defined by each material.
 *
 * The tree is read on every frame, so you can add/remove children at runtime.
 * GPU resources of meshes that are no longer in the tree are released on the next `paint()`.
 *
 * @see {@link TgdPainterMeshesOptions}
 */
export class TgdPainterMeshes extends TgdPainter {
    private readonly tree: TgdMeshTree
    /** Arguments of the current `paint()`, used by `handleBatch()`. */
    private time = 0
    private delta = 0

    constructor(
        public readonly context: TgdContext,
        options: TgdPainterMeshesOptions = {},
    ) {
        super()
        this.tree = new TgdMeshTree(context, {
            meshes: options.meshes,
            createProgram: (geometry, material) => {
                if (!material) throw new Error("[TgdPainterMeshes] A material is required to create a program!")

                return tgdMaterialCreateProgram(context.gl, material, geometry)
            },
        })
    }

    add(mesh: TgdMesh) {
        this.tree.add(mesh)
    }

    /**
     * The GPU resources of the mesh (and its children) will be released on next `paint()`.
     */
    remove(mesh: TgdMesh) {
        this.tree.remove(mesh)
    }

    paint(time: number, delta: number): void {
        this.time = time
        this.delta = delta
        const { tree } = this
        tree.update()
        tree.forEachBatch(this.handleBatch)
    }

    delete() {
        this.tree.delete()
    }

    private readonly handleBatch = (batch: TgdMeshTreeBatch) => {
        const { context, time, delta } = this
        const { camera } = context
        const { program, material } = batch
        if (!material) return

        program.use()
        tgdMaterialApplyUniforms(material, context, program, time, delta)
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView)
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection)
        material.applyState(context, batch.draw)
    }
}
