export function ensureArray<T>(items: T | T[] | undefined): T[] {
	if (items === undefined) return []
	return Array.isArray(items) ? items : [items]
}
