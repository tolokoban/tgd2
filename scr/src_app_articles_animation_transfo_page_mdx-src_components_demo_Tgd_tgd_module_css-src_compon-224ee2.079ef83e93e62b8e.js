"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_animation_transfo_page_mdx-src_components_demo_Tgd_tgd_module_css-src_compon-224ee2"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
32168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _transfo_demo__rspack_import_4 = __webpack_require__(48600);





const FOCUS = {
    "Detail #1": "  new TgdControllerCameraOrbit(ctx, { debug: true });\n  ctx.camera.transfo.distance = 10;\n  const mesh = new TgdPainterMeshGltf(ctx, {\n    asset: assets.glb.mesh,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mesh],\n    }),\n  );\n  ctx.paint();\n  ctx.animSchedule(\n    tgdAnimChainTransfoInterpolations(\n      ctx.camera.transfo,\n      [\n        {\n          duration: 1,\n          transfo: {\n            distance: 2.9,\n            position: [-0.39898496866226196, 0.22825193405151367, 0],\n            orientation: [0, 0, 0, 1],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 1,\n          transfo: {\n            distance: 5.1,\n            position: [-0.9985308647155762, 0.7087523341178894, 0.3115437924861908],\n            orientation: [\n              0.09696336090564728, -0.6652175784111023, -0.48327139019966125, 0.5608319044113159,\n            ],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 2,\n          transfo: new TgdTransfo(ctx.camera.transfo),\n          easingFunction: tgdEasingFunctionInOutQuint,\n        },\n      ],\n      { repeat: Infinity },\n    ),\n  );",
};
const FULL = 'import {\n  tgdAnimChainTransfoInterpolations,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  tgdEasingFunctionInOutQuint,\n  TgdPainterClear,\n  TgdPainterMeshGltf,\n  TgdPainterState,\n  TgdTransfo,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport MeshURL from "@/assets/mesh/suzanne.glb";\n\nfunction init(ctx: TgdContext, assets: Assets) {\n  new TgdControllerCameraOrbit(ctx, { debug: true });\n  ctx.camera.transfo.distance = 10;\n  const mesh = new TgdPainterMeshGltf(ctx, {\n    asset: assets.glb.mesh,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.lessOrEqual,\n      children: [mesh],\n    }),\n  );\n  ctx.paint();\n  ctx.animSchedule(\n    tgdAnimChainTransfoInterpolations(\n      ctx.camera.transfo,\n      [\n        {\n          duration: 1,\n          transfo: {\n            distance: 2.9,\n            position: [-0.39898496866226196, 0.22825193405151367, 0],\n            orientation: [0, 0, 0, 1],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 1,\n          transfo: {\n            distance: 5.1,\n            position: [-0.9985308647155762, 0.7087523341178894, 0.3115437924861908],\n            orientation: [\n              0.09696336090564728, -0.6652175784111023, -0.48327139019966125, 0.5608319044113159,\n            ],\n            scale: [1, 1, 1],\n          },\n        },\n        {\n          duration: 2,\n          transfo: new TgdTransfo(ctx.camera.transfo),\n          easingFunction: tgdEasingFunctionInOutQuint,\n        },\n      ],\n      { repeat: Infinity },\n    ),\n  );\n}\n\nexport default function Demo() {\n  return (\n    <View\n      onReady={init}\n      assets={{\n        glb: { mesh: MeshURL },\n      }}\n    />\n  );\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_transfo_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
48600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);




