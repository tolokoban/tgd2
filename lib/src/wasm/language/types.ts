import { TgdCodeBloc } from "@tgd/shader"

/* eslint-disable unicorn/prevent-abbreviations */
export type WasmModule = {
    exports: WasmFunctionExport[]
    imports?: WasmFunctionImport[]
    functions?: WasmFunctionPrivate[]
}

export type WasmFunctionExport = {
    name: string
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

export type WasmFunctionPrivate = Omit<WasmFunctionExport, "moduleName">

export type WasmType = "i32" | "i64" | "f32" | "f64" | "v128"
