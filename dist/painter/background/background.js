var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import vertexShaderCode from "./background.vert";
import fragmentShaderCode from "./background.frag";
import { makeData } from "../../data";
var PainterBackground = (function () {
    function PainterBackground(options) {
        this.options = __assign({ placeholder: [0, 0, 0, 1] }, options);
    }
    PainterBackground.prototype.initialize = function (scene) {
        var _this = this;
        return new Promise(function (resolve) {
            var _a = _this.options, image = _a.image, placeholder = _a.placeholder;
            _this.texture = scene.texture.createFromAsset(image, { placeholder: placeholder });
            _this.program = scene.program.create({
                vertexShaderCode: vertexShaderCode,
                fragmentShaderCode: fragmentShaderCode,
            });
            var data = makeData({
                attPoint: 2,
                attUV: 2,
            });
            data.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]));
            data.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]));
            resolve(true);
        });
    };
    PainterBackground.prototype.destroy = function (scene) {
        scene.texture.destroy(this.texture);
    };
    PainterBackground.prototype.draw = function (time, delay) {
        var _a = this, program = _a.program, texture = _a.texture;
        if (!program || !texture)
            return;
        program.use();
    };
    PainterBackground.prototype.play = function (time, delay) {
        throw new Error("Method not implemented.");
    };
    return PainterBackground;
}());
export default PainterBackground;
function make(value) {
    return value;
}
//# sourceMappingURL=background.js.map