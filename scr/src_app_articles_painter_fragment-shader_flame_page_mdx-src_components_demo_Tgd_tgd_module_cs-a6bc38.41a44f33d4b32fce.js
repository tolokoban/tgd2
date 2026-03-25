"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_fragment-shader_flame_page_mdx-src_components_demo_Tgd_tgd_module_cs-a6bc38"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
40929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(49459);





const FOCUS = { "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: \"sampler2D\",\n        },\n        mainCode: [\n            \"float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));\",\n            \"shift -= .0;\",\n            \"shift *= .25 * (1.0 - varUV.y);\",\n            \"vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));\",\n            \"FragColor = vec4(color.rgb * color.a, 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, \"uniTexture\")\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log(\"🐞 [main.demo@34] settings =\", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}" };
const FULL = "import {\n    tgdCodeFunction_fbm,\n    TgdContext,\n    TgdPainterFragmentShader,\n    TgdShaderFragment,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport FlameURL from \"./flame.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.flame)\n    const shader = new TgdShaderFragment({\n        functions: {\n            ...tgdCodeFunction_fbm({ octaves: 3, G: 0.5 }),\n        },\n        uniforms: {\n            uniTexture: \"sampler2D\",\n        },\n        mainCode: [\n            \"float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));\",\n            \"shift -= .0;\",\n            \"shift *= .25 * (1.0 - varUV.y);\",\n            \"vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));\",\n            \"FragColor = vec4(color.rgb * color.a, 1.0);\",\n        ],\n    })\n    shader.debug()\n    context.add(\n        new TgdPainterFragmentShader(context, {\n            shader,\n            setUniforms: ({ program }) => {\n                texture.activate(0, program, \"uniTexture\")\n            },\n        }),\n    )\n    context.play()\n    return (settings: Record<string, number>) => {\n        console.log(\"🐞 [main.demo@34] settings =\", settings) // @FIXME: Remove this line written on 2025-12-15 at 17:20\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            options={{ alpha: false }}\n            assets={{\n                image: {\n                    flame: FlameURL,\n                },\n            }}\n            onReady={init}\n            settings={{\n                exponent: {\n                    label: \"uniExponent\",\n                    min: 0,\n                    max: 1,\n                    value: 0.5,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
49459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _flame_webp__rspack_import_3 = __webpack_require__(54972);




