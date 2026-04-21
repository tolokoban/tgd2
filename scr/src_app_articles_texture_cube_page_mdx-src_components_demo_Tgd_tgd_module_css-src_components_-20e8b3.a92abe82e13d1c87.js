"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_cube_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_-20e8b3"], {
55333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"skybox":"src-app-articles-texture-cube-_skybox-demo-skybox-demo-module_skybox_ig13Eh","footer":"src-app-articles-texture-cube-_skybox-demo-skybox-demo-module_footer_mVEWQe"});

},
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
39688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _skybox_demo__rspack_import_4 = __webpack_require__(37437);





const FOCUS = { "Detail #1": "    const camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 6,\n        },\n    })\n    context.camera = camera\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n    })\n    context.camera.debug()\n    const skybox = new TgdPainterSkybox(context, {\n        camera: context.camera,\n        texture: {\n            imagePosX: assets.image.imagePosX,\n            imagePosY: assets.image.imagePosY,\n            imagePosZ: assets.image.imagePosZ,\n            imageNegX: assets.image.imageNegX,\n            imageNegY: assets.image.imageNegY,\n            imageNegZ: assets.image.imageNegZ,\n        },\n    })\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const cube = new TgdPainterMesh(context)\n    const axes = new TgdPainterAxes(context, { scale: 3 })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [axes, cube, skybox],\n    })\n    context.add(clear, state)\n    context.paint()\n    return { camera }" };
const FULL = "import React from \"react\"\nimport {\n    tgdActionCreateTransfoInterpolation,\n    TgdCamera,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    tgdEasingFunctionInOutCubic,\n    TgdPainterAxes,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdQuat,\n    TgdQuatFace,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport { ViewButton } from \"@tolokoban/ui\"\n\nimport imagePosX from \"./posX.webp\" // +X\nimport imagePosY from \"./posY.webp\" // +Y\nimport imagePosZ from \"./posZ.webp\" // +Z\nimport imageNegX from \"./negX.webp\" // -X\nimport imageNegY from \"./negY.webp\" // -Y\nimport imageNegZ from \"./negZ.webp\" // -Z\n\nimport styles from \"./skybox.demo.module.css\"\n\nfunction init(\n    context: TgdContext,\n    assets: Assets,\n): {\n    camera: TgdCamera\n} {\n    const camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 6,\n        },\n    })\n    context.camera = camera\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n    })\n    context.camera.debug()\n    const skybox = new TgdPainterSkybox(context, {\n        camera: context.camera,\n        texture: {\n            imagePosX: assets.image.imagePosX,\n            imagePosY: assets.image.imagePosY,\n            imagePosZ: assets.image.imagePosZ,\n            imageNegX: assets.image.imageNegX,\n            imageNegY: assets.image.imageNegY,\n            imageNegZ: assets.image.imageNegZ,\n        },\n    })\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n    })\n    const cube = new TgdPainterMesh(context)\n    const axes = new TgdPainterAxes(context, { scale: 3 })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [axes, cube, skybox],\n    })\n    context.add(clear, state)\n    context.paint()\n    return { camera }\n}\n\nexport default function Demo() {\n    const [camera, setCamera] = React.useState<TgdCamera | null>(null)\n    const refContext = React.useRef<TgdContext | null>(null)\n    const handleReady = (context: TgdContext, assets: Assets) => {\n        const resources = init(context, assets)\n        setCamera(resources.camera)\n        refContext.current = context\n    }\n    const face = (value: TgdQuatFace) => {\n        const context = refContext.current\n        if (!camera || !context) return\n\n        const orientation = TgdQuat.fromFace(value)\n        context.animSchedule({\n            action: tgdActionCreateTransfoInterpolation(\n                camera.transfo,\n                {},\n                {\n                    orientation,\n                },\n            ),\n            duration: 0.3,\n            easingFunction: tgdEasingFunctionInOutCubic,\n        })\n    }\n    return (\n        <View\n            className={styles.skybox}\n            gizmo\n            onReady={handleReady}\n            assets={{\n                image: {\n                    imagePosX,\n                    imagePosY,\n                    imagePosZ,\n                    imageNegX,\n                    imageNegY,\n                    imageNegZ,\n                },\n            }}>\n            <footer className={styles.footer}>\n                <ViewButton onClick={() => face(\"+X+Y+Z\")}>Reset</ViewButton>\n                <ViewButton onClick={() => face(\"-Z-Y-X\")}>+X</ViewButton>\n                <ViewButton onClick={() => face(\"+X+Z-Y\")}>+Y</ViewButton>\n                <ViewButton onClick={() => face(\"+X-Y-Z\")}>+Z</ViewButton>\n                <ViewButton onClick={() => face(\"+Z-Y+X\")}>-X</ViewButton>\n                <ViewButton onClick={() => face(\"+X-Z+Y\")}>-Y</ViewButton>\n                <ViewButton onClick={() => face(\"-X-Y+Z\")}>-Z</ViewButton>\n            </footer>\n        </View>\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_skybox_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
37437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(18712);
/* import */ var _tolokoban_ui__rspack_import_4 = __webpack_require__(62430);
/* import */ var _posX_webp__rspack_import_5 = __webpack_require__(13526);
/* import */ var _posY_webp__rspack_import_6 = __webpack_require__(35934);
/* import */ var _posZ_webp__rspack_import_7 = __webpack_require__(46836);
/* import */ var _negX_webp__rspack_import_8 = __webpack_require__(31050);
/* import */ var _negY_webp__rspack_import_9 = __webpack_require__(35317);
/* import */ var _negZ_webp__rspack_import_10 = __webpack_require__(35560);
/* import */ var _skybox_demo_module_css__rspack_import_11 = __webpack_require__(55333);












