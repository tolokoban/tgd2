"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_state_blend_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-sr-8dd2e9"], {
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
82519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
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





function init(context, assets) {
    // #begin
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    var planes = [
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ],
        [
            1,
            1,
            1
        ]
    ].map(function(param, index) {
        var _param = _sliced_to_array(param, 3), R = _param[0], G = _param[1], B = _param[2];
        return makePlane(context, R, G, B, index);
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "add",
        children: planes
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background)
    }), state);
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            depth: true,
            alpha: false,
            antialias: true
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/add.demo.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
}
function makePlane(context, R, G, B, index) {
    var angle = index * 0.5 * Math.PI;
    var radius = 0.6;
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y); // @FIXME: Remove this line written on 2026-03-20 at 18:38
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [
                x,
                y,
                0
            ]
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                R,
                G,
                B,
                0.6
            ]
        })
    });
}


},
4612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _add_demo__rspack_import_4 = __webpack_require__(82519);
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
    "Detail #1": "\tconst camera = new TgdCameraPerspective();\n\tcamera.spaceHeightAtTarget = 2;\n\tcontext.camera = camera;\n\tconst planes = [\n\t\t[1, 0, 0],\n\t\t[0, 1, 0],\n\t\t[0, 0, 1],\n\t\t[1, 1, 1],\n\t].map(([R, G, B], index) => makePlane(context, R, G, B, index));\n\tconst state = new TgdPainterState(context, {\n\t\tblend: \"add\",\n\t\tchildren: planes,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n\t\tnew TgdPainterBackground(context, {\n\t\t\ttexture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n\t\t}),\n\t\tstate,\n\t);\n\tcontext.paint();"
};
var FULL = "import {\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdGeometryPlane,\n\tTgdMaterialFlat,\n\tTgdPainterBackground,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n} from \"@tolokoban/tgd\";\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nimport BackgroundURL from \"@/assets/image/dino.webp\";\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\";\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst camera = new TgdCameraPerspective();\n\tcamera.spaceHeightAtTarget = 2;\n\tcontext.camera = camera;\n\tconst planes = [\n\t\t[1, 0, 0],\n\t\t[0, 1, 0],\n\t\t[0, 0, 1],\n\t\t[1, 1, 1],\n\t].map(([R, G, B], index) => makePlane(context, R, G, B, index));\n\tconst state = new TgdPainterState(context, {\n\t\tblend: \"add\",\n\t\tchildren: planes,\n\t});\n\tcontext.add(\n\t\tnew TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n\t\tnew TgdPainterBackground(context, {\n\t\t\ttexture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n\t\t}),\n\t\tstate,\n\t);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\toptions={{\n\t\t\t\tdepth: true,\n\t\t\t\talpha: false,\n\t\t\t\tantialias: true,\n\t\t\t}}\n\t\t\tassets={{\n\t\t\t\tglb: {\n\t\t\t\t\tsuzanne: SuzanneURL,\n\t\t\t\t},\n\t\t\t\timage: {\n\t\t\t\t\tbackground: BackgroundURL,\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n\nfunction makePlane(\n\tcontext: TgdContext,\n\tR: number,\n\tG: number,\n\tB: number,\n\tindex: number,\n) {\n\tconst angle = index * 0.5 * Math.PI;\n\tconst radius = 0.6;\n\tconst x = radius * Math.cos(angle);\n\tconst y = radius * Math.sin(angle);\n\tconsole.log(\"🐞 [blend.demo@68] x, y =\", x, y); // @FIXME: Remove this line written on 2026-03-20 at 18:38\n\treturn new TgdPainterMesh(context, {\n\t\ttransfo: {\n\t\t\tposition: [x, y, 0],\n\t\t},\n\t\tgeometry: new TgdGeometryPlane(),\n\t\tmaterial: new TgdMaterialFlat({\n\t\t\tcolor: [R, G, B, 0.6],\n\t\t}),\n\t});\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_add_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/add.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
62557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
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





