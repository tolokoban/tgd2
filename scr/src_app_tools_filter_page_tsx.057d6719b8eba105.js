"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_filter_page_tsx"], {
44708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"filter":"src-app-tools-filter-_-Filter-module_filter_A90fXY"});

},
63291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"filterresult":"src-app-tools-filter-_-FilterResult-FilterResult-module_filterresult_kyl55S","error":"src-app-tools-filter-_-FilterResult-FilterResult-module_error_p60Efk"});

},
22339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"vertexshadercodeeditor":"src-app-tools-filter-_-VertexShaderCodeEditor-VertexShaderCodeEditor-module_vertexshadercodeeditor_yotYZL"});

},
23579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


},
14344(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.1d5820706f10ac07.avif";

},
12787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilter: () => (ViewFilter)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _doc_mdx__rspack_import_4 = __webpack_require__(78466);
/* import */ var _Filter_module_css__rspack_import_5 = __webpack_require__(44708);
/* import */ var _FilterResult__rspack_import_6 = __webpack_require__(27895);
/* import */ var _functions__rspack_import_7 = __webpack_require__(90794);
/* import */ var _VertexShaderCodeEditor__rspack_import_8 = __webpack_require__(85515);
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
function ViewFilter() {
    var library = (0,_functions__rspack_import_7.useGlslFunctions)();
    var functions = react__rspack_import_3.useMemo(function() {
        var code = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(library)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                code = _object_spread({}, code, library[key]());
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return Object.values(code).join("\n");
    }, [
        library
    ]);
    var _useLocalStorageState = _sliced_to_array((0,_tolokoban_ui__rspack_import_2.useLocalStorageState)(DEFAULT_FRAGMENT_SHADER, "Filter/FragmentShader"), 2), fragShaderCode = _useLocalStorageState[0], setFragShaderCode = _useLocalStorageState[1];
    console.log(functions);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewStrip, {
        className: _Filter_module_css__rspack_import_5["default"].filter,
        template: "11",
        orientation: "row",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTabs, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: "Fragment Shader",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                            fullsize: true,
                            overflow: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_VertexShaderCodeEditor__rspack_import_8.ViewVertexShaderCodeEditor, {
                                code: fragShaderCode,
                                onChange: setFragShaderCode
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 56,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 55,
                            columnNumber: 6
                        }, this)
                    }, "shader", false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 54,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: "Extra functions",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                            fullsize: true,
                            overflow: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_VertexShaderCodeEditor__rspack_import_8.ViewVertexShaderCodeEditor, {
                                code: functions,
                                disabled: true
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    }, "functions", false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 62,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: "Documentation",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                            fullsize: true,
                            overflow: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_doc_mdx__rspack_import_4["default"], {}, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 69,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 68,
                            columnNumber: 6
                        }, this)
                    }, "doc", false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_FilterResult__rspack_import_6.ViewFilterResult, {
                fragmentShader: fragShaderCode,
                functions: functions
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                lineNumber: 73,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
}
var DEFAULT_FRAGMENT_SHADER = (0,_tolokoban_tgd__rspack_import_1.tgdCodeStringify)([
    "vec2 polar = uv2polar(varUV);",
    "polar.y += polar.x * cos(uniTime);",
    "vec2 uv = polar2uv(polar);",
    "vec4 color = texture(uniTexture, uv);",
    "FragColor = vec4(",
    [
        "shiftHue(color.rgb, polar.y + uniTime),",
        "1.0"
    ],
    ");"
]);
var DEFAULT_FUNCTIONS = (0,_tolokoban_tgd__rspack_import_1.tgdCodeStringify)([
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeConstants)("PI", "TAU", "E"),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_random)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_shiftHue)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_polar2uv)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_polar2xy)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_uv2polar)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_xy2polar)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_uv2xy)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_xy2uv)(),
    (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_luminance)(),
    "\nfloat dot2( in vec2 v ) { return dot(v,v); }\n"
]);


},
67876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilterResult: () => (ViewFilterResult)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_3 = __webpack_require__(47578);
/* import */ var _manager__rspack_import_4 = __webpack_require__(1544);
/* import */ var _FilterResult_module_css__rspack_import_5 = __webpack_require__(63291);
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
function ViewFilterResult(props) {
    var _this = this;
    var ref = react__rspack_import_1.useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_1.useState(null), 2), error = _React_useState[0], setError = _React_useState[1];
    var refManager = react__rspack_import_1.useRef(null);
    var _React_useState1 = _sliced_to_array(react__rspack_import_1.useState(0.5), 2), uniEffectStrength = _React_useState1[0], setUniEffectStrength = _React_useState1[1];
    var handleMount = function handleMount(canvas) {
        if (!canvas) return;
        if (!refManager.current) {
            refManager.current = new _manager__rspack_import_4.FilterManager(canvas, setError);
        }
        refManager.current.setCode(props.fragmentShader, props.functions);
    };
    var handleToggleFullscreen = function handleToggleFullscreen() {
        var div = ref.current;
        if (!div) return;
        (0,_tolokoban_tgd__rspack_import_3.tgdFullscreenToggle)(div);
    };
    react__rspack_import_1.useEffect(function() {
        var manager = refManager.current;
        if (!manager) return;
        manager.setCode(props.fragmentShader, props.functions);
    }, [
        props.fragmentShader,
        props.functions
    ]);
    react__rspack_import_1.useEffect(function() {
        var manager = refManager.current;
        if (!manager) return;
        manager.uniEffectStrength = uniEffectStrength;
    }, [
        uniEffectStrength
    ]);
    react__rspack_import_1.useEffect(function() {
        return function() {
            var _refManager_current;
            (_refManager_current = refManager.current) === null || _refManager_current === void 0 ? void 0 : _refManager_current.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", _object_spread_props(_object_spread({
        ref: ref,
        className: $.join(props.className, _FilterResult_module_css__rspack_import_5["default"].filterresult)
    }, props), {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                color: "primary-5",
                height: "2em",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "M",
                fullwidth: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "Filter output"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 76,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                        onClick: handleToggleFullscreen
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 77,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 67,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
                ref: handleMount
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 79,
                columnNumber: 4
            }, this),
            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("pre", {
                children: error.split("\n").map(function(line, index) {
                    if (line.startsWith("#####")) return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _FilterResult_module_css__rspack_import_5["default"].error,
                        children: [
                            line,
                            "\n"
                        ]
                    }, index, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, _this);
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: line
                    }, index, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 90,
                        columnNumber: 14
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 81,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                min: 0,
                max: 1,
                step: 0.01,
                value: uniEffectStrength,
                onChange: setUniEffectStrength
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 94,
                columnNumber: 4
            }, this)
        ]
    }), void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this);
}


},
27895(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilterResult: () => (/* reexport safe */ _FilterResult__rspack_import_0.ViewFilterResult)
});
/* import */ var _FilterResult__rspack_import_0 = __webpack_require__(67876);



},
1544(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FilterManager: () => (FilterManager)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _background_avif__rspack_import_1 = __webpack_require__(14344);
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
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}


