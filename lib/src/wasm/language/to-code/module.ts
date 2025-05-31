import { TgdCodeBloc } from "@tgd/shader"
import { WasmModule } from "../types"
import { codeFunctionExport, codeFunctionImport } from "./function"

export function wasmModule(module: WasmModule): TgdCodeBloc {
    const body: TgdCodeBloc = []
    const { imports, exports, functions } = module
    if (imports && imports.length > 0) {
        body.push(";; Imported functions")
        for (const child of imports) {
            body.push(...codeFunctionImport(child))
        }
    }
    if (functions && functions.length > 0) {
        body.push(";; Private functions")
    }
    if (exports.length > 0) {
        body.push(";; Exported functions")
        for (const child of exports) {
            body.push(...codeFunctionExport(child))
        }
    }
    return ["(module", body, ")"]
}
