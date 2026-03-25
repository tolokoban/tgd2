"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_points-cloud_page_mdx-src_components_demo_Tgd_tgd_module_css-src_com-edcd42"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
97063(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(18455);





const FOCUS = { "Detail #1": "    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()" };
const FULL = "import {\n    tgdCanvasCreatePalette,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    type TgdDataGlb,\n    TgdDataset,\n    TgdPainterClear,\n    TgdPainterPointsCloud,\n    TgdPainterPointsCloudMorphing,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport Monkey1URL from \"@/assets/mesh/high-res-monkey.glb\"\nimport Monkey2URL from \"@/assets/mesh/high-res-monkey-deformed.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nfunction makeDataset(glb: TgdDataGlb) {\n    const dataset = new TgdDataset({\n        POSITION: \"vec4\",\n    })\n    glb.setAttrib(dataset, \"POSITION\")\n    const { set } = dataset.getAttribAccessor(\"POSITION\")\n    const count = dataset.count\n    const radius = 0.01\n    for (let i = 0; i < count; i++) {\n        set(radius, i, 3)\n    }\n    return dataset\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    })\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    })\n    const texture = new TgdTexture2D(context, {\n        params: {\n            minFilter: \"LINEAR\",\n            magFilter: \"LINEAR\",\n            wrapS: \"CLAMP_TO_EDGE\",\n            wrapT: \"CLAMP_TO_EDGE\",\n        },\n    }).loadBitmap(tgdCanvasCreatePalette([\"#f74\", \"#ff0\", \"#59f\"]))\n    const dataset1 = makeDataset(assets.glb.monkey1)\n    const dataset2 = makeDataset(assets.glb.monkey2)\n    const cloud = new TgdPainterPointsCloudMorphing(context, {\n        mix: 1,\n        data: [\n            [\n                {\n                    point: new Float32Array(dataset1.data),\n                    uv: makeUV(dataset1.count, 1),\n                },\n                {\n                    point: new Float32Array(dataset2.data),\n                    uv: makeUV(dataset2.count, 0),\n                },\n            ],\n        ],\n        texture,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cloud],\n    })\n    context.add(clear, state)\n    context.paint()\n    return (settings: Record<string, number>) => {\n        cloud.mix = settings.mix\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            assets={{\n                glb: { monkey1: Monkey1URL, monkey2: Monkey2URL },\n            }}\n            settings={{\n                mix: {\n                    label: \"mix\",\n                    value: 0,\n                },\n            }}\n        />\n    )\n}\n\nfunction makeUV(count: number, value: number) {\n    const data = new Float32Array(count * 2)\n    for (let i = 0; i < data.length; i++) {\n        data[i] = value\n    }\n    return data\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_points_cloud_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
18455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_high_res_monkey_glb__rspack_import_2 = __webpack_require__(8755);
/* import */ var _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3 = __webpack_require__(41678);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(18712);





function makeDataset(glb) {
    const dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4",
    });
    glb.setAttrib(dataset, "POSITION");
    const { set } = dataset.getAttribAccessor("POSITION");
    const count = dataset.count;
    const radius = 0.01;
    for (let i = 0; i < count; i++) {
        set(radius, i, 3);
    }
    return dataset;
}
function init(context, assets) {
    context.camera.transfo.distance = 5;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.5,
        speedZoom: 1,
    });
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
    }).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(["#f74", "#ff0", "#59f"]));
    const dataset1 = makeDataset(assets.glb.monkey1);
    const dataset2 = makeDataset(assets.glb.monkey2);
    const cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloudMorphing(context, {
        mix: 1,
        data: [
            [
                {
                    point: new Float32Array(dataset1.data),
                    uv: makeUV(dataset1.count, 1),
                },
                {
                    point: new Float32Array(dataset2.data),
                    uv: makeUV(dataset2.count, 0),
                },
            ],
        ],
        texture,
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [cloud],
    });
    context.add(clear, state);
    context.paint();
    return (settings) => {
        cloud.mix = settings.mix;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_4["default"], { onReady: init, gizmo: true, options: {
            preserveDrawingBuffer: true,
        }, assets: {
            glb: { monkey1: _assets_mesh_high_res_monkey_glb__rspack_import_2, monkey2: _assets_mesh_high_res_monkey_deformed_glb__rspack_import_3 },
        }, settings: {
            mix: {
                label: "mix",
                value: 0,
            },
        } }));
}
function makeUV(count, value) {
    const data = new Float32Array(count * 2);
    for (let i = 0; i < data.length; i++) {
        data[i] = value;
    }
    return data;
}


},
19528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _points_cloud_demo__rspack_import_4 = __webpack_require__(47848);





