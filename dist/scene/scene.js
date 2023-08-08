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
import { TgdPainterGroup } from "../painter/group";
import Asset from "./asset";
import TextureHelper from "./helpers/texture-helper";
import Resources from "./resources";
var TgdScene = (function () {
    function TgdScene(canvas, options) {
        var _this = this;
        this.canvas = canvas;
        this.painters = new TgdPainterGroup();
        this.isAnimated = false;
        this.lastCanvasWidth = 0;
        this.lastCanvasHeight = 0;
        this.lastTime = -1;
        this._screenRatio = 1;
        this.actualPaint = function (time) {
            var _a = _this, gl = _a.gl, lastCanvasWidth = _a.lastCanvasWidth, lastCanvasHeight = _a.lastCanvasHeight, lastTime = _a.lastTime;
            if (lastTime < 0) {
                _this.lastTime = time;
                _this.paint();
                return;
            }
            var canvas = gl.canvas;
            var dpr = window.devicePixelRatio;
            var expectedWidth = Math.max(1, Math.round(canvas.clientWidth * dpr));
            var expectedheight = Math.max(1, Math.round(canvas.clientHeight * dpr));
            if (lastCanvasWidth !== expectedWidth ||
                lastCanvasHeight !== expectedheight) {
                canvas.width = expectedWidth;
                canvas.height = expectedheight;
                _this.lastCanvasWidth = expectedWidth;
                _this.lastCanvasHeight = expectedheight;
                gl.viewport(0, 0, expectedWidth, expectedheight);
                _this.screenRatio = expectedWidth / expectedheight;
            }
            var delay = time - _this.lastTime;
            _this.lastTime = time;
            _this.painters.paint(time, delay);
            _this.painters.update(time, delay);
            if (_this.isAnimated)
                _this.paint();
        };
        var gl = canvas.getContext("webgl2", options);
        if (!gl)
            throw Error("Unable to create a WebGL2 context!");
        this.gl = gl;
        this.asset = new Asset();
        this.texture = new TextureHelper(gl);
    }
    TgdScene.prototype.getResources = function (id) {
        return Resources.make(this.gl, id);
    };
    TgdScene.prototype.getUniformLocation = function (program, name) {
        var uni = this.gl.getUniformLocation(program, name);
        if (!uni)
            throw Error("Unable to get uniform location of \"".concat(name, "\"!"));
        return uni;
    };
    Object.defineProperty(TgdScene.prototype, "screenRatio", {
        get: function () {
            return this._screenRatio;
        },
        set: function (value) {
            this._screenRatio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TgdScene.prototype, "width", {
        get: function () {
            return this.lastCanvasWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TgdScene.prototype, "height", {
        get: function () {
            return this.lastCanvasHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TgdScene.prototype, "animate", {
        get: function () {
            return this.isAnimated;
        },
        set: function (value) {
            if (this.isAnimated === value)
                return;
            this.isAnimated = value;
            if (value)
                this.paint();
        },
        enumerable: false,
        configurable: true
    });
    TgdScene.prototype.addPainter = function () {
        var painters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            painters[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, painters_1, painter;
            return __generator(this, function (_b) {
                for (_a = 0, painters_1 = painters; _a < painters_1.length; _a++) {
                    painter = painters_1[_a];
                    this.painters.add(painter);
                }
                return [2];
            });
        });
    };
    TgdScene.prototype.paint = function () {
        window.requestAnimationFrame(this.actualPaint);
    };
    TgdScene.prototype.destroy = function () {
        this.painters.destroy();
    };
    return TgdScene;
}());
export { TgdScene };
//# sourceMappingURL=scene.js.map