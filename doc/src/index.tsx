import * as React from "react"
import App from "./app"
import { createRoot } from "react-dom/client"
import { Theme } from "@tolokoban/ui"
import "./index.css"
import { TgdCameraPerspective, TgdContext } from "../../lib/dist"

function start() {
    const canvas = document.createElement("canvas")
    const camera = new TgdCameraPerspective()
    // const context = new TgdContext(canvas)

    const theme = new Theme()
    theme.apply()
    const container = document.getElementById("app")
    if (!container) throw Error(`No element with id "app"!`)

    const root = createRoot(container)
    root.render(<App />)

    const splash = document.getElementById("splash-screen")
    if (!splash) throw Error("Unable to find element #splash-screen!")

    splash.classList.add("vanish")
    window.setTimeout(() => splash.parentNode?.removeChild(splash), 1000)
}

start()