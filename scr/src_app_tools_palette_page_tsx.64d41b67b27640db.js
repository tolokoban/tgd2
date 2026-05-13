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
62076(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalette: () => (ViewPalette)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _consts__rspack_import_3 = __webpack_require__(52956);
/* import */ var _PaletteButton__rspack_import_4 = __webpack_require__(20007);
/* import */ var _Palette_module_css__rspack_import_5 = __webpack_require__(48368);
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
function ViewPalette(props) {
    var _this = this;
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Palette_module_css__rspack_import_5["default"].palette),
        style: style,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h1", {
                children: "Palette function: f(t) = a + b ⋅ cos( 2π(c⋅t+d) )"
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _Palette_module_css__rspack_import_5["default"].palettes,
                children: _consts__rspack_import_3.PALETTES.map(function(param) {
                    var name = param.name, a = param.a, b = param.b, c = param.c, d = param.d;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PaletteButton__rspack_import_4.ViewPaletteButton, {
                        name: name,
                        a: a,
                        b: b,
                        c: c,
                        d: d
                    }, name, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: "Click a palette to edit"
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/Palette.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}


},
75168(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteButton: () => (ViewPaletteButton)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _PalettePreviewHorizontal__rspack_import_3 = __webpack_require__(64078);
/* import */ var _PaletteButton_module_css__rspack_import_4 = __webpack_require__(68439);
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
function ViewPaletteButton(props) {
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var handleClick = function handleClick() {
        return editPalette(props);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("button", {
        className: $.join(props.className, _PaletteButton_module_css__rspack_import_4["default"].paletteButton),
        type: "button",
        style: style,
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h2", {
                children: props.name
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_PalettePreviewHorizontal__rspack_import_3.ViewPalettePreviewHorizontal, {
                className: _PaletteButton_module_css__rspack_import_4["default"].preview,
                a: props.a,
                b: props.b,
                c: props.c,
                d: props.d
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/_Palette/PaletteButton/PaletteButton.tsx",
        lineNumber: 27,
        columnNumber: 9
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/palette/page.tsx",
        lineNumber: 4,
        columnNumber: 12
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV9wYWdlX3RzeC42NGQ0MWI2N2IyNzY0MGRiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzPzMzMmEiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZS5tb2R1bGUuY3NzPzdlN2YiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZUJ1dHRvbi9QYWxldHRlQnV0dG9uLm1vZHVsZS5jc3M/ZTY5NSIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL3BhaW50ZXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZS50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZUJ1dHRvbi9QYWxldHRlQnV0dG9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9QYWxldHRlQnV0dG9uL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL19QYWxldHRlL2NvbnN0cy50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVfUnIxdExPXCIsXCJwYWxldHRlc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVzX1VRN1R0Q1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUJ1dHRvblwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGVCdXR0b24tUGFsZXR0ZUJ1dHRvbi1tb2R1bGVfcGFsZXR0ZUJ1dHRvbl9SRWh1SzhcIixcInByZXZpZXdcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1fUGFsZXR0ZS1QYWxldHRlQnV0dG9uLVBhbGV0dGVCdXR0b24tbW9kdWxlX3ByZXZpZXdfUTdlYWwwXCJ9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMsIFRnZFZlYzMsIFRnZFZlYzQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgYTogQXJyYXlOdW1iZXIzXG4gICAgYjogQXJyYXlOdW1iZXIzXG4gICAgYzogQXJyYXlOdW1iZXIzXG4gICAgZDogQXJyYXlOdW1iZXIzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsKHByb3BzOiBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMpIHtcbiAgICBjb25zdCBwYWludGVyID0gdXNlUGFpbnRlcigpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgY29uc3QgeyBhLCBiLCBkLCBjIH0gPSBwcm9wc1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHBhaW50ZXIuYSA9IGFcbiAgICAgICAgcGFpbnRlci5iID0gYlxuICAgICAgICBwYWludGVyLmMgPSBjXG4gICAgICAgIHBhaW50ZXIuZCA9IGRcbiAgICAgICAgcGFpbnRlci5wYWludCgpXG4gICAgfSwgW2EsIGIsIGMsIGRdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17cGFpbnRlci5zZXRDYW52YXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlUHJldmlld0hvcml6b250YWwpfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT48L2NhbnZhcz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVzZVBhaW50ZXIoKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfCBudWxsPihudWxsKVxuICAgIGlmICghcmVmLmN1cnJlbnQpIHJlZi5jdXJyZW50ID0gbmV3IFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIoKVxuICAgIHJldHVybiByZWYuY3VycmVudFxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCJcbiIsImltcG9ydCB7IHR5cGUgQXJyYXlOdW1iZXIzLCBUZ2RDb250ZXh0LCBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsIFRnZFNoYWRlckZyYWdtZW50IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIge1xuICAgIHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYjogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGM6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cblxuICAgIHByaXZhdGUgY29udGV4dDogVGdkQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgICByZWFkb25seSBzZXRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZSgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgICAgICAgICBjb250ZXh0LmFkZChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlCOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlDOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlEOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFnQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCB0ID0gdmFyVVYueDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2B1bmlBICsgdW5pQipjb3MoJHsyICogTWF0aC5QSX0qKHVuaUMgKiB0ICsgdW5pRCkpLGAsIFwiMVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlBXCIsIC4uLnRoaXMuYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQlwiLCAuLi50aGlzLmIpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUNcIiwgLi4udGhpcy5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlEXCIsIC4uLnRoaXMuZClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpc1xuICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVyblxuXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCB7IFBBTEVUVEVTIH0gZnJvbSBcIi4vY29uc3RzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlQnV0dG9uIH0gZnJvbSBcIi4vUGFsZXR0ZUJ1dHRvblwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZS5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVQcm9wcyA9IENvbW1vblByb3BzICYge31cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlKHByb3BzOiBWaWV3UGFsZXR0ZVByb3BzKSB7XG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxoMT5QYWxldHRlIGZ1bmN0aW9uOiBmKHQpID0gYSArIGIg4ouFIGNvcyggMs+AKGPii4V0K2QpICk8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wYWxldHRlc30+XG4gICAgICAgICAgICAgICAge1BBTEVUVEVTLm1hcCgoeyBuYW1lLCBhLCBiLCBjLCBkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlQnV0dG9uIGtleT17bmFtZX0gbmFtZT17bmFtZX0gYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+Q2xpY2sgYSBwYWxldHRlIHRvIGVkaXQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZUJ1dHRvbi5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVCdXR0b25Qcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVCdXR0b24ocHJvcHM6IFZpZXdQYWxldHRlQnV0dG9uUHJvcHMpIHtcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IGVkaXRQYWxldHRlKHByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZUJ1dHRvbil9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxoMj57cHJvcHMubmFtZX08L2gyPlxuICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMucHJldmlld30gYT17cHJvcHMuYX0gYj17cHJvcHMuYn0gYz17cHJvcHMuY30gZD17cHJvcHMuZH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBlZGl0UGFsZXR0ZSh7IGEsIGIsIGMsIGQgfTogeyBhOiBBcnJheU51bWJlcjM7IGI6IEFycmF5TnVtYmVyMzsgYzogQXJyYXlOdW1iZXIzOyBkOiBBcnJheU51bWJlcjMgfSkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSBgIy90b29scy9wYWxldHRlLyR7aGV4KGEpfSR7aGV4KGIpfSR7aGV4KGMpfSR7aGV4KGQpfWBcbn1cblxuZnVuY3Rpb24gaGV4KGFycjogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAgIC5tYXAoKHYpID0+XG4gICAgICAgICAgICBNYXRoLnJvdW5kKDB4ZmYgKiB2KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIilcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVCdXR0b25cIlxuIiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGNvbnN0IFBBTEVUVEVTOiBSZWFkb25seTxQYWxldHRlW10+ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJIdWUgV2hlZWxcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAxXSxcbiAgICAgICAgZDogWzAsIDAuMzMsIDAuNjddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJyb3duIHRvIEJsdWVcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAxXSxcbiAgICAgICAgZDogWzAsIDAuMSwgMC4yXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHcmVlbmlzaCBQaW5rXCIsXG4gICAgICAgIGE6IFswLjUsIDAuNSwgMC41XSxcbiAgICAgICAgYjogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBjOiBbMSwgMSwgMV0sXG4gICAgICAgIGQ6IFswLjMsIDAuMiwgMC4yXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJZZWxsb3cgUG93ZXJcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAwLjVdLFxuICAgICAgICBkOiBbMC44LCAwLjksIDAuM10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUHVycGxlIGFuZCBPcmFuZ2VcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAwLjcsIDAuNF0sXG4gICAgICAgIGQ6IFswLCAwLjE1LCAwLjJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkZ1c2hpYSBDb2x1bW5cIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsyLCAxLCAwXSxcbiAgICAgICAgZDogWzAuNSwgMC4yLCAwLjI1XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJGbGVzaCAmIEJvbmVzXCIsXG4gICAgICAgIGE6IFswLjgsIDAuNSwgMC40XSxcbiAgICAgICAgYjogWzAuMiwgMC40LCAwLjJdLFxuICAgICAgICBjOiBbMiwgMSwgMV0sXG4gICAgICAgIGQ6IFswLCAwLjI1LCAwLjI1XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHb2xkICYgQ29wcGVyXCIsXG4gICAgICAgIGE6IFswLjYyLCAwLjYyLCAwLjYyXSxcbiAgICAgICAgYjogWzAuNzQsIDAuNTAyLCAwLjUwMl0sXG4gICAgICAgIGM6IFsxLCAwLjcwMiwgMC4zNV0sXG4gICAgICAgIGQ6IFswLCAwLjE0OSwgMC4zNV0sXG4gICAgfSxcbl1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVcIlxuIiwiaW1wb3J0IHsgVmlld1BhbGV0dGUgfSBmcm9tIFwiLi9fUGFsZXR0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VWaWV3R0xURigpIHtcbiAgICByZXR1cm4gPFZpZXdQYWxldHRlIC8+XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZSIsInN0eWxlQ29tbW9uIiwiU3R5bGVzIiwiUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciIsIiQiLCJWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIiwicHJvcHMiLCJwYWludGVyIiwidXNlUGFpbnRlciIsInN0eWxlIiwiYSIsImIiLCJkIiwiYyIsInJlZiIsIlRnZENvbnRleHQiLCJUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIiLCJUZ2RTaGFkZXJGcmFnbWVudCIsImNhbnZhcyIsImNvbnRleHQiLCJNYXRoIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwiX3Byb2dyYW0iLCJfcHJvZ3JhbTEiLCJfcHJvZ3JhbTIiLCJfcHJvZ3JhbTMiLCJwYWludCIsIlBBTEVUVEVTIiwiVmlld1BhbGV0dGVCdXR0b24iLCJWaWV3UGFsZXR0ZSIsIm5hbWUiLCJoYW5kbGVDbGljayIsImVkaXRQYWxldHRlIiwicGFyYW0iLCJsb2NhdGlvbiIsImhleCIsImFyciIsInYiLCJQYWdlVmlld0dMVEYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsNElBQTRJLEU7Ozs7Ozs7O0FDRDVKO0FBQ0Esc0RBQWUsQ0FBQyxvSkFBb0osRTs7Ozs7Ozs7QUNEcEs7QUFDQSxzREFBZSxDQUFDLHNNQUFzTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHhMO0FBRWlDO0FBR0w7QUFDQztBQUUzRCxJQUFNSyxJQUFJSiwrQ0FBZ0I7QUFTbkIsU0FBU0ssNkJBQTZCQyxLQUF3QztJQUNqRixJQUFNQyxVQUFVQztJQUNoQixJQUFNQyxRQUE2QixtQkFDNUJSLDhDQUFXQSxDQUFDSztJQUVuQixJQUFRSSxJQUFlSixNQUFmSSxHQUFHQyxJQUFZTCxNQUFaSyxHQUFHQyxJQUFTTixNQUFUTSxHQUFHQyxJQUFNUCxNQUFOTztJQUNqQmQsZ0NBQWUsQ0FBQztRQUNaUSxRQUFRLENBQUMsR0FBR0c7UUFDWkgsUUFBUSxDQUFDLEdBQUdJO1FBQ1pKLFFBQVEsQ0FBQyxHQUFHTTtRQUNaTixRQUFRLENBQUMsR0FBR0s7UUFDWkwsUUFBUSxLQUFLO0lBQ2pCLEdBQUc7UUFBQ0c7UUFBR0M7UUFBR0U7UUFBR0Q7S0FBRTtJQUNmLHFCQUNJLGtEQUFDO1FBQ0csS0FBS0wsUUFBUSxTQUFTO1FBQ3RCLFdBQVdILEVBQUUsSUFBSSxDQUFDRSxNQUFNLFNBQVMsRUFBRUoseUZBQStCO1FBQ2xFLE9BQU9POzs7Ozs7QUFFbkI7QUFFQSxTQUFTRDtJQUNMLElBQU1NLE1BQU1mLDZC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