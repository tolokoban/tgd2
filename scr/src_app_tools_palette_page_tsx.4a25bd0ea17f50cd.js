"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_palette_page_tsx"], {
96828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewHorizontal":"src-app-tools-palette-PalettePreviewHorizontal-PalettePreviewHorizontal-module_palettePreviewHorizontal_TA5I7W"});

},
48368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palette":"src-app-tools-palette-_Palette-Palette-module_palette_Rr1tLO","palettes":"src-app-tools-palette-_Palette-Palette-module_palettes_UQ7TtC"});

},
68439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"paletteButton":"src-app-tools-palette-_Palette-PaletteButton-PaletteButton-module_paletteButton_REhuK8","preview":"src-app-tools-palette-_Palette-PaletteButton-PaletteButton-module_preview_Q7eal0"});

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
62076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalette: () => (ViewPalette)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _consts__rspack_import_2 = __webpack_require__(52956);
/* import */ var _PaletteButton__rspack_import_3 = __webpack_require__(20007);
/* import */ var _Palette_module_css__rspack_import_4 = __webpack_require__(48368);
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





var $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewPalette(props) {
    var _this = this;
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_1.styleCommon)(props));
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Palette_module_css__rspack_import_4["default"].palette),
        style: style,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h1", {
                children: "Palette function: f(t) = a + b ⋅ cos( 2π(c⋅t+d) )"
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _Palette_module_css__rspack_import_4["default"].palettes,
                children: _consts__rspack_import_2.PALETTES.map(function(param) {
                    var name = param.name, a = param.a, b = param.b, c = param.c, d = param.d;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PaletteButton__rspack_import_3.ViewPaletteButton, {
                        name: name,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, name, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 21,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: "Click a palette to edit"
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 26,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}


},
75168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteButton: () => (ViewPaletteButton)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _PalettePreviewHorizontal__rspack_import_2 = __webpack_require__(64078);
/* import */ var _PaletteButton_module_css__rspack_import_3 = __webpack_require__(68439);
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




var $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewPaletteButton(props) {
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_1.styleCommon)(props));
    var handleClick = function handleClick() {
        return editPalette(props);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("button", {
        className: $.join(props.className, _PaletteButton_module_css__rspack_import_3["default"].paletteButton),
        type: "button",
        style: style,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h2", {
                children: props.name
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_2.ViewPalettePreviewHorizontal, {
                className: _PaletteButton_module_css__rspack_import_3["default"].preview,
                a: props.a,
                b: props.b,
                c: props.c,
                d: props.d
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
function editPalette(param) {
    var a = param.a, b = param.b, c = param.c, d = param.d;
    location.hash = "#/tools/palette/".concat(hex(a)).concat(hex(b)).concat(hex(c)).concat(hex(d));
}
function hex(arr) {
    return arr.map(function(v) {
        return Math.round(0xff * v).toString(16).toUpperCase().padStart(2, "0");
    }).join("");
}


},
20007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteButton: () => (/* reexport safe */ _PaletteButton__rspack_import_0.ViewPaletteButton)
});
/* import */ var _PaletteButton__rspack_import_0 = __webpack_require__(75168);



},
52956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PALETTES: () => (PALETTES)
});
var PALETTES = [
    {
        name: "Hue Wheel",
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
    },
    {
        name: "Brown to Blue",
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
            0.1,
            0.2
        ]
    },
    {
        name: "Greenish Pink",
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
            0.3,
            0.2,
            0.2
        ]
    },
    {
        name: "Yellow Power",
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
            0.5
        ],
        d: [
            0.8,
            0.9,
            0.3
        ]
    },
    {
        name: "Purple and Orange",
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
            0.7,
            0.4
        ],
        d: [
            0,
            0.15,
            0.2
        ]
    },
    {
        name: "Fushia Column",
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
            2,
            1,
            0
        ],
        d: [
            0.5,
            0.2,
            0.25
        ]
    },
    {
        name: "Flesh & Bones",
        a: [
            0.8,
            0.5,
            0.4
        ],
        b: [
            0.2,
            0.4,
            0.2
        ],
        c: [
            2,
            1,
            1
        ],
        d: [
            0,
            0.25,
            0.25
        ]
    },
    {
        name: "Gold & Copper",
        a: [
            0.62,
            0.62,
            0.62
        ],
        b: [
            0.74,
            0.502,
            0.502
        ],
        c: [
            1,
            0.702,
            0.35
        ],
        d: [
            0,
            0.149,
            0.35
        ]
    }
];


},
56807(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalette: () => (/* reexport safe */ _Palette__rspack_import_0.ViewPalette)
});
/* import */ var _Palette__rspack_import_0 = __webpack_require__(62076);



},
50013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PageViewGLTF)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _Palette__rspack_import_1 = __webpack_require__(56807);