function init(context, assets) {
    const camera = new _tolokoban_tgd__rspack_import_2.TgdCameraPerspective({
        transfo: {
            distance: 6,
        },
    });
    context.camera = camera;
    new _tolokoban_tgd__rspack_import_2.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
    });
    context.camera.debug();
    const skybox = new _tolokoban_tgd__rspack_import_2.TgdPainterSkybox(context, {
        camera: context.camera,
        texture: {
            imagePosX: assets.image.imagePosX,
            imagePosY: assets.image.imagePosY,
            imagePosZ: assets.image.imagePosZ,
            imageNegX: assets.image.imageNegX,
            imageNegY: assets.image.imageNegY,
            imageNegZ: assets.image.imageNegZ,
        },
    });
    const clear = new _tolokoban_tgd__rspack_import_2.TgdPainterClear(context, {
        depth: 1,
    });
    const cube = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    const axes = new _tolokoban_tgd__rspack_import_2.TgdPainterAxes(context, { scale: 3 });
    const state = new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.lessOrEqual,
        children: [axes, cube, skybox],
    });
    context.add(clear, state);
    context.paint();
    return { camera };
}
function Demo() {
    const [camera, setCamera] = react__rspack_import_1_default().useState(null);
    const refContext = react__rspack_import_1_default().useRef(null);
    const handleReady = (context, assets) => {
        const resources = init(context, assets);
        setCamera(resources.camera);
        refContext.current = context;
    };
    const face = (value) => {
        const context = refContext.current;
        if (!camera || !context)
            return;
        const orientation = _tolokoban_tgd__rspack_import_2.TgdQuat.fromFace(value);
        context.animSchedule({
            action: (0,_tolokoban_tgd__rspack_import_2.tgdActionCreateTransfoInterpolation)(camera.transfo, {}, {
                orientation,
            }),
            duration: 0.3,
            easingFunction: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutCubic,
        });
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_3["default"], { className: _skybox_demo_module_css__rspack_import_11["default"].skybox, gizmo: true, onReady: handleReady, assets: {
            image: {
                imagePosX: _posX_webp__rspack_import_5,
                imagePosY: _posY_webp__rspack_import_6,
                imagePosZ: _posZ_webp__rspack_import_7,
                imageNegX: _negX_webp__rspack_import_8,
                imageNegY: _negY_webp__rspack_import_9,
                imageNegZ: _negZ_webp__rspack_import_10,
            },
        }, children: (0,react_jsx_runtime__rspack_import_0.jsxs)("footer", { className: _skybox_demo_module_css__rspack_import_11["default"].footer, children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("+X+Y+Z"), children: "Reset" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("-Z-Y-X"), children: "+X" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("+X+Z-Y"), children: "+Y" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("+X-Y-Z"), children: "+Z" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("+Z-Y+X"), children: "-X" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("+X-Z+Y"), children: "-Y" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_4.ViewButton, { onClick: () => face("-X-Y+Z"), children: "-Z" })] }) }));
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
31050(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.6e9eae556bf75db4.webp";

},
35317(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.8a75db4b644ac4fd.webp";

},
35560(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.4ff1cbadbae94818.webp";

},
13526(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.5633e187398cb24e.webp";

},
35934(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.906214b3e6a5210c.webp";

},
46836(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.be698f6662612116.webp";

},
43933(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/textures.c71f74624f9b9def.jpg";

},
47094(module) {
module.exports = "data:application/zip;base64,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";

},
89490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_4 = __webpack_require__(28453);
/* import */ var _skybox_demo__rspack_import_1 = __webpack_require__(39688);
/* import */ var _textures_jpg__rspack_import_2 = __webpack_require__(43933);
/* import */ var _tolokoban_webgl_skybox_zip__rspack_import_3 = __webpack_require__(47094);
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
        p: "p",
        pre: "pre",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Texture Cube"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_skybox_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To create a TextureCube, you need six square images of the same size."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "One easy way to get such images is to get an HDRI environment from\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://polyhaven.com/hdris",
                        children: "Polyhaven"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    " (or any other free website) and to use\nit in a Blender scene."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Then, use this ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("a", {
                        href: _tolokoban_webgl_skybox_zip__rspack_import_3,
                        download: "tolokoban-webgl-skybox.zip",
                        children: "Add-on"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 15,
                        columnNumber: 16
                    }, this),
                    " to generate the 6 images in the same folder as your Blender file."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("img", {
                src: _textures_jpg__rspack_import_2
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Warning!"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    " by default, TGD uses the convention where +Y is pointing up, +X pointing right and +Z toward the camera,\nbut for Blender we have +Z pointing up, +X pointing right and -Y toward the camera."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {}, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV9jdWJlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbnRzXy0yMGU4YjMuYTkyYWJlODJlMTNkMWM4Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlL2N1YmUvX3NreWJveC5kZW1vL3NreWJveC5kZW1vLm1vZHVsZS5jc3M/ZWRjMiIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLm1vZHVsZS5jc3M/YTJhMyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvY3ViZS9fc2t5Ym94LmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS9jdWJlL19za3lib3guZGVtby9za3lib3guZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvY3ViZS9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2t5Ym94XCI6XCJzcmMtYXBwLWFydGljbGVzLXRleHR1cmUtY3ViZS1fc2t5Ym94LWRlbW8tc2t5Ym94LWRlbW8tbW9kdWxlX3NreWJveF9pZzEzRWhcIixcImZvb3RlclwiOlwic3JjLWFwcC1hcnRpY2xlcy10ZXh0dXJlLWN1YmUtX3NreWJveC1kZW1vLXNreWJveC1kZW1vLW1vZHVsZV9mb290ZXJfbVZFV1FlXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9za3lib3guZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogNixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmNhbWVyYS5kZWJ1ZygpXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXFxuICAgICAgICB0ZXh0dXJlOiB7XFxuICAgICAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcXG4gICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcXG4gICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAzIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIGNoaWxkcmVuOiBbYXhlcywgY3ViZSwgc2t5Ym94XSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIHsgY2FtZXJhIH1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQge1xcbiAgICB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbixcXG4gICAgVGdkQ2FtZXJhLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICAgIFRnZFBhaW50ZXJBeGVzLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFF1YXQsXFxuICAgIFRnZFF1YXRGYWNlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcXFwiLi9wb3NYLndlYnBcXFwiIC8vICtYXFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFxcXCIuL3Bvc1kud2VicFxcXCIgLy8gK1lcXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXFxcIi4vcG9zWi53ZWJwXFxcIiAvLyArWlxcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcXFwiLi9uZWdYLndlYnBcXFwiIC8vIC1YXFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFxcXCIuL25lZ1kud2VicFxcXCIgLy8gLVlcXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXFxcIi4vbmVnWi53ZWJwXFxcIiAvLyAtWlxcblxcbmltcG9ydCBzdHlsZXMgZnJvbSBcXFwiLi9za3lib3guZGVtby5tb2R1bGUuY3NzXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIGFzc2V0czogQXNzZXRzLFxcbik6IHtcXG4gICAgY2FtZXJhOiBUZ2RDYW1lcmFcXG59IHtcXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogNixcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmNhbWVyYS5kZWJ1ZygpXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXFxuICAgICAgICB0ZXh0dXJlOiB7XFxuICAgICAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcXG4gICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgICAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcXG4gICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcXG4gICAgY29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAzIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIGNoaWxkcmVuOiBbYXhlcywgY3ViZSwgc2t5Ym94XSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIHsgY2FtZXJhIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW2NhbWVyYSwgc2V0Q2FtZXJhXSA9IFJlYWN0LnVzZVN0YXRlPFRnZENhbWVyYSB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IGhhbmRsZVJlYWR5ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgICAgIHNldENhbWVyYShyZXNvdXJjZXMuY2FtZXJhKVxcbiAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxcbiAgICB9XFxuICAgIGNvbnN0IGZhY2UgPSAodmFsdWU6IFRnZFF1YXRGYWNlKSA9PiB7XFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBpZiAoIWNhbWVyYSB8fCAhY29udGV4dCkgcmV0dXJuXFxuXFxuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IFRnZFF1YXQuZnJvbUZhY2UodmFsdWUpXFxuICAgICAgICBjb250ZXh0LmFuaW1TY2hlZHVsZSh7XFxuICAgICAgICAgICAgYWN0aW9uOiB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbihcXG4gICAgICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8sXFxuICAgICAgICAgICAgICAgIHt9LFxcbiAgICAgICAgICAgICAgICB7XFxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICApLFxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXFxuICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcXG4gICAgICAgIH0pXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2t5Ym94fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlUmVhZHl9XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc1gsXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc1ksXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc1osXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZU5lZ1gsXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZU5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICBpbWFnZU5lZ1osXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxcbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFxcXCIrWCtZK1pcXFwiKX0+UmVzZXQ8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZhY2UoXFxcIi1aLVktWFxcXCIpfT4rWDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcXFwiK1grWi1ZXFxcIil9PitZPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFxcXCIrWC1ZLVpcXFwiKX0+K1o8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZhY2UoXFxcIitaLVkrWFxcXCIpfT4tWDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcXFwiK1gtWitZXFxcIil9Pi1ZPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFxcXCItWC1ZK1pcXFwiKX0+LVo8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgPC9mb290ZXI+XFxuICAgICAgICA8L1ZpZXc+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtcbiAgICB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbixcbiAgICBUZ2RDYW1lcmEsXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgIFRnZFBhaW50ZXJBeGVzLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RRdWF0LFxuICAgIFRnZFF1YXRGYWNlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFwiLi9wb3NYLndlYnBcIiAvLyArWFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiLi9wb3NZLndlYnBcIiAvLyArWVxuaW1wb3J0IGltYWdlUG9zWiBmcm9tIFwiLi9wb3NaLndlYnBcIiAvLyArWlxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFwiLi9uZWdYLndlYnBcIiAvLyAtWFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiLi9uZWdZLndlYnBcIiAvLyAtWVxuaW1wb3J0IGltYWdlTmVnWiBmcm9tIFwiLi9uZWdaLndlYnBcIiAvLyAtWlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NreWJveC5kZW1vLm1vZHVsZS5jc3NcIlxuXG5mdW5jdGlvbiBpbml0KFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgYXNzZXRzOiBBc3NldHMsXG4pOiB7XG4gICAgY2FtZXJhOiBUZ2RDYW1lcmFcbn0ge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiA2LFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgIH0pXG4gICAgY29udGV4dC5jYW1lcmEuZGVidWcoKVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcbiAgICAgICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcbiAgICAgICAgdGV4dHVyZToge1xuICAgICAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxuICAgICAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxuICAgICAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxuICAgICAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAzIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG4gICAgICAgIGNoaWxkcmVuOiBbYXhlcywgY3ViZSwgc2t5Ym94XSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICByZXR1cm4geyBjYW1lcmEgfVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCBbY2FtZXJhLCBzZXRDYW1lcmFdID0gUmVhY3QudXNlU3RhdGU8VGdkQ2FtZXJhIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IGhhbmRsZVJlYWR5ID0gKGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlcyA9IGluaXQoY29udGV4dCwgYXNzZXRzKVxuICAgICAgICBzZXRDYW1lcmEocmVzb3VyY2VzLmNhbWVyYSlcbiAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxuICAgIH1cbiAgICBjb25zdCBmYWNlID0gKHZhbHVlOiBUZ2RRdWF0RmFjZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGlmICghY2FtZXJhIHx8ICFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IFRnZFF1YXQuZnJvbUZhY2UodmFsdWUpXG4gICAgICAgIGNvbnRleHQuYW5pbVNjaGVkdWxlKHtcbiAgICAgICAgICAgIGFjdGlvbjogdGdkQWN0aW9uQ3JlYXRlVHJhbnNmb0ludGVycG9sYXRpb24oXG4gICAgICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8sXG4gICAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2t5Ym94fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZVJlYWR5fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VQb3NYLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc1ksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlUG9zWixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VOZWdYLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZU5lZ1ksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlTmVnWixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYK1krWlwiKX0+UmVzZXQ8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIi1aLVktWFwiKX0+K1g8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYK1otWVwiKX0+K1k8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYLVktWlwiKX0+K1o8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitaLVkrWFwiKX0+LVg8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYLVorWVwiKX0+LVk8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIi1YLVkrWlwiKX0+LVo8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbIkFkZG9uVVJMIiwiVGV4dHVyZXNVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsOEtBQThLLEU7Ozs7Ozs7O0FDRDlMO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDckI7QUFFaEMsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsNGlDQUE0aUMsRUFBQztBQUN4a0MsTUFBTSxJQUFJLEdBQUcsODFIQUE4MUg7QUFFNTFILFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQyx3Q0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQ3JDLEdB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