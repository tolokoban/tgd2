import { TgdContext } from "@tolokoban/tgd"
import React from "react"
import { testCases } from "./cases"

type Status = "PENDING" | "RUNNING" | "NEW" | "SAME" | "DIFF" | "ERROR"

interface TestResult {
    name: string
    label: string
    status: Status
    error?: string
}

export default function App() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const [results, setResults] = React.useState<TestResult[]>(() =>
        Object.entries(testCases).map(([name, tc]) => ({
            name,
            label: tc.label,
            status: "PENDING",
        }))
    )
    const [running, setRunning] = React.useState(false)

    const runAll = React.useCallback(async () => {
        const canvas = canvasRef.current
        if (!canvas || running) return
        setRunning(true)

        canvas.width = 240
        canvas.height = 160

        for (const [name, testCase] of Object.entries(testCases)) {
            const context = new TgdContext(canvas, { preserveDrawingBuffer: true })
            setResults(prev =>
                prev.map(r => (r.name === name ? { ...r, status: "RUNNING" } : r))
            )
            try {
                const paint = await testCase.exec(context)
                paint()
                context.paint()
                await new Promise(resolve => requestAnimationFrame(resolve))

                const blob = await new Promise<Blob | null>(resolve =>
                    canvas.toBlob(resolve, "image/png")
                )
                if (!blob) throw new Error("Failed to get canvas blob")

                const arrayBuffer = await blob.arrayBuffer()
                const result = await window.electronAPI.compareImage(name, arrayBuffer)

                setResults(prev =>
                    prev.map(r => (r.name === name ? { ...r, status: result } : r))
                )
            } catch (err) {
                setResults(prev =>
                    prev.map(r =>
                        r.name === name
                            ? { ...r, status: "ERROR", error: String(err) }
                            : r
                    )
                )
            } finally {
                context.delete()
            }
        }

        setRunning(false)
    }, [running])

    return (
        <div style={{ padding: 16, fontFamily: "sans-serif" }}>
            <h1>TGD Visual Tests</h1>
            <button type="button" onClick={runAll} disabled={running}>
                {running ? "Running..." : "Run All Tests"}
            </button>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <table style={{ marginTop: 16, borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={thStyle}>Test</th>
                        <th style={thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(r => (
                        <tr key={r.name}>
                            <td style={tdStyle}>{r.label}</td>
                            <td style={{ ...tdStyle, color: statusColor(r.status) }}>
                                {r.status}
                                {r.error && <div style={{ fontSize: "0.8em" }}>{r.error}</div>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const thStyle: React.CSSProperties = { textAlign: "left", padding: "4px 12px", borderBottom: "2px solid #333" }
const tdStyle: React.CSSProperties = { padding: "4px 12px", borderBottom: "1px solid #ccc" }

function statusColor(s: Status): string {
    switch (s) {
        case "SAME": return "green"
        case "DIFF": return "red"
        case "NEW": return "blue"
        case "ERROR": return "darkred"
        case "RUNNING": return "orange"
        default: return "gray"
    }
}
