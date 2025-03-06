import { TgdCodeFunctions } from "@tgd/shader"

/**
 * Generates function `float random(vec2 seed)`.
 */
export function tgdCodeFunction_random(options: {
    name: string
}): TgdCodeFunctions {
    const { name = "random" } = options
    return {
        [name]: `float ${name}(vec2 seed){
   return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
}
`,
    }
}
