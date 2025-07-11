import * as React from "react"
import { isNumber, isType } from "@tolokoban/type-guards"

import {
	type ArrayNumber3,
	type TgdContext,
	TgdControllerCameraOrbit,
	type TgdFormatGltfNode,
	TgdPainterClear,
	TgdPainterState,
	type TgdDataGlb,
	TgdTransfo,
	type TgdTransfoOptions,
	TgdVec3,
	TgdVec4,
	webglPresetDepth,
	tgdMakeMeshGlbPainter,
} from "@tolokoban/tgd"

import Styles from "./ActionNodeRender.module.css"
import Tgd from "@/components/demo/Tgd"

export type ViewActionNodeRenderProps = {
	data: TgdDataGlb
	node: TgdFormatGltfNode
}

export function ViewActionNodeRender({
	data,
	node,
}: ViewActionNodeRenderProps): JSX.Element {
	const handleReady = useReadyHandler(data, node)
	return (
		<div className={Styles.actionNodeRender}>
			<Tgd
				key={JSON.stringify(node)}
				onReady={handleReady}
				width="100%"
				height="100%"
				gizmo
				noBorder
				options={{
					depth: true,
					antialias: true,
				}}
			/>
		</div>
	)
}

function useReadyHandler(data: TgdDataGlb, node: TgdFormatGltfNode) {
	return React.useCallback(
		(context: TgdContext) => {
			const bbox = computeBBox(data, node)
			console.log("🚀 [ActionNodeRender] bbox =", bbox) // @FIXME: Remove this line written on 2025-07-08 at 10:13
			context.camera.transfo.position = bbox.center
			context.camera.transfo.distance = bbox.radius * 2
			context.camera.far = bbox.radius * 3
			context.camera.near = Math.min(1, context.camera.far / 100000)
			console.log("🚀 [ActionNodeRender] context.camera =", context.camera) // @FIXME: Remove this line written on 2025-07-07 at 14:58
			new TgdControllerCameraOrbit(context, {
				inertiaOrbit: 1000,
				speedZoom: bbox.radius * 0.25,
			})
			const clear = new TgdPainterClear(context, {
				color: [0.2, 0.2, 0.2, 1],
				depth: 1,
			})
			const { painter: nodePainter } = tgdMakeMeshGlbPainter({
				data,
				node,
				context,
			})
			nodePainter.debug("nodePainter")
			const state = new TgdPainterState(context, {
				depth: webglPresetDepth.lessOrEqual,
				children: [nodePainter],
			})
			context.add(clear, state)
			context.paint()
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
	if (isNumber(node.mesh))
		bboxes.push(averageBBoxes(computeMeshBBox(data, node.mesh)))
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
		const attribute = primitive.attributes.POSITION
		if (!attribute) continue

		const { min, max } = isNumber(attribute)
			? data.getAccessor(attribute)
			: attribute
		if (isVec3(min) && isVec3(max)) {
			const [minX, minY, minZ] = min
			const [maxX, maxY, maxZ] = max
			bboxes.push({
				center: TgdVec3.newFromMix([minX, minY, minZ], [maxX, maxY, maxZ]),
				radius: Math.max(
					Math.abs(maxX - minX),
					Math.abs(maxY - minY),
					Math.abs(maxZ - minZ),
				),
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
	let x = 0
	let y = 0
	let z = 0
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
		newRadius = Math.max(
			newRadius,
			radius + TgdVec3.distance(newCenter, new TgdVec3(center)),
		)
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
