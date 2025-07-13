import { TgdCodeFunctions } from "@tgd/shader";

/**
 * Convert uv coords ([0.0, +1.0]) into xy coords ([-1.0, +1.0]).
 * Requires uniform `uniAspectRatio`.
 */
export function tgdCodeFunction_mapRange(
  options: Partial<{ name: string }> = {},
): TgdCodeFunctions {
  const { name = "mapRange" } = options;
  return {
    [name]: `float ${name}(float value, float fromMin, float fromMax, float toMin, float toMax) {
    float t = (value - fromMin) / (fromMax - fromMin);
    return toMin + (toMax - toMin) * t;
}
`,
  };
}
