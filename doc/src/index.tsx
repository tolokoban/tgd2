import * as React from "react"
import App from "./app"
import { createRoot } from "react-dom/client"
import { Theme } from "@tolokoban/ui"
import { tgdCodeStringify, wasmModule } from "@tolokoban/tgd"

import "./index.css"
import "./highlight.css"

function start() {
    new Theme({
        colors: {
            neutral: ["#111", "#999"],
        },
    }).apply()
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

const codeBloc = wasmModule({
    imports: [
        {
            moduleName: "Math",
            name: "cos",
            params: ["f32"],
            results: ["f32"],
        },
    ],
    exports: [
        {
            name: "computeNormals",
            params: { angle: "f32", loops: "i32" },
            results: ["i32"],
            body: [],
        },
    ],
})
console.log("🚀 [index] codeBloc =", codeBloc) // @FIXME: Remove this line written on 2025-05-31 at 18:38
const code = tgdCodeStringify(codeBloc)
console.log(code)
