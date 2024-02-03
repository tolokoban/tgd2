import { TgdProgram, TgdProgramOptions } from "@/types"
import { TgdResource } from "./resource"
import { TgdProgramImpl } from "@/program"

export class TgdResourceProgram extends TgdResource<
    TgdProgramOptions,
    TgdProgram,
    string
> {
    constructor(public readonly gl: WebGL2RenderingContext) {
        super()
    }

    protected actualCreate(input: TgdProgramOptions): TgdProgram {
        return new TgdProgramImpl(this.gl, input)
    }

    protected actualDelete(program: TgdProgram): void {
        if (program instanceof TgdProgramImpl) program.delete()
    }

    protected makeKeyFromInput(input: TgdProgramOptions): string {
        return JSON.stringify(input)
    }
}
