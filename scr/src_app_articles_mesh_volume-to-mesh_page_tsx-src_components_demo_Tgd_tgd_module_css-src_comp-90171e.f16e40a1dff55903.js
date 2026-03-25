"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_volume-to-mesh_page_tsx-src_components_demo_Tgd_tgd_module_css-src_comp-90171e"], {
43717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"flex1":"src-app-articles-mesh-volume-to-mesh-page-module_flex1_EI0H1Q"});

},
11721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CONFIGURATIONS: () => (CONFIGURATIONS)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

const CONFIGURATIONS = (0,_tolokoban_tgd__rspack_import_0.tgdDataMarchingCubesConfigurations)().map((arr) => arr.map((i) => "ABCDEFGHIJKL".charAt(i)).join(""));


},
22026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCorners: () => (PainterCorners)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(30338);


class PainterCorners extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this._caseNumber = -1;
        this.dataset = this.createDataset();
        this.program = this.createProgram();
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.program, [this.dataset]);
        this.texture = this.createTexture();
        this.caseNumber = 0;
    }
    get caseNumber() {
        return this._caseNumber;
    }
    set caseNumber(value) {
        if (value === this._caseNumber)
            return;
        this._caseNumber = value;
        const colors = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
        this.dataset.set("attColor", new Float32Array(colors));
        this.vao.updateDataset(this.dataset);
        this.context.paint();
    }
    delete() {
        this.texture.delete();
        this.program.delete();
        this.vao.delete();
    }
    paint() {
        const { context, program, vao, texture } = this;
        const { gl, camera } = context;
        program.use();
        texture.activate(0, program, "uniTexture");
        program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
        vao.bind();
        gl.drawArrays(gl.POINTS, 0, 8);
        vao.unbind();
    }
    createDataset() {
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec3",
            attColor: "float",
        });
        dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
        dataset.set("attColor", new Float32Array(_geometry__rspack_import_1.cubeVertices.length));
        return dataset;
    }
    createProgram() {
        const vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniHalfScreenHeightInPixels: "float",
            },
            attributes: {
                attPoint: "vec4",
                attColor: "float",
            },
            varying: { varColor: "float" },
            mainCode: [
                "varColor = attColor;",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
            ],
        }).code;
        const frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: { varColor: "float" },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "vec2 pos = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                "float radius = dot(pos, pos);",
                "if (radius > 1.0) discard;",
                "vec2 uv = vec2(varColor, .5);",
                "FragColor = texture(uniTexture, uv);",
            ],
        }).code;
        const program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, { vert, frag });
        return program;
    }
    createTexture() {
        const texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
        texture.setParams({
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        });
        texture.loadBitmap((0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreatePalette)(["#07f", "#f00"]));
        return texture;
    }
}


},
30338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  caseNumberToColors: () => (caseNumberToColors),
  cubeEdges: () => (cubeEdges),
  cubeMidPoints: () => (cubeMidPoints),
  cubeVertices: () => (cubeVertices),
  trianglesStringToElements: () => (trianglesStringToElements)
});
const cubeEdges = new Uint8Array([
    0, 1, 0, 2, 0, 4,
    1, 3, 1, 5,
    2, 3, 2, 6,
    3, 7,
    4, 5, 4, 6,
    5, 7,
    6, 7
]);
const P = +1;
const N = -1;
const cubeVertices = new Float32Array([
    N, N, N,
    N, N, P,
    N, P, N,
    N, P, P,
    P, N, N,
    P, N, P,
    P, P, N,
    P, P, P,
]);
const midPoints = [];
for (let i = 0; i < cubeEdges.length; i += 2) {
    const a = 3 * cubeEdges[i];
    const b = 3 * cubeEdges[i + 1];
    const x = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 0]);
    const y = 0.5 * (cubeVertices[a + 1] + cubeVertices[b + 1]);
    const z = 0.5 * (cubeVertices[a + 2] + cubeVertices[b + 2]);
    midPoints.push(x, y, z);
}
const cubeMidPoints = new Float32Array(midPoints);
function trianglesStringToElements(value) {
    const elements = [];
    for (const C of value.trim().toUpperCase()) {
        if (C < "A" || C > "L")
            continue;
        elements.push(C.charCodeAt(0) - "A".charCodeAt(0));
    }
    return elements;
}
function caseNumberToColors(value) {
    const colors = [];
    for (let i = 0; i < 8; i++) {
        const mask = 1 << i;
        colors.push(value & mask ? 1 : 0);
    }
    return colors;
}


},
41563(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useVolumeToMeshManager: () => (useVolumeToMeshManager)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _corners__rspack_import_2 = __webpack_require__(22026);
/* import */ var _mid_points__rspack_import_3 = __webpack_require__(3696);
/* import */ var _painter_cube__rspack_import_4 = __webpack_require__(27385);
/* import */ var _triangles__rspack_import_5 = __webpack_require__(69925);
/* import */ var _wireframe__rspack_import_6 = __webpack_require__(77710);







class VolumeToMeshManager {
    constructor() {
        this._context = null;
        this.midPointsPainter = null;
        this.cornersPainter = null;
        this.trianglesPainter = null;
        this.wireframePainter = null;
    }
    set context(context) {
        const { camera } = context;
        if (camera instanceof _tolokoban_tgd__rspack_import_0.TgdCameraPerspective) {
            camera.fovy = (0,_tolokoban_tgd__rspack_import_0.tgdCalcDegToRad)(90);
            camera.transfo.distance = 3;
        }
        new _tolokoban_tgd__rspack_import_0.TgdControllerCameraOrbit(context, {
            inertiaOrbit: 1000,
        });
        if (this._context)
            this._context.delete();
        this._context = context;
        const clear = new _tolokoban_tgd__rspack_import_0.TgdPainterClear(context, {
            color: [0, 0, 0, 1],
            depth: 1,
        });
        const state = new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
            depth: _tolokoban_tgd__rspack_import_0.webglPresetDepth.less,
            cull: _tolokoban_tgd__rspack_import_0.webglPresetCull.off,
        });
        const wireframe = new _wireframe__rspack_import_6.PainterWireframe(context);
        this.wireframePainter = wireframe;
        const midPoints = new _mid_points__rspack_import_3.PainterMidPoints(context);
        this.midPointsPainter = midPoints;
        const corners = new _corners__rspack_import_2.PainterCorners(context);
        this.cornersPainter = corners;
        const triangles = new _triangles__rspack_import_5.PainterTriangles(context);
        this.trianglesPainter = triangles;
        state.add(new _painter_cube__rspack_import_4.PainterCube(context), wireframe, new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
            blend: _tolokoban_tgd__rspack_import_0.webglPresetBlend.premultipliedAlpha,
            children: [midPoints, corners, triangles],
        }));
        context.add(clear, state);
        context.paint();
    }
    set caseNumber(value) {
        const { cornersPainter: corners, midPointsPainter: midPoints } = this;
        if (corners)
            corners.caseNumber = value;
        if (midPoints)
            midPoints.caseNumber = value;
    }
    get caseNumber() {
        return this.cornersPainter?.caseNumber ?? 0;
    }
    set triangles(value) {
        const { trianglesPainter, wireframePainter } = this;
        if (trianglesPainter)
            trianglesPainter.triangles = value;
        if (wireframePainter)
            wireframePainter.triangles = value;
    }
}
function useVolumeToMeshManager() {
    const ref = react__rspack_import_1_default().useRef(null);
    if (!ref.current)
        ref.current = new VolumeToMeshManager();
    return ref.current;
}


},
3696(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterMidPoints: () => (PainterMidPoints)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(30338);


class PainterMidPoints extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this._caseNumber = 0;
        this.dataset = this.createDataset();
        this.program = this.createProgram();
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.program, [this.dataset]);
        this.texture = this.createTexture();
    }
    get caseNumber() {
        return this._caseNumber;
    }
    set caseNumber(value) {
        if (value === this._caseNumber)
            return;
        this._caseNumber = value;
        const corners = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
        const visibles = [];
        for (let i = 0; i < 12; i++) {
            const a = corners[_geometry__rspack_import_1.cubeEdges[i * 2]];
            const b = corners[_geometry__rspack_import_1.cubeEdges[i * 2 + 1]];
            visibles.push(a === b ? 0 : 1);
        }
        this.dataset.set("attVisible", new Float32Array(visibles));
        this.vao.updateDataset(this.dataset);
        this.context.paint();
    }
    delete() {
        this.texture.delete();
        this.program.delete();
        this.vao.delete();
    }
    paint() {
        const { context, program, vao, texture } = this;
        const { gl, camera } = context;
        program.use();
        texture.activate(0, program, "uniTexture");
        program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
        vao.bind();
        gl.drawArrays(gl.POINTS, 0, 12);
        vao.unbind();
    }
    createDataset() {
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec3",
            attVisible: "float",
        });
        dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
        return dataset;
    }
    createProgram() {
        const vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniHalfScreenHeightInPixels: "float",
            },
            attributes: {
                attPoint: "vec4",
                attVisible: "float",
            },
            varying: { varU: "float" },
            mainCode: [
                "varU = float(gl_VertexID) / 12.0;",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
                "gl_PointSize *= attVisible;",
            ],
        }).code;
        const frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: { varU: "float" },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "vec2 uv = vec2(varU, 0.0) + gl_PointCoord.xy * vec2(1.0 / 12.0, 1.0);",
                "FragColor = texture(uniTexture, uv);",
                "if (FragColor.a < .1) discard;",
            ],
        }).code;
        const program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, { vert, frag });
        return program;
    }
    createTexture() {
        const texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
        texture.setParams({
            magFilter: "LINEAR",
            minFilter: "LINEAR",
        });
        const letters = "ABCDEFGHIJKL";
        const count = letters.length;
        const size = 64;
        const width = size * count;
        const height = size;
        const { ctx, canvas } = (0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreateWithContext2D)(width, height);
        ctx.font = `bold ${size}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#0f0";
        for (let i = 0; i < count; i++) {
            const letter = letters.charAt(i);
            const x = (i + 0.5) / count;
            const y = 0.5;
            ctx.fillText(letter, x * width, y * height);
        }
        texture.loadBitmap(canvas);
        return texture;
    }
}


},
27385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCube: () => (PainterCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(30338);


class PainterCube extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this.dataset = this.createDataset();
        this.program = this.createProgram();
        const elements = _geometry__rspack_import_1.cubeEdges;
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.program, [this.dataset], elements);
    }
    delete() {
        this.program.delete();
        this.vao.delete();
    }
    paint() {
        const { context, program, vao } = this;
        const { gl, camera } = context;
        program.use();
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
        vao.bind();
        gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
        vao.unbind();
    }
    createDataset() {
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec3",
        });
        dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
        return dataset;
    }
    createProgram() {
        const vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
            },
            attributes: {
                attPoint: "vec4",
            },
            varying: {
                varColor: "vec3",
            },
            mainCode: [
                "varColor = abs(attPoint.xyz);",
                "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
            ],
        }).code;
        const frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            varying: {
                varColor: "vec3",
            },
            outputs: { FragColor: "vec4" },
            mainCode: ["FragColor = vec4(varColor, 1.0);"],
        }).code;
        const program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, { vert, frag });
        return program;
    }
}


},
69925(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterTriangles: () => (PainterTriangles)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(30338);


class PainterTriangles extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this.elementsCount = 0;
        this._triangles = "";
        this.dataset = this.createDataset();
        this.program = this.createProgram();
        const elements = new Uint8Array();
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.program, [this.dataset], elements);
    }
    set triangles(value) {
        const elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
        this.vao.updateElements(elements);
        this.elementsCount = elements.length;
        this.context.paint();
    }
    delete() {
        this.program.delete();
        this.vao.delete();
    }
    paint() {
        const { context, program, vao, elementsCount } = this;
        const { gl, camera } = context;
        program.use();
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
        vao.bind();
        gl.drawElements(gl.TRIANGLES, elementsCount, gl.UNSIGNED_BYTE, 0);
        vao.unbind();
    }
    createDataset() {
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec3",
        });
        dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
        return dataset;
    }
    createProgram() {
        const vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniLight: "float",
            },
            attributes: {
                attPoint: "vec4",
            },
            mainCode: ["gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;"],
        }).code;
        const frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            outputs: { FragColor: "vec4" },
            mainCode: [
                "float a = 1.0;",
                "FragColor = vec4(",
                "  .8 * (gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0)),",
                "  a",
                ");",
            ],
        }).code;
        const program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, { vert, frag });
        return program;
    }
}


},
77710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterWireframe: () => (PainterWireframe)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(30338);


class PainterWireframe extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this.elementsCount = 0;
        this.dataset = this.createDataset();
        this.program = this.createProgram();
        const elements = new Uint8Array();
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.program, [this.dataset], elements);
    }
    set triangles(value) {
        const elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
        const wireframe = [];
        for (let i = 0; i < elements.length; i += 3) {
            const a = elements[i];
            const b = elements[i + 1];
            const c = elements[i + 2];
            wireframe.push(a, b, c, a);
        }
        this.vao.updateElements(wireframe);
        this.elementsCount = wireframe.length;
        this.context.paint();
    }
    delete() {
        this.program.delete();
        this.vao.delete();
    }
    paint() {
        const { context, program, vao, elementsCount } = this;
        const { gl, camera } = context;
        program.use();
        program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
        program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
        vao.bind();
        gl.drawElements(gl.LINES, elementsCount, gl.UNSIGNED_BYTE, 0);
        vao.unbind();
    }
    createDataset() {
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec3",
        });
        dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
        return dataset;
    }
    createProgram() {
        const vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
            uniforms: {
                uniModelViewMatrix: "mat4",
                uniProjectionMatrix: "mat4",
                uniLight: "float",
            },
            attributes: {
                attPoint: "vec4",
            },
            mainCode: [
                "gl_Position = uniProjectionMatrix * ",
                "  (uniModelViewMatrix * attPoint + vec4(0, 0, 0.02, 0));",
            ],
        }).code;
        const frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
            uniforms: {
                uniTexture: "sampler2D",
            },
            outputs: { FragColor: "vec4" },
            mainCode: ["FragColor = vec4(0,0,0,1);"],
        }).code;
        const program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, { vert, frag });
        return program;
    }
}


},
61637(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_4 = __webpack_require__(47578);
/* import */ var _manager__rspack_import_5 = __webpack_require__(41563);
/* import */ var _tolokoban_type_guards__rspack_import_6 = __webpack_require__(2197);
/* import */ var _page_module_css__rspack_import_7 = __webpack_require__(43717);
/* import */ var _geometry__rspack_import_8 = __webpack_require__(30338);
/* import */ var _configurations__rspack_import_9 = __webpack_require__(11721);










function Page() {
    const [caseNumber, setCaseNumber] = (0,_tolokoban_ui__rspack_import_3.useLocalStorageState)(0, "volume-to-mesh/caseNumber", (value) => (0,_tolokoban_tgd__rspack_import_4.tgdCalcClamp)(Math.floor((0,_tolokoban_type_guards__rspack_import_6.ensureNumber)(value, 0)), 0, 255));
    const [triangles, setTriangles] = react__rspack_import_1_default().useState("");
    const key = `volume-to-mesh/triangles/${caseNumber}`;
    react__rspack_import_1_default().useEffect(() => {
        setTriangles(globalThis.localStorage.getItem(key) ?? _configurations__rspack_import_9.CONFIGURATIONS[caseNumber]);
        manager.caseNumber = caseNumber;
    }, [caseNumber]);
    react__rspack_import_1_default().useEffect(() => {
        globalThis.localStorage.setItem(key, triangles.trim().toUpperCase());
        manager.triangles = triangles;
    }, [triangles]);
    const handleLeft = () => {
        setCaseNumber((caseNumber + 255) & 0xff);
    };
    const handleRight = () => {
        setCaseNumber((caseNumber + 1) & 0xff);
    };
    const manager = (0,_manager__rspack_import_5.useVolumeToMeshManager)();
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("h1", { children: "Marching cubes" }), (0,react_jsx_runtime__rspack_import_0.jsxs)("p", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("a", { href: "https://en.wikipedia.org/wiki/Marching_cubes", children: "Marching cubes" }), " is a technique to generate meshes from a volume.", (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}), "A volume is a function that tells you, for each point in a box, it you are inside or outside an object."] }), (0,react_jsx_runtime__rspack_import_0.jsxs)("p", { children: ["A voxel is a unit cube. Each corner of a voxel is either inside the volume (", (0,react_jsx_runtime__rspack_import_0.jsx)("b", { children: "red" }), ") or outside (", (0,react_jsx_runtime__rspack_import_0.jsx)("b", { children: "blue" }), "). With triangles, touching the edges of the voxel, we need to separate the space between red and blue corners."] }), (0,react_jsx_runtime__rspack_import_0.jsx)("p", { children: "A voxel has 8 corners, so we have 256 configurations." }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: (context) => {
                    manager.context = context;
                } }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_3.ViewSlider, { className: _page_module_css__rspack_import_7["default"].flex1, wide: true, text: `${caseNumber}`, value: caseNumber, onChange: setCaseNumber, min: 0, max: 255, step: 1 }), (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_3.ViewPanel, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_3.ViewPanel, { display: "flex", alignItems: "center", fullwidth: true, gap: "M", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_3.ViewInputText, { label: "Triangles (from mid points ABCDEFGHIJKL)", value: triangles, onChange: setTriangles }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, { icon: _tolokoban_ui__rspack_import_3.IconArrowLeft, onClick: handleLeft }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, { icon: _tolokoban_ui__rspack_import_3.IconArrowRight, onClick: handleRight })] }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_3.ViewButton, { onClick: handleReset, icon: _tolokoban_ui__rspack_import_3.IconReset, children: "Reset" })] }), (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}), (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}), (0,react_jsx_runtime__rspack_import_0.jsxs)("details", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: "List of triangles per configuration" }), (0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: getTriangles() })] })] }));
}
function handleReset() {
    const configurations = (0,_tolokoban_tgd__rspack_import_4.tgdDataMarchingCubesConfigurations)();
    for (let i = 0; i < configurations.length; i++) {
        const config = configurations[i];
        const code = config.map((i) => "ABCDEFGHIJKL".charAt(i)).join("");
        globalThis.localStorage.setItem(`volume-to-mesh/triangles/${i}`, code);
    }
    location.reload();
}
function getTriangles() {
    const lines = [];
    for (let i = 0; i < 256; i++) {
        const text = globalThis.localStorage.getItem(`volume-to-mesh/triangles/${i}`) ?? "?";
        if (text === "?")
            lines.push("[ /* N/A /* ],");
        else {
            const elements = (0,_geometry__rspack_import_8.trianglesStringToElements)(text);
            lines.push(`${JSON.stringify(elements)},`);
        }
    }
    return lines.join("\n");
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF92b2x1bWUtdG8tbWVzaF9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC05MDE3MWUuZjE2ZTQwYTFkZmY1NTkwMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL3BhZ2UubW9kdWxlLmNzcz9iOTY1IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vY29uZmlndXJhdGlvbnMudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy9jb3JuZXJzLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vZ2VvbWV0cnkudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy9tYW5hZ2VyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vbWlkLXBvaW50cy50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL3BhaW50ZXItY3ViZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL3RyaWFuZ2xlcy50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL3dpcmVmcmFtZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZmxleDFcIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWVzaC12b2x1bWUtdG8tbWVzaC1wYWdlLW1vZHVsZV9mbGV4MV9FSTBIMVFcIn07IiwiaW1wb3J0IHsgdGdkRGF0YU1hcmNoaW5nQ3ViZXNDb25maWd1cmF0aW9ucyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbi8qKlxuICogRm9yIGVhY2ggY29uZmlndXJhdGlvbiwgd2UgY3JlYXRlIHRyaWFuZ2xlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTkZJR1VSQVRJT05TOiBSZWFkb25seTxzdHJpbmdbXT4gPSB0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zKCkubWFwKChhcnIpID0+XG4gICAgYXJyLm1hcCgoaSkgPT4gXCJBQkNERUZHSElKS0xcIi5jaGFyQXQoaSkpLmpvaW4oXCJcIiksXG4pXG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlcnRleEFycmF5LFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjYXNlTnVtYmVyVG9Db2xvcnMsIGN1YmVWZXJ0aWNlcyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJDb3JuZXJzIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcbiAgICBwcml2YXRlIF9jYXNlTnVtYmVyID0gLTFcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IHRoaXMuY3JlYXRlRGF0YXNldCgpXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgICAgIHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJvZ3JhbSwgW3RoaXMuZGF0YXNldF0pXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgICAgIHRoaXMuY2FzZU51bWJlciA9IDBcbiAgICB9XG5cbiAgICBnZXQgY2FzZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhc2VOdW1iZXJcbiAgICB9XG4gICAgc2V0IGNhc2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX2Nhc2VOdW1iZXIpIHJldHVyblxuXG4gICAgICAgIHRoaXMuX2Nhc2VOdW1iZXIgPSB2YWx1ZVxuICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXNlTnVtYmVyVG9Db2xvcnModmFsdWUpXG4gICAgICAgIHRoaXMuZGF0YXNldC5zZXQoXCJhdHRDb2xvclwiLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycykpXG4gICAgICAgIHRoaXMudmFvLnVwZGF0ZURhdGFzZXQodGhpcy5kYXRhc2V0KVxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgcHJvZ3JhbS51c2UoKVxuICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSlcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDgpXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzNcIixcbiAgICAgICAgICAgIGF0dENvbG9yOiBcImZsb2F0XCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZVZlcnRpY2VzKVxuICAgICAgICBkYXRhc2V0LnNldChcImF0dENvbG9yXCIsIG5ldyBGbG9hdDMyQXJyYXkoY3ViZVZlcnRpY2VzLmxlbmd0aCkpXG4gICAgICAgIHJldHVybiBkYXRhc2V0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKCk6IFRnZFByb2dyYW0ge1xuICAgICAgICBjb25zdCB2ZXJ0ID0gbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgdW5pSGFsZlNjcmVlbkhlaWdodEluUGl4ZWxzOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICBhdHRDb2xvcjogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyQ29sb3I6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gYXR0Q29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiBhdHRQb2ludDtcIixcbiAgICAgICAgICAgICAgICBcImdsX1BvaW50U2l6ZSA9IDAuMiAqIHVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVscyAvIGdsX1Bvc2l0aW9uLnc7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyQ29sb3I6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgb3V0cHV0czogeyBGcmFnQ29sb3I6IFwidmVjNFwiIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgIFwidmVjMiBwb3MgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcIixcbiAgICAgICAgICAgICAgICBcImZsb2F0IHJhZGl1cyA9IGRvdChwb3MsIHBvcyk7XCIsXG4gICAgICAgICAgICAgICAgXCJpZiAocmFkaXVzID4gMS4wKSBkaXNjYXJkO1wiLFxuICAgICAgICAgICAgICAgIFwidmVjMiB1diA9IHZlYzIodmFyQ29sb3IsIC41KTtcIixcbiAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuY29kZVxuICAgICAgICBjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSlcbiAgICAgICAgcmV0dXJuIHByb2dyYW1cbiAgICB9XG5cbiAgICBjcmVhdGVUZXh0dXJlKCk6IFRnZFRleHR1cmUyRCB7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKHRoaXMuY29udGV4dClcbiAgICAgICAgdGV4dHVyZS5zZXRQYXJhbXMoe1xuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgIH0pXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiMwN2ZcIiwgXCIjZjAwXCJdKSlcbiAgICAgICAgcmV0dXJuIHRleHR1cmVcbiAgICB9XG59XG4iLCIvLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBjdWJlRWRnZXMgPSAgbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDAsIDEsIDAsIDIsIDAsIDQsXG4gICAgMSwgMywgMSwgNSxcbiAgICAyLCAzLCAyLCA2LFxuICAgIDMsIDcsXG4gICAgNCwgNSwgNCwgNixcbiAgICA1LCA3LFxuICAgIDYsIDdcbl0pXG5cbmNvbnN0IFAgPSArMVxuY29uc3QgTiA9IC0xXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGN1YmVWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIE4sIE4sIE4sIC8vIDBcbiAgICBOLCBOLCBQLCAvLyAxXG4gICAgTiwgUCwgTiwgLy8gMlxuICAgIE4sIFAsIFAsIC8vIDNcbiAgICBQLCBOLCBOLCAvLyA0XG4gICAgUCwgTiwgUCwgLy8gNVxuICAgIFAsIFAsIE4sIC8vIDZcbiAgICBQLCBQLCBQLCAvLyA3XG5dKVxuXG5jb25zdCBtaWRQb2ludHM6IG51bWJlcltdID0gW11cbmZvciAobGV0IGkgPSAwOyBpIDwgY3ViZUVkZ2VzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgY29uc3QgYSA9IDMgKiBjdWJlRWRnZXNbaV1cbiAgICBjb25zdCBiID0gMyAqIGN1YmVFZGdlc1tpICsgMV1cbiAgICBjb25zdCB4ID0gMC41ICogKGN1YmVWZXJ0aWNlc1thICsgMF0gKyBjdWJlVmVydGljZXNbYiArIDBdKVxuICAgIGNvbnN0IHkgPSAwLjUgKiAoY3ViZVZlcnRpY2VzW2EgKyAxXSArIGN1YmVWZXJ0aWNlc1tiICsgMV0pXG4gICAgY29uc3QgeiA9IDAuNSAqIChjdWJlVmVydGljZXNbYSArIDJdICsgY3ViZVZlcnRpY2VzW2IgKyAyXSlcbiAgICBtaWRQb2ludHMucHVzaCh4LCB5LCB6KVxufVxuXG5leHBvcnQgY29uc3QgY3ViZU1pZFBvaW50cyA9IG5ldyBGbG9hdDMyQXJyYXkobWlkUG9pbnRzKVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IG51bWJlcltdID0gW11cbiAgICBmb3IgKGNvbnN0IEMgb2YgdmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgaWYgKEMgPCBcIkFcIiB8fCBDID4gXCJMXCIpIGNvbnRpbnVlXG5cbiAgICAgICAgZWxlbWVudHMucHVzaChDLmNoYXJDb2RlQXQoMCkgLSBcIkFcIi5jaGFyQ29kZUF0KDApKVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHNcbn1cblxuLyoqXG4gKiBBIGNhc2UgbnVtYmVyIGRlZmluZXMgd2hhdCBjb3JuZXIgaXMgaW5zaWRlICgxKSBvciBvdXRzaWRlICgwKVxuICogb2YgdGhlIHZvbHVtZS5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIDggZWxlbWVudHMgd2l0aCAxIGlmIHRoZSBjb3JuZXIgaXMgaW5zaWRlLFxuICogYW5kIDAgaWYgaXQgaXMgb3V0c2lkZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc2VOdW1iZXJUb0NvbG9ycyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGNvbG9yczogbnVtYmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSAxIDw8IGlcbiAgICAgICAgY29sb3JzLnB1c2godmFsdWUgJiBtYXNrID8gMSA6IDApXG4gICAgfVxuICAgIHJldHVybiBjb2xvcnNcbn1cbiIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RQYWludGVyQXhlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFBhaW50ZXJDb3JuZXJzIH0gZnJvbSBcIi4vY29ybmVyc1wiXG5pbXBvcnQgeyBQYWludGVyTWlkUG9pbnRzIH0gZnJvbSBcIi4vbWlkLXBvaW50c1wiXG5pbXBvcnQgeyBQYWludGVyQ3ViZSB9IGZyb20gXCIuL3BhaW50ZXItY3ViZVwiXG5pbXBvcnQgeyBQYWludGVyVHJpYW5nbGVzIH0gZnJvbSBcIi4vdHJpYW5nbGVzXCJcbmltcG9ydCB7IFBhaW50ZXJXaXJlZnJhbWUgfSBmcm9tIFwiLi93aXJlZnJhbWVcIlxuXG5jbGFzcyBWb2x1bWVUb01lc2hNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGxcbiAgICBwcml2YXRlIG1pZFBvaW50c1BhaW50ZXI6IFBhaW50ZXJNaWRQb2ludHMgfCBudWxsID0gbnVsbFxuICAgIHByaXZhdGUgY29ybmVyc1BhaW50ZXI6IFBhaW50ZXJDb3JuZXJzIHwgbnVsbCA9IG51bGxcbiAgICBwcml2YXRlIHRyaWFuZ2xlc1BhaW50ZXI6IFBhaW50ZXJUcmlhbmdsZXMgfCBudWxsID0gbnVsbFxuICAgIHByaXZhdGUgd2lyZWZyYW1lUGFpbnRlcjogUGFpbnRlcldpcmVmcmFtZSB8IG51bGwgPSBudWxsXG5cbiAgICBzZXQgY29udGV4dChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuICAgICAgICAgICAgY2FtZXJhLmZvdnkgPSB0Z2RDYWxjRGVnVG9SYWQoOTApXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDNcbiAgICAgICAgfVxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuZGVsZXRlKClcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwub2ZmLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3aXJlZnJhbWUgPSBuZXcgUGFpbnRlcldpcmVmcmFtZShjb250ZXh0KVxuICAgICAgICB0aGlzLndpcmVmcmFtZVBhaW50ZXIgPSB3aXJlZnJhbWVcbiAgICAgICAgY29uc3QgbWlkUG9pbnRzID0gbmV3IFBhaW50ZXJNaWRQb2ludHMoY29udGV4dClcbiAgICAgICAgdGhpcy5taWRQb2ludHNQYWludGVyID0gbWlkUG9pbnRzXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSBuZXcgUGFpbnRlckNvcm5lcnMoY29udGV4dClcbiAgICAgICAgdGhpcy5jb3JuZXJzUGFpbnRlciA9IGNvcm5lcnNcbiAgICAgICAgY29uc3QgdHJpYW5nbGVzID0gbmV3IFBhaW50ZXJUcmlhbmdsZXMoY29udGV4dClcbiAgICAgICAgdGhpcy50cmlhbmdsZXNQYWludGVyID0gdHJpYW5nbGVzXG4gICAgICAgIHN0YXRlLmFkZChcbiAgICAgICAgICAgIC8vIG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAyIH0pLFxuICAgICAgICAgICAgbmV3IFBhaW50ZXJDdWJlKGNvbnRleHQpLFxuICAgICAgICAgICAgd2lyZWZyYW1lLFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQucHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWlkUG9pbnRzLCBjb3JuZXJzLCB0cmlhbmdsZXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGVyZSBhcmUgMjU2IGNhc2VzLCByYW5naW5nIGZyb20gMCB0byAyNTUuXG4gICAgICovXG4gICAgc2V0IGNhc2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBjb25zdCB7IGNvcm5lcnNQYWludGVyOiBjb3JuZXJzLCBtaWRQb2ludHNQYWludGVyOiBtaWRQb2ludHMgfSA9IHRoaXNcbiAgICAgICAgaWYgKGNvcm5lcnMpIGNvcm5lcnMuY2FzZU51bWJlciA9IHZhbHVlXG4gICAgICAgIGlmIChtaWRQb2ludHMpIG1pZFBvaW50cy5jYXNlTnVtYmVyID0gdmFsdWVcbiAgICB9XG4gICAgZ2V0IGNhc2VOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcm5lcnNQYWludGVyPy5jYXNlTnVtYmVyID8/IDBcbiAgICB9XG5cbiAgICBzZXQgdHJpYW5nbGVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgeyB0cmlhbmdsZXNQYWludGVyLCB3aXJlZnJhbWVQYWludGVyIH0gPSB0aGlzXG4gICAgICAgIGlmICh0cmlhbmdsZXNQYWludGVyKSB0cmlhbmdsZXNQYWludGVyLnRyaWFuZ2xlcyA9IHZhbHVlXG4gICAgICAgIGlmICh3aXJlZnJhbWVQYWludGVyKSB3aXJlZnJhbWVQYWludGVyLnRyaWFuZ2xlcyA9IHZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm9sdW1lVG9NZXNoTWFuYWdlcigpOiBWb2x1bWVUb01lc2hNYW5hZ2VyIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8Vm9sdW1lVG9NZXNoTWFuYWdlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgVm9sdW1lVG9NZXNoTWFuYWdlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlcnRleEFycmF5LFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjYXNlTnVtYmVyVG9Db2xvcnMsIGN1YmVFZGdlcywgY3ViZU1pZFBvaW50cyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJNaWRQb2ludHMgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuICAgIHByaXZhdGUgX2Nhc2VOdW1iZXIgPSAwXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByb2dyYW0sIFt0aGlzLmRhdGFzZXRdKVxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIH1cblxuICAgIGdldCBjYXNlTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FzZU51bWJlclxuICAgIH1cbiAgICBzZXQgY2FzZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fY2FzZU51bWJlcikgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5fY2FzZU51bWJlciA9IHZhbHVlXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSBjYXNlTnVtYmVyVG9Db2xvcnModmFsdWUpXG4gICAgICAgIGNvbnN0IHZpc2libGVzOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYSA9IGNvcm5lcnNbY3ViZUVkZ2VzW2kgKiAyXV1cbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb3JuZXJzW2N1YmVFZGdlc1tpICogMiArIDFdXVxuICAgICAgICAgICAgdmlzaWJsZXMucHVzaChhID09PSBiID8gMCA6IDEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhc2V0LnNldChcImF0dFZpc2libGVcIiwgbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlcykpXG4gICAgICAgIHRoaXMudmFvLnVwZGF0ZURhdGFzZXQodGhpcy5kYXRhc2V0KVxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgcHJvZ3JhbS51c2UoKVxuICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSlcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDEyKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICBhdHRWaXNpYmxlOiBcImZsb2F0XCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZU1pZFBvaW50cylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlIYWxmU2NyZWVuSGVpZ2h0SW5QaXhlbHM6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgIGF0dFZpc2libGU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJ5aW5nOiB7IHZhclU6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhclUgPSBmbG9hdChnbF9WZXJ0ZXhJRCkgLyAxMi4wO1wiLFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb2ludFNpemUgPSAwLjIgKiB1bmlIYWxmU2NyZWVuSGVpZ2h0SW5QaXhlbHMgLyBnbF9Qb3NpdGlvbi53O1wiLFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9pbnRTaXplICo9IGF0dFZpc2libGU7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyVTogXCJmbG9hdFwiIH0sXG4gICAgICAgICAgICBvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgXCJ2ZWMyIHV2ID0gdmVjMih2YXJVLCAwLjApICsgZ2xfUG9pbnRDb29yZC54eSAqIHZlYzIoMS4wIC8gMTIuMCwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1wiLFxuICAgICAgICAgICAgICAgIFwiaWYgKEZyYWdDb2xvci5hIDwgLjEpIGRpc2NhcmQ7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBuZXcgVGdkUHJvZ3JhbSh0aGlzLmNvbnRleHQuZ2wsIHsgdmVydCwgZnJhZyB9KVxuICAgICAgICByZXR1cm4gcHJvZ3JhbVxuICAgIH1cblxuICAgIGNyZWF0ZVRleHR1cmUoKTogVGdkVGV4dHVyZTJEIHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQodGhpcy5jb250ZXh0KVxuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyh7XG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdISUpLTFwiXG4gICAgICAgIGNvbnN0IGNvdW50ID0gbGV0dGVycy5sZW5ndGhcbiAgICAgICAgY29uc3Qgc2l6ZSA9IDY0XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZSAqIGNvdW50XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7c2l6ZX1weCBzYW5zLXNlcmlmYFxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIlxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMGYwXCJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBsZXR0ZXJzLmNoYXJBdChpKVxuICAgICAgICAgICAgY29uc3QgeCA9IChpICsgMC41KSAvIGNvdW50XG4gICAgICAgICAgICBjb25zdCB5ID0gMC41XG4gICAgICAgICAgICBjdHguZmlsbFRleHQobGV0dGVyLCB4ICogd2lkdGgsIHkgKiBoZWlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgcmV0dXJuIHRleHR1cmVcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjdWJlRWRnZXMsIGN1YmVWZXJ0aWNlcyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJDdWJlIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjdWJlRWRnZXNcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcm9ncmFtLCBbdGhpcy5kYXRhc2V0XSwgZWxlbWVudHMpXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcm9ncmFtLCB2YW8gfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCwgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIHByb2dyYW0udXNlKClcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCAyNCwgZ2wuVU5TSUdORURfQllURSwgMClcbiAgICAgICAgdmFvLnVuYmluZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVEYXRhc2V0KCkge1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjM1wiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LnNldChcImF0dFBvaW50XCIsIGN1YmVWZXJ0aWNlcylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICB2YXJDb2xvcjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gYWJzKGF0dFBvaW50Lnh5eik7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiBhdHRQb2ludDtcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmU6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgIHZhckNvbG9yOiBcInZlYzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXCJGcmFnQ29sb3IgPSB2ZWM0KHZhckNvbG9yLCAxLjApO1wiXSxcbiAgICAgICAgfSkuY29kZVxuICAgICAgICBjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSlcbiAgICAgICAgcmV0dXJuIHByb2dyYW1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjdWJlTWlkUG9pbnRzLCB0cmlhbmdsZXNTdHJpbmdUb0VsZW1lbnRzIH0gZnJvbSBcIi4vZ2VvbWV0cnlcIlxuXG5leHBvcnQgY2xhc3MgUGFpbnRlclRyaWFuZ2xlcyBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuICAgIHByaXZhdGUgZWxlbWVudHNDb3VudCA9IDBcbiAgICBwcml2YXRlIF90cmlhbmdsZXMgPSBcIlwiXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KClcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcm9ncmFtLCBbdGhpcy5kYXRhc2V0XSwgZWxlbWVudHMpXG4gICAgfVxuXG4gICAgc2V0IHRyaWFuZ2xlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZSlcbiAgICAgICAgdGhpcy52YW8udXBkYXRlRWxlbWVudHMoZWxlbWVudHMpXG4gICAgICAgIHRoaXMuZWxlbWVudHNDb3VudCA9IGVsZW1lbnRzLmxlbmd0aFxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJvZ3JhbSwgdmFvLCBlbGVtZW50c0NvdW50IH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wsIGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICBwcm9ncmFtLnVzZSgpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBjYW1lcmEubWF0cml4TW9kZWxWaWV3KVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIGVsZW1lbnRzQ291bnQsIGdsLlVOU0lHTkVEX0JZVEUsIDApXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzNcIixcbiAgICAgICAgfSlcbiAgICAgICAgZGF0YXNldC5zZXQoXCJhdHRQb2ludFwiLCBjdWJlTWlkUG9pbnRzKVxuICAgICAgICByZXR1cm4gZGF0YXNldFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvZ3JhbSgpOiBUZ2RQcm9ncmFtIHtcbiAgICAgICAgY29uc3QgdmVydCA9IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgIHVuaUxpZ2h0OiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCJdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dHB1dHM6IHsgRnJhZ0NvbG9yOiBcInZlYzRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcImZsb2F0IGEgPSAxLjA7XCIsXG4gICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgIFwiICAuOCAqIChnbF9Gcm9udEZhY2luZyA/IHZlYzMoMCwgLjUsIDEpIDogdmVjMygxLCAwLCAwKSksXCIsXG4gICAgICAgICAgICAgICAgXCIgIGFcIixcbiAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBuZXcgVGdkUHJvZ3JhbSh0aGlzLmNvbnRleHQuZ2wsIHsgdmVydCwgZnJhZyB9KVxuICAgICAgICByZXR1cm4gcHJvZ3JhbVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQcm9ncmFtLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IGN1YmVNaWRQb2ludHMsIHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMgfSBmcm9tIFwiLi9nZW9tZXRyeVwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyV2lyZWZyYW1lIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG4gICAgcHJpdmF0ZSBlbGVtZW50c0NvdW50ID0gMFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gdGhpcy5jcmVhdGVEYXRhc2V0KClcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBuZXcgVWludDhBcnJheSgpXG4gICAgICAgIHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJvZ3JhbSwgW3RoaXMuZGF0YXNldF0sIGVsZW1lbnRzKVxuICAgIH1cblxuICAgIHNldCB0cmlhbmdsZXModmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHModmFsdWUpXG4gICAgICAgIGNvbnN0IHdpcmVmcmFtZTogbnVtYmVyW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gZWxlbWVudHNbaV1cbiAgICAgICAgICAgIGNvbnN0IGIgPSBlbGVtZW50c1tpICsgMV1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBlbGVtZW50c1tpICsgMl1cbiAgICAgICAgICAgIHdpcmVmcmFtZS5wdXNoKGEsIGIsIGMsIGEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YW8udXBkYXRlRWxlbWVudHMod2lyZWZyYW1lKVxuICAgICAgICB0aGlzLmVsZW1lbnRzQ291bnQgPSB3aXJlZnJhbWUubGVuZ3RoXG4gICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcm9ncmFtLCB2YW8sIGVsZW1lbnRzQ291bnQgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCwgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIHByb2dyYW0udXNlKClcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCBlbGVtZW50c0NvdW50LCBnbC5VTlNJR05FRF9CWVRFLCAwKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMzXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZU1pZFBvaW50cylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlMaWdodDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIFwiLFxuICAgICAgICAgICAgICAgIFwiICAodW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQgKyB2ZWM0KDAsIDAsIDAuMDIsIDApKTtcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmU6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0cHV0czogeyBGcmFnQ29sb3I6IFwidmVjNFwiIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmVjNCgwLDAsMCwxKTtcIl0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IG5ldyBUZ2RQcm9ncmFtKHRoaXMuY29udGV4dC5nbCwgeyB2ZXJ0LCBmcmFnIH0pXG4gICAgICAgIHJldHVybiBwcm9ncmFtXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7XG4gICAgSWNvbkFycm93TGVmdCxcbiAgICBJY29uQXJyb3dSaWdodCxcbiAgICBJY29uUmVzZXQsXG4gICAgdXNlTG9jYWxTdG9yYWdlU3RhdGUsXG4gICAgVmlld0J1dHRvbixcbiAgICBWaWV3RmxvYXRpbmdCdXR0b24sXG4gICAgVmlld0lucHV0VGV4dCxcbiAgICBWaWV3UGFuZWwsXG4gICAgVmlld1NsaWRlcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgdGdkQ2FsY0NsYW1wLCB0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IHsgdXNlVm9sdW1lVG9NZXNoTWFuYWdlciB9IGZyb20gXCIuL18vbWFuYWdlclwiXG5pbXBvcnQgeyBlbnN1cmVOdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi90eXBlLWd1YXJkc1wiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMgfSBmcm9tIFwiLi9fL2dlb21ldHJ5XCJcbmltcG9ydCB7IENPTkZJR1VSQVRJT05TIH0gZnJvbSBcIi4vXy9jb25maWd1cmF0aW9uc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgW2Nhc2VOdW1iZXIsIHNldENhc2VOdW1iZXJdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoMCwgXCJ2b2x1bWUtdG8tbWVzaC9jYXNlTnVtYmVyXCIsICh2YWx1ZSkgPT5cbiAgICAgICAgdGdkQ2FsY0NsYW1wKE1hdGguZmxvb3IoZW5zdXJlTnVtYmVyKHZhbHVlLCAwKSksIDAsIDI1NSksXG4gICAgKVxuICAgIGNvbnN0IFt0cmlhbmdsZXMsIHNldFRyaWFuZ2xlc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IGtleSA9IGB2b2x1bWUtdG8tbWVzaC90cmlhbmdsZXMvJHtjYXNlTnVtYmVyfWBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUcmlhbmdsZXMoZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID8/IENPTkZJR1VSQVRJT05TW2Nhc2VOdW1iZXJdKVxuICAgICAgICBtYW5hZ2VyLmNhc2VOdW1iZXIgPSBjYXNlTnVtYmVyXG4gICAgfSwgW2Nhc2VOdW1iZXJdKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0cmlhbmdsZXMudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIG1hbmFnZXIudHJpYW5nbGVzID0gdHJpYW5nbGVzXG4gICAgfSwgW3RyaWFuZ2xlc10pXG4gICAgY29uc3QgaGFuZGxlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDI1NSkgJiAweGZmKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSaWdodCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDEpICYgMHhmZilcbiAgICB9XG4gICAgY29uc3QgbWFuYWdlciA9IHVzZVZvbHVtZVRvTWVzaE1hbmFnZXIoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TWFyY2hpbmcgY3ViZXM8L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01hcmNoaW5nX2N1YmVzXCI+TWFyY2hpbmcgY3ViZXM8L2E+IGlzIGEgdGVjaG5pcXVlIHRvIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgbWVzaGVzIGZyb20gYSB2b2x1bWUuXG4gICAgICAgICAgICAgICAgPGJyIC8+QSB2b2x1bWUgaXMgYSBmdW5jdGlvbiB0aGF0IHRlbGxzIHlvdSwgZm9yIGVhY2ggcG9pbnQgaW4gYSBib3gsIGl0IHlvdSBhcmUgaW5zaWRlIG9yIG91dHNpZGUgYW5cbiAgICAgICAgICAgICAgICBvYmplY3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBIHZveGVsIGlzIGEgdW5pdCBjdWJlLiBFYWNoIGNvcm5lciBvZiBhIHZveGVsIGlzIGVpdGhlciBpbnNpZGUgdGhlIHZvbHVtZSAoPGI+cmVkPC9iPikgb3Igb3V0c2lkZSAoXG4gICAgICAgICAgICAgICAgPGI+Ymx1ZTwvYj4pLiBXaXRoIHRyaWFuZ2xlcywgdG91Y2hpbmcgdGhlIGVkZ2VzIG9mIHRoZSB2b3hlbCwgd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgc3BhY2UgYmV0d2VlbiByZWRcbiAgICAgICAgICAgICAgICBhbmQgYmx1ZSBjb3JuZXJzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+QSB2b3hlbCBoYXMgOCBjb3JuZXJzLCBzbyB3ZSBoYXZlIDI1NiBjb25maWd1cmF0aW9ucy48L3A+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaWV3U2xpZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxleDF9XG4gICAgICAgICAgICAgICAgd2lkZVxuICAgICAgICAgICAgICAgIHRleHQ9e2Ake2Nhc2VOdW1iZXJ9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FzZU51bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q2FzZU51bWJlcn1cbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsyNTV9XG4gICAgICAgICAgICAgICAgc3RlcD17MX0+PC9WaWV3U2xpZGVyPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZnVsbHdpZHRoIGdhcD1cIk1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJpYW5nbGVzIChmcm9tIG1pZCBwb2ludHMgQUJDREVGR0hJSktMKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJpYW5nbGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRyaWFuZ2xlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdGbG9hdGluZ0J1dHRvbiBpY29uPXtJY29uQXJyb3dMZWZ0fSBvbkNsaWNrPXtoYW5kbGVMZWZ0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0Zsb2F0aW5nQnV0dG9uIGljb249e0ljb25BcnJvd1JpZ2h0fSBvbkNsaWNrPXtoYW5kbGVSaWdodH0gLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gaWNvbj17SWNvblJlc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5MaXN0IG9mIHRyaWFuZ2xlcyBwZXIgY29uZmlndXJhdGlvbjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8cHJlPntnZXRUcmlhbmdsZXMoKX08L3ByZT5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNldCgpIHtcbiAgICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHRnZERhdGFNYXJjaGluZ0N1YmVzQ29uZmlndXJhdGlvbnMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlndXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlndXJhdGlvbnNbaV1cbiAgICAgICAgY29uc3QgY29kZSA9IGNvbmZpZy5tYXAoKGkpID0+IFwiQUJDREVGR0hJSktMXCIuY2hhckF0KGkpKS5qb2luKFwiXCIpXG4gICAgICAgIGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHZvbHVtZS10by1tZXNoL3RyaWFuZ2xlcy8ke2l9YCwgY29kZSlcbiAgICB9XG4gICAgbG9jYXRpb24ucmVsb2FkKClcbn1cblxuZnVuY3Rpb24gZ2V0VHJpYW5nbGVzKCkge1xuICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXh0ID0gZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdm9sdW1lLXRvLW1lc2gvdHJpYW5nbGVzLyR7aX1gKSA/PyBcIj9cIlxuICAgICAgICBpZiAodGV4dCA9PT0gXCI/XCIpIGxpbmVzLnB1c2goXCJbIC8qIE4vQSAvKiBdLFwiKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh0ZXh0KVxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtKU09OLnN0cmluZ2lmeShlbGVtZW50cyl9LGApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIilcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLHdFQUF3RSxFOzs7Ozs7Ozs7QUNEckI7QUFLNUQsTUFBTSxjQUFjLEdBQXVCLHNFQUFrQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDL0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDcEQ7Ozs7Ozs7Ozs7O0FDR3NCO0FBQ3NDO0FBRXRELE1BQU0sY0FBZSxTQUFRLDBDQUFVO0lBTzFDLFlBQTZCLE9BQW1CO1FBQzVDLEtBQUssRUFBRTtRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnhDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBSXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLDhDQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVc7SUFDM0IsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFNO1FBRXRDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUN4QixNQUFNLE1BQU0sR0FBRyxpREFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNyQixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQy9DLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUM5QixPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDeEUsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxDQUFDO1lBQzNCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxPQUFPO1NBQ3BCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx1Q0FBWSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDLDhDQUFtQixDQUFDLENBQUM7UUFDOUQsT0FBTyxPQUFPO0lBQ2xCLENBQUM7SUFFTyxhQUFhO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksK0NBQWUsQ0FBQztZQUM3QixRQUFRLEVBQUU7Z0JBQ04sa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsbUJBQW1CLEVBQUUsTUFBTTtnQkFDM0IsMkJBQTJCLEVBQUUsT0FBTzthQUN2QztZQUNELFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLE9BQU87YUFDcEI7WUFDRCxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO1lBQzlCLFFBQVEsRUFBRTtnQkFDTixzQkFBc0I7Z0JBQ3RCLG9FQUFvRTtnQkFDcEUsbUVBQW1FO2FBQ3RFO1NBQ0osQ0FBQyxDQUFDLElBQUk7UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLGlEQUFpQixDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsV0FBVzthQUMxQjtZQUNELE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7WUFDOUIsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtZQUM5QixRQUFRLEVBQUU7Z0JBQ04saURBQWlEO2dCQUNqRCwrQkFBK0I7Z0JBQy9CLDRCQUE0QjtnQkFDNUIsK0JBQStCO2dCQUMvQixzQ0FBc0M7YUFDekM7U0FDSixDQUFDLENBQUMsSUFBSTtRQUNQLE1BQU0sT0FBTyxHQUFHLElBQUksMENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvRCxPQUFPLE9BQU87SUFDbEIsQ0FBQztJQUVELGFBQWE7UUFDVCxNQUFNLE9BQU8sR0FBRyxJQUFJLDRDQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsS0FBSyxFQUFFLGVBQWU7WUFDdEIsS0FBSyxFQUFFLGVBQWU7U0FDekIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxVQUFVLENBQUMsMERBQXNCLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLE9BQU87SUFDbEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckhNLE1BQU0sU0FBUyxHQUFJLElBQUksVUFBVSxDQUFDO0lBQ3JDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNWLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNWLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7Q0FDUCxDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR0wsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFDekMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ1AsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ1YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFhLEVBQUU7QUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFFTSxNQUFNLGFBQWEsR0FBRyxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUM7QUFFakQsU0FBUyx5QkFBeUIsQ0FBQyxLQUFhO0lBQ25ELE1BQU0sUUFBUSxHQUFhLEVBQUU7SUFDN0IsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUc7WUFBRSxTQUFRO1FBRWhDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxPQUFPLFFBQVE7QUFDbkIsQ0FBQztBQVFNLFNBQVMsa0JBQWtCLENBQUMsS0FBYTtJQUM1QyxNQUFNLE1BQU0sR0FBYSxFQUFFO0lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN6QixNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxPQUFPLE1BQU07QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHNCO0FBRUU7QUFDaUI7QUFDSztBQUNIO0FBQ0U7QUFDQTtBQUU5QyxNQUFNLG1CQUFtQjtJQUF6QjtRQUNZLGFBQVEsR0FBc0IsSUFBSTtRQUNsQyxxQkFBZ0IsR0FBNEIsSUFBSTtRQUNoRCxtQkFBYyxHQUEwQixJQUFJO1FBQzVDLHFCQUFnQixHQUE0QixJQUFJO1FBQ2hELHFCQUFnQixHQUE0QixJQUFJO0lBMkQ1RCxDQUFDO0lBekRHLElBQUksT0FBTyxDQUFDLE9BQW1CO1FBQzNCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPO1FBQzFCLElBQUksTUFBTSxZQUFZLG9EQUFvQixFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDLElBQUksR0FBRyxtREFBZSxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLHdEQUF3QixDQUFDLE9BQU8sRUFBRTtZQUNsQyxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTztRQUN2QixNQUFNLEtBQUssR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxxREFBcUI7WUFDNUIsSUFBSSxFQUFFLG1EQUFtQjtTQUM1QixDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSw0Q0FBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVM7UUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSw2Q0FBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVM7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSx3Q0FBYyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU87UUFDN0IsTUFBTSxTQUFTLEdBQUcsSUFBSSw0Q0FBZ0IsQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVM7UUFDakMsS0FBSyxDQUFDLEdBQUcsQ0FFTCxJQUFJLDBDQUFXLENBQUMsT0FBTyxDQUFDLEVBQ3hCLFNBQVMsRUFDVCxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLEtBQUssRUFBRSxtRUFBbUM7WUFDMUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7U0FDNUMsQ0FBQyxDQUNMO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDbkIsQ0FBQztJQUtELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSTtRQUNyRSxJQUFJLE9BQU87WUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUs7UUFDdkMsSUFBSSxTQUFTO1lBQUUsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLO0lBQy9DLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBVSxJQUFJLENBQUM7SUFDL0MsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDdkIsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLEdBQUcsSUFBSTtRQUNuRCxJQUFJLGdCQUFnQjtZQUFFLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQ3hELElBQUksZ0JBQWdCO1lBQUUsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLEtBQUs7SUFDNUQsQ0FBQztDQUNKO0FBRU0sU0FBUyxzQkFBc0I7SUFDbEMsTUFBTSxHQUFHLEdBQUcsdUNBQVksQ0FBNkIsSUFBSSxDQUFDO0lBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTztRQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRTtJQUN6RCxPQUFPLEdBQUcsQ0FBQyxPQUFPO0FBQ3RCLENBQUM7Ozs7Ozs7Ozs7O0FDaEZzQjtBQUNrRDtBQUVsRSxNQUFNLGdCQUFpQixTQUFRLDBDQUFVO0lBTzVDLFlBQTZCLE9BQW1CO1FBQzVDLEtBQUssRUFBRTtRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnhDLGdCQUFXLEdBQUcsQ0FBQztRQUluQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7SUFDdkMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVc7SUFDM0IsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFNO1FBRXRDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSztRQUN4QixNQUFNLE9BQU8sR0FBRyxpREFBa0IsQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQWEsRUFBRTtRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLG9DQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxvQ0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNyQixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQy9DLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUM5QixPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDeEUsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDaEIsQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxDQUFDO1lBQzNCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxPQUFPO1NBQ3RCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx3Q0FBYSxDQUFDO1FBQ3RDLE9BQU8sT0FBTztJQUNsQixDQUFDO0lBRU8sYUFBYTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLCtDQUFlLENBQUM7WUFDN0IsUUFBUSxFQUFFO2dCQUNOLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLG1CQUFtQixFQUFFLE1BQU07Z0JBQzNCLDJCQUEyQixFQUFFLE9BQU87YUFDdkM7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSxPQUFPO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUMxQixRQUFRLEVBQUU7Z0JBQ04sbUNBQW1DO2dCQUNuQyxvRUFBb0U7Z0JBQ3BFLG1FQUFtRTtnQkFDbkUsNkJBQTZCO2FBQ2hDO1NBQ0osQ0FBQyxDQUFDLElBQUk7UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLGlEQUFpQixDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsV0FBVzthQUMxQjtZQUNELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDMUIsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtZQUM5QixRQUFRLEVBQUU7Z0JBQ04sdUVBQXVFO2dCQUN2RSxzQ0FBc0M7Z0JBQ3RDLGdDQUFnQzthQUNuQztTQUNKLENBQUMsQ0FBQyxJQUFJO1FBQ1AsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQy9ELE9BQU8sT0FBTztJQUNsQixDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sT0FBTyxHQUFHLElBQUksNENBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDZCxTQUFTLEVBQUUsUUFBUTtZQUNuQixTQUFTLEVBQUUsUUFBUTtTQUN0QixDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQUcsY0FBYztRQUM5QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTTtRQUM1QixNQUFNLElBQUksR0FBRyxFQUFFO1FBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUs7UUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSTtRQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLGdFQUE0QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7UUFDbkUsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLElBQUksZUFBZTtRQUN0QyxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVE7UUFDeEIsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO1FBQzNCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSztZQUMzQixNQUFNLENBQUMsR0FBRyxHQUFHO1lBQ2IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQy9DLENBQUM7UUFDRCxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMxQixPQUFPLE9BQU87SUFDbEIsQ0FBQztDQUNKOzs7Ozs7Ozs7OztBQy9Ic0I7QUFDNkI7QUFFN0MsTUFBTSxXQUFZLFNBQVEsMENBQVU7SUFLdkMsWUFBNkIsT0FBbUI7UUFDNUMsS0FBSyxFQUFFO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFFNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUVuQyxNQUFNLFFBQVEsR0FBRyxvQ0FBUztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksOENBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDO0lBQ3JGLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDckIsQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO1FBQ3RDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUM5QixPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDdEUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNsRCxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ2hCLENBQUM7SUFFTyxhQUFhO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksMENBQVUsQ0FBQztZQUMzQixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsdUNBQVksQ0FBQztRQUNyQyxPQUFPLE9BQU87SUFDbEIsQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSwrQ0FBZSxDQUFDO1lBQzdCLFFBQVEsRUFBRTtnQkFDTixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixtQkFBbUIsRUFBRSxNQUFNO2FBQzlCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxNQUFNO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxNQUFNO2FBQ25CO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLCtCQUErQjtnQkFDL0Isb0VBQW9FO2FBQ3ZFO1NBQ0osQ0FBQyxDQUFDLElBQUk7UUFDUCxNQUFNLElBQUksR0FBRyxJQUFJLGlEQUFpQixDQUFDO1lBQy9CLFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsV0FBVzthQUMxQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsTUFBTTthQUNuQjtZQUNELE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7WUFDOUIsUUFBUSxFQUFFLENBQUMsa0NBQWtDLENBQUM7U0FDakQsQ0FBQyxDQUFDLElBQUk7UUFDUCxNQUFNLE9BQU8sR0FBRyxJQUFJLDBDQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDL0QsT0FBTyxPQUFPO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7QUN2RXNCO0FBQzhDO0FBRTlELE1BQU0sZ0JBQWlCLFNBQVEsMENBQVU7SUFPNUMsWUFBNkIsT0FBbUI7UUFDNUMsS0FBSyxFQUFFO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFIeEMsa0JBQWEsR0FBRyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFO1FBSW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLDhDQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsQ0FBQztJQUNyRixDQUFDO0lBRUQsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN2QixNQUFNLFFBQVEsR0FBRyx3REFBeUIsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLE1BQU07UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNyQixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJO1FBQ3JELE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUM5QixPQUFPLENBQUMsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDdEUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ2hCLENBQUM7SUFFTyxhQUFhO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksMENBQVUsQ0FBQztZQUMzQixRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsd0NBQWEsQ0FBQztRQUN0QyxPQUFPLE9BQU87SUFDbEIsQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSwrQ0FBZSxDQUFDO1lBQzdCLFFBQVEsRUFBRTtnQkFDTixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixtQkFBbUIsRUFBRSxNQUFNO2dCQUMzQixRQUFRLEVBQUUsT0FBTzthQUNwQjtZQUNELFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsTUFBTTthQUNuQjtZQUNELFFBQVEsRUFBRSxDQUFDLG9FQUFvRSxDQUFDO1NBQ25GLENBQUMsQ0FBQyxJQUFJO1FBQ1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxpREFBaUIsQ0FBQztZQUMvQixRQUFRLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLFdBQVc7YUFDMUI7WUFDRCxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO1lBQzlCLFFBQVEsRUFBRTtnQkFDTixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsMkRBQTJEO2dCQUMzRCxLQUFLO2dCQUNMLElBQUk7YUFDUDtTQUNKLENBQUMsQ0FBQyxJQUFJO1FBQ1AsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQy9ELE9BQU8sT0FBTztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7O0FDN0VzQjtBQUM4QztBQUU5RCxNQUFNLGdCQUFpQixTQUFRLDBDQUFVO0lBTTVDLFlBQTZCLE9BQW1CO1FBQzVDLEtBQUssRUFBRTtRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnhDLGtCQUFhLEdBQUcsQ0FBQztRQUlyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUM7SUFDckYsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDdkIsTUFBTSxRQUFRLEdBQUcsd0RBQXlCLENBQUMsS0FBSyxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFhLEVBQUU7UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ3hCLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDckIsQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsSUFBSTtRQUNyRCxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU87UUFDOUIsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDeEUsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNoQixDQUFDO0lBRU8sYUFBYTtRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLDBDQUFVLENBQUM7WUFDM0IsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHdDQUFhLENBQUM7UUFDdEMsT0FBTyxPQUFPO0lBQ2xCLENBQUM7SUFFTyxhQUFhO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksK0NBQWUsQ0FBQztZQUM3QixRQUFRLEVBQUU7Z0JBQ04sa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsbUJBQW1CLEVBQUUsTUFBTTtnQkFDM0IsUUFBUSxFQUFFLE9BQU87YUFDcEI7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLE1BQU07YUFDbkI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sc0NBQXNDO2dCQUN0QywwREFBMEQ7YUFDN0Q7U0FDSixDQUFDLENBQUMsSUFBSTtRQUNQLE1BQU0sSUFBSSxHQUFHLElBQUksaURBQWlCLENBQUM7WUFDL0IsUUFBUSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxXQUFXO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtZQUM5QixRQUFRLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMzQyxDQUFDLENBQUMsSUFBSTtRQUNQLE1BQU0sT0FBTyxHQUFHLElBQUksMENBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvRCxPQUFPLE9BQU87SUFDbEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RndCO0FBQ2U7QUFXbEI7QUFDMkQ7QUFFN0I7QUFDQztBQUVmO0FBQ2tCO0FBQ0w7QUFFcEMsU0FBUyxJQUFJO0lBQ3hCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsdURBQW9CLENBQUMsQ0FBQyxFQUFFLDJCQUEyQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDL0YsZ0RBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHdEQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUMzRDtJQUNELE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcseUNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDcEQsTUFBTSxHQUFHLEdBQUcsNEJBQTRCLFVBQVUsRUFBRTtJQUNwRCwwQ0FBZSxDQUFDLEdBQUcsRUFBRTtRQUNqQixZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksK0NBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVU7SUFDbkMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEIsMENBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDakIsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRSxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVM7SUFDakMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDZixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7UUFDcEIsYUFBYSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLGFBQWEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUNELE1BQU0sT0FBTyxHQUFHLG9EQUFzQixFQUFFO0lBQ3hDLE9BQU8sQ0FDSCxnRUFDSSxnRkFBdUIsRUFDdkIsOERBQ0ksa0RBQUcsSUFBSSxFQUFDLDhDQUE4QywrQkFBbUIsdURBRXpFLG9EQUFNLCtHQUVOLEVBQ0osOElBQ2dGLG9FQUFVLG9CQUN0RixxRUFBVyx1SEFFWCxFQUNKLHNIQUE0RCxFQUM1RCwyQ0FBQyxnREFBSSxJQUNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNqQixPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU87Z0JBQzdCLENBQUMsR0FDSCxFQUNGLDJDQUFDLHlDQUFVLElBQ1AsU0FBUyxFQUFFLGtEQUFZLEVBQ3ZCLElBQUksUUFDSixJQUFJLEVBQUUsR0FBRyxVQUFVLEVBQUUsRUFDckIsS0FBSyxFQUFFLFVBQVUsRUFDakIsUUFBUSxFQUFFLGFBQWEsRUFDdkIsR0FBRyxFQUFFLENBQUMsRUFDTixHQUFHLEVBQUUsR0FBRyxFQUNSLElBQUksRUFBRSxDQUFDLEdBQWUsRUFDMUIsb0RBQU0sRUFDTiw0Q0FBQyx3Q0FBUyxJQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsUUFBUSxhQUN4RSw0Q0FBQyx3Q0FBUyxJQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxTQUFTLFFBQUMsR0FBRyxFQUFDLEdBQUcsYUFDM0QsMkNBQUMsNENBQWEsSUFDVixLQUFLLEVBQUMsMENBQTBDLEVBQ2hELEtBQUssRUFBRSxTQUFTLEVBQ2hCLFFBQVEsRUFBRSxZQUFZLEdBQ3hCLEVBQ0YsMkNBQUMsaURBQWtCLElBQUMsSUFBSSxFQUFFLDRDQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBSSxFQUNoRSwyQ0FBQyxpREFBa0IsSUFBQyxJQUFJLEVBQUUsNkNBQWMsRUFBRSxPQUFPLEVBQUUsV0FBVyxHQUFJLElBQzFELEVBQ1osMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSx3Q0FBUyxzQkFFcEMsSUFDTCxFQUNaLG9EQUFNLEVBQ04sb0RBQU0sRUFDTixvRUFDSSwwR0FBc0QsRUFDdEQsOERBQU0sWUFBWSxFQUFFLEdBQU8sSUFDckIsSUFDUixDQUNUO0FBQ0wsQ0FBQztBQUVELFNBQVMsV0FBVztJQUNoQixNQUFNLGNBQWMsR0FBRyxzRUFBa0MsRUFBRTtJQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzdDLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakUsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBQ0QsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUNyQixDQUFDO0FBRUQsU0FBUyxZQUFZO0lBQ2pCLE1BQU0sS0FBSyxHQUFhLEVBQUU7SUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzNCLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUc7UUFDcEYsSUFBSSxJQUFJLEtBQUssR0FBRztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDekMsQ0FBQztZQUNGLE1BQU0sUUFBUSxHQUFHLHdEQUF5QixDQUFDLElBQUksQ0FBQztZQUNoRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUMzQixDQUFDIn0=