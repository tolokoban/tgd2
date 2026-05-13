"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_neuron-test_page_mdx-src_components_demo_CodeViewer_CodeViewer_m-35caa9"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/main.demo.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (neuron test)"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uLXRlc3RfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbS0zNWNhYTkuYzk2MjYyMDY1N2NiMzNhYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24tdGVzdC9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L18vbWFpbi5kZW1vL2luZm8udHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDYsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXFxuICAgIGJib3guZGVidWcoKVxcbiAgICBjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuICAgIGNvbnN0IHZlY0RpbSA9IG5ldyBUZ2RWZWMzKHZlY01heCkuc3VidHJhY3QodmVjTWluKVxcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG4gICAgY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNhbWVyYS5mYXIgPSByYWRpdXMgKiAxXFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKVxcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFxcXCIsXFxcIikpXFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeTogVGdkR2VvbWV0cnkgfCBudWxsID0gYXdhaXQgbG9hZEdlb21ldHJ5KHgsIHksIHosIGxldmVsLCBhdmFpbGFibGVGaWxlcylcXG4gICAgICAgICAgICBpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxXSxcXG4gICAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgfSksIC8vIG1hdGVyaWFsc1tsZXZlbF0sIC8vIG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDQsXFxuICAgICAgICBzdXJmYWNlVGhyZXNob2xkOiAxLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2RdLFxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgLy8gY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgcmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKHNldHRpbmdzLnpvb20sIDEsIE1BWF9aT09NLCByYWRpdXMgKiAzLCAocmFkaXVzICogMykgLyBNQVhfWk9PTSlcXG4gICAgICAgIGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXFxuICAgICAgICBjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcIi8vIGltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1gud2VicFxcXCJcXG4vLyBpbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcXFwiXFxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXFxcIlxcbi8vIGltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1gud2VicFxcXCJcXG4vLyBpbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcXFwiXFxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RCb3VuZGluZ0JveCxcXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RHZW9tZXRyeSxcXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxPRCxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVmVjMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFxcXCIuL2luZm9cXFwiXFxuXFxuY29uc3QgTUFYX1pPT00gPSAxMlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG4gICAgICAgIHN0ZXBzOiA2LFxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcbiAgICAgICAgKGxldmVsKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG4gICAgY29uc3QgYmJveCA9IG5ldyBUZ2RCb3VuZGluZ0JveChPY3RyZWVJbmZvLmJib3gubWluLCBPY3RyZWVJbmZvLmJib3gubWF4KS5tYWtlQ29udGFpbmluZ0N1YmUoKVxcbiAgICBiYm94LmRlYnVnKClcXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXFxuICAgIGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KVxcbiAgICBjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcXG4gICAgY29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpXFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXFxuICAgIGNhbWVyYS5uZWFyID0gMVxcbiAgICBjYW1lcmEuZmFyID0gcmFkaXVzICogMVxcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldChyYWRpdXMsIHJhZGl1cylcXG4gICAgY29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcXFwiLFxcXCIpKVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IFRnZEdlb21ldHJ5IHwgbnVsbCA9IGF3YWl0IGxvYWRHZW9tZXRyeSh4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXFxuICAgICAgICAgICAgaWYgKCFnZW9tZXRyeSkgcmV0dXJuIG51bGxcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMV0sXFxuICAgICAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0pLCAvLyBtYXRlcmlhbHNbbGV2ZWxdLCAvLyBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA0LFxcbiAgICAgICAgc3VyZmFjZVRocmVzaG9sZDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIC8vIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShzZXR0aW5ncy56b29tLCAxLCBNQVhfWk9PTSwgcmFkaXVzICogMywgKHJhZGl1cyAqIDMpIC8gTUFYX1pPT00pXFxuICAgICAgICBjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKVxcbiAgICAgICAgY2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICB6b29tOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcIlpvb21cXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFxcXCIwXFxcIilcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdlb21ldHJ5KFxcbiAgICB4OiBudW1iZXIsXFxuICAgIHk6IG51bWJlcixcXG4gICAgejogbnVtYmVyLFxcbiAgICBsZXZlbDogbnVtYmVyLFxcbiAgICBhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXFxuKTogUHJvbWlzZTxUZ2RHZW9tZXRyeSB8IG51bGw+IHtcXG4gICAgY29uc3QgaWQgPSBgJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9YFxcbiAgICBpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsXFxuXFxuICAgIGNvbnN0IHVybCA9IGxldmVsID09PSAwID8gXFxcIi4vYXNzZXRzL25ldXJvbi8wMi8wLmJpblxcXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAyLyR7aWR9LmJpbmBcXG4gICAgY29uc29sZS5sb2coXFxcIkxvYWRpbmcgTE9EIGJsb2NrOlxcXCIsIHVybClcXG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcXG4gICAgaWYgKCFidWZmZXIpIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgJHt1cmx9IWApXFxuXFxuICAgIGNvbnNvbGUuZGVidWcobmV3IEZsb2F0MzJBcnJheShidWZmZXIpKVxcbiAgICBjb25zdCBkYXRhID0gYnVmZmVyLnNsaWNlKDQpXFxuICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldChcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBQT1NJVElPTjogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgICAgIE5PUk1BTDogXFxcInZlYzNcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBkYXRhLFxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeSh7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgYXR0UG9zaXRpb246IFxcXCJQT1NJVElPTlxcXCIsXFxuICAgICAgICBhdHROb3JtYWw6IFxcXCJOT1JNQUxcXFwiLFxcbiAgICB9KVxcbiAgICBnZW9tZXRyeS5kZWJ1ZygpXFxuICAgIHJldHVybiBnZW9tZXRyeVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNvbnN0IE9jdHJlZUluZm86IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogQXJyYXlOdW1iZXIzXG4gICAgICAgIG1heDogQXJyYXlOdW1iZXIzXG4gICAgfVxuICAgIGZpbGVzOiBzdHJpbmdcbn0gPSB7XG4gICAgYmJveDoge1xuICAgICAgICBtaW46IFs0MjguMDE2MDYyNSwgOTM4Ljk2Nzg3NSwgODQyLjY0MDA2MjVdLFxuICAgICAgICBtYXg6IFs1NzAuNDMyLCAxMDUwLjU1MjEyNSwgOTMwLjY0MDEyNV0sXG4gICAgfSxcbiAgICBmaWxlczogXCIwMDAwMDAxMDEsMDAwMTEwMTAxLDEwMDAxMDAxMSwwMDAwMDAxMDAsMDAwMTExLDAxMTAxMDAxMSwwMTEwMTEsMTAwMDEwMDEwLDExMTAxMDAwMSwwMTEwMTAsMTEwMTAwMTAwLDEwMTEwMDEwMCwxMTAxMDEsMTEwMDEwMDAxLDAsMDExLDExMTAxMCwwMDAwMDExMDAsMDEwMDEwMDExLDAxMDEwMDEwMSwwMDExMTAxMDEsMDEwMTAwMTEwLDAwMTAxMDExMCwxMDAxMDEsMDEwMTAxMTEwLDEwMDEwMDEwMCwwMDExMDAxMDEsMDAxMTAxMTAxLDAxMTAxMTEwMCwwMDEwMTAxMDEsMTEwMDEwMDEwLDExMDEwMCwwMDExMTAsMTAxMDEwMDEwLDExMTAxMDAxMCwxMTAwMTEwMTEsMDEwMDExMTAwLDAwMDAxMTEwMSwxMDEwMTAsMDEwMTAxLDAwMTAwMTEwMSwwMDEwMTAsMTExMDAxLDExMDEwMDAxMSwwMDEsMDEwMDExMTAxLDAxMTEwMDEwMCwwMTAwMTEwMTEsMDAxMDExMTEwLDAxMDAxMDEwMCwwMTAxMTAsMDAwMDExMTEwLDAxMTAxMTEwMSwxMTEsMDAwMTEwLDAwMDAxMCwwMDAxMTExMDEsMTEwLDAwMDAwMTEwMSwwMDEwMTExMDAsMTAwLDAwMTAxMTEwMSwwMDAsMTAxMDEwMDExXCIsXG59XG4iLCIvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1oud2VicFwiXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1oud2VicFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcbiAgICBUZ2RCb3VuZGluZ0JveCxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXG4gICAgdGdkQ29sb3JNYWtlSHVlV2hlZWwsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkR2VvbWV0cnksXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxPRCxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVmVjMyxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgT2N0cmVlSW5mbyB9IGZyb20gXCIuL2luZm9cIlxuXG5jb25zdCBNQVhfWk9PTSA9IDEyXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XG4gICAgICAgIHN0ZXBzOiA2LFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcbiAgICAgICAgKGxldmVsKSA9PlxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXG4gICAgYmJveC5kZWJ1ZygpXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgIGNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXG4gICAgY2FtZXJhLm5lYXIgPSAxXG4gICAgY2FtZXJhLmZhciA9IHJhZGl1cyAqIDFcbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldChyYWRpdXMsIHJhZGl1cylcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFwiLFwiKSlcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IFRnZEdlb21ldHJ5IHwgbnVsbCA9IGF3YWl0IGxvYWRHZW9tZXRyeSh4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXG4gICAgICAgICAgICBpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMV0sXG4gICAgICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSwgLy8gbWF0ZXJpYWxzW2xldmVsXSwgLy8gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHN1YmRpdmlzaW9uczogNCxcbiAgICAgICAgc3VyZmFjZVRocmVzaG9sZDogMSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZF0sXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgLy8gY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICByZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKHNldHRpbmdzLnpvb20sIDEsIE1BWF9aT09NLCByYWRpdXMgKiAzLCAocmFkaXVzICogMykgLyBNQVhfWk9PTSlcbiAgICAgICAgY2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcbiAgICAgICAgY2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIilcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdlb21ldHJ5KFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgejogbnVtYmVyLFxuICAgIGxldmVsOiBudW1iZXIsXG4gICAgYXZhaWxhYmxlRmlsZXM6IFNldDxzdHJpbmc+LFxuKTogUHJvbWlzZTxUZ2RHZW9tZXRyeSB8IG51bGw+IHtcbiAgICBjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXG4gICAgaWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdXJsID0gbGV2ZWwgPT09IDAgPyBcIi4vYXNzZXRzL25ldXJvbi8wMi8wLmJpblwiIDogYC4vYXNzZXRzL25ldXJvbi8wMi8ke2lkfS5iaW5gXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRnZExvYWRBcnJheUJ1ZmZlcih1cmwpXG4gICAgaWYgKCFidWZmZXIpIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgJHt1cmx9IWApXG5cbiAgICBjb25zb2xlLmRlYnVnKG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKSlcbiAgICBjb25zdCBkYXRhID0gYnVmZmVyLnNsaWNlKDQpXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxuICAgICAgICB7XG4gICAgICAgICAgICBQT1NJVElPTjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICBOT1JNQUw6IFwidmVjM1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICB9LFxuICAgIClcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeSh7XG4gICAgICAgIGRhdGFzZXQsXG4gICAgICAgIGF0dFBvc2l0aW9uOiBcIlBPU0lUSU9OXCIsXG4gICAgICAgIGF0dE5vcm1hbDogXCJOT1JNQUxcIixcbiAgICB9KVxuICAgIGdlb21ldHJ5LmRlYnVnKClcbiAgICByZXR1cm4gZ2VvbWV0cnlcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiT2N0cmVlSW5mbyIsIlZpZXciLCJUZ2RCb3VuZGluZ0JveCIsInRnZENhbGNNYXBSYW5nZSIsInRnZENvbG9yTWFrZUh1ZVdoZWVsIiwiVGdkRGF0YXNldCIsIlRnZEdlb21ldHJ5IiwidGdkTG9hZEFycmF5QnVmZmVyIiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxPRCIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVmVjMyIsIndlYmdsUHJlc2V0RGVwdGgiLCJNQVhfWk9PTSIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiQ09MT1JTIiwiY29sb3IiLCJtYXRlcmlhbHMiLCJsZXZlbCIsImNsZWFyIiwiYmJveCIsInZlY01pbiIsInZlY01heCIsInZlY0RpbSIsInJhZGl1cyIsIk1hdGgiLCJjZW50ZXIiLCJjYW1lcmEiLCJhdmFpbGFibGVGaWxlcyIsIlNldCIsImxvZCIsImZhY3RvcnkiLCJ4IiwieSIsInoiLCJnZW9tZXRyeSIsImxvYWRHZW9tZXRyeSIsInNldHRpbmdzIiwidG9CaW4iLCJ2YWx1ZSIsImlkIiwidXJsIiwiYnVmZmVyIiwiZGF0YSIsImRhdGFzZXQiLCJjb25zb2xlIiwiRXJyb3IiLCJGbG9hdDMyQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBMjBFO0FBQ3QyRSxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FB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