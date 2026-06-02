"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_data_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-2bf439"], {
10033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _texture2d_from_data_demo__rspack_import_4 = __webpack_require__(16641);
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
    "Detail #1": "\tconst r = 0x00;\n\tconst g = 0x99;\n\tconst b = 0xff;\n\tconst R = 0xff;\n\tconst G = 0x99;\n\tconst B = 0x00;\n\t// prettier-ignore\n\tconst data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t]);\n\tconst texture = new TgdTexture2D(ctx, {\n\t\tstorage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n\t\tparams: {\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadData(data, {\n\t\twidth: 5,\n\t\theight: 5,\n\t});\n\tconst background = new Painter(ctx, texture);\n\tctx.add(background);\n\tctx.paint();"
};
var FULL = "import View from \"@/components/demo/Tgd\";\nimport { type TgdContext, TgdTexture2D } from \"@tolokoban/tgd\";\nimport { Painter } from \"./painter\";\n\nfunction init(ctx: TgdContext) {\n\tconst r = 0x00;\n\tconst g = 0x99;\n\tconst b = 0xff;\n\tconst R = 0xff;\n\tconst G = 0x99;\n\tconst B = 0x00;\n\t// prettier-ignore\n\tconst data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t]);\n\tconst texture = new TgdTexture2D(ctx, {\n\t\tstorage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n\t\tparams: {\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t}).loadData(data, {\n\t\twidth: 5,\n\t\theight: 5,\n\t});\n\tconst background = new Painter(ctx, texture);\n\tctx.add(background);\n\tctx.paint();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} />;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_texture2d_from_data_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
72740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Painter: () => (Painter)
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

var Painter = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(Painter, TgdPainter);
    function Painter(context, texture) {
        _class_call_check(this, Painter);
        var _this;
        _this = _call_super(this, Painter), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "prg", void 0), _define_property(_this, "vao", void 0), _this.context = context, _this.texture = texture;
        _this.prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: [
                "#version 300 es",
                "in vec2 attPoint;",
                "out vec2 varUV;",
                "void main() {",
                [
                    "varUV = vec2(0.5) * (attPoint + vec2(1.0));",
                    "gl_Position = vec4(attPoint, 0.0, 1.0);"
                ],
                "}"
            ],
            frag: [
                "#version 300 es",
                "precision mediump float;",
                "uniform sampler2D uniTexture;",
                "in vec2 varUV;",
                "out vec4 FragColor;",
                "void main() {",
                [
                    "FragColor = texture(uniTexture, varUV);"
                ],
                "}"
            ]
        });
        var ds = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec2"
        });
        // prettier-ignore
        ds.set("attPoint", new Float32Array([
            -1,
            +1,
            +1,
            +1,
            -1,
            -1,
            +1,
            -1
        ]));
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.prg, [
            ds
        ]);
        return _this;
    }
    _create_class(Painter, [
        {
            key: "delete",
            value: function _delete() {
                this.vao.delete();
                this.prg.delete();
            }
        },
        {
            key: "paint",
            value: function paint(time, delay) {
                var _this = this, context = _this.context, prg = _this.prg, vao = _this.vao, texture = _this.texture;
                var gl = context.gl;
                prg.use();
                texture.activate(0, prg, "uniTexture");
                vao.bind();
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                vao.unbind();
            }
        }
    ]);
    return Painter;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
16641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(43475);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _painter__rspack_import_3 = __webpack_require__(72740);




