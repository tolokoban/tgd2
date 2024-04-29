import Path from "node:path"
import { color } from "../utils/log"
import { loadText, saveText } from "../utils/fs"
import { codeLinesToString } from "../utils/code"

const ROOT = Path.resolve(__dirname, "../../../../doc/src")

export async function processDemo(file: string): Promise<void> {
    // The filename must match the folder name.
    const filename = Path.basename(file)
    const foldername = `${Path.basename(Path.dirname(file))}.tsx`
    if (filename !== foldername) return

    console.log(color("[Demo]", "Yellow"), file.substring(ROOT.length))
    const code = await loadText(file)
    const [fullCode, focusedCode] = parseCode(code)
    const path = Path.resolve(Path.dirname(file), "index.tsx")
    await saveText(
        path,
        codeLinesToString([
            `import React from "react"`,
            `import { ViewPanel } from "@tolokoban/ui"`,
            `import Column from "@/components/demo/Column"`,
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
                    `<Column align="halfLeft"><Demo /></Column>`,
                    `<Column align="halfRight">`,
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
                    "</Column>",
                ],
                "</>",
            ],
            "}",
        ])
    )
    console.log(color("Write:", "LightGreen"), path.substring(ROOT.length))
}

function parseCode(code: string): [full: string, focused: string] {
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
