"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_neuron_page_mdx-src_components_demo_Tgd_tgd_module_css-src_compo-181255"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
646(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(99444);





const FOCUS = {
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t)\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst { bbox } = OctreeInfo\n\tconst vecMin = new TgdVec3(bbox.min)\n\tconst vecMax = new TgdVec3(bbox.max)\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin)\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n\tcontext.camera.transfo.position = center\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3\n\tcontext.camera.near = 1\n\tcontext.camera.far = vecDim.z * 6\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(","))\n\tcontext.camera.debug()\n\tconsole.log("🐞 [main.demo@55] OctreeInfo =", OctreeInfo) // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t)\n\t\t\tif (!asset) return null\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t})\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t)\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius)\n\t\tcamera.far = camera.transfo.distance + radius\n\t\tconsole.log("🐞 [main.demo@126] camera =", camera.near, camera.far) // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t}\n}',
};
const FULL = '// import NegX from "@/assets/cubemap/sky/negX.webp"\n// import NegY from "@/assets/cubemap/sky/negY.webp"\n// import NegZ from "@/assets/cubemap/sky/negZ.webp"\n// import PosX from "@/assets/cubemap/sky/posX.webp"\n// import PosY from "@/assets/cubemap/sky/posY.webp"\n// import PosZ from "@/assets/cubemap/sky/posZ.webp"\n\nimport {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\ttype TgdDataGlb,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterLOD,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdVec3,\n\ttgdCalcMapRange,\n\ttgdColorMakeHueWheel,\n\ttgdLoadGlb,\n\twebglPresetCull,\n\twebglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport { OctreeInfo } from "./info"\n\nconst MAX_ZOOM = 15\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t)\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst { bbox } = OctreeInfo\n\tconst vecMin = new TgdVec3(bbox.min)\n\tconst vecMax = new TgdVec3(bbox.max)\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin)\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n\tcontext.camera.transfo.position = center\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3\n\tcontext.camera.near = 1\n\tcontext.camera.far = vecDim.z * 6\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(","))\n\tcontext.camera.debug()\n\tconsole.log("🐞 [main.demo@55] OctreeInfo =", OctreeInfo) // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t)\n\t\t\tif (!asset) return null\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t})\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t)\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius)\n\t\tcamera.far = camera.transfo.distance + radius\n\t\tconsole.log("🐞 [main.demo@126] camera =", camera.near, camera.far) // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tdisableDefaultDoubleTap\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\tinertiaZoom: 1000,\n\t\t\t\tspeedZoom: 0,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tzoom: {\n\t\t\t\t\tlabel: "Zoom",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: MAX_ZOOM,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction toBin(value: number, level: number): string {\n\treturn value.toString(2).padStart(level, "0")\n}\n\nasync function loadGLB(\n\tx: number,\n\ty: number,\n\tz: number,\n\tlevel: number,\n\tavailableFiles: Set<string>,\n): Promise<TgdDataGlb | null> {\n\tconst id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`\n\tif (!availableFiles.has(id)) return null\n\n\tconst url =\n\t\tlevel === 0\n\t\t\t? "./assets/neuron/01/Octree.glb"\n\t\t\t: `./assets/neuron/01/Octree${id}.glb`\n\tconsole.log("Loading LOD block:", url)\n\tconst asset = await tgdLoadGlb(url)\n\treturn asset\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
4148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OctreeInfo: () => (OctreeInfo)
});
const OctreeInfo = {
    bbox: {
        min: [-338015.09765625, -139157.734375, -276052.28125],
        max: [159796.88671875, 358654.25, 221759.703125],
    },
    files: "100000111000,100010011,100010111011,010,101000101011,100100001010,011111101000,100111001010,101001101000,101011001001,100100100011,010000100,101100111000,101100100111,101,101100101001,101000101010,101000100110,110000100111,100100100110,101010011001,101010011,011100101000,101101111000,101100011010,101100101000,110001000111,011000011000,011,100001001001,101000111000,100100001011,011100001001,110000100,100000001011,110000011000,011111001100,011010,101100101010,010111001110,100101111001,011011001101,100001011010,010111101000,101011011,100001,101001000,100101001100,100011001001,100101001010,101100011001,101000100111,100101011000,011111011000,101100110101,100000110110,101110101001,101000110111,110001100,010000011,110010,100111001000,101001001001,100101001011,100101001000,011100101010,101001101010,011100101001,010000101,011011001110,110000110111,100100010111,011101101,100000010110,101000011011,101001101001,100101011100,101000100100,011000011010,100100100101,101101011001,110010100,100000,011000011,100100010101,101001011001,100101000111,110001001000,000,100100011010,110110,101101001010,101110001000,100000010111,010100001001,100111,101101110111,100110111010,100100100111,010100010110,011000001011,101101011010,101100111010,110101,101101101001,110000110101,101010101,110001010,011000010111,010011110111,010111100111,101000111010,101001001000,101000000,110000111000,110000111001,110001101000,011100011010,101001010111,101000101001,011000100,100100011001,011101,011001100,110000101010,101100001010,101011001000,101001001011,100101011011,110100100,101110011000,110001001010,100110100,101011100,100100101001,100110,010010,101100110111,100001010,111,100001011,011110101,100010,100000000110,100101101001,100100000111,110000100101,100010111010,101101100,100101010111,101000100001,110001011,101001100111,101110,101001011000,011000001010,110001100111,101000100101,010111100,110001001001,110001111000,111010,110000101000,100011101,110001101001,101000100010,010100010111,101001101,100101010110,100101101,110101001000,011000101000,011110111011,100001101,011011001100,100101101010,101010011000,100000011100,101001001010,100010010,100100010100,011011101000,101011101,101000010001,101100100,100000101001,101010100,100001100,010111011,100010110,101010110,100000011011,010011100111,011111001011,101101100111,110001010110,011001101,100100111000,001011110111,100001011001,101101000111,101101010111,100010100,101001011,110001010111,100101011001,101100110110,101000100,101010,110000100110,100010101,101001110111,101101001001,110011100,100001010111,101001010,100101101000,101101011000,110100110111,010110111,100000011,011110100,001111110111,100100110111,101000100011,100100011000,101001100,101001000111,100000111010,100101001001,110101001001,100100101000,110101000111,100000010,011100001010,100011011000,100001001000,101101010110,100001001,101111001001,110101011001,100101011010,100011,011110110,100001000111,100000100,101000110110,010001,100100010110,110000110110,100000110,101100010001,100011011001,101100100110,011111,100101010101,101110001001,100,101001001100,110010011,100000101,001101,101110100,100101,011000011001,101010101001,100000111001,011110111,100100100100,101110011001,011111100,011000101,101000111001,011110,110010101,101001001,101101111001,101001111000,110011011,001,100100011011,110001011001,101100111001,100111001001,110010001000,100110101,110001,101101101000,100100111001,100000110111,001111011,110001101,101000101,100011100,101101001000,010100001011,101010001001,011000001001,110001000110,110001011010,101001111001,110101011000,100100111010,101010111001,101010001000,101101000110,011100011001",
};


},
99444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _info__rspack_import_3 = __webpack_require__(4148);




