import {
	type ArrayNumber4,
	TgdBoundingBox,
	TgdCameraOrthographic,
	TgdCameraPerspective,
	TgdColor,
	type TgdContext,
	TgdLight,
	TgdMaterialDiffuse,
	TgdPainterBackground,
	TgdPainterClear,
	TgdPainterGroupCamera,
	TgdPainterLogic,
	TgdPainterMeshGltf,
	TgdPainterScissor,
	TgdPainterState,
	TgdTexture2D,
	tgdCalcClamp,
	tgdCanvasCreateWithContext2D,
	webglPresetDepth,
} from "@tolokoban/tgd"
import {
	ViewButton,
	ViewInputNumber,
	ViewPanel,
	ViewSlider,
} from "@tolokoban/ui"
import React from "react"
import SuzaneURL from "@/assets/mesh/suzanne.glb"
import View, { type Assets } from "@/components/demo/Tgd"
import { useFloat } from "@/utils/hooks/float"

function init(context: TgdContext, assets: Assets) {
	// #begin Initializing WebGL
	const texBackgroundOrtho = createBackground(context, "Orthographic")
	const texBackgroundPersp = createBackground(context, "Perspective")
	const color: ArrayNumber4 = TgdColor.fromString("#9df").toArayNumber4()
	const material = new TgdMaterialDiffuse({
		color,
		ambient: new TgdLight({
			color: [0.8, 0.8, 0.8, 0],
		}),
		lockLightsToCamera: true,
	})
	const mesh = new TgdPainterMeshGltf(context, {
		asset: assets.glb.suzane,
		material,
	})
	const bbox = TgdBoundingBox.from(mesh.computeBoundingBox())
	console.log("🐞 [camera.demo@51] bbox =", bbox) // @FIXME: Remove this line written on 2026-06-16 at 14:15
	const camOrtho = new TgdCameraOrthographic({ name: "Orthographic" })
	const camPersp = new TgdCameraPerspective({ name: "Perspective" })
	for (const camera of [context.camera, camOrtho, camPersp]) {
		camera.fitBoundingBox(bbox)
		camera.debug()
	}
	// #end
	const scissor1 = new TgdPainterScissor(context, {
		children: [
			new TgdPainterBackground(context, {
				texture: texBackgroundOrtho,
				mode: "contain",
			}),
			new TgdPainterGroupCamera(context, {
				camera: camOrtho,
				children: [mesh],
			}),
		],
		x: 0,
		y: 0,
		width: 0.5,
		height: 1,
	})
	const scissor2 = new TgdPainterScissor(context, {
		children: [
			new TgdPainterBackground(context, {
				texture: texBackgroundPersp,
				mode: "contain",
			}),
			new TgdPainterGroupCamera(context, {
				camera: camPersp,
				children: [mesh],
			}),
		],
		x: 0.5,
		y: 0,
		width: 0.5,
		height: 1,
	})
	context.add(
		new TgdPainterLogic(() => {
			const { camera } = context
			camPersp.fromTransfo(camera.transfo)
			camPersp.zoom = camera.zoom
			camOrtho.fromTransfo(camera.transfo)
			camOrtho.zoom = camera.zoom
		}),
		new TgdPainterClear(context, {
			color: [0.4, 0.4, 0.4, 1],
			depth: 1,
		}),
		new TgdPainterState(context, {
			depth: webglPresetDepth.less,
			children: [scissor1, scissor2],
		}),
	)
	context.inputs.pointer.eventTap.addListener((evt) => {
		if (evt.x < 0) {
			camOrtho.debug()
		} else {
			camPersp.debug()
		}
	})
	context.paint()
	return {
		split(value: number) {
			const a = tgdCalcClamp(value, 0, 1)
			scissor1.x = 0
			scissor1.width = a
			scissor2.x = a
			scissor2.width = 1 - a
			context.paint()
		},
		zoom(value: number) {
			context.camera.zoom = value
			camOrtho.zoom = value
			camPersp.zoom = value
			context.paint()
		},
		fitBoundingBox() {
			console.log("fitBoundingBox()", bbox)
			camOrtho.fitBoundingBox(bbox)
			camPersp.fitBoundingBox(bbox)
			context.paint()
		},
	}
}

export default function Demo() {
	const ref = React.useRef<ReturnType<typeof init> | null>(null)
	const srv = ref.current
	const [split, setSplit] = useFloat(0.5, srv?.split)
	const [zoom, setZoom] = React.useState(1)
	const handleApplyZoom = () => {
		srv?.zoom(zoom)
	}
	const handleFitBBox = () => {
		console.log("🐞 [camera.demo@152] srv =", srv) // @FIXME: Remove this line written on 2026-06-16 at 14:14
		srv?.fitBoundingBox()
	}

	return (
		<div>
			<View
				onReady={(scene: TgdContext, assets: Assets) => {
					ref.current = init(scene, assets)
				}}
				assets={{
					glb: {
						suzane: SuzaneURL,
					},
				}}
				gizmo
				controller={{
					inertiaOrbit: 1000,
					inertiaPanning: 1000,
				}}
			>
				<ViewSlider
					value={split}
					onChange={setSplit}
					min={0}
					max={1}
					step={1e-2}
				/>
				<ViewPanel
					fullwidth
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<ViewButton
						variant="text"
						color="secondary-5"
						onClick={() => setSplit(1)}
					>
						Orthographic
					</ViewButton>
					<ViewButton
						variant="text"
						color="secondary-5"
						onClick={() => setSplit(0)}
					>
						Perspective
					</ViewButton>
				</ViewPanel>
				<ViewPanel
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					gap="M"
					fullwidth
				>
					<ViewPanel display="flex" alignItems="center" gap="M">
						<ViewInputNumber
							value={zoom}
							onChange={setZoom}
							onEnterKeyPressed={handleApplyZoom}
							fullwidth
						/>
						<ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>
					</ViewPanel>
					<ViewButton onClick={handleFitBBox}>fitBoundingBox()</ViewButton>
				</ViewPanel>
			</View>
		</div>
	)
}

function createBackground(context: TgdContext, text: string) {
	const W = 2048
	const H = 2048
	const { canvas, ctx } = tgdCanvasCreateWithContext2D(W, H)
	ctx.font = "128px bold sans-serif"
	ctx.fillStyle = new TgdColor(0.4, 0.4, 0.4, 1).toString()
	ctx.fillRect(0, 0, W, H)
	ctx.fillStyle = "#000"
	const measure = ctx.measureText(text)
	const textWidth = measure.width
	const textAsc = measure.actualBoundingBoxAscent
	const textDsc = measure.actualBoundingBoxDescent
	ctx.fillText(text, 0, H - textDsc)
	ctx.fillText(text, 0, textAsc)
	ctx.fillText(text, W - textWidth, H - textDsc)
	ctx.fillText(text, W - textWidth, textAsc)
	return new TgdTexture2D(context).loadBitmap(canvas)
}
