import { TgdCodeFunctions } from "@tgd/shader"

const CONSTS_FLOAT = {
    E: Math.E,
    PI: Math.PI,
    TAU: 2 * Math.PI,
    PI_INVERSE: 1 / Math.PI,
    TAU_INVERSE: 0.5 / Math.PI,
    DEG_PER_RAD: 180 / Math.PI,
    RAD_PER_DEG: Math.PI / 180,
}

/**
 * Define common constants.
 */
export function tgdCodeConstants(
    ...names: Array<keyof typeof CONSTS_FLOAT>
): TgdCodeFunctions {
    const code: TgdCodeFunctions = {}
    names.forEach(name => {
        code[name] = `const float ${name} = ${CONSTS_FLOAT[name]};`
    })
    return code
}
