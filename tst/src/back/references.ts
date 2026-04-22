import FS from "node:fs"
import Path from "node:path"
import sharp from "sharp"

const REFERENCES_DIR = Path.resolve(__dirname, "../../references")

export type CompareResult = "NEW" | "SAME" | "DIFF"

function ensureDir() {
    if (!FS.existsSync(REFERENCES_DIR)) {
        FS.mkdirSync(REFERENCES_DIR, { recursive: true })
    }
}

function refPath(name: string): string {
    return Path.join(REFERENCES_DIR, `${name}.webp`)
}

export async function writeReference(name: string, imageData: Buffer): Promise<void> {
    ensureDir()
    const webp = await sharp(imageData).webp({ quality: 50 }).toBuffer()
    FS.writeFileSync(refPath(name), webp)
}

export async function readReference(name: string): Promise<Buffer | null> {
    const p = refPath(name)
    if (!FS.existsSync(p)) return null
    return FS.readFileSync(p)
}

export async function compareImage(name: string, imageData: Buffer): Promise<CompareResult> {
    ensureDir()
    const p = refPath(name)
    const newWebp = await sharp(imageData).webp({ quality: 50 }).toBuffer()

    if (!FS.existsSync(p)) {
        FS.writeFileSync(p, newWebp)
        return "NEW"
    }

    const existing = FS.readFileSync(p)
    if (existing.equals(newWebp)) return "SAME"
    return "DIFF"
}
