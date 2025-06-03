import * as React from "react"
import App from "./app"
import { createRoot } from "react-dom/client"
import { Theme } from "@tolokoban/ui"
import {
    WasmModule,
    tgdCodeStringify,
    tgdWasmCompile,
    wasm_f32_add,
    wasm_f32_mul,
    wasm_f32_sub,
    wasm_i32_add,
    wasm_i32_and,
    wasm_i32_const,
    wasm_i32_mul,
    wasm_i32_shr_s,
    wasm_if,
    wasm_if_i32,
    wasm_local_get,
    wasm_module,
} from "@tolokoban/tgd"

import "./index.css"
import "./highlight.css"
import { assertType } from "@tolokoban/type-guards"

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

function assertTestFunction(data: unknown): asserts data is {
    test(a: number): number
} {
    assertType(data, { test: "function" })
}

async function test() {
    const module: WasmModule = {
        // imports: [
        //     {
        //         moduleName: "Math",
        //         name: "cos",
        //         params: ["f32"],
        //         results: ["f32"],
        //     },
        // ],
        functions: {
            test: {
                params: { a: "i32" },
                results: ["i32"],
                body: wasm_if_i32(
                    wasm_i32_and(wasm_local_get("a"), wasm_i32_const(1)),
                    wasm_i32_add(
                        wasm_i32_const(1),
                        wasm_i32_mul(wasm_local_get("a"), wasm_i32_const(3))
                    ),
                    wasm_i32_shr_s(wasm_local_get("a"), wasm_i32_const(1))
                ),
            },
        },
        exports: ["test"],
    }
    const codeBloc = wasm_module(module)
    console.log("🚀 [index] codeBloc =", codeBloc) // @FIXME: Remove this line written on 2025-05-31 at 18:38
    const code = tgdCodeStringify(codeBloc)
    console.log(code)
    const bundle = await tgdWasmCompile(assertTestFunction, module)
    let value = 4523
    while (value > 1) {
        console.log("Syracuse: ", value)
        value = bundle.test(value)
    }
}

test()
