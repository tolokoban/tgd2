import nodeFS from "node:fs"
import nodePath from "node:path"

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

const RAD_PER_DEG = Math.PI / 180
const stars = []
let count = 0
let minTemp = Number.POSITIVE_INFINITY
let maxTemp = Number.NEGATIVE_INFINITY
let minMagnitude = Number.POSITIVE_INFINITY
let maxMagnitude = Number.NEGATIVE_INFINITY
let minBrightness = Number.POSITIVE_INFINITY
let maxBrightness = Number.NEGATIVE_INFINITY
for (const line of lines) {
    const bv = parseFloat(line.substring(109, 114))
    if (Number.isNaN(bv)) continue

    let magnitude = parseFloat(line.substring(102, 107))
    if (magnitude > 10) continue

    const name = line.substring(0, 14)
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
    // console.log(
    //     name.padEnd(14),
    //     `${latitude}`.padStart(10),
    //     `${longitude}`.padStart(10),
    //     `${bv}`.padStart(10),
    //     `${temp}`.padStart(10),
    //     `${magnitude}`.padStart(10),
    //     `${brigthness}`.padStart(10)
    // )
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
