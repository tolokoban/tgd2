import { TgdDataset } from "@tgd/dataset"
import { webglElementTypeArrayFromNumberArray } from "@tgd/utils"
import { TgdGeometry } from "./geometry"

export interface TgdGeometryPathOptions {
    /**
     * Number of segments used to approximate each
     * Bézier curve (`Q`, `T`, `C` and `S`), or each quarter turn of an elliptical arc (`A`).
     * Default to **16**.
     */
    curveSegments?: number
    /**
     * The Y axis points down in SVG, but up in WebGL.
     * Set this to `true` to see the shape as in an SVG image.
     * Default to **false**.
     */
    flipY?: boolean
    /**
     * How to know which parts of the path are inside the shape, like the SVG `fill-rule` attribute.
     *
     * * **"evenodd"**: a point is inside if a ray from it crosses the contours an odd number of times.
     *   A contour inside an odd number of other contours is a hole.
     * * **"nonzero"**: a point is inside if the contours turn around it a different number of times
     *   clockwise and counter-clockwise. Contours turning in the same direction are merged,
     *   and a contour turning the other way inside them is a hole.
     *   Use it for font glyphs, whose contours often overlap (like the bar and the stem of a "T").
     *
     * The contours can cross themselves and each other: the geometry only keeps
     * the outline of the filled area.
     *
     * Default to **"evenodd"**.
     */
    fillRule?: TgdGeometryPathFillRule
    /**
     * If greater than 0, the shape is extruded along the Z axis,
     * from `-thickness / 2` (back face) to `+thickness / 2` (front face).
     * Default to **0** (a flat shape at Z = 0).
     */
    thickness?: number
    /**
     * Rounds the edges of the front and back faces, like the Bevel modifier of Blender.
     * Only used when `thickness` is greater than 0.
     */
    bevel?: TgdGeometryPathBevel
}

export type TgdGeometryPathFillRule = "evenodd" | "nonzero"

export interface TgdGeometryPathBevel {
    /**
     * Bevel amount.
     * It cannot be greater than half the thickness.
     * Keep it smaller than the details of the shape (thin parts, small holes...),
     * otherwise the front and back faces will overlap themselves.
     */
    width: number
    /** Segments for curve edge (integer > 0) */
    segments: number
    /**
     * Superellipse factor, between **0.0** and **1.0**.
     *
     * * **0.0**: concave.
     * * **0.25**: straight (chamfer).
     * * **0.5**: circular arc.
     * * **1.0**: square (no bevel at all).
     *
     * Defaults to **0.5**.
     */
    profileShape?: number
}

type Point = [x: number, y: number]

/**
 * Angle above which the corners of the outline get sharp normals on the sides.
 */
const SHARP_ANGLE = (30 * Math.PI) / 180

/**
 * A shape filled from an SVG path. It is flat (all the points have Z = 0),
 * unless you give it a `thickness`.
 *
 * All the SVG path commands are supported, with their lowercase (relative) versions:
 * `M` (move), `L` (line), `H` (horizontal line), `V` (vertical line),
 * `Q` and `T` (quadratic Bézier), `C` and `S` (cubic Bézier), `A` (elliptical arc) and `Z` (close).
 * Each subpath is a closed contour, even without `Z`.
 * By default, holes follow the `evenodd` fill rule: a contour inside an odd number of other
 * contours is a hole. Use `fillRule: "nonzero"` for font glyphs.
 * Contours can cross themselves and each other: the geometry follows the outline of the filled area.
 *
 * The geometry has `POSITION`, `NORMAL` and `TEXCOORD_0` attributes.
 * On the front and back faces, UVs go from `[0, 1]` (bottom left) to `[1, 0]` (top right)
 * over the bounding box of the shape.
 * On the sides, U goes from 0 to 1 along the contour, and V from 1 (front) to 0 (back).
 * Triangles are counter-clockwise, so the front face looks towards +Z.
 *
 * With a `thickness`, the sides have smooth normals along the curves,
 * but sharp ones on the corners of more than 30°.
 *
 * @example
 * ```ts
 * // A square with a triangular hole.
 * const geometry = new TgdGeometryPath("M0,0 L4,0 L4,4 L0,4 Z M1,1 L3,1 L2,3 Z")
 * // The same, extruded with rounded edges.
 * const geometry3D = new TgdGeometryPath("M0,0 L4,0 L4,4 L0,4 Z M1,1 L3,1 L2,3 Z", {
 *     thickness: 1,
 *     bevel: { width: 0.2, segments: 8 },
 * })
 * ```
 * @see {@link TgdGeometryPathOptions}
 */
