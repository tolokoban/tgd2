"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_diffuse_page_mdx-src_components_demo_Tgd_tgd_module_css-src_co-9fbd23"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
14038(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);
/* import */ var react__rspack_import_4 = __webpack_require__(96540);
/* import */ var react__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_4);
/* import */ var _utils_hooks_float__rspack_import_5 = __webpack_require__(7546);
/* import */ var _tolokoban_ui__rspack_import_6 = __webpack_require__(62430);







function init(context, assets) {
    const color = [...(0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)(), 1];
    const material1 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
    });
    const mesh1 = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material1,
    });
    const ring1 = makeRing(context, material1);
    const node1 = new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
        children: [mesh1, ring1],
    });
    const material2 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color,
        lockLightsToCamera: true,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [0.8, 0.8, 0.8, 0],
        }),
    });
    const mesh2 = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material2,
    });
    const ring2 = makeRing(context, material2);
    const node2 = new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
        children: [mesh2, ring2],
    });
    const scissor1 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [node1],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1,
    });
    const scissor2 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [node2],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [scissor1, scissor2],
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time, delta) => {
        const speed = 0.1;
        const angX = delta * 0.49541 * speed;
        const angY = delta * 0.31789 * speed;
        const angZ = delta * 0.57892 * speed;
        node1.transfo.orbitAroundX(angX);
        node1.transfo.orbitAroundY(angY);
        node1.transfo.orbitAroundZ(angZ);
        node2.transfo.orbitAroundX(angX);
        node2.transfo.orbitAroundY(angY);
        node2.transfo.orbitAroundZ(angZ);
    }));
    ring2.debug();
    context.play();
    return {
        specularExponent(value) {
            material1.specularExponent = value;
            material2.specularExponent = value;
            context.paint();
        },
        specularIntensity(value) {
            material1.specularIntensity = value;
            material2.specularIntensity = value;
            context.paint();
        },
        split(value) {
            const a = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(value, 0, 1);
            scissor1.x = 0;
            scissor1.width = a;
            scissor2.x = a;
            scissor2.width = 1 - a;
            context.paint();
        },
    };
}
function makeRing(context, material) {
    const data = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
    const count = 16;
    const y = -0.5;
    const r = 0.2;
    const R = 1;
    for (let i = 0; i < count; i++) {
        const x0 = R * Math.cos((i * Math.PI * 2) / count);
        const z0 = R * Math.sin((i * Math.PI * 2) / count);
        const x1 = R * Math.cos(((i + 1) * Math.PI * 2) / count);
        const z1 = R * Math.sin(((i + 1) * Math.PI * 2) / count);
        const u0 = i / count;
        const u1 = (i + 1) / count;
        data.add([x0, y, z0, r], [x1, y, z1, r], [u0, u0], [u1, u1]);
    }
    return new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsMorphing(context, {
        roundness: 5,
        material,
        datasetsPairs: [[data.makeDataset(), data.makeDataset()]],
    });
}
function Demo() {
    const ref = react__rspack_import_4_default().useRef(null);
    const srv = ref.current;
    const [specularExponent, setSpecularExponent] = (0,_utils_hooks_float__rspack_import_5.useFloat)(20, srv?.specularExponent);
    const [specularIntensity, setSpecularIntensity] = (0,_utils_hooks_float__rspack_import_5.useFloat)(1, srv?.specularIntensity);
    const [split, setSplit] = (0,_utils_hooks_float__rspack_import_5.useFloat)(0.1, srv?.split);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_demo_Tgd__rspack_import_2["default"], { onReady: (scene, assets) => {
                ref.current = init(scene, assets);
            }, assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_3,
                },
            }, gizmo: true, controller: {
                inertiaOrbit: 1000,
            }, children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewSlider, { value: split, onChange: setSplit, min: 0, max: 1, step: 1e-2 }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_6.ViewPanel, { display: "flex", justifyContent: "space-around", alignItems: "center", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewInputNumber, { label: "specularExponent", value: specularExponent, onChange: setSpecularExponent }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewInputNumber, { label: "specularIntensity", value: specularIntensity, onChange: setSpecularIntensity })] }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_6.ViewPanel, { display: "flex", justifyContent: "space-around", alignItems: "center", children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(1);
                                setSpecularIntensity(0.5);
                            }, children: "Brushed Metal" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(0.25);
                                setSpecularIntensity(0.125);
                            }, children: "Soft Light" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularExponent(50);
                                setSpecularIntensity(2);
                            }, children: "Car Paint" }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_6.ViewButton, { variant: "text", color: "primary-5", onClick: () => {
                                setSpecularIntensity(0);
                            }, children: "Plastic" })] })] }) }));
}


},
62761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _material_demo__rspack_import_4 = __webpack_require__(14038);





