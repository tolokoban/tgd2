"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_time_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_settings-6b5758"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
89160(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(19422);





const FOCUS = { "Detail #1": "    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()" };
const FULL = "import {\n    ArrayNumber4,\n    tgdCalcMapRange,\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTime,\n    TgdUniformBufferObjectCamera,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\nimport { PainterPlayPause } from \"@/painter/play-pause\"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(3, 3)\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()\n    context.inputs.pointer.eventMove.addListener((evt) => {\n        if (!evt.shiftKey) return\n\n        virtualTimeGreen.seconds = tgdCalcMapRange(evt.current.x, -1, +1, 0, 3)\n        context.paint()\n    })\n    return ({ speed }: { speed: number }) => {\n        virtualTimeYellow.speed = speed\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            disableDefaultDoubleTap\n            options={{\n                preserveDrawingBuffer: true,\n                alpha: false,\n                antialias: true,\n                premultipliedAlpha: false,\n            }}\n            settings={{\n                speed: {\n                    label: \"speed\",\n                    value: 3,\n                    min: 0,\n                    max: 5,\n                    step: 0.5,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
19422(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _painter_play_pause__rspack_import_3 = __webpack_require__(39356);




function init(context) {
    const { camera } = context;
    if (camera instanceof _tolokoban_tgd__rspack_import_1.TgdCameraPerspective) {
        camera.near = 0.1;
        camera.far = 10;
    }
    camera.fitSpaceAtTarget(3, 3);
    const uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 });
    const colors = [
        [1, 0.5, 0.5, 1],
        [0.5, 1, 0.5, 1],
        [0.5, 0.5, 1, 1],
        [1, 1, 0, 1],
    ];
    const S = 0.7;
    const meshes = [];
    for (const y of [+S, -S]) {
        for (const x of [-S, +S]) {
            const color = colors.shift();
            const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                color,
            });
            meshes.push(new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                material,
                uniformCamera,
                transfo: { position: [x, y, 0] },
            }));
        }
    }
    const times = [0, 1, -1, 3].map((speed) => new _tolokoban_tgd__rspack_import_1.TgdTime({ speed, context }));
    const virtualTimeGreen = times[1];
    const virtualTimeYellow = times[3];
    context.add((time) => {
        uniformCamera.updateData();
        const cases = [0, 1, 2, 3].map((index) => [
            meshes[index],
            times[index],
        ]);
        if (virtualTimeGreen.seconds > 3) {
            virtualTimeGreen.seconds -= 3;
        }
        for (const index of [0, 1, 2, 3]) {
            const [mesh, virtualTime] = cases[index];
            const t = index > 0 ? virtualTime.seconds : time;
            const angY = t * 30;
            mesh.transfo.setEulerRotation(0, angY, 0);
        }
    }, clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: meshes,
    }), new _painter_play_pause__rspack_import_3.PainterPlayPause(context, { size: 128 }));
    context.play();
    context.inputs.pointer.eventMove.addListener((evt) => {
        if (!evt.shiftKey)
            return;
        virtualTimeGreen.seconds = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMapRange)(evt.current.x, -1, +1, 0, 3);
        context.paint();
    });
    return ({ speed }) => {
        virtualTimeYellow.speed = speed;
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, disableDefaultDoubleTap: true, options: {
            preserveDrawingBuffer: true,
            alpha: false,
            antialias: true,
            premultipliedAlpha: false,
        }, settings: {
            speed: {
                label: "speed",
                value: 3,
                min: 0,
                max: 5,
                step: 0.5,
            },
        } }));
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
39356(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterPlayPause: () => (PainterPlayPause)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class PainterPlayPause extends _tolokoban_tgd__rspack_import_0.TgdPainterIcon {
    constructor(context, options = {}) {
        const texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST",
            },
        });
        texture.loadBitmap((0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreatePalette)(["#f00", "#0f0"]));
        (0,_tolokoban_tgd__rspack_import_0.tgdLoadCanvasFromSvg)(SVG).then((bmp) => {
            texture.loadBitmap(bmp);
            this.refresh();
        });
        const size = options.size ?? 64;
        super(context, {
            alignX: 0,
            alignY: 0,
            margin: 0,
            ...options,
            texture,
            atlas: [
                { x: 0, y: 0, width: 0.5, height: 1 },
                { x: 0.5, y: 0, width: 0.5, height: 1 },
            ],
            width: size,
            height: size,
        });
        this.context = context;
        this.handleTap = () => {
            const { context } = this;
            if (context.playing) {
                context.pause();
            }
            else {
                context.play();
            }
        };
        this.handlePlayingChange = () => {
            this.index = this.context.playing ? 1 : 0;
        };
        this.textureIcons = texture;
        this.handlePlayingChange();
        this.eventPointerTap.addListener(this.handleTap);
        context.eventPlayingChange.addListener(this.handlePlayingChange);
    }
    delete() {
        this.textureIcons.delete();
        this.eventPointerTap.removeListener(this.handleTap);
        this.context.eventPlayingChange.removeListener(this.handlePlayingChange);
        super.delete();
    }
}
const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" width="512" height="256">
 <g fill="#FFF">
  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
  <path transform="translate(24,0)" d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
 </g>
