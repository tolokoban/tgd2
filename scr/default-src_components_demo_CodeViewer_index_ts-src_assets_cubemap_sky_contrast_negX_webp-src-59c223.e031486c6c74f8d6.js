"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["default-src_components_demo_CodeViewer_index_ts-src_assets_cubemap_sky_contrast_negX_webp-src-59c223"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

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
28814(module) {
module.exports = "data:image/webp;base64,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";

},
51561(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.72862502a8bd3f72.webp";

},
30892(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.24ba5eda13eb54d5.webp";

},
10618(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.8475ed7d64be153d.webp";

},
24645(module) {
module.exports = "data:image/webp;base64,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";

},
85720(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.0c8bbce4471db833.webp";

},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX2luZGV4X3RzLXNyY19hc3NldHNfY3ViZW1hcF9za3lfY29udHJhc3RfbmVnWF93ZWJwLXNyYy01OWMyMjMuZTAzMTQ4NmM2Yzc0ZjhkNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0QvSTtBQUNHO0FBRWE7QUFDTTtBQVNsQyxTQUFTLGNBQWMsQ0FBQyxLQUEwQjtJQUM3RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSztJQUN2QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sV0FBVyxHQUE4QjtZQUMzQyxHQUFHLEtBQUs7WUFDUixLQUFLO1NBQ1I7UUFDRCxPQUFPLDJDQUFDLG9CQUFvQixPQUFLLFdBQVcsR0FBSTtJQUNwRCxDQUFDO0lBQ0QsTUFBTSxVQUFVLEdBQTZCO1FBQ3pDLEdBQUcsS0FBSztRQUNSLEtBQUs7S0FDUjtJQUNELE9BQU8sMkNBQUMsbUJBQW1CLE9BQUssVUFBVSxHQUFJO0FBQ2xELENBQUM7QUFNRCxTQUFTLG9CQUFv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