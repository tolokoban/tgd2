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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/_/main.demo/main.demo.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (second demo)"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1mZWM2MGUuMmZmZTU0Y2VhNTEwMjYxNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxNDtcXG5cXHRjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMjtcXG5cXHRjb250ZXh0LmNhbWVyYS5mYXIgPSAyMDtcXG5cXHRjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC41LCAwLjEsIDFdO1xcblxcdGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuXFx0XFx0aW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG5cXHRcXHRpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcblxcdFxcdGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuXFx0XFx0aW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG5cXHRcXHRpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcblxcdFxcdGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuXFx0fSk7XFxuXFx0Y29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG5cXHRcXHRzdGVwczogOCxcXG5cXHR9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KTtcXG5cXHRjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChsZXZlbCkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcblxcdFxcdFxcdFxcdGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcblxcdFxcdFxcdFxcdGFtYmllbnRDb2xvcjogc2t5Ym94LFxcblxcdFxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KTtcXG5cXHRjb25zdCBiYm94OiB7XFxuXFx0XFx0bWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+O1xcblxcdFxcdG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPjtcXG5cXHR9ID0ge1xcblxcdFxcdG1pbjogWy0xLjMxMTk1LCAtMS4zOTc0NywgLTEuMDYwOTNdLFxcblxcdFxcdG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcXG5cXHR9O1xcblxcdGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG5cXHRcXHRiYm94LFxcblxcdFxcdGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpO1xcblxcdFxcdFxcdGlmICghYXNzZXQpIHJldHVybiBudWxsO1xcblxcblxcdFxcdFxcdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRhc3NldCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcXG5cXHRcXHRcXHR9KTtcXG5cXHRcXHR9LFxcblxcdFxcdHN1YmRpdmlzaW9uczogMSxcXG5cXHRcXHQvLyBzdWJkaXZpc2lvbnM6IDMsXFxuXFx0XFx0Ly8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxcblxcdH0pO1xcblxcdGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcXG5cXHRcXHRjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KTtcXG5cXHRcXHRjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV07XFxuXFx0XFx0cG9pbnQuY29sb3IueCA9IFI7XFxuXFx0XFx0cG9pbnQuY29sb3IueSA9IEc7XFxuXFx0XFx0cG9pbnQuY29sb3IueiA9IEI7XFxuXFx0XFx0cG9pbnQuY29sb3IudyA9IEE7XFxuXFx0XFx0cmV0dXJuIHBvaW50O1xcblxcdH0pO1xcblxcdGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChwb2ludHMpO1xcblxcdGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpO1xcblxcdGdyb3VwLmFkZCh3aXJlQ3ViZSk7XFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0Y2xlYXIsXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcXG5cXHRcXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdFxcdGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG5cXHRcXHRcXHQvLyBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXFxuXFx0XFx0XFx0Ly8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxcblxcdFxcdFxcdC8vIFxcdE1hdGguc2luKHRpbWUpICogMzAsXFxuXFx0XFx0XFx0Ly8gXFx0TWF0aC5zaW4odGltZSAqIDEuMTgyKSAqIDQwLFxcblxcdFxcdFxcdC8vIFxcdDAsXFxuXFx0XFx0XFx0Ly8gKVxcblxcdFxcdFxcdGNvbnN0IGJib3ggPSB7XFxuXFx0XFx0XFx0XFx0bWluOiBbMC4wMDAwMjUwMDAwMDAwMDAwNTI3NTgsIC0xLjM5NzQ3LCAwLjI1MTAzNV0sXFxuXFx0XFx0XFx0XFx0bWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXFxuXFx0XFx0XFx0fTtcXG5cXHRcXHRcXHRjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pbjtcXG5cXHRcXHRcXHRjb25zdCBbeDEsIHkxLCB6MV0gPSBiYm94Lm1heDtcXG5cXHRcXHRcXHRjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcXG5cXHRcXHRcXHRcXHRbeDAsIHkwLCB6MF0sXFxuXFx0XFx0XFx0XFx0W3gwLCB5MSwgejBdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTAsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDEsIHkxLCB6MF0sXFxuXFx0XFx0XFx0XFx0W3gwLCB5MCwgejFdLFxcblxcdFxcdFxcdFxcdFt4MCwgeTEsIHoxXSxcXG5cXHRcXHRcXHRcXHRbeDEsIHkwLCB6MV0sXFxuXFx0XFx0XFx0XFx0W3gxLCB5MSwgejFdLFxcblxcdFxcdFxcdF07XFxuXFx0XFx0XFx0bGV0IHB0ciA9IDA7XFxuXFx0XFx0XFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcXG5cXHRcXHRcXHRcXHRjb25zdCBbeCwgeSwgeiwgd10gPSBjb250ZXh0LmNhbWVyYS5hcHBseShjb3JuZXJzW2ldKTtcXG5cXHRcXHRcXHRcXHRjb25zdCBwYWludGVyID0gcG9pbnRzW2ldO1xcblxcdFxcdFxcdFxcdHBhaW50ZXIueCA9IHg7XFxuXFx0XFx0XFx0XFx0cGFpbnRlci55ID0geTtcXG5cXHRcXHRcXHRcXHRwYWludGVyLnogPSB6O1xcblxcdFxcdFxcdFxcdHBhaW50ZXIudyA9IHc7XFxuXFx0XFx0XFx0XFx0Y29uc3QgeyBkYXRhIH0gPSB3aXJlQ3ViZTtcXG5cXHRcXHRcXHRcXHRkYXRhW3B0cisrXSA9IHg7XFxuXFx0XFx0XFx0XFx0ZGF0YVtwdHIrK10gPSB5O1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0gejtcXG5cXHRcXHRcXHRcXHRkYXRhW3B0cisrXSA9IHc7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0pLFxcblxcdCk7XFxuXFx0Y29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuXFx0XFx0aWYgKGV2dC5rZXkgPT09IFxcXCJkXFxcIikge1xcblxcdFxcdFxcdGxvZC5kZWJ1ZygpO1xcblxcdFxcdH1cXG5cXHR9KTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyMyxcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0dHlwZSBUZ2REYXRhR2xiLFxcblxcdFRnZE1hdGVyaWFsR2xvYmFsLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyRGVidWdQb2ludCxcXG5cXHRUZ2RQYWludGVyR3JvdXAsXFxuXFx0VGdkUGFpbnRlckxPRCxcXG5cXHRUZ2RQYWludGVyTG9naWMsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlQ3ViZSxcXG5cXHR0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG5cXHR0Z2RMb2FkR2xiLFxcblxcdHdlYmdsUHJlc2V0Q3VsbCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCI7XFxuaW1wb3J0IE5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXFxcIjtcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiO1xcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCI7XFxuaW1wb3J0IFBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXFxcIjtcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiO1xcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXFxcIi4vd2lyZS1jdWJlXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuXFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0O1xcblxcdGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yO1xcblxcdGNvbnRleHQuY2FtZXJhLmZhciA9IDIwO1xcblxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV07XFxuXFx0Y29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG5cXHRcXHRpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcblxcdFxcdGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuXFx0XFx0aW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG5cXHRcXHRpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcblxcdFxcdGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuXFx0XFx0aW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG5cXHR9KTtcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA4LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpO1xcblxcdGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuXFx0XFx0KGxldmVsKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tsZXZlbF0sXFxuXFx0XFx0XFx0XFx0YW1iaWVudENvbG9yOiBza3lib3gsXFxuXFx0XFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pO1xcblxcdGNvbnN0IGJib3g6IHtcXG5cXHRcXHRtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz47XFxuXFx0XFx0bWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+O1xcblxcdH0gPSB7XFxuXFx0XFx0bWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXFxuXFx0XFx0bWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxcblxcdH07XFxuXFx0Y29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcblxcdFxcdGJib3gsXFxuXFx0XFx0YXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuXFx0XFx0XFx0Y29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbCk7XFxuXFx0XFx0XFx0aWYgKCFhc3NldCkgcmV0dXJuIG51bGw7XFxuXFxuXFx0XFx0XFx0cmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0LFxcblxcdFxcdFxcdFxcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcblxcdFxcdFxcdH0pO1xcblxcdFxcdH0sXFxuXFx0XFx0c3ViZGl2aXNpb25zOiAxLFxcblxcdFxcdC8vIHN1YmRpdmlzaW9uczogMyxcXG5cXHRcXHQvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXFxuXFx0fSk7XFxuXFx0Y29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xcblxcdFxcdGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpO1xcblxcdFxcdGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXTtcXG5cXHRcXHRwb2ludC5jb2xvci54ID0gUjtcXG5cXHRcXHRwb2ludC5jb2xvci55ID0gRztcXG5cXHRcXHRwb2ludC5jb2xvci56ID0gQjtcXG5cXHRcXHRwb2ludC5jb2xvci53ID0gQTtcXG5cXHRcXHRyZXR1cm4gcG9pbnQ7XFxuXFx0fSk7XFxuXFx0Y29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cyk7XFxuXFx0Y29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dCk7XFxuXFx0Z3JvdXAuYWRkKHdpcmVDdWJlKTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuXFx0XFx0fSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcblxcdFxcdFxcdC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcXG5cXHRcXHRcXHQvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXFxuXFx0XFx0XFx0Ly8gXFx0TWF0aC5zaW4odGltZSkgKiAzMCxcXG5cXHRcXHRcXHQvLyBcXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXFxuXFx0XFx0XFx0Ly8gXFx0MCxcXG5cXHRcXHRcXHQvLyApXFxuXFx0XFx0XFx0Y29uc3QgYmJveCA9IHtcXG5cXHRcXHRcXHRcXHRtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcXG5cXHRcXHRcXHRcXHRtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcXG5cXHRcXHRcXHR9O1xcblxcdFxcdFxcdGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluO1xcblxcdFxcdFxcdGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4O1xcblxcdFxcdFxcdGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xcblxcdFxcdFxcdFxcdFt4MCwgeTAsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDAsIHkxLCB6MF0sXFxuXFx0XFx0XFx0XFx0W3gxLCB5MCwgejBdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTEsIHowXSxcXG5cXHRcXHRcXHRcXHRbeDAsIHkwLCB6MV0sXFxuXFx0XFx0XFx0XFx0W3gwLCB5MSwgejFdLFxcblxcdFxcdFxcdFxcdFt4MSwgeTAsIHoxXSxcXG5cXHRcXHRcXHRcXHRbeDEsIHkxLCB6MV0sXFxuXFx0XFx0XFx0XTtcXG5cXHRcXHRcXHRsZXQgcHRyID0gMDtcXG5cXHRcXHRcXHRmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xcblxcdFxcdFxcdFxcdGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pO1xcblxcdFxcdFxcdFxcdGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV07XFxuXFx0XFx0XFx0XFx0cGFpbnRlci54ID0geDtcXG5cXHRcXHRcXHRcXHRwYWludGVyLnkgPSB5O1xcblxcdFxcdFxcdFxcdHBhaW50ZXIueiA9IHo7XFxuXFx0XFx0XFx0XFx0cGFpbnRlci53ID0gdztcXG5cXHRcXHRcXHRcXHRjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlO1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0geDtcXG5cXHRcXHRcXHRcXHRkYXRhW3B0cisrXSA9IHk7XFxuXFx0XFx0XFx0XFx0ZGF0YVtwdHIrK10gPSB6O1xcblxcdFxcdFxcdFxcdGRhdGFbcHRyKytdID0gdztcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSksXFxuXFx0KTtcXG5cXHRjb250ZXh0LmlucHV0cy5rZXlib2FyZC5ldmVudEtleVByZXNzLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG5cXHRcXHRpZiAoZXZ0LmtleSA9PT0gXFxcImRcXFwiKSB7XFxuXFx0XFx0XFx0bG9kLmRlYnVnKCk7XFxuXFx0XFx0fVxcblxcdH0pO1xcblxcdGNvbnRleHQucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0b25SZWFkeT17aW5pdH1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRpbWFnZToge1xcblxcdFxcdFxcdFxcdFxcdHBvc1g6IFBvc1gsXFxuXFx0XFx0XFx0XFx0XFx0cG9zWTogUG9zWSxcXG5cXHRcXHRcXHRcXHRcXHRwb3NaOiBQb3NaLFxcblxcdFxcdFxcdFxcdFxcdG5lZ1g6IE5lZ1gsXFxuXFx0XFx0XFx0XFx0XFx0bmVnWTogTmVnWSxcXG5cXHRcXHRcXHRcXHRcXHRuZWdaOiBOZWdaLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRnaXptb1xcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3tcXG5cXHRcXHRcXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0XFx0XFx0XFx0aW5lcnRpYVpvb206IDEwMDAsXFxuXFx0XFx0XFx0XFx0c3BlZWRab29tOiAwLjgsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcblxcdHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXFxcIjBcXFwiKTtcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQihcXG5cXHR4OiBudW1iZXIsXFxuXFx0eTogbnVtYmVyLFxcblxcdHo6IG51bWJlcixcXG5cXHRsZXZlbDogbnVtYmVyLFxcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcXG5cXHRjb25zdCB1cmwgPVxcblxcdFxcdGxldmVsID09PSAwXFxuXFx0XFx0XFx0PyBcXFwiLi9hc3NldHMvbG9kL09jdHJlZS5nbGJcXFwiXFxuXFx0XFx0XFx0OiBgLi9hc3NldHMvbG9kL09jdHJlZSR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfS5nbGJgO1xcblxcdGNvbnNvbGUubG9nKFxcXCJMb2FkaW5nIExPRCBibG9jazpcXFwiLCB1cmwpO1xcblxcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpO1xcblxcdHJldHVybiBhc3NldDtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXIzLFxuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHR0eXBlIFRnZERhdGFHbGIsXG5cdFRnZE1hdGVyaWFsR2xvYmFsLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJEZWJ1Z1BvaW50LFxuXHRUZ2RQYWludGVyR3JvdXAsXG5cdFRnZFBhaW50ZXJMT0QsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmVDdWJlLFxuXHR0Z2RDb2xvck1ha2VIdWVXaGVlbCxcblx0dGdkTG9hZEdsYixcblx0d2ViZ2xQcmVzZXRDdWxsLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFwiO1xuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiO1xuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiO1xuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFwiO1xuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiO1xuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXCIuL3dpcmUtY3ViZVwiO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0O1xuXHRjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMjtcblx0Y29udGV4dC5jYW1lcmEuZmFyID0gMjA7XG5cdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV07XG5cdGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG5cdFx0aW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcblx0XHRpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxuXHRcdGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG5cdFx0aW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcblx0XHRpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxuXHRcdGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG5cdH0pO1xuXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xuXHRcdHN0ZXBzOiA4LFxuXHR9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KTtcblx0Y29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcblx0XHQobGV2ZWwpID0+XG5cdFx0XHRuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xuXHRcdFx0XHRjb2xvcjogQ09MT1JTW2xldmVsXSxcblx0XHRcdFx0YW1iaWVudENvbG9yOiBza3lib3gsXG5cdFx0XHR9KSxcblx0KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KTtcblx0Y29uc3QgYmJveDoge1xuXHRcdG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPjtcblx0XHRtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz47XG5cdH0gPSB7XG5cdFx0bWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXG5cdFx0bWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxuXHR9O1xuXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG5cdFx0YmJveCxcblx0XHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcblx0XHRcdGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpO1xuXHRcdFx0aWYgKCFhc3NldCkgcmV0dXJuIG51bGw7XG5cblx0XHRcdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcblx0XHRcdFx0YXNzZXQsXG5cdFx0XHRcdG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRzdWJkaXZpc2lvbnM6IDEsXG5cdFx0Ly8gc3ViZGl2aXNpb25zOiAzLFxuXHRcdC8vIHN1cmZhY2VUaHJlc2hvbGQ6IDAuOCxcblx0fSk7XG5cdGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcblx0XHRjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KTtcblx0XHRjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV07XG5cdFx0cG9pbnQuY29sb3IueCA9IFI7XG5cdFx0cG9pbnQuY29sb3IueSA9IEc7XG5cdFx0cG9pbnQuY29sb3IueiA9IEI7XG5cdFx0cG9pbnQuY29sb3IudyA9IEE7XG5cdFx0cmV0dXJuIHBvaW50O1xuXHR9KTtcblx0Y29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cyk7XG5cdGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpO1xuXHRncm91cC5hZGQod2lyZUN1YmUpO1xuXHRjb250ZXh0LmFkZChcblx0XHRjbGVhcixcblx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuXHRcdFx0Ly8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxuXHRcdFx0Ly8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxuXHRcdFx0Ly8gXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxuXHRcdFx0Ly8gXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXG5cdFx0XHQvLyBcdDAsXG5cdFx0XHQvLyApXG5cdFx0XHRjb25zdCBiYm94ID0ge1xuXHRcdFx0XHRtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcblx0XHRcdFx0bWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW47XG5cdFx0XHRjb25zdCBbeDEsIHkxLCB6MV0gPSBiYm94Lm1heDtcblx0XHRcdGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xuXHRcdFx0XHRbeDAsIHkwLCB6MF0sXG5cdFx0XHRcdFt4MCwgeTEsIHowXSxcblx0XHRcdFx0W3gxLCB5MCwgejBdLFxuXHRcdFx0XHRbeDEsIHkxLCB6MF0sXG5cdFx0XHRcdFt4MCwgeTAsIHoxXSxcblx0XHRcdFx0W3gwLCB5MSwgejFdLFxuXHRcdFx0XHRbeDEsIHkwLCB6MV0sXG5cdFx0XHRcdFt4MSwgeTEsIHoxXSxcblx0XHRcdF07XG5cdFx0XHRsZXQgcHRyID0gMDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pO1xuXHRcdFx0XHRjb25zdCBwYWludGVyID0gcG9pbnRzW2ldO1xuXHRcdFx0XHRwYWludGVyLnggPSB4O1xuXHRcdFx0XHRwYWludGVyLnkgPSB5O1xuXHRcdFx0XHRwYWludGVyLnogPSB6O1xuXHRcdFx0XHRwYWludGVyLncgPSB3O1xuXHRcdFx0XHRjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlO1xuXHRcdFx0XHRkYXRhW3B0cisrXSA9IHg7XG5cdFx0XHRcdGRhdGFbcHRyKytdID0geTtcblx0XHRcdFx0ZGF0YVtwdHIrK10gPSB6O1xuXHRcdFx0XHRkYXRhW3B0cisrXSA9IHc7XG5cdFx0XHR9XG5cdFx0fSksXG5cdCk7XG5cdGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuXHRcdGlmIChldnQua2V5ID09PSBcImRcIikge1xuXHRcdFx0bG9kLmRlYnVnKCk7XG5cdFx0fVxuXHR9KTtcblx0Y29udGV4dC5wYWludCgpO1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0cG9zWDogUG9zWCxcblx0XHRcdFx0XHRwb3NZOiBQb3NZLFxuXHRcdFx0XHRcdHBvc1o6IFBvc1osXG5cdFx0XHRcdFx0bmVnWDogTmVnWCxcblx0XHRcdFx0XHRuZWdZOiBOZWdZLFxuXHRcdFx0XHRcdG5lZ1o6IE5lZ1osXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0Z2l6bW9cblx0XHRcdGNvbnRyb2xsZXI9e3tcblx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRpbmVydGlhWm9vbTogMTAwMCxcblx0XHRcdFx0c3BlZWRab29tOiAwLjgsXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuXHRyZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFwiMFwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQihcblx0eDogbnVtYmVyLFxuXHR5OiBudW1iZXIsXG5cdHo6IG51bWJlcixcblx0bGV2ZWw6IG51bWJlcixcbik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcblx0Y29uc3QgdXJsID1cblx0XHRsZXZlbCA9PT0gMFxuXHRcdFx0PyBcIi4vYXNzZXRzL2xvZC9PY3RyZWUuZ2xiXCJcblx0XHRcdDogYC4vYXNzZXRzL2xvZC9PY3RyZWUke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX0uZ2xiYDtcblx0Y29uc29sZS5sb2coXCJMb2FkaW5nIExPRCBibG9jazpcIiwgdXJsKTtcblx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybCk7XG5cdHJldHVybiBhc3NldDtcbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlcixcblx0VGdkUHJvZ3JhbSxcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG5cdFRnZFNoYWRlclZlcnRleCxcblx0VGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5jb25zdCBFUFNJTE9OID0gMWUtMTsgLy8gMWUtM1xuY29uc3QgWDAgPSAtMSArIEVQU0lMT047XG5jb25zdCBYMSA9ICsxIC0gRVBTSUxPTjtcbmNvbnN0IFkwID0gLTEgKyBFUFNJTE9OO1xuY29uc3QgWTEgPSArMSAtIEVQU0lMT047XG5jb25zdCBaMCA9IDAgKyBFUFNJTE9OO1xuY29uc3QgWjEgPSArMSAtIEVQU0lMT047XG5cbmV4cG9ydCBjbGFzcyBXaXJlQ3ViZSBleHRlbmRzIFRnZFBhaW50ZXIge1xuXHQvLyBwcmV0dGllci1pZ25vcmVcblx0cHVibGljIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KFtcblx0XHRYMCxcblx0XHRZMCxcblx0XHRaMCxcblx0XHQxLCAvLyAwXG5cdFx0WDAsXG5cdFx0WTEsXG5cdFx0WjAsXG5cdFx0MSwgLy8gMVxuXHRcdFgxLFxuXHRcdFkwLFxuXHRcdFowLFxuXHRcdDEsIC8vIDJcblx0XHRYMSxcblx0XHRZMSxcblx0XHRaMCxcblx0XHQxLCAvLyAzXG5cdFx0WDAsXG5cdFx0WTAsXG5cdFx0WjEsXG5cdFx0MSwgLy8gNFxuXHRcdFgwLFxuXHRcdFkxLFxuXHRcdFoxLFxuXHRcdDEsIC8vIDVcblx0XHRYMSxcblx0XHRZMCxcblx0XHRaMSxcblx0XHQxLCAvLyA2XG5cdFx0WDEsXG5cdFx0WTEsXG5cdFx0WjEsXG5cdFx0MSwgLy8gN1xuXHRdKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbTtcblx0cHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0O1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHRjb25zdCBwcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG5cdFx0XHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRcdGF0dFBvc2l0aW9uOiBcInZlYzRcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0bWFpbkNvZGU6IFtcImdsX1Bvc2l0aW9uID0gYXR0UG9zaXRpb247XCJdLFxuXHRcdFx0fSkuY29kZSxcblx0XHRcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHRcdG91dHB1dHM6IHtcblx0XHRcdFx0XHRGcmFnQ29sb3I6IFwidmVjNFwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRtYWluQ29kZTogXCJGcmFnQ29sb3IgPSB2ZWM0KDEsIDEsIDEsIDAuNSk7XCIsXG5cdFx0XHR9KS5jb2RlLFxuXHRcdH0pO1xuXHRcdHRoaXMucHJnID0gcHJnO1xuXHRcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldChcblx0XHRcdHtcblx0XHRcdFx0YXR0UG9zaXRpb246IFwidmVjNFwiLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dXNhZ2U6IFwiRFlOQU1JQ19EUkFXXCIsXG5cdFx0XHR9LFxuXHRcdCk7XG5cdFx0ZGF0YXNldC5jb3VudCA9IDg7XG5cdFx0dGhpcy5kYXRhc2V0ID0gZGF0YXNldDtcblx0XHQvLyBwcmV0dGllci1pZ25vcmVcblx0XHRjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KFtcblx0XHRcdDAsIDEsIDAsIDIsIDAsIDQsIDEsIDMsIDEsIDUsIDIsIDMsIDIsIDYsIDMsIDcsIDQsIDUsIDQsIDYsIDUsIDcsIDYsIDcsXG5cdFx0XSk7XG5cdFx0Y29uc3QgdmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHByZywgW2RhdGFzZXRdLCBlbGVtZW50cyk7XG5cdFx0dGhpcy52YW8gPSB2YW87XG5cdFx0cHJnLmRlYnVnKCk7XG5cdH1cblxuXHRkZWxldGUoKSB7XG5cdFx0dGhpcy5wcmcuZGVsZXRlKCk7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCgpIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIGRhdGEsIHByZywgdmFvLCBkYXRhc2V0IH0gPSB0aGlzO1xuXHRcdHByZy51c2UoKTtcblx0XHRjb25zdCB7IGdsIH0gPSBjb250ZXh0O1xuXHRcdGRhdGFzZXQuZGF0YSA9IGRhdGEuYnVmZmVyO1xuXHRcdHZhby51cGRhdGVEYXRhc2V0KGRhdGFzZXQpO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCAyNCwgZ2wuVU5TSUdORURfQllURSwgMCk7XG5cdFx0dmFvLnVuYmluZCgpO1xuXHR9XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZE1hdGVyaWFsR2xvYmFsIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckRlYnVnUG9pbnQiLCJUZ2RQYWludGVyR3JvdXAiLCJUZ2RQYWludGVyTE9EIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZUN1YmUiLCJ0Z2RDb2xvck1ha2VIdWVXaGVlbCIsInRnZExvYWRHbGIiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiTmVnWCIsIk5lZ1kiLCJOZWdaIiwiUG9zWCIsIlBvc1kiLCJQb3NaIiwiVmlldyIsIldpcmVDdWJlIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjb2xvciIsInNreWJveCIsIkNPTE9SUyIsIm1hdGVyaWFscyIsImxldmVsIiwiY2xlYXIiLCJiYm94IiwibG9kIiwiZmFjdG9yeSIsIngiLCJ5IiwieiIsImFzc2V0IiwibG9hZEdMQiIsInBvaW50cyIsImkiLCJwb2ludCIsIl9DT0xPUlNfaSIsIlIiLCJHIiwiQiIsIkEiLCJncm91cCIsIndpcmVDdWJlIiwidGltZSIsIl9iYm94X21pbiIsIngwIiwieTAiLCJ6MCIsIl9iYm94X21heCIsIngxIiwieTEiLCJ6MSIsImNvcm5lcnMiLCJwdHIiLCJfY29udGV4dF9jYW1lcmFfYXBwbHkiLCJ3IiwicGFpbnRlciIsImRhdGEiLCJldnQiLCJ0b0JpbiIsInZhbHVlIiwidXJsIiwiY29uc29sZSIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyIiwiVGdkUHJvZ3JhbSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVmVydGV4QXJyYXkiLCJFUFNJTE9OIiwiWDAiLCJYMSIsIlkwIiwiWTEiLCJaMCIsIloxIiwiRmxvYXQzMkFycmF5IiwicHJnIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiVWludDhBcnJheSIsInZhbyIsIl9kZWxldGUiLCJwYWludCIsIl90aGlzIiwiZ2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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