const FOCUS = {
    "Detail #1": '    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();',
};
const FULL = 'import {\n    tgdCanvasCreatePalette,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdDataset,\n    TgdGeometryBox,\n    TgdMaterialFaceOrientation,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterPointsCloud,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport MonkeyURL from "@/assets/mesh/high-res-monkey.glb";\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(5, 5);\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 1000,\n        maxZoom: 5,\n        minZoom: 0.5,\n        speedZoom: 1,\n    });\n    const clear = new TgdPainterClear(context, {\n        color: [0.1, 0.2, 0.3, 1],\n        depth: 1,\n    });\n    const dataset = new TgdDataset({\n        POSITION: "vec4",\n    });\n    const coords: number[] = [];\n    const values = [-1, +1];\n    for (let x of values) {\n        for (let y of values) {\n            for (let z of values) {\n                coords.push(x, y, z, 1);\n            }\n        }\n    }\n    dataset.set("POSITION", new Float32Array(coords));\n    const texture = new TgdTexture2D(context).loadBitmap(\n        tgdCanvasCreatePalette(["#f74"]),\n    );\n    const cloud = new TgdPainterPointsCloud(context, {\n        dataPoint: new Float32Array(dataset.data),\n        texture,\n    });\n    const cube = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),\n        material: new TgdMaterialFaceOrientation(),\n    });\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [cube, cloud],\n    });\n    context.add(clear, state);\n    context.paint();\n    return (settings: Record<string, number>) => {\n        cloud.shadowIntensity = settings.shadowIntensity;\n        cloud.shadowThickness = settings.shadowThickness;\n        cloud.specularExponent = settings.specularExponent;\n        cloud.specularIntensity = settings.specularIntensity;\n        cloud.light = settings.light;\n        context.paint();\n    };\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo\n            options={{\n                preserveDrawingBuffer: true,\n            }}\n            settings={{\n                shadowIntensity: {\n                    label: "shadowIntensity",\n                    value: 0.5,\n                },\n                shadowThickness: {\n                    label: "shadowThickness",\n                    value: 1,\n                    min: 0,\n                    max: 2,\n                },\n                specularExponent: {\n                    label: "specularExponent",\n                    value: 10,\n                    min: -20,\n                    max: 20,\n                },\n                specularIntensity: {\n                    label: "specularIntensity",\n                    value: 0.33,\n                },\n                light: {\n                    label: "light",\n                    value: 1,\n                },\n            }}\n        />\n    );\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_points_cloud_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
47848(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);



