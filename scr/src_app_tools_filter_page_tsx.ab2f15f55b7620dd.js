"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_filter_page_tsx"], {
44708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"filter":"src-app-tools-filter-_-Filter-module_filter_A90fXY"});

},
63291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"filterresult":"src-app-tools-filter-_-FilterResult-FilterResult-module_filterresult_kyl55S","error":"src-app-tools-filter-_-FilterResult-FilterResult-module_error_p60Efk"});

},
22339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"vertexshadercodeeditor":"src-app-tools-filter-_-VertexShaderCodeEditor-VertexShaderCodeEditor-module_vertexshadercodeeditor_yotYZL"});

},
23579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


},
13758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilter: () => (ViewFilter)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _doc_mdx__rspack_import_4 = __webpack_require__(78466);
/* import */ var _Filter_module_css__rspack_import_5 = __webpack_require__(44708);
/* import */ var _FilterResult__rspack_import_6 = __webpack_require__(52996);
/* import */ var _functions__rspack_import_7 = __webpack_require__(24707);
/* import */ var _VertexShaderCodeEditor__rspack_import_8 = __webpack_require__(14736);









const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewFilter() {
    const library = (0,_functions__rspack_import_7.useGlslFunctions)();
    const functions = react__rspack_import_3.useMemo(() => {
        let code = {};
        for (const key of Object.keys(library)) {
            code = {
                ...code,
                ...library[key](),
            };
        }
        return Object.values(code).join("\n");
    }, [library]);
    const [fragShaderCode, setFragShaderCode] = (0,_tolokoban_ui__rspack_import_2.useLocalStorageState)(DEFAULT_FRAGMENT_SHADER, "Filter/FragmentShader");
    console.log(functions);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewStrip, { className: _Filter_module_css__rspack_import_5["default"].filter, template: "11", orientation: "row", children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewTabs, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewTab, { label: "Fragment Shader", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewPanel, { fullsize: true, overflow: "auto", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_VertexShaderCodeEditor__rspack_import_8.ViewVertexShaderCodeEditor, { code: fragShaderCode, onChange: setFragShaderCode }) }) }, "shader"), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewTab, { label: "Extra functions", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewPanel, { fullsize: true, overflow: "auto", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_VertexShaderCodeEditor__rspack_import_8.ViewVertexShaderCodeEditor, { code: functions, disabled: true }) }) }, "functions"), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewTab, { label: "Documentation", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewPanel, { fullsize: true, overflow: "auto", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_doc_mdx__rspack_import_4["default"], {}) }) }, "doc")] }), (0,react_jsx_runtime__rspack_import_0.jsx)(_FilterResult__rspack_import_6.ViewFilterResult, { fragmentShader: fragShaderCode, functions: functions })] }));
}
const DEFAULT_FRAGMENT_SHADER = (0,_tolokoban_tgd__rspack_import_1.tgdCodeStringify)([
    `vec2 polar = uv2polar(varUV);`,
    `polar.y += polar.x * cos(uniTime);`,
    `vec2 uv = polar2uv(polar);`,
    `vec4 color = texture(uniTexture, uv);`,
    `FragColor = vec4(`,
    [`shiftHue(color.rgb, polar.y + uniTime),`, `1.0`],
    `);`,
]);
const DEFAULT_FUNCTIONS = (0,_tolokoban_tgd__rspack_import_1.tgdCodeStringify)([
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeConstants)("PI", "TAU", "E"),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_random)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_shiftHue)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_polar2uv)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_polar2xy)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_uv2polar)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_xy2polar)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_uv2xy)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_xy2uv)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_luminance)(),
    `
float dot2( in vec2 v ) { return dot(v,v); }
`,
]);


},
71931(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilterResult: () => (ViewFilterResult)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_3 = __webpack_require__(47578);
/* import */ var _manager__rspack_import_4 = __webpack_require__(10119);
/* import */ var _FilterResult_module_css__rspack_import_5 = __webpack_require__(63291);






const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewFilterResult(props) {
    const ref = react__rspack_import_1.useRef(null);
    const [error, setError] = react__rspack_import_1.useState(null);
    const refManager = react__rspack_import_1.useRef(null);
    const [uniEffectStrength, setUniEffectStrength] = react__rspack_import_1.useState(0.5);
    const handleMount = (canvas) => {
        if (!canvas)
            return;
        if (!refManager.current) {
            refManager.current = new _manager__rspack_import_4.FilterManager(canvas, setError);
        }
        refManager.current.setCode(props.fragmentShader, props.functions);
    };
    const handleToggleFullscreen = () => {
        const div = ref.current;
        if (!div)
            return;
        (0,_tolokoban_tgd__rspack_import_3.tgdFullscreenToggle)(div);
    };
    react__rspack_import_1.useEffect(() => {
        const manager = refManager.current;
        if (!manager)
            return;
        manager.setCode(props.fragmentShader, props.functions);
    }, [props.fragmentShader, props.functions]);
    react__rspack_import_1.useEffect(() => {
        const manager = refManager.current;
        if (!manager)
            return;
        manager.uniEffectStrength = uniEffectStrength;
    }, [uniEffectStrength]);
    react__rspack_import_1.useEffect(() => {
        return () => {
            refManager.current?.destroy();
        };
    }, []);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { ref: ref, className: $.join(props.className, _FilterResult_module_css__rspack_import_5["default"].filterresult), ...props, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewPanel, { color: "primary-5", height: "2em", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "M", fullwidth: true, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "Filter output" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconFullscreen, { onClick: handleToggleFullscreen })] }), (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: handleMount }), error && ((0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: error.split("\n").map((line, index) => {
                    if (line.startsWith("#####"))
                        return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _FilterResult_module_css__rspack_import_5["default"].error, children: [line, "\n"] }, index));
                    return (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: line }, index);
                }) })), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewSlider, { min: 0, max: 1, step: 0.01, value: uniEffectStrength, onChange: setUniEffectStrength })] }));
}


},
52996(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilterResult: () => (/* reexport safe */ _FilterResult__rspack_import_0.ViewFilterResult)
});
/* import */ var _FilterResult__rspack_import_0 = __webpack_require__(71931);



},
10119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FilterManager: () => (FilterManager)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _background_avif__rspack_import_1 = __webpack_require__(14344);


