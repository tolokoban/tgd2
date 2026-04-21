"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_filter_several_page_mdx-src_components_demo_Tgd_tgd_module_css-src_c-96f059"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
65927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _marylin_demo__rspack_import_4 = __webpack_require__(83194);





const FOCUS = { "Detail #1": "    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: \"LINEAR\",\n                magFilter: \"LINEAR\",\n                wrapR: \"CLAMP_TO_EDGE\",\n                wrapS: \"CLAMP_TO_EDGE\",\n                wrapT: \"CLAMP_TO_EDGE\",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()" };
const FULL = "import {\n    ArrayNumber4,\n    type TgdContext,\n    TgdFilterBlur,\n    TgdFilterChromaticAberration,\n    TgdFilterMultiply,\n    TgdFilterVerbatim,\n    TgdFilterZoom,\n    TgdLight,\n    tgdLoadImage,\n    TgdMaterialDiffuse,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport ImageURL from \"@/assets/image/uv-grid.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const { camera } = context\n    camera.fitSpaceAtTarget(3, 3)\n    const mesh = createMesh(context, assets, false)\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        children: [mesh],\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                minFilter: \"LINEAR\",\n                magFilter: \"LINEAR\",\n                wrapR: \"CLAMP_TO_EDGE\",\n                wrapS: \"CLAMP_TO_EDGE\",\n                wrapT: \"CLAMP_TO_EDGE\",\n            },\n        }),\n    })\n    const filterMultiply = new TgdFilterMultiply({\n        color: [1, 1, 1, 1],\n    })\n    const filterZoom = new TgdFilterZoom()\n    const filterAberration = new TgdFilterChromaticAberration({\n        strength: 10,\n    })\n    const [hBlur, vBlur] = TgdFilterBlur.createPair({ size: 8 })\n    context.add(\n        framebuffer,\n        new TgdPainterFilter(context, {\n            texture: framebuffer.textureColor0,\n            filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],\n            flipY: true,\n        }),\n        (time) => {\n            filterMultiply.color.reset(\n                0.5 + Math.abs(Math.cos(time * 0.458)),\n                0.5 + Math.abs(Math.cos(time * 0.725)),\n                0.5 + Math.abs(Math.cos(time * 0.881)),\n                1,\n            )\n            filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1\n            const blur = Math.max(0, Math.sin(time * 0.755))\n            hBlur.strength = blur\n            vBlur.strength = blur\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    suzane: SuzaneURL,\n                },\n                image: {\n                    image: ImageURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction createMesh(context: TgdContext, assets: Assets, flat: boolean) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const color: ArrayNumber4 = [0.9, 0.3, 0.7, 1]\n    const mesh = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: flat\n            ? new TgdMaterialFlat({ color })\n            : new TgdMaterialDiffuse({\n                  color,\n                  ambient: new TgdLight({\n                      color: [0.8, 0.8, 0.8, 0],\n                  }),\n                  lockLightsToCamera: true,\n              }),\n    })\n    const background = new TgdPainterBackground(context, {\n        texture: new TgdTexture2D(context).loadBitmap(assets.image.image),\n    })\n    return new TgdPainterState(context, {\n        depth: \"less\",\n        blend: \"off\",\n        cull: \"back\",\n        children: [\n            clear,\n            background,\n            mesh,\n            (time) => {\n                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85)\n            },\n        ],\n    })\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_marylin_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
83194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);
/* import */ var _assets_image_uv_grid_webp__rspack_import_4 = __webpack_require__(57503);





