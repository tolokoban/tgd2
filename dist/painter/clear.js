var TgdPainterClear = (function () {
    function TgdPainterClear(scene, options) {
        var _a, _b;
        this.scene = scene;
        this.clearMask = 0;
        this.red = 1;
        this.green = 0.7;
        this.blue = 0;
        this.alpha = 1;
        this.depth = 1;
        var color = (_a = options.color) !== null && _a !== void 0 ? _a : [0, 0, 0, 1];
        var depth = (_b = options.depth) !== null && _b !== void 0 ? _b : 1;
        this.clearMask = 0;
        if (options.color)
            this.clearMask |= scene.gl.COLOR_BUFFER_BIT;
        if (options.depth)
            this.clearMask |= scene.gl.DEPTH_BUFFER_BIT;
        this.red = color[0], this.green = color[1], this.blue = color[2], this.alpha = color[3];
        this.depth = depth;
    }
    TgdPainterClear.prototype.destroy = function () { };
    TgdPainterClear.prototype.paint = function (_time, _delay) {
        var _a = this, clearMask = _a.clearMask, scene = _a.scene, red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha, depth = _a.depth;
        var gl = scene.gl;
        gl.clearColor(red, green, blue, alpha);
        gl.clearDepth(depth);
        gl.clear(clearMask);
    };
    TgdPainterClear.prototype.update = function (_time, _delay) { };
    return TgdPainterClear;
}());
export { TgdPainterClear };
//# sourceMappingURL=clear.js.map