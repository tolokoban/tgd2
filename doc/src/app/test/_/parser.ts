import { TgdDataset, TgdParserMeshWavefront } from "@tolokoban/tgd"

export function parse(meshContent: string) {
    const parser = new TgdParserMeshWavefront()
    const { type, count, elements, attPosition, attNormal } =
        parser.parse(meshContent)
    if (!attNormal) throw Error("Missing attNormal!")

    const dataset = new TgdDataset({
        attPosition: "vec3",
        attNormal: "vec3",
    })
    dataset.set("attNormal", new Float32Array(attNormal))
    dataset.set("attPosition", new Float32Array(attPosition))
    return { dataset, elements, count, type }
}
