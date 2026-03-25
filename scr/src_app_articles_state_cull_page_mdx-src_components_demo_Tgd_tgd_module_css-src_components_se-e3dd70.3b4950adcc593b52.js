"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_state_cull_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_se-e3dd70"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
41895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(ctx, assets) {
    const camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: { distance: 5 },
        far: 100,
        near: 0.01,
        fovy: Math.PI / 4,
        zoom: 1,
    });
    ctx.camera = camera;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        speedPanning: 0,
        inertiaOrbit: 1000,
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        depth: 1,
        stencil: 0,
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(ctx, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(ctx).loadBitmap(_assets_image_dino_webp__rspack_import_3),
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.front,
        blend: _tolokoban_tgd__rspack_import_1.webglPresetBlend.add,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
                asset: assets.glb.suzanne,
                material: () => new _tolokoban_tgd__rspack_import_1.TgdMaterialHull({
                    color: [0.8, 0.6, 0.1, 1],
                    expansion: 3,
                }),
            }),
        ],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(ctx, {
                asset: assets.glb.suzanne,
            }),
        ],
    }));
    ctx.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, options: {
            depth: true,
            antialias: true,
        }, assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4,
            },
        } }));
}


},
76244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _cull_demo__rspack_import_4 = __webpack_require__(41895);





