/* eslint-disable unicorn/prevent-abbreviations */

export function stringifyJson(data: unknown): string {
	return JSON.stringify(data, replacer, "  ");
}

function replacer(this: Record<string, unknown>, _key: string, value: unknown) {
	if (value instanceof Float32Array)
		return `<<< Float32Array(${value.length}) >>>`;
	if (value instanceof Uint8Array) return `<<< Uint8Array(${value.length}) >>>`;
	if (value instanceof Uint16Array)
		return `<<< Uint16Array(${value.length}) >>>`;
	if (value instanceof Uint32Array)
		return `<<< Uint32Array(${value.length}) >>>`;
	return value;
}
