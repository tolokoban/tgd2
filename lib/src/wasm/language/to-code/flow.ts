import { TgdCodeBloc } from "@tgd/shader"

/**
 * Pops a value from the stack, and discards it.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/Drop)
 */
export function wasmDrop(): TgdCodeBloc[] {
    return ["drop"]
}

/**
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
 */
export function wasmIf(
    condition: TgdCodeBloc[],
    thenBloc: TgdCodeBloc[],
    elseBloc?: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [
        ...condition,
        "(if",
        ["(then", thenBloc, ")", ...(elseBloc ? ["(else", elseBloc, ")"] : [])],
        ")",
    ]
}
