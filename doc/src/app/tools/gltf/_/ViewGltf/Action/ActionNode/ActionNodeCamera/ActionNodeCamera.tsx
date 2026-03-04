import {
    isTgdFormatGltfCameraPerspective,
    tgdCalcRadToDeg,
    type TgdDataGlb,
    type TgdFormatGltfCamera,
    type TgdFormatGltfNode,
} from "@tolokoban/tgd"
import { ensureNumber } from "@tolokoban/type-guards"
import { type CommonProps, styleCommon, Theme } from "@tolokoban/ui"
import type * as React from "react"
import CodeViewerView from "@/components/demo/CodeViewer"
import ErrorView from "@/components/Error"
import Styles from "./ActionNodeCamera.module.css"

const $ = Theme.classNames

export type ViewActionNodeCameraProps = CommonProps & {
    data: TgdDataGlb
    node: TgdFormatGltfNode
}

export function ViewActionNodeCamera(props: ViewActionNodeCameraProps) {
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    const camera = props.data.json.cameras?.[props.node.camera ?? -1]
    if (!camera) return <ErrorView>No camera found!</ErrorView>

    const code: string = figureCode(props.node, camera)
    return (
        <div className={$.join(props.className, Styles.actionNodeCamera)} style={style}>
            <CodeViewerView language="ts" value={code} />
        </div>
    )
}

function figureCode(node: TgdFormatGltfNode, camera: TgdFormatGltfCamera): string {
    const code: string[] = []
    if (isTgdFormatGltfCameraPerspective(camera)) {
        code.push(
            "const camera = new TgdCameraPerspective({",
            `  fovy: ${camera.perspective.yfov},  // around ${Math.round(tgdCalcRadToDeg(camera.perspective.yfov))}°`,
            `  near: ${ensureNumber(camera.perspective.znear, 1e-3)}`,
            `  far: ${camera.perspective.zfar ?? "Infinity"}`,
            "  transfo: {",
            "    distrance: 0,",
        )
        if (node.translation) {
            code.push(`    position: [${node.translation.join(", ")}],`)
        }
        if (node.rotation) {
            code.push(`    orientation: [${node.rotation.join(", ")}],`)
        }
        if (node.scale) code.push(`    scale: [${node.scale.join(", ")}],`)
        code.push("  }", "})")
    }
    return code.join("\n")
}
