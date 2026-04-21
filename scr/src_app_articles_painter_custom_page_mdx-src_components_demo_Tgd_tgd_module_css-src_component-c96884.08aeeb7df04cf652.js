"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_custom_page_mdx-src_components_demo_Tgd_tgd_module_css-src_component-c96884"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
51812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _painter_stars_demo__rspack_import_4 = __webpack_require__(56414);





const FOCUS = { "Detail #1": "function init(ctx: TgdContext) {\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))\n    ctx.paint()\n    tgdLoadArrayBuffer(dataURL).then((buff) => {\n        if (!buff) return\n\n        const data = new Float32Array(buff)\n        const painter = new PainterStars(ctx, data)\n        ctx.add(\n            new TgdPainterState(ctx, {\n                blend: webglPresetBlend.alpha,\n                children: [new PainterNames(ctx), painter],\n            }),\n        )\n        ctx.paint()\n    })\n}", "Class PainterStars": "export class PainterStars extends TgdPainter {\n    // Number of stars\n    private readonly count: number\n    private readonly prg: TgdProgram\n    private readonly vao: TgdVertexArray\n\n    private readonly fixedCamera = new TgdCameraPerspective({\n        transfo: { distance: 0 },\n        near: 0.1,\n        far: 2.0,\n        fovy: Math.PI / 3,\n    })\n\n    /**\n     * @param data A sequence of 4 floats: longitude, latitude, brightness and color.\n     */\n    constructor(\n        private readonly context: TgdContext,\n        data: Float32Array,\n    ) {\n        super()\n        this.count = data.length >> 2\n        this.prg = new TgdProgram(context.gl, {\n            vert,\n            frag,\n        })\n        const dataset = new TgdDataset({\n            attStar: \"vec4\",\n        })\n        dataset.set(\"attStar\", data)\n        this.vao = new TgdVertexArray(context.gl, this.prg, [dataset])\n    }\n\n    paint() {\n        const { context, prg, vao, fixedCamera } = this\n        const { camera, gl } = context\n        fixedCamera.transfo.orientation = camera.transfo.orientation\n        prg.use()\n        prg.uniformMatrix4fv(\"uniModelViewMatrix\", fixedCamera.matrixModelView)\n        prg.uniformMatrix4fv(\"uniProjectionMatrix\", fixedCamera.matrixProjection)\n        prg.uniform1f(\"uniVegaSizeInPixels\", Math.max(context.width, context.height) * 0.05)\n        vao.bind()\n        gl.drawArrays(gl.POINTS, 0, this.count)\n    }\n\n    delete() {\n        this.prg.delete()\n        this.vao.delete()\n    }\n}", "Fragment shader \"./painter-stars.frag\"": "#version 300 es\n\nprecision mediump float;\n\nin vec4 varColor;\nin float varRadiusLimit;\n\nout vec4 FragColor;\n\nvoid main() {\n    vec2 point = 2.0 * gl_PointCoord.xy - vec2(1.0);\n    float radius = length(point);\n    if (radius > 1.0) discard;\n    \n    float alpha = varColor.a;\n    alpha *= 1.0 - pow(radius, 2.0);\n    float fade = 1.0 - smoothstep(varRadiusLimit, varRadiusLimit * 2.0, radius) * 0.9;\n    alpha *= fade;\n    FragColor = vec4(varColor.rgb, alpha);\n}", "Vertex shader \"./painter-stars.vert\"": "#version 300 es\n\nprecision mediump float;\n\nuniform mat4 uniModelViewMatrix;\nuniform mat4 uniProjectionMatrix;\nuniform float uniVegaSizeInPixels;\n\nin vec4 attStar;\n\nout vec4 varColor;\nout float varRadiusLimit;\n\nvoid main() {\n    float longitude = attStar.x;\n    float latitude = attStar.y;\n    float brightness = attStar.z;\n    float temperature = attStar.w;\n    \n    vec3 color = mix(\n        vec3(.5, .1, .1), \n        vec3(.1, .2, .5), \n        temperature\n    ) * (2.0 + brightness * 5.0);\n    varColor = vec4(color, 0.1 + 0.9 * brightness);\n\n    float r = cos(latitude);\n    float z = sin(latitude);\n    float x = cos(longitude) * r;\n    float y = sin(longitude) * r;\n    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(x, y, z, 1.0);\n    gl_Position.z = gl_Position.w;\n    \n    gl_PointSize = max(uniVegaSizeInPixels * brightness, 1.0);\n    float radiusLimit = clamp(sqrt(gl_PointSize), 0.2, 10.0);\n    varRadiusLimit = radiusLimit / gl_PointSize;\n}\n" };
const FULL = "import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdDataset,\n    tgdLoadArrayBuffer,\n    TgdPainter,\n    TgdPainterClear,\n    TgdPainterState,\n    TgdProgram,\n    TgdVertexArray,\n    webglPresetBlend,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\nimport dataURL from \"../stars.dat\"\nimport { PainterNames } from \"./painter-names\"\nimport frag from \"./painter-stars.frag\"\nimport vert from \"./painter-stars.vert\"\n\nfunction init(ctx: TgdContext) {\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0, 0, 0, 1] }))\n    ctx.paint()\n    tgdLoadArrayBuffer(dataURL).then((buff) => {\n        if (!buff) return\n\n        const data = new Float32Array(buff)\n        const painter = new PainterStars(ctx, data)\n        ctx.add(\n            new TgdPainterState(ctx, {\n                blend: webglPresetBlend.alpha,\n                children: [new PainterNames(ctx), painter],\n            }),\n        )\n        ctx.paint()\n    })\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nexport class PainterStars extends TgdPainter {\n    // Number of stars\n    private readonly count: number\n    private readonly prg: TgdProgram\n    private readonly vao: TgdVertexArray\n\n    private readonly fixedCamera = new TgdCameraPerspective({\n        transfo: { distance: 0 },\n        near: 0.1,\n        far: 2.0,\n        fovy: Math.PI / 3,\n    })\n\n    /**\n     * @param data A sequence of 4 floats: longitude, latitude, brightness and color.\n     */\n    constructor(\n        private readonly context: TgdContext,\n        data: Float32Array,\n    ) {\n        super()\n        this.count = data.length >> 2\n        this.prg = new TgdProgram(context.gl, {\n            vert,\n            frag,\n        })\n        const dataset = new TgdDataset({\n            attStar: \"vec4\",\n        })\n        dataset.set(\"attStar\", data)\n        this.vao = new TgdVertexArray(context.gl, this.prg, [dataset])\n    }\n\n    paint() {\n        const { context, prg, vao, fixedCamera } = this\n        const { camera, gl } = context\n        fixedCamera.transfo.orientation = camera.transfo.orientation\n        prg.use()\n        prg.uniformMatrix4fv(\"uniModelViewMatrix\", fixedCamera.matrixModelView)\n        prg.uniformMatrix4fv(\"uniProjectionMatrix\", fixedCamera.matrixProjection)\n        prg.uniform1f(\"uniVegaSizeInPixels\", Math.max(context.width, context.height) * 0.05)\n        vao.bind()\n        gl.drawArrays(gl.POINTS, 0, this.count)\n    }\n\n    delete() {\n        this.prg.delete()\n        this.vao.delete()\n    }\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_painter_stars_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
74594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterNames: () => (PainterNames)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _tolokoban_type_guards__rspack_import_1 = __webpack_require__(2197);
/* import */ var _names_json__rspack_import_2 = __webpack_require__(91681);
/* import */ var _painter_names_frag__rspack_import_3 = __webpack_require__(54702);
/* import */ var _painter_names_vert__rspack_import_4 = __webpack_require__(65999);





class PainterNames extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    context;
    prg;
    vao;
    texture;
    count;
    fixedCamera = new _tolokoban_tgd__rspack_import_0.TgdCameraPerspective({
        transfo: { distance: 0, position: [0, 0, 0] },
        near: 0.1,
        far: 2.0,
        fovy: Math.PI / 3,
    });
    constructor(context) {
        super();
        this.context = context;
        const { canvas, attLatLng, attUV } = makeCanvasForNames();
        this.count = attLatLng.length >> 1;
        this.texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(context)
            .setParams({
            magFilter: "LINEAR",
            minFilter: "LINEAR_MIPMAP_LINEAR",
        })
            .loadBitmap(canvas)
            .generateMipmap();
        const dsObject = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attCorner: "vec2",
        });
        dsObject.set("attCorner", new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]));
        const dsInstance = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attLatLng: "vec2",
            attUV: "vec3",
        }, { divisor: 1 });
        dsInstance.set("attLatLng", new Float32Array(attLatLng));
        dsInstance.set("attUV", new Float32Array(attUV));
        const prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, { vert: _painter_names_vert__rspack_import_4, frag: _painter_names_frag__rspack_import_3 });
        const vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, prg, [dsObject, dsInstance]);
        this.prg = prg;
        this.vao = vao;
    }
    delete() {
        this.vao.delete();
        this.prg.delete();
        this.texture.delete();
    }
    paint() {
        const { context, prg, vao, texture, fixedCamera } = this;
        const { camera, gl } = context;
        fixedCamera.transfo.orientation = camera.transfo.orientation;
        prg.use();
        prg.uniform1f("uniAspect", context.width / context.height);
        prg.uniform1f("uniAspectInverse", context.height / context.width);
        prg.uniformMatrix4fv("uniModelViewMatrix", fixedCamera.matrixModelView);
        prg.uniformMatrix4fv("uniProjectionMatrix", fixedCamera.matrixProjection);
        texture.activate(0, prg, "uniTexture");
        vao.bind();
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, this.count);
    }
}
function makeCanvasForNames() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context)
        throw new Error("Unable to get Context 2D!");
    (0,_tolokoban_type_guards__rspack_import_1.assertType)(_names_json__rspack_import_2, ["map", ["array", "number", { min: 2, max: 2 }]]);
    const attLatLng = [];
    const attUV = [];
    const w = 2048;
    const h = 1024;
    const space = 8;
    canvas.width = w;
    canvas.height = h;
    context.clearRect(0, 0, w, h);
    context.font = "30px sans-serif";
    context.textBaseline = "middle";
    context.fillStyle = "#0f0";
    let x = 1;
    let y = 16;
    for (const name of Object.keys(_names_json__rspack_import_2)) {
        const measure = context.measureText(name);
        if (x + measure.width > w - space) {
            x = 1;
            y += 32;
        }
        const coords = _names_json__rspack_import_2[name];
        if (!coords)
            continue;
        attLatLng.push(...coords);
        attUV.push(x / w, (y - 16) / h, (measure.width + space / 2) / w);
        context.fillText(name, x, y);
        x += measure.width + space;
    }
    return { canvas, attLatLng, attUV };
}


},
56414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterStars: () => (PainterStars),
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _stars_dat__rspack_import_3 = __webpack_require__(46297);
/* import */ var _painter_names__rspack_import_4 = __webpack_require__(74594);
/* import */ var _painter_stars_frag__rspack_import_5 = __webpack_require__(4383);
/* import */ var _painter_stars_vert__rspack_import_6 = __webpack_require__(29814);







function init(ctx) {
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000,
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, { color: [0, 0, 0, 1] }));
    ctx.paint();
    (0,_tolokoban_tgd__rspack_import_1.tgdLoadArrayBuffer)(_stars_dat__rspack_import_3).then((buff) => {
        if (!buff)
            return;
        const data = new Float32Array(buff);
        const painter = new PainterStars(ctx, data);
        ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
            blend: _tolokoban_tgd__rspack_import_1.webglPresetBlend.alpha,
            children: [new _painter_names__rspack_import_4.PainterNames(ctx), painter],
        }));
        ctx.paint();
    });
}
function Demo() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init });
}
class PainterStars extends _tolokoban_tgd__rspack_import_1.TgdPainter {
    context;
    count;
    prg;
    vao;
    fixedCamera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: { distance: 0 },
        near: 0.1,
        far: 2.0,
        fovy: Math.PI / 3,
    });
    constructor(context, data) {
        super();
        this.context = context;
        this.count = data.length >> 2;
        this.prg = new _tolokoban_tgd__rspack_import_1.TgdProgram(context.gl, {
            vert: _painter_stars_vert__rspack_import_6,
            frag: _painter_stars_frag__rspack_import_5,
        });
        const dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
            attStar: "vec4",
        });
        dataset.set("attStar", data);
        this.vao = new _tolokoban_tgd__rspack_import_1.TgdVertexArray(context.gl, this.prg, [dataset]);
    }
    paint() {
        const { context, prg, vao, fixedCamera } = this;
        const { camera, gl } = context;
        fixedCamera.transfo.orientation = camera.transfo.orientation;
        prg.use();
        prg.uniformMatrix4fv("uniModelViewMatrix", fixedCamera.matrixModelView);
        prg.uniformMatrix4fv("uniProjectionMatrix", fixedCamera.matrixProjection);
        prg.uniform1f("uniVegaSizeInPixels", Math.max(context.width, context.height) * 0.05);
        vao.bind();
        gl.drawArrays(gl.POINTS, 0, this.count);
    }
    delete() {
        this.prg.delete();
        this.vao.delete();
    }
}


},
5253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(7439);





function CodeViewerView(props) {
    const { value } = props;
    if (typeof value === "string") {
        const singleProps = {
            ...props,
            value,
        };
        return (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { ...singleProps });
    }
    const multiProps = {
        ...props,
        value,
    };
    return (0,react_jsx_runtime__rspack_import_0.jsx)(MultiCodeViewerView, { ...multiProps });
}
function SingleCodeViewerView(props) {
    const refTimeout = react__rspack_import_2.useRef(0);
    const [popup, setPopup] = react__rspack_import_2.useState(false);
    const refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current;
            if (!code)
                return;
            const html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [props.value, props.language, refCode.current]);
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000);
        });
    };
    const handlePopupClick = () => {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: getClassNames(props), onDoubleClick: handleDoubleClick, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("code", { ref: refCode, className: `language-${props.language}` }) }), popup && ((0,react_jsx_runtime__rspack_import_0.jsx)("button", { className: _CodeViewer_module_css__rspack_import_3["default"].popup, onClick: handlePopupClick, type: "button", children: (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "This code has been copied to the clipboard!" }) }))] }));
}
function getClassNames(props) {
    const classNames = [_CodeViewer_module_css__rspack_import_3["default"].CodeViewer];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    const captions = Object.keys(props.value);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, { children: captions.map((caption, index) => ((0,react_jsx_runtime__rspack_import_0.jsxs)("details", { open: false, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: caption }), (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { value: props.value[caption], language: props.language })] }, caption))) }));
}


},
7439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
/* import */ var prismjs__rspack_import_0 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_0);
/* import */ var prismjs_components_prism_javascript__rspack_import_1 = __webpack_require__(25723);
/* import */ var prismjs_components_prism_javascript__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__rspack_import_1);
/* import */ var prismjs_components_prism_jsx__rspack_import_2 = __webpack_require__(65903);
/* import */ var prismjs_components_prism_jsx__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__rspack_import_2);
/* import */ var prismjs_components_prism_typescript__rspack_import_3 = __webpack_require__(59587);
/* import */ var prismjs_components_prism_typescript__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__rspack_import_3);
/* import */ var prismjs_components_prism_tsx__rspack_import_4 = __webpack_require__(82769);
/* import */ var prismjs_components_prism_tsx__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__rspack_import_4);
/* import */ var prismjs_components_prism_c__rspack_import_5 = __webpack_require__(50271);
/* import */ var prismjs_components_prism_c__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__rspack_import_5);
/* import */ var prismjs_components_prism_glsl__rspack_import_6 = __webpack_require__(73980);
/* import */ var prismjs_components_prism_glsl__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__rspack_import_6);







