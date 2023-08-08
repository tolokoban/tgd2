var TgdPainterLogic = (function () {
    function TgdPainterLogic(logicFunction) {
        this.logicFunction = logicFunction;
    }
    TgdPainterLogic.prototype.destroy = function () { };
    TgdPainterLogic.prototype.paint = function (time, delay) { };
    TgdPainterLogic.prototype.update = function (time, delay) {
        this.logicFunction(time, delay);
    };
    return TgdPainterLogic;
}());
export { TgdPainterLogic };
//# sourceMappingURL=logic.js.map