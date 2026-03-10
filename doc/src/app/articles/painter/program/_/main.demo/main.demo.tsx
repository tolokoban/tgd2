import {
	type TgdContext,
	TgdPainterClear,
	TgdPainterProgram,
	TgdUniformBufferObject,
	tgdCodeFunction_shiftHue,
} from "@tolokoban/tgd";

import View from "@/components/demo/Tgd";

// #begin
function init(context: TgdContext) {
	const clear = new TgdPainterClear(context, {
		color: [0, 0, 0, 1],
		depth: 1,
	});
	const uniformCamera = new TgdUniformBufferObject(context, {
		bindingPoint: 0,
		uniforms: {
			uniModelViewMatrix: "mat4",
			uniProjectionMatrix: "mat4",
		},
	});
	const painter = new TgdPainterProgram(context, {
		drawMode: "LINES",
		uniforms: {
			uniformCamera,
			uniformColors: {
				bindingPoint: 31,
				uniforms: {
					uniHue: "float",
				},
				values: {
					uniHue: 0.5,
				},
			},
		},
		varying: {
			varColor: "vec4",
		},
		dataset: [
			{
				attribs: {
					attPos: {
						type: "vec3",
						data: new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]),
					},
					attColor: {
						type: "vec4",
						data: new Float32Array([
							0.8, 0.8, 0.8, 1, 1, 0.2, 0.2, 1, 0.2, 1, 0.2, 1, 0.2, 0.2, 1, 1,
						]),
					},
				},
			},
		],
		elements: new Uint8Array([0, 1, 0, 2, 0, 3]),
		vert: {
			functions: {
				...tgdCodeFunction_shiftHue(),
			},
			mainCode: [
				"varColor = vec4(shiftHue(attColor.rgb, uniHue), attColor.a);",
				"gl_Position = vec4(attPos, 1.0);",
			],
		},
		frag: {
			mainCode: ["FragColor = varColor;"],
		},
	});
	context.add(clear, painter);
	context.paint();
	painter.debug();
}
// #end

export default function Demo() {
	return (
		<View
			onReady={init}
			gizmo
			controller={{
				inertiaOrbit: 1000,
			}}
			options={{
				preserveDrawingBuffer: true,
			}}
		/>
	);
}
