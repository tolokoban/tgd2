import {
	type TgdContext,
	TgdPainterClear,
	TgdPainterMesh,
	TgdPainterState,
	TgdTexture2D,
	TgdMaterialDiffuse,
} from "@tolokoban/tgd";
import React from "react";
import View from "@/components/demo/Tgd";

function init(context: TgdContext, refTexture: React.RefObject<TgdTexture2D | null>) {
	// #begin
	context.camera.fitSpaceAtTarget(1.5, 1.5);
	const clear = new TgdPainterClear(context, {
		depth: 1,
		color: [0.2, 0.1, 0, 1],
	});
	const color = new TgdTexture2D(context);
	refTexture.current = color;
	const mesh = new TgdPainterMesh(context, {
		material: new TgdMaterialDiffuse({
			color,
			lockLightsToCamera: true,
		}),
	});
	const meshPainter = new TgdPainterState(context, {
		depth: "less",
		children: [clear, mesh],
	});
	context.add(meshPainter, (time) => {
		mesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);
	});
	context.play();
	return ({ camera }: { camera: number }) => {
		color.loadWebcam({
			facingMode: camera === 0 ? "user" : "environment",
		});
	};
	// #end
}

export default function Demo() {
	const refTexture = React.useRef<TgdTexture2D | null>(null);
	// Release the webcam when we leave the page.
	React.useEffect(() => () => refTexture.current?.delete(), []);
	return (
		<View
			onReady={(context) => init(context, refTexture)}
			controller={{ inertiaOrbit: 1000 }}
			settings={{
				camera: {
					label: "camera",
					value: 0,
					step: ["Front", "Back"],
				},
			}}
		/>
	);
}
