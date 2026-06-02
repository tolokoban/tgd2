"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_detail_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-fec60e"], {
35825(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(52003);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 14;\n\tcontext.camera.near = 1e-2;\n\tcontext.camera.far = 20;\n\tconst color: ArrayNumber4 = [0.9, 0.5, 0.1, 1];\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 8,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4);\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialGlobal({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tambientColor: skybox,\n\t\t\t}),\n\t);\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>;\n\t\tmax: Readonly<ArrayNumber3>;\n\t} = {\n\t\tmin: [-1.31195, -1.39747, -1.06093],\n\t\tmax: [1.312, 1.2265, 1.563],\n\t};\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(x, y, z, level);\n\t\t\tif (!asset) return null;\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t});\n\t\t},\n\t\tsubdivisions: 1,\n\t\t// subdivisions: 3,\n\t\t// surfaceThreshold: 0.8,\n\t});\n\tconst points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n\t\tconst point = new TgdPainterDebugPoint(context);\n\t\tconst [R, G, B, A] = COLORS[i];\n\t\tpoint.color.x = R;\n\t\tpoint.color.y = G;\n\t\tpoint.color.z = B;\n\t\tpoint.color.w = A;\n\t\treturn point;\n\t});\n\tconst group = new TgdPainterGroup(points);\n\tconst wireCube = new WireCube(context);\n\tgroup.add(wireCube);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod, group],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t\tnew TgdPainterLogic((time) => {\n\t\t\t// const { transfo } = context.camera\n\t\t\t// transfo.setEulerRotation(\n\t\t\t// \tMath.sin(time) * 30,\n\t\t\t// \tMath.sin(time * 1.182) * 40,\n\t\t\t// \t0,\n\t\t\t// )\n\t\t\tconst bbox = {\n\t\t\t\tmin: [0.000025000000000052758, -1.39747, 0.251035],\n\t\t\t\tmax: [1.312, -0.08548500000000003, 1.563],\n\t\t\t};\n\t\t\tconst [x0, y0, z0] = bbox.min;\n\t\t\tconst [x1, y1, z1] = bbox.max;\n\t\t\tconst corners: ArrayNumber3[] = [\n\t\t\t\t[x0, y0, z0],\n\t\t\t\t[x0, y1, z0],\n\t\t\t\t[x1, y0, z0],\n\t\t\t\t[x1, y1, z0],\n\t\t\t\t[x0, y0, z1],\n\t\t\t\t[x0, y1, z1],\n\t\t\t\t[x1, y0, z1],\n\t\t\t\t[x1, y1, z1],\n\t\t\t];\n\t\t\tlet ptr = 0;\n\t\t\tfor (let i = 0; i < 8; i++) {\n\t\t\t\tconst [x, y, z, w] = context.camera.apply(corners[i]);\n\t\t\t\tconst painter = points[i];\n\t\t\t\tpainter.x = x;\n\t\t\t\tpainter.y = y;\n\t\t\t\tpainter.z = z;\n\t\t\t\tpainter.w = w;\n\t\t\t\tconst { data } = wireCube;\n\t\t\t\tdata[ptr++] = x;\n\t\t\t\tdata[ptr++] = y;\n\t\t\t\tdata[ptr++] = z;\n\t\t\t\tdata[ptr++] = w;\n\t\t\t}\n\t\t}),\n\t);\n\tcontext.inputs.keyboard.eventKeyPress.addListener((evt) => {\n\t\tif (evt.key === \"d\") {\n\t\t\tlod.debug();\n\t\t}\n\t});\n\tcontext.paint();\n}"
};
var FULL = "import {\n\ttype ArrayNumber3,\n\ttype ArrayNumber4,\n\ttype TgdContext,\n\ttype TgdDataGlb,\n\tTgdMaterialGlobal,\n\tTgdPainterClear,\n\tTgdPainterDebugPoint,\n\tTgdPainterGroup,\n\tTgdPainterLOD,\n\tTgdPainterLogic,\n\tTgdPainterMeshGltf,\n\tTgdPainterState,\n\tTgdTextureCube,\n\ttgdColorMakeHueWheel,\n\ttgdLoadGlb,\n\twebglPresetCull,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\n\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\";\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\";\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\";\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\";\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\";\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\nimport { WireCube } from \"./wire-cube\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tcontext.camera.transfo.distance = 14;\n\tcontext.camera.near = 1e-2;\n\tcontext.camera.far = 20;\n\tconst color: ArrayNumber4 = [0.9, 0.5, 0.1, 1];\n\tconst skybox = new TgdTextureCube(context, {\n\t\timagePosX: assets.image.posX,\n\t\timagePosY: assets.image.posY,\n\t\timagePosZ: assets.image.posZ,\n\t\timageNegX: assets.image.negX,\n\t\timageNegY: assets.image.negY,\n\t\timageNegZ: assets.image.negZ,\n\t});\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 8,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4);\n\tconst materials = [0, 1, 2, 3, 4, 5].map(\n\t\t(level) =>\n\t\t\tnew TgdMaterialGlobal({\n\t\t\t\tcolor: COLORS[level],\n\t\t\t\tambientColor: skybox,\n\t\t\t}),\n\t);\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>;\n\t\tmax: Readonly<ArrayNumber3>;\n\t} = {\n\t\tmin: [-1.31195, -1.39747, -1.06093],\n\t\tmax: [1.312, 1.2265, 1.563],\n\t};\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst asset: TgdDataGlb | null = await loadGLB(x, y, z, level);\n\t\t\tif (!asset) return null;\n\n\t\t\treturn new TgdPainterMeshGltf(context, {\n\t\t\t\tasset,\n\t\t\t\tmaterial: materials[level],\n\t\t\t});\n\t\t},\n\t\tsubdivisions: 1,\n\t\t// subdivisions: 3,\n\t\t// surfaceThreshold: 0.8,\n\t});\n\tconst points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n\t\tconst point = new TgdPainterDebugPoint(context);\n\t\tconst [R, G, B, A] = COLORS[i];\n\t\tpoint.color.x = R;\n\t\tpoint.color.y = G;\n\t\tpoint.color.z = B;\n\t\tpoint.color.w = A;\n\t\treturn point;\n\t});\n\tconst group = new TgdPainterGroup(points);\n\tconst wireCube = new WireCube(context);\n\tgroup.add(wireCube);\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod, group],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tcull: webglPresetCull.back,\n\t\t}),\n\t\tnew TgdPainterLogic((time) => {\n\t\t\t// const { transfo } = context.camera\n\t\t\t// transfo.setEulerRotation(\n\t\t\t// \tMath.sin(time) * 30,\n\t\t\t// \tMath.sin(time * 1.182) * 40,\n\t\t\t// \t0,\n\t\t\t// )\n\t\t\tconst bbox = {\n\t\t\t\tmin: [0.000025000000000052758, -1.39747, 0.251035],\n\t\t\t\tmax: [1.312, -0.08548500000000003, 1.563],\n\t\t\t};\n\t\t\tconst [x0, y0, z0] = bbox.min;\n\t\t\tconst [x1, y1, z1] = bbox.max;\n\t\t\tconst corners: ArrayNumber3[] = [\n\t\t\t\t[x0, y0, z0],\n\t\t\t\t[x0, y1, z0],\n\t\t\t\t[x1, y0, z0],\n\t\t\t\t[x1, y1, z0],\n\t\t\t\t[x0, y0, z1],\n\t\t\t\t[x0, y1, z1],\n\t\t\t\t[x1, y0, z1],\n\t\t\t\t[x1, y1, z1],\n\t\t\t];\n\t\t\tlet ptr = 0;\n\t\t\tfor (let i = 0; i < 8; i++) {\n\t\t\t\tconst [x, y, z, w] = context.camera.apply(corners[i]);\n\t\t\t\tconst painter = points[i];\n\t\t\t\tpainter.x = x;\n\t\t\t\tpainter.y = y;\n\t\t\t\tpainter.z = z;\n\t\t\t\tpainter.w = w;\n\t\t\t\tconst { data } = wireCube;\n\t\t\t\tdata[ptr++] = x;\n\t\t\t\tdata[ptr++] = y;\n\t\t\t\tdata[ptr++] = z;\n\t\t\t\tdata[ptr++] = w;\n\t\t\t}\n\t\t}),\n\t);\n\tcontext.inputs.keyboard.eventKeyPress.addListener((evt) => {\n\t\tif (evt.key === \"d\") {\n\t\t\tlod.debug();\n\t\t}\n\t});\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tassets={{\n\t\t\t\timage: {\n\t\t\t\t\tposX: PosX,\n\t\t\t\t\tposY: PosY,\n\t\t\t\t\tposZ: PosZ,\n\t\t\t\t\tnegX: NegX,\n\t\t\t\t\tnegY: NegY,\n\t\t\t\t\tnegZ: NegZ,\n\t\t\t\t},\n\t\t\t}}\n\t\t\tgizmo\n\t\t\tcontroller={{\n\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\tinertiaZoom: 1000,\n\t\t\t\tspeedZoom: 0.8,\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction toBin(value: number, level: number): string {\n\treturn value.toString(2).padStart(level, \"0\");\n}\n\nasync function loadGLB(\n\tx: number,\n\ty: number,\n\tz: number,\n\tlevel: number,\n): Promise<TgdDataGlb | null> {\n\tconst url =\n\t\tlevel === 0\n\t\t\t? \"./assets/lod/Octree.glb\"\n\t\t\t: `./assets/lod/Octree${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}.glb`;\n\tconsole.log(\"Loading LOD block:\", url);\n\tconst asset = await tgdLoadGlb(url);\n\treturn asset;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
52003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_2 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_3 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4 = __webpack_require__(30892);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_5 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_6 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7 = __webpack_require__(85720);
/* import */ var _components_demo_Tgd__rspack_import_8 = __webpack_require__(43475);
/* import */ var _wire_cube__rspack_import_9 = __webpack_require__(56510);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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










