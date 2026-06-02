"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_palette_value_page_tsx-src_components_demo_CodeViewer_CodeViewer_module_css"], {
63594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewDisk":"src-app-tools-palette-PalettePreviewDisk-PalettePreviewDisk-module_palettePreviewDisk_bLiGLA"});

},
96828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewHorizontal":"src-app-tools-palette-PalettePreviewHorizontal-PalettePreviewHorizontal-module_palettePreviewHorizontal_TA5I7W"});

},
7457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"paletteEditor":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_paletteEditor_LIUc1o","disk":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_disk_Bz6ZCp","horizontal":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontal_DKdnz5","horizontalA":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontalA_SRgGw0","horizontalB":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontalB_NDNEU3","scroll":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_scroll_YkEfu_"});

},
77704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"sliders":"src-app-tools-palette-[value]-_PaletteEditor-Sliders-Sliders-module_sliders_HG1pji","slider":"src-app-tools-palette-[value]-_PaletteEditor-Sliders-Sliders-module_slider_GsGKk_"});

},
70757(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewDisk: () => (ViewPalettePreviewDisk)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _PalettePreviewDisk_module_css__rspack_import_3 = __webpack_require__(63594);
/* import */ var _painter__rspack_import_4 = __webpack_require__(67592);
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





var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPalettePreviewDisk(props) {
    var painter = usePainter();
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var a = props.a, b = props.b, d = props.d, c = props.c;
    react__rspack_import_1.useEffect(function() {
        painter.a = a;
        painter.b = b;
        painter.c = c;
        painter.d = d;
        painter.paint();
    }, [
        a,
        b,
        c,
        d
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: painter.setCanvas,
        className: $.join(props.className, _PalettePreviewDisk_module_css__rspack_import_3["default"].palettePreviewDisk),
        style: style
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/PalettePreviewDisk/PalettePreviewDisk.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
}
function usePainter() {
    var ref = react__rspack_import_1.useRef(null);
    if (!ref.current) ref.current = new _painter__rspack_import_4.PalettePreviewDiskPainter();
    return ref.current;
}


},
1111(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewDisk: () => (/* reexport safe */ _PalettePreviewDisk__rspack_import_0.ViewPalettePreviewDisk)
});
/* import */ var _PalettePreviewDisk__rspack_import_0 = __webpack_require__(70757);



},
67592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PalettePreviewDiskPainter: () => (PalettePreviewDiskPainter)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

var PalettePreviewDiskPainter = /*#__PURE__*/ function() {
    "use strict";
    function PalettePreviewDiskPainter() {
        var _this = this;
        _class_call_check(this, PalettePreviewDiskPainter);
        _define_property(this, "a", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "b", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "c", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "d", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "context", null);
        _define_property(this, "setCanvas", function(canvas) {
            if (_this.context) {
                _this.context.delete();
                _this.context = null;
            }
            if (canvas) {
                var context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas, {
                    antialias: false
                });
                context.add(new _tolokoban_tgd__rspack_import_0.TgdPainterFragmentShader(context, {
                    shader: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                        uniforms: {
                            uniA: "vec3",
                            uniB: "vec3",
                            uniC: "vec3",
                            uniD: "vec3",
                            uniAspectRatio: "float"
                        },
                        varying: {
                            varUV: "vec2"
                        },
                        outputs: {
                            FragColor: "vec4"
                        },
                        functions: _object_spread({}, (0,_tolokoban_tgd__rspack_import_0.tgdCodeFunction_uv2polar)()),
                        mainCode: [
                            "vec2 polar = uv2polar(varUV);",
                            "float r = polar.x;",
                            "float t = fract(1.0 + (polar.y + ".concat(Math.PI / 2, ") * ").concat(0.5 / Math.PI, ");"),
                            "float light = 1.0 - smoothstep(0.4, 0.42, abs(r - 0.5));",
                            "FragColor = vec4(",
                            [
                                "light * (uniA + uniB*cos(".concat(2 * Math.PI, "*(uniC * t + uniD))),"),
                                "1"
                            ],
                            ");",
                            "if (t < 0.0) FragColor = vec4(1);"
                        ]
                    }),
                    setUniforms: function setUniforms(param) {
                        var program = param.program, context = param.context;
                        var _program, _program1, _program2, _program3;
                        (_program = program).uniform3f.apply(_program, [
                            "uniA"
                        ].concat(_to_consumable_array(_this.a)));
                        (_program1 = program).uniform3f.apply(_program1, [
                            "uniB"
                        ].concat(_to_consumable_array(_this.b)));
                        (_program2 = program).uniform3f.apply(_program2, [
                            "uniC"
                        ].concat(_to_consumable_array(_this.c)));
                        (_program3 = program).uniform3f.apply(_program3, [
                            "uniD"
                        ].concat(_to_consumable_array(_this.d)));
                        program.uniform1f("uniAspectRatio", context.aspectRatio);
                    }
                }));
                context.paint();
                _this.context = context;
            }
        });
    }
    _create_class(PalettePreviewDiskPainter, [
        {
            key: "paint",
            value: function paint() {
                var context = this.context;
                if (!context) return;
                context.paint();
            }
        }
    ]);
    return PalettePreviewDiskPainter;
}();


},
6883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewHorizontal: () => (ViewPalettePreviewHorizontal)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _PalettePreviewHorizontal_module_css__rspack_import_3 = __webpack_require__(96828);
/* import */ var _painter__rspack_import_4 = __webpack_require__(7533);
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





