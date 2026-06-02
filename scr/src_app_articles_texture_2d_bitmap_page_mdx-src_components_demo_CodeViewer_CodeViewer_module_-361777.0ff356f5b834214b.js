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
    "Detail #1": "\tconst canvas = makeCanvas();\n\tconst texture = new TgdTexture2D(context, {\n\t\tstorage: { flipY: true },\n\t}).loadBitmap(canvas);\n\trefUpdate.current = (params: WebglTextureParameters) => {\n\t\ttexture.setParams(params);\n\t\tcontext.paint();\n\t};\n\tconst painter = new Painter(context, texture);\n\tcontext.add(painter);\n\tcontext.paint();"
};
var FULL = "import View from \"@/components/demo/Tgd\";\nimport {\n\ttype TgdContext,\n\tTgdTexture2D,\n\ttype WebglTextureParameters,\n\ttgdCanvasCreateWithContext2D,\n} from \"@tolokoban/tgd\";\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\";\nimport React from \"react\";\nimport { Painter } from \"./painter\";\n\nfunction init(\n\tcontext: TgdContext,\n\trefUpdate: { current: ((params: WebglTextureParameters) => void) | null },\n) {\n\tconst canvas = makeCanvas();\n\tconst texture = new TgdTexture2D(context, {\n\t\tstorage: { flipY: true },\n\t}).loadBitmap(canvas);\n\trefUpdate.current = (params: WebglTextureParameters) => {\n\t\ttexture.setParams(params);\n\t\tcontext.paint();\n\t};\n\tconst painter = new Painter(context, texture);\n\tcontext.add(painter);\n\tcontext.paint();\n}\n\nexport default function Demo() {\n\tconst refUpdate = React.useRef<\n\t\t((params: WebglTextureParameters) => void) | null\n\t>(null);\n\tconst update = (params: WebglTextureParameters) => {\n\t\tconst f = refUpdate.current;\n\t\tif (!f) return;\n\n\t\tf(params);\n\t};\n\tconst [wrapS, setWrapS] =\n\t\tReact.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\");\n\tconst [wrapT, setWrapT] =\n\t\tReact.useState<WebglTextureParameters[\"wrapS\"]>(\"REPEAT\");\n\treturn (\n\t\t<View onReady={(context: TgdContext) => init(context, refUpdate)}>\n\t\t\t<ViewPanel\n\t\t\t\tdisplay=\"flex\"\n\t\t\t\tjustifyContent=\"space-around\"\n\t\t\t\talignItems=\"center\"\n\t\t\t\tflexWrap=\"wrap\"\n\t\t\t>\n\t\t\t\t<ViewOptions\n\t\t\t\t\tlabel=\"Wrap S\"\n\t\t\t\t\tvalue={wrapS}\n\t\t\t\t\tonChange={(wrapS) => {\n\t\t\t\t\t\tsetWrapS(wrapS);\n\t\t\t\t\t\tupdate({ wrapS });\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<div key=\"REPEAT\">REPEAT</div>\n\t\t\t\t\t<div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n\t\t\t\t\t<div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n\t\t\t\t</ViewOptions>\n\t\t\t\t<ViewOptions\n\t\t\t\t\tlabel=\"Wrap T\"\n\t\t\t\t\tvalue={wrapT}\n\t\t\t\t\tonChange={(wrapT) => {\n\t\t\t\t\t\tsetWrapT(wrapT);\n\t\t\t\t\t\tupdate({ wrapT });\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t<div key=\"REPEAT\">REPEAT</div>\n\t\t\t\t\t<div key=\"CLAMP_TO_EDGE\">CLAMP_TO_EDGE</div>\n\t\t\t\t\t<div key=\"MIRRORED_REPEAT\">MIRRORED_REPEAT</div>\n\t\t\t\t</ViewOptions>\n\t\t\t</ViewPanel>\n\t\t</View>\n\t);\n}\n\nfunction makeCanvas() {\n\tconst w = 256;\n\tconst h = 256;\n\tconst { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h);\n\tctx.fillStyle = \"#09f\";\n\tctx.fillRect(0, 0, w, h);\n\tctx.fillStyle = \"#f90\";\n\tctx.font = `${h / 2}px serif`;\n\tctx.textAlign = \"center\";\n\tctx.textBaseline = \"middle\";\n\tctx.fillText(\"TGD\", w / 2, h / 2);\n\treturn canvas;\n}\n";
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
                            lineNumber: 61,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 53,
                    columnNumber: 5
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
                            lineNumber: 73,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 74,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 75,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 65,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
            lineNumber: 47,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
        lineNumber: 46,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9iaXRtYXBfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy0zNjE3NzcuMGZmMzU2ZjViODM0MjE0Yi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvXy9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvYml0bWFwL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vdGV4dHVyZTJkLWZyb20tYml0bWFwLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiXFx0Y29uc3QgY2FudmFzID0gbWFrZUNhbnZhcygpO1xcblxcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRzdG9yYWdlOiB7IGZsaXBZOiB0cnVlIH0sXFxuXFx0fSkubG9hZEJpdG1hcChjYW52YXMpO1xcblxcdHJlZlVwZGF0ZS5jdXJyZW50ID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xcblxcdFxcdHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcyk7XFxuXFx0XFx0Y29udGV4dC5wYWludCgpO1xcblxcdH07XFxuXFx0Y29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyKGNvbnRleHQsIHRleHR1cmUpO1xcblxcdGNvbnRleHQuYWRkKHBhaW50ZXIpO1xcblxcdGNvbnRleHQucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuaW1wb3J0IHtcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdHR5cGUgV2ViZ2xUZXh0dXJlUGFyYW1ldGVycyxcXG5cXHR0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIjtcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiO1xcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFxcXCIuL3BhaW50ZXJcXFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoXFxuXFx0Y29udGV4dDogVGdkQ29udGV4dCxcXG5cXHRyZWZVcGRhdGU6IHsgY3VycmVudDogKChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHZvaWQpIHwgbnVsbCB9LFxcbikge1xcblxcdGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0c3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxcblxcdH0pLmxvYWRCaXRtYXAoY2FudmFzKTtcXG5cXHRyZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG5cXHRcXHR0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcblxcdGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKTtcXG5cXHRjb250ZXh0LmFkZChwYWludGVyKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0Y29uc3QgcmVmVXBkYXRlID0gUmVhY3QudXNlUmVmPFxcblxcdFxcdCgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGxcXG5cXHQ+KG51bGwpO1xcblxcdGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG5cXHRcXHRjb25zdCBmID0gcmVmVXBkYXRlLmN1cnJlbnQ7XFxuXFx0XFx0aWYgKCFmKSByZXR1cm47XFxuXFxuXFx0XFx0ZihwYXJhbXMpO1xcblxcdH07XFxuXFx0Y29uc3QgW3dyYXBTLCBzZXRXcmFwU10gPVxcblxcdFxcdFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXFxcIndyYXBTXFxcIl0+KFxcXCJSRVBFQVRcXFwiKTtcXG5cXHRjb25zdCBbd3JhcFQsIHNldFdyYXBUXSA9XFxuXFx0XFx0UmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcXFwid3JhcFNcXFwiXT4oXFxcIlJFUEVBVFxcXCIpO1xcblxcdHJldHVybiAoXFxuXFx0XFx0PFZpZXcgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQpID0+IGluaXQoY29udGV4dCwgcmVmVXBkYXRlKX0+XFxuXFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCJcXG5cXHRcXHRcXHRcXHRhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiXFxuXFx0XFx0XFx0XFx0ZmxleFdyYXA9XFxcIndyYXBcXFwiXFxuXFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdDxWaWV3T3B0aW9uc1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJXcmFwIFNcXFwiXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU9e3dyYXBTfVxcblxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXsod3JhcFMpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRzZXRXcmFwUyh3cmFwUyk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dXBkYXRlKHsgd3JhcFMgfSk7XFxuXFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIlJFUEVBVFxcXCI+UkVQRUFUPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIkNMQU1QX1RPX0VER0VcXFwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGtleT1cXFwiTUlSUk9SRURfUkVQRUFUXFxcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdPcHRpb25zPlxcblxcdFxcdFxcdFxcdDxWaWV3T3B0aW9uc1xcblxcdFxcdFxcdFxcdFxcdGxhYmVsPVxcXCJXcmFwIFRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU9e3dyYXBUfVxcblxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXsod3JhcFQpID0+IHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRzZXRXcmFwVCh3cmFwVCk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dXBkYXRlKHsgd3JhcFQgfSk7XFxuXFx0XFx0XFx0XFx0XFx0fX1cXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIlJFUEVBVFxcXCI+UkVQRUFUPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIkNMQU1QX1RPX0VER0VcXFwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGtleT1cXFwiTUlSUk9SRURfUkVQRUFUXFxcIj5NSVJST1JFRF9SRVBFQVQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdPcHRpb25zPlxcblxcdFxcdFxcdDwvVmlld1BhbmVsPlxcblxcdFxcdDwvVmlldz5cXG5cXHQpO1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xcblxcdGNvbnN0IHcgPSAyNTY7XFxuXFx0Y29uc3QgaCA9IDI1NjtcXG5cXHRjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpO1xcblxcdGN0eC5maWxsU3R5bGUgPSBcXFwiIzA5ZlxcXCI7XFxuXFx0Y3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xcblxcdGN0eC5maWxsU3R5bGUgPSBcXFwiI2Y5MFxcXCI7XFxuXFx0Y3R4LmZvbnQgPSBgJHtoIC8gMn1weCBzZXJpZmA7XFxuXFx0Y3R4LnRleHRBbGlnbiA9IFxcXCJjZW50ZXJcXFwiO1xcblxcdGN0eC50ZXh0QmFzZWxpbmUgPSBcXFwibWlkZGxlXFxcIjtcXG5cXHRjdHguZmlsbFRleHQoXFxcIlRHRFxcXCIsIHcgLyAyLCBoIC8gMik7XFxuXFx0cmV0dXJuIGNhbnZhcztcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlcixcblx0VGdkUHJvZ3JhbSxcblx0dHlwZSBUZ2RUZXh0dXJlMkQsXG5cdFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyIHtcblx0cHJpdmF0ZSByZWFkb25seSBwcmc6IFRnZFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG5cdFx0XHR2ZXJ0OiBbXG5cdFx0XHRcdFwiI3ZlcnNpb24gMzAwIGVzXCIsXG5cdFx0XHRcdFwiaW4gdmVjMiBhdHRQb2ludDtcIixcblx0XHRcdFx0XCJvdXQgdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJ2b2lkIG1haW4oKSB7XCIsXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRcInZhclVWID0gYXR0UG9pbnQgKyB2ZWMyKDAuNSk7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9pbnQsIDAuMCwgMS4wKTtcIixcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRdLFxuXHRcdFx0ZnJhZzogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1wiLFxuXHRcdFx0XHRcInVuaWZvcm0gc2FtcGxlcjJEIHVuaVRleHR1cmU7XCIsXG5cdFx0XHRcdFwiaW4gdmVjMiB2YXJVVjtcIixcblx0XHRcdFx0XCJvdXQgdmVjNCBGcmFnQ29sb3I7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKTtcIl0sXG5cdFx0XHRcdFwifVwiLFxuXHRcdFx0XSxcblx0XHR9KTtcblx0XHRjb25zdCBkcyA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRcdGF0dFBvaW50OiBcInZlYzJcIixcblx0XHR9KTtcblx0XHQvLyBwcmV0dGllci1pZ25vcmVcblx0XHRkcy5zZXQoXCJhdHRQb2ludFwiLCBuZXcgRmxvYXQzMkFycmF5KFstMSwgKzEsICsxLCArMSwgLTEsIC0xLCArMSwgLTFdKSk7XG5cdFx0dGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcmcsIFtkc10pO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMudmFvLmRlbGV0ZSgpO1xuXHRcdHRoaXMucHJnLmRlbGV0ZSgpO1xuXHR9XG5cblx0cGFpbnQodGltZTogbnVtYmVyLCBkZWxheTogbnVtYmVyKTogdm9pZCB7XG5cdFx0Y29uc3QgeyBjb250ZXh0LCBwcmcsIHZhbywgdGV4dHVyZSB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsIH0gPSBjb250ZXh0O1xuXHRcdHByZy51c2UoKTtcblx0XHR0ZXh0dXJlLmFjdGl2YXRlKDAsIHByZywgXCJ1bmlUZXh0dXJlXCIpO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XG5cdFx0dmFvLnVuYmluZCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZFRleHR1cmUyRCxcblx0dHlwZSBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzLFxuXHR0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIjtcblxuZnVuY3Rpb24gaW5pdChcblx0Y29udGV4dDogVGdkQ29udGV4dCxcblx0cmVmVXBkYXRlOiB7IGN1cnJlbnQ6ICgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGwgfSxcbikge1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgY2FudmFzID0gbWFrZUNhbnZhcygpO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0c3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxuXHR9KS5sb2FkQml0bWFwKGNhbnZhcyk7XG5cdHJlZlVwZGF0ZS5jdXJyZW50ID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xuXHRcdHRleHR1cmUuc2V0UGFyYW1zKHBhcmFtcyk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9O1xuXHRjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSk7XG5cdGNvbnRleHQuYWRkKHBhaW50ZXIpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgcmVmVXBkYXRlID0gUmVhY3QudXNlUmVmPFxuXHRcdCgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGxcblx0PihudWxsKTtcblx0Y29uc3QgdXBkYXRlID0gKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4ge1xuXHRcdGNvbnN0IGYgPSByZWZVcGRhdGUuY3VycmVudDtcblx0XHRpZiAoIWYpIHJldHVybjtcblxuXHRcdGYocGFyYW1zKTtcblx0fTtcblx0Y29uc3QgW3dyYXBTLCBzZXRXcmFwU10gPVxuXHRcdFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXCJ3cmFwU1wiXT4oXCJSRVBFQVRcIik7XG5cdGNvbnN0IFt3cmFwVCwgc2V0V3JhcFRdID1cblx0XHRSZWFjdC51c2VTdGF0ZTxXZWJnbFRleHR1cmVQYXJhbWV0ZXJzW1wid3JhcFNcIl0+KFwiUkVQRUFUXCIpO1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3IG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlVwZGF0ZSl9PlxuXHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcblx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdGZsZXhXcmFwPVwid3JhcFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxWaWV3T3B0aW9uc1xuXHRcdFx0XHRcdGxhYmVsPVwiV3JhcCBTXCJcblx0XHRcdFx0XHR2YWx1ZT17d3JhcFN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh3cmFwUykgPT4ge1xuXHRcdFx0XHRcdFx0c2V0V3JhcFMod3JhcFMpO1xuXHRcdFx0XHRcdFx0dXBkYXRlKHsgd3JhcFMgfSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiUkVQRUFUXCI+UkVQRUFUPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBrZXk9XCJDTEFNUF9UT19FREdFXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiTUlSUk9SRURfUkVQRUFUXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XG5cdFx0XHRcdDwvVmlld09wdGlvbnM+XG5cdFx0XHRcdDxWaWV3T3B0aW9uc1xuXHRcdFx0XHRcdGxhYmVsPVwiV3JhcCBUXCJcblx0XHRcdFx0XHR2YWx1ZT17d3JhcFR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh3cmFwVCkgPT4ge1xuXHRcdFx0XHRcdFx0c2V0V3JhcFQod3JhcFQpO1xuXHRcdFx0XHRcdFx0dXBkYXRlKHsgd3JhcFQgfSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiUkVQRUFUXCI+UkVQRUFUPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBrZXk9XCJDTEFNUF9UT19FREdFXCI+Q0xBTVBfVE9fRURHRTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiTUlSUk9SRURfUkVQRUFUXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XG5cdFx0XHRcdDwvVmlld09wdGlvbnM+XG5cdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHQ8L1ZpZXc+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XG5cdGNvbnN0IHcgPSAyNTY7XG5cdGNvbnN0IGggPSAyNTY7XG5cdGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaCk7XG5cdGN0eC5maWxsU3R5bGUgPSBcIiMwOWZcIjtcblx0Y3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xuXHRjdHguZmlsbFN0eWxlID0gXCIjZjkwXCI7XG5cdGN0eC5mb250ID0gYCR7aCAvIDJ9cHggc2VyaWZgO1xuXHRjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblx0Y3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cdGN0eC5maWxsVGV4dChcIlRHRFwiLCB3IC8gMiwgaCAvIDIpO1xuXHRyZXR1cm4gY2FudmFzO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2REYXRhc2V0IiwiVGdkUGFpbnRlciIsIlRnZFByb2dyYW0iLCJUZ2RWZXJ0ZXhBcnJheSIsIlBhaW50ZXIiLCJjb250ZXh0IiwidGV4dHVyZSIsImRzIiwiRmxvYXQzMkFycmF5IiwiX2RlbGV0ZSIsInBhaW50IiwidGltZSIsImRlbGF5IiwiX3RoaXMiLCJwcmciLCJ2YW8iLCJnbCIsIlZpZXciLCJUZ2RUZXh0dXJlMkQiLCJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwiVmlld09wdGlvbnMiLCJWaWV3UGFuZWwiLCJpbml0IiwicmVmVXBkYXRlIiwiY2FudmFzIiwibWFrZUNhbnZhcyIsInBhcmFtcyIsInBhaW50ZXIiLCJ1cGRhdGUiLCJmIiwid3JhcFMiLCJzZXRXcmFwUyIsIl9SZWFjdF91c2VTdGF0ZTEiLCJ3cmFwVCIsInNldFdyYXBUIiwib25SZWFkeSIsIm9uQ2hhbmdlIiwidyIsImgiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNOO0FBRS9DLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQWdXO0FBQzNYLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHVEQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxT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