</svg>`;


},
86698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(89160);
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
        a: "a",
        code: "code",
        h1: "h1",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "TgdTime"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The time ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 5,
                        columnNumber: 10
                    }, this),
                    " gives you in the painters is the real machine time, expressed in seconds.\nEven if you are not playing the animation, the time goes on.\nIt is the number of seconds elapsed since the creation of the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 7,
                        columnNumber: 63
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdTime.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdTime"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                            lineNumber: 9,
                            columnNumber: 2
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    " class allows you to use a virtual time instead, that can be speed up/slow down and paused.\nEven reversed.\nAnd the time is not readonly: you can change it at any ... time!"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "red"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 15,
                                columnNumber: 7
                            }, this),
                            " cube uses the context time."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "green"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 7
                            }, this),
                            " cude uses a virtual time with speed ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 53
                            }, this),
                            ". And after 3 seconds, we reset it three seconds sooner. In pause mode, you can use shift-mouse to change the time."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "blue"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 7
                            }, this),
                            " cude uses a negative speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "-1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 44
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "yellow"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 7
                            }, this),
                            " cude uses a triple speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "3"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 44
                            }, this),
                            ". Use the slider to change this speed."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Tap the screen to switch between ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "play"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 34
                    }, this),
                    "/",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "pause"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 43
                    }, this),
                    ", and see how it is dealt by ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdTime"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 81
                    }, this),
                    ".\nPay attention at the red cube and how it \"jumps\" when you start again a paused animation."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGltZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZXR0aW5ncy02YjU3NTguODA0NDIzMWI4YjJlNTY4MC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvcGFpbnRlci9wbGF5LXBhdXNlLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAxLCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcXG4gICAgICAgIFsxLCAxLCAwLCAxXSxcXG4gICAgXVxcbiAgICBjb25zdCBTID0gMC43XFxuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuICAgIGZvciAoY29uc3QgeSBvZiBbK1MsIC1TXSkge1xcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMuc2hpZnQoKVxcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgbWVzaGVzLnB1c2goXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHRpbWVzOiBUZ2RUaW1lW10gPSBbMCwgMSwgLTEsIDNdLm1hcCgoc3BlZWQpID0+IG5ldyBUZ2RUaW1lKHsgc3BlZWQsIGNvbnRleHQgfSkpXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxcbiAgICAgICAgICAgIGNvbnN0IGNhc2VzOiBBcnJheTxbbWVzaDogVGdkUGFpbnRlck1lc2gsIHRpbWU6IFRnZFRpbWVdPiA9IFswLCAxLCAyLCAzXS5tYXAoKGluZGV4KSA9PiBbXFxuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXFxuICAgICAgICAgICAgICAgIHRpbWVzW2luZGV4XSxcXG4gICAgICAgICAgICBdKVxcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFttZXNoLCB2aXJ0dWFsVGltZV0gPSBjYXNlc1tpbmRleF1cXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IGluZGV4ID4gMCA/IHZpcnR1YWxUaW1lLnNlY29uZHMgOiB0aW1lXFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgYW5nWSwgMClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUaW1lLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFBhaW50ZXJQbGF5UGF1c2UgfSBmcm9tIFxcXCJAL3BhaW50ZXIvcGxheS1wYXVzZVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuICAgICAgICBjYW1lcmEubmVhciA9IDAuMVxcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXFxuICAgIH1cXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjb2xvcnM6IEFycmF5TnVtYmVyNFtdID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDEsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAwLjUsIDEsIDFdLFxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxcbiAgICBdXFxuICAgIGNvbnN0IFMgPSAwLjdcXG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG4gICAgZm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXFxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3IsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFt4LCB5LCAwXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSlcXG4gICAgY29uc3QgdmlydHVhbFRpbWVHcmVlbiA9IHRpbWVzWzFdXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXFxuICAgICAgICAgICAgY29uc3QgY2FzZXM6IEFycmF5PFttZXNoOiBUZ2RQYWludGVyTWVzaCwgdGltZTogVGdkVGltZV0+ID0gWzAsIDEsIDIsIDNdLm1hcCgoaW5kZXgpID0+IFtcXG4gICAgICAgICAgICAgICAgbWVzaGVzW2luZGV4XSxcXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxcbiAgICAgICAgICAgIF0pXFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA+IDMpIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBbMCwgMSwgMiwgM10pIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWVcXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nWSA9IHQgKiAzMFxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBQYWludGVyUGxheVBhdXNlKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRNb3ZlLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGlmICghZXZ0LnNoaWZ0S2V5KSByZXR1cm5cXG5cXG4gICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA9IHRnZENhbGNNYXBSYW5nZShldnQuY3VycmVudC54LCAtMSwgKzEsIDAsIDMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7IHNwZWVkIH06IHsgc3BlZWQ6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICB2aXJ0dWFsVGltZVllbGxvdy5zcGVlZCA9IHNwZWVkXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcInNwZWVkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA1LFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRpbWUsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyBQYWludGVyUGxheVBhdXNlIH0gZnJvbSBcIkAvcGFpbnRlci9wbGF5LXBhdXNlXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICBpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcbiAgICAgICAgY2FtZXJhLm5lYXIgPSAwLjFcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXG4gICAgfVxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcbiAgICAgICAgWzAuNSwgMSwgMC41LCAxXSxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxuICAgIF1cbiAgICBjb25zdCBTID0gMC43XG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cbiAgICBmb3IgKGNvbnN0IHkgb2YgWytTLCAtU10pIHtcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aW1lczogVGdkVGltZVtdID0gWzAsIDEsIC0xLCAzXS5tYXAoKHNwZWVkKSA9PiBuZXcgVGdkVGltZSh7IHNwZWVkLCBjb250ZXh0IH0pKVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXG4gICAgICAgICAgICBjb25zdCBjYXNlczogQXJyYXk8W21lc2g6IFRnZFBhaW50ZXJNZXNoLCB0aW1lOiBUZ2RUaW1lXT4gPSBbMCwgMSwgMiwgM10ubWFwKChpbmRleCkgPT4gW1xuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBpbmRleCA+IDAgPyB2aXJ0dWFsVGltZS5zZWNvbmRzIDogdGltZVxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudE1vdmUuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBpZiAoIWV2dC5zaGlmdEtleSkgcmV0dXJuXG5cbiAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID0gdGdkQ2FsY01hcFJhbmdlKGV2dC5jdXJyZW50LngsIC0xLCArMSwgMCwgMylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSlcbiAgICByZXR1cm4gKHsgc3BlZWQgfTogeyBzcGVlZDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgdmlydHVhbFRpbWVZZWxsb3cuc3BlZWQgPSBzcGVlZFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckljb24sXG4gICAgVGdkUGFpbnRlckljb25PcHRpb25zLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB0Z2RMb2FkQ2FudmFzRnJvbVN2Zyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGludGVyZmFjZSBQYWludGVyUGxheVBhdXNlT3B0aW9ucyBleHRlbmRzIE9taXQ8VGdkUGFpbnRlckljb25PcHRpb25zLCBcIndpZHRoXCIgfCBcImhlaWdodFwiIHwgXCJ0ZXh0dXJlXCIgfCBcImF0bGFzXCI+IHtcbiAgICBzaXplOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJQbGF5UGF1c2UgZXh0ZW5kcyBUZ2RQYWludGVySWNvbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlSWNvbnM6IFRnZFRleHR1cmUyRFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgICAgICBvcHRpb25zOiBQYXJ0aWFsPFBhaW50ZXJQbGF5UGF1c2VPcHRpb25zPiA9IHt9LFxuICAgICkge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjAwXCIsIFwiIzBmMFwiXSkpXG4gICAgICAgIHRnZExvYWRDYW52YXNGcm9tU3ZnKFNWRykudGhlbigoYm1wKSA9PiB7XG4gICAgICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoYm1wKVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2l6ZSA9IG9wdGlvbnMuc2l6ZSA/PyA2NFxuICAgICAgICBzdXBlcihjb250ZXh0LCB7XG4gICAgICAgICAgICBhbGlnblg6IDAsXG4gICAgICAgICAgICBhbGlnblk6IDAsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgIGF0bGFzOiBbXG4gICAgICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCB3aWR0aDogMC41LCBoZWlnaHQ6IDEgfSxcbiAgICAgICAgICAgICAgICB7IHg6IDAuNSwgeTogMCwgd2lkdGg6IDAuNSwgaGVpZ2h0OiAxIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudGV4dHVyZUljb25zID0gdGV4dHVyZVxuICAgICAgICB0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UoKVxuICAgICAgICB0aGlzLmV2ZW50UG9pbnRlclRhcC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVRhcClcbiAgICAgICAgY29udGV4dC5ldmVudFBsYXlpbmdDaGFuZ2UuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVQbGF5aW5nQ2hhbmdlKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlSWNvbnMuZGVsZXRlKClcbiAgICAgICAgdGhpcy5ldmVudFBvaW50ZXJUYXAucmVtb3ZlTGlzdGVuZXIodGhpcy5oYW5kbGVUYXApXG4gICAgICAgIHRoaXMuY29udGV4dC5ldmVudFBsYXlpbmdDaGFuZ2UucmVtb3ZlTGlzdGVuZXIodGhpcy5oYW5kbGVQbGF5aW5nQ2hhbmdlKVxuICAgICAgICBzdXBlci5kZWxldGUoKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlVGFwID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXNcbiAgICAgICAgaWYgKGNvbnRleHQucGxheWluZykge1xuICAgICAgICAgICAgY29udGV4dC5wYXVzZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnBsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVQbGF5aW5nQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5jb250ZXh0LnBsYXlpbmcgPyAxIDogMFxuICAgIH1cbn1cblxuY29uc3QgU1ZHID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggMjRcIiB3aWR0aD1cIjUxMlwiIGhlaWdodD1cIjI1NlwiPlxuIDxnIGZpbGw9XCIjRkZGXCI+XG4gIDxwYXRoIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMCwxNi41TDE2LDEyTDEwLDcuNVYxNi41WlwiIC8+XG4gIDxwYXRoIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNCwwKVwiIGQ9XCJNMTMsMTZWOEgxNVYxNkgxM005LDE2VjhIMTFWMTZIOU0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRaXCIgLz5cbiA8L2c+XG48L3N2Zz5gXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsNjJEQUE2MkQsRUFBQztBQUN6NEQsTUFBTSxJQUFJLEdBQUcsbzBHQUFvMEc7QUFFbDBHLFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxD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