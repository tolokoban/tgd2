"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_bitmap_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-95a4c4"], {
50139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _texture2d_from_bitmap_demo__rspack_import_4 = __webpack_require__(85060);
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
    "Detail #1": "    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, {\n        storage: { flipY: true },\n    }).loadBitmap(canvas)\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()"
};
var FULL = "import View from \"@/components/demo/Tgd\"\nimport { TgdContext, TgdTexture2D, WebglTextureParameters, tgdCanvasCreateWithContext2D } from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport { Painter } from \"./painter\"\n\nfunction init(context: TgdContext, refUpdate: { current: ((params: WebglTextureParameters) => void) | null }) {\n    const canvas = makeCanvas()\n    const texture = new TgdTexture2D(context, {\n        storage: { flipY: true },\n    }).loadBitmap(canvas)\n    refUpdate.current = (params: WebglTextureParameters) => {\n        texture.setParams(params)\n        context.paint()\n    }\n    const painter = new Painter(context, texture)\n    context.add(painter)\n    context.paint()\n}\n\nexport default function Demo() {\n    const refUpdate = React.useRef<((params: WebglTextureParameters) => void) | null>(null)\n    const update = (params: WebglTextureParameters) => {\n        const f = refUpdate.current\n        if (!f) return\n\n        f(params)\n    }\n    const [wrapS, setWrapS] = React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    const [wrapT, setWrapT] = React.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\")\n    return (\n        <View onReady={(context: TgdContext) => init(context, refUpdate)}>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\">\n                <ViewOptions\n                    label=\"Wrap S\"\n                    value={wrapS}\n                    onChange={(wrapS) => {\n                        setWrapS(wrapS)\n                        update({ wrapS })\n                    }}>\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n                <ViewOptions\n                    label=\"Wrap T\"\n                    value={wrapT}\n                    onChange={(wrapT) => {\n                        setWrapT(wrapT)\n                        update({ wrapT })\n                    }}>\n                    <div key=\"REPEAT\">REPEAT</div>\n                    <div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n                    <div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\nfunction makeCanvas() {\n    const w = 256\n    const h = 256\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n    ctx.fillStyle = \"#09f\"\n    ctx.fillRect(0, 0, w, h)\n    ctx.fillStyle = \"#f90\"\n    ctx.font = `${h / 2}px serif`\n    ctx.textAlign = \"center\"\n    ctx.textBaseline = \"middle\"\n    ctx.fillText(\"TGD\", w / 2, h / 2)\n    return canvas\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_texture2d_from_bitmap_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
30630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
                    "varUV = attPoint + vec2(0.5);",
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
85060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _components_demo_Tgd__rspack_import_1 = __webpack_require__(43475);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var react__rspack_import_4 = __webpack_require__(96540);
/* import */ var react__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_4);
/* import */ var _painter__rspack_import_5 = __webpack_require__(30630);
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






function init(context, refUpdate) {
    // #begin
    var canvas = makeCanvas();
    var texture = new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context, {
        storage: {
            flipY: true
        }
    }).loadBitmap(canvas);
    refUpdate.current = function(params) {
        texture.setParams(params);
        context.paint();
    };
    var painter = new _painter__rspack_import_5.Painter(context, texture);
    context.add(painter);
    context.paint();
