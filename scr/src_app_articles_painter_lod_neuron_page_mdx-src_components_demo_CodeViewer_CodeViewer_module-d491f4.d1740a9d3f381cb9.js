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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4);\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t);\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });\n\tconst { bbox } = OctreeInfo;\n\tconst vecMin = new TgdVec3(bbox.min);\n\tconst vecMax = new TgdVec3(bbox.max);\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin);\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z);\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5);\n\tcontext.camera.transfo.position = center;\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3;\n\tcontext.camera.near = 1;\n\tcontext.camera.far = vecDim.z * 6;\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(\",\"));\n\tcontext.camera.debug();\n\tconsole.log(\"🐞 [main.demo@55] OctreeInfo =\", OctreeInfo); // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t);\n\t\t\tif (!asset) return null;\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t});\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t);\n\tcontext.paint();\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context;\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t);\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius);\n\t\tcamera.far = camera.transfo.distance + radius;\n\t\tconsole.log(\"🐞 [main.demo@126] camera =\", camera.near, camera.far); // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t};\n}"
};
var FULL = "// import NegX from \"@/assets/cubemap/sky/negX.webp\"\n// import NegY from \"@/assets/cubemap/sky/negY.webp\"\n// import NegZ from \"@/assets/cubemap/sky/negZ.webp\"\n// import PosX from \"@/assets/cubemap/sky/posX.webp\"\n// import PosY from \"@/assets/cubemap/sky/posY.webp\"\n// import PosZ from \"@/assets/cubemap/sky/posZ.webp\"\n\nimport {\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\ttype TgdDataGlb,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterLOD,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdVec3,\n\ttgdCalcMapRange,\n\ttgdColorMakeHueWheel,\n\ttgdLoadGlb,\n\twebglPresetCull,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport { OctreeInfo } from \"./info\";\n\nconst MAX_ZOOM = 15;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 6,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4);\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t}),\n\t);\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });\n\tconst { bbox } = OctreeInfo;\n\tconst vecMin = new TgdVec3(bbox.min);\n\tconst vecMax = new TgdVec3(bbox.max);\n\tconst vecDim = new TgdVec3(vecMax).subtract(vecMin);\n\tconst radius = Math.max(vecDim.x, vecDim.y, vecDim.z);\n\tconst center = new TgdVec3(vecMax).add(vecMin).scale(0.5);\n\tcontext.camera.transfo.position = center;\n\t// context.camera.transfo.setPosition(0, 0, 0)\n\tcontext.camera.transfo.distance = vecDim.z * 3;\n\tcontext.camera.near = 1;\n\tcontext.camera.far = vecDim.z * 6;\n\tconst availableFiles = new Set<string>(OctreeInfo.files.split(\",\"));\n\tcontext.camera.debug();\n\tconsole.log(\"🐞 [main.demo@55] OctreeInfo =\", OctreeInfo); // @FIXME: Remove this line written on 2026-03-03 at 09:03\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(\n\t\t\t\tx,\n\t\t\t\ty,\n\t\t\t\tz,\n\t\t\t\tlevel,\n\t\t\t\tavailableFiles,\n\t\t\t);\n\t\t\tif (!asset) return null;\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t});\n\t\t},\n\t\tsubdivisions: 4,\n\t\tsurfaceThreshold: 1,\n\t});\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t);\n\tcontext.paint();\n\treturn (settings: { zoom: number }) => {\n\t\tconst { camera } = context;\n\t\tcamera.transfo.distance = tgdCalcMapRange(\n\t\t\tsettings.zoom,\n\t\t\t1,\n\t\t\tMAX_ZOOM,\n\t\t\tradius * 3,\n\t\t\t(radius * 3) / MAX_ZOOM,\n\t\t);\n\t\tcamera.near = Math.max(1, camera.transfo.distance - radius);\n\t\tcamera.far = camera.transfo.distance + radius;\n\t\tconsole.log(\"🐞 [main.demo@126] camera =\", camera.near, camera.far); // @FIXME: Remove this line written on 2026-01-20 at 21:43\n\t};\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tdisableDefaultDoubleTap\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\tinertiaZoom: 1000,\n\t\t\t\tspeedZoom: 0,\n\t\t\t}}\n\t\t\tsettings={{\n\t\t\t\tzoom: {\n\t\t\t\t\tlabel: \"Zoom\",\n\t\t\t\t\tvalue: 1,\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: MAX_ZOOM,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction toBin(value: number, level: number): string {\n\treturn value.toString(2).padStart(level, \"0\");\n}\n\nasync function loadGLB(\n\tx: number,\n\ty: number,\n\tz: number,\n\tlevel: number,\n\tavailableFiles: Set<string>,\n): Promise<TgdDataGlb | null> {\n\tconst id = `${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}`;\n\tif (!availableFiles.has(id)) return null;\n\n\tconst url =\n\t\tlevel === 0\n\t\t\t? \"./assets/neuron/01/Octree.glb\"\n\t\t\t: `./assets/neuron/01/Octree${id}.glb`;\n\tconsole.log(\"Loading LOD block:\", url);\n\tconst asset = await tgdLoadGlb(url);\n\treturn asset;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/_/main.demo/main.demo.tsx",
        lineNumber: 103,
        columnNumber: 3
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (neuron)"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/neuron/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfbmV1cm9uX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1kNDkxZjQuZDE3NDBhOWQzZjM4MWNiOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24vXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9uZXVyb24vXy9tYWluLmRlbW8vaW5mby50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvbmV1cm9uL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL25ldXJvbi9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA2LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpO1xcblxcdGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuXFx0XFx0KGxldmVsKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdFxcdFxcdGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcblxcdFxcdFxcdFxcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG5cXHRcXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSk7XFxuXFx0Y29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvO1xcblxcdGNvbnN0IHZlY01pbiA9IG5ldyBUZ2RWZWMzKGJib3gubWluKTtcXG5cXHRjb25zdCB2ZWNNYXggPSBuZXcgVGdkVmVjMyhiYm94Lm1heCk7XFxuXFx0Y29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pO1xcblxcdGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KHZlY0RpbS54LCB2ZWNEaW0ueSwgdmVjRGltLnopO1xcblxcdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKHZlY01heCkuYWRkKHZlY01pbikuc2NhbGUoMC41KTtcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyO1xcblxcdC8vIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgMClcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdmVjRGltLnogKiAzO1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxO1xcblxcdGNvbnRleHQuY2FtZXJhLmZhciA9IHZlY0RpbS56ICogNjtcXG5cXHRjb25zdCBhdmFpbGFibGVGaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPihPY3RyZWVJbmZvLmZpbGVzLnNwbGl0KFxcXCIsXFxcIikpO1xcblxcdGNvbnRleHQuY2FtZXJhLmRlYnVnKCk7XFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0A1NV0gT2N0cmVlSW5mbyA9XFxcIiwgT2N0cmVlSW5mbyk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMDMgYXQgMDk6MDNcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKFxcblxcdFxcdFxcdFxcdHgsXFxuXFx0XFx0XFx0XFx0eSxcXG5cXHRcXHRcXHRcXHR6LFxcblxcdFxcdFxcdFxcdGxldmVsLFxcblxcdFxcdFxcdFxcdGF2YWlsYWJsZUZpbGVzLFxcblxcdFxcdFxcdCk7XFxuXFx0XFx0XFx0aWYgKCFhc3NldCkgcmV0dXJuIG51bGw7XFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pO1xcblxcdFxcdH0sXFxuXFx0XFx0c3ViZGl2aXNpb25zOiA0LFxcblxcdFxcdHN1cmZhY2VUaHJlc2hvbGQ6IDEsXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtsb2RdLFxcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0cmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xcblxcdFxcdGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKFxcblxcdFxcdFxcdHNldHRpbmdzLnpvb20sXFxuXFx0XFx0XFx0MSxcXG5cXHRcXHRcXHRNQVhfWk9PTSxcXG5cXHRcXHRcXHRyYWRpdXMgKiAzLFxcblxcdFxcdFxcdChyYWRpdXMgKiAzKSAvIE1BWF9aT09NLFxcblxcdFxcdCk7XFxuXFx0XFx0Y2FtZXJhLm5lYXIgPSBNYXRoLm1heCgxLCBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSAtIHJhZGl1cyk7XFxuXFx0XFx0Y2FtZXJhLmZhciA9IGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICsgcmFkaXVzO1xcblxcdFxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYWluLmRlbW9AMTI2XSBjYW1lcmEgPVxcXCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMS0yMCBhdCAyMTo0M1xcblxcdH07XFxufVwifVxuY29uc3QgRlVMTCA9IFwiLy8gaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXFxcIlxcbi8vIGltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1kud2VicFxcXCJcXG4vLyBpbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdaLndlYnBcXFwiXFxuLy8gaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXFxcIlxcbi8vIGltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1kud2VicFxcXCJcXG4vLyBpbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NaLndlYnBcXFwiXFxuXFxuaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0dHlwZSBUZ2REYXRhR2xiLFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckxPRCxcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFZlYzMsXFxuXFx0dGdkQ2FsY01hcFJhbmdlLFxcblxcdHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxcblxcdHRnZExvYWRHbGIsXFxuXFx0d2ViZ2xQcmVzZXRDdWxsLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCB7IE9jdHJlZUluZm8gfSBmcm9tIFxcXCIuL2luZm9cXFwiO1xcblxcbmNvbnN0IE1BWF9aT09NID0gMTU7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDYsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNCk7XFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG5cXHRcXHQobGV2ZWwpID0+XFxuXFx0XFx0XFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXFxuXFx0XFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KTtcXG5cXHRjb25zdCB7IGJib3ggfSA9IE9jdHJlZUluZm87XFxuXFx0Y29uc3QgdmVjTWluID0gbmV3IFRnZFZlYzMoYmJveC5taW4pO1xcblxcdGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KTtcXG5cXHRjb25zdCB2ZWNEaW0gPSBuZXcgVGdkVmVjMyh2ZWNNYXgpLnN1YnRyYWN0KHZlY01pbik7XFxuXFx0Y29uc3QgcmFkaXVzID0gTWF0aC5tYXgodmVjRGltLngsIHZlY0RpbS55LCB2ZWNEaW0ueik7XFxuXFx0Y29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpO1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXI7XFxuXFx0Ly8gY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDM7XFxuXFx0Y29udGV4dC5jYW1lcmEubmVhciA9IDE7XFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gdmVjRGltLnogKiA2O1xcblxcdGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXFxcIixcXFwiKSk7XFxuXFx0Y29udGV4dC5jYW1lcmEuZGVidWcoKTtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFpbi5kZW1vQDU1XSBPY3RyZWVJbmZvID1cXFwiLCBPY3RyZWVJbmZvKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXFxuXFx0XFx0XFx0XFx0eCxcXG5cXHRcXHRcXHRcXHR5LFxcblxcdFxcdFxcdFxcdHosXFxuXFx0XFx0XFx0XFx0bGV2ZWwsXFxuXFx0XFx0XFx0XFx0YXZhaWxhYmxlRmlsZXMsXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHRcXHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbDtcXG5cXG5cXHRcXHRcXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0YXNzZXQsXFxuXFx0XFx0XFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXFxuXFx0XFx0XFx0fSk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDQsXFxuXFx0XFx0c3VyZmFjZVRocmVzaG9sZDogMSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHRyZXR1cm4gKHNldHRpbmdzOiB7IHpvb206IG51bWJlciB9KSA9PiB7XFxuXFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XFxuXFx0XFx0Y2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB0Z2RDYWxjTWFwUmFuZ2UoXFxuXFx0XFx0XFx0c2V0dGluZ3Muem9vbSxcXG5cXHRcXHRcXHQxLFxcblxcdFxcdFxcdE1BWF9aT09NLFxcblxcdFxcdFxcdHJhZGl1cyAqIDMsXFxuXFx0XFx0XFx0KHJhZGl1cyAqIDMpIC8gTUFYX1pPT00sXFxuXFx0XFx0KTtcXG5cXHRcXHRjYW1lcmEubmVhciA9IE1hdGgubWF4KDEsIGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlIC0gcmFkaXVzKTtcXG5cXHRcXHRjYW1lcmEuZmFyID0gY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKyByYWRpdXM7XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XFxcIiwgY2FtZXJhLm5lYXIsIGNhbWVyYS5mYXIpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAxLTIwIGF0IDIxOjQzXFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0ZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHRcXHRcXHRcXHRzcGVlZFpvb206IDAsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRzZXR0aW5ncz17e1xcblxcdFxcdFxcdFxcdHpvb206IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcIlpvb21cXFwiLFxcblxcdFxcdFxcdFxcdFxcdHZhbHVlOiAxLFxcblxcdFxcdFxcdFxcdFxcdG1pbjogMSxcXG5cXHRcXHRcXHRcXHRcXHRtYXg6IE1BWF9aT09NLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcblxcdHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXFxcIjBcXFwiKTtcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQihcXG5cXHR4OiBudW1iZXIsXFxuXFx0eTogbnVtYmVyLFxcblxcdHo6IG51bWJlcixcXG5cXHRsZXZlbDogbnVtYmVyLFxcblxcdGF2YWlsYWJsZUZpbGVzOiBTZXQ8c3RyaW5nPixcXG4pOiBQcm9taXNlPFRnZERhdGFHbGIgfCBudWxsPiB7XFxuXFx0Y29uc3QgaWQgPSBgJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9YDtcXG5cXHRpZiAoIWF2YWlsYWJsZUZpbGVzLmhhcyhpZCkpIHJldHVybiBudWxsO1xcblxcblxcdGNvbnN0IHVybCA9XFxuXFx0XFx0bGV2ZWwgPT09IDBcXG5cXHRcXHRcXHQ/IFxcXCIuL2Fzc2V0cy9uZXVyb24vMDEvT2N0cmVlLmdsYlxcXCJcXG5cXHRcXHRcXHQ6IGAuL2Fzc2V0cy9uZXVyb24vMDEvT2N0cmVlJHtpZH0uZ2xiYDtcXG5cXHRjb25zb2xlLmxvZyhcXFwiTG9hZGluZyBMT0QgYmxvY2s6XFxcIiwgdXJsKTtcXG5cXHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKTtcXG5cXHRyZXR1cm4gYXNzZXQ7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgdHlwZSB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgY29uc3QgT2N0cmVlSW5mbzoge1xuXHRiYm94OiB7XG5cdFx0bWluOiBBcnJheU51bWJlcjM7XG5cdFx0bWF4OiBBcnJheU51bWJlcjM7XG5cdH07XG5cdGZpbGVzOiBzdHJpbmc7XG59ID0ge1xuXHRiYm94OiB7XG5cdFx0bWluOiBbLTMzODAxNS4wOTc2NTYyNSwgLTEzOTE1Ny43MzQzNzUsIC0yNzYwNTIuMjgxMjVdLFxuXHRcdG1heDogWzE1OTc5Ni44ODY3MTg3NSwgMzU4NjU0LjI1LCAyMjE3NTkuNzAzMTI1XSxcblx0fSxcblx0ZmlsZXM6XG5cdFx0XCIxMDAwMDAxMTEwMDAsMTAwMDEwMDExLDEwMDAxMDExMTAxMSwwMTAsMTAxMDAwMTAxMDExLDEwMDEwMDAwMTAxMCwwMTExMTExMDEwMDAsMTAwMTExMDAxMDEwLDEwMTAwMTEwMTAwMCwxMDEwMTEwMDEwMDEsMTAwMTAwMTAwMDExLDAxMDAwMDEwMCwxMDExMDAxMTEwMDAsMTAxMTAwMTAwMTExLDEwMSwxMDExMDAxMDEwMDEsMTAxMDAwMTAxMDEwLDEwMTAwMDEwMDExMCwxMTAwMDAxMDAxMTEsMTAwMTAwMTAwMTEwLDEwMTAxMDAxMTAwMSwxMDEwMTAwMTEsMDExMTAwMTAxMDAwLDEwMTEwMTExMTAwMCwxMDExMDAwMTEwMTAsMTAxMTAwMTAxMDAwLDExMDAwMTAwMDExMSwwMTEwMDAwMTEwMDAsMDExLDEwMDAwMTAwMTAwMSwxMDEwMDAxMTEwMDAsMTAwMTAwMDAxMDExLDAxMTEwMDAwMTAwMSwxMTAwMDAxMDAsMTAwMDAwMDAxMDExLDExMDAwMDAxMTAwMCwwMTExMTEwMDExMDAsMDExMDEwLDEwMTEwMDEwMTAxMCwwMTAxMTEwMDExMTAsMTAwMTAxMTExMDAxLDAxMTAxMTAwMTEwMSwxMDAwMDEwMTEwMTAsMDEwMTExMTAxMDAwLDEwMTAxMTAxMSwxMDAwMDEsMTAxMDAxMDAwLDEwMDEwMTAwMTEwMCwxMDAwMTEwMDEwMDEsMTAwMTAxMDAxMDEwLDEwMTEwMDAxMTAwMSwxMDEwMDAxMDAxMTEsMTAwMTAxMDExMDAwLDAxMTExMTAxMTAwMCwxMDExMDAxMTAxMDEsMTAwMDAwMTEwMTEwLDEwMTExMDEwMTAwMSwxMDEwMDAxMTAxMTEsMTEwMDAxMTAwLDAxMDAwMDAxMSwxMTAwMTAsMTAwMTExMDAxMDAwLDEwMTAwMTAwMTAwMSwxMDAxMDEwMDEwMTEsMTAwMTAxMDAxMDAwLDAxMTEwMDEwMTAxMCwxMDEwMDExMDEwMTAsMDExMTAwMTAxMDAxLDAxMDAwMDEwMSwwMTEwMTEwMDExMTAsMTEwMDAwMTEwMTExLDEwMDEwMDAxMDExMSwwMTExMDExMDEsMTAwMDAwMDEwMTEwLDEwMTAwMDAxMTAxMSwxMDEwMDExMDEwMDEsMTAwMTAxMDExMTAwLDEwMTAwMDEwMDEwMCwwMTEwMDAwMTEwMTAsMTAwMTAwMTAwMTAxLDEwMTEwMTAxMTAwMSwxMTAwMTAxMDAsMTAwMDAwLDAxMTAwMDAxMSwxMDAxMDAwMTAxMDEsMTAxMDAxMDExMDAxLDEwMDEwMTAwMDExMSwxMTAwMDEwMDEwMDAsMDAwLDEwMDEwMDAxMTAxMCwxMTAxMTAsMTAxMTAxMDAxMDEwLDEwMTExMDAwMTAwMCwxMDAwMDAwMTAxMTEsMDEwMTAwMDAxMDAxLDEwMDExMSwxMDExMDExMTAxMTEsMTAwMTEwMTExMDEwLDEwMDEwMDEwMDExMSwwMTAxMDAwMTAxMTAsMDExMDAwMDAxMDExLDEwMTEwMTAxMTAxMCwxMDExMDAxMTEwMTAsMTEwMTAxLDEwMTEwMTEwMTAwMSwxMTAwMDAxMTAxMDEsMTAxMDEwMTAxLDExMDAwMTAxMCwwMTEwMDAwMTAxMTEsMDEwMDExMTEwMTExLDAxMDExMTEwMDExMSwxMDEwMDAxMTEwMTAsMTAxMDAxMDAxMDAwLDEwMTAwMDAwMCwxMTAwMDAxMTEwMDAsMTEwMDAwMTExMDAxLDExMDAwMTEwMTAwMCwwMTExMDAwMTEwMTAsMTAxMDAxMDEwMTExLDEwMTAwMDEwMTAwMSwwMTEwMDAxMDAsMTAwMTAwMDExMDAxLDAxMTEwMSwwMTEwMDExMDAsMTEwMDAwMTAxMDEwLDEwMTEwMDAwMTAxMCwxMDEwMTEwMDEwMDAsMTAxMDAxMDAxMDExLDEwMDEwMTAxMTAxMSwxMTAxMDAxMDAsMTAxMTEwMDExMDAwLDExMDAwMTAwMTAxMCwxMDAxMTAxMDAsMTAxMDExMTAwLDEwMDEwMDEwMTAwMSwxMDAxMTAsMDEwMDEwLDEwMTEwMDExMDExMSwxMDAwMDEwMTAsMTExLDEwMDAwMTAxMSwwMTExMTAxMDEsMTAwMDEwLDEwMDAwMDAwMDExMCwxMDAxMDExMDEwMDEsMTAwMTAwMDAwMTExLDExMDAwMDEwMDEwMSwxMDAwMTAxMTEwMTAsMTAxMTAxMTAwLDEwMDEwMTAxMDExMSwxMDEwMDAxMDAwMDEsMTEwMDAxMDExLDEwMTAwMTEwMDExMSwxMDExMTAsMTAxMDAxMDExMDAwLDAxMTAwMDAwMTAxMCwxMTAwMDExMDAxMTEsMTAxMDAwMTAwMTAxLDAxMDExMTEwMCwxMTAwMDEwMDEwMDEsMTEwMDAxMTExMDAwLDExMTAxMCwxMTAwMDAxMDEwMDAsMTAwMDExMTAxLDExMDAwMTEwMTAwMSwxMDEwMDAxMDAwMTAsMDEwMTAwMDEwMTExLDEwMTAwMTEwMSwxMDAxMDEwMTAxMTAsMTAwMTAxMTAxLDExMDEwMTAwMTAwMCwwMTEwMDAxMDEwMDAsMDExMTEwMTExMDExLDEwMDAwMTEwMSwwMTEwMTEwMDExMDAsMTAwMTAxMTAxMDEwLDEwMTAxMDAxMTAwMCwxMDAwMDAwMTExMDAsMTAxMDAxMDAxMDEwLDEwMDAxMDAxMCwxMDAxMDAwMTAxMDAsMDExMDExMTAxMDAwLDEwMTAxMTEwMSwxMDEwMDAwMTAwMDEsMTAxMTAwMTAwLDEwMDAwMDEwMTAwMSwxMDEwMTAxMDAsMTAwMDAxMTAwLDAxMDExMTAxMSwxMDAwMTAxMTAsMTAxMDEwMTEwLDEwMDAwMDAxMTAxMSwwMTAwMTExMDAxMTEsMDExMTExMDAxMDExLDEwMTEwMTEwMDExMSwxMTAwMDEwMTAxMTAsMDExMDAxMTAxLDEwMDEwMDExMTAwMCwwMDEwMTExMTAxMTEsMTAwMDAxMDExMDAxLDEwMTEwMTAwMDExMSwxMDExMDEwMTAxMTEsMTAwMDEwMTAwLDEwMTAwMTAxMSwxMTAwMDEwMTAxMTEsMTAwMTAxMDExMDAxLDEwMTEwMDExMDExMCwxMDEwMDAxMDAsMTAxMDEwLDExMDAwMDEwMDExMCwxMDAwMTAxMDEsMTAxMDAxMTEwMTExLDEwMTEwMTAwMTAwMSwxMTAwMTExMDAsMTAwMDAxMDEwMTExLDEwMTAwMTAxMCwxMDAxMDExMDEwMDAsMTAxMTAxMDExMDAwLDExMDEwMDExMDExMSwwMTAxMTAxMTEsMTAwMDAwMDExLDAxMTExMDEwMCwwMDExMTExMTAxMTEsMTAwMTAwMTEwMTExLDEwMTAwMDEwMDAxMSwxMDAxMDAwMTEwMDAsMTAxMDAxMTAwLDEwMTAwMTAwMDExMSwxMDAwMDAxMTEwMTAsMTAwMTAxMDAxMDAxLDExMDEwMTAwMTAwMSwxMDAxMDAxMDEwMDAsMTEwMTAxMDAwMTExLDEwMDAwMDAxMCwwMTExMDAwMDEwMTAsMTAwMDExMDExMDAwLDEwMDAwMTAwMTAwMCwxMDExMDEwMTAxMTAsMTAwMDAxMDAxLDEwMTExMTAwMTAwMSwxMTAxMDEwMTEwMDEsMTAwMTAxMDExMDEwLDEwMDAxMSwwMTExMTAxMTAsMTAwMDAxMDAwMTExLDEwMDAwMDEwMCwxMDEwMDAxMTAxMTAsMDEwMDAxLDEwMDEwMDAxMDExMCwxMTAwMDAxMTAxMTAsMTAwMDAwMTEwLDEwMTEwMDAxMDAwMSwxMDAwMTEwMTEwMDEsMTAxMTAwMTAwMTEwLDAxMTExMSwxMDAxMDEwMTAxMDEsMTAxMTEwMDAxMDAxLDEwMCwxMDEwMDEwMDExMDAsMTEwMDEwMDExLDEwMDAwMDEwMSwwMDExMDEsMTAxMTEwMTAwLDEwMDEwMSwwMTEwMDAwMTEwMDEsMTAxMDEwMTAxMDAxLDEwMDAwMDExMTAwMSwwMTExMTAxMTEsMTAwMTAwMTAwMTAwLDEwMTExMDAxMTAwMSwwMTExMTExMDAsMDExMDAwMTAxLDEwMTAwMDExMTAwMSwwMTExMTAsMTEwMDEwMTAxLDEwMTAwMTAwMSwxMDExMDExMTEwMDEsMTAxMDAxMTExMDAwLDExMDAxMTAxMSwwMDEsMTAwMTAwMDExMDExLDExMDAwMTAxMTAwMSwxMDExMDAxMTEwMDEsMTAwMTExMDAxMDAxLDExMDAxMDAwMTAwMCwxMDAxMTAxMDEsMTEwMDAxLDEwMTEwMTEwMTAwMCwxMDAxMDAxMTEwMDEsMTAwMDAwMTEwMTExLDAwMTExMTAxMSwxMTAwMDExMDEsMTAxMDAwMTAxLDEwMDAxMTEwMCwxMDExMDEwMDEwMDAsMDEwMTAwMDAxMDExLDEwMTAxMDAwMTAwMSwwMTEwMDAwMDEwMDEsMTEwMDAxMDAwMTEwLDExMDAwMTAxMTAxMCwxMDEwMDExMTEwMDEsMTEwMTAxMDExMDAwLDEwMDEwMDExMTAxMCwxMDEwMTAxMTEwMDEsMTAxMDEwMDAxMDAwLDEwMTEwMTAwMDExMCwwMTExMDAwMTEwMDFcIixcbn07XG4iLCIvLyBpbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvbmVnWC53ZWJwXCJcbi8vIGltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9uZWdZLndlYnBcIlxuLy8gaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L25lZ1oud2VicFwiXG4vLyBpbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvcG9zWC53ZWJwXCJcbi8vIGltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9wb3NZLndlYnBcIlxuLy8gaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L3Bvc1oud2VicFwiXG5cbmltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJMT0QsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RWZWMzLFxuXHR0Z2RDYWxjTWFwUmFuZ2UsXG5cdHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxuXHR0Z2RMb2FkR2xiLFxuXHR3ZWJnbFByZXNldEN1bGwsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyBPY3RyZWVJbmZvIH0gZnJvbSBcIi4vaW5mb1wiO1xuXG5jb25zdCBNQVhfWk9PTSA9IDE1O1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcblx0XHRzdGVwczogNixcblx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNCk7XG5cdGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXG5cdFx0KGxldmVsKSA9PlxuXHRcdFx0bmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG5cdFx0XHRcdGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxuXHRcdFx0XHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG5cdFx0XHR9KSxcblx0KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KTtcblx0Y29uc3QgeyBiYm94IH0gPSBPY3RyZWVJbmZvO1xuXHRjb25zdCB2ZWNNaW4gPSBuZXcgVGdkVmVjMyhiYm94Lm1pbik7XG5cdGNvbnN0IHZlY01heCA9IG5ldyBUZ2RWZWMzKGJib3gubWF4KTtcblx0Y29uc3QgdmVjRGltID0gbmV3IFRnZFZlYzModmVjTWF4KS5zdWJ0cmFjdCh2ZWNNaW4pO1xuXHRjb25zdCByYWRpdXMgPSBNYXRoLm1heCh2ZWNEaW0ueCwgdmVjRGltLnksIHZlY0RpbS56KTtcblx0Y29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzModmVjTWF4KS5hZGQodmVjTWluKS5zY2FsZSgwLjUpO1xuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyO1xuXHQvLyBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApXG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSB2ZWNEaW0ueiAqIDM7XG5cdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxO1xuXHRjb250ZXh0LmNhbWVyYS5mYXIgPSB2ZWNEaW0ueiAqIDY7XG5cdGNvbnN0IGF2YWlsYWJsZUZpbGVzID0gbmV3IFNldDxzdHJpbmc+KE9jdHJlZUluZm8uZmlsZXMuc3BsaXQoXCIsXCIpKTtcblx0Y29udGV4dC5jYW1lcmEuZGVidWcoKTtcblx0Y29uc29sZS5sb2coXCLwn5CeIFttYWluLmRlbW9ANTVdIE9jdHJlZUluZm8gPVwiLCBPY3RyZWVJbmZvKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0wMyBhdCAwOTowM1xuXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG5cdFx0YmJveCxcblx0XHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoXG5cdFx0XHRcdHgsXG5cdFx0XHRcdHksXG5cdFx0XHRcdHosXG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRhdmFpbGFibGVGaWxlcyxcblx0XHRcdCk7XG5cdFx0XHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdFx0XHRhc3NldCxcblx0XHRcdFx0bWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHN1YmRpdmlzaW9uczogNCxcblx0XHRzdXJmYWNlVGhyZXNob2xkOiAxLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0Y2xlYXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRjaGlsZHJlbjogW2xvZF0sXG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0cmV0dXJuIChzZXR0aW5nczogeyB6b29tOiBudW1iZXIgfSkgPT4ge1xuXHRcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRcdGNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gdGdkQ2FsY01hcFJhbmdlKFxuXHRcdFx0c2V0dGluZ3Muem9vbSxcblx0XHRcdDEsXG5cdFx0XHRNQVhfWk9PTSxcblx0XHRcdHJhZGl1cyAqIDMsXG5cdFx0XHQocmFkaXVzICogMykgLyBNQVhfWk9PTSxcblx0XHQpO1xuXHRcdGNhbWVyYS5uZWFyID0gTWF0aC5tYXgoMSwgY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgLSByYWRpdXMpO1xuXHRcdGNhbWVyYS5mYXIgPSBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSArIHJhZGl1cztcblx0XHRjb25zb2xlLmxvZyhcIvCfkJ4gW21haW4uZGVtb0AxMjZdIGNhbWVyYSA9XCIsIGNhbWVyYS5uZWFyLCBjYW1lcmEuZmFyKTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMS0yMCBhdCAyMTo0M1xuXHR9O1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGdpem1vXG5cdFx0XHRjb250cm9sbGVyPXt7XG5cdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0aW5lcnRpYVpvb206IDEwMDAsXG5cdFx0XHRcdHNwZWVkWm9vbTogMCxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHR6b29tOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiWm9vbVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0XHRcdG1pbjogMSxcblx0XHRcdFx0XHRtYXg6IE1BWF9aT09NLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB0b0Jpbih2YWx1ZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcblx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcIjBcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoXG5cdHg6IG51bWJlcixcblx0eTogbnVtYmVyLFxuXHR6OiBudW1iZXIsXG5cdGxldmVsOiBudW1iZXIsXG5cdGF2YWlsYWJsZUZpbGVzOiBTZXQ8c3RyaW5nPixcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcblx0Y29uc3QgaWQgPSBgJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9YDtcblx0aWYgKCFhdmFpbGFibGVGaWxlcy5oYXMoaWQpKSByZXR1cm4gbnVsbDtcblxuXHRjb25zdCB1cmwgPVxuXHRcdGxldmVsID09PSAwXG5cdFx0XHQ/IFwiLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZS5nbGJcIlxuXHRcdFx0OiBgLi9hc3NldHMvbmV1cm9uLzAxL09jdHJlZSR7aWR9LmdsYmA7XG5cdGNvbnNvbGUubG9nKFwiTG9hZGluZyBMT0QgYmxvY2s6XCIsIHVybCk7XG5cdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpO1xuXHRyZXR1cm4gYXNzZXQ7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIk9jdHJlZUluZm8iLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTE9EIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVmVjMyIsInRnZENhbGNNYXBSYW5nZSIsInRnZENvbG9yTWFrZUh1ZVdoZWVsIiwidGdkTG9hZEdsYiIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiTUFYX1pPT00iLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsIkNPTE9SUyIsImNvbG9yIiwibWF0ZXJpYWxzIiwibGV2ZWwiLCJjbGVhciIsImJib3giLCJ2ZWNNaW4iLCJ2ZWNNYXgiLCJ2ZWNEaW0iLCJyYWRpdXMiLCJNYXRoIiwiY2VudGVyIiwiYXZhaWxhYmxlRmlsZXMiLCJTZXQiLCJjb25zb2xlIiwibG9kIiwiZmFjdG9yeSIsIngiLCJ5IiwieiIsImFzc2V0IiwibG9hZEdMQiIsInNldHRpbmdzIiwiY2FtZXJhIiwidG9CaW4iLCJ2YWx1ZSIsImlkIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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