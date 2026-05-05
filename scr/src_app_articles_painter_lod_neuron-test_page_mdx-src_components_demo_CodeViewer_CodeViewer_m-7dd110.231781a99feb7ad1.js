"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_neuron-test_page_mdx-src_components_demo_CodeViewer_CodeViewer_m-7dd110"], {
40814(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(23596);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * Warning! This code has been generated automatically.
 */ 



var FOCUS = {
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(\",\"))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}"
};
var FULL = "// import NegX from \"@/assets/cubemap/sky/negX.webp\"\n// import NegY from \"@/assets/cubemap/sky/negY.webp\"\n// import NegZ from \"@/assets/cubemap/sky/negZ.webp\"\n// import PosX from \"@/assets/cubemap/sky/posX.webp\"\n// import PosY from \"@/assets/cubemap/sky/posY.webp\"\n// import PosZ from \"@/assets/cubemap/sky/posZ.webp\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport {\n    type ArrayNumber4,\n    TgdBoundingBox,\n    tgdCalcMapRange,\n    tgdColorMakeHueWheel,\n    type TgdContext,\n    TgdDataset,\n    TgdGeometry,\n    tgdLoadArrayBuffer,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLOD,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdVec3,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport { OctreeInfo } from \"./info\"\n\nconst MAX_ZOOM = 12\n\nfunction init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(\",\"))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            disableDefaultDoubleTap\n            onReady={init}\n            gizmo\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                speedZoom: 0,\n            }}\n            settings={{\n                zoom: {\n                    label: \"Zoom\",\n                    value: 1,\n                    min: 1,\n                    max: MAX_ZOOM,\n                },\n            }}\n        />\n    )\n}\n\nfunction toBin(value: number, level: number): string {\n    return value.toString(2).padStart(level, \"0\")\n}\n\nasync function loadGeometry(\n    x: number,\n    y: number,\n    z: number,\n    level: number,\n    availableFiles: Set<string>,\n): Promise<TgdGeometry | null> {\n    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`\n    if (!availableFiles.has(id)) return null\n\n    const url = level === 0 ? \"./assets/neuron/02/0.bin\" : `./assets/neuron/02/${id}.bin`\n    console.log(\"Loading LOD block:\", url)\n    const buffer = await tgdLoadArrayBuffer(url)\n    if (!buffer) throw new Error(`Unable to load ${url}!`)\n\n    console.debug(new Float32Array(buffer))\n    const data = buffer.slice(4)\n    const dataset = new TgdDataset(\n        {\n            POSITION: \"vec3\",\n            NORMAL: \"vec3\",\n        },\n        {\n            data,\n        },\n    )\n    const geometry = new TgdGeometry({\n        dataset,\n        attPosition: \"POSITION\",\n        attNormal: \"NORMAL\",\n    })\n    geometry.debug()\n    return geometry\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "elevated",
                            onClick: function onClick() {
                                return setFull(!full);
                            },
                            children: full ? "Show code details" : "Show full code"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
51500(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OctreeInfo: () => (OctreeInfo)
});
var OctreeInfo = {
    bbox: {
        min: [
            428.0160625,
            938.967875,
            842.6400625
        ],
        max: [
            570.432,
            1050.552125,
            930.640125
        ]
    },
    files: "000000101,000110101,100010011,000000100,000111,011010011,011011,100010010,111010001,011010,110100100,101100100,110101,110010001,0,011,111010,000001100,010010011,010100101,001110101,010100110,001010110,100101,010101110,100100100,001100101,001101101,011011100,001010101,110010010,110100,001110,101010010,111010010,110011011,010011100,000011101,101010,010101,001001101,001010,111001,110100011,001,010011101,011100100,010011011,001011110,010010100,010110,000011110,011011101,111,000110,000010,000111101,110,000001101,001011100,100,001011101,000,101010011"
};


},
23596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(43475);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _info__rspack_import_3 = __webpack_require__(51500);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

// import NegX from "@/assets/cubemap/sky/negX.webp"
// import NegY from "@/assets/cubemap/sky/negY.webp"
// import NegZ from "@/assets/cubemap/sky/negZ.webp"
// import PosX from "@/assets/cubemap/sky/posX.webp"
// import PosY from "@/assets/cubemap/sky/posY.webp"
// import PosZ from "@/assets/cubemap/sky/posZ.webp"



var MAX_ZOOM = 12;
// #begin
function init(context, assets) {
    var COLORS = (0,_tolokoban_tgd__rspack_import_2.tgdColorMakeHueWheel)({
        steps: 6
    }).map(function(color) {
        return [
            color.R,
            color.G,
            color.B,
            1
        ];
    });
    var materials = [
        0,
        1,
        2,
        3,
        4,
        5
    ].map(function(level) {
        return new _tolokoban_tgd__rspack_import_2.TgdMaterialDiffuse({
            color: COLORS[level],
            lockLightsToCamera: true
        });
    });
    var clear = new _tolokoban_tgd__rspack_import_2.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ]
    });
    var bbox = new _tolokoban_tgd__rspack_import_2.TgdBoundingBox(_info__rspack_import_3.OctreeInfo.bbox.min, _info__rspack_import_3.OctreeInfo.bbox.max).makeContainingCube();
    bbox.debug();
    var vecMin = new _tolokoban_tgd__rspack_import_2.TgdVec3(bbox.min);
    var vecMax = new _tolokoban_tgd__rspack_import_2.TgdVec3(bbox.max);
    var vecDim = new _tolokoban_tgd__rspack_import_2.TgdVec3(vecMax).subtract(vecMin);
    var radius = Math.max(vecDim.x, vecDim.y, vecDim.z);
    var center = new _tolokoban_tgd__rspack_import_2.TgdVec3(vecMax).add(vecMin).scale(0.5);
    var camera = context.camera;
    camera.transfo.position = center;
    camera.near = 1;
    camera.far = radius * 1;
    camera.fitSpaceAtTarget(radius, radius);
    var availableFiles = new Set(_info__rspack_import_3.OctreeInfo.files.split(","));
    var lod = new _tolokoban_tgd__rspack_import_2.TgdPainterLOD(context, {
        bbox: bbox,
        factory: function factory(x, y, z, level) {
            return _async_to_generator(function() {
                var geometry;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                loadGeometry(x, y, z, level, availableFiles)
                            ];
                        case 1:
                            geometry = _state.sent();
                            if (!geometry) return [
                                2,
                                null
                            ];
                            return [
                                2,
                                new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context, {
                                    geometry: geometry,
                                    material: new _tolokoban_tgd__rspack_import_2.TgdMaterialDiffuse({
                                        color: [
                                            Math.random(),
                                            Math.random(),
                                            Math.random(),
                                            1
                                        ],
                                        lockLightsToCamera: true
                                    })
                                })
                            ];
                    }
                });
            })();
        },
        subdivisions: 4,
        surfaceThreshold: 1
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        children: [
            lod
        ],
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less
    }));
    context.paint();
    return function(settings) {
        var camera = context.camera;
        camera.transfo.distance = (0,_tolokoban_tgd__rspack_import_2.tgdCalcMapRange)(settings.zoom, 1, MAX_ZOOM, radius * 3, radius * 3 / MAX_ZOOM);
        camera.near = Math.max(1, camera.transfo.distance - radius);
        camera.far = camera.transfo.distance + radius;
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_1["default"], {
        disableDefaultDoubleTap: true,
        onReady: init,
        gizmo: true,
        controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            speedZoom: 0
        },
        settings: {
            zoom: {
                label: "Zoom",
                value: 1,
                min: 1,
                max: MAX_ZOOM
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/main.demo.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
function loadGeometry(x, y, z, level, availableFiles) {
    return _async_to_generator(function() {
        var id, url, buffer, data, dataset, geometry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = "".concat(toBin(x, level)).concat(toBin(y, level)).concat(toBin(z, level));
                    if (!availableFiles.has(id)) return [
                        2,
                        null
                    ];
                    url = level === 0 ? "./assets/neuron/02/0.bin" : "./assets/neuron/02/".concat(id, ".bin");
                    console.log("Loading LOD block:", url);
                    return [
                        4,
                        (0,_tolokoban_tgd__rspack_import_2.tgdLoadArrayBuffer)(url)
                    ];
                case 1:
                    buffer = _state.sent();
                    if (!buffer) throw new Error("Unable to load ".concat(url, "!"));
                    console.debug(new Float32Array(buffer));
                    data = buffer.slice(4);
                    dataset = new _tolokoban_tgd__rspack_import_2.TgdDataset({
                        POSITION: "vec3",
                        NORMAL: "vec3"
                    }, {
                        data: data
                    });
                    geometry = new _tolokoban_tgd__rspack_import_2.TgdGeometry({
                        dataset: dataset,
                        attPosition: "POSITION",
                        attNormal: "NORMAL"
                    });
                    geometry.debug();
                    return [
                        2,
                        geometry
                    ];
            }
        });
    })();
}


},
50225(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(40814);
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
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MDXProvider: () => (MDXProvider),
  useMDXComponents: () => (useMDXComponents)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uLXRlc3RfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbS03ZGQxMTAuMjMxNzgxYTk5ZmViN2FkMS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5mby50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24tdGVzdC9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuICAgICAgICBzdGVwczogNixcXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG4gICAgICAgIChsZXZlbCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXFxuICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuICAgIGNvbnN0IGJib3ggPSBuZXcgVGdkQm91bmRpbmdCb3goT2N0cmVlSW5mby5iYm94Lm1pbiwgT2N0cmVlSW5mby5iYm94Lm1heCkubWFrZUNvbnRhaW5pbmdDdWJlKClcXG4gICAgYmJveC5kZWJ1ZygpXFxuICAgIGNvbnN0IHZlY01pbiA9IG5ldyBUZ2RWZWMzKGJib3gubWluKVxcbiAgICBjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXFxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHZlY0RpbS54LCB2ZWNEaW0ueSwgdmVjRGltLnopXFxuICAgIGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxcbiAgICBjYW1lcmEubmVhciA9IDFcXG4gICAgY2FtZXJhLmZhciA9IHJhZGl1cyAqIDFcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQocmFkaXVzLCByYWRpdXMpXFxuICAgIGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXFxcIixcXFwiKSlcXG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcbiAgICAgICAgYmJveCxcXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5OiBUZ2RHZW9tZXRyeSB8IG51bGwgPSBhd2FpdCBsb2FkR2VvbWV0cnkoeCwgeSwgeiwgbGV2ZWwsIGF2YWlsYWJsZUZpbGVzKVxcbiAgICAgICAgICAgIGlmICghZ2VvbWV0cnkpIHJldHVybiBudWxsXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDFdLFxcbiAgICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9KSwgLy8gbWF0ZXJpYWxzW2xldmVsXSwgLy8gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHN1YmRpdmlzaW9uczogNCxcXG4gICAgICAgIHN1cmZhY2VUaHJlc2hvbGQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZF0sXFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2Uoc2V0dGluZ3Muem9vbSwgMSwgTUFYX1pPT00sIHJhZGl1cyAqIDMsIChyYWRpdXMgKiAzKSAvIE1BWF9aT09NKVxcbiAgICAgICAgY2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG4gICAgICAgIGNhbWVyYS5mYXIgPSBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSArIHJhZGl1c1xcbiAgICB9XFxufVwifVxuY29uc3QgRlVMTCA9IFwiLy8gaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXFxcIlxcbi8vIGltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1kud2VicFxcXCJcXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdaLndlYnBcXFwiXFxuLy8gaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXFxcIlxcbi8vIGltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1kud2VicFxcXCJcXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIFRnZEJvdW5kaW5nQm94LFxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXFxuICAgIHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZERhdGFzZXQsXFxuICAgIFRnZEdlb21ldHJ5LFxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTE9ELFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RWZWMzLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgT2N0cmVlSW5mbyB9IGZyb20gXFxcIi4vaW5mb1xcXCJcXG5cXG5jb25zdCBNQVhfWk9PTSA9IDEyXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDYsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXFxuICAgIGJib3guZGVidWcoKVxcbiAgICBjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuICAgIGNvbnN0IHZlY0RpbSA9IG5ldyBUZ2RWZWMzKHZlY01heCkuc3VidHJhY3QodmVjTWluKVxcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG4gICAgY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNhbWVyYS5mYXIgPSByYWRpdXMgKiAxXFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKVxcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFxcXCIsXFxcIikpXFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeTogVGdkR2VvbWV0cnkgfCBudWxsID0gYXdhaXQgbG9hZEdlb21ldHJ5KHgsIHksIHosIGxldmVsLCBhdmFpbGFibGVGaWxlcylcXG4gICAgICAgICAgICBpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxXSxcXG4gICAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSksIC8vIG1hdGVyaWFsc1tsZXZlbF0sIC8vIG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDQsXFxuICAgICAgICBzdXJmYWNlVGhyZXNob2xkOiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2RdLFxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgLy8gY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKHNldHRpbmdzLnpvb20sIDEsIE1BWF9aT09NLCByYWRpdXMgKiAzLCAocmFkaXVzICogMykgLyBNQVhfWk9PTSlcXG4gICAgICAgIGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXFxuICAgICAgICBjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHpvb206IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcXFwiWm9vbVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogTUFYX1pPT00sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XFxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXFxcIjBcXFwiKVxcbn1cXG5cXG5hc3luYyBmdW5jdGlvbiBsb2FkR2VvbWV0cnkoXFxuICAgIHg6IG51bWJlcixcXG4gICAgeTogbnVtYmVyLFxcbiAgICB6OiBudW1iZXIsXFxuICAgIGxldmVsOiBudW1iZXIsXFxuICAgIGF2YWlsYWJsZUZpbGVzOiBTZXQ8c3RyaW5nPixcXG4pOiBQcm9taXNlPFRnZEdlb21ldHJ5IHwgbnVsbD4ge1xcbiAgICBjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXFxuICAgIGlmICghYXZhaWxhYmxlRmlsZXMuaGFzKGlkKSkgcmV0dXJuIG51bGxcXG5cXG4gICAgY29uc3QgdXJsID0gbGV2ZWwgPT09IDAgPyBcXFwiLi9hc3NldHMvbmV1cm9uLzAyLzAuYmluXFxcIiA6IGAuL2Fzc2V0cy9uZXVyb24vMDIvJHtpZH0uYmluYFxcbiAgICBjb25zb2xlLmxvZyhcXFwiTG9hZGluZyBMT0QgYmxvY2s6XFxcIiwgdXJsKVxcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB0Z2RMb2FkQXJyYXlCdWZmZXIodXJsKVxcbiAgICBpZiAoIWJ1ZmZlcikgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCAke3VybH0hYClcXG5cXG4gICAgY29uc29sZS5kZWJ1ZyhuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcikpXFxuICAgIGNvbnN0IGRhdGEgPSBidWZmZXIuc2xpY2UoNClcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxcbiAgICAgICAge1xcbiAgICAgICAgICAgIFBPU0lUSU9OOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICAgICAgTk9STUFMOiBcXFwidmVjM1xcXCIsXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICAgIGRhdGEsXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5KHtcXG4gICAgICAgIGRhdGFzZXQsXFxuICAgICAgICBhdHRQb3NpdGlvbjogXFxcIlBPU0lUSU9OXFxcIixcXG4gICAgICAgIGF0dE5vcm1hbDogXFxcIk5PUk1BTFxcXCIsXFxuICAgIH0pXFxuICAgIGdlb21ldHJ5LmRlYnVnKClcXG4gICAgcmV0dXJuIGdlb21ldHJ5XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY29uc3QgT2N0cmVlSW5mbzoge1xuICAgIGJib3g6IHtcbiAgICAgICAgbWluOiBBcnJheU51bWJlcjNcbiAgICAgICAgbWF4OiBBcnJheU51bWJlcjNcbiAgICB9XG4gICAgZmlsZXM6IHN0cmluZ1xufSA9IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogWzQyOC4wMTYwNjI1LCA5MzguOTY3ODc1LCA4NDIuNjQwMDYyNV0sXG4gICAgICAgIG1heDogWzU3MC40MzIsIDEwNTAuNTUyMTI1LCA5MzAuNjQwMTI1XSxcbiAgICB9LFxuICAgIGZpbGVzOiBcIjAwMDAwMDEwMSwwMDAxMTAxMDEsMTAwMDEwMDExLDAwMDAwMDEwMCwwMDAxMTEsMDExMDEwMDExLDAxMTAxMSwxMDAwMTAwMTAsMTExMDEwMDAxLDAxMTAxMCwxMTAxMDAxMDAsMTAxMTAwMTAwLDExMDEwMSwxMTAwMTAwMDEsMCwwMTEsMTExMDEwLDAwMDAwMTEwMCwwMTAwMTAwMTEsMDEwMTAwMTAxLDAwMTExMDEwMSwwMTAxMDAxMTAsMDAxMDEwMTEwLDEwMDEwMSwwMTAxMDExMTAsMTAwMTAwMTAwLDAwMTEwMDEwMSwwMDExMDExMDEsMDExMDExMTAwLDAwMTAxMDEwMSwxMTAwMTAwMTAsMTEwMTAwLDAwMTExMCwxMDEwMTAwMTAsMTExMDEwMDEwLDExMDAxMTAxMSwwMTAwMTExMDAsMDAwMDExMTAxLDEwMTAxMCwwMTAxMDEsMDAxMDAxMTAxLDAwMTAxMCwxMTEwMDEsMTEwMTAwMDExLDAwMSwwMTAwMTExMDEsMDExMTAwMTAwLDAxMDAxMTAxMSwwMDEwMTExMTAsMDEwMDEwMTAwLDAxMDExMCwwMDAwMTExMTAsMDExMDExMTAxLDExMSwwMDAxMTAsMDAwMDEwLDAwMDExMTEwMSwxMTAsMDAwMDAxMTAxLDAwMTAxMTEwMCwxMDAsMDAxMDExMTAxLDAwMCwxMDEwMTAwMTFcIixcbn1cbiIsIi8vIGltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdYLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1kud2VicFwiXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXCJcbi8vIGltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NYLndlYnBcIlxuLy8gaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1kud2VicFwiXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIFRnZEJvdW5kaW5nQm94LFxuICAgIHRnZENhbGNNYXBSYW5nZSxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RHZW9tZXRyeSxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTE9ELFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RWZWMzLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBPY3RyZWVJbmZvIH0gZnJvbSBcIi4vaW5mb1wiXG5cbmNvbnN0IE1BWF9aT09NID0gMTJcblxuLy8gI2JlZ2luXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcbiAgICAgICAgc3RlcHM6IDYsXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxuICAgICAgICAobGV2ZWwpID0+XG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICApXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxuICAgIGNvbnN0IGJib3ggPSBuZXcgVGdkQm91bmRpbmdCb3goT2N0cmVlSW5mby5iYm94Lm1pbiwgT2N0cmVlSW5mby5iYm94Lm1heCkubWFrZUNvbnRhaW5pbmdDdWJlKClcbiAgICBiYm94LmRlYnVnKClcbiAgICBjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcbiAgICBjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcbiAgICBjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxuICAgIGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcbiAgICBjYW1lcmEubmVhciA9IDFcbiAgICBjYW1lcmEuZmFyID0gcmFkaXVzICogMVxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKVxuICAgIGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcbiAgICAgICAgYmJveCxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeTogVGdkR2VvbWV0cnkgfCBudWxsID0gYXdhaXQgbG9hZEdlb21ldHJ5KHgsIHksIHosIGxldmVsLCBhdmFpbGFibGVGaWxlcylcbiAgICAgICAgICAgIGlmICghZ2VvbWV0cnkpIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pLCAvLyBtYXRlcmlhbHNbbGV2ZWxdLCAvLyBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA0LFxuICAgICAgICBzdXJmYWNlVGhyZXNob2xkOiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2Uoc2V0dGluZ3Muem9vbSwgMSwgTUFYX1pPT00sIHJhZGl1cyAqIDMsIChyYWRpdXMgKiAzKSAvIE1BWF9aT09NKVxuICAgICAgICBjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKVxuICAgICAgICBjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcbiAgICB9XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXG4gICAgICAgICAgICAgICAgc3BlZWRab29tOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJab29tXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgIG1heDogTUFYX1pPT00sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB0b0Jpbih2YWx1ZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFwiMFwiKVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkR2VvbWV0cnkoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB6OiBudW1iZXIsXG4gICAgbGV2ZWw6IG51bWJlcixcbiAgICBhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXG4pOiBQcm9taXNlPFRnZEdlb21ldHJ5IHwgbnVsbD4ge1xuICAgIGNvbnN0IGlkID0gYCR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfWBcbiAgICBpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsXG5cbiAgICBjb25zdCB1cmwgPSBsZXZlbCA9PT0gMCA/IFwiLi9hc3NldHMvbmV1cm9uLzAyLzAuYmluXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAyLyR7aWR9LmJpbmBcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcbiAgICBpZiAoIWJ1ZmZlcikgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCAke3VybH0hYClcblxuICAgIGNvbnNvbGUuZGVidWcobmV3IEZsb2F0MzJBcnJheShidWZmZXIpKVxuICAgIGNvbnN0IGRhdGEgPSBidWZmZXIuc2xpY2UoNClcbiAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoXG4gICAgICAgIHtcbiAgICAgICAgICAgIFBPU0lUSU9OOiBcInZlYzNcIixcbiAgICAgICAgICAgIE5PUk1BTDogXCJ2ZWMzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0sXG4gICAgKVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5KHtcbiAgICAgICAgZGF0YXNldCxcbiAgICAgICAgYXR0UG9zaXRpb246IFwiUE9TSVRJT05cIixcbiAgICAgICAgYXR0Tm9ybWFsOiBcIk5PUk1BTFwiLFxuICAgIH0pXG4gICAgZ2VvbWV0cnkuZGVidWcoKVxuICAgIHJldHVybiBnZW9tZXRyeVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJPY3RyZWVJbmZvIiwiVmlldyIsIlRnZEJvdW5kaW5nQm94IiwidGdkQ2FsY01hcFJhbmdlIiwidGdkQ29sb3JNYWtlSHVlV2hlZWwiLCJUZ2REYXRhc2V0IiwiVGdkR2VvbWV0cnkiLCJ0Z2RMb2FkQXJyYXlCdWZmZXIiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTE9EIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RWZWMzIiwid2ViZ2xQcmVzZXREZXB0aCIsIk1BWF9aT09NIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJDT0xPUlMiLCJjb2xvciIsIm1hdGVyaWFscyIsImxldmVsIiwiY2xlYXIiLCJiYm94IiwidmVjTWluIiwidmVjTWF4IiwidmVjRGltIiwicmFkaXVzIiwiTWF0aCIsImNlbnRlciIsImNhbWVyYSIsImF2YWlsYWJsZUZpbGVzIiwiU2V0IiwibG9kIiwiZmFjdG9yeSIsIngiLCJ5IiwieiIsImdlb21ldHJ5IiwibG9hZEdlb21ldHJ5Iiwic2V0dGluZ3MiLCJ0b0JpbiIsInZhbHVlIiwiaWQiLCJ1cmwiLCJidWZmZXIiLCJkYXRhIiwiZGF0YXNldCIsImNvbnNvbGUiLCJFcnJvciIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUEyMEU7QUFDdDJFLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7O0FDdEJPLElBQU1PLGFBTVQ7SUFDQSxNQUFNO1FBQ0YsS0FBSztZQUFDO1lBQWE7WUFBWTtTQUFZO1FBQzNDLEtBQUs7WUFBQztZQUFTO1lBQWE7U0FBVztJQUMzQztJQUNBLE9BQU87QUFDWCxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDSztBQWlCbEM7QUFDWTtBQUVuQyxJQUFNZSxXQUFXO0FBRWpCLFNBQVM7QUFDVCxTQUFTQyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLElBQU1DLFNBQXlCZix3REFBb0JBLENBQUM7UUFDaEQsT0FBTztJQUNYLEdBQUcsR0FBRyxDQUFDLFNBQUNnQjtlQUFVO1lBQUNBLE1BQU0sQ0FBQztZQUFFQSxNQUFNLENBQUM7WUFBRUEsTUFBTSxDQUFDO1lBQUU7U0FBRTs7SUFDaEQsSUFBTUMsWUFBWTtRQUFDO1FBQUc7UUFBRztRQUFHO1FBQUc7UUFBRztLQUFFLENBQUMsR0FBRyxDQUNwQyxTQUFDQztlQUNHLElBQUlkLGtEQUFrQkEsQ0FBQztZQUNuQixPQUFPVyxNQUFNLENBQUNHLE1BQU07WUFDcEIsb0JBQW9CO1FBQ3hCOztJQUVSLElBQU1DLFFBQVEsSUFBSWQsK0NBQWVBLENBQUNRLFNBQVM7UUFBRSxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtJQUFDO0lBQ3ZFLElBQU1PLE9BQU8sSUFBSXRCLDhDQUFjQSxDQUFDRiwwQ0FBbUIsRUFBRUEsMENBQW1CLEVBQUUsa0JBQWtCO0lBQzVGd0IsS0FBSyxLQUFLO0lBQ1YsSUFBTUMsU0FBUyxJQUFJWix1Q0FBT0EsQ0FBQ1csS0FBSyxHQUFHO0lBQ25DLElBQU1FLFNBQVMsSUFBSWIsdUNBQU9BLENBQUNXLEtBQUssR0FBRztJQUNuQyxJQUFNRyxTQUFTLElBQUlkLHVDQUFPQSxDQUFDYSxRQUFRLFFBQVEsQ0FBQ0Q7SUFDNUMsSUFBTUcsU0FBU0MsS0FBSyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxFQUFFQSxPQUFPLENBQUMsRUFBRUEsT0FBTyxDQUFDO0lBQ3BELElBQU1HLFNBQVMsSUFBSWpCLHVDQUFPQSxDQUFDYSxRQUFRLEdBQUcsQ0FBQ0QsUUFBUSxLQUFLLENBQUM7SUFDckQsSUFBUU0sU0FBV2QsUUFBWGM7SUFDUkEsT0FBTyxPQUFPLENBQUMsUUFBUSxHQUFHRDtJQUMxQkMsT0FBTyxJQUFJLEdBQUc7SUFDZEEsT0FBTyxHQUFHLEdBQUdILFNBQVM7SUFDdEJHLE9BQU8sZ0JBQWdCLENBQUNILFFBQVFBO0lBQ2hDLElBQU1JLGlCQUFpQixJQUFJQyxJQUFZakMsNkNBQXNCLENBQUM7SUFDOUQsSUFBTWtDLE1BQU0sSUFBSXhCLDZDQUFhQSxDQUFDTyxTQUFTO1FBQ25DTyxNQUFBQTtRQUNNVyxTQUFOLFNBQU1BLFFBQVFDLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxDQUFTLEVBQUVoQixLQUFhOztvQkFDbERpQjs7Ozs0QkFBK0I7O2dDQUFNQyxhQUFhSixHQUFHQyxHQUFHQyxHQUFHaEIsT0FBT1U7Ozs0QkFBbEVPLFdBQStCOzRCQUNyQyxJQUFJLENBQUNBLFVBQVU7O2dDQUFPOzs0QkFFdEI7O2dDQUFPLElBQUk1Qiw4Q0FBY0EsQ0FBQ00sU0FBUztvQ0FDL0JzQixVQUFBQTtvQ0FDQSxVQUFVLElBQUkvQixrREFBa0JBLENBQUM7d0NBQzdCLEtBQUs7NENBQUdxQixLQUFLLE1BQU07NENBQUlBLEtBQUssTUFBTTs0Q0FBSUEsS0FBSyxNQUFNOzRDQUFJOzt3Q0FDckQsb0JBQW9CO29DQUN4QjtnQ0FDSjs7OztZQUNKOztRQUNBLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQVosUUFBUSxHQUFHLENBQ1BNLE9BQ0EsSUFBSVgsK0NBQWVBLENBQUNLLFNBQVM7UUFDekIsVUFBVTtZQUFDaUI7U0FBSTtRQUNmLE9BQU9wQixxREFBcUI7SUFFaEM7SUFFSkcsUUFBUSxLQUFLO0lBQ2IsT0FBTyxTQUFDd0I7UUFDSixJQUFRVixTQUFXZCxRQUFYYztRQUNSQSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEdBQUc1QixtREFBZUEsQ0FBQ3NDLFNBQVMsSUFBSSxFQUFFLEdBQUcxQixVQUFVYSxTQUFTLEdBQUlBLFNBQVMsSUFBS2I7UUFDakdnQixPQUFPLElBQUksR0FBR0YsS0FBSyxHQUFHLENBQUMsR0FBR0UsT0FBTyxPQUFPLENBQUMsUUFBUSxHQUFHSDtRQUNwREcsT0FBTyxHQUFHLEdBQUdBLE9BQU8sT0FBTyxDQUFDLFFBQVEsR0FBR0g7SUFDM0M7QUFDSjtBQUNBLE9BQU87QUFFUSxTQUFTcEM7SUFDcEIscUJBQ0ksa0RBQUNTLGdEQUFJQTtRQUNELHVCQUF1QjtRQUN2QixTQUFTZTtRQUNULEtBQUs7UUFDTCxZQUFZO1lBQ1IsY0FBYztZQUNkLGFBQWE7WUFDYixXQUFXO1FBQ2Y7UUFDQSxVQUFVO1lBQ04sTUFBTTtnQkFDRixPQUFPO2dCQUNQLE9BQU87Z0JBQ1AsS0FBSztnQkFDTCxLQUFLRDtZQUNUO1FBQ0o7Ozs7OztBQUdaO0FBRUEsU0FBUzJCLE1BQU1DLEtBQWEsRUFBRXJCLEtBQWE7SUFDdkMsT0FBT3FCLE1BQU0sUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDckIsT0FBTztBQUM3QztBQUVBLFNBQWVrQixhQUNYSixDQUFTLEVBQ1RDLENBQVMsRUFDVEMsQ0FBUyxFQUNUaEIsS0FBYSxFQUNiVSxjQUEyQjs7WUFFckJZLElBR0FDLEtBRUFDLFFBSUFDLE1BQ0FDLFNBU0FUOzs7O29CQW5CQUssS0FBTSxHQUFvQkYsT0FBbEJBLE1BQU1OLEdBQUdkLFFBQTJCb0IsT0FBbEJBLE1BQU1MLEdBQUdmLFFBQXlCLE9BQWhCb0IsTUFBTUosR0FBR2hCO29CQUMzRCxJQUFJLENBQUNVLGVBQWUsR0FBRyxDQUFDWSxLQUFLOzt3QkFBTzs7b0JBRTlCQyxNQUFNdkIsVUFBVSxJQUFJLDZCQUE4QixzQkFBd0IsT0FBSHNCLElBQUc7b0JBQ2hGSyxRQUFRLEdBQUcsQ0FBQyxzQkFBc0JKO29CQUNuQjs7d0JBQU10QyxzREFBa0JBLENBQUNzQzs7O29CQUFsQ0MsU0FBUztvQkFDZixJQUFJLENBQUNBLFFBQVEsTUFBTSxJQUFJSSxNQUFPLGtCQUFxQixPQUFKTCxLQUFJO29CQUVuREksUUFBUSxLQUFLLENBQUMsSUFBSUUsYUFBYUw7b0JBQ3pCQyxPQUFPRCxPQUFPLEtBQUssQ0FBQztvQkFDcEJFLFVBQVUsSUFBSTNDLDBDQUFVQSxDQUMxQjt3QkFDSSxVQUFVO3dCQUNWLFFBQVE7b0JBQ1osR0FDQTt3QkFDSTBDLE1BQUFBO29CQUNKO29CQUVFUixXQUFXLElBQUlqQywyQ0FBV0EsQ0FBQzt3QkFDN0IwQyxTQUFBQTt3QkFDQSxhQUFhO3dCQUNiLFdBQVc7b0JBQ2Y7b0JBQ0FULFNBQVMsS0FBSztvQkFDZDs7d0JBQU9BOzs7O0lBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySmlCOzs7Ozs7Ozs7Ozs7OztrQ0FFZDs7Ozs7O29CQUErQztpQkFBQTs7Ozs7Ozs7MEJBRS9DOzs7Ozs7OzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=