import {
    TgdDataset,
    TgdParserMeshWavefront,
    webglElementTypeFromTypedArray,
} from "@tolokoban/tgd"

export function parse(meshContent: string) {
    const parser = new TgdParserMeshWavefront()
    const { elements, attPosition, attNormal, attUV } =
        parser.parseAsMeshData(meshContent)
    if (!attNormal) throw Error("Missing attNormal!")
    if (!attUV) throw Error("Missing attUV!")

    const dataset = new TgdDataset({
        attPosition: "vec3",
        attNormal: "vec3",
        attUV: "vec2",
    })
    dataset.set("attNormal", new Float32Array(attNormal))
    dataset.set("attPosition", new Float32Array(attPosition))
    dataset.set("attUV", new Float32Array(attUV))
    return {
        dataset,
        elements,
        count: elements.length,
        type: webglElementTypeFromTypedArray(elements),
    }
}
