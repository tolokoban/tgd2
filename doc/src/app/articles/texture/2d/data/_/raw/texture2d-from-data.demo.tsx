import View from "@/components/demo/Tgd";
import { type TgdContext, TgdTexture2D } from "@tolokoban/tgd";
import { Painter } from "./painter";

function init(ctx: TgdContext) {
	// #begin
	const r = 0x00;
	const g = 0x99;
	const b = 0xff;
	const R = 0xff;
	const G = 0x99;
	const B = 0x00;
	// prettier-ignore
	const data = new Uint8Array([
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		/* padding -> */ 0,
		r,
		g,
		b,
		R,
		G,
		B,
		R,
		G,
		B,
		R,
		G,
		B,
		r,
		g,
		b,
		/* padding -> */ 0,
		r,
		g,
		b,
		r,
		g,
		b,
		R,
		G,
		B,
		r,
		g,
		b,
		r,
		g,
		b,
		/* padding -> */ 0,
		r,
		g,
		b,
		r,
		g,
		b,
		R,
		G,
		B,
		r,
		g,
		b,
		r,
		g,
		b,
		/* padding -> */ 0,
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		r,
		g,
		b,
		/* padding -> */ 0,
	]);
	const texture = new TgdTexture2D(ctx, {
		storage: { flipY: true, format: "RGB8 / RGB / UNSIGNED_BYTE" },
		params: {
			magFilter: "NEAREST",
		},
	}).loadData(data, {
		width: 5,
		height: 5,
	});
	const background = new Painter(ctx, texture);
	ctx.add(background);
	ctx.paint();
	// #end
}

export default function Demo() {
	return <View onReady={init} />;
}
