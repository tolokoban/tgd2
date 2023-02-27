import RefMap from "../ref-map";
var TextureManager = (function () {
    function TextureManager(gl) {
        this.gl = gl;
        this.textures = new RefMap();
    }
    TextureManager.prototype.createFromAsset = function (asset, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.placeholder, placeholder = _c === void 0 ? [0, 0, 0, 0] : _c;
        var gl = this.gl;
        var key = asset.key;
        return this.textures.add(key, function () {
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            var level = 0;
            var internalFormat = gl.RGBA;
            var width = 1;
            var height = 1;
            var border = 0;
            var srcFormat = gl.RGBA;
            var srcType = gl.UNSIGNED_BYTE;
            var pixel = new Uint8Array(placeholder);
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
            asset.isSuccessfullyLoaded.then(function (success) {
                if (!success)
                    return;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, asset.image);
            });
            return {
                type: "TgdTexture",
                key: key,
                texture: texture,
            };
        });
    };
    TextureManager.prototype.destroy = function (_a) {
        var key = _a.key;
        var texture = this.textures.delete(key);
        if (!texture)
            return;
        this.gl.deleteTexture(texture.texture);
    };
    return TextureManager;
}());
export default TextureManager;
//# sourceMappingURL=texture-manager.js.map