export class TgdGeometryPath extends TgdGeometry {
    constructor(
        path: string,
        { curveSegments = 16, flipY = false, fillRule = "evenodd", thickness = 0, bevel }: TgdGeometryPathOptions = {},
    ) {
        const contours = new PathParser(path, Math.max(1, Math.round(curveSegments))).contours
        if (flipY) {
            for (const contour of contours) {
                for (const point of contour) point[1] = -point[1]
            }
        }
        const epsilon = computeEpsilon(contours)
        const cleanContours = contours
            .map((contour) => cleanContour(contour, epsilon))
            .filter((contour) => contour.length > 2)
        // Simple contours that neither cross nor overlap.
        const loops = computeBoundaries(cleanContours, fillRule, epsilon)
        const shapes = groupLoops(loops)
        const { points, elements, rings } = triangulate(loops, shapes)
        const mesh = new MeshData(points)
        if (thickness > 0) {
            const half = thickness / 2
            const width = bevel ? Math.max(0, Math.min(bevel.width, half)) : 0
            const outline = computeOutline(rings, points)
            let cap = { points, elements }
            if (width > 0) {
                // Long and thin triangles would flip if we moved their vertices inward,
                // so the inset contours are triangulated again.
                // Where the details of the shape are smaller than the bevel, they cross themselves:
                // the folded parts turn the wrong way, and the "positive" rule removes them.
                const capLoops = computeBoundaries(insetContours(loops, outline.insets, width), "positive", epsilon)
                cap = triangulate(capLoops, groupLoops(capLoops))
            }
            addCap(mesh, cap.points, cap.elements, +half)
            addCap(mesh, cap.points, cap.elements, -half)
            const samples = bevel && width > 0 ? computeBevelProfile(half, width, bevel) : computeFlatProfile(half)
            for (const ring of rings) addSides(mesh, points, ring, outline, samples, width)
        } else {
            addCap(mesh, points, elements, 0)
        }
        const dataset = new TgdDataset({
            POSITION: "vec3",
            NORMAL: "vec3",
            TEXCOORD_0: "vec2",
        })
        dataset.set("POSITION", new Float32Array(mesh.positions))
        dataset.set("NORMAL", new Float32Array(mesh.normals))
        dataset.set("TEXCOORD_0", new Float32Array(mesh.texcoords))
        super({
            dataset,
            elements: webglElementTypeArrayFromNumberArray(mesh.elements),
            drawMode: "TRIANGLES",
        })
    }
}

class MeshData {
    public readonly positions: number[] = []
    public readonly normals: number[] = []
    public readonly texcoords: number[] = []
    public readonly elements: number[] = []
    public readonly xmin: number
    public readonly ymin: number
    public readonly width: number
    public readonly height: number

    constructor(points: Point[]) {
        let xmin = Number.POSITIVE_INFINITY
        let ymin = Number.POSITIVE_INFINITY
        let xmax = Number.NEGATIVE_INFINITY
        let ymax = Number.NEGATIVE_INFINITY
        for (const [x, y] of points) {
            xmin = Math.min(xmin, x)
            ymin = Math.min(ymin, y)
            xmax = Math.max(xmax, x)
            ymax = Math.max(ymax, y)
        }
        this.xmin = xmin
        this.ymin = ymin
        this.width = xmax - xmin || 1
        this.height = ymax - ymin || 1
    }

    get count() {
        return this.positions.length / 3
    }

    add(x: number, y: number, z: number, nx: number, ny: number, nz: number, u: number, v: number): number {
        this.positions.push(x, y, z)
        this.normals.push(nx, ny, nz)
        this.texcoords.push(u, v)
        return this.count - 1
    }
}

/**
 * Add the front (z > 0), back (z < 0) or flat (z = 0) face of the shape.
 * With a bevel, `points` are already inset to leave room for it.
 */
function addCap(mesh: MeshData, points: Point[], elements: number[], z: number) {
    const { xmin, ymin, width: sizeX, height: sizeY } = mesh
    const base = mesh.count
    const nz = z < 0 ? -1 : +1
    for (let index = 0; index < points.length; index++) {
        const [x, y] = points[index]
        mesh.add(x, y, z, 0, 0, nz, (x - xmin) / sizeX, 1 - (y - ymin) / sizeY)
    }
    for (let element = 0; element < elements.length; element += 3) {
        const a = base + elements[element]
        const b = base + elements[element + 1]
        const c = base + elements[element + 2]
        // The back face looks towards -Z.
        if (nz < 0) mesh.elements.push(a, c, b)
        else mesh.elements.push(a, b, c)
    }
}

function insetContours(contours: Point[][], insets: Point[], width: number): Point[][] {
    let index = 0
    return contours.map((contour) =>
        contour.map(([x, y]): Point => {
            const [ix, iy] = insets[index++]
            return [x + ix * width, y + iy * width]
        }),
    )
}

interface Outline {
    /** Vector to move a point inward by one unit, keeping the edges parallel. */
    insets: Point[]
    /** Smooth normal of a point (bisector of the normals of its two edges). */
    normals: Point[]
    /** Corners that need different normals on each of their edges. */
    sharp: boolean[]
}

/**
 * `rings` must be oriented: counter-clockwise for the outer contours, clockwise for the holes.
 * Then the right side of each edge is outside of the shape.
 */
function computeOutline(rings: number[][], points: Point[]): Outline {
    const insets: Point[] = points.map(() => [0, 0])
    const normals: Point[] = points.map(() => [0, 0])
    const sharp: boolean[] = points.map(() => false)
    const cosSharp = Math.cos(SHARP_ANGLE)
    for (const ring of rings) {
        for (let k = 0; k < ring.length; k++) {
            const prev = points[ring[(k + ring.length - 1) % ring.length]]
            const index = ring[k]
            const next = points[ring[(k + 1) % ring.length]]
            const n1 = edgeNormal(prev, points[index])
            const n2 = edgeNormal(points[index], next)
            sharp[index] = n1[0] * n2[0] + n1[1] * n2[1] < cosSharp
            let mx = n1[0] + n2[0]
            let my = n1[1] + n2[1]
            const len = Math.hypot(mx, my)
            if (len < 1e-9) {
                // The contour goes back on itself.
                mx = n1[0]
                my = n1[1]
            } else {
                mx /= len
                my /= len
            }
            normals[index] = [mx, my]
            // Miter length, limited to avoid spikes on very sharp corners.
            const miter = 1 / Math.max(0.25, mx * n1[0] + my * n1[1])
            insets[index] = [-mx * miter, -my * miter]
        }
    }
    return { insets, normals, sharp }
}

