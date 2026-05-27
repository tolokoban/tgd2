"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_neuron_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-d491f4"], {
35127(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(34537);
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
    "Detail #1": 'function init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t)\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst { bbox } = OctreeInfo\n\tconst vecMin = new TgdVec3(bbox.min)\n\tconst vecMax = new TgdVec3(bbox.max)\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin)\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n\tcontext.camera.transfo.position = center\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3\n\tcontext.camera.near = 1\n\tcontext.camera.far = vecDim.z * 6\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(","))\n\tcontext.camera.debug()\n\tconsole.log("🐞 [main.demo@55] OctreeInfo =", OctreeInfo) // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t)\n\t\t\tif (!asset) return null\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t})\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t)\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius)\n\t\tcamera.far = camera.transfo.distance + radius\n\t\tconsole.log("🐞 [main.demo@126] camera =", camera.near, camera.far) // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t}\n}'
};
var FULL = '// import NegX from "@/assets/cubemap/sky/negX.webp"\n// import NegY from "@/assets/cubemap/sky/negY.webp"\n// import NegZ from "@/assets/cubemap/sky/negZ.webp"\n// import PosX from "@/assets/cubemap/sky/posX.webp"\n// import PosY from "@/assets/cubemap/sky/posY.webp"\n// import PosZ from "@/assets/cubemap/sky/posZ.webp"\n\nimport {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\ttype TgdDataGlb,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterLOD,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdVec3,\n\ttgdCalcMapRange,\n\ttgdColorMakeHueWheel,\n\ttgdLoadGlb,\n\twebglPresetCull,\n\twebglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport { OctreeInfo } from "./info"\n\nconst MAX_ZOOM = 15\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t)\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst { bbox } = OctreeInfo\n\tconst vecMin = new TgdVec3(bbox.min)\n\tconst vecMax = new TgdVec3(bbox.max)\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin)\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z)\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5)\n\tcontext.camera.transfo.position = center\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3\n\tcontext.camera.near = 1\n\tcontext.camera.far = vecDim.z * 6\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(","))\n\tcontext.camera.debug()\n\tconsole.log("🐞 [main.demo@55] OctreeInfo =", OctreeInfo) // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t)\n\t\t\tif (!asset) return null\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t})\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t)\n\tcontext.paint()\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t)\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius)\n\t\tcamera.far = camera.transfo.distance + radius\n\t\tconsole.log("🐞 [main.demo@126] camera =", camera.near, camera.far) // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t}\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tdisableDefaultDoubleTap\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\tinertiaZoom: 1000,\n\t\t\t\tspeedZoom: 0,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tzoom: {\n\t\t\t\t\tlabel: "Zoom",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: MAX_ZOOM,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t)\n}\n\nfunction toBin(value: number, level: number): string {\n\treturn value.toString(2).padStart(level, "0")\n}\n\nasync function loadGLB(\n\tx: number,\n\ty: number,\n\tz: number,\n\tlevel: number,\n\tavailableFiles: Set<string>,\n): Promise<TgdDataGlb | null> {\n\tconst id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`\n\tif (!availableFiles.has(id)) return null\n\n\tconst url =\n\t\tlevel === 0\n\t\t\t? "./assets/neuron/01/Octree.glb"\n\t\t\t: `./assets/neuron/01/Octree${id}.glb`\n\tconsole.log("Loading LOD block:", url)\n\tconst asset = await tgdLoadGlb(url)\n\treturn asset\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
87445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OctreeInfo: () => (OctreeInfo)
});
var OctreeInfo = {
    bbox: {
        min: [
            -338015.09765625,
            -139157.734375,
            -276052.28125
        ],
        max: [
            159796.88671875,
            358654.25,
            221759.703125
        ]
    },
    files: "100000111000,100010011,100010111011,010,101000101011,100100001010,011111101000,100111001010,101001101000,101011001001,100100100011,010000100,101100111000,101100100111,101,101100101001,101000101010,101000100110,110000100111,100100100110,101010011001,101010011,011100101000,101101111000,101100011010,101100101000,110001000111,011000011000,011,100001001001,101000111000,100100001011,011100001001,110000100,100000001011,110000011000,011111001100,011010,101100101010,010111001110,100101111001,011011001101,100001011010,010111101000,101011011,100001,101001000,100101001100,100011001001,100101001010,101100011001,101000100111,100101011000,011111011000,101100110101,100000110110,101110101001,101000110111,110001100,010000011,110010,100111001000,101001001001,100101001011,100101001000,011100101010,101001101010,011100101001,010000101,011011001110,110000110111,100100010111,011101101,100000010110,101000011011,101001101001,100101011100,101000100100,011000011010,100100100101,101101011001,110010100,100000,011000011,100100010101,101001011001,100101000111,110001001000,000,100100011010,110110,101101001010,101110001000,100000010111,010100001001,100111,101101110111,100110111010,100100100111,010100010110,011000001011,101101011010,101100111010,110101,101101101001,110000110101,101010101,110001010,011000010111,010011110111,010111100111,101000111010,101001001000,101000000,110000111000,110000111001,110001101000,011100011010,101001010111,101000101001,011000100,100100011001,011101,011001100,110000101010,101100001010,101011001000,101001001011,100101011011,110100100,101110011000,110001001010,100110100,101011100,100100101001,100110,010010,101100110111,100001010,111,100001011,011110101,100010,100000000110,100101101001,100100000111,110000100101,100010111010,101101100,100101010111,101000100001,110001011,101001100111,101110,101001011000,011000001010,110001100111,101000100101,010111100,110001001001,110001111000,111010,110000101000,100011101,110001101001,101000100010,010100010111,101001101,100101010110,100101101,110101001000,011000101000,011110111011,100001101,011011001100,100101101010,101010011000,100000011100,101001001010,100010010,100100010100,011011101000,101011101,101000010001,101100100,100000101001,101010100,100001100,010111011,100010110,101010110,100000011011,010011100111,011111001011,101101100111,110001010110,011001101,100100111000,001011110111,100001011001,101101000111,101101010111,100010100,101001011,110001010111,100101011001,101100110110,101000100,101010,110000100110,100010101,101001110111,101101001001,110011100,100001010111,101001010,100101101000,101101011000,110100110111,010110111,100000011,011110100,001111110111,100100110111,101000100011,100100011000,101001100,101001000111,100000111010,100101001001,110101001001,100100101000,110101000111,100000010,011100001010,100011011000,100001001000,101101010110,100001001,101111001001,110101011001,100101011010,100011,011110110,100001000111,100000100,101000110110,010001,100100010110,110000110110,100000110,101100010001,100011011001,101100100110,011111,100101010101,101110001001,100,101001001100,110010011,100000101,001101,101110100,100101,011000011001,101010101001,100000111001,011110111,100100100100,101110011001,011111100,011000101,101000111001,011110,110010101,101001001,101101111001,101001111000,110011011,001,100100011011,110001011001,101100111001,100111001001,110010001000,100110101,110001,101101101000,100100111001,100000110111,001111011,110001101,101000101,100011100,101101001000,010100001011,101010001001,011000001001,110001000110,110001011010,101001111001,110101011000,100100111010,101010111001,101010001000,101101000110,011100011001"
};


},
34537(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _info__rspack_import_3 = __webpack_require__(87445);
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



var MAX_ZOOM = 15;
// #begin
function init(context, assets) {
    var COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
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
        return new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: COLORS[level],
            lockLightsToCamera: true
        });
    });
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.3,
            0.3,
            1
        ]
    });
    var bbox = _info__rspack_import_3.OctreeInfo.bbox;
    var vecMin = new _tolokoban_tgd__rspack_import_1.TgdVec3(bbox.min);
    var vecMax = new _tolokoban_tgd__rspack_import_1.TgdVec3(bbox.max);
    var vecDim = new _tolokoban_tgd__rspack_import_1.TgdVec3(vecMax).subtract(vecMin);
    var radius = Math.max(vecDim.x, vecDim.y, vecDim.z);
    var center = new _tolokoban_tgd__rspack_import_1.TgdVec3(vecMax).add(vecMin).scale(0.5);
    context.camera.transfo.position = center;
    // context.camera.transfo.setPosition(0, 0, 0)
    context.camera.transfo.distance = vecDim.z * 3;
    context.camera.near = 1;
    context.camera.far = vecDim.z * 6;
    var availableFiles = new Set(_info__rspack_import_3.OctreeInfo.files.split(","));
    context.camera.debug();
    console.log("🐞 [main.demo@55] OctreeInfo =", _info__rspack_import_3.OctreeInfo); // @FIXME: Remove this line written on 2026-03-03 at 09:03
    var lod = new _tolokoban_tgd__rspack_import_1.TgdPainterLOD(context, {
        bbox: bbox,
        factory: function factory(x, y, z, level) {
            return _async_to_generator(function() {
                var asset;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                loadGLB(x, y, z, level, availableFiles)
                            ];
                        case 1:
                            asset = _state.sent();
                            if (!asset) return [
                                2,
                                null
                            ];
                            return [
                                2,
                                new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                                    asset: asset,
                                    material: materials[level]
                                })
                            ];
                    }
                });
            })();
        },
        subdivisions: 4,
        surfaceThreshold: 1
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [
            lod
        ],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back
    }));
    context.paint();
    return function(settings) {
        var camera = context.camera;
        camera.transfo.distance = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMapRange)(settings.zoom, 1, MAX_ZOOM, radius * 3, radius * 3 / MAX_ZOOM);
        camera.near = Math.max(1, camera.transfo.distance - radius);
        camera.far = camera.transfo.distance + radius;
        console.log("🐞 [main.demo@126] camera =", camera.near, camera.far); // @FIXME: Remove this line written on 2026-01-20 at 21:43
    };
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/main.demo.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
function loadGLB(x, y, z, level, availableFiles) {
    return _async_to_generator(function() {
        var id, url, asset;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = "".concat(toBin(x, level)).concat(toBin(y, level)).concat(toBin(z, level));
                    if (!availableFiles.has(id)) return [
                        2,
                        null
                    ];
                    url = level === 0 ? "./assets/neuron/01/Octree.glb" : "./assets/neuron/01/Octree".concat(id, ".glb");
                    console.log("Loading LOD block:", url);
                    return [
                        4,
                        (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url)
                    ];
                case 1:
                    asset = _state.sent();
                    return [
                        2,
                        asset
                    ];
            }
        });
    })();
}


},
25708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(35127);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1kNDkxZjQuOGNhNGI1YTk4ZDkzMzU3My5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi9fL21haW4uZGVtby9pbmZvLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24vcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOlxuICAgICAgICAnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDYsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG5cXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChsZXZlbCkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogQ09MT1JTW2xldmVsXSxcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG5cXHRjb25zdCB7IGJib3ggfSA9IE9jdHJlZUluZm9cXG5cXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG5cXHRjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG5cXHRjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG5cXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcblxcdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG5cXHQvLyBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApXFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHZlY0RpbS56ICogM1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gdmVjRGltLnogKiA2XFxuXFx0Y29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcIixcIikpXFxuXFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKVxcblxcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDU1XSBPY3RyZWVJbmZvID1cIiwgT2N0cmVlSW5mbykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXFxuXFx0XFx0XFx0XFx0eCxcXG5cXHRcXHRcXHRcXHR5LFxcblxcdFxcdFxcdFxcdHosXFxuXFx0XFx0XFx0XFx0bGV2ZWwsXFxuXFx0XFx0XFx0XFx0YXZhaWxhYmxlRmlsZXMsXFxuXFx0XFx0XFx0KVxcblxcdFxcdFxcdGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDQsXFxuXFx0XFx0c3VyZmFjZVRocmVzaG9sZDogMSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBbbG9kXSxcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRcXHRjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShcXG5cXHRcXHRcXHRzZXR0aW5ncy56b29tLFxcblxcdFxcdFxcdDEsXFxuXFx0XFx0XFx0TUFYX1pPT00sXFxuXFx0XFx0XFx0cmFkaXVzICogMyxcXG5cXHRcXHRcXHQocmFkaXVzICogMykgLyBNQVhfWk9PTSxcXG5cXHRcXHQpXFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG5cXHRcXHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG5cXHRcXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXFxuXFx0fVxcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJy8vIGltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdYLndlYnBcIlxcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxcbi8vIGltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdaLndlYnBcIlxcbi8vIGltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NYLndlYnBcIlxcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxcbi8vIGltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NaLndlYnBcIlxcblxcbmltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdHR5cGUgVGdkRGF0YUdsYixcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJMT0QsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RWZWMzLFxcblxcdHRnZENhbGNNYXBSYW5nZSxcXG5cXHR0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG5cXHR0Z2RMb2FkR2xiLFxcblxcdHdlYmdsUHJlc2V0Q3VsbCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFwiLi9pbmZvXCJcXG5cXG5jb25zdCBNQVhfWk9PTSA9IDE1XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDYsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG5cXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChsZXZlbCkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogQ09MT1JTW2xldmVsXSxcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0fSksXFxuXFx0KVxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG5cXHRjb25zdCB7IGJib3ggfSA9IE9jdHJlZUluZm9cXG5cXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbilcXG5cXHRjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heClcXG5cXHRjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbilcXG5cXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KVxcblxcdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG5cXHQvLyBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApXFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHZlY0RpbS56ICogM1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxXFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gdmVjRGltLnogKiA2XFxuXFx0Y29uc3QgYXZhaWxhYmxlRmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oT2N0cmVlSW5mby5maWxlcy5zcGxpdChcIixcIikpXFxuXFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKVxcblxcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFpbi5kZW1vQDU1XSBPY3RyZWVJbmZvID1cIiwgT2N0cmVlSW5mbykgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXFxuXFx0XFx0XFx0XFx0eCxcXG5cXHRcXHRcXHRcXHR5LFxcblxcdFxcdFxcdFxcdHosXFxuXFx0XFx0XFx0XFx0bGV2ZWwsXFxuXFx0XFx0XFx0XFx0YXZhaWxhYmxlRmlsZXMsXFxuXFx0XFx0XFx0KVxcblxcdFxcdFxcdGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDQsXFxuXFx0XFx0c3VyZmFjZVRocmVzaG9sZDogMSxcXG5cXHR9KVxcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBbbG9kXSxcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LnBhaW50KClcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRcXHRjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShcXG5cXHRcXHRcXHRzZXR0aW5ncy56b29tLFxcblxcdFxcdFxcdDEsXFxuXFx0XFx0XFx0TUFYX1pPT00sXFxuXFx0XFx0XFx0cmFkaXVzICogMyxcXG5cXHRcXHRcXHQocmFkaXVzICogMykgLyBNQVhfWk9PTSxcXG5cXHRcXHQpXFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cylcXG5cXHRcXHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXNcXG5cXHRcXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXFxuXFx0fVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRjb250cm9sbGVyPXt7XFxuXFx0XFx0XFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdFxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdFxcdFxcdFxcdHNwZWVkWm9vbTogMCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdHNldHRpbmdzPXt7XFxuXFx0XFx0XFx0XFx0em9vbToge1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsOiBcIlpvb21cIixcXG5cXHRcXHRcXHRcXHRcXHR2YWx1ZTogMSxcXG5cXHRcXHRcXHRcXHRcXHRtaW46IDEsXFxuXFx0XFx0XFx0XFx0XFx0bWF4OiBNQVhfWk9PTSxcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdH19XFxuXFx0XFx0Lz5cXG5cXHQpXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcblxcdHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXFxufVxcblxcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoXFxuXFx0eDogbnVtYmVyLFxcblxcdHk6IG51bWJlcixcXG5cXHR6OiBudW1iZXIsXFxuXFx0bGV2ZWw6IG51bWJlcixcXG5cXHRhdmFpbGFibGVGaWxlczogU2V0PHN0cmluZz4sXFxuKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xcblxcdGNvbnN0IGlkID0gYCR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfWBcXG5cXHRpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsXFxuXFxuXFx0Y29uc3QgdXJsID1cXG5cXHRcXHRsZXZlbCA9PT0gMFxcblxcdFxcdFxcdD8gXCIuL2Fzc2V0cy9uZXVyb24vMDEvT2N0cmVlLmdsYlwiXFxuXFx0XFx0XFx0OiBgLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZSR7aWR9LmdsYmBcXG5cXHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXFxuXFx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcXG5cXHRyZXR1cm4gYXNzZXRcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY29uc3QgT2N0cmVlSW5mbzoge1xuICAgIGJib3g6IHtcbiAgICAgICAgbWluOiBBcnJheU51bWJlcjNcbiAgICAgICAgbWF4OiBBcnJheU51bWJlcjNcbiAgICB9XG4gICAgZmlsZXM6IHN0cmluZ1xufSA9IHtcbiAgICBiYm94OiB7XG4gICAgICAgIG1pbjogWy0zMzgwMTUuMDk3NjU2MjUsIC0xMzkxNTcuNzM0Mzc1LCAtMjc2MDUyLjI4MTI1XSxcbiAgICAgICAgbWF4OiBbMTU5Nzk2Ljg4NjcxODc1LCAzNTg2NTQuMjUsIDIyMTc1OS43MDMxMjVdLFxuICAgIH0sXG4gICAgZmlsZXM6IFwiMTAwMDAwMTExMDAwLDEwMDAxMDAxMSwxMDAwMTAxMTEwMTEsMDEwLDEwMTAwMDEwMTAxMSwxMDAxMDAwMDEwMTAsMDExMTExMTAxMDAwLDEwMDExMTAwMTAxMCwxMDEwMDExMDEwMDAsMTAxMDExMDAxMDAxLDEwMDEwMDEwMDAxMSwwMTAwMDAxMDAsMTAxMTAwMTExMDAwLDEwMTEwMDEwMDExMSwxMDEsMTAxMTAwMTAxMDAxLDEwMTAwMDEwMTAxMCwxMDEwMDAxMDAxMTAsMTEwMDAwMTAwMTExLDEwMDEwMDEwMDExMCwxMDEwMTAwMTEwMDEsMTAxMDEwMDExLDAxMTEwMDEwMTAwMCwxMDExMDExMTEwMDAsMTAxMTAwMDExMDEwLDEwMTEwMDEwMTAwMCwxMTAwMDEwMDAxMTEsMDExMDAwMDExMDAwLDAxMSwxMDAwMDEwMDEwMDEsMTAxMDAwMTExMDAwLDEwMDEwMDAwMTAxMSwwMTExMDAwMDEwMDEsMTEwMDAwMTAwLDEwMDAwMDAwMTAxMSwxMTAwMDAwMTEwMDAsMDExMTExMDAxMTAwLDAxMTAxMCwxMDExMDAxMDEwMTAsMDEwMTExMDAxMTEwLDEwMDEwMTExMTAwMSwwMTEwMTEwMDExMDEsMTAwMDAxMDExMDEwLDAxMDExMTEwMTAwMCwxMDEwMTEwMTEsMTAwMDAxLDEwMTAwMTAwMCwxMDAxMDEwMDExMDAsMTAwMDExMDAxMDAxLDEwMDEwMTAwMTAxMCwxMDExMDAwMTEwMDEsMTAxMDAwMTAwMTExLDEwMDEwMTAxMTAwMCwwMTExMTEwMTEwMDAsMTAxMTAwMTEwMTAxLDEwMDAwMDExMDExMCwxMDExMTAxMDEwMDEsMTAxMDAwMTEwMTExLDExMDAwMTEwMCwwMTAwMDAwMTEsMTEwMDEwLDEwMDExMTAwMTAwMCwxMDEwMDEwMDEwMDEsMTAwMTAxMDAxMDExLDEwMDEwMTAwMTAwMCwwMTExMDAxMDEwMTAsMTAxMDAxMTAxMDEwLDAxMTEwMDEwMTAwMSwwMTAwMDAxMDEsMDExMDExMDAxMTEwLDExMDAwMDExMDExMSwxMDAxMDAwMTAxMTEsMDExMTAxMTAxLDEwMDAwMDAxMDExMCwxMDEwMDAwMTEwMTEsMTAxMDAxMTAxMDAxLDEwMDEwMTAxMTEwMCwxMDEwMDAxMDAxMDAsMDExMDAwMDExMDEwLDEwMDEwMDEwMDEwMSwxMDExMDEwMTEwMDEsMTEwMDEwMTAwLDEwMDAwMCwwMTEwMDAwMTEsMTAwMTAwMDEwMTAxLDEwMTAwMTAxMTAwMSwxMDAxMDEwMDAxMTEsMTEwMDAxMDAxMDAwLDAwMCwxMDAxMDAwMTEwMTAsMTEwMTEwLDEwMTEwMTAwMTAxMCwxMDExMTAwMDEwMDAsMTAwMDAwMDEwMTExLDAxMDEwMDAwMTAwMSwxMDAxMTEsMTAxMTAxMTEwMTExLDEwMDExMDExMTAxMCwxMDAxMDAxMDAxMTEsMDEwMTAwMDEwMTEwLDAxMTAwMDAwMTAxMSwxMDExMDEwMTEwMTAsMTAxMTAwMTExMDEwLDExMDEwMSwxMDExMDExMDEwMDEsMTEwMDAwMTEwMTAxLDEwMTAxMDEwMSwxMTAwMDEwMTAsMDExMDAwMDEwMTExLDAxMDAxMTExMDExMSwwMTAxMTExMDAxMTEsMTAxMDAwMTExMDEwLDEwMTAwMTAwMTAwMCwxMDEwMDAwMDAsMTEwMDAwMTExMDAwLDExMDAwMDExMTAwMSwxMTAwMDExMDEwMDAsMDExMTAwMDExMDEwLDEwMTAwMTAxMDExMSwxMDEwMDAxMDEwMDEsMDExMDAwMTAwLDEwMDEwMDAxMTAwMSwwMTExMDEsMDExMDAxMTAwLDExMDAwMDEwMTAxMCwxMDExMDAwMDEwMTAsMTAxMDExMDAxMDAwLDEwMTAwMTAwMTAxMSwxMDAxMDEwMTEwMTEsMTEwMTAwMTAwLDEwMTExMDAxMTAwMCwxMTAwMDEwMDEwMTAsMTAwMTEwMTAwLDEwMTAxMTEwMCwxMDAxMDAxMDEwMDEsMTAwMTEwLDAxMDAxMCwxMDExMDAxMTAxMTEsMTAwMDAxMDEwLDExMSwxMDAwMDEwMTEsMDExMTEwMTAxLDEwMDAxMCwxMDAwMDAwMDAxMTAsMTAwMTAxMTAxMDAxLDEwMDEwMDAwMDExMSwxMTAwMDAxMDAxMDEsMTAwMDEwMTExMDEwLDEwMTEwMTEwMCwxMDAxMDEwMTAxMTEsMTAxMDAwMTAwMDAxLDExMDAwMTAxMSwxMDEwMDExMDAxMTEsMTAxMTEwLDEwMTAwMTAxMTAwMCwwMTEwMDAwMDEwMTAsMTEwMDAxMTAwMTExLDEwMTAwMDEwMDEwMSwwMTAxMTExMDAsMTEwMDAxMDAxMDAxLDExMDAwMTExMTAwMCwxMTEwMTAsMTEwMDAwMTAxMDAwLDEwMDAxMTEwMSwxMTAwMDExMDEwMDEsMTAxMDAwMTAwMDEwLDAxMDEwMDAxMDExMSwxMDEwMDExMDEsMTAwMTAxMDEwMTEwLDEwMDEwMTEwMSwxMTAxMDEwMDEwMDAsMDExMDAwMTAxMDAwLDAxMTExMDExMTAxMSwxMDAwMDExMDEsMDExMDExMDAxMTAwLDEwMDEwMTEwMTAxMCwxMDEwMTAwMTEwMDAsMTAwMDAwMDExMTAwLDEwMTAwMTAwMTAxMCwxMDAwMTAwMTAsMTAwMTAwMDEwMTAwLDAxMTAxMTEwMTAwMCwxMDEwMTExMDEsMTAxMDAwMDEwMDAxLDEwMTEwMDEwMCwxMDAwMDAxMDEwMDEsMTAxMDEwMTAwLDEwMDAwMTEwMCwwMTAxMTEwMTEsMTAwMDEwMTEwLDEwMTAxMDExMCwxMDAwMDAwMTEwMTEsMDEwMDExMTAwMTExLDAxMTExMTAwMTAxMSwxMDExMDExMDAxMTEsMTEwMDAxMDEwMTEwLDAxMTAwMTEwMSwxMDAxMDAxMTEwMDAsMDAxMDExMTEwMTExLDEwMDAwMTAxMTAwMSwxMDExMDEwMDAxMTEsMTAxMTAxMDEwMTExLDEwMDAxMDEwMCwxMDEwMDEwMTEsMTEwMDAxMDEwMTExLDEwMDEwMTAxMTAwMSwxMDExMDAxMTAxMTAsMTAxMDAwMTAwLDEwMTAxMCwxMTAwMDAxMDAxMTAsMTAwMDEwMTAxLDEwMTAwMTExMDExMSwxMDExMDEwMDEwMDEsMTEwMDExMTAwLDEwMDAwMTAxMDExMSwxMDEwMDEwMTAsMTAwMTAxMTAxMDAwLDEwMTEwMTAxMTAwMCwxMTAxMDAxMTAxMTEsMDEwMTEwMTExLDEwMDAwMDAxMSwwMTExMTAxMDAsMDAxMTExMTEwMTExLDEwMDEwMDExMDExMSwxMDEwMDAxMDAwMTEsMTAwMTAwMDExMDAwLDEwMTAwMTEwMCwxMDEwMDEwMDAxMTEsMTAwMDAwMTExMDEwLDEwMDEwMTAwMTAwMSwxMTAxMDEwMDEwMDEsMTAwMTAwMTAxMDAwLDExMDEwMTAwMDExMSwxMDAwMDAwMTAsMDExMTAwMDAxMDEwLDEwMDAxMTAxMTAwMCwxMDAwMDEwMDEwMDAsMTAxMTAxMDEwMTEwLDEwMDAwMTAwMSwxMDExMTEwMDEwMDEsMTEwMTAxMDExMDAxLDEwMDEwMTAxMTAxMCwxMDAwMTEsMDExMTEwMTEwLDEwMDAwMTAwMDExMSwxMDAwMDAxMDAsMTAxMDAwMTEwMTEwLDAxMDAwMSwxMDAxMDAwMTAxMTAsMTEwMDAwMTEwMTEwLDEwMDAwMDExMCwxMDExMDAwMTAwMDEsMTAwMDExMDExMDAxLDEwMTEwMDEwMDExMCwwMTExMTEsMTAwMTAxMDEwMTAxLDEwMTExMDAwMTAwMSwxMDAsMTAxMDAxMDAxMTAwLDExMDAxMDAxMSwxMDAwMDAxMDEsMDAxMTAxLDEwMTExMDEwMCwxMDAxMDEsMDExMDAwMDExMDAxLDEwMTAxMDEwMTAwMSwxMDAwMDAxMTEwMDEsMDExMTEwMTExLDEwMDEwMDEwMDEwMCwxMDExMTAwMTEwMDEsMDExMTExMTAwLDAxMTAwMDEwMSwxMDEwMDAxMTEwMDEsMDExMTEwLDExMDAxMDEwMSwxMDEwMDEwMDEsMTAxMTAxMTExMDAxLDEwMTAwMTExMTAwMCwxMTAwMTEwMTEsMDAxLDEwMDEwMDAxMTAxMSwxMTAwMDEwMTEwMDEsMTAxMTAwMTExMDAxLDEwMDExMTAwMTAwMSwxMTAwMTAwMDEwMDAsMTAwMTEwMTAxLDExMDAwMSwxMDExMDExMDEwMDAsMTAwMTAwMTExMDAxLDEwMDAwMDExMDExMSwwMDExMTEwMTEsMTEwMDAxMTAxLDEwMTAwMDEwMSwxMDAwMTExMDAsMTAxMTAxMDAxMDAwLDAxMDEwMDAwMTAxMSwxMDEwMTAwMDEwMDEsMDExMDAwMDAxMDAxLDExMDAwMTAwMDExMCwxMTAwMDEwMTEwMTAsMTAxMDAxMTExMDAxLDExMDEwMTAxMTAwMCwxMDAxMDAxMTEwMTAsMTAxMDEwMTExMDAxLDEwMTAxMDAwMTAwMCwxMDExMDEwMDAxMTAsMDExMTAwMDExMDAxXCIsXG59XG4iLCIvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1oud2VicFwiXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1oud2VicFwiXG5cbmltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIHR5cGUgVGdkRGF0YUdsYixcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMT0QsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RWZWMzLFxuICAgIHRnZENhbGNNYXBSYW5nZSxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcbiAgICB0Z2RMb2FkR2xiLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFwiLi9pbmZvXCJcblxuY29uc3QgTUFYX1pPT00gPSAxNVxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xuICAgICAgICBzdGVwczogNixcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXG4gICAgICAgIChsZXZlbCkgPT5cbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxuICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXG4gICAgY29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvXG4gICAgY29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pXG4gICAgY29uc3QgdmVjTWF4ID0gbmV3IFRnZFZlYzMoYmJveC5tYXgpXG4gICAgY29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueilcbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLmFkZCh2ZWNNaW4pLnNjYWxlKDAuNSlcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXG4gICAgLy8gY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDNcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMVxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IHZlY0RpbS56ICogNlxuICAgIGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKVxuICAgIGNvbnRleHQuY2FtZXJhLmRlYnVnKClcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0A1NV0gT2N0cmVlSW5mbyA9XCIsIE9jdHJlZUluZm8pIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMDMgYXQgMDk6MDNcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbCwgYXZhaWxhYmxlRmlsZXMpXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDQsXG4gICAgICAgIHN1cmZhY2VUaHJlc2hvbGQ6IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2RdLFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgcmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IHRnZENhbGNNYXBSYW5nZShzZXR0aW5ncy56b29tLCAxLCBNQVhfWk9PTSwgcmFkaXVzICogMywgKHJhZGl1cyAqIDMpIC8gTUFYX1pPT00pXG4gICAgICAgIGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpXG4gICAgICAgIGNhbWVyYS5mYXIgPSBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSArIHJhZGl1c1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXG4gICAgfVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiWm9vbVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IE1BWF9aT09NLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIilcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHo6IG51bWJlcixcbiAgICBsZXZlbDogbnVtYmVyLFxuICAgIGF2YWlsYWJsZUZpbGVzOiBTZXQ8c3RyaW5nPixcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcbiAgICBjb25zdCBpZCA9IGAke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX1gXG4gICAgaWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbFxuXG4gICAgY29uc3QgdXJsID0gbGV2ZWwgPT09IDAgPyBcIi4vYXNzZXRzL25ldXJvbi8wMS9PY3RyZWUuZ2xiXCIgOiBgLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZSR7aWR9LmdsYmBcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcbiAgICByZXR1cm4gYXNzZXRcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiT2N0cmVlSW5mbyIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMT0QiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RWZWMzIiwidGdkQ2FsY01hcFJhbmdlIiwidGdkQ29sb3JNYWtlSHVlV2hlZWwiLCJ0Z2RMb2FkR2xiIiwid2ViZ2xQcmVzZXRDdWxsIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJNQVhfWk9PTSIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiQ09MT1JTIiwiY29sb3IiLCJtYXRlcmlhbHMiLCJsZXZlbCIsImNsZWFyIiwiYmJveCIsInZlY01pbiIsInZlY01heCIsInZlY0RpbSIsInJhZGl1cyIsIk1hdGgiLCJjZW50ZXIiLCJhdmFpbGFibGVGaWxlcyIsIlNldCIsImNvbnNvbGUiLCJsb2QiLCJmYWN0b3J5IiwieCIsInkiLCJ6IiwiYXNzZXQiLCJsb2FkR0xCIiwic2V0dGluZ3MiLCJjYW1lcmEiLCJ0b0JpbiIsInZhbHVlIiwiaWQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUNWLGFBQ0k7QUFDUjtBQUNBLElBQU1DLE9BQ0Y7QUFFVyxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0k7OzBCQUNJLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ1gsZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFFVCxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBSWhFOzs7Ozs7Ozs7QUM5Qk8sSUFBTU8sYUFNVDtJQUNBLE1BQU07UUFDRixLQUFLO1lBQUMsQ0FBQztZQUFpQixDQUFDO1lBQWUsQ0FBQztTQUFhO1FBQ3RELEtBQUs7WUFBQztZQUFpQjtZQUFXO1NBQWM7SUFDcEQ7SUFDQSxPQUFPO0FBQ1gsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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