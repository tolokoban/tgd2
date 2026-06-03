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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/PalettePreviewHorizontal/PalettePreviewHorizontal.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 77,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Config"
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 98,
                                columnNumber: 6
                            }, this)
                        ]
                    }, "config", true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 73,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconShare, {}, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                    lineNumber: 108,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "Share"
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 113,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                                language: "ts",
                                value: "tgdCodeFunction_palette({\n    a: [".concat(arr(a), ", 1],\n    b: [").concat(arr(b), ", 1],\n    c: [").concat(arr(c), ", 1],\n    d: [").concat(arr(d), ", 1],\n})")
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                                lineNumber: 125,
                                columnNumber: 6
                            }, this)
                        ]
                    }, "share", true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                        lineNumber: 104,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/PaletteEditor.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this),
                    lock ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockClose, {
                        onClick: function onClick() {
                            return setLock(false);
                        }
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 37,
                        columnNumber: 6
                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconLockOpen, {
                        onClick: function onClick() {
                            return setLock(true);
                        }
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 39,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 51,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "G",
                        value: green,
                        onChange: setGreen
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 52,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(Slider, {
                        label: "B",
                        value: blue,
                        onChange: setBlue
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                        lineNumber: 53,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
                lineNumber: 72,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/_PaletteEditor/Sliders/Sliders.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/[value]/page.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLjc3YzIxOTYyYjFkNWQ5NTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3M/OGNhZSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3M/MzMyYSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzcz9lNzMyIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9TbGlkZXJzLm1vZHVsZS5jc3M/NTkzNyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svUGFsZXR0ZVByZXZpZXdEaXNrLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL3BhaW50ZXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9wYWludGVyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvUGFsZXR0ZUVkaXRvci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9TbGlkZXJzL1NsaWRlcnMudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3RGlza1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3RGlzay1QYWxldHRlUHJldmlld0Rpc2stbW9kdWxlX3BhbGV0dGVQcmV2aWV3RGlza19iTGlHTEFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1QYWxldHRlUHJldmlld0hvcml6b250YWwtbW9kdWxlX3BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbF9UQTVJN1dcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVFZGl0b3JcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX3BhbGV0dGVFZGl0b3JfTElVYzFvXCIsXCJkaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9kaXNrX0J6NlpDcFwiLFwiaG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfaG9yaXpvbnRhbF9ES2RuejVcIixcImhvcml6b250YWxBXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQV9TUmdHdzBcIixcImhvcml6b250YWxCXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQl9ORE5FVTNcIixcInNjcm9sbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfc2Nyb2xsX1lrRWZ1X1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2xpZGVyc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItU2xpZGVycy1TbGlkZXJzLW1vZHVsZV9zbGlkZXJzX0hHMXBqaVwiLFwic2xpZGVyXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcl9Hc0dLa19cIn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFRoZW1lLCB0eXBlIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgdHlwZSB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3RGlzay5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiO1xuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVQcmV2aWV3RGlza1Byb3BzID0gQ29tbW9uUHJvcHMgJiB7XG5cdGE6IEFycmF5TnVtYmVyMztcblx0YjogQXJyYXlOdW1iZXIzO1xuXHRjOiBBcnJheU51bWJlcjM7XG5cdGQ6IEFycmF5TnVtYmVyMztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrKHByb3BzOiBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrUHJvcHMpIHtcblx0Y29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKTtcblx0Y29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cdFx0Li4uc3R5bGVDb21tb24ocHJvcHMpLFxuXHR9O1xuXHRjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHBhaW50ZXIuYSA9IGE7XG5cdFx0cGFpbnRlci5iID0gYjtcblx0XHRwYWludGVyLmMgPSBjO1xuXHRcdHBhaW50ZXIuZCA9IGQ7XG5cdFx0cGFpbnRlci5wYWludCgpO1xuXHR9LCBbYSwgYiwgYywgZF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxjYW52YXNcblx0XHRcdHJlZj17cGFpbnRlci5zZXRDYW52YXN9XG5cdFx0XHRjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlUHJldmlld0Rpc2spfVxuXHRcdFx0c3R5bGU9e3N0eWxlfVxuXHRcdD48L2NhbnZhcz5cblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFBhbGV0dGVQcmV2aWV3RGlza1BhaW50ZXIgfCBudWxsPihudWxsKTtcblx0aWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlcigpO1xuXHRyZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0Rpc2tcIjtcbiIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXIzLFxuXHRUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHR0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB7XG5cdHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBiOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cblx0cHJpdmF0ZSBjb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cblx0cmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG5cdFx0aWYgKHRoaXMuY29udGV4dCkge1xuXHRcdFx0dGhpcy5jb250ZXh0LmRlbGV0ZSgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGNhbnZhcykge1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pO1xuXHRcdFx0Y29udGV4dC5hZGQoXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuXHRcdFx0XHRcdHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdFx0XHRcdHVuaUE6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlCOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdFx0dW5pQzogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUQ6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHZhcnlpbmc6IHtcblx0XHRcdFx0XHRcdFx0dmFyVVY6IFwidmVjMlwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG91dHB1dHM6IHtcblx0XHRcdFx0XHRcdFx0RnJhZ0NvbG9yOiBcInZlYzRcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmdW5jdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0Li4udGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRcdFx0XCJ2ZWMyIHBvbGFyID0gdXYycG9sYXIodmFyVVYpO1wiLFxuXHRcdFx0XHRcdFx0XHRcImZsb2F0IHIgPSBwb2xhci54O1wiLFxuXHRcdFx0XHRcdFx0XHRgZmxvYXQgdCA9IGZyYWN0KDEuMCArIChwb2xhci55ICsgJHtNYXRoLlBJIC8gMn0pICogJHswLjUgLyBNYXRoLlBJfSk7YCxcblx0XHRcdFx0XHRcdFx0XCJmbG9hdCBsaWdodCA9IDEuMCAtIHNtb290aHN0ZXAoMC40LCAwLjQyLCBhYnMociAtIDAuNSkpO1wiLFxuXHRcdFx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRgbGlnaHQgKiAodW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSksYCxcblx0XHRcdFx0XHRcdFx0XHRcIjFcIixcblx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XCIpO1wiLFxuXHRcdFx0XHRcdFx0XHRcImlmICh0IDwgMC4wKSBGcmFnQ29sb3IgPSB2ZWM0KDEpO1wiLFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSwgY29udGV4dCB9KSA9PiB7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaUFcIiwgLi4udGhpcy5hKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pQlwiLCAuLi50aGlzLmIpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlDXCIsIC4uLnRoaXMuYyk7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaURcIiwgLi4udGhpcy5kKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFwidW5pQXNwZWN0UmF0aW9cIiwgY29udGV4dC5hc3BlY3RSYXRpbyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR9XG5cdH07XG5cblx0cGFpbnQoKSB7XG5cdFx0Y29uc3QgeyBjb250ZXh0IH0gPSB0aGlzO1xuXHRcdGlmICghY29udGV4dCkgcmV0dXJuO1xuXG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgVGhlbWUsIHR5cGUgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCB7IHR5cGUgQXJyYXlOdW1iZXIzLCBUZ2RWZWMzLCBUZ2RWZWM0IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCI7XG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcblx0YTogQXJyYXlOdW1iZXIzO1xuXHRiOiBBcnJheU51bWJlcjM7XG5cdGM6IEFycmF5TnVtYmVyMztcblx0ZDogQXJyYXlOdW1iZXIzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwoXG5cdHByb3BzOiBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMsXG4pIHtcblx0Y29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKTtcblx0Y29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cdFx0Li4uc3R5bGVDb21tb24ocHJvcHMpLFxuXHR9O1xuXHRjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHBhaW50ZXIuYSA9IGE7XG5cdFx0cGFpbnRlci5iID0gYjtcblx0XHRwYWludGVyLmMgPSBjO1xuXHRcdHBhaW50ZXIuZCA9IGQ7XG5cdFx0cGFpbnRlci5wYWludCgpO1xuXHR9LCBbYSwgYiwgYywgZF0pO1xuXHRyZXR1cm4gKFxuXHRcdDxjYW52YXNcblx0XHRcdHJlZj17cGFpbnRlci5zZXRDYW52YXN9XG5cdFx0XHRjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlUHJldmlld0hvcml6b250YWwpfVxuXHRcdFx0c3R5bGU9e3N0eWxlfVxuXHRcdD48L2NhbnZhcz5cblx0KTtcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfCBudWxsPihudWxsKTtcblx0aWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlcigpO1xuXHRyZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWxcIjtcbiIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXIzLFxuXHRUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGNsYXNzIFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIge1xuXHRwdWJsaWMgYTogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdO1xuXHRwdWJsaWMgYjogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdO1xuXHRwdWJsaWMgYzogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdO1xuXHRwdWJsaWMgZDogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdO1xuXG5cdHByaXZhdGUgY29udGV4dDogVGdkQ29udGV4dCB8IG51bGwgPSBudWxsO1xuXG5cdHJlYWRvbmx5IHNldENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuXHRcdGlmICh0aGlzLmNvbnRleHQpIHtcblx0XHRcdHRoaXMuY29udGV4dC5kZWxldGUoKTtcblx0XHRcdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdFx0fVxuXHRcdGlmIChjYW52YXMpIHtcblx0XHRcdGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHsgYW50aWFsaWFzOiBmYWxzZSB9KTtcblx0XHRcdGNvbnRleHQuYWRkKFxuXHRcdFx0XHRuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcblx0XHRcdFx0XHRzaGFkZXI6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHRcdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHRcdFx0XHR1bmlBOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdFx0dW5pQjogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUM6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlEOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR2YXJ5aW5nOiB7XG5cdFx0XHRcdFx0XHRcdHZhclVWOiBcInZlYzJcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRvdXRwdXRzOiB7XG5cdFx0XHRcdFx0XHRcdEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRcdFx0XCJmbG9hdCB0ID0gdmFyVVYueDtcIixcblx0XHRcdFx0XHRcdFx0XCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuXHRcdFx0XHRcdFx0XHRbYHVuaUEgKyB1bmlCKmNvcygkezIgKiBNYXRoLlBJfSoodW5pQyAqIHQgKyB1bmlEKSksYCwgXCIxXCJdLFxuXHRcdFx0XHRcdFx0XHRcIik7XCIsXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYik7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaUNcIiwgLi4udGhpcy5jKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0fVxuXHR9O1xuXG5cdHBhaW50KCkge1xuXHRcdGNvbnN0IHsgY29udGV4dCB9ID0gdGhpcztcblx0XHRpZiAoIWNvbnRleHQpIHJldHVybjtcblxuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRUaGVtZSxcblx0dHlwZSBDb21tb25Qcm9wcyxcblx0c3R5bGVDb21tb24sXG5cdFZpZXdUYWJzLFxuXHRWaWV3VGFiLFxuXHRJY29uRml4LFxuXHRJY29uU2hhcmUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBDb2RlVmlld2VyVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IHsgVmlld1NsaWRlcnMgfSBmcm9tIFwiLi9TbGlkZXJzXCI7XG5pbXBvcnQgdHlwZSB7IFBhbGV0dGVEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3RGlza1wiO1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCB9IGZyb20gXCIuLi8uLi9QYWxldHRlUHJldmlld0hvcml6b250YWxcIjtcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXM7XG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlRWRpdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIFBhbGV0dGVEZWZpbml0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVFZGl0b3IocHJvcHM6IFZpZXdQYWxldHRlRWRpdG9yUHJvcHMpIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxQYWxldHRlRGVmaW5pdGlvbj4ocHJvcHMpO1xuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHQuLi5zdHlsZUNvbW1vbihwcm9wcyksXG5cdH07XG5cdGNvbnN0IHsgYSwgYiwgYywgZCB9ID0gdmFsdWU7XG5cdGNvbnN0IHVwZGF0ZSA9ICh2OiBQYXJ0aWFsPFBhbGV0dGVEZWZpbml0aW9uPikgPT4ge1xuXHRcdHNldFZhbHVlKHtcblx0XHRcdC4uLnZhbHVlLFxuXHRcdFx0Li4udixcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVFZGl0b3IpfVxuXHRcdFx0c3R5bGU9e3N0eWxlfVxuXHRcdD5cblx0XHRcdDxhc2lkZT5cblx0XHRcdFx0PFZpZXdQYWxldHRlUHJldmlld0Rpc2tcblx0XHRcdFx0XHRjbGFzc05hbWU9e1N0eWxlcy5kaXNrfVxuXHRcdFx0XHRcdGE9e2F9XG5cdFx0XHRcdFx0Yj17Yn1cblx0XHRcdFx0XHRjPXtjfVxuXHRcdFx0XHRcdGQ9e2R9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbH1cblx0XHRcdFx0XHRhPXthfVxuXHRcdFx0XHRcdGI9e2J9XG5cdFx0XHRcdFx0Yz17Y31cblx0XHRcdFx0XHRkPXtkfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8Vmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFxuXHRcdFx0XHRcdGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWxBfVxuXHRcdFx0XHRcdGE9e2F9XG5cdFx0XHRcdFx0Yj17Yn1cblx0XHRcdFx0XHRjPXtjfVxuXHRcdFx0XHRcdGQ9e2R9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEJ9XG5cdFx0XHRcdFx0YT17YX1cblx0XHRcdFx0XHRiPXtifVxuXHRcdFx0XHRcdGM9e2N9XG5cdFx0XHRcdFx0ZD17ZH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvYXNpZGU+XG5cdFx0XHQ8Vmlld1RhYnMgbWF4SGVpZ2h0PVwiMTAwJVwiPlxuXHRcdFx0XHQ8Vmlld1RhYlxuXHRcdFx0XHRcdGtleT1cImNvbmZpZ1wiXG5cdFx0XHRcdFx0bGFiZWw9e1xuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PEljb25GaXggLz5cblx0XHRcdFx0XHRcdFx0PGRpdj5Db25maWc8L2Rpdj5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e1N0eWxlcy5zY3JvbGx9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Vmlld1NsaWRlcnNcblx0XHRcdFx0XHRcdGxhYmVsPVwiTHVtaW5hbmNlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXthfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBhOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFZpZXdTbGlkZXJzXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNhdHVyYXRpb25cIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2J9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGI6IHYgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Vmlld1NsaWRlcnNcblx0XHRcdFx0XHRcdGxhYmVsPVwiU3ByZWFkXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtjfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBjOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFZpZXdTbGlkZXJzXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNoaWZ0XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtkfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBkOiB2IH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvVmlld1RhYj5cblx0XHRcdFx0PFZpZXdUYWJcblx0XHRcdFx0XHRrZXk9XCJzaGFyZVwiXG5cdFx0XHRcdFx0bGFiZWw9e1xuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PEljb25TaGFyZSAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlNoYXJlPC9kaXY+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Q29kZVZpZXdlclZpZXdcblx0XHRcdFx0XHRcdGxhbmd1YWdlPVwiZ2xzbFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17YHZlYzMgcGFsZXR0ZShmbG9hdCB0KSB7XG4gICAgcmV0dXJuIHZlYzMoJHthcnIoYSl9KVxuICAgICAgICArIHZlYzMoJHthcnIoYil9KSAqIGNvcyhcbiAgICAgICAgICAgICR7MiAqIE1hdGguUEl9ICogKFxuICAgICAgICAgICAgICAgIHQgKiB2ZWMzKCR7YXJyKGMpfSlcbiAgICAgICAgICAgICAgICArIHZlYzMoJHthcnIoZCl9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG59YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxDb2RlVmlld2VyVmlld1xuXHRcdFx0XHRcdFx0bGFuZ3VhZ2U9XCJ0c1wiXG5cdFx0XHRcdFx0XHR2YWx1ZT17YHRnZENvZGVGdW5jdGlvbl9wYWxldHRlKHtcbiAgICBhOiBbJHthcnIoYSl9LCAxXSxcbiAgICBiOiBbJHthcnIoYil9LCAxXSxcbiAgICBjOiBbJHthcnIoYyl9LCAxXSxcbiAgICBkOiBbJHthcnIoZCl9LCAxXSxcbn0pYH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1ZpZXdUYWI+XG5cdFx0XHQ8L1ZpZXdUYWJzPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBhcnIoYTogbnVtYmVyW10pIHtcblx0cmV0dXJuIGAke2EubWFwKCh2KSA9PiB2LnRvRml4ZWQoMykpLmpvaW4oXCIsIFwiKX1gO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IHtcblx0VGhlbWUsXG5cdHR5cGUgQ29tbW9uUHJvcHMsXG5cdHN0eWxlQ29tbW9uLFxuXHRWaWV3U2xpZGVyLFxuXHRJY29uTG9ja09wZW4sXG5cdEljb25Mb2NrQ2xvc2UsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vU2xpZGVycy5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuXG5leHBvcnQgdHlwZSBWaWV3U2xpZGVyc1Byb3BzID0gQ29tbW9uUHJvcHMgJiB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHZhbHVlOiBBcnJheU51bWJlcjM7XG5cdG9uQ2hhbmdlKHZhbHVlOiBBcnJheU51bWJlcjMpOiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdTbGlkZXJzKHByb3BzOiBWaWV3U2xpZGVyc1Byb3BzKSB7XG5cdGNvbnN0IFtsb2NrLCBzZXRMb2NrXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cdFx0Li4uc3R5bGVDb21tb24ocHJvcHMpLFxuXHR9O1xuXHRjb25zdCBbcmVkLCBncmVlbiwgYmx1ZV0gPSBwcm9wcy52YWx1ZTtcblx0Y29uc3Qgc2V0UmVkID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3YsIGdyZWVuLCBibHVlXSk7XG5cdGNvbnN0IHNldEdyZWVuID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3JlZCwgdiwgYmx1ZV0pO1xuXHRjb25zdCBzZXRCbHVlID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3JlZCwgZ3JlZW4sIHZdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMuc2xpZGVycyl9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8ZGl2Pntwcm9wcy5sYWJlbH08L2Rpdj5cblx0XHRcdFx0e2xvY2sgPyAoXG5cdFx0XHRcdFx0PEljb25Mb2NrQ2xvc2Ugb25DbGljaz17KCkgPT4gc2V0TG9jayhmYWxzZSl9IC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PEljb25Mb2NrT3BlbiBvbkNsaWNrPXsoKSA9PiBzZXRMb2NrKHRydWUpfSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0XHR7bG9jayAmJiAoXG5cdFx0XHRcdDxTbGlkZXJcblx0XHRcdFx0XHRsYWJlbD1cIipcIlxuXHRcdFx0XHRcdHZhbHVlPXsocmVkICsgZ3JlZW4gKyBibHVlKSAvIDN9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyh2KSA9PiBwcm9wcy5vbkNoYW5nZShbdiwgdiwgdl0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHRcdHshbG9jayAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PFNsaWRlciBsYWJlbD1cIlJcIiB2YWx1ZT17cmVkfSBvbkNoYW5nZT17c2V0UmVkfSAvPlxuXHRcdFx0XHRcdDxTbGlkZXIgbGFiZWw9XCJHXCIgdmFsdWU9e2dyZWVufSBvbkNoYW5nZT17c2V0R3JlZW59IC8+XG5cdFx0XHRcdFx0PFNsaWRlciBsYWJlbD1cIkJcIiB2YWx1ZT17Ymx1ZX0gb25DaGFuZ2U9e3NldEJsdWV9IC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gU2xpZGVyKHtcblx0bGFiZWwsXG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcbn06IHtcblx0bGFiZWw6IHN0cmluZztcblx0dmFsdWU6IG51bWJlcjtcblx0b25DaGFuZ2UodmFsdWU6IG51bWJlcik6IHZvaWQ7XG59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zbGlkZXJ9PlxuXHRcdFx0PGxhYmVsPntsYWJlbH08L2xhYmVsPlxuXHRcdFx0PFZpZXdTbGlkZXJcblx0XHRcdFx0bWluPXswfVxuXHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdHN0ZXA9ezAuMDF9XG5cdFx0XHRcdHRleHQ9e3ZhbHVlLnRvRml4ZWQoMil9XG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1NsaWRlcnNcIjtcbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVFZGl0b3JcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlUGFyYW1Bc1N0cmluZyB9IGZyb20gXCJAL2FwcC9yb3V0ZXNcIjtcbmltcG9ydCB7IFZpZXdQYWxldHRlRWRpdG9yIH0gZnJvbSBcIi4vX1BhbGV0dGVFZGl0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblx0Y29uc3QgeyBhLCBiLCBkLCBjIH0gPSB1c2VQYXJhbXMoKTtcblxuXHRyZXR1cm4gPFZpZXdQYWxldHRlRWRpdG9yIGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+O1xufVxuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKToge1xuXHRhOiBBcnJheU51bWJlcjM7XG5cdGI6IEFycmF5TnVtYmVyMztcblx0YzogQXJyYXlOdW1iZXIzO1xuXHRkOiBBcnJheU51bWJlcjM7XG59IHtcblx0Y29uc3QgdmFsdWUgPSB1c2VSb3V0ZVBhcmFtQXNTdHJpbmcoXCJ2YWx1ZVwiKTtcblx0cmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRcdHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDI0OlxuXHRcdFx0XHRyZXR1cm4gcGFyc2UyNCh2YWx1ZSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gREVGQVVMVF9QQUxFVFRFO1xuXHRcdH1cblx0fSwgW3ZhbHVlXSkgYXMge1xuXHRcdGE6IEFycmF5TnVtYmVyMztcblx0XHRiOiBBcnJheU51bWJlcjM7XG5cdFx0YzogQXJyYXlOdW1iZXIzO1xuXHRcdGQ6IEFycmF5TnVtYmVyMztcblx0fTtcbn1cblxuZnVuY3Rpb24gcGFyc2UyNCh2YWx1ZTogc3RyaW5nKSB7XG5cdGlmICh2YWx1ZS5sZW5ndGggIT09IDI0KSByZXR1cm4gREVGQVVMVF9QQUxFVFRFO1xuXG5cdHJldHVybiB7XG5cdFx0YTogcGFyc2UodmFsdWUsIDApLFxuXHRcdGI6IHBhcnNlKHZhbHVlLCAxKSxcblx0XHRjOiBwYXJzZSh2YWx1ZSwgMiksXG5cdFx0ZDogcGFyc2UodmFsdWUsIDMpLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZTogc3RyaW5nLCBhcnJJZHg6IG51bWJlcik6IEFycmF5TnVtYmVyMyB7XG5cdGNvbnN0IHN0cmlkZSA9IE1hdGguZmxvb3IodmFsdWUubGVuZ3RoIC8gNCk7XG5cdGNvbnN0IHdvcmQgPSBNYXRoLmZsb29yKHN0cmlkZSAvIDMpO1xuXHRjb25zdCBtYXggPSAxNiAqKiB3b3JkIC0gMTtcblx0cmV0dXJuIFswLCAxLCAyXS5tYXAoKGl0ZW0pID0+IHtcblx0XHRjb25zdCBpbmRleCA9IGFycklkeCAqIHN0cmlkZSArIHdvcmQgKiBpdGVtO1xuXHRcdGNvbnN0IGhleCA9IGAweCR7dmFsdWUuc2xpY2UoaW5kZXgsIGluZGV4ICsgd29yZCl9YDtcblx0XHRyZXR1cm4gcGFyc2VJbnQoaGV4KSAvIG1heDtcblx0fSkgYXMgQXJyYXlOdW1iZXIzO1xufVxuXG5jb25zdCBERUZBVUxUX1BBTEVUVEUgPSB7XG5cdGE6IFswLjUsIDAuNSwgMC41XSxcblx0YjogWzAuNSwgMC41LCAwLjVdLFxuXHRjOiBbMSwgMSwgMV0sXG5cdGQ6IFswLCAwLjMzLCAwLjY3XSxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZSIsInN0eWxlQ29tbW9uIiwiU3R5bGVzIiwiUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciIsIiQiLCJWaWV3UGFsZXR0ZVByZXZpZXdEaXNrIiwicHJvcHMiLCJwYWludGVyIiwidXNlUGFpbnRlciIsInN0eWxlIiwiYSIsImIiLCJkIiwiYyIsInJlZiIsIlRnZENvbnRleHQiLCJUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIiLCJUZ2RTaGFkZXJGcmFnbWVudCIsInRnZENvZGVGdW5jdGlvbl91djJwb2xhciIsImNhbnZhcyIsImNvbnRleHQiLCJNYXRoIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwiX3Byb2dyYW0iLCJfcHJvZ3JhbTEiLCJfcHJvZ3JhbTIiLCJfcHJvZ3JhbTMiLCJwYWludCIsIlBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIiLCJWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIiwiVmlld1RhYnMiLCJWaWV3VGFiIiwiSWNvbkZpeCIsIkljb25TaGFyZSIsIkNvZGVWaWV3ZXJWaWV3IiwiVmlld1NsaWRlcnMiLCJWaWV3UGFsZXR0ZUVkaXRvciIsIl9SZWFjdF91c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1cGRhdGUiLCJ2Iiwib25DaGFuZ2UiLCJhcnIiLCJWaWV3U2xpZGVyIiwiSWNvbkxvY2tPcGVuIiwiSWNvbkxvY2tDbG9zZSIsImxvY2siLCJzZXRMb2NrIiwiX3Byb3BzX3ZhbHVlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwic2V0UmVkIiwic2V0R3JlZW4iLCJzZXRCbHVlIiwib25DbGljayIsIlNsaWRlciIsInBhcmFtIiwibGFiZWwiLCJ1c2VSb3V0ZVBhcmFtQXNTdHJpbmciLCJQYWdlIiwiX3VzZVBhcmFtcyIsInVzZVBhcmFtcyIsInBhcnNlMjQiLCJERUZBVUxUX1BBTEVUVEUiLCJwYXJzZSIsImFycklkeCIsInN0cmlkZSIsIndvcmQiLCJtYXgiLCJpdGVtIiwiaW5kZXgiLCJoZXgiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyxvSEFBb0gsRTs7Ozs7Ozs7QUNEcEk7QUFDQSxzREFBZSxDQUFDLDRJQUE0SSxFOzs7Ozs7OztBQ0Q1SjtBQUNBLHNEQUFlLENBQUMsd2tCQUF3a0IsRTs7Ozs7Ozs7QUNEeGxCO0FBQ0Esc0RBQWUsQ0FBQyw0TEFBNEwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q3SztBQUVzQztBQUdoQjtBQUNDO0FBRXRELElBQU1LLElBQUlKLCtDQUFnQjtBQVNuQixTQUFTSyx1QkFBdUJD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