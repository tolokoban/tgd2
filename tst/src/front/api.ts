import { invoke } from "@tauri-apps/api/core"

export type CompareResult = "NEW" | "SAME" | "DIFF"

export async function compareImage(name: string, imageData: ArrayBuffer): Promise<CompareResult> {
    return invoke<CompareResult>("compare_image", { name, imageData: Array.from(new Uint8Array(imageData)) })
}

export async function readReference(name: string): Promise<ArrayBuffer | null> {
    const data = await invoke<number[] | null>("read_reference", { name })
    if (!data) return null
    return new Uint8Array(data).buffer
}

export async function deleteReference(name: string): Promise<void> {
    await invoke<void>("delete_reference", { name })
}

export async function writeReference(name: string, imageData: ArrayBuffer): Promise<void> {
    await invoke<void>("write_reference", { name, imageData: Array.from(new Uint8Array(imageData)) })
}

export async function makeWebp(imageData: ArrayBuffer): Promise<ArrayBuffer> {
    const data = await invoke<number[]>("make_webp", { imageData: Array.from(new Uint8Array(imageData)) })
    return new Uint8Array(data).buffer
}
