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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/texture2d-from-data.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9kYXRhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy0yYmY0MzkuZWRkZWIwNDJmNzM2NDhjNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy9yYXcvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy9yYXcvcGFpbnRlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9fL3RhYmxlL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvcGFpbnRlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi90ZXh0dXJlMmQtZnJvbS1kYXRhLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IHIgPSAweDAwXFxuICAgIGNvbnN0IGcgPSAweDk5XFxuICAgIGNvbnN0IGIgPSAweGZmXFxuICAgIGNvbnN0IFIgPSAweGZmXFxuICAgIGNvbnN0IEcgPSAweDk5XFxuICAgIGNvbnN0IEIgPSAweDAwXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7XFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlLCBmb3JtYXQ6IFxcXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVxcXCIgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICBoZWlnaHQ6IDUsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXFxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcXG4gICAgY3R4LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBUZ2RDb250ZXh0LCBUZ2RUZXh0dXJlMkQgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcXFwiLi9wYWludGVyXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHIgPSAweDAwXFxuICAgIGNvbnN0IGcgPSAweDk5XFxuICAgIGNvbnN0IGIgPSAweGZmXFxuICAgIGNvbnN0IFIgPSAweGZmXFxuICAgIGNvbnN0IEcgPSAweDk5XFxuICAgIGNvbnN0IEIgPSAweDAwXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoW1xcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7XFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlLCBmb3JtYXQ6IFxcXCJSR0I4IC8gUkdCIC8gVU5TSUdORURfQllURVxcXCIgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICBoZWlnaHQ6IDUsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXFxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcXG4gICAgY3R4LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZERhdGFzZXQsIFRnZFBhaW50ZXIsIFRnZFByb2dyYW0sIHR5cGUgVGdkVGV4dHVyZTJELCBUZ2RWZXJ0ZXhBcnJheSB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuICAgICAgICAgICAgdmVydDogW1xuICAgICAgICAgICAgICAgIFwiI3ZlcnNpb24gMzAwIGVzXCIsXG4gICAgICAgICAgICAgICAgXCJpbiB2ZWMyIGF0dFBvaW50O1wiLFxuICAgICAgICAgICAgICAgIFwib3V0IHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1widmFyVVYgPSB2ZWMyKDAuNSkgKiAoYXR0UG9pbnQgKyB2ZWMyKDEuMCkpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgciA9IDB4MDBcbiAgICBjb25zdCBnID0gMHg5OVxuICAgIGNvbnN0IGIgPSAweGZmXG4gICAgY29uc3QgUiA9IDB4ZmZcbiAgICBjb25zdCBHID0gMHg5OVxuICAgIGNvbnN0IEIgPSAweDAwXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRdKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwge1xuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlLCBmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIiB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgIH0sXG4gICAgfSkubG9hZERhdGEoZGF0YSwge1xuICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgaGVpZ2h0OiA1LFxuICAgIH0pXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcbiAgICBjdHguYWRkKGJhY2tncm91bmQpXG4gICAgY3R4LnBhaW50KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBiZyA9IFsweDAwLCAweDk5LCAweGZmXVxcbiAgICBjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXVxcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcXG4gICAgY29uc3QgcGl4ZWxzID0gW1xcXCIgICAgIFxcXCIsIFxcXCIgIyMjIFxcXCIsIFxcXCIgICMgIFxcXCIsIFxcXCIgICMgIFxcXCIsIFxcXCIgICAgIFxcXCJdXFxuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMylcXG4gICAgcGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xcbiAgICAgICAgbGluZS5zcGxpdChcXFwiXFxcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcXFwiI1xcXCIgPyBmZyA6IGJnLCBjb2wsIHJvdykpXFxuICAgIH0pXFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0YWJsZS5idWZmZXIpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwgeyBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0gfSlcXG4gICAgICAgIC5zZXRQYXJhbXMoe1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSlcXG4gICAgICAgIC5sb2FkRGF0YShkYXRhLCB7XFxuICAgICAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICAgICAgaGVpZ2h0OiA1LFxcbiAgICAgICAgICAgIGZvcm1hdDogXFxcIlJHQjggLyBSR0IgLyBVTlNJR05FRF9CWVRFXFxcIixcXG4gICAgICAgIH0pXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpXFxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcXG4gICAgY3R4LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBUZ2RDb250ZXh0LCBUZ2RUYWJsZVVpbnQ4LCBUZ2RUZXh0dXJlMkQgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcXFwiLi9wYWludGVyXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdXFxuICAgIGNvbnN0IGZnID0gWzB4ZmYsIDB4OTksIDB4MDBdXFxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxcbiAgICBjb25zdCBwaXhlbHMgPSBbXFxcIiAgICAgXFxcIiwgXFxcIiAjIyMgXFxcIiwgXFxcIiAgIyAgXFxcIiwgXFxcIiAgIyAgXFxcIiwgXFxcIiAgICAgXFxcIl1cXG4gICAgY29uc3QgdGFibGUgPSBuZXcgVGdkVGFibGVVaW50OCg1LCA1LCAzKVxcbiAgICBwaXhlbHMuZm9yRWFjaCgobGluZSwgcm93KSA9PiB7XFxuICAgICAgICBsaW5lLnNwbGl0KFxcXCJcXFwiKS5mb3JFYWNoKChjb2xvciwgY29sKSA9PiB0YWJsZS5zZXRWZWMoY29sb3IgPT09IFxcXCIjXFxcIiA/IGZnIDogYmcsIGNvbCwgcm93KSlcXG4gICAgfSlcXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHRhYmxlLmJ1ZmZlcilcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAgICAgLnNldFBhcmFtcyh7XFxuICAgICAgICAgICAgbWFnRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICB9KVxcbiAgICAgICAgLmxvYWREYXRhKGRhdGEsIHtcXG4gICAgICAgICAgICB3aWR0aDogNSxcXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXFxuICAgICAgICAgICAgZm9ybWF0OiBcXFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcXFwiLFxcbiAgICAgICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXFxuY29uc3QgQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+ID0ge1xcbiAgICBcXFwiMFxcXCI6IFswLCAwLjMzMywgMV0sXFxuICAgIFxcXCIxXFxcIjogWzEsIDAuNjY2LCAwXSxcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcXG4gICAgY29uc3QgY29kZSA9IGxpbmVzLmpvaW4oXFxcIlxcXCIpXFxuICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW11cXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XFxuICAgICAgICBsaW5lLnNwbGl0KFxcXCJcXFwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSlcXG4gICAgICAgIGxldCBzaXplID0gbGluZS5sZW5ndGggKiBcXFwiUkdCXFxcIi5sZW5ndGhcXG4gICAgICAgIHdoaWxlIChzaXplICUgNCAhPT0gMCkge1xcbiAgICAgICAgICAgIGRhdGEucHVzaCgwKVxcbiAgICAgICAgICAgIHNpemUrK1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLm1hcCgodikgPT4gTWF0aC5mbG9vcigyNTUgKiB2KSkpXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZERhdGFzZXQsIFRnZFBhaW50ZXIsIFRnZFByb2dyYW0sIHR5cGUgVGdkVGV4dHVyZTJELCBUZ2RWZXJ0ZXhBcnJheSB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuICAgICAgICAgICAgdmVydDogW1xuICAgICAgICAgICAgICAgIFwiI3ZlcnNpb24gMzAwIGVzXCIsXG4gICAgICAgICAgICAgICAgXCJpbiB2ZWMyIGF0dFBvaW50O1wiLFxuICAgICAgICAgICAgICAgIFwib3V0IHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1widmFyVVYgPSB2ZWMyKDAuNSkgKiAoYXR0UG9pbnQgKyB2ZWMyKDEuMCkpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgYmcgPSBbMHgwMCwgMHg5OSwgMHhmZl1cbiAgICBjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXVxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IHBpeGVscyA9IFtcIiAgICAgXCIsIFwiICMjIyBcIiwgXCIgICMgIFwiLCBcIiAgIyAgXCIsIFwiICAgICBcIl1cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUZ2RUYWJsZVVpbnQ4KDUsIDUsIDMpXG4gICAgcGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xuICAgICAgICBsaW5lLnNwbGl0KFwiXCIpLmZvckVhY2goKGNvbG9yLCBjb2wpID0+IHRhYmxlLnNldFZlYyhjb2xvciA9PT0gXCIjXCIgPyBmZyA6IGJnLCBjb2wsIHJvdykpXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGFibGUuYnVmZmVyKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwgeyBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0gfSlcbiAgICAgICAgLnNldFBhcmFtcyh7XG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICB9KVxuICAgICAgICAubG9hZERhdGEoZGF0YSwge1xuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUkdCOCAvIFJHQiAvIFVOU0lHTkVEX0JZVEVcIixcbiAgICAgICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFBhaW50ZXIoY3R4LCB0ZXh0dXJlKVxuICAgIGN0eC5hZGQoYmFja2dyb3VuZClcbiAgICBjdHgucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cbn1cblxuY29uc3QgQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+ID0ge1xuICAgIFwiMFwiOiBbMCwgMC4zMzMsIDFdLFxuICAgIFwiMVwiOiBbMSwgMC42NjYsIDBdLFxufVxuXG5mdW5jdGlvbiBtYWtlUkdCKC4uLmxpbmVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNvZGUgPSBsaW5lcy5qb2luKFwiXCIpXG4gICAgY29uc3QgZGF0YTogbnVtYmVyW10gPSBbXVxuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsaW5lLnNwbGl0KFwiXCIpLm1hcCgoZGlnaXQpID0+IGRhdGEucHVzaCguLi4oQ09MT1JTW2RpZ2l0XSA/PyBbXSkpKVxuICAgICAgICBsZXQgc2l6ZSA9IGxpbmUubGVuZ3RoICogXCJSR0JcIi5sZW5ndGhcbiAgICAgICAgd2hpbGUgKHNpemUgJSA0ICE9PSAwKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goMClcbiAgICAgICAgICAgIHNpemUrK1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLm1hcCgodikgPT4gTWF0aC5mbG9vcigyNTUgKiB2KSkpXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZERhdGFzZXQiLCJUZ2RQYWludGVyIiwiVGdkUHJvZ3JhbSIsIlRnZFZlcnRleEFycmF5IiwiUGFpbnRlciIsImNvbnRleHQiLCJ0ZXh0dXJlIiwiZHMiLCJGbG9hdDMyQXJyYXkiLCJfZGVsZXRlIiwicGFpbnQiLCJ0aW1lIiwiZGVsYXkiLCJfdGhpcyIsInByZyIsInZhbyIsImdsIiwiVmlldyIsIlRnZFRleHR1cmUyRCIsImluaXQiLCJjdHgiLCJyIiwiZyIsImIiLCJSIiwiRyIsIkIiLCJkYXRhIiwiVWludDhBcnJheSIsImJhY2tncm91bmQiLCJUZ2RUYWJsZVVpbnQ4IiwiYmciLCJmZyIsInBpeGVscyIsInRhYmxlIiwibGluZSIsInJvdyIsImNvbG9yIiwiY29sIiwiQ09MT1JTIiwibWFrZVJHQiIsIl9rZXkiLCJsaW5lcyIsImNvZGUiLCJfaXRlcmF0b3JFcnJvciIsImRpZ2l0IiwiX2RhdGEiLCJfQ09MT1JTX2RpZ2l0Iiwic2l6ZSIsInYiLCJNYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ1I7QUFFN0MsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBOHVDO0FBQ3p3QyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixxREFBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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