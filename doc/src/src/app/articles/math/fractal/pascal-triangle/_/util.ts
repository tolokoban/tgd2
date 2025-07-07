export function range(count: number): number[] {
    return Array.from(Array(count).keys())
}

export function makeColors(count: number, lightness = 33): string[] {
    return range(count + 1).map(
        index =>
            `lch(${lightness}% 130% ${
                Math.round(260 + (index * 360) / count) % 360
            }deg) /* index = ${index} */`
    )
}
