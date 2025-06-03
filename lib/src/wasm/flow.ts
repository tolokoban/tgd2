/* eslint-disable unicorn/prevent-abbreviations */
import { TgdCodeBloc } from "@tgd/shader"
import { WasmType } from "./types"

export function wasm_call(
    funcName: string,
    ...args: TgdCodeBloc[]
): TgdCodeBloc[] {
    if (args.length === 0) return [`(call $${funcName})`]
    return [`(call $${funcName}`, args, ")"]
}

/**
 * Pops a value from the stack, and discards it.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/Drop)
 */
export function wasm_drop(): TgdCodeBloc[] {
    return ["drop"]
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasm_if(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return wasm_if_typed(null, condition, thenBloc, elseBloc)
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasm_if_i32(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return wasm_if_typed("i32", condition, thenBloc, elseBloc)
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasm_if_i64(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return wasm_if_typed("i64", condition, thenBloc, elseBloc)
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasm_if_f32(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return wasm_if_typed("f32", condition, thenBloc, elseBloc)
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasm_if_f64(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return wasm_if_typed("f64", condition, thenBloc, elseBloc)
}

export function wasm_if_typed(
    type: WasmType | null,
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [
        `(if ${type ? `(result ${type})` : ""}`,
        [
            ...condition,
            "(then",
            thenBloc,
            ")",
            ...(elseBloc ? ["(else", elseBloc, ")"] : []),
        ],
        ")",
    ]
}
