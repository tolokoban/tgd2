import React from "react"
import View from "@/components/demo/Tgd"
import {
    IconArrowLeft,
    IconArrowRight,
    IconReset,
    useLocalStorageState,
    ViewButton,
    ViewFloatingButton,
    ViewInputText,
    ViewPanel,
    ViewSlider,
} from "@tolokoban/ui"
import {
    tgdCalcClamp,
    tgdDataMarchingCubesConfigurations,
} from "@tolokoban/tgd"

import { useVolumeToMeshManager } from "./_/manager"
import { ensureNumber } from "@tolokoban/type-guards"

import styles from "./page.module.css"
import { trianglesStringToElements } from "./_/geometry"
import { CONFIGURATIONS } from "./_/configurations"

export default function Page() {
    const [caseNumber, setCaseNumber] = useLocalStorageState(
        0,
        "volume-to-mesh/caseNumber",
        (value) => tgdCalcClamp(Math.floor(ensureNumber(value, 0)), 0, 255)
    )
    const [triangles, setTriangles] = React.useState("")
    const key = `volume-to-mesh/triangles/${caseNumber}`
    React.useEffect(() => {
        setTriangles(
            globalThis.localStorage.getItem(key) ?? CONFIGURATIONS[caseNumber]
        )
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
            <h1>Marching cubes</h1>
            <p>
                <a href="https://en.wikipedia.org/wiki/Marching_cubes">
                    Marching cubes
                </a>{" "}
                is a technique to generate meshes from a volume.
                <br />A volume is a function that tells you, for each point in a
                box, it you are inside or outside an object.
            </p>
            <p>
                A voxel is a unit cube. Each corner of a voxel is either inside
                the volume (<b>red</b>) or outside (<b>blue</b>). With
                triangles, touching the edges of the voxel, we need to separate
                the space between red and blue corners.
            </p>
            <p>A voxel has 8 corners, so we have 256 configurations.</p>
            <View
                onReady={(context) => {
                    manager.context = context
                }}
            />
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
            <ViewPanel
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <ViewPanel display="flex" alignItems="center" fullwidth gap="M">
                    <ViewInputText
                        label="Triangles (from mid points ABCDEFGHIJKL)"
                        value={triangles}
                        onChange={setTriangles}
                    />
                    <ViewFloatingButton
                        icon={IconArrowLeft}
                        onClick={handleLeft}
                    />
                    <ViewFloatingButton
                        icon={IconArrowRight}
                        onClick={handleRight}
                    />
                </ViewPanel>
                <ViewButton onClick={handleReset} icon={IconReset}>
                    Reset
                </ViewButton>
            </ViewPanel>
            <br />
            <br />
            <details>
                <summary>List of triangles per configuration</summary>
                <pre>{getTriangles()}</pre>
            </details>
        </div>
    )
}

function handleReset() {
    const configurations = tgdDataMarchingCubesConfigurations()
    for (let i = 0; i < configurations.length; i++) {
        const config = configurations[i]
        const code = config.map((i) => "ABCDEFGHIJKL".charAt(i)).join("")
        globalThis.localStorage.setItem(`volume-to-mesh/triangles/${i}`, code)
    }
    location.reload()
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
        }
    }
    return lines.join("\n")
}
