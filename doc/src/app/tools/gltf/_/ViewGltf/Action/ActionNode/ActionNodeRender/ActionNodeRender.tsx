import * as React from "react"

import {
    ArrayNumber3,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFormatGltfNode,
    TgdPainterClear,
    TgdPainterState,
    TgdDataGlb,
    TgdTransfo,
    TgdTransfoOptions,
    TgdVec3,
    TgdVec4,
    webglPresetDepth,
    tgdMakeMeshGlbPainter,
    TgdTextureCube,
    tgdLoadImage,
    tgdCanvasCreateFill,
    TgdPainterSkybox,
    tgdCalcRadToDeg,
    tgdCalcDegToRad,
    TgdQuat,
} from "@tolokoban/tgd"
import Tgd from "@/components/demo/Tgd"
import { isNumber, isType } from "@tolokoban/type-guards"

import PosX from "@/assets/cubemap/sky/contrast/posX.webp"
import PosY from "@/assets/cubemap/sky/contrast/posY.webp"
import PosZ from "@/assets/cubemap/sky/contrast/posZ.webp"
import NegX from "@/assets/cubemap/sky/contrast/negX.webp"
import NegY from "@/assets/cubemap/sky/contrast/negY.webp"
import NegZ from "@/assets/cubemap/sky/contrast/negZ.webp"

import Styles from "./ActionNodeRender.module.css"
import { PainterPlayPause } from "@/painter/play-pause"

export type ViewActionNodeRenderProps = {
    data: TgdDataGlb
    node: TgdFormatGltfNode
}

export function ViewActionNodeRender({ data, node }: ViewActionNodeRenderProps) {
    const handleReady = useReadyHandler(data, node)
    return (
        <div className={Styles.actionNodeRender}>
            <Tgd
                key={JSON.stringify(node)}
                onReady={handleReady}
                options={{ alpha: false }}
                width="100%"
                height="100%"
                gizmo
                noBorder
            />
        </div>
    )
}

function useReadyHandler(data: TgdDataGlb, node: TgdFormatGltfNode) {
    return React.useCallback(
        (context: TgdContext) => {
            const action = async () => {
                const bbox = computeBBox(data, node)
                const { camera } = context
                camera.transfo.position = bbox.center
                camera.far = bbox.radius * 4
                camera.near = context.camera.far * 1e-4
                camera.fitSpaceAtTarget(bbox.radius, bbox.radius)
                new TgdControllerCameraOrbit(context, {
                    inertiaOrbit: 1000,
                    speedZoom: bbox.radius * 0.25,
                })
                const clear = new TgdPainterClear(context, {
                    // color: [0.2, 0.2, 0.2, 1],
                    depth: 1,
                })
                const defaultCanvas = tgdCanvasCreateFill(1, 1, [0.3, 0.6, 0.9, 1])
                const imagePosX = (await tgdLoadImage(PosX)) ?? defaultCanvas
                const imagePosY = (await tgdLoadImage(PosY)) ?? defaultCanvas
                const imagePosZ = (await tgdLoadImage(PosZ)) ?? defaultCanvas
                const imageNegX = (await tgdLoadImage(NegX)) ?? defaultCanvas
                const imageNegY = (await tgdLoadImage(NegY)) ?? defaultCanvas
                const imageNegZ = (await tgdLoadImage(NegZ)) ?? defaultCanvas
                const skybox = new TgdTextureCube(context, {
                    imagePosX,
                    imagePosY,
                    imagePosZ,
                    imageNegX,
                    imageNegY,
                    imageNegZ,
                })

                const { painter: nodePainter } = tgdMakeMeshGlbPainter({
                    data,
                    node,
                    context,
                    skybox,
                })
                nodePainter.debug("nodePainter")
                const state = new TgdPainterState(context, {
                    depth: webglPresetDepth.lessOrEqual,
                    children: [nodePainter],
                })
                const button = new PainterPlayPause(context, {
                    alignX: +1,
                    alignY: -1,
                    margin: 8,
                    size: 64,
                })
                const initialOrientation = new TgdQuat(nodePainter.transfo.orientation)
                context.add(
                    new TgdPainterSkybox(context, {
                        camera: context.camera,
                        texture: {
                            imagePosX,
                            imagePosY,
                            imagePosZ,
                            imageNegX,
                            imageNegY,
                            imageNegZ,
                        },
                    }),
                    clear,
                    state,
                    button,
                    () => {
                        const orientation = new TgdQuat(initialOrientation)
                        const rotation = new TgdQuat()
                        rotation.rotateAroundY(tgdCalcDegToRad(context.virtualTime.seconds * 15))
                        rotation.multiply(orientation)
                        nodePainter.transfo.orientation = rotation
                    },
                )
                context.paint()
            }
            action()
        },
        [data, node],
    )
}

