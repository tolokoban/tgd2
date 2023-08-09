/**
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 * 2023-08-09T12:03:03.635Z
 */
import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import Loading from "./loading"

const Page = React.lazy(() => import("./page.mdx"))
const Page0 = React.lazy(() => import("./painter"))
const Page1 = React.lazy(() => import("./painter/background"))
const Page2 = React.lazy(() => import("./painter/logic"))
const Page3 = React.lazy(() => import("./scene"))

// const router = createHashRouter([
//     {
//         path: "/",
//         element: (
//             <React.Suspense fallback={<Loading />}>
//                 <Layout>
//                     <Page />
//                 </Layout>
//             </React.Suspense>
//         ),
//     },
//     {
//         path: "/painter",
//         element: (
//             <React.Suspense fallback={<Loading />}>
//                 <Page0 />
//             </React.Suspense>
//         ),
//     },
//     {
//         path: "/painter/background",
//         element: (
//             <React.Suspense fallback={<Loading />}>
//                 <Page1 />
//             </React.Suspense>
//         ),
//     },
//     {
//         path: "/painter/logic",
//         element: (
//             <React.Suspense fallback={<Loading />}>
//                 <Page2 />
//             </React.Suspense>
//         ),
//     },
//     {
//         path: "/scene",
//         element: (
//             <React.Suspense fallback={<Loading />}>
//                 <Page3 />
//             </React.Suspense>
//         ),
//     },
// ])
export default function App() {
    // return <RouterProvider router={router} />
    React.useEffect(() => {
        console.log("MOUNT")
    }, [])
    return (
        <Layout>
            <Route path="/" element={<Page />}>
                <Route path="/painter" element={<Page0 />}>
                    <Route path="/painter/background" element={<Page1 />} />
                    <Route path="/painter/logic" element={<Page2 />} />
                </Route>
                <Route path="/scene" element={<Page3 />} />
            </Route>
        </Layout>
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
}

function Route({ path, element, fallback, children }: RouteProps) {
    const hash = useHash()
    const m = match(hash, path)
    if (!m) return null

    if (m.full) {
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return <>{children}</>
}
