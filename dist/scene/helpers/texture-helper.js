import { TgdLoadImage } from "../../load";
var TextureHelper = (function () {
    function TextureHelper(gl) {
        this.gl = gl;
    }
    TextureHelper.prototype.bindTexture2D = function (texture, _a) {
        var image = _a.image, _b = _a.placeholder, placeholder = _b === void 0 ? [0, 1, 0, 1] : _b, _c = _a.unit, unit = _c === void 0 ? 0 : _c, _d = _a.minFilter, minFilter = _d === void 0 ? "LINEAR" : _d, _e = _a.magFilter, magFilter = _e === void 0 ? "LINEAR" : _e, _f = _a.wrapS, wrapS = _f === void 0 ? "REPEAT" : _f, _g = _a.wrapT, wrapT = _g === void 0 ? "REPEAT" : _g;
        if (image instanceof HTMLImageElement || image instanceof Image) {
            if (!image.complete) {
                throw Error("The image argument of bindTexture2D is not loaded yet!\n\nIf you want to use asynchronous loading, please pass the URL in the image attribute.");
            }
        }
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS]);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT]);
        if (typeof image !== "string") {
            console.log("Send textuxe in unit", unit);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        }
        if (typeof image === "string") {
            var level = 0;
            var internalFormat = gl.RGBA;
            var width = 1;
            var height = 1;
            var border = 0;
            var srcFormat = gl.RGBA;
            var srcType = gl.UNSIGNED_BYTE;
            var pixel = new Uint8ClampedArray(placeholder.map(function (value) { return 255 * value; }));
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);
            TgdLoadImage.loadInCanvas(image).then(function (canvas) {
                gl.activeTexture(gl.TEXTURE0 + unit);
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl[minFilter]);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl[magFilter]);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl[wrapS]);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl[wrapT]);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
                console.log("Loaded:", canvas.width, canvas.height);
            });
            return;
        }
    };
    return TextureHelper;
}());
export default TextureHelper;
//# sourceMappingURL=texture-helper.js.map