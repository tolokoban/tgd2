import * as React from "react"
import {
    tgdCalcClamp,
    tgdCanvasCreateWithContext2D,
    tgdCanvasFromImage,
    tgdCanvasToArrayBuffer,
    TgdContext,
    tgdLoadImage,
} from "@tolokoban/tgd"

import { TestCase } from "@/types"
import { makeCameraPerspective } from "@/factory/camera"
import { compareImage, deleteReference, makeWebp, readReference } from "@/api"

import BlackURL from "./black.png"
import styles from "./Preview.module.css"

export type PreviewProps = {
    name: string
    testCase: TestCase
}

export function Preview({ name, testCase }: PreviewProps) {
    const [steps, setSteps] = React.useState(0)
    const url = useReferenceURL(name)
    const refImage = React.useRef<HTMLImageElement | null>(null)
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const refDiff = React.useRef<HTMLCanvasElement | null>(null)
    React.useEffect(() => {
        setSteps(0)
        const canvas = refCanvas.current
        if (!canvas) return

        const context = new TgdContext(canvas, { preserveDrawingBuffer: true, verbose: true })
        context.camera = makeCameraPerspective()
        testCase.exec(context).then((paint) => {
            paint()
            context.paint()
            const handler = () => {
                context.eventPaint.removeListener(handler)
                context.gl.finish()
                setSteps((prev) => prev + 1)
            }
            context.eventPaint.addListener(handler)
        })
    }, [testCase])
    const handleDelete = async () => {
        await deleteReference(name)
        window.location.reload()
    }
    const diff = useDiff(name, steps, refImage, refCanvas, refDiff)

    return (
        <div className={styles.preview}>
            <h1>{name}</h1>
            <h2>{testCase.label}</h2>
            <div className={styles.result}>
                <div>
                    <h3>Expected</h3>
                    {url && <img ref={refImage} src={url} onLoad={() => setSteps((prev) => prev + 1)} />}
                </div>
                <div>
                    <h3>Got</h3>
                    <canvas ref={refCanvas} width={240} height={160}></canvas>
                </div>
                <div>
                    <h3>
                        <div>Diff {diff && <span className={styles[diff]}>{diff}</span>}</div>
                    </h3>
                    <canvas ref={refDiff} width={240} height={160}></canvas>
                </div>
            </div>
            {diff === "DIFF" && (
                <div>
                    <button type="button" onClick={handleDelete}>
                        Accept "Got" as the new reference
                    </button>
                    <p>Doing this will delete the current reference.</p>
                </div>
            )}
        </div>
    )
}

function useReferenceURL(id: string) {
    const [url, setUrl] = React.useState<string | null>(null)
    React.useEffect(() => {
        const action = async () => {
            const ref = `${id}`
            console.log("🐞 [Preview@52] ref =", ref) // @FIXME: Remove this line written on 2026-04-30 at 12:58
            try {
                const data = await readReference(ref)
                if (data) {
                    const base64 = btoa(String.fromCharCode(...new Uint8Array(data)))
                    setUrl(`data:image/webp;base64,${base64}`)
                } else {
                    setUrl(BlackURL)
                }
            } catch (error) {
                console.error(`Unable to load reference "${ref}":`, error)
                setUrl(BlackURL)
            }
        }
        action()
    }, [id])
    return url
}

function useDiff(
    name: string,
    steps: number,
    refImage: React.RefObject<HTMLImageElement | null>,
    refCanvas: React.RefObject<HTMLCanvasElement | null>,
    refDiff: React.RefObject<HTMLCanvasElement | null>,
) {
    const [diff, setDiff] = React.useState<null | "NEW" | "SAME" | "DIFF">(null)
    React.useEffect(() => {
        setDiff(null)
        if (steps < 2) return

        const action = async () => {
            const image = refImage.current
            const canvas = refCanvas.current
            const diff = refDiff.current
            if (!image || !canvas || !diff) return

            const imageData = getImageData(image)
            const canvasData = getImageData(await convertIntoWebpImage(canvas))
            const size = Math.max(imageData.length, canvasData.length)
            const ctx = diff.getContext("2d")
            if (!ctx) throw new Error("Unable to get 2d context for Diff!")

            const data = ctx.createImageData(canvas.width, canvas.height, {
                pixelFormat: "rgba-unorm8",
                colorSpace: "srgb",
            })
            for (let i = 0; i < size; i += 4) {
                for (let j = 0; j < 3; j++) {
                    const k = i + j
                    const delta = computeDelta(imageData, canvasData, k)
                    data.data[k] = delta
                }
                // Set opacity to 255.
                data.data[i + 3] = 255
            }
            ctx.putImageData(data, 0, 0)
            setDiff(await compareImage(name, await tgdCanvasToArrayBuffer(canvas)))
        }
        action()
    }, [steps])

    return diff
}

function getImageData(input: HTMLCanvasElement | HTMLImageElement): Uint8ClampedArray {
    const canvasInput = input instanceof HTMLCanvasElement ? input : tgdCanvasFromImage(input)
    const w = canvasInput.width
    const h = canvasInput.height
    const { ctx } = tgdCanvasCreateWithContext2D(w, h)

    ctx.clearRect(0, 0, w, h)
    ctx.drawImage(canvasInput, 0, 0)
    const data = ctx.getImageData(0, 0, w, h, {
        pixelFormat: "rgba-unorm8",
        colorSpace: "srgb",
    })
    return data.data
}

function computeDelta(data1: Uint8ClampedArray<ArrayBufferLike>, data2: Uint8ClampedArray<ArrayBufferLike>, k: number) {
    const v1 = data1[k]
    const v2 = data2[k]
    return tgdCalcClamp(4 * Math.abs(v1 - v2), 0, 255)
}

async function convertIntoWebpImage(canvas: HTMLCanvasElement): Promise<HTMLImageElement> {
    const arrayBuffer = await tgdCanvasToArrayBuffer(canvas)
    const buffer = await makeWebp(arrayBuffer)
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)))
    const url = `data:image/webp;base64,${base64}`
    const img = await tgdLoadImage(url)
    if (!img) throw new Error("[convertIntoWebpImage] Invalid WebP image!")

    return img
}