function init(ctx) {
    // #begin
    var r = 0x00;
    var g = 0x99;
    var b = 0xff;
    var R = 0xff;
    var G = 0x99;
    var B = 0x00;
    // prettier-ignore
    var data = new Uint8Array([
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        /* padding -> */ 0,
        r,
        g,
        b,
        R,
        G,
        B,
        R,
        G,
        B,
        R,
        G,
        B,
        r,
        g,
        b,
        /* padding -> */ 0,
        r,
        g,
        b,
        r,
        g,
        b,
        R,
        G,
        B,
        r,
        g,
        b,
        r,
        g,
        b,
        /* padding -> */ 0,
        r,
        g,
        b,
        r,
        g,
        b,
        R,
        G,
        B,
        r,
        g,
        b,
        r,
        g,
        b,
        /* padding -> */ 0,
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        r,
        g,
        b,
        /* padding -> */ 0
    ]);
    var texture = new _tolokoban_tgd__rspack_import_2.TgdTexture2D(ctx, {
        storage: {
            flipY: true,
            format: "RGB8 / RGB / UNSIGNED_BYTE"
        },
        params: {
            magFilter: "NEAREST"
        }
    }).loadData(data, {
        width: 5,
        height: 5
    });
    var background = new _painter__rspack_import_3.Painter(ctx, texture);
    ctx.add(background);
    ctx.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_1["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/texture2d-from-data.demo.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}


},
73555(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _texture2d_from_data_demo__rspack_import_4 = __webpack_require__(40711);
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
    "Detail #1": '    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = ["     ", " ### ", "  #  ", "  #  ", "     "]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split("").forEach((color, col) => table.setVec(color === "#" ? fg : bg, col, row))\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n        .setParams({\n            magFilter: "NEAREST",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            format: "RGB8 / RGB / UNSIGNED_BYTE",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()'
};
var FULL = 'import View from "@/components/demo/Tgd"\nimport { type TgdContext, TgdTableUint8, TgdTexture2D } from "@tolokoban/tgd"\nimport { Painter } from "./painter"\n\nfunction init(ctx: TgdContext) {\n    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = ["     ", " ### ", "  #  ", "  #  ", "     "]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split("").forEach((color, col) => table.setVec(color === "#" ? fg : bg, col, row))\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n        .setParams({\n            magFilter: "NEAREST",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            format: "RGB8 / RGB / UNSIGNED_BYTE",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nconst COLORS: Record<string, [number, number, number]> = {\n    "0": [0, 0.333, 1],\n    "1": [1, 0.666, 0],\n}\n\nfunction makeRGB(...lines: string[]) {\n    const code = lines.join("")\n    const data: number[] = []\n    for (const line of lines) {\n        line.split("").map((digit) => data.push(...(COLORS[digit] ?? [])))\n        let size = line.length * "RGB".length\n        while (size % 4 !== 0) {\n            data.push(0)\n            size++\n        }\n    }\n    return new Uint8Array(data.map((v) => Math.floor(255 * v)))\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_texture2d_from_data_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
74478(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Painter: () => (Painter)
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

var Painter = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(Painter, TgdPainter);
    function Painter(context, texture) {
        _class_call_check(this, Painter);
        var _this;
        _this = _call_super(this, Painter), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "prg", void 0), _define_property(_this, "vao", void 0), _this.context = context, _this.texture = texture;
        _this.prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: [
                "#version 300 es",
                "in vec2 attPoint;",
                "out vec2 varUV;",
                "void main() {",
                [
                    "varUV = vec2(0.5) * (attPoint + vec2(1.0));",
                    "gl_Position = vec4(attPoint, 0.0, 1.0);"
                ],
                "}"
            ],
            frag: [
                "#version 300 es",
                "precision mediump float;",
                "uniform sampler2D uniTexture;",
                "in vec2 varUV;",
                "out vec4 FragColor;",
                "void main() {",
                [
                    "FragColor = texture(uniTexture, varUV);"
                ],
                "}"
            ]
        });
        var ds = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPoint: "vec2"
        });
        // prettier-ignore
        ds.set("attPoint", new Float32Array([
            -1,
            +1,
            +1,
            +1,
            -1,
            -1,
            +1,
            -1
        ]));
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.prg, [
            ds
        ]);
        return _this;
    }
    _create_class(Painter, [
        {
            key: "delete",
            value: function _delete() {
                this.vao.delete();
                this.prg.delete();
            }
        },
        {
            key: "paint",
            value: function paint(time, delay) {
                var _this = this, context = _this.context, prg = _this.prg, vao = _this.vao, texture = _this.texture;
                var gl = context.gl;
                prg.use();
                texture.activate(0, prg, "uniTexture");
                vao.bind();
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                vao.unbind();
            }
        }
    ]);
    return Painter;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
40711(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(43475);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _painter__rspack_import_3 = __webpack_require__(74478);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}




