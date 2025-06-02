/* eslint-disable unicorn/prevent-abbreviations */
import wassemble from "wassemble/wassemble.mjs"

import { WasmModule } from "./types"
import { wasm_module } from "./module"
import { tgdCodeStringify } from "@tgd/shader"

export type * from "./types"
export * from "./code"
export * from "./local"
export * from "./module"

export async function tgdWasmCompile<T>(
    typeGuard: (data: unknown) => asserts data is T,
    module: WasmModule,
    importObject: Record<
        string,
        Record<string, (...args: unknown[]) => unknown>
    > = {}
): Promise<T> {
    const code = tgdCodeStringify(wasm_module(module))
    const binary = wassemble(code)
    const instance = await WebAssembly.instantiate(
        new WebAssembly.Module(binary),
        importObject
    )
    const { exports } = instance
    typeGuard(exports)
    return exports as T
}