/**
 * Unit vector on the right side of the edge from A to B.
 */
function edgeNormal(A: Point, B: Point): Point {
    const dx = B[0] - A[0]
    const dy = B[1] - A[1]
    const len = Math.hypot(dx, dy) || 1
    return [dy / len, -dx / len]
}

interface ProfileSample {
    /** How much the point is pushed outward from the inset contour, between 0 and the bevel width. */
    offset: number
    z: number
    /** Horizontal part of the normal (along the normal of the contour). */
    normalH: number
    /** Vertical part of the normal (along Z). */
    normalZ: number
}

/**
 * Samples of the sides, from the front to the back.
 */
function computeFlatProfile(half: number): ProfileSample[] {
    return [
        { offset: 0, z: +half, normalH: 1, normalZ: 0 },
        { offset: 0, z: -half, normalH: 1, normalZ: 0 },
    ]
}

/**
 * Samples of the sides, from the front to the back: front bevel, then back bevel.
 * The straight part of the side is between the two.
 */
function computeBevelProfile(
    half: number,
    width: number,
    { segments, profileShape = 0.5 }: TgdGeometryPathBevel,
): ProfileSample[] {
    // Blender's mapping between profile shape and superellipse exponent.
    const profile = Math.max(0.01, Math.min(0.99, profileShape))
    const r = (-2 * Math.LN2) / Math.log(profile)
    const exponentPosition = 2 / r
    const exponentNormal = 2 - 2 / r
    const n = Math.max(1, Math.round(segments))
    const front: ProfileSample[] = []
    for (let step = 0; step <= n; step++) {
        // From the front face (90°) to the side (0°).
        const angle = (Math.PI / 2) * (1 - step / n)
        const cos = Math.max(0, Math.cos(angle))
        const sin = Math.max(0, Math.sin(angle))
        const nh = powNormal(cos, exponentNormal)
        const nz = powNormal(sin, exponentNormal)
        const len = Math.hypot(nh, nz) || 1
        front.push({
            offset: width * cos ** exponentPosition,
            z: half - width + width * sin ** exponentPosition,
            normalH: nh / len,
            normalZ: nz / len,
        })
    }
    const back = front.map(({ offset, z, normalH, normalZ }) => ({ offset, z: -z, normalH, normalZ: -normalZ }))
    return [...front, ...back.reverse()]
}

/**
 * `s` is in [0, 1]. When the exponent is negative (concave profile),
 * `0^exponent` is infinite, so we clamp `s`.
 */
function powNormal(s: number, exponent: number) {
    if (exponent < 0) return Math.max(s, 1e-3) ** exponent
    return s ** exponent
}

/**
 * Add the sides of an oriented ring, as a strip of quads for each edge.
 * Each edge has its own vertices, so the corners can have sharp normals.
 */
function addSides(
    mesh: MeshData,
    points: Point[],
    ring: number[],
    outline: Outline,
    samples: ProfileSample[],
    width: number,
) {
    const { insets, normals, sharp } = outline
    const perimeter: number[] = [0]
    for (let k = 0; k < ring.length; k++) {
        const [ax, ay] = points[ring[k]]
        const [bx, by] = points[ring[(k + 1) % ring.length]]
        perimeter.push(perimeter[k] + Math.hypot(bx - ax, by - ay))
    }
    const total = perimeter[ring.length] || 1
    const lastSample = samples.length - 1
    for (let k = 0; k < ring.length; k++) {
        const i = ring[k]
        const j = ring[(k + 1) % ring.length]
        const normal = edgeNormal(points[i], points[j])
        const ends: Array<[index: number, normal: Point, u: number]> = [
            [i, sharp[i] ? normal : normals[i], perimeter[k] / total],
            [j, sharp[j] ? normal : normals[j], perimeter[k + 1] / total],
        ]
        const base = mesh.count
        for (let s = 0; s < samples.length; s++) {
            const { offset, z, normalH, normalZ } = samples[s]
            const inset = width - offset
            for (const [index, [nx, ny], u] of ends) {
                const [x, y] = points[index]
                const [ix, iy] = insets[index]
                mesh.add(x + ix * inset, y + iy * inset, z, nx * normalH, ny * normalH, normalZ, u, 1 - s / lastSample)
            }
        }
        // Vertices 2s and 2s+1 are the start and end of the edge for the sample s.
        for (let s = 0; s < lastSample; s++) {
            // When the bevel width is half the thickness, there is no straight part
            // between the front and back bevels: their samples only differ by the normal.
            if (samples[s].z === samples[s + 1].z && samples[s].offset === samples[s + 1].offset) continue

            const a = base + 2 * s
            const b = a + 1
            const c = a + 3
            const d = a + 2
            // prettier-ignore
            mesh.elements.push(
                a, c, b,
                a, d, c,
            )
        }
    }
}

