import { TgdCodeFunctions } from "@tolokoban/tgd"
import React from "react"

export function useGlslFunctions(): Record<string, () => TgdCodeFunctions> {
    const [functions, setFunctions] = React.useState<
        Record<string, () => TgdCodeFunctions>
    >({})

    React.useEffect(() => {
        import("@tolokoban/tgd").then((module) => {
            const result: Record<string, () => TgdCodeFunctions> = {}
            const prefix = "tgdCodeFunction_"
            for (const key of Object.keys(module)) {
                if (key.startsWith(prefix)) {
                    result[key.slice(prefix.length)] = module[
                        key as keyof typeof module
                    ] as () => TgdCodeFunctions
                }
            }
            setFunctions(result)
        })
    }, [])

    return functions
}
