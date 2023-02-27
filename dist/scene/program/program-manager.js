import RefMap from "../ref-map";
import { createProgram } from "./create-program";
var ProgramManager = (function () {
    function ProgramManager(gl) {
        this.gl = gl;
        this.programs = new RefMap();
    }
    ProgramManager.prototype.create = function (options) {
        var gl = this.gl;
        var key = "".concat(options.fragmentShaderCode, "\n").concat(options.vertexShaderCode);
        return this.programs.add(key, function () {
            var program = createProgram(gl, options.vertexShaderCode, options.fragmentShaderCode);
            return {
                type: "TgdProgram",
                key: key,
                program: program,
                use: function () {
                    gl.useProgram(program);
                },
            };
        });
    };
    ProgramManager.prototype.destroy = function (_a) {
        var key = _a.key;
        var program = this.programs.delete(key);
        if (!program)
            return;
        this.gl.deleteProgram(program);
    };
    return ProgramManager;
}());
export default ProgramManager;
//# sourceMappingURL=program-manager.js.map