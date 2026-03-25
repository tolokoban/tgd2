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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "To the left, the light is static, but to the right it's stuck to the camera."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_material__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/diffuse/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9kaWZmdXNlX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fVGdkX3RnZF9tb2R1bGVfY3NzLXNyY19jby05ZmJkMjMuZGUxNjAwMmI0M2I0MjVkMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL2RpZmZ1c2UvX21hdGVyaWFsL19tYXRlcmlhbC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL19tYXRlcmlhbC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy91dGlscy9ob29rcy9mbG9hdC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9kaWZmdXNlL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsImltcG9ydCB7XG4gICAgQXJyYXlOdW1iZXI0LFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RQYWludGVyU2Npc3NvcixcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxuICAgIHRnZENhbGNDbGFtcCxcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck5vZGUsXG4gICAgVGdkTWF0ZXJpYWwsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNNb3JwaGluZyxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICBjb2xvcixcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaDEgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxuICAgIH0pXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXG4gICAgY29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogW21lc2gxLCByaW5nMV0sXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgLy8gY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsTm9ybWFscygpXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwyLFxuICAgIH0pXG4gICAgY29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpXG4gICAgY29uc3Qgbm9kZTIgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW25vZGUxXSxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IDAuNSxcbiAgICAgICAgaGVpZ2h0OiAxLFxuICAgIH0pXG4gICAgY29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW25vZGUyXSxcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogMC41LFxuICAgICAgICBoZWlnaHQ6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbc2Npc3NvcjEsIHNjaXNzb3IyXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMVxuICAgICAgICAgICAgY29uc3QgYW5nWCA9IGRlbHRhICogMC40OTU0MSAqIHNwZWVkXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWRcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ogPSBkZWx0YSAqIDAuNTc4OTIgKiBzcGVlZFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWClcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWihhbmdaKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgcmluZzIuZGVidWcoKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3BlY3VsYXJFeHBvbmVudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbDEuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgbWF0ZXJpYWwxLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcbiAgICAgICAgICAgIG1hdGVyaWFsMi5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcbiAgICAgICAgICAgIHNjaXNzb3IxLnggPSAwXG4gICAgICAgICAgICBzY2lzc29yMS53aWR0aCA9IGFcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXG4gICAgICAgICAgICBzY2lzc29yMi53aWR0aCA9IDEgLSBhXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VSaW5nKGNvbnRleHQ6IFRnZENvbnRleHQsIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbCkge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgY29uc3QgY291bnQgPSAxNlxuICAgIGNvbnN0IHkgPSAtMC41XG4gICAgY29uc3QgciA9IDAuMlxuICAgIGNvbnN0IFIgPSAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHgwID0gUiAqIE1hdGguY29zKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHowID0gUiAqIE1hdGguc2luKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHgxID0gUiAqIE1hdGguY29zKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHoxID0gUiAqIE1hdGguc2luKCgoaSArIDEpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXG4gICAgICAgIGNvbnN0IHUwID0gaSAvIGNvdW50XG4gICAgICAgIGNvbnN0IHUxID0gKGkgKyAxKSAvIGNvdW50XG4gICAgICAgIGRhdGEuYWRkKFt4MCwgeSwgejAsIHJdLCBbeDEsIHksIHoxLCByXSwgW3UwLCB1MF0sIFt1MSwgdTFdKVxuICAgIH1cbiAgICAvLyByZXR1cm4gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG4gICAgLy8gICAgIHJvdW5kbmVzczogNSxcbiAgICAvLyAgICAgbWF0ZXJpYWwsXG4gICAgLy8gICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQoKSxcbiAgICAvLyB9KVxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xuICAgICAgICByb3VuZG5lc3M6IDUsXG4gICAgICAgIG1hdGVyaWFsLFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGEubWFrZURhdGFzZXQoKSwgZGF0YS5tYWtlRGF0YXNldCgpXV0sXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG4gICAgY29uc3QgW3NwZWN1bGFyRXhwb25lbnQsIHNldFNwZWN1bGFyRXhwb25lbnRdID0gdXNlRmxvYXQoMjAsIHNydj8uc3BlY3VsYXJFeHBvbmVudClcbiAgICBjb25zdCBbc3BlY3VsYXJJbnRlbnNpdHksIHNldFNwZWN1bGFySW50ZW5zaXR5XSA9IHVzZUZsb2F0KDEsIHNydj8uc3BlY3VsYXJJbnRlbnNpdHkpXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxWaWV3XG4gICAgICAgICAgICAgICAgb25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGluaXQoc2NlbmUsIGFzc2V0cylcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8Vmlld1NsaWRlciB2YWx1ZT17c3BsaXR9IG9uQ2hhbmdlPXtzZXRTcGxpdH0gbWluPXswfSBtYXg9ezF9IHN0ZXA9ezFlLTJ9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic3BlY3VsYXJFeHBvbmVudFwiIHZhbHVlPXtzcGVjdWxhckV4cG9uZW50fSBvbkNoYW5nZT17c2V0U3BlY3VsYXJFeHBvbmVudH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJzcGVjdWxhckludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJydXNoZWQgTWV0YWxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwLjEyNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJFeHBvbmVudCg1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXIgUGFpbnRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vX21hdGVyaWFsLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbLi4udGdkQ2FsY1JhbmRvbTMoKSwgMV1cXG4gICAgY29uc3QgbWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoMSA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzEgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDEpXFxuICAgIGNvbnN0IG5vZGUxID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDEsIHJpbmcxXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICBjb2xvcixcXG4gICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgY29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICAvLyBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxOb3JtYWxzKClcXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJpbmcyID0gbWFrZVJpbmcoY29udGV4dCwgbWF0ZXJpYWwyKVxcbiAgICBjb25zdCBub2RlMiA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XFxuICAgICAgICBjaGlsZHJlbjogW21lc2gyLCByaW5nMl0sXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBBcnJheU51bWJlcjQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkUGFpbnRlclNjaXNzb3IsXFxuICAgIHRnZENhbGNSYW5kb20zLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbiAgICB0Z2RDYWxjQ2xhbXAsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck5vZGUsXFxuICAgIFRnZE1hdGVyaWFsLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuaW1wb3J0IHsgVmlld0J1dHRvbiwgVmlld0lucHV0TnVtYmVyLCBWaWV3UGFuZWwsIFZpZXdTbGlkZXIgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFsuLi50Z2RDYWxjUmFuZG9tMygpLCAxXVxcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2gxID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5zdXphbmUsXFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxcbiAgICB9KVxcbiAgICBjb25zdCByaW5nMSA9IG1ha2VSaW5nKGNvbnRleHQsIG1hdGVyaWFsMSlcXG4gICAgY29uc3Qgbm9kZTEgPSBuZXcgVGdkUGFpbnRlck5vZGUoe1xcbiAgICAgICAgY2hpbGRyZW46IFttZXNoMSwgcmluZzFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yLFxcbiAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgYW1iaWVudDogbmV3IFRnZExpZ2h0KHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxcbiAgICAgICAgfSksXFxuICAgIH0pXFxuICAgIC8vIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbE5vcm1hbHMoKVxcbiAgICBjb25zdCBtZXNoMiA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMixcXG4gICAgfSlcXG4gICAgY29uc3QgcmluZzIgPSBtYWtlUmluZyhjb250ZXh0LCBtYXRlcmlhbDIpXFxuICAgIGNvbnN0IG5vZGUyID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaDIsIHJpbmcyXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFtub2RlMV0sXFxuICAgICAgICB4OiAwLFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IHNjaXNzb3IyID0gbmV3IFRnZFBhaW50ZXJTY2lzc29yKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbm9kZTJdLFxcbiAgICAgICAgeDogMC41LFxcbiAgICAgICAgeTogMCxcXG4gICAgICAgIHdpZHRoOiAwLjUsXFxuICAgICAgICBoZWlnaHQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NjaXNzb3IxLCBzY2lzc29yMl0sXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjFcXG4gICAgICAgICAgICBjb25zdCBhbmdYID0gZGVsdGEgKiAwLjQ5NTQxICogc3BlZWRcXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gZGVsdGEgKiAwLjMxNzg5ICogc3BlZWRcXG4gICAgICAgICAgICBjb25zdCBhbmdaID0gZGVsdGEgKiAwLjU3ODkyICogc3BlZWRcXG4gICAgICAgICAgICBub2RlMS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxcbiAgICAgICAgICAgIG5vZGUxLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXFxuICAgICAgICAgICAgbm9kZTEudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcXG4gICAgICAgICAgICBub2RlMi50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxcbiAgICAgICAgICAgIG5vZGUyLnRyYW5zZm8ub3JiaXRBcm91bmRZKGFuZ1kpXFxuICAgICAgICAgICAgbm9kZTIudHJhbnNmby5vcmJpdEFyb3VuZFooYW5nWilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIHJpbmcyLmRlYnVnKClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIHNwZWN1bGFyRXhwb25lbnQodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckV4cG9uZW50ID0gdmFsdWVcXG4gICAgICAgICAgICBtYXRlcmlhbDIuc3BlY3VsYXJFeHBvbmVudCA9IHZhbHVlXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xcbiAgICAgICAgICAgIG1hdGVyaWFsMS5zcGVjdWxhckludGVuc2l0eSA9IHZhbHVlXFxuICAgICAgICAgICAgbWF0ZXJpYWwyLnNwZWN1bGFySW50ZW5zaXR5ID0gdmFsdWVcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICBzcGxpdCh2YWx1ZTogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcXG4gICAgICAgICAgICBzY2lzc29yMS54ID0gMFxcbiAgICAgICAgICAgIHNjaXNzb3IxLndpZHRoID0gYVxcbiAgICAgICAgICAgIHNjaXNzb3IyLnggPSBhXFxuICAgICAgICAgICAgc2Npc3NvcjIud2lkdGggPSAxIC0gYVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUmluZyhjb250ZXh0OiBUZ2RDb250ZXh0LCBtYXRlcmlhbDogVGdkTWF0ZXJpYWwpIHtcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcXG4gICAgY29uc3QgY291bnQgPSAxNlxcbiAgICBjb25zdCB5ID0gLTAuNVxcbiAgICBjb25zdCByID0gMC4yXFxuICAgIGNvbnN0IFIgPSAxXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgY29uc3QgeDAgPSBSICogTWF0aC5jb3MoKGkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHowID0gUiAqIE1hdGguc2luKChpICogTWF0aC5QSSAqIDIpIC8gY291bnQpXFxuICAgICAgICBjb25zdCB4MSA9IFIgKiBNYXRoLmNvcygoKGkgKyAxKSAqIE1hdGguUEkgKiAyKSAvIGNvdW50KVxcbiAgICAgICAgY29uc3QgejEgPSBSICogTWF0aC5zaW4oKChpICsgMSkgKiBNYXRoLlBJICogMikgLyBjb3VudClcXG4gICAgICAgIGNvbnN0IHUwID0gaSAvIGNvdW50XFxuICAgICAgICBjb25zdCB1MSA9IChpICsgMSkgLyBjb3VudFxcbiAgICAgICAgZGF0YS5hZGQoW3gwLCB5LCB6MCwgcl0sIFt4MSwgeSwgejEsIHJdLCBbdTAsIHUwXSwgW3UxLCB1MV0pXFxuICAgIH1cXG4gICAgLy8gcmV0dXJuIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAvLyAgICAgcm91bmRuZXNzOiA1LFxcbiAgICAvLyAgICAgbWF0ZXJpYWwsXFxuICAgIC8vICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0KCksXFxuICAgIC8vIH0pXFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlclNlZ21lbnRzTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgcm91bmRuZXNzOiA1LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICBkYXRhc2V0c1BhaXJzOiBbW2RhdGEubWFrZURhdGFzZXQoKSwgZGF0YS5tYWtlRGF0YXNldCgpXV0sXFxuICAgIH0pXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuICAgIGNvbnN0IFtzcGVjdWxhckV4cG9uZW50LCBzZXRTcGVjdWxhckV4cG9uZW50XSA9IHVzZUZsb2F0KDIwLCBzcnY/LnNwZWN1bGFyRXhwb25lbnQpXFxuICAgIGNvbnN0IFtzcGVjdWxhckludGVuc2l0eSwgc2V0U3BlY3VsYXJJbnRlbnNpdHldID0gdXNlRmxvYXQoMSwgc3J2Py5zcGVjdWxhckludGVuc2l0eSlcXG4gICAgY29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjEsIHNydj8uc3BsaXQpXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxcbiAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgICAgIGdsYjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1emFuZTogU3V6YW5lVVJMLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgPFZpZXdTbGlkZXIgdmFsdWU9e3NwbGl0fSBvbkNoYW5nZT17c2V0U3BsaXR9IG1pbj17MH0gbWF4PXsxfSBzdGVwPXsxZS0yfSAvPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJzcGVjdWxhckV4cG9uZW50XFxcIiB2YWx1ZT17c3BlY3VsYXJFeHBvbmVudH0gb25DaGFuZ2U9e3NldFNwZWN1bGFyRXhwb25lbnR9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcInNwZWN1bGFySW50ZW5zaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzcGVjdWxhckludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U3BlY3VsYXJJbnRlbnNpdHl9XFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBqdXN0aWZ5Q29udGVudD1cXFwic3BhY2UtYXJvdW5kXFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDEpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFySW50ZW5zaXR5KDAuNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBCcnVzaGVkIE1ldGFsXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInByaW1hcnktNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNwZWN1bGFyRXhwb25lbnQoMC4yNSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3BlY3VsYXJJbnRlbnNpdHkoMC4xMjUpXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgU29mdCBMaWdodFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckV4cG9uZW50KDUwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhciBQYWludFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJwcmltYXJ5LTVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTcGVjdWxhckludGVuc2l0eSgwKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXN0aWNcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGbG9hdChcbiAgICBpbml0aWFsVmFsdWU6IG51bWJlcixcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFZhbHVlKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSlcbiAgICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV1cbn1cbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCbko7QUFDNkI7QUFDSDtBQUN4QjtBQUNxQjtBQUNvQztBQUVsRixTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFFN0MsTUFBTSxLQUFLLEdBQWlCLENBQUMsR0FBRyxrREFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sU0FBUyxHQUFHLElBQUksa0RBQWtCLENBQUM7UUFDckMsS0FBSztRQUNMLE9BQU8sRUFBRSxJQUFJLHdDQUFRLENBQUM7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QUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNsRCxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hELE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDeEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUs7UUFDcEIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBTUQsT0FBTyxJQUFJLDBEQUEwQixDQUFDLE9BQU8sRUFBRTtRQUMzQyxTQUFTLEVBQUUsQ0FBQztRQUNaLFFBQVE7UUFDUixhQUFhLEVBQUUsQ0FBQyxD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