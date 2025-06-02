import FS from "node:fs"
import Path from "node:path"
import { fileURLToPath } from "url"
import { readDefFile } from "./utils/read-def-file.mjs"

const ROOT = Path.dirname(fileURLToPath(import.meta.url))

function startsWith(line, ...words) {
    for (const word of words) {
        if (line.startsWith(word)) return true
    }
    return false
}

/**
 * @types {string[]}
 */
const output = [
    "/* eslint-disable unicorn/prevent-abbreviations */",
    `import { TgdCodeBloc } from "@tgd/shader"`,
    "",
]
const lines = readDefFile()
const T = "TgdCodeBloc[]"
for (const [name, type, args] of lines) {
    const jsName = `wasm_${name.replace(".", "_")}`
    if (startsWith(type, "LOAD")) {
        output.push(
            `export function ${jsName}(offset: ${T}, memory?: string): ${T} {`,
            `    const body: ${T} = []`,
            `    if (memory) {`,
            `        body.push(\`(memory $\$(memory})\`)`,
            "    }",
            "    body.push(...offset)",
            `    return ["(${name}", body, ")"]`,
            "}"
        )
        continue
    }
    if (startsWith(type, "STORE")) {
        output.push(
            `export function ${jsName}(offset: ${T}, value: ${T}, memory?: string): ${T} {`,
            `    const body: ${T} = []`,
            `    if (memory) {`,
            `        body.push(\`(memory $\$(memory})\`)`,
            "    }",
            "    body.push(...offset, ...value)",
            `    return ["(${name}", body, ")"]`,
            "}"
        )
        continue
    }
    if (startsWith(type, "CONST")) {
        output.push(
            `export function ${jsName}(value: number): ${T} {`,
            `    return [\`(${name} \${value})\`]`,
            "}"
        )
        continue
    }
    if (startsWith(type, "UNARY", "CONVERT")) {
        output.push(
            `export function ${jsName}(value: ${T}): ${T} {`,
            `    return ["(${name}", [...value], ")"]`,
            "}"
        )
        continue
    }
    if (startsWith(type, "BINARY", "TEST", "COMPARE")) {
        output.push(
            `export function ${jsName}(a: ${T}, b: ${T}): ${T} {`,
            `    return ["(${name}", [...a, ...b], ")"]`,
            "}"
        )
        continue
    }
    console.log(name, "   >>>   ", type, "  >>>  ", args)
}

FS.writeFileSync(Path.resolve(ROOT, "../src/wasm/code.ts"), output.join("\n"))
