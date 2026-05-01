import { TgdContext, version } from "@tolokoban/tgd"
import React from "react"
import { testCases } from "@/cases"
import { makeCameraPerspective } from "@/factory/camera"
import { TestCase } from "@/types"

import styles from "./App.module.css"

type Status = "PENDING" | "RUNNING" | "NEW" | "SAME" | "DIFF" | "ERROR"

interface TestResult {
    name: string
    label: string
    promise: Promise<{ default: TestCase }>
    status: Status
    error?: string
}

export function App() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const [results, setResults] = React.useState<TestResult[]>(() =>
        Object.entries(testCases).map(([name, promise]) => ({
            name,
            label: "",
            promise,
            status: "PENDING",
        })),
    )
    const [running, setRunning] = React.useState(false)

    const runAll = React.useCallback(async () => {
        const canvas = canvasRef.current
        if (!canvas || running) return
        setRunning(true)

        for (const [name, promise] of Object.entries(testCases)) {
            console.log("=".repeat(name.length))
            console.log(name)
            canvas.width = 240
            canvas.height = 160
            const context = new TgdContext(canvas, { preserveDrawingBuffer: true, verbose: true })
            context.camera = makeCameraPerspective()
            setResults((prev) => prev.map((r) => (r.name === name ? { ...r, status: "RUNNING" } : r)))
            try {
                console.log("🐞 [App@40] name, promise =", name, promise) // @FIXME: Remove this line written on 2026-04-30 at 10:59
                const { default: testCase } = await promise
                setResults((prev) => prev.map((r) => (r.name === name ? { ...r, label: testCase.label } : r)))
                console.log("🐞 [App@42] testCase =", testCase) // @FIXME: Remove this line written on 2026-04-30 at 10:59
                const paint = await testCase.exec(context)
                paint()
                context.paint()
                await new Promise<void>((resolve) => {
                    context.eventPaint.addListener(() => {
                        context.gl.finish()
                        resolve()
                    })
                })
                console.log("Painted ", name, testCase.label)
                const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"))
                if (!blob) throw new Error("Failed to get canvas blob")

                const arrayBuffer = await blob.arrayBuffer()
                console.log("🐞 [App@55] arrayBuffer =", arrayBuffer) // @FIXME: Remove this line written on 2026-04-30 at 11:11
                const result = await window.electronAPI.compareImage(name, arrayBuffer)
                console.log("🐞 [App@57] result =", result) // @FIXME: Remove this line written on 2026-04-30 at 11:11

                setResults((prev) => prev.map((r) => (r.name === name ? { ...r, status: result } : r)))
            } catch (err) {
                console.error(err)
                setResults((prev) =>
                    prev.map((r) => (r.name === name ? { ...r, status: "ERROR", error: String(err) } : r)),
                )
            } finally {
                context.delete()
            }
        }

        setRunning(false)
    }, [running])

    return (
        <div className={styles.App}>
            <div>
                <h1>TGD v{version}</h1>
                <h2>Anti-Regression Tests</h2>
                <button type="button" onClick={runAll} disabled={running}>
                    {running ? "Running..." : "Run All Tests"}
                </button>
                <div>
                    <canvas ref={canvasRef} />
                </div>
            </div>
            <div>
                <table style={{ marginTop: 16, borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Test</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((r) => (
                            <tr key={r.name}>
                                <td style={tdStyle}>
                                    <a href={`#/cases/${r.name}`} target={r.name}>
                                        {r.name}
                                    </a>
                                </td>
                                <td style={{ ...tdStyle, color: statusColor(r.status) }}>{r.status}</td>
                                <td style={tdStyle}>
                                    {" "}
                                    {r.error ? <div style={{ fontSize: "0.8em" }}>{r.error}</div> : r.label}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const thStyle: React.CSSProperties = { textAlign: "left", padding: "4px 12px", borderBottom: "2px solid #333" }
const tdStyle: React.CSSProperties = { padding: "4px 12px", borderTop: "1px solid #888" }

function statusColor(s: Status): string {
    switch (s) {
        case "SAME":
            return "green"
        case "DIFF":
            return "red"
        case "NEW":
            return "blue"
        case "ERROR":
            return "darkred"
        case "RUNNING":
            return "orange"
        default:
            return "gray"
    }
}
