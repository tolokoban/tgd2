import { TgdCamera, TgdInputs } from ".."

export type TgdContextInterface = {
    readonly gl: WebGL2RenderingContext
    camera: TgdCamera
    inputs: TgdInputs
    paint: () => void
}
