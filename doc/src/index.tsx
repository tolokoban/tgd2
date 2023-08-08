import * as React from "react"
import App from "./app"
import { createRoot } from "react-dom/client"
import { Theme } from "@tolokoban/ui"
import "./index.css"

function start() {
    const theme = new Theme()
    theme.apply()
    const container = document.getElementById("app")
    if (!container) throw Error(`No element with id "app"!`)

    const root = createRoot(container)
    root.render(<App />)
}

start()
