import {
    tgdFetchArrayBuffer,
    TgdParserGLTransfertFormatBinary,
} from "@tolokoban/tgd"
import { Theme } from "@tolokoban/ui"
import React from "react"

import Spinner from "../../Spinner"
import ImageDetail from "./details/ImageDetail"
import TreeView from "./TreeView"
import { MainSection } from "./TreeView/TreeView"

import DefaultModelURL from "./apple.2k.glb"
import Style from "./ViewGLTF.module.css"
import MeshPreview from "./details/MeshPreview"

const $ = Theme.classNames

export interface ViewGLTFProps {
    className?: string
}

export default function ViewGLTF({ className }: ViewGLTFProps) {
    const parser = useParser()
    const [section, setSection] = React.useState<MainSection | null>(null)

    return (
        <div className={$.join(className, Style.ViewGLTF)}>
            {parser ? (
                <>
                    <aside>
                        <div>
                            <TreeView parser={parser} onClick={setSection} />
                        </div>
                    </aside>{" "}
                    <main>
                        {section && section.type === "IMG" && (
                            <ImageDetail id={section.id} parser={parser} />
                        )}
                        <MeshPreview
                            asset={parser}
                            meshIndex={0}
                            primitiveIndex={0}
                        />
                    </main>
                </>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

function useParser() {
    const [parser, setParser] =
        React.useState<TgdParserGLTransfertFormatBinary | null>(null)
    React.useEffect(() => {
        tgdFetchArrayBuffer(DefaultModelURL)
            .then(content => {
                const parser = new TgdParserGLTransfertFormatBinary(content)
                setParser(parser)
            })
            .catch(console.error)
    }, [])
    return parser
}
