import React from "react"
import styles from "./theme.module.css"
import Theme from "@/ui/theme"
import { ColorNames } from "@/ui/styles/color"
import { makeCustomPanel } from "@/ui/view/panel"

const Panel = makeCustomPanel({
    cssPadding: 0.5,
    cssBorderRadius: 0.25,
})

export default function Home() {
    const theme = new Theme()
    theme.apply()

    const indexes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className={styles.themePages}>
            <h1 className={styles.neutral}>Neutral</h1>
            <h1 className={styles.primary}>Primary</h1>
            <h1 className={styles.secondary}>Secondary</h1>
            <h1 className={styles.tertiary}>Tertiary</h1>
            <h1 className={styles.other}>Other</h1>
            {indexes.map(index =>
                ["neutral", "primary", "secondary", "tertiary"].map(type => {
                    const name = `--theme-color-${type}-${index}`
                    return (
                        <Panel
                            className={styles[type]}
                            color={type as ColorNames}
                            tone={index}
                        >
                            {name}
                        </Panel>
                    )
                })
            )}
            <Panel className={styles.row2} color="input">
                --theme-color-input
            </Panel>
            <Panel className={styles.row3} color="error">
                --theme-color-error
            </Panel>
            <Panel className={styles.row4} color="valid">
                --theme-color-valid
            </Panel>
        </div>
    )
}
