import FS from "node:fs"
import Path from "node:path"
import { fileURLToPath } from "url"

const ROOT = Path.dirname(fileURLToPath(import.meta.url))

/**
 * @return {Array<[name: string, type: string, args: number]>}
 */
export function readDefFile() {
    const text = FS.readFileSync(Path.resolve(ROOT, "..", "def.txt")).toString()
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.startsWith("|"))
        .map(line => line.slice(1).trim())
    /**
     * @type {Array<[name: string, type: string, args: number]>}
     */
    const output = []
    for (const line of lines) {
        const [a, b] = line.split("->")
        try {
            const name = JSON.parse(a.trim())
            const tail = b.trim()
            const [type, rest] = tail.split("(fun").map(item => item.trim())
            output.push([
                name,
                type.split(" ")[0].trim(),
                (rest ?? "").length === 0 ? 0 : rest.split(" ").length,
            ])
        } catch (ex) {
            console.log()
            console.error("Don't know how to deal with line:")
            console.log(line)
            console.error(ex)
        }
    }
    return output
}
