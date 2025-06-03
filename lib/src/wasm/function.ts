/* eslint-disable unicorn/prevent-abbreviations */
import { WasmType } from "./types"
import { TgdCodeBloc } from "@tgd/shader"
import { WasmFunction, WasmFunctionImport } from "./types"

export function wasm_function_import(func: WasmFunctionImport): TgdCodeBloc[] {
    const body: TgdCodeBloc = []
    if (func.params) {
        body.push(func.params.map(type => `(param ${type})`).join(" "))
    }
    if (func.results) {
        body.push(`(result ${func.results.join(" ")})`)
    }
    return [
        `(func $${func.name} (import ${JSON.stringify(
            func.moduleName
        )} ${JSON.stringify(func.moduleFunc ?? func.name)})`,
        ...body,
        ")",
    ]
}

export function wasm_function(name: string, func: WasmFunction): TgdCodeBloc[] {
    const body: TgdCodeBloc = []
    if (func.params) {
        body.push(codeGenericParam("param", func.params))
    }
    if (func.results) {
        body.push(`(result ${func.results.join(" ")})`)
    }
    if (func.locals) {
        body.push(codeGenericParam("local", func.locals))
    }
    if (func.body) body.push(...func.body)
    return [`(func $${name}`, body, ")"]
}

function codeGenericParam(
    id: "param" | "local",
    param: Record<string, WasmType>
): string {
    return Object.keys(param)
        .map(name => `(${id} $${name} ${param[name]})`)
        .join(" ")
}
