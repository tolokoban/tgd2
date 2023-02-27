export function createProgram(gl, vert, frag) {
    var prg = gl.createProgram();
    if (!prg)
        throw Error("Unable to create WebGL Program!");
    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertShader)
        throw Error("Unable to create a Vertex Shader handle!");
    gl.shaderSource(vertShader, vert);
    gl.compileShader(vertShader);
    gl.attachShader(prg, vertShader);
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragShader)
        throw Error("Unable to create a Fragment Shader handle!");
    gl.shaderSource(fragShader, frag);
    gl.compileShader(fragShader);
    gl.attachShader(prg, fragShader);
    gl.linkProgram(prg);
    return prg;
}
//# sourceMappingURL=create-program.js.map