function init(context, assets) {
    // #begin
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    var planes = [
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ],
        [
            1,
            1,
            1
        ]
    ].map(function(param, index) {
        var _param = _sliced_to_array(param, 3), R = _param[0], G = _param[1], B = _param[2];
        return makePlane(context, R, G, B, index);
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "alpha",
        children: planes
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background)
    }), state);
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            depth: true,
            alpha: false,
            antialias: true
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/alpha.demo.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
}
function makePlane(context, R, G, B, index) {
    var angle = index * 0.5 * Math.PI;
    var radius = 0.6;
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y); // @FIXME: Remove this line written on 2026-03-20 at 18:38
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [
                x,
                y,
                0
            ]
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                R,
                G,
                B,
                0.6
            ]
        })
    });
}


},
31532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _alpha_demo__rspack_import_4 = __webpack_require__(62557);
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
    "Detail #1": '    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "alpha",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()'
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdGeometryPlane,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "@/assets/image/dino.webp"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0, 0],\n        [0, 1, 0],\n        [0, 0, 1],\n        [1, 1, 1],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "alpha",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                alpha: false,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {\n    const angle = index * 0.5 * Math.PI\n    const radius = 0.6\n    const x = radius * Math.cos(angle)\n    const y = radius * Math.sin(angle)\n    console.log("🐞 [blend.demo@68] x, y =", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38\n    return new TgdPainterMesh(context, {\n        transfo: {\n            position: [x, y, 0],\n        },\n        geometry: new TgdGeometryPlane(),\n        material: new TgdMaterialFlat({\n            color: [R, G, B, 0.6],\n        }),\n    })\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_alpha_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/alpha.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
96922(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _multiply_demo__rspack_import_4 = __webpack_require__(5997);
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
    "Detail #1": '    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0.5, 0.5],\n        [0.5, 1, 0.5],\n        [0.5, 0.5, 1],\n        [0.5, 0.5, 0.5],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "multiply",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()'
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdGeometryPlane,\n    TgdMaterialFlat,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BackgroundURL from "@/assets/image/dino.webp"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const camera = new TgdCameraPerspective()\n    camera.spaceHeightAtTarget = 2\n    context.camera = camera\n    const planes = [\n        [1, 0.5, 0.5],\n        [0.5, 1, 0.5],\n        [0.5, 0.5, 1],\n        [0.5, 0.5, 0.5],\n    ].map(([R, G, B], index) => makePlane(context, R, G, B, index))\n    const state = new TgdPainterState(context, {\n        blend: "multiply",\n        children: planes,\n    })\n    context.add(\n        new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 }),\n        new TgdPainterBackground(context, {\n            texture: new TgdTexture2D(context).loadBitmap(assets.image.background),\n        }),\n        state,\n    )\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            options={{\n                depth: true,\n                alpha: false,\n                antialias: true,\n            }}\n            assets={{\n                glb: {\n                    suzanne: SuzanneURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n\nfunction makePlane(context: TgdContext, R: number, G: number, B: number, index: number) {\n    const angle = index * 0.5 * Math.PI\n    const radius = 0.6\n    const x = radius * Math.cos(angle)\n    const y = radius * Math.sin(angle)\n    console.log("🐞 [blend.demo@68] x, y =", x, y) // @FIXME: Remove this line written on 2026-03-20 at 18:38\n    return new TgdPainterMesh(context, {\n        transfo: {\n            position: [x, y, 0],\n        },\n        geometry: new TgdGeometryPlane(),\n        material: new TgdMaterialFlat({\n            color: [R, G, B, 0.6],\n        }),\n    })\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_multiply_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
5997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_dino_webp__rspack_import_3 = __webpack_require__(44859);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
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





function init(context, assets) {
    // #begin
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective();
    camera.spaceHeightAtTarget = 2;
    context.camera = camera;
    var planes = [
        [
            1,
            0.5,
            0.5
        ],
        [
            0.5,
            1,
            0.5
        ],
        [
            0.5,
            0.5,
            1
        ],
        [
            0.5,
            0.5,
            0.5
        ]
    ].map(function(param, index) {
        var _param = _sliced_to_array(param, 3), R = _param[0], G = _param[1], B = _param[2];
        return makePlane(context, R, G, B, index);
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        blend: "multiply",
        children: planes
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
        texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background)
    }), state);
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            depth: true,
            alpha: false,
            antialias: true
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/_/multiply.demo/multiply.demo.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
}
function makePlane(context, R, G, B, index) {
    var angle = index * 0.5 * Math.PI;
    var radius = 0.6;
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    console.log("🐞 [blend.demo@68] x, y =", x, y); // @FIXME: Remove this line written on 2026-03-20 at 18:38
    return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        transfo: {
            position: [
                x,
                y,
                0
            ]
        },
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                R,
                G,
                B,
                0.6
            ]
        })
    });
}


},
27466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_4 = __webpack_require__(28453);
/* import */ var _alpha_demo__rspack_import_1 = __webpack_require__(31532);
/* import */ var _add_demo__rspack_import_2 = __webpack_require__(4612);
/* import */ var _multiply_demo__rspack_import_3 = __webpack_require__(96922);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Blend"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "alpha"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_alpha_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "add"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_add_demo__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "multiply"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_multiply_demo__rspack_import_3["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/state",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                    lineNumber: 21,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_4.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/blend/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfc3RhdGVfYmxlbmRfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zci04ZGQyZTkuMGVkMjc2YTcyYzcyOWIwYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9ibGVuZC9fL2FkZC5kZW1vL2FkZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9hZGQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3N0YXRlL2JsZW5kL18vYWxwaGEuZGVtby9hbHBoYS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9hbHBoYS5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9tdWx0aXBseS5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvc3RhdGUvYmxlbmQvXy9tdWx0aXBseS5kZW1vL211bHRpcGx5LmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9ibGVuZC9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RHZW9tZXRyeVBsYW5lLFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiO1xuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKCk7XG5cdGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMjtcblx0Y29udGV4dC5jYW1lcmEgPSBjYW1lcmE7XG5cdGNvbnN0IHBsYW5lcyA9IFtcblx0XHRbMSwgMCwgMF0sXG5cdFx0WzAsIDEsIDBdLFxuXHRcdFswLCAwLCAxXSxcblx0XHRbMSwgMSwgMV0sXG5cdF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKTtcblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRibGVuZDogXCJhZGRcIixcblx0XHRjaGlsZHJlbjogcGxhbmVzLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pLFxuXHRcdG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG5cdFx0XHR0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxuXHRcdH0pLFxuXHRcdHN0YXRlLFxuXHQpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdG9wdGlvbnM9e3tcblx0XHRcdFx0ZGVwdGg6IHRydWUsXG5cdFx0XHRcdGFscGhhOiBmYWxzZSxcblx0XHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzdXphbm5lOiBTdXphbm5lVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IEJhY2tncm91bmRVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQbGFuZShcblx0Y29udGV4dDogVGdkQ29udGV4dCxcblx0UjogbnVtYmVyLFxuXHRHOiBudW1iZXIsXG5cdEI6IG51bWJlcixcblx0aW5kZXg6IG51bWJlcixcbikge1xuXHRjb25zdCBhbmdsZSA9IGluZGV4ICogMC41ICogTWF0aC5QSTtcblx0Y29uc3QgcmFkaXVzID0gMC42O1xuXHRjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuXHRjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpO1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW2JsZW5kLmRlbW9ANjhdIHgsIHkgPVwiLCB4LCB5KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0yMCBhdCAxODozOFxuXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcblx0XHR0cmFuc2ZvOiB7XG5cdFx0XHRwb3NpdGlvbjogW3gsIHksIDBdLFxuXHRcdH0sXG5cdFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKCksXG5cdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xuXHRcdFx0Y29sb3I6IFtSLCBHLCBCLCAwLjZdLFxuXHRcdH0pLFxuXHR9KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9hZGQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKTtcXG5cXHRjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDI7XFxuXFx0Y29udGV4dC5jYW1lcmEgPSBjYW1lcmE7XFxuXFx0Y29uc3QgcGxhbmVzID0gW1xcblxcdFxcdFsxLCAwLCAwXSxcXG5cXHRcXHRbMCwgMSwgMF0sXFxuXFx0XFx0WzAsIDAsIDFdLFxcblxcdFxcdFsxLCAxLCAxXSxcXG5cXHRdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRibGVuZDogXFxcImFkZFxcXCIsXFxuXFx0XFx0Y2hpbGRyZW46IHBsYW5lcyxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG5cXHRcXHRcXHR0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxcblxcdFxcdH0pLFxcblxcdFxcdHN0YXRlLFxcblxcdCk7XFxuXFx0Y29udGV4dC5wYWludCgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkR2VvbWV0cnlQbGFuZSxcXG5cXHRUZ2RNYXRlcmlhbEZsYXQsXFxuXFx0VGdkUGFpbnRlckJhY2tncm91bmQsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCI7XFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpO1xcblxcdGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMjtcXG5cXHRjb250ZXh0LmNhbWVyYSA9IGNhbWVyYTtcXG5cXHRjb25zdCBwbGFuZXMgPSBbXFxuXFx0XFx0WzEsIDAsIDBdLFxcblxcdFxcdFswLCAxLCAwXSxcXG5cXHRcXHRbMCwgMCwgMV0sXFxuXFx0XFx0WzEsIDEsIDFdLFxcblxcdF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdGJsZW5kOiBcXFwiYWRkXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogcGxhbmVzLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcblxcdFxcdFxcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXFxuXFx0XFx0fSksXFxuXFx0XFx0c3RhdGUsXFxuXFx0KTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0b3B0aW9ucz17e1xcblxcdFxcdFxcdFxcdGRlcHRoOiB0cnVlLFxcblxcdFxcdFxcdFxcdGFscGhhOiBmYWxzZSxcXG5cXHRcXHRcXHRcXHRhbnRpYWxpYXM6IHRydWUsXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHtcXG5cXHRcXHRcXHRcXHRcXHRzdXphbm5lOiBTdXphbm5lVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0aW1hZ2U6IHtcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0fX1cXG5cXHRcXHQvPlxcblxcdCk7XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VQbGFuZShcXG5cXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxcblxcdFI6IG51bWJlcixcXG5cXHRHOiBudW1iZXIsXFxuXFx0QjogbnVtYmVyLFxcblxcdGluZGV4OiBudW1iZXIsXFxuKSB7XFxuXFx0Y29uc3QgYW5nbGUgPSBpbmRleCAqIDAuNSAqIE1hdGguUEk7XFxuXFx0Y29uc3QgcmFkaXVzID0gMC42O1xcblxcdGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XFxuXFx0Y29uc3QgeSA9IHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKTtcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbYmxlbmQuZGVtb0A2OF0geCwgeSA9XFxcIiwgeCwgeSk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMjAgYXQgMTg6MzhcXG5cXHRyZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHR0cmFuc2ZvOiB7XFxuXFx0XFx0XFx0cG9zaXRpb246IFt4LCB5LCAwXSxcXG5cXHRcXHR9LFxcblxcdFxcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSgpLFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcXG5cXHRcXHRcXHRjb2xvcjogW1IsIEcsIEIsIDAuNl0sXFxuXFx0XFx0fSksXFxuXFx0fSk7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RHZW9tZXRyeVBsYW5lLFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiO1xuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKCk7XG5cdGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMjtcblx0Y29udGV4dC5jYW1lcmEgPSBjYW1lcmE7XG5cdGNvbnN0IHBsYW5lcyA9IFtcblx0XHRbMSwgMCwgMF0sXG5cdFx0WzAsIDEsIDBdLFxuXHRcdFswLCAwLCAxXSxcblx0XHRbMSwgMSwgMV0sXG5cdF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKTtcblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRibGVuZDogXCJhbHBoYVwiLFxuXHRcdGNoaWxkcmVuOiBwbGFuZXMsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXG5cdFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcblx0XHRcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXG5cdFx0fSksXG5cdFx0c3RhdGUsXG5cdCk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRkZXB0aDogdHJ1ZSxcblx0XHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0XHR9fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFubmU6IFN1emFubmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZVBsYW5lKFxuXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRSOiBudW1iZXIsXG5cdEc6IG51bWJlcixcblx0QjogbnVtYmVyLFxuXHRpbmRleDogbnVtYmVyLFxuKSB7XG5cdGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJO1xuXHRjb25zdCByYWRpdXMgPSAwLjY7XG5cdGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XG5cdGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG5cdGNvbnNvbGUubG9nKFwi8J+QniBbYmxlbmQuZGVtb0A2OF0geCwgeSA9XCIsIHgsIHkpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAzLTIwIGF0IDE4OjM4XG5cdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdHRyYW5zZm86IHtcblx0XHRcdHBvc2l0aW9uOiBbeCwgeSwgMF0sXG5cdFx0fSxcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoKSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XG5cdFx0XHRjb2xvcjogW1IsIEcsIEIsIDAuNl0sXG5cdFx0fSksXG5cdH0pO1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2FscGhhLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0JyAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDJcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgWzEsIDAsIDBdLFxcbiAgICAgICAgWzAsIDEsIDBdLFxcbiAgICAgICAgWzAsIDAsIDFdLFxcbiAgICAgICAgWzEsIDEsIDFdLFxcbiAgICBdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGJsZW5kOiBcImFscGhhXCIsXFxuICAgICAgICBjaGlsZHJlbjogcGxhbmVzLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS9kaW5vLndlYnBcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSgpXFxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMlxcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxcbiAgICBjb25zdCBwbGFuZXMgPSBbXFxuICAgICAgICBbMSwgMCwgMF0sXFxuICAgICAgICBbMCwgMSwgMF0sXFxuICAgICAgICBbMCwgMCwgMV0sXFxuICAgICAgICBbMSwgMSwgMV0sXFxuICAgIF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcXG4gICAgICAgIGNoaWxkcmVuOiBwbGFuZXMsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBzdGF0ZSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIGRlcHRoOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VQbGFuZShjb250ZXh0OiBUZ2RDb250ZXh0LCBSOiBudW1iZXIsIEc6IG51bWJlciwgQjogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XFxuICAgIGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJXFxuICAgIGNvbnN0IHJhZGl1cyA9IDAuNlxcbiAgICBjb25zdCB4ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpXFxuICAgIGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSlcXG4gICAgY29uc29sZS5sb2coXCLwn5CeIFtibGVuZC5kZW1vQDY4XSB4LCB5ID1cIiwgeCwgeSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMy0yMCBhdCAxODozOFxcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogW3gsIHksIDBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoe1xcbiAgICAgICAgICAgIGNvbG9yOiBbUiwgRywgQiwgMC42XSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tdWx0aXBseS5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKClcXG4gICAgY2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSAyXFxuICAgIGNvbnRleHQuY2FtZXJhID0gY2FtZXJhXFxuICAgIGNvbnN0IHBsYW5lcyA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNV0sXFxuICAgICAgICBbMC41LCAxLCAwLjVdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDAuNSwgMC41XSxcXG4gICAgXS5tYXAoKFtSLCBHLCBCXSwgaW5kZXgpID0+IG1ha2VQbGFuZShjb250ZXh0LCBSLCBHLCBCLCBpbmRleCkpXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBibGVuZDogXCJtdWx0aXBseVwiLFxcbiAgICAgICAgY2hpbGRyZW46IHBsYW5lcyxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHN0YXRlLFxcbiAgICApXFxuICAgIGNvbnRleHQucGFpbnQoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoKVxcbiAgICBjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDJcXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41XSxcXG4gICAgICAgIFswLjUsIDEsIDAuNV0sXFxuICAgICAgICBbMC41LCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAwLjVdLFxcbiAgICBdLm1hcCgoW1IsIEcsIEJdLCBpbmRleCkgPT4gbWFrZVBsYW5lKGNvbnRleHQsIFIsIEcsIEIsIGluZGV4KSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGJsZW5kOiBcIm11bHRpcGx5XCIsXFxuICAgICAgICBjaGlsZHJlbjogcGxhbmVzLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBkZXB0aDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUGxhbmUoY29udGV4dDogVGdkQ29udGV4dCwgUjogbnVtYmVyLCBHOiBudW1iZXIsIEI6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xcbiAgICBjb25zdCBhbmdsZSA9IGluZGV4ICogMC41ICogTWF0aC5QSVxcbiAgICBjb25zdCByYWRpdXMgPSAwLjZcXG4gICAgY29uc3QgeCA9IHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKVxcbiAgICBjb25zdCB5ID0gcmFkaXVzICogTWF0aC5zaW4oYW5nbGUpXFxuICAgIGNvbnNvbGUubG9nKFwi8J+QniBbYmxlbmQuZGVtb0A2OF0geCwgeSA9XCIsIHgsIHkpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDMtMjAgYXQgMTg6MzhcXG4gICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IFt4LCB5LCAwXSxcXG4gICAgICAgIH0sXFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoKSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcXG4gICAgICAgICAgICBjb2xvcjogW1IsIEcsIEIsIDAuNl0sXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RHZW9tZXRyeVBsYW5lLFxuXHRUZ2RNYXRlcmlhbEZsYXQsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IEJhY2tncm91bmRVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFwiO1xuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKCk7XG5cdGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gMjtcblx0Y29udGV4dC5jYW1lcmEgPSBjYW1lcmE7XG5cdGNvbnN0IHBsYW5lcyA9IFtcblx0XHRbMSwgMC41LCAwLjVdLFxuXHRcdFswLjUsIDEsIDAuNV0sXG5cdFx0WzAuNSwgMC41LCAxXSxcblx0XHRbMC41LCAwLjUsIDAuNV0sXG5cdF0ubWFwKChbUiwgRywgQl0sIGluZGV4KSA9PiBtYWtlUGxhbmUoY29udGV4dCwgUiwgRywgQiwgaW5kZXgpKTtcblx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRibGVuZDogXCJtdWx0aXBseVwiLFxuXHRcdGNoaWxkcmVuOiBwbGFuZXMsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSksXG5cdFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcblx0XHRcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuYmFja2dyb3VuZCksXG5cdFx0fSksXG5cdFx0c3RhdGUsXG5cdCk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRkZXB0aDogdHJ1ZSxcblx0XHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0XHR9fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHN1emFubmU6IFN1emFubmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gbWFrZVBsYW5lKFxuXHRjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRSOiBudW1iZXIsXG5cdEc6IG51bWJlcixcblx0QjogbnVtYmVyLFxuXHRpbmRleDogbnVtYmVyLFxuKSB7XG5cdGNvbnN0IGFuZ2xlID0gaW5kZXggKiAwLjUgKiBNYXRoLlBJO1xuXHRjb25zdCByYWRpdXMgPSAwLjY7XG5cdGNvbnN0IHggPSByYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSk7XG5cdGNvbnN0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG5cdGNvbnNvbGUubG9nKFwi8J+QniBbYmxlbmQuZGVtb0A2OF0geCwgeSA9XCIsIHgsIHkpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAzLTIwIGF0IDE4OjM4XG5cdHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdHRyYW5zZm86IHtcblx0XHRcdHBvc2l0aW9uOiBbeCwgeSwgMF0sXG5cdFx0fSxcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoKSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XG5cdFx0XHRjb2xvcjogW1IsIEcsIEIsIDAuNl0sXG5cdFx0fSksXG5cdH0pO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZEdlb21ldHJ5UGxhbmUiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RQYWludGVyQmFja2dyb3VuZCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVmlldyIsIkJhY2tncm91bmRVUkwiLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjYW1lcmEiLCJwbGFuZXMiLCJpbmRleCIsIlIiLCJHIiwiQiIsIm1ha2VQbGFuZSIsInN0YXRlIiwiRGVtbyIsImFuZ2xlIiwiTWF0aCIsInJhZGl1cyIsIngiLCJ5IiwiY29uc29sZSIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXdCO0FBQ2tDO0FBRUw7QUFDRjtBQUVuRCxTQUFTVyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELFNBQVM7SUFDVCxJQUFNQyxTQUFTLElBQUlkLG9EQUFvQkE7SUFDdkNjLE9BQU8sbUJBQW1CLEdBQUc7SUFDN0JGLFFBQVEsTUFBTSxHQUFHRTtJQUNqQixJQUFNQyxTQUFTO1FBQ2Q7WUFBQztZQUFHO1lBQUc7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