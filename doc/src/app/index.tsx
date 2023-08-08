    /**
     * WARNING! this file has been generated automatically.
     * Please do not edit it because it will probably be overwritten.
     * 2023-08-08T19:57:52.896Z
     */
    import React from "react"
    import { createHashRouter, RouterProvider } from "react-router-dom"
    import Loading from "./loading"
    import Page from "./page.mdx"
    import Layout from "./layout"
    
    const Page0 = React.lazy(() => import("./painter"))
    const Page1 = React.lazy(() => import("./painter/background"))
    const Page2 = React.lazy(() => import("./scene"))
    
    const router = createHashRouter(
        [
            {
                path: "/",
                element: <Page />
            },
            {
                path: "/painter",
                element: <React.Suspense fallback={<Loading />}><Page0 /></React.Suspense>
            },
            {
                path: "/painter/background",
                element: <React.Suspense fallback={<Loading />}><Page1 /></React.Suspense>
            },
            {
                path: "/scene",
                element: <React.Suspense fallback={<Loading />}><Page2 /></React.Suspense>
            },
        ],
        {
            basename: ""
        }
    )
    export default function App() {
        return (
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        )
    }