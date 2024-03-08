import React from "react"
import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Primitive from "../Primitive"
import { MainSection } from "../TreeView"

export interface MeshesBranchProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function MeshesBranch({ parser, onClick }: MeshesBranchProps) {
    const { meshes } = parser.gltf
    if (!meshes) return null

    return (
        <details>
            <summary>Meshes</summary>
            {meshes.map((mesh, meshIndex) => (
                <details key={mesh.name}>
                    <summary>{mesh.name}</summary>
                    {mesh.primitives.length > 1 ? (
                        mesh.primitives.map((primitive, primitiveIndex) => (
                            <details key={primitiveIndex}>
                                <summary>Primitive #{primitiveIndex}</summary>
                                <Primitive
                                    parser={parser}
                                    meshIndex={meshIndex}
                                    attributes={primitive.attributes}
                                    indices={primitive.indices}
                                    onClick={onClick}
                                />
                            </details>
                        ))
                    ) : (
                        <Primitive
                            parser={parser}
                            meshIndex={meshIndex}
                            attributes={mesh.primitives[0].attributes}
                            indices={mesh.primitives[0].indices}
                            onClick={onClick}
                        />
                    )}
                </details>
            ))}
        </details>
    )
}
