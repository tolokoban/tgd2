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
export function makeMoveJump(options) {
    var _a = __assign({ duration: 300, height: 1 }, options), duration = _a.duration, height = _a.height;
    var radius = height;
    var scale = Math.PI / duration;
    return function (time) { return radius * Math.abs(Math.sin(time * scale)); };
}
//# sourceMappingURL=jump.js.map