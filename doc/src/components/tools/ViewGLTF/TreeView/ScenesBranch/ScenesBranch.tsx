import { TgdParserGLTransfertFormatBinary } from "@tolokoban/tgd"
import { Theme } from "@tolokoban/ui"

import Branch from "../Branch"
import { MainSection } from "../types"

import Style from "./ScenesBranch.module.css"

const $ = Theme.classNames

export interface ScenesBranchProps {
    className?: string
    parser: TgdParserGLTransfertFormatBinary
    onClick(section: MainSection): void
}

export default function ScenesBranch({
    className,
    parser,
    onClick,
}: ScenesBranchProps) {
    const scenes = parser.getScenes()
    return (
        <Branch
            className={$.join(className, Style.ScenesBranch)}
            label={<b>Scenes</b>}
        >
            {scenes.map((scene, sceneIndex) => (
                <Branch
                    key={`scene#${sceneIndex}`}
                    label={scene.name ?? `Scene # ${sceneIndex}`}
                >
                    {(scene.nodes ?? []).map(nodeIndex => (
                        <NodeBranch
                            key={`node#${nodeIndex}`}
                            nodeId={nodeIndex}
                            parser={parser}
                            onClick={onClick}
                        />
                    ))}
                </Branch>
            ))}
        </Branch>
    )
}

interface NodeBranchProps extends ScenesBranchProps {
    nodeId: number
}

function NodeBranch({ className, parser, onClick, nodeId }: NodeBranchProps) {
    const node = parser.getNode(nodeId)
    return (
        <Branch label={node.name ?? `Node #${nodeId}`}>
            <pre>{JSON.stringify(node, null, "  ")}</pre>
            {(node.children ?? []).map(childIndex => (
                <NodeBranch
                    key={`Node#${childIndex}`}
                    parser={parser}
                    onClick={onClick}
                    nodeId={childIndex}
                />
            ))}
        </Branch>
    )
}
