"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_neuron-test_page_mdx-src_components_demo_Tgd_tgd_module_css-src_-db7b0e"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
77749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(62535);





const FOCUS = { "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(\",\"))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}" };
const FULL = "// import NegX from \"@/assets/cubemap/sky/negX.webp\"\n// import NegY from \"@/assets/cubemap/sky/negY.webp\"\n// import NegZ from \"@/assets/cubemap/sky/negZ.webp\"\n// import PosX from \"@/assets/cubemap/sky/posX.webp\"\n// import PosY from \"@/assets/cubemap/sky/posY.webp\"\n// import PosZ from \"@/assets/cubemap/sky/posZ.webp\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport {\n    type ArrayNumber4,\n    TgdBoundingBox,\n    tgdCalcMapRange,\n    tgdColorMakeHueWheel,\n    type TgdContext,\n    TgdDataset,\n    TgdGeometry,\n    tgdLoadArrayBuffer,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLOD,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdVec3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport { OctreeInfo } from \"./info\"\n\nconst MAX_ZOOM = 12\n\nfunction init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(\",\"))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            disableDefaultDoubleTap\n            onReady={init}\n            gizmo\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                speedZoom: 0,\n            }}\n            settings={{\n                zoom: {\n                    label: \"Zoom\",\n                    value: 1,\n                    min: 1,\n                    max: MAX_ZOOM,\n                },\n            }}\n        />\n    )\n}\n\nfunction toBin(value: number, level: number): string {\n    return value.toString(2).padStart(level, \"0\")\n}\n\nasync function loadGeometry(\n    x: number,\n    y: number,\n    z: number,\n    level: number,\n    availableFiles: Set<string>,\n): Promise<TgdGeometry | null> {\n    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`\n    if (!availableFiles.has(id)) return null\n\n    const url = level === 0 ? \"./assets/neuron/02/0.bin\" : `./assets/neuron/02/${id}.bin`\n    console.log(\"Loading LOD block:\", url)\n    const buffer = await tgdLoadArrayBuffer(url)\n    if (!buffer) throw new Error(`Unable to load ${url}!`)\n\n    console.debug(new Float32Array(buffer))\n    const data = buffer.slice(4)\n    const dataset = new TgdDataset(\n        {\n            POSITION: \"vec3\",\n            NORMAL: \"vec3\",\n        },\n        {\n            data,\n        },\n    )\n    const geometry = new TgdGeometry({\n        dataset,\n        attPosition: \"POSITION\",\n        attNormal: \"NORMAL\",\n    })\n    geometry.debug()\n    return geometry\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
15475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OctreeInfo: () => (OctreeInfo)
});
const OctreeInfo = {
    bbox: {
        min: [428.0160625, 938.967875, 842.6400625],
        max: [570.432, 1050.552125, 930.640125],
    },
    files: "000000101,000110101,100010011,000000100,000111,011010011,011011,100010010,111010001,011010,110100100,101100100,110101,110010001,0,011,111010,000001100,010010011,010100101,001110101,010100110,001010110,100101,010101110,100100100,001100101,001101101,011011100,001010101,110010010,110100,001110,101010010,111010010,110011011,010011100,000011101,101010,010101,001001101,001010,111001,110100011,001,010011101,011100100,010011011,001011110,010010100,010110,000011110,011011101,111,000110,000010,000111101,110,000001101,001011100,100,001011101,000,101010011",
};


},
62535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(18712);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _info__rspack_import_3 = __webpack_require__(15475);




