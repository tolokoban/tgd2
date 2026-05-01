import FS from "node:fs"
import AsyncFS from "node:fs/promises"
import Path from "node:path"
import sharp from "sharp"

const REFERENCES_DIR = Path.resolve(__dirname, "../../references")

export type CompareResult = "NEW" | "SAME" | "DIFF"

function ensureReferencesDir() {
    if (!FS.existsSync(REFERENCES_DIR)) {
        FS.mkdirSync(REFERENCES_DIR, { recursive: true })
    }
}

function refPath(name: string): string {
    const path = Path.resolve(REFERENCES_DIR, `${name}.webp`)
    if (!path.startsWith(REFERENCES_DIR)) {
        throw new Error(`Invalid reference name: "${name}"`)
    }
    FS.mkdirSync(Path.dirname(path), { recursive: true })
    return path
}

export async function writeReference(name: string, imageData: Buffer): Promise<void> {
    ensureReferencesDir()
    const webp = await sharp(imageData).webp({ quality: 50 }).toBuffer()
    FS.writeFileSync(refPath(name), webp)
}

export async function makeWebp(imageData: Buffer): Promise<Buffer<ArrayBufferLike>> {
    const webp = await sharp(imageData).webp({ quality: 50 }).toBuffer()
    return webp
}

export async function readReference(name: string): Promise<Buffer | null> {
    const p = refPath(name)
    if (!FS.existsSync(p)) return null

    return FS.readFileSync(p)
}

export async function deleteReference(name: string): Promise<void> {
    const p = refPath(name)
    if (!FS.existsSync(p)) return

    return AsyncFS.unlink(p)
}

export async function compareImage(name: string, imageData: Buffer): Promise<CompareResult> {
    ensureReferencesDir()
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
