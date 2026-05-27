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
    "Detail #1": "    const r = 0x00\n    const g = 0x99\n    const b = 0xff\n    const R = 0xff\n    const G = 0x99\n    const B = 0x00\n    // prettier-ignore\n    const data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t])\n    const texture = new TgdTexture2D(ctx, {\n        storage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n        params: {\n            magFilter: \"NEAREST\",\n        },\n    }).loadData(data, {\n        width: 5,\n        height: 5,\n    })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"
};
var FULL = "import View from \"@/components/demo/Tgd\"\nimport { TgdContext, TgdTexture2D } from \"@tolokoban/tgd\"\nimport { Painter } from \"./painter\"\n\nfunction init(ctx: TgdContext) {\n    const r = 0x00\n    const g = 0x99\n    const b = 0xff\n    const R = 0xff\n    const G = 0x99\n    const B = 0x00\n    // prettier-ignore\n    const data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t])\n    const texture = new TgdTexture2D(ctx, {\n        storage: { flipY: true, format: \"RGB8 / RGB / UNSIGNED_BYTE\" },\n        params: {\n            magFilter: \"NEAREST\",\n        },\n    }).loadData(data, {\n        width: 5,\n        height: 5,\n    })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n";
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
        columnNumber: 12
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
    "Detail #1": "    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = [\"     \", \" ### \", \"  #  \", \"  #  \", \"     \"]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split(\"\").forEach((color, col) => table.setVec(color === \"#\" ? fg : bg, col, row))\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n        .setParams({\n            magFilter: \"NEAREST\",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            format: \"RGB8 / RGB / UNSIGNED_BYTE\",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"
};
var FULL = "import View from \"@/components/demo/Tgd\"\nimport { TgdContext, TgdTableUint8, TgdTexture2D } from \"@tolokoban/tgd\"\nimport { Painter } from \"./painter\"\n\nfunction init(ctx: TgdContext) {\n    const bg = [0x00, 0x99, 0xff]\n    const fg = [0xff, 0x99, 0x00]\n    // prettier-ignore\n    const pixels = [\"     \", \" ### \", \"  #  \", \"  #  \", \"     \"]\n    const table = new TgdTableUint8(5, 5, 3)\n    pixels.forEach((line, row) => {\n        line.split(\"\").forEach((color, col) => table.setVec(color === \"#\" ? fg : bg, col, row))\n    })\n    const data = new Uint8Array(table.buffer)\n    const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n        .setParams({\n            magFilter: \"NEAREST\",\n        })\n        .loadData(data, {\n            width: 5,\n            height: 5,\n            format: \"RGB8 / RGB / UNSIGNED_BYTE\",\n        })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nconst COLORS: Record<string, [number, number, number]> = {\n    \"0\": [0, 0.333, 1],\n    \"1\": [1, 0.666, 0],\n}\n\nfunction makeRGB(...lines: string[]) {\n    const code = lines.join(\"\")\n    const data: number[] = []\n    for (const line of lines) {\n        line.split(\"\").map((digit) => data.push(...(COLORS[digit] ?? [])))\n        let size = line.length * \"RGB\".length\n        while (size % 4 !== 0) {\n            data.push(0)\n            size++\n        }\n    }\n    return new Uint8Array(data.map((v) => Math.floor(255 * v)))\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_texture2d_from_data_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                lineNumber: 16,
                columnNumber: 9
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
        lineNumber: 32,
        columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9kYXRhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy0yYmY0MzkuYWY3NTgxNTViYjc1Y2ExZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9fL3Jhdy9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgciA9IDB4MDBcXG4gICAgY29uc3QgZyA9IDB4OTlcXG4gICAgY29uc3QgYiA9IDB4ZmZcXG4gICAgY29uc3QgUiA9IDB4ZmZcXG4gICAgY29uc3QgRyA9IDB4OTlcXG4gICAgY29uc3QgQiA9IDB4MDBcXG4gICAgLy8gcHJldHRpZXItaWdub3JlXFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRdKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXFxcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXFxcIiB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkRGF0YShkYXRhLCB7XFxuICAgICAgICB3aWR0aDogNSxcXG4gICAgICAgIGhlaWdodDogNSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgciA9IDB4MDBcXG4gICAgY29uc3QgZyA9IDB4OTlcXG4gICAgY29uc3QgYiA9IDB4ZmZcXG4gICAgY29uc3QgUiA9IDB4ZmZcXG4gICAgY29uc3QgRyA9IDB4OTlcXG4gICAgY29uc3QgQiA9IDB4MDBcXG4gICAgLy8gcHJldHRpZXItaWdub3JlXFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRdKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXFxcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXFxcIiB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9LFxcbiAgICB9KS5sb2FkRGF0YShkYXRhLCB7XFxuICAgICAgICB3aWR0aDogNSxcXG4gICAgICAgIGhlaWdodDogNSxcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkRGF0YXNldCwgVGdkUGFpbnRlciwgVGdkUHJvZ3JhbSwgdHlwZSBUZ2RUZXh0dXJlMkQsIFRnZFZlcnRleEFycmF5IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJ2YXJVViA9IHZlYzIoMC41KSAqIChhdHRQb2ludCArIHZlYzIoMS4wKSk7XCIsIFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvaW50LCAwLjAsIDEuMCk7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZyYWc6IFtcbiAgICAgICAgICAgICAgICBcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuICAgICAgICAgICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1bmlUZXh0dXJlO1wiLFxuICAgICAgICAgICAgICAgIFwiaW4gdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcIm91dCB2ZWM0IEZyYWdDb2xvcjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG4gICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzJcIixcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGRzLnNldChcImF0dFBvaW50XCIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCArMSwgKzEsICsxLCAtMSwgLTEsICsxLCAtMV0pKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RzXSlcbiAgICB9XG5cbiAgICBkZWxldGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIHRleHR1cmUgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCB9ID0gY29udGV4dFxuICAgICAgICBwcmcudXNlKClcbiAgICAgICAgdGV4dHVyZS5hY3RpdmF0ZSgwLCBwcmcsIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCByID0gMHgwMFxuICAgIGNvbnN0IGcgPSAweDk5XG4gICAgY29uc3QgYiA9IDB4ZmZcbiAgICBjb25zdCBSID0gMHhmZlxuICAgIGNvbnN0IEcgPSAweDk5XG4gICAgY29uc3QgQiA9IDB4MDBcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdF0pXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7XG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUsIGZvcm1hdDogXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVwiIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgfSxcbiAgICB9KS5sb2FkRGF0YShkYXRhLCB7XG4gICAgICAgIHdpZHRoOiA1LFxuICAgICAgICBoZWlnaHQ6IDUsXG4gICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKVxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcbiAgICBjdHgucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi90ZXh0dXJlMmQtZnJvbS1kYXRhLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdXFxuICAgIGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBwaXhlbHMgPSBbXFxcIiAgICAgXFxcIiwgXFxcIiAjIyMgXFxcIiwgXFxcIiAgIyAgXFxcIiwgXFxcIiAgIyAgXFxcIiwgXFxcIiAgICAgXFxcIl1cXG4gICAgY29uc3QgdGFibGUgPSBuZXcgVGdkVGFibGVVaW50OCg1LCA1LCAzKVxcbiAgICBwaXhlbHMuZm9yRWFjaCgobGluZSwgcm93KSA9PiB7XFxuICAgICAgICBsaW5lLnNwbGl0KFxcXCJcXFwiKS5mb3JFYWNoKChjb2xvciwgY29sKSA9PiB0YWJsZS5zZXRWZWMoY29sb3IgPT09IFxcXCIjXFxcIiA/IGZnIDogYmcsIGNvbCwgcm93KSlcXG4gICAgfSlcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRhYmxlLmJ1ZmZlcilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAgICAgLnNldFBhcmFtcyh7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgLmxvYWREYXRhKGRhdGEsIHtcXG4gICAgICAgICAgICB3aWR0aDogNSxcXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXFxuICAgICAgICAgICAgZm9ybWF0OiBcXFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcXFwiLFxcbiAgICAgICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgYmcgPSBbMHgwMCwgMHg5OSwgMHhmZl1cXG4gICAgY29uc3QgZmcgPSBbMHhmZiwgMHg5OSwgMHgwMF1cXG4gICAgLy8gcHJldHRpZXItaWdub3JlXFxuICAgIGNvbnN0IHBpeGVscyA9IFtcXFwiICAgICBcXFwiLCBcXFwiICMjIyBcXFwiLCBcXFwiICAjICBcXFwiLCBcXFwiICAjICBcXFwiLCBcXFwiICAgICBcXFwiXVxcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUZ2RUYWJsZVVpbnQ4KDUsIDUsIDMpXFxuICAgIHBpeGVscy5mb3JFYWNoKChsaW5lLCByb3cpID0+IHtcXG4gICAgICAgIGxpbmUuc3BsaXQoXFxcIlxcXCIpLmZvckVhY2goKGNvbG9yLCBjb2wpID0+IHRhYmxlLnNldFZlYyhjb2xvciA9PT0gXFxcIiNcXFwiID8gZmcgOiBiZywgY29sLCByb3cpKVxcbiAgICB9KVxcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGFibGUuYnVmZmVyKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHsgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9IH0pXFxuICAgICAgICAuc2V0UGFyYW1zKHtcXG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgIH0pXFxuICAgICAgICAubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgICAgIHdpZHRoOiA1LFxcbiAgICAgICAgICAgIGhlaWdodDogNSxcXG4gICAgICAgICAgICBmb3JtYXQ6IFxcXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVxcXCIsXFxuICAgICAgICB9KVxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKVxcbiAgICBjdHguYWRkKGJhY2tncm91bmQpXFxuICAgIGN0eC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxcbn1cXG5cXG5jb25zdCBDT0xPUlM6IFJlY29yZDxzdHJpbmcsIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXT4gPSB7XFxuICAgIFxcXCIwXFxcIjogWzAsIDAuMzMzLCAxXSxcXG4gICAgXFxcIjFcXFwiOiBbMSwgMC42NjYsIDBdLFxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlUkdCKC4uLmxpbmVzOiBzdHJpbmdbXSkge1xcbiAgICBjb25zdCBjb2RlID0gbGluZXMuam9pbihcXFwiXFxcIilcXG4gICAgY29uc3QgZGF0YTogbnVtYmVyW10gPSBbXVxcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcXG4gICAgICAgIGxpbmUuc3BsaXQoXFxcIlxcXCIpLm1hcCgoZGlnaXQpID0+IGRhdGEucHVzaCguLi4oQ09MT1JTW2RpZ2l0XSA/PyBbXSkpKVxcbiAgICAgICAgbGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFxcXCJSR0JcXFwiLmxlbmd0aFxcbiAgICAgICAgd2hpbGUgKHNpemUgJSA0ICE9PSAwKSB7XFxuICAgICAgICAgICAgZGF0YS5wdXNoKDApXFxuICAgICAgICAgICAgc2l6ZSsrXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEubWFwKCh2KSA9PiBNYXRoLmZsb29yKDI1NSAqIHYpKSlcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkRGF0YXNldCwgVGdkUGFpbnRlciwgVGdkUHJvZ3JhbSwgdHlwZSBUZ2RUZXh0dXJlMkQsIFRnZFZlcnRleEFycmF5IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJ2YXJVViA9IHZlYzIoMC41KSAqIChhdHRQb2ludCArIHZlYzIoMS4wKSk7XCIsIFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvaW50LCAwLjAsIDEuMCk7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZyYWc6IFtcbiAgICAgICAgICAgICAgICBcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuICAgICAgICAgICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1bmlUZXh0dXJlO1wiLFxuICAgICAgICAgICAgICAgIFwiaW4gdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcIm91dCB2ZWM0IEZyYWdDb2xvcjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG4gICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzJcIixcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGRzLnNldChcImF0dFBvaW50XCIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCArMSwgKzEsICsxLCAtMSwgLTEsICsxLCAtMV0pKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RzXSlcbiAgICB9XG5cbiAgICBkZWxldGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIHRleHR1cmUgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCB9ID0gY29udGV4dFxuICAgICAgICBwcmcudXNlKClcbiAgICAgICAgdGV4dHVyZS5hY3RpdmF0ZSgwLCBwcmcsIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkVGFibGVVaW50OCwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBiZyA9IFsweDAwLCAweDk5LCAweGZmXVxuICAgIGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgcGl4ZWxzID0gW1wiICAgICBcIiwgXCIgIyMjIFwiLCBcIiAgIyAgXCIsIFwiICAjICBcIiwgXCIgICAgIFwiXVxuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMylcbiAgICBwaXhlbHMuZm9yRWFjaCgobGluZSwgcm93KSA9PiB7XG4gICAgICAgIGxpbmUuc3BsaXQoXCJcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcIiNcIiA/IGZnIDogYmcsIGNvbCwgcm93KSlcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0YWJsZS5idWZmZXIpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxuICAgICAgICAuc2V0UGFyYW1zKHtcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5sb2FkRGF0YShkYXRhLCB7XG4gICAgICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgIGZvcm1hdDogXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVwiLFxuICAgICAgICB9KVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxuICAgIGN0eC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxufVxuXG5jb25zdCBDT0xPUlM6IFJlY29yZDxzdHJpbmcsIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXT4gPSB7XG4gICAgXCIwXCI6IFswLCAwLjMzMywgMV0sXG4gICAgXCIxXCI6IFsxLCAwLjY2NiwgMF0sXG59XG5cbmZ1bmN0aW9uIG1ha2VSR0IoLi4ubGluZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29kZSA9IGxpbmVzLmpvaW4oXCJcIilcbiAgICBjb25zdCBkYXRhOiBudW1iZXJbXSA9IFtdXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgIGxpbmUuc3BsaXQoXCJcIikubWFwKChkaWdpdCkgPT4gZGF0YS5wdXNoKC4uLihDT0xPUlNbZGlnaXRdID8/IFtdKSkpXG4gICAgICAgIGxldCBzaXplID0gbGluZS5sZW5ndGggKiBcIlJHQlwiLmxlbmd0aFxuICAgICAgICB3aGlsZSAoc2l6ZSAlIDQgIT09IDApIHtcbiAgICAgICAgICAgIGRhdGEucHVzaCgwKVxuICAgICAgICAgICAgc2l6ZSsrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEubWFwKCh2KSA9PiBNYXRoLmZsb29yKDI1NSAqIHYpKSlcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkVmVydGV4QXJyYXkiLCJQYWludGVyIiwiY29udGV4dCIsInRleHR1cmUiLCJkcyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsInRpbWUiLCJkZWxheSIsIl90aGlzIiwicHJnIiwidmFvIiwiZ2wiLCJWaWV3IiwiVGdkVGV4dHVyZTJEIiwiaW5pdCIsImN0eCIsInIiLCJnIiwiYiIsIlIiLCJHIiwiQiIsImRhdGEiLCJVaW50OEFycmF5IiwiYmFja2dyb3VuZCIsIlRnZFRhYmxlVWludDgiLCJiZyIsImZnIiwicGl4ZWxzIiwidGFibGUiLCJsaW5lIiwicm93IiwiY29sb3IiLCJjb2wiLCJDT0xPUlMiLCJtYWtlUkdCIiwiX2tleSIsImxpbmVzIiwiY29kZSIsIl9pdGVyYXRvckVycm9yIiwiZGlnaXQiLCJfZGF0YSIsIl9DT0xPUlNfZGlnaXQiLCJzaXplIiwidiIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDUjtBQUU3QyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUE4dUM7QUFDendDLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHFEQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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