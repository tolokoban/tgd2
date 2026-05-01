import { existsSync } from "node:fs"
import FS from "node:fs/promises"
import Path from "node:path"

/**
 *
 * @param {string} root
 * @param {string} path
 * @return {Promise<string[]>}
 */
async function listFolders(root, path) {
    try {
        /** @type {string[]} */
        const result = []
        const files = await FS.readdir(Path.resolve(root, path), { withFileTypes: true })
        for (const file of files) {
            if (!file.isDirectory()) continue

            result.push(Path.join(path, file.name))
        }
        return result
    } catch (err) {
        console.error(`Unable to read dir "${Path.resolve(root, path)}":`, err)
        return []
    }
}

/**
 *
 * @param {string} root
 * @returns {Promise<string[]>}
 */
async function listCases(root) {
    /** @type {string[]} */
    const result = []
    /** @type {string[]} */
    const fringe = await listFolders(root, ".")
    while (fringe.length > 0) {
        const route = fringe.shift()
        if (!route) continue

        if (existsSync(Path.resolve(root, route, "index.ts"))) {
            result.push(route)
        } else {
            for (const child of await listFolders(root, route)) {
                fringe.push(child)
            }
        }
    }
    result.sort()
    return result
}

/**
 * @param {string} path
 * @param {string} content
 */
async function writeIfDifferent(path, content) {
    if (existsSync(path)) {
        // Check if the existing file has the same content already.
        const current = await FS.readFile(path)
        if (current.toString() === content) return
    }

    await FS.writeFile(path, content)
}

async function start() {
    const rootCases = Path.resolve("./src/front/cases")
    const rootRoutes = Path.resolve("./src/front/app/cases")
    const cases = await listCases(rootCases)
    for (const id of cases) {
        console.log("Usecase: ", id)
        await FS.mkdir(Path.resolve(rootRoutes, id), {
            recursive: true,
        })
        await writeIfDifferent(
            Path.resolve(rootRoutes, id, "page.tsx"),
            `/**
 * This file has been generated for the use case
 * ${id}
 */
import testCase from "@/cases/${id}"
import { Preview } from "@/components/Preview"

export default function Page() {
    return <Preview name={${JSON.stringify(id)}} testCase={testCase} />
}
`,
        )
    }
    await writeIfDifferent(
        Path.resolve(rootCases, "index.ts"),
        `import { TestCase } from "@/types"
    
export const testCases: Record<string, Promise<{ default: TestCase }>> = {
    ${cases.map((id) => `"${id}": import("./${id}"),`).join("\n    ")}
}`,
    )
}

start()
