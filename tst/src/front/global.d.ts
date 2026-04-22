export {}

declare global {
    interface Window {
        electronAPI: {
            compareImage(name: string, imageData: ArrayBuffer): Promise<"NEW" | "SAME" | "DIFF">
            readReference(name: string): Promise<ArrayBuffer | null>
            writeReference(name: string, imageData: ArrayBuffer): Promise<void>
        }
    }
}
