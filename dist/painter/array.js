var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PainterArray = (function () {
    function PainterArray() {
        this.enabled = true;
        this.containers = [];
        this.scene = null;
    }
    PainterArray.prototype.add = function () {
        var painters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            painters[_i] = arguments[_i];
        }
        for (var _a = 0, painters_1 = painters; _a < painters_1.length; _a++) {
            var painter = painters_1[_a];
            this.containers.push({
                painter: painter,
                status: ContainerStatusEnum.Created,
            });
        }
    };
    PainterArray.prototype.initialize = function (scene) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, container, working;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.containers;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        container = _a[_i];
                        if (container.status !== ContainerStatusEnum.Created)
                            return [3, 3];
                        container.status = ContainerStatusEnum.Initializing;
                        return [4, container.painter.initialize(scene)];
                    case 2:
                        working = _b.sent();
                        container.status = working
                            ? ContainerStatusEnum.Initialized
                            : ContainerStatusEnum.Broken;
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, true];
                }
            });
        });
    };
    PainterArray.prototype.destroy = function (scene) {
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var container = _a[_i];
            container.painter.destroy(scene);
            container.status = ContainerStatusEnum.Destroyed;
        }
    };
    PainterArray.prototype.draw = function (time, delay, scene) {
        if (!this.enabled)
            return;
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var container = _a[_i];
            if (container.status !== ContainerStatusEnum.Initialized)
                continue;
            container.painter.draw(time, delay, scene);
        }
    };
    PainterArray.prototype.play = function (time, delay, scene) {
        if (!this.enabled)
            return;
        var needInitialization = false;
        for (var _i = 0, _a = this.containers; _i < _a.length; _i++) {
            var container = _a[_i];
            if (container.status !== ContainerStatusEnum.Initialized)
                continue;
            container.painter.play(time, delay, scene);
        }
        if (needInitialization) {
            var scene_1 = this.scene;
            if (scene_1)
                void this.initialize(scene_1);
        }
    };
    return PainterArray;
}());
export default PainterArray;
var ContainerStatusEnum;
(function (ContainerStatusEnum) {
    ContainerStatusEnum[ContainerStatusEnum["Created"] = 0] = "Created";
    ContainerStatusEnum[ContainerStatusEnum["Initializing"] = 1] = "Initializing";
    ContainerStatusEnum[ContainerStatusEnum["Initialized"] = 2] = "Initialized";
    ContainerStatusEnum[ContainerStatusEnum["Broken"] = 3] = "Broken";
    ContainerStatusEnum[ContainerStatusEnum["Destroyed"] = 4] = "Destroyed";
})(ContainerStatusEnum || (ContainerStatusEnum = {}));
//# sourceMappingURL=array.js.map