import React from "react"
import View from "@/components/demo/Tgd"
import {
    IconArrowLeft,
    IconArrowRight,
    useLocalStorageState,
    ViewFloatingButton,
    ViewInputText,
    ViewPanel,
    ViewSlider,
} from "@tolokoban/ui"
import { tgdCalcClamp } from "@tolokoban/tgd"

import { useVolumeToMeshManager } from "./_/manager"
import { ensureNumber } from "@tolokoban/type-guards"

import styles from "./page.module.css"
import { trianglesStringToElements } from "./_/geometry"

export default function Page() {
    const [caseNumber, setCaseNumber] = useLocalStorageState(
        0,
        "volume-to-mesh/caseNumber",
        value => tgdCalcClamp(Math.floor(ensureNumber(value, 0)), 0, 255)
    )
    const [triangles, setTriangles] = React.useState("")
    const key = `volume-to-mesh/triangles/${caseNumber}`
    React.useEffect(() => {
        setTriangles(globalThis.localStorage.getItem(key) ?? "")
        manager.caseNumber = caseNumber
    }, [caseNumber])
    React.useEffect(() => {
        globalThis.localStorage.setItem(key, triangles.trim().toUpperCase())
        manager.triangles = triangles
    }, [triangles])
    const handleLeft = () => {
        setCaseNumber((caseNumber + 255) & 0xff)
    }
    const handleRight = () => {
        setCaseNumber((caseNumber + 1) & 0xff)
    }
    const manager = useVolumeToMeshManager()
    return (
        <div>
            <View onReady={context => (manager.context = context)} />
            <ViewSlider
                className={styles.flex1}
                wide
                text={`${caseNumber}`}
                value={caseNumber}
                onChange={setCaseNumber}
                min={0}
                max={255}
                step={1}
            ></ViewSlider>
            <br />
            <ViewPanel display="flex" alignItems="center" fullwidth gap="M">
                <ViewInputText
                    label="Triangles (from mid points ABCDEFGHIJKL)"
                    value={triangles}
                    onChange={setTriangles}
                />
                <ViewFloatingButton icon={IconArrowLeft} onClick={handleLeft} />
                <ViewFloatingButton
                    icon={IconArrowRight}
                    onClick={handleRight}
                />
            </ViewPanel>
            <pre>{getTriangles()}</pre>
        </div>
    )
}

function getTriangles() {
    const lines: string[] = []
    for (let i = 0; i < 256; i++) {
        const text =
            globalThis.localStorage.getItem(`volume-to-mesh/triangles/${i}`) ??
            "?"
        if (text === "?") lines.push("[ /* N/A /* ],")
        else {
            const elements = trianglesStringToElements(text)
            lines.push(`${JSON.stringify(elements)},`)
            const opposite = i ^ 0xff
            if (opposite > i) {
                const reverse: number[] = []
                for (let k = 0; k < elements.length; k += 3) {
                    const a = elements[k]
                    const b = elements[k + 1]
                    const c = elements[k + 2]
                    reverse.push(a, c, b)
                }
                globalThis.localStorage.setItem(
                    `volume-to-mesh/triangles/${opposite}`,
                    reverse.map(v => "ABCDEFGHIJKL".charAt(v)).join("")
                )
            }
        }
    }
    return lines.join("\n")
}