function getGrammarForLanguage(language) {
    switch (language) {
        case "ts":
            return (prismjs__rspack_import_0_default().languages.typescript);
        case "tsx":
            return (prismjs__rspack_import_0_default().languages.tsx);
        case "frag":
        case "vert":
            return (prismjs__rspack_import_0_default().languages.glsl);
        default:
            return GLSL;
    }
}
const TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void",
];
const KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile",
];
const GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID",
];
const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16",
];
const GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true,
        },
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true,
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS),
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`),
        lookbehind: false,
        greedy: true,
    };
}


},
99002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(5253);



},
54702(module) {
module.exports = "#version 300 es\n\nprecision mediump float;\n\nuniform sampler2D uniTexture;\n\nin vec2 varUV;\nin float varAlpha;\n\nout vec4 FragColor;\n\nvoid main() {\n    FragColor = texture(uniTexture, varUV);\n    FragColor.a *= varAlpha;\n}";

},
65999(module) {
module.exports = "#version 300 es\n\nprecision mediump float;\n\nuniform float uniAspect;\nuniform float uniAspectInverse;\nuniform mat4 uniModelViewMatrix;\nuniform mat4 uniProjectionMatrix;\n\nin vec2 attCorner;\nin vec2 attLatLng;\nin vec3 attUV;\n\nout vec2 varUV;\nout float varAlpha;\n\nconst float H = 1.0 / 32.0;\n\nvoid main() {\n    varUV = attUV.xy + attCorner * vec2(attUV.z, H);\n    float longitude = attLatLng.x;\n    float latitude = attLatLng.y;\n    float r = cos(latitude);\n    float z = sin(latitude);\n    float x = cos(longitude) * r;\n    float y = sin(longitude) * r;\n    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(x, y, z, 1.0);\n    vec2 point = gl_Position.xy / max(1.0, gl_Position.w);\n    float size = pow(dot(point, point), 1.5);\n    varAlpha = size;\n    size *= max(uniAspect, uniAspectInverse) * 5.0;\n    gl_Position.xy += (attCorner * size * vec2(attUV.z, H) * gl_Position.w) * vec2(uniAspectInverse, -1.0);\n    gl_Position.z = gl_Position.w;\n}\n";

},
4383(module) {
module.exports = "#version 300 es\n\nprecision mediump float;\n\nin vec4 varColor;\nin float varRadiusLimit;\n\nout vec4 FragColor;\n\nvoid main() {\n    vec2 point = 2.0 * gl_PointCoord.xy - vec2(1.0);\n    float radius = length(point);\n    if (radius > 1.0) discard;\n    \n    float alpha = varColor.a;\n    alpha *= 1.0 - pow(radius, 2.0);\n    float fade = 1.0 - smoothstep(varRadiusLimit, varRadiusLimit * 2.0, radius) * 0.9;\n    alpha *= fade;\n    FragColor = vec4(varColor.rgb, alpha);\n}";

},
29814(module) {
module.exports = "#version 300 es\n\nprecision mediump float;\n\nuniform mat4 uniModelViewMatrix;\nuniform mat4 uniProjectionMatrix;\nuniform float uniVegaSizeInPixels;\n\nin vec4 attStar;\n\nout vec4 varColor;\nout float varRadiusLimit;\n\nvoid main() {\n    float longitude = attStar.x;\n    float latitude = attStar.y;\n    float brightness = attStar.z;\n    float temperature = attStar.w;\n    \n    vec3 color = mix(\n        vec3(.5, .1, .1), \n        vec3(.1, .2, .5), \n        temperature\n    ) * (2.0 + brightness * 5.0);\n    varColor = vec4(color, 0.1 + 0.9 * brightness);\n\n    float r = cos(latitude);\n    float z = sin(latitude);\n    float x = cos(longitude) * r;\n    float y = sin(longitude) * r;\n    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(x, y, z, 1.0);\n    gl_Position.z = gl_Position.w;\n    \n    gl_PointSize = max(uniVegaSizeInPixels * brightness, 1.0);\n    float radiusLimit = clamp(sqrt(gl_PointSize), 0.2, 10.0);\n    varRadiusLimit = radiusLimit / gl_PointSize;\n}\n";

},
46297(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/stars.55c2e41662a15611.dat";

},
35924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _painter_stars_demo__rspack_import_1 = __webpack_require__(51812);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}



function _createMdxContent(props) {
    var _components = _object_spread({
        code: "code",
        h1: "h1",
        h2: "h2",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Create a custom painter"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_painter_stars_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "How to do it"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's see how to create a custom painter by studying an example."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The Painter should paint the stars visible from earth with naked eyes. We use\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "gl.POINTS"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    " of different colors, size and brightness. The attribute is a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "vec4"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 12,
                        columnNumber: 74
                    }, this),
                    "\nvector with:"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "x"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": longitude (from 0.0 to 2 PI)"
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "y"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            ": latitude (from -PI / 2 to +PI / 2)"
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "z"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            ": brightness (from 0.02 to 2.0)"
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "w"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 18,
                                columnNumber: 3
                            }, this),
                            ": color (from 0.0 to 1.0, 0.0 is red and cold and 1.0 is blue and hot)"
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We start by creating a class that extends ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainter"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 20,
                        columnNumber: 43
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "1",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "import"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " { ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdPainter"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ", ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " } ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "from"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-string",
                                    children: "\"@tolokoban/tgd\""
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "3",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "export"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "class"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "PainterStars"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "extends"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_ inherited__",
                                    children: "TgdPainter"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " {"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "4",
                            children: [
                                "    ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-comment",
                                    children: "// Number of stars"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "5",
                            children: [
                                "    ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "private"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "readonly"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "count"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-built_in",
                                    children: "number"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "6"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "7",
                            children: [
                                "    ",
                                "/**"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "8",
                            children: "     *"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "9",
                            children: [
                                "     * ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-comment hljs-doctag",
                                    children: "@param"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " data A sequence of 4 floats: longitude, latitude, brightness and color."
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "10",
                            children: "     */"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "11",
                            children: [
                                "    ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title function_",
                                    children: "constructor"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "("
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "12",
                            children: [
                                "        ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-keyword",
                                    children: "private"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-keyword",
                                    children: "readonly"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ","
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "13",
                            children: [
                                "        ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-attr",
                                    children: "data"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-title class_",
                                    children: "Float32Array"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ","
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "14",
                            children: [
                                "    ",
                                ") {"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "15",
                            children: [
                                "        ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-variable language_",
                                    children: "super"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "()"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "16",
                            children: [
                                "        ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-variable language_",
                                    children: "this"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ".",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-property",
                                    children: "count"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " = data.",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-property",
                                    children: "length"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " / ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-number",
                                    children: "4"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "17",
                            children: "    }"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "18"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "19",
                            children: [
                                "    ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title function_",
                                    children: "paint"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-attr",
                                    children: "time"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-built_in",
                                    children: "number"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ") {}"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "20"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "21",
                            children: [
                                "    ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title function_",
                                    children: "delete"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "(",
                                ") {}"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "22",
                            children: "}"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We need a vertex shader (",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "painter-stars.vert"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 47,
                        columnNumber: 26
                    }, this),
                    "):"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 47,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-glsl",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-meta",
                            children: "#version 300 es"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "precision"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "mediump"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "uniform"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "mat4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " uniModelViewMatrix;\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "uniform"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "mat4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " uniProjectionMatrix;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "in"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " attStar;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "out"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " varColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "void"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " main() {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " longitude = attStar.x;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " latitude = attStar.y;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " brightness = attStar.z;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " temperature = attStar.w;\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " color = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "mix"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "),\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "),\n        temperature\n    ) * (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " + brightness);\n    varColor = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(color, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " r = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "cos"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(latitude);\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " z = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "sin"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(latitude);\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " x = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "cos"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(longitude) * r;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " y = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "sin"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(longitude) * r;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = uniProjectionMatrix\n        * uniModelViewMatrix\n        * ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(x, y, z, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".z = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".w;\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_PointSize"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "50.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " * brightness;\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 49,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 49,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "And a fragment one:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 87,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-glsl",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-meta",
                            children: "#version 300 es"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "precision"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "mediump"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "in"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " varColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "out"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " FragColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "void"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " main() {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " point = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "2.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " * ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_PointCoord"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".xy - ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "dot"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(point, point) > ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "discard"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n    FragColor = varColor;\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 89,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 89,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's import the code of the shaders:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 106,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " vert ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"./painter-stars.vert\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " frag ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"./painter-stars.frag\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 108,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 108,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "And, in the constructor, we create the WebGL Program like this:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 113,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "programs"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "create"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(\n    {\n        vert,\n        frag,\n    },\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"PainterStars\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ",\n)\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 115,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 115,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Now we need a VertexArrayObject:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 125,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " dataset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdDataset"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "({\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "attStar"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"vec4\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ",\n})\ndataset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "set"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"attStar\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", data)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "vao"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createVAO"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", [dataset])\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 127,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 127,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We are now ready to implement the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "paint()"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 135,
                        columnNumber: 35
                    }, this),
                    " method:"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 135,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " { context, prg, vao } = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " { camera, gl } = context\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "use"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "uniformMatrix4fv"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"uniModelViewMatrix\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", camera.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "matrixModelView"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "uniformMatrix4fv"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"uniProjectionMatrix\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", camera.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "matrixProjection"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    vao.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "bind"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n    gl.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "drawArrays"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(gl.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "POINTS"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "count"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 137,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 137,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To finish properly, we need to implement the clean up function:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 149,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "context"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "programs"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "vao"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 151,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 151,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
    }, this) : _createMdxContent(props);
}


},
91681(module) {
module.exports = JSON.parse('{"Alpheratz, Sirrah":[-0.5731661263549379,1.9500563732532645],"Caph":[-0.05707226654021458,2.051110936943736],"Algenib":[-0.8147196948309531,1.909913800457395],"Ankaa":[-1.291194580625405,5.585402672232253],"Fulu":[-0.15550883635269477,2.108008670558751],"Schedar":[-0.10995574287564276,2.119178777771515],"Diphda":[-1.4081316405090252,1.9427259903948884],"Achird":[-0.08813912722571364,2.139773662945048],"Castula":[-0.06422811647339133,2.157226955464991],"MIRACH":[-0.47298422729046335,2.218313479284793],"Wurren":[-1.0770426814057008,5.198114111214712],"Revati":[-0.9578366934944881,2.313608456443683],"Adhil":[-0.29670597283903605,2.244144352214309],"Ruchbah":[-4.1015237421866746e-2,2.2198842756115877],"Lodestar, North Star, Polaris":[0.4618141200776996,2.1516419018586097],"Alpherg":[-0.8103563717009672,2.391275608157431],"Titawin":[-0.3605850234620285,2.303834612632515],"Nembus":[-0.23614304779483278,2.2830651945337825],"Achernar":[-1.0260790672474662,5.0761155965003075],"Torcular":[-0.8976228343006837,2.523920631309],"Baten Kaitos":[-1.1876965559821413,2.8951521632081936],"Segin":[2.8797932657906436e-2,2.2661355007894377],"Mothallah":[-0.5480333851262195,2.419724474964938],"Sheratan":[-0.69254664719135,2.4825563280367344],"Almach":[-0.32393310917014756,2.390402943531434],"Hamal":[-0.6318091892219474,2.523222499608202],"Mira, Mira A":[-1.0119419003063121,2.9277898202204877],"iot Cas AB":[0.10978120995044333,2.305929007734908],"Kaffaljidhma":[-0.8618435846347999,2.9482101724688214],"Lilii Borea":[-0.47298422729046335,2.6427775533698137],"Miram":[-0.05550147021341968,2.42845112122491],"Bharani":[-0.4993386989955777,2.6700046897009253],"Angetenar":[-1.0836749325632793,3.6093408931242736],"Azha":[-0.9653416092780637,3.266383695107388],"Gorgonea Secunda":[-0.2953097094374406,2.5837854246524055],"Menkar":[-0.7956956059842148,3.025004659556572],"Gorgonea Tertia":[-0.29688050576423547,2.611012560983517],"Algol, Algol A, Algol B, Algol C":[-0.26005405854715513,2.600191519621152],"Misam":[-0.19949113350295186,2.5677283955340577],"Gorgonea Quarta":[-0.27454029133870805,2.622008135271081],"Botein":[-0.5609488215909775,2.8379053637427796],"Dalim":[-1.0304423903774522,3.922627493857256],"Zibal":[-0.8955284391982905,3.343701780970737],"Mirfak":[-0.10227629416686772,2.5581290846480886],"Ran":[-0.8384561726580759,3.418401872956094],"Atik":[-0.30962140930379406,2.7988099884981072],"Rana":[-0.8028514559173916,3.4574972482007666],"Celaeno, Celeno":[-0.4141666314982544,2.8979446900113848],"Electra":[-0.4162610266006476,2.900388150964177],"Taygeta, Taygete":[-0.4106759729942658,2.896897492460188],"Maia":[-0.4103269071438669,2.9002136180389773],"Asterope":[-0.4077089132658754,2.898119222936584],"Merope":[-0.4145156973486533,2.9071949350469546],"MOAI 1":[0.12269664641520137,2.4687682269459787],"Alcyone":[-0.4092797095926703,2.908940264298949],"Atlas":[-0.4054399852382828,2.9148743837557296],"Pleione":[-0.4043927876870862,2.914001719129733],"Menkhib, Menkib":[-0.2288126649364566,2.7989845214233062],"Zaurak":[-0.7761479183618784,3.5807174933915666],"Beid":[-0.6700318998406232,3.4787902650750975],"Keid":[-0.6632251157578453,3.5032248746030183],"Prima Hyadum":[-0.4157374278250493,3.1255356244714454],"Secunda Hyadum":[-0.38414696836395196,3.106860601475106],"Beemim":[-0.7719591281570919,4.104490801915064],"Ain":[-0.34766958699727046,3.099704751541929],"Chamukuy":[-0.38414696836395196,3.1477013059717733],"Aldebaran":[-0.3534291735288517,3.158522347334138],"Theemin":[-0.7209955139988575,4.0318851050321],"Sceptrum":[-0.6263986685407649,3.688229775314417],"Tabit":[-0.4026474584350918,3.341432852943144],"Hassaleh":[-0.1075122819228507,2.9773571709771267],"Almaaz":[2.0594885173533087e-2,2.841221489321569],"Saclateni":[-7.504915783575617e-3,2.880142331641043],"Mago":[0.2988003679414292,2.4804619329343414],"Haedus":[0.00471238898038469,2.8859019181726238],"Cursa":[-0.4417428336797648,3.5838590860451562],"Capella":[0.07976154681614087,2.837556297892381],"Rigel":[-0.4406956361285682,3.6519269268729353],"Bellatrix":[-0.27838001569309556,3.4370768959524334],"Elnath":[-0.06527531402458793,3.1065115356247075],"Nihal":[-0.47472955654245763,3.9018580757585233],"Mintaka":[-0.30962140930379406,3.5580282131156404],"Arneb":[-0.43877577395137446,3.856304982281471],"lambda Ori X-5":[-0.21450096507010308,3.41037335839692],"lambda Ori X-3":[-0.20943951023931956,3.40426470601494],"Hatysa":[-0.34173546754048967,3.6568138487785196],"Alnilam":[-0.3008947630438224,3.5815901580175638],"Tianguan":[-0.09843656981248018,3.2409018880282705],"Phact":[-0.5037020221255635,4.168020786687658],"Saiph":[-0.32288591161895097,3.743905778453036],"Wazn":[-0.47228609558966556,4.212352149688314],"Betelgeuse":[-0.15638150097869194,3.4869933125594708],"Gore\'s Nova":[-0.04345869837465881,3.2937853643636985],"Menkalinan":[0.1816887751326097,2.9227283653897045],"Mahasim":[0.11746065865921838,3.042807017926914],"Elkurud":[-0.42341687653382437,4.257556177314967],"Propus":[0.0439822971502571,3.2960542923912914],"Furud":[-0.3391174736624982,4.145506039336932],"Tejat":[0.07278022980816354,3.311238656883642],"Mirzam":[-0.24905848425959082,3.9454913070583815],"Canopus":[-0.4413937678293659,4.558974539134388],"23 H. Cam":[0.46094145545170245,2.349038640259168],"Alhena":[0.07766715171374766,3.4342843691492426],"Plaskett star, Plaskett\'s star":[-5.4105206811824215e-3,3.5931093310807265],"Mebsuta":[0.16807520696705394,3.308097064230052],"Alzirr":[0.07853981633974483,3.503573940453417],"Dog Star, Sirius, Sirius A":[-0.15498523757709648,3.9657371263815158],"Altaleban, Taleban":[-0.36407568196601714,4.540648581988449],"51 H. Cep":[0.48380526865282814,2.202954581867243],"Adhara":[-0.19774580425095753,4.185823145058],"Citala":[-8.377580409572781e-3,3.8173841399619977],"Unurgunite":[-0.17924531417981765,4.174303971994838],"Mekbuda":[0.20769418098732523,3.4164820107789002],"Muliphein":[-0.07696902001294993,3.983714017677057],"Wezen":[-0.14433872913993104,4.16121400260488],"Ahadi":[-0.19687313962496036,4.34604437039108],"Wasat":[0.277332818141899,3.420496268058487],"Aludra":[-0.11327186845443199,4.234517831188643],"Gomeisa":[0.2038544566329377,3.6568138487785196],"Hadir":[-0.20786871391252465,4.463505029050299],"Castor B":[0.3923500158483253,3.271445149938171],"Castor A":[0.3923500158483253,3.271445149938171],"Jishui":[0.42289327775822605,3.2283355174139112],"Procyon, Procyon A":[0.22741640153486112,3.7295940785866826],"Pollux":[0.40858157789187255,3.3550464211086997],"Asmidiske, Azmidi, Azmidiske":[9.948376736367677e-3,4.214272011865508],"Naos":[-0.08220500776893293,4.467693819255085],"Tureis":[0.07679448708775051,4.243768076224212],"Regor":[-0.13421581947836395,4.586725274241099],"Altarf, Tarf":[0.40229839258469297,3.739367922397851],"Piautos":[0.5164429256651221,3.4789647980002973],"Alsciaukat":[0.5993460651348528,3.096039560112741],"Muscida":[0.618370153981591,2.7221900343355556],"Minchir":[0.4417428336797648,3.8870227771165715],"Meleph":[0.56635934227216,3.5964254566595155],"Asellus Borealis":[0.5886995566976873,3.5634387337968225],"Asellus Australis":[0.5742133239061344,3.6306339099986045],"Ashlesha":[0.4979424355939822,3.8522907250018843],"Alsephina":[-0.12863076587198208,4.748691828826171],"Copernicus":[0.6581636609270617,3.434633434999641],"Talitha":[0.7127924665144842,2.9934142000954744],"Acubens":[0.5850343652684993,3.7788123634929227],"Alkaphrah":[0.7265805676052395,3.012961887717811],"Nahn":[0.6920230484157517,3.592934798155527],"Suhail":[0.04921828490624009,4.64152861275372],"Miaplacidus":[-0.2515019452123829,4.991292594853384],"Aspidiske":[-0.1223475805648025,4.86004383510341],"HD 80951AB":[-0.30700341542580256,5.065643620988342],"Intercrus":[0.8040731863937877,3.040712622824521],"Alphard":[0.5070181477043527,4.214795610641106],"Alterf":[0.7829547024446563,3.6074210309470796],"Ukdah":[0.6279694648675597,4.12752914804139],"Subra":[0.7340854833888151,3.920009499979264],"Zhang":[0.5138249317871306,4.384790679785354],"Rasalas":[0.8770279491271507,3.5613443386944295],"Felis":[0.4728096943652639,4.454778382790327],"Regulus":[0.8541641359260248,3.9519490252907605],"Adhafera":[0.9590584239708841,3.669205686467679],"Tania Borealis":[0.9615018849236762,3.0695105554824273],"Tania Australis":[0.9836675664240041,3.1049407392979123],"Praecipua":[1.112298332295986,3.3161255787892263],"Chalawan":[1.1060151469888067,3.0679397591556326],"Alkes":[0.6478662183402951,4.695982885415943],"Merak":[0.9564404300928926,2.603507645199941],"Dubhe":[0.8902924514423075,2.4932028364738996],"Zosma":[1.1664035391078105,3.9133772488216856],"Chertan":[1.1273081638631375,4.107981460419054],"Alula Borealis":[1.2056734472776829,3.3288664823287846],"Giausar":[0.8063421144213803,2.3209388393020594],"Formosa":[1.2447688225223557,4.010766621082969],"Alkafzah, Taiyangshou":[1.1470303844106733,2.623578931597876],"Denebola":[1.2358676433371847,4.3746677701237875],"Zavijava":[1.0602875205865552,4.721115626644662],"Phecda":[1.0712830948741194,2.458121718508814],"Tonatiuh":[0.6967354373961364,2.204699911119237],"Alchiba":[0.6478662183402951,5.072974003846719],"Minkar":[0.6852162643329738,5.071752273370322],"Imai":[0.0661479786505851,5.205095428222689],"Megrez":[1.0370746415350307,2.3137829893688826],"Gienah":[0.7766715171374766,5.0787335903783],"Zaniah":[1.0679669692953302,4.99862297771176],"Ginan":[3.9269908169872414e-2,5.222548720742632],"** STFA 21":[1.4803882715415901,3.930830541341629],"Algorab":[0.8037241205433887,5.157098873792846],"Gacrux":[0.09861110273767963,5.238954815711379],"Chara":[1.314581992602129,2.3753931119642826],"Kraz":[0.686088928958971,5.198812242915509],"Porrima":[1.0704104302481223,5.198463177065111],"La Superba":[1.2505284090539373,2.2069688391468296],"Mimosa":[0.05550147021341968,5.278922855582048],"Tianyi":[0.878424212528746,2.1560052249885953],"Alioth":[1.067443370519732,2.132443280086672],"Minelauva":[1.1562806294462433,5.332504463618275],"Cor Caroli":[1.3747958517959333,2.0645499721840928],"Taiyi":[0.9019861574306695,2.1338395434882673],"Vindemiatrix":[1.2850859282434248,5.451361385679088],"Mizar A":[1.074773753378108,1.9741419169307861],"Mizar B":[1.074773753378108,1.9741419169307861],"Spica":[0.8873253917139172,5.517160298479276],"Alcor":[1.0728538912009145,1.9682077974740053],"Heze":[1.0540043352793755,5.676683392111557],"HD 119361AB":[0.34487706019407954,5.46637121724624],"Alcaid, Alkaid":[1.140049067402696,1.7573720238330903],"Muphrid":[1.2746139527314588,0.09250245035569947],"Agena, Hadar":[0.02181661564992912,5.441413008942721],"Menkent":[0.42027528388023455,5.575628828421085],"Thuban":[0.8894197868163104,1.928937889304133],"Kang":[0.8325220532012952,5.820847588326289],"Syrma":[0.8913396489935042,5.894849548610848],"Arcturus":[1.2061970460532812,0.2642428487519415],"Xuange":[1.1287044272647329,1.5179128504594683],"Khambalia":[0.7723081940074908,5.818927726149094],"Elgafar":[0.9164723902222224,6.025225643734825],"Seginus":[1.154884366044648,1.173908454891386],"Rigel Kentaurus, Rigil Kentaurus":[-1.2391837689159739e-2,5.511400711947694],"Toliman":[-1.2391837689159739e-2,5.511400711947694],"Izar":[1.1306242894419267,0.6873106594353671],"Zubenelgenubi":[0.6633996486830446,5.939879043312302],"Merga":[1.0466739524209994,1.3959143357450647],"Kochab":[0.7068583470577035,1.9661134023716123],"Nekkar":[1.0478956828973955,1.1801916401985657],"Brachium":[0.4995132319207771,5.885599303575279],"I Boo*":[0.9958848711879644,1.4025465869026432],"Zubeneschamali":[0.6846926655573754,6.1439080328704385],"Pherkad Minor":[0.7162831250184728,1.8975219627682351],"Alkalurops":[0.982794901798007,1.0540043352793755],"Pherkad":[0.7127924665144842,1.8929841067130497],"Edasich":[0.8487536152448425,1.6400858980990713],"Nusakan":[0.9705775970340467,0.7956956059842148],"Zubenelhakrabi":[0.5619960191421741,6.135006853685268],"Alphecca":[0.938463538797351,0.7307693578100257],"Unukalhai":[0.7693411342791004,0.24783675378319478],"Chow":[0.8354891129296855,0.4534365396681268],"Gudja":[0.8435176274888594,0.5253441048502933],"Iklil":[0.318871654339364,6.014928201148058],"Fang":[0.3530801076784529,6.0601322287747115],"Dschubba":[0.39252454877352466,6.110397711232148],"Jabbah":[0.3961897402027128,6.189112060497092],"Yed Prior":[0.5619960191421741,0.15446163880149816],"Yed Posterior":[0.5377359425394529,0.1494001839707146],"Alniyat":[0.29670597283903605,6.1315161951812795],"Cujam":[0.6742206900454095,0.5141739976375295],"Athebyne":[0.714712328691678,1.6158258214963503],"Antares":[0.26284658535034605,6.142686302394043],"Kornephoros":[0.7017968922269199,0.6808529412029879],"Marfik":[0.555887366760194,0.2988003679414292],"Paikauhale":[0.22357667718047364,6.135530452460866],"Atria":[-0.26633724385433466,5.611931676862568],"Larawag":[0.11449359893082801,6.08805749680662],"Xamidimura":[0.06824237375297829,6.040933607002773],"Pipirima":[0.06736970912698112,6.042329870404369],"OAO 1653-40":[0.02548180707911721,6.013182871896063],"Sabik":[0.24452062820440557,0.11728612573401895],"Aldhibah":[0.6115633698988131,1.675690614839756],"LSF 1":[-1.9198621771937625e-3,6.082821509050637],"Sarin":[0.5483824509766184,0.8173376887089445],"Lesath":[-3.2114058236695664e-2,6.130818063480481],"Maasym":[0.49637163926718736,0.8635889138867942],"Shaula":[-3.8571776469074684e-2,6.139021110964855],"Rastaban":[0.5813691738393112,1.3889330187370874],"Sargas":[-0.10437068926926091,6.058735965373115],"Rasalhague":[0.3939208121751202,0.6265732014659643],"Cervantes":[-0.2007128639793479,5.935166654331917],"Cebalrai":[0.3000220984178253,0.5098106745075437],"Alruba":[0.5473352534254218,1.422268807450179],"Fuyue":[-0.08621926504851989,6.169738905799955],"Dziban":[0.5415756668938405,1.797165530778561],"Grumium":[0.5276130328778859,1.4864969239235706],"Eltanin":[0.5099852074327431,1.379857306626717],"Alnasl":[-0.07923794804054256,1.6057029118347832e-2],"Yildun":[0.49288098076319864,2.082003264704036],"Polis":[-2.7925268031909273e-2,0.17453292519943295],"Kaus Media":[-0.12479104151759457,0.05235987755982989],"Kaus Australis":[-0.17121679962064373,6.269222673163632],"Alathfar":[0.38048177693476387,1.175130185367782],"Kaus Borealis":[-0.11379546723003028,0.13369222070276565],"Fafnir":[0.47350782606606157,1.6653931722529893],"Vega":[0.335801348083709,1.1770500475449759],"Xihe":[0.30054569719342356,1.1473794502610721],"Sheliak":[0.2579596634447619,1.1028735543352168],"Ainalrami":[-0.18709929581379214,0.2223549467040776],"Nunki":[-0.21694442602289515,0.1668534764906579],"Sulafat":[0.22357667718047364,1.1051424823628095],"Ascella":[-0.26790804018112957,0.11938052083641214],"Polaris Australis":[-0.4836307357276287,5.304230129735967],"Okab":[0.05672320068981571,0.8178612874845428],"Meridiana":[-0.34191000046568915,6.275156792620413],"Albaldah":[-0.23195425759004637,0.277332818141899],"Gumala":[-0.27541295596470516,0.23492131731843677],"Aladfar":[0.22252947962927702,1.2325515177583957],"Altais":[0.4014257279586958,1.7217673070924062],"Arkab Prior":[-0.41765729000224305,6.171658767977149],"Arkab Posterior":[-0.4207988826558328,6.165899181445567],"Rukbat":[-0.4029965242854907,6.243217267308916],"Anser":[5.9341194567807204e-2,1.0295697257514551],"Alsafi":[0.3820525732615587,1.7683675981206546],"Sham":[-0.03735004599267865,0.9503317777109125],"Tarazed":[-0.12356931104119853,0.8504989444968367],"Fawaris":[0.17872171540421936,1.3737486542447366],"Altair":[-0.15550883635269477,0.8332201849020929],"Tyl":[0.3635520831904188,1.7877407528177918],"Libertas":[-0.17191493132144145,0.834441915378489],"Terebellum":[-0.4370304446993801,0.2593559268463574],"Alshain":[-0.19355701404617115,0.8051203839449843],"Prima Giedi":[-0.4310963252425994,0.542622864445037],"Algedi, Giedi":[-0.43301618741979314,0.5427973973702365],"Alshat":[-0.4447098934081552,0.5440191278466325],"Dabih Minor":[-0.45937065912490754,0.5082398781807488],"Dabih, Dabih Major":[-0.4602433237509047,0.508763476956347],"Peacock":[-0.6141813637768045,5.950001952973869],"SADR":[3.2637657012293965e-2,1.3639748104335687],"Aldulfin":[-0.28955012290585924,0.9672614714552574],"Rotanev":[-0.27314402793711257,1.0276498635742612],"Sualocin, Svalocin":[-0.2673844414055313,1.0524335389525807],"Deneb":[0.03490658503988659,1.470963493580821],"Aljanah":[-0.09965830028887622,1.3254030339644938],"Albali":[-0.5253441048502933,0.6576400621514634],"Musica":[-0.38362336958835364,1.024333737995472],"PN Ou 4":[0.13945180723434694,1.7194983790648135],"Kitalpha":[-0.501084028247572,0.9840166322744031],"Alderamin":[0.16004669240788003,1.7627825445142729],"Sadalsuud":[-0.6611307206554521,0.8381071068076771],"Alfirk":[0.24486969405480444,1.876927077594702],"Bunda":[-0.7040658202545126,0.8107054375513661],"Nashira":[-0.779638576865867,0.6283185307179586],"Azelfafage":[-2.2689280275926284e-2,1.6664403698041859],"Enif":[-0.5490805826774161,1.1444123905326817],"Erakis, Herschel\'s Garnet Star":[0.07539822368615504,1.7558012275062955],"Deneb Algedi":[-0.803025988842591,0.6562437987498679],"Aldhanab":[-0.8983209660014814,0.10663961729685355],"Sadalmelik":[-0.7342600163140145,1.0459758207202017],"Alnair":[-0.9157742585214247,6.1086523819801535],"Biham":[-0.675616953447005,1.1765264487693774],"Ancha":[-0.848579082319643,0.9339256827421657],"Sadachbia":[-0.8000589291142007,1.085245728890074],"Situla":[-0.8857545953871222,1.0939723751500459],"Homam":[-0.7096508738608943,1.3763666481227284],"Tiaki":[-1.011418301530714,6.043551600880765],"Matar":[-0.4354596483725852,1.6144295580947547],"Sadalbari":[-0.5333726194094671,1.5826645657084581],"sig Peg A":[-0.7522369076095561,1.4114477660878144],"Skat":[-1.0588912571849598,0.8653342431387886],"Fomalhaut B":[-1.1276572297135363,0.27820548276789614],"Fomalhaut":[-1.13271868454432,0.3576179637336381],"Helvetios":[-0.6061528492176306,1.5718435243460933],"Fumalsamakah":[-0.8658578419143869,1.3751449176463324],"Scheat":[-0.5070181477043527,1.670978225859371],"Markab":[-0.7047639519553103,1.5407766636605942],"Salm":[-0.6040584541152374,1.7018705536196708],"Alkarab":[-0.6171484235051949,1.7200219778404118],"Veritate":[-0.3673918075448064,1.857204857047166],"Errai":[0.2672099084803319,2.0767672769480527]}')

},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jdXN0b21fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbmVudC1jOTY4ODQuMDhhZWViN2RmMDRjZjY1Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jdXN0b20vXy9wYWludGVyLXN0YXJzLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jdXN0b20vXy9wYWludGVyLXN0YXJzLmRlbW8vcGFpbnRlci1uYW1lcy50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY3VzdG9tL18vcGFpbnRlci1zdGFycy5kZW1vL3BhaW50ZXItc3RhcnMuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY3VzdG9tL3BhZ2UubWR4IiwianNvbnwvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2N1c3RvbS9fL25hbWVzLmpzb24iXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BhaW50ZXItc3RhcnMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjdHguYWRkKG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0gfSkpXFxuICAgIGN0eC5wYWludCgpXFxuICAgIHRnZExvYWRBcnJheUJ1ZmZlcihkYXRhVVJMKS50aGVuKChidWZmKSA9PiB7XFxuICAgICAgICBpZiAoIWJ1ZmYpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZilcXG4gICAgICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlclN0YXJzKGN0eCwgZGF0YSlcXG4gICAgICAgIGN0eC5hZGQoXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmV3IFBhaW50ZXJOYW1lcyhjdHgpLCBwYWludGVyXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIClcXG4gICAgICAgIGN0eC5wYWludCgpXFxuICAgIH0pXFxufVwiLFwiQ2xhc3MgUGFpbnRlclN0YXJzXCI6XCJleHBvcnQgY2xhc3MgUGFpbnRlclN0YXJzIGV4dGVuZHMgVGdkUGFpbnRlciB7XFxuICAgIC8vIE51bWJlciBvZiBzdGFyc1xcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvdW50OiBudW1iZXJcXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XFxuXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcbiAgICAgICAgdHJhbnNmbzogeyBkaXN0YW5jZTogMCB9LFxcbiAgICAgICAgbmVhcjogMC4xLFxcbiAgICAgICAgZmFyOiAyLjAsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gMyxcXG4gICAgfSlcXG5cXG4gICAgLyoqXFxuICAgICAqIEBwYXJhbSBkYXRhIEEgc2VxdWVuY2Ugb2YgNCBmbG9hdHM6IGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGJyaWdodG5lc3MgYW5kIGNvbG9yLlxcbiAgICAgKi9cXG4gICAgY29uc3RydWN0b3IoXFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgICAgICBkYXRhOiBGbG9hdDMyQXJyYXksXFxuICAgICkge1xcbiAgICAgICAgc3VwZXIoKVxcbiAgICAgICAgdGhpcy5jb3VudCA9IGRhdGEubGVuZ3RoID4+IDJcXG4gICAgICAgIHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xcbiAgICAgICAgICAgIHZlcnQsXFxuICAgICAgICAgICAgZnJhZyxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgICAgIGF0dFN0YXI6IFxcXCJ2ZWM0XFxcIixcXG4gICAgICAgIH0pXFxuICAgICAgICBkYXRhc2V0LnNldChcXFwiYXR0U3RhclxcXCIsIGRhdGEpXFxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RhdGFzZXRdKVxcbiAgICB9XFxuXFxuICAgIHBhaW50KCkge1xcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcmcsIHZhbywgZml4ZWRDYW1lcmEgfSA9IHRoaXNcXG4gICAgICAgIGNvbnN0IHsgY2FtZXJhLCBnbCB9ID0gY29udGV4dFxcbiAgICAgICAgZml4ZWRDYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbiA9IGNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uXFxuICAgICAgICBwcmcudXNlKClcXG4gICAgICAgIHByZy51bmlmb3JtTWF0cml4NGZ2KFxcXCJ1bmlNb2RlbFZpZXdNYXRyaXhcXFwiLCBmaXhlZENhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXFxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcXFwidW5pUHJvamVjdGlvbk1hdHJpeFxcXCIsIGZpeGVkQ2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXFxuICAgICAgICBwcmcudW5pZm9ybTFmKFxcXCJ1bmlWZWdhU2l6ZUluUGl4ZWxzXFxcIiwgTWF0aC5tYXgoY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpICogMC4wNSlcXG4gICAgICAgIHZhby5iaW5kKClcXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCB0aGlzLmNvdW50KVxcbiAgICB9XFxuXFxuICAgIGRlbGV0ZSgpIHtcXG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXFxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxcbiAgICB9XFxufVwiLFwiRnJhZ21lbnQgc2hhZGVyIFxcXCIuL3BhaW50ZXItc3RhcnMuZnJhZ1xcXCJcIjpcIiN2ZXJzaW9uIDMwMCBlc1xcblxcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbmluIHZlYzQgdmFyQ29sb3I7XFxuaW4gZmxvYXQgdmFyUmFkaXVzTGltaXQ7XFxuXFxub3V0IHZlYzQgRnJhZ0NvbG9yO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMiBwb2ludCA9IDIuMCAqIGdsX1BvaW50Q29vcmQueHkgLSB2ZWMyKDEuMCk7XFxuICAgIGZsb2F0IHJhZGl1cyA9IGxlbmd0aChwb2ludCk7XFxuICAgIGlmIChyYWRpdXMgPiAxLjApIGRpc2NhcmQ7XFxuICAgIFxcbiAgICBmbG9hdCBhbHBoYSA9IHZhckNvbG9yLmE7XFxuICAgIGFscGhhICo9IDEuMCAtIHBvdyhyYWRpdXMsIDIuMCk7XFxuICAgIGZsb2F0IGZhZGUgPSAxLjAgLSBzbW9vdGhzdGVwKHZhclJhZGl1c0xpbWl0LCB2YXJSYWRpdXNMaW1pdCAqIDIuMCwgcmFkaXVzKSAqIDAuOTtcXG4gICAgYWxwaGEgKj0gZmFkZTtcXG4gICAgRnJhZ0NvbG9yID0gdmVjNCh2YXJDb2xvci5yZ2IsIGFscGhhKTtcXG59XCIsXCJWZXJ0ZXggc2hhZGVyIFxcXCIuL3BhaW50ZXItc3RhcnMudmVydFxcXCJcIjpcIiN2ZXJzaW9uIDMwMCBlc1xcblxcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnVuaWZvcm0gbWF0NCB1bmlNb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHVuaVByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCB1bmlWZWdhU2l6ZUluUGl4ZWxzO1xcblxcbmluIHZlYzQgYXR0U3RhcjtcXG5cXG5vdXQgdmVjNCB2YXJDb2xvcjtcXG5vdXQgZmxvYXQgdmFyUmFkaXVzTGltaXQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBmbG9hdCBsb25naXR1ZGUgPSBhdHRTdGFyLng7XFxuICAgIGZsb2F0IGxhdGl0dWRlID0gYXR0U3Rhci55O1xcbiAgICBmbG9hdCBicmlnaHRuZXNzID0gYXR0U3Rhci56O1xcbiAgICBmbG9hdCB0ZW1wZXJhdHVyZSA9IGF0dFN0YXIudztcXG4gICAgXFxuICAgIHZlYzMgY29sb3IgPSBtaXgoXFxuICAgICAgICB2ZWMzKC41LCAuMSwgLjEpLCBcXG4gICAgICAgIHZlYzMoLjEsIC4yLCAuNSksIFxcbiAgICAgICAgdGVtcGVyYXR1cmVcXG4gICAgKSAqICgyLjAgKyBicmlnaHRuZXNzICogNS4wKTtcXG4gICAgdmFyQ29sb3IgPSB2ZWM0KGNvbG9yLCAwLjEgKyAwLjkgKiBicmlnaHRuZXNzKTtcXG5cXG4gICAgZmxvYXQgciA9IGNvcyhsYXRpdHVkZSk7XFxuICAgIGZsb2F0IHogPSBzaW4obGF0aXR1ZGUpO1xcbiAgICBmbG9hdCB4ID0gY29zKGxvbmdpdHVkZSkgKiByO1xcbiAgICBmbG9hdCB5ID0gc2luKGxvbmdpdHVkZSkgKiByO1xcbiAgICBnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHgsIHksIHosIDEuMCk7XFxuICAgIGdsX1Bvc2l0aW9uLnogPSBnbF9Qb3NpdGlvbi53O1xcbiAgICBcXG4gICAgZ2xfUG9pbnRTaXplID0gbWF4KHVuaVZlZ2FTaXplSW5QaXhlbHMgKiBicmlnaHRuZXNzLCAxLjApO1xcbiAgICBmbG9hdCByYWRpdXNMaW1pdCA9IGNsYW1wKHNxcnQoZ2xfUG9pbnRTaXplKSwgMC4yLCAxMC4wKTtcXG4gICAgdmFyUmFkaXVzTGltaXQgPSByYWRpdXNMaW1pdCAvIGdsX1BvaW50U2l6ZTtcXG59XFxuXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIHRnZExvYWRBcnJheUJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlcixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFByb2dyYW0sXFxuICAgIFRnZFZlcnRleEFycmF5LFxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBkYXRhVVJMIGZyb20gXFxcIi4uL3N0YXJzLmRhdFxcXCJcXG5pbXBvcnQgeyBQYWludGVyTmFtZXMgfSBmcm9tIFxcXCIuL3BhaW50ZXItbmFtZXNcXFwiXFxuaW1wb3J0IGZyYWcgZnJvbSBcXFwiLi9wYWludGVyLXN0YXJzLmZyYWdcXFwiXFxuaW1wb3J0IHZlcnQgZnJvbSBcXFwiLi9wYWludGVyLXN0YXJzLnZlcnRcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdIH0pKVxcbiAgICBjdHgucGFpbnQoKVxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIoZGF0YVVSTCkudGhlbigoYnVmZikgPT4ge1xcbiAgICAgICAgaWYgKCFidWZmKSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpXFxuICAgICAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXJTdGFycyhjdHgsIGRhdGEpXFxuICAgICAgICBjdHguYWRkKFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW25ldyBQYWludGVyTmFtZXMoY3R4KSwgcGFpbnRlcl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICApXFxuICAgICAgICBjdHgucGFpbnQoKVxcbiAgICB9KVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXFxuZXhwb3J0IGNsYXNzIFBhaW50ZXJTdGFycyBleHRlbmRzIFRnZFBhaW50ZXIge1xcbiAgICAvLyBOdW1iZXIgb2Ygc3RhcnNcXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb3VudDogbnVtYmVyXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxcblxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAgfSxcXG4gICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgIGZhcjogMi4wLFxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDMsXFxuICAgIH0pXFxuXFxuICAgIC8qKlxcbiAgICAgKiBAcGFyYW0gZGF0YSBBIHNlcXVlbmNlIG9mIDQgZmxvYXRzOiBsb25naXR1ZGUsIGxhdGl0dWRlLCBicmlnaHRuZXNzIGFuZCBjb2xvci5cXG4gICAgICovXFxuICAgIGNvbnN0cnVjdG9yKFxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICAgICAgZGF0YTogRmxvYXQzMkFycmF5LFxcbiAgICApIHtcXG4gICAgICAgIHN1cGVyKClcXG4gICAgICAgIHRoaXMuY291bnQgPSBkYXRhLmxlbmd0aCA+PiAyXFxuICAgICAgICB0aGlzLnByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcXG4gICAgICAgICAgICB2ZXJ0LFxcbiAgICAgICAgICAgIGZyYWcsXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgICAgICBhdHRTdGFyOiBcXFwidmVjNFxcXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgZGF0YXNldC5zZXQoXFxcImF0dFN0YXJcXFwiLCBkYXRhKVxcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkYXRhc2V0XSlcXG4gICAgfVxcblxcbiAgICBwYWludCgpIHtcXG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIGZpeGVkQ2FtZXJhIH0gPSB0aGlzXFxuICAgICAgICBjb25zdCB7IGNhbWVyYSwgZ2wgfSA9IGNvbnRleHRcXG4gICAgICAgIGZpeGVkQ2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBjYW1lcmEudHJhbnNmby5vcmllbnRhdGlvblxcbiAgICAgICAgcHJnLnVzZSgpXFxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcXFwidW5pTW9kZWxWaWV3TWF0cml4XFxcIiwgZml4ZWRDYW1lcmEubWF0cml4TW9kZWxWaWV3KVxcbiAgICAgICAgcHJnLnVuaWZvcm1NYXRyaXg0ZnYoXFxcInVuaVByb2plY3Rpb25NYXRyaXhcXFwiLCBmaXhlZENhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxcbiAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVmVnYVNpemVJblBpeGVsc1xcXCIsIE1hdGgubWF4KGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAqIDAuMDUpXFxuICAgICAgICB2YW8uYmluZCgpXFxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgdGhpcy5jb3VudClcXG4gICAgfVxcblxcbiAgICBkZWxldGUoKSB7XFxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcXG4gICAgfVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgYXNzZXJ0VHlwZSB9IGZyb20gXCJAdG9sb2tvYmFuL3R5cGUtZ3VhcmRzXCJcblxuaW1wb3J0IG5hbWVzIGZyb20gXCIuLi9uYW1lcy5qc29uXCJcbmltcG9ydCBmcmFnIGZyb20gXCIuL3BhaW50ZXItbmFtZXMuZnJhZ1wiXG5pbXBvcnQgdmVydCBmcm9tIFwiLi9wYWludGVyLW5hbWVzLnZlcnRcIlxuXG5leHBvcnQgY2xhc3MgUGFpbnRlck5hbWVzIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY291bnQ6IG51bWJlclxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAsIHBvc2l0aW9uOiBbMCwgMCwgMF0gfSxcbiAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICBmYXI6IDIuMCxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDMsXG4gICAgfSlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIGNvbnN0IHsgY2FudmFzLCBhdHRMYXRMbmcsIGF0dFVWIH0gPSBtYWtlQ2FudmFzRm9yTmFtZXMoKVxuICAgICAgICB0aGlzLmNvdW50ID0gYXR0TGF0TG5nLmxlbmd0aCA+PiAxXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcbiAgICAgICAgICAgIC5zZXRQYXJhbXMoe1xuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSX01JUE1BUF9MSU5FQVJcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgICAgICAuZ2VuZXJhdGVNaXBtYXAoKVxuICAgICAgICBjb25zdCBkc09iamVjdCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dENvcm5lcjogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRzT2JqZWN0LnNldChcImF0dENvcm5lclwiLCBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSkpXG4gICAgICAgIGNvbnN0IGRzSW5zdGFuY2UgPSBuZXcgVGdkRGF0YXNldChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRMYXRMbmc6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgIGF0dFVWOiBcInZlYzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGRpdmlzb3I6IDEgfSxcbiAgICAgICAgKVxuICAgICAgICBkc0luc3RhbmNlLnNldChcImF0dExhdExuZ1wiLCBuZXcgRmxvYXQzMkFycmF5KGF0dExhdExuZykpXG4gICAgICAgIGRzSW5zdGFuY2Uuc2V0KFwiYXR0VVZcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRVVikpXG4gICAgICAgIGNvbnN0IHByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHsgdmVydCwgZnJhZyB9KVxuICAgICAgICBjb25zdCB2YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgcHJnLCBbZHNPYmplY3QsIGRzSW5zdGFuY2VdKVxuICAgICAgICB0aGlzLnByZyA9IHByZ1xuICAgICAgICB0aGlzLnZhbyA9IHZhb1xuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICAgICAgdGhpcy5wcmcuZGVsZXRlKClcbiAgICAgICAgdGhpcy50ZXh0dXJlLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIHRleHR1cmUsIGZpeGVkQ2FtZXJhIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgY2FtZXJhLCBnbCB9ID0gY29udGV4dFxuICAgICAgICBmaXhlZENhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uID0gY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb25cbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHByZy51bmlmb3JtMWYoXCJ1bmlBc3BlY3RcIiwgY29udGV4dC53aWR0aCAvIGNvbnRleHQuaGVpZ2h0KVxuICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pQXNwZWN0SW52ZXJzZVwiLCBjb250ZXh0LmhlaWdodCAvIGNvbnRleHQud2lkdGgpXG4gICAgICAgIHByZy51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGZpeGVkQ2FtZXJhLm1hdHJpeE1vZGVsVmlldylcbiAgICAgICAgcHJnLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGZpeGVkQ2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzSW5zdGFuY2VkKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0LCB0aGlzLmNvdW50KVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgc3RhcnMgbmFtZXMgYXJlIGRyYXduIGluIGEgY2FudmFzIHdoaWNoIGlzIHVzZWQgYXMgYSB0ZXh0dXJlLlxuICovXG5mdW5jdGlvbiBtYWtlQ2FudmFzRm9yTmFtZXMoKToge1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBhdHRMYXRMbmc6IG51bWJlcltdXG4gICAgYXR0VVY6IG51bWJlcltdXG59IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIilcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBnZXQgQ29udGV4dCAyRCFcIilcblxuICAgIGFzc2VydFR5cGUobmFtZXMsIFtcIm1hcFwiLCBbXCJhcnJheVwiLCBcIm51bWJlclwiLCB7IG1pbjogMiwgbWF4OiAyIH1dXSlcbiAgICBjb25zdCBhdHRMYXRMbmc6IG51bWJlcltdID0gW11cbiAgICBjb25zdCBhdHRVVjogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IHcgPSAyMDQ4XG4gICAgY29uc3QgaCA9IDEwMjRcbiAgICBjb25zdCBzcGFjZSA9IDhcbiAgICBjYW52YXMud2lkdGggPSB3XG4gICAgY2FudmFzLmhlaWdodCA9IGhcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICAgIGNvbnRleHQuZm9udCA9IFwiMzBweCBzYW5zLXNlcmlmXCJcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiIzBmMFwiXG4gICAgbGV0IHggPSAxXG4gICAgbGV0IHkgPSAxNlxuICAgIGZvciAoY29uc3QgbmFtZSBvZiBPYmplY3Qua2V5cyhuYW1lcykgYXMgQXJyYXk8a2V5b2YgdHlwZW9mIG5hbWVzPikge1xuICAgICAgICBjb25zdCBtZWFzdXJlID0gY29udGV4dC5tZWFzdXJlVGV4dChuYW1lKVxuICAgICAgICBpZiAoeCArIG1lYXN1cmUud2lkdGggPiB3IC0gc3BhY2UpIHtcbiAgICAgICAgICAgIHggPSAxXG4gICAgICAgICAgICB5ICs9IDMyXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29vcmRzID0gbmFtZXNbbmFtZV1cbiAgICAgICAgaWYgKCFjb29yZHMpIGNvbnRpbnVlXG5cbiAgICAgICAgYXR0TGF0TG5nLnB1c2goLi4uY29vcmRzKVxuICAgICAgICBhdHRVVi5wdXNoKHggLyB3LCAoeSAtIDE2KSAvIGgsIChtZWFzdXJlLndpZHRoICsgc3BhY2UgLyAyKSAvIHcpXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQobmFtZSwgeCwgeSlcbiAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoICsgc3BhY2VcbiAgICB9XG4gICAgcmV0dXJuIHsgY2FudmFzLCBhdHRMYXRMbmcsIGF0dFVWIH1cbn1cbiIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIHRnZExvYWRBcnJheUJ1ZmZlcixcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBkYXRhVVJMIGZyb20gXCIuLi9zdGFycy5kYXRcIlxuaW1wb3J0IHsgUGFpbnRlck5hbWVzIH0gZnJvbSBcIi4vcGFpbnRlci1uYW1lc1wiXG5pbXBvcnQgZnJhZyBmcm9tIFwiLi9wYWludGVyLXN0YXJzLmZyYWdcIlxuaW1wb3J0IHZlcnQgZnJvbSBcIi4vcGFpbnRlci1zdGFycy52ZXJ0XCJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICB9KVxuICAgIGN0eC5hZGQobmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLCAwLCAwLCAxXSB9KSlcbiAgICBjdHgucGFpbnQoKVxuICAgIHRnZExvYWRBcnJheUJ1ZmZlcihkYXRhVVJMKS50aGVuKChidWZmKSA9PiB7XG4gICAgICAgIGlmICghYnVmZikgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZilcbiAgICAgICAgY29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyU3RhcnMoY3R4LCBkYXRhKVxuICAgICAgICBjdHguYWRkKFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcbiAgICAgICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW25ldyBQYWludGVyTmFtZXMoY3R4KSwgcGFpbnRlcl0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKVxuICAgICAgICBjdHgucGFpbnQoKVxuICAgIH0pXG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XG59XG5cbi8vICNiZWdpbiBDbGFzcyBQYWludGVyU3RhcnNcbmV4cG9ydCBjbGFzcyBQYWludGVyU3RhcnMgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICAvLyBOdW1iZXIgb2Ygc3RhcnNcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvdW50OiBudW1iZXJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAgfSxcbiAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICBmYXI6IDIuMCxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDMsXG4gICAgfSlcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIEEgc2VxdWVuY2Ugb2YgNCBmbG9hdHM6IGxvbmdpdHVkZSwgbGF0aXR1ZGUsIGJyaWdodG5lc3MgYW5kIGNvbG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIGRhdGE6IEZsb2F0MzJBcnJheSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmNvdW50ID0gZGF0YS5sZW5ndGggPj4gMlxuICAgICAgICB0aGlzLnByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcbiAgICAgICAgICAgIHZlcnQsXG4gICAgICAgICAgICBmcmFnLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICAgICAgYXR0U3RhcjogXCJ2ZWM0XCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0U3RhclwiLCBkYXRhKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RhdGFzZXRdKVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCBmaXhlZENhbWVyYSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGNhbWVyYSwgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgZml4ZWRDYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbiA9IGNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uXG4gICAgICAgIHByZy51c2UoKVxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBmaXhlZENhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByZy51bmlmb3JtTWF0cml4NGZ2KFwidW5pUHJvamVjdGlvbk1hdHJpeFwiLCBmaXhlZENhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxuICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pVmVnYVNpemVJblBpeGVsc1wiLCBNYXRoLm1heChjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgKiAwLjA1KVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCB0aGlzLmNvdW50KVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcmcuZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG59XG4vLyAjZW5kXG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gSlNPTi5wYXJzZSgne1wiQWxwaGVyYXR6LCBTaXJyYWhcIjpbLTAuNTczMTY2MTI2MzU0OTM3OSwxLjk1MDA1NjM3MzI1MzI2NDVdLFwiQ2FwaFwiOlstMC4wNTcwNzIyNjY1NDAyMTQ1OCwyLjA1MTExMDkzNjk0MzczNl0sXCJBbGdlbmliXCI6Wy0wLjgxNDcxOTY5NDgzMDk1MzEsMS45MDk5MTM4MDA0NTczOTVdLFwiQW5rYWFcIjpbLTEuMjkxMTk0NTgwNjI1NDA1LDUuNTg1NDAyNjcyMjMyMjUzXSxcIkZ1bHVcIjpbLTAuMTU1NTA4ODM2MzUyNjk0NzcsMi4xMDgwMDg2NzA1NTg3NTFdLFwiU2NoZWRhclwiOlstMC4xMDk5NTU3NDI4NzU2NDI3NiwyLjExOTE3ODc3Nzc3MTUxNV0sXCJEaXBoZGFcIjpbLTEuNDA4MTMxNjQwNTA5MDI1MiwxLjk0MjcyNTk5MDM5NDg4ODRdLFwiQWNoaXJkXCI6Wy0wLjA4ODEzOTEyNzIyNTcxMzY0LDIuMTM5NzczNjYyOTQ1MDQ4XSxcIkNhc3R1bGFcIjpbLTAuMDY0MjI4MTE2NDczMzkxMzMsMi4xNTcyMjY5NTU0NjQ5OTFdLFwiTUlSQUNIXCI6Wy0wLjQ3Mjk4NDIyNzI5MDQ2MzM1LDIuMjE4MzEzNDc5Mjg0NzkzXSxcIld1cnJlblwiOlstMS4wNzcwNDI2ODE0MDU3MDA4LDUuMTk4MTE0MTExMjE0NzEyXSxcIlJldmF0aVwiOlstMC45NTc4MzY2OTM0OTQ0ODgxLDIuMzEzNjA4NDU2NDQzNjgzXSxcIkFkaGlsXCI6Wy0wLjI5NjcwNTk3MjgzOTAzNjA1LDIuMjQ0MTQ0MzUyMjE0MzA5XSxcIlJ1Y2hiYWhcIjpbLTQuMTAxNTIzNzQyMTg2Njc0NmUtMiwyLjIxOTg4NDI3NTYxMTU4NzddLFwiTG9kZXN0YXIsIE5vcnRoIFN0YXIsIFBvbGFyaXNcIjpbMC40NjE4MTQxMjAwNzc2OTk2LDIuMTUxNjQxOTAxODU4NjA5N10sXCJBbHBoZXJnXCI6Wy0wLjgxMDM1NjM3MTcwMDk2NzIsMi4zOTEyNzU2MDgxNTc0MzFdLFwiVGl0YXdpblwiOlstMC4zNjA1ODUwMjM0NjIwMjg1LDIuMzAzODM0NjEyNjMyNTE1XSxcIk5lbWJ1c1wiOlstMC4yMzYxNDMwNDc3OTQ4MzI3OCwyLjI4MzA2NTE5NDUzMzc4MjVdLFwiQWNoZXJuYXJcIjpbLTEuMDI2MDc5MDY3MjQ3NDY2Miw1LjA3NjExNTU5NjUwMDMwNzVdLFwiVG9yY3VsYXJcIjpbLTAuODk3NjIyODM0MzAwNjgzNywyLjUyMzkyMDYzMTMwOV0sXCJCYXRlbiBLYWl0b3NcIjpbLTEuMTg3Njk2NTU1OTgyMTQxMywyLjg5NTE1MjE2MzIwODE5MzZdLFwiU2VnaW5cIjpbMi44Nzk3OTMyNjU3OTA2NDM2ZS0yLDIuMjY2MTM1NTAwNzg5NDM3N10sXCJNb3RoYWxsYWhcIjpbLTAuNTQ4MDMzMzg1MTI2MjE5NSwyLjQxOTcyNDQ3NDk2NDkzOF0sXCJTaGVyYXRhblwiOlstMC42OTI1NDY2NDcxOTEzNSwyLjQ4MjU1NjMyODAzNjczNDRdLFwiQWxtYWNoXCI6Wy0wLjMyMzkzMzEwOTE3MDE0NzU2LDIuMzkwNDAyOTQzNTMxNDM0XSxcIkhhbWFsXCI6Wy0wLjYzMTgwOTE4OTIyMTk0NzQsMi41MjMyMjI0OTk2MDgyMDJdLFwiTWlyYSwgTWlyYSBBXCI6Wy0xLjAxMTk0MTkwMDMwNjMxMjEsMi45Mjc3ODk4MjAyMjA0ODc3XSxcImlvdCBDYXMgQUJcIjpbMC4xMDk3ODEyMDk5NTA0NDMzMywyLjMwNTkyOTAwNzczNDkwOF0sXCJLYWZmYWxqaWRobWFcIjpbLTAuODYxODQzNTg0NjM0Nzk5OSwyLjk0ODIxMDE3MjQ2ODgyMTRdLFwiTGlsaWkgQm9yZWFcIjpbLTAuNDcyOTg0MjI3MjkwNDYzMzUsMi42NDI3Nzc1NTMzNjk4MTM3XSxcIk1pcmFtXCI6Wy0wLjA1NTUwMTQ3MDIxMzQxOTY4LDIuNDI4NDUxMTIxMjI0OTFdLFwiQmhhcmFuaVwiOlstMC40OTkzMzg2OTg5OTU1Nzc3LDIuNjcwMDA0Njg5NzAwOTI1M10sXCJBbmdldGVuYXJcIjpbLTEuMDgzNjc0OTMyNTYzMjc5MywzLjYwOTM0MDg5MzEyNDI3MzZdLFwiQXpoYVwiOlstMC45NjUzNDE2MDkyNzgwNjM3LDMuMjY2MzgzNjk1MTA3Mzg4XSxcIkdvcmdvbmVhIFNlY3VuZGFcIjpbLTAuMjk1MzA5NzA5NDM3NDQwNiwyLjU4Mzc4NTQyNDY1MjQwNTVdLFwiTWVua2FyXCI6Wy0wLjc5NTY5NTYwNTk4NDIxNDgsMy4wMjUwMDQ2NTk1NTY1NzJdLFwiR29yZ29uZWEgVGVydGlhXCI6Wy0wLjI5Njg4MDUwNTc2NDIzNTQ3LDIuNjExMDEyNTYwOTgzNTE3XSxcIkFsZ29sLCBBbGdvbCBBLCBBbGdvbCBCLCBBbGdvbCBDXCI6Wy0wLjI2MDA1NDA1ODU0NzE1NTEzLDIuNjAwMTkxNTE5NjIxMTUyXSxcIk1pc2FtXCI6Wy0wLjE5OTQ5MTEzMzUwMjk1MTg2LDIuNTY3NzI4Mzk1NTM0MDU3N10sXCJHb3Jnb25lYSBRdWFydGFcIjpbLTAuMjc0NTQwMjkxMzM4NzA4MDUsMi42MjIwMDgxMzUyNzEwODFdLFwiQm90ZWluXCI6Wy0wLjU2MDk0ODgyMTU5MDk3NzUsMi44Mzc5MDUzNjM3NDI3Nzk2XSxcIkRhbGltXCI6Wy0xLjAzMDQ0MjM5MDM3NzQ1MjIsMy45MjI2Mjc0OTM4NTcyNTZdLFwiWmliYWxcIjpbLTAuODk1NTI4NDM5MTk4MjkwNSwzLjM0MzcwMTc4MDk3MDczN10sXCJNaXJmYWtcIjpbLTAuMTAyMjc2Mjk0MTY2ODY3NzIsMi41NTgxMjkwODQ2NDgwODg2XSxcIlJhblwiOlstMC44Mzg0NTYxNzI2NTgwNzU5LDMuNDE4NDAxODcyOTU2MDk0XSxcIkF0aWtcIjpbLTAuMzA5NjIxNDA5MzAzNzk0MDYsMi43OTg4MDk5ODg0OTgxMDcyXSxcIlJhbmFcIjpbLTAuODAyODUxNDU1OTE3MzkxNiwzLjQ1NzQ5NzI0ODIwMDc2NjZdLFwiQ2VsYWVubywgQ2VsZW5vXCI6Wy0wLjQxNDE2NjYzMTQ5ODI1NDQsMi44OTc5NDQ2OTAwMTEzODQ4XSxcIkVsZWN0cmFcIjpbLTAuNDE2MjYxMDI2NjAwNjQ3NiwyLjkwMDM4ODE1MDk2NDE3N10sXCJUYXlnZXRhLCBUYXlnZXRlXCI6Wy0wLjQxMDY3NTk3Mjk5NDI2NTgsMi44OTY4OTc0OTI0NjAxODhdLFwiTWFpYVwiOlstMC40MTAzMjY5MDcxNDM4NjY5LDIuOTAwMjEzNjE4MDM4OTc3M10sXCJBc3Rlcm9wZVwiOlstMC40MDc3MDg5MTMyNjU4NzU0LDIuODk4MTE5MjIyOTM2NTg0XSxcIk1lcm9wZVwiOlstMC40MTQ1MTU2OTczNDg2NTMzLDIuOTA3MTk0OTM1MDQ2OTU0Nl0sXCJNT0FJIDFcIjpbMC4xMjI2OTY2NDY0MTUyMDEzNywyLjQ2ODc2ODIyNjk0NTk3ODddLFwiQWxjeW9uZVwiOlstMC40MDkyNzk3MDk1OTI2NzAzLDIuOTA4OTQwMjY0Mjk4OTQ5XSxcIkF0bGFzXCI6Wy0wLjQwNTQzOTk4NTIzODI4MjgsMi45MTQ4NzQzODM3NTU3Mjk2XSxcIlBsZWlvbmVcIjpbLTAuNDA0MzkyNzg3Njg3MDg2MiwyLjkxNDAwMTcxOTEyOTczM10sXCJNZW5raGliLCBNZW5raWJcIjpbLTAuMjI4ODEyNjY0OTM2NDU2NiwyLjc5ODk4NDUyMTQyMzMwNjJdLFwiWmF1cmFrXCI6Wy0wLjc3NjE0NzkxODM2MTg3ODQsMy41ODA3MTc0OTMzOTE1NjY2XSxcIkJlaWRcIjpbLTAuNjcwMDMxODk5ODQwNjIzMiwzLjQ3ODc5MDI2NTA3NTA5NzVdLFwiS2VpZFwiOlstMC42NjMyMjUxMTU3NTc4NDUzLDMuNTAzMjI0ODc0NjAzMDE4M10sXCJQcmltYSBIeWFkdW1cIjpbLTAuNDE1NzM3NDI3ODI1MDQ5MywzLjEyNTUzNTYyNDQ3MTQ0NTRdLFwiU2VjdW5kYSBIeWFkdW1cIjpbLTAuMzg0MTQ2OTY4MzYzOTUxOTYsMy4xMDY4NjA2MDE0NzUxMDZdLFwiQmVlbWltXCI6Wy0wLjc3MTk1OTEyODE1NzA5MTksNC4xMDQ0OTA4MDE5MTUwNjRdLFwiQWluXCI6Wy0wLjM0NzY2OTU4Njk5NzI3MDQ2LDMuMDk5NzA0NzUxNTQxOTI5XSxcIkNoYW11a3V5XCI6Wy0wLjM4NDE0Njk2ODM2Mzk1MTk2LDMuMTQ3NzAxMzA1OTcxNzczM10sXCJBbGRlYmFyYW5cIjpbLTAuMzUzNDI5MTczNTI4ODUxNywzLjE1ODUyMjM0NzMzNDEzOF0sXCJUaGVlbWluXCI6Wy0wLjcyMDk5NTUxMzk5ODg1NzUsNC4wMzE4ODUxMDUwMzIxXSxcIlNjZXB0cnVtXCI6Wy0wLjYyNjM5ODY2ODU0MDc2NDksMy42ODgyMjk3NzUzMTQ0MTddLFwiVGFiaXRcIjpbLTAuNDAyNjQ3NDU4NDM1MDkxOCwzLjM0MTQzMjg1Mjk0MzE0NF0sXCJIYXNzYWxlaFwiOlstMC4xMDc1MTIyODE5MjI4NTA3LDIuOTc3MzU3MTcwOTc3MTI2N10sXCJBbG1hYXpcIjpbMi4wNTk0ODg1MTczNTMzMDg3ZS0yLDIuODQxMjIxNDg5MzIxNTY5XSxcIlNhY2xhdGVuaVwiOlstNy41MDQ5MTU3ODM1NzU2MTdlLTMsMi44ODAxNDIzMzE2NDEwNDNdLFwiTWFnb1wiOlswLjI5ODgwMDM2Nzk0MTQyOTIsMi40ODA0NjE5MzI5MzQzNDE0XSxcIkhhZWR1c1wiOlswLjAwNDcxMjM4ODk4MDM4NDY5LDIuODg1OTAxOTE4MTcyNjIzOF0sXCJDdXJzYVwiOlstMC40NDE3NDI4MzM2Nzk3NjQ4LDMuNTgzODU5MDg2MDQ1MTU2Ml0sXCJDYXBlbGxhXCI6WzAuMDc5NzYxNTQ2ODE2MTQwODcsMi44Mzc1NTYyOTc4OTIzODFdLFwiUmlnZWxcIjpbLTAuNDQwNjk1NjM2MTI4NTY4MiwzLjY1MTkyNjkyNjg3MjkzNTNdLFwiQmVsbGF0cml4XCI6Wy0wLjI3ODM4MDAxNTY5MzA5NTU2LDMuNDM3MDc2ODk1OTUyNDMzNF0sXCJFbG5hdGhcIjpbLTAuMDY1Mjc1MzE0MDI0NTg3OTMsMy4xMDY1MTE1MzU2MjQ3MDc1XSxcIk5paGFsXCI6Wy0wLjQ3NDcyOTU1NjU0MjQ1NzYzLDMuOTAxODU4MDc1NzU4NTIzM10sXCJNaW50YWthXCI6Wy0wLjMwOTYyMTQwOTMwMzc5NDA2LDMuNTU4MDI4MjEzMTE1NjQwNF0sXCJBcm5lYlwiOlstMC40Mzg3NzU3NzM5NTEzNzQ0NiwzLjg1NjMwNDk4MjI4MTQ3MV0sXCJsYW1iZGEgT3JpIFgtNVwiOlstMC4yMTQ1MDA5NjUwNzAxMDMwOCwzLjQxMDM3MzM1ODM5NjkyXSxcImxhbWJkYSBPcmkgWC0zXCI6Wy0wLjIwOTQzOTUxMDIzOTMxOTU2LDMuNDA0MjY0NzA2MDE0OTRdLFwiSGF0eXNhXCI6Wy0wLjM0MTczNTQ2NzU0MDQ4OTY3LDMuNjU2ODEzODQ4Nzc4NTE5Nl0sXCJBbG5pbGFtXCI6Wy0wLjMwMDg5NDc2MzA0MzgyMjQsMy41ODE1OTAxNTgwMTc1NjM4XSxcIlRpYW5ndWFuXCI6Wy0wLjA5ODQzNjU2OTgxMjQ4MDE4LDMuMjQwOTAxODg4MDI4MjcwNV0sXCJQaGFjdFwiOlstMC41MDM3MDIwMjIxMjU1NjM1LDQuMTY4MDIwNzg2Njg3NjU4XSxcIlNhaXBoXCI6Wy0wLjMyMjg4NTkxMTYxODk1MDk3LDMuNzQzOTA1Nzc4NDUzMDM2XSxcIldhem5cIjpbLTAuNDcyMjg2MDk1NTg5NjY1NTYsNC4yMTIzNTIxNDk2ODgzMTRdLFwiQmV0ZWxnZXVzZVwiOlstMC4xNTYzODE1MDA5Nzg2OTE5NCwzLjQ4Njk5MzMxMjU1OTQ3MDhdLFwiR29yZVxcJ3MgTm92YVwiOlstMC4wNDM0NTg2OTgzNzQ2NTg4MSwzLjI5Mzc4NTM2NDM2MzY5ODVdLFwiTWVua2FsaW5hblwiOlswLjE4MTY4ODc3NTEzMjYwOTcsMi45MjI3MjgzNjUzODk3MDQ1XSxcIk1haGFzaW1cIjpbMC4xMTc0NjA2NTg2NTkyMTgzOCwzLjA0MjgwNzAxNzkyNjkxNF0sXCJFbGt1cnVkXCI6Wy0wLjQyMzQxNjg3NjUzMzgyNDM3LDQuMjU3NTU2MTc3MzE0OTY3XSxcIlByb3B1c1wiOlswLjA0Mzk4MjI5NzE1MDI1NzEsMy4yOTYwNTQyOTIzOTEyOTE0XSxcIkZ1cnVkXCI6Wy0wLjMzOTExNzQ3MzY2MjQ5ODIsNC4xNDU1MDYwMzkzMzY5MzJdLFwiVGVqYXRcIjpbMC4wNzI3ODAyMjk4MDgxNjM1NCwzLjMxMTIzODY1Njg4MzY0Ml0sXCJNaXJ6YW1cIjpbLTAuMjQ5MDU4NDg0MjU5NTkwODIsMy45NDU0OTEzMDcwNTgzODE1XSxcIkNhbm9wdXNcIjpbLTAuNDQxMzkzNzY3ODI5MzY1OSw0LjU1ODk3NDUzOTEzNDM4OF0sXCIyMyBILiBDYW1cIjpbMC40NjA5NDE0NTU0NTE3MDI0NSwyLjM0OTAzODY0MDI1OTE2OF0sXCJBbGhlbmFcIjpbMC4wNzc2NjcxNTE3MTM3NDc2NiwzLjQzNDI4NDM2OTE0OTI0MjZdLFwiUGxhc2tldHQgc3RhciwgUGxhc2tldHRcXCdzIHN0YXJcIjpbLTUuNDEwNTIwNjgxMTgyNDIxNWUtMywzLjU5MzEwOTMzMTA4MDcyNjVdLFwiTWVic3V0YVwiOlswLjE2ODA3NTIwNjk2NzA1Mzk0LDMuMzA4MDk3MDY0MjMwMDUyXSxcIkFsemlyclwiOlswLjA3ODUzOTgxNjMzOTc0NDgzLDMuNTAzNTczOTQwNDUzNDE3XSxcIkRvZyBTdGFyLCBTaXJpdXMsIFNpcml1cyBBXCI6Wy0wLjE1NDk4NTIzNzU3NzA5NjQ4LDMuOTY1NzM3MTI2MzgxNTE1OF0sXCJBbHRhbGViYW4sIFRhbGViYW5cIjpbLTAuMzY0MDc1NjgxOTY2MDE3MTQsNC41NDA2NDg1ODE5ODg0NDldLFwiNTEgSC4gQ2VwXCI6WzAuNDgzODA1MjY4NjUyODI4MTQsMi4yMDI5NTQ1ODE4NjcyNDNdLFwiQWRoYXJhXCI6Wy0wLjE5Nzc0NTgwNDI1MDk1NzUzLDQuMTg1ODIzMTQ1MDU4XSxcIkNpdGFsYVwiOlstOC4zNzc1ODA0MDk1NzI3ODFlLTMsMy44MTczODQxMzk5NjE5OTc3XSxcIlVudXJndW5pdGVcIjpbLTAuMTc5MjQ1MzE0MTc5ODE3NjUsNC4xNzQzMDM5NzE5OTQ4MzhdLFwiTWVrYnVkYVwiOlswLjIwNzY5NDE4MDk4NzMyNTIzLDMuNDE2NDgyMDEwNzc4OTAwMl0sXCJNdWxpcGhlaW5cIjpbLTAuMDc2OTY5MDIwMDEyOTQ5OTMsMy45ODM3MTQwMTc2NzcwNTddLFwiV2V6ZW5cIjpbLTAuMTQ0MzM4NzI5MTM5OTMxMDQsNC4xNjEyMTQwMDI2MDQ4OF0sXCJBaGFkaVwiOlstMC4xOTY4NzMxMzk2MjQ5NjAzNiw0LjM0NjA0NDM3MDM5MTA4XSxcIldhc2F0XCI6WzAuMjc3MzMyODE4MTQxODk5LDMuNDIwNDk2MjY4MDU4NDg3XSxcIkFsdWRyYVwiOlstMC4xMTMyNzE4Njg0NTQ0MzE5OSw0LjIzNDUxNzgzMTE4ODY0M10sXCJHb21laXNhXCI6WzAuMjAzODU0NDU2NjMyOTM3NywzLjY1NjgxMzg0ODc3ODUxOTZdLFwiSGFkaXJcIjpbLTAuMjA3ODY4NzEzOTEyNTI0NjUsNC40NjM1MDUwMjkwNTAyOTldLFwiQ2FzdG9yIEJcIjpbMC4zOTIzNTAwMTU4NDgzMjUzLDMuMjcxNDQ1MTQ5OTM4MTcxXSxcIkNhc3RvciBBXCI6WzAuMzkyMzUwMDE1ODQ4MzI1MywzLjI3MTQ0NTE0OTkzODE3MV0sXCJKaXNodWlcIjpbMC40MjI4OTMyNzc3NTgyMjYwNSwzLjIyODMzNTUxNzQxMzkxMTJdLFwiUHJvY3lvbiwgUHJvY3lvbiBBXCI6WzAuMjI3NDE2NDAxNTM0ODYxMTIsMy43Mjk1OTQwNzg1ODY2ODI2XSxcIlBvbGx1eFwiOlswLjQwODU4MTU3Nzg5MTg3MjU1LDMuMzU1MDQ2NDIxMTA4Njk5N10sXCJBc21pZGlza2UsIEF6bWlkaSwgQXptaWRpc2tlXCI6WzkuOTQ4Mzc2NzM2MzY3Njc3ZS0zLDQuMjE0MjcyMDExODY1NTA4XSxcIk5hb3NcIjpbLTAuMDgyMjA1MDA3NzY4OTMyOTMsNC40Njc2OTM4MTkyNTUwODVdLFwiVHVyZWlzXCI6WzAuMDc2Nzk0NDg3MDg3NzUwNTEsNC4yNDM3NjgwNzYyMjQyMTJdLFwiUmVnb3JcIjpbLTAuMTM0MjE1ODE5NDc4MzYzOTUsNC41ODY3MjUyNzQyNDEwOTldLFwiQWx0YXJmLCBUYXJmXCI6WzAuNDAyMjk4MzkyNTg0NjkyOTcsMy43MzkzNjc5MjIzOTc4NTFdLFwiUGlhdXRvc1wiOlswLjUxNjQ0MjkyNTY2NTEyMjEsMy40Nzg5NjQ3OTgwMDAyOTczXSxcIkFsc2NpYXVrYXRcIjpbMC41OTkzNDYwNjUxMzQ4NTI4LDMuMDk2MDM5NTYwMTEyNzQxXSxcIk11c2NpZGFcIjpbMC42MTgzNzAxNTM5ODE1OTEsMi43MjIxOTAwMzQzMzU1NTU2XSxcIk1pbmNoaXJcIjpbMC40NDE3NDI4MzM2Nzk3NjQ4LDMuODg3MDIyNzc3MTE2NTcxNV0sXCJNZWxlcGhcIjpbMC41NjYzNTkzNDIyNzIxNiwzLjU5NjQyNTQ1NjY1OTUxNTVdLFwiQXNlbGx1cyBCb3JlYWxpc1wiOlswLjU4ODY5OTU1NjY5NzY4NzMsMy41NjM0Mzg3MzM3OTY4MjI1XSxcIkFzZWxsdXMgQXVzdHJhbGlzXCI6WzAuNTc0MjEzMzIzOTA2MTM0NCwzLjYzMDYzMzkwOTk5ODYwNDVdLFwiQXNobGVzaGFcIjpbMC40OTc5NDI0MzU1OTM5ODIyLDMuODUyMjkwNzI1MDAxODg0M10sXCJBbHNlcGhpbmFcIjpbLTAuMTI4NjMwNzY1ODcxOTgyMDgsNC43NDg2OTE4Mjg4MjYxNzFdLFwiQ29wZXJuaWN1c1wiOlswLjY1ODE2MzY2MDkyNzA2MTcsMy40MzQ2MzM0MzQ5OTk2NDFdLFwiVGFsaXRoYVwiOlswLjcxMjc5MjQ2NjUxNDQ4NDIsMi45OTM0MTQyMDAwOTU0NzQ0XSxcIkFjdWJlbnNcIjpbMC41ODUwMzQzNjUyNjg0OTkzLDMuNzc4ODEyMzYzNDkyOTIyN10sXCJBbGthcGhyYWhcIjpbMC43MjY1ODA1Njc2MDUyMzk1LDMuMDEyOTYxODg3NzE3ODExXSxcIk5haG5cIjpbMC42OTIwMjMwNDg0MTU3NTE3LDMuNTkyOTM0Nzk4MTU1NTI3XSxcIlN1aGFpbFwiOlswLjA0OTIxODI4NDkwNjI0MDA5LDQuNjQxNTI4NjEyNzUzNzJdLFwiTWlhcGxhY2lkdXNcIjpbLTAuMjUxNTAxOTQ1MjEyMzgyOSw0Ljk5MTI5MjU5NDg1MzM4NF0sXCJBc3BpZGlza2VcIjpbLTAuMTIyMzQ3NTgwNTY0ODAyNSw0Ljg2MDA0MzgzNTEwMzQxXSxcIkhEIDgwOTUxQUJcIjpbLTAuMzA3MDAzNDE1NDI1ODAyNTYsNS4wNjU2NDM2MjA5ODgzNDJdLFwiSW50ZXJjcnVzXCI6WzAuODA0MDczMTg2MzkzNzg3NywzLjA0MDcxMjYyMjgyNDUyMV0sXCJBbHBoYXJkXCI6WzAuNTA3MDE4MTQ3NzA0MzUyNyw0LjIxNDc5NTYxMDY0MTEwNl0sXCJBbHRlcmZcIjpbMC43ODI5NTQ3MDI0NDQ2NTYzLDMuNjA3NDIxMDMwOTQ3MDc5Nl0sXCJVa2RhaFwiOlswLjYyNzk2OTQ2NDg2NzU1OTcsNC4xMjc1MjkxNDgwNDEzOV0sXCJTdWJyYVwiOlswLjczNDA4NTQ4MzM4ODgxNTEsMy45MjAwMDk0OTk5NzkyNjRdLFwiWmhhbmdcIjpbMC41MTM4MjQ5MzE3ODcxMzA2LDQuMzg0NzkwNjc5Nzg1MzU0XSxcIlJhc2FsYXNcIjpbMC44NzcwMjc5NDkxMjcxNTA3LDMuNTYxMzQ0MzM4Njk0NDI5NV0sXCJGZWxpc1wiOlswLjQ3MjgwOTY5NDM2NTI2MzksNC40NTQ3NzgzODI3OTAzMjddLFwiUmVndWx1c1wiOlswLjg1NDE2NDEzNTkyNjAyNDgsMy45NTE5NDkwMjUyOTA3NjA1XSxcIkFkaGFmZXJhXCI6WzAuOTU5MDU4NDIzOTcwODg0MSwzLjY2OTIwNTY4NjQ2NzY3OV0sXCJUYW5pYSBCb3JlYWxpc1wiOlswLjk2MTUwMTg4NDkyMzY3NjIsMy4wNjk1MTA1NTU0ODI0MjczXSxcIlRhbmlhIEF1c3RyYWxpc1wiOlswLjk4MzY2NzU2NjQyNDAwNDEsMy4xMDQ5NDA3MzkyOTc5MTIzXSxcIlByYWVjaXB1YVwiOlsxLjExMjI5ODMzMjI5NTk4NiwzLjMxNjEyNTU3ODc4OTIyNjNdLFwiQ2hhbGF3YW5cIjpbMS4xMDYwMTUxNDY5ODg4MDY3LDMuMDY3OTM5NzU5MTU1NjMyNl0sXCJBbGtlc1wiOlswLjY0Nzg2NjIxODM0MDI5NTEsNC42OTU5ODI4ODU0MTU5NDNdLFwiTWVyYWtcIjpbMC45NTY0NDA0MzAwOTI4OTI2LDIuNjAzNTA3NjQ1MTk5OTQxXSxcIkR1YmhlXCI6WzAuODkwMjkyNDUxNDQyMzA3NSwyLjQ5MzIwMjgzNjQ3Mzg5OTZdLFwiWm9zbWFcIjpbMS4xNjY0MDM1MzkxMDc4MTA1LDMuOTEzMzc3MjQ4ODIxNjg1Nl0sXCJDaGVydGFuXCI6WzEuMTI3MzA4MTYzODYzMTM3NSw0LjEwNzk4MTQ2MDQxOTA1NF0sXCJBbHVsYSBCb3JlYWxpc1wiOlsxLjIwNTY3MzQ0NzI3NzY4MjksMy4zMjg4NjY0ODIzMjg3ODQ2XSxcIkdpYXVzYXJcIjpbMC44MDYzNDIxMTQ0MjEzODAzLDIuMzIwOTM4ODM5MzAyMDU5NF0sXCJGb3Jtb3NhXCI6WzEuMjQ0NzY4ODIyNTIyMzU1Nyw0LjAxMDc2NjYyMTA4Mjk2OV0sXCJBbGthZnphaCwgVGFpeWFuZ3Nob3VcIjpbMS4xNDcwMzAzODQ0MTA2NzMzLDIuNjIzNTc4OTMxNTk3ODc2XSxcIkRlbmVib2xhXCI6WzEuMjM1ODY3NjQzMzM3MTg0Nyw0LjM3NDY2Nzc3MDEyMzc4NzVdLFwiWmF2aWphdmFcIjpbMS4wNjAyODc1MjA1ODY1NTUyLDQuNzIxMTE1NjI2NjQ0NjYyXSxcIlBoZWNkYVwiOlsxLjA3MTI4MzA5NDg3NDExOTQsMi40NTgxMjE3MTg1MDg4MTRdLFwiVG9uYXRpdWhcIjpbMC42OTY3MzU0MzczOTYxMzY0LDIuMjA0Njk5OTExMTE5MjM3XSxcIkFsY2hpYmFcIjpbMC42NDc4NjYyMTgzNDAyOTUxLDUuMDcyOTc0MDAzODQ2NzE5XSxcIk1pbmthclwiOlswLjY4NTIxNjI2NDMzMjk3MzgsNS4wNzE3NTIyNzMzNzAzMjJdLFwiSW1haVwiOlswLjA2NjE0Nzk3ODY1MDU4NTEsNS4yMDUwOTU0MjgyMjI2ODldLFwiTWVncmV6XCI6WzEuMDM3MDc0NjQxNTM1MDMwNywyLjMxMzc4Mjk4OTM2ODg4MjZdLFwiR2llbmFoXCI6WzAuNzc2NjcxNTE3MTM3NDc2Niw1LjA3ODczMzU5MDM3ODNdLFwiWmFuaWFoXCI6WzEuMDY3OTY2OTY5Mjk1MzMwMiw0Ljk5ODYyMjk3NzcxMTc2XSxcIkdpbmFuXCI6WzMuOTI2OTkwODE2OTg3MjQxNGUtMiw1LjIyMjU0ODcyMDc0MjYzMl0sXCIqKiBTVEZBIDIxXCI6WzEuNDgwMzg4MjcxNTQxNTkwMSwzLjkzMDgzMDU0MTM0MTYyOV0sXCJBbGdvcmFiXCI6WzAuODAzNzI0MTIwNTQzMzg4Nyw1LjE1NzA5ODg3Mzc5Mjg0Nl0sXCJHYWNydXhcIjpbMC4wOTg2MTExMDI3Mzc2Nzk2Myw1LjIzODk1NDgxNTcxMTM3OV0sXCJDaGFyYVwiOlsxLjMxNDU4MTk5MjYwMjEyOSwyLjM3NTM5MzExMTk2NDI4MjZdLFwiS3JhelwiOlswLjY4NjA4ODkyODk1ODk3MSw1LjE5ODgxMjI0MjkxNTUwOV0sXCJQb3JyaW1hXCI6WzEuMDcwNDEwNDMwMjQ4MTIyMyw1LjE5ODQ2MzE3NzA2NTExMV0sXCJMYSBTdXBlcmJhXCI6WzEuMjUwNTI4NDA5MDUzOTM3MywyLjIwNjk2ODgzOTE0NjgyOTZdLFwiTWltb3NhXCI6WzAuMDU1NTAxNDcwMjEzNDE5NjgsNS4yNzg5MjI4NTU1ODIwNDhdLFwiVGlhbnlpXCI6WzAuODc4NDI0MjEyNTI4NzQ2LDIuMTU2MDA1MjI0OTg4NTk1M10sXCJBbGlvdGhcIjpbMS4wNjc0NDMzNzA1MTk3MzIsMi4xMzI0NDMyODAwODY2NzJdLFwiTWluZWxhdXZhXCI6WzEuMTU2MjgwNjI5NDQ2MjQzMyw1LjMzMjUwNDQ2MzYxODI3NV0sXCJDb3IgQ2Fyb2xpXCI6WzEuMzc0Nzk1ODUxNzk1OTMzMywyLjA2NDU0OTk3MjE4NDA5MjhdLFwiVGFpeWlcIjpbMC45MDE5ODYxNTc0MzA2Njk1LDIuMTMzODM5NTQzNDg4MjY3M10sXCJWaW5kZW1pYXRyaXhcIjpbMS4yODUwODU5MjgyNDM0MjQ4LDUuNDUxMzYxMzg1Njc5MDg4XSxcIk1pemFyIEFcIjpbMS4wNzQ3NzM3NTMzNzgxMDgsMS45NzQxNDE5MTY5MzA3ODYxXSxcIk1pemFyIEJcIjpbMS4wNzQ3NzM3NTMzNzgxMDgsMS45NzQxNDE5MTY5MzA3ODYxXSxcIlNwaWNhXCI6WzAuODg3MzI1MzkxNzEzOTE3Miw1LjUxNzE2MDI5ODQ3OTI3Nl0sXCJBbGNvclwiOlsxLjA3Mjg1Mzg5MTIwMDkxNDUsMS45NjgyMDc3OTc0NzQwMDUzXSxcIkhlemVcIjpbMS4wNTQwMDQzMzUyNzkzNzU1LDUuNjc2NjgzMzkyMTExNTU3XSxcIkhEIDExOTM2MUFCXCI6WzAuMzQ0ODc3MDYwMTk0MDc5NTQsNS40NjYzNzEyMTcyNDYyNF0sXCJBbGNhaWQsIEFsa2FpZFwiOlsxLjE0MDA0OTA2NzQwMjY5NiwxLjc1NzM3MjAyMzgzMzA5MDNdLFwiTXVwaHJpZFwiOlsxLjI3NDYxMzk1MjczMTQ1ODgsMC4wOTI1MDI0NTAzNTU2OTk0N10sXCJBZ2VuYSwgSGFkYXJcIjpbMC4wMjE4MTY2MTU2NDk5MjkxMiw1LjQ0MTQxMzAwODk0MjcyMV0sXCJNZW5rZW50XCI6WzAuNDIwMjc1MjgzODgwMjM0NTUsNS41NzU2Mjg4Mjg0MjEwODVdLFwiVGh1YmFuXCI6WzAuODg5NDE5Nzg2ODE2MzEwNCwxLjkyODkzNzg4OTMwNDEzM10sXCJLYW5nXCI6WzAuODMyNTIyMDUzMjAxMjk1Miw1LjgyMDg0NzU4ODMyNjI4OV0sXCJTeXJtYVwiOlswLjg5MTMzOTY0ODk5MzUwNDIsNS44OTQ4NDk1NDg2MTA4NDhdLFwiQXJjdHVydXNcIjpbMS4yMDYxOTcwNDYwNTMyODEyLDAuMjY0MjQyODQ4NzUxOTQxNV0sXCJYdWFuZ2VcIjpbMS4xMjg3MDQ0MjcyNjQ3MzI5LDEuNTE3OTEyODUwNDU5NDY4M10sXCJLaGFtYmFsaWFcIjpbMC43NzIzMDgxOTQwMDc0OTA4LDUuODE4OTI3NzI2MTQ5MDk0XSxcIkVsZ2FmYXJcIjpbMC45MTY0NzIzOTAyMjIyMjI0LDYuMDI1MjI1NjQzNzM0ODI1XSxcIlNlZ2ludXNcIjpbMS4xNTQ4ODQzNjYwNDQ2NDgsMS4xNzM5MDg0NTQ4OTEzODZdLFwiUmlnZWwgS2VudGF1cnVzLCBSaWdpbCBLZW50YXVydXNcIjpbLTEuMjM5MTgzNzY4OTE1OTczOWUtMiw1LjUxMTQwMDcxMTk0NzY5NF0sXCJUb2xpbWFuXCI6Wy0xLjIzOTE4Mzc2ODkxNTk3MzllLTIsNS41MTE0MDA3MTE5NDc2OTRdLFwiSXphclwiOlsxLjEzMDYyNDI4OTQ0MTkyNjcsMC42ODczMTA2NTk0MzUzNjcxXSxcIlp1YmVuZWxnZW51YmlcIjpbMC42NjMzOTk2NDg2ODMwNDQ2LDUuOTM5ODc5MDQzMzEyMzAyXSxcIk1lcmdhXCI6WzEuMDQ2NjczOTUyNDIwOTk5NCwxLjM5NTkxNDMzNTc0NTA2NDddLFwiS29jaGFiXCI6WzAuNzA2ODU4MzQ3MDU3NzAzNSwxLjk2NjExMzQwMjM3MTYxMjNdLFwiTmVra2FyXCI6WzEuMDQ3ODk1NjgyODk3Mzk1NSwxLjE4MDE5MTY0MDE5ODU2NTddLFwiQnJhY2hpdW1cIjpbMC40OTk1MTMyMzE5MjA3NzcxLDUuODg1NTk5MzAzNTc1Mjc5XSxcIkkgQm9vKlwiOlswLjk5NTg4NDg3MTE4Nzk2NDQsMS40MDI1NDY1ODY5MDI2NDMyXSxcIlp1YmVuZXNjaGFtYWxpXCI6WzAuNjg0NjkyNjY1NTU3Mzc1NCw2LjE0MzkwODAzMjg3MDQzODVdLFwiUGhlcmthZCBNaW5vclwiOlswLjcxNjI4MzEyNTAxODQ3MjgsMS44OTc1MjE5NjI3NjgyMzUxXSxcIkFsa2FsdXJvcHNcIjpbMC45ODI3OTQ5MDE3OTgwMDcsMS4wNTQwMDQzMzUyNzkzNzU1XSxcIlBoZXJrYWRcIjpbMC43MTI3OTI0NjY1MTQ0ODQyLDEuODkyOTg0MTA2NzEzMDQ5N10sXCJFZGFzaWNoXCI6WzAuODQ4NzUzNjE1MjQ0ODQyNSwxLjY0MDA4NTg5ODA5OTA3MTNdLFwiTnVzYWthblwiOlswLjk3MDU3NzU5NzAzNDA0NjcsMC43OTU2OTU2MDU5ODQyMTQ4XSxcIlp1YmVuZWxoYWtyYWJpXCI6WzAuNTYxOTk2MDE5MTQyMTc0MSw2LjEzNTAwNjg1MzY4NTI2OF0sXCJBbHBoZWNjYVwiOlswLjkzODQ2MzUzODc5NzM1MSwwLjczMDc2OTM1NzgxMDAyNTddLFwiVW51a2FsaGFpXCI6WzAuNzY5MzQxMTM0Mjc5MTAwNCwwLjI0NzgzNjc1Mzc4MzE5NDc4XSxcIkNob3dcIjpbMC44MzU0ODkxMTI5Mjk2ODU1LDAuNDUzNDM2NTM5NjY4MTI2OF0sXCJHdWRqYVwiOlswLjg0MzUxNzYyNzQ4ODg1OTQsMC41MjUzNDQxMDQ4NTAyOTMzXSxcIklrbGlsXCI6WzAuMzE4ODcxNjU0MzM5MzY0LDYuMDE0OTI4MjAxMTQ4MDU4XSxcIkZhbmdcIjpbMC4zNTMwODAxMDc2Nzg0NTI5LDYuMDYwMTMyMjI4Nzc0NzExNV0sXCJEc2NodWJiYVwiOlswLjM5MjUyNDU0ODc3MzUyNDY2LDYuMTEwMzk3NzExMjMyMTQ4XSxcIkphYmJhaFwiOlswLjM5NjE4OTc0MDIwMjcxMjgsNi4xODkxMTIwNjA0OTcwOTJdLFwiWWVkIFByaW9yXCI6WzAuNTYxOTk2MDE5MTQyMTc0MSwwLjE1NDQ2MTYzODgwMTQ5ODE2XSxcIlllZCBQb3N0ZXJpb3JcIjpbMC41Mzc3MzU5NDI1Mzk0NTI5LDAuMTQ5NDAwMTgzOTcwNzE0Nl0sXCJBbG5peWF0XCI6WzAuMjk2NzA1OTcyODM5MDM2MDUsNi4xMzE1MTYxOTUxODEyNzk1XSxcIkN1amFtXCI6WzAuNjc0MjIwNjkwMDQ1NDA5NSwwLjUxNDE3Mzk5NzYzNzUyOTVdLFwiQXRoZWJ5bmVcIjpbMC43MTQ3MTIzMjg2OTE2NzgsMS42MTU4MjU4MjE0OTYzNTAzXSxcIkFudGFyZXNcIjpbMC4yNjI4NDY1ODUzNTAzNDYwNSw2LjE0MjY4NjMwMjM5NDA0M10sXCJLb3JuZXBob3Jvc1wiOlswLjcwMTc5Njg5MjIyNjkxOTksMC42ODA4NTI5NDEyMDI5ODc5XSxcIk1hcmZpa1wiOlswLjU1NTg4NzM2Njc2MDE5NCwwLjI5ODgwMDM2Nzk0MTQyOTJdLFwiUGFpa2F1aGFsZVwiOlswLjIyMzU3NjY3NzE4MDQ3MzY0LDYuMTM1NTMwNDUyNDYwODY2XSxcIkF0cmlhXCI6Wy0wLjI2NjMzNzI0Mzg1NDMzNDY2LDUuNjExOTMxNjc2ODYyNTY4XSxcIkxhcmF3YWdcIjpbMC4xMTQ0OTM1OTg5MzA4MjgwMSw2LjA4ODA1NzQ5NjgwNjYyXSxcIlhhbWlkaW11cmFcIjpbMC4wNjgyNDIzNzM3NTI5NzgyOSw2LjA0MDkzMzYwNzAwMjc3M10sXCJQaXBpcmltYVwiOlswLjA2NzM2OTcwOTEyNjk4MTEyLDYuMDQyMzI5ODcwNDA0MzY5XSxcIk9BTyAxNjUzLTQwXCI6WzAuMDI1NDgxODA3MDc5MTE3MjEsNi4wMTMxODI4NzE4OTYwNjNdLFwiU2FiaWtcIjpbMC4yNDQ1MjA2MjgyMDQ0MDU1NywwLjExNzI4NjEyNTczNDAxODk1XSxcIkFsZGhpYmFoXCI6WzAuNjExNTYzMzY5ODk4ODEzMSwxLjY3NTY5MDYxNDgzOTc1Nl0sXCJMU0YgMVwiOlstMS45MTk4NjIxNzcxOTM3NjI1ZS0zLDYuMDgyODIxNTA5MDUwNjM3XSxcIlNhcmluXCI6WzAuNTQ4MzgyNDUwOTc2NjE4NCwwLjgxNzMzNzY4ODcwODk0NDVdLFwiTGVzYXRoXCI6Wy0zLjIxMTQwNTgyMzY2OTU2NjRlLTIsNi4xMzA4MTgwNjM0ODA0ODFdLFwiTWFhc3ltXCI6WzAuNDk2MzcxNjM5MjY3MTg3MzYsMC44NjM1ODg5MTM4ODY3OTQyXSxcIlNoYXVsYVwiOlstMy44NTcxNzc2NDY5MDc0Njg0ZS0yLDYuMTM5MDIxMTEwOTY0ODU1XSxcIlJhc3RhYmFuXCI6WzAuNTgxMzY5MTczODM5MzExMiwxLjM4ODkzMzAxODczNzA4NzRdLFwiU2FyZ2FzXCI6Wy0wLjEwNDM3MDY4OTI2OTI2MDkxLDYuMDU4NzM1OTY1MzczMTE1XSxcIlJhc2FsaGFndWVcIjpbMC4zOTM5MjA4MTIxNzUxMjAyLDAuNjI2NTczMjAxNDY1OTY0M10sXCJDZXJ2YW50ZXNcIjpbLTAuMjAwNzEyODYzOTc5MzQ3OSw1LjkzNTE2NjY1NDMzMTkxN10sXCJDZWJhbHJhaVwiOlswLjMwMDAyMjA5ODQxNzgyNTMsMC41MDk4MTA2NzQ1MDc1NDM3XSxcIkFscnViYVwiOlswLjU0NzMzNTI1MzQyNTQyMTgsMS40MjIyNjg4MDc0NTAxNzldLFwiRnV5dWVcIjpbLTAuMDg2MjE5MjY1MDQ4NTE5ODksNi4xNjk3Mzg5MDU3OTk5NTVdLFwiRHppYmFuXCI6WzAuNTQxNTc1NjY2ODkzODQwNSwxLjc5NzE2NTUzMDc3ODU2MV0sXCJHcnVtaXVtXCI6WzAuNTI3NjEzMDMyODc3ODg1OSwxLjQ4NjQ5NjkyMzkyMzU3MDZdLFwiRWx0YW5pblwiOlswLjUwOTk4NTIwNzQzMjc0MzEsMS4zNzk4NTczMDY2MjY3MTddLFwiQWxuYXNsXCI6Wy0wLjA3OTIzNzk0ODA0MDU0MjU2LDEuNjA1NzAyOTExODM0NzgzMmUtMl0sXCJZaWxkdW5cIjpbMC40OTI4ODA5ODA3NjMxOTg2NCwyLjA4MjAwMzI2NDcwNDAzNl0sXCJQb2xpc1wiOlstMi43OTI1MjY4MDMxOTA5MjczZS0yLDAuMTc0NTMyOTI1MTk5NDMyOTVdLFwiS2F1cyBNZWRpYVwiOlstMC4xMjQ3OTEwNDE1MTc1OTQ1NywwLjA1MjM1OTg3NzU1OTgyOTg5XSxcIkthdXMgQXVzdHJhbGlzXCI6Wy0wLjE3MTIxNjc5OTYyMDY0MzczLDYuMjY5MjIyNjczMTYzNjMyXSxcIkFsYXRoZmFyXCI6WzAuMzgwNDgxNzc2OTM0NzYzODcsMS4xNzUxMzAxODUzNjc3ODJdLFwiS2F1cyBCb3JlYWxpc1wiOlstMC4xMTM3OTU0NjcyMzAwMzAyOCwwLjEzMzY5MjIyMDcwMjc2NTY1XSxcIkZhZm5pclwiOlswLjQ3MzUwNzgyNjA2NjA2MTU3LDEuNjY1MzkzMTcyMjUyOTg5M10sXCJWZWdhXCI6WzAuMzM1ODAxMzQ4MDgzNzA5LDEuMTc3MDUwMDQ3NTQ0OTc1OV0sXCJYaWhlXCI6WzAuMzAwNTQ1Njk3MTkzNDIzNTYsMS4xNDczNzk0NTAyNjEwNzIxXSxcIlNoZWxpYWtcIjpbMC4yNTc5NTk2NjM0NDQ3NjE5LDEuMTAyODczNTU0MzM1MjE2OF0sXCJBaW5hbHJhbWlcIjpbLTAuMTg3MDk5Mjk1ODEzNzkyMTQsMC4yMjIzNTQ5NDY3MDQwNzc2XSxcIk51bmtpXCI6Wy0wLjIxNjk0NDQyNjAyMjg5NTE1LDAuMTY2ODUzNDc2NDkwNjU3OV0sXCJTdWxhZmF0XCI6WzAuMjIzNTc2Njc3MTgwNDczNjQsMS4xMDUxNDI0ODIzNjI4MDk1XSxcIkFzY2VsbGFcIjpbLTAuMjY3OTA4MDQwMTgxMTI5NTcsMC4xMTkzODA1MjA4MzY0MTIxNF0sXCJQb2xhcmlzIEF1c3RyYWxpc1wiOlstMC40ODM2MzA3MzU3Mjc2Mjg3LDUuMzA0MjMwMTI5NzM1OTY3XSxcIk9rYWJcIjpbMC4wNTY3MjMyMDA2ODk4MTU3MSwwLjgxNzg2MTI4NzQ4NDU0MjhdLFwiTWVyaWRpYW5hXCI6Wy0wLjM0MTkxMDAwMDQ2NTY4OTE1LDYuMjc1MTU2NzkyNjIwNDEzXSxcIkFsYmFsZGFoXCI6Wy0wLjIzMTk1NDI1NzU5MDA0NjM3LDAuMjc3MzMyODE4MTQxODk5XSxcIkd1bWFsYVwiOlstMC4yNzU0MTI5NTU5NjQ3MDUxNiwwLjIzNDkyMTMxNzMxODQzNjc3XSxcIkFsYWRmYXJcIjpbMC4yMjI1Mjk0Nzk2MjkyNzcwMiwxLjIzMjU1MTUxNzc1ODM5NTddLFwiQWx0YWlzXCI6WzAuNDAxNDI1NzI3OTU4Njk1OCwxLjcyMTc2NzMwNzA5MjQwNjJdLFwiQXJrYWIgUHJpb3JcIjpbLTAuNDE3NjU3MjkwMDAyMjQzMDUsNi4xNzE2NTg3Njc5NzcxNDldLFwiQXJrYWIgUG9zdGVyaW9yXCI6Wy0wLjQyMDc5ODg4MjY1NTgzMjgsNi4xNjU4OTkxODE0NDU1NjddLFwiUnVrYmF0XCI6Wy0wLjQwMjk5NjUyNDI4NTQ5MDcsNi4yNDMyMTcyNjczMDg5MTZdLFwiQW5zZXJcIjpbNS45MzQxMTk0NTY3ODA3MjA0ZS0yLDEuMDI5NTY5NzI1NzUxNDU1MV0sXCJBbHNhZmlcIjpbMC4zODIwNTI1NzMyNjE1NTg3LDEuNzY4MzY3NTk4MTIwNjU0Nl0sXCJTaGFtXCI6Wy0wLjAzNzM1MDA0NTk5MjY3ODY1LDAuOTUwMzMxNzc3NzEwOTEyNV0sXCJUYXJhemVkXCI6Wy0wLjEyMzU2OTMxMTA0MTE5ODUzLDAuODUwNDk4OTQ0NDk2ODM2N10sXCJGYXdhcmlzXCI6WzAuMTc4NzIxNzE1NDA0MjE5MzYsMS4zNzM3NDg2NTQyNDQ3MzY2XSxcIkFsdGFpclwiOlstMC4xNTU1MDg4MzYzNTI2OTQ3NywwLjgzMzIyMDE4NDkwMjA5MjldLFwiVHlsXCI6WzAuMzYzNTUyMDgzMTkwNDE4OCwxLjc4Nzc0MDc1MjgxNzc5MThdLFwiTGliZXJ0YXNcIjpbLTAuMTcxOTE0OTMxMzIxNDQxNDUsMC44MzQ0NDE5MTUzNzg0ODldLFwiVGVyZWJlbGx1bVwiOlstMC40MzcwMzA0NDQ2OTkzODAxLDAuMjU5MzU1OTI2ODQ2MzU3NF0sXCJBbHNoYWluXCI6Wy0wLjE5MzU1NzAxNDA0NjE3MTE1LDAuODA1MTIwMzgzOTQ0OTg0M10sXCJQcmltYSBHaWVkaVwiOlstMC40MzEwOTYzMjUyNDI1OTk0LDAuNTQyNjIyODY0NDQ1MDM3XSxcIkFsZ2VkaSwgR2llZGlcIjpbLTAuNDMzMDE2MTg3NDE5NzkzMTQsMC41NDI3OTczOTczNzAyMzY1XSxcIkFsc2hhdFwiOlstMC40NDQ3MDk4OTM0MDgxNTUyLDAuNTQ0MDE5MTI3ODQ2NjMyNV0sXCJEYWJpaCBNaW5vclwiOlstMC40NTkzNzA2NTkxMjQ5MDc1NCwwLjUwODIzOTg3ODE4MDc0ODhdLFwiRGFiaWgsIERhYmloIE1ham9yXCI6Wy0wLjQ2MDI0MzMyMzc1MDkwNDcsMC41MDg3NjM0NzY5NTYzNDddLFwiUGVhY29ja1wiOlstMC42MTQxODEzNjM3NzY4MDQ1LDUuOTUwMDAxOTUyOTczODY5XSxcIlNBRFJcIjpbMy4yNjM3NjU3MDEyMjkzOTY1ZS0yLDEuMzYzOTc0ODEwNDMzNTY4N10sXCJBbGR1bGZpblwiOlstMC4yODk1NTAxMjI5MDU4NTkyNCwwLjk2NzI2MTQ3MTQ1NTI1NzRdLFwiUm90YW5ldlwiOlstMC4yNzMxNDQwMjc5MzcxMTI1NywxLjAyNzY0OTg2MzU3NDI2MTJdLFwiU3VhbG9jaW4sIFN2YWxvY2luXCI6Wy0wLjI2NzM4NDQ0MTQwNTUzMTMsMS4wNTI0MzM1Mzg5NTI1ODA3XSxcIkRlbmViXCI6WzAuMDM0OTA2NTg1MDM5ODg2NTksMS40NzA5NjM0OTM1ODA4MjFdLFwiQWxqYW5haFwiOlstMC4wOTk2NTgzMDAyODg4NzYyMiwxLjMyNTQwMzAzMzk2NDQ5MzhdLFwiQWxiYWxpXCI6Wy0wLjUyNTM0NDEwNDg1MDI5MzMsMC42NTc2NDAwNjIxNTE0NjM0XSxcIk11c2ljYVwiOlstMC4zODM2MjMzNjk1ODgzNTM2NCwxLjAyNDMzMzczNzk5NTQ3Ml0sXCJQTiBPdSA0XCI6WzAuMTM5NDUxODA3MjM0MzQ2OTQsMS43MTk0OTgzNzkwNjQ4MTM1XSxcIktpdGFscGhhXCI6Wy0wLjUwMTA4NDAyODI0NzU3MiwwLjk4NDAxNjYzMjI3NDQwMzFdLFwiQWxkZXJhbWluXCI6WzAuMTYwMDQ2NjkyNDA3ODgwMDMsMS43NjI3ODI1NDQ1MTQyNzI5XSxcIlNhZGFsc3V1ZFwiOlstMC42NjExMzA3MjA2NTU0NTIxLDAuODM4MTA3MTA2ODA3Njc3MV0sXCJBbGZpcmtcIjpbMC4yNDQ4Njk2OTQwNTQ4MDQ0NCwxLjg3NjkyNzA3NzU5NDcwMl0sXCJCdW5kYVwiOlstMC43MDQwNjU4MjAyNTQ1MTI2LDAuODEwNzA1NDM3NTUxMzY2MV0sXCJOYXNoaXJhXCI6Wy0wLjc3OTYzODU3Njg2NTg2NywwLjYyODMxODUzMDcxNzk1ODZdLFwiQXplbGZhZmFnZVwiOlstMi4yNjg5MjgwMjc1OTI2Mjg0ZS0yLDEuNjY2NDQwMzY5ODA0MTg1OV0sXCJFbmlmXCI6Wy0wLjU0OTA4MDU4MjY3NzQxNjEsMS4xNDQ0MTIzOTA1MzI2ODE3XSxcIkVyYWtpcywgSGVyc2NoZWxcXCdzIEdhcm5ldCBTdGFyXCI6WzAuMDc1Mzk4MjIzNjg2MTU1MDQsMS43NTU4MDEyMjc1MDYyOTU1XSxcIkRlbmViIEFsZ2VkaVwiOlstMC44MDMwMjU5ODg4NDI1OTEsMC42NTYyNDM3OTg3NDk4Njc5XSxcIkFsZGhhbmFiXCI6Wy0wLjg5ODMyMDk2NjAwMTQ4MTQsMC4xMDY2Mzk2MTcyOTY4NTM1NV0sXCJTYWRhbG1lbGlrXCI6Wy0wLjczNDI2MDAxNjMxNDAxNDUsMS4wNDU5NzU4MjA3MjAyMDE3XSxcIkFsbmFpclwiOlstMC45MTU3NzQyNTg1MjE0MjQ3LDYuMTA4NjUyMzgxOTgwMTUzNV0sXCJCaWhhbVwiOlstMC42NzU2MTY5NTM0NDcwMDUsMS4xNzY1MjY0NDg3NjkzNzc0XSxcIkFuY2hhXCI6Wy0wLjg0ODU3OTA4MjMxOTY0MywwLjkzMzkyNTY4Mjc0MjE2NTddLFwiU2FkYWNoYmlhXCI6Wy0wLjgwMDA1ODkyOTExNDIwMDcsMS4wODUyNDU3Mjg4OTAwNzRdLFwiU2l0dWxhXCI6Wy0wLjg4NTc1NDU5NTM4NzEyMjIsMS4wOTM5NzIzNzUxNTAwNDU5XSxcIkhvbWFtXCI6Wy0wLjcwOTY1MDg3Mzg2MDg5NDMsMS4zNzYzNjY2NDgxMjI3Mjg0XSxcIlRpYWtpXCI6Wy0xLjAxMTQxODMwMTUzMDcxNCw2LjA0MzU1MTYwMDg4MDc2NV0sXCJNYXRhclwiOlstMC40MzU0NTk2NDgzNzI1ODUyLDEuNjE0NDI5NTU4MDk0NzU0N10sXCJTYWRhbGJhcmlcIjpbLTAuNTMzMzcyNjE5NDA5NDY3MSwxLjU4MjY2NDU2NTcwODQ1ODFdLFwic2lnIFBlZyBBXCI6Wy0wLjc1MjIzNjkwNzYwOTU1NjEsMS40MTE0NDc3NjYwODc4MTQ0XSxcIlNrYXRcIjpbLTEuMDU4ODkxMjU3MTg0OTU5OCwwLjg2NTMzNDI0MzEzODc4ODZdLFwiRm9tYWxoYXV0IEJcIjpbLTEuMTI3NjU3MjI5NzEzNTM2MywwLjI3ODIwNTQ4Mjc2Nzg5NjE0XSxcIkZvbWFsaGF1dFwiOlstMS4xMzI3MTg2ODQ1NDQzMiwwLjM1NzYxNzk2MzczMzYzODFdLFwiSGVsdmV0aW9zXCI6Wy0wLjYwNjE1Mjg0OTIxNzYzMDYsMS41NzE4NDM1MjQzNDYwOTMzXSxcIkZ1bWFsc2FtYWthaFwiOlstMC44NjU4NTc4NDE5MTQzODY5LDEuMzc1MTQ0OTE3NjQ2MzMyNF0sXCJTY2hlYXRcIjpbLTAuNTA3MDE4MTQ3NzA0MzUyNywxLjY3MDk3ODIyNTg1OTM3MV0sXCJNYXJrYWJcIjpbLTAuNzA0NzYzOTUxOTU1MzEwMywxLjU0MDc3NjY2MzY2MDU5NDJdLFwiU2FsbVwiOlstMC42MDQwNTg0NTQxMTUyMzc0LDEuNzAxODcwNTUzNjE5NjcwOF0sXCJBbGthcmFiXCI6Wy0wLjYxNzE0ODQyMzUwNTE5NDksMS43MjAwMjE5Nzc4NDA0MTE4XSxcIlZlcml0YXRlXCI6Wy0wLjM2NzM5MTgwNzU0NDgwNjQsMS44NTcyMDQ4NTcwNDcxNjZdLFwiRXJyYWlcIjpbMC4yNjcyMDk5MDg0ODAzMzE5LDIuMDc2NzY3Mjc2OTQ4MDUyN119JykiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDZDtBQUV2QyxNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxxbEJBQXFsQixFQUFDLG9CQUFvQixFQUFDLHNoREFBc2hELEVBQUMsMENBQTBDLEVBQUMsbWVBQW1lLEVBQUMsd0NBQXdDLEVBQUMsZy9CQUFnL0IsRUFBQztBQUN0c0gsTUFBTSxJQUFJLEdBQUcsaXJGQUFpckY7QUFFL3FGLFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQywrQ0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQ3JDLEdBQ1gsRUFDTiwyQ0FBQyx1REFBVSxJQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUksSUFDdkQsSUFDUDtBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEJzQjtBQUM0QjtBQUVsQjtBQUNNO0FBQ0E7QUFFaEMsTUFBTSxZQUFhLFNBQVEsMENBQVU7SUFhWDtJQVpaLEdBQUcsQ0FBWTtJQUNmLEdBQUcsQ0FBZ0I7SUFDbkIsT0FBTyxDQUFjO0lBQ3JCLEtBQUssQ0FBUTtJQUViLFdBQVcsR0FBRyxJQUFJLG9EQUFvQixDQUFDO1FBQ3BELE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUM3QyxJQUFJLEVBQUUsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztLQUNwQixDQUFDO0lBRUYsWUFBNkIsT0FBbUI7UUFDNUMsS0FBSyxFQUFFO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFFNUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsa0JBQWtCLEVBQUU7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDRDQUFZLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FBQztZQUNQLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFNBQVMsRUFBRSxzQkFBc0I7U0FDcEMsQ0FBQzthQUNELFVBQVUsQ0FBQyxNQUFNLENBQUM7YUFDbEIsY0FBYyxFQUFFO1FBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksMENBQVUsQ0FBQztZQUM1QixTQUFTLEVBQUUsTUFBTTtTQUNwQixDQUFDO1FBQ0YsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxNQUFNLFVBQVUsR0FBRyxJQUFJLDBDQUFVLENBQzdCO1lBQ0ksU0FBUyxFQUFFLE1BQU07WUFDakIsS0FBSyxFQUFFLE1BQU07U0FDaEIsRUFDRCxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FDakI7UUFDRCxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLDBDQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksd0NBQUUsSUFBSSx3Q0FBRSxDQUFDO1FBQ3RELE1BQU0sR0FBRyxHQUFHLElBQUksOENBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7SUFDbEIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtJQUN6QixDQUFDO0lBRUQsS0FBSztRQUNELE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSTtRQUN4RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU87UUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQzVELEdBQUcsQ0FBQyxHQUFHLEVBQUU7UUFDVCxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDMUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDdkUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN6RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDO1FBQ3RDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7UUFDVixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBS0QsU0FBUyxrQkFBa0I7SUFLdkIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDdkMsSUFBSSxDQUFDLE9BQU87UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDO0lBRTFELHNEQUFVLENBQUMsNEJBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsTUFBTSxTQUFTLEdBQWEsRUFBRTtJQUM5QixNQUFNLEtBQUssR0FBYSxFQUFFO0lBQzFCLE1BQU0sQ0FBQyxHQUFHLElBQUk7SUFDZCxNQUFNLENBQUMsR0FBRyxJQUFJO0lBQ2QsTUFBTSxLQUFLLEdBQUcsQ0FBQztJQUNmLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQztJQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLElBQUksR0FBRyxpQkFBaUI7SUFDaEMsT0FBTyxDQUFDLFlBQVksR0FBRyxRQUFRO0lBQy9CLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTTtJQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNWLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBSyxDQUE4QixFQUFFLENBQUM7UUFDakUsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDaEMsQ0FBQyxHQUFHLENBQUM7WUFDTCxDQUFDLElBQUksRUFBRTtRQUNYLENBQUM7UUFDRCxNQUFNLE1BQU0sR0FBRyw0QkFBSyxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTTtZQUFFLFNBQVE7UUFFckIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSztJQUM5QixDQUFDO0lBQ0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBQ3ZDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHc0I7QUFFaUI7QUFDTjtBQUNZO0FBQ1A7QUFDQTtBQUd2QyxTQUFTLElBQUksQ0FBQyxHQUFlO0lBQ3pCLElBQUksd0RBQXdCLENBQUMsR0FBRyxFQUFFO1FBQzlCLFlBQVksRUFBRSxJQUFJO0tBQ3JCLENBQUM7SUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksK0NBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNYLHNEQUFrQixDQUFDLDJCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU07UUFFakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDM0MsR0FBRyxDQUFDLEdBQUcsQ0FDSCxJQUFJLCtDQUFlLENBQUMsR0FBRyxFQUFFO1lBQ3JCLEtBQUssRUFBRSxzREFBc0I7WUFDN0IsUUFBUSxFQUFFLENBQUMsSUFBSSw0Q0FBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQztTQUM3QyxDQUFDLENBQ0w7UUFDRCxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdjLFNBQVMsSUFBSTtJQUN4QixPQUFPLDJDQUFDLGdEQUFJLElBQUMsT0FBTyxFQUFFLElBQUksR0FBSTtBQUNsQyxDQUFDO0FBR00sTUFBTSxZQUFhLFNBQVEsMENBQVU7SUFpQm5CO0lBZkosS0FBSyxDQUFRO0lBQ2IsR0FBRyxDQUFZO0lBQ2YsR0FBRyxDQUFnQjtJQUVuQixXQUFXLEdBQUcsSUFBSSxvREFBb0IsQ0FBQztRQUNwRCxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO1FBQ3hCLElBQUksRUFBRSxHQUFHO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0tBQ3BCLENBQUM7SUFLRixZQUNxQixPQUFtQixFQUNwQyxJQUFrQjtRQUVsQixLQUFLLEVBQUU7UUFIVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBSXBDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSwwQ0FBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSTtZQUNKLElBQUk7U0FDUCxDQUFDO1FBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBVSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLDhDQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELEtBQUs7UUFDRCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSTtRQUMvQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU87UUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQzVELEdBQUcsQ0FBQyxHQUFHLEVBQUU7UUFDVCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUN2RSxHQUFHLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3pFLEdBQUcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEYsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCO0FBQ0c7QUFFYTtBQUNNO0FBU2xDLFNBQVMsY0FBYyxDQUFDLEtBQTBCO0lBQzdELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQThCO1lBQzNDLEdBQUcsS0FBSztZQUNSLEtBQUs7U0FDUjtRQUNELE9BQU8sMkNBQUMsb0JBQW9CLE9BQUssV0FBVyxHQUFJO0lBQ3BELENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBNkI7UUFDekMsR0FBRyxLQUFLO1FBQ1IsS0FBSztLQUNSO0lBQ0QsT0FBTywyQ0FBQyxtQkFBbUIsT0FBSyxVQUFVLEdBQUk7QUFDbEQsQ0FBQztBQU1ELFNBQVMsb0JBQW9CLENBQUMsS0FBZ0M7SUFDMUQsTUFBTSxVQUFVLEdBQUcsNkJBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyw2QkFBWSxDQUFxQixJQUFJLENBQUM7SUFDdEQsZ0NBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTTtZQUVqQixNQUFNLElBQUksR0FBRyw0Q0FBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1FBQzNCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDdkUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPLENBQ0gscURBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQ2hGLDhEQUNJLHFEQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFJLEdBQzdELEVBQ0wsS0FBSyxJQUFJLENBQ04sdURBQVEsU0FBUyxFQUFFLHdEQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxRQUFRLFlBQ3BFLDhHQUFzRCxHQUNqRCxDQUNaLElBQ0MsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjtJQUM3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLDZEQUFnQixDQUFDO0lBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMvQixDQUFDO0FBTUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUErQjtJQUN4RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUNILG9HQUNLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM5Qix5REFBdUIsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFDNUMsa0VBQVUsT0FBTyxHQUFXLEVBQzVCLDJDQUFDLG9CQUFvQixJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJLEtBRnJFLE9BQU8sQ0FHWCxDQUNiLENBQUMsR0FDSCxDQUNOO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCO0FBQ2lCO0FBQ1A7QUFDTztBQUNQO0FBQ0Y7QUFDRztBQUUvQixTQUFTLHFCQUFxQixDQUFDLFFBQWdCO0lBQ2xELFFBQVEsUUFBUSxFQUFFLENBQUM7UUFDZixLQUFLLElBQUk7WUFDTCxPQUFPLHlEQUEwQjtRQUNyQyxLQUFLLEtBQUs7WUFDTixPQUFPLGtEQUFtQjtRQUM5QixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssTUFBTTtZQUNQLE9BQU8sbURBQW9CO1FBQy9CO1lBQ0ksT0FBTyxJQUFJO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0NBQ1Q7QUFFRCxNQUFNLFFBQVEsR0FBRztJQUNiLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLElBQUk7SUFDSixJQUFJO0lBQ0osT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87SUFDUCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBRVQsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLE9BQU87SUFDUCxVQUFVO0NBQ2I7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVELE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLE1BQU07SUFDTixNQUFNO0lBQ04sVUFBVTtJQUNWLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsS0FBSztJQUNMLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVELE1BQU0sSUFBSSxHQUFrQjtJQUN4QixPQUFPLEVBQUU7UUFDTDtZQUNJLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEO1lBQ0ksT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQ0gsMk5BQTJOO1FBQy9OLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUM5QixPQUFPLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbEMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztDQUN6QztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBZTtJQUN0QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNmO0FBQ0wsQ0FBQzs7Ozs7Ozs7OztBQ25WcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7Ozs7Ozs7Ozs7Ozs7MEJBRWY7Ozs7Ozs7Ozs7Ozs7OzBCQUlDOzs7Ozs7OzswQkFFSDs7Ozs7Ozs7O29CQUVBO29CQUFBO2tDQUNBOzs7Ozs7b0JBQVc7b0JBQUE7a0NBQThEOzs7Ozs7b0JBQU07aUJBQUE7Ozs7Ozs7Ozs7Ozs7MENBRzdFOzs7Ozs7NEJBQUc7eUJBQUE7Ozs7Ozs7Ozs7MENBQ0g7Ozs7Ozs0QkFBRzt5QkFBQTs7Ozs7Ozs7OzswQ0FDSDs7Ozs7OzRCQUFHO3lCQUFBOzs7Ozs7Ozs7OzBDQUNIOzs7Ozs7NEJBQUc7eUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBRUw7b0JBQUE7a0NBQTBDOzs7Ozs7b0JBQVk7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTJCdEQ7b0JBQUE7a0NBQXlCOzs7Ozs7b0JBQW9CO2lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBd0M3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFVQTtvQkFBQTtrQ0FBa0M7Ozs7OztvQkFBUztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBYzNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSkEsOEJBQThCLHlyakJBQXlyakIsRSJ9