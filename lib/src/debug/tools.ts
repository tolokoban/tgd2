export function padColOfNumbers(
	values: number[],
	decimals = 6,
	lenght = 12,
): string[] {
	const p = 10 ** decimals
	const out: string[] = []
	let max = 0
	for (const value of values) {
		const n = Math.round(value * p) / p
		const txt = n.toFixed(decimals)
		max = Math.max(max, txt.length)
		out.push(txt)
	}
	return out.map((txt) => txt.padStart(max, " "))
}
