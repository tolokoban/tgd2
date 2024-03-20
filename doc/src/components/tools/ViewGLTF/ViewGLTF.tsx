import {
    tgdFetchArrayBuffer,
    TgdParserGLTransfertFormatBinary,
} from "@tolokoban/tgd"
import { Theme } from "@tolokoban/ui"
import React from "react"

import InputFile from "@/components/InputFile"
import Spinner from "../../Spinner"
import ImageDetail from "./details/ImageDetail"
import MeshPreview from "./details/MeshPreview"
import TreeView from "./TreeView"
import { MainSection } from "./TreeView/types"

import DefaultModelURL from "./danatia.glb"
// import DefaultModelURL from "./apple.2k.glb"
import Style from "./ViewGLTF.module.css"
import NodePreview from "./details/NodePreview"

const $ = Theme.classNames

export interface ViewGLTFProps {
    className?: string
}

export default function ViewGLTF({ className }: ViewGLTFProps) {
    const [parser, setParser] = useParser()
    const [section, setSection] = React.useState<MainSection | null>({
        type: "msh",
        id: 0,
        primitiveId: 0,
    })

    function handleLoad(file: {
        name: string
        size: number
        type: string
        data: string | ArrayBuffer
    }): void {
        console.log("🚀 [ViewGLTF] file = ", file) // @FIXME: Remove this line written on 2024-03-09 at 14:29
        const { data } = file
        if (typeof data === "string") return

        setParser(new TgdParserGLTransfertFormatBinary(data))
    }

    return (
        <div className={$.join(className, Style.ViewGLTF)}>
            {parser ? (
                <>
                    <aside>
                        <InputFile accept=".glb" onLoad={handleLoad}>
                            Load a GLB file...
                        </InputFile>
                        <div>
                            <TreeView parser={parser} onClick={setSection} />
                        </div>
                    </aside>{" "}
                    <main>
                        {section && section.type === "img" && (
                            <ImageDetail id={section.id} parser={parser} />
                        )}
                        {section && section.type === "msh" && (
                            <MeshPreview
                                asset={parser}
                                meshIndex={section.id}
                                primitiveIndex={section.primitiveId}
                            />
                        )}
                        {section && section.type === "nod" && (
                            <NodePreview
                                asset={parser}
                                nodeIndices={[section.id]}
                            />
                        )}
                    </main>
                </>
            ) : (
                <Spinner />
            )}
        </div>
    )
}

function useParser(): [
    TgdParserGLTransfertFormatBinary | null,
    React.Dispatch<
        React.SetStateAction<TgdParserGLTransfertFormatBinary | null>
    >
] {
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
    return [parser, setParser]
}
