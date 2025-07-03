import { createRoot } from "react-dom/client"

import App from "./app"
import { Theme } from "@tolokoban/ui"
import {
    type WasmModule,
    tgdCodeStringify,
    tgdWasmCompile,
    wasm_i64_add,
    wasm_i64_and,
    wasm_i64_const,
    wasm_i64_eq,
    wasm_i64_gt_s,
    wasm_i64_mul,
    wasm_i64_shr_s,
    wasm_if_i64,
    wasm_local_get,
    wasm_local_set,
    wasm_module,
    wasm_while,
} from "@tolokoban/tgd"
import { assertType } from "@tolokoban/type-guards"

import "./index.css"
import "./highlight.css"

async function start() {
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
    test(a: bigint): bigint
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
                params: { a: "i64" },
                results: ["i64"],
                body: [
                    wasm_if_i64(
                        wasm_i64_gt_s(wasm_local_get("a"), wasm_i64_const(1)),
                        [
                            wasm_while(
                                wasm_i64_eq(
                                    wasm_i64_const(0),
                                    wasm_i64_and(
                                        wasm_local_get("a"),
                                        wasm_i64_const(1)
                                    )
                                ),
                                wasm_local_set(
                                    "a",
                                    wasm_i64_shr_s(
                                        wasm_local_get("a"),
                                        wasm_i64_const(1)
                                    )
                                )
                            ),
                            wasm_i64_add(
                                wasm_i64_const(1),
                                wasm_i64_mul(
                                    wasm_local_get("a"),
                                    wasm_i64_const(3)
                                )
                            ),
                        ],
                        wasm_i64_const(1)
                    ),
                ],
            },
        },
        exports: ["test"],
    }
    const codeBloc = wasm_module(module)
    console.log("🚀 [index] codeBloc =", codeBloc) // @FIXME: Remove this line written on 2025-05-31 at 18:38
    const code = tgdCodeStringify(codeBloc)
    console.log(code)
    const bundle = await tgdWasmCompile(assertTestFunction, module)
    let value = 4523n
    while (value > 4n) {
        console.log("Syracuse: ", value)
        value = bundle.test(value)
    }
    console.log("End: ", value)
}

// test()
