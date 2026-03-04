import { TgdDataset } from "@tgd/dataset"
import { Section, SectionPoint, TgdPainterTubesBranch } from "./types"
import { Vertices } from "./vertices"
import { TgdTypeArrayForElements } from "@tgd/types"
import { resolve } from "node:path"
import { Ellipse } from "./ellipse"

const TAU = 2 * Math.PI

export function makeDatasetAndElements(
    branches: TgdPainterTubesBranch[],
    roundness: number,
): {
    dataset: TgdDataset
    elements: TgdTypeArrayForElements
} {
    const vertices = new Vertices()
    const elements: number[] = []
    const sections: Section[] = []
    for (const branch of branches) branch2section2(sections, branch, roundness)
    for (const section of sections) addSectionToGeometry(section, vertices, elements)
    return {
        dataset: vertices.dataset,
        elements: resolveElements(elements, vertices.count),
    }
}

function resolveElements(elements: number[], count: number): TgdTypeArrayForElements {
    if (count < 0xff) return new Uint8Array(elements)
    if (count < 0xffff) return new Uint16Array(elements)
    return new Uint32Array(elements)
}

function branch2section2(sections: Section[], branch: TgdPainterTubesBranch, roundness: number) {
    const section: Section = {
        roundness: branch.roundness ?? roundness,
        points: [
            {
                pos: branch.pos,
                radius: branch.radius,
                uv: branch.uv,
            },
        ],
    }
    let cursor = branch
    let { children } = cursor
    if (!children) return

    while (children && children.length === 1) {
        cursor = children[0]
        if (cursor.roundness ?? roundness !== section.roundness) break

        section.points.push({
            pos: cursor.pos,
            radius: cursor.radius,
            uv: cursor.uv,
        })
        children = cursor.children
    }
    sections.push(section)
    if (children) {
        for (const child of children) {
            branch2section2(sections, child, roundness)
        }
    }
}

function addSectionToGeometry(section: Section, vertices: Vertices, elements: number[]) {
    if (section.points.length === 0) return

    if (section.points.length === 1) {
        const [point] = section.points
        addSphereToGeometry(point, vertices, elements)
        return
    }

    const ellipses: (Ellipse | null)[] = [null]
    for (let i = 0; i < section.points.length; i++) {
        const prv = section.points[i - 1]
        const cur = section.points[i]
        const nxt = section.points[i + 1]
        ellipses.push(new Ellipse(prv, cur, nxt, section.roundness, vertices, elements))
    }
}

function addSphereToGeometry(point: SectionPoint, vertices: Vertices, elements: number[]) {
    console.error("[addSphereToGeometry] Function not implemented.")
    return
}
