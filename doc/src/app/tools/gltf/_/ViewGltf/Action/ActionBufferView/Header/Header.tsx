import { webglLookup, type TgdFormatGltfBufferView } from "@tolokoban/tgd"
import { Theme, ViewPanel } from "@tolokoban/ui"

import Styles from "./Header.module.css"
import { isNumber } from "@tolokoban/type-guards"

const $ = Theme.classNames

export type ViewHeaderProps = {
    className?: string
    index: number
    bufferView: TgdFormatGltfBufferView
}

export function ViewHeader({ className, index, bufferView }: ViewHeaderProps) {
    return (
        <ViewPanel
            className={$.join(className, Styles.header)}
            display="flex"
            justifyContent="space-between"
            gap="M"
            padding="M"
            color="primary-5"
        >
            <div>Buffer View #{index}</div>
            <div>
                buffer: <b>{bufferView.buffer}</b>
            </div>
            <div>
                byteLength: <b>{bufferView.byteLength}</b>
            </div>
            {isNumber(bufferView.byteOffset) && (
                <div>
                    byteOffset: <b>{bufferView.byteOffset}</b>
                </div>
            )}
            {isNumber(bufferView.byteStride) && (
                <div>
                    byteStride: <b>{bufferView.byteStride}</b>
                </div>
            )}
            {isNumber(bufferView.target) && (
                <div>
                    target: <b>{webglLookup(bufferView.target)}</b>
                </div>
            )}
        </ViewPanel>
    )
}
