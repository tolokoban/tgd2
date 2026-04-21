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





const FOCUS = { "Initializing WebGL": "    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()" };
const FULL = "import {\n    type ArrayNumber3,\n    type ArrayNumber4,\n    type MakeGeometryFromVolumeOptions,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialFaceOrientation,\n    TgdPainterAxes,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    tgdCalcDegToRad,\n    tgdCalcRandom,\n    tgdMakeGeometryFromVolume,\n    tgdSdfCapsule,\n    tgdSdfSphere,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\ntype Tree = {\n    point: ArrayNumber4\n    children?: Tree[]\n}\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.fitSpaceAtTarget(12, 12)\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    const tree: Tree = {\n        point: [0, 0.5, 0, 0.5],\n        children: [\n            dendrite(1, 0.5, 85, 0),\n            dendrite(1, 0.5, -60, 0),\n            dendrite(1, 0.5, -60, 120),\n            dendrite(1, 0.5, -60, 240),\n        ],\n    }\n    const bbox = computeBBox(tree)\n    const bboxCorner = bbox.min\n    const bboxSize: ArrayNumber3 = [bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1], bbox.max[2] - bbox.min[2]]\n    console.log(\"🐞 [marching-cubes.demo@61] bbox =\", bbox) // @FIXME: Remove this line written on 2026-02-10 at 15:57\n    console.log(\"🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =\", bboxCorner, bboxSize) // @FIXME: Remove this line written on 2026-02-10 at 15:56\n    const sdfList: Array<(p: ArrayNumber3) => number> = makeListOfSDF(tree)\n    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()\n    state.add(new TgdPainterAxes(ctx, { scale: 2 }))\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo options={{ alpha: false }} />\n}\n\nfunction makeListOfSDF(tree: Tree): ((p: ArrayNumber3) => number)[] {\n    const sdfList: ((p: ArrayNumber3) => number)[] = []\n    recursiveListOfSDF(tree, sdfList)\n    return sdfList\n}\n\nfunction recursiveListOfSDF({ point, children }: Tree, sdfList: ((p: ArrayNumber3) => number)[]) {\n    if (!children) return\n\n    const [x0, y0, z0, r0] = point\n    for (const child of children) {\n        const [x1, y1, z1, r1] = child.point\n        const sdf = (p: ArrayNumber3) => tgdSdfCapsule(p, [x0, y0, z0], [x1, y1, z1], r0, r1)\n        sdfList.push(sdf)\n        recursiveListOfSDF(child, sdfList)\n    }\n}\n\ninterface BBox {\n    min: ArrayNumber3\n    max: ArrayNumber3\n}\n\nfunction computeBBox(tree: Tree): BBox {\n    const fringe = [tree]\n    const min: ArrayNumber3 = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]\n    const max: ArrayNumber3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]\n    while (fringe.length > 0) {\n        const item = fringe.pop()\n        if (!item) continue\n\n        const [x, y, z, r0] = item.point\n        console.log(\"🐞 [marching-cubes.demo@150] x, y, z =\", x, y, z) // @FIXME: Remove this line written on 2026-02-10 at 16:02\n        const r = r0 * 1.1\n        min[0] = Math.min(min[0], x - r)\n        max[0] = Math.max(min[0], x + r)\n        min[1] = Math.min(min[1], y - r)\n        max[1] = Math.max(min[1], y + r)\n        min[2] = Math.min(min[2], z - r)\n        max[2] = Math.max(min[2], z + r)\n        if (item.children) fringe.push(...item.children)\n    }\n    return { min, max }\n}\n\nfunction dendrite(length: number, radius: number, lat: number, lng: number, x = 0, y = 0, z = 0): Tree {\n    const radius2 = radius * tgdCalcRandom(0.5, 1.1)\n    const lat0 = lat + tgdCalcRandom(-30, 30)\n    const lng0 = lng + tgdCalcRandom(-30, 30)\n    const latAng = tgdCalcDegToRad(lat0)\n    const lngAng = tgdCalcDegToRad(lng0)\n    const vy = Math.sin(latAng)\n    const r = Math.cos(latAng)\n    const vx = r * Math.cos(lngAng)\n    const vz = r * Math.sin(lngAng)\n    const x2 = x + vx * length\n    const y2 = y + vy * length\n    const z2 = z + vz * length\n    const tree: Tree = {\n        point: [x, y, z, radius],\n        children: [],\n    }\n    if (radius2 > 0.1) {\n        const count = Math.max(1, Math.floor(tgdCalcRandom(0, 3)))\n        for (let loop = 0; loop < count; loop++) {\n            tree.children?.push(\n                dendrite(\n                    length * tgdCalcRandom(0.5, 1.1),\n                    radius2,\n                    lat0 + tgdCalcRandom(-30, 30),\n                    lng0 + tgdCalcRandom(-30, 30),\n                    x2,\n                    y2,\n                    z2,\n                ),\n            )\n        }\n    }\n    return tree\n}\n";
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
        voxelSize: 1 / 16,
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
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true, options: { alpha: false } });
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marching_cubes__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC03NmQ1OTguMTU2NDIwYzgzODI3Y2ZiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXJjaGluZy1jdWJlcy9fL21hcmNoaW5nLWN1YmVzL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvXy9tYXJjaGluZy1jdWJlcy9tYXJjaGluZy1jdWJlcy5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXJjaGluZy1jdWJlcy9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFyY2hpbmctY3ViZXMuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XFxuICAgICAgICBiYm94Q29ybmVyLFxcbiAgICAgICAgYmJveFNpemUsXFxuICAgICAgICB2b3hlbFNpemU6IDEgLyAxNixcXG4gICAgICAgIHNkZlBvaW50KHgsIHksIHopIHtcXG4gICAgICAgICAgICBjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel1cXG4gICAgICAgICAgICBjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXVxcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRnZFNkZlNwaGVyZShwLCBbMCwgMCwgMF0sIDAuOClcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIHNkZihwKSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlXFxuICAgICAgICB9LFxcbiAgICAgICAgc21vb3RoaW5nTGV2ZWw6IDIsXFxuICAgIH1cXG4gICAgY29uc3QgZ2VvbWV0cnkgPSB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lKG9wdGlvbnMpXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XFxuICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pXFxuICAgIGN0eC5hZGQobmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksIHN0YXRlKVxcbiAgICBjdHgucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjMsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0eXBlIE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuICAgIFRnZFBhaW50ZXJBeGVzLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgdGdkQ2FsY1JhbmRvbSxcXG4gICAgdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZSxcXG4gICAgdGdkU2RmQ2Fwc3VsZSxcXG4gICAgdGdkU2RmU3BoZXJlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbnR5cGUgVHJlZSA9IHtcXG4gICAgcG9pbnQ6IEFycmF5TnVtYmVyNFxcbiAgICBjaGlsZHJlbj86IFRyZWVbXVxcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcbiAgICBjdHguY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjb25zdCB0cmVlOiBUcmVlID0ge1xcbiAgICAgICAgcG9pbnQ6IFswLCAwLjUsIDAsIDAuNV0sXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgODUsIDApLFxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAwKSxcXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMTIwKSxcXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMjQwKSxcXG4gICAgICAgIF0sXFxuICAgIH1cXG4gICAgY29uc3QgYmJveCA9IGNvbXB1dGVCQm94KHRyZWUpXFxuICAgIGNvbnN0IGJib3hDb3JuZXIgPSBiYm94Lm1pblxcbiAgICBjb25zdCBiYm94U2l6ZTogQXJyYXlOdW1iZXIzID0gW2Jib3gubWF4WzBdIC0gYmJveC5taW5bMF0sIGJib3gubWF4WzFdIC0gYmJveC5taW5bMV0sIGJib3gubWF4WzJdIC0gYmJveC5taW5bMl1dXFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94ID1cXFwiLCBiYm94KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XFxuICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94Q29ybmVyLCBiYm94U2l6ZSA9XFxcIiwgYmJveENvcm5lciwgYmJveFNpemUpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTZcXG4gICAgY29uc3Qgc2RmTGlzdDogQXJyYXk8KHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyPiA9IG1ha2VMaXN0T2ZTREYodHJlZSlcXG4gICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XFxuICAgICAgICBiYm94Q29ybmVyLFxcbiAgICAgICAgYmJveFNpemUsXFxuICAgICAgICB2b3hlbFNpemU6IDEgLyAxNixcXG4gICAgICAgIHNkZlBvaW50KHgsIHksIHopIHtcXG4gICAgICAgICAgICBjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel1cXG4gICAgICAgICAgICBjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXVxcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRnZFNkZlNwaGVyZShwLCBbMCwgMCwgMF0sIDAuOClcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIHNkZihwKSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlXFxuICAgICAgICB9LFxcbiAgICAgICAgc21vb3RoaW5nTGV2ZWw6IDIsXFxuICAgIH1cXG4gICAgY29uc3QgZ2VvbWV0cnkgPSB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lKG9wdGlvbnMpXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XFxuICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXFxuICAgIH0pXFxuICAgIGN0eC5hZGQobmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksIHN0YXRlKVxcbiAgICBjdHgucGFpbnQoKVxcbiAgICBzdGF0ZS5hZGQobmV3IFRnZFBhaW50ZXJBeGVzKGN0eCwgeyBzY2FsZTogMiB9KSlcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VMaXN0T2ZTREYodHJlZTogVHJlZSk6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10ge1xcbiAgICBjb25zdCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdID0gW11cXG4gICAgcmVjdXJzaXZlTGlzdE9mU0RGKHRyZWUsIHNkZkxpc3QpXFxuICAgIHJldHVybiBzZGZMaXN0XFxufVxcblxcbmZ1bmN0aW9uIHJlY3Vyc2l2ZUxpc3RPZlNERih7IHBvaW50LCBjaGlsZHJlbiB9OiBUcmVlLCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdKSB7XFxuICAgIGlmICghY2hpbGRyZW4pIHJldHVyblxcblxcbiAgICBjb25zdCBbeDAsIHkwLCB6MCwgcjBdID0gcG9pbnRcXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xcbiAgICAgICAgY29uc3QgW3gxLCB5MSwgejEsIHIxXSA9IGNoaWxkLnBvaW50XFxuICAgICAgICBjb25zdCBzZGYgPSAocDogQXJyYXlOdW1iZXIzKSA9PiB0Z2RTZGZDYXBzdWxlKHAsIFt4MCwgeTAsIHowXSwgW3gxLCB5MSwgejFdLCByMCwgcjEpXFxuICAgICAgICBzZGZMaXN0LnB1c2goc2RmKVxcbiAgICAgICAgcmVjdXJzaXZlTGlzdE9mU0RGKGNoaWxkLCBzZGZMaXN0KVxcbiAgICB9XFxufVxcblxcbmludGVyZmFjZSBCQm94IHtcXG4gICAgbWluOiBBcnJheU51bWJlcjNcXG4gICAgbWF4OiBBcnJheU51bWJlcjNcXG59XFxuXFxuZnVuY3Rpb24gY29tcHV0ZUJCb3godHJlZTogVHJlZSk6IEJCb3gge1xcbiAgICBjb25zdCBmcmluZ2UgPSBbdHJlZV1cXG4gICAgY29uc3QgbWluOiBBcnJheU51bWJlcjMgPSBbTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWV1cXG4gICAgY29uc3QgbWF4OiBBcnJheU51bWJlcjMgPSBbTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIE51bWJlci5ORUdBVElWRV9JTkZJTklUWV1cXG4gICAgd2hpbGUgKGZyaW5nZS5sZW5ndGggPiAwKSB7XFxuICAgICAgICBjb25zdCBpdGVtID0gZnJpbmdlLnBvcCgpXFxuICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXFxuXFxuICAgICAgICBjb25zdCBbeCwgeSwgeiwgcjBdID0gaXRlbS5wb2ludFxcbiAgICAgICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9AMTUwXSB4LCB5LCB6ID1cXFwiLCB4LCB5LCB6KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE2OjAyXFxuICAgICAgICBjb25zdCByID0gcjAgKiAxLjFcXG4gICAgICAgIG1pblswXSA9IE1hdGgubWluKG1pblswXSwgeCAtIHIpXFxuICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtaW5bMF0sIHggKyByKVxcbiAgICAgICAgbWluWzFdID0gTWF0aC5taW4obWluWzFdLCB5IC0gcilcXG4gICAgICAgIG1heFsxXSA9IE1hdGgubWF4KG1pblsxXSwgeSArIHIpXFxuICAgICAgICBtaW5bMl0gPSBNYXRoLm1pbihtaW5bMl0sIHogLSByKVxcbiAgICAgICAgbWF4WzJdID0gTWF0aC5tYXgobWluWzJdLCB6ICsgcilcXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSBmcmluZ2UucHVzaCguLi5pdGVtLmNoaWxkcmVuKVxcbiAgICB9XFxuICAgIHJldHVybiB7IG1pbiwgbWF4IH1cXG59XFxuXFxuZnVuY3Rpb24gZGVuZHJpdGUobGVuZ3RoOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIsIHggPSAwLCB5ID0gMCwgeiA9IDApOiBUcmVlIHtcXG4gICAgY29uc3QgcmFkaXVzMiA9IHJhZGl1cyAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpXFxuICAgIGNvbnN0IGxhdDAgPSBsYXQgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApXFxuICAgIGNvbnN0IGxuZzAgPSBsbmcgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApXFxuICAgIGNvbnN0IGxhdEFuZyA9IHRnZENhbGNEZWdUb1JhZChsYXQwKVxcbiAgICBjb25zdCBsbmdBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobG5nMClcXG4gICAgY29uc3QgdnkgPSBNYXRoLnNpbihsYXRBbmcpXFxuICAgIGNvbnN0IHIgPSBNYXRoLmNvcyhsYXRBbmcpXFxuICAgIGNvbnN0IHZ4ID0gciAqIE1hdGguY29zKGxuZ0FuZylcXG4gICAgY29uc3QgdnogPSByICogTWF0aC5zaW4obG5nQW5nKVxcbiAgICBjb25zdCB4MiA9IHggKyB2eCAqIGxlbmd0aFxcbiAgICBjb25zdCB5MiA9IHkgKyB2eSAqIGxlbmd0aFxcbiAgICBjb25zdCB6MiA9IHogKyB2eiAqIGxlbmd0aFxcbiAgICBjb25zdCB0cmVlOiBUcmVlID0ge1xcbiAgICAgICAgcG9pbnQ6IFt4LCB5LCB6LCByYWRpdXNdLFxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxcbiAgICB9XFxuICAgIGlmIChyYWRpdXMyID4gMC4xKSB7XFxuICAgICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCAzKSkpXFxuICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IGNvdW50OyBsb29wKyspIHtcXG4gICAgICAgICAgICB0cmVlLmNoaWxkcmVuPy5wdXNoKFxcbiAgICAgICAgICAgICAgICBkZW5kcml0ZShcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpLFxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMixcXG4gICAgICAgICAgICAgICAgICAgIGxhdDAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxcbiAgICAgICAgICAgICAgICAgICAgbG5nMCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXFxuICAgICAgICAgICAgICAgICAgICB4MixcXG4gICAgICAgICAgICAgICAgICAgIHkyLFxcbiAgICAgICAgICAgICAgICAgICAgejIsXFxuICAgICAgICAgICAgICAgICksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiB0cmVlXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHR5cGUgTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RQYWludGVyQXhlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB0Z2RDYWxjUmFuZG9tLFxuICAgIHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUsXG4gICAgdGdkU2RmQ2Fwc3VsZSxcbiAgICB0Z2RTZGZTcGhlcmUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbnR5cGUgVHJlZSA9IHtcbiAgICBwb2ludDogQXJyYXlOdW1iZXI0XG4gICAgY2hpbGRyZW4/OiBUcmVlW11cbn1cblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcbiAgICBjdHguY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICB9KVxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XG4gICAgICAgIHBvaW50OiBbMCwgMC41LCAwLCAwLjVdLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCA4NSwgMCksXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMCksXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMTIwKSxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAyNDApLFxuICAgICAgICBdLFxuICAgIH1cbiAgICBjb25zdCBiYm94ID0gY29tcHV0ZUJCb3godHJlZSlcbiAgICBjb25zdCBiYm94Q29ybmVyID0gYmJveC5taW5cbiAgICBjb25zdCBiYm94U2l6ZTogQXJyYXlOdW1iZXIzID0gW2Jib3gubWF4WzBdIC0gYmJveC5taW5bMF0sIGJib3gubWF4WzFdIC0gYmJveC5taW5bMV0sIGJib3gubWF4WzJdIC0gYmJveC5taW5bMl1dXG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94ID1cIiwgYmJveCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1N1xuICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveENvcm5lciwgYmJveFNpemUgPVwiLCBiYm94Q29ybmVyLCBiYm94U2l6ZSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1NlxuICAgIGNvbnN0IHNkZkxpc3Q6IEFycmF5PChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcj4gPSBtYWtlTGlzdE9mU0RGKHRyZWUpXG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xuICAgICAgICBiYm94Q29ybmVyLFxuICAgICAgICBiYm94U2l6ZSxcbiAgICAgICAgdm94ZWxTaXplOiAxIC8gMTYsXG4gICAgICAgIHNkZlBvaW50KHgsIHksIHopIHtcbiAgICAgICAgICAgIGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XVxuICAgICAgICAgICAgY29uc3QgbzogQXJyYXlOdW1iZXIzID0gWzAsIDAuNSwgMF1cbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IHRnZFNkZlNwaGVyZShwLCBbMCwgMCwgMF0sIDAuOClcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcbiAgICAgICAgfSxcbiAgICAgICAgc21vb3RoaW5nTGV2ZWw6IDIsXG4gICAgfVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XG4gICAgICAgIGdlb21ldHJ5LFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXG4gICAgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaF0sXG4gICAgfSlcbiAgICBjdHguYWRkKG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjIsIDAuMiwgMV0sIGRlcHRoOiAxIH0pLCBzdGF0ZSlcbiAgICBjdHgucGFpbnQoKVxuICAgIC8vICNlbmRcbiAgICBzdGF0ZS5hZGQobmV3IFRnZFBhaW50ZXJBeGVzKGN0eCwgeyBzY2FsZTogMiB9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gZ2l6bW8gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cbn1cblxuZnVuY3Rpb24gbWFrZUxpc3RPZlNERih0cmVlOiBUcmVlKTogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSB7XG4gICAgY29uc3Qgc2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSA9IFtdXG4gICAgcmVjdXJzaXZlTGlzdE9mU0RGKHRyZWUsIHNkZkxpc3QpXG4gICAgcmV0dXJuIHNkZkxpc3Rcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlTGlzdE9mU0RGKHsgcG9pbnQsIGNoaWxkcmVuIH06IFRyZWUsIHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10pIHtcbiAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm5cblxuICAgIGNvbnN0IFt4MCwgeTAsIHowLCByMF0gPSBwb2ludFxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgW3gxLCB5MSwgejEsIHIxXSA9IGNoaWxkLnBvaW50XG4gICAgICAgIGNvbnN0IHNkZiA9IChwOiBBcnJheU51bWJlcjMpID0+IHRnZFNkZkNhcHN1bGUocCwgW3gwLCB5MCwgejBdLCBbeDEsIHkxLCB6MV0sIHIwLCByMSlcbiAgICAgICAgc2RmTGlzdC5wdXNoKHNkZilcbiAgICAgICAgcmVjdXJzaXZlTGlzdE9mU0RGKGNoaWxkLCBzZGZMaXN0KVxuICAgIH1cbn1cblxuaW50ZXJmYWNlIEJCb3gge1xuICAgIG1pbjogQXJyYXlOdW1iZXIzXG4gICAgbWF4OiBBcnJheU51bWJlcjNcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUJCb3godHJlZTogVHJlZSk6IEJCb3gge1xuICAgIGNvbnN0IGZyaW5nZSA9IFt0cmVlXVxuICAgIGNvbnN0IG1pbjogQXJyYXlOdW1iZXIzID0gW051bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFldXG4gICAgY29uc3QgbWF4OiBBcnJheU51bWJlcjMgPSBbTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIE51bWJlci5ORUdBVElWRV9JTkZJTklUWV1cbiAgICB3aGlsZSAoZnJpbmdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGZyaW5nZS5wb3AoKVxuICAgICAgICBpZiAoIWl0ZW0pIGNvbnRpbnVlXG5cbiAgICAgICAgY29uc3QgW3gsIHksIHosIHIwXSA9IGl0ZW0ucG9pbnRcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDE1MF0geCwgeSwgeiA9XCIsIHgsIHksIHopIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTY6MDJcbiAgICAgICAgY29uc3QgciA9IHIwICogMS4xXG4gICAgICAgIG1pblswXSA9IE1hdGgubWluKG1pblswXSwgeCAtIHIpXG4gICAgICAgIG1heFswXSA9IE1hdGgubWF4KG1pblswXSwgeCArIHIpXG4gICAgICAgIG1pblsxXSA9IE1hdGgubWluKG1pblsxXSwgeSAtIHIpXG4gICAgICAgIG1heFsxXSA9IE1hdGgubWF4KG1pblsxXSwgeSArIHIpXG4gICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgeiAtIHIpXG4gICAgICAgIG1heFsyXSA9IE1hdGgubWF4KG1pblsyXSwgeiArIHIpXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSBmcmluZ2UucHVzaCguLi5pdGVtLmNoaWxkcmVuKVxuICAgIH1cbiAgICByZXR1cm4geyBtaW4sIG1heCB9XG59XG5cbmZ1bmN0aW9uIGRlbmRyaXRlKGxlbmd0aDogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgbGF0OiBudW1iZXIsIGxuZzogbnVtYmVyLCB4ID0gMCwgeSA9IDAsIHogPSAwKTogVHJlZSB7XG4gICAgY29uc3QgcmFkaXVzMiA9IHJhZGl1cyAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpXG4gICAgY29uc3QgbGF0MCA9IGxhdCArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcbiAgICBjb25zdCBsbmcwID0gbG5nICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKVxuICAgIGNvbnN0IGxhdEFuZyA9IHRnZENhbGNEZWdUb1JhZChsYXQwKVxuICAgIGNvbnN0IGxuZ0FuZyA9IHRnZENhbGNEZWdUb1JhZChsbmcwKVxuICAgIGNvbnN0IHZ5ID0gTWF0aC5zaW4obGF0QW5nKVxuICAgIGNvbnN0IHIgPSBNYXRoLmNvcyhsYXRBbmcpXG4gICAgY29uc3QgdnggPSByICogTWF0aC5jb3MobG5nQW5nKVxuICAgIGNvbnN0IHZ6ID0gciAqIE1hdGguc2luKGxuZ0FuZylcbiAgICBjb25zdCB4MiA9IHggKyB2eCAqIGxlbmd0aFxuICAgIGNvbnN0IHkyID0geSArIHZ5ICogbGVuZ3RoXG4gICAgY29uc3QgejIgPSB6ICsgdnogKiBsZW5ndGhcbiAgICBjb25zdCB0cmVlOiBUcmVlID0ge1xuICAgICAgICBwb2ludDogW3gsIHksIHosIHJhZGl1c10sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICB9XG4gICAgaWYgKHJhZGl1czIgPiAwLjEpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgMykpKVxuICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IGNvdW50OyBsb29wKyspIHtcbiAgICAgICAgICAgIHRyZWUuY2hpbGRyZW4/LnB1c2goXG4gICAgICAgICAgICAgICAgZGVuZHJpdGUoXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyLFxuICAgICAgICAgICAgICAgICAgICBsYXQwICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKSxcbiAgICAgICAgICAgICAgICAgICAgbG5nMCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXG4gICAgICAgICAgICAgICAgICAgIHgyLFxuICAgICAgICAgICAgICAgICAgICB5MixcbiAgICAgICAgICAgICAgICAgICAgejIsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDYjtBQUV4QyxNQUFNLEtBQUssR0FBRyxFQUFDLG9CQUFvQixFQUFDLG80QkFBbzRCLEVBQUM7QUFDejZCLE1BQU0sSUFBSSxHQUFHLDR4S0FBNHhLO0FBRTF4SyxTQUFTLGFBQWE7SUFDakMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyx5Q0FBYyxDQUFDLEtBQUssQ0FBQztJQUM3QyxPQUFPLHNHQUNILG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQUMsMkNBQUMsZ0RBQUksS0FBRyxHQUFNLEVBQ3pDLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1A7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUHNCO0FBRWlCO0FBT3hDLFNBQVMsSUFBSSxDQUFDLEdBQWU7SUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ25DLElBQUksd0RBQXdCLENBQUMsR0FBRyxFQUFFO1FBQzlC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