import { TgdCodeBloc } from "@tgd/shader/code"

export interface TgdProgramOptions {
    name?: string
    /** Code of the vertex shader */
    vert: TgdCodeBloc
    /** Code of the fragment shader */
    frag: TgdCodeBloc
    /** What attributes to record in a TransformFeedback operation */
    transformFeedback?:
        | string[]
        | {
              bufferMode: "INTERLEAVED_ATTRIBS" | "SEPARATE_ATTRIBS"
              varyings: string[]
          }
}
