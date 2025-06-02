import { TgdCodeBloc } from "@tgd/shader"

export function wasm_local_get(name: string): TgdCodeBloc[] {
    return [`(local.get $${name})`]
}

export function wasm_local_set(
    name: string,
    value: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [`(local.set $${name}`, [...value], ")"]
}

/**
 * Store a value in a local variable and keep this value on the stack.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Variables/Local_tee)
 */
export function wasm_local_tee(
    name: string,
    value: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [`(local.tee $${name}`, [...value], ")"]
}
