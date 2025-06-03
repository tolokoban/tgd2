 
import { TgdCodeBloc } from "@tgd/shader"

export type WasmModule = {
    /** Names of the functions to export */
    imports?: WasmFunctionImport[]
    functions: Record<string, WasmFunction>
    exports: string[]
}

export type WasmFunction = {
    params?: Record<string, WasmType>
    results?: WasmType[]
    locals?: Record<string, WasmType>
    body: TgdCodeBloc[]
}

export type WasmFunctionImport = {
    name: string
    params?: WasmType[]
    results?: WasmType[]
    moduleName: string
    moduleFunc?: string
}

export type WasmType = "i32" | "i64" | "f32" | "f64" | "v128"
