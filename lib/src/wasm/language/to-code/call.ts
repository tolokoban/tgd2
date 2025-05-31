/* eslint-disable unicorn/prevent-abbreviations */
import { TgdCodeBloc } from "@tgd/shader"

export function wasmCall(
    funcName: string,
    ...args: TgdCodeBloc[]
): TgdCodeBloc[] {
    return [...args, `call $${funcName}`]
}