var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPalettePreviewHorizontal(props) {
    var painter = usePainter();
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var a = props.a, b = props.b, d = props.d, c = props.c;
    react__rspack_import_1.useEffect(function() {
        painter.a = a;
        painter.b = b;
        painter.c = c;
        painter.d = d;
        painter.paint();
    }, [
        a,
        b,
        c,
        d
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: painter.setCanvas,
        className: $.join(props.className, _PalettePreviewHorizontal_module_css__rspack_import_3["default"].palettePreviewHorizontal),
        style: style
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/PalettePreviewHorizontal/PalettePreviewHorizontal.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}
function usePainter() {
    var ref = react__rspack_import_1.useRef(null);
    if (!ref.current) ref.current = new _painter__rspack_import_4.PalettePreviewHorizontalPainter();
    return ref.current;
}


},
64078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewHorizontal: () => (/* reexport safe */ _PalettePreviewHorizontal__rspack_import_0.ViewPalettePreviewHorizontal)
});
/* import */ var _PalettePreviewHorizontal__rspack_import_0 = __webpack_require__(6883);



},
7533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PalettePreviewHorizontalPainter: () => (PalettePreviewHorizontalPainter)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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

var PalettePreviewHorizontalPainter = /*#__PURE__*/ function() {
    "use strict";
    function PalettePreviewHorizontalPainter() {
        var _this = this;
        _class_call_check(this, PalettePreviewHorizontalPainter);
        _define_property(this, "a", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "b", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "c", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "d", [
            0.5,
            0.5,
            0.5
        ]);
        _define_property(this, "context", null);
        _define_property(this, "setCanvas", function(canvas) {
            if (_this.context) {
                _this.context.delete();
                _this.context = null;
            }
            if (canvas) {
                var context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas, {
                    antialias: false
                });
                context.add(new _tolokoban_tgd__rspack_import_0.TgdPainterFragmentShader(context, {
                    shader: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                        uniforms: {
                            uniA: "vec3",
                            uniB: "vec3",
                            uniC: "vec3",
                            uniD: "vec3"
                        },
                        varying: {
                            varUV: "vec2"
                        },
                        outputs: {
                            FragColor: "vec4"
                        },
                        mainCode: [
                            "float t = varUV.x;",
                            "FragColor = vec4(",
                            [
                                "uniA + uniB*cos(".concat(2 * Math.PI, "*(uniC * t + uniD)),"),
                                "1"
                            ],
                            ");"
                        ]
                    }),
                    setUniforms: function setUniforms(param) {
                        var program = param.program;
                        var _program, _program1, _program2, _program3;
                        (_program = program).uniform3f.apply(_program, [
                            "uniA"
                        ].concat(_to_consumable_array(_this.a)));
                        (_program1 = program).uniform3f.apply(_program1, [
                            "uniB"
                        ].concat(_to_consumable_array(_this.b)));
                        (_program2 = program).uniform3f.apply(_program2, [
                            "uniC"
                        ].concat(_to_consumable_array(_this.c)));
                        (_program3 = program).uniform3f.apply(_program3, [
                            "uniD"
                        ].concat(_to_consumable_array(_this.d)));
                    }
                }));
                context.paint();
                _this.context = context;
            }
        });
    }
    _create_class(PalettePreviewHorizontalPainter, [
        {
            key: "paint",
            value: function paint() {
                var context = this.context;
                if (!context) return;
                context.paint();
            }
        }
    ]);
    return PalettePreviewHorizontalPainter;
}();


},
28674(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteEditor: () => (ViewPaletteEditor)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _Sliders__rspack_import_4 = __webpack_require__(50189);
/* import */ var _PalettePreviewDisk__rspack_import_5 = __webpack_require__(1111);
/* import */ var _PaletteEditor_module_css__rspack_import_6 = __webpack_require__(7457);
/* import */ var _PalettePreviewHorizontal__rspack_import_7 = __webpack_require__(64078);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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








var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPaletteEditor(props) {
    var _React_useState = _sliced_to_array(react__rspack_import_1.useState(props), 2), value = _React_useState[0], setValue = _React_useState[1];
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var a = value.a, b = value.b, c = value.c, d = value.d;
    var update = function update(v) {
        setValue(_object_spread({}, value, v));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _PaletteEditor_module_css__rspack_import_6["default"].paletteEditor),
        style: style,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("aside", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewDisk__rspack_import_5.ViewPalettePreviewDisk, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].disk,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontal,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalA,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 57,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalB,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 42,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTabs, {
                maxHeight: "100%",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFix, {}, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 77,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Config"
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 78,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true),
                        className: _PaletteEditor_module_css__rspack_import_6["default"].scroll,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Sliders__rspack_import_4.ViewSliders, {
                                label: "Luminance",
                                value: a,
                                onChange: function onChange(v) {
                                    return update({
                                        a: v
                                    });
                                }
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 83,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Sliders__rspack_import_4.ViewSliders, {
                                label: "Saturation",
                                value: b,
                                onChange: function onChange(v) {
                                    return update({
                                        b: v
                                    });
                                }
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 88,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Sliders__rspack_import_4.ViewSliders, {
                                label: "Spread",
                                value: c,
                                onChange: function onChange(v) {
                                    return update({
                                        c: v
                                    });
                                }
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 93,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Sliders__rspack_import_4.ViewSliders, {
                                label: "Shift",
                                value: d,
                                onChange: function onChange(v) {
                                    return update({
                                        d: v
                                    });
                                }
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 98,
                                columnNumber: 6
                            }, this)
                        ]
                    }, "config", true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 73,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconShare, {}, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 108,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Share"
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 109,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "glsl",
                                value: "vec3 palette(float t) {\n    return vec3(".concat(arr(a), ")\n        + vec3(").concat(arr(b), ") * cos(\n            ").concat(2 * Math.PI, " * (\n                t * vec3(").concat(arr(c), ")\n                + vec3(").concat(arr(d), ")\n            )\n        )\n}")
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "ts",
                                value: "tgdCodeFunction_palette({\n    a: [".concat(arr(a), ", 1],\n    b: [").concat(arr(b), ", 1],\n    c: [").concat(arr(c), ", 1],\n    d: [").concat(arr(d), ", 1],\n})")
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 125,
                                columnNumber: 6
                            }, this)
                        ]
                    }, "share", true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 104,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
}
function arr(a) {
    return "".concat(a.map(function(v) {
        return v.toFixed(3);
    }).join(", "));
}


},
7833(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewSliders: () => (ViewSliders)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _Sliders_module_css__rspack_import_3 = __webpack_require__(77704);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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




var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewSliders(props) {
    var _React_useState = _sliced_to_array(react__rspack_import_1.useState(false), 2), lock = _React_useState[0], setLock = _React_useState[1];
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var _props_value = _sliced_to_array(props.value, 3), red = _props_value[0], green = _props_value[1], blue = _props_value[2];
    var setRed = function setRed(v) {
        return props.onChange([
            v,
            green,
            blue
        ]);
    };
    var setGreen = function setGreen(v) {
        return props.onChange([
            red,
            v,
            blue
        ]);
    };
    var setBlue = function setBlue(v) {
        return props.onChange([
            red,
            green,
            v
        ]);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Sliders_module_css__rspack_import_3["default"].sliders),
        style: style,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("header", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: props.label
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this),
                    lock ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockClose, {
                        onClick: function onClick() {
                            return setLock(false);
                        }
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 37,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockOpen, {
                        onClick: function onClick() {
                            return setLock(true);
                        }
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 39,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            lock && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                label: "*",
                value: (red + green + blue) / 3,
                onChange: function onChange(v) {
                    return props.onChange([
                        v,
                        v,
                        v
                    ]);
                }
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            !lock && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "R",
                        value: red,
                        onChange: setRed
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 51,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "G",
                        value: green,
                        onChange: setGreen
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 52,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "B",
                        value: blue,
                        onChange: setBlue
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 53,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this);
}
function Slider(param) {
    var label = param.label, value = param.value, onChange = param.onChange;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _Sliders_module_css__rspack_import_3["default"].slider,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("label", {
                children: label
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 71,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                min: 0,
                max: 1,
                step: 0.01,
                text: value.toFixed(2),
                value: value,
                onChange: onChange
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, this);
}


},
50189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewSliders: () => (/* reexport safe */ _Sliders__rspack_import_0.ViewSliders)
});
/* import */ var _Sliders__rspack_import_0 = __webpack_require__(7833);



},
75564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteEditor: () => (/* reexport safe */ _PaletteEditor__rspack_import_0.ViewPaletteEditor)
});
/* import */ var _PaletteEditor__rspack_import_0 = __webpack_require__(28674);



},
74703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _app_routes__rspack_import_2 = __webpack_require__(58226);
/* import */ var _PaletteEditor__rspack_import_3 = __webpack_require__(75564);




