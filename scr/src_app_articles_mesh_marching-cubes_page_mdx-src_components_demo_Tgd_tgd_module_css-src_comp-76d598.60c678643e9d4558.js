"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_marching-cubes_page_mdx-src_components_demo_Tgd_tgd_module_css-src_comp-76d598"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
54145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _marching_cubes_demo__rspack_import_4 = __webpack_require__(79216);





const FOCUS = { "Initializing WebGL": "    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 8,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()" };
const FULL = "import {\n    type ArrayNumber3,\n    type ArrayNumber4,\n    type MakeGeometryFromVolumeOptions,\n    tgdCalcDegToRad,\n    tgdCalcRandom,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    tgdMakeGeometryFromVolume,\n    tgdMakePointsCloudFromVolume,\n    TgdMaterialFaceOrientation,\n    TgdPainterAxes,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    tgdSdfCapsule,\n    tgdSdfSphere,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\ntype Tree = {\n    point: ArrayNumber4\n    children?: Tree[]\n}\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.fitSpaceAtTarget(12, 12)\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    const tree: Tree = {\n        point: [0, 0.5, 0, 0.5],\n        children: [\n            dendrite(1, 0.5, 85, 0),\n            dendrite(1, 0.5, -60, 0),\n            dendrite(1, 0.5, -60, 120),\n            dendrite(1, 0.5, -60, 240),\n            // { point: [0, -1, -0.4, 0.2] },\n            // { point: [1.2, -1.6, 1.6, 0.3] },\n            // { point: [-1.5, -1, -1.2, 0.1] },\n            // {\n            //     point: [-1.2, -1.5, 1.2, 0.2],\n            //     children: [\n            //         { point: [-1.2, -1.75, 1.2, 0.2] },\n            //         { point: [2, -2.3, 1, 0.2] },\n            //         { point: [-0.7, -2.1, -1.2, 0.2] },\n            //     ],\n            // },\n            // { point: [-0.2, 1.5, 0.2, 0.4] },\n        ],\n    }\n    const bbox = computeBBox(tree)\n    const bboxCorner = bbox.min\n    const bboxSize: ArrayNumber3 = [bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1], bbox.max[2] - bbox.min[2]]\n    console.log(\"🐞 [marching-cubes.demo@61] bbox =\", bbox) // @FIXME: Remove this line written on 2026-02-10 at 15:57\n    console.log(\"🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =\", bboxCorner, bboxSize) // @FIXME: Remove this line written on 2026-02-10 at 15:56\n    const sdfList: Array<(p: ArrayNumber3) => number> = makeListOfSDF(tree)\n    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 8,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()\n    state.add(new TgdPainterAxes(ctx, { scale: 2 }))\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nfunction makeListOfSDF(tree: Tree): ((p: ArrayNumber3) => number)[] {\n    const sdfList: ((p: ArrayNumber3) => number)[] = []\n    recursiveListOfSDF(tree, sdfList)\n    return sdfList\n}\n\nfunction recursiveListOfSDF({ point, children }: Tree, sdfList: ((p: ArrayNumber3) => number)[]) {\n    if (!children) return\n\n    const [x0, y0, z0, r0] = point\n    for (const child of children) {\n        const [x1, y1, z1, r1] = child.point\n        const sdf = (p: ArrayNumber3) => tgdSdfCapsule(p, [x0, y0, z0], [x1, y1, z1], r0, r1)\n        sdfList.push(sdf)\n        recursiveListOfSDF(child, sdfList)\n    }\n}\n\ninterface BBox {\n    min: ArrayNumber3\n    max: ArrayNumber3\n}\n\nfunction computeBBox(tree: Tree): BBox {\n    const fringe = [tree]\n    const min: ArrayNumber3 = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]\n    const max: ArrayNumber3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]\n    while (fringe.length > 0) {\n        const item = fringe.pop()\n        if (!item) continue\n\n        const [x, y, z, r0] = item.point\n        console.log(\"🐞 [marching-cubes.demo@150] x, y, z =\", x, y, z) // @FIXME: Remove this line written on 2026-02-10 at 16:02\n        const r = r0 * 1.1\n        min[0] = Math.min(min[0], x - r)\n        max[0] = Math.max(min[0], x + r)\n        min[1] = Math.min(min[1], y - r)\n        max[1] = Math.max(min[1], y + r)\n        min[2] = Math.min(min[2], z - r)\n        max[2] = Math.max(min[2], z + r)\n        if (item.children) fringe.push(...item.children)\n    }\n    return { min, max }\n}\n\nfunction dendrite(length: number, radius: number, lat: number, lng: number, x = 0, y = 0, z = 0): Tree {\n    const radius2 = radius * tgdCalcRandom(0.5, 1.1)\n    const lat0 = lat + tgdCalcRandom(-30, 30)\n    const lng0 = lng + tgdCalcRandom(-30, 30)\n    const latAng = tgdCalcDegToRad(lat0)\n    const lngAng = tgdCalcDegToRad(lng0)\n    const vy = Math.sin(latAng)\n    const r = Math.cos(latAng)\n    const vx = r * Math.cos(lngAng)\n    const vz = r * Math.sin(lngAng)\n    const x2 = x + vx * length\n    const y2 = y + vy * length\n    const z2 = z + vz * length\n    const tree: Tree = {\n        point: [x, y, z, radius],\n        children: [],\n    }\n    if (radius2 > 0.1) {\n        const count = Math.max(1, Math.floor(tgdCalcRandom(0, 3)))\n        for (let loop = 0; loop < count; loop++) {\n            tree.children?.push(\n                dendrite(\n                    length * tgdCalcRandom(0.5, 1.1),\n                    radius2,\n                    lat0 + tgdCalcRandom(-30, 30),\n                    lng0 + tgdCalcRandom(-30, 30),\n                    x2,\n                    y2,\n                    z2,\n                ),\n            )\n        }\n    }\n    return tree\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_marching_cubes_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
79216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);



