import {
	tgdCalcRandom,
	tgdCodeFunction_perlinNoise,
	type TgdContext,
	TgdDataset,
	TgdPainterClear,
	TgdPainterParticles,
	TgdPainterState,
	TgdShaderFragment,
	TgdShaderVertex,
} from "@tolokoban/tgd";

import View from "@/components/demo/Tgd";

// #begin
function init(context: TgdContext) {
	const clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });
	const dataset: TgdDataset = makeDataset(250000);
	const particles = new TgdPainterParticles(context, {
		dataset,
		drawMode: "POINTS",
		shader: {
			vert: new TgdShaderVertex({
				functions: {
					...tgdCodeFunction_perlinNoise(),
				},
				uniforms: {
					uniTime: "float",
					uniDelta: "float",
					uniCenter: "vec2",
					uniSize: "float",
				},
				attributes: dataset.getTypeRecord(),
				mainCode: [
					"gl_Position = vec4(attPosition, 0, 1);",
					"gl_PointSize = uniSize;",
					"varPosition += attSpeed * uniDelta;",
					"if (abs(varPosition.x) > 1.0) varSpeed.x = -varSpeed.x;",
					"if (abs(varPosition.y) > 1.0) varSpeed.y = -varSpeed.y;",
					"varPosition.x = clamp(varPosition.x, -1.0, +1.0);",
					"varPosition.y = clamp(varPosition.y, -1.0, +1.0);",
					"vec2 v = attPosition - uniCenter;",
					"float s = dot(v, v);",
					"float c = 0.9;",
					"float e = max(0.0, c - s) / c;",
					"float p = 0.5 + 0.5 * abs(perlinNoise(vec3(attPosition, uniTime)));",
					"varPosition += uniDelta * p * e * normalize(v);",
					"varSpeed += 0.3 * uniDelta * e * normalize(v);",
				],
			}),
			frag: new TgdShaderFragment({
				mainCode: [
					"vec2 p = 2.0 * (gl_PointCoord - vec2(0.5));",
					"float s = dot(p, p);",
					"if (s > 1.0) discard;",
					"float e = (1.0 - s);",
					"e *= e;",
					"FragColor = vec4(varColor * e, 1.0);",
				],
			}),
		},
		setUniforms: ({ time, delta, prg }) => {
			prg.uniform1f("uniSize", Math.sqrt(context.width * context.height) / 32);
			prg.uniform1f("uniDelta", delta);
			prg.uniform1f("uniTime", time);
			prg.uniform2f(
				"uniCenter",
				context.inputs.pointer.x,
				context.inputs.pointer.y,
			);
		},
	});
	context.add(
		clear,
		new TgdPainterState(context, {
			blend: "off",
			children: [particles],
		}),
	);
	context.play();
}
// #end

export default function Demo() {
	return <View onReady={init} />;
}

function makeDataset(count: number): TgdDataset {
	const dataset = new TgdDataset({
		attPosition: "vec2",
		attSpeed: "vec2",
		attColor: "vec3",
	});
	const attPosition: number[] = [];
	const attSpeed: number[] = [];
	const attColor: number[] = [];
	const rnd = (min = -1, max = +1) => tgdCalcRandom(min, max);
	for (let i = 0; i < count; i++) {
		attPosition.push(rnd(), rnd());
		attSpeed.push(rnd(-0.25, +0.25), rnd(-0.25, +0.25));
		const R = rnd(0.1, 0.2);
		const G = R * Math.random();
		const B = 0.01;
		attColor.push(R * 5, G * 5, B * 5);
	}
	dataset.set("attPosition", new Float32Array(attPosition));
	dataset.set("attSpeed", new Float32Array(attSpeed));
	dataset.set("attColor", new Float32Array(attColor));
	return dataset;
}
