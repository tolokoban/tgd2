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
    constructor(context) {
        super();
        this.context = context;
        this.fixedCamera = new _tolokoban_tgd__rspack_import_0.TgdCameraPerspective({
            transfo: { distance: 0, position: [0, 0, 0] },
            near: 0.1,
            far: 2.0,
            fovy: Math.PI / 3,
        });
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
    constructor(context, data) {
        super();
        this.context = context;
        this.fixedCamera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
            transfo: { distance: 0 },
            near: 0.1,
            far: 2.0,
            fovy: Math.PI / 3,
        });
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_painter_stars_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "How to do it"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's see how to create a custom painter by studying an example."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    " of different colors, size and brightness. The attribute is a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "vec4"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 12,
                        columnNumber: 74
                    }, this),
                    "\nvector with:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": longitude (from 0.0 to 2 PI)"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "y"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            ": latitude (from -PI / 2 to +PI / 2)"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "z"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            ": brightness (from 0.02 to 2.0)"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "w"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                                lineNumber: 18,
                                columnNumber: 3
                            }, this),
                            ": color (from 0.0 to 1.0, 0.0 is red and cold and 1.0 is blue and hot)"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 20,
                        columnNumber: 43
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " { ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdPainter"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ", ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " } ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "from"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-string",
                                    children: "\"@tolokoban/tgd\""
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "class"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "PainterStars"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "extends"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_ inherited__",
                                    children: "TgdPainter"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " {"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-keyword",
                                    children: "readonly"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "count"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-built_in",
                                    children: "number"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "6"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "8",
                            children: "     *"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " data A sequence of 4 floats: longitude, latitude, brightness and color."
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "10",
                            children: "     */"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "("
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-keyword",
                                    children: "readonly"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ","
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-title class_",
                                    children: "Float32Array"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ","
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "()"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ".",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-property",
                                    children: "count"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " = data.",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-property",
                                    children: "length"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                " / ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-number",
                                    children: "4"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "17",
                            children: "    }"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "18"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-attr",
                                    children: "time"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params hljs-built_in",
                                    children: "number"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                ") {}"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "20"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                                }, this),
                                "(",
                                ") {}"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "code-line numbered-code-line",
                            "data-line-number": "22",
                            children: "}"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 47,
                        columnNumber: 26
                    }, this),
                    "):"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "precision"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "mediump"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "uniform"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "mat4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " uniModelViewMatrix;\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "uniform"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "mat4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " uniProjectionMatrix;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "in"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " attStar;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "out"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " varColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "void"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " main() {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " longitude = attStar.x;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " latitude = attStar.y;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " brightness = attStar.z;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " temperature = attStar.w;\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " color = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "mix"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "),\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "),\n        temperature\n    ) * (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: ".5"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " + brightness);\n    varColor = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(color, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " r = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "cos"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(latitude);\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " z = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "sin"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(latitude);\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " x = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "cos"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(longitude) * r;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " y = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "sin"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(longitude) * r;\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = uniProjectionMatrix\n        * uniModelViewMatrix\n        * ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(x, y, z, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".z = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_Position"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".w;\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_PointSize"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "50.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " * brightness;\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 49,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 49,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "And a fragment one:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "precision"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "mediump"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "float"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "in"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " varColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "out"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec4"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " FragColor;\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "void"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " main() {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " point = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "2.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " * ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "gl_PointCoord"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".xy - ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-type",
                            children: "vec2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ");\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-built_in",
                            children: "dot"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(point, point) > ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1.0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "discard"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ";\n\n    FragColor = varColor;\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 89,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 89,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's import the code of the shaders:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " vert ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"./painter-stars.vert\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " frag ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"./painter-stars.frag\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 108,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 108,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "And, in the constructor, we create the WebGL Program like this:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "programs"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "create"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(\n    {\n        vert,\n        frag,\n    },\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"PainterStars\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ",\n)\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 115,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 115,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Now we need a VertexArrayObject:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " dataset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdDataset"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "({\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "attStar"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"vec4\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ",\n})\ndataset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "set"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"attStar\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", data)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "vao"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " = context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createVAO"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", [dataset])\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 127,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                        lineNumber: 135,
                        columnNumber: 35
                    }, this),
                    " method:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " { context, prg, vao } = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        " { camera, gl } = context\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "use"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "uniformMatrix4fv"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"uniModelViewMatrix\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", camera.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "matrixModelView"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    prg.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "uniformMatrix4fv"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"uniProjectionMatrix\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", camera.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "matrixProjection"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    vao.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "bind"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n    gl.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "drawArrays"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(gl.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "POINTS"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "count"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 137,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 137,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To finish properly, we need to implement the clean up function:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "context"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "programs"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "prg"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ")\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-variable language_",
                            children: "this"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "vao"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                    lineNumber: 151,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
                lineNumber: 151,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/custom/page.mdx"
    }, this) : _createMdxContent(props);
}


},
91681(module) {
module.exports = JSON.parse('{"Alpheratz, Sirrah":[-0.5731661263549379,1.9500563732532645],"Caph":[-0.05707226654021458,2.051110936943736],"Algenib":[-0.8147196948309531,1.909913800457395],"Ankaa":[-1.291194580625405,5.585402672232253],"Fulu":[-0.15550883635269477,2.108008670558751],"Schedar":[-0.10995574287564276,2.119178777771515],"Diphda":[-1.4081316405090252,1.9427259903948884],"Achird":[-0.08813912722571364,2.139773662945048],"Castula":[-0.06422811647339133,2.157226955464991],"MIRACH":[-0.47298422729046335,2.218313479284793],"Wurren":[-1.0770426814057008,5.198114111214712],"Revati":[-0.9578366934944881,2.313608456443683],"Adhil":[-0.29670597283903605,2.244144352214309],"Ruchbah":[-4.1015237421866746e-2,2.2198842756115877],"Lodestar, North Star, Polaris":[0.4618141200776996,2.1516419018586097],"Alpherg":[-0.8103563717009672,2.391275608157431],"Titawin":[-0.3605850234620285,2.303834612632515],"Nembus":[-0.23614304779483278,2.2830651945337825],"Achernar":[-1.0260790672474662,5.0761155965003075],"Torcular":[-0.8976228343006837,2.523920631309],"Baten Kaitos":[-1.1876965559821413,2.8951521632081936],"Segin":[2.8797932657906436e-2,2.2661355007894377],"Mothallah":[-0.5480333851262195,2.419724474964938],"Sheratan":[-0.69254664719135,2.4825563280367344],"Almach":[-0.32393310917014756,2.390402943531434],"Hamal":[-0.6318091892219474,2.523222499608202],"Mira, Mira A":[-1.0119419003063121,2.9277898202204877],"iot Cas AB":[0.10978120995044333,2.305929007734908],"Kaffaljidhma":[-0.8618435846347999,2.9482101724688214],"Lilii Borea":[-0.47298422729046335,2.6427775533698137],"Miram":[-0.05550147021341968,2.42845112122491],"Bharani":[-0.4993386989955777,2.6700046897009253],"Angetenar":[-1.0836749325632793,3.6093408931242736],"Azha":[-0.9653416092780637,3.266383695107388],"Gorgonea Secunda":[-0.2953097094374406,2.5837854246524055],"Menkar":[-0.7956956059842148,3.025004659556572],"Gorgonea Tertia":[-0.29688050576423547,2.611012560983517],"Algol, Algol A, Algol B, Algol C":[-0.26005405854715513,2.600191519621152],"Misam":[-0.19949113350295186,2.5677283955340577],"Gorgonea Quarta":[-0.27454029133870805,2.622008135271081],"Botein":[-0.5609488215909775,2.8379053637427796],"Dalim":[-1.0304423903774522,3.922627493857256],"Zibal":[-0.8955284391982905,3.343701780970737],"Mirfak":[-0.10227629416686772,2.5581290846480886],"Ran":[-0.8384561726580759,3.418401872956094],"Atik":[-0.30962140930379406,2.7988099884981072],"Rana":[-0.8028514559173916,3.4574972482007666],"Celaeno, Celeno":[-0.4141666314982544,2.8979446900113848],"Electra":[-0.4162610266006476,2.900388150964177],"Taygeta, Taygete":[-0.4106759729942658,2.896897492460188],"Maia":[-0.4103269071438669,2.9002136180389773],"Asterope":[-0.4077089132658754,2.898119222936584],"Merope":[-0.4145156973486533,2.9071949350469546],"MOAI 1":[0.12269664641520137,2.4687682269459787],"Alcyone":[-0.4092797095926703,2.908940264298949],"Atlas":[-0.4054399852382828,2.9148743837557296],"Pleione":[-0.4043927876870862,2.914001719129733],"Menkhib, Menkib":[-0.2288126649364566,2.7989845214233062],"Zaurak":[-0.7761479183618784,3.5807174933915666],"Beid":[-0.6700318998406232,3.4787902650750975],"Keid":[-0.6632251157578453,3.5032248746030183],"Prima Hyadum":[-0.4157374278250493,3.1255356244714454],"Secunda Hyadum":[-0.38414696836395196,3.106860601475106],"Beemim":[-0.7719591281570919,4.104490801915064],"Ain":[-0.34766958699727046,3.099704751541929],"Chamukuy":[-0.38414696836395196,3.1477013059717733],"Aldebaran":[-0.3534291735288517,3.158522347334138],"Theemin":[-0.7209955139988575,4.0318851050321],"Sceptrum":[-0.6263986685407649,3.688229775314417],"Tabit":[-0.4026474584350918,3.341432852943144],"Hassaleh":[-0.1075122819228507,2.9773571709771267],"Almaaz":[2.0594885173533087e-2,2.841221489321569],"Saclateni":[-7.504915783575617e-3,2.880142331641043],"Mago":[0.2988003679414292,2.4804619329343414],"Haedus":[0.00471238898038469,2.8859019181726238],"Cursa":[-0.4417428336797648,3.5838590860451562],"Capella":[0.07976154681614087,2.837556297892381],"Rigel":[-0.4406956361285682,3.6519269268729353],"Bellatrix":[-0.27838001569309556,3.4370768959524334],"Elnath":[-0.06527531402458793,3.1065115356247075],"Nihal":[-0.47472955654245763,3.9018580757585233],"Mintaka":[-0.30962140930379406,3.5580282131156404],"Arneb":[-0.43877577395137446,3.856304982281471],"lambda Ori X-5":[-0.21450096507010308,3.41037335839692],"lambda Ori X-3":[-0.20943951023931956,3.40426470601494],"Hatysa":[-0.34173546754048967,3.6568138487785196],"Alnilam":[-0.3008947630438224,3.5815901580175638],"Tianguan":[-0.09843656981248018,3.2409018880282705],"Phact":[-0.5037020221255635,4.168020786687658],"Saiph":[-0.32288591161895097,3.743905778453036],"Wazn":[-0.47228609558966556,4.212352149688314],"Betelgeuse":[-0.15638150097869194,3.4869933125594708],"Gore\'s Nova":[-0.04345869837465881,3.2937853643636985],"Menkalinan":[0.1816887751326097,2.9227283653897045],"Mahasim":[0.11746065865921838,3.042807017926914],"Elkurud":[-0.42341687653382437,4.257556177314967],"Propus":[0.0439822971502571,3.2960542923912914],"Furud":[-0.3391174736624982,4.145506039336932],"Tejat":[0.07278022980816354,3.311238656883642],"Mirzam":[-0.24905848425959082,3.9454913070583815],"Canopus":[-0.4413937678293659,4.558974539134388],"23 H. Cam":[0.46094145545170245,2.349038640259168],"Alhena":[0.07766715171374766,3.4342843691492426],"Plaskett star, Plaskett\'s star":[-5.4105206811824215e-3,3.5931093310807265],"Mebsuta":[0.16807520696705394,3.308097064230052],"Alzirr":[0.07853981633974483,3.503573940453417],"Dog Star, Sirius, Sirius A":[-0.15498523757709648,3.9657371263815158],"Altaleban, Taleban":[-0.36407568196601714,4.540648581988449],"51 H. Cep":[0.48380526865282814,2.202954581867243],"Adhara":[-0.19774580425095753,4.185823145058],"Citala":[-8.377580409572781e-3,3.8173841399619977],"Unurgunite":[-0.17924531417981765,4.174303971994838],"Mekbuda":[0.20769418098732523,3.4164820107789002],"Muliphein":[-0.07696902001294993,3.983714017677057],"Wezen":[-0.14433872913993104,4.16121400260488],"Ahadi":[-0.19687313962496036,4.34604437039108],"Wasat":[0.277332818141899,3.420496268058487],"Aludra":[-0.11327186845443199,4.234517831188643],"Gomeisa":[0.2038544566329377,3.6568138487785196],"Hadir":[-0.20786871391252465,4.463505029050299],"Castor B":[0.3923500158483253,3.271445149938171],"Castor A":[0.3923500158483253,3.271445149938171],"Jishui":[0.42289327775822605,3.2283355174139112],"Procyon, Procyon A":[0.22741640153486112,3.7295940785866826],"Pollux":[0.40858157789187255,3.3550464211086997],"Asmidiske, Azmidi, Azmidiske":[9.948376736367677e-3,4.214272011865508],"Naos":[-0.08220500776893293,4.467693819255085],"Tureis":[0.07679448708775051,4.243768076224212],"Regor":[-0.13421581947836395,4.586725274241099],"Altarf, Tarf":[0.40229839258469297,3.739367922397851],"Piautos":[0.5164429256651221,3.4789647980002973],"Alsciaukat":[0.5993460651348528,3.096039560112741],"Muscida":[0.618370153981591,2.7221900343355556],"Minchir":[0.4417428336797648,3.8870227771165715],"Meleph":[0.56635934227216,3.5964254566595155],"Asellus Borealis":[0.5886995566976873,3.5634387337968225],"Asellus Australis":[0.5742133239061344,3.6306339099986045],"Ashlesha":[0.4979424355939822,3.8522907250018843],"Alsephina":[-0.12863076587198208,4.748691828826171],"Copernicus":[0.6581636609270617,3.434633434999641],"Talitha":[0.7127924665144842,2.9934142000954744],"Acubens":[0.5850343652684993,3.7788123634929227],"Alkaphrah":[0.7265805676052395,3.012961887717811],"Nahn":[0.6920230484157517,3.592934798155527],"Suhail":[0.04921828490624009,4.64152861275372],"Miaplacidus":[-0.2515019452123829,4.991292594853384],"Aspidiske":[-0.1223475805648025,4.86004383510341],"HD 80951AB":[-0.30700341542580256,5.065643620988342],"Intercrus":[0.8040731863937877,3.040712622824521],"Alphard":[0.5070181477043527,4.214795610641106],"Alterf":[0.7829547024446563,3.6074210309470796],"Ukdah":[0.6279694648675597,4.12752914804139],"Subra":[0.7340854833888151,3.920009499979264],"Zhang":[0.5138249317871306,4.384790679785354],"Rasalas":[0.8770279491271507,3.5613443386944295],"Felis":[0.4728096943652639,4.454778382790327],"Regulus":[0.8541641359260248,3.9519490252907605],"Adhafera":[0.9590584239708841,3.669205686467679],"Tania Borealis":[0.9615018849236762,3.0695105554824273],"Tania Australis":[0.9836675664240041,3.1049407392979123],"Praecipua":[1.112298332295986,3.3161255787892263],"Chalawan":[1.1060151469888067,3.0679397591556326],"Alkes":[0.6478662183402951,4.695982885415943],"Merak":[0.9564404300928926,2.603507645199941],"Dubhe":[0.8902924514423075,2.4932028364738996],"Zosma":[1.1664035391078105,3.9133772488216856],"Chertan":[1.1273081638631375,4.107981460419054],"Alula Borealis":[1.2056734472776829,3.3288664823287846],"Giausar":[0.8063421144213803,2.3209388393020594],"Formosa":[1.2447688225223557,4.010766621082969],"Alkafzah, Taiyangshou":[1.1470303844106733,2.623578931597876],"Denebola":[1.2358676433371847,4.3746677701237875],"Zavijava":[1.0602875205865552,4.721115626644662],"Phecda":[1.0712830948741194,2.458121718508814],"Tonatiuh":[0.6967354373961364,2.204699911119237],"Alchiba":[0.6478662183402951,5.072974003846719],"Minkar":[0.6852162643329738,5.071752273370322],"Imai":[0.0661479786505851,5.205095428222689],"Megrez":[1.0370746415350307,2.3137829893688826],"Gienah":[0.7766715171374766,5.0787335903783],"Zaniah":[1.0679669692953302,4.99862297771176],"Ginan":[3.9269908169872414e-2,5.222548720742632],"** STFA 21":[1.4803882715415901,3.930830541341629],"Algorab":[0.8037241205433887,5.157098873792846],"Gacrux":[0.09861110273767963,5.238954815711379],"Chara":[1.314581992602129,2.3753931119642826],"Kraz":[0.686088928958971,5.198812242915509],"Porrima":[1.0704104302481223,5.198463177065111],"La Superba":[1.2505284090539373,2.2069688391468296],"Mimosa":[0.05550147021341968,5.278922855582048],"Tianyi":[0.878424212528746,2.1560052249885953],"Alioth":[1.067443370519732,2.132443280086672],"Minelauva":[1.1562806294462433,5.332504463618275],"Cor Caroli":[1.3747958517959333,2.0645499721840928],"Taiyi":[0.9019861574306695,2.1338395434882673],"Vindemiatrix":[1.2850859282434248,5.451361385679088],"Mizar A":[1.074773753378108,1.9741419169307861],"Mizar B":[1.074773753378108,1.9741419169307861],"Spica":[0.8873253917139172,5.517160298479276],"Alcor":[1.0728538912009145,1.9682077974740053],"Heze":[1.0540043352793755,5.676683392111557],"HD 119361AB":[0.34487706019407954,5.46637121724624],"Alcaid, Alkaid":[1.140049067402696,1.7573720238330903],"Muphrid":[1.2746139527314588,0.09250245035569947],"Agena, Hadar":[0.02181661564992912,5.441413008942721],"Menkent":[0.42027528388023455,5.575628828421085],"Thuban":[0.8894197868163104,1.928937889304133],"Kang":[0.8325220532012952,5.820847588326289],"Syrma":[0.8913396489935042,5.894849548610848],"Arcturus":[1.2061970460532812,0.2642428487519415],"Xuange":[1.1287044272647329,1.5179128504594683],"Khambalia":[0.7723081940074908,5.818927726149094],"Elgafar":[0.9164723902222224,6.025225643734825],"Seginus":[1.154884366044648,1.173908454891386],"Rigel Kentaurus, Rigil Kentaurus":[-1.2391837689159739e-2,5.511400711947694],"Toliman":[-1.2391837689159739e-2,5.511400711947694],"Izar":[1.1306242894419267,0.6873106594353671],"Zubenelgenubi":[0.6633996486830446,5.939879043312302],"Merga":[1.0466739524209994,1.3959143357450647],"Kochab":[0.7068583470577035,1.9661134023716123],"Nekkar":[1.0478956828973955,1.1801916401985657],"Brachium":[0.4995132319207771,5.885599303575279],"I Boo*":[0.9958848711879644,1.4025465869026432],"Zubeneschamali":[0.6846926655573754,6.1439080328704385],"Pherkad Minor":[0.7162831250184728,1.8975219627682351],"Alkalurops":[0.982794901798007,1.0540043352793755],"Pherkad":[0.7127924665144842,1.8929841067130497],"Edasich":[0.8487536152448425,1.6400858980990713],"Nusakan":[0.9705775970340467,0.7956956059842148],"Zubenelhakrabi":[0.5619960191421741,6.135006853685268],"Alphecca":[0.938463538797351,0.7307693578100257],"Unukalhai":[0.7693411342791004,0.24783675378319478],"Chow":[0.8354891129296855,0.4534365396681268],"Gudja":[0.8435176274888594,0.5253441048502933],"Iklil":[0.318871654339364,6.014928201148058],"Fang":[0.3530801076784529,6.0601322287747115],"Dschubba":[0.39252454877352466,6.110397711232148],"Jabbah":[0.3961897402027128,6.189112060497092],"Yed Prior":[0.5619960191421741,0.15446163880149816],"Yed Posterior":[0.5377359425394529,0.1494001839707146],"Alniyat":[0.29670597283903605,6.1315161951812795],"Cujam":[0.6742206900454095,0.5141739976375295],"Athebyne":[0.714712328691678,1.6158258214963503],"Antares":[0.26284658535034605,6.142686302394043],"Kornephoros":[0.7017968922269199,0.6808529412029879],"Marfik":[0.555887366760194,0.2988003679414292],"Paikauhale":[0.22357667718047364,6.135530452460866],"Atria":[-0.26633724385433466,5.611931676862568],"Larawag":[0.11449359893082801,6.08805749680662],"Xamidimura":[0.06824237375297829,6.040933607002773],"Pipirima":[0.06736970912698112,6.042329870404369],"OAO 1653-40":[0.02548180707911721,6.013182871896063],"Sabik":[0.24452062820440557,0.11728612573401895],"Aldhibah":[0.6115633698988131,1.675690614839756],"LSF 1":[-1.9198621771937625e-3,6.082821509050637],"Sarin":[0.5483824509766184,0.8173376887089445],"Lesath":[-3.2114058236695664e-2,6.130818063480481],"Maasym":[0.49637163926718736,0.8635889138867942],"Shaula":[-3.8571776469074684e-2,6.139021110964855],"Rastaban":[0.5813691738393112,1.3889330187370874],"Sargas":[-0.10437068926926091,6.058735965373115],"Rasalhague":[0.3939208121751202,0.6265732014659643],"Cervantes":[-0.2007128639793479,5.935166654331917],"Cebalrai":[0.3000220984178253,0.5098106745075437],"Alruba":[0.5473352534254218,1.422268807450179],"Fuyue":[-0.08621926504851989,6.169738905799955],"Dziban":[0.5415756668938405,1.797165530778561],"Grumium":[0.5276130328778859,1.4864969239235706],"Eltanin":[0.5099852074327431,1.379857306626717],"Alnasl":[-0.07923794804054256,1.6057029118347832e-2],"Yildun":[0.49288098076319864,2.082003264704036],"Polis":[-2.7925268031909273e-2,0.17453292519943295],"Kaus Media":[-0.12479104151759457,0.05235987755982989],"Kaus Australis":[-0.17121679962064373,6.269222673163632],"Alathfar":[0.38048177693476387,1.175130185367782],"Kaus Borealis":[-0.11379546723003028,0.13369222070276565],"Fafnir":[0.47350782606606157,1.6653931722529893],"Vega":[0.335801348083709,1.1770500475449759],"Xihe":[0.30054569719342356,1.1473794502610721],"Sheliak":[0.2579596634447619,1.1028735543352168],"Ainalrami":[-0.18709929581379214,0.2223549467040776],"Nunki":[-0.21694442602289515,0.1668534764906579],"Sulafat":[0.22357667718047364,1.1051424823628095],"Ascella":[-0.26790804018112957,0.11938052083641214],"Polaris Australis":[-0.4836307357276287,5.304230129735967],"Okab":[0.05672320068981571,0.8178612874845428],"Meridiana":[-0.34191000046568915,6.275156792620413],"Albaldah":[-0.23195425759004637,0.277332818141899],"Gumala":[-0.27541295596470516,0.23492131731843677],"Aladfar":[0.22252947962927702,1.2325515177583957],"Altais":[0.4014257279586958,1.7217673070924062],"Arkab Prior":[-0.41765729000224305,6.171658767977149],"Arkab Posterior":[-0.4207988826558328,6.165899181445567],"Rukbat":[-0.4029965242854907,6.243217267308916],"Anser":[5.9341194567807204e-2,1.0295697257514551],"Alsafi":[0.3820525732615587,1.7683675981206546],"Sham":[-0.03735004599267865,0.9503317777109125],"Tarazed":[-0.12356931104119853,0.8504989444968367],"Fawaris":[0.17872171540421936,1.3737486542447366],"Altair":[-0.15550883635269477,0.8332201849020929],"Tyl":[0.3635520831904188,1.7877407528177918],"Libertas":[-0.17191493132144145,0.834441915378489],"Terebellum":[-0.4370304446993801,0.2593559268463574],"Alshain":[-0.19355701404617115,0.8051203839449843],"Prima Giedi":[-0.4310963252425994,0.542622864445037],"Algedi, Giedi":[-0.43301618741979314,0.5427973973702365],"Alshat":[-0.4447098934081552,0.5440191278466325],"Dabih Minor":[-0.45937065912490754,0.5082398781807488],"Dabih, Dabih Major":[-0.4602433237509047,0.508763476956347],"Peacock":[-0.6141813637768045,5.950001952973869],"SADR":[3.2637657012293965e-2,1.3639748104335687],"Aldulfin":[-0.28955012290585924,0.9672614714552574],"Rotanev":[-0.27314402793711257,1.0276498635742612],"Sualocin, Svalocin":[-0.2673844414055313,1.0524335389525807],"Deneb":[0.03490658503988659,1.470963493580821],"Aljanah":[-0.09965830028887622,1.3254030339644938],"Albali":[-0.5253441048502933,0.6576400621514634],"Musica":[-0.38362336958835364,1.024333737995472],"PN Ou 4":[0.13945180723434694,1.7194983790648135],"Kitalpha":[-0.501084028247572,0.9840166322744031],"Alderamin":[0.16004669240788003,1.7627825445142729],"Sadalsuud":[-0.6611307206554521,0.8381071068076771],"Alfirk":[0.24486969405480444,1.876927077594702],"Bunda":[-0.7040658202545126,0.8107054375513661],"Nashira":[-0.779638576865867,0.6283185307179586],"Azelfafage":[-2.2689280275926284e-2,1.6664403698041859],"Enif":[-0.5490805826774161,1.1444123905326817],"Erakis, Herschel\'s Garnet Star":[0.07539822368615504,1.7558012275062955],"Deneb Algedi":[-0.803025988842591,0.6562437987498679],"Aldhanab":[-0.8983209660014814,0.10663961729685355],"Sadalmelik":[-0.7342600163140145,1.0459758207202017],"Alnair":[-0.9157742585214247,6.1086523819801535],"Biham":[-0.675616953447005,1.1765264487693774],"Ancha":[-0.848579082319643,0.9339256827421657],"Sadachbia":[-0.8000589291142007,1.085245728890074],"Situla":[-0.8857545953871222,1.0939723751500459],"Homam":[-0.7096508738608943,1.3763666481227284],"Tiaki":[-1.011418301530714,6.043551600880765],"Matar":[-0.4354596483725852,1.6144295580947547],"Sadalbari":[-0.5333726194094671,1.5826645657084581],"sig Peg A":[-0.7522369076095561,1.4114477660878144],"Skat":[-1.0588912571849598,0.8653342431387886],"Fomalhaut B":[-1.1276572297135363,0.27820548276789614],"Fomalhaut":[-1.13271868454432,0.3576179637336381],"Helvetios":[-0.6061528492176306,1.5718435243460933],"Fumalsamakah":[-0.8658578419143869,1.3751449176463324],"Scheat":[-0.5070181477043527,1.670978225859371],"Markab":[-0.7047639519553103,1.5407766636605942],"Salm":[-0.6040584541152374,1.7018705536196708],"Alkarab":[-0.6171484235051949,1.7200219778404118],"Veritate":[-0.3673918075448064,1.857204857047166],"Errai":[0.2672099084803319,2.0767672769480527]}')

},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9jdXN0b21fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbmVudC1jOTY4ODQuMzY2NTc4MTY2ZWJjNmFkMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2N1c3RvbS9fL3BhaW50ZXItc3RhcnMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY3VzdG9tL18vcGFpbnRlci1zdGFycy5kZW1vL3BhaW50ZXItbmFtZXMudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvY3VzdG9tL18vcGFpbnRlci1zdGFycy5kZW1vL3BhaW50ZXItc3RhcnMuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jdXN0b20vcGFnZS5tZHgiLCJqc29ufC9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9jdXN0b20vXy9uYW1lcy5qc29uIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wYWludGVyLXN0YXJzLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdIH0pKVxcbiAgICBjdHgucGFpbnQoKVxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIoZGF0YVVSTCkudGhlbigoYnVmZikgPT4ge1xcbiAgICAgICAgaWYgKCFidWZmKSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpXFxuICAgICAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXJTdGFycyhjdHgsIGRhdGEpXFxuICAgICAgICBjdHguYWRkKFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW25ldyBQYWludGVyTmFtZXMoY3R4KSwgcGFpbnRlcl0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICApXFxuICAgICAgICBjdHgucGFpbnQoKVxcbiAgICB9KVxcbn1cIixcIkNsYXNzIFBhaW50ZXJTdGFyc1wiOlwiZXhwb3J0IGNsYXNzIFBhaW50ZXJTdGFycyBleHRlbmRzIFRnZFBhaW50ZXIge1xcbiAgICAvLyBOdW1iZXIgb2Ygc3RhcnNcXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb3VudDogbnVtYmVyXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxcblxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpeGVkQ2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAgfSxcXG4gICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgIGZhcjogMi4wLFxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDMsXFxuICAgIH0pXFxuXFxuICAgIC8qKlxcbiAgICAgKiBAcGFyYW0gZGF0YSBBIHNlcXVlbmNlIG9mIDQgZmxvYXRzOiBsb25naXR1ZGUsIGxhdGl0dWRlLCBicmlnaHRuZXNzIGFuZCBjb2xvci5cXG4gICAgICovXFxuICAgIGNvbnN0cnVjdG9yKFxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICAgICAgZGF0YTogRmxvYXQzMkFycmF5LFxcbiAgICApIHtcXG4gICAgICAgIHN1cGVyKClcXG4gICAgICAgIHRoaXMuY291bnQgPSBkYXRhLmxlbmd0aCA+PiAyXFxuICAgICAgICB0aGlzLnByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcXG4gICAgICAgICAgICB2ZXJ0LFxcbiAgICAgICAgICAgIGZyYWcsXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgICAgICBhdHRTdGFyOiBcXFwidmVjNFxcXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgZGF0YXNldC5zZXQoXFxcImF0dFN0YXJcXFwiLCBkYXRhKVxcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkYXRhc2V0XSlcXG4gICAgfVxcblxcbiAgICBwYWludCgpIHtcXG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIGZpeGVkQ2FtZXJhIH0gPSB0aGlzXFxuICAgICAgICBjb25zdCB7IGNhbWVyYSwgZ2wgfSA9IGNvbnRleHRcXG4gICAgICAgIGZpeGVkQ2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBjYW1lcmEudHJhbnNmby5vcmllbnRhdGlvblxcbiAgICAgICAgcHJnLnVzZSgpXFxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcXFwidW5pTW9kZWxWaWV3TWF0cml4XFxcIiwgZml4ZWRDYW1lcmEubWF0cml4TW9kZWxWaWV3KVxcbiAgICAgICAgcHJnLnVuaWZvcm1NYXRyaXg0ZnYoXFxcInVuaVByb2plY3Rpb25NYXRyaXhcXFwiLCBmaXhlZENhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxcbiAgICAgICAgcHJnLnVuaWZvcm0xZihcXFwidW5pVmVnYVNpemVJblBpeGVsc1xcXCIsIE1hdGgubWF4KGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAqIDAuMDUpXFxuICAgICAgICB2YW8uYmluZCgpXFxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgdGhpcy5jb3VudClcXG4gICAgfVxcblxcbiAgICBkZWxldGUoKSB7XFxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcXG4gICAgfVxcbn1cIixcIkZyYWdtZW50IHNoYWRlciBcXFwiLi9wYWludGVyLXN0YXJzLmZyYWdcXFwiXCI6XCIjdmVyc2lvbiAzMDAgZXNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG5pbiB2ZWM0IHZhckNvbG9yO1xcbmluIGZsb2F0IHZhclJhZGl1c0xpbWl0O1xcblxcbm91dCB2ZWM0IEZyYWdDb2xvcjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgcG9pbnQgPSAyLjAgKiBnbF9Qb2ludENvb3JkLnh5IC0gdmVjMigxLjApO1xcbiAgICBmbG9hdCByYWRpdXMgPSBsZW5ndGgocG9pbnQpO1xcbiAgICBpZiAocmFkaXVzID4gMS4wKSBkaXNjYXJkO1xcbiAgICBcXG4gICAgZmxvYXQgYWxwaGEgPSB2YXJDb2xvci5hO1xcbiAgICBhbHBoYSAqPSAxLjAgLSBwb3cocmFkaXVzLCAyLjApO1xcbiAgICBmbG9hdCBmYWRlID0gMS4wIC0gc21vb3Roc3RlcCh2YXJSYWRpdXNMaW1pdCwgdmFyUmFkaXVzTGltaXQgKiAyLjAsIHJhZGl1cykgKiAwLjk7XFxuICAgIGFscGhhICo9IGZhZGU7XFxuICAgIEZyYWdDb2xvciA9IHZlYzQodmFyQ29sb3IucmdiLCBhbHBoYSk7XFxufVwiLFwiVmVydGV4IHNoYWRlciBcXFwiLi9wYWludGVyLXN0YXJzLnZlcnRcXFwiXCI6XCIjdmVyc2lvbiAzMDAgZXNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIG1hdDQgdW5pTW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCB1bmlQcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgdW5pVmVnYVNpemVJblBpeGVscztcXG5cXG5pbiB2ZWM0IGF0dFN0YXI7XFxuXFxub3V0IHZlYzQgdmFyQ29sb3I7XFxub3V0IGZsb2F0IHZhclJhZGl1c0xpbWl0O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZmxvYXQgbG9uZ2l0dWRlID0gYXR0U3Rhci54O1xcbiAgICBmbG9hdCBsYXRpdHVkZSA9IGF0dFN0YXIueTtcXG4gICAgZmxvYXQgYnJpZ2h0bmVzcyA9IGF0dFN0YXIuejtcXG4gICAgZmxvYXQgdGVtcGVyYXR1cmUgPSBhdHRTdGFyLnc7XFxuICAgIFxcbiAgICB2ZWMzIGNvbG9yID0gbWl4KFxcbiAgICAgICAgdmVjMyguNSwgLjEsIC4xKSwgXFxuICAgICAgICB2ZWMzKC4xLCAuMiwgLjUpLCBcXG4gICAgICAgIHRlbXBlcmF0dXJlXFxuICAgICkgKiAoMi4wICsgYnJpZ2h0bmVzcyAqIDUuMCk7XFxuICAgIHZhckNvbG9yID0gdmVjNChjb2xvciwgMC4xICsgMC45ICogYnJpZ2h0bmVzcyk7XFxuXFxuICAgIGZsb2F0IHIgPSBjb3MobGF0aXR1ZGUpO1xcbiAgICBmbG9hdCB6ID0gc2luKGxhdGl0dWRlKTtcXG4gICAgZmxvYXQgeCA9IGNvcyhsb25naXR1ZGUpICogcjtcXG4gICAgZmxvYXQgeSA9IHNpbihsb25naXR1ZGUpICogcjtcXG4gICAgZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmVjNCh4LCB5LCB6LCAxLjApO1xcbiAgICBnbF9Qb3NpdGlvbi56ID0gZ2xfUG9zaXRpb24udztcXG4gICAgXFxuICAgIGdsX1BvaW50U2l6ZSA9IG1heCh1bmlWZWdhU2l6ZUluUGl4ZWxzICogYnJpZ2h0bmVzcywgMS4wKTtcXG4gICAgZmxvYXQgcmFkaXVzTGltaXQgPSBjbGFtcChzcXJ0KGdsX1BvaW50U2l6ZSksIDAuMiwgMTAuMCk7XFxuICAgIHZhclJhZGl1c0xpbWl0ID0gcmFkaXVzTGltaXQgLyBnbF9Qb2ludFNpemU7XFxufVxcblwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXFxuICAgIFRnZFBhaW50ZXIsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RQcm9ncmFtLFxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcXG4gICAgd2ViZ2xQcmVzZXRCbGVuZCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgZGF0YVVSTCBmcm9tIFxcXCIuLi9zdGFycy5kYXRcXFwiXFxuaW1wb3J0IHsgUGFpbnRlck5hbWVzIH0gZnJvbSBcXFwiLi9wYWludGVyLW5hbWVzXFxcIlxcbmltcG9ydCBmcmFnIGZyb20gXFxcIi4vcGFpbnRlci1zdGFycy5mcmFnXFxcIlxcbmltcG9ydCB2ZXJ0IGZyb20gXFxcIi4vcGFpbnRlci1zdGFycy52ZXJ0XFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgIH0pXFxuICAgIGN0eC5hZGQobmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLCAwLCAwLCAxXSB9KSlcXG4gICAgY3R4LnBhaW50KClcXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyKGRhdGFVUkwpLnRoZW4oKGJ1ZmYpID0+IHtcXG4gICAgICAgIGlmICghYnVmZikgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShidWZmKVxcbiAgICAgICAgY29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyU3RhcnMoY3R4LCBkYXRhKVxcbiAgICAgICAgY3R4LmFkZChcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtuZXcgUGFpbnRlck5hbWVzKGN0eCksIHBhaW50ZXJdLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgKVxcbiAgICAgICAgY3R4LnBhaW50KClcXG4gICAgfSlcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XFxufVxcblxcbmV4cG9ydCBjbGFzcyBQYWludGVyU3RhcnMgZXh0ZW5kcyBUZ2RQYWludGVyIHtcXG4gICAgLy8gTnVtYmVyIG9mIHN0YXJzXFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY291bnQ6IG51bWJlclxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcXG5cXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAwIH0sXFxuICAgICAgICBuZWFyOiAwLjEsXFxuICAgICAgICBmYXI6IDIuMCxcXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyAzLFxcbiAgICB9KVxcblxcbiAgICAvKipcXG4gICAgICogQHBhcmFtIGRhdGEgQSBzZXF1ZW5jZSBvZiA0IGZsb2F0czogbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYnJpZ2h0bmVzcyBhbmQgY29sb3IuXFxuICAgICAqL1xcbiAgICBjb25zdHJ1Y3RvcihcXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgICAgIGRhdGE6IEZsb2F0MzJBcnJheSxcXG4gICAgKSB7XFxuICAgICAgICBzdXBlcigpXFxuICAgICAgICB0aGlzLmNvdW50ID0gZGF0YS5sZW5ndGggPj4gMlxcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XFxuICAgICAgICAgICAgdmVydCxcXG4gICAgICAgICAgICBmcmFnLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICAgICAgYXR0U3RhcjogXFxcInZlYzRcXFwiLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGRhdGFzZXQuc2V0KFxcXCJhdHRTdGFyXFxcIiwgZGF0YSlcXG4gICAgICAgIHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJnLCBbZGF0YXNldF0pXFxuICAgIH1cXG5cXG4gICAgcGFpbnQoKSB7XFxuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCBmaXhlZENhbWVyYSB9ID0gdGhpc1xcbiAgICAgICAgY29uc3QgeyBjYW1lcmEsIGdsIH0gPSBjb250ZXh0XFxuICAgICAgICBmaXhlZENhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uID0gY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb25cXG4gICAgICAgIHByZy51c2UoKVxcbiAgICAgICAgcHJnLnVuaWZvcm1NYXRyaXg0ZnYoXFxcInVuaU1vZGVsVmlld01hdHJpeFxcXCIsIGZpeGVkQ2FtZXJhLm1hdHJpeE1vZGVsVmlldylcXG4gICAgICAgIHByZy51bmlmb3JtTWF0cml4NGZ2KFxcXCJ1bmlQcm9qZWN0aW9uTWF0cml4XFxcIiwgZml4ZWRDYW1lcmEubWF0cml4UHJvamVjdGlvbilcXG4gICAgICAgIHByZy51bmlmb3JtMWYoXFxcInVuaVZlZ2FTaXplSW5QaXhlbHNcXFwiLCBNYXRoLm1heChjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgKiAwLjA1KVxcbiAgICAgICAgdmFvLmJpbmQoKVxcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIHRoaXMuY291bnQpXFxuICAgIH1cXG5cXG4gICAgZGVsZXRlKCkge1xcbiAgICAgICAgdGhpcy5wcmcuZGVsZXRlKClcXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXFxuICAgIH1cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQcm9ncmFtLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IGFzc2VydFR5cGUgfSBmcm9tIFwiQHRvbG9rb2Jhbi90eXBlLWd1YXJkc1wiXG5cbmltcG9ydCBuYW1lcyBmcm9tIFwiLi4vbmFtZXMuanNvblwiXG5pbXBvcnQgZnJhZyBmcm9tIFwiLi9wYWludGVyLW5hbWVzLmZyYWdcIlxuaW1wb3J0IHZlcnQgZnJvbSBcIi4vcGFpbnRlci1uYW1lcy52ZXJ0XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJOYW1lcyBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvdW50OiBudW1iZXJcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAwLCBwb3NpdGlvbjogWzAsIDAsIDBdIH0sXG4gICAgICAgIG5lYXI6IDAuMSxcbiAgICAgICAgZmFyOiAyLjAsXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyAzLFxuICAgIH0pXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjb25zdCB7IGNhbnZhcywgYXR0TGF0TG5nLCBhdHRVViB9ID0gbWFrZUNhbnZhc0Zvck5hbWVzKClcbiAgICAgICAgdGhpcy5jb3VudCA9IGF0dExhdExuZy5sZW5ndGggPj4gMVxuICAgICAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXG4gICAgICAgICAgICAuc2V0UGFyYW1zKHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUl9NSVBNQVBfTElORUFSXCIsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICAgICAgLmdlbmVyYXRlTWlwbWFwKClcbiAgICAgICAgY29uc3QgZHNPYmplY3QgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRDb3JuZXI6IFwidmVjMlwiLFxuICAgICAgICB9KVxuICAgICAgICBkc09iamVjdC5zZXQoXCJhdHRDb3JuZXJcIiwgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMV0pKVxuICAgICAgICBjb25zdCBkc0luc3RhbmNlID0gbmV3IFRnZERhdGFzZXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0TGF0TG5nOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICBhdHRVVjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBkaXZpc29yOiAxIH0sXG4gICAgICAgIClcbiAgICAgICAgZHNJbnN0YW5jZS5zZXQoXCJhdHRMYXRMbmdcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRMYXRMbmcpKVxuICAgICAgICBkc0luc3RhbmNlLnNldChcImF0dFVWXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0VVYpKVxuICAgICAgICBjb25zdCBwcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSlcbiAgICAgICAgY29uc3QgdmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHByZywgW2RzT2JqZWN0LCBkc0luc3RhbmNlXSlcbiAgICAgICAgdGhpcy5wcmcgPSBwcmdcbiAgICAgICAgdGhpcy52YW8gPSB2YW9cbiAgICB9XG5cbiAgICBkZWxldGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudGV4dHVyZS5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlLCBmaXhlZENhbWVyYSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGNhbWVyYSwgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgZml4ZWRDYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbiA9IGNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uXG4gICAgICAgIHByZy51c2UoKVxuICAgICAgICBwcmcudW5pZm9ybTFmKFwidW5pQXNwZWN0XCIsIGNvbnRleHQud2lkdGggLyBjb250ZXh0LmhlaWdodClcbiAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaUFzcGVjdEludmVyc2VcIiwgY29udGV4dC5oZWlnaHQgLyBjb250ZXh0LndpZHRoKVxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBmaXhlZENhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByZy51bmlmb3JtTWF0cml4NGZ2KFwidW5pUHJvamVjdGlvbk1hdHJpeFwiLCBmaXhlZENhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxuICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByZywgXCJ1bmlUZXh0dXJlXCIpXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZChnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCwgdGhpcy5jb3VudClcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIHN0YXJzIG5hbWVzIGFyZSBkcmF3biBpbiBhIGNhbnZhcyB3aGljaCBpcyB1c2VkIGFzIGEgdGV4dHVyZS5cbiAqL1xuZnVuY3Rpb24gbWFrZUNhbnZhc0Zvck5hbWVzKCk6IHtcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgYXR0TGF0TG5nOiBudW1iZXJbXVxuICAgIGF0dFVWOiBudW1iZXJbXVxufSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZ2V0IENvbnRleHQgMkQhXCIpXG5cbiAgICBhc3NlcnRUeXBlKG5hbWVzLCBbXCJtYXBcIiwgW1wiYXJyYXlcIiwgXCJudW1iZXJcIiwgeyBtaW46IDIsIG1heDogMiB9XV0pXG4gICAgY29uc3QgYXR0TGF0TG5nOiBudW1iZXJbXSA9IFtdXG4gICAgY29uc3QgYXR0VVY6IG51bWJlcltdID0gW11cbiAgICBjb25zdCB3ID0gMjA0OFxuICAgIGNvbnN0IGggPSAxMDI0XG4gICAgY29uc3Qgc3BhY2UgPSA4XG4gICAgY2FudmFzLndpZHRoID0gd1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaClcbiAgICBjb250ZXh0LmZvbnQgPSBcIjMwcHggc2Fucy1zZXJpZlwiXG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMwZjBcIlxuICAgIGxldCB4ID0gMVxuICAgIGxldCB5ID0gMTZcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMobmFtZXMpIGFzIEFycmF5PGtleW9mIHR5cGVvZiBuYW1lcz4pIHtcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGNvbnRleHQubWVhc3VyZVRleHQobmFtZSlcbiAgICAgICAgaWYgKHggKyBtZWFzdXJlLndpZHRoID4gdyAtIHNwYWNlKSB7XG4gICAgICAgICAgICB4ID0gMVxuICAgICAgICAgICAgeSArPSAzMlxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IG5hbWVzW25hbWVdXG4gICAgICAgIGlmICghY29vcmRzKSBjb250aW51ZVxuXG4gICAgICAgIGF0dExhdExuZy5wdXNoKC4uLmNvb3JkcylcbiAgICAgICAgYXR0VVYucHVzaCh4IC8gdywgKHkgLSAxNikgLyBoLCAobWVhc3VyZS53aWR0aCArIHNwYWNlIC8gMikgLyB3KVxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KG5hbWUsIHgsIHkpXG4gICAgICAgIHggKz0gbWVhc3VyZS53aWR0aCArIHNwYWNlXG4gICAgfVxuICAgIHJldHVybiB7IGNhbnZhcywgYXR0TGF0TG5nLCBhdHRVViB9XG59XG4iLCJpbXBvcnQge1xuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkRGF0YXNldCxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkVmVydGV4QXJyYXksXG4gICAgd2ViZ2xQcmVzZXRCbGVuZCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgZGF0YVVSTCBmcm9tIFwiLi4vc3RhcnMuZGF0XCJcbmltcG9ydCB7IFBhaW50ZXJOYW1lcyB9IGZyb20gXCIuL3BhaW50ZXItbmFtZXNcIlxuaW1wb3J0IGZyYWcgZnJvbSBcIi4vcGFpbnRlci1zdGFycy5mcmFnXCJcbmltcG9ydCB2ZXJ0IGZyb20gXCIuL3BhaW50ZXItc3RhcnMudmVydFwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgfSlcbiAgICBjdHguYWRkKG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0gfSkpXG4gICAgY3R4LnBhaW50KClcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIoZGF0YVVSTCkudGhlbigoYnVmZikgPT4ge1xuICAgICAgICBpZiAoIWJ1ZmYpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmYpXG4gICAgICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlclN0YXJzKGN0eCwgZGF0YSlcbiAgICAgICAgY3R4LmFkZChcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtuZXcgUGFpbnRlck5hbWVzKGN0eCksIHBhaW50ZXJdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgY3R4LnBhaW50KClcbiAgICB9KVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxufVxuXG4vLyAjYmVnaW4gQ2xhc3MgUGFpbnRlclN0YXJzXG5leHBvcnQgY2xhc3MgUGFpbnRlclN0YXJzIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgLy8gTnVtYmVyIG9mIHN0YXJzXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb3VudDogbnVtYmVyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZml4ZWRDYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAwIH0sXG4gICAgICAgIG5lYXI6IDAuMSxcbiAgICAgICAgZmFyOiAyLjAsXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyAzLFxuICAgIH0pXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YSBBIHNlcXVlbmNlIG9mIDQgZmxvYXRzOiBsb25naXR1ZGUsIGxhdGl0dWRlLCBicmlnaHRuZXNzIGFuZCBjb2xvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgICAgICBkYXRhOiBGbG9hdDMyQXJyYXksXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5jb3VudCA9IGRhdGEubGVuZ3RoID4+IDJcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0LFxuICAgICAgICAgICAgZnJhZyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFN0YXI6IFwidmVjNFwiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LnNldChcImF0dFN0YXJcIiwgZGF0YSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkYXRhc2V0XSlcbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcmcsIHZhbywgZml4ZWRDYW1lcmEgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBjYW1lcmEsIGdsIH0gPSBjb250ZXh0XG4gICAgICAgIGZpeGVkQ2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBjYW1lcmEudHJhbnNmby5vcmllbnRhdGlvblxuICAgICAgICBwcmcudXNlKClcbiAgICAgICAgcHJnLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlNb2RlbFZpZXdNYXRyaXhcIiwgZml4ZWRDYW1lcmEubWF0cml4TW9kZWxWaWV3KVxuICAgICAgICBwcmcudW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgZml4ZWRDYW1lcmEubWF0cml4UHJvamVjdGlvbilcbiAgICAgICAgcHJnLnVuaWZvcm0xZihcInVuaVZlZ2FTaXplSW5QaXhlbHNcIiwgTWF0aC5tYXgoY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpICogMC4wNSlcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlBPSU5UUywgMCwgdGhpcy5jb3VudClcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgfVxufVxuLy8gI2VuZFxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IEpTT04ucGFyc2UoJ3tcIkFscGhlcmF0eiwgU2lycmFoXCI6Wy0wLjU3MzE2NjEyNjM1NDkzNzksMS45NTAwNTYzNzMyNTMyNjQ1XSxcIkNhcGhcIjpbLTAuMDU3MDcyMjY2NTQwMjE0NTgsMi4wNTExMTA5MzY5NDM3MzZdLFwiQWxnZW5pYlwiOlstMC44MTQ3MTk2OTQ4MzA5NTMxLDEuOTA5OTEzODAwNDU3Mzk1XSxcIkFua2FhXCI6Wy0xLjI5MTE5NDU4MDYyNTQwNSw1LjU4NTQwMjY3MjIzMjI1M10sXCJGdWx1XCI6Wy0wLjE1NTUwODgzNjM1MjY5NDc3LDIuMTA4MDA4NjcwNTU4NzUxXSxcIlNjaGVkYXJcIjpbLTAuMTA5OTU1NzQyODc1NjQyNzYsMi4xMTkxNzg3Nzc3NzE1MTVdLFwiRGlwaGRhXCI6Wy0xLjQwODEzMTY0MDUwOTAyNTIsMS45NDI3MjU5OTAzOTQ4ODg0XSxcIkFjaGlyZFwiOlstMC4wODgxMzkxMjcyMjU3MTM2NCwyLjEzOTc3MzY2Mjk0NTA0OF0sXCJDYXN0dWxhXCI6Wy0wLjA2NDIyODExNjQ3MzM5MTMzLDIuMTU3MjI2OTU1NDY0OTkxXSxcIk1JUkFDSFwiOlstMC40NzI5ODQyMjcyOTA0NjMzNSwyLjIxODMxMzQ3OTI4NDc5M10sXCJXdXJyZW5cIjpbLTEuMDc3MDQyNjgxNDA1NzAwOCw1LjE5ODExNDExMTIxNDcxMl0sXCJSZXZhdGlcIjpbLTAuOTU3ODM2NjkzNDk0NDg4MSwyLjMxMzYwODQ1NjQ0MzY4M10sXCJBZGhpbFwiOlstMC4yOTY3MDU5NzI4MzkwMzYwNSwyLjI0NDE0NDM1MjIxNDMwOV0sXCJSdWNoYmFoXCI6Wy00LjEwMTUyMzc0MjE4NjY3NDZlLTIsMi4yMTk4ODQyNzU2MTE1ODc3XSxcIkxvZGVzdGFyLCBOb3J0aCBTdGFyLCBQb2xhcmlzXCI6WzAuNDYxODE0MTIwMDc3Njk5NiwyLjE1MTY0MTkwMTg1ODYwOTddLFwiQWxwaGVyZ1wiOlstMC44MTAzNTYzNzE3MDA5NjcyLDIuMzkxMjc1NjA4MTU3NDMxXSxcIlRpdGF3aW5cIjpbLTAuMzYwNTg1MDIzNDYyMDI4NSwyLjMwMzgzNDYxMjYzMjUxNV0sXCJOZW1idXNcIjpbLTAuMjM2MTQzMDQ3Nzk0ODMyNzgsMi4yODMwNjUxOTQ1MzM3ODI1XSxcIkFjaGVybmFyXCI6Wy0xLjAyNjA3OTA2NzI0NzQ2NjIsNS4wNzYxMTU1OTY1MDAzMDc1XSxcIlRvcmN1bGFyXCI6Wy0wLjg5NzYyMjgzNDMwMDY4MzcsMi41MjM5MjA2MzEzMDldLFwiQmF0ZW4gS2FpdG9zXCI6Wy0xLjE4NzY5NjU1NTk4MjE0MTMsMi44OTUxNTIxNjMyMDgxOTM2XSxcIlNlZ2luXCI6WzIuODc5NzkzMjY1NzkwNjQzNmUtMiwyLjI2NjEzNTUwMDc4OTQzNzddLFwiTW90aGFsbGFoXCI6Wy0wLjU0ODAzMzM4NTEyNjIxOTUsMi40MTk3MjQ0NzQ5NjQ5MzhdLFwiU2hlcmF0YW5cIjpbLTAuNjkyNTQ2NjQ3MTkxMzUsMi40ODI1NTYzMjgwMzY3MzQ0XSxcIkFsbWFjaFwiOlstMC4zMjM5MzMxMDkxNzAxNDc1NiwyLjM5MDQwMjk0MzUzMTQzNF0sXCJIYW1hbFwiOlstMC42MzE4MDkxODkyMjE5NDc0LDIuNTIzMjIyNDk5NjA4MjAyXSxcIk1pcmEsIE1pcmEgQVwiOlstMS4wMTE5NDE5MDAzMDYzMTIxLDIuOTI3Nzg5ODIwMjIwNDg3N10sXCJpb3QgQ2FzIEFCXCI6WzAuMTA5NzgxMjA5OTUwNDQzMzMsMi4zMDU5MjkwMDc3MzQ5MDhdLFwiS2FmZmFsamlkaG1hXCI6Wy0wLjg2MTg0MzU4NDYzNDc5OTksMi45NDgyMTAxNzI0Njg4MjE0XSxcIkxpbGlpIEJvcmVhXCI6Wy0wLjQ3Mjk4NDIyNzI5MDQ2MzM1LDIuNjQyNzc3NTUzMzY5ODEzN10sXCJNaXJhbVwiOlstMC4wNTU1MDE0NzAyMTM0MTk2OCwyLjQyODQ1MTEyMTIyNDkxXSxcIkJoYXJhbmlcIjpbLTAuNDk5MzM4Njk4OTk1NTc3NywyLjY3MDAwNDY4OTcwMDkyNTNdLFwiQW5nZXRlbmFyXCI6Wy0xLjA4MzY3NDkzMjU2MzI3OTMsMy42MDkzNDA4OTMxMjQyNzM2XSxcIkF6aGFcIjpbLTAuOTY1MzQxNjA5Mjc4MDYzNywzLjI2NjM4MzY5NTEwNzM4OF0sXCJHb3Jnb25lYSBTZWN1bmRhXCI6Wy0wLjI5NTMwOTcwOTQzNzQ0MDYsMi41ODM3ODU0MjQ2NTI0MDU1XSxcIk1lbmthclwiOlstMC43OTU2OTU2MDU5ODQyMTQ4LDMuMDI1MDA0NjU5NTU2NTcyXSxcIkdvcmdvbmVhIFRlcnRpYVwiOlstMC4yOTY4ODA1MDU3NjQyMzU0NywyLjYxMTAxMjU2MDk4MzUxN10sXCJBbGdvbCwgQWxnb2wgQSwgQWxnb2wgQiwgQWxnb2wgQ1wiOlstMC4yNjAwNTQwNTg1NDcxNTUxMywyLjYwMDE5MTUxOTYyMTE1Ml0sXCJNaXNhbVwiOlstMC4xOTk0OTExMzM1MDI5NTE4NiwyLjU2NzcyODM5NTUzNDA1NzddLFwiR29yZ29uZWEgUXVhcnRhXCI6Wy0wLjI3NDU0MDI5MTMzODcwODA1LDIuNjIyMDA4MTM1MjcxMDgxXSxcIkJvdGVpblwiOlstMC41NjA5NDg4MjE1OTA5Nzc1LDIuODM3OTA1MzYzNzQyNzc5Nl0sXCJEYWxpbVwiOlstMS4wMzA0NDIzOTAzNzc0NTIyLDMuOTIyNjI3NDkzODU3MjU2XSxcIlppYmFsXCI6Wy0wLjg5NTUyODQzOTE5ODI5MDUsMy4zNDM3MDE3ODA5NzA3MzddLFwiTWlyZmFrXCI6Wy0wLjEwMjI3NjI5NDE2Njg2NzcyLDIuNTU4MTI5MDg0NjQ4MDg4Nl0sXCJSYW5cIjpbLTAuODM4NDU2MTcyNjU4MDc1OSwzLjQxODQwMTg3Mjk1NjA5NF0sXCJBdGlrXCI6Wy0wLjMwOTYyMTQwOTMwMzc5NDA2LDIuNzk4ODA5OTg4NDk4MTA3Ml0sXCJSYW5hXCI6Wy0wLjgwMjg1MTQ1NTkxNzM5MTYsMy40NTc0OTcyNDgyMDA3NjY2XSxcIkNlbGFlbm8sIENlbGVub1wiOlstMC40MTQxNjY2MzE0OTgyNTQ0LDIuODk3OTQ0NjkwMDExMzg0OF0sXCJFbGVjdHJhXCI6Wy0wLjQxNjI2MTAyNjYwMDY0NzYsMi45MDAzODgxNTA5NjQxNzddLFwiVGF5Z2V0YSwgVGF5Z2V0ZVwiOlstMC40MTA2NzU5NzI5OTQyNjU4LDIuODk2ODk3NDkyNDYwMTg4XSxcIk1haWFcIjpbLTAuNDEwMzI2OTA3MTQzODY2OSwyLjkwMDIxMzYxODAzODk3NzNdLFwiQXN0ZXJvcGVcIjpbLTAuNDA3NzA4OTEzMjY1ODc1NCwyLjg5ODExOTIyMjkzNjU4NF0sXCJNZXJvcGVcIjpbLTAuNDE0NTE1Njk3MzQ4NjUzMywyLjkwNzE5NDkzNTA0Njk1NDZdLFwiTU9BSSAxXCI6WzAuMTIyNjk2NjQ2NDE1MjAxMzcsMi40Njg3NjgyMjY5NDU5Nzg3XSxcIkFsY3lvbmVcIjpbLTAuNDA5Mjc5NzA5NTkyNjcwMywyLjkwODk0MDI2NDI5ODk0OV0sXCJBdGxhc1wiOlstMC40MDU0Mzk5ODUyMzgyODI4LDIuOTE0ODc0MzgzNzU1NzI5Nl0sXCJQbGVpb25lXCI6Wy0wLjQwNDM5Mjc4NzY4NzA4NjIsMi45MTQwMDE3MTkxMjk3MzNdLFwiTWVua2hpYiwgTWVua2liXCI6Wy0wLjIyODgxMjY2NDkzNjQ1NjYsMi43OTg5ODQ1MjE0MjMzMDYyXSxcIlphdXJha1wiOlstMC43NzYxNDc5MTgzNjE4Nzg0LDMuNTgwNzE3NDkzMzkxNTY2Nl0sXCJCZWlkXCI6Wy0wLjY3MDAzMTg5OTg0MDYyMzIsMy40Nzg3OTAyNjUwNzUwOTc1XSxcIktlaWRcIjpbLTAuNjYzMjI1MTE1NzU3ODQ1MywzLjUwMzIyNDg3NDYwMzAxODNdLFwiUHJpbWEgSHlhZHVtXCI6Wy0wLjQxNTczNzQyNzgyNTA0OTMsMy4xMjU1MzU2MjQ0NzE0NDU0XSxcIlNlY3VuZGEgSHlhZHVtXCI6Wy0wLjM4NDE0Njk2ODM2Mzk1MTk2LDMuMTA2ODYwNjAxNDc1MTA2XSxcIkJlZW1pbVwiOlstMC43NzE5NTkxMjgxNTcwOTE5LDQuMTA0NDkwODAxOTE1MDY0XSxcIkFpblwiOlstMC4zNDc2Njk1ODY5OTcyNzA0NiwzLjA5OTcwNDc1MTU0MTkyOV0sXCJDaGFtdWt1eVwiOlstMC4zODQxNDY5NjgzNjM5NTE5NiwzLjE0NzcwMTMwNTk3MTc3MzNdLFwiQWxkZWJhcmFuXCI6Wy0wLjM1MzQyOTE3MzUyODg1MTcsMy4xNTg1MjIzNDczMzQxMzhdLFwiVGhlZW1pblwiOlstMC43MjA5OTU1MTM5OTg4NTc1LDQuMDMxODg1MTA1MDMyMV0sXCJTY2VwdHJ1bVwiOlstMC42MjYzOTg2Njg1NDA3NjQ5LDMuNjg4MjI5Nzc1MzE0NDE3XSxcIlRhYml0XCI6Wy0wLjQwMjY0NzQ1ODQzNTA5MTgsMy4zNDE0MzI4NTI5NDMxNDRdLFwiSGFzc2FsZWhcIjpbLTAuMTA3NTEyMjgxOTIyODUwNywyLjk3NzM1NzE3MDk3NzEyNjddLFwiQWxtYWF6XCI6WzIuMDU5NDg4NTE3MzUzMzA4N2UtMiwyLjg0MTIyMTQ4OTMyMTU2OV0sXCJTYWNsYXRlbmlcIjpbLTcuNTA0OTE1NzgzNTc1NjE3ZS0zLDIuODgwMTQyMzMxNjQxMDQzXSxcIk1hZ29cIjpbMC4yOTg4MDAzNjc5NDE0MjkyLDIuNDgwNDYxOTMyOTM0MzQxNF0sXCJIYWVkdXNcIjpbMC4wMDQ3MTIzODg5ODAzODQ2OSwyLjg4NTkwMTkxODE3MjYyMzhdLFwiQ3Vyc2FcIjpbLTAuNDQxNzQyODMzNjc5NzY0OCwzLjU4Mzg1OTA4NjA0NTE1NjJdLFwiQ2FwZWxsYVwiOlswLjA3OTc2MTU0NjgxNjE0MDg3LDIuODM3NTU2Mjk3ODkyMzgxXSxcIlJpZ2VsXCI6Wy0wLjQ0MDY5NTYzNjEyODU2ODIsMy42NTE5MjY5MjY4NzI5MzUzXSxcIkJlbGxhdHJpeFwiOlstMC4yNzgzODAwMTU2OTMwOTU1NiwzLjQzNzA3Njg5NTk1MjQzMzRdLFwiRWxuYXRoXCI6Wy0wLjA2NTI3NTMxNDAyNDU4NzkzLDMuMTA2NTExNTM1NjI0NzA3NV0sXCJOaWhhbFwiOlstMC40NzQ3Mjk1NTY1NDI0NTc2MywzLjkwMTg1ODA3NTc1ODUyMzNdLFwiTWludGFrYVwiOlstMC4zMDk2MjE0MDkzMDM3OTQwNiwzLjU1ODAyODIxMzExNTY0MDRdLFwiQXJuZWJcIjpbLTAuNDM4Nzc1NzczOTUxMzc0NDYsMy44NTYzMDQ5ODIyODE0NzFdLFwibGFtYmRhIE9yaSBYLTVcIjpbLTAuMjE0NTAwOTY1MDcwMTAzMDgsMy40MTAzNzMzNTgzOTY5Ml0sXCJsYW1iZGEgT3JpIFgtM1wiOlstMC4yMDk0Mzk1MTAyMzkzMTk1NiwzLjQwNDI2NDcwNjAxNDk0XSxcIkhhdHlzYVwiOlstMC4zNDE3MzU0Njc1NDA0ODk2NywzLjY1NjgxMzg0ODc3ODUxOTZdLFwiQWxuaWxhbVwiOlstMC4zMDA4OTQ3NjMwNDM4MjI0LDMuNTgxNTkwMTU4MDE3NTYzOF0sXCJUaWFuZ3VhblwiOlstMC4wOTg0MzY1Njk4MTI0ODAxOCwzLjI0MDkwMTg4ODAyODI3MDVdLFwiUGhhY3RcIjpbLTAuNTAzNzAyMDIyMTI1NTYzNSw0LjE2ODAyMDc4NjY4NzY1OF0sXCJTYWlwaFwiOlstMC4zMjI4ODU5MTE2MTg5NTA5NywzLjc0MzkwNTc3ODQ1MzAzNl0sXCJXYXpuXCI6Wy0wLjQ3MjI4NjA5NTU4OTY2NTU2LDQuMjEyMzUyMTQ5Njg4MzE0XSxcIkJldGVsZ2V1c2VcIjpbLTAuMTU2MzgxNTAwOTc4NjkxOTQsMy40ODY5OTMzMTI1NTk0NzA4XSxcIkdvcmVcXCdzIE5vdmFcIjpbLTAuMDQzNDU4Njk4Mzc0NjU4ODEsMy4yOTM3ODUzNjQzNjM2OTg1XSxcIk1lbmthbGluYW5cIjpbMC4xODE2ODg3NzUxMzI2MDk3LDIuOTIyNzI4MzY1Mzg5NzA0NV0sXCJNYWhhc2ltXCI6WzAuMTE3NDYwNjU4NjU5MjE4MzgsMy4wNDI4MDcwMTc5MjY5MTRdLFwiRWxrdXJ1ZFwiOlstMC40MjM0MTY4NzY1MzM4MjQzNyw0LjI1NzU1NjE3NzMxNDk2N10sXCJQcm9wdXNcIjpbMC4wNDM5ODIyOTcxNTAyNTcxLDMuMjk2MDU0MjkyMzkxMjkxNF0sXCJGdXJ1ZFwiOlstMC4zMzkxMTc0NzM2NjI0OTgyLDQuMTQ1NTA2MDM5MzM2OTMyXSxcIlRlamF0XCI6WzAuMDcyNzgwMjI5ODA4MTYzNTQsMy4zMTEyMzg2NTY4ODM2NDJdLFwiTWlyemFtXCI6Wy0wLjI0OTA1ODQ4NDI1OTU5MDgyLDMuOTQ1NDkxMzA3MDU4MzgxNV0sXCJDYW5vcHVzXCI6Wy0wLjQ0MTM5Mzc2NzgyOTM2NTksNC41NTg5NzQ1MzkxMzQzODhdLFwiMjMgSC4gQ2FtXCI6WzAuNDYwOTQxNDU1NDUxNzAyNDUsMi4zNDkwMzg2NDAyNTkxNjhdLFwiQWxoZW5hXCI6WzAuMDc3NjY3MTUxNzEzNzQ3NjYsMy40MzQyODQzNjkxNDkyNDI2XSxcIlBsYXNrZXR0IHN0YXIsIFBsYXNrZXR0XFwncyBzdGFyXCI6Wy01LjQxMDUyMDY4MTE4MjQyMTVlLTMsMy41OTMxMDkzMzEwODA3MjY1XSxcIk1lYnN1dGFcIjpbMC4xNjgwNzUyMDY5NjcwNTM5NCwzLjMwODA5NzA2NDIzMDA1Ml0sXCJBbHppcnJcIjpbMC4wNzg1Mzk4MTYzMzk3NDQ4MywzLjUwMzU3Mzk0MDQ1MzQxN10sXCJEb2cgU3RhciwgU2lyaXVzLCBTaXJpdXMgQVwiOlstMC4xNTQ5ODUyMzc1NzcwOTY0OCwzLjk2NTczNzEyNjM4MTUxNThdLFwiQWx0YWxlYmFuLCBUYWxlYmFuXCI6Wy0wLjM2NDA3NTY4MTk2NjAxNzE0LDQuNTQwNjQ4NTgxOTg4NDQ5XSxcIjUxIEguIENlcFwiOlswLjQ4MzgwNTI2ODY1MjgyODE0LDIuMjAyOTU0NTgxODY3MjQzXSxcIkFkaGFyYVwiOlstMC4xOTc3NDU4MDQyNTA5NTc1Myw0LjE4NTgyMzE0NTA1OF0sXCJDaXRhbGFcIjpbLTguMzc3NTgwNDA5NTcyNzgxZS0zLDMuODE3Mzg0MTM5OTYxOTk3N10sXCJVbnVyZ3VuaXRlXCI6Wy0wLjE3OTI0NTMxNDE3OTgxNzY1LDQuMTc0MzAzOTcxOTk0ODM4XSxcIk1la2J1ZGFcIjpbMC4yMDc2OTQxODA5ODczMjUyMywzLjQxNjQ4MjAxMDc3ODkwMDJdLFwiTXVsaXBoZWluXCI6Wy0wLjA3Njk2OTAyMDAxMjk0OTkzLDMuOTgzNzE0MDE3Njc3MDU3XSxcIldlemVuXCI6Wy0wLjE0NDMzODcyOTEzOTkzMTA0LDQuMTYxMjE0MDAyNjA0ODhdLFwiQWhhZGlcIjpbLTAuMTk2ODczMTM5NjI0OTYwMzYsNC4zNDYwNDQzNzAzOTEwOF0sXCJXYXNhdFwiOlswLjI3NzMzMjgxODE0MTg5OSwzLjQyMDQ5NjI2ODA1ODQ4N10sXCJBbHVkcmFcIjpbLTAuMTEzMjcxODY4NDU0NDMxOTksNC4yMzQ1MTc4MzExODg2NDNdLFwiR29tZWlzYVwiOlswLjIwMzg1NDQ1NjYzMjkzNzcsMy42NTY4MTM4NDg3Nzg1MTk2XSxcIkhhZGlyXCI6Wy0wLjIwNzg2ODcxMzkxMjUyNDY1LDQuNDYzNTA1MDI5MDUwMjk5XSxcIkNhc3RvciBCXCI6WzAuMzkyMzUwMDE1ODQ4MzI1MywzLjI3MTQ0NTE0OTkzODE3MV0sXCJDYXN0b3IgQVwiOlswLjM5MjM1MDAxNTg0ODMyNTMsMy4yNzE0NDUxNDk5MzgxNzFdLFwiSmlzaHVpXCI6WzAuNDIyODkzMjc3NzU4MjI2MDUsMy4yMjgzMzU1MTc0MTM5MTEyXSxcIlByb2N5b24sIFByb2N5b24gQVwiOlswLjIyNzQxNjQwMTUzNDg2MTEyLDMuNzI5NTk0MDc4NTg2NjgyNl0sXCJQb2xsdXhcIjpbMC40MDg1ODE1Nzc4OTE4NzI1NSwzLjM1NTA0NjQyMTEwODY5OTddLFwiQXNtaWRpc2tlLCBBem1pZGksIEF6bWlkaXNrZVwiOls5Ljk0ODM3NjczNjM2NzY3N2UtMyw0LjIxNDI3MjAxMTg2NTUwOF0sXCJOYW9zXCI6Wy0wLjA4MjIwNTAwNzc2ODkzMjkzLDQuNDY3NjkzODE5MjU1MDg1XSxcIlR1cmVpc1wiOlswLjA3Njc5NDQ4NzA4Nzc1MDUxLDQuMjQzNzY4MDc2MjI0MjEyXSxcIlJlZ29yXCI6Wy0wLjEzNDIxNTgxOTQ3ODM2Mzk1LDQuNTg2NzI1Mjc0MjQxMDk5XSxcIkFsdGFyZiwgVGFyZlwiOlswLjQwMjI5ODM5MjU4NDY5Mjk3LDMuNzM5MzY3OTIyMzk3ODUxXSxcIlBpYXV0b3NcIjpbMC41MTY0NDI5MjU2NjUxMjIxLDMuNDc4OTY0Nzk4MDAwMjk3M10sXCJBbHNjaWF1a2F0XCI6WzAuNTk5MzQ2MDY1MTM0ODUyOCwzLjA5NjAzOTU2MDExMjc0MV0sXCJNdXNjaWRhXCI6WzAuNjE4MzcwMTUzOTgxNTkxLDIuNzIyMTkwMDM0MzM1NTU1Nl0sXCJNaW5jaGlyXCI6WzAuNDQxNzQyODMzNjc5NzY0OCwzLjg4NzAyMjc3NzExNjU3MTVdLFwiTWVsZXBoXCI6WzAuNTY2MzU5MzQyMjcyMTYsMy41OTY0MjU0NTY2NTk1MTU1XSxcIkFzZWxsdXMgQm9yZWFsaXNcIjpbMC41ODg2OTk1NTY2OTc2ODczLDMuNTYzNDM4NzMzNzk2ODIyNV0sXCJBc2VsbHVzIEF1c3RyYWxpc1wiOlswLjU3NDIxMzMyMzkwNjEzNDQsMy42MzA2MzM5MDk5OTg2MDQ1XSxcIkFzaGxlc2hhXCI6WzAuNDk3OTQyNDM1NTkzOTgyMiwzLjg1MjI5MDcyNTAwMTg4NDNdLFwiQWxzZXBoaW5hXCI6Wy0wLjEyODYzMDc2NTg3MTk4MjA4LDQuNzQ4NjkxODI4ODI2MTcxXSxcIkNvcGVybmljdXNcIjpbMC42NTgxNjM2NjA5MjcwNjE3LDMuNDM0NjMzNDM0OTk5NjQxXSxcIlRhbGl0aGFcIjpbMC43MTI3OTI0NjY1MTQ0ODQyLDIuOTkzNDE0MjAwMDk1NDc0NF0sXCJBY3ViZW5zXCI6WzAuNTg1MDM0MzY1MjY4NDk5MywzLjc3ODgxMjM2MzQ5MjkyMjddLFwiQWxrYXBocmFoXCI6WzAuNzI2NTgwNTY3NjA1MjM5NSwzLjAxMjk2MTg4NzcxNzgxMV0sXCJOYWhuXCI6WzAuNjkyMDIzMDQ4NDE1NzUxNywzLjU5MjkzNDc5ODE1NTUyN10sXCJTdWhhaWxcIjpbMC4wNDkyMTgyODQ5MDYyNDAwOSw0LjY0MTUyODYxMjc1MzcyXSxcIk1pYXBsYWNpZHVzXCI6Wy0wLjI1MTUwMTk0NTIxMjM4MjksNC45OTEyOTI1OTQ4NTMzODRdLFwiQXNwaWRpc2tlXCI6Wy0wLjEyMjM0NzU4MDU2NDgwMjUsNC44NjAwNDM4MzUxMDM0MV0sXCJIRCA4MDk1MUFCXCI6Wy0wLjMwNzAwMzQxNTQyNTgwMjU2LDUuMDY1NjQzNjIwOTg4MzQyXSxcIkludGVyY3J1c1wiOlswLjgwNDA3MzE4NjM5Mzc4NzcsMy4wNDA3MTI2MjI4MjQ1MjFdLFwiQWxwaGFyZFwiOlswLjUwNzAxODE0NzcwNDM1MjcsNC4yMTQ3OTU2MTA2NDExMDZdLFwiQWx0ZXJmXCI6WzAuNzgyOTU0NzAyNDQ0NjU2MywzLjYwNzQyMTAzMDk0NzA3OTZdLFwiVWtkYWhcIjpbMC42Mjc5Njk0NjQ4Njc1NTk3LDQuMTI3NTI5MTQ4MDQxMzldLFwiU3VicmFcIjpbMC43MzQwODU0ODMzODg4MTUxLDMuOTIwMDA5NDk5OTc5MjY0XSxcIlpoYW5nXCI6WzAuNTEzODI0OTMxNzg3MTMwNiw0LjM4NDc5MDY3OTc4NTM1NF0sXCJSYXNhbGFzXCI6WzAuODc3MDI3OTQ5MTI3MTUwNywzLjU2MTM0NDMzODY5NDQyOTVdLFwiRmVsaXNcIjpbMC40NzI4MDk2OTQzNjUyNjM5LDQuNDU0Nzc4MzgyNzkwMzI3XSxcIlJlZ3VsdXNcIjpbMC44NTQxNjQxMzU5MjYwMjQ4LDMuOTUxOTQ5MDI1MjkwNzYwNV0sXCJBZGhhZmVyYVwiOlswLjk1OTA1ODQyMzk3MDg4NDEsMy42NjkyMDU2ODY0Njc2NzldLFwiVGFuaWEgQm9yZWFsaXNcIjpbMC45NjE1MDE4ODQ5MjM2NzYyLDMuMDY5NTEwNTU1NDgyNDI3M10sXCJUYW5pYSBBdXN0cmFsaXNcIjpbMC45ODM2Njc1NjY0MjQwMDQxLDMuMTA0OTQwNzM5Mjk3OTEyM10sXCJQcmFlY2lwdWFcIjpbMS4xMTIyOTgzMzIyOTU5ODYsMy4zMTYxMjU1Nzg3ODkyMjYzXSxcIkNoYWxhd2FuXCI6WzEuMTA2MDE1MTQ2OTg4ODA2NywzLjA2NzkzOTc1OTE1NTYzMjZdLFwiQWxrZXNcIjpbMC42NDc4NjYyMTgzNDAyOTUxLDQuNjk1OTgyODg1NDE1OTQzXSxcIk1lcmFrXCI6WzAuOTU2NDQwNDMwMDkyODkyNiwyLjYwMzUwNzY0NTE5OTk0MV0sXCJEdWJoZVwiOlswLjg5MDI5MjQ1MTQ0MjMwNzUsMi40OTMyMDI4MzY0NzM4OTk2XSxcIlpvc21hXCI6WzEuMTY2NDAzNTM5MTA3ODEwNSwzLjkxMzM3NzI0ODgyMTY4NTZdLFwiQ2hlcnRhblwiOlsxLjEyNzMwODE2Mzg2MzEzNzUsNC4xMDc5ODE0NjA0MTkwNTRdLFwiQWx1bGEgQm9yZWFsaXNcIjpbMS4yMDU2NzM0NDcyNzc2ODI5LDMuMzI4ODY2NDgyMzI4Nzg0Nl0sXCJHaWF1c2FyXCI6WzAuODA2MzQyMTE0NDIxMzgwMywyLjMyMDkzODgzOTMwMjA1OTRdLFwiRm9ybW9zYVwiOlsxLjI0NDc2ODgyMjUyMjM1NTcsNC4wMTA3NjY2MjEwODI5NjldLFwiQWxrYWZ6YWgsIFRhaXlhbmdzaG91XCI6WzEuMTQ3MDMwMzg0NDEwNjczMywyLjYyMzU3ODkzMTU5Nzg3Nl0sXCJEZW5lYm9sYVwiOlsxLjIzNTg2NzY0MzMzNzE4NDcsNC4zNzQ2Njc3NzAxMjM3ODc1XSxcIlphdmlqYXZhXCI6WzEuMDYwMjg3NTIwNTg2NTU1Miw0LjcyMTExNTYyNjY0NDY2Ml0sXCJQaGVjZGFcIjpbMS4wNzEyODMwOTQ4NzQxMTk0LDIuNDU4MTIxNzE4NTA4ODE0XSxcIlRvbmF0aXVoXCI6WzAuNjk2NzM1NDM3Mzk2MTM2NCwyLjIwNDY5OTkxMTExOTIzN10sXCJBbGNoaWJhXCI6WzAuNjQ3ODY2MjE4MzQwMjk1MSw1LjA3Mjk3NDAwMzg0NjcxOV0sXCJNaW5rYXJcIjpbMC42ODUyMTYyNjQzMzI5NzM4LDUuMDcxNzUyMjczMzcwMzIyXSxcIkltYWlcIjpbMC4wNjYxNDc5Nzg2NTA1ODUxLDUuMjA1MDk1NDI4MjIyNjg5XSxcIk1lZ3JlelwiOlsxLjAzNzA3NDY0MTUzNTAzMDcsMi4zMTM3ODI5ODkzNjg4ODI2XSxcIkdpZW5haFwiOlswLjc3NjY3MTUxNzEzNzQ3NjYsNS4wNzg3MzM1OTAzNzgzXSxcIlphbmlhaFwiOlsxLjA2Nzk2Njk2OTI5NTMzMDIsNC45OTg2MjI5Nzc3MTE3Nl0sXCJHaW5hblwiOlszLjkyNjk5MDgxNjk4NzI0MTRlLTIsNS4yMjI1NDg3MjA3NDI2MzJdLFwiKiogU1RGQSAyMVwiOlsxLjQ4MDM4ODI3MTU0MTU5MDEsMy45MzA4MzA1NDEzNDE2MjldLFwiQWxnb3JhYlwiOlswLjgwMzcyNDEyMDU0MzM4ODcsNS4xNTcwOTg4NzM3OTI4NDZdLFwiR2FjcnV4XCI6WzAuMDk4NjExMTAyNzM3Njc5NjMsNS4yMzg5NTQ4MTU3MTEzNzldLFwiQ2hhcmFcIjpbMS4zMTQ1ODE5OTI2MDIxMjksMi4zNzUzOTMxMTE5NjQyODI2XSxcIktyYXpcIjpbMC42ODYwODg5Mjg5NTg5NzEsNS4xOTg4MTIyNDI5MTU1MDldLFwiUG9ycmltYVwiOlsxLjA3MDQxMDQzMDI0ODEyMjMsNS4xOTg0NjMxNzcwNjUxMTFdLFwiTGEgU3VwZXJiYVwiOlsxLjI1MDUyODQwOTA1MzkzNzMsMi4yMDY5Njg4MzkxNDY4Mjk2XSxcIk1pbW9zYVwiOlswLjA1NTUwMTQ3MDIxMzQxOTY4LDUuMjc4OTIyODU1NTgyMDQ4XSxcIlRpYW55aVwiOlswLjg3ODQyNDIxMjUyODc0NiwyLjE1NjAwNTIyNDk4ODU5NTNdLFwiQWxpb3RoXCI6WzEuMDY3NDQzMzcwNTE5NzMyLDIuMTMyNDQzMjgwMDg2NjcyXSxcIk1pbmVsYXV2YVwiOlsxLjE1NjI4MDYyOTQ0NjI0MzMsNS4zMzI1MDQ0NjM2MTgyNzVdLFwiQ29yIENhcm9saVwiOlsxLjM3NDc5NTg1MTc5NTkzMzMsMi4wNjQ1NDk5NzIxODQwOTI4XSxcIlRhaXlpXCI6WzAuOTAxOTg2MTU3NDMwNjY5NSwyLjEzMzgzOTU0MzQ4ODI2NzNdLFwiVmluZGVtaWF0cml4XCI6WzEuMjg1MDg1OTI4MjQzNDI0OCw1LjQ1MTM2MTM4NTY3OTA4OF0sXCJNaXphciBBXCI6WzEuMDc0NzczNzUzMzc4MTA4LDEuOTc0MTQxOTE2OTMwNzg2MV0sXCJNaXphciBCXCI6WzEuMDc0NzczNzUzMzc4MTA4LDEuOTc0MTQxOTE2OTMwNzg2MV0sXCJTcGljYVwiOlswLjg4NzMyNTM5MTcxMzkxNzIsNS41MTcxNjAyOTg0NzkyNzZdLFwiQWxjb3JcIjpbMS4wNzI4NTM4OTEyMDA5MTQ1LDEuOTY4MjA3Nzk3NDc0MDA1M10sXCJIZXplXCI6WzEuMDU0MDA0MzM1Mjc5Mzc1NSw1LjY3NjY4MzM5MjExMTU1N10sXCJIRCAxMTkzNjFBQlwiOlswLjM0NDg3NzA2MDE5NDA3OTU0LDUuNDY2MzcxMjE3MjQ2MjRdLFwiQWxjYWlkLCBBbGthaWRcIjpbMS4xNDAwNDkwNjc0MDI2OTYsMS43NTczNzIwMjM4MzMwOTAzXSxcIk11cGhyaWRcIjpbMS4yNzQ2MTM5NTI3MzE0NTg4LDAuMDkyNTAyNDUwMzU1Njk5NDddLFwiQWdlbmEsIEhhZGFyXCI6WzAuMDIxODE2NjE1NjQ5OTI5MTIsNS40NDE0MTMwMDg5NDI3MjFdLFwiTWVua2VudFwiOlswLjQyMDI3NTI4Mzg4MDIzNDU1LDUuNTc1NjI4ODI4NDIxMDg1XSxcIlRodWJhblwiOlswLjg4OTQxOTc4NjgxNjMxMDQsMS45Mjg5Mzc4ODkzMDQxMzNdLFwiS2FuZ1wiOlswLjgzMjUyMjA1MzIwMTI5NTIsNS44MjA4NDc1ODgzMjYyODldLFwiU3lybWFcIjpbMC44OTEzMzk2NDg5OTM1MDQyLDUuODk0ODQ5NTQ4NjEwODQ4XSxcIkFyY3R1cnVzXCI6WzEuMjA2MTk3MDQ2MDUzMjgxMiwwLjI2NDI0Mjg0ODc1MTk0MTVdLFwiWHVhbmdlXCI6WzEuMTI4NzA0NDI3MjY0NzMyOSwxLjUxNzkxMjg1MDQ1OTQ2ODNdLFwiS2hhbWJhbGlhXCI6WzAuNzcyMzA4MTk0MDA3NDkwOCw1LjgxODkyNzcyNjE0OTA5NF0sXCJFbGdhZmFyXCI6WzAuOTE2NDcyMzkwMjIyMjIyNCw2LjAyNTIyNTY0MzczNDgyNV0sXCJTZWdpbnVzXCI6WzEuMTU0ODg0MzY2MDQ0NjQ4LDEuMTczOTA4NDU0ODkxMzg2XSxcIlJpZ2VsIEtlbnRhdXJ1cywgUmlnaWwgS2VudGF1cnVzXCI6Wy0xLjIzOTE4Mzc2ODkxNTk3MzllLTIsNS41MTE0MDA3MTE5NDc2OTRdLFwiVG9saW1hblwiOlstMS4yMzkxODM3Njg5MTU5NzM5ZS0yLDUuNTExNDAwNzExOTQ3Njk0XSxcIkl6YXJcIjpbMS4xMzA2MjQyODk0NDE5MjY3LDAuNjg3MzEwNjU5NDM1MzY3MV0sXCJadWJlbmVsZ2VudWJpXCI6WzAuNjYzMzk5NjQ4NjgzMDQ0Niw1LjkzOTg3OTA0MzMxMjMwMl0sXCJNZXJnYVwiOlsxLjA0NjY3Mzk1MjQyMDk5OTQsMS4zOTU5MTQzMzU3NDUwNjQ3XSxcIktvY2hhYlwiOlswLjcwNjg1ODM0NzA1NzcwMzUsMS45NjYxMTM0MDIzNzE2MTIzXSxcIk5la2thclwiOlsxLjA0Nzg5NTY4Mjg5NzM5NTUsMS4xODAxOTE2NDAxOTg1NjU3XSxcIkJyYWNoaXVtXCI6WzAuNDk5NTEzMjMxOTIwNzc3MSw1Ljg4NTU5OTMwMzU3NTI3OV0sXCJJIEJvbypcIjpbMC45OTU4ODQ4NzExODc5NjQ0LDEuNDAyNTQ2NTg2OTAyNjQzMl0sXCJadWJlbmVzY2hhbWFsaVwiOlswLjY4NDY5MjY2NTU1NzM3NTQsNi4xNDM5MDgwMzI4NzA0Mzg1XSxcIlBoZXJrYWQgTWlub3JcIjpbMC43MTYyODMxMjUwMTg0NzI4LDEuODk3NTIxOTYyNzY4MjM1MV0sXCJBbGthbHVyb3BzXCI6WzAuOTgyNzk0OTAxNzk4MDA3LDEuMDU0MDA0MzM1Mjc5Mzc1NV0sXCJQaGVya2FkXCI6WzAuNzEyNzkyNDY2NTE0NDg0MiwxLjg5Mjk4NDEwNjcxMzA0OTddLFwiRWRhc2ljaFwiOlswLjg0ODc1MzYxNTI0NDg0MjUsMS42NDAwODU4OTgwOTkwNzEzXSxcIk51c2FrYW5cIjpbMC45NzA1Nzc1OTcwMzQwNDY3LDAuNzk1Njk1NjA1OTg0MjE0OF0sXCJadWJlbmVsaGFrcmFiaVwiOlswLjU2MTk5NjAxOTE0MjE3NDEsNi4xMzUwMDY4NTM2ODUyNjhdLFwiQWxwaGVjY2FcIjpbMC45Mzg0NjM1Mzg3OTczNTEsMC43MzA3NjkzNTc4MTAwMjU3XSxcIlVudWthbGhhaVwiOlswLjc2OTM0MTEzNDI3OTEwMDQsMC4yNDc4MzY3NTM3ODMxOTQ3OF0sXCJDaG93XCI6WzAuODM1NDg5MTEyOTI5Njg1NSwwLjQ1MzQzNjUzOTY2ODEyNjhdLFwiR3VkamFcIjpbMC44NDM1MTc2Mjc0ODg4NTk0LDAuNTI1MzQ0MTA0ODUwMjkzM10sXCJJa2xpbFwiOlswLjMxODg3MTY1NDMzOTM2NCw2LjAxNDkyODIwMTE0ODA1OF0sXCJGYW5nXCI6WzAuMzUzMDgwMTA3Njc4NDUyOSw2LjA2MDEzMjIyODc3NDcxMTVdLFwiRHNjaHViYmFcIjpbMC4zOTI1MjQ1NDg3NzM1MjQ2Niw2LjExMDM5NzcxMTIzMjE0OF0sXCJKYWJiYWhcIjpbMC4zOTYxODk3NDAyMDI3MTI4LDYuMTg5MTEyMDYwNDk3MDkyXSxcIlllZCBQcmlvclwiOlswLjU2MTk5NjAxOTE0MjE3NDEsMC4xNTQ0NjE2Mzg4MDE0OTgxNl0sXCJZZWQgUG9zdGVyaW9yXCI6WzAuNTM3NzM1OTQyNTM5NDUyOSwwLjE0OTQwMDE4Mzk3MDcxNDZdLFwiQWxuaXlhdFwiOlswLjI5NjcwNTk3MjgzOTAzNjA1LDYuMTMxNTE2MTk1MTgxMjc5NV0sXCJDdWphbVwiOlswLjY3NDIyMDY5MDA0NTQwOTUsMC41MTQxNzM5OTc2Mzc1Mjk1XSxcIkF0aGVieW5lXCI6WzAuNzE0NzEyMzI4NjkxNjc4LDEuNjE1ODI1ODIxNDk2MzUwM10sXCJBbnRhcmVzXCI6WzAuMjYyODQ2NTg1MzUwMzQ2MDUsNi4xNDI2ODYzMDIzOTQwNDNdLFwiS29ybmVwaG9yb3NcIjpbMC43MDE3OTY4OTIyMjY5MTk5LDAuNjgwODUyOTQxMjAyOTg3OV0sXCJNYXJmaWtcIjpbMC41NTU4ODczNjY3NjAxOTQsMC4yOTg4MDAzNjc5NDE0MjkyXSxcIlBhaWthdWhhbGVcIjpbMC4yMjM1NzY2NzcxODA0NzM2NCw2LjEzNTUzMDQ1MjQ2MDg2Nl0sXCJBdHJpYVwiOlstMC4yNjYzMzcyNDM4NTQzMzQ2Niw1LjYxMTkzMTY3Njg2MjU2OF0sXCJMYXJhd2FnXCI6WzAuMTE0NDkzNTk4OTMwODI4MDEsNi4wODgwNTc0OTY4MDY2Ml0sXCJYYW1pZGltdXJhXCI6WzAuMDY4MjQyMzczNzUyOTc4MjksNi4wNDA5MzM2MDcwMDI3NzNdLFwiUGlwaXJpbWFcIjpbMC4wNjczNjk3MDkxMjY5ODExMiw2LjA0MjMyOTg3MDQwNDM2OV0sXCJPQU8gMTY1My00MFwiOlswLjAyNTQ4MTgwNzA3OTExNzIxLDYuMDEzMTgyODcxODk2MDYzXSxcIlNhYmlrXCI6WzAuMjQ0NTIwNjI4MjA0NDA1NTcsMC4xMTcyODYxMjU3MzQwMTg5NV0sXCJBbGRoaWJhaFwiOlswLjYxMTU2MzM2OTg5ODgxMzEsMS42NzU2OTA2MTQ4Mzk3NTZdLFwiTFNGIDFcIjpbLTEuOTE5ODYyMTc3MTkzNzYyNWUtMyw2LjA4MjgyMTUwOTA1MDYzN10sXCJTYXJpblwiOlswLjU0ODM4MjQ1MDk3NjYxODQsMC44MTczMzc2ODg3MDg5NDQ1XSxcIkxlc2F0aFwiOlstMy4yMTE0MDU4MjM2Njk1NjY0ZS0yLDYuMTMwODE4MDYzNDgwNDgxXSxcIk1hYXN5bVwiOlswLjQ5NjM3MTYzOTI2NzE4NzM2LDAuODYzNTg4OTEzODg2Nzk0Ml0sXCJTaGF1bGFcIjpbLTMuODU3MTc3NjQ2OTA3NDY4NGUtMiw2LjEzOTAyMTExMDk2NDg1NV0sXCJSYXN0YWJhblwiOlswLjU4MTM2OTE3MzgzOTMxMTIsMS4zODg5MzMwMTg3MzcwODc0XSxcIlNhcmdhc1wiOlstMC4xMDQzNzA2ODkyNjkyNjA5MSw2LjA1ODczNTk2NTM3MzExNV0sXCJSYXNhbGhhZ3VlXCI6WzAuMzkzOTIwODEyMTc1MTIwMiwwLjYyNjU3MzIwMTQ2NTk2NDNdLFwiQ2VydmFudGVzXCI6Wy0wLjIwMDcxMjg2Mzk3OTM0NzksNS45MzUxNjY2NTQzMzE5MTddLFwiQ2ViYWxyYWlcIjpbMC4zMDAwMjIwOTg0MTc4MjUzLDAuNTA5ODEwNjc0NTA3NTQzN10sXCJBbHJ1YmFcIjpbMC41NDczMzUyNTM0MjU0MjE4LDEuNDIyMjY4ODA3NDUwMTc5XSxcIkZ1eXVlXCI6Wy0wLjA4NjIxOTI2NTA0ODUxOTg5LDYuMTY5NzM4OTA1Nzk5OTU1XSxcIkR6aWJhblwiOlswLjU0MTU3NTY2Njg5Mzg0MDUsMS43OTcxNjU1MzA3Nzg1NjFdLFwiR3J1bWl1bVwiOlswLjUyNzYxMzAzMjg3Nzg4NTksMS40ODY0OTY5MjM5MjM1NzA2XSxcIkVsdGFuaW5cIjpbMC41MDk5ODUyMDc0MzI3NDMxLDEuMzc5ODU3MzA2NjI2NzE3XSxcIkFsbmFzbFwiOlstMC4wNzkyMzc5NDgwNDA1NDI1NiwxLjYwNTcwMjkxMTgzNDc4MzJlLTJdLFwiWWlsZHVuXCI6WzAuNDkyODgwOTgwNzYzMTk4NjQsMi4wODIwMDMyNjQ3MDQwMzZdLFwiUG9saXNcIjpbLTIuNzkyNTI2ODAzMTkwOTI3M2UtMiwwLjE3NDUzMjkyNTE5OTQzMjk1XSxcIkthdXMgTWVkaWFcIjpbLTAuMTI0NzkxMDQxNTE3NTk0NTcsMC4wNTIzNTk4Nzc1NTk4Mjk4OV0sXCJLYXVzIEF1c3RyYWxpc1wiOlstMC4xNzEyMTY3OTk2MjA2NDM3Myw2LjI2OTIyMjY3MzE2MzYzMl0sXCJBbGF0aGZhclwiOlswLjM4MDQ4MTc3NjkzNDc2Mzg3LDEuMTc1MTMwMTg1MzY3NzgyXSxcIkthdXMgQm9yZWFsaXNcIjpbLTAuMTEzNzk1NDY3MjMwMDMwMjgsMC4xMzM2OTIyMjA3MDI3NjU2NV0sXCJGYWZuaXJcIjpbMC40NzM1MDc4MjYwNjYwNjE1NywxLjY2NTM5MzE3MjI1Mjk4OTNdLFwiVmVnYVwiOlswLjMzNTgwMTM0ODA4MzcwOSwxLjE3NzA1MDA0NzU0NDk3NTldLFwiWGloZVwiOlswLjMwMDU0NTY5NzE5MzQyMzU2LDEuMTQ3Mzc5NDUwMjYxMDcyMV0sXCJTaGVsaWFrXCI6WzAuMjU3OTU5NjYzNDQ0NzYxOSwxLjEwMjg3MzU1NDMzNTIxNjhdLFwiQWluYWxyYW1pXCI6Wy0wLjE4NzA5OTI5NTgxMzc5MjE0LDAuMjIyMzU0OTQ2NzA0MDc3Nl0sXCJOdW5raVwiOlstMC4yMTY5NDQ0MjYwMjI4OTUxNSwwLjE2Njg1MzQ3NjQ5MDY1NzldLFwiU3VsYWZhdFwiOlswLjIyMzU3NjY3NzE4MDQ3MzY0LDEuMTA1MTQyNDgyMzYyODA5NV0sXCJBc2NlbGxhXCI6Wy0wLjI2NzkwODA0MDE4MTEyOTU3LDAuMTE5MzgwNTIwODM2NDEyMTRdLFwiUG9sYXJpcyBBdXN0cmFsaXNcIjpbLTAuNDgzNjMwNzM1NzI3NjI4Nyw1LjMwNDIzMDEyOTczNTk2N10sXCJPa2FiXCI6WzAuMDU2NzIzMjAwNjg5ODE1NzEsMC44MTc4NjEyODc0ODQ1NDI4XSxcIk1lcmlkaWFuYVwiOlstMC4zNDE5MTAwMDA0NjU2ODkxNSw2LjI3NTE1Njc5MjYyMDQxM10sXCJBbGJhbGRhaFwiOlstMC4yMzE5NTQyNTc1OTAwNDYzNywwLjI3NzMzMjgxODE0MTg5OV0sXCJHdW1hbGFcIjpbLTAuMjc1NDEyOTU1OTY0NzA1MTYsMC4yMzQ5MjEzMTczMTg0MzY3N10sXCJBbGFkZmFyXCI6WzAuMjIyNTI5NDc5NjI5Mjc3MDIsMS4yMzI1NTE1MTc3NTgzOTU3XSxcIkFsdGFpc1wiOlswLjQwMTQyNTcyNzk1ODY5NTgsMS43MjE3NjczMDcwOTI0MDYyXSxcIkFya2FiIFByaW9yXCI6Wy0wLjQxNzY1NzI5MDAwMjI0MzA1LDYuMTcxNjU4NzY3OTc3MTQ5XSxcIkFya2FiIFBvc3RlcmlvclwiOlstMC40MjA3OTg4ODI2NTU4MzI4LDYuMTY1ODk5MTgxNDQ1NTY3XSxcIlJ1a2JhdFwiOlstMC40MDI5OTY1MjQyODU0OTA3LDYuMjQzMjE3MjY3MzA4OTE2XSxcIkFuc2VyXCI6WzUuOTM0MTE5NDU2NzgwNzIwNGUtMiwxLjAyOTU2OTcyNTc1MTQ1NTFdLFwiQWxzYWZpXCI6WzAuMzgyMDUyNTczMjYxNTU4NywxLjc2ODM2NzU5ODEyMDY1NDZdLFwiU2hhbVwiOlstMC4wMzczNTAwNDU5OTI2Nzg2NSwwLjk1MDMzMTc3NzcxMDkxMjVdLFwiVGFyYXplZFwiOlstMC4xMjM1NjkzMTEwNDExOTg1MywwLjg1MDQ5ODk0NDQ5NjgzNjddLFwiRmF3YXJpc1wiOlswLjE3ODcyMTcxNTQwNDIxOTM2LDEuMzczNzQ4NjU0MjQ0NzM2Nl0sXCJBbHRhaXJcIjpbLTAuMTU1NTA4ODM2MzUyNjk0NzcsMC44MzMyMjAxODQ5MDIwOTI5XSxcIlR5bFwiOlswLjM2MzU1MjA4MzE5MDQxODgsMS43ODc3NDA3NTI4MTc3OTE4XSxcIkxpYmVydGFzXCI6Wy0wLjE3MTkxNDkzMTMyMTQ0MTQ1LDAuODM0NDQxOTE1Mzc4NDg5XSxcIlRlcmViZWxsdW1cIjpbLTAuNDM3MDMwNDQ0Njk5MzgwMSwwLjI1OTM1NTkyNjg0NjM1NzRdLFwiQWxzaGFpblwiOlstMC4xOTM1NTcwMTQwNDYxNzExNSwwLjgwNTEyMDM4Mzk0NDk4NDNdLFwiUHJpbWEgR2llZGlcIjpbLTAuNDMxMDk2MzI1MjQyNTk5NCwwLjU0MjYyMjg2NDQ0NTAzN10sXCJBbGdlZGksIEdpZWRpXCI6Wy0wLjQzMzAxNjE4NzQxOTc5MzE0LDAuNTQyNzk3Mzk3MzcwMjM2NV0sXCJBbHNoYXRcIjpbLTAuNDQ0NzA5ODkzNDA4MTU1MiwwLjU0NDAxOTEyNzg0NjYzMjVdLFwiRGFiaWggTWlub3JcIjpbLTAuNDU5MzcwNjU5MTI0OTA3NTQsMC41MDgyMzk4NzgxODA3NDg4XSxcIkRhYmloLCBEYWJpaCBNYWpvclwiOlstMC40NjAyNDMzMjM3NTA5MDQ3LDAuNTA4NzYzNDc2OTU2MzQ3XSxcIlBlYWNvY2tcIjpbLTAuNjE0MTgxMzYzNzc2ODA0NSw1Ljk1MDAwMTk1Mjk3Mzg2OV0sXCJTQURSXCI6WzMuMjYzNzY1NzAxMjI5Mzk2NWUtMiwxLjM2Mzk3NDgxMDQzMzU2ODddLFwiQWxkdWxmaW5cIjpbLTAuMjg5NTUwMTIyOTA1ODU5MjQsMC45NjcyNjE0NzE0NTUyNTc0XSxcIlJvdGFuZXZcIjpbLTAuMjczMTQ0MDI3OTM3MTEyNTcsMS4wMjc2NDk4NjM1NzQyNjEyXSxcIlN1YWxvY2luLCBTdmFsb2NpblwiOlstMC4yNjczODQ0NDE0MDU1MzEzLDEuMDUyNDMzNTM4OTUyNTgwN10sXCJEZW5lYlwiOlswLjAzNDkwNjU4NTAzOTg4NjU5LDEuNDcwOTYzNDkzNTgwODIxXSxcIkFsamFuYWhcIjpbLTAuMDk5NjU4MzAwMjg4ODc2MjIsMS4zMjU0MDMwMzM5NjQ0OTM4XSxcIkFsYmFsaVwiOlstMC41MjUzNDQxMDQ4NTAyOTMzLDAuNjU3NjQwMDYyMTUxNDYzNF0sXCJNdXNpY2FcIjpbLTAuMzgzNjIzMzY5NTg4MzUzNjQsMS4wMjQzMzM3Mzc5OTU0NzJdLFwiUE4gT3UgNFwiOlswLjEzOTQ1MTgwNzIzNDM0Njk0LDEuNzE5NDk4Mzc5MDY0ODEzNV0sXCJLaXRhbHBoYVwiOlstMC41MDEwODQwMjgyNDc1NzIsMC45ODQwMTY2MzIyNzQ0MDMxXSxcIkFsZGVyYW1pblwiOlswLjE2MDA0NjY5MjQwNzg4MDAzLDEuNzYyNzgyNTQ0NTE0MjcyOV0sXCJTYWRhbHN1dWRcIjpbLTAuNjYxMTMwNzIwNjU1NDUyMSwwLjgzODEwNzEwNjgwNzY3NzFdLFwiQWxmaXJrXCI6WzAuMjQ0ODY5Njk0MDU0ODA0NDQsMS44NzY5MjcwNzc1OTQ3MDJdLFwiQnVuZGFcIjpbLTAuNzA0MDY1ODIwMjU0NTEyNiwwLjgxMDcwNTQzNzU1MTM2NjFdLFwiTmFzaGlyYVwiOlstMC43Nzk2Mzg1NzY4NjU4NjcsMC42MjgzMTg1MzA3MTc5NTg2XSxcIkF6ZWxmYWZhZ2VcIjpbLTIuMjY4OTI4MDI3NTkyNjI4NGUtMiwxLjY2NjQ0MDM2OTgwNDE4NTldLFwiRW5pZlwiOlstMC41NDkwODA1ODI2Nzc0MTYxLDEuMTQ0NDEyMzkwNTMyNjgxN10sXCJFcmFraXMsIEhlcnNjaGVsXFwncyBHYXJuZXQgU3RhclwiOlswLjA3NTM5ODIyMzY4NjE1NTA0LDEuNzU1ODAxMjI3NTA2Mjk1NV0sXCJEZW5lYiBBbGdlZGlcIjpbLTAuODAzMDI1OTg4ODQyNTkxLDAuNjU2MjQzNzk4NzQ5ODY3OV0sXCJBbGRoYW5hYlwiOlstMC44OTgzMjA5NjYwMDE0ODE0LDAuMTA2NjM5NjE3Mjk2ODUzNTVdLFwiU2FkYWxtZWxpa1wiOlstMC43MzQyNjAwMTYzMTQwMTQ1LDEuMDQ1OTc1ODIwNzIwMjAxN10sXCJBbG5haXJcIjpbLTAuOTE1Nzc0MjU4NTIxNDI0Nyw2LjEwODY1MjM4MTk4MDE1MzVdLFwiQmloYW1cIjpbLTAuNjc1NjE2OTUzNDQ3MDA1LDEuMTc2NTI2NDQ4NzY5Mzc3NF0sXCJBbmNoYVwiOlstMC44NDg1NzkwODIzMTk2NDMsMC45MzM5MjU2ODI3NDIxNjU3XSxcIlNhZGFjaGJpYVwiOlstMC44MDAwNTg5MjkxMTQyMDA3LDEuMDg1MjQ1NzI4ODkwMDc0XSxcIlNpdHVsYVwiOlstMC44ODU3NTQ1OTUzODcxMjIyLDEuMDkzOTcyMzc1MTUwMDQ1OV0sXCJIb21hbVwiOlstMC43MDk2NTA4NzM4NjA4OTQzLDEuMzc2MzY2NjQ4MTIyNzI4NF0sXCJUaWFraVwiOlstMS4wMTE0MTgzMDE1MzA3MTQsNi4wNDM1NTE2MDA4ODA3NjVdLFwiTWF0YXJcIjpbLTAuNDM1NDU5NjQ4MzcyNTg1MiwxLjYxNDQyOTU1ODA5NDc1NDddLFwiU2FkYWxiYXJpXCI6Wy0wLjUzMzM3MjYxOTQwOTQ2NzEsMS41ODI2NjQ1NjU3MDg0NTgxXSxcInNpZyBQZWcgQVwiOlstMC43NTIyMzY5MDc2MDk1NTYxLDEuNDExNDQ3NzY2MDg3ODE0NF0sXCJTa2F0XCI6Wy0xLjA1ODg5MTI1NzE4NDk1OTgsMC44NjUzMzQyNDMxMzg3ODg2XSxcIkZvbWFsaGF1dCBCXCI6Wy0xLjEyNzY1NzIyOTcxMzUzNjMsMC4yNzgyMDU0ODI3Njc4OTYxNF0sXCJGb21hbGhhdXRcIjpbLTEuMTMyNzE4Njg0NTQ0MzIsMC4zNTc2MTc5NjM3MzM2MzgxXSxcIkhlbHZldGlvc1wiOlstMC42MDYxNTI4NDkyMTc2MzA2LDEuNTcxODQzNTI0MzQ2MDkzM10sXCJGdW1hbHNhbWFrYWhcIjpbLTAuODY1ODU3ODQxOTE0Mzg2OSwxLjM3NTE0NDkxNzY0NjMzMjRdLFwiU2NoZWF0XCI6Wy0wLjUwNzAxODE0NzcwNDM1MjcsMS42NzA5NzgyMjU4NTkzNzFdLFwiTWFya2FiXCI6Wy0wLjcwNDc2Mzk1MTk1NTMxMDMsMS41NDA3NzY2NjM2NjA1OTQyXSxcIlNhbG1cIjpbLTAuNjA0MDU4NDU0MTE1MjM3NCwxLjcwMTg3MDU1MzYxOTY3MDhdLFwiQWxrYXJhYlwiOlstMC42MTcxNDg0MjM1MDUxOTQ5LDEuNzIwMDIxOTc3ODQwNDExOF0sXCJWZXJpdGF0ZVwiOlstMC4zNjczOTE4MDc1NDQ4MDY0LDEuODU3MjA0ODU3MDQ3MTY2XSxcIkVycmFpXCI6WzAuMjY3MjA5OTA4NDgwMzMxOSwyLjA3Njc2NzI3Njk0ODA1MjddfScpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ2Q7QUFFdkMsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMscWxCQUFxbEIsRUFBQyxvQkFBb0IsRUFBQyxzaERBQXNoRCxFQUFDLDBDQUEwQyxFQUFDLG1lQUFtZSxFQUFDLHdDQUF3QyxFQUFDLGcvQkFBZy9CLEVBQUM7QUFDdHNILE1BQU0sSUFBSSxHQUFHLGlyRkFBaXJGO0FBRS9xRixTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMsK0NBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1A7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCc0I7QUFDNEI7QUFFbEI7QUFDTTtBQUNBO0FBRWhDLE1BQU0sWUFBYSxTQUFRLDBDQUFVO0lBYXhDLFlBQTZCLE9BQW1CO1FBQzVDLEtBQUssRUFBRTtRQURrQixZ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXdDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBVUE7b0JBQUE7a0NBQWtDOzs7Ozs7b0JBQVM7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBLDhCQUE4Qix5cmpCQUF5cmpCLEUifQ==