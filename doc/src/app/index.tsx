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

import Layout1 from "./articles/layout"
import Layout2 from "./articles/painter/layout"
import Loading0 from "./loading"
import Template1 from "./articles/template"
const Page0 = React.lazy(() => import("./page"))
const Page2 = React.lazy(() => import("./articles/painter/page.mdx"))
const Page3 = React.lazy(() => import("./articles/painter/background/page.mdx"))
const Page4 = React.lazy(() => import("./articles/painter/background/2/page.mdx"))
const Page5 = React.lazy(() => import("./articles/painter/clear/page.mdx"))
const Page6 = React.lazy(() => import("./articles/painter/filter/page.mdx"))
const Page7 = React.lazy(() => import("./articles/painter/filter/blur/page.mdx"))
const Page8 = React.lazy(() => import("./articles/painter/filter/hue/page.mdx"))
const Page9 = React.lazy(() => import("./articles/painter/logic/page.mdx"))
const Page10 = React.lazy(() => import("./articles/suzanne/page.mdx"))
const Page11 = React.lazy(() => import("./articles/test/page.mdx"))
const Page12 = React.lazy(() => import("./articles/texture/page.mdx"))
const Page13 = React.lazy(() => import("./articles/texture/cube/page.mdx"))
const Page15 = React.lazy(() => import("./tools/gltf/page"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const fb0 = <Loading0/>
    const pg0 = Page0
    const ly1 = Layout1
    const tp1 = Template1
    const ly2 = Layout2
    const pg2 = Page2
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
    const pg15 = Page15
    return (
        <Route path="/" Page={pg0} fallback={fb0}>
            <Route path="/articles" Layout={ly1} Template={tp1} fallback={fb0}>
                <Route path="/articles/painter" Page={pg2} Layout={ly2} Template={tp1} fallback={fb0}>
                    <Route path="/articles/painter/background" Page={pg3} Template={tp1} fallback={fb0}>
                        <Route path="/articles/painter/background/2" Page={pg4} Template={tp1} fallback={fb0} />
                    </Route>
                    <Route path="/articles/painter/clear" Page={pg5} Template={tp1} fallback={fb0} />
                    <Route path="/articles/painter/filter" Page={pg6} Template={tp1} fallback={fb0}>
                        <Route path="/articles/painter/filter/blur" Page={pg7} Template={tp1} fallback={fb0} />
                        <Route path="/articles/painter/filter/hue" Page={pg8} Template={tp1} fallback={fb0} />
                    </Route>
                    <Route path="/articles/painter/logic" Page={pg9} Template={tp1} fallback={fb0} />
                </Route>
                <Route path="/articles/suzanne" Page={pg10} Template={tp1} fallback={fb0} />
                <Route path="/articles/test" Page={pg11} Template={tp1} fallback={fb0} />
                <Route path="/articles/texture" Page={pg12} Template={tp1} fallback={fb0}>
                    <Route path="/articles/texture/cube" Page={pg13} Template={tp1} fallback={fb0} />
                </Route>
            </Route>
            <Route path="/tools" fallback={fb0}>
                <Route path="/tools/gltf" Page={pg15} fallback={fb0} />
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
    access?: (context: RouteMatch | null) => Promise<boolean>
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    access,
}: RouteProps) {
    const [authorized, setAuthorized] = React.useState<boolean | undefined>(
        false
    )
    const context = useRouteContext()
    const m = context && matchRoute(context.path, ROUTES[path as RoutePath])
    React.useEffect(() => {
        if (!context || !m) return

        if (!access) {
            setAuthorized(true)
        } else {
            setAuthorized(undefined)
            access(context)
                .then(setAuthorized)
                .catch(ex => {
                    console.error("Error in access() function:", ex)
                    setAuthorized(false)
                })

        }
    }, [access, context])

    if (!m) return null

    if (!authorized) return fallback

    if (m.distance === 0) {
        if (!Page) return null

        const element = Template ? (
            <Template params={m.params}>
                <Page params={m.params} />
            </Template>
        ) : (
            <Page params={m.params} />
        )
        if (Layout) {
            return (
                <Layout params={m.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={m.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
