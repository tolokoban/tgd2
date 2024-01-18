import FS from "node:fs"
import Path from "node:path"
import Chokidar from "chokidar"
import { color, logError } from "./utils/log"
import { browseRoutes, flattenRoutes, generateRoutes } from "./utils/routes"
import { Route } from "./utils/types"
import { processDemo } from "./demo"

function logRoute(route: Route) {
    console.log(
        color(route.name, "Yellow"),
        `(${route.page})`,
        color("layout", route.layout ? "LightGreen" : "LightRed"),
        color("loading", route.loading ? "LightGreen" : "LightRed"),
        route.path
    )
}

function stringifyRoute(route: Route): string {
    return `{${route.name},${route.page},${route.layout},${route.loading},${
        route.path
    }},${FS.existsSync(Path.resolve(route.path, "index.tsx"))}`
}

function stringifyRoutes(routes: Route[]): string {
    return routes.map(stringifyRoute).join("\n")
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

        let previousStructure = ""
        const generate = async () => {
            const route = await browseRoutes(root)
            const routes = flattenRoutes(route)
            const structure = stringifyRoutes(routes)
            if (structure === previousStructure) return

            previousStructure = structure
            console.log()
            routes.forEach(r => logRoute(r))
            console.log()
            await generateRoutes(root, routes)
        }
        await generate()
        let timeout: NodeJS.Timeout | undefined = undefined
        Chokidar.watch(root).on("all", (event, path) => {
            clearTimeout(timeout)
            timeout = setTimeout(generate, 300)
            if (
                ["add", "change"].includes(event) &&
                path.endsWith(".demo.tsx")
            ) {
                void processDemo(path)
            }
        })
    } catch (ex) {
        logError(ex)
    }
}

start()
