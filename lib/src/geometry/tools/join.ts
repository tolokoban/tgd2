import { TgdTypeArrayForElements, WebglDrawMode } from "@tgd/types"
import { TgdGeometry } from "../geometry"
import { TgdDataset, TgdDatasetType, TgdDatasetTypeRecord } from "@tgd/dataset"

export function tgdGeometryJoin(
    geometries: TgdGeometry[],
    options: {
        name?: string
        attPosition?: string
        attNormal?: string
        attUV?: string
    } = {},
): TgdGeometry {
    if (geometries.length < 2) {
        throw new Error("You must provide at least two geometries to join!")
    }

    let totalCount = 0
    let datDrawMode: WebglDrawMode | number | undefined = undefined
    let hasElements = false
    let hasPosition = false
    let hasNormal = false
    let hasUV = false
    const setPosition = new Set<string>()
    const setNormal = new Set<string>()
    const setUV = new Set<string>()
    const datPosition: number[] = []
    const datNormal: number[] = []
    const datUV: number[] = []
    const datElements: number[] = []
    for (const geometry of geometries) {
        const { attPosition, attNormal, attUV, drawMode, dataset, elements } = geometry
        if (elements) hasElements = true
        if (dataset.hasAttribute(attPosition)) {
            hasPosition = true
            setPosition.add(dataset.getType(attPosition))
        }
        if (dataset.hasAttribute(attNormal)) {
            hasNormal = true
            setNormal.add(dataset.getType(attNormal))
        }
        if (dataset.hasAttribute(attUV)) {
            hasUV = true
            setUV.add(dataset.getType(attUV))
        }
        if (!areDrawModeEqual(drawMode, datDrawMode)) {
            throw new Error("Geometries must have the same draw mode!")
        }

        datDrawMode = drawMode
    }
    if (setPosition.size > 1) {
        throw new Error(`Different types fo attribute "POSITION": ${setPosition.values().toArray().join(", ")}.`)
    }
    if (setNormal.size > 1) {
        throw new Error(`Different types fo attribute "NORMAL": ${setNormal.values().toArray().join(", ")}.`)
    }
    if (setUV.size > 1) {
        throw new Error(`Different types fo attribute "TEX_COORD0": ${setUV.values().toArray().join(", ")}.`)
    }
    for (const geometry of geometries) {
        const { dataset, attPosition, attNormal, attUV, elements } = geometry
        if (dataset.hasAttribute(attPosition)) dataset.get(attPosition, datPosition)
        if (dataset.hasAttribute(attNormal)) dataset.get(attNormal, datNormal)
        if (dataset.hasAttribute(attUV)) dataset.get(attUV, datUV)
        const { count } = dataset
        concatElements(datElements, elements ?? count, totalCount)
        totalCount += count
    }
    const { name, attPosition = "POSITION", attNormal = "NORMAL", attUV = "TEX_COORD0" } = options
    const record: TgdDatasetTypeRecord = {}
    if (hasPosition) record[attPosition] = resolveType(setPosition)
    if (hasNormal) record[attNormal] = resolveType(setNormal)
    if (hasUV) record[attUV] = resolveType(setUV)
    const dataset = new TgdDataset(record, {
        name,
    })
    if (hasPosition) dataset.set(attPosition, new Float32Array(datPosition))
    if (hasNormal) dataset.set(attNormal, new Float32Array(datNormal))
    if (hasUV) dataset.set(attUV, new Float32Array(datUV))
    const geometry = new TgdGeometry({
        dataset,
        count: hasElements ? datElements.length : totalCount,
        attPosition: hasPosition ? attPosition : undefined,
        attNormal: hasNormal ? attNormal : undefined,
        attUV: hasUV ? attUV : undefined,
        drawMode: datDrawMode ?? "TRIANGLES",
        elements: hasElements ? TgdGeometry.fitElementsInTypeArray(datElements) : undefined,
    })
    return geometry
}

function concatElements(datElements: number[], elements: Readonly<TgdTypeArrayForElements> | number, base: number) {
    if (typeof elements === "number") {
        for (let i = 0; i < elements; i++) {
            datElements.push(i + base)
        }
    } else {
        for (let i = 0; i < elements.length; i++) {
            datElements.push(elements[i] + base)
        }
    }
}

function areDrawModeEqual(
    drawMode1: WebglDrawMode | number | undefined,
    drawMode2: WebglDrawMode | number | undefined,
) {
    if (drawMode1 === undefined || drawMode2 === undefined) return true
    return resolveDrawMode(drawMode1) === resolveDrawMode(drawMode2)
}

function resolveDrawMode(drawMode: WebglDrawMode | number): number {
    if (typeof drawMode === "number") return drawMode
    switch (drawMode) {
        case "LINES":
            return 0
        case "LINE_LOOP":
            return 0
        case "LINE_STRIP":
            return 0
        case "POINTS":
            return 0
        case "TRIANGLES":
            return 0
        case "TRIANGLE_FAN":
            return 0
        case "TRIANGLE_STRIP":
            return 0
        default:
            throw new Error(`Unknown draw mode: "${drawMode}"!`)
    }
}

function resolveType(set: Set<string>): TgdDatasetType {
    for (const type of set) return type as TgdDatasetType
    throw new Error(`No type defined for this attribute!`)
}
