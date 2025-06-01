import Wabt from "wabt"

import { WasmModule } from "./language/types"
import { wasmModule } from "./language/to-code"
import { tgdCodeStringify } from "@tgd/shader"

export type * from "./language/types"
export * from "./language/to-code"

export async function tgdWasmCompile(module: WasmModule) {
    const wabt = await Wabt()
    const code = tgdCodeStringify(wasmModule(module))
    const compiler = wabt.parseWat("tgd2.wat", code)
    compiler.resolveNames()
    compiler.validate()
    const binary = compiler.toBinary({
        log: true,
        write_debug_names: true,
    })
    const { buffer } = binary
    compiler.destroy()
    const compiledModule = await WebAssembly.compile(buffer)
    const instance = await WebAssembly.instantiate(compiledModule, importObject)
    return instance
}
