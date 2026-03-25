"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_morphing_page_mdx-src_components_demo_Tgd_tgd_module_css-sr-5db65f"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
1127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _segments_demo__rspack_import_4 = __webpack_require__(20194);





const FOCUS = { "Detail #1": "    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }" };
const FULL = "import {\n    type ArrayNumber2,\n    type ArrayNumber4,\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterSegmentsData,\n    TgdPainterSegmentsMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera.transfo.distance = 75\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 10,\n        minZoom: 0.01,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.3, 0.3, 0.3, 1],\n        depth: 1,\n    })\n    const radius = 10\n    const width = 50\n    const data1 = new TgdPainterSegmentsData()\n    const nodes1: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.5\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width)\n        const x = r * Math.cos(ang)\n        const y = step * 0.2\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / width)\n        nodes1.push([x, y, z, thickness])\n    }\n    nodes1.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes1.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0]\n        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1)\n    }\n    const data2 = new TgdPainterSegmentsData()\n    const nodes2: ArrayNumber4[] = [[0, -1000, 0, 0]]\n    for (let step = -width; step < width; step++) {\n        const ang = step * 0.25\n        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5\n        const x = r * Math.cos(ang)\n        const y = step * 0.3\n        const z = r * Math.sin(ang)\n        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1))\n        nodes2.push([x, y, z, thickness])\n    }\n    nodes2.push([0, 1000, 0, 0])\n    for (let i = 1; i < nodes2.length; i++) {\n        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0]\n        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0]\n        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1)\n    }\n    const palette = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette([\"#f44\", \"#ff4\", \"#4f4\", \"#4ff\", \"#44f\"]),\n    )\n    const segments = new TgdPainterSegmentsMorphing(context, {\n        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],\n        roundness: 64,\n        minRadius: 2,\n        radiusMultiplier: 1,\n        material: new TgdMaterialDiffuse({\n            color: palette,\n            lockLightsToCamera: true,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [segments],\n    })\n    context.add(\n        clear,\n        state,\n        new TgdPainterLogic((time, delta) => {\n            segments.mix = Math.abs(Math.sin(time))\n            segments.transfo.orbitAroundX(delta * 0.315481)\n            segments.transfo.orbitAroundZ(delta * 0.2)\n        }),\n    )\n    context.play()\n    return ({ radiusMultiplier }: { radiusMultiplier: number }) => {\n        segments.radiusMultiplier = radiusMultiplier\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                radiusMultiplier: {\n                    label: \"radiusMultiplier\",\n                    value: 1,\n                    min: 0.1,\n                    max: 3,\n                    step: 0.1,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_segments_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
20194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);



