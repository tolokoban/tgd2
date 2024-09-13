import nodeFS from "node:fs"
import nodePath from "node:path"

const RAD_PER_DEG = Math.PI / 180
const DEG_PER_RAD = 180 / Math.PI

/**
 * @param {string} msg
 * @returns {never}
 */
function fatal(msg) {
    console.error()
    console.error(msg)
    console.error()
    process.exit(1)
}

const inputFilename = nodePath.resolve(".", "catalog.txt")
const outputFilename = nodePath.resolve("..", "stars.dat")

if (!nodeFS.existsSync(inputFilename)) {
    fatal(`Couldn't find the catalog: ${inputFilename}`)
}

const lines = nodeFS.readFileSync(inputFilename).toString().trim().split("\n")
console.log()
console.log("This catalog provides", lines.length, "stars.")

const stars = []
let count = 0
let minTemp = Number.POSITIVE_INFINITY
let maxTemp = Number.NEGATIVE_INFINITY
let minMagnitude = Number.POSITIVE_INFINITY
let maxMagnitude = Number.NEGATIVE_INFINITY
let minBrightness = Number.POSITIVE_INFINITY
let maxBrightness = Number.NEGATIVE_INFINITY
const starsById = new Map()
const ids = new Set()
for (const line of lines) {
    const bv = parseFloat(line.substring(109, 114))
    if (Number.isNaN(bv)) continue

    let magnitude = parseFloat(line.substring(102, 107))
    if (magnitude > 10) continue

    const id = line.substring(25, 31)
    ids.add(id)
    const longitude = parseFloat(line.substring(90, 96)) * RAD_PER_DEG
    const latitude = parseFloat(line.substring(96, 102)) * RAD_PER_DEG
    minMagnitude = Math.min(minMagnitude, magnitude)
    maxMagnitude = Math.max(maxMagnitude, magnitude)
    const brigthness = Math.sqrt(1e16 * Math.pow(2.512, -magnitude)) * 1e-8
    minBrightness = Math.min(minBrightness, brigthness)
    maxBrightness = Math.max(maxBrightness, brigthness)
    let temp = 4600 * (1 / (0.92 * bv + 1.7) + 1 / (0.92 * bv + 0.62))
    temp /= 16000
    minTemp = Math.min(minTemp, temp)
    maxTemp = Math.max(maxTemp, temp)
    if (magnitude <= 0)
        console.log(
            id.padEnd(14),
            `${bv}`.padStart(10),
            `${temp}`.padStart(10),
            `${magnitude}`.padStart(10),
            `${brigthness}`.padStart(10)
        )
    starsById.set(id, { latitude, longitude })
    stars.push(latitude, longitude, brigthness, temp)
    count++
}

console.log()
const data = new Float32Array(stars)
console.log(
    "The resulting data file will weight",
    Math.ceil(data.byteLength / 1024),
    "Kb, and contain",
    count,
    "stars."
)
console.log()
console.log("Brightness from", minBrightness, "to", maxBrightness)
console.log("Magnitude from", minMagnitude, "to", maxMagnitude)
console.log("Temp from", minTemp, "to", maxTemp)
console.log()
const fd = nodeFS.openSync(outputFilename, "w")
nodeFS.writeSync(fd, data)
nodeFS.closeSync(fd)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * @see https://simbad.cds.unistra.fr/guide/sim-url.htx
 */
async function fetchNames() {
    const fd = nodeFS.openSync(nodePath.resolve("..", "names.txt"), "w")
    for (const id of Array.from(ids)) {
        const time = Date.now()
        const resp = await fetch(
            `https://simbad.cds.unistra.fr/simbad/sim-id?output.format=votable&output.params=ids&Ident=hd${id}`
        )
        const text = await resp.text()
        const start = text.indexOf("\n<TR><TD>") + "\n<TR><TD>".length
        const end = text.indexOf("</TD></TR>", start)
        const items = text.substring(start, end).split("|")
        const result = [id]
        items.forEach(item => {
            if (item.startsWith("NAME")) {
                result.push(item.substring("NAME".length).trim())
            }
        })
        const duration = Date.now() - time
        await sleep(Math.max(0, 200 - duration))
        const line = result.join("\t")
        console.log(line)
        if (result.length > 1) {
            nodeFS.writeSync(fd, `${line}\n`)
        }
    }
    nodeFS.closeSync(fd)
}

console.log()
const content = nodeFS
    .readFileSync(nodePath.resolve("..", "names.txt"))
    .toString()
let chars = 0
/**
 * @type {Record<string, [number, number]>}
 */
const positionsPerName = {}
for (const line of content.split("\n")) {
    const [id, ...names] = line.split("\t")
    names.sort()
    const name = names.join(", ")
    const star = starsById.get(id)
    if (!id) continue

    chars += name.length + 1
    console.log(
        id,
        name,
        Math.round(star.latitude * DEG_PER_RAD),
        Math.round(star.longitude * DEG_PER_RAD)
    )
    positionsPerName[name] = [star.latitude, star.longitude]
}
console.log()
console.log(Math.ceil(Math.sqrt(chars)))
console.log()
nodeFS.writeFileSync(
    nodePath.resolve("../names.json"),
    JSON.stringify(positionsPerName)
)
