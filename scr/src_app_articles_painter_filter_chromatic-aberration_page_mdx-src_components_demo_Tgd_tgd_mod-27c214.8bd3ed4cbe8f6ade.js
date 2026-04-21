"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_chromatic-aberration_page_mdx-src_components_demo_Tgd_tgd_mod-27c214"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
70759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _marylin_demo__rspack_import_4 = __webpack_require__(42810);





const FOCUS = { "Detail #1": "    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(filters, new TgdPainterLogic((time) => (filter.strength = 5 * Math.abs(Math.sin(time)))))\n    context.play()" };
const FULL = "import {\n    TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    tgdLoadImage,\n    TgdPainterFilter,\n    TgdPainterLogic,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nimport BackgroundURL from \"./tgd.webp\"\n\nfunction init(context: TgdContext) {\n    const texture = new TgdTexture2D(context).loadBitmap(tgdLoadImage(BackgroundURL))\n    const filter = new TgdFilterChromaticAberration({\n        strength: 1,\n    })\n\n    const filters = new TgdPainterFilter(context, {\n        texture,\n        filters: [filter],\n    })\n    context.add(filters, new TgdPainterLogic((time) => (filter.strength = 5 * Math.abs(Math.sin(time)))))\n    context.play()\n}\n\nexport default function Demo() {\n    return <View onReady={init} width=\"512px\" height=\"512px\" />\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_marylin_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
42810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _tgd_webp__rspack_import_3 = __webpack_require__(10992);




function init(context) {
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdLoadImage)(_tgd_webp__rspack_import_3));
    const filter = new _tolokoban_tgd__rspack_import_1.TgdFilterChromaticAberration({
        strength: 1,
    });
    const filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture,
        filters: [filter],
    });
    context.add(filters, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time) => (filter.strength = 5 * Math.abs(Math.sin(time)))));
    context.play();
}
function Demo() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, width: "512px", height: "512px" });
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
10992(module) {
module.exports = "data:image/webp;base64,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";

},
54326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marylin_demo__rspack_import_1 = __webpack_require__(70759);
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
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFilter.html",
                    children: "TgdPainterFilter"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterChromaticAberration.html",
                    children: "TgdFilterChromaticAberration"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                    lineNumber: 7,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Chromatic aberration is due to a failure of a lens to focus all colors to the\nsame point."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/chromatic-aberration/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfY2hyb21hdGljLWFiZXJyYXRpb25fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZC0yN2MyMTQuOGJkM2VkNGNiZThmNmFkZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY2hyb21hdGljLWFiZXJyYXRpb24vXy9tYXJ5bGluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY2hyb21hdGljLWFiZXJyYXRpb24vXy9tYXJ5bGluLmRlbW8vbWFyeWxpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvY2hyb21hdGljLWFiZXJyYXRpb24vcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hcnlsaW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RMb2FkSW1hZ2UoQmFja2dyb3VuZFVSTCkpXFxuICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgICAgIHN0cmVuZ3RoOiAxLFxcbiAgICB9KVxcblxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChmaWx0ZXJzLCBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiAoZmlsdGVyLnN0cmVuZ3RoID0gNSAqIE1hdGguYWJzKE1hdGguc2luKHRpbWUpKSkpKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyQmx1cixcXG4gICAgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcXG4gICAgdGdkTG9hZEltYWdlLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFxcXCIuL3RnZC53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZExvYWRJbWFnZShCYWNrZ3JvdW5kVVJMKSlcXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xcbiAgICAgICAgc3RyZW5ndGg6IDEsXFxuICAgIH0pXFxuXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGZpbHRlcnMsIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IChmaWx0ZXIuc3RyZW5ndGggPSA1ICogTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpKSkpXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSB3aWR0aD1cXFwiNTEycHhcXFwiIGhlaWdodD1cXFwiNTEycHhcXFwiIC8+XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRmlsdGVyQmx1cixcbiAgICBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uLFxuICAgIHRnZExvYWRJbWFnZSxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vdGdkLndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZExvYWRJbWFnZShCYWNrZ3JvdW5kVVJMKSlcbiAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XG4gICAgICAgIHN0cmVuZ3RoOiAxLFxuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlLFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGZpbHRlcnMsIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IChmaWx0ZXIuc3RyZW5ndGggPSA1ICogTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpKSkpXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIC8+XG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUNwQjtBQUVqQyxNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyx3WkFBd1osRUFBQztBQUNwYixNQUFNLElBQUksR0FBRyx5MEJBQXkwQjtBQUV2MEIsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLHlDQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FDckMsR0FDWCxFQUNOLDJDQUFDLHVEQUFVLElBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBSSxJQUN2RCxJQUNQO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNoQnNCO0FB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