function PageViewGLTF() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Palette__rspack_import_1.ViewPalette, {}, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/page.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV9wYWdlX3RzeC40YTI1YmQwZWExN2Y1MGNkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzPzMzMmEiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZS5tb2R1bGUuY3NzPzdlN2YiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZUJ1dHRvbi9QYWxldHRlQnV0dG9uLm1vZHVsZS5jc3M/ZTY5NSIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL3BhaW50ZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL19QYWxldHRlL1BhbGV0dGUudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9QYWxldHRlQnV0dG9uL1BhbGV0dGVCdXR0b24udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9QYWxldHRlQnV0dG9uL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9jb25zdHMudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL19QYWxldHRlL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVfUnIxdExPXCIsXCJwYWxldHRlc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVzX1VRN1R0Q1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUJ1dHRvblwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGVCdXR0b24tUGFsZXR0ZUJ1dHRvbi1tb2R1bGVfcGFsZXR0ZUJ1dHRvbl9SRWh1SzhcIixcInByZXZpZXdcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1fUGFsZXR0ZS1QYWxldHRlQnV0dG9uLVBhbGV0dGVCdXR0b24tbW9kdWxlX3ByZXZpZXdfUTdlYWwwXCJ9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBUaGVtZSwgdHlwZSBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IHsgdHlwZSBBcnJheU51bWJlcjMsIFRnZFZlYzMsIFRnZFZlYzQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWwubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIjtcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXM7XG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyA9IENvbW1vblByb3BzICYge1xuXHRhOiBBcnJheU51bWJlcjM7XG5cdGI6IEFycmF5TnVtYmVyMztcblx0YzogQXJyYXlOdW1iZXIzO1xuXHRkOiBBcnJheU51bWJlcjM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbChcblx0cHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyxcbikge1xuXHRjb25zdCBwYWludGVyID0gdXNlUGFpbnRlcigpO1xuXHRjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcblx0XHQuLi5zdHlsZUNvbW1vbihwcm9wcyksXG5cdH07XG5cdGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHM7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cGFpbnRlci5hID0gYTtcblx0XHRwYWludGVyLmIgPSBiO1xuXHRcdHBhaW50ZXIuYyA9IGM7XG5cdFx0cGFpbnRlci5kID0gZDtcblx0XHRwYWludGVyLnBhaW50KCk7XG5cdH0sIFthLCBiLCBjLCBkXSk7XG5cdHJldHVybiAoXG5cdFx0PGNhbnZhc1xuXHRcdFx0cmVmPXtwYWludGVyLnNldENhbnZhc31cblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCl9XG5cdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0PjwvY2FudmFzPlxuXHQpO1xufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB8IG51bGw+KG51bGwpO1xuXHRpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyKCk7XG5cdHJldHVybiByZWYuY3VycmVudDtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiO1xuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjMsXG5cdFRnZENvbnRleHQsXG5cdFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB7XG5cdHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBiOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cdHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV07XG5cblx0cHJpdmF0ZSBjb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cblx0cmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG5cdFx0aWYgKHRoaXMuY29udGV4dCkge1xuXHRcdFx0dGhpcy5jb250ZXh0LmRlbGV0ZSgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGNhbnZhcykge1xuXHRcdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pO1xuXHRcdFx0Y29udGV4dC5hZGQoXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuXHRcdFx0XHRcdHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdFx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdFx0XHRcdHVuaUE6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0XHR1bmlCOiBcInZlYzNcIixcblx0XHRcdFx0XHRcdFx0dW5pQzogXCJ2ZWMzXCIsXG5cdFx0XHRcdFx0XHRcdHVuaUQ6IFwidmVjM1wiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHZhcnlpbmc6IHtcblx0XHRcdFx0XHRcdFx0dmFyVVY6IFwidmVjMlwiLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG91dHB1dHM6IHtcblx0XHRcdFx0XHRcdFx0RnJhZ0NvbG9yOiBcInZlYzRcIixcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFx0XHRcImZsb2F0IHQgPSB2YXJVVi54O1wiLFxuXHRcdFx0XHRcdFx0XHRcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG5cdFx0XHRcdFx0XHRcdFtgdW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSxgLCBcIjFcIl0sXG5cdFx0XHRcdFx0XHRcdFwiKTtcIixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlBXCIsIC4uLnRoaXMuYSk7XG5cdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKTtcblx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpO1xuXHRcdFx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlEXCIsIC4uLnRoaXMuZCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHR9XG5cdH07XG5cblx0cGFpbnQoKSB7XG5cdFx0Y29uc3QgeyBjb250ZXh0IH0gPSB0aGlzO1xuXHRcdGlmICghY29udGV4dCkgcmV0dXJuO1xuXG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9XG59XG4iLCJpbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBUaGVtZSwgdHlwZSBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5pbXBvcnQgeyBQQUxFVFRFUyB9IGZyb20gXCIuL2NvbnN0c1wiO1xuaW1wb3J0IHsgVmlld1BhbGV0dGVCdXR0b24gfSBmcm9tIFwiLi9QYWxldHRlQnV0dG9uXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByb3BzID0gQ29tbW9uUHJvcHMgJiB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlKHByb3BzOiBWaWV3UGFsZXR0ZVByb3BzKSB7XG5cdGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXHRcdC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGUpfSBzdHlsZT17c3R5bGV9PlxuXHRcdFx0PGgxPlBhbGV0dGUgZnVuY3Rpb246IGYodCkgPSBhICsgYiDii4UgY29zKCAyz4AoY+KLhXQrZCkgKTwvaDE+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnBhbGV0dGVzfT5cblx0XHRcdFx0e1BBTEVUVEVTLm1hcCgoeyBuYW1lLCBhLCBiLCBjLCBkIH0pID0+IChcblx0XHRcdFx0XHQ8Vmlld1BhbGV0dGVCdXR0b24ga2V5PXtuYW1lfSBuYW1lPXtuYW1lfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHA+Q2xpY2sgYSBwYWxldHRlIHRvIGVkaXQ8L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCJpbXBvcnQgdHlwZSAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBUaGVtZSwgdHlwZSBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IHR5cGUgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IHsgVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCB9IGZyb20gXCIuLi8uLi9QYWxldHRlUHJldmlld0hvcml6b250YWxcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlQnV0dG9uLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXM7XG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlQnV0dG9uUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcblx0bmFtZTogc3RyaW5nO1xuXHRhOiBBcnJheU51bWJlcjM7XG5cdGI6IEFycmF5TnVtYmVyMztcblx0YzogQXJyYXlOdW1iZXIzO1xuXHRkOiBBcnJheU51bWJlcjM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVCdXR0b24ocHJvcHM6IFZpZXdQYWxldHRlQnV0dG9uUHJvcHMpIHtcblx0Y29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cdFx0Li4uc3R5bGVDb21tb24ocHJvcHMpLFxuXHR9O1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IGVkaXRQYWxldHRlKHByb3BzKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVCdXR0b24pfVxuXHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0XHRvbkNsaWNrPXtoYW5kbGVDbGlja31cblx0XHQ+XG5cdFx0XHQ8aDI+e3Byb3BzLm5hbWV9PC9oMj5cblx0XHRcdDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXG5cdFx0XHRcdGNsYXNzTmFtZT17U3R5bGVzLnByZXZpZXd9XG5cdFx0XHRcdGE9e3Byb3BzLmF9XG5cdFx0XHRcdGI9e3Byb3BzLmJ9XG5cdFx0XHRcdGM9e3Byb3BzLmN9XG5cdFx0XHRcdGQ9e3Byb3BzLmR9XG5cdFx0XHQvPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBlZGl0UGFsZXR0ZSh7XG5cdGEsXG5cdGIsXG5cdGMsXG5cdGQsXG59OiB7XG5cdGE6IEFycmF5TnVtYmVyMztcblx0YjogQXJyYXlOdW1iZXIzO1xuXHRjOiBBcnJheU51bWJlcjM7XG5cdGQ6IEFycmF5TnVtYmVyMztcbn0pIHtcblx0bG9jYXRpb24uaGFzaCA9IGAjL3Rvb2xzL3BhbGV0dGUvJHtoZXgoYSl9JHtoZXgoYil9JHtoZXgoYyl9JHtoZXgoZCl9YDtcbn1cblxuZnVuY3Rpb24gaGV4KGFycjogbnVtYmVyW10pIHtcblx0cmV0dXJuIGFyclxuXHRcdC5tYXAoKHYpID0+XG5cdFx0XHRNYXRoLnJvdW5kKDB4ZmYgKiB2KVxuXHRcdFx0XHQudG9TdHJpbmcoMTYpXG5cdFx0XHRcdC50b1VwcGVyQ2FzZSgpXG5cdFx0XHRcdC5wYWRTdGFydCgyLCBcIjBcIiksXG5cdFx0KVxuXHRcdC5qb2luKFwiXCIpO1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZUJ1dHRvblwiO1xuIiwiaW1wb3J0IHR5cGUgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlIHtcblx0bmFtZTogc3RyaW5nO1xuXHRhOiBBcnJheU51bWJlcjM7XG5cdGI6IEFycmF5TnVtYmVyMztcblx0YzogQXJyYXlOdW1iZXIzO1xuXHRkOiBBcnJheU51bWJlcjM7XG59XG5cbmV4cG9ydCBjb25zdCBQQUxFVFRFUzogUmVhZG9ubHk8UGFsZXR0ZVtdPiA9IFtcblx0e1xuXHRcdG5hbWU6IFwiSHVlIFdoZWVsXCIsXG5cdFx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRcdGI6IFswLjUsIDAuNSwgMC41XSxcblx0XHRjOiBbMSwgMSwgMV0sXG5cdFx0ZDogWzAsIDAuMzMsIDAuNjddLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJCcm93biB0byBCbHVlXCIsXG5cdFx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRcdGI6IFswLjUsIDAuNSwgMC41XSxcblx0XHRjOiBbMSwgMSwgMV0sXG5cdFx0ZDogWzAsIDAuMSwgMC4yXSxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR3JlZW5pc2ggUGlua1wiLFxuXHRcdGE6IFswLjUsIDAuNSwgMC41XSxcblx0XHRiOiBbMC41LCAwLjUsIDAuNV0sXG5cdFx0YzogWzEsIDEsIDFdLFxuXHRcdGQ6IFswLjMsIDAuMiwgMC4yXSxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiWWVsbG93IFBvd2VyXCIsXG5cdFx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRcdGI6IFswLjUsIDAuNSwgMC41XSxcblx0XHRjOiBbMSwgMSwgMC41XSxcblx0XHRkOiBbMC44LCAwLjksIDAuM10sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlB1cnBsZSBhbmQgT3JhbmdlXCIsXG5cdFx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRcdGI6IFswLjUsIDAuNSwgMC41XSxcblx0XHRjOiBbMSwgMC43LCAwLjRdLFxuXHRcdGQ6IFswLCAwLjE1LCAwLjJdLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJGdXNoaWEgQ29sdW1uXCIsXG5cdFx0YTogWzAuNSwgMC41LCAwLjVdLFxuXHRcdGI6IFswLjUsIDAuNSwgMC41XSxcblx0XHRjOiBbMiwgMSwgMF0sXG5cdFx0ZDogWzAuNSwgMC4yLCAwLjI1XSxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRmxlc2ggJiBCb25lc1wiLFxuXHRcdGE6IFswLjgsIDAuNSwgMC40XSxcblx0XHRiOiBbMC4yLCAwLjQsIDAuMl0sXG5cdFx0YzogWzIsIDEsIDFdLFxuXHRcdGQ6IFswLCAwLjI1LCAwLjI1XSxcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiR29sZCAmIENvcHBlclwiLFxuXHRcdGE6IFswLjYyLCAwLjYyLCAwLjYyXSxcblx0XHRiOiBbMC43NCwgMC41MDIsIDAuNTAyXSxcblx0XHRjOiBbMSwgMC43MDIsIDAuMzVdLFxuXHRcdGQ6IFswLCAwLjE0OSwgMC4zNV0sXG5cdH0sXG5dO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZVwiO1xuIiwiaW1wb3J0IHsgVmlld1BhbGV0dGUgfSBmcm9tIFwiLi9fUGFsZXR0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlVmlld0dMVEYoKSB7XG5cdHJldHVybiA8Vmlld1BhbGV0dGUgLz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZSIsInN0eWxlQ29tbW9uIiwiU3R5bGVzIiwiUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciIsIiQiLCJWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIiwicHJvcHMiLCJwYWludGVyIiwidXNlUGFpbnRlciIsInN0eWxlIiwiYSIsImIiLCJkIiwiYyIsInJlZiIsIlRnZENvbnRleHQiLCJUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIiLCJUZ2RTaGFkZXJGcmFnbWVudCIsImNhbnZhcyIsImNvbnRleHQiLCJNYXRoIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwiX3Byb2dyYW0iLCJfcHJvZ3JhbTEiLCJfcHJvZ3JhbTIiLCJfcHJvZ3JhbTMiLCJwYWludCIsIlBBTEVUVEVTIiwiVmlld1BhbGV0dGVCdXR0b24iLCJWaWV3UGFsZXR0ZSIsIm5hbWUiLCJoYW5kbGVDbGljayIsImVkaXRQYWxldHRlIiwicGFyYW0iLCJsb2NhdGlvbiIsImhleCIsImFyciIsInYiLCJQYWdlVmlld0dMVEYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsNElBQTRJLEU7Ozs7Ozs7O0FDRDVKO0FBQ0Esc0RBQWUsQ0FBQyxvSkFBb0osRTs7Ozs7Ozs7QUNEcEs7QUFDQSxzREFBZSxDQUFDLHNNQUFzTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHZMO0FBRXNDO0FBR1Y7QUFDQztBQUU1RCxJQUFNSyxJQUFJSiwrQ0FBZ0I7QUFTbkIsU0FBU0ssNkJBQ2ZDLEtBQXdDO0lBRXhDLElBQU1DLFVBQVVDO0lBQ2hCLElBQU1DLFFBQTZCLG1CQUMvQlIsOENBQVdBLENBQUNLO0lBRWhCLElBQVFJLElBQWVKLE1BQWZJLEdBQUdDLElBQVlMLE1BQVpLLEdBQUdDLElBQVNOLE1BQVRNLEdBQUdDLElBQU1QLE1BQU5PO0lBQ2pCZCxnQ0FBZSxDQUFDO1FBQ2ZRLFFBQVEsQ0FBQyxHQUFHRztRQUNaSCxRQUFRLENB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