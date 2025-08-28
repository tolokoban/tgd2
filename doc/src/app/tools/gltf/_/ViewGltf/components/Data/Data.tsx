import * as React from "react"
import { webglLookup } from "@tolokoban/tgd"
import { Theme, ViewStrip, ViewPanel, IconClose } from "@tolokoban/ui"

import Styles from "./Data.module.css"

const $ = Theme.classNames

export type ViewDataProps = {
    className?: string
    buffer: ArrayBufferLike
    /**
     * Can be SALAR, FLOAT, VEC2, VEC3, ...
     */
    type: string
    /**
     * Can be gl.FLOAT, gl.UNSIGNED_SHORT, ...
     */
    componentType: number
    onClose?(): void
}

export function ViewData({
    className,
    buffer,
    type,
    componentType,
    onClose,
}: ViewDataProps): JSX.Element {
    const view = createView(buffer, componentType)
    const columns = range(resolveColumns(type))
    const rows = range(Math.ceil(view.length / columns.length))

    return (
        <ViewStrip className={$.join(className, Styles.data)} template="*1">
            <ViewPanel
                color="primary-5"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                gap="M"
                padding="S"
            >
                <div>
                    Attributes: <b>{rows.length}</b>
                </div>
                <div>{type}</div>
                <div>gl.{webglLookup(componentType)}</div>
                <IconClose onClick={onClose} />
            </ViewPanel>
            <ViewPanel overflow="auto" color="neutral-1" padding="S">
                <div
                    className={Styles.grid}
                    style={{
                        "--custom-columns": columns.length,
                    }}
                >
                    {rows.slice(0, 100).map((row) => (
                        <>
                            <div key={`${row}`} className={Styles.row}>
                                {row}
                            </div>
                            {columns.map((col) => (
                                <div key={`${row}/${col}`}>
                                    {view[col + row * columns.length]}
                                </div>
                            ))}
                        </>
                    ))}
                </div>
            </ViewPanel>
        </ViewStrip>
    )
}

function createView(data: ArrayBufferLike, componentType: number) {
    switch (componentType) {
        case WebGL2RenderingContext.FLOAT:
            return new Float32Array(data)
        case WebGL2RenderingContext.HALF_FLOAT:
            return new Float16Array(data)
        case WebGL2RenderingContext.HIGH_FLOAT:
            return new Float64Array(data)
        case WebGL2RenderingContext.UNSIGNED_BYTE:
            return new Uint8Array(data)
        case WebGL2RenderingContext.UNSIGNED_SHORT:
            return new Uint16Array(data)
        case WebGL2RenderingContext.UNSIGNED_INT:
            return new Uint32Array(data)
        default:
            throw new Error(
                `Don't know how to interpret ${webglLookup(componentType)}!`
            )
    }
}

function resolveColumns(type: string) {
    switch (type.toLowerCase()) {
        case "float":
        case "scalar":
            return 1
        case "vec2":
            return 2
        case "vec3":
            return 3
        case "vec4":
            return 4
        default:
            return 1
    }
}

function range(size: number): number[] {
    const arr = new Array(size)
    for (let i = 0; i < size; i++) arr[i] = i
    return arr
}
