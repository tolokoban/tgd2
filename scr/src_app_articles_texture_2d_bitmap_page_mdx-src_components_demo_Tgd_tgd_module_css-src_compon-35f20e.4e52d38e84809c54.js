"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_bitmap_page_mdx-src_components_demo_Tgd_tgd_module_css-src_compon-35f20e"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
75440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _texture2d_from_bitmap_demo__rspack_import_4 = __webpack_require__(76553);





const FOCUS = { "Detail #1": "    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, {\n        storage: { flipY: true },\n    }).loadBitmap(canvas)\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()" };
const FULL = "import View from \"@/components/demo/Tgd\"\nimport { TgdContext, TgdTexture2D, WebglTextureParameters, tgdCanvasCreateWithContext2D } from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport { Painter } from \"./painter\"\n\nfunction init(context: TgdContext, refUpdate: { current: ((params: WebglTextureParameters) => void) | null }) {\n    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, {\n        storage: { flipY: true },\n    }).loadBitmap(canvas)\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()\n}\n\nexport default function Demo() {\n    const refUpdate = React.useRef<((params: WebglTextureParameters) => void) | null>(null)\n    const update = (params: WebglTextureParameters) => {\n        const f = refUpdate.current\n        if (!f) return\n\n        f(params)\n    }\n    const [wrapS, setWrapS] = React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    const [wrapT, setWrapT] = React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    return (\n        <View onReady={(context: TgdContext) => init(context, refUpdate)}>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\">\n                <ViewOptions\n                    label=\"Wrap S\"\n                    value={wrapS}\n                    onChange={(wrapS) => {\n                        setWrapS(wrapS)\n                        update({ wrapS })\n                    }}>\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"Wrap T\"\n                    value={wrapT}\n                    onChange={(wrapT) => {\n                        setWrapT(wrapT)\n                        update({ wrapT })\n                    }}>\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\nfunction makeCanvas() {\n    const w = 256\n    const h = 256\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n    ctx.fillStyle = \"#09f\"\n    ctx.fillRect(0, 0, w, h)\n    ctx.fillStyle = \"#f90\"\n    ctx.font = `${h / 2}px serif`\n    ctx.textAlign = \"center\"\n    ctx.textBaseline = \"middle\"\n    ctx.fillText(\"TGD\", w / 2, h / 2)\n    return canvas\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_texture2d_from_bitmap_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
819(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Painter: () => (Painter)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class Painter extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    context;
    texture;
    prg;
    vao;
    constructor(context, texture) {
        super();
        this.context = context;
        this.texture = texture;
        this.prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: [
                "#version 300 es",
                "in vec2 attPoint;",
                "out vec2 varUV;",
                "void main() {",
                ["varUV = attPoint + vec2(0.5);", "gl_Position = vec4(attPoint, 0.0, 1.0);"],
                "}",
            ],
            frag: [
                "#version 300 es",
                "precision mediump float;",
                "uniform sampler2D uniTexture;",
                "in vec2 varUV;",
                "out vec4 FragColor;",
                "void main() {",
                ["FragColor = texture(uniTexture, varUV);"],
                "}",
            ],
        });
        const ds = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec2",
        });
        ds.set("attPoint", new Float32Array([-1, +1, +1, +1, -1, -1, +1, -1]));
        this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, this.prg, [ds]);
    }
    delete() {
        this.vao.delete();
        this.prg.delete();
    }
    paint(time, delay) {
        const { context, prg, vao, texture } = this;
        const { gl } = context;
        prg.use();
        texture.activate(0, prg, "uniTexture");
        vao.bind();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        vao.unbind();
    }
}


},
76553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(18712);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var react__rspack_import_4 = __webpack_require__(96540);
/* import */ var react__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_4);
/* import */ var _painter__rspack_import_5 = __webpack_require__(819);






