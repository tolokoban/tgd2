var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import RefMap from "../ref-map";
var ResourceBag = (function () {
    function ResourceBag() {
        this.buffers = new RefMap();
        this.shaders = new RefMap();
        this.programs = new RefMap();
        this.textures = new RefMap();
        this.vertexArrays = new RefMap();
    }
    return ResourceBag;
}());
var Resources = (function () {
    function Resources(gl, bag) {
        this.gl = gl;
        this.bag = bag;
    }
    Resources.make = function (gl, id) {
        var mapId = getOrMakeMapId(Resources.resources, gl);
        var resFromCache = mapId.get(id);
        if (resFromCache)
            return new Resources(gl, resFromCache);
        var res = new ResourceBag();
        mapId.set(id, res);
        return new Resources(gl, res);
    };
    Resources.prototype.createBuffer = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        return bag.buffers.add(key, function () {
            var buff = gl.createBuffer();
            if (!buff)
                throw Error("Unable to create WebGL2 buffer \"".concat(key, "\"!"));
            return buff;
        });
    };
    Resources.prototype.deleteBuffer = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var buff = bag.buffers.delete(key);
        if (buff)
            gl.deleteBuffer(buff);
    };
    Resources.prototype.createShader = function (type, code, key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var shader = bag.shaders.add("".concat(type, "\n").concat(key), function () {
            var newShader = gl.createShader(type === "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
            if (!newShader)
                throw Error("Unable to create a Vertex Shader handle!");
            gl.shaderSource(newShader, code);
            gl.compileShader(newShader);
            return newShader;
        });
        return shader;
    };
    Resources.prototype.deleteShader = function (key, type) {
        var _a = this, bag = _a.bag, gl = _a.gl;
        var shader = bag.shaders.delete("".concat(type, "\n").concat(key));
        if (shader)
            gl.deleteShader(shader);
    };
    Resources.prototype.createProgram = function (code, key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var prg = bag.programs.add(key, function () {
            var newPrg = gl.createProgram();
            if (!newPrg) {
                throw Error("Unable to create a WebGL program \"".concat(key, "\"!"));
            }
            return newPrg;
        });
        var vertShader = this.createShader("vertex", code.vert, key);
        gl.attachShader(prg, vertShader);
        var fragShader = this.createShader("fragment", code.frag, key);
        gl.attachShader(prg, fragShader);
        gl.linkProgram(prg);
        if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(prg);
            console.warn(info);
            var errorLines = getErrorLines(info);
            logCode.apply(void 0, __spreadArray(["Vertex Shader", code.vert], errorLines, false));
            logCode.apply(void 0, __spreadArray(["Fragment Shader", code.frag], errorLines, false));
            throw new Error("Could NOT link WebGL2 program!\n" + info);
        }
        return prg;
    };
    Resources.prototype.deleteProgram = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var prg = bag.programs.delete(key);
        if (prg)
            gl.deleteProgram(prg);
    };
    Resources.prototype.createTexture = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var texture = bag.textures.add(key, function () {
            var tex = gl.createTexture();
            if (!tex)
                throw Error("Unable to create WebGL texture \"".concat(key, "\"!"));
            return tex;
        });
        return texture;
    };
    Resources.prototype.deteleTexture = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var texture = bag.textures.delete(key);
        if (texture)
            gl.deleteTexture(texture);
    };
    Resources.prototype.createVertexArray = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        return bag.vertexArrays.add(key, function () {
            var vao = gl.createVertexArray();
            if (!vao)
                throw Error("Unable to create WebGL VertexArray \"".concat(key, "\"!"));
            return vao;
        });
    };
    Resources.prototype.deleteVertexArray = function (key) {
        if (key === void 0) { key = "default"; }
        var _a = this, bag = _a.bag, gl = _a.gl;
        var vao = bag.vertexArrays.delete(key);
        if (vao)
            gl.deleteVertexArray(vao);
    };
    Resources.resources = new Map();
    return Resources;
}());
export default Resources;
function getOrMakeMapId(resources, gl) {
    var item = resources.get(gl);
    if (item)
        return item;
    var newItem = new Map();
    resources.set(gl, newItem);
    return newItem;
}
var RX_ERROR_LINE = /^ERROR:[ \t]+([0-9]+):([0-9]+):/g;
function getErrorLines(message) {
    var errorLines = [];
    for (var _i = 0, _a = message.split("\n"); _i < _a.length; _i++) {
        var line = _a[_i];
        RX_ERROR_LINE.lastIndex = -1;
        var match = RX_ERROR_LINE.exec(line);
        if (match)
            errorLines.push(parseInt(match[2], 10));
    }
    return errorLines;
}
function style(background, bold) {
    if (bold === void 0) { bold = false; }
    return "color:#fff;background:".concat(background, ";font-family:monospace;font-size:80%;font-weight:").concat(bold ? "bolder" : "100");
}
function logCode(title, code) {
    var errorLines = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        errorLines[_i - 2] = arguments[_i];
    }
    console.log("%c".concat(title), "font-weight:bolder;font-size:120%");
    code.split("\n").forEach(function (line, index) {
        var num = index + 1;
        var prefix = (num * 1e-4).toFixed(4).substring(2);
        var background = errorLines.includes(num) ? "#f00" : "#000";
        console.log("%c".concat(prefix, "  %c").concat(line), style(background), style(background, true));
    });
}
//# sourceMappingURL=resources.js.map