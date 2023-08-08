import RefMap from "../ref-map";
var ResourceBag = (function () {
    function ResourceBag() {
        this.buffers = new RefMap();
        this.shaders = new RefMap();
        this.programs = new RefMap();
        this.textures = new RefMap();
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
            console.log("\uD83D\uDE80 [resources] newShader(".concat(type, ") = "), newShader);
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
            if (!newPrg)
                throw Error("Unable to create a WebGL program \"".concat(key, "\"!"));
            return newPrg;
        });
        var vertShader = this.createShader("vertex", code.vert, key);
        console.log("🚀 [resources] vertShader = ", vertShader);
        gl.attachShader(prg, vertShader);
        var fragShader = this.createShader("fragment", code.frag, key);
        gl.attachShader(prg, fragShader);
        gl.linkProgram(prg);
        if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
            var info = gl.getProgramInfoLog(prg);
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
//# sourceMappingURL=resources.js.map