class FilterManager {
    onError;
    destroy;
    uniEffectStrength = 0;
    context;
    texture;
    filter = null;
    constructor(canvas, onError) {
        this.onError = onError;
        const context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas);
        this.context = context;
        const texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(context).loadBitmap(_background_avif__rspack_import_1).setParams({
            wrapR: "MIRRORED_REPEAT",
            wrapS: "MIRRORED_REPEAT",
            wrapT: "MIRRORED_REPEAT",
        });
        this.texture = texture;
        this.destroy = () => {
            texture.delete();
            context.delete();
        };
    }
    setCode(code, functions = "") {
        try {
            const { context, texture } = this;
            const filter = new _tolokoban_tgd__rspack_import_0.TgdPainterFilter(context, {
                texture,
                filters: [
                    new _tolokoban_tgd__rspack_import_0.TgdFilter({
                        fragmentShaderCode: code,
                        extraFunctions: functions,
                        uniforms: {
                            uniTime: "float",
                            uniEffectStrength: "float",
                            uniAspectRatio: "float",
                            uniAspectRatioInverse: "float",
                            uniModelViewMatrix: "mat4",
                            uniProjectionMatrix: "mat4",
                        },
                        setUniforms: ({ program, time }) => {
                            program.uniform1f("uniTime", time);
                            program.uniform1f("uniEffectStrength", this.uniEffectStrength);
                            program.uniform1f("uniAspectRatio", context.width / context.height);
                            program.uniform1f("uniAspectRatioInverse", context.height / context.width);
                            program.uniformMatrix4fv("uniModelViewMatrix", context.camera.matrixModelView);
                            program.uniformMatrix4fv("uniProjectionMatrix", context.camera.matrixProjection);
                        },
                    }),
                ],
            });
            if (this.filter) {
                this.context.remove(this.filter);
            }
            this.filter = filter;
            context.add(filter);
            context.play();
            this.onError(null);
        }
        catch (ex) {
            this.onError(ex instanceof Error ? ex.message : JSON.stringify(ex));
        }
    }
}


},
27179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewVertexShaderCodeEditor: () => (ViewVertexShaderCodeEditor)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _components_code_editor__rspack_import_2 = __webpack_require__(25528);
/* import */ var _VertexShaderCodeEditor_module_css__rspack_import_3 = __webpack_require__(22339);