const RX_TOKEN = /[a-z]|[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/gi
const COMMANDS = "MLHVQTCSAZmlhvqtcsaz"

class PathParser {
    public readonly contours: Point[][] = []

    private readonly tokens: string[]
    private cursor = 0
    private contour: Point[] = []
    private x = 0
    private y = 0
    private startX = 0
    private startY = 0
    /** Control point of the last Bézier curve, used by the `S` and `T` commands. */
    private controlX = 0
    private controlY = 0
    private controlKind: "" | "quad" | "cubic" = ""

    constructor(
        path: string,
        private readonly curveSegments: number,
    ) {
        this.tokens = path.match(RX_TOKEN) ?? []
        let command = ""
        while (this.cursor < this.tokens.length) {
            const token = this.tokens[this.cursor]
            if (isLetter(token)) {
                if (!COMMANDS.includes(token)) {
                    throw new Error(`[TgdGeometryPath] Unsupported command "${token}" in path: ${path}`)
                }
                command = token
                this.cursor++
            } else if (command === "") {
                throw new Error(`[TgdGeometryPath] Expected a command, but got "${token}" in path: ${path}`)
            }
            this.execute(command)
            // Extra pairs of coordinates after a moveto are implicit lineto.
            if (command === "M") command = "L"
            else if (command === "m") command = "l"
            // Z takes no argument, so it cannot be repeated implicitly.
            else if (command === "Z" || command === "z") command = ""
        }
        this.closeContour()
    }

    private execute(command: string) {
        const { x, y } = this
        const previousKind = this.controlKind
        this.controlKind = ""
        // Reflection of the previous control point, for the smooth curves (S and T).
        const reflectedX = 2 * x - this.controlX
        const reflectedY = 2 * y - this.controlY
        switch (command) {
            case "M":
                this.moveTo(this.number(), this.number())
                break
            case "m":
                this.moveTo(x + this.number(), y + this.number())
                break
            case "L":
                this.lineTo(this.number(), this.number())
                break
            case "l":
                this.lineTo(x + this.number(), y + this.number())
                break
            case "H":
                this.lineTo(this.number(), y)
                break
            case "h":
                this.lineTo(x + this.number(), y)
                break
            case "V":
                this.lineTo(x, this.number())
                break
            case "v":
                this.lineTo(x, y + this.number())
                break
            case "Q":
                this.quadTo(this.number(), this.number(), this.number(), this.number())
                break
            case "q":
                this.quadTo(x + this.number(), y + this.number(), x + this.number(), y + this.number())
                break
            case "T":
            case "t": {
                const [x1, y1] = previousKind === "quad" ? [reflectedX, reflectedY] : [x, y]
                const relative = command === "t"
                this.quadTo(x1, y1, (relative ? x : 0) + this.number(), (relative ? y : 0) + this.number())
                break
            }
            case "C":
                this.cubicTo(this.number(), this.number(), this.number(), this.number(), this.number(), this.number())
                break
            case "c":
                this.cubicTo(
                    x + this.number(),
                    y + this.number(),
                    x + this.number(),
                    y + this.number(),
                    x + this.number(),
                    y + this.number(),
                )
                break
            case "S":
            case "s": {
                const [x1, y1] = previousKind === "cubic" ? [reflectedX, reflectedY] : [x, y]
                const dx = command === "s" ? x : 0
                const dy = command === "s" ? y : 0
                this.cubicTo(x1, y1, dx + this.number(), dy + this.number(), dx + this.number(), dy + this.number())
                break
            }
            case "A":
            case "a": {
                const rx = this.number()
                const ry = this.number()
                const angle = this.number()
                const largeArc = this.flag()
                const sweep = this.flag()
                const dx = command === "a" ? x : 0
                const dy = command === "a" ? y : 0
                this.arcTo(rx, ry, angle, largeArc, sweep, dx + this.number(), dy + this.number())
                break
            }
            default:
                this.closeContour()
        }
    }

    private number(): number {
        const token = this.tokens[this.cursor]
        if (token === undefined || isLetter(token)) {
            throw new Error(`[TgdGeometryPath] Missing a number at position #${this.cursor} of the path!`)
        }
        this.cursor++
        return Number(token)
    }

    /**
     * Flags of the arc command are a single digit (0 or 1),
     * and can be glued to what follows: `A5,5 0 0110,10`.
     */
    private flag(): boolean {
        const token = this.tokens[this.cursor]
        const digit = token?.charAt(0)
        if (digit !== "0" && digit !== "1") {
            throw new Error(`[TgdGeometryPath] Expected a flag (0 or 1) at position #${this.cursor} of the path!`)
        }
        if (token.length > 1) this.tokens[this.cursor] = token.slice(1)
        else this.cursor++
        return digit === "1"
    }

    private moveTo(x: number, y: number) {
        this.closeContour()
        this.x = x
        this.y = y
        this.startX = x
        this.startY = y
        this.contour.push([x, y])
    }

    private lineTo(x: number, y: number) {
        // A command after Z, without M, starts a new subpath at the current point.
        if (this.contour.length === 0) this.contour.push([this.x, this.y])
        this.contour.push([x, y])
        this.x = x
        this.y = y
    }

    private quadTo(x1: number, y1: number, x2: number, y2: number) {
        const { x: x0, y: y0, curveSegments } = this
        for (let step = 1; step <= curveSegments; step++) {
            const t = step / curveSegments
            const u = 1 - t
            const a = u * u
            const b = 2 * u * t
            const c = t * t
            this.lineTo(a * x0 + b * x1 + c * x2, a * y0 + b * y1 + c * y2)
        }
        this.controlX = x1
        this.controlY = y1
        this.controlKind = "quad"
    }

    private cubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
        const { x: x0, y: y0, curveSegments } = this
        for (let step = 1; step <= curveSegments; step++) {
            const t = step / curveSegments
            const u = 1 - t
            const a = u * u * u
            const b = 3 * u * u * t
            const c = 3 * u * t * t
            const d = t * t * t
            this.lineTo(a * x0 + b * x1 + c * x2 + d * x3, a * y0 + b * y1 + c * y2 + d * y3)
        }
        this.controlX = x2
        this.controlY = y2
        this.controlKind = "cubic"
    }

    /**
     * Elliptical arc, converted from the endpoint to the center parameterization.
     * @see https://www.w3.org/TR/SVG2/implnote.html#ArcConversionEndpointToCenter
     */
    private arcTo(
        radiusX: number,
        radiusY: number,
        angleInDegrees: number,
        largeArc: boolean,
        sweep: boolean,
        x2: number,
        y2: number,
    ) {
        const { x: x1, y: y1, curveSegments } = this
        if (x1 === x2 && y1 === y2) return

        let rx = Math.abs(radiusX)
        let ry = Math.abs(radiusY)
        if (rx === 0 || ry === 0) {
            this.lineTo(x2, y2)
            return
        }

        const phi = (angleInDegrees * Math.PI) / 180
        const cos = Math.cos(phi)
        const sin = Math.sin(phi)
        // Midpoint between start and end, in the coordinate system of the ellipse.
        const mx = (x1 - x2) / 2
        const my = (y1 - y2) / 2
        const px = cos * mx + sin * my
        const py = -sin * mx + cos * my
        // Radii too small to reach the end point are scaled up.
        const lambda = (px * px) / (rx * rx) + (py * py) / (ry * ry)
        if (lambda > 1) {
            const scale = Math.sqrt(lambda)
            rx *= scale
            ry *= scale
        }
        const rx2 = rx * rx
        const ry2 = ry * ry
        const numerator = rx2 * ry2 - rx2 * py * py - ry2 * px * px
        const denominator = rx2 * py * py + ry2 * px * px
        let factor = Math.sqrt(Math.max(0, numerator / denominator))
        if (largeArc === sweep) factor = -factor
        const cx1 = (factor * rx * py) / ry
        const cy1 = (-factor * ry * px) / rx
        const cx = cos * cx1 - sin * cy1 + (x1 + x2) / 2
        const cy = sin * cx1 + cos * cy1 + (y1 + y2) / 2
        const theta1 = Math.atan2((py - cy1) / ry, (px - cx1) / rx)
        let delta = Math.atan2((-py - cy1) / ry, (-px - cx1) / rx) - theta1
        if (sweep && delta < 0) delta += 2 * Math.PI
        else if (!sweep && delta > 0) delta -= 2 * Math.PI
        const steps = Math.max(1, Math.ceil((curveSegments * Math.abs(delta)) / (Math.PI / 2)))
        for (let step = 1; step < steps; step++) {
            const theta = theta1 + (delta * step) / steps
            const ex = rx * Math.cos(theta)
            const ey = ry * Math.sin(theta)
            this.lineTo(cx + cos * ex - sin * ey, cy + sin * ex + cos * ey)
        }
        // Avoid rounding errors on the last point.
        this.lineTo(x2, y2)
    }

    private closeContour() {
        if (this.contour.length > 0) this.contours.push(this.contour)
        this.contour = []
        this.x = this.startX
        this.y = this.startY
    }
}

