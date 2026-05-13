"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_bitmap_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-361777"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLImageElement"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 24
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLCanvasElement"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 6,
                        columnNumber: 44
                    }, this),
                    ",\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "HTMLVideoElement"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "ImageBitmap"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                        lineNumber: 7,
                        columnNumber: 24
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This is the easiest way to import data into a texture."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Youla!"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9iaXRtYXBfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy0zNjE3NzcuODlkNmZiZDVkZjE4MWRiYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvXy9wYWludGVyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBjYW52YXMgPSBtYWtlQ2FudmFzKClcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxcbiAgICB9KS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgcmVmVXBkYXRlLmN1cnJlbnQgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XFxuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSlcXG4gICAgY29udGV4dC5hZGQocGFpbnRlcilcXG4gICAgY29udGV4dC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkVGV4dHVyZTJELCBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzLCB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld09wdGlvbnMsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCByZWZVcGRhdGU6IHsgY3VycmVudDogKChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbCB9KSB7XFxuICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICBzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXFxuICAgIH0pLmxvYWRCaXRtYXAoY2FudmFzKVxcbiAgICByZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG4gICAgICAgIHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKVxcbiAgICBjb250ZXh0LmFkZChwYWludGVyKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmVXBkYXRlID0gUmVhY3QudXNlUmVmPCgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG4gICAgICAgIGNvbnN0IGYgPSByZWZVcGRhdGUuY3VycmVudFxcbiAgICAgICAgaWYgKCFmKSByZXR1cm5cXG5cXG4gICAgICAgIGYocGFyYW1zKVxcbiAgICB9XFxuICAgIGNvbnN0IFt3cmFwUywgc2V0V3JhcFNdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcXFwid3JhcFNcXFwiXT4oXFxcIlJFUEVBVFxcXCIpXFxuICAgIGNvbnN0IFt3cmFwVCwgc2V0V3JhcFRdID0gUmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcXFwid3JhcFNcXFwiXT4oXFxcIlJFUEVBVFxcXCIpXFxuICAgIHJldHVybiAoXFxuICAgICAgICA8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCByZWZVcGRhdGUpfT5cXG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJXcmFwIFNcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d3JhcFN9XFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHdyYXBTKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V3JhcFMod3JhcFMpXFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgd3JhcFMgfSlcXG4gICAgICAgICAgICAgICAgICAgIH19PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIlJFUEVBVFxcXCI+UkVQRUFUPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiQ0xBTVBfVE9fRURHRVxcXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcIk1JUlJPUkVEX1JFUEVBVFxcXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIldyYXAgVFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwVH1cXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsod3JhcFQpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXcmFwVCh3cmFwVClcXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwVCB9KVxcbiAgICAgICAgICAgICAgICAgICAgfX0+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiUkVQRUFUXFxcIj5SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJDTEFNUF9UT19FREdFXFxcIj5DTEFNUF9UT19FREdFPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cXFwiTUlSUk9SRURfUkVQRUFUXFxcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xcbiAgICBjb25zdCB3ID0gMjU2XFxuICAgIGNvbnN0IGggPSAyNTZcXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxcbiAgICBjdHguZmlsbFN0eWxlID0gXFxcIiMwOWZcXFwiXFxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKVxcbiAgICBjdHguZmlsbFN0eWxlID0gXFxcIiNmOTBcXFwiXFxuICAgIGN0eC5mb250ID0gYCR7aCAvIDJ9cHggc2VyaWZgXFxuICAgIGN0eC50ZXh0QWxpZ24gPSBcXFwiY2VudGVyXFxcIlxcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXFxcIm1pZGRsZVxcXCJcXG4gICAgY3R4LmZpbGxUZXh0KFxcXCJUR0RcXFwiLCB3IC8gMiwgaCAvIDIpXFxuICAgIHJldHVybiBjYW52YXNcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7IHR5cGUgVGdkQ29udGV4dCwgVGdkRGF0YXNldCwgVGdkUGFpbnRlciwgVGdkUHJvZ3JhbSwgdHlwZSBUZ2RUZXh0dXJlMkQsIFRnZFZlcnRleEFycmF5IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjMiB2YXJVVjtcIixcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcbiAgICAgICAgICAgICAgICBbXCJ2YXJVViA9IGF0dFBvaW50ICsgdmVjMigwLjUpO1wiLCBcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb2ludCwgMC4wLCAxLjApO1wiXSxcbiAgICAgICAgICAgICAgICBcIn1cIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmcmFnOiBbXG4gICAgICAgICAgICAgICAgXCIjdmVyc2lvbiAzMDAgZXNcIixcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuICAgICAgICAgICAgICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdW5pVGV4dHVyZTtcIixcbiAgICAgICAgICAgICAgICBcImluIHZlYzIgdmFyVVY7XCIsXG4gICAgICAgICAgICAgICAgXCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgICAgICAgICAgW1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuICAgICAgICAgICAgICAgIFwifVwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMyXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSlcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByZywgdmFvLCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJnLCBcInVuaVRleHR1cmVcIilcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IFRnZENvbnRleHQsIFRnZFRleHR1cmUyRCwgV2ViZ2xUZXh0dXJlUGFyYW1ldGVycywgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgcmVmVXBkYXRlOiB7IGN1cnJlbnQ6ICgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKVxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgc3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxuICAgIH0pLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgIHJlZlVwZGF0ZS5jdXJyZW50ID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSlcbiAgICBjb250ZXh0LmFkZChwYWludGVyKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICBjb25zdCByZWZVcGRhdGUgPSBSZWFjdC51c2VSZWY8KChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCB1cGRhdGUgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XG4gICAgICAgIGNvbnN0IGYgPSByZWZVcGRhdGUuY3VycmVudFxuICAgICAgICBpZiAoIWYpIHJldHVyblxuXG4gICAgICAgIGYocGFyYW1zKVxuICAgIH1cbiAgICBjb25zdCBbd3JhcFMsIHNldFdyYXBTXSA9IFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXCJ3cmFwU1wiXT4oXCJSRVBFQVRcIilcbiAgICBjb25zdCBbd3JhcFQsIHNldFdyYXBUXSA9IFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXCJ3cmFwU1wiXT4oXCJSRVBFQVRcIilcbiAgICByZXR1cm4gKFxuICAgICAgICA8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCByZWZVcGRhdGUpfT5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXcmFwIFNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d3JhcFN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsod3JhcFMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdyYXBTKHdyYXBTKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlKHsgd3JhcFMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiUkVQRUFUXCI+UkVQRUFUPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiQ0xBTVBfVE9fRURHRVwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJNSVJST1JFRF9SRVBFQVRcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldyYXAgVFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3cmFwVH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh3cmFwVCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0V3JhcFQod3JhcFQpXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUoeyB3cmFwVCB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJSRVBFQVRcIj5SRVBFQVQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJDTEFNUF9UT19FREdFXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIk1JUlJPUkVEX1JFUEVBVFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFrZUNhbnZhcygpIHtcbiAgICBjb25zdCB3ID0gMjU2XG4gICAgY29uc3QgaCA9IDI1NlxuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDlmXCJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaClcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZjkwXCJcbiAgICBjdHguZm9udCA9IGAke2ggLyAyfXB4IHNlcmlmYFxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCJcbiAgICBjdHguZmlsbFRleHQoXCJUR0RcIiwgdyAvIDIsIGggLyAyKVxuICAgIHJldHVybiBjYW52YXNcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkVmVydGV4QXJyYXkiLCJQYWludGVyIiwiY29udGV4dCIsInRleHR1cmUiLCJkcyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsInRpbWUiLCJkZWxheSIsIl90aGlzIiwicHJnIiwidmFvIiwiZ2wiLCJWaWV3IiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsIlZpZXdPcHRpb25zIiwiVmlld1BhbmVsIiwiaW5pdCIsInJlZlVwZGF0ZSIsImNhbnZhcyIsIm1ha2VDYW52YXMiLCJwYXJhbXMiLCJwYWludGVyIiwidXBkYXRlIiwiZiIsIndyYXBTIiwic2V0V3JhcFMiLCJfUmVhY3RfdXNlU3RhdGUxIiwid3JhcFQiLCJzZXRXcmFwVCIsIm9uUmVhZHkiLCJvbkNoYW5nZSIsInciLCJoIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjdHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDTjtBQUUvQyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFvWDtBQUMvWSxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSix1REFBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCdUg7QUFFaEgsSUFBTVcsd0JBQU47O2NBQU1BO2FBQUFBLFFBS1lDLE9BQW1CLEVBQ25CQyxPQUFxQjtnQ0FOakNGOztnQkFRTCxrQkFSS0Esa0dBQ1Qsd0JBQWlCLE9BQWpCLFNBQ0Esd0JBQWlCLE9BQWpCLGVBR3FCQyxVQUFBQSxlQUNBQyxVQUFBQTtRQUdqQixNQUFLLEdBQUcsR0FBRyxJQUFJSiwwQ0FBVUEsQ0FBQ0csUUFBUSxFQUFFLEVBQUU7WUFDbEMsTUFBTTtnQkFDRjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtvQkFBQztvQkFBaUM7aUJBQTBDO2dCQUM1RTthQUNIO1lBQ0QsTUFBTTtnQkFDRjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtvQkFBQztpQkFBMEM7Z0JBQzNDO2FBQ0g7UUFDTDtRQUNBLElBQU1FLEtBQUssSUFBSVAsMENBQVVBLENBQUM7WUFDdEIsVUFBVTtRQUNkO1FBQ0Esa0JBQWtCO1FBQ2xCTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLElBQUlDLGFBQWE7WUFBQyxDQUFDO1lBQUcsQ0FBQztZQUFHLENBQUM7WUFBRyxDQUFDO1lBQUcsQ0FBQztZQUFHLENBQUM7WUFBRyxDQUFDO1lBQUcsQ0FBQztTQUFFO1FBQ3BFLE1BQUssR0FBRyxHQUFHLElBQUlMLDhDQUFjQSxDQUFDRSxRQUFRLEVBQUUsRUFBRSxNQUFLLEdBQUcsRUFBRTtZQUFDRTtTQUFHOzs7a0JBbENuREg7O1lBcUNUSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxJQUFZLEVBQUVDLEtBQWE7Z0JBQzdCLElBQXVDQyxRQUFBQSxJQUFJLEVBQW5DUixVQUErQlEsTUFBL0JSLFNBQVNTLE1BQXNCRCxNQUF0QkMsS0FBS0MsTUFBaUJGLE1BQWpCRSxLQUFLVCxVQUFZTyxNQUFaUDtnQkFDM0IsSUFBUVUsS0FBT1gsUUFBUFc7Z0JBQ1JGLElBQUksR0FBRztnQkFDUFIsUUFBUSxRQUFRLENBQUMsR0FBR1EsS0FBSztnQkFDekJDLElBQUksSUFBSTtnQkFDUkMsR0FBRyxVQUFVLENBQUNBLEdBQUcsY0FBYyxFQUFFLEdBQUc7Z0JBQ3BDRCxJQUFJLE1BQU07WUFDZDs7O1dBbERTWDtFQUFnQkgsMENBQVVBLEVBbUR0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckR1QztBQUN1RTtBQUN6RDtBQUM3QjtBQUNVO0FBRW5DLFNBQVNxQixLQUFLakIsT0FBbUIsRUFBRWtCLFNBQXlFO0lBQ3hHLFNBQVM7SUFDVCxJQUFNQyxTQUFTQztJQUNmLElBQU1uQixVQUFVLElBQUlZLDRDQUFZQSxDQUFDYixTQUFTO1FBQ3RDLFNBQVM7WUFBRSxPQUFPO1FBQUs7SUFDM0IsR0FBRyxVQUFVLENBQUNtQjtJQUNkRCxVQUFVLE9BQU8sR0FBRyxTQUFDRztRQUNqQnBCLFFBQVEsU0FBUyxDQUFDb0I7UUFDbEJyQixRQUFRLEtBQUs7SUFDakI7SUFDQSxJQUFNc0IsVUFBVSxJQUFJdkIsaUNBQU9BLENBQUNDLFNBQVNDO0lBQ3JDRCxRQUFRLEdBQUcsQ0FBQ3NCO0lBQ1p0QixRQUFRLEtBQUs7QUFDYixPQUFPO0FBQ1g7QUFFZSxTQUFTYjtJQUNwQixJQUFNK0IsWUFBWWxDLHVDQUFZLENBQW9EO0lBQ2xGLElBQU11QyxTQUFTLGdCQUFDRjtRQUNaLElBQU1HLElBQUlOLFVBQVUsT0FBTztRQUMzQixJQUFJLENBQUNNLEdBQUc7UUFFUkEsRUFBRUg7SUFDTjtJQUNBLElBQTBCOUIsbUNBQUFBLHlDQUFjLENBQWtDLGVBQW5Fa0MsUUFBbUJsQyxvQkFBWm1DLFdBQVluQztJQUMxQixJQUEwQm9DLG9DQUFBQSx5Q0FBYyxDQUFrQyxlQUFuRUMsUUFBbUJELHFCQUFaRSxXQUFZRjtJQUMxQixxQkFDSSxrREFBQ2YsZ0RBQUlBO1FBQUNrQixTQUFTLFNBQVRBLFFBQVU5QjttQkFBd0JpQixLQUFLakIsU0FBU2tCOztrQkFDbEQsZ0VBQUNGLHdDQUFTQTtZQUFDLFNBQVE7WUFBTyxnQkFBZTtZQUFlLFlBQVc7WUFBUyxVQUFTOzs4QkFDakYsa0RBQUNELDBDQUFXQTtvQkFDUixPQUFNO29CQUNOLE9BQU9VO29CQUNQTSxVQUFVLFNBQVZBLFNBQVdOO3dCQUNQQyxTQUFTRDt3QkFDVEYsT0FBTzs0QkFBRUUsT0FBQUE7d0JBQU07b0JBQ25COztzQ0FDQSxrREFBQztzQ0FBaUI7MkJBQVQ7Ozs7O3NDQUNULGtEQUFDO3NDQUF3QjsyQkFBaEI7Ozs7O3NDQUNULGtEQUFDO3NDQUEwQjsyQkFBbEI7Ozs7Ozs7Ozs7OzhCQUViLGtEQUFDViwwQ0FBV0E7b0JBQ1IsT0FBTTtvQkFDTixPQUFPYTtvQkFDUEcsVUFBVSxTQUFWQSxTQUFXSDt3QkFDUEMsU0FBU0Q7d0JBQ1RMLE9BQU87NEJBQUVLLE9BQUFBO3dCQUFNO29CQUNuQjs7c0NBQ0Esa0RBQUM7c0NBQWlCOzJCQUFUOzs7OztzQ0FDVCxrREFBQztzQ0FBd0I7MkJBQWhCOzs7OztzQ0FDVCxrREFBQztzQ0FBMEI7MkJBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0FBRUEsU0FBU1I7SUFDTCxJQUFNWSxJQUFJO0lBQ1YsSUFBTUMsSUFBSTtJQUNWLElBQXdCQyxnQ0FBQUEsZ0VBQTRCQSxDQUFDRixHQUFHQyxJQUFoRGQsU0FBZ0JlLDhCQUFoQmYsUUFBUWdCLE1BQVFELDhCQUFSQztJQUNoQkEsSUFBSSxTQUFTLEdBQUc7SUFDaEJBLElBQUksUUFBUSxDQUFDLEdBQUcsR0FBR0gsR0FBR0M7SUFDdEJFLElBQUksU0FBUyxHQUFHO0lBQ2hCQSxJQUFJLElBQUksR0FBSSxHQUFRLE9BQU5GLElBQUksR0FBRTtJQUNwQkUsSUFBSSxTQUFTLEdBQUc7SUFDaEJBLElBQUksWUFBWSxHQUFHO0lBQ25CQSxJQUFJLFFBQVEsQ0FBQyxPQUFPSCxJQUFJLEdBQUdDLElBQUk7SUFDL0IsT0FBT2Q7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVpQjs7Ozs7Ozs7OzswQkFFZjs7Ozs7Ozs7O29CQUVGO29CQUFBO2tDQUNVOzs7Ozs7b0JBQVc7b0JBQUE7a0NBQUU7Ozs7OztvQkFBa0I7b0JBQUE7a0NBQUU7Ozs7OztvQkFBbUI7b0JBQUE7a0NBQzlEOzs7Ozs7b0JBQWtCO29CQUFBO2tDQUFLOzs7Ozs7b0JBQWE7aUJBQUE7Ozs7Ozs7OzBCQUVwQzs7Ozs7Ozs7Ozs7Ozs7MEJBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9