// #end
}
function Demo() {
    var refUpdate = react__rspack_import_4_default().useRef(null);
    var update = function update(params) {
        var f = refUpdate.current;
        if (!f) return;
        f(params);
    };
    var _React_useState = _sliced_to_array(react__rspack_import_4_default().useState("REPEAT"), 2), wrapS = _React_useState[0], setWrapS = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_4_default().useState("REPEAT"), 2), wrapT = _React_useState1[0], setWrapT = _React_useState1[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_1["default"], {
        onReady: function onReady(context) {
            return init(context, refUpdate);
        },
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewOptions, {
                    label: "Wrap S",
                    value: wrapS,
                    onChange: function onChange(wrapS) {
                        setWrapS(wrapS);
                        update({
                            wrapS: wrapS
                        });
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "REPEAT"
                        }, "REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewOptions, {
                    label: "Wrap T",
                    value: wrapT,
                    onChange: function onChange(wrapT) {
                        setWrapT(wrapT);
                        update({
                            wrapT: wrapT
                        });
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "REPEAT"
                        }, "REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
function makeCanvas() {
    var w = 256;
    var h = 256;
    var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_2.tgdCanvasCreateWithContext2D)(w, h), canvas = _tgdCanvasCreateWithContext2D.canvas, ctx = _tgdCanvasCreateWithContext2D.ctx;
    ctx.fillStyle = "#09f";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#f90";
    ctx.font = "".concat(h / 2, "px serif");
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("TGD", w / 2, h / 2);
    return canvas;
}


},
79763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(50139);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Texture2D from bitmap"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We call Bitmap, an image, a video, a canvas, ... All the following types,\nactually: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "ImageData"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLImageElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 24
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLCanvasElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 44
                    }, this),
                    ",\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLVideoElement"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "ImageBitmap"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This is the easiest way to import data into a texture."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Youla!"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9iaXRtYXBfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy05NWE0YzQuZWJmMmZmZDRjN2I1ZGI4Yi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvXy9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvYml0bWFwL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vdGV4dHVyZTJkLWZyb20tYml0bWFwLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICByZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG4gICAgICAgIHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKVxcbiAgICBjb250ZXh0LmFkZChwYWludGVyKVxcbiAgICBjb250ZXh0LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBUZ2RDb250ZXh0LCBUZ2RUZXh0dXJlMkQsIFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMsIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXFxcIi4vcGFpbnRlclxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIHJlZlVwZGF0ZTogeyBjdXJyZW50OiAoKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4gdm9pZCkgfCBudWxsIH0pIHtcXG4gICAgY29uc3QgY2FudmFzID0gbWFrZUNhbnZhcygpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgIHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSxcXG4gICAgfSkubG9hZEJpdG1hcChjYW52YXMpXFxuICAgIHJlZlVwZGF0ZS5jdXJyZW50ID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xcbiAgICAgICAgdGV4dHVyZS5zZXRQYXJhbXMocGFyYW1zKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyKGNvbnRleHQsIHRleHR1cmUpXFxuICAgIGNvbnRleHQuYWRkKHBhaW50ZXIpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICBjb25zdCByZWZVcGRhdGUgPSBSZWFjdC51c2VSZWY8KChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgdXBkYXRlID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xcbiAgICAgICAgY29uc3QgZiA9IHJlZlVwZGF0ZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWYpIHJldHVyblxcblxcbiAgICAgICAgZihwYXJhbXMpXFxuICAgIH1cXG4gICAgY29uc3QgW3dyYXBTLCBzZXRXcmFwU10gPSBSZWFjdC51c2VTdGF0ZTxXZWJnbFRleHR1cmVQYXJhbWV0ZXJzW1xcXCJ3cmFwU1xcXCJdPihcXFwiUkVQRUFUXFxcIilcXG4gICAgY29uc3QgW3dyYXBULCBzZXRXcmFwVF0gPSBSZWFjdC51c2VTdGF0ZTxXZWJnbFRleHR1cmVQYXJhbWV0ZXJzW1xcXCJ3cmFwU1xcXCJdPihcXFwiUkVQRUFUXFxcIilcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3IG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlVwZGF0ZSl9PlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIldyYXAgU1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwU31cXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsod3JhcFMpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXcmFwUyh3cmFwUylcXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwUyB9KVxcbiAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiUkVQRUFUXFxcIj5SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJDTEFNUF9UT19FREdFXFxcIj5DTEFNUF9UT19FREdFPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiTUlSUk9SRURfUkVQRUFUXFxcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zXFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiV3JhcCBUXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dyYXBUfVxcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh3cmFwVCkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdyYXBUKHdyYXBUKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSh7IHdyYXBUIH0pXFxuICAgICAgICAgICAgICAgICAgICB9fT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJSRVBFQVRcXFwiPlJFUEVBVDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIkNMQU1QX1RPX0VER0VcXFwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJNSVJST1JFRF9SRVBFQVRcXFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XFxuICAgIGNvbnN0IHcgPSAyNTZcXG4gICAgY29uc3QgaCA9IDI1NlxcbiAgICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpXFxuICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiIzA5ZlxcXCJcXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpXFxuICAgIGN0eC5maWxsU3R5bGUgPSBcXFwiI2Y5MFxcXCJcXG4gICAgY3R4LmZvbnQgPSBgJHtoIC8gMn1weCBzZXJpZmBcXG4gICAgY3R4LnRleHRBbGlnbiA9IFxcXCJjZW50ZXJcXFwiXFxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcXFwibWlkZGxlXFxcIlxcbiAgICBjdHguZmlsbFRleHQoXFxcIlRHRFxcXCIsIHcgLyAyLCBoIC8gMilcXG4gICAgcmV0dXJuIGNhbnZhc1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHsgdHlwZSBUZ2RDb250ZXh0LCBUZ2REYXRhc2V0LCBUZ2RQYWludGVyLCBUZ2RQcm9ncmFtLCB0eXBlIFRnZFRleHR1cmUyRCwgVGdkVmVydGV4QXJyYXkgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY2xhc3MgUGFpbnRlciBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnByZyA9IG5ldyBUZ2RQcm9ncmFtKGNvbnRleHQuZ2wsIHtcbiAgICAgICAgICAgIHZlcnQ6IFtcbiAgICAgICAgICAgICAgICBcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuICAgICAgICAgICAgICAgIFwiaW4gdmVjMiBhdHRQb2ludDtcIixcbiAgICAgICAgICAgICAgICBcIm91dCB2ZWMyIHZhclVWO1wiLFxuICAgICAgICAgICAgICAgIFwidm9pZCBtYWluKCkge1wiLFxuICAgICAgICAgICAgICAgIFtcInZhclVWID0gYXR0UG9pbnQgKyB2ZWMyKDAuNSk7XCIsIFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvaW50LCAwLjAsIDEuMCk7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZyYWc6IFtcbiAgICAgICAgICAgICAgICBcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuICAgICAgICAgICAgICAgIFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XCIsXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB1bmlUZXh0dXJlO1wiLFxuICAgICAgICAgICAgICAgIFwiaW4gdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcIm91dCB2ZWM0IEZyYWdDb2xvcjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG4gICAgICAgICAgICAgICAgXCJ9XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzJcIixcbiAgICAgICAgfSlcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgIGRzLnNldChcImF0dFBvaW50XCIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCArMSwgKzEsICsxLCAtMSwgLTEsICsxLCAtMV0pKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByZywgW2RzXSlcbiAgICB9XG5cbiAgICBkZWxldGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIHRleHR1cmUgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCB9ID0gY29udGV4dFxuICAgICAgICBwcmcudXNlKClcbiAgICAgICAgdGV4dHVyZS5hY3RpdmF0ZSgwLCBwcmcsIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJELCBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzLCB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCByZWZVcGRhdGU6IHsgY3VycmVudDogKChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbCB9KSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgY2FudmFzID0gbWFrZUNhbnZhcygpXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXG4gICAgfSkubG9hZEJpdG1hcChjYW52YXMpXG4gICAgcmVmVXBkYXRlLmN1cnJlbnQgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XG4gICAgICAgIHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKVxuICAgIGNvbnRleHQuYWRkKHBhaW50ZXIpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZlVwZGF0ZSA9IFJlYWN0LnVzZVJlZjwoKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4gdm9pZCkgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcbiAgICAgICAgY29uc3QgZiA9IHJlZlVwZGF0ZS5jdXJyZW50XG4gICAgICAgIGlmICghZikgcmV0dXJuXG5cbiAgICAgICAgZihwYXJhbXMpXG4gICAgfVxuICAgIGNvbnN0IFt3cmFwUywgc2V0V3JhcFNdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcIndyYXBTXCJdPihcIlJFUEVBVFwiKVxuICAgIGNvbnN0IFt3cmFwVCwgc2V0V3JhcFRdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcIndyYXBTXCJdPihcIlJFUEVBVFwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3IG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlVwZGF0ZSl9PlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldyYXAgU1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwU31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh3cmFwUykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V3JhcFMod3JhcFMpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwUyB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJSRVBFQVRcIj5SRVBFQVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJDTEFNUF9UT19FREdFXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIk1JUlJPUkVEX1JFUEVBVFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV3JhcCBUXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dyYXBUfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHdyYXBUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXcmFwVCh3cmFwVClcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSh7IHdyYXBUIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIlJFUEVBVFwiPlJFUEVBVDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIkNMQU1QX1RPX0VER0VcIj5DTEFNUF9UT19FREdFPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiTUlSUk9SRURfUkVQRUFUXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xuICAgIGNvbnN0IHcgPSAyNTZcbiAgICBjb25zdCBoID0gMjU2XG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwOWZcIlxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKVxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmOTBcIlxuICAgIGN0eC5mb250ID0gYCR7aCAvIDJ9cHggc2VyaWZgXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIlxuICAgIGN0eC5maWxsVGV4dChcIlRHRFwiLCB3IC8gMiwgaCAvIDIpXG4gICAgcmV0dXJuIGNhbnZhc1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlciIsIlRnZFByb2dyYW0iLCJUZ2RWZXJ0ZXhBcnJheSIsIlBhaW50ZXIiLCJjb250ZXh0IiwidGV4dHVyZSIsImRzIiwiRmxvYXQzMkFycmF5IiwiX2RlbGV0ZSIsInBhaW50IiwidGltZSIsImRlbGF5IiwiX3RoaXMiLCJwcmciLCJ2YW8iLCJnbCIsIlZpZXciLCJUZ2RUZXh0dXJlMkQiLCJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwiVmlld09wdGlvbnMiLCJWaWV3UGFuZWwiLCJpbml0IiwicmVmVXBkYXRlIiwiY2FudmFzIiwibWFrZUNhbnZhcyIsInBhcmFtcyIsInBhaW50ZXIiLCJ1cGRhdGUiLCJmIiwid3JhcFMiLCJzZXRXcmFwUyIsIl9SZWFjdF91c2VTdGF0ZTEiLCJ3cmFwVCIsInNldFdyYXBUIiwib25SZWFkeSIsIm9uQ2hhbmdlIiwidyIsImgiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNOO0FBRS9DLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQW9YO0FBQy9ZLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHVEQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ1SDtBQUVoSCxJQUFNVyx3QkFBTjs7Y0FBTUE7YUFBQUEsUUFLWUMsT0FBbUIsRUFDbkJDLE9BQXFCO2dDQU5qQ0Y7O2dCQVFMLGtCQVJLQSxrR0FDVCx3QkFBaUIsT0FBakIsU0FDQSx3QkFBaUIsT0FBakIsZUFHcUJDLFVBQUFBLGVBQ0FDLFVBQUFBO1FBR2pCLE1BQUssR0FBRyxHQUFHLElBQUlKLDBDQUFVQSxDQUFDRyxRQUFRLEVBQUUsRUFBRTtZQUNsQyxNQUFNO2dCQUNGO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO29CQUFDO29CQUFpQztpQkFBMEM7Z0JBQzVFO2FBQ0g7WUFDRCxNQUFNO2dCQUNGO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO29CQUFDO2lCQUEwQztnQkFDM0M7YUFDSDtRQUNMO1FBQ0EsSUFBTUUsS0FBSyxJQUFJUCwwQ0FBVUEsQ0FBQztZQUN0QixVQUFVO1FBQ2Q7UUFDQSxrQkFBa0I7UUFDbEJPLEdBQUcsR0FBRyxDQUFDLFlBQVksSUFBSUMsYUFBYTtZQUFDLENBQUM7WUFBRyxDQUFDO1lBQUcsQ0FBQztZQUFHLENBQUM7WUFBRyxDQUFDO1lBQUcsQ0FBQztZQUFHLENBQUM7WUFBRyxDQUFDO1NBQUU7UUFDcEUsTUFBSyxHQUFHLEdBQUcsSUFBSUwsOENBQWNBLENBQUNFLFFBQVEsRUFBRSxFQUFFLE1BQUssR0FBRyxFQUFFO1lBQUNFO1NBQUc7OztrQkFsQ25ESDs7WUFxQ1RLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO1lBQ25COzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLElBQVksRUFBRUMsS0FBYTtnQkFDN0IsSUFBdUNDLFFBQUFBLElBQUksRUFBbkNSLFVBQStCUSxNQUEvQlIsU0FBU1MsTUFBc0JELE1BQXRCQyxLQUFLQyxNQUFpQkYsTUFBakJFLEtBQUtULFVBQVlPLE1BQVpQO2dCQUMzQixJQUFRVSxLQUFPWCxRQUFQVztnQkFDUkYsSUFBSSxHQUFHO2dCQUNQUixRQUFRLFFBQVEsQ0FBQyxHQUFHUSxLQUFLO2dCQUN6QkMsSUFBSSxJQUFJO2dCQUNSQyxHQUFHLFVBQVUsQ0FBQ0EsR0FBRyxjQUFjLEVBQUUsR0FBRztnQkFDcENELElBQUksTUFBTTtZQUNkOzs7V0FsRFNYO0VBQWdCSCwwQ0FBVUEsRUFtRHRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRHVDO0FBQ3VFO0FBQ3pEO0FBQzdCO0FBQ1U7QUFFbkMsU0FBU3FCLEtBQUtqQixPQUFtQixFQUFFa0IsU0FBeUU7SUFDeEcsU0FBUztJQUNULElBQU1DLFNBQVNDO0lBQ2YsSUFBTW5CLFVBQVUsSUFBSVksNENBQVlBLENBQUNiLFNBQVM7UUFDdEMsU0FBUztZQUFFLE9BQU87UUFBSztJQUMzQixHQUFHLFVBQVUsQ0FBQ21CO0lBQ2RELFVBQVUsT0FBTyxHQUFHLFNBQUNHO1FBQ2pCcEIsUUFBUSxTQUFTLENBQUNvQjtRQUNsQnJCLFFBQVEsS0FBSztJQUNqQjtJQUNBLElBQU1zQixVQUFVLElBQUl2QixpQ0FBT0EsQ0FBQ0MsU0FBU0M7SUFDckNELFFBQVEsR0FBRyxDQUFDc0I7SUFDWnRCLFFBQVEsS0FBSztBQUNiLE9BQU87QUFDWDtBQUVlLFNBQVNiO0lBQ3BCLElBQU0rQixZQUFZbEMsdUNBQVksQ0FBb0Q7SUFDbEYsSUFBTXVDLFNBQVMsZ0JBQUNGO1FBQ1osSUFBTUcsSUFBSU4sVUFBVSxPQUFPO1FBQzNCLElBQUksQ0FBQ00sR0FBRztRQUVSQSxFQUFFSDtJQUNOO0lBQ0EsSUFBMEI5QixtQ0FBQUEseUNBQWMsQ0FBa0MsZUFBbkVrQyxRQUFtQmxDLG9CQUFabUMsV0FBWW5DO0lBQzFCLElBQTBCb0Msb0NBQUFBLHlDQUFjLENBQWtDLGVBQW5FQyxRQUFtQkQscUJBQVpFLFdBQVlGO0lBQzFCLHFCQUNJLGtEQUFDZixnREFBSUE7UUFBQ2tCLFNBQVMsU0FBVEEsUUFBVTlCO21CQUF3QmlCLEtBQUtqQixTQUFTa0I7O2tCQUNsRCxnRUFBQ0Ysd0NBQVNBO1lBQUMsU0FBUTtZQUFPLGdCQUFlO1lBQWUsWUFBVztZQUFTLFVBQVM7OzhCQUNqRixrREFBQ0QsMENBQVdBO29CQUNSLE9BQU07b0JBQ04sT0FBT1U7b0JBQ1BNLFVBQVUsU0FBVkEsU0FBV047d0JBQ1BDLFNBQVNEO3dCQUNURixPQUFPOzRCQUFFRSxPQUFBQTt3QkFBTTtvQkFDbkI7O3NDQUNBLGtEQUFDO3NDQUFpQjsyQkFBVDs7Ozs7c0NBQ1Qsa0RBQUM7c0NBQXdCOzJCQUFoQjs7Ozs7c0NBQ1Qsa0RBQUM7c0NBQTBCOzJCQUFsQjs7Ozs7Ozs7Ozs7OEJBRWIsa0RBQUNWLDBDQUFXQTtvQkFDUixPQUFNO29CQUNOLE9BQU9hO29CQUNQRyxVQUFVLFNBQVZBLFNBQVdIO3dCQUNQQyxTQUFTRDt3QkFDVEwsT0FBTzs0QkFBRUssT0FBQUE7d0JBQU07b0JBQ25COztzQ0FDQSxrREFBQztzQ0FBaUI7MkJBQVQ7Ozs7O3NDQUNULGtEQUFDO3NDQUF3QjsyQkFBaEI7Ozs7O3NDQUNULGtEQUFDO3NDQUEwQjsyQkFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7QUFFQSxTQUFTUjtJQUNMLElBQU1ZLElBQUk7SUFDVixJQUFNQyxJQUFJO0lBQ1YsSUFBd0JDLGdDQUFBQSxnRUFBNEJBLENBQUNGLEdBQUdDLElBQWhEZCxTQUFnQmUsOEJBQWhCZixRQUFRZ0IsTUFBUUQsOEJBQVJDO0lBQ2hCQSxJQUFJLFNBQVMsR0FBRztJQUNoQkEsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHSCxHQUFHQztJQUN0QkUsSUFBSSxTQUFTLEdBQUc7SUFDaEJBLElBQUksSUFBSSxHQUFJLEdBQVEsT0FBTkYsSUFBSSxHQUFFO0lBQ3BCRSxJQUFJLFNBQVMsR0FBRztJQUNoQkEsSUFBSSxZQUFZLEdBQUc7SUFDbkJBLElBQUksUUFBUSxDQUFDLE9BQU9ILElBQUksR0FBR0MsSUFBSTtJQUMvQixPQUFPZDtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWlCOzs7Ozs7Ozs7OzBCQUVmOzs7Ozs7Ozs7b0JBRUY7b0JBQUE7a0NBQ1U7Ozs7OztvQkFBVztvQkFBQTtrQ0FBRTs7Ozs7O29CQUFrQjtvQkFBQTtrQ0FBRTs7Ozs7O29CQUFtQjtvQkFBQTtrQ0FDOUQ7Ozs7OztvQkFBa0I7b0JBQUE7a0NBQUs7Ozs7OztvQkFBYTtpQkFBQTs7Ozs7Ozs7MEJBRXBDOzs7Ozs7Ozs7Ozs7OzswQkFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=