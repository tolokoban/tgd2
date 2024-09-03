import { tgdTemplate } from "./template"

describe("utils/template.ts", () => {
    describe("tgdTemplate()", () => {
        it("should work without substitutions", () => {
            const text = "Hello world!"
            const got = tgdTemplate(text, {})
            const exp = text
            expect(got).toEqual(exp)
        })
        it("should replace several occurences", () => {
            const got = tgdTemplate("A+B=B+A", { A: "1", B: "2" })
            const exp = "1+2=2+1"
            expect(got).toEqual(exp)
        })
    })
})
