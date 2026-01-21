import View from "@/components/demo/Tgd"
import { TgdContext, TgdTableUint8, TgdTexture2D } from "@tolokoban/tgd"
import { Painter } from "./painter"

function init(ctx: TgdContext) {
	// #begin
	const bg = [0x00, 0x99, 0xff]
	const fg = [0xff, 0x99, 0x00]
	// prettier-ignore
	const pixels = ["     ", " ### ", "  #  ", "  #  ", "     "]
	const table = new TgdTableUint8(5, 5, 3)
	pixels.forEach((line, row) => {
		line
			.split("")
			.forEach((color, col) => table.setVec(color === "#" ? fg : bg, col, row))
	})
	const data = new Uint8Array(table.buffer)
	const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })
		.setParams({
			magFilter: "NEAREST",
		})
		.loadData(data, {
			width: 5,
			height: 5,
			internalFormat: "RGB8",
			format: "RGB",
		})
	const background = new Painter(ctx, texture)
	ctx.add(background)
	ctx.paint()
	// #end
}

export default function Demo() {
	return <View onReady={init} />
}

const COLORS: Record<string, [number, number, number]> = {
	"0": [0, 0.333, 1],
	"1": [1, 0.666, 0],
}

function makeRGB(...lines: string[]) {
	const code = lines.join("")
	const data: number[] = []
	for (const line of lines) {
		line.split("").map((digit) => data.push(...(COLORS[digit] ?? [])))
		let size = line.length * "RGB".length
		while (size % 4 !== 0) {
			data.push(0)
			size++
		}
	}
	return new Uint8Array(data.map((v) => Math.floor(255 * v)))
}
