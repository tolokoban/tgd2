import { webglLookup } from "@tgd/utils/webgl"

type HighlightedCode =
    | string
    | boolean
    | HighlightedCode[]
    | { cls: string; txt?: string }

export function debug(
    code: HighlightedCode,
    classNames: Record<string, string> = {}
) {
    const css: string[] = []
    const txt = stringify(code, classNames, css)
    console.log(txt, ...css)
}

export function highlightEnum(
    value: keyof WebGL2RenderingContext | number
): HighlightedCode {
    const txt = typeof value === "number" ? webglLookup(value) : value
    return ["gl.", { cls: "enum", txt }, { cls: "code" }]
}

const CLASSNAMES: Record<string, string> = {
    code: "font-family:monospace;font-size:80%;background:#000;color:#eee;padding:0;margin:0;border-radius:0;",
    bold: "font-weight:bold",
    enum: "font-weight:bold;color:#4af",
}

function stringify(
    code: HighlightedCode,
    classNames: Record<string, string>,
    css: string[]
): string {
    if (typeof code === "boolean") {
        css.push(
            `background:${
                code ? "#0f0" : "#f77"
            };font-size:80%;color:#000;padding:0 .5em;border-radius:999vmax`,
            CLASSNAMES.code
        )
        return `%c${code ? "true" : "false"}%c`
    }

    if (typeof code === "string") return code

    if (Array.isArray(code)) {
        return code.map(item => stringify(item, classNames, css)).join("")
    }

    const style = classNames[code.cls] ?? CLASSNAMES[code.cls]
    if (!style) return code.txt ?? ""

    css.push(`${classNames.code ?? CLASSNAMES.code};${style}`)
    return `%c${code.txt ?? ""}`
}