function init(ctx) {
    // #begin
    var bg = [
        0x00,
        0x99,
        0xff
    ];
    var fg = [
        0xff,
        0x99,
        0x00
    ];
    // prettier-ignore
    var pixels = [
        "     ",
        " ### ",
        "  #  ",
        "  #  ",
        "     "
    ];
    var table = new _tolokoban_tgd__rspack_import_2.TgdTableUint8(5, 5, 3);
    pixels.forEach(function(line, row) {
        line.split("").forEach(function(color, col) {
            return table.setVec(color === "#" ? fg : bg, col, row);
        });
    });
    var data = new Uint8Array(table.buffer);
    var texture = new _tolokoban_tgd__rspack_import_2.TgdTexture2D(ctx, {
        storage: {
            flipY: true
        }
    }).setParams({
        magFilter: "NEAREST"
    }).loadData(data, {
        width: 5,
        height: 5,
        format: "RGB8 / RGB / UNSIGNED_BYTE"
    });
    var background = new _painter__rspack_import_3.Painter(ctx, texture);
    ctx.add(background);
    ctx.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_1["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/texture2d-from-data.demo.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
var COLORS = {
    "0": [
        0,
        0.333,
        1
    ],
    "1": [
        1,
        0.666,
        0
    ]
};
function makeRGB() {
    for(var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++){
        lines[_key] = arguments[_key];
    }
    var code = lines.join("");
    var data = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var line = _step.value;
            line.split("").map(function(digit) {
                var _data;
                var _COLORS_digit;
                return (_data = data).push.apply(_data, _to_consumable_array((_COLORS_digit = COLORS[digit]) !== null && _COLORS_digit !== void 0 ? _COLORS_digit : []));
            });
            var size = line.length * "RGB".length;
            while(size % 4 !== 0){
                data.push(0);
                size++;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return new Uint8Array(data.map(function(v) {
        return Math.floor(255 * v);
    }));
}


},
37592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _raw__rspack_import_1 = __webpack_require__(10033);
/* import */ var _table__rspack_import_2 = __webpack_require__(73555);
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
        code: "code",
        h1: "h1",
        p: "p",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Texture2D from data"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Sending data to a texture is more tricky than expected becaue you have to care\ncare of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "memory alignement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Each row of your data must have a number of bytes that is an integral ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "multiple\nof 4"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 9,
                        columnNumber: 71
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "In the following example, we are using only 3 bytes per pixel because we\nspecified RGB as format. Since we want a width of 5, we end up with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "15 bytes"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 13,
                        columnNumber: 69
                    }, this),
                    "\nin a row. We cannot divide 15 by 4, so we ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "MUST add a padding"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 14,
                        columnNumber: 43
                    }, this),
                    " value at the\nend of the row to have 16 bytes."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If the width you want is 3, for example, then you will need a padding of 3\nbytes."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_raw__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "This padding can be error prone. To help you, you can use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdTable*"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 22,
                        columnNumber: 59
                    }, this),
                    " classes:"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_table__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9kYXRhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy0yYmY0MzkuNDM2MGRiNTZkZjUyMmIzNi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9fL3Jhdy9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb25zdCByID0gMHgwMDtcXG5cXHRjb25zdCBnID0gMHg5OTtcXG5cXHRjb25zdCBiID0gMHhmZjtcXG5cXHRjb25zdCBSID0gMHhmZjtcXG5cXHRjb25zdCBHID0gMHg5OTtcXG5cXHRjb25zdCBCID0gMHgwMDtcXG5cXHQvLyBwcmV0dGllci1pZ25vcmVcXG5cXHRjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XSk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7XFxuXFx0XFx0c3RvcmFnZTogeyBmbGlwWTogdHJ1ZSwgZm9ybWF0OiBcXFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcXFwiIH0sXFxuXFx0XFx0cGFyYW1zOiB7XFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkRGF0YShkYXRhLCB7XFxuXFx0XFx0d2lkdGg6IDUsXFxuXFx0XFx0aGVpZ2h0OiA1LFxcblxcdH0pO1xcblxcdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpO1xcblxcdGN0eC5hZGQoYmFja2dyb3VuZCk7XFxuXFx0Y3R4LnBhaW50KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y29uc3QgciA9IDB4MDA7XFxuXFx0Y29uc3QgZyA9IDB4OTk7XFxuXFx0Y29uc3QgYiA9IDB4ZmY7XFxuXFx0Y29uc3QgUiA9IDB4ZmY7XFxuXFx0Y29uc3QgRyA9IDB4OTk7XFxuXFx0Y29uc3QgQiA9IDB4MDA7XFxuXFx0Ly8gcHJldHRpZXItaWdub3JlXFxuXFx0Y29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdF0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwge1xcblxcdFxcdHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXFxcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXFxcIiB9LFxcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZERhdGEoZGF0YSwge1xcblxcdFxcdHdpZHRoOiA1LFxcblxcdFxcdGhlaWdodDogNSxcXG5cXHR9KTtcXG5cXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKTtcXG5cXHRjdHguYWRkKGJhY2tncm91bmQpO1xcblxcdGN0eC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPjtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlcixcblx0VGdkUHJvZ3JhbSxcblx0dHlwZSBUZ2RUZXh0dXJlMkQsXG5cdFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG5cdFx0XHR2ZXJ0OiBbXG5cdFx0XHRcdFwiI3ZlcnNpb24gMzAwIGVzXCIsXG5cdFx0XHRcdFwiaW4gdmVjMiBhdHRQb2ludDtcIixcblx0XHRcdFx0XCJvdXQgdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRcInZhclVWID0gdmVjMigwLjUpICogKGF0dFBvaW50ICsgdmVjMigxLjApKTtcIixcblx0XHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIn1cIixcblx0XHRcdF0sXG5cdFx0XHRmcmFnOiBbXG5cdFx0XHRcdFwiI3ZlcnNpb24gMzAwIGVzXCIsXG5cdFx0XHRcdFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXG5cdFx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcblx0XHRcdFx0XCJpbiB2ZWMyIHZhclVWO1wiLFxuXHRcdFx0XHRcIm91dCB2ZWM0IEZyYWdDb2xvcjtcIixcblx0XHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXG5cdFx0XHRcdFtcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpO1wiXSxcblx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRzID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFx0YXR0UG9pbnQ6IFwidmVjMlwiLFxuXHRcdH0pO1xuXHRcdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdGRzLnNldChcImF0dFBvaW50XCIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCArMSwgKzEsICsxLCAtMSwgLTEsICsxLCAtMV0pKTtcblx0XHR0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RzXSk7XG5cdH1cblxuXHRkZWxldGUoKTogdm9pZCB7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdFx0dGhpcy5wcmcuZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCh0aW1lOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgZ2wgfSA9IGNvbnRleHQ7XG5cdFx0cHJnLnVzZSgpO1xuXHRcdHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIik7XG5cdFx0dmFvLmJpbmQoKTtcblx0XHRnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcblx0XHR2YW8udW5iaW5kKCk7XG5cdH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcbmltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiO1xuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgciA9IDB4MDA7XG5cdGNvbnN0IGcgPSAweDk5O1xuXHRjb25zdCBiID0gMHhmZjtcblx0Y29uc3QgUiA9IDB4ZmY7XG5cdGNvbnN0IEcgPSAweDk5O1xuXHRjb25zdCBCID0gMHgwMDtcblx0Ly8gcHJldHRpZXItaWdub3JlXG5cdGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwge1xuXHRcdHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVwiIH0sXG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdH0pLmxvYWREYXRhKGRhdGEsIHtcblx0XHR3aWR0aDogNSxcblx0XHRoZWlnaHQ6IDUsXG5cdH0pO1xuXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKTtcblx0Y3R4LmFkZChiYWNrZ3JvdW5kKTtcblx0Y3R4LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+O1xufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHQnICAgIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdXFxuICAgIGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBwaXhlbHMgPSBbXCIgICAgIFwiLCBcIiAjIyMgXCIsIFwiICAjICBcIiwgXCIgICMgIFwiLCBcIiAgICAgXCJdXFxuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMylcXG4gICAgcGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xcbiAgICAgICAgbGluZS5zcGxpdChcIlwiKS5mb3JFYWNoKChjb2xvciwgY29sKSA9PiB0YWJsZS5zZXRWZWMoY29sb3IgPT09IFwiI1wiID8gZmcgOiBiZywgY29sLCByb3cpKVxcbiAgICB9KVxcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGFibGUuYnVmZmVyKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHsgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9IH0pXFxuICAgICAgICAuc2V0UGFyYW1zKHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgfSlcXG4gICAgICAgIC5sb2FkRGF0YShkYXRhLCB7XFxuICAgICAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxcbiAgICAgICAgICAgIGZvcm1hdDogXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVwiLFxcbiAgICAgICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIlxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdXFxuICAgIGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBwaXhlbHMgPSBbXCIgICAgIFwiLCBcIiAjIyMgXCIsIFwiICAjICBcIiwgXCIgICMgIFwiLCBcIiAgICAgXCJdXFxuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMylcXG4gICAgcGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xcbiAgICAgICAgbGluZS5zcGxpdChcIlwiKS5mb3JFYWNoKChjb2xvciwgY29sKSA9PiB0YWJsZS5zZXRWZWMoY29sb3IgPT09IFwiI1wiID8gZmcgOiBiZywgY29sLCByb3cpKVxcbiAgICB9KVxcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGFibGUuYnVmZmVyKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHsgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9IH0pXFxuICAgICAgICAuc2V0UGFyYW1zKHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICAgICAgfSlcXG4gICAgICAgIC5sb2FkRGF0YShkYXRhLCB7XFxuICAgICAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxcbiAgICAgICAgICAgIGZvcm1hdDogXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVwiLFxcbiAgICAgICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXFxuY29uc3QgQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+ID0ge1xcbiAgICBcIjBcIjogWzAsIDAuMzMzLCAxXSxcXG4gICAgXCIxXCI6IFsxLCAwLjY2NiwgMF0sXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VSR0IoLi4ubGluZXM6IHN0cmluZ1tdKSB7XFxuICAgIGNvbnN0IGNvZGUgPSBsaW5lcy5qb2luKFwiXCIpXFxuICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW11cXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XFxuICAgICAgICBsaW5lLnNwbGl0KFwiXCIpLm1hcCgoZGlnaXQpID0+IGRhdGEucHVzaCguLi4oQ09MT1JTW2RpZ2l0XSA/PyBbXSkpKVxcbiAgICAgICAgbGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFwiUkdCXCIubGVuZ3RoXFxuICAgICAgICB3aGlsZSAoc2l6ZSAlIDQgIT09IDApIHtcXG4gICAgICAgICAgICBkYXRhLnB1c2goMClcXG4gICAgICAgICAgICBzaXplKytcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5tYXAoKHYpID0+IE1hdGguZmxvb3IoMjU1ICogdikpKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlcixcblx0VGdkUHJvZ3JhbSxcblx0dHlwZSBUZ2RUZXh0dXJlMkQsXG5cdFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG5cdFx0XHR2ZXJ0OiBbXG5cdFx0XHRcdFwiI3ZlcnNpb24gMzAwIGVzXCIsXG5cdFx0XHRcdFwiaW4gdmVjMiBhdHRQb2ludDtcIixcblx0XHRcdFx0XCJvdXQgdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRcInZhclVWID0gdmVjMigwLjUpICogKGF0dFBvaW50ICsgdmVjMigxLjApKTtcIixcblx0XHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcIn1cIixcblx0XHRcdF0sXG5cdFx0XHRmcmFnOiBbXG5cdFx0XHRcdFwiI3ZlcnNpb24gMzAwIGVzXCIsXG5cdFx0XHRcdFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXG5cdFx0XHRcdFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcblx0XHRcdFx0XCJpbiB2ZWMyIHZhclVWO1wiLFxuXHRcdFx0XHRcIm91dCB2ZWM0IEZyYWdDb2xvcjtcIixcblx0XHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXG5cdFx0XHRcdFtcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpO1wiXSxcblx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRzID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFx0YXR0UG9pbnQ6IFwidmVjMlwiLFxuXHRcdH0pO1xuXHRcdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdGRzLnNldChcImF0dFBvaW50XCIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCArMSwgKzEsICsxLCAtMSwgLTEsICsxLCAtMV0pKTtcblx0XHR0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RzXSk7XG5cdH1cblxuXHRkZWxldGUoKTogdm9pZCB7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdFx0dGhpcy5wcmcuZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCh0aW1lOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgZ2wgfSA9IGNvbnRleHQ7XG5cdFx0cHJnLnVzZSgpO1xuXHRcdHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIik7XG5cdFx0dmFvLmJpbmQoKTtcblx0XHRnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcblx0XHR2YW8udW5iaW5kKCk7XG5cdH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcbmltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkVGFibGVVaW50OCwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiO1xuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgYmcgPSBbMHgwMCwgMHg5OSwgMHhmZl07XG5cdGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdO1xuXHQvLyBwcmV0dGllci1pZ25vcmVcblx0Y29uc3QgcGl4ZWxzID0gW1wiICAgICBcIiwgXCIgIyMjIFwiLCBcIiAgIyAgXCIsIFwiICAjICBcIiwgXCIgICAgIFwiXTtcblx0Y29uc3QgdGFibGUgPSBuZXcgVGdkVGFibGVVaW50OCg1LCA1LCAzKTtcblx0cGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xuXHRcdGxpbmVcblx0XHRcdC5zcGxpdChcIlwiKVxuXHRcdFx0LmZvckVhY2goKGNvbG9yLCBjb2wpID0+IHRhYmxlLnNldFZlYyhjb2xvciA9PT0gXCIjXCIgPyBmZyA6IGJnLCBjb2wsIHJvdykpO1xuXHR9KTtcblx0Y29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRhYmxlLmJ1ZmZlcik7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwgeyBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0gfSlcblx0XHQuc2V0UGFyYW1zKHtcblx0XHRcdG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0fSlcblx0XHQubG9hZERhdGEoZGF0YSwge1xuXHRcdFx0d2lkdGg6IDUsXG5cdFx0XHRoZWlnaHQ6IDUsXG5cdFx0XHRmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIixcblx0XHR9KTtcblx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSk7XG5cdGN0eC5hZGQoYmFja2dyb3VuZCk7XG5cdGN0eC5wYWludCgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPjtcbn1cblxuY29uc3QgQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+ID0ge1xuXHRcIjBcIjogWzAsIDAuMzMzLCAxXSxcblx0XCIxXCI6IFsxLCAwLjY2NiwgMF0sXG59O1xuXG5mdW5jdGlvbiBtYWtlUkdCKC4uLmxpbmVzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBjb2RlID0gbGluZXMuam9pbihcIlwiKTtcblx0Y29uc3QgZGF0YTogbnVtYmVyW10gPSBbXTtcblx0Zm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG5cdFx0bGluZS5zcGxpdChcIlwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSk7XG5cdFx0bGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFwiUkdCXCIubGVuZ3RoO1xuXHRcdHdoaWxlIChzaXplICUgNCAhPT0gMCkge1xuXHRcdFx0ZGF0YS5wdXNoKDApO1xuXHRcdFx0c2l6ZSsrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5tYXAoKHYpID0+IE1hdGguZmxvb3IoMjU1ICogdikpKTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkVmVydGV4QXJyYXkiLCJQYWludGVyIiwiY29udGV4dCIsInRleHR1cmUiLCJkcyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsInRpbWUiLCJkZWxheSIsIl90aGlzIiwicHJnIiwidmFvIiwiZ2wiLCJWaWV3IiwiVGdkVGV4dHVyZTJEIiwiaW5pdCIsImN0eCIsInIiLCJnIiwiYiIsIlIiLCJHIiwiQiIsImRhdGEiLCJVaW50OEFycmF5IiwiYmFja2dyb3VuZCIsIlRnZFRhYmxlVWludDgiLCJiZyIsImZnIiwicGl4ZWxzIiwidGFibGUiLCJsaW5lIiwicm93IiwiY29sb3IiLCJjb2wiLCJDT0xPUlMiLCJtYWtlUkdCIiwiX2tleSIsImxpbmVzIiwiY29kZSIsIl9pdGVyYXRvckVycm9yIiwiZGlnaXQiLCJfZGF0YSIsIl9DT0xPUlNfZGlnaXQiLCJzaXplIiwidiIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDUjtBQUU3QyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFtc0M7QUFDOXRDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJB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