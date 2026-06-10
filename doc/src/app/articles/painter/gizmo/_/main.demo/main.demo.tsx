import {
	TgdCameraPerspective,
	type TgdContext,
	TgdMaterialDiffuse,
	TgdPainterClear,
	TgdPainterGizmo,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	TgdUniformBufferObjectCamera,
} from "@tolokoban/tgd"
import TextureURL from "@/assets/image/uv-grid-2x2.webp"
import View, { Assets } from "@/components/demo/Tgd"

// #begin
function init(context: TgdContext, assets: Assets) {
	const { camera } = context
	if (camera instanceof TgdCameraPerspective) {
		camera.near = 0.1
		camera.far = 10
	}
	camera.fitSpaceAtTarget(2.2, 2.2)
	const uniformCamera = new TgdUniformBufferObjectCamera(context)
	const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 })
	const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)
	const material = new TgdMaterialDiffuse({
		lockLightsToCamera: true,
		color: texture,
	})
	const meshes: TgdPainterMesh[] = []
	const S = 0.6
	for (const x of [-S, +S]) {
		for (const y of [-S, +S]) {
			for (const z of [-S, +S]) {
				meshes.push(
					new TgdPainterMesh(context, {
						uniformCamera,
						material,
						transfo: {
							position: [x, y, z],
						},
					}),
				)
			}
		}
	}
	const gizmo = new TgdPainterGizmo(context, { size: 128 })
	gizmo.eventTap.addListener((evt) =>
		console.log("🐞 [main.demo@41] evt =", evt),
	)
	context.add(
		clear,
		() => {
			uniformCamera.updateData()
		},
		new TgdPainterState(context, {
			depth: "less",
			cull: "back",
			children: meshes,
		}),
		new TgdPainterState(context, {
			depth: "off",
			blend: "alpha",
			children: [gizmo],
		}),
	)
	context.paint()
	return ({
		size,
		alignY,
		resolution,
	}: {
		size: number
		alignY: number
		resolution: number
	}) => {
		gizmo.size = size
		gizmo.alignY = alignY
		context.resolution = resolution
		context.paint()
	}
}
// #end

export default function Demo() {
	return (
		<View
			onReady={init}
			controller={{
				inertiaOrbit: 1000,
			}}
			options={{
				preserveDrawingBuffer: true,
				alpha: false,
				antialias: true,
				premultipliedAlpha: false,
			}}
			assets={{ image: { texture: TextureURL } }}
			settings={{
				size: {
					label: "size",
					value: 128,
					min: 64,
					max: 512,
				},
				alignY: {
					label: "alignY",
					value: 1,
					min: -1,
					max: +1,
				},
				resolution: {
					label: "resolution",
					value: 1,
					min: 0.1,
					max: 2,
					step: 0.1,
				},
			}}
		/>
	)
}
