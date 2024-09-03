/**
 * @example
 * ```
 * tgdTemplate(
 *   "Hello NAME!",
 *   { NAME: "World" }
 * ) === "Hello World!"
 * ```
 */
export function tgdTemplate(
    content: string,
    substitutions: Record<string, string>
): string {
    let out = content
    for (const key of Object.keys(substitutions)) {
        const val = substitutions[key]
        out = out.split(key).join(val)
    }
    return out
}
