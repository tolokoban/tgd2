/* eslint-disable unicorn/prevent-abbreviations */
import { WasmModule } from "./types"
import { wasm_module } from "./module"
import { tgdCodeStringify } from "@tgd/shader"

import * as WAST from "./wast"

export type * from "./types"
export * from "./code"
export * from "./flow"
export * from "./local"
export * from "./memory"
export * from "./module"

export async function tgdWasmCompile<T>(
    typeGuard: (data: unknown) => asserts data is T,
    module: WasmModule,
    importObject: Record<
        string,
        Record<string, (...args: unknown[]) => unknown>
    > = {}
): Promise<T> {
    console.log("🚀 [index] globalThis =", globalThis) // @FIXME: Remove this line written on 2025-06-03 at 11:41
    console.log("🚀 [index] WAST =", WAST) // @FIXME: Remove this line written on 2025-06-03 at 11:45
    const { WebAssemblyText } = WAST as {
        WebAssemblyText: {
            encode(source: string): Uint8Array
        }
    }
    const code = tgdCodeStringify(wasm_module(module))
    const binary: Uint8Array = WebAssemblyText.encode(code) // wassemble(code)
    for (let i = 0; i < binary.length; i += 16) {
        const text: string[] = []
        for (let k = i; k < Math.min(i + 16, binary.length); k++) {
            const value = binary[k]
            text.push(value.toString(16).toUpperCase().padStart(2, "0"))
        }
        console.log(text.join(" "))
    }
    const instance = await WebAssembly.instantiate(
        new WebAssembly.Module(binary),
        importObject
    )
    const { exports } = instance
    typeGuard(exports)
    return exports as T
}