const MAX_ZOOM = 12;
function init(context, assets) {
    const COLORS = (0,_tolokoban_tgd__rspack_import_2.tgdColorMakeHueWheel)({
        steps: 6,
    }).map((color) => [color.R, color.G, color.B, 1]);
    const materials = [0, 1, 2, 3, 4, 5].map((level) => new _tolokoban_tgd__rspack_import_2.TgdMaterialDiffuse({
        color: COLORS[level],
        lockLightsToCamera: true,
    }));
    const clear = new _tolokoban_tgd__rspack_import_2.TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });
    const bbox = new _tolokoban_tgd__rspack_import_2.TgdBoundingBox(_info__rspack_import_3.OctreeInfo.bbox.min, _info__rspack_import_3.OctreeInfo.bbox.max).makeContainingCube();
    bbox.debug();
    const vecMin = new _tolokoban_tgd__rspack_import_2.TgdVec3(bbox.min);
    const vecMax = new _tolokoban_tgd__rspack_import_2.TgdVec3(bbox.max);
    const vecDim = new _tolokoban_tgd__rspack_import_2.TgdVec3(vecMax).subtract(vecMin);
    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z);
    const center = new _tolokoban_tgd__rspack_import_2.TgdVec3(vecMax).add(vecMin).scale(0.5);
    const { camera } = context;
    camera.transfo.position = center;
    camera.near = 1;
    camera.far = radius * 1;
    camera.fitSpaceAtTarget(radius, radius);
    const availableFiles = new Set(_info__rspack_import_3.OctreeInfo.files.split(","));
    const lod = new _tolokoban_tgd__rspack_import_2.TgdPainterLOD(context, {
        bbox,
        async factory(x, y, z, level) {
            const geometry = await loadGeometry(x, y, z, level, availableFiles);
            if (!geometry)
                return null;
            return new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context, {
                geometry,
                material: new _tolokoban_tgd__rspack_import_2.TgdMaterialDiffuse({
                    color: [Math.random(), Math.random(), Math.random(), 1],
                    lockLightsToCamera: true,
                }),
            });
        },
        subdivisions: 4,
        surfaceThreshold: 1,
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        children: [lod],
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less,
    }));
    context.paint();
    return (settings) => {
        const { camera } = context;
        camera.transfo.distance = (0,_tolokoban_tgd__rspack_import_2.tgdCalcMapRange)(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM);
        camera.near = Math.max(1, camera.transfo.distance - radius);
        camera.far = camera.transfo.distance + radius;
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_1["default"], { disableDefaultDoubleTap: true, onReady: init, gizmo: true, controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            speedZoom: 0,
        }, settings: {
            zoom: {
                label: "Zoom",
                value: 1,
                min: 1,
                max: MAX_ZOOM,
            },
        } }));
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
async function loadGeometry(x, y, z, level, availableFiles) {
    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`;
    if (!availableFiles.has(id))
        return null;
    const url = level === 0 ? "./assets/neuron/02/0.bin" : `./assets/neuron/02/${id}.bin`;
    console.log("Loading LOD block:", url);
    const buffer = await (0,_tolokoban_tgd__rspack_import_2.tgdLoadArrayBuffer)(url);
    if (!buffer)
        throw new Error(`Unable to load ${url}!`);
    console.debug(new Float32Array(buffer));
    const data = buffer.slice(4);
    const dataset = new _tolokoban_tgd__rspack_import_2.TgdDataset({
        POSITION: "vec3",
        NORMAL: "vec3",
    }, {
        data,
    });
    const geometry = new _tolokoban_tgd__rspack_import_2.TgdGeometry({
        dataset,
        attPosition: "POSITION",
        attNormal: "NORMAL",
    });
    geometry.debug();
    return geometry;
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
50225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(77749);
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
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterLOD.html",
                        children: "TgdPainterLOD"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (neuron test)"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uLXRlc3RfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjXy1kYjdiMGUuODYxNDc4MTIxYmU1Y2IyMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5mby50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDYsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXFxuICAgIGJib3guZGVidWcoKVxcbiAgICBjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuICAgIGNvbnN0IHZlY0RpbSA9IG5ldyBUZ2RWZWMzKHZlY01heCkuc3VidHJhY3QodmVjTWluKVxcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG4gICAgY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNhbWVyYS5mYXIgPSByYWRpdXMgKiAxXFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKVxcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFxcXCIsXFxcIikpXFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeTogVGdkR2VvbWV0cnkgfCBudWxsID0gYXdhaXQgbG9hZEdlb21ldHJ5KHgsIHksIHosIGxldmVsLCBhdmFpbGFibGVGaWxlcylcXG4gICAgICAgICAgICBpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxXSxcXG4gICAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSksIC8vIG1hdGVyaWFsc1tsZXZlbF0sIC8vIG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDQsXFxuICAgICAgICBzdXJmYWNlVGhyZXNob2xkOiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2RdLFxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgLy8gY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKHNldHRpbmdzLnpvb20sIDEsIE1BWF9aT09NLCByYWRpdXMgKiAzLCAocmFkaXVzICogMykgLyBNQVhfWk9PTSlcXG4gICAgICAgIGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXFxuICAgICAgICBjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcIi8vIGltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1gud2VicFxcXCJcXG4vLyBpbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcXFwiXFxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXFxcIlxcbi8vIGltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1gud2VicFxcXCJcXG4vLyBpbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcXFwiXFxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RCb3VuZGluZ0JveCxcXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RHZW9tZXRyeSxcXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxPRCxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVmVjMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFxcXCIuL2luZm9cXFwiXFxuXFxuY29uc3QgTUFYX1pPT00gPSAxMlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG4gICAgICAgIHN0ZXBzOiA2LFxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcbiAgICAgICAgKGxldmVsKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG4gICAgY29uc3QgYmJveCA9IG5ldyBUZ2RCb3VuZGluZ0JveChPY3RyZWVJbmZvLmJib3gubWluLCBPY3RyZWVJbmZvLmJib3gubWF4KS5tYWtlQ29udGFpbmluZ0N1YmUoKVxcbiAgICBiYm94LmRlYnVnKClcXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXFxuICAgIGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KVxcbiAgICBjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcXG4gICAgY29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpXFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXFxuICAgIGNhbWVyYS5uZWFyID0gMVxcbiAgICBjYW1lcmEuZmFyID0gcmFkaXVzICogMVxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldChyYWRpdXMsIHJhZGl1cylcXG4gICAgY29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcXFwiLFxcXCIpKVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IFRnZEdlb21ldHJ5IHwgbnVsbCA9IGF3YWl0IGxvYWRHZW9tZXRyeSh4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXFxuICAgICAgICAgICAgaWYgKCFnZW9tZXRyeSkgcmV0dXJuIG51bGxcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMV0sXFxuICAgICAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0pLCAvLyBtYXRlcmlhbHNbbGV2ZWxdLCAvLyBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA0LFxcbiAgICAgICAgc3VyZmFjZVRocmVzaG9sZDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIC8vIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShzZXR0aW5ncy56b29tLCAxLCBNQVhfWk9PTSwgcmFkaXVzICogMywgKHJhZGl1cyAqIDMpIC8gTUFYX1pPT00pXFxuICAgICAgICBjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKVxcbiAgICAgICAgY2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICB6b29tOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIlpvb21cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFxcXCIwXFxcIilcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdlb21ldHJ5KFxcbiAgICB4OiBudW1iZXIsXFxuICAgIHk6IG51bWJlcixcXG4gICAgejogbnVtYmVyLFxcbiAgICBsZXZlbDogbnVtYmVyLFxcbiAgICBhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXFxuKTogUHJvbWlzZTxUZ2RHZW9tZXRyeSB8IG51bGw+IHtcXG4gICAgY29uc3QgaWQgPSBgJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9YFxcbiAgICBpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsXFxuXFxuICAgIGNvbnN0IHVybCA9IGxldmVsID09PSAwID8gXFxcIi4vYXNzZXRzL25ldXJvbi8wMi8wLmJpblxcXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAyLyR7aWR9LmJpbmBcXG4gICAgY29uc29sZS5sb2coXFxcIkxvYWRpbmcgTE9EIGJsb2NrOlxcXCIsIHVybClcXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcXG4gICAgaWYgKCFidWZmZXIpIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgJHt1cmx9IWApXFxuXFxuICAgIGNvbnNvbGUuZGVidWcobmV3IEZsb2F0MzJBcnJheShidWZmZXIpKVxcbiAgICBjb25zdCBkYXRhID0gYnVmZmVyLnNsaWNlKDQpXFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldChcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBQT1NJVElPTjogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgIE5PUk1BTDogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBkYXRhLFxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeSh7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgYXR0UG9zaXRpb246IFxcXCJQT1NJVElPTlxcXCIsXFxuICAgICAgICBhdHROb3JtYWw6IFxcXCJOT1JNQUxcXFwiLFxcbiAgICB9KVxcbiAgICBnZW9tZXRyeS5kZWJ1ZygpXFxuICAgIHJldHVybiBnZW9tZXRyeVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNvbnN0IE9jdHJlZUluZm86IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogQXJyYXlOdW1iZXIzXG4gICAgICAgIG1heDogQXJyYXlOdW1iZXIzXG4gICAgfVxuICAgIGZpbGVzOiBzdHJpbmdcbn0gPSB7XG4gICAgYmJveDoge1xuICAgICAgICBtaW46IFs0MjguMDE2MDYyNSwgOTM4Ljk2Nzg3NSwgODQyLjY0MDA2MjVdLFxuICAgICAgICBtYXg6IFs1NzAuNDMyLCAxMDUwLjU1MjEyNSwgOTMwLjY0MDEyNV0sXG4gICAgfSxcbiAgICBmaWxlczogXCIwMDAwMDAxMDEsMDAwMTEwMTAxLDEwMDAxMDAxMSwwMDAwMDAxMDAsMDAwMTExLDAxMTAxMDAxMSwwMTEwMTEsMTAwMDEwMDEwLDExMTAxMDAwMSwwMTEwMTAsMTEwMTAwMTAwLDEwMTEwMDEwMCwxMTAxMDEsMTEwMDEwMDAxLDAsMDExLDExMTAxMCwwMDAwMDExMDAsMDEwMDEwMDExLDAxMDEwMDEwMSwwMDExMTAxMDEsMDEwMTAwMTEwLDAwMTAxMDExMCwxMDAxMDEsMDEwMTAxMTEwLDEwMDEwMDEwMCwwMDExMDAxMDEsMDAxMTAxMTAxLDAxMTAxMTEwMCwwMDEwMTAxMDEsMTEwMDEwMDEwLDExMDEwMCwwMDExMTAsMTAxMDEwMDEwLDExMTAxMDAxMCwxMTAwMTEwMTEsMDEwMDExMTAwLDAwMDAxMTEwMSwxMDEwMTAsMDEwMTAxLDAwMTAwMTEwMSwwMDEwMTAsMTExMDAxLDExMDEwMDAxMSwwMDEsMDEwMDExMTAxLDAxMTEwMDEwMCwwMTAwMTEwMTEsMDAxMDExMTEwLDAxMDAxMDEwMCwwMTAxMTAsMDAwMDExMTEwLDAxMTAxMTEwMSwxMTEsMDAwMTEwLDAwMDAxMCwwMDAxMTExMDEsMTEwLDAwMDAwMTEwMSwwMDEwMTExMDAsMTAwLDAwMTAxMTEwMSwwMDAsMTAxMDEwMDExXCIsXG59XG4iLCIvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1oud2VicFwiXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1oud2VicFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RCb3VuZGluZ0JveCxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXG4gICAgdGdkQ29sb3JNYWtlSHVlV2hlZWwsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkR2VvbWV0cnksXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxPRCxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVmVjMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgT2N0cmVlSW5mbyB9IGZyb20gXCIuL2luZm9cIlxuXG5jb25zdCBNQVhfWk9PTSA9IDEyXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XG4gICAgICAgIHN0ZXBzOiA2LFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcbiAgICAgICAgKGxldmVsKSA9PlxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXG4gICAgYmJveC5kZWJ1ZygpXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgIGNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXG4gICAgY2FtZXJhLm5lYXIgPSAxXG4gICAgY2FtZXJhLmZhciA9IHJhZGl1cyAqIDFcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldChyYWRpdXMsIHJhZGl1cylcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFwiLFwiKSlcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IFRnZEdlb21ldHJ5IHwgbnVsbCA9IGF3YWl0IGxvYWRHZW9tZXRyeSh4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXG4gICAgICAgICAgICBpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMV0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSwgLy8gbWF0ZXJpYWxzW2xldmVsXSwgLy8gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHN1YmRpdmlzaW9uczogNCxcbiAgICAgICAgc3VyZmFjZVRocmVzaG9sZDogMSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZF0sXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgLy8gY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICByZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKHNldHRpbmdzLnpvb20sIDEsIE1BWF9aT09NLCByYWRpdXMgKiAzLCAocmFkaXVzICogMykgLyBNQVhfWk9PTSlcbiAgICAgICAgY2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcbiAgICAgICAgY2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIilcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdlb21ldHJ5KFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgejogbnVtYmVyLFxuICAgIGxldmVsOiBudW1iZXIsXG4gICAgYXZhaWxhYmxlRmlsZXM6IFNldDxzdHJpbmc+LFxuKTogUHJvbWlzZTxUZ2RHZW9tZXRyeSB8IG51bGw+IHtcbiAgICBjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXG4gICAgaWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdXJsID0gbGV2ZWwgPT09IDAgPyBcIi4vYXNzZXRzL25ldXJvbi8wMi8wLmJpblwiIDogYC4vYXNzZXRzL25ldXJvbi8wMi8ke2lkfS5iaW5gXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRnZExvYWRBcnJheUJ1ZmZlcih1cmwpXG4gICAgaWYgKCFidWZmZXIpIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgJHt1cmx9IWApXG5cbiAgICBjb25zb2xlLmRlYnVnKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSlcbiAgICBjb25zdCBkYXRhID0gYnVmZmVyLnNsaWNlKDQpXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxuICAgICAgICB7XG4gICAgICAgICAgICBQT1NJVElPTjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICBOT1JNQUw6IFwidmVjM1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICB9LFxuICAgIClcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeSh7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGF0dFBvc2l0aW9uOiBcIlBPU0lUSU9OXCIsXG4gICAgICAgIGF0dE5vcm1hbDogXCJOT1JNQUxcIixcbiAgICB9KVxuICAgIGdlb21ldHJ5LmRlYnVnKClcbiAgICByZXR1cm4gZ2VvbWV0cnlcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLE1BQU0sS0FBSyxHQUFHLEVBQUMsV0FBVyxFQUFDLDIwRUFBMjBFLEVBQUM7QUFDdjJFLE1BQU0sSUFBSSxHQUFHLDB0SkFBMHRKO0FBRXh0SixTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMsc0NBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1A7QUFDUCxDQUFDOzs7Ozs7Ozs7QUN0Qk0sTUFBTSxVQUFVLEdBTW5CO0lBQ0EsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUM7UUFDM0MsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7S0FDMUM7SUFDRCxLQUFLLEVBQUUsd2lCQUF3aUI7Q0FDbGpCOzs7Ozs7Ozs7Ozs7OztBQ1J3RDtBQWlCbEM7QUFDWTtBQUVuQyxNQUFNLFFBQVEsR0FBRyxFQUFFO0FBR25CLFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUM3QyxNQUFNLE1BQU0sR0FBbUIsd0RBQW9CLENBQUM7UUFDaEQsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBaUIsQ0FBQztJQUNqRSxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUNwQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ04sSUFBSSxrREFBa0IsQ0FBQztRQUNuQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQixrQkFBa0IsRUFBRSxJQUFJO0tBQzNCLENBQUMsQ0FDVDtJQUNELE1BQU0sS0FBSyxHQUFHLElBQUksK0NBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pFLE1BQU0sSUFBSSxHQUFHLElBQUksOENBQWMsQ0FBQywwQ0FBbUIsRUFBRSwwQ0FBbUIsQ0FBQyxDQUFDLGtCQUFrQixFQUFFO0lBQzlGLElBQUksQ0FBQyxLQUFLLEVBQUU7SUFDWixNQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNuRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLElBQUksdUNBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNmLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUM7SUFDdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7SUFDdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQVMsNkNBQXNCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsTUFBTSxHQUFHLEdBQUcsSUFBSSw2Q0FBYSxDQUFDLE9BQU8sRUFBRTtRQUNuQyxJQUFJO1FBQ0osS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhO1lBQ3hELE1BQU0sUUFBUSxHQUF1QixNQUFNLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxRQUFRO2dCQUFFLE9BQU8sSUFBSTtZQUUxQixPQUFPLElBQUksOENBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQy9CLFFBQVE7Z0JBQ1IsUUFBUSxFQUFFLElBQUksa0RBQWtCLENBQUM7b0JBQzdCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDdkQsa0JBQWtCLEVBQUUsSUFBSTtpQkFDM0IsQ0FBQzthQUNMLENBQUM7UUFDTixDQUFDO1FBQ0QsWUFBWSxFQUFFLENBQUM7UUFDZixnQkFBZ0IsRUFBRSxDQUFDO0tBQ3RCLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUNQLEtBQUssRUFDTCxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1FBQ3pCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNmLEtBQUssRUFBRSxxREFBcUI7S0FFL0IsQ0FBQyxDQUNMO0lBQ0QsT0FBTyxDQUFDLEtBQUssRUFBRTtJQUNmLE9BQU8sQ0FBQyxRQUEwQixFQUFFLEVBQUU7UUFDbEMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU87UUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsbURBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDMUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDM0QsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNO0lBQ2pELENBQUM7QUFDTCxDQUFDO0FBR2MsU0FBUyxJQUFJO0lBQ3hCLE9BQU8sQ0FDSCwyQ0FBQyxnREFBSSxJQUNELHVCQUF1QixRQUN2QixPQUFPLEVBQUUsSUFBSSxFQUNiLEtBQUssUUFDTCxVQUFVLEVBQUU7WUFDUixZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixTQUFTLEVBQUUsQ0FBQztTQUNmLEVBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxRQUFRO2FBQ2hCO1NBQ0osR0FDSCxDQUNMO0FBQ0wsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ3ZDLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUNqRCxDQUFDO0FBRUQsS0FBSyxVQUFVLFlBQVksQ0FDdkIsQ0FBUyxFQUNULENBQVMsRUFDVCxDQUFTLEVBQ1QsS0FBYSxFQUNiLGNBQTJCO0lBRTNCLE1BQU0sRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7SUFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQUUsT0FBTyxJQUFJO0lBRXhDLE1BQU0sR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNO0lBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sc0RBQWtCLENBQUMsR0FBRyxDQUFDO0lBQzVDLElBQUksQ0FBQyxNQUFNO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7SUFFdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFJLDBDQUFVLENBQzFCO1FBQ0ksUUFBUSxFQUFFLE1BQU07UUFDaEIsTUFBTSxFQUFFLE1BQU07S0FDakIsRUFDRDtRQUNJLElBQUk7S0FDUCxDQUNKO0lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSwyQ0FBVyxDQUFDO1FBQzdCLE9BQU87UUFDUCxXQUFXLEVBQUUsVUFBVTtRQUN2QixTQUFTLEVBQUUsUUFBUTtLQUN0QixDQUFDO0lBQ0YsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNoQixPQUFPLFFBQVE7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySjBCO0FBQ0c7QUFFYTtBQUNNO0FBU2xDLFNBQVMsY0FBYyxDQUFDLEtBQTBCO0lBQzdELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQThCO1lBQzNDLEdBQUcsS0FBSztZQUNSLEtBQUs7U0FDUjtRQUNELE9BQU8sMkNBQUMsb0JBQW9CLE9BQUssV0FBVyxHQUFJO0lBQ3BELENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBNkI7UUFDekMsR0FBRyxLQUFLO1FBQ1IsS0FBSztLQUNSO0lBQ0QsT0FBTywyQ0FBQyxtQkFBbUIsT0FBSyxVQUFVLEdBQUk7QUFDbEQsQ0FBQztBQU1ELFNBQVMsb0JBQW9CLENBQUMsS0FBZ0M7SUFDMUQsTUFBTSxVQUFVLEdBQUcsNkJBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyw2QkFBWSxDQUFxQixJQUFJLENBQUM7SUFDdEQsZ0NBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTTtZQUVqQixNQUFNLElBQUksR0FBRyw0Q0FBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1FBQzNCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDdkUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPLENBQ0gscURBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQ2hGLDhEQUNJLHFEQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFJLEdBQzdELEVBQ0wsS0FBSyxJQUFJLENBQ04sdURBQVEsU0FBUyxFQUFFLHdEQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxRQUFRLFlBQ3BFLDhHQUFzRCxHQUNqRCxDQUNaLElBQ0MsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjtJQUM3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLDZEQUFnQixDQUFDO0lBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMvQixDQUFDO0FBTUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUErQjtJQUN4RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUNILG9HQUNLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM5Qix5REFBdUIsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFDNUMsa0VBQVUsT0FBTyxHQUFXLEVBQzVCLDJDQUFDLG9CQUFvQixJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJLEtBRnJFLE9BQU8sQ0FHWCxDQUNiLENBQUMsR0FDSCxDQUNOO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCO0FBQ2lCO0FBQ1A7QUFDTztBQUNQO0FBQ0Y7QUFDRztBQUUvQixTQUFTLHFCQUFxQixDQUFDLFFBQWdCO0lBQ2xELFFBQVEsUUFBUSxFQUFFLENBQUM7UUFDZixLQUFLLElBQUk7WUFDTCxPQUFPLHlEQUEwQjtRQUNyQyxLQUFLLEtBQUs7WUFDTixPQUFPLGtEQUFtQjtRQUM5QixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssTUFBTTtZQUNQLE9BQU8sbURBQW9CO1FBQy9CO1lBQ0ksT0FBTyxJQUFJO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0NBQ1Q7QUFFRCxNQUFNLFFBQVEsR0FBRztJQUNiLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLElBQUk7SUFDSixJQUFJO0lBQ0osT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87SUFDUCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBRVQsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLE9BQU87SUFDUCxVQUFVO0NBQ2I7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVELE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLE1BQU07SUFDTixNQUFNO0lBQ04sVUFBVTtJQUNWLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsS0FBSztJQUNMLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVELE1BQU0sSUFBSSxHQUFrQjtJQUN4QixPQUFPLEVBQUU7UUFDTDtZQUNJLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEO1lBQ0ksT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQ0gsMk5BQTJOO1FBQy9OLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUM5QixPQUFPLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbEMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztDQUN6QztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBZTtJQUN0QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNmO0FBQ0wsQ0FBQzs7Ozs7Ozs7OztBQ25WcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7Ozs7Ozs7Ozs7Ozs7a0NBRWQ7Ozs7OztvQkFBK0M7aUJBQUE7Ozs7Ozs7OzBCQUUvQzs7Ozs7Ozs7MEJBRUgifQ==