function isLetter(token: string) {
    const code = token.charCodeAt(0)
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

/**
 * Remove consecutive points closer than `epsilon`, and the last point if it is close to the first one.
 * Such points come from degenerate curves (like `Q1,1 1,1` from `1,1`), which are frequent in fonts.
 * Their edges have no direction, so they would get random normals.
 * Return an empty contour if it has no area.
 */
function cleanContour(contour: Point[], epsilon: number): Point[] {
    const result: Point[] = []
    for (const point of contour) {
        const last = result[result.length - 1]
        if (!last || !isClose(last, point, epsilon)) result.push(point)
    }
    while (result.length > 1 && isClose(result[0], result[result.length - 1], epsilon)) result.pop()
    if (result.length < 3 || signedArea(result) === 0) return []

    return result
}

interface LoopGroup {
    outer: number
    holes: number[]
}

/**
 * `loops` are simple and oriented: counter-clockwise for the outer ones, clockwise for the holes.
 * Each outer loop gets the holes that are directly inside it.
 */
function groupLoops(loops: Point[][]): LoopGroup[] {
    const groups: LoopGroup[] = []
    const areas = loops.map(signedArea)
    for (let i = 0; i < loops.length; i++) {
        if (areas[i] > 0) groups.push({ outer: i, holes: [] })
    }
    for (let i = 0; i < loops.length; i++) {
        if (areas[i] > 0) continue

        // The loops never share an edge, so the middle of an edge of the hole
        // is strictly inside its outer loop.
        const [A, B] = loops[i]
        const point: Point = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]
        let parent: LoopGroup | undefined
        for (const group of groups) {
            if (!isPointInPolygon(point, loops[group.outer])) continue
            if (!parent || areas[group.outer] < areas[parent.outer]) parent = group
        }
        parent?.holes.push(i)
    }
    return groups
}

