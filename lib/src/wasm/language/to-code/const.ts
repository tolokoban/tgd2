import { TgdCodeBloc } from "@tgd/shader"

export function wasmConstI32(value: number): TgdCodeBloc[] {
    return [`i32.const ${Math.floor(value)}`]
}

export function wasmConstI64(value: bigint): TgdCodeBloc[] {
    return [`i32.const ${value}`]
}

export function wasmConstF32(value: number): TgdCodeBloc[] {
    return [`f32.const ${value}`]
}

export function wasmConstF64(value: number): TgdCodeBloc[] {
    return [`f32.const ${value}`]
}
