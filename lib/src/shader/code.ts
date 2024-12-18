import { WebglAttributeType, WebglUniformType } from ".."

export interface TgdCodeVariables<
    Type extends WebglAttributeType | WebglUniformType
> {
    [name: string]: Type
}

export interface TgdCodeFunctions {
    [name: string]: TgdCodeBloc
}

export type TgdCodeBloc = string | null | TgdCodeBloc[]

export function isCodeBloc(v: unknown): v is TgdCodeBloc {
    if (typeof v === "string") return true

    if (!Array.isArray(v)) return false

    for (const item of v) {
        if (!isCodeBloc(item)) return false
    }
    return true
}

export function tgdCodeStringify(code: TgdCodeBloc, indent = ""): string {
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
    def: TgdCodeVariables<Type>,
    prefix: string,
    comment = "----------------------------------------"
): TgdCodeBloc[] {
    const names = Object.keys(def)
    if (names.length === 0) return []

    return [
        `// ${comment}`,
        ...names.map(name => `${prefix} ${def[name]} ${name};`),
    ]
}

export function funcs(
    def: TgdCodeFunctions | TgdCodeBloc,
    comment = "Util functions"
): TgdCodeBloc[] {
    if (isCodeBloc(def)) return [def]

    const names = Object.keys(def)
    if (names.length === 0) return []

    const result: TgdCodeBloc[] = [`// ${comment}`]
    names.forEach(name => {
        result.push(`${name} {`, def[name], "}", "")
    })
    return result
}