const FOCUS = {
    "Detail #1": "  const camera = new TgdCameraPerspective({\n    transfo: { distance: 5 },\n    far: 100,\n    near: 0.01,\n    fovy: Math.PI / 4,\n    zoom: 1,\n  });\n  ctx.camera = camera;\n  new TgdControllerCameraOrbit(ctx, {\n    speedPanning: 0,\n    inertiaOrbit: 1000,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, {\n      depth: 1,\n      stencil: 0,\n    }),\n    new TgdPainterBackground(ctx, {\n      texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n    }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.less,\n      cull: webglPresetCull.front,\n      blend: webglPresetBlend.add,\n      children: [\n        new TgdPainterMeshGltf(ctx, {\n          asset: assets.glb.suzanne,\n          material: () =>\n            new TgdMaterialHull({\n              color: [0.8, 0.6, 0.1, 1],\n              expansion: 3,\n            }),\n        }),\n      ],\n    }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.less,\n      cull: webglPresetCull.back,\n      children: [\n        new TgdPainterMeshGltf(ctx, {\n          asset: assets.glb.suzanne,\n        }),\n      ],\n    }),\n  );\n  ctx.paint();",
};
const FULL = 'import {\n  TgdCameraPerspective,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  TgdMaterialHull,\n  TgdPainterBackground,\n  TgdPainterClear,\n  TgdPainterMeshGltf,\n  TgdPainterState,\n  TgdTexture2D,\n  webglPresetBlend,\n  webglPresetCull,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport BackgroundURL from "@/assets/image/dino.webp";\nimport SuzanneURL from "@/assets/mesh/suzanne.glb";\n\nfunction init(ctx: TgdContext, assets: Assets) {\n  const camera = new TgdCameraPerspective({\n    transfo: { distance: 5 },\n    far: 100,\n    near: 0.01,\n    fovy: Math.PI / 4,\n    zoom: 1,\n  });\n  ctx.camera = camera;\n  new TgdControllerCameraOrbit(ctx, {\n    speedPanning: 0,\n    inertiaOrbit: 1000,\n  });\n  ctx.add(\n    new TgdPainterClear(ctx, {\n      depth: 1,\n      stencil: 0,\n    }),\n    new TgdPainterBackground(ctx, {\n      texture: new TgdTexture2D(ctx).loadBitmap(BackgroundURL),\n    }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.less,\n      cull: webglPresetCull.front,\n      blend: webglPresetBlend.add,\n      children: [\n        new TgdPainterMeshGltf(ctx, {\n          asset: assets.glb.suzanne,\n          material: () =>\n            new TgdMaterialHull({\n              color: [0.8, 0.6, 0.1, 1],\n              expansion: 3,\n            }),\n        }),\n      ],\n    }),\n    new TgdPainterState(ctx, {\n      depth: webglPresetDepth.less,\n      cull: webglPresetCull.back,\n      children: [\n        new TgdPainterMeshGltf(ctx, {\n          asset: assets.glb.suzanne,\n        }),\n      ],\n    }),\n  );\n  ctx.paint();\n}\n\nexport default function Demo() {\n  return (\n    <View\n      onReady={init}\n      options={{\n        depth: true,\n        antialias: true,\n      }}\n      assets={{\n        glb: {\n          suzanne: SuzanneURL,\n        },\n      }}\n    />\n  );\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_cull_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
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
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
18725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _cull_demo__rspack_import_1 = __webpack_require__(76244);
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
        hr: "hr",
        li: "li",
        ol: "ol",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Cull"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "We can paint FRONT, BACK or BOTH faces. MOst of the time you will only want to\ndisplay FRONT faces because BACK faces should be invisible. But in this demo, we\nuse the back faces to create an effect of outilining of a mesh."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This render has three passes:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Paint the background"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Paint FRONT faces of the mesh"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: "Paint BACK faces of an expanded (a little bit only) mesh"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_cull_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/state",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                    lineNumber: 19,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/cull/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfc3RhdGVfY3VsbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZS1lM2RkNzAuM2I0OTUwYWRjYzU5M2I1Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9jdWxsL18vY3VsbC5kZW1vL2N1bGwuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3N0YXRlL2N1bGwvXy9jdWxsLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3N0YXRlL2N1bGwvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiaW1wb3J0IHtcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbEh1bGwsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDUgfSxcbiAgICAgICAgZmFyOiAxMDAsXG4gICAgICAgIG5lYXI6IDAuMDEsXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyA0LFxuICAgICAgICB6b29tOiAxLFxuICAgIH0pXG4gICAgY3R4LmNhbWVyYSA9IGNhbWVyYVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XG4gICAgICAgIHNwZWVkUGFubmluZzogMCxcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgIH0pXG4gICAgY3R4LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHtcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgc3RlbmNpbDogMCxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjdHgsIHtcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY3R4KS5sb2FkQml0bWFwKEJhY2tncm91bmRVUkwpLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuZnJvbnQsXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hZGQsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY3R4LCB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFubmUsXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsSHVsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuNiwgMC4xLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbnNpb246IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGN0eC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGRlcHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vY3VsbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgXCIgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDUgfSxcXG4gICAgZmFyOiAxMDAsXFxuICAgIG5lYXI6IDAuMDEsXFxuICAgIGZvdnk6IE1hdGguUEkgLyA0LFxcbiAgICB6b29tOiAxLFxcbiAgfSk7XFxuICBjdHguY2FtZXJhID0gY2FtZXJhO1xcbiAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgc3BlZWRQYW5uaW5nOiAwLFxcbiAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICB9KTtcXG4gIGN0eC5hZGQoXFxuICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7XFxuICAgICAgZGVwdGg6IDEsXFxuICAgICAgc3RlbmNpbDogMCxcXG4gICAgfSksXFxuICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjdHgsIHtcXG4gICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGN0eCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKSxcXG4gICAgfSksXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuZnJvbnQsXFxuICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWRkLFxcbiAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcbiAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICAgICAgICBtYXRlcmlhbDogKCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxIdWxsKHtcXG4gICAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjYsIDAuMSwgMV0sXFxuICAgICAgICAgICAgICBleHBhbnNpb246IDMsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9KSxcXG4gICAgICBdLFxcbiAgICB9KSxcXG4gICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGN0eCwge1xcbiAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbm5lLFxcbiAgICAgICAgfSksXFxuICAgICAgXSxcXG4gICAgfSksXFxuICApO1xcbiAgY3R4LnBhaW50KCk7XCIsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgVGdkQ29udGV4dCxcXG4gIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gIFRnZE1hdGVyaWFsSHVsbCxcXG4gIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgVGdkUGFpbnRlckNsZWFyLFxcbiAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgVGdkUGFpbnRlclN0YXRlLFxcbiAgVGdkVGV4dHVyZTJELFxcbiAgd2ViZ2xQcmVzZXRCbGVuZCxcXG4gIHdlYmdsUHJlc2V0Q3VsbCxcXG4gIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiO1xcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcbiAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiA1IH0sXFxuICAgIGZhcjogMTAwLFxcbiAgICBuZWFyOiAwLjAxLFxcbiAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgem9vbTogMSxcXG4gIH0pO1xcbiAgY3R4LmNhbWVyYSA9IGNhbWVyYTtcXG4gIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XFxuICAgIHNwZWVkUGFubmluZzogMCxcXG4gICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgfSk7XFxuICBjdHguYWRkKFxcbiAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwge1xcbiAgICAgIGRlcHRoOiAxLFxcbiAgICAgIHN0ZW5jaWw6IDAsXFxuICAgIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY3R4LCB7XFxuICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjdHgpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCksXFxuICAgIH0pLFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmZyb250LFxcbiAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFkZCxcXG4gICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgICAgICAgbWF0ZXJpYWw6ICgpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsSHVsbCh7XFxuICAgICAgICAgICAgICBjb2xvcjogWzAuOCwgMC42LCAwLjEsIDFdLFxcbiAgICAgICAgICAgICAgZXhwYW5zaW9uOiAzLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSksXFxuICAgICAgXSxcXG4gICAgfSksXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0ZihjdHgsIHtcXG4gICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgICAgIH0pLFxcbiAgICAgIF0sXFxuICAgIH0pLFxcbiAgKTtcXG4gIGN0eC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgcmV0dXJuIChcXG4gICAgPFZpZXdcXG4gICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgIGRlcHRoOiB0cnVlLFxcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxcbiAgICAgIH19XFxuICAgICAgYXNzZXRzPXt7XFxuICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcXG4gICAgICAgIH0sXFxuICAgICAgfX1cXG4gICAgLz5cXG4gICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwi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