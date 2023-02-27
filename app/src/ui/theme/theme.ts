import Color from "../color"

const DEFAULT_COLOR_TEXT_LIGHT = "#fffe"
const DEFAULT_COLOR_TEXT_DARK = "#000e"
const DEFAULT_COLOR_PRIMARY: ThemeColor = { hue: 215 }
const DEFAULT_COLOR_SECONDARY: ThemeColor = { hue: 60 }
const DEFAULT_COLOR_TERTIARY: ThemeColor = { hue: 100 }
const DEFAULT_COLOR_NEUTRAL: ThemeColor = {
    hue: 61,
    chroma: 0,
    lightness: [50, 100],
}
const DEFAULT_COLOR_INPUT = "#fff"
const DEFAULT_COLOR_ERROR = "#d00"
const DEFAULT_COLOR_VALID = "#0f0"

export type ThemeColor =
    | string[]
    | {
          hue: number | [number, number]
          chroma?: number | [number, number]
          lightness?: number | [number, number]
      }

interface ThemeSettingsColors {
    textLight: string
    textDark: string
    primary: ThemeColor
    secondary: ThemeColor
    tertiary: ThemeColor
    neutral: ThemeColor
    input: string
    error: string
    valid: string
}

export interface ThemeSettings {
    colors?: Partial<ThemeSettingsColors>
}

export default class Theme {
    private readonly vars: Array<[name: string, value: string]> = []

    constructor({ colors = {} }: ThemeSettings = {}) {
        this.add(
            "color-text-light",
            colors.textLight ?? DEFAULT_COLOR_TEXT_LIGHT
        )
        this.add("color-text-dark", colors.textDark ?? DEFAULT_COLOR_TEXT_DARK)
        this.addColor("input", colors.input ?? DEFAULT_COLOR_INPUT)
        this.addColor("error", colors.error ?? DEFAULT_COLOR_ERROR)
        this.addColor("valid", colors.valid ?? DEFAULT_COLOR_VALID)
        this.addColorVars(
            "primary",
            makeColors(colors.primary ?? DEFAULT_COLOR_PRIMARY)
        )
        this.addColorVars(
            "secondary",
            makeColors(colors.secondary ?? DEFAULT_COLOR_SECONDARY)
        )
        this.addColorVars(
            "tertiary",
            makeColors(colors.tertiary ?? DEFAULT_COLOR_TERTIARY)
        )
        this.addColorVars(
            "neutral",
            makeColors(colors.neutral ?? DEFAULT_COLOR_NEUTRAL)
        )
    }

    /**
     * Add a new CSS custom variable.
     */
    private add(name: string, value: string) {
        this.vars.push([name, value])
    }

    private addColor(name: string, color: string) {
        this.add(`color-${name}`, color)
        this.add(
            `color-on-${name}`,
            `var(--theme-color-text-${Color.isLight(color) ? `dark` : "light"}`
        )
    }

    private addColorVars(name: string, colors: string[]) {
        let index = 1
        for (const color of colors) {
            this.add(`color-${name}-${index}`, color)
            this.add(
                `color-on-${name}-${index}`,
                `var(--theme-color-text-${
                    Color.isLight(color) ? "dark" : "light"
                })`
            )
            index++
        }
        this.add(`color-${name}`, `var(--theme-color-${name}-5)`)
    }

    /**
     * Apply this theme to `element`.
     * @param element Default to `document.body`.
     */
    apply(element?: HTMLElement | SVGElement) {
        const target = element ?? globalThis.window?.document.body
        if (target) {
            for (const [key, val] of this.vars) {
                target.style.setProperty(`--theme-${key}`, val)
            }
        }
    }
}

function makeColors(colorDef: ThemeColor): string[] {
    const colors: string[] = convertThemeColorIntoArray(colorDef)
    const output = Color.makeGradient(9, ...colors).map(color => color.cssValue)
    return output
}

function convertThemeColorIntoArray(colorDef: ThemeColor): string[] {
    if (Array.isArray(colorDef)) return colorDef

    const [hue1, hue2] = ensurePair(colorDef.hue)
    const [chroma1, chroma2] = ensurePair(colorDef.chroma ?? [200, 50])
    const [lightness1, lightness2] = ensurePair(colorDef.lightness ?? [5, 100])
    return [
        Color.fromLCH(lightness1, chroma1, hue1).cssValue,
        Color.fromLCH(lightness2, chroma2, hue2).cssValue,
    ]
}

function ensurePair(value: number | [number, number]): [number, number] {
    if (Array.isArray(value)) return value

    return [value, value]
}
