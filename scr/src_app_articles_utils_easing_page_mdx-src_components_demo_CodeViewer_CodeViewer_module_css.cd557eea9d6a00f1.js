"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_utils_easing_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css"], {
43365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"demo":"src-app-articles-utils-easing-_EasingFunctionsDemo-Demo-Demo-module_demo_lEFmKD","bar":"src-app-articles-utils-easing-_EasingFunctionsDemo-Demo-Demo-module_bar_hhKVpd","pin":"src-app-articles-utils-easing-_EasingFunctionsDemo-Demo-Demo-module_pin_UCQIEJ","y":"src-app-articles-utils-easing-_EasingFunctionsDemo-Demo-Demo-module_y_hY9Cqm"});

},
29295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"easingFunctionsDemo":"src-app-articles-utils-easing-_EasingFunctionsDemo-EasingFunctionsDemo-module_easingFunctionsDemo_UHHPkj"});

},
26653(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"plot":"src-app-articles-utils-easing-_EasingFunctionsDemo-Plot-Plot-module_plot_vuqoLb","line":"src-app-articles-utils-easing-_EasingFunctionsDemo-Plot-Plot-module_line_dXalzU","clickable":"src-app-articles-utils-easing-_EasingFunctionsDemo-Plot-Plot-module_clickable_EVsQWK"});

},
73414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewDemo: () => (ViewDemo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_3 = __webpack_require__(47578);
/* import */ var _Demo_module_css__rspack_import_4 = __webpack_require__(43365);
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
function ViewDemo(props) {
    var refY = react__rspack_import_1.useRef(null);
    var refPin = react__rspack_import_1.useRef(null);
    var easing = props.easing;
    var raf = react__rspack_import_1.useCallback(function(time) {
        var pin = refPin.current;
        var Y = refY.current;
        if (!pin || !Y) return;
        var x = (0,_tolokoban_tgd__rspack_import_3.tgdCalcModulo)(time, 0, 2000) * 0.5e-3;
        Y.style.left = "".concat(100 * x, "%");
        var y = easing(x);
        pin.style.left = "".concat(100 * y, "%");
    }, [
        easing
    ]);
    useRequestAnimationFrame(raf);
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Demo_module_css__rspack_import_4["default"].demo),
        style: style,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _Demo_module_css__rspack_import_4["default"].bar
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Demo/Demo.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _Demo_module_css__rspack_import_4["default"].y,
                ref: refY
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Demo/Demo.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _Demo_module_css__rspack_import_4["default"].pin,
                ref: refPin
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Demo/Demo.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Demo/Demo.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
function useRequestAnimationFrame(callback) {
    react__rspack_import_1.useEffect(function() {
        var playing = true;
        var anim = function anim1(time) {
            if (!playing) return;
            globalThis.requestAnimationFrame(anim);
            callback(time);
        };
        globalThis.requestAnimationFrame(anim);
        return function() {
            playing = false;
        };
    }, [
        callback
    ]);
}


},
44057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewDemo: () => (/* reexport safe */ _Demo__rspack_import_0.ViewDemo)
});
/* import */ var _Demo__rspack_import_0 = __webpack_require__(73414);



},
70644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewEasingFunctionsDemo: () => (ViewEasingFunctionsDemo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var _EasingFunctionsDemo_module_css__rspack_import_4 = __webpack_require__(29295);
/* import */ var _Plot__rspack_import_5 = __webpack_require__(22265);
/* import */ var _Demo__rspack_import_6 = __webpack_require__(44057);
/* import */ var _components_demo_CodeViewer__rspack_import_7 = __webpack_require__(16391);
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








var $ = _tolokoban_ui__rspack_import_3.Theme.classNames;
function ViewEasingFunctionsDemo(props) {
    var _this = this;
    var _useLocalStorageState = _sliced_to_array((0,_tolokoban_ui__rspack_import_3.useLocalStorageState)("Linear", "selectedEasingFunction"), 2), selectedEasingFunction = _useLocalStorageState[0], setSelectedEasingFunction = _useLocalStorageState[1];
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_3.styleCommon)(props));
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("pre", {
                        children: [
                            "tgdEasingFunction",
                            selectedEasingFunction
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Demo__rspack_import_6.ViewDemo, {
                        easing: FUNCTIONS[selectedEasingFunction]
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: $.join("full-width", props.className, _EasingFunctionsDemo_module_css__rspack_import_4["default"].easingFunctionsDemo),
                style: style,
                children: Object.keys(FUNCTIONS).map(function(name) {
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Plot__rspack_import_5.ViewPlot, {
                        name: "".concat(name),
                        easing: FUNCTIONS[name],
                        onClick: setSelectedEasingFunction
                    }, name, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("hr", {}, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: [
                    "You can also ",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("b", {
                        children: "compose"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 74,
                        columnNumber: 30
                    }, this),
                    " multiple easing functions to create a new one:"
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_7["default"], {
                        language: "ts",
                        value: "tgdEasingCompose(\n    tgdEasingFunctionTriangle,\n    tgdEasingFunctionOutBack\n)"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Plot__rspack_import_5.ViewPlot, {
                        easing: (0,_tolokoban_tgd__rspack_import_2.tgdEasingCompose)(FUNCTIONS.Triangle, FUNCTIONS.OutBack)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_7["default"], {
                        language: "ts",
                        value: "tgdEasingCompose(\n    tgdEasingFunctionOutBack,\n    tgdEasingFunctionTriangle,\n)"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Plot__rspack_import_5.ViewPlot, {
                        easing: (0,_tolokoban_tgd__rspack_import_2.tgdEasingCompose)(FUNCTIONS.OutBack, FUNCTIONS.Triangle)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/EasingFunctionsDemo.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
var FUNCTIONS = {
    Linear: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionLinear,
    LinearInverse: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionLinearInverse,
    Triangle: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionTriangle,
    TriangleInverse: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionTriangleInverse,
    InSine: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInSine,
    OutSine: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutSine,
    InOutSine: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutSine,
    InQuad: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInQuad,
    OutQuad: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutQuad,
    InOutQuad: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutQuad,
    InCubic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInCubic,
    OutCubic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutCubic,
    InOutCubic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutCubic,
    InQuart: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInQuart,
    OutQuart: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutQuart,
    InOutQuart: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutQuart,
    InQuint: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInQuint,
    OutQuint: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutQuint,
    InOutQuint: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutQuint,
    InExpo: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInExpo,
    OutExpo: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutExpo,
    InOutExpo: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutExpo,
    InCirc: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInCirc,
    OutCirc: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutCirc,
    InOutCirc: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutCirc,
    InBack: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInBack,
    OutBack: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutBack,
    InOutBack: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutBack,
    InElastic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInElastic,
    OutElastic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutElastic,
    InOutElastic: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutElastic,
    InBounce: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInBounce,
    OutBounce: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionOutBounce,
    InOutBounce: _tolokoban_tgd__rspack_import_2.tgdEasingFunctionInOutBounce
};


},
96006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPlot: () => (ViewPlot)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _Plot_module_css__rspack_import_3 = __webpack_require__(26653);
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
function ViewPlot(props) {
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var name = props.name, easing = props.easing, onClick = props.onClick;
    var path = react__rspack_import_1.useMemo(function() {
        var coords = [];
        var steps = 50;
        for(var step = 0; step <= steps; step++){
            var x = step / steps;
            var y = easing(x);
            coords.push("".concat(x * 100, ",").concat(100 - y * 100));
        }
        return "M".concat(coords.join("L"));
    }, [
        easing
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("button", {
        className: $.join(props.className, _Plot_module_css__rspack_import_3["default"].plot, onClick && _Plot_module_css__rspack_import_3["default"].clickable),
        style: style,
        onClick: function onClick1() {
            return onClick === null || onClick === void 0 ? void 0 : onClick(name !== null && name !== void 0 ? name : "");
        },
        children: [
            name && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("strong", {
                children: name
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                lineNumber: 37,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("svg", {
                viewBox: "-50 -50 200 200",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("rect", {
                        x: "0",
                        y: "0",
                        width: "100",
                        height: "100",
                        fill: "#111",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("path", {
                        stroke: "#666",
                        strokeWidth: ".5",
                        d: "M-100,0H300M-100,100H200M0,-100V300M100,-100V300"
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("path", {
                        d: path,
                        className: _Plot_module_css__rspack_import_3["default"].line
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("g", {
                        fill: "#fff",
                        stroke: "none",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("text", {
                                x: "0",
                                y: "100",
                                textAnchor: "end",
                                dominantBaseline: "hanging",
                                children: "0"
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("text", {
                                x: "100",
                                y: "0",
                                children: "1"
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/_EasingFunctionsDemo/Plot/Plot.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}


},
22265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPlot: () => (/* reexport safe */ _Plot__rspack_import_0.ViewPlot)
});
/* import */ var _Plot__rspack_import_0 = __webpack_require__(96006);



},
42961(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewEasingFunctionsDemo: () => (/* reexport safe */ _EasingFunctionsDemo__rspack_import_0.ViewEasingFunctionsDemo)
});
/* import */ var _EasingFunctionsDemo__rspack_import_0 = __webpack_require__(70644);



},
14152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _EasingFunctionsDemo__rspack_import_1 = __webpack_require__(42961);
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
        h1: "h1",
        p: "p",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Easing functions"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "An easing function is just a function that takes a number as input and returns another number.\nIt is mostly used for ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "animations"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
                        lineNumber: 6,
                        columnNumber: 23
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here is a list of simple easing functions:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_EasingFunctionsDemo__rspack_import_1.ViewEasingFunctionsDemo, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/easing/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdXRpbHNfZWFzaW5nX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3MuY2Q1NTdlZWE5ZDZhMDBmMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy91dGlscy9lYXNpbmcvX0Vhc2luZ0Z1bmN0aW9uc0RlbW8vRGVtby9EZW1vLm1vZHVsZS5jc3M/MmM0MSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvYXJ0aWNsZXMvdXRpbHMvZWFzaW5nL19FYXNpbmdGdW5jdGlvbnNEZW1vL0Vhc2luZ0Z1bmN0aW9uc0RlbW8ubW9kdWxlLmNzcz84NjkyIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy91dGlscy9lYXNpbmcvX0Vhc2luZ0Z1bmN0aW9uc0RlbW8vUGxvdC9QbG90Lm1vZHVsZS5jc3M/MjdhNCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdXRpbHMvZWFzaW5nL19FYXNpbmdGdW5jdGlvbnNEZW1vL0RlbW8vRGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3V0aWxzL2Vhc2luZy9fRWFzaW5nRnVuY3Rpb25zRGVtby9EZW1vL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9lYXNpbmcvX0Vhc2luZ0Z1bmN0aW9uc0RlbW8vRWFzaW5nRnVuY3Rpb25zRGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3V0aWxzL2Vhc2luZy9fRWFzaW5nRnVuY3Rpb25zRGVtby9QbG90L1Bsb3QudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9lYXNpbmcvX0Vhc2luZ0Z1bmN0aW9uc0RlbW8vUGxvdC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdXRpbHMvZWFzaW5nL19FYXNpbmdGdW5jdGlvbnNEZW1vL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9lYXNpbmcvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImRlbW9cIjpcInNyYy1hcHAtYXJ0aWNsZXMtdXRpbHMtZWFzaW5nLV9FYXNpbmdGdW5jdGlvbnNEZW1vLURlbW8tRGVtby1tb2R1bGVfZGVtb19sRUZtS0RcIixcImJhclwiOlwic3JjLWFwcC1hcnRpY2xlcy11dGlscy1lYXNpbmctX0Vhc2luZ0Z1bmN0aW9uc0RlbW8tRGVtby1EZW1vLW1vZHVsZV9iYXJfaGhLVnBkXCIsXCJwaW5cIjpcInNyYy1hcHAtYXJ0aWNsZXMtdXRpbHMtZWFzaW5nLV9FYXNpbmdGdW5jdGlvbnNEZW1vLURlbW8tRGVtby1tb2R1bGVfcGluX1VDUUlFSlwiLFwieVwiOlwic3JjLWFwcC1hcnRpY2xlcy11dGlscy1lYXNpbmctX0Vhc2luZ0Z1bmN0aW9uc0RlbW8tRGVtby1EZW1vLW1vZHVsZV95X2hZOUNxbVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZWFzaW5nRnVuY3Rpb25zRGVtb1wiOlwic3JjLWFwcC1hcnRpY2xlcy11dGlscy1lYXNpbmctX0Vhc2luZ0Z1bmN0aW9uc0RlbW8tRWFzaW5nRnVuY3Rpb25zRGVtby1tb2R1bGVfZWFzaW5nRnVuY3Rpb25zRGVtb19VSEhQa2pcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBsb3RcIjpcInNyYy1hcHAtYXJ0aWNsZXMtdXRpbHMtZWFzaW5nLV9FYXNpbmdGdW5jdGlvbnNEZW1vLVBsb3QtUGxvdC1tb2R1bGVfcGxvdF92dXFvTGJcIixcImxpbmVcIjpcInNyYy1hcHAtYXJ0aWNsZXMtdXRpbHMtZWFzaW5nLV9FYXNpbmdGdW5jdGlvbnNEZW1vLVBsb3QtUGxvdC1tb2R1bGVfbGluZV9kWGFselVcIixcImNsaWNrYWJsZVwiOlwic3JjLWFwcC1hcnRpY2xlcy11dGlscy1lYXNpbmctX0Vhc2luZ0Z1bmN0aW9uc0RlbW8tUGxvdC1QbG90LW1vZHVsZV9jbGlja2FibGVfRVZzUVdLXCJ9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyB0Z2RDYWxjTW9kdWxvLCBUZ2RFYXNpbmdGdW5jdGlvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vRGVtby5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld0RlbW9Qcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGVhc2luZzogVGdkRWFzaW5nRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdEZW1vKHByb3BzOiBWaWV3RGVtb1Byb3BzKSB7XG4gICAgY29uc3QgcmVmWSA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmUGluID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCB7IGVhc2luZyB9ID0gcHJvcHNcbiAgICBjb25zdCByYWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgICAgKHRpbWU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGluID0gcmVmUGluLmN1cnJlbnRcbiAgICAgICAgICAgIGNvbnN0IFkgPSByZWZZLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghcGluIHx8ICFZKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgeCA9IHRnZENhbGNNb2R1bG8odGltZSwgMCwgMjAwMCkgKiAwLjVlLTNcbiAgICAgICAgICAgIFkuc3R5bGUubGVmdCA9IGAkezEwMCAqIHh9JWBcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlYXNpbmcoeClcbiAgICAgICAgICAgIHBpbi5zdHlsZS5sZWZ0ID0gYCR7MTAwICogeX0lYFxuICAgICAgICB9LFxuICAgICAgICBbZWFzaW5nXSxcbiAgICApXG4gICAgdXNlUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZilcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLmRlbW8pfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5iYXJ9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnl9IHJlZj17cmVmWX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMucGlufSByZWY9e3JlZlBpbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2s6ICh0aW1lOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgcGxheWluZyA9IHRydWVcbiAgICAgICAgY29uc3QgYW5pbSA9ICh0aW1lOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmICghcGxheWluZykgcmV0dXJuXG5cbiAgICAgICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW0pXG4gICAgICAgICAgICBjYWxsYmFjayh0aW1lKVxuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW0pXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5aW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sIFtjYWxsYmFja10pXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9EZW1vXCJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge1xuICAgIHRnZEVhc2luZ0Z1bmN0aW9uVHJpYW5nbGUsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZUludmVyc2UsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25MaW5lYXIsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25MaW5lYXJJbnZlcnNlLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5TaW5lLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uT3V0U2luZSxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0U2luZSxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluUXVhZCxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbk91dFF1YWQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1YWQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25JbkN1YmljLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uT3V0Q3ViaWMsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEN1YmljLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5RdWFydCxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbk91dFF1YXJ0LFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWFydCxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluUXVpbnQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25PdXRRdWludCxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVpbnQsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25JbkV4cG8sXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25PdXRFeHBvLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRFeHBvLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5DaXJjLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uT3V0Q2lyYyxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q2lyYyxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbkluQmFjayxcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbk91dEJhY2ssXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEJhY2ssXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25JbkVsYXN0aWMsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25PdXRFbGFzdGljLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRFbGFzdGljLFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uSW5Cb3VuY2UsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25PdXRCb3VuY2UsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEJvdW5jZSxcbiAgICBUZ2RFYXNpbmdGdW5jdGlvbixcbiAgICB0Z2RFYXNpbmdDb21wb3NlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiwgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9FYXNpbmdGdW5jdGlvbnNEZW1vLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgVmlld1Bsb3QgfSBmcm9tIFwiLi9QbG90XCJcbmltcG9ydCB7IFZpZXdEZW1vIH0gZnJvbSBcIi4vRGVtb1wiXG5pbXBvcnQgQ29kZVZpZXdlclZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3RWFzaW5nRnVuY3Rpb25zRGVtb1Byb3BzID0gQ29tbW9uUHJvcHMgJiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld0Vhc2luZ0Z1bmN0aW9uc0RlbW8ocHJvcHM6IFZpZXdFYXNpbmdGdW5jdGlvbnNEZW1vUHJvcHMpIHtcbiAgICBjb25zdCBbc2VsZWN0ZWRFYXNpbmdGdW5jdGlvbiwgc2V0U2VsZWN0ZWRFYXNpbmdGdW5jdGlvbl0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShcIkxpbmVhclwiLCBcInNlbGVjdGVkRWFzaW5nRnVuY3Rpb25cIilcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGZsZXhXcmFwPVwid3JhcFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwcmU+dGdkRWFzaW5nRnVuY3Rpb257c2VsZWN0ZWRFYXNpbmdGdW5jdGlvbn08L3ByZT5cbiAgICAgICAgICAgICAgICA8Vmlld0RlbW8gZWFzaW5nPXtGVU5DVElPTlNbc2VsZWN0ZWRFYXNpbmdGdW5jdGlvbl19IC8+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4oXCJmdWxsLXdpZHRoXCIsIHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLmVhc2luZ0Z1bmN0aW9uc0RlbW8pfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhGVU5DVElPTlMpLm1hcCgobmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Bsb3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2Ake25hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZz17RlVOQ1RJT05TW25hbWVdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0U2VsZWN0ZWRFYXNpbmdGdW5jdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBZb3UgY2FuIGFsc28gPGI+Y29tcG9zZTwvYj4gbXVsdGlwbGUgZWFzaW5nIGZ1bmN0aW9ucyB0byBjcmVhdGUgYSBuZXcgb25lOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGZsZXhXcmFwPVwid3JhcFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyVmlld1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cInRzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2B0Z2RFYXNpbmdDb21wb3NlKFxuICAgIHRnZEVhc2luZ0Z1bmN0aW9uVHJpYW5nbGUsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25PdXRCYWNrXG4pYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGxvdCBlYXNpbmc9e3RnZEVhc2luZ0NvbXBvc2UoRlVOQ1RJT05TLlRyaWFuZ2xlLCBGVU5DVElPTlMuT3V0QmFjayl9IC8+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBmbGV4V3JhcD1cIndyYXBcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJ0c1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgdGdkRWFzaW5nQ29tcG9zZShcbiAgICB0Z2RFYXNpbmdGdW5jdGlvbk91dEJhY2ssXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZSxcbilgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQbG90IGVhc2luZz17dGdkRWFzaW5nQ29tcG9zZShGVU5DVElPTlMuT3V0QmFjaywgRlVOQ1RJT05TLlRyaWFuZ2xlKX0gLz5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmNvbnN0IEZVTkNUSU9OUzogUmVjb3JkPHN0cmluZywgVGdkRWFzaW5nRnVuY3Rpb24+ID0ge1xuICAgIExpbmVhcjogdGdkRWFzaW5nRnVuY3Rpb25MaW5lYXIsXG4gICAgTGluZWFySW52ZXJzZTogdGdkRWFzaW5nRnVuY3Rpb25MaW5lYXJJbnZlcnNlLFxuICAgIFRyaWFuZ2xlOiB0Z2RFYXNpbmdGdW5jdGlvblRyaWFuZ2xlLFxuICAgIFRyaWFuZ2xlSW52ZXJzZTogdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZUludmVyc2UsXG4gICAgSW5TaW5lOiB0Z2RFYXNpbmdGdW5jdGlvbkluU2luZSxcbiAgICBPdXRTaW5lOiB0Z2RFYXNpbmdGdW5jdGlvbk91dFNpbmUsXG4gICAgSW5PdXRTaW5lOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0U2luZSxcbiAgICBJblF1YWQ6IHRnZEVhc2luZ0Z1bmN0aW9uSW5RdWFkLFxuICAgIE91dFF1YWQ6IHRnZEVhc2luZ0Z1bmN0aW9uT3V0UXVhZCxcbiAgICBJbk91dFF1YWQ6IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWFkLFxuICAgIEluQ3ViaWM6IHRnZEVhc2luZ0Z1bmN0aW9uSW5DdWJpYyxcbiAgICBPdXRDdWJpYzogdGdkRWFzaW5nRnVuY3Rpb25PdXRDdWJpYyxcbiAgICBJbk91dEN1YmljOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q3ViaWMsXG4gICAgSW5RdWFydDogdGdkRWFzaW5nRnVuY3Rpb25JblF1YXJ0LFxuICAgIE91dFF1YXJ0OiB0Z2RFYXNpbmdGdW5jdGlvbk91dFF1YXJ0LFxuICAgIEluT3V0UXVhcnQ6IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWFydCxcbiAgICBJblF1aW50OiB0Z2RFYXNpbmdGdW5jdGlvbkluUXVpbnQsXG4gICAgT3V0UXVpbnQ6IHRnZEVhc2luZ0Z1bmN0aW9uT3V0UXVpbnQsXG4gICAgSW5PdXRRdWludDogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50LFxuICAgIEluRXhwbzogdGdkRWFzaW5nRnVuY3Rpb25JbkV4cG8sXG4gICAgT3V0RXhwbzogdGdkRWFzaW5nRnVuY3Rpb25PdXRFeHBvLFxuICAgIEluT3V0RXhwbzogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEV4cG8sXG4gICAgSW5DaXJjOiB0Z2RFYXNpbmdGdW5jdGlvbkluQ2lyYyxcbiAgICBPdXRDaXJjOiB0Z2RFYXNpbmdGdW5jdGlvbk91dENpcmMsXG4gICAgSW5PdXRDaXJjOiB0Z2RFYXNpbmdGdW5jdGlvbkluT3V0Q2lyYyxcbiAgICBJbkJhY2s6IHRnZEVhc2luZ0Z1bmN0aW9uSW5CYWNrLFxuICAgIE91dEJhY2s6IHRnZEVhc2luZ0Z1bmN0aW9uT3V0QmFjayxcbiAgICBJbk91dEJhY2s6IHRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRCYWNrLFxuICAgIEluRWxhc3RpYzogdGdkRWFzaW5nRnVuY3Rpb25JbkVsYXN0aWMsXG4gICAgT3V0RWxhc3RpYzogdGdkRWFzaW5nRnVuY3Rpb25PdXRFbGFzdGljLFxuICAgIEluT3V0RWxhc3RpYzogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEVsYXN0aWMsXG4gICAgSW5Cb3VuY2U6IHRnZEVhc2luZ0Z1bmN0aW9uSW5Cb3VuY2UsXG4gICAgT3V0Qm91bmNlOiB0Z2RFYXNpbmdGdW5jdGlvbk91dEJvdW5jZSxcbiAgICBJbk91dEJvdW5jZTogdGdkRWFzaW5nRnVuY3Rpb25Jbk91dEJvdW5jZSxcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyBUZ2RFYXNpbmdGdW5jdGlvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGxvdC5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1Bsb3RQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBlYXNpbmc6IFRnZEVhc2luZ0Z1bmN0aW9uXG4gICAgb25DbGljaz8obmFtZTogc3RyaW5nKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1Bsb3QocHJvcHM6IFZpZXdQbG90UHJvcHMpIHtcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCB7IG5hbWUsIGVhc2luZywgb25DbGljayB9ID0gcHJvcHNcbiAgICBjb25zdCBwYXRoID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3Jkczogc3RyaW5nW10gPSBbXVxuICAgICAgICBjb25zdCBzdGVwcyA9IDUwXG4gICAgICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDw9IHN0ZXBzOyBzdGVwKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBzdGVwIC8gc3RlcHNcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlYXNpbmcoeClcbiAgICAgICAgICAgIGNvb3Jkcy5wdXNoKGAke3ggKiAxMDB9LCR7MTAwIC0geSAqIDEwMH1gKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgTSR7Y29vcmRzLmpvaW4oXCJMXCIpfWBcbiAgICB9LCBbZWFzaW5nXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBsb3QsIG9uQ2xpY2sgJiYgU3R5bGVzLmNsaWNrYWJsZSl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrPy4obmFtZSA/PyBcIlwiKX0+XG4gICAgICAgICAgICB7bmFtZSAmJiA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPn1cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIi01MCAtNTAgMjAwIDIwMFwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGZpbGw9XCIjMTExXCIgc3Ryb2tlPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiIzY2NlwiIHN0cm9rZVdpZHRoPVwiLjVcIiBkPVwiTS0xMDAsMEgzMDBNLTEwMCwxMDBIMjAwTTAsLTEwMFYzMDBNMTAwLC0xMDBWMzAwXCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPXtwYXRofSBjbGFzc05hbWU9e1N0eWxlcy5saW5lfSAvPlxuICAgICAgICAgICAgICAgIDxnIGZpbGw9XCIjZmZmXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiMFwiIHk9XCIxMDBcIiB0ZXh0QW5jaG9yPVwiZW5kXCIgZG9taW5hbnRCYXNlbGluZT1cImhhbmdpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PVwiMTAwXCIgeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QbG90XCJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0Vhc2luZ0Z1bmN0aW9uc0RlbW9cIlxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lIiwic3R5bGVDb21tb24iLCJ0Z2RDYWxjTW9kdWxvIiwiU3R5bGVzIiwiJCIsIlZpZXdEZW1vIiwicHJvcHMiLCJyZWZZIiwicmVmUGluIiwiZWFzaW5nIiwicmFmIiwidGltZSIsInBpbiIsIlkiLCJ4IiwieSIsInVzZVJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0eWxlIiwiY2FsbGJhY2siLCJwbGF5aW5nIiwiYW5pbSIsImdsb2JhbFRoaXMiLCJ0Z2RFYXNpbmdGdW5jdGlvblRyaWFuZ2xlIiwidGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZUludmVyc2UiLCJ0Z2RFYXNpbmdGdW5jdGlvbkxpbmVhciIsInRnZEVhc2luZ0Z1bmN0aW9uTGluZWFySW52ZXJzZSIsInRnZEVhc2luZ0Z1bmN0aW9uSW5TaW5lIiwidGdkRWFzaW5nRnVuY3Rpb25PdXRTaW5lIiwidGdkRWFzaW5nRnVuY3Rpb25Jbk91dFNpbmUiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluUXVhZCIsInRnZEVhc2luZ0Z1bmN0aW9uT3V0UXVhZCIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRRdWFkIiwidGdkRWFzaW5nRnVuY3Rpb25JbkN1YmljIiwidGdkRWFzaW5nRnVuY3Rpb25PdXRDdWJpYyIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRDdWJpYyIsInRnZEVhc2luZ0Z1bmN0aW9uSW5RdWFydCIsInRnZEVhc2luZ0Z1bmN0aW9uT3V0UXVhcnQiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluT3V0UXVhcnQiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluUXVpbnQiLCJ0Z2RFYXNpbmdGdW5jdGlvbk91dFF1aW50IiwidGdkRWFzaW5nRnVuY3Rpb25Jbk91dFF1aW50IiwidGdkRWFzaW5nRnVuY3Rpb25JbkV4cG8iLCJ0Z2RFYXNpbmdGdW5jdGlvbk91dEV4cG8iLCJ0Z2RFYXNpbmdGdW5jdGlvbkluT3V0RXhwbyIsInRnZEVhc2luZ0Z1bmN0aW9uSW5DaXJjIiwidGdkRWFzaW5nRnVuY3Rpb25PdXRDaXJjIiwidGdkRWFzaW5nRnVuY3Rpb25Jbk91dENpcmMiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluQmFjayIsInRnZEVhc2luZ0Z1bmN0aW9uT3V0QmFjayIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRCYWNrIiwidGdkRWFzaW5nRnVuY3Rpb25JbkVsYXN0aWMiLCJ0Z2RFYXNpbmdGdW5jdGlvbk91dEVsYXN0aWMiLCJ0Z2RFYXNpbmdGdW5jdGlvbkluT3V0RWxhc3RpYyIsInRnZEVhc2luZ0Z1bmN0aW9uSW5Cb3VuY2UiLCJ0Z2RFYXNpbmdGdW5jdGlvbk91dEJvdW5jZSIsInRnZEVhc2luZ0Z1bmN0aW9uSW5PdXRCb3VuY2UiLCJ0Z2RFYXNpbmdDb21wb3NlIiwidXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJWaWV3UGFuZWwiLCJWaWV3UGxvdCIsIkNvZGVWaWV3ZXJWaWV3IiwiVmlld0Vhc2luZ0Z1bmN0aW9uc0RlbW8iLCJfdXNlTG9jYWxTdG9yYWdlU3RhdGUiLCJzZWxlY3RlZEVhc2luZ0Z1bmN0aW9uIiwic2V0U2VsZWN0ZWRFYXNpbmdGdW5jdGlvbiIsIkZVTkNUSU9OUyIsIk9iamVjdCIsIm5hbWUiLCJvbkNsaWNrIiwicGF0aCIsImNvb3JkcyIsInN0ZXBzIiwic3RlcCIsIm9uQ2xpY2sxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBWQUEwVixFOzs7Ozs7OztBQ0QxVztBQUNBLHNEQUFlLENBQUMsaUlBQWlJLEU7Ozs7Ozs7O0FDRGpKO0FBQ0Esc0RBQWUsQ0FBQyxxUkFBcVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R2UTtBQUVpQztBQUNFO0FBRTNCO0FBRXRDLElBQU1LLElBQUlKLCtDQUFnQjtBQU1u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