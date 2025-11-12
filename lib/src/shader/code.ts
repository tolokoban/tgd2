import { isString } from "@tgd/types/guards"
import { WebglAttributeType, WebglUniformType } from ".."

export interface TgdCodeVariables<
    Type extends WebglAttributeType | WebglUniformType,
> {
    [name: string]: Type
}

export interface TgdCodeFunctions {
    [name: string]: TgdCodeBloc
}

export type TgdCodeBloc = string | null | TgdCodeFunctions | TgdCodeBloc[]

export function isTgdCodeBloc(data: unknown): data is TgdCodeBloc {
    if (!data || typeof data === "string") return true

    if (Array.isArray(data)) {
        for (const item of data) {
            if (!isTgdCodeBloc(item)) return false
        }
        return true
    }

    if (typeof data !== "object") return false

    for (const key of Object.keys(data)) {
        const item = (data as Record<string, unknown>)[key]
        if (!isTgdCodeBloc(item)) return false
    }
    return true
}

export function isCodeBloc(v: unknown): v is TgdCodeBloc {
    if (typeof v === "string") return true

    if (!Array.isArray(v)) return false

    for (const item of v) {
        if (!isCodeBloc(item)) return false
    }
    return true
}

export function tgdCodeStringify(
    code: TgdCodeBloc,
    indent = "",
    setOfFunctionNames?: Set<string>
): string {
    if (typeof code === "string") return `${indent}${code}`

    if (!code) return ""

    const set = setOfFunctionNames ?? new Set<string>()
    if (!Array.isArray(code)) {
        return Object.keys(code)
            .map((key) => {
                if (set.has(key)) return null

                set.add(key)
                return `// ${key}\n${code[key]}\n`
            })
            .filter((item) => isString(item))
            .join("\n")
    }

    const subIndent = `${indent}    `
    return code
        .filter((item) => item !== null)
        .filter((item) => !Array.isArray(item) || item.length > 0)
        .map((line) => tgdCodeStringify(line, subIndent, set))
        .join("\n")
}

export function expandVariables<
    Type extends WebglAttributeType | WebglUniformType,
>(
    definition: TgdCodeVariables<Type>,
    prefix: string,
    comment = "----------------------------------------"
): TgdCodeBloc[] {
    const names = Object.keys(definition)
    if (names.length === 0) return []

    return [
        `// ${comment}`,
        ...names.map((name) => `${prefix} ${definition[name]} ${name};`),
    ]
}

export function expandFunctions(
    definition: TgdCodeFunctions | TgdCodeBloc,
    comment?: string
): TgdCodeBloc[] {
    if (isCodeBloc(definition)) return [definition]

    const names = Object.keys(definition)
    if (names.length === 0) return []

    const result: TgdCodeBloc[] = comment ? [`// ${comment}`] : []
    for (const name of names) {
        result.push(definition[name], "")
    }
    return result
}
