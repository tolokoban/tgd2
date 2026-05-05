"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_data_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_cs-4d9173"], {
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
    "Detail #1": "    const r = 0x00\n    const g = 0x99\n    const b = 0xff\n    const R = 0xff\n    const G = 0x99\n    const B = 0x00\n    // prettier-ignore\n    const data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t])\n    const texture = new TgdTexture2D(ctx, {\n        storage: { flipY: true },\n        params: {\n            magFilter: \"NEAREST\",\n        },\n    }).loadData(data, {\n        width: 5,\n        height: 5,\n        internalFormat: \"RGB8\",\n        format: \"RGB\",\n    })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()"
};
var FULL = "import View from \"@/components/demo/Tgd\"\nimport { TgdContext, TgdTexture2D } from \"@tolokoban/tgd\"\nimport { Painter } from \"./painter\"\n\nfunction init(ctx: TgdContext) {\n    const r = 0x00\n    const g = 0x99\n    const b = 0xff\n    const R = 0xff\n    const G = 0x99\n    const B = 0x00\n    // prettier-ignore\n    const data = new Uint8Array([\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tR,\n\t\tG,\n\t\tB,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\tr,\n\t\tg,\n\t\tb,\n\t\t/* padding -> */ 0,\n\t])\n    const texture = new TgdTexture2D(ctx, {\n        storage: { flipY: true },\n        params: {\n            magFilter: \"NEAREST\",\n        },\n    }).loadData(data, {\n        width: 5,\n        height: 5,\n        internalFormat: \"RGB8\",\n        format: \"RGB\",\n    })\n    const background = new Painter(ctx, texture)\n    ctx.add(background)\n    ctx.paint()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n\nconst COLORS: Record<string, [number, number, number]> = {\n    \"0\": [0, 0.333, 1],\n    \"1\": [1, 0.666, 0],\n}\n\nfunction makeRGB(...lines: string[]) {\n    const code = lines.join(\"\")\n    const data: number[] = []\n    for (const line of lines) {\n        line.split(\"\").map((digit) => data.push(...(COLORS[digit] ?? [])))\n        let size = line.length * \"RGB\".length\n        while (size % 4 !== 0) {\n            data.push(0)\n            size++\n        }\n    }\n    return new Uint8Array(data.map((v) => Math.floor(255 * v)))\n}\n";
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
            flipY: true
        },
        params: {
            magFilter: "NEAREST"
        }
    }).loadData(data, {
        width: 5,
        height: 5,
        internalFormat: "RGB8",
        format: "RGB"
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
        lineNumber: 114,
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
    "Detail #1": '  const bg = [0x00, 0x99, 0xff];\n  const fg = [0xff, 0x99, 0x00];\n  // prettier-ignore\n  const pixels = ["     ", " ### ", "  #  ", "  #  ", "     "]\n  const table = new TgdTableUint8(5, 5, 3);\n  pixels.forEach((line, row) => {\n    line.split("").forEach((color, col) => table.setVec(color === "#" ? fg : bg, col, row));\n  });\n  const data = new Uint8Array(table.buffer);\n  const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n    .setParams({\n      magFilter: "NEAREST",\n    })\n    .loadData(data, {\n      width: 5,\n      height: 5,\n      internalFormat: "RGB8",\n      format: "RGB",\n    });\n  const background = new Painter(ctx, texture);\n  ctx.add(background);\n  ctx.paint();'
};
var FULL = 'import View from "@/components/demo/Tgd";\nimport { TgdContext, TgdTableUint8, TgdTexture2D } from "@tolokoban/tgd";\nimport { Painter } from "./painter";\n\nfunction init(ctx: TgdContext) {\n  const bg = [0x00, 0x99, 0xff];\n  const fg = [0xff, 0x99, 0x00];\n  // prettier-ignore\n  const pixels = ["     ", " ### ", "  #  ", "  #  ", "     "]\n  const table = new TgdTableUint8(5, 5, 3);\n  pixels.forEach((line, row) => {\n    line.split("").forEach((color, col) => table.setVec(color === "#" ? fg : bg, col, row));\n  });\n  const data = new Uint8Array(table.buffer);\n  const texture = new TgdTexture2D(ctx, { storage: { flipY: true } })\n    .setParams({\n      magFilter: "NEAREST",\n    })\n    .loadData(data, {\n      width: 5,\n      height: 5,\n      internalFormat: "RGB8",\n      format: "RGB",\n    });\n  const background = new Painter(ctx, texture);\n  ctx.add(background);\n  ctx.paint();\n}\n\nexport default function Demo() {\n  return <View onReady={init} />;\n}\n\nconst COLORS: Record<string, [number, number, number]> = {\n  "0": [0, 0.333, 1],\n  "1": [1, 0.666, 0],\n};\n\nfunction makeRGB(...lines: string[]) {\n  const code = lines.join("");\n  const data: number[] = [];\n  for (const line of lines) {\n    line.split("").map((digit) => data.push(...(COLORS[digit] ?? [])));\n    let size = line.length * "RGB".length;\n    while (size % 4 !== 0) {\n      data.push(0);\n      size++;\n    }\n  }\n  return new Uint8Array(data.map((v) => Math.floor(255 * v)));\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_texture2d_from_data_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/data/_/table/index.tsx",
                lineNumber: 23,
                columnNumber: 13
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
        internalFormat: "RGB8",
        format: "RGB"
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
        lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9kYXRhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jcy00ZDkxNzMuNzI2ZGIyOGJmMWU4MDUxZC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9fL3Jhdy9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vcmF3L3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2RhdGEvXy90YWJsZS9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9kYXRhL18vdGFibGUvdGV4dHVyZTJkLWZyb20tZGF0YS5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvZGF0YS9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgciA9IDB4MDBcXG4gICAgY29uc3QgZyA9IDB4OTlcXG4gICAgY29uc3QgYiA9IDB4ZmZcXG4gICAgY29uc3QgUiA9IDB4ZmZcXG4gICAgY29uc3QgRyA9IDB4OTlcXG4gICAgY29uc3QgQiA9IDB4MDBcXG4gICAgLy8gcHJldHRpZXItaWdub3JlXFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRdKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICBoZWlnaHQ6IDUsXFxuICAgICAgICBpbnRlcm5hbEZvcm1hdDogXFxcIlJHQjhcXFwiLFxcbiAgICAgICAgZm9ybWF0OiBcXFwiUkdCXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgciA9IDB4MDBcXG4gICAgY29uc3QgZyA9IDB4OTlcXG4gICAgY29uc3QgYiA9IDB4ZmZcXG4gICAgY29uc3QgUiA9IDB4ZmZcXG4gICAgY29uc3QgRyA9IDB4OTlcXG4gICAgY29uc3QgQiA9IDB4MDBcXG4gICAgLy8gcHJldHRpZXItaWdub3JlXFxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShbXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdFIsXFxuXFx0XFx0RyxcXG5cXHRcXHRCLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRSLFxcblxcdFxcdEcsXFxuXFx0XFx0QixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHRyLFxcblxcdFxcdGcsXFxuXFx0XFx0YixcXG5cXHRcXHQvKiBwYWRkaW5nIC0+ICovIDAsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0UixcXG5cXHRcXHRHLFxcblxcdFxcdEIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0cixcXG5cXHRcXHRnLFxcblxcdFxcdGIsXFxuXFx0XFx0LyogcGFkZGluZyAtPiAqLyAwLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdHIsXFxuXFx0XFx0ZyxcXG5cXHRcXHRiLFxcblxcdFxcdC8qIHBhZGRpbmcgLT4gKi8gMCxcXG5cXHRdKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjdHgsIHtcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgfSxcXG4gICAgfSkubG9hZERhdGEoZGF0YSwge1xcbiAgICAgICAgd2lkdGg6IDUsXFxuICAgICAgICBoZWlnaHQ6IDUsXFxuICAgICAgICBpbnRlcm5hbEZvcm1hdDogXFxcIlJHQjhcXFwiLFxcbiAgICAgICAgZm9ybWF0OiBcXFwiUkdCXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcXG4gICAgY3R4LmFkZChiYWNrZ3JvdW5kKVxcbiAgICBjdHgucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz5cXG59XFxuXFxuY29uc3QgQ09MT1JTOiBSZWNvcmQ8c3RyaW5nLCBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0+ID0ge1xcbiAgICBcXFwiMFxcXCI6IFswLCAwLjMzMywgMV0sXFxuICAgIFxcXCIxXFxcIjogWzEsIDAuNjY2LCAwXSxcXG59XFxuXFxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcXG4gICAgY29uc3QgY29kZSA9IGxpbmVzLmpvaW4oXFxcIlxcXCIpXFxuICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW11cXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XFxuICAgICAgICBsaW5lLnNwbGl0KFxcXCJcXFwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSlcXG4gICAgICAgIGxldCBzaXplID0gbGluZS5sZW5ndGggKiBcXFwiUkdCXFxcIi5sZW5ndGhcXG4gICAgICAgIHdoaWxlIChzaXplICUgNCAhPT0gMCkge1xcbiAgICAgICAgICAgIGRhdGEucHVzaCgwKVxcbiAgICAgICAgICAgIHNpemUrK1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLm1hcCgodikgPT4gTWF0aC5mbG9vcigyNTUgKiB2KSkpXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZERhdGFzZXQsIFRnZFBhaW50ZXIsIFRnZFByb2dyYW0sIHR5cGUgVGdkVGV4dHVyZTJELCBUZ2RWZXJ0ZXhBcnJheSB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuICAgICAgICAgICAgdmVydDogW1xuICAgICAgICAgICAgICAgIFwiI3ZlcnNpb24gMzAwIGVzXCIsXG4gICAgICAgICAgICAgICAgXCJpbiB2ZWMyIGF0dFBvaW50O1wiLFxuICAgICAgICAgICAgICAgIFwib3V0IHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1widmFyVVYgPSB2ZWMyKDAuNSkgKiAoYXR0UG9pbnQgKyB2ZWMyKDEuMCkpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgciA9IDB4MDBcbiAgICBjb25zdCBnID0gMHg5OVxuICAgIGNvbnN0IGIgPSAweGZmXG4gICAgY29uc3QgUiA9IDB4ZmZcbiAgICBjb25zdCBHID0gMHg5OVxuICAgIGNvbnN0IEIgPSAweDAwXG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KFtcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0Uixcblx0XHRHLFxuXHRcdEIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdFIsXG5cdFx0Ryxcblx0XHRCLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdHIsXG5cdFx0Zyxcblx0XHRiLFxuXHRcdC8qIHBhZGRpbmcgLT4gKi8gMCxcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRSLFxuXHRcdEcsXG5cdFx0Qixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHRyLFxuXHRcdGcsXG5cdFx0Yixcblx0XHQvKiBwYWRkaW5nIC0+ICovIDAsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0cixcblx0XHRnLFxuXHRcdGIsXG5cdFx0LyogcGFkZGluZyAtPiAqLyAwLFxuXHRdKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwge1xuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgfSxcbiAgICB9KS5sb2FkRGF0YShkYXRhLCB7XG4gICAgICAgIHdpZHRoOiA1LFxuICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgIGludGVybmFsRm9ybWF0OiBcIlJHQjhcIixcbiAgICAgICAgZm9ybWF0OiBcIlJHQlwiLFxuICAgIH0pXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcbiAgICBjdHguYWRkKGJhY2tncm91bmQpXG4gICAgY3R4LnBhaW50KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XG59XG5cbmNvbnN0IENPTE9SUzogUmVjb3JkPHN0cmluZywgW251bWJlciwgbnVtYmVyLCBudW1iZXJdPiA9IHtcbiAgICBcIjBcIjogWzAsIDAuMzMzLCAxXSxcbiAgICBcIjFcIjogWzEsIDAuNjY2LCAwXSxcbn1cblxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjb2RlID0gbGluZXMuam9pbihcIlwiKVxuICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW11cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGluZS5zcGxpdChcIlwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSlcbiAgICAgICAgbGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFwiUkdCXCIubGVuZ3RoXG4gICAgICAgIHdoaWxlIChzaXplICUgNCAhPT0gMCkge1xuICAgICAgICAgICAgZGF0YS5wdXNoKDApXG4gICAgICAgICAgICBzaXplKytcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5tYXAoKHYpID0+IE1hdGguZmxvb3IoMjU1ICogdikpKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWRhdGEuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgICcgIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdO1xcbiAgY29uc3QgZmcgPSBbMHhmZiwgMHg5OSwgMHgwMF07XFxuICAvLyBwcmV0dGllci1pZ25vcmVcXG4gIGNvbnN0IHBpeGVscyA9IFtcIiAgICAgXCIsIFwiICMjIyBcIiwgXCIgICMgIFwiLCBcIiAgIyAgXCIsIFwiICAgICBcIl1cXG4gIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMyk7XFxuICBwaXhlbHMuZm9yRWFjaCgobGluZSwgcm93KSA9PiB7XFxuICAgIGxpbmUuc3BsaXQoXCJcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcIiNcIiA/IGZnIDogYmcsIGNvbCwgcm93KSk7XFxuICB9KTtcXG4gIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0YWJsZS5idWZmZXIpO1xcbiAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAuc2V0UGFyYW1zKHtcXG4gICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICB9KVxcbiAgICAubG9hZERhdGEoZGF0YSwge1xcbiAgICAgIHdpZHRoOiA1LFxcbiAgICAgIGhlaWdodDogNSxcXG4gICAgICBpbnRlcm5hbEZvcm1hdDogXCJSR0I4XCIsXFxuICAgICAgZm9ybWF0OiBcIlJHQlwiLFxcbiAgICB9KTtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpO1xcbiAgY3R4LmFkZChiYWNrZ3JvdW5kKTtcXG4gIGN0eC5wYWludCgpOycsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gIGNvbnN0IGJnID0gWzB4MDAsIDB4OTksIDB4ZmZdO1xcbiAgY29uc3QgZmcgPSBbMHhmZiwgMHg5OSwgMHgwMF07XFxuICAvLyBwcmV0dGllci1pZ25vcmVcXG4gIGNvbnN0IHBpeGVscyA9IFtcIiAgICAgXCIsIFwiICMjIyBcIiwgXCIgICMgIFwiLCBcIiAgIyAgXCIsIFwiICAgICBcIl1cXG4gIGNvbnN0IHRhYmxlID0gbmV3IFRnZFRhYmxlVWludDgoNSwgNSwgMyk7XFxuICBwaXhlbHMuZm9yRWFjaCgobGluZSwgcm93KSA9PiB7XFxuICAgIGxpbmUuc3BsaXQoXCJcIikuZm9yRWFjaCgoY29sb3IsIGNvbCkgPT4gdGFibGUuc2V0VmVjKGNvbG9yID09PSBcIiNcIiA/IGZnIDogYmcsIGNvbCwgcm93KSk7XFxuICB9KTtcXG4gIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0YWJsZS5idWZmZXIpO1xcbiAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY3R4LCB7IHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSB9KVxcbiAgICAuc2V0UGFyYW1zKHtcXG4gICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxcbiAgICB9KVxcbiAgICAubG9hZERhdGEoZGF0YSwge1xcbiAgICAgIHdpZHRoOiA1LFxcbiAgICAgIGhlaWdodDogNSxcXG4gICAgICBpbnRlcm5hbEZvcm1hdDogXCJSR0I4XCIsXFxuICAgICAgZm9ybWF0OiBcIlJHQlwiLFxcbiAgICB9KTtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgUGFpbnRlcihjdHgsIHRleHR1cmUpO1xcbiAgY3R4LmFkZChiYWNrZ3JvdW5kKTtcXG4gIGN0eC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+O1xcbn1cXG5cXG5jb25zdCBDT0xPUlM6IFJlY29yZDxzdHJpbmcsIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXT4gPSB7XFxuICBcIjBcIjogWzAsIDAuMzMzLCAxXSxcXG4gIFwiMVwiOiBbMSwgMC42NjYsIDBdLFxcbn07XFxuXFxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcXG4gIGNvbnN0IGNvZGUgPSBsaW5lcy5qb2luKFwiXCIpO1xcbiAgY29uc3QgZGF0YTogbnVtYmVyW10gPSBbXTtcXG4gIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xcbiAgICBsaW5lLnNwbGl0KFwiXCIpLm1hcCgoZGlnaXQpID0+IGRhdGEucHVzaCguLi4oQ09MT1JTW2RpZ2l0XSA/PyBbXSkpKTtcXG4gICAgbGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFwiUkdCXCIubGVuZ3RoO1xcbiAgICB3aGlsZSAoc2l6ZSAlIDQgIT09IDApIHtcXG4gICAgICBkYXRhLnB1c2goMCk7XFxuICAgICAgc2l6ZSsrO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5tYXAoKHYpID0+IE1hdGguZmxvb3IoMjU1ICogdikpKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyB0eXBlIFRnZENvbnRleHQsIFRnZERhdGFzZXQsIFRnZFBhaW50ZXIsIFRnZFByb2dyYW0sIHR5cGUgVGdkVGV4dHVyZTJELCBUZ2RWZXJ0ZXhBcnJheSB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuICAgICAgICAgICAgdmVydDogW1xuICAgICAgICAgICAgICAgIFwiI3ZlcnNpb24gMzAwIGVzXCIsXG4gICAgICAgICAgICAgICAgXCJpbiB2ZWMyIGF0dFBvaW50O1wiLFxuICAgICAgICAgICAgICAgIFwib3V0IHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1widmFyVVYgPSB2ZWMyKDAuNSkgKiAoYXR0UG9pbnQgKyB2ZWMyKDEuMCkpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRhYmxlVWludDgsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgYmcgPSBbMHgwMCwgMHg5OSwgMHhmZl1cbiAgICBjb25zdCBmZyA9IFsweGZmLCAweDk5LCAweDAwXVxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIGNvbnN0IHBpeGVscyA9IFtcIiAgICAgXCIsIFwiICMjIyBcIiwgXCIgICMgIFwiLCBcIiAgIyAgXCIsIFwiICAgICBcIl1cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUZ2RUYWJsZVVpbnQ4KDUsIDUsIDMpXG4gICAgcGl4ZWxzLmZvckVhY2goKGxpbmUsIHJvdykgPT4ge1xuICAgICAgICBsaW5lLnNwbGl0KFwiXCIpLmZvckVhY2goKGNvbG9yLCBjb2wpID0+IHRhYmxlLnNldFZlYyhjb2xvciA9PT0gXCIjXCIgPyBmZyA6IGJnLCBjb2wsIHJvdykpXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGFibGUuYnVmZmVyKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGN0eCwgeyBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0gfSlcbiAgICAgICAgLnNldFBhcmFtcyh7XG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICB9KVxuICAgICAgICAubG9hZERhdGEoZGF0YSwge1xuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICBpbnRlcm5hbEZvcm1hdDogXCJSR0I4XCIsXG4gICAgICAgICAgICBmb3JtYXQ6IFwiUkdCXCIsXG4gICAgICAgIH0pXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBQYWludGVyKGN0eCwgdGV4dHVyZSlcbiAgICBjdHguYWRkKGJhY2tncm91bmQpXG4gICAgY3R4LnBhaW50KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XG59XG5cbmNvbnN0IENPTE9SUzogUmVjb3JkPHN0cmluZywgW251bWJlciwgbnVtYmVyLCBudW1iZXJdPiA9IHtcbiAgICBcIjBcIjogWzAsIDAuMzMzLCAxXSxcbiAgICBcIjFcIjogWzEsIDAuNjY2LCAwXSxcbn1cblxuZnVuY3Rpb24gbWFrZVJHQiguLi5saW5lczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjb2RlID0gbGluZXMuam9pbihcIlwiKVxuICAgIGNvbnN0IGRhdGE6IG51bWJlcltdID0gW11cbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGluZS5zcGxpdChcIlwiKS5tYXAoKGRpZ2l0KSA9PiBkYXRhLnB1c2goLi4uKENPTE9SU1tkaWdpdF0gPz8gW10pKSlcbiAgICAgICAgbGV0IHNpemUgPSBsaW5lLmxlbmd0aCAqIFwiUkdCXCIubGVuZ3RoXG4gICAgICAgIHdoaWxlIChzaXplICUgNCAhPT0gMCkge1xuICAgICAgICAgICAgZGF0YS5wdXNoKDApXG4gICAgICAgICAgICBzaXplKytcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5tYXAoKHYpID0+IE1hdGguZmxvb3IoMjU1ICogdikpKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlciIsIlRnZFByb2dyYW0iLCJUZ2RWZXJ0ZXhBcnJheSIsIlBhaW50ZXIiLCJjb250ZXh0IiwidGV4dHVyZSIsImRzIiwiRmxvYXQzMkFycmF5IiwiX2RlbGV0ZSIsInBhaW50IiwidGltZSIsImRlbGF5IiwiX3RoaXMiLCJwcmciLCJ2YW8iLCJnbCIsIlZpZXciLCJUZ2RUZXh0dXJlMkQiLCJpbml0IiwiY3R4IiwiciIsImciLCJiIiwiUiIsIkciLCJCIiwiZGF0YSIsIlVpbnQ4QXJyYXkiLCJiYWNrZ3JvdW5kIiwiQ09MT1JTIiwibWFrZVJHQiIsIl9rZXkiLCJsaW5lcyIsImNvZGUiLCJfaXRlcmF0b3JFcnJvciIsImxpbmUiLCJkaWdpdCIsIl9kYXRhIiwiX0NPTE9SU19kaWdpdCIsInNpemUiLCJ2IiwiTWF0aCIsIlRnZFRhYmxlVWludDgiLCJiZyIsImZnIiwicGl4ZWxzIiwidGFibGUiLCJyb3ciLCJjb2xvciIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNSO0FBRTdDLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQW13QztBQUM5eEMsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0oscURBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJB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