const MAX_ZOOM = 15;
function init(context, assets) {
    const COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
        steps: 6,
    }).map((color) => [color.R, color.G, color.B, 1]);
    const materials = [0, 1, 2, 3, 4, 5].map((level) => new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: COLORS[level],
        lockLightsToCamera: true,
    }));
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });
    const { bbox } = _info__rspack_import_3.OctreeInfo;
    const vecMin = new _tolokoban_tgd__rspack_import_1.TgdVec3(bbox.min);
    const vecMax = new _tolokoban_tgd__rspack_import_1.TgdVec3(bbox.max);
    const vecDim = new _tolokoban_tgd__rspack_import_1.TgdVec3(vecMax).subtract(vecMin);
    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z);
    const center = new _tolokoban_tgd__rspack_import_1.TgdVec3(vecMax).add(vecMin).scale(0.5);
    context.camera.transfo.position = center;
    context.camera.transfo.distance = vecDim.z * 3;
    context.camera.near = 1;
    context.camera.far = vecDim.z * 6;
    const availableFiles = new Set(_info__rspack_import_3.OctreeInfo.files.split(","));
    context.camera.debug();
    console.log("🐞 [main.demo@55] OctreeInfo =", _info__rspack_import_3.OctreeInfo);
    const lod = new _tolokoban_tgd__rspack_import_1.TgdPainterLOD(context, {
        bbox,
        async factory(x, y, z, level) {
            const asset = await loadGLB(x, y, z, level, availableFiles);
            if (!asset)
                return null;
            return new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset,
                material: materials[level],
            });
        },
        subdivisions: 4,
        surfaceThreshold: 1,
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [lod],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
    }));
    context.paint();
    return (settings) => {
        const { camera } = context;
        camera.transfo.distance = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMapRange)(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM);
        camera.near = Math.max(1, camera.transfo.distance - radius);
        camera.far = camera.transfo.distance + radius;
        console.log("🐞 [main.demo@126] camera =", camera.near, camera.far);
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { disableDefaultDoubleTap: true, onReady: init, gizmo: true, controller: {
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
async function loadGLB(x, y, z, level, availableFiles) {
    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`;
    if (!availableFiles.has(id))
        return null;
    const url = level === 0 ? "./assets/neuron/01/Octree.glb" : `./assets/neuron/01/Octree${id}.glb`;
    console.log("Loading LOD block:", url);
    const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url);
    return asset;
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
25708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(646);
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (neuron)"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wby0xODEyNTUuNTgwNTdiZjczOTk4ZGEwYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24vXy9tYWluLmRlbW8vaW5mby50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICAnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDYsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG5cXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChsZXZlbCkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogQ09MT1JTW2xldmVsXSxcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG5cXHRjb25zdCB7IGJib3ggfSA9IE9jdHJlZUluZm9cXG5cXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG5cXHRjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG5cXHRjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG5cXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcblxcdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG5cXHQvLyBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApXFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHZlY0RpbS56ICogM1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gdmVjRGltLnogKiA2XFxuXFx0Y29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcIixcIikpXFxuXFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKVxcblxcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDU1XSBPY3RyZWVJbmZvID1cIiwgT2N0cmVlSW5mbykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXFxuXFx0XFx0XFx0XFx0eCxcXG5cXHRcXHRcXHRcXHR5LFxcblxcdFxcdFxcdFxcdHosXFxuXFx0XFx0XFx0XFx0bGV2ZWwsXFxuXFx0XFx0XFx0XFx0YXZhaWxhYmxlRmlsZXMsXFxuXFx0XFx0XFx0KVxcblxcdFxcdFxcdGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDQsXFxuXFx0XFx0c3VyZmFjZVRocmVzaG9sZDogMSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBbbG9kXSxcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRcXHRjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShcXG5cXHRcXHRcXHRzZXR0aW5ncy56b29tLFxcblxcdFxcdFxcdDEsXFxuXFx0XFx0XFx0TUFYX1pPT00sXFxuXFx0XFx0XFx0cmFkaXVzICogMyxcXG5cXHRcXHRcXHQocmFkaXVzICogMykgLyBNQVhfWk9PTSxcXG5cXHRcXHQpXFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG5cXHRcXHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG5cXHRcXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXFxuXFx0fVxcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJy8vIGltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdYLndlYnBcIlxcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxcbi8vIGltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdaLndlYnBcIlxcbi8vIGltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NYLndlYnBcIlxcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxcbi8vIGltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NaLndlYnBcIlxcblxcbmltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdHR5cGUgVGdkRGF0YUdsYixcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJMT0QsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RWZWMzLFxcblxcdHRnZENhbGNNYXBSYW5nZSxcXG5cXHR0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG5cXHR0Z2RMb2FkR2xiLFxcblxcdHdlYmdsUHJlc2V0Q3VsbCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFwiLi9pbmZvXCJcXG5cXG5jb25zdCBNQVhfWk9PTSA9IDE1XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDYsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG5cXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChsZXZlbCkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogQ09MT1JTW2xldmVsXSxcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG5cXHRjb25zdCB7IGJib3ggfSA9IE9jdHJlZUluZm9cXG5cXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG5cXHRjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG5cXHRjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG5cXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcblxcdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG5cXHQvLyBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApXFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHZlY0RpbS56ICogM1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gdmVjRGltLnogKiA2XFxuXFx0Y29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcIixcIikpXFxuXFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKVxcblxcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDU1XSBPY3RyZWVJbmZvID1cIiwgT2N0cmVlSW5mbykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXFxuXFx0XFx0XFx0XFx0eCxcXG5cXHRcXHRcXHRcXHR5LFxcblxcdFxcdFxcdFxcdHosXFxuXFx0XFx0XFx0XFx0bGV2ZWwsXFxuXFx0XFx0XFx0XFx0YXZhaWxhYmxlRmlsZXMsXFxuXFx0XFx0XFx0KVxcblxcdFxcdFxcdGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDQsXFxuXFx0XFx0c3VyZmFjZVRocmVzaG9sZDogMSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBbbG9kXSxcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRcXHRjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShcXG5cXHRcXHRcXHRzZXR0aW5ncy56b29tLFxcblxcdFxcdFxcdDEsXFxuXFx0XFx0XFx0TUFYX1pPT00sXFxuXFx0XFx0XFx0cmFkaXVzICogMyxcXG5cXHRcXHRcXHQocmFkaXVzICogMykgLyBNQVhfWk9PTSxcXG5cXHRcXHQpXFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG5cXHRcXHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG5cXHRcXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXFxuXFx0fVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdFxcdFxcdFxcdHNwZWVkWm9vbTogMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0em9vbToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcIlpvb21cIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiBNQVhfWk9PTSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcblxcdHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXFxufVxcblxcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoXFxuXFx0eDogbnVtYmVyLFxcblxcdHk6IG51bWJlcixcXG5cXHR6OiBudW1iZXIsXFxuXFx0bGV2ZWw6IG51bWJlcixcXG5cXHRhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXFxuKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xcblxcdGNvbnN0IGlkID0gYCR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfWBcXG5cXHRpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsXFxuXFxuXFx0Y29uc3QgdXJsID1cXG5cXHRcXHRsZXZlbCA9PT0gMFxcblxcdFxcdFxcdD8gXCIuL2Fzc2V0cy9uZXVyb24vMDEvT2N0cmVlLmdsYlwiXFxuXFx0XFx0XFx0OiBgLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZSR7aWR9LmdsYmBcXG5cXHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXFxuXFx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcXG5cXHRyZXR1cm4gYXNzZXRcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY29uc3QgT2N0cmVlSW5mbzoge1xuICAgIGJib3g6IHtcbiAgICAgICAgbWluOiBBcnJheU51bWJlcjNcbiAgICAgICAgbWF4OiBBcnJheU51bWJlcjNcbiAgICB9XG4gICAgZmlsZXM6IHN0cmluZ1xufSA9IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogWy0zMzgwMTUuMDk3NjU2MjUsIC0xMzkxNTcuNzM0Mzc1LCAtMjc2MDUyLjI4MTI1XSxcbiAgICAgICAgbWF4OiBbMTU5Nzk2Ljg4NjcxODc1LCAzNTg2NTQuMjUsIDIyMTc1OS43MDMxMjVdLFxuICAgIH0sXG4gICAgZmlsZXM6IFwiMTAwMDAwMTExMDAwLDEwMDAxMDAxMSwxMDAwMTAxMTEwMTEsMDEwLDEwMTAwMDEwMTAxMSwxMDAxMDAwMDEwMTAsMDExMTExMTAxMDAwLDEwMDExMTAwMTAxMCwxMDEwMDExMDEwMDAsMTAxMDExMDAxMDAxLDEwMDEwMDEwMDAxMSwwMTAwMDAxMDAsMTAxMTAwMTExMDAwLDEwMTEwMDEwMDExMSwxMDEsMTAxMTAwMTAxMDAxLDEwMTAwMDEwMTAxMCwxMDEwMDAxMDAxMTAsMTEwMDAwMTAwMTExLDEwMDEwMDEwMDExMCwxMDEwMTAwMTEwMDEsMTAxMDEwMDExLDAxMTEwMDEwMTAwMCwxMDExMDExMTEwMDAsMTAxMTAwMDExMDEwLDEwMTEwMDEwMTAwMCwxMTAwMDEwMDAxMTEsMDExMDAwMDExMDAwLDAxMSwxMDAwMDEwMDEwMDEsMTAxMDAwMTExMDAwLDEwMDEwMDAwMTAxMSwwMTExMDAwMDEwMDEsMTEwMDAwMTAwLDEwMDAwMDAwMTAxMSwxMTAwMDAwMTEwMDAsMDExMTExMDAxMTAwLDAxMTAxMCwxMDExMDAxMDEwMTAsMDEwMTExMDAxMTEwLDEwMDEwMTExMTAwMSwwMTEwMTEwMDExMDEsMTAwMDAxMDExMDEwLDAxMDExMTEwMTAwMCwxMDEwMTEwMTEsMTAwMDAxLDEwMTAwMTAwMCwxMDAxMDEwMDExMDAsMTAwMDExMDAxMDAxLDEwMDEwMTAwMTAxMCwxMDExMDAwMTEwMDEsMTAxMDAwMTAwMTExLDEwMDEwMTAxMTAwMCwwMTExMTEwMTEwMDAsMTAxMTAwMTEwMTAxLDEwMDAwMDExMDExMCwxMDExMTAxMDEwMDEsMTAxMDAwMTEwMTExLDExMDAwMTEwMCwwMTAwMDAwMTEsMTEwMDEwLDEwMDExMTAwMTAwMCwxMDEwMDEwMDEwMDEsMTAwMTAxMDAxMDExLDEwMDEwMTAwMTAwMCwwMTExMDAxMDEwMTAsMTAxMDAxMTAxMDEwLDAxMTEwMDEwMTAwMSwwMTAwMDAxMDEsMDExMDExMDAxMTEwLDExMDAwMDExMDExMSwxMDAxMDAwMTAxMTEsMDExMTAxMTAxLDEwMDAwMDAxMDExMCwxMDEwMDAwMTEwMTEsMTAxMDAxMTAxMDAxLDEwMDEwMTAxMTEwMCwxMDEwMDAxMDAxMDAsMDExMDAwMDExMDEwLDEwMDEwMDEwMDEwMSwxMDExMDEwMTEwMDEsMTEwMDEwMTAwLDEwMDAwMCwwMTEwMDAwMTEsMTAwMTAwMDEwMTAxLDEwMTAwMTAxMTAwMSwxMDAxMDEwMDAxMTEsMTEwMDAxMDAxMDAwLDAwMCwxMDAxMDAwMTEwMTAsMTEwMTEwLDEwMTEwMTAwMTAxMCwxMDExMTAwMDEwMDAsMTAwMDAwMDEwMTExLDAxMDEwMDAwMTAwMSwxMDAxMTEsMTAxMTAxMTEwMTExLDEwMDExMDExMTAxMCwxMDAxMDAxMDAxMTEsMDEwMTAwMDEwMTEwLDAxMTAwMDAwMTAxMSwxMDExMDEwMTEwMTAsMTAxMTAwMTExMDEwLDExMDEwMSwxMDExMDExMDEwMDEsMTEwMDAwMTEwMTAxLDEwMTAxMDEwMSwxMTAwMDEwMTAsMDExMDAwMDEwMTExLDAxMDAxMTExMDExMSwwMTAxMTExMDAxMTEsMTAxMDAwMTExMDEwLDEwMTAwMTAwMTAwMCwxMDEwMDAwMDAsMTEwMDAwMTExMDAwLDExMDAwMDExMTAwMSwxMTAwMDExMDEwMDAsMDExMTAwMDExMDEwLDEwMTAwMTAxMDExMSwxMDEwMDAxMDEwMDEsMDExMDAwMTAwLDEwMDEwMDAxMTAwMSwwMTExMDEsMDExMDAxMTAwLDExMDAwMDEwMTAxMCwxMDExMDAwMDEwMTAsMTAxMDExMDAxMDAwLDEwMTAwMTAwMTAxMSwxMDAxMDEwMTEwMTEsMTEwMTAwMTAwLDEwMTExMDAxMTAwMCwxMTAwMDEwMDEwMTAsMTAwMTEwMTAwLDEwMTAxMTEwMCwxMDAxMDAxMDEwMDEsMTAwMTEwLDAxMDAxMCwxMDExMDAxMTAxMTEsMTAwMDAxMDEwLDExMSwxMDAwMDEwMTEsMDExMTEwMTAxLDEwMDAxMCwxMDAwMDAwMDAxMTAsMTAwMTAxMTAxMDAxLDEwMDEwMDAwMDExMSwxMTAwMDAxMDAxMDEsMTAwMDEwMTExMDEwLDEwMTEwMTEwMCwxMDAxMDEwMTAxMTEsMTAxMDAwMTAwMDAxLDExMDAwMTAxMSwxMDEwMDExMDAxMTEsMTAxMTEwLDEwMTAwMTAxMTAwMCwwMTEwMDAwMDEwMTAsMTEwMDAxMTAwMTExLDEwMTAwMDEwMDEwMSwwMTAxMTExMDAsMTEwMDAxMDAxMDAxLDExMDAwMTExMTAwMCwxMTEwMTAsMTEwMDAwMTAxMDAwLDEwMDAxMTEwMSwxMTAwMDExMDEwMDEsMTAxMDAwMTAwMDEwLDAxMDEwMDAxMDExMSwxMDEwMDExMDEsMTAwMTAxMDEwMTEwLDEwMDEwMTEwMSwxMTAxMDEwMDEwMDAsMDExMDAwMTAxMDAwLDAxMTExMDExMTAxMSwxMDAwMDExMDEsMDExMDExMDAxMTAwLDEwMDEwMTEwMTAxMCwxMDEwMTAwMTEwMDAsMTAwMDAwMDExMTAwLDEwMTAwMTAwMTAxMCwxMDAwMTAwMTAsMTAwMTAwMDEwMTAwLDAxMTAxMTEwMTAwMCwxMDEwMTExMDEsMTAxMDAwMDEwMDAxLDEwMTEwMDEwMCwxMDAwMDAxMDEwMDEsMTAxMDEwMTAwLDEwMDAwMTEwMCwwMTAxMTEwMTEsMTAwMDEwMTEwLDEwMTAxMDExMCwxMDAwMDAwMTEwMTEsMDEwMDExMTAwMTExLDAxMTExMTAwMTAxMSwxMDExMDExMDAxMTEsMTEwMDAxMDEwMTEwLDAxMTAwMTEwMSwxMDAxMDAxMTEwMDAsMDAxMDExMTEwMTExLDEwMDAwMTAxMTAwMSwxMDExMDEwMDAxMTEsMTAxMTAxMDEwMTExLDEwMDAxMDEwMCwxMDEwMDEwMTEsMTEwMDAxMDEwMTExLDEwMDEwMTAxMTAwMSwxMDExMDAxMTAxMTAsMTAxMDAwMTAwLDEwMTAxMCwxMTAwMDAxMDAxMTAsMTAwMDEwMTAxLDEwMTAwMTExMDExMSwxMDExMDEwMDEwMDEsMTEwMDExMTAwLDEwMDAwMTAxMDExMSwxMDEwMDEwMTAsMTAwMTAxMTAxMDAwLDEwMTEwMTAxMTAwMCwxMTAxMDAxMTAxMTEsMDEwMTEwMTExLDEwMDAwMDAxMSwwMTExMTAxMDAsMDAxMTExMTEwMTExLDEwMDEwMDExMDExMSwxMDEwMDAxMDAwMTEsMTAwMTAwMDExMDAwLDEwMTAwMTEwMCwxMDEwMDEwMDAxMTEsMTAwMDAwMTExMDEwLDEwMDEwMTAwMTAwMSwxMTAxMDEwMDEwMDEsMTAwMTAwMTAxMDAwLDExMDEwMTAwMDExMSwxMDAwMDAwMTAsMDExMTAwMDAxMDEwLDEwMDAxMTAxMTAwMCwxMDAwMDEwMDEwMDAsMTAxMTAxMDEwMTEwLDEwMDAwMTAwMSwxMDExMTEwMDEwMDEsMTEwMTAxMDExMDAxLDEwMDEwMTAxMTAxMCwxMDAwMTEsMDExMTEwMTEwLDEwMDAwMTAwMDExMSwxMDAwMDAxMDAsMTAxMDAwMTEwMTEwLDAxMDAwMSwxMDAxMDAwMTAxMTAsMTEwMDAwMTEwMTEwLDEwMDAwMDExMCwxMDExMDAwMTAwMDEsMTAwMDExMDExMDAxLDEwMTEwMDEwMDExMCwwMTExMTEsMTAwMTAxMDEwMTAxLDEwMTExMDAwMTAwMSwxMDAsMTAxMDAxMDAxMTAwLDExMDAxMDAxMSwxMDAwMDAxMDEsMDAxMTAxLDEwMTExMDEwMCwxMDAxMDEsMDExMDAwMDExMDAxLDEwMTAxMDEwMTAwMSwxMDAwMDAxMTEwMDEsMDExMTEwMTExLDEwMDEwMDEwMDEwMCwxMDExMTAwMTEwMDEsMDExMTExMTAwLDAxMTAwMDEwMSwxMDEwMDAxMTEwMDEsMDExMTEwLDExMDAxMDEwMSwxMDEwMDEwMDEsMTAxMTAxMTExMDAxLDEwMTAwMTExMTAwMCwxMTAwMTEwMTEsMDAxLDEwMDEwMDAxMTAxMSwxMTAwMDEwMTEwMDEsMTAxMTAwMTExMDAxLDEwMDExMTAwMTAwMSwxMTAwMTAwMDEwMDAsMTAwMTEwMTAxLDExMDAwMSwxMDExMDExMDEwMDAsMTAwMTAwMTExMDAxLDEwMDAwMDExMDExMSwwMDExMTEwMTEsMTEwMDAxMTAxLDEwMTAwMDEwMSwxMDAwMTExMDAsMTAxMTAxMDAxMDAwLDAxMDEwMDAwMTAxMSwxMDEwMTAwMDEwMDEsMDExMDAwMDAxMDAxLDExMDAwMTAwMDExMCwxMTAwMDEwMTEwMTAsMTAxMDAxMTExMDAxLDExMDEwMTAxMTAwMCwxMDAxMDAxMTEwMTAsMTAxMDEwMTExMDAxLDEwMTAxMDAwMTAwMCwxMDExMDEwMDAxMTAsMDExMTAwMDExMDAxXCIsXG59XG4iLCIvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1oud2VicFwiXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1oud2VicFwiXG5cbmltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIHR5cGUgVGdkRGF0YUdsYixcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMT0QsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RWZWMzLFxuICAgIHRnZENhbGNNYXBSYW5nZSxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcbiAgICB0Z2RMb2FkR2xiLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFwiLi9pbmZvXCJcblxuY29uc3QgTUFYX1pPT00gPSAxNVxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xuICAgICAgICBzdGVwczogNixcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXG4gICAgICAgIChsZXZlbCkgPT5cbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxuICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXG4gICAgY29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXG4gICAgLy8gY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDNcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMVxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IHZlY0RpbS56ICogNlxuICAgIGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxuICAgIGNvbnRleHQuY2FtZXJhLmRlYnVnKClcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0A1NV0gT2N0cmVlSW5mbyA9XCIsIE9jdHJlZUluZm8pIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMDMgYXQgMDk6MDNcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDQsXG4gICAgICAgIHN1cmZhY2VUaHJlc2hvbGQ6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2RdLFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgcmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShzZXR0aW5ncy56b29tLCAxLCBNQVhfWk9PTSwgcmFkaXVzICogMywgKHJhZGl1cyAqIDMpIC8gTUFYX1pPT00pXG4gICAgICAgIGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXG4gICAgICAgIGNhbWVyYS5mYXIgPSBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSArIHJhZGl1c1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIilcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHo6IG51bWJlcixcbiAgICBsZXZlbDogbnVtYmVyLFxuICAgIGF2YWlsYWJsZUZpbGVzOiBTZXQ8c3RyaW5nPixcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcbiAgICBjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXG4gICAgaWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdXJsID0gbGV2ZWwgPT09IDAgPyBcIi4vYXNzZXRzL25ldXJvbi8wMS9PY3RyZWUuZ2xiXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZSR7aWR9LmdsYmBcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcbiAgICByZXR1cm4gYXNzZXRcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLE1BQU0sS0FBSyxHQUFHO0lBQ1YsV0FBVyxFQUNQLG13RUFBbXdFO0NBQzF3RTtBQUNELE1BQU0sSUFBSSxHQUNOLHMrSEFBcytIO0FBRTM5SCxTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLENBQ0gsc0dBQ0ksb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFDdEIsMkNBQUMsc0NBQUksS0FBRyxHQUNOLEVBQ04scURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFDdkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQ3JDLEdBQ1gsRUFDTiwyQ0FBQyx1REFBVSxJQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUksSUFDdkQsSUFDUCxDQUNOO0FBQ0wsQ0FBQzs7Ozs7Ozs7O0FDOUJNLE1BQU0sVUFBVSxHQU1uQjtJQUNBLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3RELEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDO0tBQ25EO0lBQ0QsS0FBSyxFQUFFLCtnSEFBK2dIO0NBQ3poSDs7Ozs7Ozs7Ozs7Ozs7QUNRc0I7QUFDa0M7QUFDdEI7QUFFbkMsTUFBTSxRQUFRLEdBQUcsRUFBRTtBQUduQixTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFDN0MsTUFBTSxNQUFNLEdBQW1CLHdEQUFvQixDQUFDO1FBQ2hELEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQWlCLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDcEMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNOLElBQUksa0RBQWtCLENBQUM7UUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEIsa0JBQWtCLEVBQUUsSUFBSTtLQUMzQixDQUFDLENBQ1Q7SUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsaUNBQVU7SUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSx1Q0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSx1Q0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSx1Q0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU07SUFFeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNqQyxNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBUyw2Q0FBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLGlDQUFVLENBQUM7SUFDekQsTUFBTSxHQUFHLEdBQUcsSUFBSSw2Q0FBYSxDQUFDLE9BQU8sRUFBRTtRQUNuQyxJQUFJO1FBQ0osS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxLQUFhO1lBQ3hELE1BQU0sS0FBSyxHQUFzQixNQUFNLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDO1lBQzlFLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sSUFBSTtZQUV2QixPQUFPLElBQUksa0RBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxLQUFLO2dCQUNMLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzdCLENBQUM7UUFDTixDQUFDO1FBQ0QsWUFBWSxFQUFFLENBQUM7UUFDZixnQkFBZ0IsRUFBRSxDQUFDO0tBQ3RCLENBQUM7SUFDRixPQUFPLENBQUMsR0FBRyxDQUNQLEtBQUssRUFDTCxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1FBQ3pCLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNmLEtBQUssRUFBRSxxREFBcUI7UUFDNUIsSUFBSSxFQUFFLG9EQUFvQjtLQUM3QixDQUFDLENBQ0w7SUFDRCxPQUFPLENBQUMsS0FBSyxFQUFFO0lBQ2YsT0FBTyxDQUFDLFFBQTBCLEVBQUUsRUFBRTtRQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTztRQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxtREFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMxRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUMzRCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU07UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdkUsQ0FBQztBQUNMLENBQUM7QUFHYyxTQUFTLElBQUk7SUFDeEIsT0FBTyxDQUNILDJDQUFDLGdEQUFJLElBQ0QsdUJBQXVCLFFBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQ2IsS0FBSyxRQUNMLFVBQVUsRUFBRTtZQUNSLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsRUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLFFBQVE7YUFDaEI7U0FDSixHQUNILENBQ0w7QUFDTCxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDdkMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO0FBQ2pELENBQUM7QUFFRCxLQUFLLFVBQVUsT0FBTyxDQUNsQixDQUFTLEVBQ1QsQ0FBUyxFQUNULENBQVMsRUFDVCxLQUFhLEVBQ2IsY0FBMkI7SUFFM0IsTUFBTSxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFBRSxPQUFPLElBQUk7SUFFeEMsTUFBTSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixFQUFFLE1BQU07SUFDaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQUcsTUFBTSw4Q0FBVSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxPQUFPLEtBQUs7QUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSTBCO0FBQ0c7QUFFYTtBQUNNO0FBU2xDLFNBQVMsY0FBYyxDQUFDLEtBQTBCO0lBQzdELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO0lBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQThCO1lBQzNDLEdBQUcsS0FBSztZQUNSLEtBQUs7U0FDUjtRQUNELE9BQU8sMkNBQUMsb0JBQW9CLE9BQUssV0FBVyxHQUFJO0lBQ3BELENBQUM7SUFDRCxNQUFNLFVBQVUsR0FBNkI7UUFDekMsR0FBRyxLQUFLO1FBQ1IsS0FBSztLQUNSO0lBQ0QsT0FBTywyQ0FBQyxtQkFBbUIsT0FBSyxVQUFVLEdBQUk7QUFDbEQsQ0FBQztBQU1ELFNBQVMsb0JBQW9CLENBQUMsS0FBZ0M7SUFDMUQsTUFBTSxVQUFVLEdBQUcsNkJBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRywrQkFBYyxDQUFDLEtBQUssQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyw2QkFBWSxDQUFxQixJQUFJLENBQUM7SUFDdEQsZ0NBQWUsQ0FBQyxHQUFHLEVBQUU7UUFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTTtZQUVqQixNQUFNLElBQUksR0FBRyw0Q0FBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsbURBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO1FBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1FBQzNCLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDdkUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxFQUFFO1FBQzFCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDdkMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPLENBQ0gscURBQUssU0FBUyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLGFBQ2hGLDhEQUNJLHFEQUFNLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFJLEdBQzdELEVBQ0wsS0FBSyxJQUFJLENBQ04sdURBQVEsU0FBUyxFQUFFLHdEQUFXLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxRQUFRLFlBQ3BFLDhHQUFzRCxHQUNqRCxDQUNaLElBQ0MsQ0FDVDtBQUNMLENBQUM7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjtJQUM3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLDZEQUFnQixDQUFDO0lBQ3JDLElBQUksT0FBTyxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMvQixDQUFDO0FBTUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUErQjtJQUN4RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUNILG9HQUNLLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUM5Qix5REFBdUIsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsYUFDNUMsa0VBQVUsT0FBTyxHQUFXLEVBQzVCLDJDQUFDLG9CQUFvQixJQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJLEtBRnJFLE9BQU8sQ0FHWCxDQUNiLENBQUMsR0FDSCxDQUNOO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzBCO0FBQ2lCO0FBQ1A7QUFDTztBQUNQO0FBQ0Y7QUFDRztBQUUvQixTQUFTLHFCQUFxQixDQUFDLFFBQWdCO0lBQ2xELFFBQVEsUUFBUSxFQUFFLENBQUM7UUFDZixLQUFLLElBQUk7WUFDTCxPQUFPLHlEQUEwQjtRQUNyQyxLQUFLLEtBQUs7WUFDTixPQUFPLGtEQUFtQjtRQUM5QixLQUFLLE1BQU0sQ0FBQztRQUNaLEtBQUssTUFBTTtZQUNQLE9BQU8sbURBQW9CO1FBQy9CO1lBQ0ksT0FBTyxJQUFJO0lBQ25CLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsTUFBTTtJQUNOLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0NBQ1Q7QUFFRCxNQUFNLFFBQVEsR0FBRztJQUNiLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLElBQUk7SUFDSixJQUFJO0lBQ0osT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxlQUFlO0lBQ2YsS0FBSztJQUNMLE9BQU87SUFDUCxXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixTQUFTO0lBRVQsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsT0FBTztJQUNQLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7SUFDUixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLE9BQU87SUFDUCxVQUFVO0NBQ2I7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNaLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUVELE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBYTtJQUNiLE1BQU07SUFDTixNQUFNO0lBQ04sVUFBVTtJQUNWLEtBQUs7SUFDTCxPQUFPO0lBQ1AsS0FBSztJQUNMLE1BQU07SUFDTixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsYUFBYTtJQUNiLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07SUFDTixnQkFBZ0I7SUFDaEIsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsS0FBSztJQUNMLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxXQUFXO0lBQ1gsTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sWUFBWTtJQUNaLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUVELE1BQU0sSUFBSSxHQUFrQjtJQUN4QixPQUFPLEVBQUU7UUFDTDtZQUNJLE9BQU8sRUFBRSxrQ0FBa0M7WUFDM0MsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEO1lBQ0ksT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixVQUFVLEVBQUUsSUFBSTtZQUNoQixNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0Q7WUFDSSxPQUFPLEVBQUUsUUFBUTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSTtTQUNmO0tBQ0o7SUFDRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQ0gsMk5BQTJOO1FBQy9OLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUM5QixPQUFPLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDbEMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztDQUN6QztBQUVELFNBQVMsaUJBQWlCLENBQUMsS0FBZTtJQUN0QyxPQUFPO1FBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLHFCQUFxQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztRQUM3RSxVQUFVLEVBQUUsS0FBSztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNmO0FBQ0wsQ0FBQzs7Ozs7Ozs7OztBQ25WcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7Ozs7Ozs7Ozs7Ozs7a0NBRWQ7Ozs7OztvQkFBK0M7aUJBQUE7Ozs7Ozs7OzBCQUVsRDs7Ozs7Ozs7MEJBRUc7Ozs7Ozs7OzBCQUVIIn0=