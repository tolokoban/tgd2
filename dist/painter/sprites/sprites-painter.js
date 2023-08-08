import Resources from "../../scene/resources";
import VERT from "./sprites-painter.vert";
import FRAG from "./sprites-painter.frag";
var TgdPainterSprites = (function () {
    function TgdPainterSprites(gl, image) {
        this.gl = gl;
        this.image = image;
        var res = Resources.make(gl, "SpritesPainter");
        var buffVert = res.createBuffer("buffVert");
        var buffInstDynamic = res.createBuffer("buffInstDynamic");
        var prg = res.createProgram({ vert: VERT, frag: FRAG });
        this.vao = createVAO(gl, prg, buffVert, buffInstDynamic);
        this.prg = prg;
    }
    TgdPainterSprites.prototype.initialize = function (scene) {
        throw new Error("Method not implemented.");
    };
    TgdPainterSprites.prototype.destroy = function () {
        throw new Error("Method not implemented.");
    };
    TgdPainterSprites.prototype.paint = function (time, delay) {
        throw new Error("Method not implemented.");
    };
    TgdPainterSprites.prototype.update = function (time, delay) {
        throw new Error("Method not implemented.");
    };
    return TgdPainterSprites;
}());
export { TgdPainterSprites };
function createVAO(gl, prg, buffVert, buffInstDynamic) {
    var vao = gl.createVertexArray();
    if (!vao)
        throw Error("Unable to create a WebGLVertexArrayObject!");
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert);
    var $attPoint = gl.getAttribLocation(prg, "attPoint");
    gl.enableVertexAttribArray($attPoint);
    gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 8, 0);
    gl.vertexAttribDivisor($attPoint, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffInstDynamic);
    var $attPosition = gl.getAttribLocation(prg, "attPosition");
    gl.enableVertexAttribArray($attPosition);
    gl.vertexAttribPointer($attPosition, 3, gl.FLOAT, false, 52, 0);
    gl.vertexAttribDivisor($attPosition, 1);
    var $attAtlasWH = gl.getAttribLocation(prg, "attAtlasWH");
    gl.enableVertexAttribArray($attAtlasWH);
    gl.vertexAttribPointer($attAtlasWH, 2, gl.FLOAT, false, 52, 12);
    gl.vertexAttribDivisor($attAtlasWH, 1);
    var $attTransform = gl.getAttribLocation(prg, "attTransform");
    gl.enableVertexAttribArray($attTransform);
    gl.vertexAttribPointer($attTransform, 4, gl.FLOAT, false, 52, 20);
    gl.vertexAttribDivisor($attTransform, 1);
    var $attAtlasXY = gl.getAttribLocation(prg, "attAtlasXY");
    gl.enableVertexAttribArray($attAtlasXY);
    gl.vertexAttribPointer($attAtlasXY, 2, gl.FLOAT, false, 52, 36);
    gl.vertexAttribDivisor($attAtlasXY, 1);
    var $attCenter = gl.getAttribLocation(prg, "attCenter");
    gl.enableVertexAttribArray($attCenter);
    gl.vertexAttribPointer($attCenter, 2, gl.FLOAT, false, 52, 44);
    gl.vertexAttribDivisor($attCenter, 1);
    gl.bindVertexArray(null);
    return vao;
}
//# sourceMappingURL=sprites-painter.js.map