function init(context) {
    context.camera.transfo.distance = 75;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 10,
        minZoom: 0.01,
        speedZoom: 1,
    });
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const radius = 10;
    const width = 50;
    const data1 = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    const nodes1 = [[0, -1000, 0, 0]];
    for (let step = -width; step < width; step++) {
        const ang = step * 0.5;
        const r = radius * Math.cos((step * Math.PI * 0.5) / width);
        const x = r * Math.cos(ang);
        const y = step * 0.2;
        const z = r * Math.sin(ang);
        const thickness = Math.max(0, 1.0 - Math.abs(step) / width);
        nodes1.push([x, y, z, thickness]);
    }
    nodes1.push([0, 1000, 0, 0]);
    for (let i = 1; i < nodes1.length; i++) {
        const uv0 = [(i - 0.5) / (nodes1.length + 1), 0];
        const uv1 = [(i + 0.5) / (nodes1.length + 1), 0];
        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1);
    }
    const data2 = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    const nodes2 = [[0, -1000, 0, 0]];
    for (let step = -width; step < width; step++) {
        const ang = step * 0.25;
        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * 0.5;
        const x = r * Math.cos(ang);
        const y = step * 0.3;
        const z = r * Math.sin(ang);
        const thickness = Math.max(0, 1.0 - Math.abs(step) / (width - 1));
        nodes2.push([x, y, z, thickness]);
    }
    nodes2.push([0, 1000, 0, 0]);
    for (let i = 1; i < nodes2.length; i++) {
        const uv0 = [(i - 0.5) / (nodes2.length + 1), 0];
        const uv1 = [(i + 0.5) / (nodes2.length + 1), 0];
        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1);
    }
    const palette = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(["#f44", "#ff4", "#4f4", "#4ff", "#44f"]));
    const segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsMorphing(context, {
        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],
        roundness: 64,
        minRadius: 2,
        radiusMultiplier: 1,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: palette,
            lockLightsToCamera: true,
        }),
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [segments],
    });
    context.add(clear, state, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time, delta) => {
        segments.mix = Math.abs(Math.sin(time));
        segments.transfo.orbitAroundX(delta * 0.315481);
        segments.transfo.orbitAroundZ(delta * 0.2);
    }));
    context.play();
    return ({ radiusMultiplier }) => {
        segments.radiusMultiplier = radiusMultiplier;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true, options: {
            preserveDrawingBuffer: true,
        }, settings: {
            radiusMultiplier: {
                label: "radiusMultiplier",
                value: 1,
                min: 0.1,
                max: 3,
                step: 0.1,
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
53066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _segments_demo__rspack_import_1 = __webpack_require__(1127);
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
                    href: "docs/classes/TgdPainterSegments.html",
                    children: "TgdPainterSegments"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Morphing between two shapes"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_segments_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/segments",
                        children: "Back"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/morphing/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c19tb3JwaGluZ19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zci01ZGI2NWYuN2UxNGMxODZmMTgwMDA4Zi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzL21vcnBoaW5nL18vc2VnbWVudHMuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvbW9ycGhpbmcvXy9zZWdtZW50cy5kZW1vL3NlZ21lbnRzLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvbW9ycGhpbmcvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3NlZ21lbnRzLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDEwLFxcbiAgICAgICAgbWluWm9vbTogMC4wMSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmFkaXVzID0gMTBcXG4gICAgY29uc3Qgd2lkdGggPSA1MFxcbiAgICBjb25zdCBkYXRhMSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3Qgbm9kZXMxOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxcbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xcbiAgICAgICAgY29uc3QgYW5nID0gc3RlcCAqIDAuNVxcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aClcXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjJcXG4gICAgICAgIGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aClcXG4gICAgICAgIG5vZGVzMS5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxcbiAgICB9XFxuICAgIG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSlcXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczEubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczEubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgZGF0YTEuYWRkKG5vZGVzMVtpIC0gMV0sIG5vZGVzMVtpXSwgdXYwLCB1djEpXFxuICAgIH1cXG4gICAgY29uc3QgZGF0YTIgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMjogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjI1XFxuICAgICAgICBjb25zdCByID0gcmFkaXVzICogTWF0aC5jb3MoKHN0ZXAgKiBNYXRoLlBJICogMC41KSAvIHdpZHRoKSAqIDAuNVxcbiAgICAgICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyhhbmcpXFxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuM1xcbiAgICAgICAgY29uc3QgeiA9IHIgKiBNYXRoLnNpbihhbmcpXFxuICAgICAgICBjb25zdCB0aGlja25lc3MgPSBNYXRoLm1heCgwLCAxLjAgLSBNYXRoLmFicyhzdGVwKSAvICh3aWR0aCAtIDEpKVxcbiAgICAgICAgbm9kZXMyLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXFxuICAgIH1cXG4gICAgbm9kZXMyLnB1c2goWzAsIDEwMDAsIDAsIDBdKVxcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMi5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgY29uc3QgdXYwOiBBcnJheU51bWJlcjIgPSBbKGkgLSAwLjUpIC8gKG5vZGVzMi5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGNvbnN0IHV2MTogQXJyYXlOdW1iZXIyID0gWyhpICsgMC41KSAvIChub2RlczIubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBkYXRhMi5hZGQobm9kZXMyW2kgLSAxXSwgbm9kZXMyW2ldLCB1djAsIHV2MSlcXG4gICAgfVxcbiAgICBjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNDRcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjNGY0XFxcIiwgXFxcIiM0ZmZcXFwiLCBcXFwiIzQ0ZlxcXCJdKSxcXG4gICAgKVxcbiAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyhjb250ZXh0LCB7XFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGExLm1ha2VEYXRhc2V0LCBkYXRhMi5tYWtlRGF0YXNldF1dLFxcbiAgICAgICAgcm91bmRuZXNzOiA2NCxcXG4gICAgICAgIG1pblJhZGl1czogMixcXG4gICAgICAgIHJhZGl1c011bHRpcGxpZXI6IDEsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUsXFxuICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtzZWdtZW50c10sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBzdGF0ZSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgc2VnbWVudHMubWl4ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpXFxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjMxNTQ4MSlcXG4gICAgICAgICAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWx0YSAqIDAuMilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiAoeyByYWRpdXNNdWx0aXBsaWVyIH06IHsgcmFkaXVzTXVsdGlwbGllcjogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIHNlZ21lbnRzLnJhZGl1c011bHRpcGxpZXIgPSByYWRpdXNNdWx0aXBsaWVyXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjIsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNzVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiAxMCxcXG4gICAgICAgIG1pblpvb206IDAuMDEsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXFxuICAgIGNvbnN0IHdpZHRoID0gNTBcXG4gICAgY29uc3QgZGF0YTEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cXG4gICAgZm9yIChsZXQgc3RlcCA9IC13aWR0aDsgc3RlcCA8IHdpZHRoOyBzdGVwKyspIHtcXG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjVcXG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXFxuICAgICAgICBjb25zdCB4ID0gciAqIE1hdGguY29zKGFuZylcXG4gICAgICAgIGNvbnN0IHkgPSBzdGVwICogMC4yXFxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcXG4gICAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IE1hdGgubWF4KDAsIDEuMCAtIE1hdGguYWJzKHN0ZXApIC8gd2lkdGgpXFxuICAgICAgICBub2RlczEucHVzaChbeCwgeSwgeiwgdGhpY2tuZXNzXSlcXG4gICAgfVxcbiAgICBub2RlczEucHVzaChbMCwgMTAwMCwgMCwgMF0pXFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbm9kZXMxLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgY29uc3QgdXYxOiBBcnJheU51bWJlcjIgPSBbKGkgKyAwLjUpIC8gKG5vZGVzMS5sZW5ndGggKyAxKSwgMF1cXG4gICAgICAgIGRhdGExLmFkZChub2RlczFbaSAtIDFdLCBub2RlczFbaV0sIHV2MCwgdXYxKVxcbiAgICB9XFxuICAgIGNvbnN0IGRhdGEyID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxcbiAgICBjb25zdCBub2RlczI6IEFycmF5TnVtYmVyNFtdID0gW1swLCAtMTAwMCwgMCwgMF1dXFxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XFxuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC4yNVxcbiAgICAgICAgY29uc3QgciA9IHJhZGl1cyAqIE1hdGguY29zKChzdGVwICogTWF0aC5QSSAqIDAuNSkgLyB3aWR0aCkgKiAwLjVcXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxcbiAgICAgICAgY29uc3QgeSA9IHN0ZXAgKiAwLjNcXG4gICAgICAgIGNvbnN0IHogPSByICogTWF0aC5zaW4oYW5nKVxcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyAod2lkdGggLSAxKSlcXG4gICAgICAgIG5vZGVzMi5wdXNoKFt4LCB5LCB6LCB0aGlja25lc3NdKVxcbiAgICB9XFxuICAgIG5vZGVzMi5wdXNoKFswLCAxMDAwLCAwLCAwXSlcXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBub2RlczIubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHV2MDogQXJyYXlOdW1iZXIyID0gWyhpIC0gMC41KSAvIChub2RlczIubGVuZ3RoICsgMSksIDBdXFxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxcbiAgICAgICAgZGF0YTIuYWRkKG5vZGVzMltpIC0gMV0sIG5vZGVzMltpXSwgdXYwLCB1djEpXFxuICAgIH1cXG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG4gICAgICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjZjQ0XFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiIzRmNFxcXCIsIFxcXCIjNGZmXFxcIiwgXFxcIiM0NGZcXFwiXSksXFxuICAgIClcXG4gICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhMS5tYWtlRGF0YXNldCwgZGF0YTIubWFrZURhdGFzZXRdXSxcXG4gICAgICAgIHJvdW5kbmVzczogNjQsXFxuICAgICAgICBtaW5SYWRpdXM6IDIsXFxuICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiAxLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLFxcbiAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbc2VnbWVudHNdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgc3RhdGUsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIHNlZ21lbnRzLm1peCA9IE1hdGguYWJzKE1hdGguc2luKHRpbWUpKVxcbiAgICAgICAgICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4zMTU0ODEpXFxuICAgICAgICAgICAgc2VnbWVudHMudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsdGEgKiAwLjIpXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4gKHsgcmFkaXVzTXVsdGlwbGllciB9OiB7IHJhZGl1c011bHRpcGxpZXI6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBzZWdtZW50cy5yYWRpdXNNdWx0aXBsaWVyID0gcmFkaXVzTXVsdGlwbGllclxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgcmFkaXVzTXVsdGlwbGllcjoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJyYWRpdXNNdWx0aXBsaWVyXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLjEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDMsXFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjEsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjIsXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA3NVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgIG1heFpvb206IDEwLFxuICAgICAgICBtaW5ab29tOiAwLjAxLFxuICAgICAgICBzcGVlZFpvb206IDEsXG4gICAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHJhZGl1cyA9IDEwXG4gICAgY29uc3Qgd2lkdGggPSA1MFxuICAgIGNvbnN0IGRhdGExID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IG5vZGVzMTogQXJyYXlOdW1iZXI0W10gPSBbWzAsIC0xMDAwLCAwLCAwXV1cbiAgICBmb3IgKGxldCBzdGVwID0gLXdpZHRoOyBzdGVwIDwgd2lkdGg7IHN0ZXArKykge1xuICAgICAgICBjb25zdCBhbmcgPSBzdGVwICogMC41XG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpXG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuMlxuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyB3aWR0aClcbiAgICAgICAgbm9kZXMxLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXG4gICAgfVxuICAgIG5vZGVzMS5wdXNoKFswLCAxMDAwLCAwLCAwXSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMxLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBkYXRhMS5hZGQobm9kZXMxW2kgLSAxXSwgbm9kZXMxW2ldLCB1djAsIHV2MSlcbiAgICB9XG4gICAgY29uc3QgZGF0YTIgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgY29uc3Qgbm9kZXMyOiBBcnJheU51bWJlcjRbXSA9IFtbMCwgLTEwMDAsIDAsIDBdXVxuICAgIGZvciAobGV0IHN0ZXAgPSAtd2lkdGg7IHN0ZXAgPCB3aWR0aDsgc3RlcCsrKSB7XG4gICAgICAgIGNvbnN0IGFuZyA9IHN0ZXAgKiAwLjI1XG4gICAgICAgIGNvbnN0IHIgPSByYWRpdXMgKiBNYXRoLmNvcygoc3RlcCAqIE1hdGguUEkgKiAwLjUpIC8gd2lkdGgpICogMC41XG4gICAgICAgIGNvbnN0IHggPSByICogTWF0aC5jb3MoYW5nKVxuICAgICAgICBjb25zdCB5ID0gc3RlcCAqIDAuM1xuICAgICAgICBjb25zdCB6ID0gciAqIE1hdGguc2luKGFuZylcbiAgICAgICAgY29uc3QgdGhpY2tuZXNzID0gTWF0aC5tYXgoMCwgMS4wIC0gTWF0aC5hYnMoc3RlcCkgLyAod2lkdGggLSAxKSlcbiAgICAgICAgbm9kZXMyLnB1c2goW3gsIHksIHosIHRoaWNrbmVzc10pXG4gICAgfVxuICAgIG5vZGVzMi5wdXNoKFswLCAxMDAwLCAwLCAwXSlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5vZGVzMi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1djA6IEFycmF5TnVtYmVyMiA9IFsoaSAtIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBjb25zdCB1djE6IEFycmF5TnVtYmVyMiA9IFsoaSArIDAuNSkgLyAobm9kZXMyLmxlbmd0aCArIDEpLCAwXVxuICAgICAgICBkYXRhMi5hZGQobm9kZXMyW2kgLSAxXSwgbm9kZXMyW2ldLCB1djAsIHV2MSlcbiAgICB9XG4gICAgY29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjQ0XCIsIFwiI2ZmNFwiLCBcIiM0ZjRcIiwgXCIjNGZmXCIsIFwiIzQ0ZlwiXSksXG4gICAgKVxuICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhMS5tYWtlRGF0YXNldCwgZGF0YTIubWFrZURhdGFzZXRdXSxcbiAgICAgICAgcm91bmRuZXNzOiA2NCxcbiAgICAgICAgbWluUmFkaXVzOiAyLFxuICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiAxLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICBjb2xvcjogcGFsZXR0ZSxcbiAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW3NlZ21lbnRzXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBzZWdtZW50cy5taXggPSBNYXRoLmFicyhNYXRoLnNpbih0aW1lKSlcbiAgICAgICAgICAgIHNlZ21lbnRzLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4zMTU0ODEpXG4gICAgICAgICAgICBzZWdtZW50cy50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWx0YSAqIDAuMilcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgcmV0dXJuICh7IHJhZGl1c011bHRpcGxpZXIgfTogeyByYWRpdXNNdWx0aXBsaWVyOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBzZWdtZW50cy5yYWRpdXNNdWx0aXBsaWVyID0gcmFkaXVzTXVsdGlwbGllclxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICByYWRpdXNNdWx0aXBsaWVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInJhZGl1c011bHRpcGxpZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMC4xLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDMsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUNuQjtBQUVsQyxNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxxNkZBQXE2RixFQUFDO0FBQ2o4RixNQUFNLElBQUksR0FBRyxtMUhBQW0xSDtBQUVqMUgsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLDBDQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FDckMsR0FDWCxFQUNOLDJDQUFDLHVEQUFVLElBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBSSxJQUN2RCxJQUNQO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1ZzQjtBQUNpQjtBQUV4QyxTQUFTLElBQUksQ0FBQyxPQUFtQjtJQUU3QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNwQyxJQUFJLHdEQUF3QixDQUFDLE9BQU8sRUFBRTtRQUNsQyxZQUFZLEVBQUUsSUFBSTtRQUNsQixPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxJQUFJO1FBQ2IsU0FBUyxFQUFFLENBQUM7S0FDZixDQUFDO0lBQ0YsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLE9BQU8sRUFBRTtRQUN2QyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDO0lBQ0YsTUFBTSxNQUFNLEdBQUcsRUFBRTtJQUNqQixNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2hCLE1BQU0sS0FBSyxHQUFHLElBQUksc0RBQXNCLEVBQUU7SUFDMUMsTUFBTSxNQUFNLEdBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzNDLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRztRQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckMsTUFBTSxHQUFHLEdBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxNQUFNLEdBQUcsR0FBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxzREFBc0IsRUFBRTtJQUMxQyxNQUFNLE1BQU0sR0FBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUk7UUFDdkIsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHO1FBQ2pFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRztRQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNyQyxNQUFNLEdBQUcsR0FBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELE1BQU0sR0FBRyxHQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ2pELENBQUM7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