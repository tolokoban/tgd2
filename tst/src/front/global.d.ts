export {}

declare global {
    interface Window {
        electronAPI: {
            compareImage(name: string, imageData: ArrayBuffer): Promise<"NEW" | "SAME" | "DIFF">
            readReference(name: string): Promise<ArrayBuffer | null>
            deleteReference(name: string): Promise<void>
            writeReference(name: string, imageData: ArrayBuffer): Promise<void>
            makeWebp(imageData: ArrayBuffer): Promise<ArrayBuffer>
        }
    }
}

declare module "*.module.css" {
    const classes: { [key: string]: string }
    export = classes
}

declare module "*.svg" {
    // Loaded as URL.
    const content: string
    export default content
}

declare module "*.png" {
    const value: any
    export = value
}

declare module "*.jpg" {
    const value: any
    export = value
}

declare module "*.jpeg" {
    const value: any
    export = value
}

declare module "*.gif" {
    const value: any
    export = value
}

declare module "*.webp" {
    const value: any
    export = value
}

declare module "*.avif" {
    const value: any
    export = value
}

declare module "*.woff2" {
    const value: any
    export = value
}

declare module "*.mp4" {
    const value: any
    export = value
}

declare module "*.obj" {
    const value: string
    export = value
}

declare module "*.bin" {
    const value: any
    export = value
}

declare module "*.zip" {
    const value: any
    export = value
}

declare module "*.dat" {
    const value: string
    export = value
}

declare module "*.swc" {
    const value: string
    export = value
}

declare module "*.glb" {
    const value: any
    export = value
}