// #begin
function init(context, assets) {
    context.camera.transfo.distance = 14;
    context.camera.near = 1e-2;
    context.camera.far = 20;
    var color = [
        0.9,
        0.5,
        0.1,
        1
    ];
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    var COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
        steps: 8
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
        return new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
            color: COLORS[level],
            ambientColor: skybox
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
    var bbox = {
        min: [
            -1.31195,
            -1.39747,
            -1.06093
        ],
        max: [
            1.312,
            1.2265,
            1.563
        ]
    };
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
                                loadGLB(x, y, z, level)
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
        subdivisions: 1
    });
    var points = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ].map(function(i) {
        var point = new _tolokoban_tgd__rspack_import_1.TgdPainterDebugPoint(context);
        var _COLORS_i = _sliced_to_array(COLORS[i], 4), R = _COLORS_i[0], G = _COLORS_i[1], B = _COLORS_i[2], A = _COLORS_i[3];
        point.color.x = R;
        point.color.y = G;
        point.color.z = B;
        point.color.w = A;
        return point;
    });
    var group = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup(points);
    var wireCube = new _wire_cube__rspack_import_9.WireCube(context);
    group.add(wireCube);
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [
            lod,
            group
        ],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time) {
        // const { transfo } = context.camera
        // transfo.setEulerRotation(
        // 	Math.sin(time) * 30,
        // 	Math.sin(time * 1.182) * 40,
        // 	0,
        // )
        var bbox = {
            min: [
                0.000025000000000052758,
                -1.39747,
                0.251035
            ],
            max: [
                1.312,
                -0.08548500000000003,
                1.563
            ]
        };
        var _bbox_min = _sliced_to_array(bbox.min, 3), x0 = _bbox_min[0], y0 = _bbox_min[1], z0 = _bbox_min[2];
        var _bbox_max = _sliced_to_array(bbox.max, 3), x1 = _bbox_max[0], y1 = _bbox_max[1], z1 = _bbox_max[2];
        var corners = [
            [
                x0,
                y0,
                z0
            ],
            [
                x0,
                y1,
                z0
            ],
            [
                x1,
                y0,
                z0
            ],
            [
                x1,
                y1,
                z0
            ],
            [
                x0,
                y0,
                z1
            ],
            [
                x0,
                y1,
                z1
            ],
            [
                x1,
                y0,
                z1
            ],
            [
                x1,
                y1,
                z1
            ]
        ];
        var ptr = 0;
        for(var i = 0; i < 8; i++){
            var _context_camera_apply = _sliced_to_array(context.camera.apply(corners[i]), 4), x = _context_camera_apply[0], y = _context_camera_apply[1], z = _context_camera_apply[2], w = _context_camera_apply[3];
            var painter = points[i];
            painter.x = x;
            painter.y = y;
            painter.z = z;
            painter.w = w;
            var data = wireCube.data;
            data[ptr++] = x;
            data[ptr++] = y;
            data[ptr++] = z;
            data[ptr++] = w;
        }
    }));
    context.inputs.keyboard.eventKeyPress.addListener(function(evt) {
        if (evt.key === "d") {
            lod.debug();
        }
    });
    context.paint();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_8["default"], {
        onReady: init,
        assets: {
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_5,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_6,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_2,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_3,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4
            }
        },
        gizmo: true,
        controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            speedZoom: 0.8
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/main.demo.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, this);
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
function loadGLB(x, y, z, level) {
    return _async_to_generator(function() {
        var url, asset;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = level === 0 ? "./assets/lod/Octree.glb" : "./assets/lod/Octree".concat(toBin(x, level)).concat(toBin(y, level)).concat(toBin(z, level), ".glb");
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
56510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WireCube: () => (WireCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}

var EPSILON = 1e-1; // 1e-3
var X0 = -1 + EPSILON;
var X1 = +1 - EPSILON;
var Y0 = -1 + EPSILON;
var Y1 = +1 - EPSILON;
var Z0 = 0 + EPSILON;
var Z1 = +1 - EPSILON;
var WireCube = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(WireCube, TgdPainter);
    function WireCube(context) {
        _class_call_check(this, WireCube);
        var _this;
        _this = _call_super(this, WireCube), _define_property(_this, "context", void 0), // prettier-ignore
        _define_property(_this, "data", void 0), _define_property(_this, "prg", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "vao", void 0), _this.context = context, _this.data = new Float32Array([
            X0,
            Y0,
            Z0,
            1,
            X0,
            Y1,
            Z0,
            1,
            X1,
            Y0,
            Z0,
            1,
            X1,
            Y1,
            Z0,
            1,
            X0,
            Y0,
            Z1,
            1,
            X0,
            Y1,
            Z1,
            1,
            X1,
            Y0,
            Z1,
            1,
            X1,
            Y1,
            Z1,
            1
        ]);
        var prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                attributes: {
                    attPosition: "vec4"
                },
                mainCode: [
                    "gl_Position = attPosition;"
                ]
            }).code,
            frag: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                outputs: {
                    FragColor: "vec4"
                },
                mainCode: "FragColor = vec4(1, 1, 1, 0.5);"
            }).code
        });
        _this.prg = prg;
        var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPosition: "vec4"
        }, {
            usage: "DYNAMIC_DRAW"
        });
        dataset.count = 8;
        _this.dataset = dataset;
        // prettier-ignore
        var elements = new Uint8Array([
            0,
            1,
            0,
            2,
            0,
            4,
            1,
            3,
            1,
            5,
            2,
            3,
            2,
            6,
            3,
            7,
            4,
            5,
            4,
            6,
            5,
            7,
            6,
            7
        ]);
        var vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, prg, [
            dataset
        ], elements);
        _this.vao = vao;
        prg.debug();
        return _this;
    }
    _create_class(WireCube, [
        {
            key: "delete",
            value: function _delete() {
                this.prg.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, data = _this.data, prg = _this.prg, vao = _this.vao, dataset = _this.dataset;
                prg.use();
                var gl = context.gl;
                dataset.data = data.buffer;
                vao.updateDataset(dataset);
                vao.bind();
                gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        }
    ]);
    return WireCube;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
20578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(35825);
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (second demo)"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1mZWM2MGUuYjg0Y2YyZTU2ZTQyYjBhYy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0O1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yO1xcblxcdGNvbnRleHQuY2FtZXJhLmZhciA9IDIwO1xcblxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV07XFxuXFx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG5cXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA4LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpO1xcblxcdGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuXFx0XFx0KGxldmVsKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXFxuXFx0XFx0XFx0XFx0YW1iaWVudENvbG9yOiBza3lib3gsXFxuXFx0XFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pO1xcblxcdGNvbnN0IGJib3g6IHtcXG5cXHRcXHRtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz47XFxuXFx0XFx0bWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+O1xcblxcdH0gPSB7XFxuXFx0XFx0bWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXFxuXFx0XFx0bWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxcblxcdH07XFxuXFx0Y29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcblxcdFxcdGJib3gsXFxuXFx0XFx0YXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuXFx0XFx0XFx0Y29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbCk7XFxuXFx0XFx0XFx0aWYgKCFhc3NldCkgcmV0dXJuIG51bGw7XFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pO1xcblxcdFxcdH0sXFxuXFx0XFx0c3ViZGl2aXNpb25zOiAxLFxcblxcdFxcdC8vIHN1YmRpdmlzaW9uczogMyxcXG5cXHRcXHQvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXFxuXFx0fSk7XFxuXFx0Y29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xcblxcdFxcdGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpO1xcblxcdFxcdGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXTtcXG5cXHRcXHRwb2ludC5jb2xvci54ID0gUjtcXG5cXHRcXHRwb2ludC5jb2xvci55ID0gRztcXG5cXHRcXHRwb2ludC5jb2xvci56ID0gQjtcXG5cXHRcXHRwb2ludC5jb2xvci53ID0gQTtcXG5cXHRcXHRyZXR1cm4gcG9pbnQ7XFxuXFx0fSk7XFxuXFx0Y29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cyk7XFxuXFx0Y29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dCk7XFxuXFx0Z3JvdXAuYWRkKHdpcmVDdWJlKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcblxcdFxcdFxcdC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcXG5cXHRcXHRcXHQvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXFxuXFx0XFx0XFx0Ly8gXFx0TWF0aC5zaW4odGltZSkgKiAzMCxcXG5cXHRcXHRcXHQvLyBcXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXFxuXFx0XFx0XFx0Ly8gXFx0MCxcXG5cXHRcXHRcXHQvLyApXFxuXFx0XFx0XFx0Y29uc3QgYmJveCA9IHtcXG5cXHRcXHRcXHRcXHRtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcXG5cXHRcXHRcXHRcXHRtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcXG5cXHRcXHRcXHR9O1xcblxcdFxcdFxcdGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluO1xcblxcdFxcdFxcdGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4O1xcblxcdFxcdFxcdGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xcblxcdFxcdFxcdFxcdFt4MCwgeTAsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDAsIHkxLCB6MF0sXFxuXFx0XFx0XFx0XFx0W3gxLCB5MCwgejBdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTEsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDAsIHkwLCB6MV0sXFxuXFx0XFx0XFx0XFx0W3gwLCB5MSwgejFdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTAsIHoxXSxcXG5cXHRcXHRcXHRcXHRbeDEsIHkxLCB6MV0sXFxuXFx0XFx0XFx0XTtcXG5cXHRcXHRcXHRsZXQgcHRyID0gMDtcXG5cXHRcXHRcXHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xcblxcdFxcdFxcdFxcdGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pO1xcblxcdFxcdFxcdFxcdGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV07XFxuXFx0XFx0XFx0XFx0cGFpbnRlci54ID0geDtcXG5cXHRcXHRcXHRcXHRwYWludGVyLnkgPSB5O1xcblxcdFxcdFxcdFxcdHBhaW50ZXIueiA9IHo7XFxuXFx0XFx0XFx0XFx0cGFpbnRlci53ID0gdztcXG5cXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlO1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0geDtcXG5cXHRcXHRcXHRcXHRkYXRhW3B0cisrXSA9IHk7XFxuXFx0XFx0XFx0XFx0ZGF0YVtwdHIrK10gPSB6O1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0gdztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LmlucHV0cy5rZXlib2FyZC5ldmVudEtleVByZXNzLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG5cXHRcXHRpZiAoZXZ0LmtleSA9PT0gXFxcImRcXFwiKSB7XFxuXFx0XFx0XFx0bG9kLmRlYnVnKCk7XFxuXFx0XFx0fVxcblxcdH0pO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHR5cGUgQXJyYXlOdW1iZXIzLFxcblxcdHR5cGUgQXJyYXlOdW1iZXI0LFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHR0eXBlIFRnZERhdGFHbGIsXFxuXFx0VGdkTWF0ZXJpYWxHbG9iYWwsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJEZWJ1Z1BvaW50LFxcblxcdFRnZFBhaW50ZXJHcm91cCxcXG5cXHRUZ2RQYWludGVyTE9ELFxcblxcdFRnZFBhaW50ZXJMb2dpYyxcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmVDdWJlLFxcblxcdHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxcblxcdHRnZExvYWRHbGIsXFxuXFx0d2ViZ2xQcmVzZXRDdWxsLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiO1xcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFxcXCI7XFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiO1xcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCB7IFdpcmVDdWJlIH0gZnJvbSBcXFwiLi93aXJlLWN1YmVcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTQ7XFxuXFx0Y29udGV4dC5jYW1lcmEubmVhciA9IDFlLTI7XFxuXFx0Y29udGV4dC5jYW1lcmEuZmFyID0gMjA7XFxuXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXTtcXG5cXHRjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcblxcdFxcdGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuXFx0XFx0aW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG5cXHRcXHRpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcblxcdFxcdGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuXFx0XFx0aW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG5cXHRcXHRpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcblxcdH0pO1xcblxcdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuXFx0XFx0c3RlcHM6IDgsXFxuXFx0fSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNCk7XFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG5cXHRcXHQobGV2ZWwpID0+XFxuXFx0XFx0XFx0bmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG5cXHRcXHRcXHRcXHRjb2xvcjogQ09MT1JTW2xldmVsXSxcXG5cXHRcXHRcXHRcXHRhbWJpZW50Q29sb3I6IHNreWJveCxcXG5cXHRcXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSk7XFxuXFx0Y29uc3QgYmJveDoge1xcblxcdFxcdG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPjtcXG5cXHRcXHRtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz47XFxuXFx0fSA9IHtcXG5cXHRcXHRtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcXG5cXHRcXHRtYXg6IFsxLjMxMiwgMS4yMjY1LCAxLjU2M10sXFxuXFx0fTtcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKHgsIHksIHosIGxldmVsKTtcXG5cXHRcXHRcXHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbDtcXG5cXG5cXHRcXHRcXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0YXNzZXQsXFxuXFx0XFx0XFx0XFx0bWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXFxuXFx0XFx0XFx0fSk7XFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDEsXFxuXFx0XFx0Ly8gc3ViZGl2aXNpb25zOiAzLFxcblxcdFxcdC8vIHN1cmZhY2VUaHJlc2hvbGQ6IDAuOCxcXG5cXHR9KTtcXG5cXHRjb25zdCBwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10ubWFwKChpKSA9PiB7XFxuXFx0XFx0Y29uc3QgcG9pbnQgPSBuZXcgVGdkUGFpbnRlckRlYnVnUG9pbnQoY29udGV4dCk7XFxuXFx0XFx0Y29uc3QgW1IsIEcsIEIsIEFdID0gQ09MT1JTW2ldO1xcblxcdFxcdHBvaW50LmNvbG9yLnggPSBSO1xcblxcdFxcdHBvaW50LmNvbG9yLnkgPSBHO1xcblxcdFxcdHBvaW50LmNvbG9yLnogPSBCO1xcblxcdFxcdHBvaW50LmNvbG9yLncgPSBBO1xcblxcdFxcdHJldHVybiBwb2ludDtcXG5cXHR9KTtcXG5cXHRjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKTtcXG5cXHRjb25zdCB3aXJlQ3ViZSA9IG5ldyBXaXJlQ3ViZShjb250ZXh0KTtcXG5cXHRncm91cC5hZGQod2lyZUN1YmUpO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdGNsZWFyLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRcXHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuXFx0XFx0XFx0Ly8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcblxcdFxcdFxcdC8vIHRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihcXG5cXHRcXHRcXHQvLyBcXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxcblxcdFxcdFxcdC8vIFxcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcXG5cXHRcXHRcXHQvLyBcXHQwLFxcblxcdFxcdFxcdC8vIClcXG5cXHRcXHRcXHRjb25zdCBiYm94ID0ge1xcblxcdFxcdFxcdFxcdG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxcblxcdFxcdFxcdFxcdG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxcblxcdFxcdFxcdH07XFxuXFx0XFx0XFx0Y29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW47XFxuXFx0XFx0XFx0Y29uc3QgW3gxLCB5MSwgejFdID0gYmJveC5tYXg7XFxuXFx0XFx0XFx0Y29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXFxuXFx0XFx0XFx0XFx0W3gwLCB5MCwgejBdLFxcblxcdFxcdFxcdFxcdFt4MCwgeTEsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDEsIHkwLCB6MF0sXFxuXFx0XFx0XFx0XFx0W3gxLCB5MSwgejBdLFxcblxcdFxcdFxcdFxcdFt4MCwgeTAsIHoxXSxcXG5cXHRcXHRcXHRcXHRbeDAsIHkxLCB6MV0sXFxuXFx0XFx0XFx0XFx0W3gxLCB5MCwgejFdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTEsIHoxXSxcXG5cXHRcXHRcXHRdO1xcblxcdFxcdFxcdGxldCBwdHIgPSAwO1xcblxcdFxcdFxcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XFxuXFx0XFx0XFx0XFx0Y29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSk7XFxuXFx0XFx0XFx0XFx0Y29uc3QgcGFpbnRlciA9IHBvaW50c1tpXTtcXG5cXHRcXHRcXHRcXHRwYWludGVyLnggPSB4O1xcblxcdFxcdFxcdFxcdHBhaW50ZXIueSA9IHk7XFxuXFx0XFx0XFx0XFx0cGFpbnRlci56ID0gejtcXG5cXHRcXHRcXHRcXHRwYWludGVyLncgPSB3O1xcblxcdFxcdFxcdFxcdGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmU7XFxuXFx0XFx0XFx0XFx0ZGF0YVtwdHIrK10gPSB4O1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0geTtcXG5cXHRcXHRcXHRcXHRkYXRhW3B0cisrXSA9IHo7XFxuXFx0XFx0XFx0XFx0ZGF0YVtwdHIrK10gPSB3O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9KSxcXG5cXHQpO1xcblxcdGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcblxcdFxcdGlmIChldnQua2V5ID09PSBcXFwiZFxcXCIpIHtcXG5cXHRcXHRcXHRsb2QuZGVidWcoKTtcXG5cXHRcXHR9XFxuXFx0fSk7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXdcXG5cXHRcXHRcXHRvblJlYWR5PXtpbml0fVxcblxcdFxcdFxcdGFzc2V0cz17e1xcblxcdFxcdFxcdFxcdGltYWdlOiB7XFxuXFx0XFx0XFx0XFx0XFx0cG9zWDogUG9zWCxcXG5cXHRcXHRcXHRcXHRcXHRwb3NZOiBQb3NZLFxcblxcdFxcdFxcdFxcdFxcdHBvc1o6IFBvc1osXFxuXFx0XFx0XFx0XFx0XFx0bmVnWDogTmVnWCxcXG5cXHRcXHRcXHRcXHRcXHRuZWdZOiBOZWdZLFxcblxcdFxcdFxcdFxcdFxcdG5lZ1o6IE5lZ1osXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHRpbmVydGlhWm9vbTogMTAwMCxcXG5cXHRcXHRcXHRcXHRzcGVlZFpvb206IDAuOCxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XFxuXFx0cmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcXFwiMFxcXCIpO1xcbn1cXG5cXG5hc3luYyBmdW5jdGlvbiBsb2FkR0xCKFxcblxcdHg6IG51bWJlcixcXG5cXHR5OiBudW1iZXIsXFxuXFx0ejogbnVtYmVyLFxcblxcdGxldmVsOiBudW1iZXIsXFxuKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xcblxcdGNvbnN0IHVybCA9XFxuXFx0XFx0bGV2ZWwgPT09IDBcXG5cXHRcXHRcXHQ/IFxcXCIuL2Fzc2V0cy9sb2QvT2N0cmVlLmdsYlxcXCJcXG5cXHRcXHRcXHQ6IGAuL2Fzc2V0cy9sb2QvT2N0cmVlJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9LmdsYmA7XFxuXFx0Y29uc29sZS5sb2coXFxcIkxvYWRpbmcgTE9EIGJsb2NrOlxcXCIsIHVybCk7XFxuXFx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybCk7XFxuXFx0cmV0dXJuIGFzc2V0O1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjMsXG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdHR5cGUgVGdkRGF0YUdsYixcblx0VGdkTWF0ZXJpYWxHbG9iYWwsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckRlYnVnUG9pbnQsXG5cdFRnZFBhaW50ZXJHcm91cCxcblx0VGdkUGFpbnRlckxPRCxcblx0VGdkUGFpbnRlckxvZ2ljLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZUN1YmUsXG5cdHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxuXHR0Z2RMb2FkR2xiLFxuXHR3ZWJnbFByZXNldEN1bGwsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCI7XG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCI7XG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCI7XG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCI7XG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCI7XG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcbmltcG9ydCB7IFdpcmVDdWJlIH0gZnJvbSBcIi4vd2lyZS1jdWJlXCI7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTQ7XG5cdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yO1xuXHRjb250ZXh0LmNhbWVyYS5mYXIgPSAyMDtcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXTtcblx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcblx0XHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxuXHRcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG5cdFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcblx0XHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxuXHRcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG5cdFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcblx0fSk7XG5cdGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XG5cdFx0c3RlcHM6IDgsXG5cdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpO1xuXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxuXHRcdChsZXZlbCkgPT5cblx0XHRcdG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG5cdFx0XHRcdGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxuXHRcdFx0XHRhbWJpZW50Q29sb3I6IHNreWJveCxcblx0XHRcdH0pLFxuXHQpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pO1xuXHRjb25zdCBiYm94OiB7XG5cdFx0bWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+O1xuXHRcdG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPjtcblx0fSA9IHtcblx0XHRtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcblx0XHRtYXg6IFsxLjMxMiwgMS4yMjY1LCAxLjU2M10sXG5cdH07XG5cdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcblx0XHRiYm94LFxuXHRcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuXHRcdFx0Y29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbCk7XG5cdFx0XHRpZiAoIWFzc2V0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdFx0XHRhc3NldCxcblx0XHRcdFx0bWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHN1YmRpdmlzaW9uczogMSxcblx0XHQvLyBzdWJkaXZpc2lvbnM6IDMsXG5cdFx0Ly8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxuXHR9KTtcblx0Y29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xuXHRcdGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpO1xuXHRcdGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXTtcblx0XHRwb2ludC5jb2xvci54ID0gUjtcblx0XHRwb2ludC5jb2xvci55ID0gRztcblx0XHRwb2ludC5jb2xvci56ID0gQjtcblx0XHRwb2ludC5jb2xvci53ID0gQTtcblx0XHRyZXR1cm4gcG9pbnQ7XG5cdH0pO1xuXHRjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKTtcblx0Y29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dCk7XG5cdGdyb3VwLmFkZCh3aXJlQ3ViZSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdGNsZWFyLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0Y2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHQvLyBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXG5cdFx0XHQvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXG5cdFx0XHQvLyBcdE1hdGguc2luKHRpbWUpICogMzAsXG5cdFx0XHQvLyBcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcblx0XHRcdC8vIFx0MCxcblx0XHRcdC8vIClcblx0XHRcdGNvbnN0IGJib3ggPSB7XG5cdFx0XHRcdG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxuXHRcdFx0XHRtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pbjtcblx0XHRcdGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4O1xuXHRcdFx0Y29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXG5cdFx0XHRcdFt4MCwgeTAsIHowXSxcblx0XHRcdFx0W3gwLCB5MSwgejBdLFxuXHRcdFx0XHRbeDEsIHkwLCB6MF0sXG5cdFx0XHRcdFt4MSwgeTEsIHowXSxcblx0XHRcdFx0W3gwLCB5MCwgejFdLFxuXHRcdFx0XHRbeDAsIHkxLCB6MV0sXG5cdFx0XHRcdFt4MSwgeTAsIHoxXSxcblx0XHRcdFx0W3gxLCB5MSwgejFdLFxuXHRcdFx0XTtcblx0XHRcdGxldCBwdHIgPSAwO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0XHRcdFx0Y29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSk7XG5cdFx0XHRcdGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV07XG5cdFx0XHRcdHBhaW50ZXIueCA9IHg7XG5cdFx0XHRcdHBhaW50ZXIueSA9IHk7XG5cdFx0XHRcdHBhaW50ZXIueiA9IHo7XG5cdFx0XHRcdHBhaW50ZXIudyA9IHc7XG5cdFx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmU7XG5cdFx0XHRcdGRhdGFbcHRyKytdID0geDtcblx0XHRcdFx0ZGF0YVtwdHIrK10gPSB5O1xuXHRcdFx0XHRkYXRhW3B0cisrXSA9IHo7XG5cdFx0XHRcdGRhdGFbcHRyKytdID0gdztcblx0XHRcdH1cblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG5cdFx0aWYgKGV2dC5rZXkgPT09IFwiZFwiKSB7XG5cdFx0XHRsb2QuZGVidWcoKTtcblx0XHR9XG5cdH0pO1xuXHRjb250ZXh0LnBhaW50KCk7XG59XG4vLyAjZW5kXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRwb3NYOiBQb3NYLFxuXHRcdFx0XHRcdHBvc1k6IFBvc1ksXG5cdFx0XHRcdFx0cG9zWjogUG9zWixcblx0XHRcdFx0XHRuZWdYOiBOZWdYLFxuXHRcdFx0XHRcdG5lZ1k6IE5lZ1ksXG5cdFx0XHRcdFx0bmVnWjogTmVnWixcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0XHRnaXptb1xuXHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHRcdGluZXJ0aWFab29tOiAxMDAwLFxuXHRcdFx0XHRzcGVlZFpvb206IDAuOCxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gdG9CaW4odmFsdWU6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IHN0cmluZyB7XG5cdHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkR0xCKFxuXHR4OiBudW1iZXIsXG5cdHk6IG51bWJlcixcblx0ejogbnVtYmVyLFxuXHRsZXZlbDogbnVtYmVyLFxuKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xuXHRjb25zdCB1cmwgPVxuXHRcdGxldmVsID09PSAwXG5cdFx0XHQ/IFwiLi9hc3NldHMvbG9kL09jdHJlZS5nbGJcIlxuXHRcdFx0OiBgLi9hc3NldHMvbG9kL09jdHJlZSR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfS5nbGJgO1xuXHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpO1xuXHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKTtcblx0cmV0dXJuIGFzc2V0O1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyLFxuXHRUZ2RQcm9ncmFtLFxuXHRUZ2RTaGFkZXJGcmFnbWVudCxcblx0VGdkU2hhZGVyVmVydGV4LFxuXHRUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmNvbnN0IEVQU0lMT04gPSAxZS0xOyAvLyAxZS0zXG5jb25zdCBYMCA9IC0xICsgRVBTSUxPTjtcbmNvbnN0IFgxID0gKzEgLSBFUFNJTE9OO1xuY29uc3QgWTAgPSAtMSArIEVQU0lMT047XG5jb25zdCBZMSA9ICsxIC0gRVBTSUxPTjtcbmNvbnN0IFowID0gMCArIEVQU0lMT047XG5jb25zdCBaMSA9ICsxIC0gRVBTSUxPTjtcblxuZXhwb3J0IGNsYXNzIFdpcmVDdWJlIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRwdWJsaWMgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuXHRcdFgwLFxuXHRcdFkwLFxuXHRcdFowLFxuXHRcdDEsIC8vIDBcblx0XHRYMCxcblx0XHRZMSxcblx0XHRaMCxcblx0XHQxLCAvLyAxXG5cdFx0WDEsXG5cdFx0WTAsXG5cdFx0WjAsXG5cdFx0MSwgLy8gMlxuXHRcdFgxLFxuXHRcdFkxLFxuXHRcdFowLFxuXHRcdDEsIC8vIDNcblx0XHRYMCxcblx0XHRZMCxcblx0XHRaMSxcblx0XHQxLCAvLyA0XG5cdFx0WDAsXG5cdFx0WTEsXG5cdFx0WjEsXG5cdFx0MSwgLy8gNVxuXHRcdFgxLFxuXHRcdFkwLFxuXHRcdFoxLFxuXHRcdDEsIC8vIDZcblx0XHRYMSxcblx0XHRZMSxcblx0XHRaMSxcblx0XHQxLCAvLyA3XG5cdF0pO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdGNvbnN0IHByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcblx0XHRcdHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuXHRcdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdFx0YXR0UG9zaXRpb246IFwidmVjNFwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSBhdHRQb3NpdGlvbjtcIl0sXG5cdFx0XHR9KS5jb2RlLFxuXHRcdFx0ZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0b3V0cHV0czoge1xuXHRcdFx0XHRcdEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG1haW5Db2RlOiBcIkZyYWdDb2xvciA9IHZlYzQoMSwgMSwgMSwgMC41KTtcIixcblx0XHRcdH0pLmNvZGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5wcmcgPSBwcmc7XG5cdFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KFxuXHRcdFx0e1xuXHRcdFx0XHRhdHRQb3NpdGlvbjogXCJ2ZWM0XCIsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR1c2FnZTogXCJEWU5BTUlDX0RSQVdcIixcblx0XHRcdH0sXG5cdFx0KTtcblx0XHRkYXRhc2V0LmNvdW50ID0gODtcblx0XHR0aGlzLmRhdGFzZXQgPSBkYXRhc2V0O1xuXHRcdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdGNvbnN0IGVsZW1lbnRzID0gbmV3IFVpbnQ4QXJyYXkoW1xuXHRcdFx0MCwgMSwgMCwgMiwgMCwgNCwgMSwgMywgMSwgNSwgMiwgMywgMiwgNiwgMywgNywgNCwgNSwgNCwgNiwgNSwgNywgNiwgNyxcblx0XHRdKTtcblx0XHRjb25zdCB2YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgcHJnLCBbZGF0YXNldF0sIGVsZW1lbnRzKTtcblx0XHR0aGlzLnZhbyA9IHZhbztcblx0XHRwcmcuZGVidWcoKTtcblx0fVxuXG5cdGRlbGV0ZSgpIHtcblx0XHR0aGlzLnByZy5kZWxldGUoKTtcblx0XHR0aGlzLnZhby5kZWxldGUoKTtcblx0fVxuXG5cdHBhaW50KCkge1xuXHRcdGNvbnN0IHsgY29udGV4dCwgZGF0YSwgcHJnLCB2YW8sIGRhdGFzZXQgfSA9IHRoaXM7XG5cdFx0cHJnLnVzZSgpO1xuXHRcdGNvbnN0IHsgZ2wgfSA9IGNvbnRleHQ7XG5cdFx0ZGF0YXNldC5kYXRhID0gZGF0YS5idWZmZXI7XG5cdFx0dmFvLnVwZGF0ZURhdGFzZXQoZGF0YXNldCk7XG5cdFx0dmFvLmJpbmQoKTtcblx0XHRnbC5kcmF3RWxlbWVudHMoZ2wuTElORVMsIDI0LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcblx0XHR2YW8udW5iaW5kKCk7XG5cdH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkTWF0ZXJpYWxHbG9iYWwiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRGVidWdQb2ludCIsIlRnZFBhaW50ZXJHcm91cCIsIlRnZFBhaW50ZXJMT0QiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlQ3ViZSIsInRnZENvbG9yTWFrZUh1ZVdoZWVsIiwidGdkTG9hZEdsYiIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJWaWV3IiwiV2lyZUN1YmUiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNvbG9yIiwic2t5Ym94IiwiQ09MT1JTIiwibWF0ZXJpYWxzIiwibGV2ZWwiLCJjbGVhciIsImJib3giLCJsb2QiLCJmYWN0b3J5IiwieCIsInkiLCJ6IiwiYXNzZXQiLCJsb2FkR0xCIiwicG9pbnRzIiwiaSIsInBvaW50IiwiX0NPTE9SU19pIiwiUiIsIkciLCJCIiwiQSIsImdyb3VwIiwid2lyZUN1YmUiLCJ0aW1lIiwiX2Jib3hfbWluIiwieDAiLCJ5MCIsInowIiwiX2Jib3hfbWF4IiwieDEiLCJ5MSIsInoxIiwiY29ybmVycyIsInB0ciIsIl9jb250ZXh0X2NhbWVyYV9hcHBseSIsInciLCJwYWludGVyIiwiZGF0YSIsImV2dCIsInRvQmluIiwidmFsdWUiLCJ1cmwiLCJjb25zb2xlIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RWZXJ0ZXhBcnJheSIsIkVQU0lMT04iLCJYMCIsIlgxIiwiWTAiLCJZMSIsIlowIiwiWjEiLCJGbG9hdDMyQXJyYXkiLCJwcmciLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJVaW50OEFycmF5IiwidmFvIiwiX2RlbGV0ZSIsInBhaW50IiwiX3RoaXMiLCJnbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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