import React from "react"
import {
    TgdCameraPerspective,
    TgdCameraPerspectiveOptions,
} from "@tolokoban/tgd"

export function useStateCameraPerspective(
    options: TgdCameraPerspectiveOptions = {}
): [TgdCameraPerspective, (v: TgdCameraPerspective) => void] {
    const ref = React.useRef<null | TgdCameraPerspective>(null)
    if (!ref.current) ref.current = new TgdCameraPerspective(options)
    return [ref.current, (value: TgdCameraPerspective) => (ref.current = value)]
}
