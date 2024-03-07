import React from "react"
import { Theme, ViewButton } from "@tolokoban/ui"
import {
    TgdParserGLTransfertFormatBinary,
    tgdFetchArrayBuffer,
} from "@tolokoban/tgd"

import DanatiaURL from "./danatia.glb"

import Style from "./ViewGLTF.module.css"
import Primitive from "./TreeView/Primitive"
import TreeView from "./TreeView"
import Spinner from "../../Spinner"
import { MainSection } from "./TreeView/TreeView"
import ImageDetail from "./details/ImageDetail"

const $ = Theme.classNames

export interface ViewGLTFProps {
    className?: string
}

export default function ViewGLTF({ className }: ViewGLTFProps) {
    const parser = useParser()
    const [section, setSection] = React.useState<MainSection | null>(null)

    console.log(
        "🚀 [ViewGLTF] section.type, section.id = ",
        section?.type,
        section?.id
    ) // @FIXME: Remove this line written on 2024-03-07 at 18:10
    return (
        <div>
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
        tgdFetchArrayBuffer(DanatiaURL)
            .then(content => {
                const parser = new TgdParserGLTransfertFormatBinary(content)
                setParser(parser)
            })
            .catch(console.error)
    }, [])
    return parser
}
