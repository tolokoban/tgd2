    /**
     * WARNING! this file has been generated automatically.
     * Please do not edit it because it will probably be overwritten.
     * 2023-08-10T08:59:27.114Z
     */
    import React from "react"
    import Layout0 from "./layout"
    import Layout2 from "./painter/layout"
    import Loading0 from "./loading"
    import Template0 from "./template"
    
    const Page0 = React.lazy(() => import("./page.mdx"))
    const Page1 = React.lazy(() => import("./attributes/page.mdx"))
    const Page2 = React.lazy(() => import("./painter/page.mdx"))
    const Page3 = React.lazy(() => import("./painter/background/page.mdx"))
    const Page4 = React.lazy(() => import("./painter/clear/page.mdx"))
    const Page5 = React.lazy(() => import("./painter/logic/page.mdx"))
    const Page6 = React.lazy(() => import("./scene/page.mdx"))
    
    export default function App() {
        return (
            <Route path="/" Page={Page0} Layout={Layout0} Template={Template0} fallback={<Loading0 />}>
                <Route path="/attributes" Page={Page1} Template={Template0} fallback={<Loading0 />} />
                <Route path="/painter" Page={Page2} Layout={Layout2} Template={Template0} fallback={<Loading0 />}>
                    <Route path="/painter/background" Page={Page3} Template={Template0} fallback={<Loading0 />} />
                    <Route path="/painter/clear" Page={Page4} Template={Template0} fallback={<Loading0 />} />
                    <Route path="/painter/logic" Page={Page5} Template={Template0} fallback={<Loading0 />} />
                </Route>
                <Route path="/scene" Page={Page6} Template={Template0} fallback={<Loading0 />} />
            </Route>
        )
    }
    
function useHash() {
    const [hash, setHash] = React.useState(
        extractHash(window.location.toString())
    )
    React.useEffect(() => {
        const handler = (event: HashChangeEvent) => {
            const oldHash = extractHash(event.oldURL)
            const newHash = extractHash(event.newURL)
            const absHash = ensureAbsoluteHash(newHash, oldHash)
            if (absHash !== newHash) {
                console.log(">>>", absHash)
                history.replaceState({}, "", `#${absHash}`)
            }
            setHash(absHash)
        }
        window.addEventListener("hashchange", handler)
        return () => window.removeEventListener("hashchange", handler)
    }, [])
    return hash
}

function extractHash(url: string) {
    const hash = new URL(url).hash
    if (!hash) return "/"

    return hash.startsWith("#") ? hash.substring(1) : hash
}

function ensureAbsoluteHash(newHash: string, oldHash: string) {
    if (newHash.startsWith("/")) return newHash

    let hash = newHash
    while (hash.startsWith("./")) {
        hash = hash.substring("./".length)
    }
    const path = oldHash.substring(1).split("/")
    for (const item of newHash.split("/")) {
        if (item === "..") {
            if (path.length > 0) path.pop()
        } else {
            path.push(item)
        }
    }
    return `/${path.join("/")}`
}

interface HashMatch {
    params: { [name: string]: string }
    full: boolean
}

function match(hash: string, path: string): null | HashMatch {
    if (!hash.startsWith(path)) return null

    return {
        full: hash.length === path.length,
        params: {},
    }
}

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: React.FC<{}>
    Layout?: React.FC<{ children: React.ReactNode }>
    Template?: React.FC<{ children: React.ReactNode }>
}

function Route({ path, fallback, children, Page, Layout, Template }: RouteProps) {
    const hash = useHash()
    const m = match(hash, path)
    if (!m) return null

    if (m.full) {
        if (!Page) return null
        
        const element = Template ? <Template><Page /></Template> : <Page />
        if (Layout) {
            return (
                <Layout>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? <Layout>{children}</Layout> : <>{children}</>
}