var FilterManager = /*#__PURE__*/ function() {
    "use strict";
    function FilterManager(canvas, onError) {
        _class_call_check(this, FilterManager);
        _define_property(this, "onError", void 0);
        _define_property(this, "destroy", void 0);
        _define_property(this, "uniEffectStrength", void 0);
        _define_property(this, "context", void 0);
        _define_property(this, "texture", void 0);
        _define_property(this, "filter", void 0);
        this.onError = onError;
        this.uniEffectStrength = 0;
        this.filter = null;
        var context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas);
        this.context = context;
        var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(context).loadBitmap(_background_avif__rspack_import_1).setParams({
            wrapR: "MIRRORED_REPEAT",
            wrapS: "MIRRORED_REPEAT",
            wrapT: "MIRRORED_REPEAT"
        });
        this.texture = texture;
        this.destroy = function() {
            texture.delete();
            context.delete();
        };
    }
    _create_class(FilterManager, [
        {
            key: "setCode",
            value: function setCode(code) {
                var _this = this;
                var functions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
                try {
                    var _this1 = this, context = _this1.context, texture = _this1.texture;
                    var filter = new _tolokoban_tgd__rspack_import_0.TgdPainterFilter(context, {
                        texture: texture,
                        filters: [
                            new _tolokoban_tgd__rspack_import_0.TgdFilter({
                                fragmentShaderCode: code,
                                extraFunctions: functions,
                                uniforms: {
                                    uniTime: "float",
                                    uniEffectStrength: "float",
                                    uniAspectRatio: "float",
                                    uniAspectRatioInverse: "float",
                                    uniModelViewMatrix: "mat4",
                                    uniProjectionMatrix: "mat4"
                                },
                                setUniforms: function setUniforms(param) {
                                    var program = param.program, time = param.time;
                                    program.uniform1f("uniTime", time);
                                    program.uniform1f("uniEffectStrength", _this.uniEffectStrength);
                                    program.uniform1f("uniAspectRatio", context.width / context.height);
                                    program.uniform1f("uniAspectRatioInverse", context.height / context.width);
                                    program.uniformMatrix4fv("uniModelViewMatrix", context.camera.matrixModelView);
                                    program.uniformMatrix4fv("uniProjectionMatrix", context.camera.matrixProjection);
                                }
                            })
                        ]
                    });
                    if (this.filter) {
                        this.context.remove(this.filter);
                    }
                    this.filter = filter;
                    context.add(filter);
                    context.play();
                    this.onError(null);
                } catch (ex) {
                    this.onError(_instanceof(ex, Error) ? ex.message : JSON.stringify(ex));
                }
            }
        }
    ]);
    return FilterManager;
}();


},
8444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewVertexShaderCodeEditor: () => (ViewVertexShaderCodeEditor)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_code_editor__rspack_import_3 = __webpack_require__(90597);
/* import */ var _VertexShaderCodeEditor_module_css__rspack_import_4 = __webpack_require__(22339);





var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewVertexShaderCodeEditor(props) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_code_editor__rspack_import_3["default"], {
        className: $.join(props.className, _VertexShaderCodeEditor_module_css__rspack_import_4["default"].vertexshadercodeeditor),
        language: "glsl",
        value: props.code,
        onChange: function onChange(code) {
            var _props_onChange;
            return (_props_onChange = props.onChange) === null || _props_onChange === void 0 ? void 0 : _props_onChange.call(props, code);
        },
        disabled: props.disabled
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/VertexShaderCodeEditor/VertexShaderCodeEditor.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, this);
}


},
85515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewVertexShaderCodeEditor: () => (/* reexport safe */ _VertexShaderCodeEditor__rspack_import_0.ViewVertexShaderCodeEditor)
});
/* import */ var _VertexShaderCodeEditor__rspack_import_0 = __webpack_require__(8444);



},
90794(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGlslFunctions: () => (useGlslFunctions)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
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

function useGlslFunctions() {
    var _React_useState = _sliced_to_array(react__rspack_import_0_default().useState({}), 2), functions = _React_useState[0], setFunctions = _React_useState[1];
    react__rspack_import_0_default().useEffect(function() {
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 47578)).then(function(module) {
            var result = {};
            var prefix = "tgdCodeFunction_";
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.keys(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    if (key.startsWith(prefix)) {
                        result[key.slice(prefix.length)] = module[key];
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            setFunctions(result);
        });
    }, []);
    return functions;
}


},
95707(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewFilter: () => (/* reexport safe */ _Filter__rspack_import_0.ViewFilter)
});
/* import */ var _Filter__rspack_import_0 = __webpack_require__(12787);



},
98678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PageViewGLTF)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var ___rspack_import_1 = __webpack_require__(95707);


function PageViewGLTF() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1.ViewFilter, {}, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/page.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}


},
36972(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeEditorView)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var react_simple_code_editor__rspack_import_2 = __webpack_require__(26069);
/* import */ var react_simple_code_editor__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__rspack_import_2);
/* import */ var prismjs__rspack_import_3 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_3);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(38743);
/* import */ var _code_editor_view_css__rspack_import_5 = __webpack_require__(23579);






