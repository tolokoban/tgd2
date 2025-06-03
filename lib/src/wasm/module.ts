import { TgdCodeBloc } from "@tgd/shader"
import { WasmModule } from "./types"
import { wasm_function, wasm_function_import } from "./function"

export function wasm_module(module: WasmModule): TgdCodeBloc {
    const body: TgdCodeBloc = []
    const { imports, exports, functions } = module
    if (imports && imports.length > 0) {
        body.push(";; Imported functions")
        for (const child of imports) {
            body.push(...wasm_function_import(child))
        }
    }
    for (const name of Object.keys(functions)) {
        body.push(...wasm_function(name, functions[name]))
    }
    if (exports.length > 0) {
        body.push(";; Exported functions")
        for (const name of exports) {
            body.push(`(export ${JSON.stringify(name)} (func $${name}))`)
        }
    }
    return ["(module", body, ")"]
}
