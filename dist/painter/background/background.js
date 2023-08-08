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
import { makeData } from "../../data";
var TgdPainterBackground = (function () {
    function TgdPainterBackground(scene, options) {
        this.scene = scene;
        this.zoom = 1;
        this.x = 0;
        this.y = 0;
        this.z = 1;
        this.res = scene.getResources("TgdPainterBackground");
        this.options = __assign({ placeholder: [0, 0, 0, 1] }, options);
        var _a = this.options, image = _a.image, placeholder = _a.placeholder;
        this.imageWidth = image.width;
        this.imageHeight = image.height;
        this.buffer = this.res.createBuffer();
        this.texture = this.res.createTexture();
        scene.texture.bindTexture2D(scene.gl, this.texture, {
            image: image,
            placeholder: placeholder,
        });
        this.program = this.res.createProgram({
            vert: VERT,
            frag: FRAG,
        });
        this.uniScale = scene.getUniformLocation(this.program, "uniScale");
        this.uniScroll = scene.getUniformLocation(this.program, "uniScroll");
        this.uniZ = scene.getUniformLocation(this.program, "uniZ");
        this.uniTexture = scene.getUniformLocation(this.program, "uniTexture");
        var data = makeData({
            attPoint: 2,
            attUV: 2,
        });
        data.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]));
        data.set("attUV", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]));
        data.sendToArrayBuffer(scene.gl, this.buffer, 4, false);
        this.vao = createVAO(scene.gl, this.program, this.buffer);
    }
    TgdPainterBackground.prototype.destroy = function () {
        var res = this.res;
        res.deleteProgram();
        res.deteleTexture();
        res.deleteBuffer();
    };
    TgdPainterBackground.prototype.paint = function (time, delay) {
        var gl = this.scene.gl;
        var _a = this, vao = _a.vao, program = _a.program, texture = _a.texture, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, zoom = _a.zoom, x = _a.x, y = _a.y, z = _a.z;
        gl.useProgram(program);
        var _b = this.scene, width = _b.width, height = _b.height;
        var horizontal = imageWidth * height > imageHeight * width;
        var scaleX = horizontal
            ? (imageWidth * height) / (width * imageHeight)
            : 1;
        var scaleY = horizontal
            ? 1
            : (imageHeight * width) / (height * imageWidth);
        gl.uniform2f(this.uniScale, scaleX * zoom, scaleY * zoom);
        gl.uniform2f(this.uniScroll, x, y);
        gl.uniform1f(this.uniZ, z);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(this.uniTexture, 0);
        gl.bindVertexArray(vao);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    TgdPainterBackground.prototype.update = function (time, delay) { };
    return TgdPainterBackground;
}());
export { TgdPainterBackground };
function createVAO(gl, prg, buffVert) {
    var vao = gl.createVertexArray();
    if (!vao)
        throw Error("Unable to create a WebGLVertexArrayObject!");
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert);
    var $attPoint = gl.getAttribLocation(prg, "attPoint");
    gl.enableVertexAttribArray($attPoint);
    gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 16, 0);
    gl.vertexAttribDivisor($attPoint, 0);
    var $attUV = gl.getAttribLocation(prg, "attUV");
    gl.enableVertexAttribArray($attUV);
    gl.vertexAttribPointer($attUV, 2, gl.FLOAT, false, 16, 8);
    gl.vertexAttribDivisor($attUV, 0);
    gl.bindVertexArray(null);
    return vao;
}
var VERT = "#version 300 es\n\nuniform vec2 uniScale;\nuniform vec2 uniScroll;\nuniform float uniZ;\nin vec2 attPoint;\nin vec2 attUV;\nout vec2 varUV;\n\nvoid main() {\n    varUV = attUV + uniScroll;\n    float x = uniScale.x * attPoint.x;\n    float y = uniScale.y * attPoint.y;\n    gl_Position = vec4(x, y, uniZ, 1.0);\n}";
var FRAG = "#version 300 es\n\nprecision mediump float;\n\nuniform sampler2D uniTexture;\nin vec2 varUV;\nout vec4 FragColor;\n\nvoid main() {\n    FragColor = texture(uniTexture, varUV);\n}";
//# sourceMappingURL=background.js.map