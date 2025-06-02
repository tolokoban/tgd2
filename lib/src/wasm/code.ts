/* eslint-disable unicorn/prevent-abbreviations */
import { TgdCodeBloc } from "@tgd/shader"

export function wasm_i32_load(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.load", body, ")"]
}
export function wasm_i64_load(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load", body, ")"]
}
export function wasm_f32_load(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(f32.load", body, ")"]
}
export function wasm_f64_load(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(f64.load", body, ")"]
}
export function wasm_i32_store(offset: TgdCodeBloc[], value: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset, ...value)
    return ["(i32.store", body, ")"]
}
export function wasm_i64_store(offset: TgdCodeBloc[], value: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset, ...value)
    return ["(i64.store", body, ")"]
}
export function wasm_f32_store(offset: TgdCodeBloc[], value: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset, ...value)
    return ["(f32.store", body, ")"]
}
export function wasm_f64_store(offset: TgdCodeBloc[], value: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset, ...value)
    return ["(f64.store", body, ")"]
}
export function wasm_i32_load8_u(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.load8_u", body, ")"]
}
export function wasm_i32_load8_s(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.load8_s", body, ")"]
}
export function wasm_i32_load16_u(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.load16_u", body, ")"]
}
export function wasm_i32_load16_s(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.load16_s", body, ")"]
}
export function wasm_i64_load8_u(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load8_u", body, ")"]
}
export function wasm_i64_load8_s(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load8_s", body, ")"]
}
export function wasm_i64_load16_u(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load16_u", body, ")"]
}
export function wasm_i64_load16_s(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load16_s", body, ")"]
}
export function wasm_i64_load32_u(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load32_u", body, ")"]
}
export function wasm_i64_load32_s(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.load32_s", body, ")"]
}
export function wasm_i32_store8(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.store8", body, ")"]
}
export function wasm_i32_store16(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i32.store16", body, ")"]
}
export function wasm_i64_store8(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.store8", body, ")"]
}
export function wasm_i64_store16(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.store16", body, ")"]
}
export function wasm_i64_store32(offset: TgdCodeBloc[], memory?: string): TgdCodeBloc[] {
    const body: TgdCodeBloc[] = []
    if (memory) {
        body.push(`(memory $$(memory})`)
    }
    body.push(...offset)
    return ["(i64.store32", body, ")"]
}
export function wasm_i32_const(value: number): TgdCodeBloc[] {
    return [`(i32.const ${value})`]
}
export function wasm_i64_const(value: number): TgdCodeBloc[] {
    return [`(i64.const ${value})`]
}
export function wasm_f32_const(value: number): TgdCodeBloc[] {
    return [`(f32.const ${value})`]
}
export function wasm_f64_const(value: number): TgdCodeBloc[] {
    return [`(f64.const ${value})`]
}
export function wasm_i32_clz(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.clz", [...value], ")"]
}
export function wasm_i32_ctz(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.ctz", [...value], ")"]
}
export function wasm_i32_popcnt(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.popcnt", [...value], ")"]
}
export function wasm_i32_extend8_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.extend8_s", [...value], ")"]
}
export function wasm_i32_extend16_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.extend16_s", [...value], ")"]
}
export function wasm_i64_clz(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.clz", [...value], ")"]
}
export function wasm_i64_ctz(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.ctz", [...value], ")"]
}
export function wasm_i64_popcnt(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.popcnt", [...value], ")"]
}
export function wasm_i64_extend8_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.extend8_s", [...value], ")"]
}
export function wasm_i64_extend16_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.extend16_s", [...value], ")"]
}
export function wasm_i64_extend32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.extend32_s", [...value], ")"]
}
export function wasm_f32_neg(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.neg", [...value], ")"]
}
export function wasm_f32_abs(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.abs", [...value], ")"]
}
export function wasm_f32_sqrt(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.sqrt", [...value], ")"]
}
export function wasm_f32_ceil(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.ceil", [...value], ")"]
}
export function wasm_f32_floor(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.floor", [...value], ")"]
}
export function wasm_f32_trunc(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.trunc", [...value], ")"]
}
export function wasm_f32_nearest(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.nearest", [...value], ")"]
}
export function wasm_f64_neg(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.neg", [...value], ")"]
}
export function wasm_f64_abs(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.abs", [...value], ")"]
}
export function wasm_f64_sqrt(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.sqrt", [...value], ")"]
}
export function wasm_f64_ceil(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.ceil", [...value], ")"]
}
export function wasm_f64_floor(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.floor", [...value], ")"]
}
export function wasm_f64_trunc(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.trunc", [...value], ")"]
}
export function wasm_f64_nearest(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.nearest", [...value], ")"]
}
export function wasm_i32_add(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.add", [...a, ...b], ")"]
}
export function wasm_i32_sub(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.sub", [...a, ...b], ")"]
}
export function wasm_i32_mul(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.mul", [...a, ...b], ")"]
}
export function wasm_i32_div_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.div_u", [...a, ...b], ")"]
}
export function wasm_i32_div_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.div_s", [...a, ...b], ")"]
}
export function wasm_i32_rem_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.rem_u", [...a, ...b], ")"]
}
export function wasm_i32_rem_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.rem_s", [...a, ...b], ")"]
}
export function wasm_i32_and(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.and", [...a, ...b], ")"]
}
export function wasm_i32_or(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.or", [...a, ...b], ")"]
}
export function wasm_i32_xor(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.xor", [...a, ...b], ")"]
}
export function wasm_i32_shl(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.shl", [...a, ...b], ")"]
}
export function wasm_i32_shr_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.shr_u", [...a, ...b], ")"]
}
export function wasm_i32_shr_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.shr_s", [...a, ...b], ")"]
}
export function wasm_i32_rotl(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.rotl", [...a, ...b], ")"]
}
export function wasm_i32_rotr(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.rotr", [...a, ...b], ")"]
}
export function wasm_i64_add(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.add", [...a, ...b], ")"]
}
export function wasm_i64_sub(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.sub", [...a, ...b], ")"]
}
export function wasm_i64_mul(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.mul", [...a, ...b], ")"]
}
export function wasm_i64_div_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.div_u", [...a, ...b], ")"]
}
export function wasm_i64_div_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.div_s", [...a, ...b], ")"]
}
export function wasm_i64_rem_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.rem_u", [...a, ...b], ")"]
}
export function wasm_i64_rem_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.rem_s", [...a, ...b], ")"]
}
export function wasm_i64_and(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.and", [...a, ...b], ")"]
}
export function wasm_i64_or(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.or", [...a, ...b], ")"]
}
export function wasm_i64_xor(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.xor", [...a, ...b], ")"]
}
export function wasm_i64_shl(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.shl", [...a, ...b], ")"]
}
export function wasm_i64_shr_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.shr_u", [...a, ...b], ")"]
}
export function wasm_i64_shr_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.shr_s", [...a, ...b], ")"]
}
export function wasm_i64_rotl(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.rotl", [...a, ...b], ")"]
}
export function wasm_i64_rotr(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.rotr", [...a, ...b], ")"]
}
export function wasm_f32_add(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.add", [...a, ...b], ")"]
}
export function wasm_f32_sub(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.sub", [...a, ...b], ")"]
}
export function wasm_f32_mul(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.mul", [...a, ...b], ")"]
}
export function wasm_f32_div(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.div", [...a, ...b], ")"]
}
export function wasm_f32_min(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.min", [...a, ...b], ")"]
}
export function wasm_f32_max(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.max", [...a, ...b], ")"]
}
export function wasm_f32_copysign(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.copysign", [...a, ...b], ")"]
}
export function wasm_f64_add(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.add", [...a, ...b], ")"]
}
export function wasm_f64_sub(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.sub", [...a, ...b], ")"]
}
export function wasm_f64_mul(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.mul", [...a, ...b], ")"]
}
export function wasm_f64_div(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.div", [...a, ...b], ")"]
}
export function wasm_f64_min(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.min", [...a, ...b], ")"]
}
export function wasm_f64_max(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.max", [...a, ...b], ")"]
}
export function wasm_f64_copysign(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.copysign", [...a, ...b], ")"]
}
export function wasm_i32_eqz(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.eqz", [...a, ...b], ")"]
}
export function wasm_i64_eqz(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.eqz", [...a, ...b], ")"]
}
export function wasm_i32_eq(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.eq", [...a, ...b], ")"]
}
export function wasm_i32_ne(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.ne", [...a, ...b], ")"]
}
export function wasm_i32_lt_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.lt_u", [...a, ...b], ")"]
}
export function wasm_i32_lt_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.lt_s", [...a, ...b], ")"]
}
export function wasm_i32_le_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.le_u", [...a, ...b], ")"]
}
export function wasm_i32_le_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.le_s", [...a, ...b], ")"]
}
export function wasm_i32_gt_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.gt_u", [...a, ...b], ")"]
}
export function wasm_i32_gt_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.gt_s", [...a, ...b], ")"]
}
export function wasm_i32_ge_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.ge_u", [...a, ...b], ")"]
}
export function wasm_i32_ge_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.ge_s", [...a, ...b], ")"]
}
export function wasm_i64_eq(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.eq", [...a, ...b], ")"]
}
export function wasm_i64_ne(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.ne", [...a, ...b], ")"]
}
export function wasm_i64_lt_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.lt_u", [...a, ...b], ")"]
}
export function wasm_i64_lt_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.lt_s", [...a, ...b], ")"]
}
export function wasm_i64_le_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.le_u", [...a, ...b], ")"]
}
export function wasm_i64_le_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.le_s", [...a, ...b], ")"]
}
export function wasm_i64_gt_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.gt_u", [...a, ...b], ")"]
}
export function wasm_i64_gt_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.gt_s", [...a, ...b], ")"]
}
export function wasm_i64_ge_u(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.ge_u", [...a, ...b], ")"]
}
export function wasm_i64_ge_s(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.ge_s", [...a, ...b], ")"]
}
export function wasm_f32_eq(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.eq", [...a, ...b], ")"]
}
export function wasm_f32_ne(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.ne", [...a, ...b], ")"]
}
export function wasm_f32_lt(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.lt", [...a, ...b], ")"]
}
export function wasm_f32_le(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.le", [...a, ...b], ")"]
}
export function wasm_f32_gt(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.gt", [...a, ...b], ")"]
}
export function wasm_f32_ge(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.ge", [...a, ...b], ")"]
}
export function wasm_f64_eq(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.eq", [...a, ...b], ")"]
}
export function wasm_f64_ne(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.ne", [...a, ...b], ")"]
}
export function wasm_f64_lt(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.lt", [...a, ...b], ")"]
}
export function wasm_f64_le(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.le", [...a, ...b], ")"]
}
export function wasm_f64_gt(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.gt", [...a, ...b], ")"]
}
export function wasm_f64_ge(a: TgdCodeBloc[], b: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.ge", [...a, ...b], ")"]
}
export function wasm_i32_wrap_i64(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.wrap_i64", [...value], ")"]
}
export function wasm_i64_extend_i32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.extend_i32_s", [...value], ")"]
}
export function wasm_i64_extend_i32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.extend_i32_u", [...value], ")"]
}
export function wasm_f32_demote_f64(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.demote_f64", [...value], ")"]
}
export function wasm_f64_promote_f32(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.promote_f32", [...value], ")"]
}
export function wasm_i32_trunc_f32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_f32_u", [...value], ")"]
}
export function wasm_i32_trunc_f32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_f32_s", [...value], ")"]
}
export function wasm_i64_trunc_f32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_f32_u", [...value], ")"]
}
export function wasm_i64_trunc_f32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_f32_s", [...value], ")"]
}
export function wasm_i32_trunc_f64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_f64_u", [...value], ")"]
}
export function wasm_i32_trunc_f64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_f64_s", [...value], ")"]
}
export function wasm_i64_trunc_f64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_f64_u", [...value], ")"]
}
export function wasm_i64_trunc_f64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_f64_s", [...value], ")"]
}
export function wasm_i32_trunc_sat_f32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_sat_f32_u", [...value], ")"]
}
export function wasm_i32_trunc_sat_f32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_sat_f32_s", [...value], ")"]
}
export function wasm_i64_trunc_sat_f32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_sat_f32_u", [...value], ")"]
}
export function wasm_i64_trunc_sat_f32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_sat_f32_s", [...value], ")"]
}
export function wasm_i32_trunc_sat_f64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_sat_f64_u", [...value], ")"]
}
export function wasm_i32_trunc_sat_f64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.trunc_sat_f64_s", [...value], ")"]
}
export function wasm_i64_trunc_sat_f64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_sat_f64_u", [...value], ")"]
}
export function wasm_i64_trunc_sat_f64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.trunc_sat_f64_s", [...value], ")"]
}
export function wasm_f32_convert_i32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.convert_i32_u", [...value], ")"]
}
export function wasm_f32_convert_i32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.convert_i32_s", [...value], ")"]
}
export function wasm_f64_convert_i32_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.convert_i32_u", [...value], ")"]
}
export function wasm_f64_convert_i32_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.convert_i32_s", [...value], ")"]
}
export function wasm_f32_convert_i64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.convert_i64_u", [...value], ")"]
}
export function wasm_f32_convert_i64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.convert_i64_s", [...value], ")"]
}
export function wasm_f64_convert_i64_u(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.convert_i64_u", [...value], ")"]
}
export function wasm_f64_convert_i64_s(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.convert_i64_s", [...value], ")"]
}
export function wasm_f32_reinterpret_i32(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f32.reinterpret_i32", [...value], ")"]
}
export function wasm_f64_reinterpret_i64(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(f64.reinterpret_i64", [...value], ")"]
}
export function wasm_i32_reinterpret_f32(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i32.reinterpret_f32", [...value], ")"]
}
export function wasm_i64_reinterpret_f64(value: TgdCodeBloc[]): TgdCodeBloc[] {
    return ["(i64.reinterpret_f64", [...value], ")"]
}