const FOCUS = { "Initializing WebGL": "    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material1 = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    const mesh1 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material1,\n    })\n    const ring1 = makeRing(context, material1)\n    const node1 = new TgdPainterNode({\n        children: [mesh1, ring1],\n    })\n    const material2 = new TgdMaterialDiffuse({\n        color,\n        lockLightsToCamera: true,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    // const material2 = new TgdMaterialNormals()\n    const mesh2 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material2,\n    })\n    const ring2 = makeRing(context, material2)\n    const node2 = new TgdPainterNode({\n        children: [mesh2, ring2],\n    })" };
const FULL = "import {\n    ArrayNumber4,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdPainterScissor,\n    tgdCalcRandom3,\n    webglPresetDepth,\n    tgdCalcClamp,\n    TgdPainterLogic,\n    TgdPainterNode,\n    TgdMaterial,\n    TgdPainterSegmentsData,\n    TgdPainterSegments,\n    webglPresetCull,\n    TgdMaterialFaceOrientation,\n    TgdMaterialNormals,\n    TgdPainterSegmentsMorphing,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport React from \"react\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport { ViewButton, ViewInputNumber, ViewPanel, ViewSlider } from \"@tolokoban/ui\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const color: ArrayNumber4 = [...tgdCalcRandom3(), 1]\n    const material1 = new TgdMaterialDiffuse({\n        color,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    const mesh1 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material1,\n    })\n    const ring1 = makeRing(context, material1)\n    const node1 = new TgdPainterNode({\n        children: [mesh1, ring1],\n    })\n    const material2 = new TgdMaterialDiffuse({\n        color,\n        lockLightsToCamera: true,\n        ambient: new TgdLight({\n            color: [0.8, 0.8, 0.8, 0],\n        }),\n    })\n    // const material2 = new TgdMaterialNormals()\n    const mesh2 = new TgdPainterMeshGltf(context, {\n        asset: assets.glb.suzane,\n        material: material2,\n    })\n    const ring2 = makeRing(context, material2)\n    const node2 = new TgdPainterNode({\n        children: [mesh2, ring2],\n    })\n    const scissor1 = new TgdPainterScissor(context, {\n        children: [node1],\n        x: 0,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    const scissor2 = new TgdPainterScissor(context, {\n        children: [node2],\n        x: 0.5,\n        y: 0,\n        width: 0.5,\n        height: 1,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.3, 0.3, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n            children: [scissor1, scissor2],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            const speed = 0.1\n            const angX = delta * 0.49541 * speed\n            const angY = delta * 0.31789 * speed\n            const angZ = delta * 0.57892 * speed\n            node1.transfo.orbitAroundX(angX)\n            node1.transfo.orbitAroundY(angY)\n            node1.transfo.orbitAroundZ(angZ)\n            node2.transfo.orbitAroundX(angX)\n            node2.transfo.orbitAroundY(angY)\n            node2.transfo.orbitAroundZ(angZ)\n        }),\n    )\n    ring2.debug()\n    context.play()\n    return {\n        specularExponent(value: number) {\n            material1.specularExponent = value\n            material2.specularExponent = value\n            context.paint()\n        },\n        specularIntensity(value: number) {\n            material1.specularIntensity = value\n            material2.specularIntensity = value\n            context.paint()\n        },\n        split(value: number) {\n            const a = tgdCalcClamp(value, 0, 1)\n            scissor1.x = 0\n            scissor1.width = a\n            scissor2.x = a\n            scissor2.width = 1 - a\n            context.paint()\n        },\n    }\n}\n\nfunction makeRing(context: TgdContext, material: TgdMaterial) {\n    const data = new TgdPainterSegmentsData()\n    const count = 16\n    const y = -0.5\n    const r = 0.2\n    const R = 1\n    for (let i = 0; i < count; i++) {\n        const x0 = R * Math.cos((i * Math.PI * 2) / count)\n        const z0 = R * Math.sin((i * Math.PI * 2) / count)\n        const x1 = R * Math.cos(((i + 1) * Math.PI * 2) / count)\n        const z1 = R * Math.sin(((i + 1) * Math.PI * 2) / count)\n        const u0 = i / count\n        const u1 = (i + 1) / count\n        data.add([x0, y, z0, r], [x1, y, z1, r], [u0, u0], [u1, u1])\n    }\n    // return new TgdPainterSegments(context, {\n    //     roundness: 5,\n    //     material,\n    //     dataset: data.makeDataset(),\n    // })\n    return new TgdPainterSegmentsMorphing(context, {\n        roundness: 5,\n        material,\n        datasetsPairs: [[data.makeDataset(), data.makeDataset()]],\n    })\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const srv = ref.current\n    const [specularExponent, setSpecularExponent] = useFloat(20, srv?.specularExponent)\n    const [specularIntensity, setSpecularIntensity] = useFloat(1, srv?.specularIntensity)\n    const [split, setSplit] = useFloat(0.1, srv?.split)\n    return (\n        <div>\n            <View\n                onReady={(scene: TgdContext, assets: Assets) => {\n                    ref.current = init(scene, assets)\n                }}\n                assets={{\n                    glb: {\n                        suzane: SuzaneURL,\n                    },\n                }}\n                gizmo\n                controller={{\n                    inertiaOrbit: 1000,\n                }}>\n                <ViewSlider value={split} onChange={setSplit} min={0} max={1} step={1e-2} />\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewInputNumber label=\"specularExponent\" value={specularExponent} onChange={setSpecularExponent} />\n                    <ViewInputNumber\n                        label=\"specularIntensity\"\n                        value={specularIntensity}\n                        onChange={setSpecularIntensity}\n                    />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(1)\n                            setSpecularIntensity(0.5)\n                        }}>\n                        Brushed Metal\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(0.25)\n                            setSpecularIntensity(0.125)\n                        }}>\n                        Soft Light\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularExponent(50)\n                            setSpecularIntensity(2)\n                        }}>\n                        Car Paint\n                    </ViewButton>\n                    <ViewButton\n                        variant=\"text\"\n                        color=\"primary-5\"\n                        onClick={() => {\n                            setSpecularIntensity(0)\n                        }}>\n                        Plastic\n                    </ViewButton>\n                </ViewPanel>\n            </View>\n        </div>\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_material_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
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
7546(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);