function init(context, assets) {
    context.camera.fitSpaceAtTarget(5, 5);
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 5,
        minZoom: 0.5,
        speedZoom: 1,
    });
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        POSITION: "vec4",
    });
    const coords = [];
    const values = [-1, +1];
    for (let x of values) {
        for (let y of values) {
            for (let z of values) {
                coords.push(x, y, z, 1);
            }
        }
    }
    dataset.set("POSITION", new Float32Array(coords));
    const texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)(["#f74"]));
    const cloud = new _tolokoban_tgd__rspack_import_1.TgdPainterPointsCloud(context, {
        dataPoint: new Float32Array(dataset.data),
        texture,
    });
    const cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({ sizeX: 2, sizeY: 2, sizeZ: 2 }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation(),
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [cube, cloud],
    });
    context.add(clear, state);
    context.paint();
    return (settings) => {
        cloud.shadowIntensity = settings.shadowIntensity;
        cloud.shadowThickness = settings.shadowThickness;
        cloud.specularExponent = settings.specularExponent;
        cloud.specularIntensity = settings.specularIntensity;
        cloud.light = settings.light;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true, options: {
            preserveDrawingBuffer: true,
        }, settings: {
            shadowIntensity: {
                label: "shadowIntensity",
                value: 0.5,
            },
            shadowThickness: {
                label: "shadowThickness",
                value: 1,
                min: 0,
                max: 2,
            },
            specularExponent: {
                label: "specularExponent",
                value: 10,
                min: -20,
                max: 20,
            },
            specularIntensity: {
                label: "specularIntensity",
                value: 0.33,
            },
            light: {
                label: "light",
                value: 1,
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
41678(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey-deformed.5fe00ccadb29b03a.glb";

},
8755(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/high-res-monkey.d9df67d70a25deea.glb";

},
41028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _points_cloud_demo__rspack_import_1 = __webpack_require__(19528);
/* import */ var _points_cloud_morphing_demo__rspack_import_2 = __webpack_require__(97063);
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
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Points Clouds"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloud.html",
                    children: "TgdPainterPointsCloud"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 10,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "It is also possible to use morphing between two positions."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_morphing_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbS1lZGNkNDIuODFmMmZlYTIxMzZlOTU4OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9fL3BvaW50cy1jbG91ZC1tb3JwaGluZy5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvXy9wb2ludHMtY2xvdWQtbW9ycGhpbmcuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL18vcG9pbnRzLWNsb3VkLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9fL3BvaW50cy1jbG91ZC5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vcG9pbnRzLWNsb3VkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNzRcXFwiLCBcXFwiI2ZmMFxcXCIsIFxcXCIjNTlmXFxcIl0pKVxcbiAgICBjb25zdCBkYXRhc2V0MSA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MSlcXG4gICAgY29uc3QgZGF0YXNldDIgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTIpXFxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIG1peDogMSxcXG4gICAgICAgIGRhdGE6IFtcXG4gICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQxLmRhdGEpLFxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0MS5jb3VudCwgMSksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQyLmRhdGEpLFxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0Mi5jb3VudCwgMCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbY2xvdWRdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgIGNvbnRleHQucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIHR5cGUgVGdkRGF0YUdsYixcXG4gICAgVGdkRGF0YXNldCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBNb25rZXkxVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlxcXCJcXG5pbXBvcnQgTW9ua2V5MlVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS1kZWZvcm1lZC5nbGJcXFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBQT1NJVElPTjogXFxcInZlYzRcXFwiLFxcbiAgICB9KVxcbiAgICBnbGIuc2V0QXR0cmliKGRhdGFzZXQsIFxcXCJQT1NJVElPTlxcXCIpXFxuICAgIGNvbnN0IHsgc2V0IH0gPSBkYXRhc2V0LmdldEF0dHJpYkFjY2Vzc29yKFxcXCJQT1NJVElPTlxcXCIpXFxuICAgIGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxcbiAgICBjb25zdCByYWRpdXMgPSAwLjAxXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcbiAgICAgICAgc2V0KHJhZGl1cywgaSwgMylcXG4gICAgfVxcbiAgICByZXR1cm4gZGF0YXNldFxcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuICAgICAgICAgICAgd3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiNmNzRcXFwiLCBcXFwiI2ZmMFxcXCIsIFxcXCIjNTlmXFxcIl0pKVxcbiAgICBjb25zdCBkYXRhc2V0MSA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MSlcXG4gICAgY29uc3QgZGF0YXNldDIgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTIpXFxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIG1peDogMSxcXG4gICAgICAgIGRhdGE6IFtcXG4gICAgICAgICAgICBbXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQxLmRhdGEpLFxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0MS5jb3VudCwgMSksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQyLmRhdGEpLFxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0Mi5jb3VudCwgMCksXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbY2xvdWRdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XFxuICAgICAgICBjbG91ZC5taXggPSBzZXR0aW5ncy5taXhcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHsgbW9ua2V5MTogTW9ua2V5MVVSTCwgbW9ua2V5MjogTW9ua2V5MlVSTCB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgbWl4OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIm1peFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlVVYoY291bnQ6IG51bWJlciwgdmFsdWU6IG51bWJlcikge1xcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCAqIDIpXFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgZGF0YVtpXSA9IHZhbHVlXFxuICAgIH1cXG4gICAgcmV0dXJuIGRhdGFcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIHR5cGUgVGdkRGF0YUdsYixcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IE1vbmtleTFVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlwiXG5pbXBvcnQgTW9ua2V5MlVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXktZGVmb3JtZWQuZ2xiXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGdsYjogVGdkRGF0YUdsYikge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgIFBPU0lUSU9OOiBcInZlYzRcIixcbiAgICB9KVxuICAgIGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXCJQT1NJVElPTlwiKVxuICAgIGNvbnN0IHsgc2V0IH0gPSBkYXRhc2V0LmdldEF0dHJpYkFjY2Vzc29yKFwiUE9TSVRJT05cIilcbiAgICBjb25zdCBjb3VudCA9IGRhdGFzZXQuY291bnRcbiAgICBjb25zdCByYWRpdXMgPSAwLjAxXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHNldChyYWRpdXMsIGksIDMpXG4gICAgfVxuICAgIHJldHVybiBkYXRhc2V0XG59XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgIG1heFpvb206IDUsXG4gICAgICAgIG1pblpvb206IDAuNSxcbiAgICAgICAgc3BlZWRab29tOiAxLFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgd3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICAgICAgd3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuICAgICAgICB9LFxuICAgIH0pLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjc0XCIsIFwiI2ZmMFwiLCBcIiM1OWZcIl0pKVxuICAgIGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKVxuICAgIGNvbnN0IGRhdGFzZXQyID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkyKVxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZE1vcnBoaW5nKGNvbnRleHQsIHtcbiAgICAgICAgbWl4OiAxLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0MS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgdXY6IG1ha2VVVihkYXRhc2V0MS5jb3VudCwgMSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQyLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQyLmNvdW50LCAwKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgdGV4dHVyZSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIGNoaWxkcmVuOiBbY2xvdWRdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIGNsb3VkLm1peCA9IHNldHRpbmdzLm1peFxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgbW9ua2V5MTogTW9ua2V5MVVSTCwgbW9ua2V5MjogTW9ua2V5MlVSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgbWl4OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1peFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIG1ha2VVVihjb3VudDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAyKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkYXRhW2ldID0gdmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgICcgICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg1LCA1KTtcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiA1LFxcbiAgICAgICAgbWluWm9vbTogMC41LFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XFxuICAgICAgICBQT1NJVElPTjogXCJ2ZWM0XCIsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjb29yZHM6IG51bWJlcltdID0gW107XFxuICAgIGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdO1xcbiAgICBmb3IgKGxldCB4IG9mIHZhbHVlcykge1xcbiAgICAgICAgZm9yIChsZXQgeSBvZiB2YWx1ZXMpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCB6IG9mIHZhbHVlcykge1xcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh4LCB5LCB6LCAxKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpO1xcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKFxcbiAgICAgICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjc0XCJdKSxcXG4gICAgKTtcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcXG4gICAgICAgIGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxcbiAgICAgICAgdGV4dHVyZSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuICAgIH0pO1xcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxcbiAgICB9KTtcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG4gICAgY29udGV4dC5wYWludCgpOycsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IE1vbmtleVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDUsIDUpO1xcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDUsXFxuICAgICAgICBtaW5ab29tOiAwLjUsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIFBPU0lUSU9OOiBcInZlYzRcIixcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXTtcXG4gICAgY29uc3QgdmFsdWVzID0gWy0xLCArMV07XFxuICAgIGZvciAobGV0IHggb2YgdmFsdWVzKSB7XFxuICAgICAgICBmb3IgKGxldCB5IG9mIHZhbHVlcykge1xcbiAgICAgICAgICAgIGZvciAobGV0IHogb2YgdmFsdWVzKSB7XFxuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHgsIHksIHosIDEpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcIlBPU0lUSU9OXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIl0pLFxcbiAgICApO1xcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcbiAgICAgICAgZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuICAgIH0pO1xcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcbiAgICBjb250ZXh0LnBhaW50KCk7XFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eTtcXG4gICAgICAgIGNsb3VkLnNoYWRvd1RoaWNrbmVzcyA9IHNldHRpbmdzLnNoYWRvd1RoaWNrbmVzcztcXG4gICAgICAgIGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50O1xcbiAgICAgICAgY2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eTtcXG4gICAgICAgIGNsb3VkLmxpZ2h0ID0gc2V0dGluZ3MubGlnaHQ7XFxuICAgICAgICBjb250ZXh0LnBhaW50KCk7XFxuICAgIH07XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHNoYWRvd0ludGVuc2l0eToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2hhZG93SW50ZW5zaXR5XCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzaGFkb3dUaGlja25lc3M6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNoYWRvd1RoaWNrbmVzc1wiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNwZWN1bGFyRXhwb25lbnQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWN1bGFyRXhwb25lbnRcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMCxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyMCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJJbnRlbnNpdHk6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWN1bGFySW50ZW5zaXR5XCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC4zMyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgbGlnaHQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImxpZ2h0XCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgTW9ua2V5VVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg1LCA1KVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgIG1heFpvb206IDUsXG4gICAgICAgIG1pblpvb206IDAuNSxcbiAgICAgICAgc3BlZWRab29tOiAxLFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICBQT1NJVElPTjogXCJ2ZWM0XCIsXG4gICAgfSlcbiAgICBjb25zdCBjb29yZHM6IG51bWJlcltdID0gW11cbiAgICBjb25zdCB2YWx1ZXMgPSBbLTEsICsxXVxuICAgIGZvciAobGV0IHggb2YgdmFsdWVzKSB7XG4gICAgICAgIGZvciAobGV0IHkgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB6IG9mIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHgsIHksIHosIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGF0YXNldC5zZXQoXCJQT1NJVElPTlwiLCBuZXcgRmxvYXQzMkFycmF5KGNvb3JkcykpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIl0pKVxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XG4gICAgICAgIGRhdGFQb2ludDogbmV3IEZsb2F0MzJBcnJheShkYXRhc2V0LmRhdGEpLFxuICAgICAgICB0ZXh0dXJlLFxuICAgIH0pXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXG4gICAgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW2N1YmUsIGNsb3VkXSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuICAgICAgICBjbG91ZC5zaGFkb3dJbnRlbnNpdHkgPSBzZXR0aW5ncy5zaGFkb3dJbnRlbnNpdHlcbiAgICAgICAgY2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzXG4gICAgICAgIGNsb3VkLnNwZWN1bGFyRXhwb25lbnQgPSBzZXR0aW5ncy5zcGVjdWxhckV4cG9uZW50XG4gICAgICAgIGNsb3VkLnNwZWN1bGFySW50ZW5zaXR5ID0gc2V0dGluZ3Muc3BlY3VsYXJJbnRlbnNpdHlcbiAgICAgICAgY2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodFxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHNoYWRvd0ludGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaGFkb3dJbnRlbnNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNoYWRvd1RoaWNrbmVzczoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaGFkb3dUaGlja25lc3NcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJFeHBvbmVudDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzcGVjdWxhckV4cG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMjAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzcGVjdWxhckludGVuc2l0eToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzcGVjdWxhckludGVuc2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC4zMyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsMEpBQTBKLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0VqSjtBQUNpQjtBQUNXO0FBQ2Y7QUFFdEMsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsbzFDQUFvMUMsRUFBQztBQUNoM0MsTUFBTSxJQUFJLEdBQUcsc2hHQUFzaEc7QUFFcGhHLFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQyw4Q0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMs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