const $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewVertexShaderCodeEditor(props) {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_code_editor__rspack_import_2["default"], { className: $.join(props.className, _VertexShaderCodeEditor_module_css__rspack_import_3["default"].vertexshadercodeeditor), language: "glsl", value: props.code, onChange: (code) => props.onChange?.(code), disabled: props.disabled }));
}


},
14736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewVertexShaderCodeEditor: () => (/* reexport safe */ _VertexShaderCodeEditor__rspack_import_0.ViewVertexShaderCodeEditor)
});
/* import */ var _VertexShaderCodeEditor__rspack_import_0 = __webpack_require__(27179);



},
24707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGlslFunctions: () => (useGlslFunctions)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);

function useGlslFunctions() {
    const [functions, setFunctions] = react__rspack_import_0_default().useState({});
    react__rspack_import_0_default().useEffect(() => {
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 47578)).then((module) => {
            const result = {};
            const prefix = "tgdCodeFunction_";
            for (const key of Object.keys(module)) {
                if (key.startsWith(prefix)) {
                    result[key.slice(prefix.length)] = module[key];
                }
            }
            setFunctions(result);
        });
    }, []);
    return functions;
}


},
18198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilter: () => (/* reexport safe */ _Filter__rspack_import_0.ViewFilter)
});
/* import */ var _Filter__rspack_import_0 = __webpack_require__(13758);



},
97323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PageViewGLTF)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var ___rspack_import_1 = __webpack_require__(18198);


function PageViewGLTF() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(___rspack_import_1.ViewFilter, {});
}


},
7641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeEditorView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react_simple_code_editor__rspack_import_1 = __webpack_require__(26069);
/* import */ var react_simple_code_editor__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__rspack_import_1);
/* import */ var prismjs__rspack_import_2 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_2);
/* import */ var _grammar__rspack_import_3 = __webpack_require__(19990);
/* import */ var _code_editor_view_css__rspack_import_4 = __webpack_require__(23579);





