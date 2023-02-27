import Color from "../../../src/ui/color"

describe("ui/color", () => {
    describe("LCH", () => {
        const cases: Array<
            [color: string, lightness: number, chroma: number, hue: number]
        > = [["#F9CE18", 84.679, 81.992, 86.563]]
        for (const [
            hexa,
            expectedLightness,
            expectedChroma,
            expectedHue,
        ] of cases) {
            const color = new Color(hexa)
            const [lightness, chroma, hue] = color.lch
            it("lightness", () =>
                expect(lightness).approximately(expectedLightness, 0.1))
            it("chroma", () =>
                expect(chroma).approximately(expectedChroma, 0.1))
            it("hue", () => expect(hue).approximately(expectedHue, 0.1))
        }
    })
})
