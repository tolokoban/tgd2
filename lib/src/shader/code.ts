import { WebglAttributeType, WebglUniformType } from ".."

export interface Variables<Type extends WebglAttributeType | WebglUniformType> {
    [name: string]: Type
}

export interface Functions {
    [name: string]: CodeBloc
}

export type CodeBloc = string | null | CodeBloc[]

export function isCodeBloc(v: unknown): v is CodeBloc {
    if (typeof v === "string") return true

    if (!Array.isArray(v)) return false

    for (const item of v) {
        if (!isCodeBloc(item)) return false
    }
    return true
}

export function tgdCodeStringify(code: CodeBloc, indent = ""): string {
    if (typeof code === "string") return `${indent}${code}`

    if (!code) return ""

    const subIndent = `${indent}    `
    return code
        .filter(item => item !== null)
        .filter(item => !Array.isArray(item) || item.length > 0)
        .map(line => tgdCodeStringify(line, subIndent))
        .join("\n")
}

export function vars<Type extends WebglAttributeType | WebglUniformType>(
    def: Variables<Type>,
    prefix: string,
    comment = "----------------------------------------"
): CodeBloc[] {
    const names = Object.keys(def)
    if (names.length === 0) return []

    return [
        `// ${comment}`,
        ...names.map(name => `${prefix} ${def[name]} ${name};`),
    ]
}

export function funcs(
    def: Functions | CodeBloc,
    comment = "Util functions"
): CodeBloc[] {
    if (isCodeBloc(def)) return [def]

    const names = Object.keys(def)
    if (names.length === 0) return []

    const result: CodeBloc[] = [`// ${comment}`]
    names.forEach(name => {
        result.push(`${name} {`, def[name], "}", "")
    })
    return result
}
