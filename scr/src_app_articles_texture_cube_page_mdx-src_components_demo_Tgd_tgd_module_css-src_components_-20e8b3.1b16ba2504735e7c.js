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





const FOCUS = {
    "Detail #1": "  const camera = new TgdCameraPerspective({\n    transfo: {\n      distance: 6,\n    },\n  });\n  context.camera = camera;\n  new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 1000,\n  });\n  context.camera.debug();\n  const skybox = new TgdPainterSkybox(context, {\n    camera: context.camera,\n    imagePosX: assets.image.imagePosX,\n    imagePosY: assets.image.imagePosY,\n    imagePosZ: assets.image.imagePosZ,\n    imageNegX: assets.image.imageNegX,\n    imageNegY: assets.image.imageNegY,\n    imageNegZ: assets.image.imageNegZ,\n  });\n  const clear = new TgdPainterClear(context, {\n    depth: 1,\n  });\n  const cube = new TgdPainterMesh(context);\n  const axes = new TgdPainterAxes(context, { scale: 3 });\n  const state = new TgdPainterState(context, {\n    depth: webglPresetDepth.lessOrEqual,\n    children: [axes, cube, skybox],\n  });\n  context.add(clear, state);\n  context.paint();\n  return { camera };",
};
const FULL = 'import React from "react";\nimport {\n  tgdActionCreateTransfoInterpolation,\n  TgdCamera,\n  TgdCameraPerspective,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  tgdEasingFunctionInOutBounce,\n  tgdEasingFunctionInOutCubic,\n  TgdGeometryBox,\n  TgdMat3,\n  TgdPainterAxes,\n  TgdPainterClear,\n  TgdPainterLogic,\n  TgdPainterMesh,\n  TgdPainterSkybox,\n  TgdPainterState,\n  TgdQuat,\n  TgdQuatFace,\n  TgdTransfo,\n  TgdVec3,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { Assets } from "@/components/demo/Tgd";\nimport { ViewButton } from "@tolokoban/ui";\n\nimport imagePosX from "./posX.webp"; // +X\nimport imagePosY from "./posY.webp"; // +Y\nimport imagePosZ from "./posZ.webp"; // +Z\nimport imageNegX from "./negX.webp"; // -X\nimport imageNegY from "./negY.webp"; // -Y\nimport imageNegZ from "./negZ.webp"; // -Z\n\nimport styles from "./skybox.demo.module.css";\n\nfunction init(\n  context: TgdContext,\n  assets: Assets,\n): {\n  camera: TgdCamera;\n} {\n  const camera = new TgdCameraPerspective({\n    transfo: {\n      distance: 6,\n    },\n  });\n  context.camera = camera;\n  new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 1000,\n  });\n  context.camera.debug();\n  const skybox = new TgdPainterSkybox(context, {\n    camera: context.camera,\n    imagePosX: assets.image.imagePosX,\n    imagePosY: assets.image.imagePosY,\n    imagePosZ: assets.image.imagePosZ,\n    imageNegX: assets.image.imageNegX,\n    imageNegY: assets.image.imageNegY,\n    imageNegZ: assets.image.imageNegZ,\n  });\n  const clear = new TgdPainterClear(context, {\n    depth: 1,\n  });\n  const cube = new TgdPainterMesh(context);\n  const axes = new TgdPainterAxes(context, { scale: 3 });\n  const state = new TgdPainterState(context, {\n    depth: webglPresetDepth.lessOrEqual,\n    children: [axes, cube, skybox],\n  });\n  context.add(clear, state);\n  context.paint();\n  return { camera };\n}\n\nexport default function Demo() {\n  const [camera, setCamera] = React.useState<TgdCamera | null>(null);\n  const refContext = React.useRef<TgdContext | null>(null);\n  const handleReady = (context: TgdContext, assets: Assets) => {\n    const resources = init(context, assets);\n    setCamera(resources.camera);\n    refContext.current = context;\n  };\n  const face = (value: TgdQuatFace) => {\n    const context = refContext.current;\n    if (!camera || !context) return;\n\n    const orientation = TgdQuat.fromFace(value);\n    context.animSchedule({\n      action: tgdActionCreateTransfoInterpolation(\n        camera.transfo,\n        {},\n        {\n          orientation,\n        },\n      ),\n      duration: 0.3,\n      easingFunction: tgdEasingFunctionInOutCubic,\n    });\n  };\n  return (\n    <View\n      className={styles.skybox}\n      gizmo\n      onReady={handleReady}\n      assets={{\n        image: {\n          imagePosX,\n          imagePosY,\n          imagePosZ,\n          imageNegX,\n          imageNegY,\n          imageNegZ,\n        },\n      }}\n    >\n      <footer className={styles.footer}>\n        <ViewButton onClick={() => face("+X+Y+Z")}>Reset</ViewButton>\n        <ViewButton onClick={() => face("-Z-Y-X")}>+X</ViewButton>\n        <ViewButton onClick={() => face("+X+Z-Y")}>+Y</ViewButton>\n        <ViewButton onClick={() => face("+X-Y-Z")}>+Z</ViewButton>\n        <ViewButton onClick={() => face("+Z-Y+X")}>-X</ViewButton>\n        <ViewButton onClick={() => face("+X-Z+Y")}>-Y</ViewButton>\n        <ViewButton onClick={() => face("-X-Y+Z")}>-Z</ViewButton>\n      </footer>\n    </View>\n  );\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_skybox_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
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
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_skybox_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To create a TextureCube, you need six square images of the same size."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    " (or any other free website) and to use\nit in a Blender scene."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 15,
                        columnNumber: 16
                    }, this),
                    " to generate the 6 images in the same folder as your Blender file."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("img", {
                src: _textures_jpg__rspack_import_2
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Warning!"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    " by default, TGD uses the convention where +Y is pointing up, +X pointing right and +Z toward the camera,\nbut for Blender we have +Z pointing up, +X pointing right and -Y toward the camera."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {}, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                    lineNumber: 22,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/cube/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV9jdWJlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wb25lbnRzXy0yMGU4YjMuMWIxNmJhMjUwNDczNWU3Yy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlL2N1YmUvX3NreWJveC5kZW1vL3NreWJveC5kZW1vLm1vZHVsZS5jc3M/ZWRjMiIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLm1vZHVsZS5jc3M/YTJhMyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS9jdWJlL19za3lib3guZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvY3ViZS9fc2t5Ym94LmRlbW8vc2t5Ym94LmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvY3ViZS9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2t5Ym94XCI6XCJzcmMtYXBwLWFydGljbGVzLXRleHR1cmUtY3ViZS1fc2t5Ym94LWRlbW8tc2t5Ym94LWRlbW8tbW9kdWxlX3NreWJveF9pZzEzRWhcIixcImZvb3RlclwiOlwic3JjLWFwcC1hcnRpY2xlcy10ZXh0dXJlLWN1YmUtX3NreWJveC1kZW1vLXNreWJveC1kZW1vLW1vZHVsZV9mb290ZXJfbVZFV1FlXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9za3lib3guZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgIFwiICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xcbiAgICB0cmFuc2ZvOiB7XFxuICAgICAgZGlzdGFuY2U6IDYsXFxuICAgIH0sXFxuICB9KTtcXG4gIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhO1xcbiAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gIH0pO1xcbiAgY29udGV4dC5jYW1lcmEuZGVidWcoKTtcXG4gIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcXG4gICAgY2FtZXJhOiBjb250ZXh0LmNhbWVyYSxcXG4gICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxcbiAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXFxuICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLmltYWdlUG9zWixcXG4gICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxcbiAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXFxuICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLmltYWdlTmVnWixcXG4gIH0pO1xcbiAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgZGVwdGg6IDEsXFxuICB9KTtcXG4gIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XFxuICBjb25zdCBheGVzID0gbmV3IFRnZFBhaW50ZXJBeGVzKGNvbnRleHQsIHsgc2NhbGU6IDMgfSk7XFxuICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgY2hpbGRyZW46IFtheGVzLCBjdWJlLCBza3lib3hdLFxcbiAgfSk7XFxuICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcbiAgY29udGV4dC5wYWludCgpO1xcbiAgcmV0dXJuIHsgY2FtZXJhIH07XCIsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCB7XFxuICB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbixcXG4gIFRnZENhbWVyYSxcXG4gIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgVGdkQ29udGV4dCxcXG4gIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRCb3VuY2UsXFxuICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXFxuICBUZ2RHZW9tZXRyeUJveCxcXG4gIFRnZE1hdDMsXFxuICBUZ2RQYWludGVyQXhlcyxcXG4gIFRnZFBhaW50ZXJDbGVhcixcXG4gIFRnZFBhaW50ZXJMb2dpYyxcXG4gIFRnZFBhaW50ZXJNZXNoLFxcbiAgVGdkUGFpbnRlclNreWJveCxcXG4gIFRnZFBhaW50ZXJTdGF0ZSxcXG4gIFRnZFF1YXQsXFxuICBUZ2RRdWF0RmFjZSxcXG4gIFRnZFRyYW5zZm8sXFxuICBUZ2RWZWMzLFxcbiAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcXG5cXG5pbXBvcnQgaW1hZ2VQb3NYIGZyb20gXCIuL3Bvc1gud2VicFwiOyAvLyArWFxcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcIi4vcG9zWS53ZWJwXCI7IC8vICtZXFxuaW1wb3J0IGltYWdlUG9zWiBmcm9tIFwiLi9wb3NaLndlYnBcIjsgLy8gK1pcXG5pbXBvcnQgaW1hZ2VOZWdYIGZyb20gXCIuL25lZ1gud2VicFwiOyAvLyAtWFxcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcIi4vbmVnWS53ZWJwXCI7IC8vIC1ZXFxuaW1wb3J0IGltYWdlTmVnWiBmcm9tIFwiLi9uZWdaLndlYnBcIjsgLy8gLVpcXG5cXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NreWJveC5kZW1vLm1vZHVsZS5jc3NcIjtcXG5cXG5mdW5jdGlvbiBpbml0KFxcbiAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gIGFzc2V0czogQXNzZXRzLFxcbik6IHtcXG4gIGNhbWVyYTogVGdkQ2FtZXJhO1xcbn0ge1xcbiAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgdHJhbnNmbzoge1xcbiAgICAgIGRpc3RhbmNlOiA2LFxcbiAgICB9LFxcbiAgfSk7XFxuICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYTtcXG4gIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICB9KTtcXG4gIGNvbnRleHQuY2FtZXJhLmRlYnVnKCk7XFxuICBjb25zdCBza3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XFxuICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXFxuICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcXG4gICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxcbiAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXFxuICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcXG4gICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxcbiAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXFxuICB9KTtcXG4gIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgIGRlcHRoOiAxLFxcbiAgfSk7XFxuICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpO1xcbiAgY29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAzIH0pO1xcbiAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXFxuICAgIGNoaWxkcmVuOiBbYXhlcywgY3ViZSwgc2t5Ym94XSxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG4gIGNvbnRleHQucGFpbnQoKTtcXG4gIHJldHVybiB7IGNhbWVyYSB9O1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgY29uc3QgW2NhbWVyYSwgc2V0Q2FtZXJhXSA9IFJlYWN0LnVzZVN0YXRlPFRnZENhbWVyYSB8IG51bGw+KG51bGwpO1xcbiAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbCk7XFxuICBjb25zdCBoYW5kbGVSZWFkeSA9IChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICBjb25zdCByZXNvdXJjZXMgPSBpbml0KGNvbnRleHQsIGFzc2V0cyk7XFxuICAgIHNldENhbWVyYShyZXNvdXJjZXMuY2FtZXJhKTtcXG4gICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dDtcXG4gIH07XFxuICBjb25zdCBmYWNlID0gKHZhbHVlOiBUZ2RRdWF0RmFjZSkgPT4ge1xcbiAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50O1xcbiAgICBpZiAoIWNhbWVyYSB8fCAhY29udGV4dCkgcmV0dXJuO1xcblxcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IFRnZFF1YXQuZnJvbUZhY2UodmFsdWUpO1xcbiAgICBjb250ZXh0LmFuaW1TY2hlZHVsZSh7XFxuICAgICAgYWN0aW9uOiB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbihcXG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLFxcbiAgICAgICAge30sXFxuICAgICAgICB7XFxuICAgICAgICAgIG9yaWVudGF0aW9uLFxcbiAgICAgICAgfSxcXG4gICAgICApLFxcbiAgICAgIGR1cmF0aW9uOiAwLjMsXFxuICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyxcXG4gICAgfSk7XFxuICB9O1xcbiAgcmV0dXJuIChcXG4gICAgPFZpZXdcXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5za3lib3h9XFxuICAgICAgZ2l6bW9cXG4gICAgICBvblJlYWR5PXtoYW5kbGVSZWFkeX1cXG4gICAgICBhc3NldHM9e3tcXG4gICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgIGltYWdlUG9zWCxcXG4gICAgICAgICAgaW1hZ2VQb3NZLFxcbiAgICAgICAgICBpbWFnZVBvc1osXFxuICAgICAgICAgIGltYWdlTmVnWCxcXG4gICAgICAgICAgaW1hZ2VOZWdZLFxcbiAgICAgICAgICBpbWFnZU5lZ1osXFxuICAgICAgICB9LFxcbiAgICAgIH19XFxuICAgID5cXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XFxuICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1grWStaXCIpfT5SZXNldDwvVmlld0J1dHRvbj5cXG4gICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZhY2UoXCItWi1ZLVhcIil9PitYPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYK1otWVwiKX0+K1k8L1ZpZXdCdXR0b24+XFxuICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1gtWS1aXCIpfT4rWjwvVmlld0J1dHRvbj5cXG4gICAgICAgIDxWaWV3QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZhY2UoXCIrWi1ZK1hcIil9Pi1YPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgPFZpZXdCdXR0b24gb25DbGljaz17KCkgPT4gZmFjZShcIitYLVorWVwiKX0+LVk8L1ZpZXdCdXR0b24+XFxuICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiLVgtWStaXCIpfT4tWjwvVmlld0J1dHRvbj5cXG4gICAgICA8L2Zvb3Rlcj5cXG4gICAgPC9WaWV3PlxcbiAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7XG4gICAgdGdkQWN0aW9uQ3JlYXRlVHJhbnNmb0ludGVycG9sYXRpb24sXG4gICAgVGdkQ2FtZXJhLFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRCb3VuY2UsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgIFRnZEdlb21ldHJ5Qm94LFxuICAgIFRnZE1hdDMsXG4gICAgVGdkUGFpbnRlckF4ZXMsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RRdWF0LFxuICAgIFRnZFF1YXRGYWNlLFxuICAgIFRnZFRyYW5zZm8sXG4gICAgVGdkVmVjMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIi4vcG9zWC53ZWJwXCIgLy8gK1hcbmltcG9ydCBpbWFnZVBvc1kgZnJvbSBcIi4vcG9zWS53ZWJwXCIgLy8gK1lcbmltcG9ydCBpbWFnZVBvc1ogZnJvbSBcIi4vcG9zWi53ZWJwXCIgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIi4vbmVnWC53ZWJwXCIgLy8gLVhcbmltcG9ydCBpbWFnZU5lZ1kgZnJvbSBcIi4vbmVnWS53ZWJwXCIgLy8gLVlcbmltcG9ydCBpbWFnZU5lZ1ogZnJvbSBcIi4vbmVnWi53ZWJwXCIgLy8gLVpcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9za3lib3guZGVtby5tb2R1bGUuY3NzXCJcblxuZnVuY3Rpb24gaW5pdChcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgIGFzc2V0czogQXNzZXRzLFxuKToge1xuICAgIGNhbWVyYTogVGdkQ2FtZXJhXG59IHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuICAgICAgICB0cmFuc2ZvOiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogNixcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICB9KVxuICAgIGNvbnRleHQuY2FtZXJhLmRlYnVnKClcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogY29udGV4dC5jYW1lcmEsXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjb25zdCBheGVzID0gbmV3IFRnZFBhaW50ZXJBeGVzKGNvbnRleHQsIHsgc2NhbGU6IDMgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcbiAgICAgICAgY2hpbGRyZW46IFtheGVzLCBjdWJlLCBza3lib3hdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIHJldHVybiB7IGNhbWVyYSB9XG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IFtjYW1lcmEsIHNldENhbWVyYV0gPSBSZWFjdC51c2VTdGF0ZTxUZ2RDYW1lcmEgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgaGFuZGxlUmVhZHkgPSAoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gaW5pdChjb250ZXh0LCBhc3NldHMpXG4gICAgICAgIHNldENhbWVyYShyZXNvdXJjZXMuY2FtZXJhKVxuICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgfVxuICAgIGNvbnN0IGZhY2UgPSAodmFsdWU6IFRnZFF1YXRGYWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjYW1lcmEgfHwgIWNvbnRleHQpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gVGdkUXVhdC5mcm9tRmFjZSh2YWx1ZSlcbiAgICAgICAgY29udGV4dC5hbmltU2NoZWR1bGUoe1xuICAgICAgICAgICAgYWN0aW9uOiB0Z2RBY3Rpb25DcmVhdGVUcmFuc2ZvSW50ZXJwb2xhdGlvbihcbiAgICAgICAgICAgICAgICBjYW1lcmEudHJhbnNmbyxcbiAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5za3lib3h9XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlUmVhZHl9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVBvc1gsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VQb3NaLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZU5lZ1gsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VOZWdaLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1grWStaXCIpfT5SZXNldDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiLVotWS1YXCIpfT4rWDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1grWi1ZXCIpfT4rWTwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1gtWS1aXCIpfT4rWjwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1otWStYXCIpfT4tWDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiK1gtWitZXCIpfT4tWTwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXsoKSA9PiBmYWNlKFwiLVgtWStaXCIpfT4tWjwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOlsiQWRkb25VUkwiLCJUZXh0dXJl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