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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(","))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}'
};
var FULL = '// import NegX from "@/assets/cubemap/sky/negX.webp"\n// import NegY from "@/assets/cubemap/sky/negY.webp"\n// import NegZ from "@/assets/cubemap/sky/negZ.webp"\n// import PosX from "@/assets/cubemap/sky/posX.webp"\n// import PosY from "@/assets/cubemap/sky/posY.webp"\n// import PosZ from "@/assets/cubemap/sky/posZ.webp"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport {\n    type ArrayNumber4,\n    TgdBoundingBox,\n    tgdCalcMapRange,\n    tgdColorMakeHueWheel,\n    type TgdContext,\n    TgdDataset,\n    TgdGeometry,\n    tgdLoadArrayBuffer,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterLOD,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdVec3,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport { OctreeInfo } from "./info"\n\nconst MAX_ZOOM = 12\n\nfunction init(context: TgdContext, assets: Assets) {\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 6,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialDiffuse({\n                color: COLORS[level],\n                lockLightsToCamera: true,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox = new TgdBoundingBox(OctreeInfo.bbox.min, OctreeInfo.bbox.max).makeContainingCube()\n    bbox.debug()\n    const vecMin = new TgdVec3(bbox.min)\n    const vecMax = new TgdVec3(bbox.max)\n    const vecDim = new TgdVec3(vecMax).subtract(vecMin)\n    const radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n    const center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n    const { camera } = context\n    camera.transfo.position = center\n    camera.near = 1\n    camera.far = radius * 1\n    camera.fitSpaceAtTarget(radius, radius)\n    const availableFiles = new Set<string>(OctreeInfo.files.split(","))\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const geometry: TgdGeometry | null = await loadGeometry(x, y, z, level, availableFiles)\n            if (!geometry) return null\n\n            return new TgdPainterMesh(context, {\n                geometry,\n                material: new TgdMaterialDiffuse({\n                    color: [Math.random(), Math.random(), Math.random(), 1],\n                    lockLightsToCamera: true,\n                }), // materials[level], // new TgdMaterialFaceOrientation()\n            })\n        },\n        subdivisions: 4,\n        surfaceThreshold: 1,\n    })\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod],\n            depth: webglPresetDepth.less,\n            // cull: webglPresetCull.back,\n        }),\n    )\n    context.paint()\n    return (settings: { zoom: number }) => {\n        const { camera } = context\n        camera.transfo.distance = tgdCalcMapRange(settings.zoom, 1, MAX_ZOOM, radius * 3, (radius * 3) / MAX_ZOOM)\n        camera.near = Math.max(1, camera.transfo.distance - radius)\n        camera.far = camera.transfo.distance + radius\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            disableDefaultDoubleTap\n            onReady={init}\n            gizmo\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                speedZoom: 0,\n            }}\n            settings={{\n                zoom: {\n                    label: "Zoom",\n                    value: 1,\n                    min: 1,\n                    max: MAX_ZOOM,\n                },\n            }}\n        />\n    )\n}\n\nfunction toBin(value: number, level: number): string {\n    return value.toString(2).padStart(level, "0")\n}\n\nasync function loadGeometry(\n    x: number,\n    y: number,\n    z: number,\n    level: number,\n    availableFiles: Set<string>,\n): Promise<TgdGeometry | null> {\n    const id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`\n    if (!availableFiles.has(id)) return null\n\n    const url = level === 0 ? "./assets/neuron/02/0.bin" : `./assets/neuron/02/${id}.bin`\n    console.log("Loading LOD block:", url)\n    const buffer = await tgdLoadArrayBuffer(url)\n    if (!buffer) throw new Error(`Unable to load ${url}!`)\n\n    console.debug(new Float32Array(buffer))\n    const data = buffer.slice(4)\n    const dataset = new TgdDataset(\n        {\n            POSITION: "vec3",\n            NORMAL: "vec3",\n        },\n        {\n            data,\n        },\n    )\n    const geometry = new TgdGeometry({\n        dataset,\n        attPosition: "POSITION",\n        attNormal: "NORMAL",\n    })\n    geometry.debug()\n    return geometry\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron-test/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        lineNumber: 107,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uLXRlc3RfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbS0zNWNhYTkuNjM2OWYwZDBmMjQwNTNmYS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uLXRlc3QvXy9tYWluLmRlbW8vaW5mby50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi10ZXN0L18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24tdGVzdC9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDYsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KE9jdHJlZUluZm8uYmJveC5taW4sIE9jdHJlZUluZm8uYmJveC5tYXgpLm1ha2VDb250YWluaW5nQ3ViZSgpXFxuICAgIGJib3guZGVidWcoKVxcbiAgICBjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXFxuICAgIGNvbnN0IHZlY0RpbSA9IG5ldyBUZ2RWZWMzKHZlY01heCkuc3VidHJhY3QodmVjTWluKVxcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG4gICAgY2FtZXJhLm5lYXIgPSAxXFxuICAgIGNhbWVyYS5mYXIgPSByYWRpdXMgKiAxXFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKVxcbiAgICBjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFwiLFwiKSlcXG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcbiAgICAgICAgYmJveCxcXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5OiBUZ2RHZW9tZXRyeSB8IG51bGwgPSBhd2FpdCBsb2FkR2VvbWV0cnkoeCwgeSwgeiwgbGV2ZWwsIGF2YWlsYWJsZUZpbGVzKVxcbiAgICAgICAgICAgIGlmICghZ2VvbWV0cnkpIHJldHVybiBudWxsXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIDFdLFxcbiAgICAgICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgICAgICB9KSwgLy8gbWF0ZXJpYWxzW2xldmVsXSwgLy8gbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKClcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHN1YmRpdmlzaW9uczogNCxcXG4gICAgICAgIHN1cmZhY2VUaHJlc2hvbGQ6IDEsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZF0sXFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICByZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICAgICAgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2Uoc2V0dGluZ3Muem9vbSwgMSwgTUFYX1pPT00sIHJhZGl1cyAqIDMsIChyYWRpdXMgKiAzKSAvIE1BWF9aT09NKVxcbiAgICAgICAgY2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG4gICAgICAgIGNhbWVyYS5mYXIgPSBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSArIHJhZGl1c1xcbiAgICB9XFxufScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCcvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcXG4vLyBpbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWS53ZWJwXCJcXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWS53ZWJwXCJcXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICBUZ2RCb3VuZGluZ0JveCxcXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2REYXRhc2V0LFxcbiAgICBUZ2RHZW9tZXRyeSxcXG4gICAgdGdkTG9hZEFycmF5QnVmZmVyLFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxPRCxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVmVjMyxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IHsgT2N0cmVlSW5mbyB9IGZyb20gXCIuL2luZm9cIlxcblxcbmNvbnN0IE1BWF9aT09NID0gMTJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuICAgICAgICBzdGVwczogNixcXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG4gICAgICAgIChsZXZlbCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXFxuICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuICAgIGNvbnN0IGJib3ggPSBuZXcgVGdkQm91bmRpbmdCb3goT2N0cmVlSW5mby5iYm94Lm1pbiwgT2N0cmVlSW5mby5iYm94Lm1heCkubWFrZUNvbnRhaW5pbmdDdWJlKClcXG4gICAgYmJveC5kZWJ1ZygpXFxuICAgIGNvbnN0IHZlY01pbiA9IG5ldyBUZ2RWZWMzKGJib3gubWluKVxcbiAgICBjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXFxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHZlY0RpbS54LCB2ZWNEaW0ueSwgdmVjRGltLnopXFxuICAgIGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxcbiAgICBjYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxcbiAgICBjYW1lcmEubmVhciA9IDFcXG4gICAgY2FtZXJhLmZhciA9IHJhZGl1cyAqIDFcXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQocmFkaXVzLCByYWRpdXMpXFxuICAgIGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnk6IFRnZEdlb21ldHJ5IHwgbnVsbCA9IGF3YWl0IGxvYWRHZW9tZXRyeSh4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXFxuICAgICAgICAgICAgaWYgKCFnZW9tZXRyeSkgcmV0dXJuIG51bGxcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgMV0sXFxuICAgICAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgICAgIH0pLCAvLyBtYXRlcmlhbHNbbGV2ZWxdLCAvLyBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA0LFxcbiAgICAgICAgc3VyZmFjZVRocmVzaG9sZDogMSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIC8vIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShzZXR0aW5ncy56b29tLCAxLCBNQVhfWk9PTSwgcmFkaXVzICogMywgKHJhZGl1cyAqIDMpIC8gTUFYX1pPT00pXFxuICAgICAgICBjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKVxcbiAgICAgICAgY2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICB6b29tOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJab29tXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogTUFYX1pPT00sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XFxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXFxufVxcblxcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZW9tZXRyeShcXG4gICAgeDogbnVtYmVyLFxcbiAgICB5OiBudW1iZXIsXFxuICAgIHo6IG51bWJlcixcXG4gICAgbGV2ZWw6IG51bWJlcixcXG4gICAgYXZhaWxhYmxlRmlsZXM6IFNldDxzdHJpbmc+LFxcbik6IFByb21pc2U8VGdkR2VvbWV0cnkgfCBudWxsPiB7XFxuICAgIGNvbnN0IGlkID0gYCR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfWBcXG4gICAgaWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxcblxcbiAgICBjb25zdCB1cmwgPSBsZXZlbCA9PT0gMCA/IFwiLi9hc3NldHMvbmV1cm9uLzAyLzAuYmluXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAyLyR7aWR9LmJpbmBcXG4gICAgY29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKVxcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB0Z2RMb2FkQXJyYXlCdWZmZXIodXJsKVxcbiAgICBpZiAoIWJ1ZmZlcikgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCAke3VybH0hYClcXG5cXG4gICAgY29uc29sZS5kZWJ1ZyhuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcikpXFxuICAgIGNvbnN0IGRhdGEgPSBidWZmZXIuc2xpY2UoNClcXG4gICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxcbiAgICAgICAge1xcbiAgICAgICAgICAgIFBPU0lUSU9OOiBcInZlYzNcIixcXG4gICAgICAgICAgICBOT1JNQUw6IFwidmVjM1wiLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgICBkYXRhLFxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeSh7XFxuICAgICAgICBkYXRhc2V0LFxcbiAgICAgICAgYXR0UG9zaXRpb246IFwiUE9TSVRJT05cIixcXG4gICAgICAgIGF0dE5vcm1hbDogXCJOT1JNQUxcIixcXG4gICAgfSlcXG4gICAgZ2VvbWV0cnkuZGVidWcoKVxcbiAgICByZXR1cm4gZ2VvbWV0cnlcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgdHlwZSB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgY29uc3QgT2N0cmVlSW5mbzoge1xuXHRiYm94OiB7XG5cdFx0bWluOiBBcnJheU51bWJlcjM7XG5cdFx0bWF4OiBBcnJheU51bWJlcjM7XG5cdH07XG5cdGZpbGVzOiBzdHJpbmc7XG59ID0ge1xuXHRiYm94OiB7XG5cdFx0bWluOiBbNDI4LjAxNjA2MjUsIDkzOC45Njc4NzUsIDg0Mi42NDAwNjI1XSxcblx0XHRtYXg6IFs1NzAuNDMyLCAxMDUwLjU1MjEyNSwgOTMwLjY0MDEyNV0sXG5cdH0sXG5cdGZpbGVzOlxuXHRcdFwiMDAwMDAwMTAxLDAwMDExMDEwMSwxMDAwMTAwMTEsMDAwMDAwMTAwLDAwMDExMSwwMTEwMTAwMTEsMDExMDExLDEwMDAxMDAxMCwxMTEwMTAwMDEsMDExMDEwLDExMDEwMDEwMCwxMDExMDAxMDAsMTEwMTAxLDExMDAxMDAwMSwwLDAxMSwxMTEwMTAsMDAwMDAxMTAwLDAxMDAxMDAxMSwwMTAxMDAxMDEsMDAxMTEwMTAxLDAxMDEwMDExMCwwMDEwMTAxMTAsMTAwMTAxLDAxMDEwMTExMCwxMDAxMDAxMDAsMDAxMTAwMTAxLDAwMTEwMTEwMSwwMTEwMTExMDAsMDAxMDEwMTAxLDExMDAxMDAxMCwxMTAxMDAsMDAxMTEwLDEwMTAxMDAxMCwxMTEwMTAwMTAsMTEwMDExMDExLDAxMDAxMTEwMCwwMDAwMTExMDEsMTAxMDEwLDAxMDEwMSwwMDEwMDExMDEsMDAxMDEwLDExMTAwMSwxMTAxMDAwMTEsMDAxLDAxMDAxMTEwMSwwMTExMDAxMDAsMDEwMDExMDExLDAwMTAxMTExMCwwMTAwMTAxMDAsMDEwMTEwLDAwMDAxMTExMCwwMTEwMTExMDEsMTExLDAwMDExMCwwMDAwMTAsMDAwMTExMTAxLDExMCwwMDAwMDExMDEsMDAxMDExMTAwLDEwMCwwMDEwMTExMDEsMDAwLDEwMTAxMDAxMVwiLFxufTtcbiIsIi8vIGltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdYLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1kud2VicFwiXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWi53ZWJwXCJcbi8vIGltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NYLndlYnBcIlxuLy8gaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1kud2VicFwiXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWi53ZWJwXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdFRnZEJvdW5kaW5nQm94LFxuXHR0Z2RDYWxjTWFwUmFuZ2UsXG5cdHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZEdlb21ldHJ5LFxuXHR0Z2RMb2FkQXJyYXlCdWZmZXIsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTE9ELFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RWZWMzLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFwiLi9pbmZvXCI7XG5cbmNvbnN0IE1BWF9aT09NID0gMTI7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xuXHRcdHN0ZXBzOiA2LFxuXHR9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KTtcblx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcblx0XHQobGV2ZWwpID0+XG5cdFx0XHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXG5cdFx0XHRcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcblx0XHRcdH0pLFxuXHQpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pO1xuXHRjb25zdCBiYm94ID0gbmV3IFRnZEJvdW5kaW5nQm94KFxuXHRcdE9jdHJlZUluZm8uYmJveC5taW4sXG5cdFx0T2N0cmVlSW5mby5iYm94Lm1heCxcblx0KS5tYWtlQ29udGFpbmluZ0N1YmUoKTtcblx0YmJveC5kZWJ1ZygpO1xuXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbik7XG5cdGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KTtcblx0Y29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pO1xuXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KTtcblx0Y29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpO1xuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0Y2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXI7XG5cdGNhbWVyYS5uZWFyID0gMTtcblx0Y2FtZXJhLmZhciA9IHJhZGl1cyAqIDE7XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KHJhZGl1cywgcmFkaXVzKTtcblx0Y29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcIixcIikpO1xuXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG5cdFx0YmJveCxcblx0XHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGdlb21ldHJ5OiBUZ2RHZW9tZXRyeSB8IG51bGwgPSBhd2FpdCBsb2FkR2VvbWV0cnkoXG5cdFx0XHRcdHgsXG5cdFx0XHRcdHksXG5cdFx0XHRcdHosXG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRhdmFpbGFibGVGaWxlcyxcblx0XHRcdCk7XG5cdFx0XHRpZiAoIWdlb21ldHJ5KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0XHRcdGdlb21ldHJ5LFxuXHRcdFx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRcdFx0Y29sb3I6IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxXSxcblx0XHRcdFx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0XHRcdH0pLCAvLyBtYXRlcmlhbHNbbGV2ZWxdLCAvLyBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRzdWJkaXZpc2lvbnM6IDQsXG5cdFx0c3VyZmFjZVRocmVzaG9sZDogMSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0Y2hpbGRyZW46IFtsb2RdLFxuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdC8vIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdHJldHVybiAoc2V0dGluZ3M6IHsgem9vbTogbnVtYmVyIH0pID0+IHtcblx0XHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0XHRjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShcblx0XHRcdHNldHRpbmdzLnpvb20sXG5cdFx0XHQxLFxuXHRcdFx0TUFYX1pPT00sXG5cdFx0XHRyYWRpdXMgKiAzLFxuXHRcdFx0KHJhZGl1cyAqIDMpIC8gTUFYX1pPT00sXG5cdFx0KTtcblx0XHRjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKTtcblx0XHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXM7XG5cdH07XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0Z2l6bW9cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRpbmVydGlhWm9vbTogMTAwMCxcblx0XHRcdFx0c3BlZWRab29tOiAwLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHpvb206IHtcblx0XHRcdFx0XHRsYWJlbDogXCJab29tXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHRcdFx0bWluOiAxLFxuXHRcdFx0XHRcdG1heDogTUFYX1pPT00sXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuXHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFwiMFwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdlb21ldHJ5KFxuXHR4OiBudW1iZXIsXG5cdHk6IG51bWJlcixcblx0ejogbnVtYmVyLFxuXHRsZXZlbDogbnVtYmVyLFxuXHRhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXG4pOiBQcm9taXNlPFRnZEdlb21ldHJ5IHwgbnVsbD4ge1xuXHRjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gO1xuXHRpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsO1xuXG5cdGNvbnN0IHVybCA9XG5cdFx0bGV2ZWwgPT09IDAgPyBcIi4vYXNzZXRzL25ldXJvbi8wMi8wLmJpblwiIDogYC4vYXNzZXRzL25ldXJvbi8wMi8ke2lkfS5iaW5gO1xuXHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpO1xuXHRjb25zdCBidWZmZXIgPSBhd2FpdCB0Z2RMb2FkQXJyYXlCdWZmZXIodXJsKTtcblx0aWYgKCFidWZmZXIpIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgJHt1cmx9IWApO1xuXG5cdGNvbnNvbGUuZGVidWcobmV3IEZsb2F0MzJBcnJheShidWZmZXIpKTtcblx0Y29uc3QgZGF0YSA9IGJ1ZmZlci5zbGljZSg0KTtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxuXHRcdHtcblx0XHRcdFBPU0lUSU9OOiBcInZlYzNcIixcblx0XHRcdE5PUk1BTDogXCJ2ZWMzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRkYXRhLFxuXHRcdH0sXG5cdCk7XG5cdGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5KHtcblx0XHRkYXRhc2V0LFxuXHRcdGF0dFBvc2l0aW9uOiBcIlBPU0lUSU9OXCIsXG5cdFx0YXR0Tm9ybWFsOiBcIk5PUk1BTFwiLFxuXHR9KTtcblx0Z2VvbWV0cnkuZGVidWcoKTtcblx0cmV0dXJuIGdlb21ldHJ5O1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJPY3RyZWVJbmZvIiwiVmlldyIsIlRnZEJvdW5kaW5nQm94IiwidGdkQ2FsY01hcFJhbmdlIiwidGdkQ29sb3JNYWtlSHVlV2hlZWwiLCJUZ2REYXRhc2V0IiwiVGdkR2VvbWV0cnkiLCJ0Z2RMb2FkQXJyYXlCdWZmZXIiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTE9EIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RWZWMzIiwid2ViZ2xQcmVzZXREZXB0aCIsIk1BWF9aT09NIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJDT0xPUlMiLCJjb2xvciIsIm1hdGVyaWFscyIsImxldmVsIiwiY2xlYXIiLCJiYm94IiwidmVjTWluIiwidmVjTWF4IiwidmVjRGltIiwicmFkaXVzIiwiTWF0aCIsImNlbnRlciIsImNhbWVyYSIsImF2YWlsYWJsZUZpbGVzIiwiU2V0IiwibG9kIiwiZmFjdG9yeSIsIngiLCJ5IiwieiIsImdlb21ldHJ5IiwibG9hZEdlb21ldHJ5Iiwic2V0dGluZ3MiLCJ0b0JpbiIsInZhbHVlIiwiaWQiLCJ1cmwiLCJidWZmZXIiLCJkYXRhIiwiZGF0YXNldCIsImNvbnNvbGUiLCJFcnJvciIsIkZsb2F0MzJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUN2QjtBQUUvQixJQUFNSSxRQUFRO0lBQ2IsYUFDQztBQUNGO0FBQ0EsSUFBTUMsT0FDTDtBQUVjLFNBQVNDO0lBQ3ZCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFDQzs7MEJBQ0Msa0RBQUM7Z0JBQUksV0FBVTswQkFDZCxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUVOLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNkLGtEQUFDO2tDQUNBLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ3JEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR2hDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7Ozs7Ozs7OztBQzlCTyxJQUFNTyxhQU1UO0lBQ0gsTUFBTTtRQUNMLEtBQUs7WUFBQztZQUFhO1lBQVk7U0FBWTtRQUMzQyxLQUFLO1lBQUM7WUFBUztZQUFhO1NBQVc7SUFDeEM7SUFDQSxPQUNDO0FBQ0YsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZGLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ007QUFpQmxDO0FBQ1k7QUFFcEMsSUFBTWUsV0FBVztBQUVqQixTQUFTO0FBQ1QsU0FBU0MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCxJQUFNQyxTQUF5QmYsd0RBQW9CQSxDQUFDO1FBQ25ELE9BQU87SUFDUixHQUFHLEdBQUcsQ0FBQyxTQUFDZ0I7ZUFBVTtZQUFDQSxNQUFNLENBQUM7WUFBRUEsTUFBTSxDQUFDO1lBQUVBLE1BQU0sQ0FBQztZQUFFO1NBQUU7O0lBQ2hELElBQU1DLFlBQVk7UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7S0FBRSxDQUFDLEdBQUcsQ0FDdkMsU0FBQ0M7ZUFDQSxJQUFJZCxrREFBa0JBLENBQUM7WUFDdEIsT0FBT1csTUFBTSxDQUFDRyxNQUFNO1lBQ3BCLG9CQUFvQjtRQUNyQjs7SUFFRixJQUFNQyxRQUFRLElBQUlkLCtDQUFlQSxDQUFDUSxTQUFTO1FBQUUsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7SUFBQztJQUN2RSxJQUFNTyxPQUFPLElBQUl0Qiw4Q0FBY0EsQ0FDOUJGLDBDQUFtQixFQUNuQkEsMENBQW1CLEVBQ2xCLGtCQUFrQjtJQUNwQndCLEtBQUssS0FBSztJQUNWLElBQU1DLFNBQVMsSUFBSVosdUNBQU9BLENBQUNXLEtBQUssR0FBRztJQUNuQyxJQUFNRSxTQUFTLElBQUliLHVDQUFPQSxDQUFDVyxLQUFLLEdBQUc7SUFDbkMsSUFBTUcsU0FBUyxJQUFJZCx1Q0FBT0EsQ0FBQ2EsUUFBUSxRQUFRLENBQUNEO0lBQzVDLElBQU1HLFNBQVNDLEtBQUssR0FBRyxDQUFDRixPQUFPLENBQUMsRUFBRUEsT0FBTyxDQUFDLEVBQUVBLE9BQU8sQ0FBQztJQUNwRCxJQUFNRyxTQUFTLElBQUlqQix1Q0FBT0EsQ0FBQ2EsUUFBUSxHQUFHLENBQUNELFFBQVEsS0FBSyxDQUFDO0lBQ3JELElBQVFNLFNBQVdkLFFBQVhjO0lBQ1JBLE9BQU8sT0FBTyxDQUFDLFFBQVEsR0FBR0Q7SUFDMUJDLE9BQU8sSUFBSSxHQUFHO0lBQ2RBLE9BQU8sR0FBRyxHQUFHSCxTQUFTO0lBQ3RCRyxPQUFPLGdCQUFnQixDQUFDSCxRQUFRQTtJQUNoQyxJQUFNSSxpQkFBaUIsSUFBSUMsSUFBWWpDLDZDQUFzQixDQUFDO0lBQzlELElBQU1rQyxNQUFNLElBQUl4Qiw2Q0FBYUEsQ0FBQ08sU0FBUztRQUN0Q08sTUFBQUE7UUFDTVcsU0FBTixTQUFNQSxRQUFRQyxDQUFTLEVBQUVDLENBQVMsRUFBRUMsQ0FBUyxFQUFFaEIsS0FBYTs7b0JBQ3JEaUI7Ozs7NEJBQStCOztnQ0FBTUMsYUFDMUNKLEdBQ0FDLEdBQ0FDLEdBQ0FoQixPQUNBVTs7OzRCQUxLTyxXQUErQjs0QkFPckMsSUFBSSxDQUFDQSxVQUFVOztnQ0FBTzs7NEJBRXRCOztnQ0FBTyxJQUFJNUIsOENBQWNBLENBQUNNLFNBQVM7b0NBQ2xDc0IsVUFBQUE7b0NBQ0EsVUFBVSxJQUFJL0Isa0RBQWtCQSxDQUFDO3dDQUNoQyxLQUFLOzRDQUFHcUIsS0FBSyxNQUFNOzRDQUFJQSxLQUFLLE1BQU07NENBQUlBLEtBQUssTUFBTTs0Q0FBSTs7d0NBQ3JELG9CQUFvQjtvQ0FDckI7Z0NBQ0Q7Ozs7WUFDRDs7UUFDQSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ25CO0lBQ0FaLFFBQVEsR0FBRyxDQUNWTSxPQUNBLElBQUlYLCtDQUFlQSxDQUFDSyxTQUFTO1FBQzVCLFVBQVU7WUFBQ2lCO1NBQUk7UUFDZixPQUFPcEIscURBQXFCO0lBRTdCO0lBRURHLFFBQVEsS0FBSztJQUNiLE9BQU8sU0FBQ3dCO1FBQ1AsSUFBUVYsU0FBV2QsUUFBWGM7UUFDUkEsT0FBTyxPQUFPLENBQUMsUUFBUSxHQUFHNUIsbURBQWVBLENBQ3hDc0MsU0FBUyxJQUFJLEVBQ2IsR0FDQTFCLFVBQ0FhLFNBQVMsR0FDUkEsU0FBUyxJQUFLYjtRQUVoQmdCLE9BQU8sSUFBSSxHQUFHRixLQUFLLEdBQUcsQ0FBQyxHQUFHRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEdBQUdIO1FBQ3BERyxPQUFPLEdBQUcsR0FBR0EsT0FBTyxPQUFPLENBQUMsUUFBUSxHQUFHSDtJQUN4QztBQUNEO0FBQ0EsT0FBTztBQUVRLFNBQVNwQztJQUN2QixxQkFDQyxrREFBQ1MsZ0RBQUlBO1FBQ0osdUJBQXVCO1FBQ3ZCLFNBQVNlO1FBQ1QsS0FBSztRQUNMLFlBQVk7WUFDWCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFdBQVc7UUFDWjtRQUNBLFVBQVU7WUFDVCxNQUFNO2dCQUNMLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxLQUFLO2dCQUNMLEtBQUtEO1lBQ047UUFDRDs7Ozs7O0FBR0g7QUFFQSxTQUFTMkIsTUFBTUMsS0FBYSxFQUFFckIsS0FBYTtJQUMxQyxPQUFPcUIsTUFBTSxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUNyQixPQUFPO0FBQzFDO0FBRUEsU0FBZWtCLGFBQ2RKLENBQVMsRUFDVEMsQ0FBUyxFQUNUQyxDQUFTLEVBQ1RoQixLQUFhLEVBQ2JVLGNBQTJCOztZQUVyQlksSUFHQUMsS0FHQUMsUUFJQUMsTUFDQUMsU0FTQVQ7Ozs7b0JBcEJBSyxLQUFNLEdBQW9CRixPQUFsQkEsTUFBTU4sR0FBR2QsUUFBMkJvQixPQUFsQkEsTUFBTUwsR0FBR2YsUUFBeUIsT0FBaEJvQixNQUFNSixHQUFHaEI7b0JBQzNELElBQUksQ0FBQ1UsZUFBZSxHQUFHLENBQUNZLEtBQUs7O3dCQUFPOztvQkFFOUJDLE1BQ0x2QixVQUFVLElBQUksNkJBQThCLHNCQUF3QixPQUFIc0IsSUFBRztvQkFDckVLLFFBQVEsR0FBRyxDQUFDLHNCQUFzQko7b0JBQ25COzt3QkFBTXRDLHNEQUFrQkEsQ0FBQ3NDOzs7b0JBQWxDQyxTQUFTO29CQUNmLElBQUksQ0FBQ0EsUUFBUSxNQUFNLElBQUlJLE1BQU8sa0JBQXFCLE9BQUpMLEtBQUk7b0JBRW5ESSxRQUFRLEtBQUssQ0FBQyxJQUFJRSxhQUFhTDtvQkFDekJDLE9BQU9ELE9BQU8sS0FBSyxDQUFDO29CQUNwQkUsVUFBVSxJQUFJM0MsMENBQVVBLENBQzdCO3dCQUNDLFVBQVU7d0JBQ1YsUUFBUTtvQkFDVCxHQUNBO3dCQUNDMEMsTUFBQUE7b0JBQ0Q7b0JBRUtSLFdBQVcsSUFBSWpDLDJDQUFXQSxDQUFDO3dCQUNoQzBDLFNBQUFBO3dCQUNBLGFBQWE7d0JBQ2IsV0FBVztvQkFDWjtvQkFDQVQsU0FBUyxLQUFLO29CQUNkOzt3QkFBT0E7Ozs7SUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLaUI7Ozs7Ozs7Ozs7Ozs7O2tDQUVkOzs7Ozs7b0JBQStDO2lCQUFBOzs7Ozs7OzswQkFFL0M7Ozs7Ozs7OzBCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==