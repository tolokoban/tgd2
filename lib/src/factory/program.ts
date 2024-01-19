import { TgdProgram, TgdProgramOptions } from "@/program/program"
import { TgdFactory } from "./factory"

export class TgdFactoryProgram extends TgdFactory<
    TgdProgramOptions,
    TgdProgram
> {
    constructor(public readonly gl: WebGL2RenderingContext) {
        super()
    }

    create(input: TgdProgramOptions): TgdProgram {
        return new TgdProgram(this.gl, input)
    }

    delete(program: TgdProgram): void {
        program.delete()
    }
}