var VOID_FUNC = function VOID_FUNC() {};
function CodeEditorView(props) {
    var _props_onChange;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: getClassNames(props),
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)((react_simple_code_editor__rspack_import_2_default()), {
            disabled: props.disabled,
            value: props.value,
            onValueChange: (_props_onChange = props.onChange) !== null && _props_onChange !== void 0 ? _props_onChange : VOID_FUNC,
            highlight: function highlight(code) {
                return prismjs__rspack_import_3_default().highlight(code, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            }
        }, void 0, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/code-editor/code-editor-view.tsx",
            lineNumber: 22,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/code-editor/code-editor-view.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this);
}
function getClassNames(props) {
    var classNames = [
        "custom",
        "view-CodeEditorView"
    ];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}


},
19426(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
function getGrammarForLanguage(language) {
    return GLSL;
}
var TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void"
];
var KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    // Reserved for future.
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile"
];
var GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID"
];
var FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16"
];
var GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /"(^|[^\\:])\/\/.*"/g,
            lookbehind: true,
            greedy: true
        }
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS)
};
function makeIdentifiersRX(words) {
    return new RegExp("(?:[^a-zA-Z0-9_])(".concat(words.join("|"), ")(?=[^a-zA-Z0-9_])"));
}


},
38743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (/* reexport safe */ _grammar__rspack_import_0.getGrammarForLanguage)
});
/* import */ var _grammar__rspack_import_0 = __webpack_require__(19426);



},
90597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _code_editor_view__rspack_import_0["default"])
});
/* import */ var _code_editor_view__rspack_import_0 = __webpack_require__(36972);



},
78466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_1 = __webpack_require__(28453);
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
        a: "a",
        code: "code",
        h2: "h2",
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Available uniforms"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniTime"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 3,
                                columnNumber: 3
                            }, this),
                            ": current time in seconds."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 3,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniEffectStrength"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 4,
                                columnNumber: 3
                            }, this),
                            ": float between 0.0 and 1.0, controlled by the slider."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatio"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 5,
                                columnNumber: 3
                            }, this),
                            ": Aspect ratio (width / height)."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatioInverse"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 6,
                                columnNumber: 3
                            }, this),
                            ": Inverse aspect ratio (height / width)."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Useful resources for fragment shaders:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "GLSL ES 3.1: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://docs.gl/sl4/trunc",
                                children: "https://docs.gl/sl4/trunc"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 10,
                                columnNumber: 16
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Shadertoy: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://www.shadertoy.com/",
                                children: "https://www.shadertoy.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 11,
                                columnNumber: 14
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Inigo Quilez website: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/",
                                children: "https://iquilezles.org/articles/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "2D signed distance functions:\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/distfunctions2d/",
                                children: "https://iquilezles.org/articles/distfunctions2d/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Color palette article: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://iquilezles.org/articles/palettes/",
                                children: "https://iquilezles.org/articles/palettes/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 15,
                                columnNumber: 26
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Color palette webapp: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "http://dev.thi.ng/gradients/",
                                children: "http://dev.thi.ng/gradients/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Graphtoy: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://graphtoy.com/",
                                children: "https://graphtoy.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The Book of Shaders: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://thebookofshaders.com/",
                                children: "https://thebookofshaders.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 18,
                                columnNumber: 24
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Shadertoy Unofficial: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://shadertoyunofficial.wordpress.com/",
                                children: "https://shadertoyunofficial.wordpress.com/"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfZmlsdGVyX3BhZ2VfdHN4LjA1N2Q2NzE5YjhlYmExMDUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyLm1vZHVsZS5jc3M/MjM2YSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L0ZpbHRlclJlc3VsdC5tb2R1bGUuY3NzPzFlZTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IvVmVydGV4U2hhZGVyQ29kZUVkaXRvci5tb2R1bGUuY3NzPzRhNTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci12aWV3LmNzcz82NGVhIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL0ZpbHRlclJlc3VsdC9GaWx0ZXJSZXN1bHQudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L21hbmFnZXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vVmVydGV4U2hhZGVyQ29kZUVkaXRvci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL2Z1bmN0aW9ucy50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL3BhZ2UudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLXZpZXcudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2dyYW1tYXIvZ3JhbW1hci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9ncmFtbWFyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2NvZGUtZWRpdG9yL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vZG9jLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZpbHRlclwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXItbW9kdWxlX2ZpbHRlcl9BOTBmWFlcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZpbHRlcnJlc3VsdFwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXJSZXN1bHQtRmlsdGVyUmVzdWx0LW1vZHVsZV9maWx0ZXJyZXN1bHRfa3lsNTVTXCIsXCJlcnJvclwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXJSZXN1bHQtRmlsdGVyUmVzdWx0LW1vZHVsZV9lcnJvcl9wNjBFZmtcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInZlcnRleHNoYWRlcmNvZGVlZGl0b3JcIjpcInNyYy1hcHAtdG9vbHMtZmlsdGVyLV8tVmVydGV4U2hhZGVyQ29kZUVkaXRvci1WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yLW1vZHVsZV92ZXJ0ZXhzaGFkZXJjb2RlZWRpdG9yX3lvdFlaTFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29kZUZ1bmN0aW9ucyxcblx0dGdkQ29kZUNvbnN0YW50cyxcblx0dGdkQ29kZUZ1bmN0aW9uX2x1bWluYW5jZSxcblx0dGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnV2LFxuXHR0Z2RDb2RlRnVuY3Rpb25fcG9sYXIyeHksXG5cdHRnZENvZGVGdW5jdGlvbl9yYW5kb20sXG5cdHRnZENvZGVGdW5jdGlvbl9zaGlmdEh1ZSxcblx0dGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyLFxuXHR0Z2RDb2RlRnVuY3Rpb25fdXYyeHksXG5cdHRnZENvZGVGdW5jdGlvbl94eTJwb2xhcixcblx0dGdkQ29kZUZ1bmN0aW9uX3h5MnV2LFxuXHR0Z2RDb2RlU3RyaW5naWZ5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IHtcblx0VGhlbWUsXG5cdHVzZUxvY2FsU3RvcmFnZVN0YXRlLFxuXHRWaWV3UGFuZWwsXG5cdFZpZXdTdHJpcCxcblx0Vmlld1RhYixcblx0Vmlld1RhYnMsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEb2MgZnJvbSBcIi4vZG9jLm1keFwiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9GaWx0ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgVmlld0ZpbHRlclJlc3VsdCB9IGZyb20gXCIuL0ZpbHRlclJlc3VsdFwiO1xuaW1wb3J0IHsgdXNlR2xzbEZ1bmN0aW9ucyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IgfSBmcm9tIFwiLi9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yXCI7XG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld0ZpbHRlcigpIHtcblx0Y29uc3QgbGlicmFyeSA9IHVzZUdsc2xGdW5jdGlvbnMoKTtcblx0Y29uc3QgZnVuY3Rpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0bGV0IGNvZGU6IFRnZENvZGVGdW5jdGlvbnMgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhsaWJyYXJ5KSkge1xuXHRcdFx0Y29kZSA9IHtcblx0XHRcdFx0Li4uY29kZSxcblx0XHRcdFx0Li4ubGlicmFyeVtrZXldKCksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4gT2JqZWN0LnZhbHVlcyhjb2RlKS5qb2luKFwiXFxuXCIpO1xuXHR9LCBbbGlicmFyeV0pO1xuXHRjb25zdCBbZnJhZ1NoYWRlckNvZGUsIHNldEZyYWdTaGFkZXJDb2RlXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKFxuXHRcdERFRkFVTFRfRlJBR01FTlRfU0hBREVSLFxuXHRcdFwiRmlsdGVyL0ZyYWdtZW50U2hhZGVyXCIsXG5cdCk7XG5cdGNvbnNvbGUubG9nKGZ1bmN0aW9ucyk7XG5cblx0cmV0dXJuIChcblx0XHQ8Vmlld1N0cmlwIGNsYXNzTmFtZT17U3R5bGVzLmZpbHRlcn0gdGVtcGxhdGU9XCIxMVwiIG9yaWVudGF0aW9uPVwicm93XCI+XG5cdFx0XHQ8Vmlld1RhYnM+XG5cdFx0XHRcdDxWaWV3VGFiIGxhYmVsPVwiRnJhZ21lbnQgU2hhZGVyXCIga2V5PVwic2hhZGVyXCI+XG5cdFx0XHRcdFx0PFZpZXdQYW5lbCBmdWxsc2l6ZSBvdmVyZmxvdz1cImF1dG9cIj5cblx0XHRcdFx0XHRcdDxWaWV3VmVydGV4U2hhZGVyQ29kZUVkaXRvclxuXHRcdFx0XHRcdFx0XHRjb2RlPXtmcmFnU2hhZGVyQ29kZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldEZyYWdTaGFkZXJDb2RlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PC9WaWV3VGFiPlxuXHRcdFx0XHQ8Vmlld1RhYiBsYWJlbD1cIkV4dHJhIGZ1bmN0aW9uc1wiIGtleT1cImZ1bmN0aW9uc1wiPlxuXHRcdFx0XHRcdDxWaWV3UGFuZWwgZnVsbHNpemUgb3ZlcmZsb3c9XCJhdXRvXCI+XG5cdFx0XHRcdFx0XHQ8Vmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IgY29kZT17ZnVuY3Rpb25zfSBkaXNhYmxlZD17dHJ1ZX0gLz5cblx0XHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PC9WaWV3VGFiPlxuXHRcdFx0XHQ8Vmlld1RhYiBsYWJlbD1cIkRvY3VtZW50YXRpb25cIiBrZXk9XCJkb2NcIj5cblx0XHRcdFx0XHQ8Vmlld1BhbmVsIGZ1bGxzaXplIG92ZXJmbG93PVwiYXV0b1wiPlxuXHRcdFx0XHRcdFx0PERvYyAvPlxuXHRcdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0XHQ8L1ZpZXdUYWI+XG5cdFx0XHQ8L1ZpZXdUYWJzPlxuXHRcdFx0PFZpZXdGaWx0ZXJSZXN1bHQgZnJhZ21lbnRTaGFkZXI9e2ZyYWdTaGFkZXJDb2RlfSBmdW5jdGlvbnM9e2Z1bmN0aW9uc30gLz5cblx0XHQ8L1ZpZXdTdHJpcD5cblx0KTtcbn1cblxuY29uc3QgREVGQVVMVF9GUkFHTUVOVF9TSEFERVIgPSB0Z2RDb2RlU3RyaW5naWZ5KFtcblx0YHZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7YCxcblx0YHBvbGFyLnkgKz0gcG9sYXIueCAqIGNvcyh1bmlUaW1lKTtgLFxuXHRgdmVjMiB1diA9IHBvbGFyMnV2KHBvbGFyKTtgLFxuXHRgdmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO2AsXG5cdGBGcmFnQ29sb3IgPSB2ZWM0KGAsXG5cdFtgc2hpZnRIdWUoY29sb3IucmdiLCBwb2xhci55ICsgdW5pVGltZSksYCwgYDEuMGBdLFxuXHRgKTtgLFxuXSk7XG5cbmNvbnN0IERFRkFVTFRfRlVOQ1RJT05TID0gdGdkQ29kZVN0cmluZ2lmeShbXG5cdHRnZENvZGVDb25zdGFudHMoXCJQSVwiLCBcIlRBVVwiLCBcIkVcIiksXG5cdHRnZENvZGVGdW5jdGlvbl9yYW5kb20oKSxcblx0dGdkQ29kZUZ1bmN0aW9uX3NoaWZ0SHVlKCksXG5cdHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1digpLFxuXHR0Z2RDb2RlRnVuY3Rpb25fcG9sYXIyeHkoKSxcblx0dGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG5cdHRnZENvZGVGdW5jdGlvbl94eTJwb2xhcigpLFxuXHR0Z2RDb2RlRnVuY3Rpb25fdXYyeHkoKSxcblx0dGdkQ29kZUZ1bmN0aW9uX3h5MnV2KCksXG5cdHRnZENvZGVGdW5jdGlvbl9sdW1pbmFuY2UoKSxcblx0YFxuZmxvYXQgZG90MiggaW4gdmVjMiB2ICkgeyByZXR1cm4gZG90KHYsdik7IH1cbmAsXG5dKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuXHRUaGVtZSxcblx0dHlwZSBDb21tb25Qcm9wcyxcblx0Vmlld1BhbmVsLFxuXHRWaWV3U2xpZGVyLFxuXHRJY29uRnVsbHNjcmVlbixcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCB7IHRnZEZ1bGxzY3JlZW5Ub2dnbGUgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IHsgRmlsdGVyTWFuYWdlciB9IGZyb20gXCIuL21hbmFnZXJcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9GaWx0ZXJSZXN1bHQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcblxuZXhwb3J0IHR5cGUgVmlld0ZpbHRlclJlc3VsdFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0ZnJhZ21lbnRTaGFkZXI6IHN0cmluZztcblx0ZnVuY3Rpb25zOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld0ZpbHRlclJlc3VsdChwcm9wczogVmlld0ZpbHRlclJlc3VsdFByb3BzKSB7XG5cdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXHRjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXHRjb25zdCByZWZNYW5hZ2VyID0gUmVhY3QudXNlUmVmPEZpbHRlck1hbmFnZXIgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW3VuaUVmZmVjdFN0cmVuZ3RoLCBzZXRVbmlFZmZlY3RTdHJlbmd0aF0gPSBSZWFjdC51c2VTdGF0ZSgwLjUpO1xuXHRjb25zdCBoYW5kbGVNb3VudCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuXHRcdGlmICghY2FudmFzKSByZXR1cm47XG5cblx0XHRpZiAoIXJlZk1hbmFnZXIuY3VycmVudCkge1xuXHRcdFx0cmVmTWFuYWdlci5jdXJyZW50ID0gbmV3IEZpbHRlck1hbmFnZXIoY2FudmFzLCBzZXRFcnJvcik7XG5cdFx0fVxuXHRcdHJlZk1hbmFnZXIuY3VycmVudC5zZXRDb2RlKHByb3BzLmZyYWdtZW50U2hhZGVyLCBwcm9wcy5mdW5jdGlvbnMpO1xuXHR9O1xuXHRjb25zdCBoYW5kbGVUb2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRpdiA9IHJlZi5jdXJyZW50O1xuXHRcdGlmICghZGl2KSByZXR1cm47XG5cblx0XHR0Z2RGdWxsc2NyZWVuVG9nZ2xlKGRpdik7XG5cdH07XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbWFuYWdlciA9IHJlZk1hbmFnZXIuY3VycmVudDtcblx0XHRpZiAoIW1hbmFnZXIpIHJldHVybjtcblxuXHRcdG1hbmFnZXIuc2V0Q29kZShwcm9wcy5mcmFnbWVudFNoYWRlciwgcHJvcHMuZnVuY3Rpb25zKTtcblx0fSwgW3Byb3BzLmZyYWdtZW50U2hhZGVyLCBwcm9wcy5mdW5jdGlvbnNdKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBtYW5hZ2VyID0gcmVmTWFuYWdlci5jdXJyZW50O1xuXHRcdGlmICghbWFuYWdlcikgcmV0dXJuO1xuXG5cdFx0bWFuYWdlci51bmlFZmZlY3RTdHJlbmd0aCA9IHVuaUVmZmVjdFN0cmVuZ3RoO1xuXHR9LCBbdW5pRWZmZWN0U3RyZW5ndGhdKTtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmVmTWFuYWdlci5jdXJyZW50Py5kZXN0cm95KCk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0cmVmPXtyZWZ9XG5cdFx0XHRjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5maWx0ZXJyZXN1bHQpfVxuXHRcdFx0ey4uLnByb3BzfVxuXHRcdD5cblx0XHRcdDxWaWV3UGFuZWxcblx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5LTVcIlxuXHRcdFx0XHRoZWlnaHQ9XCIyZW1cIlxuXHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRwYWRkaW5nPVwiTVwiXG5cdFx0XHRcdGZ1bGx3aWR0aFxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2PkZpbHRlciBvdXRwdXQ8L2Rpdj5cblx0XHRcdFx0PEljb25GdWxsc2NyZWVuIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUZ1bGxzY3JlZW59IC8+XG5cdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdDxjYW52YXMgcmVmPXtoYW5kbGVNb3VudH0+PC9jYW52YXM+XG5cdFx0XHR7ZXJyb3IgJiYgKFxuXHRcdFx0XHQ8cHJlPlxuXHRcdFx0XHRcdHtlcnJvci5zcGxpdChcIlxcblwiKS5tYXAoKGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobGluZS5zdGFydHNXaXRoKFwiIyMjIyNcIikpXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5lcnJvcn0ga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7bGluZX1cblx0XHRcdFx0XHRcdFx0XHRcdHtcIlxcblwifVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxkaXYga2V5PXtpbmRleH0+e2xpbmV9PC9kaXY+O1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L3ByZT5cblx0XHRcdCl9XG5cdFx0XHQ8Vmlld1NsaWRlclxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MX1cblx0XHRcdFx0c3RlcD17MC4wMX1cblx0XHRcdFx0dmFsdWU9e3VuaUVmZmVjdFN0cmVuZ3RofVxuXHRcdFx0XHRvbkNoYW5nZT17c2V0VW5pRWZmZWN0U3RyZW5ndGh9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRmlsdGVyUmVzdWx0XCI7XG4iLCJpbXBvcnQge1xuXHRUZ2RDb250ZXh0LFxuXHRUZ2RGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFRleHR1cmUyRCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQuYXZpZlwiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyTWFuYWdlciB7XG5cdHB1YmxpYyByZWFkb25seSBkZXN0cm95OiAoKSA9PiB2b2lkO1xuXHRwdWJsaWMgdW5pRWZmZWN0U3RyZW5ndGggPSAwO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dDtcblx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQ7XG5cdHByaXZhdGUgZmlsdGVyOiBUZ2RQYWludGVyRmlsdGVyIHwgbnVsbCA9IG51bGw7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0Y2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcblx0XHRwcml2YXRlIHJlYWRvbmx5IG9uRXJyb3I6IChlcnJvcjogc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCxcblx0KSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxuXHRcdFx0LmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTClcblx0XHRcdC5zZXRQYXJhbXMoe1xuXHRcdFx0XHR3cmFwUjogXCJNSVJST1JFRF9SRVBFQVRcIixcblx0XHRcdFx0d3JhcFM6IFwiTUlSUk9SRURfUkVQRUFUXCIsXG5cdFx0XHRcdHdyYXBUOiBcIk1JUlJPUkVEX1JFUEVBVFwiLFxuXHRcdFx0fSk7XG5cdFx0dGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcblx0XHR0aGlzLmRlc3Ryb3kgPSAoKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLmRlbGV0ZSgpO1xuXHRcdFx0Y29udGV4dC5kZWxldGUoKTtcblx0XHR9O1xuXHR9XG5cblx0c2V0Q29kZShjb2RlOiBzdHJpbmcsIGZ1bmN0aW9ucyA9IFwiXCIpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyBjb250ZXh0LCB0ZXh0dXJlIH0gPSB0aGlzO1xuXHRcdFx0Y29uc3QgZmlsdGVyID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdFx0XHR0ZXh0dXJlLFxuXHRcdFx0XHRmaWx0ZXJzOiBbXG5cdFx0XHRcdFx0bmV3IFRnZEZpbHRlcih7XG5cdFx0XHRcdFx0XHRmcmFnbWVudFNoYWRlckNvZGU6IGNvZGUsXG5cdFx0XHRcdFx0XHRleHRyYUZ1bmN0aW9uczogZnVuY3Rpb25zLFxuXHRcdFx0XHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0XHRcdFx0dW5pVGltZTogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdFx0XHR1bmlFZmZlY3RTdHJlbmd0aDogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdFx0XHR1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdFx0XHR1bmlBc3BlY3RSYXRpb0ludmVyc2U6IFwiZmxvYXRcIixcblx0XHRcdFx0XHRcdFx0dW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcblx0XHRcdFx0XHRcdFx0dW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0sIHRpbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSk7XG5cdFx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFwidW5pRWZmZWN0U3RyZW5ndGhcIiwgdGhpcy51bmlFZmZlY3RTdHJlbmd0aCk7XG5cdFx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFxuXHRcdFx0XHRcdFx0XHRcdFwidW5pQXNwZWN0UmF0aW9cIixcblx0XHRcdFx0XHRcdFx0XHRjb250ZXh0LndpZHRoIC8gY29udGV4dC5oZWlnaHQsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybTFmKFxuXHRcdFx0XHRcdFx0XHRcdFwidW5pQXNwZWN0UmF0aW9JbnZlcnNlXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGV4dC5oZWlnaHQgLyBjb250ZXh0LndpZHRoLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXG5cdFx0XHRcdFx0XHRcdFx0XCJ1bmlNb2RlbFZpZXdNYXRyaXhcIixcblx0XHRcdFx0XHRcdFx0XHRjb250ZXh0LmNhbWVyYS5tYXRyaXhNb2RlbFZpZXcsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcblx0XHRcdFx0XHRcdFx0XHRcInVuaVByb2plY3Rpb25NYXRyaXhcIixcblx0XHRcdFx0XHRcdFx0XHRjb250ZXh0LmNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XSxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHRoaXMuZmlsdGVyKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5yZW1vdmUodGhpcy5maWx0ZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5maWx0ZXIgPSBmaWx0ZXI7XG5cdFx0XHRjb250ZXh0LmFkZChmaWx0ZXIpO1xuXHRcdFx0Y29udGV4dC5wbGF5KCk7XG5cdFx0XHR0aGlzLm9uRXJyb3IobnVsbCk7XG5cdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdHRoaXMub25FcnJvcihleCBpbnN0YW5jZW9mIEVycm9yID8gZXgubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGV4KSk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lLCB0eXBlIENvbW1vblByb3BzIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuaW1wb3J0IENvZGVFZGl0b3IgZnJvbSBcIkAvY29tcG9uZW50cy9jb2RlLWVkaXRvclwiO1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IubW9kdWxlLmNzc1wiO1xuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcblxuZXhwb3J0IHR5cGUgVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3JQcm9wcyA9IENvbW1vblByb3BzICYge1xuXHRjb2RlOiBzdHJpbmc7XG5cdG9uQ2hhbmdlPyhjb2RlOiBzdHJpbmcpOiB2b2lkO1xuXHRkaXNhYmxlZD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IoXG5cdHByb3BzOiBWaWV3VmVydGV4U2hhZGVyQ29kZUVkaXRvclByb3BzLFxuKSB7XG5cdHJldHVybiAoXG5cdFx0PENvZGVFZGl0b3Jcblx0XHRcdGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnZlcnRleHNoYWRlcmNvZGVlZGl0b3IpfVxuXHRcdFx0bGFuZ3VhZ2U9XCJnbHNsXCJcblx0XHRcdHZhbHVlPXtwcm9wcy5jb2RlfVxuXHRcdFx0b25DaGFuZ2U9eyhjb2RlKSA9PiBwcm9wcy5vbkNoYW5nZT8uKGNvZGUpfVxuXHRcdFx0ZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuXHRcdC8+XG5cdCk7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yXCI7XG4iLCJpbXBvcnQgdHlwZSB7IFRnZENvZGVGdW5jdGlvbnMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdsc2xGdW5jdGlvbnMoKTogUmVjb3JkPHN0cmluZywgKCkgPT4gVGdkQ29kZUZ1bmN0aW9ucz4ge1xuXHRjb25zdCBbZnVuY3Rpb25zLCBzZXRGdW5jdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8XG5cdFx0UmVjb3JkPHN0cmluZywgKCkgPT4gVGdkQ29kZUZ1bmN0aW9ucz5cblx0Pih7fSk7XG5cblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRpbXBvcnQoXCJAdG9sb2tvYmFuL3RnZFwiKS50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgKCkgPT4gVGdkQ29kZUZ1bmN0aW9ucz4gPSB7fTtcblx0XHRcdGNvbnN0IHByZWZpeCA9IFwidGdkQ29kZUZ1bmN0aW9uX1wiO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobW9kdWxlKSkge1xuXHRcdFx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgocHJlZml4KSkge1xuXHRcdFx0XHRcdHJlc3VsdFtrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCldID0gbW9kdWxlW1xuXHRcdFx0XHRcdFx0a2V5IGFzIGtleW9mIHR5cGVvZiBtb2R1bGVcblx0XHRcdFx0XHRdIGFzICgpID0+IFRnZENvZGVGdW5jdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNldEZ1bmN0aW9ucyhyZXN1bHQpO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9ucztcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclwiO1xuIiwiaW1wb3J0IHsgVmlld0ZpbHRlciB9IGZyb20gXCIuL19cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVZpZXdHTFRGKCkge1xuXHRyZXR1cm4gPFZpZXdGaWx0ZXIgLz47XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFZGl0b3IgZnJvbSBcInJlYWN0LXNpbXBsZS1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCI7XG5cbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIjtcblxuaW1wb3J0IFwiLi9jb2RlLWVkaXRvci12aWV3LmNzc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVFZGl0b3JWaWV3UHJvcHMge1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdHZhbHVlOiBzdHJpbmc7XG5cdG9uQ2hhbmdlPyh2YWx1ZTogc3RyaW5nKTogdm9pZDtcblx0bGFuZ3VhZ2U6IHN0cmluZztcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBWT0lEX0ZVTkMgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZUVkaXRvclZpZXcocHJvcHM6IENvZGVFZGl0b3JWaWV3UHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9PlxuXHRcdFx0PEVkaXRvclxuXHRcdFx0XHRkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG5cdFx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cblx0XHRcdFx0b25WYWx1ZUNoYW5nZT17cHJvcHMub25DaGFuZ2UgPz8gVk9JRF9GVU5DfVxuXHRcdFx0XHRoaWdobGlnaHQ9eyhjb2RlKSA9PlxuXHRcdFx0XHRcdFByaXNtLmhpZ2hsaWdodChcblx0XHRcdFx0XHRcdGNvZGUsXG5cdFx0XHRcdFx0XHRnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLFxuXHRcdFx0XHRcdFx0cHJvcHMubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0XHQvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlRWRpdG9yVmlld1Byb3BzKTogc3RyaW5nIHtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFtcImN1c3RvbVwiLCBcInZpZXctQ29kZUVkaXRvclZpZXdcIl07XG5cdGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG5cdFx0Y2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSk7XG5cdH1cblxuXHRyZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcbn1cbiIsImltcG9ydCB0eXBlIFByaXNtIGZyb20gXCJwcmlzbWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuXHRyZXR1cm4gR0xTTDtcbn1cblxuY29uc3QgVFlQRVMgPSBbXG5cdFwiYnZlYzJcIixcblx0XCJidmVjM1wiLFxuXHRcImJ2ZWM0XCIsXG5cdFwiZG1hdDJcIixcblx0XCJkbWF0MngyXCIsXG5cdFwiZG1hdDJ4M1wiLFxuXHRcImRtYXQyeDRcIixcblx0XCJkbWF0M1wiLFxuXHRcImRtYXQzeDJcIixcblx0XCJkbWF0M3gzXCIsXG5cdFwiZG1hdDN4NFwiLFxuXHRcImRtYXQ0XCIsXG5cdFwiZG1hdDR4MlwiLFxuXHRcImRtYXQ0eDNcIixcblx0XCJkbWF0NHg0XCIsXG5cdFwiZHZlYzJcIixcblx0XCJkdmVjM1wiLFxuXHRcImR2ZWM0XCIsXG5cdFwiZmxvYXRcIixcblx0XCJmdmVjMlwiLFxuXHRcImZ2ZWMzXCIsXG5cdFwiZnZlYzRcIixcblx0XCJpc2FtcGxlcjFEXCIsXG5cdFwiaXNhbXBsZXIxREFycmF5XCIsXG5cdFwiaXNhbXBsZXIyRFwiLFxuXHRcImlzYW1wbGVyMkRBcnJheVwiLFxuXHRcImlzYW1wbGVyMkRNU1wiLFxuXHRcImlzYW1wbGVyMkRNU0FycmF5XCIsXG5cdFwiaXNhbXBsZXIyRFJlY3RcIixcblx0XCJpc2FtcGxlcjNEXCIsXG5cdFwiaXNhbXBsZXJCdWZmZXJcIixcblx0XCJpc2FtcGxlckN1YmVcIixcblx0XCJpc2FtcGxlckN1YmVBcnJheVwiLFxuXHRcIml2ZWMyXCIsXG5cdFwiaXZlYzNcIixcblx0XCJpdmVjNFwiLFxuXHRcIm1hdDJcIixcblx0XCJtYXQyeDJcIixcblx0XCJtYXQyeDNcIixcblx0XCJtYXQyeDRcIixcblx0XCJtYXQzXCIsXG5cdFwibWF0M3gyXCIsXG5cdFwibWF0M3gzXCIsXG5cdFwibWF0M3g0XCIsXG5cdFwibWF0NFwiLFxuXHRcIm1hdDR4MlwiLFxuXHRcIm1hdDR4M1wiLFxuXHRcIm1hdDR4NFwiLFxuXHRcInNhbXBsZVwiLFxuXHRcInNhbXBsZXIxRFwiLFxuXHRcInNhbXBsZXIxREFycmF5XCIsXG5cdFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcblx0XCJzYW1wbGVyMURTaGFkb3dcIixcblx0XCJzYW1wbGVyMkRcIixcblx0XCJzYW1wbGVyMkRBcnJheVwiLFxuXHRcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG5cdFwic2FtcGxlcjJETVNcIixcblx0XCJzYW1wbGVyMkRNU0FycmF5XCIsXG5cdFwic2FtcGxlcjJEUmVjdFwiLFxuXHRcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcblx0XCJzYW1wbGVyMkRTaGFkb3dcIixcblx0XCJzYW1wbGVyM0RcIixcblx0XCJzYW1wbGVyQnVmZmVyXCIsXG5cdFwic2FtcGxlckN1YmVcIixcblx0XCJzYW1wbGVyQ3ViZUFycmF5XCIsXG5cdFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuXHRcInNhbXBsZXJDdWJlU2hhZG93XCIsXG5cdFwidXNhbXBsZXIxRFwiLFxuXHRcInVzYW1wbGVyMURBcnJheVwiLFxuXHRcInVzYW1wbGVyMkRcIixcblx0XCJ1c2FtcGxlcjJEQXJyYXlcIixcblx0XCJ1c2FtcGxlcjJETVNcIixcblx0XCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuXHRcInVzYW1wbGVyMkRSZWN0XCIsXG5cdFwidXNhbXBsZXIzRFwiLFxuXHRcInVzYW1wbGVyQnVmZmVyXCIsXG5cdFwidXNhbXBsZXJDdWJlXCIsXG5cdFwidXNhbXBsZXJDdWJlQXJyYXlcIixcblx0XCJ1dmVjMlwiLFxuXHRcInV2ZWMzXCIsXG5cdFwidXZlYzRcIixcblx0XCJ2ZWMyXCIsXG5cdFwidmVjM1wiLFxuXHRcInZlYzRcIixcblx0XCJ2b2lkXCIsXG5dO1xuXG5jb25zdCBLRVlXT1JEUyA9IFtcblx0XCJjZW50cm9pZFwiLFxuXHRcImNvbnN0XCIsXG5cdFwiZGlzY2FyZFwiLFxuXHRcImVsc2VcIixcblx0XCJmbGF0XCIsXG5cdFwiaGlnaHBcIixcblx0XCJpZlwiLFxuXHRcImluXCIsXG5cdFwiaW5vdXRcIixcblx0XCJpbnZhcmlhbnRcIixcblx0XCJsYXlvdXRcIixcblx0XCJsb3dwXCIsXG5cdFwibWVkaXVtcFwiLFxuXHRcIm5vcGVyc3BlY3RpdmVcIixcblx0XCJvdXRcIixcblx0XCJwYXRjaFwiLFxuXHRcInByZWNpc2lvblwiLFxuXHRcInNtb290aFwiLFxuXHRcInN1YnJvdXRpbmVcIixcblx0XCJ1bmlmb3JtXCIsXG5cdC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG5cdFwiYWN0aXZlXCIsXG5cdFwiYXNtXCIsXG5cdFwiY2FzdFwiLFxuXHRcImNsYXNzXCIsXG5cdFwiY29tbW9uXCIsXG5cdFwiZW51bVwiLFxuXHRcImV4dGVyblwiLFxuXHRcImV4dGVybmFsXCIsXG5cdFwiZmlsdGVyXCIsXG5cdFwiZml4ZWRcIixcblx0XCJnb3RvXCIsXG5cdFwiaGFsZlwiLFxuXHRcImh2ZWMyXCIsXG5cdFwiaHZlYzNcIixcblx0XCJodmVjNFwiLFxuXHRcImlpbWFnZTFEXCIsXG5cdFwiaWltYWdlMURBcnJheVwiLFxuXHRcImlpbWFnZTJEXCIsXG5cdFwiaWltYWdlMkRBcnJheVwiLFxuXHRcImlpbWFnZTNEXCIsXG5cdFwiaWltYWdlQnVmZmVyXCIsXG5cdFwiaWltYWdlQ3ViZVwiLFxuXHRcImltYWdlMURcIixcblx0XCJpbWFnZTFEQXJyYXlcIixcblx0XCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcblx0XCJpbWFnZTFEU2hhZG93XCIsXG5cdFwiaW1hZ2UyRFwiLFxuXHRcImltYWdlMkRBcnJheVwiLFxuXHRcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuXHRcImltYWdlMkRTaGFkb3dcIixcblx0XCJpbWFnZTNEXCIsXG5cdFwiaW1hZ2VCdWZmZXJcIixcblx0XCJpbWFnZUN1YmVcIixcblx0XCJpbmxpbmVcIixcblx0XCJpbnB1dFwiLFxuXHRcImludGVyZmFjZVwiLFxuXHRcImxvbmdcIixcblx0XCJuYW1lc3BhY2VcIixcblx0XCJub2lubGluZVwiLFxuXHRcIm91dHB1dFwiLFxuXHRcInBhY2tlZFwiLFxuXHRcInBhcnRpdGlvblwiLFxuXHRcInB1YmxpY1wiLFxuXHRcInJvd19tYWpvclwiLFxuXHRcInNhbXBsZXIzRFJlY3RcIixcblx0XCJzaG9ydFwiLFxuXHRcInNpemVvZlwiLFxuXHRcInN0YXRpY1wiLFxuXHRcInN1cGVycFwiLFxuXHRcInRlbXBsYXRlXCIsXG5cdFwidGhpc1wiLFxuXHRcInR5cGVkZWZcIixcblx0XCJ1aW1hZ2UxRFwiLFxuXHRcInVpbWFnZTFEQXJyYXlcIixcblx0XCJ1aW1hZ2UyRFwiLFxuXHRcInVpbWFnZTJEQXJyYXlcIixcblx0XCJ1aW1hZ2UzRFwiLFxuXHRcInVpbWFnZUJ1ZmZlclwiLFxuXHRcInVpbWFnZUN1YmVcIixcblx0XCJ1bmlvblwiLFxuXHRcInVuc2lnbmVkXCIsXG5cdFwidXNpbmdcIixcblx0XCJ2b2xhdGlsZVwiLFxuXTtcblxuY29uc3QgR0xPQkFMUyA9IFtcblx0XCJnbF9EZXB0aFJhbmdlXCIsXG5cdFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG5cdFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcblx0XCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcblx0XCJnbF9GcmFnQ29vcmRcIixcblx0XCJnbF9GcmFnRGVwdGhcIixcblx0XCJnbF9Gcm9udEZhY2luZ1wiLFxuXHRcImdsX0luc3RhbmNlSURcIixcblx0XCJnbF9Qb2ludENvb3JkXCIsXG5cdFwiZ2xfUG9pbnRTaXplXCIsXG5cdFwiZ2xfUG9zaXRpb25cIixcblx0XCJnbF9WZXJ0ZXhJRFwiLFxuXTtcblxuY29uc3QgRlVOQ1RJT05TID0gW1xuXHRcImFic1wiLFxuXHRcImFjb3NcIixcblx0XCJhY29zaFwiLFxuXHRcImFsbFwiLFxuXHRcImFueVwiLFxuXHRcImFzaW5cIixcblx0XCJhc2luaFwiLFxuXHRcImF0YW5cIixcblx0XCJhdGFuaFwiLFxuXHRcImNlaWxcIixcblx0XCJjbGFtcFwiLFxuXHRcImNvc1wiLFxuXHRcImNvc2hcIixcblx0XCJjcm9zc1wiLFxuXHRcImRlZ3JlZXNcIixcblx0XCJkZXRlcm1pbmFudFwiLFxuXHRcImRGZHhcIixcblx0XCJkRmR5XCIsXG5cdFwiZGlzdGFuY2VcIixcblx0XCJkb3RcIixcblx0XCJlcXVhbFwiLFxuXHRcImV4cFwiLFxuXHRcImV4cDJcIixcblx0XCJmYWNlZm9yd2FyZFwiLFxuXHRcImZsb2F0Qml0c1RvSW50XCIsXG5cdFwiZmxvYXRCaXRzVG9VaW50XCIsXG5cdFwiZmxvb3JcIixcblx0XCJmcmFjdFwiLFxuXHRcImZ3aWR0aFwiLFxuXHRcImdyZWF0ZXJUaGFuXCIsXG5cdFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuXHRcImludEJpdHNUb0Zsb2F0XCIsXG5cdFwiaW52ZXJzZVwiLFxuXHRcImludmVyc2VzcXJ0XCIsXG5cdFwiaXNpbmZcIixcblx0XCJpc25hblwiLFxuXHRcImxlbmd0aFwiLFxuXHRcImxlc3NUaGFuXCIsXG5cdFwibGVzc1RoYW5FcXVhbFwiLFxuXHRcImxvZ1wiLFxuXHRcImxvZzJcIixcblx0XCJtYXRyaXhDb21wTXVsdFwiLFxuXHRcIm1heFwiLFxuXHRcIm1pblwiLFxuXHRcIm1peFwiLFxuXHRcIm1vZFwiLFxuXHRcIm1vZGZcIixcblx0XCJub3JtYWxpemVcIixcblx0XCJub3RcIixcblx0XCJub3RFcXVhbFwiLFxuXHRcIm91dGVyUHJvZHVjdFwiLFxuXHRcInBhY2tIYWxmMngxNlwiLFxuXHRcInBhY2tTbm9ybTJ4MTZcIixcblx0XCJwYWNrVW5vcm0yeDE2XCIsXG5cdFwicG93XCIsXG5cdFwicmFkaWFuc1wiLFxuXHRcInJlZmxlY3RcIixcblx0XCJyZWZyYWN0XCIsXG5cdFwicm91bmRcIixcblx0XCJyb3VuZEV2ZW5cIixcblx0XCJzaWduXCIsXG5cdFwic2luXCIsXG5cdFwic2luaFwiLFxuXHRcInNtb290aHN0ZXBcIixcblx0XCJzcXJ0XCIsXG5cdFwic3RlcFwiLFxuXHRcInRhblwiLFxuXHRcInRhbmhcIixcblx0XCJ0ZXhlbEZldGNoXCIsXG5cdFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuXHRcInRleHR1cmVcIixcblx0XCJ0ZXh0dXJlR3JhZFwiLFxuXHRcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG5cdFwidGV4dHVyZUxvZFwiLFxuXHRcInRleHR1cmVMb2RPZmZzZXRcIixcblx0XCJ0ZXh0dXJlT2Zmc2V0XCIsXG5cdFwidGV4dHVyZVByb2pcIixcblx0XCJ0ZXh0dXJlUHJvakdyYWRcIixcblx0XCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcblx0XCJ0ZXh0dXJlUHJvakxvZFwiLFxuXHRcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG5cdFwidGV4dHVyZVByb2pPZmZzZXRcIixcblx0XCJ0ZXh0dXJlU2l6ZVwiLFxuXHRcInRyYW5zcG9zZVwiLFxuXHRcInRydW5jXCIsXG5cdFwidWludEJpdHNUb0Zsb2F0XCIsXG5cdFwidW5wYWNrSGFsZjJ4MTZcIixcblx0XCJ1bnBhY2tTbm9ybTJ4MTZcIixcblx0XCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl07XG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG5cdGNvbW1lbnQ6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKF58W15cXFxcOl0pXFwvXFwvLipcIi9nLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxuXHRudW1iZXI6IHtcblx0XHRwYXR0ZXJuOlxuXHRcdFx0LyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHR9LFxuXHR0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG5cdGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcblx0Z2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcblx0ZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59O1xuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pOiBSZWdFeHAge1xuXHRyZXR1cm4gbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2dyYW1tYXJcIjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9jb2RlLWVkaXRvci12aWV3XCI7XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENvZGVDb25zdGFudHMiLCJ0Z2RDb2RlRnVuY3Rpb25fbHVtaW5hbmNlIiwidGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnV2IiwidGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnh5IiwidGdkQ29kZUZ1bmN0aW9uX3JhbmRvbSIsInRnZENvZGVGdW5jdGlvbl9zaGlmdEh1ZSIsInRnZENvZGVGdW5jdGlvbl91djJwb2xhciIsInRnZENvZGVGdW5jdGlvbl91djJ4eSIsInRnZENvZGVGdW5jdGlvbl94eTJwb2xhciIsInRnZENvZGVGdW5jdGlvbl94eTJ1diIsInRnZENvZGVTdHJpbmdpZnkiLCJUaGVtZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiVmlld1BhbmVsIiwiVmlld1N0cmlwIiwiVmlld1RhYiIsIlZpZXdUYWJzIiwiUmVhY3QiLCJEb2MiLCJTdHlsZXMiLCJWaWV3RmlsdGVyUmVzdWx0IiwidXNlR2xzbEZ1bmN0aW9ucyIsIlZpZXdWZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yIiwiJCIsIlZpZXdGaWx0ZXIiLCJsaWJyYXJ5IiwiZnVuY3Rpb25zIiwiY29kZSIsIl9pdGVyYXRvckVycm9yIiwiT2JqZWN0Iiwia2V5IiwiX3VzZUxvY2FsU3RvcmFnZVN0YXRlIiwiREVGQVVMVF9GUkFHTUVOVF9TSEFERVIiLCJmcmFnU2hhZGVyQ29kZSIsInNldEZyYWdTaGFkZXJDb2RlIiwiY29uc29sZSIsIkRFRkFVTFRfRlVOQ1RJT05TIiwiVmlld1NsaWRlciIsIkljb25GdWxsc2NyZWVuIiwidGdkRnVsbHNjcmVlblRvZ2dsZSIsIkZpbHRlck1hbmFnZXIiLCJwcm9wcyIsInJlZiIsIl9SZWFjdF91c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJyZWZNYW5hZ2VyIiwiX1JlYWN0X3VzZVN0YXRlMSIsInVuaUVmZmVjdFN0cmVuZ3RoIiwic2V0VW5pRWZmZWN0U3RyZW5ndGgiLCJoYW5kbGVNb3VudCIsImNhbnZhcyIsImhhbmRsZVRvZ2dsZUZ1bGxzY3JlZW4iLCJkaXYiLCJtYW5hZ2VyIiwiX3JlZk1hbmFnZXJfY3VycmVudCIsImxpbmUiLCJpbmRleCIsIlRnZENvbnRleHQiLCJUZ2RGaWx0ZXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkVGV4dHVyZTJEIiwiQmFja2dyb3VuZFVSTCIsIm9uRXJyb3IiLCJjb250ZXh0IiwidGV4dHVyZSIsInNldENvZGUiLCJfdGhpczEiLCJmaWx0ZXIiLCJzZXRVbmlmb3JtcyIsInByb2dyYW0iLCJ0aW1lIiwiZXgiLCJfaW5zdGFuY2VvZiIsIkVycm9yIiwiSlNPTiIsIkNvZGVFZGl0b3IiLCJvbkNoYW5nZSIsInNldEZ1bmN0aW9ucyIsIm1vZHVsZSIsInJlc3VsdCIsInByZWZpeCIsIlBhZ2VWaWV3R0xURiIsIkVkaXRvciIsIlByaXNtIiwiZ2V0R3JhbW1hckZvckxhbmd1YWdlIiwiVk9JRF9GVU5DIiwiQ29kZUVkaXRvclZpZXciLCJfcHJvcHNfb25DaGFuZ2UiLCJnZXRDbGFzc05hbWVzIiwiaGlnaGxpZ2h0IiwiY2xhc3NOYW1lcyIsImxhbmd1YWdlIiwiR0xTTCIsIlRZUEVTIiwiS0VZV09SRFMiLCJHTE9CQUxTIiwiRlVOQ1RJT05TIiwibWFrZUlkZW50aWZpZXJzUlgiLCJ3b3JkcyIsIlJlZ0V4cCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsOERBQThELEU7Ozs7Ozs7O0FDRDlFO0FBQ0Esc0RBQWUsQ0FBQyw0S0FBNEssRTs7Ozs7Ozs7QUNENUw7QUFDQSxzREFBZSxDQUFDLHFJQUFxSSxFOzs7OztBQ0RySjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNhd0I7QUFTRDtBQUNRO0FBQ0g7QUFDYTtBQUNTO0FBQ0g7QUFDdUI7QUFFdEUsSUFBTXVCLElBQUlaLCtDQUFnQjtBQUVuQixTQUFTYTtJQUNmLElBQU1DLFVBQVVKLGdEQUFnQkE7SUFDaEMsSUFBTUssWUFBWVQsOEJBQWEsQ0FBQztRQUMvQixJQUFJVSxPQUF5QixDQUFDO1lBQ3pCQyxrQ0FBQUEsMkJBQUFBOztZQUFMLFFBQUtBLFlBQWFDLE9BQU8sSUFBSSxDQUFDSiw2QkFBekJHLFNBQUFBLDZCQUFBQSxRQUFBQSx5QkFBQUEsaUNBQW1DO2dCQUFuQ0EsSUFBTUUsTUFBTkY7Z0JBQ0pELE9BQU8sbUJBQ0hBLE1BQ0FGLE9BQU8sQ0FBQ0ssSUFBSTtZQUVqQjs7WUFMS0Y7WUFBQUE7OztxQkFBQUEsNkJBQUFBO29CQUFBQTs7O29CQUFBQTswQkFBQUE7Ozs7UUFNTCxPQUFPQyxPQUFPLE1BQU0sQ0FBQ0YsTUFBTSxJQUFJLENBQUM7SUFDakMsR0FBRztRQUFDRjtLQUFRO0lBQ1osSUFBNENNLHlDQUFBQSx1REFBb0JBLENBQy9EQyx5QkFDQSw4QkFGTUMs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Q0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDQTtBQUVELElBQU1DLFVBQVU7SUFDZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDQTtBQUVELElBQU1DLFlBQVk7SUFDakI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNBO0FBRUQsSUFBTUosT0FBc0I7SUFDM0IsU0FBUztRQUNSO1lBQ0MsU0FBUztZ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