function init(context, assets) {
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.flame);
    const shader = new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
        functions: {
            ...(0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_fbm)({ octaves: 3, G: 0.5 }),
        },
        uniforms: {
            uniTexture: "sampler2D",
        },
        mainCode: [
            "float shift = fbm(vec3(varUV.x, varUV.y + uniTime, uniTime * .01));",
            "shift -= .0;",
            "shift *= .25 * (1.0 - varUV.y);",
            "vec4 color = texture(uniTexture, varUV + vec2(shift, 0.0));",
            "FragColor = vec4(color.rgb * color.a, 1.0);",
        ],
    });
    shader.debug();
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterFragmentShader(context, {
        shader,
        setUniforms: ({ program }) => {
            texture.activate(0, program, "uniTexture");
        },
    }));
    context.play();
    return (settings) => {
        console.log("🐞 [main.demo@34] settings =", settings);
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { options: { alpha: false }, assets: {
            image: {
                flame: _flame_webp__rspack_import_3,
            },
        }, onReady: init, settings: {
            exponent: {
                label: "uniExponent",
                min: 0,
                max: 1,
                value: 0.5,
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
54972(module) {
module.exports = "data:image/webp;base64,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";

},
86153(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(40929);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Flame"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/fragment-shader/flame/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFnbWVudC1zaGFkZXJfZmxhbWVfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jcy1hNmJjMzguNDFhNDRmMzNkNGIzMmZjZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYWdtZW50LXNoYWRlci9mbGFtZS9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhZ21lbnQtc2hhZGVyL2ZsYW1lL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFnbWVudC1zaGFkZXIvZmxhbWUvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmZsYW1lKVxcbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcbiAgICAgICAgZnVuY3Rpb25zOiB7XFxuICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX2ZibSh7IG9jdGF2ZXM6IDMsIEc6IDAuNSB9KSxcXG4gICAgICAgIH0sXFxuICAgICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgICAgIHVuaVRleHR1cmU6IFxcXCJzYW1wbGVyMkRcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1haW5Db2RlOiBbXFxuICAgICAgICAgICAgXFxcImZsb2F0IHNoaWZ0ID0gZmJtKHZlYzModmFyVVYueCwgdmFyVVYueSArIHVuaVRpbWUsIHVuaVRpbWUgKiAuMDEpKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJzaGlmdCAtPSAuMDtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJzaGlmdCAqPSAuMjUgKiAoMS4wIC0gdmFyVVYueSk7XFxcIixcXG4gICAgICAgICAgICBcXFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYgKyB2ZWMyKHNoaWZ0LCAwLjApKTtcXFwiLFxcbiAgICAgICAgICAgIFxcXCJGcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnJnYiAqIGNvbG9yLmEsIDEuMCk7XFxcIixcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIHNoYWRlci5kZWJ1ZygpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgc2hhZGVyLFxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcXFwidW5pVGV4dHVyZVxcXCIpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMzRdIHNldHRpbmdzID1cXFwiLCBzZXR0aW5ncykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNS0xMi0xNSBhdCAxNzoyMFxcbiAgICB9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ29kZUZ1bmN0aW9uX2ZibSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLFxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBGbGFtZVVSTCBmcm9tIFxcXCIuL2ZsYW1lLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5mbGFtZSlcXG4gICAgY29uc3Qgc2hhZGVyID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcXG4gICAgICAgIGZ1bmN0aW9uczoge1xcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiAzLCBHOiAwLjUgfSksXFxuICAgICAgICB9LFxcbiAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBcXFwic2FtcGxlcjJEXFxcIixcXG4gICAgICAgIH0sXFxuICAgICAgICBtYWluQ29kZTogW1xcbiAgICAgICAgICAgIFxcXCJmbG9hdCBzaGlmdCA9IGZibSh2ZWMzKHZhclVWLngsIHZhclVWLnkgKyB1bmlUaW1lLCB1bmlUaW1lICogLjAxKSk7XFxcIixcXG4gICAgICAgICAgICBcXFwic2hpZnQgLT0gLjA7XFxcIixcXG4gICAgICAgICAgICBcXFwic2hpZnQgKj0gLjI1ICogKDEuMCAtIHZhclVWLnkpO1xcXCIsXFxuICAgICAgICAgICAgXFxcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWICsgdmVjMihzaGlmdCwgMC4wKSk7XFxcIixcXG4gICAgICAgICAgICBcXFwiRnJhZ0NvbG9yID0gdmVjNChjb2xvci5yZ2IgKiBjb2xvci5hLCAxLjApO1xcXCIsXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBzaGFkZXIuZGVidWcoKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHNoYWRlcixcXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXFxcInVuaVRleHR1cmVcXFwiKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDM0XSBzZXR0aW5ncyA9XFxcIiwgc2V0dGluZ3MpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjUtMTItMTUgYXQgMTc6MjBcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgZmxhbWU6IEZsYW1lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBleHBvbmVudDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJ1bmlFeHBvbmVudFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHRnZENvZGVGdW5jdGlvbl9mYm0sXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG4gICAgVGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEZsYW1lVVJMIGZyb20gXCIuL2ZsYW1lLndlYnBcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5mbGFtZSlcbiAgICBjb25zdCBzaGFkZXIgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICBmdW5jdGlvbnM6IHtcbiAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9mYm0oeyBvY3RhdmVzOiAzLCBHOiAwLjUgfSksXG4gICAgICAgIH0sXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICB9LFxuICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgXCJmbG9hdCBzaGlmdCA9IGZibSh2ZWMzKHZhclVWLngsIHZhclVWLnkgKyB1bmlUaW1lLCB1bmlUaW1lICogLjAxKSk7XCIsXG4gICAgICAgICAgICBcInNoaWZ0IC09IC4wO1wiLFxuICAgICAgICAgICAgXCJzaGlmdCAqPSAuMjUgKiAoMS4wIC0gdmFyVVYueSk7XCIsXG4gICAgICAgICAgICBcInZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWICsgdmVjMihzaGlmdCwgMC4wKSk7XCIsXG4gICAgICAgICAgICBcIkZyYWdDb2xvciA9IHZlYzQoY29sb3IucmdiICogY29sb3IuYSwgMS4wKTtcIixcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIHNoYWRlci5kZWJ1ZygpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuICAgICAgICAgICAgc2hhZGVyLFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ1bmlUZXh0dXJlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDM0XSBzZXR0aW5ncyA9XCIsIHNldHRpbmdzKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI1LTEyLTE1IGF0IDE3OjIwXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmxhbWU6IEZsYW1lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgZXhwb25lbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwidW5pRXhwb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsNm5DQUE2bkMsRUFBQztBQUN6cEMsTUFBTSxJQUFJLEdBQUcsczNEQUFzM0Q7QUFFcDNELFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQyxzQ0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9B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