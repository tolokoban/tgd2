import { TgdCodeBloc } from "@tgd/shader"

/**
 * Copy data from one place to another,
 * in memory.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Memory/Copy)
 */
export function wasm_memory_copy(
    from: TgdCodeBloc[],
    to: TgdCodeBloc[],
    length: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [...to, ...from, ...length, `memory.copy`]
}

/**
 * Fill a region of memory with the same byte value.
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Memory/Fill)
 */
export function wasm_memory_fill(
    from: TgdCodeBloc[],
    length: TgdCodeBloc[],
    fillByte: TgdCodeBloc[] = ["i32.const 0"]
): TgdCodeBloc[] {
    return [...from, ...length, ...fillByte, `memory.fill`]
}
