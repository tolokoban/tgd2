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
        columnNumber: 9
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
        lineNumber: 32,
        columnNumber: 9
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
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontal,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalA,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, {
                        className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalB,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTabs, {
                maxHeight: "100%",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFix, {}, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Config"
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
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
                                lineNumber: 47,
                                columnNumber: 21
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
                                lineNumber: 48,
                                columnNumber: 21
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
                                lineNumber: 49,
                                columnNumber: 21
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
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, "config", true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconShare, {}, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Share"
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "glsl",
                                value: "vec3 palette(float t) {\n    return vec3(".concat(arr(a), ")\n        + vec3(").concat(arr(b), ") * cos(\n            ").concat(2 * Math.PI, " * (\n                t * vec3(").concat(arr(c), ")\n                + vec3(").concat(arr(d), ")\n            )\n        )\n}")
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "ts",
                                value: "tgdCodeFunction_palette({\n    a: [".concat(arr(a), ", 1],\n    b: [").concat(arr(b), ", 1],\n    c: [").concat(arr(c), ", 1],\n    d: [").concat(arr(d), ", 1],\n})")
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, "share", true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
        lineNumber: 30,
        columnNumber: 9
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
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    lock ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockClose, {
                        onClick: function onClick() {
                            return setLock(false);
                        }
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockOpen, {
                        onClick: function onClick() {
                            return setLock(true);
                        }
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 27,
                columnNumber: 13
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
                lineNumber: 35,
                columnNumber: 22
            }, this),
            !lock && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "R",
                        value: red,
                        onChange: setRed
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "G",
                        value: green,
                        onChange: setGreen
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "B",
                        value: blue,
                        onChange: setBlue
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
        lineNumber: 26,
        columnNumber: 9
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
                lineNumber: 50,
                columnNumber: 13
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
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
        lineNumber: 49,
        columnNumber: 9
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
        columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjJhMzYwMmQ5MGNmNWYzODEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3M/OGNhZSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3M/MzMyYSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzcz9lNzMyIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9TbGlkZXJzLm1vZHVsZS5jc3M/NTkzNyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL1BhbGV0dGVQcmV2aWV3RGlzay50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3RGlzay9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9QYWxldHRlUHJldmlld0hvcml6b250YWwudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvU2xpZGVycy50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdEaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdEaXNrLVBhbGV0dGVQcmV2aWV3RGlzay1tb2R1bGVfcGFsZXR0ZVByZXZpZXdEaXNrX2JMaUdMQVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUVkaXRvclwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfcGFsZXR0ZUVkaXRvcl9MSVVjMW9cIixcImRpc2tcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2Rpc2tfQno2WkNwXCIsXCJob3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsX0RLZG56NVwiLFwiaG9yaXpvbnRhbEFcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxBX1NSZ0d3MFwiLFwiaG9yaXpvbnRhbEJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxCX05ETkVVM1wiLFwic2Nyb2xsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9zY3JvbGxfWWtFZnVfXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJzXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcnNfSEcxcGppXCIsXCJzbGlkZXJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVNsaWRlcnMtU2xpZGVycy1tb2R1bGVfc2xpZGVyX0dzR0trX1wifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0Rpc2subW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0Rpc2tQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3RGlzayhwcm9wczogVmlld1BhbGV0dGVQcmV2aWV3RGlza1Byb3BzKSB7XG4gICAgY29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYWludGVyLmEgPSBhXG4gICAgICAgIHBhaW50ZXIuYiA9IGJcbiAgICAgICAgcGFpbnRlci5jID0gY1xuICAgICAgICBwYWludGVyLmQgPSBkXG4gICAgICAgIHBhaW50ZXIucGFpbnQoKVxuICAgIH0sIFthLCBiLCBjLCBkXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e3BhaW50ZXIuc2V0Q2FudmFzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZVByZXZpZXdEaXNrKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+PC9jYW52YXM+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIHwgbnVsbD4obnVsbClcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyKClcbiAgICByZXR1cm4gcmVmLmN1cnJlbnRcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3RGlza1wiXG4iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJwb2xhcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhbGV0dGVQcmV2aWV3RGlza1BhaW50ZXIge1xuICAgIHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYjogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGM6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cblxuICAgIHByaXZhdGUgY29udGV4dDogVGdkQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgICByZWFkb25seSBzZXRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZSgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgICAgICAgICBjb250ZXh0LmFkZChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlCOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlDOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlEOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCByID0gcG9sYXIueDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZmxvYXQgdCA9IGZyYWN0KDEuMCArIChwb2xhci55ICsgJHtNYXRoLlBJIC8gMn0pICogJHswLjUgLyBNYXRoLlBJfSk7YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGxpZ2h0ID0gMS4wIC0gc21vb3Roc3RlcCgwLjQsIDAuNDIsIGFicyhyIC0gMC41KSk7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgbGlnaHQgKiAodW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSksYCwgXCIxXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlmICh0IDwgMC4wKSBGcmFnQ29sb3IgPSB2ZWM0KDEpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtLCBjb250ZXh0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlDXCIsIC4uLnRoaXMuYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvXCIsIGNvbnRleHQuYXNwZWN0UmF0aW8pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXNcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzLCBUZ2RWZWMzLCBUZ2RWZWM0IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWwubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbChwcm9wczogVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFByb3BzKSB7XG4gICAgY29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYWludGVyLmEgPSBhXG4gICAgICAgIHBhaW50ZXIuYiA9IGJcbiAgICAgICAgcGFpbnRlci5jID0gY1xuICAgICAgICBwYWludGVyLmQgPSBkXG4gICAgICAgIHBhaW50ZXIucGFpbnQoKVxuICAgIH0sIFthLCBiLCBjLCBkXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e3BhaW50ZXIuc2V0Q2FudmFzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+PC9jYW52YXM+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIHwgbnVsbD4obnVsbClcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyKClcbiAgICByZXR1cm4gcmVmLmN1cnJlbnRcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG4iLCJpbXBvcnQgeyB0eXBlIEFycmF5TnVtYmVyMywgVGdkQ29udGV4dCwgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLCBUZ2RTaGFkZXJGcmFnbWVudCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIHtcbiAgICBwdWJsaWMgYTogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGI6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgZDogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG5cbiAgICBwcml2YXRlIGNvbnRleHQ6IFRnZENvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gICAgcmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHsgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgICAgICAgICAgY29udGV4dC5hZGQoXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQzogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pRDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhclVWOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJhZ0NvbG9yOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgdCA9IHZhclVWLng7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgdW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSxgLCBcIjFcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlDXCIsIC4uLnRoaXMuYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXNcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiwgVmlld1RhYnMsIFZpZXdUYWIsIEljb25GaXgsIEljb25TaGFyZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IENvZGVWaWV3ZXJWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCB7IFZpZXdTbGlkZXJzIH0gZnJvbSBcIi4vU2xpZGVyc1wiXG5pbXBvcnQgeyBQYWxldHRlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlc1wiXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3RGlza1wiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZUVkaXRvci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgfSBmcm9tIFwiLi4vLi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVFZGl0b3JQcm9wcyA9IENvbW1vblByb3BzICYgUGFsZXR0ZURlZmluaXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlRWRpdG9yKHByb3BzOiBWaWV3UGFsZXR0ZUVkaXRvclByb3BzKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxQYWxldHRlRGVmaW5pdGlvbj4ocHJvcHMpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgY29uc3QgeyBhLCBiLCBjLCBkIH0gPSB2YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZSA9ICh2OiBQYXJ0aWFsPFBhbGV0dGVEZWZpbml0aW9uPikgPT4ge1xuICAgICAgICBzZXRWYWx1ZSh7XG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgIC4uLnYsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlRWRpdG9yKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbGV0dGVQcmV2aWV3RGlzayBjbGFzc05hbWU9e1N0eWxlcy5kaXNrfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWx9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEF9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEJ9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgPFZpZXdUYWJzIG1heEhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYlxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uRml4IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Db25maWc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLnNjcm9sbH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVycyBsYWJlbD1cIkx1bWluYW5jZVwiIHZhbHVlPXthfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGE6IHYgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVycyBsYWJlbD1cIlNhdHVyYXRpb25cIiB2YWx1ZT17Yn0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBiOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTcHJlYWRcIiB2YWx1ZT17Y30gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBjOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTaGlmdFwiIHZhbHVlPXtkfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGQ6IHYgfSl9IC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgICAgIDxWaWV3VGFiXG4gICAgICAgICAgICAgICAgICAgIGtleT1cInNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblNoYXJlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaGFyZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJnbHNsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgdmVjMyBwYWxldHRlKGZsb2F0IHQpIHtcbiAgICByZXR1cm4gdmVjMygke2FycihhKX0pXG4gICAgICAgICsgdmVjMygke2FycihiKX0pICogY29zKFxuICAgICAgICAgICAgJHsyICogTWF0aC5QSX0gKiAoXG4gICAgICAgICAgICAgICAgdCAqIHZlYzMoJHthcnIoYyl9KVxuICAgICAgICAgICAgICAgICsgdmVjMygke2FycihkKX0pXG4gICAgICAgICAgICApXG4gICAgICAgIClcbn1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q29kZVZpZXdlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwidHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2B0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XG4gICAgYTogWyR7YXJyKGEpfSwgMV0sXG4gICAgYjogWyR7YXJyKGIpfSwgMV0sXG4gICAgYzogWyR7YXJyKGMpfSwgMV0sXG4gICAgZDogWyR7YXJyKGQpfSwgMV0sXG59KWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgPC9WaWV3VGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBhcnIoYTogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gYCR7YS5tYXAoKHYpID0+IHYudG9GaXhlZCgzKSkuam9pbihcIiwgXCIpfWBcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiwgVmlld1NsaWRlciwgSWNvbkxvY2tPcGVuLCBJY29uTG9ja0Nsb3NlIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1NsaWRlcnMubW9kdWxlLmNzc1wiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdTbGlkZXJzUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBsYWJlbDogc3RyaW5nXG4gICAgdmFsdWU6IEFycmF5TnVtYmVyM1xuICAgIG9uQ2hhbmdlKHZhbHVlOiBBcnJheU51bWJlcjMpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3U2xpZGVycyhwcm9wczogVmlld1NsaWRlcnNQcm9wcykge1xuICAgIGNvbnN0IFtsb2NrLCBzZXRMb2NrXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IFtyZWQsIGdyZWVuLCBibHVlXSA9IHByb3BzLnZhbHVlXG4gICAgY29uc3Qgc2V0UmVkID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3YsIGdyZWVuLCBibHVlXSlcbiAgICBjb25zdCBzZXRHcmVlbiA9ICh2OiBudW1iZXIpID0+IHByb3BzLm9uQ2hhbmdlKFtyZWQsIHYsIGJsdWVdKVxuICAgIGNvbnN0IHNldEJsdWUgPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCBncmVlbiwgdl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnNsaWRlcnMpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICB7bG9jayA/IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25Mb2NrQ2xvc2Ugb25DbGljaz17KCkgPT4gc2V0TG9jayhmYWxzZSl9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25Mb2NrT3BlbiBvbkNsaWNrPXsoKSA9PiBzZXRMb2NrKHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHtsb2NrICYmIDxTbGlkZXIgbGFiZWw9XCIqXCIgdmFsdWU9eyhyZWQgKyBncmVlbiArIGJsdWUpIC8gM30gb25DaGFuZ2U9eyh2KSA9PiBwcm9wcy5vbkNoYW5nZShbdiwgdiwgdl0pfSAvPn1cbiAgICAgICAgICAgIHshbG9jayAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIlJcIiB2YWx1ZT17cmVkfSBvbkNoYW5nZT17c2V0UmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGxhYmVsPVwiR1wiIHZhbHVlPXtncmVlbn0gb25DaGFuZ2U9e3NldEdyZWVufSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGxhYmVsPVwiQlwiIHZhbHVlPXtibHVlfSBvbkNoYW5nZT17c2V0Qmx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2xpZGVyKHsgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSB9OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8Vmlld1NsaWRlciBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wMX0gdGV4dD17dmFsdWUudG9GaXhlZCgyKX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1NsaWRlcnNcIlxuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZUVkaXRvclwiXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCB7IHVzZVJvdXRlUGFyYW1Bc1N0cmluZyB9IGZyb20gXCJAL2FwcC9yb3V0ZXNcIlxuaW1wb3J0IHsgVmlld1BhbGV0dGVFZGl0b3IgfSBmcm9tIFwiLi9fUGFsZXR0ZUVkaXRvclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgeyBhLCBiLCBkLCBjIH0gPSB1c2VQYXJhbXMoKVxuXG4gICAgcmV0dXJuIDxWaWV3UGFsZXR0ZUVkaXRvciBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxufVxuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKToge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VSb3V0ZVBhcmFtQXNTdHJpbmcoXCJ2YWx1ZVwiKVxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlMjQodmFsdWUpXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBERUZBVUxUX1BBTEVUVEVcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pIGFzIHtcbiAgICAgICAgYTogQXJyYXlOdW1iZXIzXG4gICAgICAgIGI6IEFycmF5TnVtYmVyM1xuICAgICAgICBjOiBBcnJheU51bWJlcjNcbiAgICAgICAgZDogQXJyYXlOdW1iZXIzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZTI0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAyNCkgcmV0dXJuIERFRkFVTFRfUEFMRVRURVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTogcGFyc2UodmFsdWUsIDApLFxuICAgICAgICBiOiBwYXJzZSh2YWx1ZSwgMSksXG4gICAgICAgIGM6IHBhcnNlKHZhbHVlLCAyKSxcbiAgICAgICAgZDogcGFyc2UodmFsdWUsIDMpLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2UodmFsdWU6IHN0cmluZywgYXJySWR4OiBudW1iZXIpOiBBcnJheU51bWJlcjMge1xuICAgIGNvbnN0IHN0cmlkZSA9IE1hdGguZmxvb3IodmFsdWUubGVuZ3RoIC8gNClcbiAgICBjb25zdCB3b3JkID0gTWF0aC5mbG9vcihzdHJpZGUgLyAzKVxuICAgIGNvbnN0IG1heCA9IE1hdGgucG93KDE2LCB3b3JkKSAtIDFcbiAgICByZXR1cm4gWzAsIDEsIDJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFycklkeCAqIHN0cmlkZSArIHdvcmQgKiBpdGVtXG4gICAgICAgIGNvbnN0IGhleCA9IGAweCR7dmFsdWUuc2xpY2UoaW5kZXgsIGluZGV4ICsgd29yZCl9YFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaGV4KSAvIG1heFxuICAgIH0pIGFzIEFycmF5TnVtYmVyM1xufVxuXG5jb25zdCBERUZBVUxUX1BBTEVUVEUgPSB7XG4gICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgIGI6IFswLjUsIDAuNSwgMC41XSxcbiAgICBjOiBbMSwgMSwgMV0sXG4gICAgZDogWzAsIDAuMzMsIDAuNjddLFxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWUiLCJzdHlsZUNvbW1vbiIsIlN0eWxlcyIsIlBhbGV0dGVQcmV2aWV3RGlza1BhaW50ZXIiLCIkIiwiVmlld1BhbGV0dGVQcmV2aWV3RGlzayIsInByb3BzIiwicGFpbnRlciIsInVzZVBhaW50ZXIiLCJzdHlsZSIsImEiLCJiIiwiZCIsImMiLCJyZWYiLCJUZ2RDb250ZXh0IiwiVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJ0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIiLCJjYW52YXMiLCJjb250ZXh0IiwiTWF0aCIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsIl9wcm9ncmFtIiwiX3Byb2dyYW0xIiwiX3Byb2dyYW0yIiwiX3Byb2dyYW0zIiwicGFpbnQiLCJQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIiwiVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCIsIlZpZXdUYWJzIiwiVmlld1RhYiIsIkljb25GaXgiLCJJY29uU2hhcmUiLCJDb2RlVmlld2VyVmlldyIsIlZpZXdTbGlkZXJzIiwiVmlld1BhbGV0dGVFZGl0b3IiLCJfUmVhY3RfdXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXBkYXRlIiwidiIsIm9uQ2hhbmdlIiwiYXJyIiwiVmlld1NsaWRlciIsIkljb25Mb2NrT3BlbiIsIkljb25Mb2NrQ2xvc2UiLCJsb2NrIiwic2V0TG9jayIsIl9wcm9wc192YWx1ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsInNldFJlZCIsInNldEdyZWVuIiwic2V0Qmx1ZSIsIm9uQ2xpY2siLCJTbGlkZXIiLCJwYXJhbSIsImxhYmVsIiwidXNlUm91dGVQYXJhbUFzU3RyaW5nIiwiUGFnZSIsIl91c2VQYXJhbXMiLCJ1c2VQYXJhbXMiLCJwYXJzZTI0IiwiREVGQVVMVF9QQUxFVFRFIiwicGFyc2UiLCJhcnJJZHgiLCJzdHJpZGUiLCJ3b3JkIiwibWF4IiwiaXRlbSIsImluZGV4IiwiaGV4IiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsb0hBQW9ILEU7Ozs7Ozs7O0FDRHBJO0FBQ0Esc0RBQWUsQ0FBQyw0SUFBNEksRTs7Ozs7Ozs7QUNENUo7QUFDQSxzREFBZSxDQUFDLHdrQkFBd2tCLEU7Ozs7Ozs7O0FDRHhsQjtBQUNBLHNEQUFlLENBQUMsNExBQTRMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEOUs7QUFFaUM7QUFHWDtBQUNDO0FBRXJE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