function init(ctx, assets) {
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, { debug: true });
    ctx.camera.transfo.distance = 10;
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
        asset: assets.glb.mesh,
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, { color: [0.4, 0.2, 0, 1] }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [mesh],
    }));
    ctx.paint();
    ctx.animSchedule((0,_tolokoban_tgd__rspack_import_1.tgdAnimChainTransfoInterpolations)(ctx.camera.transfo, [
        {
            duration: 1,
            transfo: {
                distance: 2.9,
                position: [-0.39898496866226196, 0.22825193405151367, 0],
                orientation: [0, 0, 0, 1],
                scale: [1, 1, 1],
            },
        },
        {
            duration: 1,
            transfo: {
                distance: 5.1,
                position: [-0.9985308647155762, 0.7087523341178894, 0.3115437924861908],
                orientation: [
                    0.09696336090564728, -0.6652175784111023, -0.48327139019966125, 0.5608319044113159,
                ],
                scale: [1, 1, 1],
            },
        },
        {
            duration: 2,
            transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(ctx.camera.transfo),
            easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionInOutQuint,
        },
    ], { repeat: Infinity }));
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            glb: { mesh: _assets_mesh_suzanne_glb__rspack_import_3 },
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
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
48939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(32168);
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
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Playing with transformations"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "In this demo we use the animation on a camera, but it can work with any\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdTransfo.html",
                        children: "transformation"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/animation/transfo/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfYW5pbWF0aW9uX3RyYW5zZm9fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbi0yMjRlZTIuMDc5ZWY4M2U5M2U2MmI4ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9hbmltYXRpb24vdHJhbnNmby9fL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvYW5pbWF0aW9uL3RyYW5zZm8vXy90cmFuc2ZvLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2FuaW1hdGlvbi90cmFuc2ZvL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi90cmFuc2ZvLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICBcIiAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHsgZGVidWc6IHRydWUgfSk7XFxuICBjdHguY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMDtcXG4gIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcbiAgICBhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxcbiAgfSk7XFxuICBjdHguYWRkKFxcbiAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuNCwgMC4yLCAwLCAxXSB9KSxcXG4gICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KSxcXG4gICk7XFxuICBjdHgucGFpbnQoKTtcXG4gIGN0eC5hbmltU2NoZWR1bGUoXFxuICAgIHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcXG4gICAgICBjdHguY2FtZXJhLnRyYW5zZm8sXFxuICAgICAgW1xcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyLjksXFxuICAgICAgICAgICAgcG9zaXRpb246IFstMC4zOTg5ODQ5Njg2NjIyNjE5NiwgMC4yMjgyNTE5MzQwNTE1MTM2NywgMF0sXFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFswLCAwLCAwLCAxXSxcXG4gICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDEsXFxuICAgICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogNS4xLFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTAuOTk4NTMwODY0NzE1NTc2MiwgMC43MDg3NTIzMzQxMTc4ODk0LCAwLjMxMTU0Mzc5MjQ4NjE5MDhdLFxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbXFxuICAgICAgICAgICAgICAwLjA5Njk2MzM2MDkwNTY0NzI4LCAtMC42NjUyMTc1Nzg0MTExMDIzLCAtMC40ODMyNzEzOTAxOTk2NjEyNSwgMC41NjA4MzE5MDQ0MTEzMTU5LFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcXG4gICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAyLFxcbiAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyhjdHguY2FtZXJhLnRyYW5zZm8pLFxcbiAgICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxcbiAgICAgICAgfSxcXG4gICAgICBdLFxcbiAgICAgIHsgcmVwZWF0OiBJbmZpbml0eSB9LFxcbiAgICApLFxcbiAgKTtcIixcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgdGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zLFxcbiAgVGdkQ29udGV4dCxcXG4gIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcXG4gIFRnZFBhaW50ZXJDbGVhcixcXG4gIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gIFRnZFBhaW50ZXJTdGF0ZSxcXG4gIFRnZFRyYW5zZm8sXFxuICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcblxcbmltcG9ydCBNZXNoVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwgeyBkZWJ1ZzogdHJ1ZSB9KTtcXG4gIGN0eC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDEwO1xcbiAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XFxuICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuICB9KTtcXG4gIGN0eC5hZGQoXFxuICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC40LCAwLjIsIDAsIDFdIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pLFxcbiAgKTtcXG4gIGN0eC5wYWludCgpO1xcbiAgY3R4LmFuaW1TY2hlZHVsZShcXG4gICAgdGdkQW5pbUNoYWluVHJhbnNmb0ludGVycG9sYXRpb25zKFxcbiAgICAgIGN0eC5jYW1lcmEudHJhbnNmbyxcXG4gICAgICBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgZGlzdGFuY2U6IDIuOSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogWy0wLjM5ODk4NDk2ODY2MjI2MTk2LCAwLjIyODI1MTkzNDA1MTUxMzY3LCAwXSxcXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXFxuICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgICAgdHJhbnNmbzoge1xcbiAgICAgICAgICAgIGRpc3RhbmNlOiA1LjEsXFxuICAgICAgICAgICAgcG9zaXRpb246IFstMC45OTg1MzA4NjQ3MTU1NzYyLCAwLjcwODc1MjMzNDExNzg4OTQsIDAuMzExNTQzNzkyNDg2MTkwOF0sXFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFtcXG4gICAgICAgICAgICAgIDAuMDk2OTYzMzYwOTA1NjQ3MjgsIC0wLjY2NTIxNzU3ODQxMTEwMjMsIC0wLjQ4MzI3MTM5MDE5OTY2MTI1LCAwLjU2MDgzMTkwNDQxMTMxNTksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgZHVyYXRpb246IDIsXFxuICAgICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKGN0eC5jYW1lcmEudHJhbnNmbyksXFxuICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXFxuICAgICAgICB9LFxcbiAgICAgIF0sXFxuICAgICAgeyByZXBlYXQ6IEluZmluaXR5IH0sXFxuICAgICksXFxuICApO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgcmV0dXJuIChcXG4gICAgPFZpZXdcXG4gICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgZ2xiOiB7IG1lc2g6IE1lc2hVUkwgfSxcXG4gICAgICB9fVxcbiAgICAvPlxcbiAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVHJhbnNmbyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBNZXNoVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHsgZGVidWc6IHRydWUgfSlcbiAgICBjdHguY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxMFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5tZXNoLFxuICAgIH0pXG4gICAgY3R4LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjQsIDAuMiwgMCwgMV0gfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjdHgucGFpbnQoKVxuICAgIGN0eC5hbmltU2NoZWR1bGUoXG4gICAgICAgIHRnZEFuaW1DaGFpblRyYW5zZm9JbnRlcnBvbGF0aW9ucyhcbiAgICAgICAgICAgIGN0eC5jYW1lcmEudHJhbnNmbyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMi45LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFstMC4zOTg5ODQ5Njg2NjIyNjE5NiwgMC4yMjgyNTE5MzQwNTE1MTM2NywgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIDAsIDAsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA1LjEsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWy0wLjk5ODUzMDg2NDcxNTU3NjIsIDAuNzA4NzUyMzM0MTE3ODg5NCwgMC4zMTE1NDM3OTI0ODYxOTA4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wOTY5NjMzNjA5MDU2NDcyOCwgLTAuNjY1MjE3NTc4NDExMTAyMywgLTAuNDgzMjcxMzkwMTk5NjYxMjUsIDAuNTYwODMxOTA0NDExMzE1OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oY3R4LmNhbWVyYS50cmFuc2ZvKSxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWludCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHsgcmVwZWF0OiBJbmZpbml0eSB9LFxuICAgICAgICApLFxuICAgIClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgbWVzaDogTWVzaFVSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUNwQjtBQUVqQyxNQUFNLEtBQUssR0FBRztJQUNWLFdBQVcsRUFDUCwreENBQSt4QztDQUN0eUM7QUFDRCxNQUFNLElBQUksR0FDTiwwMURBQTAxRDtBQUUvMEQsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxDQUNILHNHQUNJLG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQ3RCLDJDQUFDLHlDQUFJLEtBQUcsR0FDTixFQUNOLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1AsQ0FDTjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdEJzQjtBQUM2QjtBQUVMO0FBRS9DLFNBQVMsSUFBSSxDQUFDLEdBQWUsRUFBRSxNQUFjO0lBRXpDLElBQUksd0RBQXdCLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ2xELEdBQUcs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