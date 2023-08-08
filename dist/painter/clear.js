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
var TgdPainterClear = (function () {
    function TgdPainterClear(scene, options) {
        var _a;
        this.scene = scene;
        this.clearMask = 0;
        this.options = __assign({ color: [0, 0, 0, 1] }, options);
        this.clearMask |= scene.gl.COLOR_BUFFER_BIT;
        (_a = scene.gl).clearColor.apply(_a, this.options.color);
    }
    TgdPainterClear.prototype.setClearColor = function (red, green, blue, alpha) {
        var color = this.options.color;
        color[0] = red;
        color[1] = green;
        color[2] = blue;
        color[3] = alpha;
    };
    TgdPainterClear.prototype.destroy = function () { };
    TgdPainterClear.prototype.paint = function (_time, _delay) {
        var _a = this, clearMask = _a.clearMask, scene = _a.scene, options = _a.options;
        var gl = scene.gl;
        if (clearMask > 0) {
            gl.clearColor.apply(gl, options.color);
            gl.clear(clearMask);
        }
    };
    TgdPainterClear.prototype.update = function (_time, _delay) { };
    return TgdPainterClear;
}());
export { TgdPainterClear };
//# sourceMappingURL=clear.js.map