var PainterLogic = (function () {
    function PainterLogic(logicFunction) {
        this.logicFunction = logicFunction;
    }
    PainterLogic.prototype.initialize = function (scene) {
        return new Promise(function (resolve) { return resolve(true); });
    };
    PainterLogic.prototype.destroy = function () { };
    PainterLogic.prototype.draw = function (time, delay) { };
    PainterLogic.prototype.play = function (time, delay) {
        this.logicFunction(time, delay);
    };
    return PainterLogic;
}());
export default PainterLogic;
//# sourceMappingURL=logic.js.map