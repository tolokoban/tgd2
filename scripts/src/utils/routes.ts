import { existsSync } from "node:fs"
import Path from "node:path"
import { saveText, saveTextIfNew } from "./fs"
import { Route } from "./types"
import { CodeSection, codeToString } from "./code"

const DISCLAIMER = [
    "/**",
    " * WARNING! this file has been generated automatically.",
    " * Please do not edit it because it will probably be overwritten.",
    ` * ${new Date().toISOString()}`,
    " */",
]

export async function generateRoutes(root: Route) {
    const loadingPath = Path.resolve(root.path, "loading.tsx")
    await saveTextIfNew(
        loadingPath,
        codeToString([
            `import React from "react"`,
            "",
            "export default function Loading() {",
            ["return <div>Loading...</div>"],
            "}",
        ])
    )
    const imports = await crawl(root.path, root.children)
    await saveText(
        Path.resolve(root.path, "index.tsx"),
        codeToString([
            ...DISCLAIMER,
            'import React from "react"',
            'import { createHashRouter, RouterProvider } from "react-router-dom"',
            `import Loading from "./loading"`,
            `import Page from "./page${root.page === "mdx" ? ".mdx" : ""}"`,
            root.layout && `import Layout from "./layout"`,
            "",
            ...imports.map(
                (name, index) =>
                    `const Page${index} = React.lazy(() => import("./${name}"))`
            ),
            "",
            "const router = createHashRouter(",
            [
                "[",
                ["{", [`path: "/",`, "element: <Page />"], "},"],
                ...imports.map((name, index) => [
                    "{",
                    [
                        `path: "/${name}",`,
                        `element: <React.Suspense fallback={<Loading />}><Page${index} /></React.Suspense>`,
                    ],
                    "},",
                ]),
                "],",
                "{",
                [`basename: ""`],
                "}",
            ],
            ")",
            "export default function App() {",
            [
                "return (",

                root.layout
                    ? [
                          "<Layout>",
                          ["<RouterProvider router={router} />"],
                          "</Layout>",
                      ]
                    : ["<RouterProvider router={router} />"],
                ")",
            ],
            "}",
        ])
    )
}

async function crawl(
    path: string,
    routes: Route[],
    level = 0,
    layouts: number[] = [],
    imports: string[] = []
): Promise<string[]> {
    for (const route of routes) {
        const relativePath = route.path.substring(path.length + 1)
        if (route.page) {
            imports.push(relativePath)
            if (route.layout) layouts.push(level)
            await saveText(
                Path.resolve(route.path, "index.tsx"),
                codeToString([
                    ...DISCLAIMER,
                    ...(layouts.length === 0
                        ? [
                              `export { default } from "./page${
                                  route.page === "mdx" ? ".mdx" : ""
                              }"`,
                          ]
                        : [
                              `import Content from "./page${
                                  route.page === "mdx" ? ".mdx" : ""
                              }"`,
                              layouts.map(num => {
                                  const dist = level - num
                                  if (dist === 0)
                                      return `import Layout${num} from "./layout"`
                                  return `import Layout${num} from "${"../".repeat(
                                      dist
                                  )}layout"`
                              }),
                              "",
                              "export default Page() {",
                              ["return (", embedLayouts(layouts), ")"],
                              "}",
                          ]),
                ])
            )
            if (route.children.length > 0) {
                crawl(path, route.children, level + 1, layouts, imports)
            }
            if (route.layout) layouts.pop()
        }
    }
    return imports
}

function embedLayouts(layouts: number[]): CodeSection {
    if (layouts.length === 0) return ["<Content />"]
    const level = layouts.shift()
    return [`<Layout${level}`, embedLayouts(layouts), `</Layout${level}`]
}