function init(context, assets) {
    const { camera } = context;
    camera.fitSpaceAtTarget(3, 3);
    const mesh = createMesh(context, assets, false);
    const framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        children: [mesh],
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                minFilter: "LINEAR",
                magFilter: "LINEAR",
                wrapR: "CLAMP_TO_EDGE",
                wrapS: "CLAMP_TO_EDGE",
                wrapT: "CLAMP_TO_EDGE",
            },
        }),
    });
    const filterMultiply = new _tolokoban_tgd__rspack_import_1.TgdFilterMultiply({
        color: [1, 1, 1, 1],
    });
    const filterZoom = new _tolokoban_tgd__rspack_import_1.TgdFilterZoom();
    const filterAberration = new _tolokoban_tgd__rspack_import_1.TgdFilterChromaticAberration({
        strength: 10,
    });
    const [hBlur, vBlur] = _tolokoban_tgd__rspack_import_1.TgdFilterBlur.createPair({ size: 8 });
    context.add(framebuffer, new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [filterMultiply, filterZoom, hBlur, vBlur, filterAberration],
        flipY: true,
    }), (time) => {
        filterMultiply.color.reset(0.5 + Math.abs(Math.cos(time * 0.458)), 0.5 + Math.abs(Math.cos(time * 0.725)), 0.5 + Math.abs(Math.cos(time * 0.881)), 1);
        filterZoom.zoom = 1 + Math.sin(time * 1.6) * 0.1;
        const blur = Math.max(0, Math.sin(time * 0.755));
        hBlur.strength = blur;
        vBlur.strength = blur;
    });
    context.play();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            glb: {
                suzane: _assets_mesh_suzanne_glb__rspack_import_3,
            },
            image: {
                image: _assets_image_uv_grid_webp__rspack_import_4,
            },
        } }));
}
function createMesh(context, assets, flat) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    });
    const color = [0.9, 0.3, 0.7, 1];
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: flat
            ? new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({ color })
            : new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                color,
                ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
                    color: [0.8, 0.8, 0.8, 0],
                }),
                lockLightsToCamera: true,
            }),
    });
    const background = new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.image),
    });
    return new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        blend: "off",
        cull: "back",
        children: [
            clear,
            background,
            mesh,
            (time) => {
                mesh.transfo.setEulerRotation(time * 50, time * 71.24, time * -34.85);
            },
        ],
    });
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
57503(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid.0665e1a40d7dcc63.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
85810(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marylin_demo__rspack_import_1 = __webpack_require__(65927);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#..",
                    children: "Back to the list of available filters"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                    lineNumber: 5,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Combining several filters"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You can add as many filters as you want, but keep in mind that the more you add, the slowest the render will become."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marylin_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/filter/several/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9maWx0ZXJfc2V2ZXJhbF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfYy05NmYwNTkuNDc2MjczMmQxM2YyYWQ1Zi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9maWx0ZXIvc2V2ZXJhbC9fL21hcnlsaW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZpbHRlci9zZXZlcmFsL18vbWFyeWxpbi5kZW1vL21hcnlsaW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZmlsdGVyL3NldmVyYWwvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hcnlsaW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgbWVzaCA9IGNyZWF0ZU1lc2goY29udGV4dCwgYXNzZXRzLCBmYWxzZSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlck11bHRpcGx5ID0gbmV3IFRnZEZpbHRlck11bHRpcGx5KHtcXG4gICAgICAgIGNvbG9yOiBbMSwgMSwgMSwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlclpvb20gPSBuZXcgVGdkRmlsdGVyWm9vbSgpXFxuICAgIGNvbnN0IGZpbHRlckFiZXJyYXRpb24gPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XFxuICAgICAgICBzdHJlbmd0aDogMTAsXFxuICAgIH0pXFxuICAgIGNvbnN0IFtoQmx1ciwgdkJsdXJdID0gVGdkRmlsdGVyQmx1ci5jcmVhdGVQYWlyKHsgc2l6ZTogOCB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGZyYW1lYnVmZmVyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICAgICAgZmlsdGVyczogW2ZpbHRlck11bHRpcGx5LCBmaWx0ZXJab29tLCBoQmx1ciwgdkJsdXIsIGZpbHRlckFiZXJyYXRpb25dLFxcbiAgICAgICAgICAgIGZsaXBZOiB0cnVlLFxcbiAgICAgICAgfSksXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIGZpbHRlck11bHRpcGx5LmNvbG9yLnJlc2V0KFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC40NTgpKSxcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNzI1KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjg4MSkpLFxcbiAgICAgICAgICAgICAgICAxLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgICBmaWx0ZXJab29tLnpvb20gPSAxICsgTWF0aC5zaW4odGltZSAqIDEuNikgKiAwLjFcXG4gICAgICAgICAgICBjb25zdCBibHVyID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZSAqIDAuNzU1KSlcXG4gICAgICAgICAgICBoQmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgICAgICB2Qmx1ci5zdHJlbmd0aCA9IGJsdXJcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIEFycmF5TnVtYmVyNCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXJCbHVyLFxcbiAgICBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uLFxcbiAgICBUZ2RGaWx0ZXJNdWx0aXBseSxcXG4gICAgVGdkRmlsdGVyVmVyYmF0aW0sXFxuICAgIFRnZEZpbHRlclpvb20sXFxuICAgIFRnZExpZ2h0LFxcbiAgICB0Z2RMb2FkSW1hZ2UsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcXFwiXFxuaW1wb3J0IEltYWdlVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IG1lc2ggPSBjcmVhdGVNZXNoKGNvbnRleHQsIGFzc2V0cywgZmFsc2UpXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJNdWx0aXBseSA9IG5ldyBUZ2RGaWx0ZXJNdWx0aXBseSh7XFxuICAgICAgICBjb2xvcjogWzEsIDEsIDEsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJab29tID0gbmV3IFRnZEZpbHRlclpvb20oKVxcbiAgICBjb25zdCBmaWx0ZXJBYmVycmF0aW9uID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xcbiAgICAgICAgc3RyZW5ndGg6IDEwLFxcbiAgICB9KVxcbiAgICBjb25zdCBbaEJsdXIsIHZCbHVyXSA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IDggfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBmcmFtZWJ1ZmZlcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJNdWx0aXBseSwgZmlsdGVyWm9vbSwgaEJsdXIsIHZCbHVyLCBmaWx0ZXJBYmVycmF0aW9uXSxcXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBseS5jb2xvci5yZXNldChcXG4gICAgICAgICAgICAgICAgMC41ICsgTWF0aC5hYnMoTWF0aC5jb3ModGltZSAqIDAuNDU4KSksXFxuICAgICAgICAgICAgICAgIDAuNSArIE1hdGguYWJzKE1hdGguY29zKHRpbWUgKiAwLjcyNSkpLFxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC44ODEpKSxcXG4gICAgICAgICAgICAgICAgMSxcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICAgZmlsdGVyWm9vbS56b29tID0gMSArIE1hdGguc2luKHRpbWUgKiAxLjYpICogMC4xXFxuICAgICAgICAgICAgY29uc3QgYmx1ciA9IE1hdGgubWF4KDAsIE1hdGguc2luKHRpbWUgKiAwLjc1NSkpXFxuICAgICAgICAgICAgaEJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICAgICAgdkJsdXIuc3RyZW5ndGggPSBibHVyXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5lOiBTdXphbmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogSW1hZ2VVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gY3JlYXRlTWVzaChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgZmxhdDogYm9vbGVhbikge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC4zLCAwLjcsIDFdXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBmbGF0XFxuICAgICAgICAgICAgPyBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3IgfSlcXG4gICAgICAgICAgICA6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5pbWFnZSksXFxuICAgIH0pXFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICBibGVuZDogXFxcIm9mZlxcXCIsXFxuICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGNsZWFyLFxcbiAgICAgICAgICAgIGJhY2tncm91bmQsXFxuICAgICAgICAgICAgbWVzaCxcXG4gICAgICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNTAsIHRpbWUgKiA3MS4yNCwgdGltZSAqIC0zNC44NSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgQXJyYXlOdW1iZXI0LFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJCbHVyLFxuICAgIFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24sXG4gICAgVGdkRmlsdGVyTXVsdGlwbHksXG4gICAgVGdkRmlsdGVyVmVyYmF0aW0sXG4gICAgVGdkRmlsdGVyWm9vbSxcbiAgICBUZ2RMaWdodCxcbiAgICB0Z2RMb2FkSW1hZ2UsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3V6YW5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvdXYtZ3JpZC53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcbiAgICBjb25zdCBtZXNoID0gY3JlYXRlTWVzaChjb250ZXh0LCBhc3NldHMsIGZhbHNlKVxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICB3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgZmlsdGVyTXVsdGlwbHkgPSBuZXcgVGdkRmlsdGVyTXVsdGlwbHkoe1xuICAgICAgICBjb2xvcjogWzEsIDEsIDEsIDFdLFxuICAgIH0pXG4gICAgY29uc3QgZmlsdGVyWm9vbSA9IG5ldyBUZ2RGaWx0ZXJab29tKClcbiAgICBjb25zdCBmaWx0ZXJBYmVycmF0aW9uID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xuICAgICAgICBzdHJlbmd0aDogMTAsXG4gICAgfSlcbiAgICBjb25zdCBbaEJsdXIsIHZCbHVyXSA9IFRnZEZpbHRlckJsdXIuY3JlYXRlUGFpcih7IHNpemU6IDggfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgZnJhbWVidWZmZXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG4gICAgICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyTXVsdGlwbHksIGZpbHRlclpvb20sIGhCbHVyLCB2Qmx1ciwgZmlsdGVyQWJlcnJhdGlvbl0sXG4gICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBmaWx0ZXJNdWx0aXBseS5jb2xvci5yZXNldChcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC40NTgpKSxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC43MjUpKSxcbiAgICAgICAgICAgICAgICAwLjUgKyBNYXRoLmFicyhNYXRoLmNvcyh0aW1lICogMC44ODEpKSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgZmlsdGVyWm9vbS56b29tID0gMSArIE1hdGguc2luKHRpbWUgKiAxLjYpICogMC4xXG4gICAgICAgICAgICBjb25zdCBibHVyID0gTWF0aC5tYXgoMCwgTWF0aC5zaW4odGltZSAqIDAuNzU1KSlcbiAgICAgICAgICAgIGhCbHVyLnN0cmVuZ3RoID0gYmx1clxuICAgICAgICAgICAgdkJsdXIuc3RyZW5ndGggPSBibHVyXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IEltYWdlVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzaChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgZmxhdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuMywgMC43LCAxXVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbDogZmxhdFxuICAgICAgICAgICAgPyBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3IgfSlcbiAgICAgICAgICAgIDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmltYWdlKSxcbiAgICB9KVxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICBibGVuZDogXCJvZmZcIixcbiAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjbGVhcixcbiAgICAgICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgICAgICBtZXNoLFxuICAgICAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNTAsIHRpbWUgKiA3MS4yNCwgdGltZSAqIC0zNC44NSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSlcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ3BCO0FBRWpDLE1BQU0sS0FBSyxHQUFHLEVBQUMsV0FBVyxFQUFDLDRpREFBNGlELEVBQUM7QUFDeGtELE1BQU0sSUFBSSxHQUFHLGtzSEFBa3NIO0FBRWhzSCxTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMseUNBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1A7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKc0I7QUFFa0M7QUFFUjtB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