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
import Layout13 from "./articles/painter/layout"
import Layout50 from "./tricks/layout"
import Loading0 from "./loading"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./articles/page.mdx"))
const Page3 = React.lazy(() => import("./articles/animation/page.mdx"))
const Page4 = React.lazy(() => import("./articles/animation/basic/page.mdx"))
const Page5 = React.lazy(() => import("./articles/animation/chain/page.mdx"))
const Page6 = React.lazy(() => import("./articles/animation/transfo/page.mdx"))
const Page8 = React.lazy(() => import("./articles/custom-shader/holes/page.mdx"))
const Page9 = React.lazy(() => import("./articles/gltf/page.mdx"))
const Page12 = React.lazy(() => import("./articles/math/fractal/pascal-triangle/page.mdx"))
const Page13 = React.lazy(() => import("./articles/painter/page.mdx"))
const Page14 = React.lazy(() => import("./articles/painter/background/page.mdx"))
const Page15 = React.lazy(() => import("./articles/painter/background/2/page.mdx"))
const Page16 = React.lazy(() => import("./articles/painter/clear/page.mdx"))
const Page17 = React.lazy(() => import("./articles/painter/custom/page.mdx"))
const Page18 = React.lazy(() => import("./articles/painter/filter/page.mdx"))
const Page19 = React.lazy(() => import("./articles/painter/filter/blur/page.mdx"))
const Page20 = React.lazy(() => import("./articles/painter/filter/chromatic-aberration/page.mdx"))
const Page21 = React.lazy(() => import("./articles/painter/filter/custom/page.mdx"))
const Page22 = React.lazy(() => import("./articles/painter/filter/hue/page.mdx"))
const Page23 = React.lazy(() => import("./articles/painter/framebuffer/page.mdx"))
const Page25 = React.lazy(() => import("./articles/painter/framebuffer/example0/01/page.mdx"))
const Page26 = React.lazy(() => import("./articles/painter/framebuffer/example0/02/page.mdx"))
const Page27 = React.lazy(() => import("./articles/painter/framebuffer/example0/03/page.mdx"))
const Page28 = React.lazy(() => import("./articles/painter/framebuffer/example0/04/page.mdx"))
const Page29 = React.lazy(() => import("./articles/painter/framebuffer/example0/05/page.mdx"))
const Page30 = React.lazy(() => import("./articles/painter/framebuffer/example1/page.mdx"))
const Page31 = React.lazy(() => import("./articles/painter/framebuffer/example2/page.mdx"))
const Page32 = React.lazy(() => import("./articles/painter/framebuffer/example3/page.mdx"))
const Page33 = React.lazy(() => import("./articles/painter/logic/page.mdx"))
const Page34 = React.lazy(() => import("./articles/painter/node/page.mdx"))
const Page35 = React.lazy(() => import("./articles/painter/segments/page.mdx"))
const Page36 = React.lazy(() => import("./articles/painter/segments/02/page.mdx"))
const Page37 = React.lazy(() => import("./articles/state/page.mdx"))
const Page38 = React.lazy(() => import("./articles/state/cull/page.mdx"))
const Page39 = React.lazy(() => import("./articles/state/stencil/page.mdx"))
const Page40 = React.lazy(() => import("./articles/suzanne/page.mdx"))
const Page41 = React.lazy(() => import("./articles/test/page.mdx"))
const Page42 = React.lazy(() => import("./articles/texture/page.mdx"))
const Page44 = React.lazy(() => import("./articles/texture/2d/bitmap/page.mdx"))
const Page45 = React.lazy(() => import("./articles/texture/2d/data/page.mdx"))
const Page46 = React.lazy(() => import("./articles/texture/cube/page.mdx"))
const Page47 = React.lazy(() => import("./tools/page.mdx"))
const Page48 = React.lazy(() => import("./tools/filter/page"))
const Page49 = React.lazy(() => import("./tools/gltf/page"))
const Page50 = React.lazy(() => import("./tricks/page.mdx"))
const Page51 = React.lazy(() => import("./tricks/color-mask/page.mdx"))
const Page52 = React.lazy(() => import("./tricks/color-mask/2/page.mdx"))
const Page53 = React.lazy(() => import("./tricks/color-mask/3/page.mdx"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb0 = <Loading0/>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const ly2 = Layout2
    const pg2 = Page2
    const pg3 = Page3
    const pg4 = Page4
    const pg5 = Page5
    const pg6 = Page6
    const pg8 = Page8
    const pg9 = Page9
    const pg12 = Page12
    const ly13 = Layout13
    const pg13 = Page13
    const pg14 = Page14
    const pg15 = Page15
    const pg16 = Page16
    const pg17 = Page17
    const pg18 = Page18
    const pg19 = Page19
    const pg20 = Page20
    const pg21 = Page21
    const pg22 = Page22
    const pg23 = Page23
    const pg25 = Page25
    const pg26 = Page26
    const pg27 = Page27
    const pg28 = Page28
    const pg29 = Page29
    const pg30 = Page30
    const pg31 = Page31
    const pg32 = Page32
    const pg33 = Page33
    const pg34 = Page34
    const pg35 = Page35
    const pg36 = Page36
    const pg37 = Page37
    const pg38 = Page38
    const pg39 = Page39
    const pg40 = Page40
    const pg41 = Page41
    const pg42 = Page42
    const pg44 = Page44
    const pg45 = Page45
    const pg46 = Page46
    const pg47 = Page47
    const pg48 = Page48
    const pg49 = Page49
    const ly50 = Layout50
    const pg50 = Page50
    const pg51 = Page51
    const pg52 = Page52
    const pg53 = Page53
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb0} context={context}>
            <Route path="/api" Page={pg1} fallback={fb0} context={context}/>
            <Route path="/articles" Page={pg2} Layout={ly2} fallback={fb0} context={context}>
                <Route path="/articles/animation" Page={pg3} fallback={fb0} context={context}>
                    <Route path="/articles/animation/basic" Page={pg4} fallback={fb0} context={context}/>
                    <Route path="/articles/animation/chain" Page={pg5} fallback={fb0} context={context}/>
                    <Route path="/articles/animation/transfo" Page={pg6} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/custom-shader" fallback={fb0} context={context}>
                    <Route path="/articles/custom-shader/holes" Page={pg8} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/gltf" Page={pg9} fallback={fb0} context={context}/>
                <Route path="/articles/math" fallback={fb0} context={context}>
                    <Route path="/articles/math/fractal" fallback={fb0} context={context}>
                        <Route path="/articles/math/fractal/pascal-triangle" Page={pg12} fallback={fb0} context={context}/>
                    </Route>
                </Route>
                <Route path="/articles/painter" Page={pg13} Layout={ly13} fallback={fb0} context={context}>
                    <Route path="/articles/painter/background" Page={pg14} fallback={fb0} context={context}>
                        <Route path="/articles/painter/background/2" Page={pg15} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/clear" Page={pg16} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/custom" Page={pg17} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/filter" Page={pg18} fallback={fb0} context={context}>
                        <Route path="/articles/painter/filter/blur" Page={pg19} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/chromatic-aberration" Page={pg20} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/custom" Page={pg21} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/hue" Page={pg22} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/framebuffer" Page={pg23} fallback={fb0} context={context}>
                        <Route path="/articles/painter/framebuffer/example0" fallback={fb0} context={context}>
                            <Route path="/articles/painter/framebuffer/example0/01" Page={pg25} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/02" Page={pg26} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/03" Page={pg27} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/04" Page={pg28} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/05" Page={pg29} fallback={fb0} context={context}/>
                        </Route>
                        <Route path="/articles/painter/framebuffer/example1" Page={pg30} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/framebuffer/example2" Page={pg31} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/framebuffer/example3" Page={pg32} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/logic" Page={pg33} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/node" Page={pg34} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/segments" Page={pg35} fallback={fb0} context={context}>
                        <Route path="/articles/painter/segments/02" Page={pg36} fallback={fb0} context={context}/>
                    </Route>
                </Route>
                <Route path="/articles/state" Page={pg37} fallback={fb0} context={context}>
                    <Route path="/articles/state/cull" Page={pg38} fallback={fb0} context={context}/>
                    <Route path="/articles/state/stencil" Page={pg39} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/suzanne" Page={pg40} fallback={fb0} context={context}/>
                <Route path="/articles/test" Page={pg41} fallback={fb0} context={context}/>
                <Route path="/articles/texture" Page={pg42} fallback={fb0} context={context}>
                    <Route path="/articles/texture/2d" fallback={fb0} context={context}>
                        <Route path="/articles/texture/2d/bitmap" Page={pg44} fallback={fb0} context={context}/>
                        <Route path="/articles/texture/2d/data" Page={pg45} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/texture/cube" Page={pg46} fallback={fb0} context={context}/>
                </Route>
            </Route>
            <Route path="/tools" Page={pg47} fallback={fb0} context={context}>
                <Route path="/tools/filter" Page={pg48} fallback={fb0} context={context}/>
                <Route path="/tools/gltf" Page={pg49} fallback={fb0} context={context}/>
            </Route>
            <Route path="/tricks" Page={pg50} Layout={ly50} fallback={fb0} context={context}>
                <Route path="/tricks/color-mask" Page={pg51} fallback={fb0} context={context}>
                    <Route path="/tricks/color-mask/2" Page={pg52} fallback={fb0} context={context}/>
                    <Route path="/tricks/color-mask/3" Page={pg53} fallback={fb0} context={context}/>
                </Route>
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
