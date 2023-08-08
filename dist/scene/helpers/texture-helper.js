var TextureHelper = (function () {
    function TextureHelper(gl) {
        this.gl = gl;
    }
    TextureHelper.prototype.bindTexture2D = function (gl, texture, _a) {
        var image = _a.image, _b = _a.placeholder, placeholder = _b === void 0 ? [0, 0, 0, 1] : _b;
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
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        var update = function () {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        };
        update();
        if (typeof image.addEventListener === "function") {
            image.addEventListener("load", update);
        }
    };
    return TextureHelper;
}());
export default TextureHelper;
//# sourceMappingURL=texture-helper.js.map