function triangulate(
    loops: Point[][],
    groups: LoopGroup[],
): { points: Point[]; elements: number[]; rings: number[][] } {
    const points: Point[] = []
    const rings = loops.map((loop) => loop.map((point) => points.push(point) - 1))
    const elements: number[] = []
    for (const group of groups) {
        const holes = group.holes.map((hole) => rings[hole]).sort((a, b) => maxX(b, points) - maxX(a, points))
        let indexes = rings[group.outer]
        for (let i = 0; i < holes.length; i++) {
            indexes = bridgeHole(indexes, holes[i], holes.slice(i + 1), points)
        }
        earClip(indexes, points, elements)
    }
    // Oriented contours: counter-clockwise for the outer ones, clockwise for the holes.
    return { points, elements, rings }
}

interface BoundaryEdge {
    from: number
    to: number
    used: boolean
}

/**
 * Replace the contours by the boundaries of the filled area.
 *
 * The contours can cross themselves and each other (font glyphs often do).
 * All the edges are split where they intersect, and we only keep those with
 * the filled area on one side and the empty area on the other.
 * They are oriented with the filled area on their left, then linked into loops.
 * The resulting loops are simple and don't overlap: counter-clockwise for
 * the outer ones, clockwise for the holes.
 *
 * `"positive"` is only used internally, to clean the inset contours:
 * only the parts turning counter-clockwise are filled.
 */
function computeBoundaries(
    contours: Point[][],
    fillRule: TgdGeometryPathFillRule | "positive",
    epsilon: number,
): Point[][] {
    const segments: Array<[Point, Point]> = []
    for (const contour of contours) {
        for (let i = 0; i < contour.length; i++) segments.push([contour[i], contour[(i + 1) % contour.length]])
    }
    const cuts: number[][] = segments.map(() => [0, 1])
    for (let i = 0; i < segments.length; i++) {
        for (let j = i + 1; j < segments.length; j++) {
            cutSegments(segments[i], segments[j], cuts[i], cuts[j], epsilon)
        }
    }
    // Vertices closer than epsilon are merged.
    const vertices: Point[] = []
    const vertexKeys = new Map<string, number>()
    const vertexIndex = ([x, y]: Point) => {
        const key = `${Math.round(x / epsilon)},${Math.round(y / epsilon)}`
        let index = vertexKeys.get(key)
        if (index === undefined) {
            index = vertices.push([x, y]) - 1
            vertexKeys.set(key, index)
        }
        return index
    }
    // Overlapping parts of segments give the same edge: we keep only one.
    const pieces = new Map<string, [number, number]>()
    for (let i = 0; i < segments.length; i++) {
        const [A, B] = segments[i]
        const ts = cuts[i].sort((a, b) => a - b)
        let prev = vertexIndex(A)
        for (let k = 1; k < ts.length; k++) {
            const t = ts[k]
            const next = vertexIndex(k === ts.length - 1 ? B : [A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])])
            if (next !== prev) pieces.set(prev < next ? `${prev},${next}` : `${next},${prev}`, [prev, next])
            prev = next
        }
    }
    const isFilled = (point: Point) => {
        const winding = computeWinding(point, contours)
        if (fillRule === "positive") return winding > 0
        return fillRule === "nonzero" ? winding !== 0 : winding % 2 !== 0
    }
    const delta = epsilon * 1000
    const outgoing = new Map<number, BoundaryEdge[]>()
    for (const [a, b] of pieces.values()) {
        const A = vertices[a]
        const B = vertices[b]
        const length = Math.hypot(B[0] - A[0], B[1] - A[1])
        // Test a point on each side of the middle of the edge.
        const nx = (-(B[1] - A[1]) / length) * delta
        const ny = ((B[0] - A[0]) / length) * delta
        const mx = (A[0] + B[0]) / 2
        const my = (A[1] + B[1]) / 2
        const left = isFilled([mx + nx, my + ny])
        if (left === isFilled([mx - nx, my - ny])) continue

        const edge: BoundaryEdge = left ? { from: a, to: b, used: false } : { from: b, to: a, used: false }
        const list = outgoing.get(edge.from)
        if (list) list.push(edge)
        else outgoing.set(edge.from, [edge])
    }
    const loops: Point[][] = []
    for (const edges of outgoing.values()) {
        for (const start of edges) {
            if (start.used) continue

            const loop = traceLoop(start, outgoing, vertices)
            if (loop.length > 2 && signedArea(loop) !== 0) loops.push(loop)
        }
    }
    return loops
}

/**
 * Follow the edges from `start` until we come back to its first vertex.
 * When several edges leave a vertex, we take the one that turns the most to the left,
 * so two areas touching on a single vertex give two separate loops.
 */
function traceLoop(start: BoundaryEdge, outgoing: Map<number, BoundaryEdge[]>, vertices: Point[]): Point[] {
    const loop: Point[] = []
    let edge: BoundaryEdge | undefined = start
    while (edge) {
        edge.used = true
        loop.push(vertices[edge.from])
        if (edge.to === start.from) return loop

        const A = vertices[edge.from]
        const B = vertices[edge.to]
        const dx = B[0] - A[0]
        const dy = B[1] - A[1]
        let best: BoundaryEdge | undefined
        let bestAngle = Number.NEGATIVE_INFINITY
        for (const candidate of outgoing.get(edge.to) ?? []) {
            if (candidate.used) continue

            const C = vertices[candidate.to]
            const ex = C[0] - B[0]
            const ey = C[1] - B[1]
            const angle = Math.atan2(dx * ey - dy * ex, dx * ex + dy * ey)
            if (angle > bestAngle) {
                bestAngle = angle
                best = candidate
            }
        }
        edge = best
    }
    // Dead end: this can only come from rounding errors.
    return []
}

