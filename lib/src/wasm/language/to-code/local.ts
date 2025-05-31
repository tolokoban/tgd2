import { TgdCodeBloc } from "@tgd/shader"

export function wasmLocalGet(name: string): TgdCodeBloc[] {
    return [`local.get $${name}`]
}

export function wasmLocalSet(
    name: string,
    value: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [...value, `local.set $${name}`]
}

/**
 * Store a value in a local variable and keep this value on the stack.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Variables/Local_tee)
 */
export function wasmLocalTee(
    name: string,
    value: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [...value, `local.tee $${name}`]
}
