import RefMap from "../ref-map";
import { createProgram } from "./create-program";
export default class ProgramManager {
    constructor(gl) {
        this.gl = gl;
        this.programs = new RefMap();
    }
    create(options) {
        const { gl } = this;
        const key = `${options.fragmentShaderCode}\n${options.vertexShaderCode}`;
        return this.programs.add(key, () => {
            const program = createProgram(gl, options.vertexShaderCode, options.fragmentShaderCode);
            return {
                type: "TgdProgram",
                key,
                program,
                use() {
                    gl.useProgram(program);
                },
            };
        });
    }
    destroy({ key }) {
        const program = this.programs.delete(key);
        if (!program)
            return;
        this.gl.deleteProgram(program);
    }
}
//# sourceMappingURL=program.js.map