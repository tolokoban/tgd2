import { TgdGeometry } from "@tgd/geometry"
import { TgdMaterial } from "@tgd/material"
import { TgdTransfo } from "@tgd/math"

export interface TgdMesh {
    /**
     * Can be used for object picking.
     */
    id?: number
    /**
     * If `geometry` is missing, the mesh is not painted, but its children are.
     */
    geometry?: TgdGeometry
    /**
     * If `material` is missing, the one of the closest ancestor is used.
     * If there is none, the mesh is not painted, but its children are.
     */
    material?: TgdMaterial
    /**
     * Transformation relative to the parent mesh, if any.
     */
    transfo: TgdTransfo
    /**
     * Paint this mesh and its children only if `visible` is true.
     */
    visible: boolean
    /**
     * Children are painted after their parent,
     * and their `transfo` is local to the parent's one.
     */
    children?: TgdMesh[]
}
