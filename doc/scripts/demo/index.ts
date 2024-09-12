import FS from "node:fs/promises"
import { existsSync, statSync } from "node:fs"
import Path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = Path.resolve(__dirname, "../../")

function mtime(path: string): number {
    if (!existsSync(path)) return 0

    const stat = statSync(path)
    return stat.mtime.getTime()
}

async function processDemo(relPath: string) {
    const file = Path.resolve(ROOT, relPath)
    // The filename must match the folder name.
    const filename = Path.basename(file)
    const foldername = `${Path.basename(Path.dirname(file))}.tsx`
    if (filename !== foldername) {
        return
    }

    const path = Path.resolve(Path.dirname(file), "index.tsx")
    if (mtime(path) >= mtime(file)) {
        return
    }

    console.log("[Demo]", file.substring(ROOT.length))
    const code = await loadText(file)
    const [fullCode, focusedCode] = parseCode(code)

    await saveText(
        path,
        codeLinesToString([
            `/**`,
            ` * Warning! This code has been generated automatically.`,
            ` */`,
            `import React from "react"`,
            `import { ViewPanel } from "@tolokoban/ui"`,
            `import CodeViewer from "@/components/demo/CodeViewer"`,
            `import Demo from "./${filename.substring(
                0,
                filename.length - ".tsx".length
            )}"`,
            "",
            `const FOCUS = ${JSON.stringify(focusedCode)}`,
            `const FULL = ${JSON.stringify(fullCode)}`,
            "",
            "export default function DemoContainer() {",
            [
                "const [full, setFull] = React.useState(false)",
                "return <>",
                [
                    `<div className="half-left"><Demo /></div>`,
                    `<div className="half-right">`,
                    [
                        "<button",
                        [
                            `style={{ all: "inherit", display: "contents" }}`,
                            `onClick={() => setFull(!full)}`,
                        ],
                        ">",
                        [
                            `<ViewPanel display="flex" gap={".5em"}>`,
                            [
                                `<input type="checkbox" checked={full} onChange={() => setFull(!full)}/>`,
                                `<label style={{ cursor: "pointer" }}>`,
                                [`Afficher le code complet`],
                                `</label>`,
                            ],
                            `</ViewPanel>`,
                        ],
                        `</button>`,
                        `<CodeViewer language="tsx" value={full ? FULL : FOCUS} />`,
                    ],
                    "</div>",
                ],
                "</>",
            ],
            "}",
        ])
    )
}

function parseCode(code: string): string[] {
    const lines = code.split("\n")
    const full: string[] = []
    const focused: string[] = []
    let active = false
    for (const line of lines) {
        const short = line.trim()
        if (short === "//#begin" || short === "// #begin") {
            active = true
            continue
        }
        if (short === "//#end" || short === "// #end") {
            active = false
            continue
        }
        full.push(line)
        if (active) focused.push(line)
    }
    return [full.join("\n"), focused.join("\n")]
}

async function saveText(path: string, content: string) {
    return await FS.writeFile(path, content, { encoding: "utf-8" })
}

async function loadText(path: string): Promise<string> {
    if (!existsSync(path)) {
        console.warn("This file does not exist:", path)
        return ""
    }

    const content = await FS.readFile(path)
    return content.toString()
}

type Code = string | boolean | Code[]

function codeToString(code: Code, indent = "") {
    if (typeof code === "boolean") return ""
    if (typeof code === "string") return `${indent}${code}`

    const subIndent = `${indent}    `
    return code.map(section => codeToString(section, subIndent)).join("\n")
}

function codeLinesToString(lines: Code[]) {
    return lines
        .filter(line => typeof line !== "boolean")
        .map(line => codeToString(line))
        .join("\n")
}

async function findFiles(path: string, acceptedExtensions: string[]) {
    const jsFilter = info =>
        !info.isDirectory() && matchAnyExtension(info.name, acceptedExtensions)
    const dirFilter = info => !info.name.startsWith(".") && info.isDirectory()
    const files = await readDir(path, jsFilter)
    const fringe = await readDir(path, dirFilter)
    while (fringe.length > 0) {
        const folder = fringe.shift()
        if (!folder) continue

        const subFolders = await readDir(folder, dirFilter)
        subFolders.forEach(dir => fringe.push(dir))
        const subFiles = await readDir(folder, jsFilter)
        subFiles.forEach(f => files.push(f))
    }
    return files.map(f => Path.relative(path, f))
}

function matchAnyExtension(name, acceptedExtensions) {
    for (const ext of acceptedExtensions) {
        if (name.endsWith(ext)) return true
    }
    return false
}

/**
 * @param root {string}
 * @param filters {Array<(info: Dirent) => boolean>}
 * @return {Promise<string[]>}
 */
async function readDir(
    root: string,
    ...filters: Array<(info: Dirent) => boolean>
) {
    if (!existsSync(root)) throw Error(`[readDir] Path not found: "${root}"!`)

    const folders = []
    const items = await FS.readdir(root, {
        withFileTypes: true,
        encoding: "utf-8",
    })
    for (const item of items) {
        const { name } = item
        if (name === "." || name === "..") continue

        let pass = true
        for (const filter of filters) {
            if (!filter(item)) {
                pass = false
                break
            }
        }
        if (pass) folders.push(name)
    }
    folders.sort()
    return folders.map(name => Path.resolve(root, name))
}

async function start() {
    try {
        const demos = await findFiles(ROOT, [".demo.tsx"])
        console.log("Number of demos to inspect:", demos.length)
        for (const file of demos) {
            await processDemo(file)
        }
    } catch (ex) {
        if (ex instanceof Error) {
            console.error(ex.message)
        } else {
            console.error(ex)
        }
    }
}

console.log('Looking for demos: files ending with ".demo.tsx".')
void start()
