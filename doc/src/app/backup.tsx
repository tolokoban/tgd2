import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout"
import Page from "./page.mdx"
import PagePainter from "./painter/page.mdx"
import PagePainterBackground from "./painter/background/page.mdx"

const router = createHashRouter(
    [
        {
            path: "/",
            element: <Page />,
        },
        {
            path: "painter",
            element: <PagePainter />,
        },
        {
            path: "painter/background",
            element: <PagePainterBackground />,
        },
    ],
    {
        basename: window.location.pathname.startsWith("/tgd2") ? "/tgd2" : "",
    }
)

console.log("🚀 [index] window.location.pathname = ", window.location.pathname) // @FIXME: Remove this line written on 2022-11-18 at 17:27

export default function App() {
    return (
        <React.StrictMode>
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </React.StrictMode>
    )
}
