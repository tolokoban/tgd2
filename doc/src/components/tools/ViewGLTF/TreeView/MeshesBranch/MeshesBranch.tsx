import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"

import Branch from "../Branch"
import Primitive from "../Primitive"
import { MainSection } from "../types"

export interface MeshesBranchProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function MeshesBranch({ parser, onClick }: MeshesBranchProps) {
    const { meshes } = parser.gltf
    if (!meshes) return null

    return (
        <Branch label={<b>Meshes</b>}>
            {meshes.map((mesh, meshIndex) => (
                <Branch
                    key={mesh.name}
                    label={mesh.name}
                    onClick={() =>
                        onClick({
                            type: "msh",
                            id: meshIndex,
                            primitiveId: 0,
                        })
                    }
                >
                    {mesh.primitives.length > 1 ? (
                        mesh.primitives.map((primitive, primitiveIndex) => (
                            <Branch
                                key={primitiveIndex}
                                label={`Primitive #${primitiveIndex}`}
                                onClick={() =>
                                    onClick({
                                        type: "msh",
                                        id: meshIndex,
                                        primitiveId: primitiveIndex,
                                    })
                                }
                            >
                                <Primitive
                                    parser={parser}
                                    meshIndex={meshIndex}
                                    attributes={primitive.attributes}
                                    indices={primitive.indices}
                                    onClick={onClick}
                                />
                            </Branch>
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
                </Branch>
            ))}
        </Branch>
    )
}
