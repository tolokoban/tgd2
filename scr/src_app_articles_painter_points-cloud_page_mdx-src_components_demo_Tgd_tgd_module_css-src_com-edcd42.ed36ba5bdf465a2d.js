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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloud.html",
                    children: "TgdPainterPointsCloud"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 6,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterPointsCloudMorphing.html",
                    children: "TgdPainterPointsCloudMorphing"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                    lineNumber: 10,
                    columnNumber: 4
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "It is also possible to use morphing between two positions."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_points_cloud_morphing_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/points-cloud/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wb2ludHMtY2xvdWRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbS1lZGNkNDIuZWQzNmJhNWJkZjQ2NWEyZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvXy9wb2ludHMtY2xvdWQtbW9ycGhpbmcuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BvaW50cy1jbG91ZC9fL3BvaW50cy1jbG91ZC1tb3JwaGluZy5kZW1vL3BvaW50cy1jbG91ZC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL18vcG9pbnRzLWNsb3VkLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wb2ludHMtY2xvdWQvXy9wb2ludHMtY2xvdWQuZGVtby9wb2ludHMtY2xvdWQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcG9pbnRzLWNsb3VkL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9wb2ludHMtY2xvdWQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiA1LFxcbiAgICAgICAgbWluWm9vbTogMC41LFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y3NFxcXCIsIFxcXCIjZmYwXFxcIiwgXFxcIiM1OWZcXFwiXSkpXFxuICAgIGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKVxcbiAgICBjb25zdCBkYXRhc2V0MiA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MilcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgbWl4OiAxLFxcbiAgICAgICAgZGF0YTogW1xcbiAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDEuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQxLmNvdW50LCAxKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQyLmNvdW50LCAwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbG91ZF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG4gICAgY29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IE1vbmtleTFVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXFxcIlxcbmltcG9ydCBNb25rZXkyVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LWRlZm9ybWVkLmdsYlxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChnbGI6IFRnZERhdGFHbGIpIHtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIFBPU0lUSU9OOiBcXFwidmVjNFxcXCIsXFxuICAgIH0pXFxuICAgIGdsYi5zZXRBdHRyaWIoZGF0YXNldCwgXFxcIlBPU0lUSU9OXFxcIilcXG4gICAgY29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXFxcIlBPU0lUSU9OXFxcIilcXG4gICAgY29uc3QgY291bnQgPSBkYXRhc2V0LmNvdW50XFxuICAgIGNvbnN0IHJhZGl1cyA9IDAuMDFcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XFxuICAgICAgICBzZXQocmFkaXVzLCBpLCAzKVxcbiAgICB9XFxuICAgIHJldHVybiBkYXRhc2V0XFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBtYXhab29tOiA1LFxcbiAgICAgICAgbWluWm9vbTogMC41LFxcbiAgICAgICAgc3BlZWRab29tOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuICAgICAgICAgICAgd3JhcFM6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG4gICAgICAgICAgICB3cmFwVDogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcXFwiI2Y3NFxcXCIsIFxcXCIjZmYwXFxcIiwgXFxcIiM1OWZcXFwiXSkpXFxuICAgIGNvbnN0IGRhdGFzZXQxID0gbWFrZURhdGFzZXQoYXNzZXRzLmdsYi5tb25rZXkxKVxcbiAgICBjb25zdCBkYXRhc2V0MiA9IG1ha2VEYXRhc2V0KGFzc2V0cy5nbGIubW9ua2V5MilcXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcoY29udGV4dCwge1xcbiAgICAgICAgbWl4OiAxLFxcbiAgICAgICAgZGF0YTogW1xcbiAgICAgICAgICAgIFtcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDEuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQxLmNvdW50LCAxKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAge1xcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQyLmNvdW50LCAwKSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbG91ZF0sXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNsb3VkLm1peCA9IHNldHRpbmdzLm1peFxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGdsYjogeyBtb25rZXkxOiBNb25rZXkxVVJMLCBtb25rZXkyOiBNb25rZXkyVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBtaXg6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwibWl4XFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VVVihjb3VudDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKSB7XFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMilcXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICBkYXRhW2ldID0gdmFsdWVcXG4gICAgfVxcbiAgICByZXR1cm4gZGF0YVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJQb2ludHNDbG91ZCxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWRNb3JwaGluZyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgTW9ua2V5MVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oaWdoLXJlcy1tb25rZXkuZ2xiXCJcbmltcG9ydCBNb25rZXkyVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS1kZWZvcm1lZC5nbGJcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuZnVuY3Rpb24gbWFrZURhdGFzZXQoZ2xiOiBUZ2REYXRhR2xiKSB7XG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgUE9TSVRJT046IFwidmVjNFwiLFxuICAgIH0pXG4gICAgZ2xiLnNldEF0dHJpYihkYXRhc2V0LCBcIlBPU0lUSU9OXCIpXG4gICAgY29uc3QgeyBzZXQgfSA9IGRhdGFzZXQuZ2V0QXR0cmliQWNjZXNzb3IoXCJQT1NJVElPTlwiKVxuICAgIGNvbnN0IGNvdW50ID0gZGF0YXNldC5jb3VudFxuICAgIGNvbnN0IHJhZGl1cyA9IDAuMDFcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgc2V0KHJhZGl1cywgaSwgMylcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFzZXRcbn1cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgbWF4Wm9vbTogNSxcbiAgICAgICAgbWluWm9vbTogMC41LFxuICAgICAgICBzcGVlZFpvb206IDEsXG4gICAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgIH0sXG4gICAgfSkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIiwgXCIjZmYwXCIsIFwiIzU5ZlwiXSkpXG4gICAgY29uc3QgZGF0YXNldDEgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTEpXG4gICAgY29uc3QgZGF0YXNldDIgPSBtYWtlRGF0YXNldChhc3NldHMuZ2xiLm1vbmtleTIpXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkTW9ycGhpbmcoY29udGV4dCwge1xuICAgICAgICBtaXg6IDEsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQxLmRhdGEpLFxuICAgICAgICAgICAgICAgICAgICB1djogbWFrZVVWKGRhdGFzZXQxLmNvdW50LCAxKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldDIuZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIHV2OiBtYWtlVVYoZGF0YXNldDIuY291bnQsIDApLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICBdLFxuICAgICAgICB0ZXh0dXJlLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFtjbG91ZF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxuICAgIHJldHVybiAoc2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcbiAgICAgICAgY2xvdWQubWl4ID0gc2V0dGluZ3MubWl4XG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBtb25rZXkxOiBNb25rZXkxVVJMLCBtb25rZXkyOiBNb25rZXkyVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBtaXg6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibWl4XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFrZVVWKGNvdW50OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCAqIDIpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGFbaV0gPSB2YWx1ZVxuICAgIH1cbiAgICByZXR1cm4gZGF0YVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3BvaW50cy1jbG91ZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgJyAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDUsIDUpO1xcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIG1heFpvb206IDUsXFxuICAgICAgICBtaW5ab29tOiAwLjUsXFxuICAgICAgICBzcGVlZFpvb206IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KTtcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG4gICAgICAgIFBPU0lUSU9OOiBcInZlYzRcIixcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXTtcXG4gICAgY29uc3QgdmFsdWVzID0gWy0xLCArMV07XFxuICAgIGZvciAobGV0IHggb2YgdmFsdWVzKSB7XFxuICAgICAgICBmb3IgKGxldCB5IG9mIHZhbHVlcykge1xcbiAgICAgICAgICAgIGZvciAobGV0IHogb2YgdmFsdWVzKSB7XFxuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHgsIHksIHosIDEpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBkYXRhc2V0LnNldChcIlBPU0lUSU9OXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSk7XFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoXFxuICAgICAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmNzRcIl0pLFxcbiAgICApO1xcbiAgICBjb25zdCBjbG91ZCA9IG5ldyBUZ2RQYWludGVyUG9pbnRzQ2xvdWQoY29udGV4dCwge1xcbiAgICAgICAgZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXFxuICAgICAgICB0ZXh0dXJlLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgc2l6ZVg6IDIsIHNpemVZOiAyLCBzaXplWjogMiB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFtjdWJlLCBjbG91ZF0sXFxuICAgIH0pO1xcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcbiAgICBjb250ZXh0LnBhaW50KCk7Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclBvaW50c0Nsb3VkLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5cXG5pbXBvcnQgTW9ua2V5VVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2hpZ2gtcmVzLW1vbmtleS5nbGJcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNSwgNSk7XFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgbWF4Wm9vbTogNSxcXG4gICAgICAgIG1pblpvb206IDAuNSxcXG4gICAgICAgIHNwZWVkWm9vbTogMSxcXG4gICAgfSk7XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pO1xcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcbiAgICAgICAgUE9TSVRJT046IFwidmVjNFwiLFxcbiAgICB9KTtcXG4gICAgY29uc3QgY29vcmRzOiBudW1iZXJbXSA9IFtdO1xcbiAgICBjb25zdCB2YWx1ZXMgPSBbLTEsICsxXTtcXG4gICAgZm9yIChsZXQgeCBvZiB2YWx1ZXMpIHtcXG4gICAgICAgIGZvciAobGV0IHkgb2YgdmFsdWVzKSB7XFxuICAgICAgICAgICAgZm9yIChsZXQgeiBvZiB2YWx1ZXMpIHtcXG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2goeCwgeSwgeiwgMSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGRhdGFzZXQuc2V0KFwiUE9TSVRJT05cIiwgbmV3IEZsb2F0MzJBcnJheShjb29yZHMpKTtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChcXG4gICAgICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiXSksXFxuICAgICk7XFxuICAgIGNvbnN0IGNsb3VkID0gbmV3IFRnZFBhaW50ZXJQb2ludHNDbG91ZChjb250ZXh0LCB7XFxuICAgICAgICBkYXRhUG9pbnQ6IG5ldyBGbG9hdDMyQXJyYXkoZGF0YXNldC5kYXRhKSxcXG4gICAgICAgIHRleHR1cmUsXFxuICAgIH0pO1xcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyBzaXplWDogMiwgc2l6ZVk6IDIsIHNpemVaOiAyIH0pLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KTtcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW2N1YmUsIGNsb3VkXSxcXG4gICAgfSk7XFxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XFxuICAgIGNvbnRleHQucGFpbnQoKTtcXG4gICAgcmV0dXJuIChzZXR0aW5nczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xcbiAgICAgICAgY2xvdWQuc2hhZG93SW50ZW5zaXR5ID0gc2V0dGluZ3Muc2hhZG93SW50ZW5zaXR5O1xcbiAgICAgICAgY2xvdWQuc2hhZG93VGhpY2tuZXNzID0gc2V0dGluZ3Muc2hhZG93VGhpY2tuZXNzO1xcbiAgICAgICAgY2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnQ7XFxuICAgICAgICBjbG91ZC5zcGVjdWxhckludGVuc2l0eSA9IHNldHRpbmdzLnNwZWN1bGFySW50ZW5zaXR5O1xcbiAgICAgICAgY2xvdWQubGlnaHQgPSBzZXR0aW5ncy5saWdodDtcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKTtcXG4gICAgfTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBnaXptb1xcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgc2hhZG93SW50ZW5zaXR5OiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzaGFkb3dJbnRlbnNpdHlcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNoYWRvd1RoaWNrbmVzczoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2hhZG93VGhpY2tuZXNzXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogMixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc3BlY3VsYXJFeHBvbmVudDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3BlY3VsYXJFeHBvbmVudFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMjAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzcGVjdWxhckludGVuc2l0eToge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3BlY3VsYXJJbnRlbnNpdHlcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjMzLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBsaWdodDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibGlnaHRcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApO1xcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZEdlb21ldHJ5Qm94LFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyUG9pbnRzQ2xvdWQsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBNb25rZXlVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGlnaC1yZXMtbW9ua2V5LmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDUsIDUpXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgbWF4Wm9vbTogNSxcbiAgICAgICAgbWluWm9vbTogMC41LFxuICAgICAgICBzcGVlZFpvb206IDEsXG4gICAgfSlcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgIFBPU0lUSU9OOiBcInZlYzRcIixcbiAgICB9KVxuICAgIGNvbnN0IGNvb3JkczogbnVtYmVyW10gPSBbXVxuICAgIGNvbnN0IHZhbHVlcyA9IFstMSwgKzFdXG4gICAgZm9yIChsZXQgeCBvZiB2YWx1ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgeSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHogb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2goeCwgeSwgeiwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkYXRhc2V0LnNldChcIlBPU0lUSU9OXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29vcmRzKSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2Y3NFwiXSkpXG4gICAgY29uc3QgY2xvdWQgPSBuZXcgVGdkUGFpbnRlclBvaW50c0Nsb3VkKGNvbnRleHQsIHtcbiAgICAgICAgZGF0YVBvaW50OiBuZXcgRmxvYXQzMkFycmF5KGRhdGFzZXQuZGF0YSksXG4gICAgICAgIHRleHR1cmUsXG4gICAgfSlcbiAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHNpemVYOiAyLCBzaXplWTogMiwgc2l6ZVo6IDIgfSksXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIGNoaWxkcmVuOiBbY3ViZSwgY2xvdWRdLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gKHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIGNsb3VkLnNoYWRvd0ludGVuc2l0eSA9IHNldHRpbmdzLnNoYWRvd0ludGVuc2l0eVxuICAgICAgICBjbG91ZC5zaGFkb3dUaGlja25lc3MgPSBzZXR0aW5ncy5zaGFkb3dUaGlja25lc3NcbiAgICAgICAgY2xvdWQuc3BlY3VsYXJFeHBvbmVudCA9IHNldHRpbmdzLnNwZWN1bGFyRXhwb25lbnRcbiAgICAgICAgY2xvdWQuc3BlY3VsYXJJbnRlbnNpdHkgPSBzZXR0aW5ncy5zcGVjdWxhckludGVuc2l0eVxuICAgICAgICBjbG91ZC5saWdodCA9IHNldHRpbmdzLmxpZ2h0XG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgc2hhZG93SW50ZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNoYWRvd0ludGVuc2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hhZG93VGhpY2tuZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNoYWRvd1RoaWNrbmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzcGVjdWxhckV4cG9uZW50OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWN1bGFyRXhwb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0yMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNwZWN1bGFySW50ZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWN1bGFySW50ZW5zaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjMzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDRWpKO0FBQ2lCO0FBQ1c7QUFDZjtBQUV0QyxNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxvMUNBQW8xQyxFQUFDO0FBQ2gzQyxNQUFNLElBQUksR0FBRyxzaEdBQXNoRztBQUVwaEcsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLDhDQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9B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