/**
 * Add to `cutsP` and `cutsQ` the parameters (between 0 and 1) where
 * the segments P and Q intersect, or where the end of one of them touches the other one.
 */
function cutSegments(
    [P1, P2]: [Point, Point],
    [Q1, Q2]: [Point, Point],
    cutsP: number[],
    cutsQ: number[],
    epsilon: number,
) {
    const rx = P2[0] - P1[0]
    const ry = P2[1] - P1[1]
    const sx = Q2[0] - Q1[0]
    const sy = Q2[1] - Q1[1]
    if (
        Math.max(P1[0], P2[0]) < Math.min(Q1[0], Q2[0]) - epsilon ||
        Math.max(Q1[0], Q2[0]) < Math.min(P1[0], P2[0]) - epsilon ||
        Math.max(P1[1], P2[1]) < Math.min(Q1[1], Q2[1]) - epsilon ||
        Math.max(Q1[1], Q2[1]) < Math.min(P1[1], P2[1]) - epsilon
    ) {
        return
    }

    const lenP = Math.hypot(rx, ry)
    const lenQ = Math.hypot(sx, sy)
    const qx = Q1[0] - P1[0]
    const qy = Q1[1] - P1[1]
    const denom = rx * sy - ry * sx
    if (Math.abs(denom) > 1e-12 * lenP * lenQ) {
        const t = (qx * sy - qy * sx) / denom
        const u = (qx * ry - qy * rx) / denom
        const tolP = epsilon / lenP
        const tolQ = epsilon / lenQ
        if (t < -tolP || t > 1 + tolP || u < -tolQ || u > 1 + tolQ) return

        if (t > tolP && t < 1 - tolP) cutsP.push(t)
        if (u > tolQ && u < 1 - tolQ) cutsQ.push(u)
        return
    }

    // Parallel segments: they can only overlap if they are on the same line.
    if (Math.abs(qx * ry - qy * rx) > epsilon * lenP) return

    addCutIfInside(P1, rx, ry, Q1, cutsP, epsilon)
    addCutIfInside(P1, rx, ry, Q2, cutsP, epsilon)
    addCutIfInside(Q1, sx, sy, P1, cutsQ, epsilon)
    addCutIfInside(Q1, sx, sy, P2, cutsQ, epsilon)
}

/**
 * `M` is on the line of the segment starting at `A` with vector `(dx, dy)`.
 * Add its parameter to `cuts` if it is strictly inside the segment.
 */
function addCutIfInside(A: Point, dx: number, dy: number, M: Point, cuts: number[], epsilon: number) {
    const len2 = dx * dx + dy * dy
    const t = ((M[0] - A[0]) * dx + (M[1] - A[1]) * dy) / len2
    const tol = epsilon / Math.sqrt(len2)
    if (t > tol && t < 1 - tol) cuts.push(t)
}

/**
 * Sum of the winding numbers of all the contours around `point`.
 */
function computeWinding([x, y]: Point, contours: Point[][]): number {
    let winding = 0
    for (const contour of contours) {
        for (let i = 0, j = contour.length - 1; i < contour.length; j = i++) {
            const [xj, yj] = contour[j]
            const [xi, yi] = contour[i]
            if (yj <= y) {
                if (yi > y && cross([xj, yj], [xi, yi], [x, y]) > 0) winding++
            } else if (yi <= y && cross([xj, yj], [xi, yi], [x, y]) < 0) winding--
        }
    }
    return winding
}

function maxX(indexes: number[], points: Point[]): number {
    let max = Number.NEGATIVE_INFINITY
    for (const index of indexes) max = Math.max(max, points[index][0])
    return max
}

/**
 * Merge a hole into the outer ring by linking them with
 * a segment going both ways (a "bridge").
 */
function bridgeHole(ring: number[], hole: number[], otherHoles: number[][], points: Point[]): number[] {
    let holeStart = 0
    for (let i = 1; i < hole.length; i++) {
        if (points[hole[i]][0] > points[hole[holeStart]][0]) holeStart = i
    }
    const M = points[hole[holeStart]]
    const obstacles = [ring, hole, ...otherHoles]
    let best = -1
    let bestDistance = Number.POSITIVE_INFINITY
    let fallback = 0
    let fallbackDistance = Number.POSITIVE_INFINITY
    for (let k = 0; k < ring.length; k++) {
        const P = points[ring[k]]
        const distance = (P[0] - M[0]) ** 2 + (P[1] - M[1]) ** 2
        if (distance < fallbackDistance) {
            fallback = k
            fallbackDistance = distance
        }
        if (distance >= bestDistance) continue
        // The hole touches the outer ring.
        if (distance === 0) {
            best = k
            break
        }

        const A = points[ring[(k + ring.length - 1) % ring.length]]
        const B = points[ring[(k + 1) % ring.length]]
        if (!isLocallyInside(A, P, B, M)) continue
        if (doesSegmentCrossRings(P, M, obstacles, points)) continue

        best = k
        bestDistance = distance
    }
    if (best < 0) best = fallback
    return [
        ...ring.slice(0, best + 1),
        ...hole.slice(holeStart),
        ...hole.slice(0, holeStart + 1),
        ring[best],
        ...ring.slice(best + 1),
    ]
}

/**
 * Is the direction P→M inside the polygon, around its vertex P?
 * A and B are the previous and next vertices of a counter-clockwise polygon.
 */
