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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (neuron)"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jb21wby0xODEyNTUuOWExMzc3NzhjNWI2YmYwNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi9fL21haW4uZGVtby9pbmZvLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJ2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA2LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG5cXHRcXHQobGV2ZWwpID0+XFxuXFx0XFx0XFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXFxuXFx0XFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdFxcdH0pLFxcblxcdClcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuXFx0Y29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvXFxuXFx0Y29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXFxuXFx0Y29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuXFx0Y29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXFxuXFx0Y29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcXG5cXHRjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXFxuXFx0Ly8gY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDNcXG5cXHRjb250ZXh0LmNhbWVyYS5uZWFyID0gMVxcblxcdGNvbnRleHQuY2FtZXJhLmZhciA9IHZlY0RpbS56ICogNlxcblxcdGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxcblxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKClcXG5cXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0A1NV0gT2N0cmVlSW5mbyA9XCIsIE9jdHJlZUluZm8pIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMDMgYXQgMDk6MDNcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKFxcblxcdFxcdFxcdFxcdHgsXFxuXFx0XFx0XFx0XFx0eSxcXG5cXHRcXHRcXHRcXHR6LFxcblxcdFxcdFxcdFxcdGxldmVsLFxcblxcdFxcdFxcdFxcdGF2YWlsYWJsZUZpbGVzLFxcblxcdFxcdFxcdClcXG5cXHRcXHRcXHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxcblxcblxcdFxcdFxcdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRhc3NldCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcXG5cXHRcXHRcXHR9KVxcblxcdFxcdH0sXFxuXFx0XFx0c3ViZGl2aXNpb25zOiA0LFxcblxcdFxcdHN1cmZhY2VUaHJlc2hvbGQ6IDEsXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0cmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0XFx0Y2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2UoXFxuXFx0XFx0XFx0c2V0dGluZ3Muem9vbSxcXG5cXHRcXHRcXHQxLFxcblxcdFxcdFxcdE1BWF9aT09NLFxcblxcdFxcdFxcdHJhZGl1cyAqIDMsXFxuXFx0XFx0XFx0KHJhZGl1cyAqIDMpIC8gTUFYX1pPT00sXFxuXFx0XFx0KVxcblxcdFxcdGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXFxuXFx0XFx0Y2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXFxuXFx0XFx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMTI2XSBjYW1lcmEgPVwiLCBjYW1lcmEubmVhciwgY2FtZXJhLmZhcikgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMS0yMCBhdCAyMTo0M1xcblxcdH1cXG59Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICcvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcXG4vLyBpbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWS53ZWJwXCJcXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWS53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXCJcXG5cXG5pbXBvcnQge1xcblxcdHR5cGUgQXJyYXlOdW1iZXI0LFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTE9ELFxcblxcdFRnZFBhaW50ZXJNZXNoR2x0ZixcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVmVjMyxcXG5cXHR0Z2RDYWxjTWFwUmFuZ2UsXFxuXFx0dGdkQ29sb3JNYWtlSHVlV2hlZWwsXFxuXFx0dGdkTG9hZEdsYixcXG5cXHR3ZWJnbFByZXNldEN1bGwsXFxuXFx0d2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgeyBPY3RyZWVJbmZvIH0gZnJvbSBcIi4vaW5mb1wiXFxuXFxuY29uc3QgTUFYX1pPT00gPSAxNVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA2LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG5cXHRcXHQobGV2ZWwpID0+XFxuXFx0XFx0XFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXFxuXFx0XFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdFxcdH0pLFxcblxcdClcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuXFx0Y29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvXFxuXFx0Y29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXFxuXFx0Y29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuXFx0Y29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXFxuXFx0Y29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcXG5cXHRjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXFxuXFx0Ly8gY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDNcXG5cXHRjb250ZXh0LmNhbWVyYS5uZWFyID0gMVxcblxcdGNvbnRleHQuY2FtZXJhLmZhciA9IHZlY0RpbS56ICogNlxcblxcdGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxcblxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKClcXG5cXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0A1NV0gT2N0cmVlSW5mbyA9XCIsIE9jdHJlZUluZm8pIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMDMgYXQgMDk6MDNcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKFxcblxcdFxcdFxcdFxcdHgsXFxuXFx0XFx0XFx0XFx0eSxcXG5cXHRcXHRcXHRcXHR6LFxcblxcdFxcdFxcdFxcdGxldmVsLFxcblxcdFxcdFxcdFxcdGF2YWlsYWJsZUZpbGVzLFxcblxcdFxcdFxcdClcXG5cXHRcXHRcXHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxcblxcblxcdFxcdFxcdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRhc3NldCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcXG5cXHRcXHRcXHR9KVxcblxcdFxcdH0sXFxuXFx0XFx0c3ViZGl2aXNpb25zOiA0LFxcblxcdFxcdHN1cmZhY2VUaHJlc2hvbGQ6IDEsXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0cmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0XFx0Y2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2UoXFxuXFx0XFx0XFx0c2V0dGluZ3Muem9vbSxcXG5cXHRcXHRcXHQxLFxcblxcdFxcdFxcdE1BWF9aT09NLFxcblxcdFxcdFxcdHJhZGl1cyAqIDMsXFxuXFx0XFx0XFx0KHJhZGl1cyAqIDMpIC8gTUFYX1pPT00sXFxuXFx0XFx0KVxcblxcdFxcdGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXFxuXFx0XFx0Y2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXFxuXFx0XFx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMTI2XSBjYW1lcmEgPVwiLCBjYW1lcmEubmVhciwgY2FtZXJhLmZhcikgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMS0yMCBhdCAyMTo0M1xcblxcdH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0ZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHRcXHRcXHRcXHRzcGVlZFpvb206IDAsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHpvb206IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXCJab29tXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWluOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1heDogTUFYX1pPT00sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG5cXG5mdW5jdGlvbiB0b0Jpbih2YWx1ZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcXG5cXHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFwiMFwiKVxcbn1cXG5cXG5hc3luYyBmdW5jdGlvbiBsb2FkR0xCKFxcblxcdHg6IG51bWJlcixcXG5cXHR5OiBudW1iZXIsXFxuXFx0ejogbnVtYmVyLFxcblxcdGxldmVsOiBudW1iZXIsXFxuXFx0YXZhaWxhYmxlRmlsZXM6IFNldDxzdHJpbmc+LFxcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcXG5cXHRjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXFxuXFx0aWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxcblxcblxcdGNvbnN0IHVybCA9XFxuXFx0XFx0bGV2ZWwgPT09IDBcXG5cXHRcXHRcXHQ/IFwiLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZS5nbGJcIlxcblxcdFxcdFxcdDogYC4vYXNzZXRzL25ldXJvbi8wMS9PY3RyZWUke2lkfS5nbGJgXFxuXFx0Y29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxcblxcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXFxuXFx0cmV0dXJuIGFzc2V0XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNvbnN0IE9jdHJlZUluZm86IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogQXJyYXlOdW1iZXIzXG4gICAgICAgIG1heDogQXJyYXlOdW1iZXIzXG4gICAgfVxuICAgIGZpbGVzOiBzdHJpbmdcbn0gPSB7XG4gICAgYmJveDoge1xuICAgICAgICBtaW46IFstMzM4MDE1LjA5NzY1NjI1LCAtMTM5MTU3LjczNDM3NSwgLTI3NjA1Mi4yODEyNV0sXG4gICAgICAgIG1heDogWzE1OTc5Ni44ODY3MTg3NSwgMzU4NjU0LjI1LCAyMjE3NTkuNzAzMTI1XSxcbiAgICB9LFxuICAgIGZpbGVzOiBcIjEwMDAwMDExMTAwMCwxMDAwMTAwMTEsMTAwMDEwMTExMDExLDAxMCwxMDEwMDAxMDEwMTEsMTAwMTAwMDAxMDEwLDAxMTExMTEwMTAwMCwxMDAxMTEwMDEwMTAsMTAxMDAxMTAxMDAwLDEwMTAxMTAwMTAwMSwxMDAxMDAxMDAwMTEsMDEwMDAwMTAwLDEwMTEwMDExMTAwMCwxMDExMDAxMDAxMTEsMTAxLDEwMTEwMDEwMTAwMSwxMDEwMDAxMDEwMTAsMTAxMDAwMTAwMTEwLDExMDAwMDEwMDExMSwxMDAxMDAxMDAxMTAsMTAxMDEwMDExMDAxLDEwMTAxMDAxMSwwMTExMDAxMDEwMDAsMTAxMTAxMTExMDAwLDEwMTEwMDAxMTAxMCwxMDExMDAxMDEwMDAsMTEwMDAxMDAwMTExLDAxMTAwMDAxMTAwMCwwMTEsMTAwMDAxMDAxMDAxLDEwMTAwMDExMTAwMCwxMDAxMDAwMDEwMTEsMDExMTAwMDAxMDAxLDExMDAwMDEwMCwxMDAwMDAwMDEwMTEsMTEwMDAwMDExMDAwLDAxMTExMTAwMTEwMCwwMTEwMTAsMTAxMTAwMTAxMDEwLDAxMDExMTAwMTExMCwxMDAxMDExMTEwMDEsMDExMDExMDAxMTAxLDEwMDAwMTAxMTAxMCwwMTAxMTExMDEwMDAsMTAxMDExMDExLDEwMDAwMSwxMDEwMDEwMDAsMTAwMTAxMDAxMTAwLDEwMDAxMTAwMTAwMSwxMDAxMDEwMDEwMTAsMTAxMTAwMDExMDAxLDEwMTAwMDEwMDExMSwxMDAxMDEwMTEwMDAsMDExMTExMDExMDAwLDEwMTEwMDExMDEwMSwxMDAwMDAxMTAxMTAsMTAxMTEwMTAxMDAxLDEwMTAwMDExMDExMSwxMTAwMDExMDAsMDEwMDAwMDExLDExMDAxMCwxMDAxMTEwMDEwMDAsMTAxMDAxMDAxMDAxLDEwMDEwMTAwMTAxMSwxMDAxMDEwMDEwMDAsMDExMTAwMTAxMDEwLDEwMTAwMTEwMTAxMCwwMTExMDAxMDEwMDEsMDEwMDAwMTAxLDAxMTAxMTAwMTExMCwxMTAwMDAxMTAxMTEsMTAwMTAwMDEwMTExLDAxMTEwMTEwMSwxMDAwMDAwMTAxMTAsMTAxMDAwMDExMDExLDEwMTAwMTEwMTAwMSwxMDAxMDEwMTExMDAsMTAxMDAwMTAwMTAwLDAxMTAwMDAxMTAxMCwxMDAxMDAxMDAxMDEsMTAxMTAxMDExMDAxLDExMDAxMDEwMCwxMDAwMDAsMDExMDAwMDExLDEwMDEwMDAxMDEwMSwxMDEwMDEwMTEwMDEsMTAwMTAxMDAwMTExLDExMDAwMTAwMTAwMCwwMDAsMTAwMTAwMDExMDEwLDExMDExMCwxMDExMDEwMDEwMTAsMTAxMTEwMDAxMDAwLDEwMDAwMDAxMDExMSwwMTAxMDAwMDEwMDEsMTAwMTExLDEwMTEwMTExMDExMSwxMDAxMTAxMTEwMTAsMTAwMTAwMTAwMTExLDAxMDEwMDAxMDExMCwwMTEwMDAwMDEwMTEsMTAxMTAxMDExMDEwLDEwMTEwMDExMTAxMCwxMTAxMDEsMTAxMTAxMTAxMDAxLDExMDAwMDExMDEwMSwxMDEwMTAxMDEsMTEwMDAxMDEwLDAxMTAwMDAxMDExMSwwMTAwMTExMTAxMTEsMDEwMTExMTAwMTExLDEwMTAwMDExMTAxMCwxMDEwMDEwMDEwMDAsMTAxMDAwMDAwLDExMDAwMDExMTAwMCwxMTAwMDAxMTEwMDEsMTEwMDAxMTAxMDAwLDAxMTEwMDAxMTAxMCwxMDEwMDEwMTAxMTEsMTAxMDAwMTAxMDAxLDAxMTAwMDEwMCwxMDAxMDAwMTEwMDEsMDExMTAxLDAxMTAwMTEwMCwxMTAwMDAxMDEwMTAsMTAxMTAwMDAxMDEwLDEwMTAxMTAwMTAwMCwxMDEwMDEwMDEwMTEsMTAwMTAxMDExMDExLDExMDEwMDEwMCwxMDExMTAwMTEwMDAsMTEwMDAxMDAxMDEwLDEwMDExMDEwMCwxMDEwMTExMDAsMTAwMTAwMTAxMDAxLDEwMDExMCwwMTAwMTAsMTAxMTAwMTEwMTExLDEwMDAwMTAxMCwxMTEsMTAwMDAxMDExLDAxMTExMDEwMSwxMDAwMTAsMTAwMDAwMDAwMTEwLDEwMDEwMTEwMTAwMSwxMDAxMDAwMDAxMTEsMTEwMDAwMTAwMTAxLDEwMDAxMDExMTAxMCwxMDExMDExMDAsMTAwMTAxMDEwMTExLDEwMTAwMDEwMDAwMSwxMTAwMDEwMTEsMTAxMDAxMTAwMTExLDEwMTExMCwxMDEwMDEwMTEwMDAsMDExMDAwMDAxMDEwLDExMDAwMTEwMDExMSwxMDEwMDAxMDAxMDEsMDEwMTExMTAwLDExMDAwMTAwMTAwMSwxMTAwMDExMTEwMDAsMTExMDEwLDExMDAwMDEwMTAwMCwxMDAwMTExMDEsMTEwMDAxMTAxMDAxLDEwMTAwMDEwMDAxMCwwMTAxMDAwMTAxMTEsMTAxMDAxMTAxLDEwMDEwMTAxMDExMCwxMDAxMDExMDEsMTEwMTAxMDAxMDAwLDAxMTAwMDEwMTAwMCwwMTExMTAxMTEwMTEsMTAwMDAxMTAxLDAxMTAxMTAwMTEwMCwxMDAxMDExMDEwMTAsMTAxMDEwMDExMDAwLDEwMDAwMDAxMTEwMCwxMDEwMDEwMDEwMTAsMTAwMDEwMDEwLDEwMDEwMDAxMDEwMCwwMTEwMTExMDEwMDAsMTAxMDExMTAxLDEwMTAwMDAxMDAwMSwxMDExMDAxMDAsMTAwMDAwMTAxMDAxLDEwMTAxMDEwMCwxMDAwMDExMDAsMDEwMTExMDExLDEwMDAxMDExMCwxMDEwMTAxMTAsMTAwMDAwMDExMDExLDAxMDAxMTEwMDExMSwwMTExMTEwMDEwMTEsMTAxMTAxMTAwMTExLDExMDAwMTAxMDExMCwwMTEwMDExMDEsMTAwMTAwMTExMDAwLDAwMTAxMTExMDExMSwxMDAwMDEwMTEwMDEsMTAxMTAxMDAwMTExLDEwMTEwMTAxMDExMSwxMDAwMTAxMDAsMTAxMDAxMDExLDExMDAwMTAxMDExMSwxMDAxMDEwMTEwMDEsMTAxMTAwMTEwMTEwLDEwMTAwMDEwMCwxMDEwMTAsMTEwMDAwMTAwMTEwLDEwMDAxMDEwMSwxMDEwMDExMTAxMTEsMTAxMTAxMDAxMDAxLDExMDAxMTEwMCwxMDAwMDEwMTAxMTEsMTAxMDAxMDEwLDEwMDEwMTEwMTAwMCwxMDExMDEwMTEwMDAsMTEwMTAwMTEwMTExLDAxMDExMDExMSwxMDAwMDAwMTEsMDExMTEwMTAwLDAwMTExMTExMDExMSwxMDAxMDAxMTAxMTEsMTAxMDAwMTAwMDExLDEwMDEwMDAxMTAwMCwxMDEwMDExMDAsMTAxMDAxMDAwMTExLDEwMDAwMDExMTAxMCwxMDAxMDEwMDEwMDEsMTEwMTAxMDAxMDAxLDEwMDEwMDEwMTAwMCwxMTAxMDEwMDAxMTEsMTAwMDAwMDEwLDAxMTEwMDAwMTAxMCwxMDAwMTEwMTEwMDAsMTAwMDAxMDAxMDAwLDEwMTEwMTAxMDExMCwxMDAwMDEwMDEsMTAxMTExMDAxMDAxLDExMDEwMTAxMTAwMSwxMDAxMDEwMTEwMTAsMTAwMDExLDAxMTExMDExMCwxMDAwMDEwMDAxMTEsMTAwMDAwMTAwLDEwMTAwMDExMDExMCwwMTAwMDEsMTAwMTAwMDEwMTEwLDExMDAwMDExMDExMCwxMDAwMDAxMTAsMTAxMTAwMDEwMDAxLDEwMDAxMTAxMTAwMSwxMDExMDAxMDAxMTAsMDExMTExLDEwMDEwMTAxMDEwMSwxMDExMTAwMDEwMDEsMTAwLDEwMTAwMTAwMTEwMCwxMTAwMTAwMTEsMTAwMDAwMTAxLDAwMTEwMSwxMDExMTAxMDAsMTAwMTAxLDAxMTAwMDAxMTAwMSwxMDEwMTAxMDEwMDEsMTAwMDAwMTExMDAxLDAxMTExMDExMSwxMDAxMDAxMDAxMDAsMTAxMTEwMDExMDAxLDAxMTExMTEwMCwwMTEwMDAxMDEsMTAxMDAwMTExMDAxLDAxMTExMCwxMTAwMTAxMDEsMTAxMDAxMDAxLDEwMTEwMTExMTAwMSwxMDEwMDExMTEwMDAsMTEwMDExMDExLDAwMSwxMDAxMDAwMTEwMTEsMTEwMDAxMDExMDAxLDEwMTEwMDExMTAwMSwxMDAxMTEwMDEwMDEsMTEwMDEwMDAxMDAwLDEwMDExMDEwMSwxMTAwMDEsMTAxMTAxMTAxMDAwLDEwMDEwMDExMTAwMSwxMDAwMDAxMTAxMTEsMDAxMTExMDExLDExMDAwMTEwMSwxMDEwMDAxMDEsMTAwMDExMTAwLDEwMTEwMTAwMTAwMCwwMTAxMDAwMDEwMTEsMTAxMDEwMDAxMDAxLDAxMTAwMDAwMTAwMSwxMTAwMDEwMDAxMTAsMTEwMDAxMDExMDEwLDEwMTAwMTExMTAwMSwxMTAxMDEwMTEwMDAsMTAwMTAwMTExMDEwLDEwMTAxMDExMTAwMSwxMDEwMTAwMDEwMDAsMTAxMTAxMDAwMTEwLDAxMTEwMDAxMTAwMVwiLFxufVxuIiwiLy8gaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1gud2VicFwiXG4vLyBpbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWS53ZWJwXCJcbi8vIGltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdaLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1gud2VicFwiXG4vLyBpbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWS53ZWJwXCJcbi8vIGltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NaLndlYnBcIlxuXG5pbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICB0eXBlIFRnZERhdGFHbGIsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTE9ELFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVmVjMyxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXG4gICAgdGdkQ29sb3JNYWtlSHVlV2hlZWwsXG4gICAgdGdkTG9hZEdsYixcbiAgICB3ZWJnbFByZXNldEN1bGwsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyBPY3RyZWVJbmZvIH0gZnJvbSBcIi4vaW5mb1wiXG5cbmNvbnN0IE1BWF9aT09NID0gMTVcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcbiAgICAgICAgc3RlcHM6IDYsXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxuICAgICAgICAobGV2ZWwpID0+XG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICApXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxuICAgIGNvbnN0IHsgYmJveCB9ID0gT2N0cmVlSW5mb1xuICAgIGNvbnN0IHZlY01pbiA9IG5ldyBUZ2RWZWMzKGJib3gubWluKVxuICAgIGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KVxuICAgIGNvbnN0IHZlY0RpbSA9IG5ldyBUZ2RWZWMzKHZlY01heCkuc3VidHJhY3QodmVjTWluKVxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHZlY0RpbS54LCB2ZWNEaW0ueSwgdmVjRGltLnopXG4gICAgY29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxuICAgIC8vIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgMClcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdmVjRGltLnogKiAzXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSB2ZWNEaW0ueiAqIDZcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFwiLFwiKSlcbiAgICBjb250ZXh0LmNhbWVyYS5kZWJ1ZygpXG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9ANTVdIE9jdHJlZUluZm8gPVwiLCBPY3RyZWVJbmZvKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAzLTAzIGF0IDA5OjAzXG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xuICAgICAgICBiYm94LFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwsIGF2YWlsYWJsZUZpbGVzKVxuICAgICAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuIG51bGxcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA0LFxuICAgICAgICBzdXJmYWNlVGhyZXNob2xkOiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2Uoc2V0dGluZ3Muem9vbSwgMSwgTUFYX1pPT00sIHJhZGl1cyAqIDMsIChyYWRpdXMgKiAzKSAvIE1BWF9aT09NKVxuICAgICAgICBjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKVxuICAgICAgICBjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9AMTI2XSBjYW1lcmEgPVwiLCBjYW1lcmEubmVhciwgY2FtZXJhLmZhcikgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMS0yMCBhdCAyMTo0M1xuICAgIH1cbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlpvb21cIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBNQVhfWk9PTSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB6OiBudW1iZXIsXG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXG4pOiBQcm9taXNlPFRnZERhdGFHbGIgfCBudWxsPiB7XG4gICAgY29uc3QgaWQgPSBgJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9YFxuICAgIGlmICghYXZhaWxhYmxlRmlsZXMuaGFzKGlkKSkgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IHVybCA9IGxldmVsID09PSAwID8gXCIuL2Fzc2V0cy9uZXVyb24vMDEvT2N0cmVlLmdsYlwiIDogYC4vYXNzZXRzL25ldXJvbi8wMS9PY3RyZWUke2lkfS5nbGJgXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxuICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXG4gICAgcmV0dXJuIGFzc2V0XG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixNQUFNLEtBQUssR0FBRztJQUNWLFdBQVcsRUFDUCxtd0VBQW13RTtDQUMxd0U7QUFDRCxNQUFNLElBQUksR0FDTixzK0hBQXMrSDtBQUUzOUgsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxDQUNILHNHQUNJLG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQ3RCLDJDQUFDLHNDQUFJLEtBQUcsR0FDTixFQUNOLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1AsQ0FDTjtBQUNMLENBQUM7Ozs7Ozs7OztBQzlCTSxNQUFNLFVBQVUsR0FNbkI7SUFDQSxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN0RCxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQztLQUNuRDtJQUNELEtBQUssRUFBRSwrZ0hB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