function Page() {
    var _useParams = useParams(), a = _useParams.a, b = _useParams.b, d = _useParams.d, c = _useParams.c;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PaletteEditor__rspack_import_3.ViewPaletteEditor, {
        a: a,
        b: b,
        c: c,
        d: d
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/page.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
function useParams() {
    var value = (0,_app_routes__rspack_import_2.useRouteParamAsString)("value");
    return react__rspack_import_1_default().useMemo(function() {
        switch(value.length){
            case 24:
                return parse24(value);
            default:
                return DEFAULT_PALETTE;
        }
    }, [
        value
    ]);
}
function parse24(value) {
    if (value.length !== 24) return DEFAULT_PALETTE;
    return {
        a: parse(value, 0),
        b: parse(value, 1),
        c: parse(value, 2),
        d: parse(value, 3)
    };
}
function parse(value, arrIdx) {
    var stride = Math.floor(value.length / 4);
    var word = Math.floor(stride / 3);
    var max = Math.pow(16, word) - 1;
    return [
        0,
        1,
        2
    ].map(function(item) {
        var index = arrIdx * stride + word * item;
        var hex = "0x".concat(value.slice(index, index + word));
        return parseInt(hex) / max;
    });
}
var DEFAULT_PALETTE = {
    a: [
        0.5,
        0.5,
        0.5
    ],
    b: [
        0.5,
        0.5,
        0.5
    ],
    c: [
        1,
        1,
        1
    ],
    d: [
        0,
        0.33,
        0.67
    ]
};


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLmJhMmQ2YWU4MGRjOTVmNjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3M/OGNhZSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3M/MzMyYSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzcz9lNzMyIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9TbGlkZXJzLm1vZHVsZS5jc3M/NTkzNyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL1BhbGV0dGVQcmV2aWV3RGlzay50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3RGlzay9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9QYWxldHRlUHJldmlld0hvcml6b250YWwudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvU2xpZGVycy50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdEaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdEaXNrLVBhbGV0dGVQcmV2aWV3RGlzay1tb2R1bGVfcGFsZXR0ZVByZXZpZXdEaXNrX2JMaUdMQVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUVkaXRvclwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfcGFsZXR0ZUVkaXRvcl9MSVVjMW9cIixcImRpc2tcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2Rpc2tfQno2WkNwXCIsXCJob3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsX0RLZG56NVwiLFwiaG9yaXpvbnRhbEFcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxBX1NSZ0d3MFwiLFwiaG9yaXpvbnRhbEJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxCX05ETkVVM1wiLFwic2Nyb2xsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9zY3JvbGxfWWtFZnVfXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJzXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcnNfSEcxcGppXCIsXCJzbGlkZXJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVNsaWRlcnMtU2xpZGVycy1tb2R1bGVfc2xpZGVyX0dzR0trX1wifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVGhlbWUsIHR5cGUgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCB0eXBlIHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFBhbGV0dGVQcmV2aWV3RGlza1BhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCI7XG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcblx0YTogQXJyYXlOdW1iZXIzO1xuXHRiOiBBcnJheU51bWJlcjM7XG5cdGM6IEFycmF5TnVtYmVyMztcblx0ZDogQXJyYXlOdW1iZXIzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0Rpc2socHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0Rpc2tQcm9wcykge1xuXHRjb25zdCBwYWludGVyID0gdXNlUGFpbnRlcigpO1xuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHQuLi5zdHlsZUNvbW1vbihwcm9wcyksXG5cdH07XG5cdGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHM7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cGFpbnRlci5hID0gYTtcblx0XHRwYWludGVyLmIgPSBiO1xuXHRcdHBhaW50ZXIuYyA9IGM7XG5cdFx0cGFpbnRlci5kID0gZDtcblx0XHRwYWludGVyLnBhaW50KCk7XG5cdH0sIFthLCBiLCBjLCBkXSk7XG5cdHJldHVybiAoXG5cdFx0PGNhbnZhc1xuXHRcdFx0cmVmPXtwYWludGVyLnNldENhbnZhc31cblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3RGlzayl9XG5cdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0PjwvY2FudmFzPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB8IG51bGw+KG51bGwpO1xuXHRpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyKCk7XG5cdHJldHVybiByZWYuY3VycmVudDtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3RGlza1wiO1xuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjMsXG5cdFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG5cdHRnZENvZGVGdW5jdGlvbl91djJwb2xhcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIHtcblx0cHVibGljIGE6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XTtcblx0cHVibGljIGI6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XTtcblx0cHVibGljIGM6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XTtcblx0cHVibGljIGQ6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XTtcblxuXHRwcml2YXRlIGNvbnRleHQ6IFRnZENvbnRleHQgfCBudWxsID0gbnVsbDtcblxuXHRyZWFkb25seSBzZXRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcblx0XHRpZiAodGhpcy5jb250ZXh0KSB7XG5cdFx0XHR0aGlzLmNvbnRleHQuZGVsZXRlKCk7XG5cdFx0XHR0aGlzLmNvbnRleHQgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAoY2FudmFzKSB7XG5cdFx0XHRjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzLCB7IGFudGlhbGlhczogZmFsc2UgfSk7XG5cdFx0XHRjb250ZXh0LmFkZChcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG5cdFx0XHRcdFx0c2hhZGVyOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuXHRcdFx0XHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0XHRcdFx0dW5pQTogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUI6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlDOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdFx0dW5pRDogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUFzcGVjdFJhdGlvOiBcImZsb2F0XCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dmFyeWluZzoge1xuXHRcdFx0XHRcdFx0XHR2YXJVVjogXCJ2ZWMyXCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0b3V0cHV0czoge1xuXHRcdFx0XHRcdFx0XHRGcmFnQ29sb3I6IFwidmVjNFwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uczoge1xuXHRcdFx0XHRcdFx0XHQuLi50Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIoKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFx0XHRcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXG5cdFx0XHRcdFx0XHRcdFwiZmxvYXQgciA9IHBvbGFyLng7XCIsXG5cdFx0XHRcdFx0XHRcdGBmbG9hdCB0ID0gZnJhY3QoMS4wICsgKHBvbGFyLnkgKyAke01hdGguUEkgLyAyfSkgKiAkezAuNSAvIE1hdGguUEl9KTtgLFxuXHRcdFx0XHRcdFx0XHRcImZsb2F0IGxpZ2h0ID0gMS4wIC0gc21vb3Roc3RlcCgwLjQsIDAuNDIsIGFicyhyIC0gMC41KSk7XCIsXG5cdFx0XHRcdFx0XHRcdFwiRnJhZ0NvbG9yID0gdmVjNChcIixcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdGBsaWdodCAqICh1bmlBICsgdW5pQipjb3MoJHsyICogTWF0aC5QSX0qKHVuaUMgKiB0ICsgdW5pRCkpKSxgLFxuXHRcdFx0XHRcdFx0XHRcdFwiMVwiLFxuXHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcIik7XCIsXG5cdFx0XHRcdFx0XHRcdFwiaWYgKHQgPCAwLjApIEZyYWdDb2xvciA9IHZlYzQoMSk7XCIsXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtLCBjb250ZXh0IH0pID0+IHtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYik7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaUNcIiwgLi4udGhpcy5jKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb1wiLCBjb250ZXh0LmFzcGVjdFJhdGlvKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdH1cblx0fTtcblxuXHRwYWludCgpIHtcblx0XHRjb25zdCB7IGNvbnRleHQgfSA9IHRoaXM7XG5cdFx0aWYgKCFjb250ZXh0KSByZXR1cm47XG5cblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBUaGVtZSwgdHlwZSBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IHsgdHlwZSBBcnJheU51bWJlcjMsIFRnZFZlYzMsIFRnZFZlYzQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWwubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIjtcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXM7XG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyA9IENvbW1vblByb3BzICYge1xuXHRhOiBBcnJheU51bWJlcjM7XG5cdGI6IEFycmF5TnVtYmVyMztcblx0YzogQXJyYXlOdW1iZXIzO1xuXHRkOiBBcnJheU51bWJlcjM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbChcblx0cHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyxcbikge1xuXHRjb25zdCBwYWludGVyID0gdXNlUGFpbnRlcigpO1xuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHQuLi5zdHlsZUNvbW1vbihwcm9wcyksXG5cdH07XG5cdGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHM7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cGFpbnRlci5hID0gYTtcblx0XHRwYWludGVyLmIgPSBiO1xuXHRcdHBhaW50ZXIuYyA9IGM7XG5cdFx0cGFpbnRlci5kID0gZDtcblx0XHRwYWludGVyLnBhaW50KCk7XG5cdH0sIFthLCBiLCBjLCBkXSk7XG5cdHJldHVybiAoXG5cdFx0PGNhbnZhc1xuXHRcdFx0cmVmPXtwYWludGVyLnNldENhbnZhc31cblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCl9XG5cdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0PjwvY2FudmFzPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB8IG51bGw+KG51bGwpO1xuXHRpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyKCk7XG5cdHJldHVybiByZWYuY3VycmVudDtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiO1xuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjMsXG5cdFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB7XG5cdHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBiOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cblx0cHJpdmF0ZSBjb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cblx0cmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG5cdFx0aWYgKHRoaXMuY29udGV4dCkge1xuXHRcdFx0dGhpcy5jb250ZXh0LmRlbGV0ZSgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGNhbnZhcykge1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pO1xuXHRcdFx0Y29udGV4dC5hZGQoXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuXHRcdFx0XHRcdHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdFx0XHRcdHVuaUE6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlCOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdFx0dW5pQzogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUQ6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHZhcnlpbmc6IHtcblx0XHRcdFx0XHRcdFx0dmFyVVY6IFwidmVjMlwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG91dHB1dHM6IHtcblx0XHRcdFx0XHRcdFx0RnJhZ0NvbG9yOiBcInZlYzRcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFx0XHRcImZsb2F0IHQgPSB2YXJVVi54O1wiLFxuXHRcdFx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG5cdFx0XHRcdFx0XHRcdFtgdW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSxgLCBcIjFcIl0sXG5cdFx0XHRcdFx0XHRcdFwiKTtcIixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlBXCIsIC4uLnRoaXMuYSk7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlEXCIsIC4uLnRoaXMuZCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR9XG5cdH07XG5cblx0cGFpbnQoKSB7XG5cdFx0Y29uc3QgeyBjb250ZXh0IH0gPSB0aGlzO1xuXHRcdGlmICghY29udGV4dCkgcmV0dXJuO1xuXG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdFRoZW1lLFxuXHR0eXBlIENvbW1vblByb3BzLFxuXHRzdHlsZUNvbW1vbixcblx0Vmlld1RhYnMsXG5cdFZpZXdUYWIsXG5cdEljb25GaXgsXG5cdEljb25TaGFyZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuaW1wb3J0IENvZGVWaWV3ZXJWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgeyBWaWV3U2xpZGVycyB9IGZyb20gXCIuL1NsaWRlcnNcIjtcbmltcG9ydCB0eXBlIHsgUGFsZXR0ZURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZpZXdQYWxldHRlUHJldmlld0Rpc2sgfSBmcm9tIFwiLi4vLi4vUGFsZXR0ZVByZXZpZXdEaXNrXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZUVkaXRvci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiO1xuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVFZGl0b3JQcm9wcyA9IENvbW1vblByb3BzICYgUGFsZXR0ZURlZmluaXRpb247XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZUVkaXRvcihwcm9wczogVmlld1BhbGV0dGVFZGl0b3JQcm9wcykge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPFBhbGV0dGVEZWZpbml0aW9uPihwcm9wcyk7XG5cdGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXHRcdC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcblx0fTtcblx0Y29uc3QgeyBhLCBiLCBjLCBkIH0gPSB2YWx1ZTtcblx0Y29uc3QgdXBkYXRlID0gKHY6IFBhcnRpYWw8UGFsZXR0ZURlZmluaXRpb24+KSA9PiB7XG5cdFx0c2V0VmFsdWUoe1xuXHRcdFx0Li4udmFsdWUsXG5cdFx0XHQuLi52LFxuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZUVkaXRvcil9XG5cdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0PlxuXHRcdFx0PGFzaWRlPlxuXHRcdFx0XHQ8Vmlld1BhbGV0dGVQcmV2aWV3RGlza1xuXHRcdFx0XHRcdGNsYXNzTmFtZT17U3R5bGVzLmRpc2t9XG5cdFx0XHRcdFx0YT17YX1cblx0XHRcdFx0XHRiPXtifVxuXHRcdFx0XHRcdGM9e2N9XG5cdFx0XHRcdFx0ZD17ZH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxcblx0XHRcdFx0XHRjbGFzc05hbWU9e1N0eWxlcy5ob3Jpem9udGFsfVxuXHRcdFx0XHRcdGE9e2F9XG5cdFx0XHRcdFx0Yj17Yn1cblx0XHRcdFx0XHRjPXtjfVxuXHRcdFx0XHRcdGQ9e2R9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEF9XG5cdFx0XHRcdFx0YT17YX1cblx0XHRcdFx0XHRiPXtifVxuXHRcdFx0XHRcdGM9e2N9XG5cdFx0XHRcdFx0ZD17ZH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxcblx0XHRcdFx0XHRjbGFzc05hbWU9e1N0eWxlcy5ob3Jpem9udGFsQn1cblx0XHRcdFx0XHRhPXthfVxuXHRcdFx0XHRcdGI9e2J9XG5cdFx0XHRcdFx0Yz17Y31cblx0XHRcdFx0XHRkPXtkfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9hc2lkZT5cblx0XHRcdDxWaWV3VGFicyBtYXhIZWlnaHQ9XCIxMDAlXCI+XG5cdFx0XHRcdDxWaWV3VGFiXG5cdFx0XHRcdFx0a2V5PVwiY29uZmlnXCJcblx0XHRcdFx0XHRsYWJlbD17XG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8SWNvbkZpeCAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PkNvbmZpZzwvZGl2PlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17U3R5bGVzLnNjcm9sbH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxWaWV3U2xpZGVyc1xuXHRcdFx0XHRcdFx0bGFiZWw9XCJMdW1pbmFuY2VcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2F9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGE6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld1NsaWRlcnNcblx0XHRcdFx0XHRcdGxhYmVsPVwiU2F0dXJhdGlvblwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17Yn1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlKHsgYjogdiB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxWaWV3U2xpZGVyc1xuXHRcdFx0XHRcdFx0bGFiZWw9XCJTcHJlYWRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2N9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGM6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld1NsaWRlcnNcblx0XHRcdFx0XHRcdGxhYmVsPVwiU2hpZnRcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2R9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGQ6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9WaWV3VGFiPlxuXHRcdFx0XHQ8Vmlld1RhYlxuXHRcdFx0XHRcdGtleT1cInNoYXJlXCJcblx0XHRcdFx0XHRsYWJlbD17XG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8SWNvblNoYXJlIC8+XG5cdFx0XHRcdFx0XHRcdDxkaXY+U2hhcmU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxDb2RlVmlld2VyVmlld1xuXHRcdFx0XHRcdFx0bGFuZ3VhZ2U9XCJnbHNsXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtgdmVjMyBwYWxldHRlKGZsb2F0IHQpIHtcbiAgICByZXR1cm4gdmVjMygke2FycihhKX0pXG4gICAgICAgICsgdmVjMygke2FycihiKX0pICogY29zKFxuICAgICAgICAgICAgJHsyICogTWF0aC5QSX0gKiAoXG4gICAgICAgICAgICAgICAgdCAqIHZlYzMoJHthcnIoYyl9KVxuICAgICAgICAgICAgICAgICsgdmVjMygke2FycihkKX0pXG4gICAgICAgICAgICApXG4gICAgICAgIClcbn1gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PENvZGVWaWV3ZXJWaWV3XG5cdFx0XHRcdFx0XHRsYW5ndWFnZT1cInRzXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtgdGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xuICAgIGE6IFske2FycihhKX0sIDFdLFxuICAgIGI6IFske2FycihiKX0sIDFdLFxuICAgIGM6IFske2FycihjKX0sIDFdLFxuICAgIGQ6IFske2FycihkKX0sIDFdLFxufSlgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVmlld1RhYj5cblx0XHRcdDwvVmlld1RhYnM+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGFycihhOiBudW1iZXJbXSkge1xuXHRyZXR1cm4gYCR7YS5tYXAoKHYpID0+IHYudG9GaXhlZCgzKSkuam9pbihcIiwgXCIpfWA7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQge1xuXHRUaGVtZSxcblx0dHlwZSBDb21tb25Qcm9wcyxcblx0c3R5bGVDb21tb24sXG5cdFZpZXdTbGlkZXIsXG5cdEljb25Mb2NrT3Blbixcblx0SWNvbkxvY2tDbG9zZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TbGlkZXJzLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXM7XG5cbmV4cG9ydCB0eXBlIFZpZXdTbGlkZXJzUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcblx0bGFiZWw6IHN0cmluZztcblx0dmFsdWU6IEFycmF5TnVtYmVyMztcblx0b25DaGFuZ2UodmFsdWU6IEFycmF5TnVtYmVyMyk6IHZvaWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1NsaWRlcnMocHJvcHM6IFZpZXdTbGlkZXJzUHJvcHMpIHtcblx0Y29uc3QgW2xvY2ssIHNldExvY2tdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHQuLi5zdHlsZUNvbW1vbihwcm9wcyksXG5cdH07XG5cdGNvbnN0IFtyZWQsIGdyZWVuLCBibHVlXSA9IHByb3BzLnZhbHVlO1xuXHRjb25zdCBzZXRSZWQgPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbdiwgZ3JlZW4sIGJsdWVdKTtcblx0Y29uc3Qgc2V0R3JlZW4gPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCB2LCBibHVlXSk7XG5cdGNvbnN0IHNldEJsdWUgPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCBncmVlbiwgdl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5zbGlkZXJzKX0gc3R5bGU9e3N0eWxlfT5cblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXY+e3Byb3BzLmxhYmVsfTwvZGl2PlxuXHRcdFx0XHR7bG9jayA/IChcblx0XHRcdFx0XHQ8SWNvbkxvY2tDbG9zZSBvbkNsaWNrPXsoKSA9PiBzZXRMb2NrKGZhbHNlKX0gLz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8SWNvbkxvY2tPcGVuIG9uQ2xpY2s9eygpID0+IHNldExvY2sodHJ1ZSl9IC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdHtsb2NrICYmIChcblx0XHRcdFx0PFNsaWRlclxuXHRcdFx0XHRcdGxhYmVsPVwiKlwiXG5cdFx0XHRcdFx0dmFsdWU9eyhyZWQgKyBncmVlbiArIGJsdWUpIC8gM31cblx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHByb3BzLm9uQ2hhbmdlKFt2LCB2LCB2XSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdFx0eyFsb2NrICYmIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8U2xpZGVyIGxhYmVsPVwiUlwiIHZhbHVlPXtyZWR9IG9uQ2hhbmdlPXtzZXRSZWR9IC8+XG5cdFx0XHRcdFx0PFNsaWRlciBsYWJlbD1cIkdcIiB2YWx1ZT17Z3JlZW59IG9uQ2hhbmdlPXtzZXRHcmVlbn0gLz5cblx0XHRcdFx0XHQ8U2xpZGVyIGxhYmVsPVwiQlwiIHZhbHVlPXtibHVlfSBvbkNoYW5nZT17c2V0Qmx1ZX0gLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBTbGlkZXIoe1xuXHRsYWJlbCxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxufToge1xuXHRsYWJlbDogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNsaWRlcn0+XG5cdFx0XHQ8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG5cdFx0XHQ8Vmlld1NsaWRlclxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MX1cblx0XHRcdFx0c3RlcD17MC4wMX1cblx0XHRcdFx0dGV4dD17dmFsdWUudG9GaXhlZCgyKX1cblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vU2xpZGVyc1wiO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZUVkaXRvclwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVQYXJhbUFzU3RyaW5nIH0gZnJvbSBcIkAvYXBwL3JvdXRlc1wiO1xuaW1wb3J0IHsgVmlld1BhbGV0dGVFZGl0b3IgfSBmcm9tIFwiLi9fUGFsZXR0ZUVkaXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXHRjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHVzZVBhcmFtcygpO1xuXG5cdHJldHVybiA8Vmlld1BhbGV0dGVFZGl0b3IgYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz47XG59XG5cbmZ1bmN0aW9uIHVzZVBhcmFtcygpOiB7XG5cdGE6IEFycmF5TnVtYmVyMztcblx0YjogQXJyYXlOdW1iZXIzO1xuXHRjOiBBcnJheU51bWJlcjM7XG5cdGQ6IEFycmF5TnVtYmVyMztcbn0ge1xuXHRjb25zdCB2YWx1ZSA9IHVzZVJvdXRlUGFyYW1Bc1N0cmluZyhcInZhbHVlXCIpO1xuXHRyZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0c3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMjQ6XG5cdFx0XHRcdHJldHVybiBwYXJzZTI0KHZhbHVlKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBERUZBVUxUX1BBTEVUVEU7XG5cdFx0fVxuXHR9LCBbdmFsdWVdKSBhcyB7XG5cdFx0YTogQXJyYXlOdW1iZXIzO1xuXHRcdGI6IEFycmF5TnVtYmVyMztcblx0XHRjOiBBcnJheU51bWJlcjM7XG5cdFx0ZDogQXJyYXlOdW1iZXIzO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBwYXJzZTI0KHZhbHVlOiBzdHJpbmcpIHtcblx0aWYgKHZhbHVlLmxlbmd0aCAhPT0gMjQpIHJldHVybiBERUZBVUxUX1BBTEVUVEU7XG5cblx0cmV0dXJuIHtcblx0XHRhOiBwYXJzZSh2YWx1ZSwgMCksXG5cdFx0YjogcGFyc2UodmFsdWUsIDEpLFxuXHRcdGM6IHBhcnNlKHZhbHVlLCAyKSxcblx0XHRkOiBwYXJzZSh2YWx1ZSwgMyksXG5cdH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlOiBzdHJpbmcsIGFycklkeDogbnVtYmVyKTogQXJyYXlOdW1iZXIzIHtcblx0Y29uc3Qgc3RyaWRlID0gTWF0aC5mbG9vcih2YWx1ZS5sZW5ndGggLyA0KTtcblx0Y29uc3Qgd29yZCA9IE1hdGguZmxvb3Ioc3RyaWRlIC8gMyk7XG5cdGNvbnN0IG1heCA9IDE2ICoqIHdvcmQgLSAxO1xuXHRyZXR1cm4gWzAsIDEsIDJdLm1hcCgoaXRlbSkgPT4ge1xuXHRcdGNvbnN0IGluZGV4ID0gYXJySWR4ICogc3RyaWRlICsgd29yZCAqIGl0ZW07XG5cdFx0Y29uc3QgaGV4ID0gYDB4JHt2YWx1ZS5zbGljZShpbmRleCwgaW5kZXggKyB3b3JkKX1gO1xuXHRcdHJldHVybiBwYXJzZUludChoZXgpIC8gbWF4O1xuXHR9KSBhcyBBcnJheU51bWJlcjM7XG59XG5cbmNvbnN0IERFRkFVTFRfUEFMRVRURSA9IHtcblx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRiOiBbMC41LCAwLjUsIDAuNV0sXG5cdGM6IFsxLCAxLCAxXSxcblx0ZDogWzAsIDAuMzMsIDAuNjddLFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lIiwic3R5bGVDb21tb24iLCJTdHlsZXMiLCJQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIiwiJCIsIlZpZXdQYWxldHRlUHJldmlld0Rpc2siLCJwcm9wcyIsInBhaW50ZXIiLCJ1c2VQYWludGVyIiwic3R5bGUiLCJhIiwiYiIsImQiLCJjIiwicmVmIiwiVGdkQ29udGV4dCIsIlRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciIsIlRnZFNoYWRlckZyYWdtZW50IiwidGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyIiwiY2FudmFzIiwiY29udGV4dCIsIk1hdGgiLCJzZXRVbmlmb3JtcyIsInByb2dyYW0iLCJfcHJvZ3JhbSIsIl9wcm9ncmFtMSIsIl9wcm9ncmFtMiIsIl9wcm9ncmFtMyIsInBhaW50IiwiUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciIsIlZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwiLCJWaWV3VGFicyIsIlZpZXdUYWIiLCJJY29uRml4IiwiSWNvblNoYXJlIiwiQ29kZVZpZXdlclZpZXciLCJWaWV3U2xpZGVycyIsIlZpZXdQYWxldHRlRWRpdG9yIiwiX1JlYWN0X3VzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsInYiLCJvbkNoYW5nZSIsImFyciIsIlZpZXdTbGlkZXIiLCJJY29uTG9ja09wZW4iLCJJY29uTG9ja0Nsb3NlIiwibG9jayIsInNldExvY2siLCJfcHJvcHNfdmFsdWUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJzZXRSZWQiLCJzZXRHcmVlbiIsInNldEJsdWUiLCJvbkNsaWNrIiwiU2xpZGVyIiwicGFyYW0iLCJsYWJlbCIsInVzZVJvdXRlUGFyYW1Bc1N0cmluZyIsIlBhZ2UiLCJfdXNlUGFyYW1zIiwidXNlUGFyYW1zIiwicGFyc2UyNCIsIkRFRkFVTFRfUEFMRVRURSIsInBhcnNlIiwiYXJySWR4Iiwic3RyaWRlIiwid29yZCIsIm1heCIsIml0ZW0iLCJpbmRleCIsImhleCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLG9IQUFvSCxFOzs7Ozs7OztBQ0RwSTtBQUNBLHNEQUFlLENBQUMsNElBQTRJLEU7Ozs7Ozs7O0FDRDVKO0FBQ0Esc0RBQWUsQ0FBQyx3a0JBQXdrQixFOzs7Ozs7OztBQ0R4bEI7QUFDQSxzREFBZSxDQUFDLDRMQUE0TCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDdLO0FBRXNDO0FBR2hCO0FBQ0M7QUFFdEQsSUFBTUssSUFBSUosK0NBQWdCO0FBU25CLFNB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