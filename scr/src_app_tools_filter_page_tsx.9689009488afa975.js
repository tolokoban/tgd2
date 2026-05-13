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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, this)
                    }, "shader", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 44,
                        columnNumber: 17
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    }, "functions", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewTab, {
                        label: "Documentation",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                            fullsize: true,
                            overflow: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_doc_mdx__rspack_import_4["default"], {}, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    }, "doc", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_FilterResult__rspack_import_6.ViewFilterResult, {
                fragmentShader: fragShaderCode,
                functions: functions
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/Filter.tsx",
        lineNumber: 42,
        columnNumber: 9
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                        onClick: handleToggleFullscreen
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
                ref: handleMount
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 68,
                columnNumber: 13
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 74,
                        columnNumber: 33
                    }, _this);
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: line
                    }, index, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                        lineNumber: 79,
                        columnNumber: 32
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                min: 0,
                max: 1,
                step: 0.01,
                value: uniEffectStrength,
                onChange: setUniEffectStrength
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        ]
    }), void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/FilterResult/FilterResult.tsx",
        lineNumber: 56,
        columnNumber: 9
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/VertexShaderCodeEditor/VertexShaderCodeEditor.tsx",
        lineNumber: 18,
        columnNumber: 9
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/page.tsx",
        lineNumber: 4,
        columnNumber: 12
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
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/code-editor/code-editor-view.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/code-editor/code-editor-view.tsx",
        lineNumber: 21,
        columnNumber: 9
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 3,
                                columnNumber: 3
                            }, this),
                            ": current time in seconds."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 3,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniEffectStrength"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 4,
                                columnNumber: 3
                            }, this),
                            ": float between 0.0 and 1.0, controlled by the slider."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatio"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 5,
                                columnNumber: 3
                            }, this),
                            ": Aspect ratio (width / height)."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "uniAspectRatioInverse"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 6,
                                columnNumber: 3
                            }, this),
                            ": Inverse aspect ratio (height / width)."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Useful resources for fragment shaders:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 10,
                                columnNumber: 16
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 11,
                                columnNumber: 14
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 12,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 15,
                                columnNumber: 26
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 18,
                                columnNumber: 24
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/filter/_/doc.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfZmlsdGVyX3BhZ2VfdHN4Ljk2ODkwMDk0ODhhZmE5NzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyLm1vZHVsZS5jc3M/MjM2YSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L0ZpbHRlclJlc3VsdC5tb2R1bGUuY3NzPzFlZTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IvVmVydGV4U2hhZGVyQ29kZUVkaXRvci5tb2R1bGUuY3NzPzRhNTYiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci12aWV3LmNzcz82NGVhIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9GaWx0ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9GaWx0ZXJSZXN1bHQvRmlsdGVyUmVzdWx0LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vRmlsdGVyUmVzdWx0L2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9GaWx0ZXJSZXN1bHQvbWFuYWdlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vVmVydGV4U2hhZGVyQ29kZUVkaXRvci9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vVmVydGV4U2hhZGVyQ29kZUVkaXRvci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL18vZnVuY3Rpb25zLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9maWx0ZXIvXy9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvZmlsdGVyL3BhZ2UudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvY29kZS1lZGl0b3IvY29kZS1lZGl0b3Itdmlldy50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9ncmFtbWFyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9jb2RlLWVkaXRvci9ncmFtbWFyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvY29kZS1lZGl0b3IvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL2ZpbHRlci9fL2RvYy5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZpbHRlclwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXItbW9kdWxlX2ZpbHRlcl9BOTBmWFlcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImZpbHRlcnJlc3VsdFwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXJSZXN1bHQtRmlsdGVyUmVzdWx0LW1vZHVsZV9maWx0ZXJyZXN1bHRfa3lsNTVTXCIsXCJlcnJvclwiOlwic3JjLWFwcC10b29scy1maWx0ZXItXy1GaWx0ZXJSZXN1bHQtRmlsdGVyUmVzdWx0LW1vZHVsZV9lcnJvcl9wNjBFZmtcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInZlcnRleHNoYWRlcmNvZGVlZGl0b3JcIjpcInNyYy1hcHAtdG9vbHMtZmlsdGVyLV8tVmVydGV4U2hhZGVyQ29kZUVkaXRvci1WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yLW1vZHVsZV92ZXJ0ZXhzaGFkZXJjb2RlZWRpdG9yX3lvdFlaTFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb2RlRnVuY3Rpb25zLFxuICAgIHRnZENvZGVDb25zdGFudHMsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX2x1bWluYW5jZSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3BvbGFyMnh5LFxuICAgIHRnZENvZGVGdW5jdGlvbl9yYW5kb20sXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3NoaWZ0SHVlLFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJwb2xhcixcbiAgICB0Z2RDb2RlRnVuY3Rpb25fdXYyeHksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3h5MnBvbGFyLFxuICAgIHRnZENvZGVGdW5jdGlvbl94eTJ1dixcbiAgICB0Z2RDb2RlU3RyaW5naWZ5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIFZpZXdQYW5lbCwgVmlld1N0cmlwLCBWaWV3VGFiLCBWaWV3VGFicyB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRG9jIGZyb20gXCIuL2RvYy5tZHhcIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9GaWx0ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBWaWV3RmlsdGVyUmVzdWx0IH0gZnJvbSBcIi4vRmlsdGVyUmVzdWx0XCJcbmltcG9ydCB7IHVzZUdsc2xGdW5jdGlvbnMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIlxuaW1wb3J0IHsgVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IgfSBmcm9tIFwiLi9WZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdGaWx0ZXIoKSB7XG4gICAgY29uc3QgbGlicmFyeSA9IHVzZUdsc2xGdW5jdGlvbnMoKVxuICAgIGNvbnN0IGZ1bmN0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBsZXQgY29kZTogVGdkQ29kZUZ1bmN0aW9ucyA9IHt9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGxpYnJhcnkpKSB7XG4gICAgICAgICAgICBjb2RlID0ge1xuICAgICAgICAgICAgICAgIC4uLmNvZGUsXG4gICAgICAgICAgICAgICAgLi4ubGlicmFyeVtrZXldKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29kZSkuam9pbihcIlxcblwiKVxuICAgIH0sIFtsaWJyYXJ5XSlcbiAgICBjb25zdCBbZnJhZ1NoYWRlckNvZGUsIHNldEZyYWdTaGFkZXJDb2RlXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKERFRkFVTFRfRlJBR01FTlRfU0hBREVSLCBcIkZpbHRlci9GcmFnbWVudFNoYWRlclwiKVxuICAgIGNvbnNvbGUubG9nKGZ1bmN0aW9ucylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3U3RyaXAgY2xhc3NOYW1lPXtTdHlsZXMuZmlsdGVyfSB0ZW1wbGF0ZT1cIjExXCIgb3JpZW50YXRpb249XCJyb3dcIj5cbiAgICAgICAgICAgIDxWaWV3VGFicz5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYiBsYWJlbD1cIkZyYWdtZW50IFNoYWRlclwiIGtleT1cInNoYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGZ1bGxzaXplIG92ZXJmbG93PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdWZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yIGNvZGU9e2ZyYWdTaGFkZXJDb2RlfSBvbkNoYW5nZT17c2V0RnJhZ1NoYWRlckNvZGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYiBsYWJlbD1cIkV4dHJhIGZ1bmN0aW9uc1wiIGtleT1cImZ1bmN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGZ1bGxzaXplIG92ZXJmbG93PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdWZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yIGNvZGU9e2Z1bmN0aW9uc30gZGlzYWJsZWQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYiBsYWJlbD1cIkRvY3VtZW50YXRpb25cIiBrZXk9XCJkb2NcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBmdWxsc2l6ZSBvdmVyZmxvdz1cImF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2MgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgPC9WaWV3VGFicz5cbiAgICAgICAgICAgIDxWaWV3RmlsdGVyUmVzdWx0IGZyYWdtZW50U2hhZGVyPXtmcmFnU2hhZGVyQ29kZX0gZnVuY3Rpb25zPXtmdW5jdGlvbnN9IC8+XG4gICAgICAgIDwvVmlld1N0cmlwPlxuICAgIClcbn1cblxuY29uc3QgREVGQVVMVF9GUkFHTUVOVF9TSEFERVIgPSB0Z2RDb2RlU3RyaW5naWZ5KFtcbiAgICBgdmVjMiBwb2xhciA9IHV2MnBvbGFyKHZhclVWKTtgLFxuICAgIGBwb2xhci55ICs9IHBvbGFyLnggKiBjb3ModW5pVGltZSk7YCxcbiAgICBgdmVjMiB1diA9IHBvbGFyMnV2KHBvbGFyKTtgLFxuICAgIGB2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7YCxcbiAgICBgRnJhZ0NvbG9yID0gdmVjNChgLFxuICAgIFtgc2hpZnRIdWUoY29sb3IucmdiLCBwb2xhci55ICsgdW5pVGltZSksYCwgYDEuMGBdLFxuICAgIGApO2AsXG5dKVxuXG5jb25zdCBERUZBVUxUX0ZVTkNUSU9OUyA9IHRnZENvZGVTdHJpbmdpZnkoW1xuICAgIHRnZENvZGVDb25zdGFudHMoXCJQSVwiLCBcIlRBVVwiLCBcIkVcIiksXG4gICAgdGdkQ29kZUZ1bmN0aW9uX3JhbmRvbSgpLFxuICAgIHRnZENvZGVGdW5jdGlvbl9zaGlmdEh1ZSgpLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ1digpLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wb2xhcjJ4eSgpLFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJwb2xhcigpLFxuICAgIHRnZENvZGVGdW5jdGlvbl94eTJwb2xhcigpLFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJ4eSgpLFxuICAgIHRnZENvZGVGdW5jdGlvbl94eTJ1digpLFxuICAgIHRnZENvZGVGdW5jdGlvbl9sdW1pbmFuY2UoKSxcbiAgICBgXG5mbG9hdCBkb3QyKCBpbiB2ZWMyIHYgKSB7IHJldHVybiBkb3Qodix2KTsgfVxuYCxcbl0pXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMsIFZpZXdQYW5lbCwgVmlld1NsaWRlciwgSWNvbkZ1bGxzY3JlZW4gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyB0Z2RGdWxsc2NyZWVuVG9nZ2xlIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IHsgRmlsdGVyTWFuYWdlciB9IGZyb20gXCIuL21hbmFnZXJcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL0ZpbHRlclJlc3VsdC5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld0ZpbHRlclJlc3VsdFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgZnJhZ21lbnRTaGFkZXI6IHN0cmluZ1xuICAgIGZ1bmN0aW9uczogc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3RmlsdGVyUmVzdWx0KHByb3BzOiBWaWV3RmlsdGVyUmVzdWx0UHJvcHMpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZNYW5hZ2VyID0gUmVhY3QudXNlUmVmPEZpbHRlck1hbmFnZXIgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFt1bmlFZmZlY3RTdHJlbmd0aCwgc2V0VW5pRWZmZWN0U3RyZW5ndGhdID0gUmVhY3QudXNlU3RhdGUoMC41KVxuICAgIGNvbnN0IGhhbmRsZU1vdW50ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgICAgICBpZiAoIXJlZk1hbmFnZXIuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmTWFuYWdlci5jdXJyZW50ID0gbmV3IEZpbHRlck1hbmFnZXIoY2FudmFzLCBzZXRFcnJvcilcbiAgICAgICAgfVxuICAgICAgICByZWZNYW5hZ2VyLmN1cnJlbnQuc2V0Q29kZShwcm9wcy5mcmFnbWVudFNoYWRlciwgcHJvcHMuZnVuY3Rpb25zKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVUb2dnbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSByZWYuY3VycmVudFxuICAgICAgICBpZiAoIWRpdikgcmV0dXJuXG5cbiAgICAgICAgdGdkRnVsbHNjcmVlblRvZ2dsZShkaXYpXG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSByZWZNYW5hZ2VyLmN1cnJlbnRcbiAgICAgICAgaWYgKCFtYW5hZ2VyKSByZXR1cm5cblxuICAgICAgICBtYW5hZ2VyLnNldENvZGUocHJvcHMuZnJhZ21lbnRTaGFkZXIsIHByb3BzLmZ1bmN0aW9ucylcbiAgICB9LCBbcHJvcHMuZnJhZ21lbnRTaGFkZXIsIHByb3BzLmZ1bmN0aW9uc10pXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IHJlZk1hbmFnZXIuY3VycmVudFxuICAgICAgICBpZiAoIW1hbmFnZXIpIHJldHVyblxuXG4gICAgICAgIG1hbmFnZXIudW5pRWZmZWN0U3RyZW5ndGggPSB1bmlFZmZlY3RTdHJlbmd0aFxuICAgIH0sIFt1bmlFZmZlY3RTdHJlbmd0aF0pXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJlZk1hbmFnZXIuY3VycmVudD8uZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLmZpbHRlcnJlc3VsdCl9IHsuLi5wcm9wc30+XG4gICAgICAgICAgICA8Vmlld1BhbmVsXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5LTVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjJlbVwiXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgcGFkZGluZz1cIk1cIlxuICAgICAgICAgICAgICAgIGZ1bGx3aWR0aD5cbiAgICAgICAgICAgICAgICA8ZGl2PkZpbHRlciBvdXRwdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SWNvbkZ1bGxzY3JlZW4gb25DbGljaz17aGFuZGxlVG9nZ2xlRnVsbHNjcmVlbn0gLz5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2hhbmRsZU1vdW50fT48L2NhbnZhcz5cbiAgICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yLnNwbGl0KFwiXFxuXCIpLm1hcCgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIyMjI1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmVycm9yfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiXFxuXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PntsaW5lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Vmlld1NsaWRlciBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wMX0gdmFsdWU9e3VuaUVmZmVjdFN0cmVuZ3RofSBvbkNoYW5nZT17c2V0VW5pRWZmZWN0U3RyZW5ndGh9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclJlc3VsdFwiXG4iLCJpbXBvcnQgeyBUZ2RDb250ZXh0LCBUZ2RGaWx0ZXIsIFRnZFBhaW50ZXJGaWx0ZXIsIFRnZFRleHR1cmUyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXCIuL2JhY2tncm91bmQuYXZpZlwiXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNYW5hZ2VyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzdHJveTogKCkgPT4gdm9pZFxuICAgIHB1YmxpYyB1bmlFZmZlY3RTdHJlbmd0aCA9IDBcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJEXG4gICAgcHJpdmF0ZSBmaWx0ZXI6IFRnZFBhaW50ZXJGaWx0ZXIgfCBudWxsID0gbnVsbFxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb25FcnJvcjogKGVycm9yOiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkLFxuICAgICkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoQmFja2dyb3VuZFVSTCkuc2V0UGFyYW1zKHtcbiAgICAgICAgICAgIHdyYXBSOiBcIk1JUlJPUkVEX1JFUEVBVFwiLFxuICAgICAgICAgICAgd3JhcFM6IFwiTUlSUk9SRURfUkVQRUFUXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJNSVJST1JFRF9SRVBFQVRcIixcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZVxuICAgICAgICB0aGlzLmRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICB0ZXh0dXJlLmRlbGV0ZSgpXG4gICAgICAgICAgICBjb250ZXh0LmRlbGV0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb2RlKGNvZGU6IHN0cmluZywgZnVuY3Rpb25zID0gXCJcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZXh0LCB0ZXh0dXJlIH0gPSB0aGlzXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFGdW5jdGlvbnM6IGZ1bmN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUVmZmVjdFN0cmVuZ3RoOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW86IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBc3BlY3RSYXRpb0ludmVyc2U6IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtLCB0aW1lIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUVmZmVjdFN0cmVuZ3RoXCIsIHRoaXMudW5pRWZmZWN0U3RyZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb1wiLCBjb250ZXh0LndpZHRoIC8gY29udGV4dC5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb0ludmVyc2VcIiwgY29udGV4dC5oZWlnaHQgLyBjb250ZXh0LndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBjb250ZXh0LmNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pUHJvamVjdGlvbk1hdHJpeFwiLCBjb250ZXh0LmNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMuZmlsdGVyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJcbiAgICAgICAgICAgIGNvbnRleHQuYWRkKGZpbHRlcilcbiAgICAgICAgICAgIGNvbnRleHQucGxheSgpXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3IobnVsbClcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihleCBpbnN0YW5jZW9mIEVycm9yID8gZXgubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGV4KSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBDb2RlRWRpdG9yIGZyb20gXCJAL2NvbXBvbmVudHMvY29kZS1lZGl0b3JcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1ZlcnRleFNoYWRlckNvZGVFZGl0b3IubW9kdWxlLmNzc1wiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdWZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBjb2RlOiBzdHJpbmdcbiAgICBvbkNoYW5nZT8oY29kZTogc3RyaW5nKTogdm9pZFxuICAgIGRpc2FibGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IocHJvcHM6IFZpZXdWZXJ0ZXhTaGFkZXJDb2RlRWRpdG9yUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMudmVydGV4c2hhZGVyY29kZWVkaXRvcil9XG4gICAgICAgICAgICBsYW5ndWFnZT1cImdsc2xcIlxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmNvZGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGNvZGUpID0+IHByb3BzLm9uQ2hhbmdlPy4oY29kZSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vVmVydGV4U2hhZGVyQ29kZUVkaXRvclwiXG4iLCJpbXBvcnQgeyBUZ2RDb2RlRnVuY3Rpb25zIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2xzbEZ1bmN0aW9ucygpOiBSZWNvcmQ8c3RyaW5nLCAoKSA9PiBUZ2RDb2RlRnVuY3Rpb25zPiB7XG4gICAgY29uc3QgW2Z1bmN0aW9ucywgc2V0RnVuY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxzdHJpbmcsICgpID0+IFRnZENvZGVGdW5jdGlvbnM+Pih7fSlcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGltcG9ydChcIkB0b2xva29iYW4vdGdkXCIpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCAoKSA9PiBUZ2RDb2RlRnVuY3Rpb25zPiA9IHt9XG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSBcInRnZENvZGVGdW5jdGlvbl9cIlxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobW9kdWxlKSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrZXkuc2xpY2UocHJlZml4Lmxlbmd0aCldID0gbW9kdWxlW2tleSBhcyBrZXlvZiB0eXBlb2YgbW9kdWxlXSBhcyAoKSA9PiBUZ2RDb2RlRnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0RnVuY3Rpb25zKHJlc3VsdClcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiBmdW5jdGlvbnNcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL0ZpbHRlclwiXG4iLCJpbXBvcnQgeyBWaWV3RmlsdGVyIH0gZnJvbSBcIi4vX1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VWaWV3R0xURigpIHtcbiAgICByZXR1cm4gPFZpZXdGaWx0ZXIgLz5cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgRWRpdG9yIGZyb20gXCJyZWFjdC1zaW1wbGUtY29kZS1lZGl0b3JcIlxuaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcblxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmltcG9ydCBcIi4vY29kZS1lZGl0b3Itdmlldy5jc3NcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVFZGl0b3JWaWV3UHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmdcbiAgICBvbkNoYW5nZT8odmFsdWU6IHN0cmluZyk6IHZvaWRcbiAgICBsYW5ndWFnZTogc3RyaW5nXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuXG59XG5cbmNvbnN0IFZPSURfRlVOQyA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVFZGl0b3JWaWV3KHByb3BzOiBDb2RlRWRpdG9yVmlld1Byb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfT5cbiAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlID8/IFZPSURfRlVOQ31cbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9eyhjb2RlKSA9PiBQcmlzbS5oaWdobGlnaHQoY29kZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlRWRpdG9yVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1wiY3VzdG9tXCIsIFwidmlldy1Db2RlRWRpdG9yVmlld1wiXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHJldHVybiBHTFNMXG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXCIoXnxbXlxcXFw6XSlcXC9cXC8uKlwiL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pOiBSZWdFeHAge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ncmFtbWFyXCJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9jb2RlLWVkaXRvci12aWV3XCJcbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsidGdkQ29kZUNvbnN0YW50cyIsInRnZENvZGVGdW5jdGlvbl9sdW1pbmFuY2UiLCJ0Z2RDb2RlRnVuY3Rpb25fcG9sYXIydXYiLCJ0Z2RDb2RlRnVuY3Rpb25fcG9sYXIyeHkiLCJ0Z2RDb2RlRnVuY3Rpb25fcmFuZG9tIiwidGdkQ29kZUZ1bmN0aW9uX3NoaWZ0SHVlIiwidGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyIiwidGdkQ29kZUZ1bmN0aW9uX3V2Mnh5IiwidGdkQ29kZUZ1bmN0aW9uX3h5MnBvbGFyIiwidGdkQ29kZUZ1bmN0aW9uX3h5MnV2IiwidGdkQ29kZVN0cmluZ2lmeSIsIlRoZW1lIiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJWaWV3UGFuZWwiLCJWaWV3U3RyaXAiLCJWaWV3VGFiIiwiVmlld1RhYnMiLCJSZWFjdCIsIkRvYyIsIlN0eWxlcyIsIlZpZXdGaWx0ZXJSZXN1bHQiLCJ1c2VHbHNsRnVuY3Rpb25zIiwiVmlld1ZlcnRleFNoYWRlckNvZGVFZGl0b3IiLCIkIiwiVmlld0ZpbHRlciIsImxpYnJhcnkiLCJmdW5jdGlvbnMiLCJjb2RlIiwiX2l0ZXJhdG9yRXJyb3IiLCJPYmplY3QiLCJrZXkiLCJfdXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJERUZBVUxUX0ZSQUdNRU5UX1NIQURFUiIsImZyYWdTaGFkZXJDb2RlIiwic2V0RnJhZ1NoYWRlckNvZGUiLCJjb25zb2xlIiwiREVGQVVMVF9GVU5DVElPTlMiLCJWaWV3U2xpZGVyIiwiSWNvbkZ1bGxzY3JlZW4iLCJ0Z2RGdWxsc2NyZWVuVG9nZ2xlIiwiRmlsdGVyTWFuYWdlciIsInByb3BzIiwicmVmIiwiX1JlYWN0X3VzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZk1hbmFnZXIiLCJfUmVhY3RfdXNlU3RhdGUxIiwidW5pRWZmZWN0U3RyZW5ndGgiLCJzZXRVbmlFZmZlY3RTdHJlbmd0aCIsImhhbmRsZU1vdW50IiwiY2FudmFzIiwiaGFuZGxlVG9nZ2xlRnVsbHNjcmVlbiIsImRpdiIsIm1hbmFnZXIiLCJfcmVmTWFuYWdlcl9jdXJyZW50IiwibGluZSIsImluZGV4IiwiVGdkQ29udGV4dCIsIlRnZEZpbHRlciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RUZXh0dXJlMkQiLCJCYWNrZ3JvdW5kVVJMIiwib25FcnJvciIsImNvbnRleHQiLCJ0ZXh0dXJlIiwic2V0Q29kZSIsIl90aGlzMSIsImZpbHRlciIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsInRpbWUiLCJleCIsIl9pbnN0YW5jZW9mIiwiRXJyb3IiLCJKU09OIiwiQ29kZUVkaXRvciIsIm9uQ2hhbmdlIiwic2V0RnVuY3Rpb25zIiwibW9kdWxlIiwicmVzdWx0IiwicHJlZml4IiwiUGFnZVZpZXdHTFRGIiwiRWRpdG9yIiwiUHJpc20iLCJnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UiLCJWT0lEX0ZVTkMiLCJDb2RlRWRpdG9yVmlldyIsIl9wcm9wc19vbkNoYW5nZSIsImdldENsYXNzTmFtZXMiLCJoaWdobGlnaHQiLCJjbGFzc05hbWVzIiwibGFuZ3VhZ2UiLCJHTFNMIiwiVFlQRVMiLCJLRVlXT1JEUyIsIkdMT0JBTFMiLCJGVU5DVElPTlMiLCJtYWtlSWRlbnRpZmllcnNSWCIsIndvcmRzIiwiUmVnRXhwIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyw4REFBOEQsRTs7Ozs7Ozs7QUNEOUU7QUFDQSxzREFBZSxDQUFDLDRLQUE0SyxFOzs7Ozs7OztBQ0Q1TDtBQUNBLHNEQUFlLENBQUMscUlBQXFJLEU7Ozs7O0FDRHJKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2F1QjtBQUU2RTtBQUN0RTtBQUNIO0FBQ2E7QUFDUztBQUNIO0FBQ3VCO0FBRXJFLElBQU11QixJQUFJWiwrQ0FBZ0I7QUFFbkIsU0FBU2E7SUFDWixJQUFNQyxVQUFVSixnREFBZ0JBO0lBQ2hDLElBQU1LLFlBQVlULDhCQUFhLENBQUM7UUFDNUIsSUFBSVUsT0FBeUIs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SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDSDtBQUVELElBQU1DLFdBQVc7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsdUJBQXVCO0lBQ3ZCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNIO0FBRUQsSUFBTUMsVUFBVTtJQUNaO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNIO0FBRUQsSUFBTUMsWUFBWTtJQUNkO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNB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