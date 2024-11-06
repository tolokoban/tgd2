import React from "react"

import styles from "./triangle.module.css"
import { makeColors, range } from "./util"
import { RowGenerator } from "./row-generator"

export interface PascalTriangleProps {
    rows: number
    modulo: number
}

export function PascalTriangle({ rows, modulo }: PascalTriangleProps) {
    const colors: string[] = useColors(modulo)
    const generator = new RowGenerator()
    return (
        <div className={styles.main}>
            {range(rows).map(row => (
                <div key={row}>
                    {generator.next().map((value, index) => (
                        <div
                            key={index}
                            style={{ background: colors[value % modulo] }}
                            title={`${value}`}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

function useColors(modulo: number): string[] {
    return React.useMemo(() => makeColors(modulo), [modulo])
}