const VOID_FUNC = () => { };
function CodeEditorView(props) {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: getClassNames(props), children: (0,react_jsx_runtime__rspack_import_0.jsx)((react_simple_code_editor__rspack_import_1_default()), { disabled: props.disabled, value: props.value, onValueChange: props.onChange ?? VOID_FUNC, highlight: (code) => prismjs__rspack_import_2_default().highlight(code, (0,_grammar__rspack_import_3.getGrammarForLanguage)(props.language), props.language) }) }));
}
function getClassNames(props) {
    const classNames = ["custom", "view-CodeEditorView"];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}


},
58555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
function getGrammarForLanguage(language) {
    return GLSL;
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
            pattern: /"(^|[^\\:])\/\/.*"/g,
            lookbehind: true,
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
    return new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`);
}


},
19990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (/* reexport safe */ _grammar__rspack_import_0.getGrammarForLanguage)
});
/* import */ var _grammar__rspack_import_0 = __webpack_require__(58555);



},
25528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _code_editor_view__rspack_import_0["default"])
});
/* import */ var _code_editor_view__rspack_import_0 = __webpack_require__(7641);



},
14344(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.1d5820706f10ac07.avif";

},
78466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_1 = __webpack_require__(28453);
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
        h2: "h2",
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Available uniforms"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniTime"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 3,
                                columnNumber: 3
                            }, this),
                            ": current time in seconds."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 3,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniEffectStrength"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 4,
                                columnNumber: 3
                            }, this),
                            ": float between 0.0 and 1.0, controlled by the slider."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatio"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 5,
                                columnNumber: 3
                            }, this),
                            ": Aspect ratio (width / height)."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatioInverse"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 6,
                                columnNumber: 3
                            }, this),
                            ": Inverse aspect ratio (height / width)."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Useful resources for fragment shaders:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "GLSL ES 3.1: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://docs.gl/sl4/trunc",
                                children: "https://docs.gl/sl4/trunc"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 10,
                                columnNumber: 16
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Shadertoy: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://www.shadertoy.com/",
                                children: "https://www.shadertoy.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 11,
                                columnNumber: 14
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Inigo Quilez website: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/",
                                children: "https://iquilezles.org/articles/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "2D signed distance functions:\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/distfunctions2d/",
                                children: "https://iquilezles.org/articles/distfunctions2d/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Color palette article: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/palettes/",
                                children: "https://iquilezles.org/articles/palettes/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 15,
                                columnNumber: 26
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Color palette webapp: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "http://dev.thi.ng/gradients/",
                                children: "http://dev.thi.ng/gradients/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Graphtoy: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://graphtoy.com/",
                                children: "https://graphtoy.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The Book of Shaders: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://thebookofshaders.com/",
                                children: "https://thebookofshaders.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 18,
                                columnNumber: 24
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Shadertoy Unofficial: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://shadertoyunofficial.wordpress.com/",
                                children: "https://shadertoyunofficial.wordpress.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfZmlsdGVyX3BhZ2VfdHN4LmFiMmYxNWY1NWI3NjIwZGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyLm1vZHVsZS5jc3M/MjM2YSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L0ZpbHRlclJlc3VsdC5tb2R1bGUuY3NzPzFlZTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IvVmVydGV4U2hhZGVyQ29kZUVkaXRvci5tb2R1bGUuY3NzPzRhNTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci12aWV3LmNzcz82NGVhIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL0ZpbHRlclJlc3VsdC9GaWx0ZXJSZXN1bHQudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L21hbmFnZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vVmVydGV4U2hhZGVyQ29kZUVkaXRvci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL2Z1bmN0aW9ucy50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL3BhZ2UudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLXZpZXcudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2dyYW1tYXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9ncmFtbWFyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vZG9jLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZmlsdGVyXCI6XCJzcmMtYXBwLXRvb2xzLWZpbHRlci1fLUZpbHRlci1tb2R1bGVfZmlsdGVyX0E5MGZYWVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZmlsdGVycmVzdWx0XCI6XCJzcmMtYXBwLXRvb2xzLWZpbHRlci1fLUZpbHRlclJlc3VsdC1GaWx0ZXJSZXN1bHQtbW9kdWxlX2ZpbHRlcnJlc3VsdF9reWw1NVNcIixcImVycm9yXCI6XCJzcmMtYXBwLXRvb2xzLWZpbHRlci1fLUZpbHRlclJlc3VsdC1GaWx0ZXJSZXN1bHQtbW9kdWxlX2Vycm9yX3A2MEVma1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1widmVydGV4c2hhZGVyY29kZWVkaXRvclwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yLVZlcnRleFNoYWRlckNvZGVFZGl0b3ItbW9kdWxlX3ZlcnRleHNoYWRlcmNvZGVlZGl0b3JfeW90WVpMXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvZGVGdW5jdGlvbnMsXG4gICAgdGdkQ29kZUNvbnN0YW50cyxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fbHVtaW5hbmNlLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1dixcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcG9sYXIyeHksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3JhbmRvbSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fc2hpZnRIdWUsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyLFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJ4eSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25feHkycG9sYXIsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3h5MnV2LFxuICAgIHRnZENvZGVTdHJpbmdpZnksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCB7IFRoZW1lLCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSwgVmlld1BhbmVsLCBWaWV3U3RyaXAsIFZpZXdUYWIsIFZpZXdUYWJzIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBEb2MgZnJvbSBcIi4vZG9jLm1keFwiXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL0ZpbHRlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFZpZXdGaWx0ZXJSZXN1bHQgfSBmcm9tIFwiLi9GaWx0ZXJSZXN1bHRcIlxuaW1wb3J0IHsgdXNlR2xzbEZ1bmN0aW9ucyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiXG5pbXBvcnQgeyBWaWV3VmVydGV4U2hhZGVyQ29kZUVkaXRvciB9IGZyb20gXCIuL1ZlcnRleFNoYWRlckNvZGVFZGl0b3JcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld0ZpbHRlcigpIHtcbiAgICBjb25zdCBsaWJyYXJ5ID0gdXNlR2xzbEZ1bmN0aW9ucygpXG4gICAgY29uc3QgZnVuY3Rpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGxldCBjb2RlOiBUZ2RDb2RlRnVuY3Rpb25zID0ge31cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobGlicmFyeSkpIHtcbiAgICAgICAgICAgIGNvZGUgPSB7XG4gICAgICAgICAgICAgICAgLi4uY29kZSxcbiAgICAgICAgICAgICAgICAuLi5saWJyYXJ5W2tleV0oKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjb2RlKS5qb2luKFwiXFxuXCIpXG4gICAgfSwgW2xpYnJhcnldKVxuICAgIGNvbnN0IFtmcmFnU2hhZGVyQ29kZSwgc2V0RnJhZ1NoYWRlckNvZGVdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoREVGQVVMVF9GUkFHTUVOVF9TSEFERVIsIFwiRmlsdGVyL0ZyYWdtZW50U2hhZGVyXCIpXG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25zKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdTdHJpcCBjbGFzc05hbWU9e1N0eWxlcy5maWx0ZXJ9IHRlbXBsYXRlPVwiMTFcIiBvcmllbnRhdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgPFZpZXdUYWJzPlxuICAgICAgICAgICAgICAgIDxWaWV3VGFiIGxhYmVsPVwiRnJhZ21lbnQgU2hhZGVyXCIga2V5PVwic2hhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZnVsbHNpemUgb3ZlcmZsb3c9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IgY29kZT17ZnJhZ1NoYWRlckNvZGV9IG9uQ2hhbmdlPXtzZXRGcmFnU2hhZGVyQ29kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgICAgIDxWaWV3VGFiIGxhYmVsPVwiRXh0cmEgZnVuY3Rpb25zXCIga2V5PVwiZnVuY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZnVsbHNpemUgb3ZlcmZsb3c9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IgY29kZT17ZnVuY3Rpb25zfSBkaXNhYmxlZD17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgICAgIDxWaWV3VGFiIGxhYmVsPVwiRG9jdW1lbnRhdGlvblwiIGtleT1cImRvY1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGZ1bGxzaXplIG92ZXJmbG93PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERvYyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8L1ZpZXdUYWI+XG4gICAgICAgICAgICA8L1ZpZXdUYWJzPlxuICAgICAgICAgICAgPFZpZXdGaWx0ZXJSZXN1bHQgZnJhZ21lbnRTaGFkZXI9e2ZyYWdTaGFkZXJDb2RlfSBmdW5jdGlvbnM9e2Z1bmN0aW9uc30gLz5cbiAgICAgICAgPC9WaWV3U3RyaXA+XG4gICAgKVxufVxuXG5jb25zdCBERUZBVUxUX0ZSQUdNRU5UX1NIQURFUiA9IHRnZENvZGVTdHJpbmdpZnkoW1xuICAgIGB2ZWMyIHBvbGFyID0gdXYycG9sYXIodmFyVVYpO2AsXG4gICAgYHBvbGFyLnkgKz0gcG9sYXIueCAqIGNvcyh1bmlUaW1lKTtgLFxuICAgIGB2ZWMyIHV2ID0gcG9sYXIydXYocG9sYXIpO2AsXG4gICAgYHZlYzQgY29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHV2KTtgLFxuICAgIGBGcmFnQ29sb3IgPSB2ZWM0KGAsXG4gICAgW2BzaGlmdEh1ZShjb2xvci5yZ2IsIHBvbGFyLnkgKyB1bmlUaW1lKSxgLCBgMS4wYF0sXG4gICAgYCk7YCxcbl0pXG5cbmNvbnN0IERFRkFVTFRfRlVOQ1RJT05TID0gdGdkQ29kZVN0cmluZ2lmeShbXG4gICAgdGdkQ29kZUNvbnN0YW50cyhcIlBJXCIsIFwiVEFVXCIsIFwiRVwiKSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcmFuZG9tKCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3NoaWZ0SHVlKCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnV2KCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnh5KCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3h5MnBvbGFyKCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3V2Mnh5KCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3h5MnV2KCksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX2x1bWluYW5jZSgpLFxuICAgIGBcbmZsb2F0IGRvdDIoIGluIHZlYzIgdiApIHsgcmV0dXJuIGRvdCh2LHYpOyB9XG5gLFxuXSlcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgVmlld1BhbmVsLCBWaWV3U2xpZGVyLCBJY29uRnVsbHNjcmVlbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7IHRnZEZ1bGxzY3JlZW5Ub2dnbGUgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyIH0gZnJvbSBcIi4vbWFuYWdlclwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vRmlsdGVyUmVzdWx0Lm1vZHVsZS5jc3NcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3RmlsdGVyUmVzdWx0UHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICBmcmFnbWVudFNoYWRlcjogc3RyaW5nXG4gICAgZnVuY3Rpb25zOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdGaWx0ZXJSZXN1bHQocHJvcHM6IFZpZXdGaWx0ZXJSZXN1bHRQcm9wcykge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZk1hbmFnZXIgPSBSZWFjdC51c2VSZWY8RmlsdGVyTWFuYWdlciB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW3VuaUVmZmVjdFN0cmVuZ3RoLCBzZXRVbmlFZmZlY3RTdHJlbmd0aF0gPSBSZWFjdC51c2VTdGF0ZSgwLjUpXG4gICAgY29uc3QgaGFuZGxlTW91bnQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVyblxuXG4gICAgICAgIGlmICghcmVmTWFuYWdlci5jdXJyZW50KSB7XG4gICAgICAgICAgICByZWZNYW5hZ2VyLmN1cnJlbnQgPSBuZXcgRmlsdGVyTWFuYWdlcihjYW52YXMsIHNldEVycm9yKVxuICAgICAgICB9XG4gICAgICAgIHJlZk1hbmFnZXIuY3VycmVudC5zZXRDb2RlKHByb3BzLmZyYWdtZW50U2hhZGVyLCBwcm9wcy5mdW5jdGlvbnMpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZUZ1bGxzY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IHJlZi5jdXJyZW50XG4gICAgICAgIGlmICghZGl2KSByZXR1cm5cblxuICAgICAgICB0Z2RGdWxsc2NyZWVuVG9nZ2xlKGRpdilcbiAgICB9XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IHJlZk1hbmFnZXIuY3VycmVudFxuICAgICAgICBpZiAoIW1hbmFnZXIpIHJldHVyblxuXG4gICAgICAgIG1hbmFnZXIuc2V0Q29kZShwcm9wcy5mcmFnbWVudFNoYWRlciwgcHJvcHMuZnVuY3Rpb25zKVxuICAgIH0sIFtwcm9wcy5mcmFnbWVudFNoYWRlciwgcHJvcHMuZnVuY3Rpb25zXSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBtYW5hZ2VyID0gcmVmTWFuYWdlci5jdXJyZW50XG4gICAgICAgIGlmICghbWFuYWdlcikgcmV0dXJuXG5cbiAgICAgICAgbWFuYWdlci51bmlFZmZlY3RTdHJlbmd0aCA9IHVuaUVmZmVjdFN0cmVuZ3RoXG4gICAgfSwgW3VuaUVmZmVjdFN0cmVuZ3RoXSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmVmTWFuYWdlci5jdXJyZW50Py5kZXN0cm95KClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMuZmlsdGVycmVzdWx0KX0gey4uLnByb3BzfT5cbiAgICAgICAgICAgIDxWaWV3UGFuZWxcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMmVtXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICBwYWRkaW5nPVwiTVwiXG4gICAgICAgICAgICAgICAgZnVsbHdpZHRoPlxuICAgICAgICAgICAgICAgIDxkaXY+RmlsdGVyIG91dHB1dDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJY29uRnVsbHNjcmVlbiBvbkNsaWNrPXtoYW5kbGVUb2dnbGVGdWxsc2NyZWVufSAvPlxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17aGFuZGxlTW91bnR9PjwvY2FudmFzPlxuICAgICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3Iuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcIiMjIyMjXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZXJyb3J9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJcXG5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+e2xpbmV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxWaWV3U2xpZGVyIG1pbj17MH0gbWF4PXsxfSBzdGVwPXswLjAxfSB2YWx1ZT17dW5pRWZmZWN0U3RyZW5ndGh9IG9uQ2hhbmdlPXtzZXRVbmlFZmZlY3RTdHJlbmd0aH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRmlsdGVyUmVzdWx0XCJcbiIsImltcG9ydCB7IFRnZENvbnRleHQsIFRnZEZpbHRlciwgVGdkUGFpbnRlckZpbHRlciwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIi4vYmFja2dyb3VuZC5hdmlmXCJcblxuZXhwb3J0IGNsYXNzIEZpbHRlck1hbmFnZXIge1xuICAgIHB1YmxpYyByZWFkb25seSBkZXN0cm95OiAoKSA9PiB2b2lkXG4gICAgcHVibGljIHVuaUVmZmVjdFN0cmVuZ3RoID0gMFxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIGZpbHRlcjogVGdkUGFpbnRlckZpbHRlciB8IG51bGwgPSBudWxsXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBvbkVycm9yOiAoZXJyb3I6IHN0cmluZyB8IG51bGwpID0+IHZvaWQsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChCYWNrZ3JvdW5kVVJMKS5zZXRQYXJhbXMoe1xuICAgICAgICAgICAgd3JhcFI6IFwiTUlSUk9SRURfUkVQRUFUXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJNSVJST1JFRF9SRVBFQVRcIixcbiAgICAgICAgICAgIHdyYXBUOiBcIk1JUlJPUkVEX1JFUEVBVFwiLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlXG4gICAgICAgIHRoaXMuZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRleHR1cmUuZGVsZXRlKClcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENvZGUoY29kZTogc3RyaW5nLCBmdW5jdGlvbnMgPSBcIlwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbnRleHQsIHRleHR1cmUgfSA9IHRoaXNcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRnZEZpbHRlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUZ1bmN0aW9uczogZnVuY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pRWZmZWN0U3RyZW5ndGg6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUFzcGVjdFJhdGlvSW52ZXJzZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0sIHRpbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pVGltZVwiLCB0aW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pRWZmZWN0U3RyZW5ndGhcIiwgdGhpcy51bmlFZmZlY3RTdHJlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvXCIsIGNvbnRleHQud2lkdGggLyBjb250ZXh0LmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvSW52ZXJzZVwiLCBjb250ZXh0LmhlaWdodCAvIGNvbnRleHQud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNvbnRleHQuY2FtZXJhLm1hdHJpeE1vZGVsVmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGNvbnRleHQuY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZW1vdmUodGhpcy5maWx0ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9IGZpbHRlclxuICAgICAgICAgICAgY29udGV4dC5hZGQoZmlsdGVyKVxuICAgICAgICAgICAgY29udGV4dC5wbGF5KClcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihudWxsKVxuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhpcy5vbkVycm9yKGV4IGluc3RhbmNlb2YgRXJyb3IgPyBleC5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXgpKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcyB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IENvZGVFZGl0b3IgZnJvbSBcIkAvY29tcG9uZW50cy9jb2RlLWVkaXRvclwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vVmVydGV4U2hhZGVyQ29kZUVkaXRvci5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3JQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGNvZGU6IHN0cmluZ1xuICAgIG9uQ2hhbmdlPyhjb2RlOiBzdHJpbmcpOiB2b2lkXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3VmVydGV4U2hhZGVyQ29kZUVkaXRvcihwcm9wczogVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3JQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgICBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy52ZXJ0ZXhzaGFkZXJjb2RlZWRpdG9yKX1cbiAgICAgICAgICAgIGxhbmd1YWdlPVwiZ2xzbFwiXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMuY29kZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoY29kZSkgPT4gcHJvcHMub25DaGFuZ2U/Lihjb2RlKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yXCJcbiIsImltcG9ydCB7IFRnZENvZGVGdW5jdGlvbnMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHbHNsRnVuY3Rpb25zKCk6IFJlY29yZDxzdHJpbmcsICgpID0+IFRnZENvZGVGdW5jdGlvbnM+IHtcbiAgICBjb25zdCBbZnVuY3Rpb25zLCBzZXRGdW5jdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPHN0cmluZywgKCkgPT4gVGdkQ29kZUZ1bmN0aW9ucz4+KHt9KVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaW1wb3J0KFwiQHRvbG9rb2Jhbi90Z2RcIikudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsICgpID0+IFRnZENvZGVGdW5jdGlvbnM+ID0ge31cbiAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IFwidGdkQ29kZUZ1bmN0aW9uX1wiXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleS5zbGljZShwcmVmaXgubGVuZ3RoKV0gPSBtb2R1bGVba2V5IGFzIGtleW9mIHR5cGVvZiBtb2R1bGVdIGFzICgpID0+IFRnZENvZGVGdW5jdGlvbnNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRGdW5jdGlvbnMocmVzdWx0KVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uc1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRmlsdGVyXCJcbiIsImltcG9ydCB7IFZpZXdGaWx0ZXIgfSBmcm9tIFwiLi9fXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVZpZXdHTFRGKCkge1xuICAgIHJldHVybiA8Vmlld0ZpbHRlciAvPlxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBFZGl0b3IgZnJvbSBcInJlYWN0LXNpbXBsZS1jb2RlLWVkaXRvclwiXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuaW1wb3J0IFwiLi9jb2RlLWVkaXRvci12aWV3LmNzc1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZUVkaXRvclZpZXdQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZ1xuICAgIG9uQ2hhbmdlPyh2YWx1ZTogc3RyaW5nKTogdm9pZFxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbiAgICBkaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuY29uc3QgVk9JRF9GVU5DID0gKCkgPT4ge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZUVkaXRvclZpZXcocHJvcHM6IENvZGVFZGl0b3JWaWV3UHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9PlxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17cHJvcHMub25DaGFuZ2UgPz8gVk9JRF9GVU5DfVxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodD17KGNvZGUpID0+IFByaXNtLmhpZ2hsaWdodChjb2RlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVFZGl0b3JWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXCJjdXN0b21cIiwgXCJ2aWV3LUNvZGVFZGl0b3JWaWV3XCJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgcmV0dXJuIEdMU0xcbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cIihefFteXFxcXDpdKVxcL1xcLy4qXCIvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSk6IFJlZ0V4cCB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2dyYW1tYXJcIlxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL2NvZGUtZWRpdG9yLXZpZXdcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsOERBQThELEU7Ozs7Ozs7O0FDRDlFO0FBQ0Esc0RBQWUsQ0FBQyw0S0FBNEssRTs7Ozs7Ozs7QUNENUw7QUFDQSxzREFBZSxDQUFDLHFJQUFxSSxFOzs7OztBQ0RySjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhdUI7QUFFNkU7QUFDdEU7QUFDSDtBQUNhO0FBQ1M7QUFDSDtBQUN1QjtBQUVyRSxNQUFNLENBQUMsR0FBRywrQ0FBZ0I7QUFFbkIsU0FBUyxVQUFVO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLGdEQUFnQixFQUFFO0lBQ2xDLE1BQU0sU0FBUyxHQUFHLDhCQUFhLENBQUMsR0FBRyxFQUFFO1FBQ2pDLElBQUksSUFBSSxHQUFxQixFQUFFO1FBQy9CLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksR0FBRztnQkFDSCxHQUFHLElBQUk7Z0JBQ1AsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7YUFDcEI7UUFDTCxDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDYixNQUFNLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsdURBQW9CLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7SUFDbEgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxT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