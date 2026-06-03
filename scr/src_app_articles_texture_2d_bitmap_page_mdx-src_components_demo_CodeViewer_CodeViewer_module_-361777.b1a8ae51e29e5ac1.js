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
                            lineNumber: 61,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 62,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 73,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "CLAMP_TO_EDGE"
                        }, "CLAMP_TO_EDGE", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 74,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "MIRRORED_REPEAT"
                        }, "MIRRORED_REPEAT", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                            lineNumber: 75,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
                    lineNumber: 65,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
            lineNumber: 47,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/bitmap/_/texture2d-from-bitmap.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF9iaXRtYXBfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy0zNjE3NzcuYjFhOGFlNTFlMjllNWFjMS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvXy9wYWludGVyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL2JpdG1hcC9fL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC9iaXRtYXAvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL3RleHR1cmUyZC1mcm9tLWJpdG1hcC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIlxcdGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKTtcXG5cXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuXFx0XFx0c3RvcmFnZTogeyBmbGlwWTogdHJ1ZSB9LFxcblxcdH0pLmxvYWRCaXRtYXAoY2FudmFzKTtcXG5cXHRyZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcXG5cXHRcXHR0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpO1xcblxcdFxcdGNvbnRleHQucGFpbnQoKTtcXG5cXHR9O1xcblxcdGNvbnN0IHBhaW50ZXIgPSBuZXcgUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlKTtcXG5cXHRjb250ZXh0LmFkZChwYWludGVyKTtcXG5cXHRjb250ZXh0LnBhaW50KCk7XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiO1xcbmltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0eXBlIFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCI7XFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIjtcXG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcXFwiLi9wYWludGVyXFxcIjtcXG5cXG5mdW5jdGlvbiBpbml0KFxcblxcdGNvbnRleHQ6IFRnZENvbnRleHQsXFxuXFx0cmVmVXBkYXRlOiB7IGN1cnJlbnQ6ICgocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB2b2lkKSB8IG51bGwgfSxcXG4pIHtcXG5cXHRjb25zdCBjYW52YXMgPSBtYWtlQ2FudmFzKCk7XFxuXFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSxcXG5cXHR9KS5sb2FkQml0bWFwKGNhbnZhcyk7XFxuXFx0cmVmVXBkYXRlLmN1cnJlbnQgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XFxuXFx0XFx0dGV4dHVyZS5zZXRQYXJhbXMocGFyYW1zKTtcXG5cXHRcXHRjb250ZXh0LnBhaW50KCk7XFxuXFx0fTtcXG5cXHRjb25zdCBwYWludGVyID0gbmV3IFBhaW50ZXIoY29udGV4dCwgdGV4dHVyZSk7XFxuXFx0Y29udGV4dC5hZGQocGFpbnRlcik7XFxuXFx0Y29udGV4dC5wYWludCgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdGNvbnN0IHJlZlVwZGF0ZSA9IFJlYWN0LnVzZVJlZjxcXG5cXHRcXHQoKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4gdm9pZCkgfCBudWxsXFxuXFx0PihudWxsKTtcXG5cXHRjb25zdCB1cGRhdGUgPSAocGFyYW1zOiBXZWJnbFRleHR1cmVQYXJhbWV0ZXJzKSA9PiB7XFxuXFx0XFx0Y29uc3QgZiA9IHJlZlVwZGF0ZS5jdXJyZW50O1xcblxcdFxcdGlmICghZikgcmV0dXJuO1xcblxcblxcdFxcdGYocGFyYW1zKTtcXG5cXHR9O1xcblxcdGNvbnN0IFt3cmFwUywgc2V0V3JhcFNdID1cXG5cXHRcXHRSZWFjdC51c2VTdGF0ZTxXZWJnbFRleHR1cmVQYXJhbWV0ZXJzW1xcXCJ3cmFwU1xcXCJdPihcXFwiUkVQRUFUXFxcIik7XFxuXFx0Y29uc3QgW3dyYXBULCBzZXRXcmFwVF0gPVxcblxcdFxcdFJlYWN0LnVzZVN0YXRlPFdlYmdsVGV4dHVyZVBhcmFtZXRlcnNbXFxcIndyYXBTXFxcIl0+KFxcXCJSRVBFQVRcXFwiKTtcXG5cXHRyZXR1cm4gKFxcblxcdFxcdDxWaWV3IG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlVwZGF0ZSl9PlxcblxcdFxcdFxcdDxWaWV3UGFuZWxcXG5cXHRcXHRcXHRcXHRkaXNwbGF5PVxcXCJmbGV4XFxcIlxcblxcdFxcdFxcdFxcdGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiXFxuXFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdGZsZXhXcmFwPVxcXCJ3cmFwXFxcIlxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8Vmlld09wdGlvbnNcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwiV3JhcCBTXFxcIlxcblxcdFxcdFxcdFxcdFxcdHZhbHVlPXt3cmFwU31cXG5cXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17KHdyYXBTKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0c2V0V3JhcFMod3JhcFMpO1xcblxcdFxcdFxcdFxcdFxcdFxcdHVwZGF0ZSh7IHdyYXBTIH0pO1xcblxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYga2V5PVxcXCJSRVBFQVRcXFwiPlJFUEVBVDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYga2V5PVxcXCJDTEFNUF9UT19FREdFXFxcIj5DTEFNUF9UT19FREdFPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIk1JUlJPUkVEX1JFUEVBVFxcXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9WaWV3T3B0aW9ucz5cXG5cXHRcXHRcXHRcXHQ8Vmlld09wdGlvbnNcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbD1cXFwiV3JhcCBUXFxcIlxcblxcdFxcdFxcdFxcdFxcdHZhbHVlPXt3cmFwVH1cXG5cXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17KHdyYXBUKSA9PiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0c2V0V3JhcFQod3JhcFQpO1xcblxcdFxcdFxcdFxcdFxcdFxcdHVwZGF0ZSh7IHdyYXBUIH0pO1xcblxcdFxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYga2V5PVxcXCJSRVBFQVRcXFwiPlJFUEVBVDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdDxkaXYga2V5PVxcXCJDTEFNUF9UT19FREdFXFxcIj5DTEFNUF9UT19FREdFPC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBrZXk9XFxcIk1JUlJPUkVEX1JFUEVBVFxcXCI+TUlSUk9SRURfUkVQRUFUPC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9WaWV3T3B0aW9ucz5cXG5cXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHQ8L1ZpZXc+XFxuXFx0KTtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZUNhbnZhcygpIHtcXG5cXHRjb25zdCB3ID0gMjU2O1xcblxcdGNvbnN0IGggPSAyNTY7XFxuXFx0Y29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKTtcXG5cXHRjdHguZmlsbFN0eWxlID0gXFxcIiMwOWZcXFwiO1xcblxcdGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcXG5cXHRjdHguZmlsbFN0eWxlID0gXFxcIiNmOTBcXFwiO1xcblxcdGN0eC5mb250ID0gYCR7aCAvIDJ9cHggc2VyaWZgO1xcblxcdGN0eC50ZXh0QWxpZ24gPSBcXFwiY2VudGVyXFxcIjtcXG5cXHRjdHgudGV4dEJhc2VsaW5lID0gXFxcIm1pZGRsZVxcXCI7XFxuXFx0Y3R4LmZpbGxUZXh0KFxcXCJUR0RcXFwiLCB3IC8gMiwgaCAvIDIpO1xcblxcdHJldHVybiBjYW52YXM7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXIsXG5cdFRnZFByb2dyYW0sXG5cdHR5cGUgVGdkVGV4dHVyZTJELFxuXHRUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJELFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuXHRcdFx0dmVydDogW1xuXHRcdFx0XHRcIiN2ZXJzaW9uIDMwMCBlc1wiLFxuXHRcdFx0XHRcImluIHZlYzIgYXR0UG9pbnQ7XCIsXG5cdFx0XHRcdFwib3V0IHZlYzIgdmFyVVY7XCIsXG5cdFx0XHRcdFwidm9pZCBtYWluKCkge1wiLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0XCJ2YXJVViA9IGF0dFBvaW50ICsgdmVjMigwLjUpO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvaW50LCAwLjAsIDEuMCk7XCIsXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwifVwiLFxuXHRcdFx0XSxcblx0XHRcdGZyYWc6IFtcblx0XHRcdFx0XCIjdmVyc2lvbiAzMDAgZXNcIixcblx0XHRcdFx0XCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcIixcblx0XHRcdFx0XCJ1bmlmb3JtIHNhbXBsZXIyRCB1bmlUZXh0dXJlO1wiLFxuXHRcdFx0XHRcImluIHZlYzIgdmFyVVY7XCIsXG5cdFx0XHRcdFwib3V0IHZlYzQgRnJhZ0NvbG9yO1wiLFxuXHRcdFx0XHRcInZvaWQgbWFpbigpIHtcIixcblx0XHRcdFx0W1wiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVik7XCJdLFxuXHRcdFx0XHRcIn1cIixcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgZHMgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0XHRhdHRQb2ludDogXCJ2ZWMyXCIsXG5cdFx0fSk7XG5cdFx0Ly8gcHJldHRpZXItaWdub3JlXG5cdFx0ZHMuc2V0KFwiYXR0UG9pbnRcIiwgbmV3IEZsb2F0MzJBcnJheShbLTEsICsxLCArMSwgKzEsIC0xLCAtMSwgKzEsIC0xXSkpO1xuXHRcdHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJnLCBbZHNdKTtcblx0fVxuXG5cdGRlbGV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLnZhby5kZWxldGUoKTtcblx0XHR0aGlzLnByZy5kZWxldGUoKTtcblx0fVxuXG5cdHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IHsgY29udGV4dCwgcHJnLCB2YW8sIHRleHR1cmUgfSA9IHRoaXM7XG5cdFx0Y29uc3QgeyBnbCB9ID0gY29udGV4dDtcblx0XHRwcmcudXNlKCk7XG5cdFx0dGV4dHVyZS5hY3RpdmF0ZSgwLCBwcmcsIFwidW5pVGV4dHVyZVwiKTtcblx0XHR2YW8uYmluZCgpO1xuXHRcdGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuXHRcdHZhby51bmJpbmQoKTtcblx0fVxufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHR5cGUgV2ViZ2xUZXh0dXJlUGFyYW1ldGVycyxcblx0dGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCI7XG5cbmZ1bmN0aW9uIGluaXQoXG5cdGNvbnRleHQ6IFRnZENvbnRleHQsXG5cdHJlZlVwZGF0ZTogeyBjdXJyZW50OiAoKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4gdm9pZCkgfCBudWxsIH0sXG4pIHtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IGNhbnZhcyA9IG1ha2VDYW52YXMoKTtcblx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHN0b3JhZ2U6IHsgZmxpcFk6IHRydWUgfSxcblx0fSkubG9hZEJpdG1hcChjYW52YXMpO1xuXHRyZWZVcGRhdGUuY3VycmVudCA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcblx0XHR0ZXh0dXJlLnNldFBhcmFtcyhwYXJhbXMpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcblx0Y29uc3QgcGFpbnRlciA9IG5ldyBQYWludGVyKGNvbnRleHQsIHRleHR1cmUpO1xuXHRjb250ZXh0LmFkZChwYWludGVyKTtcblx0Y29udGV4dC5wYWludCgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IHJlZlVwZGF0ZSA9IFJlYWN0LnVzZVJlZjxcblx0XHQoKHBhcmFtczogV2ViZ2xUZXh0dXJlUGFyYW1ldGVycykgPT4gdm9pZCkgfCBudWxsXG5cdD4obnVsbCk7XG5cdGNvbnN0IHVwZGF0ZSA9IChwYXJhbXM6IFdlYmdsVGV4dHVyZVBhcmFtZXRlcnMpID0+IHtcblx0XHRjb25zdCBmID0gcmVmVXBkYXRlLmN1cnJlbnQ7XG5cdFx0aWYgKCFmKSByZXR1cm47XG5cblx0XHRmKHBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IFt3cmFwUywgc2V0V3JhcFNdID1cblx0XHRSZWFjdC51c2VTdGF0ZTxXZWJnbFRleHR1cmVQYXJhbWV0ZXJzW1wid3JhcFNcIl0+KFwiUkVQRUFUXCIpO1xuXHRjb25zdCBbd3JhcFQsIHNldFdyYXBUXSA9XG5cdFx0UmVhY3QudXNlU3RhdGU8V2ViZ2xUZXh0dXJlUGFyYW1ldGVyc1tcIndyYXBTXCJdPihcIlJFUEVBVFwiKTtcblx0cmV0dXJuIChcblx0XHQ8VmlldyBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCkgPT4gaW5pdChjb250ZXh0LCByZWZVcGRhdGUpfT5cblx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0ZGlzcGxheT1cImZsZXhcIlxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRmbGV4V3JhcD1cIndyYXBcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Vmlld09wdGlvbnNcblx0XHRcdFx0XHRsYWJlbD1cIldyYXAgU1wiXG5cdFx0XHRcdFx0dmFsdWU9e3dyYXBTfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsod3JhcFMpID0+IHtcblx0XHRcdFx0XHRcdHNldFdyYXBTKHdyYXBTKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSh7IHdyYXBTIH0pO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cIlJFUEVBVFwiPlJFUEVBVDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiQ0xBTVBfVE9fRURHRVwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cIk1JUlJPUkVEX1JFUEVBVFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxuXHRcdFx0XHQ8L1ZpZXdPcHRpb25zPlxuXHRcdFx0XHQ8Vmlld09wdGlvbnNcblx0XHRcdFx0XHRsYWJlbD1cIldyYXAgVFwiXG5cdFx0XHRcdFx0dmFsdWU9e3dyYXBUfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsod3JhcFQpID0+IHtcblx0XHRcdFx0XHRcdHNldFdyYXBUKHdyYXBUKTtcblx0XHRcdFx0XHRcdHVwZGF0ZSh7IHdyYXBUIH0pO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cIlJFUEVBVFwiPlJFUEVBVDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYga2V5PVwiQ0xBTVBfVE9fRURHRVwiPkNMQU1QX1RPX0VER0U8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGtleT1cIk1JUlJPUkVEX1JFUEVBVFwiPk1JUlJPUkVEX1JFUEVBVDwvZGl2PlxuXHRcdFx0XHQ8L1ZpZXdPcHRpb25zPlxuXHRcdFx0PC9WaWV3UGFuZWw+XG5cdFx0PC9WaWV3PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xuXHRjb25zdCB3ID0gMjU2O1xuXHRjb25zdCBoID0gMjU2O1xuXHRjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpO1xuXHRjdHguZmlsbFN0eWxlID0gXCIjMDlmXCI7XG5cdGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblx0Y3R4LmZpbGxTdHlsZSA9IFwiI2Y5MFwiO1xuXHRjdHguZm9udCA9IGAke2ggLyAyfXB4IHNlcmlmYDtcblx0Y3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cdGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXHRjdHguZmlsbFRleHQoXCJUR0RcIiwgdyAvIDIsIGggLyAyKTtcblx0cmV0dXJuIGNhbnZhcztcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkVmVydGV4QXJyYXkiLCJQYWludGVyIiwiY29udGV4dCIsInRleHR1cmUiLCJkcyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsInRpbWUiLCJkZWxheSIsIl90aGlzIiwicHJnIiwidmFvIiwiZ2wiLCJWaWV3IiwiVGdkVGV4dHVyZTJEIiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsIlZpZXdPcHRpb25zIiwiVmlld1BhbmVsIiwiaW5pdCIsInJlZlVwZGF0ZSIsImNhbnZhcyIsIm1ha2VDYW52YXMiLCJwYXJhbXMiLCJwYWludGVyIiwidXBkYXRlIiwiZiIsIndyYXBTIiwic2V0V3JhcFMiLCJfUmVhY3RfdXNlU3RhdGUxIiwid3JhcFQiLCJzZXRXcmFwVCIsIm9uUmVhZHkiLCJvbkNoYW5nZSIsInciLCJoIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjdHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDTjtBQUUvQyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUFnVztBQUMzWCxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSix1REFBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0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