import * as React from "react"

import { Theme, CommonProps, styleCommon } from "@tolokoban/ui"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Styles from "./ActionNodeMesh.module.css"
import Error from "@/components/Error"
import { Expander } from "../../../GltfTree/Expander"

const $ = Theme.classNames

export type ViewActionNodeMeshProps = CommonProps & {
    data: TgdParserGLTransfertFormatBinary
    meshIndex: number
}

export function ViewActionNodeMesh({
    className,
    data,
    meshIndex,
}: ViewActionNodeMeshProps): JSX.Element {
    const mesh = data.getMesh(meshIndex)
    if (!mesh) return <Error>No mesh found with index #{meshIndex}!</Error>

    return (
        <div className={$.join(className, Styles.actionNodeMesh)}>
            <ul>
                {mesh.primitives.map((primitive, index) => (
                    <li key={index}>
                        <b>Primitive {index}</b>
                        {Object.keys(primitive.attributes).map(attName => (
                            <Expander key={attName} title={attName}>
                                <pre>
                                    {JSON.stringify(
                                        data.getAccessor(
                                            primitive.attributes[attName]
                                        ),
                                        null,
                                        "  "
                                    )}
                                </pre>
                            </Expander>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}
