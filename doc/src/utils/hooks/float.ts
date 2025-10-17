import React from "react"

export function useFloat(
    initialValue: number,
    onChange?: (value: number) => void
): [value: number, setValue: (value: number) => void] {
    const [value, setValue] = React.useState(initialValue)
    React.useEffect(() => onChange?.(value), [value])
    return [value, setValue]
}
