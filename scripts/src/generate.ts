import FS from "node:fs"
import Path from "node:path"
import { color, logError } from "./utils/log"
import { listDirs } from "./utils/fs"
import { Route } from "./utils/types"
import { generateRoutes } from "./utils/routes"

async function getRoute(path: string, name = ""): Promise<Route> {
    const dirs = await listDirs(path)
    let page: "tsx" | "mdx" | undefined = undefined
    if (FS.existsSync(Path.resolve(path, "page.tsx"))) page = "tsx"
    else if (FS.existsSync(Path.resolve(path, "page.mdx"))) page = "mdx"
    const route: Route = {
        path,
        name,
        page,
        layout: FS.existsSync(Path.resolve(path, "layout.tsx")),
        children: await Promise.all(
            dirs.map(dir => getRoute(Path.resolve(path, dir), dir))
        ),
    }
    return route
}

async function start() {
    try {
        const arg = process.argv[2]
        if (!arg) throw Error("One argument is mandatory: the folder to watch!")

        const root = Path.resolve(arg)
        console.log(color("Watching:", "LightBlue"), root)
        if (!FS.existsSync(root)) {
            logError("Folder not found!")
            process.exit(1)
        }
        const route = await getRoute(root)
        console.log(JSON.stringify(route, null, "  "))
        await generateRoutes(route)
    } catch (ex) {
        logError(ex)
    }
}

start()
