var PainterClear = (function () {
    function PainterClear(options) {
        this.options = options;
        this.gl = null;
        this.clearMask = 0;
    }
    PainterClear.prototype.setClearColor = function (red, green, blue, alpha) {
        var gl = this.gl;
        if (!gl)
            return;
        gl.clearColor(red, green, blue, alpha);
    };
    PainterClear.prototype.initialize = function (scene) {
        this.gl = scene.gl;
        var _a = this, gl = _a.gl, options = _a.options;
        if (options.color) {
            this.clearMask |= gl.COLOR_BUFFER_BIT;
            gl.clearColor.apply(gl, options.color);
        }
        return new Promise(function (resolve) { return resolve(true); });
    };
    PainterClear.prototype.destroy = function () { };
    PainterClear.prototype.draw = function (_time, _delay) {
        var _a = this, clearMask = _a.clearMask, gl = _a.gl;
        if (!gl)
            return;
        if (clearMask > 0)
            gl.clear(clearMask);
    };
    PainterClear.prototype.play = function (_time, _delay) { };
    return PainterClear;
}());
export default PainterClear;
//# sourceMappingURL=clear.js.map