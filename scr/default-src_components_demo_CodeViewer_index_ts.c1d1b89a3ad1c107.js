"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["default-src_components_demo_CodeViewer_index_ts"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
21276(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(80114);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



// import "prismjs/themes/prism-coy.css"


function CodeViewerView(props) {
    var value = props.value;
    if (typeof value === "string") {
        var singleProps = _object_spread_props(_object_spread({}, props), {
            value: value
        });
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(SingleCodeViewerView, _object_spread({}, singleProps), void 0, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
    }
    var multiProps = _object_spread_props(_object_spread({}, props), {
        value: value
    });
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MultiCodeViewerView, _object_spread({}, multiProps), void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
function SingleCodeViewerView(props) {
    var refTimeout = react__rspack_import_2.useRef(0);
    var _React_useState = _sliced_to_array(react__rspack_import_2.useState(false), 2), popup = _React_useState[0], setPopup = _React_useState[1];
    var refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(function() {
        window.setTimeout(function() {
            var code = refCode.current;
            if (!code) return;
            var html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [
        props.value,
        props.language,
        refCode.current
    ]);
    var handleDoubleClick = function handleDoubleClick() {
        navigator.clipboard.writeText(props.value).then(function() {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(function() {
                return setPopup(false);
            }, 7000);
        });
    };
    var handlePopupClick = function handlePopupClick() {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: getClassNames(props),
        onDoubleClick: handleDoubleClick,
        id: props.id,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("pre", {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("code", {
                    ref: refCode,
                    className: "language-".concat(props.language)
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                    lineNumber: 70,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            popup && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("button", {
                className: _CodeViewer_module_css__rspack_import_3["default"].popup,
                onClick: handlePopupClick,
                type: "button",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    children: "This code has been copied to the clipboard!"
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                    lineNumber: 78,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, this);
}
function getClassNames(props) {
    var classNames = [
        _CodeViewer_module_css__rspack_import_3["default"].CodeViewer
    ];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    var _this = this;
    var captions = Object.keys(props.value);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: captions.map(function(caption, index) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("details", {
                open: false,
                id: props.id,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("summary", {
                        children: caption
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                        lineNumber: 104,
                        columnNumber: 6
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(SingleCodeViewerView, {
                        value: props.value[caption],
                        language: props.language
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                        lineNumber: 105,
                        columnNumber: 6
                    }, _this)
                ]
            }, caption, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/CodeViewer/CodeViewer.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, _this);
        })
    }, void 0, false);
}


},
80114(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
    switch(language){
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
var TYPES = [
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
    "void"
];
var KEYWORDS = [
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
    // Reserved for future.
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
    "volatile"
];
var GLOBALS = [
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
    "gl_VertexID"
];
var FUNCTIONS = [
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
    "unpackUnorm2x16"
];
var GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true
        }
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS)
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp("(?:[^a-zA-Z0-9_])(".concat(words.join("|"), ")(?=[^a-zA-Z0-9_])")),
        lookbehind: false,
        greedy: true
    };
}


},
16391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(21276);



},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX2luZGV4X3RzLmMxZDFiODlhM2FkMWMxMDcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLm1vZHVsZS5jc3M/YTJhMyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcblx0aWQ/OiBzdHJpbmc7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0dmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cdGxhbmd1YWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG5cdGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzO1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG5cdFx0XHQuLi5wcm9wcyxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdFx0cmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+O1xuXHR9XG5cdGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcblx0XHQuLi5wcm9wcyxcblx0XHR2YWx1ZSxcblx0fTtcblx0cmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG5cdHZhbHVlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG5cdGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMCk7XG5cdGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudDtcblx0XHRcdGlmICghY29kZSkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KFxuXHRcdFx0XHRwcm9wcy52YWx1ZSxcblx0XHRcdFx0Z2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSxcblx0XHRcdFx0cHJvcHMubGFuZ3VhZ2UsXG5cdFx0XHQpO1xuXHRcdFx0Y29kZS5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH0sIDEwMCk7XG5cdH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pO1xuXHRjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG5cdFx0XHRzZXRQb3B1cCh0cnVlKTtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KTtcblx0XHRcdHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMCk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG5cdFx0c2V0UG9wdXAoZmFsc2UpO1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KTtcblx0XHRyZWZUaW1lb3V0LmN1cnJlbnQgPSAwO1xuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9XG5cdFx0XHRvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja31cblx0XHRcdGlkPXtwcm9wcy5pZH1cblx0XHQ+XG5cdFx0XHQ8cHJlPlxuXHRcdFx0XHQ8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cblx0XHRcdDwvcHJlPlxuXHRcdFx0e3BvcHVwICYmIChcblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT17U3R5bGUucG9wdXB9XG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUG9wdXBDbGlja31cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuXHRjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdO1xuXHRpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpO1xuXHR9XG5cblx0cmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG5cdHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcblx0Y29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG5cdFx0XHRcdFx0PHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuXHRcdFx0XHRcdDxTaW5nbGVDb2RlVmlld2VyVmlld1xuXHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfVxuXHRcdFx0XHRcdFx0bGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGV0YWlscz5cblx0XHRcdCkpfVxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCI7XG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiO1xuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiO1xuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIjtcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIjtcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCI7XG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcblx0c3dpdGNoIChsYW5ndWFnZSkge1xuXHRcdGNhc2UgXCJ0c1wiOlxuXHRcdFx0cmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0O1xuXHRcdGNhc2UgXCJ0c3hcIjpcblx0XHRcdHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4O1xuXHRcdGNhc2UgXCJmcmFnXCI6XG5cdFx0Y2FzZSBcInZlcnRcIjpcblx0XHRcdHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbDtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIEdMU0w7XG5cdH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG5cdFwiYnZlYzJcIixcblx0XCJidmVjM1wiLFxuXHRcImJ2ZWM0XCIsXG5cdFwiZG1hdDJcIixcblx0XCJkbWF0MngyXCIsXG5cdFwiZG1hdDJ4M1wiLFxuXHRcImRtYXQyeDRcIixcblx0XCJkbWF0M1wiLFxuXHRcImRtYXQzeDJcIixcblx0XCJkbWF0M3gzXCIsXG5cdFwiZG1hdDN4NFwiLFxuXHRcImRtYXQ0XCIsXG5cdFwiZG1hdDR4MlwiLFxuXHRcImRtYXQ0eDNcIixcblx0XCJkbWF0NHg0XCIsXG5cdFwiZHZlYzJcIixcblx0XCJkdmVjM1wiLFxuXHRcImR2ZWM0XCIsXG5cdFwiZmxvYXRcIixcblx0XCJmdmVjMlwiLFxuXHRcImZ2ZWMzXCIsXG5cdFwiZnZlYzRcIixcblx0XCJpc2FtcGxlcjFEXCIsXG5cdFwiaXNhbXBsZXIxREFycmF5XCIsXG5cdFwiaXNhbXBsZXIyRFwiLFxuXHRcImlzYW1wbGVyMkRBcnJheVwiLFxuXHRcImlzYW1wbGVyMkRNU1wiLFxuXHRcImlzYW1wbGVyMkRNU0FycmF5XCIsXG5cdFwiaXNhbXBsZXIyRFJlY3RcIixcblx0XCJpc2FtcGxlcjNEXCIsXG5cdFwiaXNhbXBsZXJCdWZmZXJcIixcblx0XCJpc2FtcGxlckN1YmVcIixcblx0XCJpc2FtcGxlckN1YmVBcnJheVwiLFxuXHRcIml2ZWMyXCIsXG5cdFwiaXZlYzNcIixcblx0XCJpdmVjNFwiLFxuXHRcIm1hdDJcIixcblx0XCJtYXQyeDJcIixcblx0XCJtYXQyeDNcIixcblx0XCJtYXQyeDRcIixcblx0XCJtYXQzXCIsXG5cdFwibWF0M3gyXCIsXG5cdFwibWF0M3gzXCIsXG5cdFwibWF0M3g0XCIsXG5cdFwibWF0NFwiLFxuXHRcIm1hdDR4MlwiLFxuXHRcIm1hdDR4M1wiLFxuXHRcIm1hdDR4NFwiLFxuXHRcInNhbXBsZVwiLFxuXHRcInNhbXBsZXIxRFwiLFxuXHRcInNhbXBsZXIxREFycmF5XCIsXG5cdFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcblx0XCJzYW1wbGVyMURTaGFkb3dcIixcblx0XCJzYW1wbGVyMkRcIixcblx0XCJzYW1wbGVyMkRBcnJheVwiLFxuXHRcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG5cdFwic2FtcGxlcjJETVNcIixcblx0XCJzYW1wbGVyMkRNU0FycmF5XCIsXG5cdFwic2FtcGxlcjJEUmVjdFwiLFxuXHRcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcblx0XCJzYW1wbGVyMkRTaGFkb3dcIixcblx0XCJzYW1wbGVyM0RcIixcblx0XCJzYW1wbGVyQnVmZmVyXCIsXG5cdFwic2FtcGxlckN1YmVcIixcblx0XCJzYW1wbGVyQ3ViZUFycmF5XCIsXG5cdFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuXHRcInNhbXBsZXJDdWJlU2hhZG93XCIsXG5cdFwidXNhbXBsZXIxRFwiLFxuXHRcInVzYW1wbGVyMURBcnJheVwiLFxuXHRcInVzYW1wbGVyMkRcIixcblx0XCJ1c2FtcGxlcjJEQXJyYXlcIixcblx0XCJ1c2FtcGxlcjJETVNcIixcblx0XCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuXHRcInVzYW1wbGVyMkRSZWN0XCIsXG5cdFwidXNhbXBsZXIzRFwiLFxuXHRcInVzYW1wbGVyQnVmZmVyXCIsXG5cdFwidXNhbXBsZXJDdWJlXCIsXG5cdFwidXNhbXBsZXJDdWJlQXJyYXlcIixcblx0XCJ1dmVjMlwiLFxuXHRcInV2ZWMzXCIsXG5cdFwidXZlYzRcIixcblx0XCJ2ZWMyXCIsXG5cdFwidmVjM1wiLFxuXHRcInZlYzRcIixcblx0XCJ2b2lkXCIsXG5dO1xuXG5jb25zdCBLRVlXT1JEUyA9IFtcblx0XCJjZW50cm9pZFwiLFxuXHRcImNvbnN0XCIsXG5cdFwiZGlzY2FyZFwiLFxuXHRcImVsc2VcIixcblx0XCJmbGF0XCIsXG5cdFwiaGlnaHBcIixcblx0XCJpZlwiLFxuXHRcImluXCIsXG5cdFwiaW5vdXRcIixcblx0XCJpbnZhcmlhbnRcIixcblx0XCJsYXlvdXRcIixcblx0XCJsb3dwXCIsXG5cdFwibWVkaXVtcFwiLFxuXHRcIm5vcGVyc3BlY3RpdmVcIixcblx0XCJvdXRcIixcblx0XCJwYXRjaFwiLFxuXHRcInByZWNpc2lvblwiLFxuXHRcInNtb290aFwiLFxuXHRcInN1YnJvdXRpbmVcIixcblx0XCJ1bmlmb3JtXCIsXG5cdC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG5cdFwiYWN0aXZlXCIsXG5cdFwiYXNtXCIsXG5cdFwiY2FzdFwiLFxuXHRcImNsYXNzXCIsXG5cdFwiY29tbW9uXCIsXG5cdFwiZW51bVwiLFxuXHRcImV4dGVyblwiLFxuXHRcImV4dGVybmFsXCIsXG5cdFwiZmlsdGVyXCIsXG5cdFwiZml4ZWRcIixcblx0XCJnb3RvXCIsXG5cdFwiaGFsZlwiLFxuXHRcImh2ZWMyXCIsXG5cdFwiaHZlYzNcIixcblx0XCJodmVjNFwiLFxuXHRcImlpbWFnZTFEXCIsXG5cdFwiaWltYWdlMURBcnJheVwiLFxuXHRcImlpbWFnZTJEXCIsXG5cdFwiaWltYWdlMkRBcnJheVwiLFxuXHRcImlpbWFnZTNEXCIsXG5cdFwiaWltYWdlQnVmZmVyXCIsXG5cdFwiaWltYWdlQ3ViZVwiLFxuXHRcImltYWdlMURcIixcblx0XCJpbWFnZTFEQXJyYXlcIixcblx0XCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcblx0XCJpbWFnZTFEU2hhZG93XCIsXG5cdFwiaW1hZ2UyRFwiLFxuXHRcImltYWdlMkRBcnJheVwiLFxuXHRcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuXHRcImltYWdlMkRTaGFkb3dcIixcblx0XCJpbWFnZTNEXCIsXG5cdFwiaW1hZ2VCdWZmZXJcIixcblx0XCJpbWFnZUN1YmVcIixcblx0XCJpbmxpbmVcIixcblx0XCJpbnB1dFwiLFxuXHRcImludGVyZmFjZVwiLFxuXHRcImxvbmdcIixcblx0XCJuYW1lc3BhY2VcIixcblx0XCJub2lubGluZVwiLFxuXHRcIm91dHB1dFwiLFxuXHRcInBhY2tlZFwiLFxuXHRcInBhcnRpdGlvblwiLFxuXHRcInB1YmxpY1wiLFxuXHRcInJvd19tYWpvclwiLFxuXHRcInNhbXBsZXIzRFJlY3RcIixcblx0XCJzaG9ydFwiLFxuXHRcInNpemVvZlwiLFxuXHRcInN0YXRpY1wiLFxuXHRcInN1cGVycFwiLFxuXHRcInRlbXBsYXRlXCIsXG5cdFwidGhpc1wiLFxuXHRcInR5cGVkZWZcIixcblx0XCJ1aW1hZ2UxRFwiLFxuXHRcInVpbWFnZTFEQXJyYXlcIixcblx0XCJ1aW1hZ2UyRFwiLFxuXHRcInVpbWFnZTJEQXJyYXlcIixcblx0XCJ1aW1hZ2UzRFwiLFxuXHRcInVpbWFnZUJ1ZmZlclwiLFxuXHRcInVpbWFnZUN1YmVcIixcblx0XCJ1bmlvblwiLFxuXHRcInVuc2lnbmVkXCIsXG5cdFwidXNpbmdcIixcblx0XCJ2b2xhdGlsZVwiLFxuXTtcblxuY29uc3QgR0xPQkFMUyA9IFtcblx0XCJnbF9EZXB0aFJhbmdlXCIsXG5cdFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG5cdFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcblx0XCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcblx0XCJnbF9GcmFnQ29vcmRcIixcblx0XCJnbF9GcmFnRGVwdGhcIixcblx0XCJnbF9Gcm9udEZhY2luZ1wiLFxuXHRcImdsX0luc3RhbmNlSURcIixcblx0XCJnbF9Qb2ludENvb3JkXCIsXG5cdFwiZ2xfUG9pbnRTaXplXCIsXG5cdFwiZ2xfUG9zaXRpb25cIixcblx0XCJnbF9WZXJ0ZXhJRFwiLFxuXTtcblxuY29uc3QgRlVOQ1RJT05TID0gW1xuXHRcImFic1wiLFxuXHRcImFjb3NcIixcblx0XCJhY29zaFwiLFxuXHRcImFsbFwiLFxuXHRcImFueVwiLFxuXHRcImFzaW5cIixcblx0XCJhc2luaFwiLFxuXHRcImF0YW5cIixcblx0XCJhdGFuaFwiLFxuXHRcImNlaWxcIixcblx0XCJjbGFtcFwiLFxuXHRcImNvc1wiLFxuXHRcImNvc2hcIixcblx0XCJjcm9zc1wiLFxuXHRcImRlZ3JlZXNcIixcblx0XCJkZXRlcm1pbmFudFwiLFxuXHRcImRGZHhcIixcblx0XCJkRmR5XCIsXG5cdFwiZGlzdGFuY2VcIixcblx0XCJkb3RcIixcblx0XCJlcXVhbFwiLFxuXHRcImV4cFwiLFxuXHRcImV4cDJcIixcblx0XCJmYWNlZm9yd2FyZFwiLFxuXHRcImZsb2F0Qml0c1RvSW50XCIsXG5cdFwiZmxvYXRCaXRzVG9VaW50XCIsXG5cdFwiZmxvb3JcIixcblx0XCJmcmFjdFwiLFxuXHRcImZ3aWR0aFwiLFxuXHRcImdyZWF0ZXJUaGFuXCIsXG5cdFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuXHRcImludEJpdHNUb0Zsb2F0XCIsXG5cdFwiaW52ZXJzZVwiLFxuXHRcImludmVyc2VzcXJ0XCIsXG5cdFwiaXNpbmZcIixcblx0XCJpc25hblwiLFxuXHRcImxlbmd0aFwiLFxuXHRcImxlc3NUaGFuXCIsXG5cdFwibGVzc1RoYW5FcXVhbFwiLFxuXHRcImxvZ1wiLFxuXHRcImxvZzJcIixcblx0XCJtYXRyaXhDb21wTXVsdFwiLFxuXHRcIm1heFwiLFxuXHRcIm1pblwiLFxuXHRcIm1peFwiLFxuXHRcIm1vZFwiLFxuXHRcIm1vZGZcIixcblx0XCJub3JtYWxpemVcIixcblx0XCJub3RcIixcblx0XCJub3RFcXVhbFwiLFxuXHRcIm91dGVyUHJvZHVjdFwiLFxuXHRcInBhY2tIYWxmMngxNlwiLFxuXHRcInBhY2tTbm9ybTJ4MTZcIixcblx0XCJwYWNrVW5vcm0yeDE2XCIsXG5cdFwicG93XCIsXG5cdFwicmFkaWFuc1wiLFxuXHRcInJlZmxlY3RcIixcblx0XCJyZWZyYWN0XCIsXG5cdFwicm91bmRcIixcblx0XCJyb3VuZEV2ZW5cIixcblx0XCJzaWduXCIsXG5cdFwic2luXCIsXG5cdFwic2luaFwiLFxuXHRcInNtb290aHN0ZXBcIixcblx0XCJzcXJ0XCIsXG5cdFwic3RlcFwiLFxuXHRcInRhblwiLFxuXHRcInRhbmhcIixcblx0XCJ0ZXhlbEZldGNoXCIsXG5cdFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuXHRcInRleHR1cmVcIixcblx0XCJ0ZXh0dXJlR3JhZFwiLFxuXHRcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG5cdFwidGV4dHVyZUxvZFwiLFxuXHRcInRleHR1cmVMb2RPZmZzZXRcIixcblx0XCJ0ZXh0dXJlT2Zmc2V0XCIsXG5cdFwidGV4dHVyZVByb2pcIixcblx0XCJ0ZXh0dXJlUHJvakdyYWRcIixcblx0XCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcblx0XCJ0ZXh0dXJlUHJvakxvZFwiLFxuXHRcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG5cdFwidGV4dHVyZVByb2pPZmZzZXRcIixcblx0XCJ0ZXh0dXJlU2l6ZVwiLFxuXHRcInRyYW5zcG9zZVwiLFxuXHRcInRydW5jXCIsXG5cdFwidWludEJpdHNUb0Zsb2F0XCIsXG5cdFwidW5wYWNrSGFsZjJ4MTZcIixcblx0XCJ1bnBhY2tTbm9ybTJ4MTZcIixcblx0XCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl07XG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG5cdGNvbW1lbnQ6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL14jLiskL2csXG5cdFx0XHRsb29rYmVoaW5kOiBmYWxzZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxuXHRudW1iZXI6IHtcblx0XHRwYXR0ZXJuOlxuXHRcdFx0LyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHR9LFxuXHR0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG5cdGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcblx0Z2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcblx0ZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59O1xuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcblx0cmV0dXJuIHtcblx0XHRwYXR0ZXJuOiBuZXcgUmVnRXhwKFxuXHRcdFx0YCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCxcblx0XHQpLFxuXHRcdGxvb2tiZWhpbmQ6IGZhbHNlLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0fTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCI7XG4iXSwibmFtZXMiOlsiUHJpc20iLCJSZWFjdCIsIlN0eWxlIiwiZ2V0R3JhbW1hckZvckxhbmd1YWdlIiwiQ29kZVZpZXdlclZpZXciLCJwcm9wcyIsInZhbHVlIiwic2luZ2xlUHJvcHMiLCJTaW5nbGVDb2RlVmlld2VyVmlldyIsIm11bHRpUHJvcHMiLCJNdWx0aUNvZGVWaWV3ZXJWaWV3IiwicmVmVGltZW91dCIsIl9SZWFjdF91c2VTdGF0ZSIsInBvcHVwIiwic2V0UG9wdXAiLCJyZWZDb2RlIiwid2luZG93IiwiY29kZSIsImh0bWwiLCJoYW5kbGVEb3VibGVDbGljayIsIm5hdmlnYXRvciIsImhhbmRsZVBvcHVwQ2xpY2siLCJnZXRDbGFzc05hbWVzIiwiY2xhc3NOYW1lcyIsImNhcHRpb25zIiwiT2JqZWN0IiwiY2FwdGlvbiIsImluZGV4IiwibGFuZ3VhZ2UiLCJHTFNMIiwiVFlQRVMiLCJLRVlXT1JEUyIsIkdMT0JBTFMiLCJGVU5DVElPTlMiLCJtYWtlSWRlbnRpZmllcnNSWCIsIndvcmRzIiwiUmVnRXhwIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDlJO0FBQ0c7QUFDL0Isd0NBQXdDO0FBQ0k7QUFDTTtBQVNuQyxTQUFTSSxlQUFlQyxLQUEwQjtJQUNoRSxJQUFRQyxRQUFVRCxNQUFWQztJQUNSLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzlCLElBQU1DLGNBQXlDLHdDQUMzQ0Y7WUFDSEMsT0FBQUE7O1FBRUQscUJBQU8sa0RBQUNFLHlDQUF5QkQ7Ozs7O0lBQ2xDO0lBQ0EsSUFBTUUsYUFBdUMsd0NBQ3pDSjtRQUNIQyxPQUFBQTs7SUFFRCxxQkFBTyxrREFBQ0ksd0NBQXdCRDs7Ozs7QUFDakM7QUFNQSxTQUFTRCxxQkFBcUJILEtBQWdDO0lBQzdELElBQU1NLGFBQWFWLDZCQUFZLENBQUM7SUFDaEMsSUFBMEJXLG1DQUFBQSwrQkFBYyxDQUFDLFlBQWxDQyxRQUFtQkQsb0JBQVpFLFdBQVlGO0lBQzFCLElBQU1HLFVBQVVkLDZCQUFZLENBQXFCO0lBQ2pEQSxnQ0FBZSxDQUFDO1FBQ2ZlLE9BQU8sVUFBVSxDQUFDO1lBQ2pCLElBQU1DLE9BQU9GLFFBQVEsT0FBTztZQUM1QixJQUFJLENBQUNFLE1BQU07WUFFWCxJQUFNQyxPQUFPbEIsNENBQWUsQ0FDM0JLLE1BQU0sS0FBSyxFQUNYRixtREFBcUJBLENBQUNFLE1BQU0sUUFBUSxHQUNwQ0EsTUFBTSxRQUFRO1lBRWZZLEtBQUssU0FBUyxHQUFHQztRQUNsQixHQUFHO0lBQ0osR0FBRztRQUFD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