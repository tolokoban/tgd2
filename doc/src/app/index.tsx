/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */

export * from "./routes"
export * from "./types"

import React from "react"

import { matchRoute, useRouteContext, ROUTES } from "./routes"
import { RouteMatch, RoutePath } from "./types"

import Layout0 from "./layout"
import Layout2 from "./articles/layout"
import Layout3 from "./articles/painter/layout"
import Loading0 from "./loading"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page3 = React.lazy(() => import("./articles/painter/page.mdx"))
const Page4 = React.lazy(() => import("./articles/painter/background/page.mdx"))
const Page5 = React.lazy(() => import("./articles/painter/background/2/page.mdx"))
const Page6 = React.lazy(() => import("./articles/painter/clear/page.mdx"))
const Page7 = React.lazy(() => import("./articles/painter/filter/page.mdx"))
const Page8 = React.lazy(() => import("./articles/painter/filter/blur/page.mdx"))
const Page9 = React.lazy(() => import("./articles/painter/filter/custom/page.mdx"))
const Page10 = React.lazy(() => import("./articles/painter/filter/hue/page.mdx"))
const Page11 = React.lazy(() => import("./articles/painter/logic/page.mdx"))
const Page12 = React.lazy(() => import("./articles/suzanne/page.mdx"))
const Page13 = React.lazy(() => import("./articles/test/page.mdx"))
const Page14 = React.lazy(() => import("./articles/texture/page.mdx"))
const Page15 = React.lazy(() => import("./articles/texture/cube/page.mdx"))
const Page17 = React.lazy(() => import("./tools/gltf/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb0 = <Loading0/>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const ly2 = Layout2
    const ly3 = Layout3
    const pg3 = Page3
    const pg4 = Page4
    const pg5 = Page5
    const pg6 = Page6
    const pg7 = Page7
    const pg8 = Page8
    const pg9 = Page9
    const pg10 = Page10
    const pg11 = Page11
    const pg12 = Page12
    const pg13 = Page13
    const pg14 = Page14
    const pg15 = Page15
    const pg17 = Page17
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb0} context={context}>
            <Route path="/api" Page={pg1} fallback={fb0} context={context}/>
            <Route path="/articles" Layout={ly2} fallback={fb0} context={context}>
                <Route path="/articles/painter" Page={pg3} Layout={ly3} fallback={fb0} context={context}>
                    <Route path="/articles/painter/background" Page={pg4} fallback={fb0} context={context}>
                        <Route path="/articles/painter/background/2" Page={pg5} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/clear" Page={pg6} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/filter" Page={pg7} fallback={fb0} context={context}>
                        <Route path="/articles/painter/filter/blur" Page={pg8} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/custom" Page={pg9} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/hue" Page={pg10} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/logic" Page={pg11} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/suzanne" Page={pg12} fallback={fb0} context={context}/>
                <Route path="/articles/test" Page={pg13} fallback={fb0} context={context}/>
                <Route path="/articles/texture" Page={pg14} fallback={fb0} context={context}>
                    <Route path="/articles/texture/cube" Page={pg15} fallback={fb0} context={context}/>
                </Route>
            </Route>
            <Route path="/tools" fallback={fb0} context={context}>
                <Route path="/tools/gltf" Page={pg17} fallback={fb0} context={context}/>
            </Route>
        </Route>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function intl<T extends PageComponent | ContainerComponent | JSX.Element>(
    page: T,
    translations: Record<string, T>,
    lang = ""
): T {
    const candidate1 = translations[lang]
    if (candidate1) return candidate1

    const [prefix] = lang.split("-")
    const candidate2 = translations[prefix]
    if (candidate2) return candidate2

    return page
}

type PageComponent = React.FC<{ params: Record<string, string> }>
type ContainerComponent = React.FC<{
    children: React.ReactNode
    params: Record<string, string>
}>

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: PageComponent
    Layout?: ContainerComponent
    Template?: ContainerComponent
    context: RouteMatch | null
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    context,
}: RouteProps) {
    const match = context && matchRoute(context.path, ROUTES[path as RoutePath])

    if (!match) return null

    if (match.distance === 0) {
        if (!Page) return null

        const element = Template ? (
            <Template params={match.params}>
                <Page params={match.params} />
            </Template>
        ) : (
            <Page params={match.params} />
        )
        if (Layout) {
            return (
                <Layout params={match.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={match.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
