var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var TgdPainterGroup = (function () {
    function TgdPainterGroup(painters) {
        if (painters === void 0) { painters = []; }
        this.enabled = true;
        this.painters = __spreadArray([], painters, true);
    }
    TgdPainterGroup.prototype.add = function () {
        var painters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            painters[_i] = arguments[_i];
        }
        for (var _a = 0, painters_1 = painters; _a < painters_1.length; _a++) {
            var painter = painters_1[_a];
            this.painters.push(painter);
        }
    };
    TgdPainterGroup.prototype.destroy = function () {
        for (var _i = 0, _a = this.painters; _i < _a.length; _i++) {
            var painter = _a[_i];
            painter.destroy();
        }
        this.painters.splice(0, this.painters.length);
    };
    TgdPainterGroup.prototype.paint = function (time, delay) {
        if (!this.enabled)
            return;
        for (var _i = 0, _a = this.painters; _i < _a.length; _i++) {
            var painter = _a[_i];
            painter.paint(time, delay);
        }
    };
    TgdPainterGroup.prototype.update = function (time, delay) {
        if (!this.enabled)
            return;
        for (var _i = 0, _a = this.painters; _i < _a.length; _i++) {
            var painter = _a[_i];
            painter.update(time, delay);
        }
    };
    return TgdPainterGroup;
}());
export { TgdPainterGroup };
//# sourceMappingURL=group.js.map