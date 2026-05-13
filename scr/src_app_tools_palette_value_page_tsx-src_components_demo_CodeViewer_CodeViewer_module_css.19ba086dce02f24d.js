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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/PalettePreviewDisk/PalettePreviewDisk.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/PalettePreviewHorizontal/PalettePreviewHorizontal.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Config"
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, "config", true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconShare, {}, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Share"
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "ts",
                                value: "tgdCodeFunction_palette({\n    a: [".concat(arr(a), ", 1],\n    b: [").concat(arr(b), ", 1],\n    c: [").concat(arr(c), ", 1],\n    d: [").concat(arr(d), ", 1],\n})")
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this)
                        ]
                    }, "share", true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    lock ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockClose, {
                        onClick: function onClick() {
                            return setLock(false);
                        }
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockOpen, {
                        onClick: function onClick() {
                            return setLock(true);
                        }
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "G",
                        value: green,
                        onChange: setGreen
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "B",
                        value: blue,
                        onChange: setBlue
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/page.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjE5YmEwODZkY2UwMmYyNGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3M/OGNhZSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3M/MzMyYSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzcz9lNzMyIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9TbGlkZXJzLm1vZHVsZS5jc3M/NTkzNyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL3BhaW50ZXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9wYWludGVyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvUGFsZXR0ZUVkaXRvci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9TbGlkZXJzL1NsaWRlcnMudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3RGlza1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3RGlzay1QYWxldHRlUHJldmlld0Rpc2stbW9kdWxlX3BhbGV0dGVQcmV2aWV3RGlza19iTGlHTEFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1QYWxldHRlUHJldmlld0hvcml6b250YWwtbW9kdWxlX3BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbF9UQTVJN1dcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVFZGl0b3JcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX3BhbGV0dGVFZGl0b3JfTElVYzFvXCIsXCJkaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9kaXNrX0J6NlpDcFwiLFwiaG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfaG9yaXpvbnRhbF9ES2RuejVcIixcImhvcml6b250YWxBXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQV9TUmdHdzBcIixcImhvcml6b250YWxCXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQl9ORE5FVTNcIixcInNjcm9sbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfc2Nyb2xsX1lrRWZ1X1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2xpZGVyc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItU2xpZGVycy1TbGlkZXJzLW1vZHVsZV9zbGlkZXJzX0hHMXBqaVwiLFwic2xpZGVyXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcl9Hc0dLa19cIn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0Rpc2socHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0Rpc2tQcm9wcykge1xuICAgIGNvbnN0IHBhaW50ZXIgPSB1c2VQYWludGVyKClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFpbnRlci5hID0gYVxuICAgICAgICBwYWludGVyLmIgPSBiXG4gICAgICAgIHBhaW50ZXIuYyA9IGNcbiAgICAgICAgcGFpbnRlci5kID0gZFxuICAgICAgICBwYWludGVyLnBhaW50KClcbiAgICB9LCBbYSwgYiwgYywgZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtwYWludGVyLnNldENhbnZhc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3RGlzayl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9PjwvY2FudmFzPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0Rpc2tcIlxuIiwiaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIHtcbiAgICBwdWJsaWMgYTogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGI6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgZDogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG5cbiAgICBwcml2YXRlIGNvbnRleHQ6IFRnZENvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gICAgcmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHsgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgICAgICAgICAgY29udGV4dC5hZGQoXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQzogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pRDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW86IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFnQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl91djJwb2xhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHBvbGFyID0gdXYycG9sYXIodmFyVVYpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgciA9IHBvbGFyLng7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZsb2F0IHQgPSBmcmFjdCgxLjAgKyAocG9sYXIueSArICR7TWF0aC5QSSAvIDJ9KSAqICR7MC41IC8gTWF0aC5QSX0pO2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBsaWdodCA9IDEuMCAtIHNtb290aHN0ZXAoMC40LCAwLjQyLCBhYnMociAtIDAuNSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYGxpZ2h0ICogKHVuaUEgKyB1bmlCKmNvcygkezIgKiBNYXRoLlBJfSoodW5pQyAqIHQgKyB1bmlEKSkpLGAsIFwiMVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZiAodCA8IDAuMCkgRnJhZ0NvbG9yID0gdmVjNCgxKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSwgY29udGV4dCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUFcIiwgLi4udGhpcy5hKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaURcIiwgLi4udGhpcy5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb1wiLCBjb250ZXh0LmFzcGVjdFJhdGlvKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMywgVGdkVmVjMywgVGdkVmVjNCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwocHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcykge1xuICAgIGNvbnN0IHBhaW50ZXIgPSB1c2VQYWludGVyKClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFpbnRlci5hID0gYVxuICAgICAgICBwYWludGVyLmIgPSBiXG4gICAgICAgIHBhaW50ZXIuYyA9IGNcbiAgICAgICAgcGFpbnRlci5kID0gZFxuICAgICAgICBwYWludGVyLnBhaW50KClcbiAgICB9LCBbYSwgYiwgYywgZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtwYWludGVyLnNldENhbnZhc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9PjwvY2FudmFzPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWxcIlxuIiwiaW1wb3J0IHsgdHlwZSBBcnJheU51bWJlcjMsIFRnZENvbnRleHQsIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciwgVGdkU2hhZGVyRnJhZ21lbnQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB7XG4gICAgcHVibGljIGE6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBiOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYzogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGQ6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGxcblxuICAgIHJlYWRvbmx5IHNldENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZGVsZXRlKClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzLCB7IGFudGlhbGlhczogZmFsc2UgfSlcbiAgICAgICAgICAgIGNvbnRleHQuYWRkKFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBzaGFkZXI6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUE6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUI6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUM6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUQ6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IHQgPSB2YXJVVi54O1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYHVuaUEgKyB1bmlCKmNvcygkezIgKiBNYXRoLlBJfSoodW5pQyAqIHQgKyB1bmlEKSksYCwgXCIxXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUFcIiwgLi4udGhpcy5hKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaURcIiwgLi4udGhpcy5kKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24sIFZpZXdUYWJzLCBWaWV3VGFiLCBJY29uRml4LCBJY29uU2hhcmUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBDb2RlVmlld2VyVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgeyBWaWV3U2xpZGVycyB9IGZyb20gXCIuL1NsaWRlcnNcIlxuaW1wb3J0IHsgUGFsZXR0ZURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIlxuaW1wb3J0IHsgVmlld1BhbGV0dGVQcmV2aWV3RGlzayB9IGZyb20gXCIuLi8uLi9QYWxldHRlUHJldmlld0Rpc2tcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlRWRpdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIFBhbGV0dGVEZWZpbml0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZUVkaXRvcihwcm9wczogVmlld1BhbGV0dGVFZGl0b3JQcm9wcykge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8UGFsZXR0ZURlZmluaXRpb24+KHByb3BzKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgYywgZCB9ID0gdmFsdWVcbiAgICBjb25zdCB1cGRhdGUgPSAodjogUGFydGlhbDxQYWxldHRlRGVmaW5pdGlvbj4pID0+IHtcbiAgICAgICAgc2V0VmFsdWUoe1xuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAuLi52LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZUVkaXRvcil9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0Rpc2sgY2xhc3NOYW1lPXtTdHlsZXMuZGlza30gYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCBjbGFzc05hbWU9e1N0eWxlcy5ob3Jpem9udGFsfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWxBfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWxCfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIDxWaWV3VGFicyBtYXhIZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgPFZpZXdUYWJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkZpeCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5zY3JvbGx9PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJMdW1pbmFuY2VcIiB2YWx1ZT17YX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBhOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTYXR1cmF0aW9uXCIgdmFsdWU9e2J9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlKHsgYjogdiB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJzIGxhYmVsPVwiU3ByZWFkXCIgdmFsdWU9e2N9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlKHsgYzogdiB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJzIGxhYmVsPVwiU2hpZnRcIiB2YWx1ZT17ZH0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBkOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYlxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJzaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25TaGFyZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2hhcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICA8Q29kZVZpZXdlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZ2xzbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YHZlYzMgcGFsZXR0ZShmbG9hdCB0KSB7XG4gICAgcmV0dXJuIHZlYzMoJHthcnIoYSl9KVxuICAgICAgICArIHZlYzMoJHthcnIoYil9KSAqIGNvcyhcbiAgICAgICAgICAgICR7MiAqIE1hdGguUEl9ICogKFxuICAgICAgICAgICAgICAgIHQgKiB2ZWMzKCR7YXJyKGMpfSlcbiAgICAgICAgICAgICAgICArIHZlYzMoJHthcnIoZCl9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG59YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENvZGVWaWV3ZXJWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cInRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgdGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xuICAgIGE6IFske2FycihhKX0sIDFdLFxuICAgIGI6IFske2FycihiKX0sIDFdLFxuICAgIGM6IFske2FycihjKX0sIDFdLFxuICAgIGQ6IFske2FycihkKX0sIDFdLFxufSlgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgIDwvVmlld1RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gYXJyKGE6IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIGAke2EubWFwKCh2KSA9PiB2LnRvRml4ZWQoMykpLmpvaW4oXCIsIFwiKX1gXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24sIFZpZXdTbGlkZXIsIEljb25Mb2NrT3BlbiwgSWNvbkxvY2tDbG9zZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TbGlkZXJzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3U2xpZGVyc1Byb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIHZhbHVlOiBBcnJheU51bWJlcjNcbiAgICBvbkNoYW5nZSh2YWx1ZTogQXJyYXlOdW1iZXIzKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1NsaWRlcnMocHJvcHM6IFZpZXdTbGlkZXJzUHJvcHMpIHtcbiAgICBjb25zdCBbbG9jaywgc2V0TG9ja10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCBbcmVkLCBncmVlbiwgYmx1ZV0gPSBwcm9wcy52YWx1ZVxuICAgIGNvbnN0IHNldFJlZCA9ICh2OiBudW1iZXIpID0+IHByb3BzLm9uQ2hhbmdlKFt2LCBncmVlbiwgYmx1ZV0pXG4gICAgY29uc3Qgc2V0R3JlZW4gPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCB2LCBibHVlXSlcbiAgICBjb25zdCBzZXRCbHVlID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3JlZCwgZ3JlZW4sIHZdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5zbGlkZXJzKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdj57cHJvcHMubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAge2xvY2sgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uTG9ja0Nsb3NlIG9uQ2xpY2s9eygpID0+IHNldExvY2soZmFsc2UpfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uTG9ja09wZW4gb25DbGljaz17KCkgPT4gc2V0TG9jayh0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7bG9jayAmJiA8U2xpZGVyIGxhYmVsPVwiKlwiIHZhbHVlPXsocmVkICsgZ3JlZW4gKyBibHVlKSAvIDN9IG9uQ2hhbmdlPXsodikgPT4gcHJvcHMub25DaGFuZ2UoW3YsIHYsIHZdKX0gLz59XG4gICAgICAgICAgICB7IWxvY2sgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgbGFiZWw9XCJSXCIgdmFsdWU9e3JlZH0gb25DaGFuZ2U9e3NldFJlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIkdcIiB2YWx1ZT17Z3JlZW59IG9uQ2hhbmdlPXtzZXRHcmVlbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIkJcIiB2YWx1ZT17Ymx1ZX0gb25DaGFuZ2U9e3NldEJsdWV9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNsaWRlcih7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyOyBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPFZpZXdTbGlkZXIgbWluPXswfSBtYXg9ezF9IHN0ZXA9ezAuMDF9IHRleHQ9e3ZhbHVlLnRvRml4ZWQoMil9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9TbGlkZXJzXCJcbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVFZGl0b3JcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyB1c2VSb3V0ZVBhcmFtQXNTdHJpbmcgfSBmcm9tIFwiQC9hcHAvcm91dGVzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlRWRpdG9yIH0gZnJvbSBcIi4vX1BhbGV0dGVFZGl0b3JcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gdXNlUGFyYW1zKClcblxuICAgIHJldHVybiA8Vmlld1BhbGV0dGVFZGl0b3IgYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbn1cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCk6IHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn0ge1xuICAgIGNvbnN0IHZhbHVlID0gdXNlUm91dGVQYXJhbUFzU3RyaW5nKFwidmFsdWVcIilcbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZTI0KHZhbHVlKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9QQUxFVFRFXG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWVdKSBhcyB7XG4gICAgICAgIGE6IEFycmF5TnVtYmVyM1xuICAgICAgICBiOiBBcnJheU51bWJlcjNcbiAgICAgICAgYzogQXJyYXlOdW1iZXIzXG4gICAgICAgIGQ6IEFycmF5TnVtYmVyM1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2UyNCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMjQpIHJldHVybiBERUZBVUxUX1BBTEVUVEVcblxuICAgIHJldHVybiB7XG4gICAgICAgIGE6IHBhcnNlKHZhbHVlLCAwKSxcbiAgICAgICAgYjogcGFyc2UodmFsdWUsIDEpLFxuICAgICAgICBjOiBwYXJzZSh2YWx1ZSwgMiksXG4gICAgICAgIGQ6IHBhcnNlKHZhbHVlLCAzKSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlOiBzdHJpbmcsIGFycklkeDogbnVtYmVyKTogQXJyYXlOdW1iZXIzIHtcbiAgICBjb25zdCBzdHJpZGUgPSBNYXRoLmZsb29yKHZhbHVlLmxlbmd0aCAvIDQpXG4gICAgY29uc3Qgd29yZCA9IE1hdGguZmxvb3Ioc3RyaWRlIC8gMylcbiAgICBjb25zdCBtYXggPSBNYXRoLnBvdygxNiwgd29yZCkgLSAxXG4gICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJJZHggKiBzdHJpZGUgKyB3b3JkICogaXRlbVxuICAgICAgICBjb25zdCBoZXggPSBgMHgke3ZhbHVlLnNsaWNlKGluZGV4LCBpbmRleCArIHdvcmQpfWBcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCkgLyBtYXhcbiAgICB9KSBhcyBBcnJheU51bWJlcjNcbn1cblxuY29uc3QgREVGQVVMVF9QQUxFVFRFID0ge1xuICAgIGE6IFswLjUsIDAuNSwgMC41XSxcbiAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgYzogWzEsIDEsIDFdLFxuICAgIGQ6IFswLCAwLjMzLCAwLjY3XSxcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lIiwic3R5bGVDb21tb24iLCJTdHlsZXMiLCJQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIiwiJCIsIlZpZXdQYWxldHRlUHJldmlld0Rpc2siLCJwcm9wcyIsInBhaW50ZXIiLCJ1c2VQYWludGVyIiwic3R5bGUiLCJhIiwiYiIsImQiLCJjIiwicmVmIiwiVGdkQ29udGV4dCIsIlRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciIsIlRnZFNoYWRlckZyYWdtZW50IiwidGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyIiwiY2FudmFzIiwiY29udGV4dCIsIk1hdGgiLCJzZXRVbmlmb3JtcyIsInByb2dyYW0iLCJfcHJvZ3JhbSIsIl9wcm9ncmFtMSIsIl9wcm9ncmFtMiIsIl9wcm9ncmFtMyIsInBhaW50IiwiUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciIsIlZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwiLCJWaWV3VGFicyIsIlZpZXdUYWIiLCJJY29uRml4IiwiSWNvblNoYXJlIiwiQ29kZVZpZXdlclZpZXciLCJWaWV3U2xpZGVycyIsIlZpZXdQYWxldHRlRWRpdG9yIiwiX1JlYWN0X3VzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVwZGF0ZSIsInYiLCJvbkNoYW5nZSIsImFyciIsIlZpZXdTbGlkZXIiLCJJY29uTG9ja09wZW4iLCJJY29uTG9ja0Nsb3NlIiwibG9jayIsInNldExvY2siLCJfcHJvcHNfdmFsdWUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJzZXRSZWQiLCJzZXRHcmVlbiIsInNldEJsdWUiLCJvbkNsaWNrIiwiU2xpZGVyIiwicGFyYW0iLCJsYWJlbCIsInVzZVJvdXRlUGFyYW1Bc1N0cmluZyIsIlBhZ2UiLCJfdXNlUGFyYW1zIiwidXNlUGFyYW1zIiwicGFyc2UyNCIsIkRFRkFVTFRfUEFMRVRURSIsInBhcnNlIiwiYXJySWR4Iiwic3RyaWRlIiwid29yZCIsIm1heCIsIml0ZW0iLCJpbmRleCIsImhleCIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLG9IQUFvSCxFOzs7Ozs7OztBQ0RwSTtBQUNBLHNEQUFlLENBQUMsNElBQTRJLEU7Ozs7Ozs7O0FDRDVKO0FBQ0Esc0RBQWUsQ0FBQyx3a0JBQXdrQixFOzs7Ozs7OztBQ0R4bEI7QUFDQSxzREFBZSxDQUFDLDRMQUE0TCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDlLO0FBRWlDO0FBR1g7QUFDQztBQUVyRCxJQUFNSyxJQUFJ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