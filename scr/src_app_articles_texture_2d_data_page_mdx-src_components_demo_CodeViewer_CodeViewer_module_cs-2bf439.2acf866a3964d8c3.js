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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/raw/texture2d-from-data.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/texture2d-from-data.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 9,
                        columnNumber: 71
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 13,
                        columnNumber: 69
                    }, this),
                    "\nin a row. We cannot divide 15 by 4, so we ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "MUST add a padding"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 14,
                        columnNumber: 43
                    }, this),
                    " value at the\nend of the row to have 16 bytes."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If the width you want is 3, for example, then you will need a padding of 3\nbytes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_raw__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                        lineNumber: 22,
                        columnNumber: 59
                    }, this),
                    " classes:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_table__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9kYXRhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy0yYmY0MzkuMmFjZjg2NmEzOTY0ZDhjMy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy9yYXcvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy9yYXcvcGFpbnRlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9fL3RhYmxlL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvcGFpbnRlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi90ZXh0dXJlMmQtZnJvbS1kYXRhLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29uc3QgciA9IDB4MDA7XFxuXFx0Y29uc3QgZyA9IDB4OTk7XFxuXFx0Y29uc3QgYiA9IDB4ZmY7XFxuXFx0Y29uc3QgUiA9IDB4ZmY7XFxuXFx0Y29uc3QgRyA9IDB4OTk7XFxuXFx0Y29uc3QgQiA9IDB4MDA7XFxuXFx0Ly8gcHJldHRpZXItaWdub3JlXFxuXFx0Y29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdF0pO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwge1xcblxcdFxcdHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXFxcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXFxcIiB9LFxcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSkubG9hZERhdGEoZGF0YSwge1xcblxcdFxcdHdpZHRoOiA1LFxcblxcdFxcdGhlaWdodDogNSxcXG5cXHR9KTtcXG5cXHRjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKTtcXG5cXHRjdHguYWRkKGJhY2tncm91bmQpO1xcblxcdGN0eC5wYWludCgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5pbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcXFwiLi9wYWludGVyXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcblxcdGNvbnN0IHIgPSAweDAwO1xcblxcdGNvbnN0IGcgPSAweDk5O1xcblxcdGNvbnN0IGIgPSAweGZmO1xcblxcdGNvbnN0IFIgPSAweGZmO1xcblxcdGNvbnN0IEcgPSAweDk5O1xcblxcdGNvbnN0IEIgPSAweDAwO1xcblxcdC8vIHByZXR0aWVyLWlnbm9yZVxcblxcdGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRdKTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcXG5cXHRcXHRzdG9yYWdlOiB7IGZsaXBZOiB0cnVlLCBmb3JtYXQ6IFxcXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVxcXCIgfSxcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWREYXRhKGRhdGEsIHtcXG5cXHRcXHR3aWR0aDogNSxcXG5cXHRcXHRoZWlnaHQ6IDUsXFxuXFx0fSk7XFxuXFx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSk7XFxuXFx0Y3R4LmFkZChiYWNrZ3JvdW5kKTtcXG5cXHRjdHgucGFpbnQoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz47XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXIsXG5cdFRnZFByb2dyYW0sXG5cdHR5cGUgVGdkVGV4dHVyZTJELFxuXHRUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuXHRcdFx0dmVydDogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG5cdFx0XHRcdFwib3V0IHZlYzIgdmFyVVY7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0XCJ2YXJVViA9IHZlYzIoMC41KSAqIChhdHRQb2ludCArIHZlYzIoMS4wKSk7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9pbnQsIDAuMCwgMS4wKTtcIixcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRdLFxuXHRcdFx0ZnJhZzogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuXHRcdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHVuaVRleHR1cmU7XCIsXG5cdFx0XHRcdFwiaW4gdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG5cdFx0XHRcdFwifVwiLFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRcdGF0dFBvaW50OiBcInZlYzJcIixcblx0XHR9KTtcblx0XHQvLyBwcmV0dGllci1pZ25vcmVcblx0XHRkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSk7XG5cdFx0dGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMudmFvLmRlbGV0ZSgpO1xuXHRcdHRoaXMucHJnLmRlbGV0ZSgpO1xuXHR9XG5cblx0cGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgeyBjb250ZXh0LCBwcmcsIHZhbywgdGV4dHVyZSB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsIH0gPSBjb250ZXh0O1xuXHRcdHByZy51c2UoKTtcblx0XHR0ZXh0dXJlLmFjdGl2YXRlKDAsIHByZywgXCJ1bmlUZXh0dXJlXCIpO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XG5cdFx0dmFvLnVuYmluZCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IHIgPSAweDAwO1xuXHRjb25zdCBnID0gMHg5OTtcblx0Y29uc3QgYiA9IDB4ZmY7XG5cdGNvbnN0IFIgPSAweGZmO1xuXHRjb25zdCBHID0gMHg5OTtcblx0Y29uc3QgQiA9IDB4MDA7XG5cdC8vIHByZXR0aWVyLWlnbm9yZVxuXHRjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdF0pO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcblx0XHRzdG9yYWdlOiB7IGZsaXBZOiB0cnVlLCBmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIiB9LFxuXHRcdHBhcmFtczoge1xuXHRcdFx0bWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHR9LFxuXHR9KS5sb2FkRGF0YShkYXRhLCB7XG5cdFx0d2lkdGg6IDUsXG5cdFx0aGVpZ2h0OiA1LFxuXHR9KTtcblx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSk7XG5cdGN0eC5hZGQoYmFja2dyb3VuZCk7XG5cdGN0eC5wYWludCgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPjtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi90ZXh0dXJlMmQtZnJvbS1kYXRhLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0JyAgICBjb25zdCBiZyA9IFsweDAwLCAweDk5LCAweGZmXVxcbiAgICBjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXVxcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcXG4gICAgY29uc3QgcGl4ZWxzID0gW1wiICAgICBcIiwgXCIgIyMjIFwiLCBcIiAgIyAgXCIsIFwiICAjICBcIiwgXCIgICAgIFwiXVxcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUZ2RUYWJsZVVpbnQ4KDUsIDUsIDMpXFxuICAgIHBpeGVscy5mb3JFYWNoKChsaW5lLCByb3cpID0+IHtcXG4gICAgICAgIGxpbmUuc3BsaXQoXCJcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcIiNcIiA/IGZnIDogYmcsIGNvbCwgcm93KSlcXG4gICAgfSlcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRhYmxlLmJ1ZmZlcilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAgICAgLnNldFBhcmFtcyh7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgIH0pXFxuICAgICAgICAubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgICAgIHdpZHRoOiA1LFxcbiAgICAgICAgICAgIGhlaWdodDogNSxcXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIixcXG4gICAgICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXFxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcXG4gICAgY3R4LnBhaW50KCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuaW1wb3J0IHsgdHlwZSBUZ2RDb250ZXh0LCBUZ2RUYWJsZVVpbnQ4LCBUZ2RUZXh0dXJlMkQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcbiAgICBjb25zdCBiZyA9IFsweDAwLCAweDk5LCAweGZmXVxcbiAgICBjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXVxcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcXG4gICAgY29uc3QgcGl4ZWxzID0gW1wiICAgICBcIiwgXCIgIyMjIFwiLCBcIiAgIyAgXCIsIFwiICAjICBcIiwgXCIgICAgIFwiXVxcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUZ2RUYWJsZVVpbnQ4KDUsIDUsIDMpXFxuICAgIHBpeGVscy5mb3JFYWNoKChsaW5lLCByb3cpID0+IHtcXG4gICAgICAgIGxpbmUuc3BsaXQoXCJcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcIiNcIiA/IGZnIDogYmcsIGNvbCwgcm93KSlcXG4gICAgfSlcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRhYmxlLmJ1ZmZlcilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAgICAgLnNldFBhcmFtcyh7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcXG4gICAgICAgIH0pXFxuICAgICAgICAubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgICAgIHdpZHRoOiA1LFxcbiAgICAgICAgICAgIGhlaWdodDogNSxcXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIixcXG4gICAgICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXFxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcXG4gICAgY3R4LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XFxufVxcblxcbmNvbnN0IENPTE9SUzogUmVjb3JkPHN0cmluZywgW251bWJlciwgbnVtYmVyLCBudW1iZXJdPiA9IHtcXG4gICAgXCIwXCI6IFswLCAwLjMzMywgMV0sXFxuICAgIFwiMVwiOiBbMSwgMC42NjYsIDBdLFxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUkdCKC4uLmxpbmVzOiBzdHJpbmdbXSkge1xcbiAgICBjb25zdCBjb2RlID0gbGluZXMuam9pbihcIlwiKVxcbiAgICBjb25zdCBkYXRhOiBudW1iZXJbXSA9IFtdXFxuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xcbiAgICAgICAgbGluZS5zcGxpdChcIlwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSlcXG4gICAgICAgIGxldCBzaXplID0gbGluZS5sZW5ndGggKiBcIlJHQlwiLmxlbmd0aFxcbiAgICAgICAgd2hpbGUgKHNpemUgJSA0ICE9PSAwKSB7XFxuICAgICAgICAgICAgZGF0YS5wdXNoKDApXFxuICAgICAgICAgICAgc2l6ZSsrXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEubWFwKCh2KSA9PiBNYXRoLmZsb29yKDI1NSAqIHYpKSlcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXIsXG5cdFRnZFByb2dyYW0sXG5cdHR5cGUgVGdkVGV4dHVyZTJELFxuXHRUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuXHRcdFx0dmVydDogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG5cdFx0XHRcdFwib3V0IHZlYzIgdmFyVVY7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0XCJ2YXJVViA9IHZlYzIoMC41KSAqIChhdHRQb2ludCArIHZlYzIoMS4wKSk7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9pbnQsIDAuMCwgMS4wKTtcIixcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRdLFxuXHRcdFx0ZnJhZzogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuXHRcdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHVuaVRleHR1cmU7XCIsXG5cdFx0XHRcdFwiaW4gdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG5cdFx0XHRcdFwifVwiLFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRcdGF0dFBvaW50OiBcInZlYzJcIixcblx0XHR9KTtcblx0XHQvLyBwcmV0dGllci1pZ25vcmVcblx0XHRkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSk7XG5cdFx0dGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMudmFvLmRlbGV0ZSgpO1xuXHRcdHRoaXMucHJnLmRlbGV0ZSgpO1xuXHR9XG5cblx0cGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgeyBjb250ZXh0LCBwcmcsIHZhbywgdGV4dHVyZSB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsIH0gPSBjb250ZXh0O1xuXHRcdHByZy51c2UoKTtcblx0XHR0ZXh0dXJlLmFjdGl2YXRlKDAsIHByZywgXCJ1bmlUZXh0dXJlXCIpO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XG5cdFx0dmFvLnVuYmluZCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIjtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdO1xuXHRjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXTtcblx0Ly8gcHJldHRpZXItaWdub3JlXG5cdGNvbnN0IHBpeGVscyA9IFtcIiAgICAgXCIsIFwiICMjIyBcIiwgXCIgICMgIFwiLCBcIiAgIyAgXCIsIFwiICAgICBcIl07XG5cdGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMyk7XG5cdHBpeGVscy5mb3JFYWNoKChsaW5lLCByb3cpID0+IHtcblx0XHRsaW5lXG5cdFx0XHQuc3BsaXQoXCJcIilcblx0XHRcdC5mb3JFYWNoKChjb2xvciwgY29sKSA9PiB0YWJsZS5zZXRWZWMoY29sb3IgPT09IFwiI1wiID8gZmcgOiBiZywgY29sLCByb3cpKTtcblx0fSk7XG5cdGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0YWJsZS5idWZmZXIpO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHsgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9IH0pXG5cdFx0LnNldFBhcmFtcyh7XG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0pXG5cdFx0LmxvYWREYXRhKGRhdGEsIHtcblx0XHRcdHdpZHRoOiA1LFxuXHRcdFx0aGVpZ2h0OiA1LFxuXHRcdFx0Zm9ybWF0OiBcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXCIsXG5cdFx0fSk7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpO1xuXHRjdHguYWRkKGJhY2tncm91bmQpO1xuXHRjdHgucGFpbnQoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz47XG59XG5cbmNvbnN0IENPTE9SUzogUmVjb3JkPHN0cmluZywgW251bWJlciwgbnVtYmVyLCBudW1iZXJdPiA9IHtcblx0XCIwXCI6IFswLCAwLjMzMywgMV0sXG5cdFwiMVwiOiBbMSwgMC42NjYsIDBdLFxufTtcblxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcblx0Y29uc3QgY29kZSA9IGxpbmVzLmpvaW4oXCJcIik7XG5cdGNvbnN0IGRhdGE6IG51bWJlcltdID0gW107XG5cdGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuXHRcdGxpbmUuc3BsaXQoXCJcIikubWFwKChkaWdpdCkgPT4gZGF0YS5wdXNoKC4uLihDT0xPUlNbZGlnaXRdID8/IFtdKSkpO1xuXHRcdGxldCBzaXplID0gbGluZS5sZW5ndGggKiBcIlJHQlwiLmxlbmd0aDtcblx0XHR3aGlsZSAoc2l6ZSAlIDQgIT09IDApIHtcblx0XHRcdGRhdGEucHVzaCgwKTtcblx0XHRcdHNpemUrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEubWFwKCh2KSA9PiBNYXRoLmZsb29yKDI1NSAqIHYpKSk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyIiwiVGdkUHJvZ3JhbSIsIlRnZFZlcnRleEFycmF5IiwiUGFpbnRlciIsImNvbnRleHQiLCJ0ZXh0dXJlIiwiZHMiLCJGbG9hdDMyQXJyYXkiLCJfZGVsZXRlIiwicGFpbnQiLCJ0aW1lIiwiZGVsYXkiLCJfdGhpcyIsInByZyIsInZhbyIsImdsIiwiVmlldyIsIlRnZFRleHR1cmUyRCIsImluaXQiLCJjdHgiLCJyIiwiZyIsImIiLCJSIiwiRyIsIkIiLCJkYXRhIiwiVWludDhBcnJheSIsImJhY2tncm91bmQiLCJUZ2RUYWJsZVVpbnQ4IiwiYmciLCJmZyIsInBpeGVscyIsInRhYmxlIiwibGluZSIsInJvdyIsImNvbG9yIiwiY29sIiwiQ09MT1JTIiwibWFrZVJHQiIsIl9rZXkiLCJsaW5lcyIsImNvZGUiLCJfaXRlcmF0b3JFcnJvciIsImRpZ2l0IiwiX2RhdGEiLCJfQ09MT1JTX2RpZ2l0Iiwic2l6ZSIsInYiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ1I7QUFFN0MsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBbXNDO0FBQzl0QyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFD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