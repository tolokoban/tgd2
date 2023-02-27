import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Page from "./pages"
import PageTheme from "./pages/theme"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Page />,
        },
        {
            path: "theme",
            element: <PageTheme />,
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
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}