function isLocallyInside(A: Point, P: Point, B: Point, M: Point): boolean {
    if (cross(A, P, B) >= 0) return cross(P, B, M) > 0 && cross(P, A, M) < 0

    return cross(P, B, M) > 0 || cross(P, A, M) < 0
}

function doesSegmentCrossRings(P: Point, M: Point, rings: number[][], points: Point[]): boolean {
    for (const ring of rings) {
        for (let i = 0; i < ring.length; i++) {
            const A = points[ring[i]]
            const B = points[ring[(i + 1) % ring.length]]
            if (samePoint(A, P) || samePoint(A, M) || samePoint(B, P) || samePoint(B, M)) continue
            if (doSegmentsIntersect(P, M, A, B)) return true
        }
    }
    return false
}

function doSegmentsIntersect(P1: Point, P2: Point, Q1: Point, Q2: Point): boolean {
    const o1 = Math.sign(cross(P1, P2, Q1))
    const o2 = Math.sign(cross(P1, P2, Q2))
    const o3 = Math.sign(cross(Q1, Q2, P1))
    const o4 = Math.sign(cross(Q1, Q2, P2))
    if (o1 !== o2 && o3 !== o4) return true
    if (o1 === 0 && isOnSegment(P1, Q1, P2)) return true
    if (o2 === 0 && isOnSegment(P1, Q2, P2)) return true
    if (o3 === 0 && isOnSegment(Q1, P1, Q2)) return true
    if (o4 === 0 && isOnSegment(Q1, P2, Q2)) return true
    return false
}

/**
 * Knowing that A, P and B are aligned, is P between A and B?
 */
function isOnSegment(A: Point, P: Point, B: Point): boolean {
    return (
        P[0] <= Math.max(A[0], B[0]) &&
        P[0] >= Math.min(A[0], B[0]) &&
        P[1] <= Math.max(A[1], B[1]) &&
        P[1] >= Math.min(A[1], B[1])
    )
}

/**
 * Triangulate a counter-clockwise simple polygon with the ear clipping algorithm.
 */
function earClip(ring: number[], points: Point[], elements: number[]) {
    const count = ring.length
    const prev = ring.map((_, i) => (i + count - 1) % count)
    const next = ring.map((_, i) => (i + 1) % count)
    const remove = (i: number) => {
        next[prev[i]] = next[i]
        prev[next[i]] = prev[i]
    }
    const point = (i: number) => points[ring[i]]
    let remaining = count
    let current = 0
    let stall = 0
    while (remaining > 3) {
        const a = prev[current]
        const c = next[current]
        if (isEar(a, current, c, next, point)) {
            elements.push(ring[a], ring[current], ring[c])
            remove(current)
            remaining--
            current = c
            stall = 0
            continue
        }

        current = c
        stall++
        if (stall <= remaining) continue

        // No ear found (degenerated polygon): remove an aligned vertex if any,
        // otherwise clip the current vertex anyway to make sure we terminate.
        let victim = current
        for (let i = 0, k = current; i < remaining; i++, k = next[k]) {
            if (cross(point(prev[k]), point(k), point(next[k])) === 0) {
                victim = k
                break
            }
        }
        if (cross(point(prev[victim]), point(victim), point(next[victim])) > 0) {
            elements.push(ring[prev[victim]], ring[victim], ring[next[victim]])
        }
        current = next[victim]
        remove(victim)
        remaining--
        stall = 0
    }
    if (remaining === 3 && cross(point(prev[current]), point(current), point(next[current])) > 0) {
        elements.push(ring[prev[current]], ring[current], ring[next[current]])
    }
}

function isEar(a: number, b: number, c: number, next: number[], point: (i: number) => Point): boolean {
    const A = point(a)
    const B = point(b)
    const C = point(c)
    if (cross(A, B, C) <= 0) return false

    for (let k = next[c]; k !== a; k = next[k]) {
        const P = point(k)
        if (samePoint(P, A) || samePoint(P, B) || samePoint(P, C)) continue
        if (cross(A, B, P) >= 0 && cross(B, C, P) >= 0 && cross(C, A, P) >= 0) return false
    }
    return true
}

function isPointInPolygon([x, y]: Point, polygon: Point[]): boolean {
    let inside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
    }
    return inside
}

/**
 * Positive if the polygon is counter-clockwise.
 */
function signedArea(polygon: Point[]): number {
    let area = 0
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        area += polygon[j][0] * polygon[i][1] - polygon[i][0] * polygon[j][1]
    }
    return area / 2
}

/**
 * Positive if O→A→B turns left (counter-clockwise).
 */
function cross(O: Point, A: Point, B: Point): number {
    return (A[0] - O[0]) * (B[1] - O[1]) - (A[1] - O[1]) * (B[0] - O[0])
}

function isClose(A: Point, B: Point, epsilon: number): boolean {
    return Math.abs(A[0] - B[0]) <= epsilon && Math.abs(A[1] - B[1]) <= epsilon
}

/**
 * Tolerance used to merge points, relative to the size of the shape.
 */
function computeEpsilon(contours: Point[][]): number {
    let size = 0
    for (const contour of contours) {
        for (const [x, y] of contour) size = Math.max(size, Math.abs(x), Math.abs(y))
    }
    return (size || 1) * 1e-9
}

function samePoint(A: Point, B: Point): boolean {
    return A[0] === B[0] && A[1] === B[1]
}