function init(context, refUpdate) {
    const canvas = makeCanvas();
    const texture = new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context, {
        storage: { flipY: true },
    }).loadBitmap(canvas);
    refUpdate.current = (params) => {
        texture.setParams(params);
        context.paint();
    };
    const painter = new _painter__rspack_import_5.Painter(context, texture);
    context.add(painter);
    context.paint();
}
function Demo() {
    const refUpdate = react__rspack_import_4_default().useRef(null);
    const update = (params) => {
        const f = refUpdate.current;
        if (!f)
            return;
        f(params);
    };
    const [wrapS, setWrapS] = react__rspack_import_4_default().useState("REPEAT");
    const [wrapT, setWrapT] = react__rspack_import_4_default().useState("REPEAT");
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_1["default"], { onReady: (context) => init(context, refUpdate), children: (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_3.ViewPanel, { display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_3.ViewOptions, { label: "Wrap S", value: wrapS, onChange: (wrapS) => {
                        setWrapS(wrapS);
                        update({ wrapS });
                    }, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "REPEAT" }, "REPEAT"), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "CLAMP_TO_EDGE" }, "CLAMP_TO_EDGE"), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "MIRRORED_REPEAT" }, "MIRRORED_REPEAT")] }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_3.ViewOptions, { label: "Wrap T", value: wrapT, onChange: (wrapT) => {
                        setWrapT(wrapT);
                        update({ wrapT });
                    }, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "REPEAT" }, "REPEAT"), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "CLAMP_TO_EDGE" }, "CLAMP_TO_EDGE"), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "MIRRORED_REPEAT" }, "MIRRORED_REPEAT")] })] }) }));
}
function makeCanvas() {
    const w = 256;
    const h = 256;
    const { canvas, ctx } = (0,_tolokoban_tgd__rspack_import_2.tgdCanvasCreateWithContext2D)(w, h);
    ctx.fillStyle = "#09f";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#f90";
    ctx.font = `${h / 2}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TGD", w / 2, h / 2);
    return canvas;
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
79763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(75440);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Texture2D from bitmap"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We call Bitmap, an image, a video, a canvas, ... All the following types,\nactually: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "ImageData"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLImageElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 24
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLCanvasElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 44
                    }, this),
                    ",\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLVideoElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "ImageBitmap"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This is the easiest way to import data into a texture."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Youla!"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9iaXRtYXBfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbi0zNWYyMGUuNGU1MmQzOGU4NDgwOWM1NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvXy9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBjYW52YXMgPSBtYWtlQ2FudmFzKClcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxcbiAgICB9KS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgcmVmVXBkYXRlLmN1cnJlbnQgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XFxuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSlcXG4gICAgY29udGV4dC5hZGQocGFpbnRlcilcXG4gICAgY29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJELCBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzLCB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld09wdGlvbnMsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCByZWZVcGRhdGU6IHsgY3VycmVudDogKChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbCB9KSB7XFxuICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICByZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG4gICAgICAgIHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKVxcbiAgICBjb250ZXh0LmFkZChwYWludGVyKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmVXBkYXRlID0gUmVhY3QudXNlUmVmPCgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG4gICAgICAgIGNvbnN0IGYgPSByZWZVcGRhdGUuY3VycmVudFxcbiAgICAgICAgaWYgKCFmKSByZXR1cm5cXG5cXG4gICAgICAgIGYocGFyYW1zKVxcbiAgICB9XFxuICAgIGNvbnN0IFt3cmFwUywgc2V0V3JhcFNdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcXFwid3JhcFNcXFwiXT4oXFxcIlJFUEVBVFxcXCIpXFxuICAgIGNvbnN0IFt3cmFwVCwgc2V0V3JhcFRdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcXFwid3JhcFNcXFwiXT4oXFxcIlJFUEVBVFxcXCIpXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCByZWZVcGRhdGUpfT5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJXcmFwIFNcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d3JhcFN9XFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHdyYXBTKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V3JhcFMod3JhcFMpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgd3JhcFMgfSlcXG4gICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIlJFUEVBVFxcXCI+UkVQRUFUPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiQ0xBTVBfVE9fRURHRVxcXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIk1JUlJPUkVEX1JFUEVBVFxcXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIldyYXAgVFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwVH1cXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsod3JhcFQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXcmFwVCh3cmFwVClcXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwVCB9KVxcbiAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiUkVQRUFUXFxcIj5SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJDTEFNUF9UT19FREdFXFxcIj5DTEFNUF9UT19FREdFPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiTUlSUk9SRURfUkVQRUFUXFxcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xcbiAgICBjb25zdCB3ID0gMjU2XFxuICAgIGNvbnN0IGggPSAyNTZcXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxcbiAgICBjdHguZmlsbFN0eWxlID0gXFxcIiMwOWZcXFwiXFxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKVxcbiAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmOTBcXFwiXFxuICAgIGN0eC5mb250ID0gYCR7aCAvIDJ9cHggc2VyaWZgXFxuICAgIGN0eC50ZXh0QWxpZ24gPSBcXFwiY2VudGVyXFxcIlxcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXFxcIm1pZGRsZVxcXCJcXG4gICAgY3R4LmZpbGxUZXh0KFxcXCJUR0RcXFwiLCB3IC8gMiwgaCAvIDIpXFxuICAgIHJldHVybiBjYW52YXNcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkRGF0YXNldCwgVGdkUGFpbnRlciwgVGdkUHJvZ3JhbSwgdHlwZSBUZ2RUZXh0dXJlMkQsIFRnZFZlcnRleEFycmF5IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJ2YXJVViA9IGF0dFBvaW50ICsgdmVjMigwLjUpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCwgV2ViZ2xUZXh0dXJlUGFyYW1ldGVycywgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgcmVmVXBkYXRlOiB7IGN1cnJlbnQ6ICgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxuICAgIH0pLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgIHJlZlVwZGF0ZS5jdXJyZW50ID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSlcbiAgICBjb250ZXh0LmFkZChwYWludGVyKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWZVcGRhdGUgPSBSZWFjdC51c2VSZWY8KChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCB1cGRhdGUgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IGYgPSByZWZVcGRhdGUuY3VycmVudFxuICAgICAgICBpZiAoIWYpIHJldHVyblxuXG4gICAgICAgIGYocGFyYW1zKVxuICAgIH1cbiAgICBjb25zdCBbd3JhcFMsIHNldFdyYXBTXSA9IFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXCJ3cmFwU1wiXT4oXCJSRVBFQVRcIilcbiAgICBjb25zdCBbd3JhcFQsIHNldFdyYXBUXSA9IFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXCJ3cmFwU1wiXT4oXCJSRVBFQVRcIilcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCByZWZVcGRhdGUpfT5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXcmFwIFNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d3JhcFN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsod3JhcFMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdyYXBTKHdyYXBTKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgd3JhcFMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiUkVQRUFUXCI+UkVQRUFUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiQ0xBTVBfVE9fRURHRVwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJNSVJST1JFRF9SRVBFQVRcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldyYXAgVFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwVH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh3cmFwVCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V3JhcFQod3JhcFQpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwVCB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJSRVBFQVRcIj5SRVBFQVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJDTEFNUF9UT19FREdFXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIk1JUlJPUkVEX1JFUEVBVFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFrZUNhbnZhcygpIHtcbiAgICBjb25zdCB3ID0gMjU2XG4gICAgY29uc3QgaCA9IDI1NlxuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDlmXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZjkwXCJcbiAgICBjdHguZm9udCA9IGAke2ggLyAyfXB4IHNlcmlmYFxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCJcbiAgICBjdHguZmlsbFRleHQoXCJUR0RcIiwgdyAvIDIsIGggLyAyKVxuICAgIHJldHVybiBjYW52YXNcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ047QUFFL0MsTUFBTSxLQUFLLEdBQUcsRUFB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