interface BBox {
    center: TgdVec3
    radius: number
}

function computeBBox(data: TgdDataGlb, node: TgdFormatGltfNode): BBox {
    const bboxes: BBox[] = []
    if (isNumber(node.mesh)) bboxes.push(averageBBoxes(computeMeshBBox(data, node.mesh)))
    for (const nodeIndex of node.children ?? []) {
        const childNode = data.getNode(nodeIndex)
        bboxes.push(computeBBox(data, childNode))
    }
    return applyTransfo(averageBBoxes(bboxes), node)
}

function computeMeshBBox(data: TgdDataGlb, meshIndex: number): BBox[] {
    const mesh = data.getMesh(meshIndex)
    if (!mesh) {
        return [
            {
                center: new TgdVec3(),
                radius: 1,
            },
        ]
    }

    const bboxes: BBox[] = []
    for (const primitive of mesh.primitives) {
        const accessor = data.getAccessorByAttributeName(primitive, "POSITION")
        if (isVec3(accessor.min) && isVec3(accessor.max)) {
            const [minX, minY, minZ] = accessor.min
            const [maxX, maxY, maxZ] = accessor.max
            bboxes.push({
                center: TgdVec3.newFromMix(accessor.min, accessor.max),
                radius: Math.max(Math.abs(maxX - minX), Math.abs(maxY - minY), Math.abs(maxZ - minZ)),
            })
        }
    }

    return bboxes
}

function isVec3(data: unknown): data is ArrayNumber3 {
    return isType(data, ["array", "number", { min: 3, max: 3 }])
}

function averageBBoxes(bboxes: BBox[]): BBox {
    if (bboxes.length === 0)
        return {
            center: new TgdVec3(),
            radius: 1,
        }
    let x: number = 0
    let y: number = 0
    let z: number = 0
    for (const { center } of bboxes) {
        const [xx, yy, zz] = center
        x += xx
        y += yy
        z += zz
    }
    const count = bboxes.length
    x /= count
    y /= count
    z /= count
    const newCenter = new TgdVec3(x, y, z)
    let newRadius = 0
    for (const { center, radius } of bboxes) {
        newRadius = Math.max(newRadius, radius + TgdVec3.distance(newCenter, new TgdVec3(center)))
    }
    return {
        center: newCenter,
        radius: newRadius,
    }
}

function applyTransfo(bbox: BBox, node: TgdFormatGltfNode): BBox {
    const [x, y, z] = bbox.center
    const center = new TgdVec4(x, y, z, 1)
    const transfoOptions: Partial<TgdTransfoOptions> = {}
    if (node.translation) transfoOptions.position = node.translation
    if (node.rotation) transfoOptions.orientation = node.rotation
    if (node.scale) transfoOptions.scale = node.scale
    const transfo = new TgdTransfo(transfoOptions)
    center.applyMatrix(transfo.matrix)
    const [sx, sy, sz] = transfo.scale
    const s = Math.max(sx, sy, sz)
    return {
        center: new TgdVec3(center.x, center.y, center.z),
        radius: bbox.radius * s,
    }
}
