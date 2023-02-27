import { TgdProgram } from "../../types";
export interface ProgramOptions {
    vertexShaderCode: string;
    fragmentShaderCode: string;
}
export default class ProgramManager {
    private readonly gl;
    private readonly programs;
    constructor(gl: WebGL2RenderingContext);
    create(options: ProgramOptions): TgdProgram;
    destroy({ key }: TgdProgram): void;
}