function useFloat(initialValue, onChange) {
    const [value, setValue] = react__rspack_import_0_default().useState(initialValue);
    react__rspack_import_0_default().useEffect(() => onChange?.(value), [value]);
    return [value, setValue];
}


},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
37533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _material__rspack_import_1 = __webpack_require__(62761);
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
                children: "Diffuse material"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To the left, the light is static, but to the right it's stuck to the camera."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jby05ZmJkMjMuMjFmMzFhN2M0ZDg1MjFmMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9fbWF0ZXJpYWwuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvZGlmZnVzZS9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RMaWdodCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXG4gICAgdGdkQ2FsY1JhbmRvbTMsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbiAgICB0Z2RDYWxjQ2xhbXAsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZE1hdGVyaWFsLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcbiAgICB9KVxuICAgIGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKVxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgIGNvbG9yLFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMixcbiAgICB9KVxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxuICAgIGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMiwgcmluZzJdLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMV0sXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiAwLjUsXG4gICAgICAgIGhlaWdodDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMl0sXG4gICAgICAgIHg6IDAuNSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAuNSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjFcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBkZWx0YSAqIDAuNDk1NDEgKiBzcGVlZFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4zMTc4OSAqIHNwZWVkXG4gICAgICAgICAgICBjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWRcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcbiAgICAgICAgfSksXG4gICAgKVxuICAgIHJpbmcyLmRlYnVnKClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwxLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxuICAgICAgICAgICAgc2Npc3NvcjEud2lkdGggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IGNvdW50ID0gMTZcbiAgICBjb25zdCB5ID0gLTAuNVxuICAgIGNvbnN0IHIgPSAwLjJcbiAgICBjb25zdCBSID0gMVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB4MCA9IFIgKiBNYXRoLmNvcygoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB6MCA9IFIgKiBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB6MSA9IFIgKiBNYXRoLnNpbigoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxuICAgICAgICBjb25zdCB1MCA9IGkgLyBjb3VudFxuICAgICAgICBjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudFxuICAgICAgICBkYXRhLmFkZChbeDAsIHksIHowLCByXSwgW3gxLCB5LCB6MSwgcl0sIFt1MCwgdTBdLCBbdTEsIHUxXSlcbiAgICB9XG4gICAgLy8gcmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuICAgIC8vICAgICByb3VuZG5lc3M6IDUsXG4gICAgLy8gICAgIG1hdGVyaWFsLFxuICAgIC8vICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0KCksXG4gICAgLy8gfSlcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcbiAgICAgICAgcm91bmRuZXNzOiA1LFxuICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIwLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXG4gICAgY29uc3QgW3NwZWN1bGFySW50ZW5zaXR5LCBzZXRTcGVjdWxhckludGVuc2l0eV0gPSB1c2VGbG9hdCgxLCBzcnY/LnNwZWN1bGFySW50ZW5zaXR5KVxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC4xLCBzcnY/LnNwbGl0KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInNwZWN1bGFyRXhwb25lbnRcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3BlY3VsYXJJbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC41KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FyIFBhaW50XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDwvVmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL19tYXRlcmlhbC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWy4uLnRnZENhbGNSYW5kb20zKCksIDFdXFxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcxID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwxKVxcbiAgICBjb25zdCBub2RlMSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gxLCByaW5nMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3IsXFxuICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICBhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgLy8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXFxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwyLFxcbiAgICB9KVxcbiAgICBjb25zdCByaW5nMiA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMilcXG4gICAgY29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMiwgcmluZzJdLFxcbiAgICB9KVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFBhaW50ZXJTY2lzc29yLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG4gICAgdGdkQ2FsY0NsYW1wLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJOb2RlLFxcbiAgICBUZ2RNYXRlcmlhbCxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgdXNlRmxvYXQgfSBmcm9tIFxcXCJAL3V0aWxzL2hvb2tzL2Zsb2F0XFxcIlxcbmltcG9ydCB7IFZpZXdCdXR0b24sIFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsLCBWaWV3U2xpZGVyIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXFxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICAvLyBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKClcXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxcbiAgICBjb25zdCBub2RlMiA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuICAgIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IxID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbm9kZTFdLFxcbiAgICAgICAgeDogMCxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuICAgICAgICBjaGlsZHJlbjogW25vZGUyXSxcXG4gICAgICAgIHg6IDAuNSxcXG4gICAgICAgIHk6IDAsXFxuICAgICAgICB3aWR0aDogMC41LFxcbiAgICAgICAgaGVpZ2h0OiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4xXFxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkXFxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IGRlbHRhICogMC4zMTc4OSAqIHNwZWVkXFxuICAgICAgICAgICAgY29uc3QgYW5nWiA9IGRlbHRhICogMC41Nzg5MiAqIHNwZWVkXFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opXFxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRaKGFuZ1opXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICByaW5nMi5kZWJ1ZygpXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIHJldHVybiB7XFxuICAgICAgICBzcGVjdWxhckV4cG9uZW50KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXFxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFyRXhwb25lbnQgPSB2YWx1ZVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNwZWN1bGFySW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJJbnRlbnNpdHkgPSB2YWx1ZVxcbiAgICAgICAgICAgIG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXFxuICAgICAgICAgICAgc2Npc3NvcjEueCA9IDBcXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcXG4gICAgICAgICAgICBzY2lzc29yMi54ID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLndpZHRoID0gMSAtIGFcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gbWFrZVJpbmcoY29udGV4dDogVGdkQ29udGV4dCwgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsKSB7XFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXFxuICAgIGNvbnN0IGNvdW50ID0gMTZcXG4gICAgY29uc3QgeSA9IC0wLjVcXG4gICAgY29uc3QgciA9IDAuMlxcbiAgICBjb25zdCBSID0gMVxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG4gICAgICAgIGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB6MCA9IFIgKiBNYXRoLnNpbigoaSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxcbiAgICAgICAgY29uc3QgeDEgPSBSICogTWF0aC5jb3MoKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB1MCA9IGkgLyBjb3VudFxcbiAgICAgICAgY29uc3QgdTEgPSAoaSArIDEpIC8gY291bnRcXG4gICAgICAgIGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKVxcbiAgICB9XFxuICAgIC8vIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG4gICAgLy8gICAgIHJvdW5kbmVzczogNSxcXG4gICAgLy8gICAgIG1hdGVyaWFsLFxcbiAgICAvLyAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCgpLFxcbiAgICAvLyB9KVxcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50c01vcnBoaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIHJvdW5kbmVzczogNSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgZGF0YXNldHNQYWlyczogW1tkYXRhLm1ha2VEYXRhc2V0KCksIGRhdGEubWFrZURhdGFzZXQoKV1dLFxcbiAgICB9KVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBzcnYgPSByZWYuY3VycmVudFxcbiAgICBjb25zdCBbc3BlY3VsYXJFeHBvbmVudCwgc2V0U3BlY3VsYXJFeHBvbmVudF0gPSB1c2VGbG9hdCgyMCwgc3J2Py5zcGVjdWxhckV4cG9uZW50KVxcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDEsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXFxuICAgIGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC4xLCBzcnY/LnNwbGl0KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXphbmU6IFN1emFuZVVSTCxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVyIHZhbHVlPXtzcGxpdH0gb25DaGFuZ2U9e3NldFNwbGl0fSBtaW49ezB9IG1heD17MX0gc3RlcD17MWUtMn0gLz5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwic3BlY3VsYXJFeHBvbmVudFxcXCIgdmFsdWU9e3NwZWN1bGFyRXhwb25lbnR9IG9uQ2hhbmdlPXtzZXRTcGVjdWxhckV4cG9uZW50fSAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJzcGVjdWxhckludGVuc2l0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNwZWN1bGFySW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCgxKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQnJ1c2hlZCBNZXRhbFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDAuMjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDAuMTI1KVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvZnQgTGlnaHRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCg1MClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMilcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwicHJpbWFyeS01XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMClcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFzdGljXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgIDwvVmlldz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG4gICAgaW5pdGlhbFZhbHVlOiBudW1iZXIsXG4gICAgb25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdXG59XG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQm5KO0FBQzZCO0FBQ0g7QUFDeEI7QUFDcUI7QUFDb0M7QUFFbEYsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBRTdDLE1BQU0sS0FBSyxHQUFpQixDQUFDLEdBQUcsa0RBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxNQUFNLFNBQVMsR0FBRyxJQUFJLGtEQUFrQixDQUFDO1FBQ3JDLEtBQUs7UUFDTCxPQUFPLEVBQUUsSUFBSSx3Q0FB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