function init(ctx) {
    ctx.camera.fitSpaceAtTarget(12, 12);
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000,
    });
    const tree = {
        point: [0, 0.5, 0, 0.5],
        children: [
            dendrite(1, 0.5, 85, 0),
            dendrite(1, 0.5, -60, 0),
            dendrite(1, 0.5, -60, 120),
            dendrite(1, 0.5, -60, 240),
        ],
    };
    const bbox = computeBBox(tree);
    const bboxCorner = bbox.min;
    const bboxSize = [bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1], bbox.max[2] - bbox.min[2]];
    console.log("🐞 [marching-cubes.demo@61] bbox =", bbox);
    console.log("🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =", bboxCorner, bboxSize);
    const sdfList = makeListOfSDF(tree);
    const options = {
        bboxCorner,
        bboxSize,
        voxelSize: 1 / 8,
        sdfPoint(x, y, z) {
            const p = [x, y, z];
            const o = [0, 0.5, 0];
            let distance = (0,_tolokoban_tgd__rspack_import_1.tgdSdfSphere)(p, [0, 0, 0], 0.8);
            for (const sdf of sdfList) {
                distance = Math.min(distance, sdf(p));
            }
            return distance;
        },
        smoothingLevel: 2,
    };
    const geometry = (0,_tolokoban_tgd__rspack_import_1.tgdMakeGeometryFromVolume)(options);
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(ctx, {
        geometry,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation(),
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [mesh],
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state);
    ctx.paint();
    state.add(new _tolokoban_tgd__rspack_import_1.TgdPainterAxes(ctx, { scale: 2 }));
}
function Demo() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init });
}
function makeListOfSDF(tree) {
    const sdfList = [];
    recursiveListOfSDF(tree, sdfList);
    return sdfList;
}
function recursiveListOfSDF({ point, children }, sdfList) {
    if (!children)
        return;
    const [x0, y0, z0, r0] = point;
    for (const child of children) {
        const [x1, y1, z1, r1] = child.point;
        const sdf = (p) => (0,_tolokoban_tgd__rspack_import_1.tgdSdfCapsule)(p, [x0, y0, z0], [x1, y1, z1], r0, r1);
        sdfList.push(sdf);
        recursiveListOfSDF(child, sdfList);
    }
}
function computeBBox(tree) {
    const fringe = [tree];
    const min = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
    const max = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
    while (fringe.length > 0) {
        const item = fringe.pop();
        if (!item)
            continue;
        const [x, y, z, r0] = item.point;
        console.log("🐞 [marching-cubes.demo@150] x, y, z =", x, y, z);
        const r = r0 * 1.1;
        min[0] = Math.min(min[0], x - r);
        max[0] = Math.max(min[0], x + r);
        min[1] = Math.min(min[1], y - r);
        max[1] = Math.max(min[1], y + r);
        min[2] = Math.min(min[2], z - r);
        max[2] = Math.max(min[2], z + r);
        if (item.children)
            fringe.push(...item.children);
    }
    return { min, max };
}
function dendrite(length, radius, lat, lng, x = 0, y = 0, z = 0) {
    const radius2 = radius * (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0.5, 1.1);
    const lat0 = lat + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30);
    const lng0 = lng + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30);
    const latAng = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(lat0);
    const lngAng = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(lng0);
    const vy = Math.sin(latAng);
    const r = Math.cos(latAng);
    const vx = r * Math.cos(lngAng);
    const vz = r * Math.sin(lngAng);
    const x2 = x + vx * length;
    const y2 = y + vy * length;
    const z2 = z + vz * length;
    const tree = {
        point: [x, y, z, radius],
        children: [],
    };
    if (radius2 > 0.1) {
        const count = Math.max(1, Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 3)));
        for (let loop = 0; loop < count; loop++) {
            tree.children?.push(dendrite(length * (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0.5, 1.1), radius2, lat0 + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30), lng0 + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30), x2, y2, z2));
        }
    }
    return tree;
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
68859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marching_cubes__rspack_import_1 = __webpack_require__(54145);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Marching cubes"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marching_cubes__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can see how to create the 256 configurations for marching cubes\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/mesh/volume-to-mesh",
                        children: "here"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC03NmQ1OTguNjBjNjc4NjQzZTlkNDU1OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvbWFyY2hpbmctY3ViZXMuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXJjaGluZy1jdWJlcy9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyY2hpbmctY3ViZXMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XFxuICAgICAgICBiYm94Q29ybmVyLFxcbiAgICAgICAgYmJveFNpemUsXFxuICAgICAgICB2b3hlbFNpemU6IDEgLyA4LFxcbiAgICAgICAgc2RmUG9pbnQoeCwgeSwgeikge1xcbiAgICAgICAgICAgIGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XVxcbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXFxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KVxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcXG4gICAgICAgIH0sXFxuICAgICAgICBzbW9vdGhpbmdMZXZlbDogMixcXG4gICAgfVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXFxuICAgIGN0eC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIHR5cGUgTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMsXFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUsXFxuICAgIHRnZE1ha2VQb2ludHNDbG91ZEZyb21Wb2x1bWUsXFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcbiAgICBUZ2RQYWludGVyQXhlcyxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB0Z2RTZGZDYXBzdWxlLFxcbiAgICB0Z2RTZGZTcGhlcmUsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxudHlwZSBUcmVlID0ge1xcbiAgICBwb2ludDogQXJyYXlOdW1iZXI0XFxuICAgIGNoaWxkcmVuPzogVHJlZVtdXFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGN0eC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxMiwgMTIpXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuICAgICAgICBwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCA4NSwgMCksXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDApLFxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAxMjApLFxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAyNDApLFxcbiAgICAgICAgICAgIC8vIHsgcG9pbnQ6IFswLCAtMSwgLTAuNCwgMC4yXSB9LFxcbiAgICAgICAgICAgIC8vIHsgcG9pbnQ6IFsxLjIsIC0xLjYsIDEuNiwgMC4zXSB9LFxcbiAgICAgICAgICAgIC8vIHsgcG9pbnQ6IFstMS41LCAtMSwgLTEuMiwgMC4xXSB9LFxcbiAgICAgICAgICAgIC8vIHtcXG4gICAgICAgICAgICAvLyAgICAgcG9pbnQ6IFstMS4yLCAtMS41LCAxLjIsIDAuMl0sXFxuICAgICAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgLy8gICAgICAgICB7IHBvaW50OiBbLTEuMiwgLTEuNzUsIDEuMiwgMC4yXSB9LFxcbiAgICAgICAgICAgIC8vICAgICAgICAgeyBwb2ludDogWzIsIC0yLjMsIDEsIDAuMl0gfSxcXG4gICAgICAgICAgICAvLyAgICAgICAgIHsgcG9pbnQ6IFstMC43LCAtMi4xLCAtMS4yLCAwLjJdIH0sXFxuICAgICAgICAgICAgLy8gICAgIF0sXFxuICAgICAgICAgICAgLy8gfSxcXG4gICAgICAgICAgICAvLyB7IHBvaW50OiBbLTAuMiwgMS41LCAwLjIsIDAuNF0gfSxcXG4gICAgICAgIF0sXFxuICAgIH1cXG4gICAgY29uc3QgYmJveCA9IGNvbXB1dGVCQm94KHRyZWUpXFxuICAgIGNvbnN0IGJib3hDb3JuZXIgPSBiYm94Lm1pblxcbiAgICBjb25zdCBiYm94U2l6ZTogQXJyYXlOdW1iZXIzID0gW2Jib3gubWF4WzBdIC0gYmJveC5taW5bMF0sIGJib3gubWF4WzFdIC0gYmJveC5taW5bMV0sIGJib3gubWF4WzJdIC0gYmJveC5taW5bMl1dXFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94ID1cXFwiLCBiYm94KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94Q29ybmVyLCBiYm94U2l6ZSA9XFxcIiwgYmJveENvcm5lciwgYmJveFNpemUpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTZcXG4gICAgY29uc3Qgc2RmTGlzdDogQXJyYXk8KHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyPiA9IG1ha2VMaXN0T2ZTREYodHJlZSlcXG4gICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XFxuICAgICAgICBiYm94Q29ybmVyLFxcbiAgICAgICAgYmJveFNpemUsXFxuICAgICAgICB2b3hlbFNpemU6IDEgLyA4LFxcbiAgICAgICAgc2RmUG9pbnQoeCwgeSwgeikge1xcbiAgICAgICAgICAgIGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XVxcbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXFxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KVxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcXG4gICAgICAgIH0sXFxuICAgICAgICBzbW9vdGhpbmdMZXZlbDogMixcXG4gICAgfVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXFxuICAgIGN0eC5wYWludCgpXFxuICAgIHN0YXRlLmFkZChuZXcgVGdkUGFpbnRlckF4ZXMoY3R4LCB7IHNjYWxlOiAyIH0pKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXFxuZnVuY3Rpb24gbWFrZUxpc3RPZlNERih0cmVlOiBUcmVlKTogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSB7XFxuICAgIGNvbnN0IHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10gPSBbXVxcbiAgICByZWN1cnNpdmVMaXN0T2ZTREYodHJlZSwgc2RmTGlzdClcXG4gICAgcmV0dXJuIHNkZkxpc3RcXG59XFxuXFxuZnVuY3Rpb24gcmVjdXJzaXZlTGlzdE9mU0RGKHsgcG9pbnQsIGNoaWxkcmVuIH06IFRyZWUsIHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10pIHtcXG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuXFxuXFxuICAgIGNvbnN0IFt4MCwgeTAsIHowLCByMF0gPSBwb2ludFxcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XFxuICAgICAgICBjb25zdCBbeDEsIHkxLCB6MSwgcjFdID0gY2hpbGQucG9pbnRcXG4gICAgICAgIGNvbnN0IHNkZiA9IChwOiBBcnJheU51bWJlcjMpID0+IHRnZFNkZkNhcHN1bGUocCwgW3gwLCB5MCwgejBdLCBbeDEsIHkxLCB6MV0sIHIwLCByMSlcXG4gICAgICAgIHNkZkxpc3QucHVzaChzZGYpXFxuICAgICAgICByZWN1cnNpdmVMaXN0T2ZTREYoY2hpbGQsIHNkZkxpc3QpXFxuICAgIH1cXG59XFxuXFxuaW50ZXJmYWNlIEJCb3gge1xcbiAgICBtaW46IEFycmF5TnVtYmVyM1xcbiAgICBtYXg6IEFycmF5TnVtYmVyM1xcbn1cXG5cXG5mdW5jdGlvbiBjb21wdXRlQkJveCh0cmVlOiBUcmVlKTogQkJveCB7XFxuICAgIGNvbnN0IGZyaW5nZSA9IFt0cmVlXVxcbiAgICBjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXVxcbiAgICBjb25zdCBtYXg6IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXVxcbiAgICB3aGlsZSAoZnJpbmdlLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKClcXG4gICAgICAgIGlmICghaXRlbSkgY29udGludWVcXG5cXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVxcXCIsIHgsIHksIHopIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTY6MDJcXG4gICAgICAgIGNvbnN0IHIgPSByMCAqIDEuMVxcbiAgICAgICAgbWluWzBdID0gTWF0aC5taW4obWluWzBdLCB4IC0gcilcXG4gICAgICAgIG1heFswXSA9IE1hdGgubWF4KG1pblswXSwgeCArIHIpXFxuICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIHkgLSByKVxcbiAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWluWzFdLCB5ICsgcilcXG4gICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgeiAtIHIpXFxuICAgICAgICBtYXhbMl0gPSBNYXRoLm1heChtaW5bMl0sIHogKyByKVxcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIGZyaW5nZS5wdXNoKC4uLml0ZW0uY2hpbGRyZW4pXFxuICAgIH1cXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfVxcbn1cXG5cXG5mdW5jdGlvbiBkZW5kcml0ZShsZW5ndGg6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgeCA9IDAsIHkgPSAwLCB6ID0gMCk6IFRyZWUge1xcbiAgICBjb25zdCByYWRpdXMyID0gcmFkaXVzICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSlcXG4gICAgY29uc3QgbGF0MCA9IGxhdCArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcXG4gICAgY29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcXG4gICAgY29uc3QgbGF0QW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxhdDApXFxuICAgIGNvbnN0IGxuZ0FuZyA9IHRnZENhbGNEZWdUb1JhZChsbmcwKVxcbiAgICBjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZylcXG4gICAgY29uc3QgciA9IE1hdGguY29zKGxhdEFuZylcXG4gICAgY29uc3QgdnggPSByICogTWF0aC5jb3MobG5nQW5nKVxcbiAgICBjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpXFxuICAgIGNvbnN0IHgyID0geCArIHZ4ICogbGVuZ3RoXFxuICAgIGNvbnN0IHkyID0geSArIHZ5ICogbGVuZ3RoXFxuICAgIGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoXFxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuICAgICAgICBwb2ludDogW3gsIHksIHosIHJhZGl1c10sXFxuICAgICAgICBjaGlsZHJlbjogW10sXFxuICAgIH1cXG4gICAgaWYgKHJhZGl1czIgPiAwLjEpIHtcXG4gICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSlcXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgY291bnQ7IGxvb3ArKykge1xcbiAgICAgICAgICAgIHRyZWUuY2hpbGRyZW4/LnB1c2goXFxuICAgICAgICAgICAgICAgIGRlbmRyaXRlKFxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSksXFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyLFxcbiAgICAgICAgICAgICAgICAgICAgbGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXFxuICAgICAgICAgICAgICAgICAgICBsbmcwICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKSxcXG4gICAgICAgICAgICAgICAgICAgIHgyLFxcbiAgICAgICAgICAgICAgICAgICAgeTIsXFxuICAgICAgICAgICAgICAgICAgICB6MixcXG4gICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIHRyZWVcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyxcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUsXG4gICAgdGdkTWFrZVBvaW50c0Nsb3VkRnJvbVZvbHVtZSxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RQYWludGVyQXhlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZFNkZkNhcHN1bGUsXG4gICAgdGdkU2RmU3BoZXJlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG50eXBlIFRyZWUgPSB7XG4gICAgcG9pbnQ6IEFycmF5TnVtYmVyNFxuICAgIGNoaWxkcmVuPzogVHJlZVtdXG59XG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgY3R4LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEyLCAxMilcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgfSlcbiAgICBjb25zdCB0cmVlOiBUcmVlID0ge1xuICAgICAgICBwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgODUsIDApLFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDApLFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDEyMCksXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMjQwKSxcbiAgICAgICAgICAgIC8vIHsgcG9pbnQ6IFswLCAtMSwgLTAuNCwgMC4yXSB9LFxuICAgICAgICAgICAgLy8geyBwb2ludDogWzEuMiwgLTEuNiwgMS42LCAwLjNdIH0sXG4gICAgICAgICAgICAvLyB7IHBvaW50OiBbLTEuNSwgLTEsIC0xLjIsIDAuMV0gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBwb2ludDogWy0xLjIsIC0xLjUsIDEuMiwgMC4yXSxcbiAgICAgICAgICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgLy8gICAgICAgICB7IHBvaW50OiBbLTEuMiwgLTEuNzUsIDEuMiwgMC4yXSB9LFxuICAgICAgICAgICAgLy8gICAgICAgICB7IHBvaW50OiBbMiwgLTIuMywgMSwgMC4yXSB9LFxuICAgICAgICAgICAgLy8gICAgICAgICB7IHBvaW50OiBbLTAuNywgLTIuMSwgLTEuMiwgMC4yXSB9LFxuICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLy8geyBwb2ludDogWy0wLjIsIDEuNSwgMC4yLCAwLjRdIH0sXG4gICAgICAgIF0sXG4gICAgfVxuICAgIGNvbnN0IGJib3ggPSBjb21wdXRlQkJveCh0cmVlKVxuICAgIGNvbnN0IGJib3hDb3JuZXIgPSBiYm94Lm1pblxuICAgIGNvbnN0IGJib3hTaXplOiBBcnJheU51bWJlcjMgPSBbYmJveC5tYXhbMF0gLSBiYm94Lm1pblswXSwgYmJveC5tYXhbMV0gLSBiYm94Lm1pblsxXSwgYmJveC5tYXhbMl0gLSBiYm94Lm1pblsyXV1cbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3ggPVwiLCBiYm94KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94Q29ybmVyLCBiYm94U2l6ZSA9XCIsIGJib3hDb3JuZXIsIGJib3hTaXplKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU2XG4gICAgY29uc3Qgc2RmTGlzdDogQXJyYXk8KHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyPiA9IG1ha2VMaXN0T2ZTREYodHJlZSlcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XG4gICAgICAgIGJib3hDb3JuZXIsXG4gICAgICAgIGJib3hTaXplLFxuICAgICAgICB2b3hlbFNpemU6IDEgLyA4LFxuICAgICAgICBzZGZQb2ludCh4LCB5LCB6KSB7XG4gICAgICAgICAgICBjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel1cbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlXG4gICAgICAgIH0sXG4gICAgICAgIHNtb290aGluZ0xldmVsOiAyLFxuICAgIH1cbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgIH0pXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXG4gICAgY3R4LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgc3RhdGUuYWRkKG5ldyBUZ2RQYWludGVyQXhlcyhjdHgsIHsgc2NhbGU6IDIgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XG59XG5cbmZ1bmN0aW9uIG1ha2VMaXN0T2ZTREYodHJlZTogVHJlZSk6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10ge1xuICAgIGNvbnN0IHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10gPSBbXVxuICAgIHJlY3Vyc2l2ZUxpc3RPZlNERih0cmVlLCBzZGZMaXN0KVxuICAgIHJldHVybiBzZGZMaXN0XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUxpc3RPZlNERih7IHBvaW50LCBjaGlsZHJlbiB9OiBUcmVlLCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdKSB7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuXG5cbiAgICBjb25zdCBbeDAsIHkwLCB6MCwgcjBdID0gcG9pbnRcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxLCByMV0gPSBjaGlsZC5wb2ludFxuICAgICAgICBjb25zdCBzZGYgPSAocDogQXJyYXlOdW1iZXIzKSA9PiB0Z2RTZGZDYXBzdWxlKHAsIFt4MCwgeTAsIHowXSwgW3gxLCB5MSwgejFdLCByMCwgcjEpXG4gICAgICAgIHNkZkxpc3QucHVzaChzZGYpXG4gICAgICAgIHJlY3Vyc2l2ZUxpc3RPZlNERihjaGlsZCwgc2RmTGlzdClcbiAgICB9XG59XG5cbmludGVyZmFjZSBCQm94IHtcbiAgICBtaW46IEFycmF5TnVtYmVyM1xuICAgIG1heDogQXJyYXlOdW1iZXIzXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVCQm94KHRyZWU6IFRyZWUpOiBCQm94IHtcbiAgICBjb25zdCBmcmluZ2UgPSBbdHJlZV1cbiAgICBjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXVxuICAgIGNvbnN0IG1heDogQXJyYXlOdW1iZXIzID0gW051bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFldXG4gICAgd2hpbGUgKGZyaW5nZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKClcbiAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVwiLCB4LCB5LCB6KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE2OjAyXG4gICAgICAgIGNvbnN0IHIgPSByMCAqIDEuMVxuICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIHggLSByKVxuICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtaW5bMF0sIHggKyByKVxuICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIHkgLSByKVxuICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChtaW5bMV0sIHkgKyByKVxuICAgICAgICBtaW5bMl0gPSBNYXRoLm1pbihtaW5bMl0sIHogLSByKVxuICAgICAgICBtYXhbMl0gPSBNYXRoLm1heChtaW5bMl0sIHogKyByKVxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikgZnJpbmdlLnB1c2goLi4uaXRlbS5jaGlsZHJlbilcbiAgICB9XG4gICAgcmV0dXJuIHsgbWluLCBtYXggfVxufVxuXG5mdW5jdGlvbiBkZW5kcml0ZShsZW5ndGg6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgeCA9IDAsIHkgPSAwLCB6ID0gMCk6IFRyZWUge1xuICAgIGNvbnN0IHJhZGl1czIgPSByYWRpdXMgKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKVxuICAgIGNvbnN0IGxhdDAgPSBsYXQgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApXG4gICAgY29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcbiAgICBjb25zdCBsYXRBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobGF0MClcbiAgICBjb25zdCBsbmdBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobG5nMClcbiAgICBjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZylcbiAgICBjb25zdCByID0gTWF0aC5jb3MobGF0QW5nKVxuICAgIGNvbnN0IHZ4ID0gciAqIE1hdGguY29zKGxuZ0FuZylcbiAgICBjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpXG4gICAgY29uc3QgeDIgPSB4ICsgdnggKiBsZW5ndGhcbiAgICBjb25zdCB5MiA9IHkgKyB2eSAqIGxlbmd0aFxuICAgIGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoXG4gICAgY29uc3QgdHJlZTogVHJlZSA9IHtcbiAgICAgICAgcG9pbnQ6IFt4LCB5LCB6LCByYWRpdXNdLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfVxuICAgIGlmIChyYWRpdXMyID4gMC4xKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSlcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBjb3VudDsgbG9vcCsrKSB7XG4gICAgICAgICAgICB0cmVlLmNoaWxkcmVuPy5wdXNoKFxuICAgICAgICAgICAgICAgIGRlbmRyaXRlKFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMixcbiAgICAgICAgICAgICAgICAgICAgbGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXG4gICAgICAgICAgICAgICAgICAgIGxuZzAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxuICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgeTIsXG4gICAgICAgICAgICAgICAgICAgIHoyLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWVcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ2I7QUFFeEMsTUFBTSxLQUFLLEdBQUcsRUFBQyxvQkFBb0IsRUFBQyxtNEJBQW00QixFQUFDO0FBQ3g2QixNQUFNLElBQUksR0FBRywreExBQSt4TDtBQUU3eEwsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLGdEQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUN2RCxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FDckMsR0FDWCxFQUNOLDJDQUFDLHVEQUFVLElBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBSSxJQUN2RCxJQUNQO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7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