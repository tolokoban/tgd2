import { TgdCodeBloc } from "@tgd/shader"

/**
 * Square root
 * @see [MDN](https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Numeric/Square_root)
 */
export function wasmSqrt(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return [...value, "f32.sqrt"]
}
