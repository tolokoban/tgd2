import { TgdCodeBloc } from "@tgd/shader/code"

export interface TgdProgramOptions {
    /** Code of the vertex shader */
    vert: TgdCodeBloc
    /** Code of the fragment shader */
    frag: TgdCodeBloc
}
