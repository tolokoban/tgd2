"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["default-src_components_demo_Tgd_index_ts"], {
84385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"Tgd":"src-components-demo-Tgd-tgd-module_Tgd_MESVmx","screen":"src-components-demo-Tgd-tgd-module_screen_NwIHvu","fullscreen":"src-components-demo-Tgd-tgd-module_fullscreen_aGa00I","relative":"src-components-demo-Tgd-tgd-module_relative_IctJ7L","overlay":"src-components-demo-Tgd-tgd-module_overlay_w7EXka","loading":"src-components-demo-Tgd-tgd-module_loading_c4TMDj","canvas":"src-components-demo-Tgd-tgd-module_canvas_OvO7uX","gizmo":"src-components-demo-Tgd-tgd-module_gizmo_r0e5Ca","actions":"src-components-demo-Tgd-tgd-module_actions_OBhA17","enabled":"src-components-demo-Tgd-tgd-module_enabled_dxtnW6","error":"src-components-demo-Tgd-tgd-module_error_qgsDNU"});

},
15423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"option":"src-components-settings-Option-Option-module_option_zvWxHQ"});

},
70743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"settings":"src-components-settings-settings-module_settings_O3eUw2","show":"src-components-settings-settings-module_show_fh6L2a","hide":"src-components-settings-settings-module_hide_LFyaXn"});

},
88223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"slider":"src-components-settings-slider-slider-module_slider_u8Haym"});

},
43475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _tgd__rspack_import_0["default"])
});
/* import */ var _tgd__rspack_import_0 = __webpack_require__(86332);




},
86332(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Tgd)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _components_settings__rspack_import_4 = __webpack_require__(72485);
/* import */ var _Spinner__rspack_import_5 = __webpack_require__(92793);
/* import */ var _tgd_module_css__rspack_import_6 = __webpack_require__(84385);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}







function Tgd(param) {
    var className = param.className, options = param.options, onReady = param.onReady, _param_gizmo = param.gizmo, gizmo = _param_gizmo === void 0 ? false : _param_gizmo, _param_width = param.width, width = _param_width === void 0 ? "640px" : _param_width, _param_height = param.height, height = _param_height === void 0 ? "480px" : _param_height, _param_noBorder = param.noBorder, noBorder = _param_noBorder === void 0 ? false : _param_noBorder, assets = param.assets, controller = param.controller, settings = param.settings, children = param.children, _param_fullscreen = param.fullscreen, fullscreen = _param_fullscreen === void 0 ? false : _param_fullscreen;
    var refUpdateSettings = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(settings), 2), settingValues = _React_useState[0], setSettingValues = _React_useState[1];
    var reduceSettings = react__rspack_import_3_default().useCallback(function() {
        if (!settingValues) return {};
        var values = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(settingValues)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                values[key] = settingValues[key].value;
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
        return values;
    }, [
        settingValues
    ]);
    react__rspack_import_3_default().useEffect(function() {
        if (settingValues) {
            var _refUpdateSettings_current;
            var values = {};
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.keys(settingValues)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    values[key] = settingValues[key].value;
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
            (_refUpdateSettings_current = refUpdateSettings.current) === null || _refUpdateSettings_current === void 0 ? void 0 : _refUpdateSettings_current.call(refUpdateSettings, reduceSettings());
        }
    }, [
        settingValues,
        reduceSettings
    ]);
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(null), 2), error = _React_useState1[0], setError = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_3_default().useState(true), 2), landscape = _React_useState2[0], setLandscape = _React_useState2[1];
    var _React_useState3 = _sliced_to_array(react__rspack_import_3_default().useState(false), 2), fullscreenAvailable = _React_useState3[0], setFullscreenAvailable = _React_useState3[1];
    var refContext = react__rspack_import_3_default().useRef(null);
    var refCanvas = react__rspack_import_3_default().useRef(null);
    var refScreen = react__rspack_import_3_default().useRef(null);
    var refOrbiter = react__rspack_import_3_default().useRef(null);
    var _React_useState4 = _sliced_to_array(react__rspack_import_3_default().useState(true), 2), loading = _React_useState4[0], setLoading = _React_useState4[1];
    var mountCanvas = function mountCanvas(canvas) {
        if (!canvas) return;
        if (refCanvas.current) return;
        refCanvas.current = canvas;
        if (gizmo && options) options.alpha = false;
        var context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas, _object_spread({
            alpha: false
        }, options));
        refContext.current = context;
        setLoading(true);
        loadAssets(assets).then(function(loadedAssets) {
            try {
                var _refUpdateSettings_current;
                if (controller) {
                    var orbiter = new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, _object_spread({
                        debug: true,
                        inertiaOrbit: 1000,
                        inertiaZoom: 500,
                        inertiaPanning: 500
                    }, controller));
                    refOrbiter.current = orbiter;
                }
                refUpdateSettings.current = onReady(context, loadedAssets);
                (_refUpdateSettings_current = refUpdateSettings.current) === null || _refUpdateSettings_current === void 0 ? void 0 : _refUpdateSettings_current.call(refUpdateSettings, reduceSettings());
                if (gizmo) {
                    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterGizmo(context));
                }
                context.debugHierarchy();
                context.paint();
            } catch (ex) {
                setError(_instanceof(ex, Error) ? ex.message : JSON.stringify(ex));
                console.error(ex);
            }
            setLoading(false);
        }).catch(function(ex) {
            console.error("Unable to initialize the scene!", ex);
            setLoading(false);
        });
    };
    var handleFullscreen = function handleFullscreen() {
        var div = refScreen.current;
        if (!div) return;
        div.requestFullscreen();
    };
    var handleScreenshot = function handleScreenshot() {
        var context = refContext.current;
        if (!context) return;
        context.takeSnapshot().then(function(img) {
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            a.href = img.src;
            a.download = "snapshot.png";
            a.click();
            window.setTimeout(function() {
                return document.body.removeChild(a);
            }, 30000);
        });
    };
    var handleSetCameraRestPosition = function handleSetCameraRestPosition() {
        var orbiter = refOrbiter.current;
        var context = refContext.current;
        if (!context || !orbiter) return;
        orbiter.cameraInitialState = context.camera.getCurrentState();
        orbiter.zoom = 1;
    };
    var handleResetCamera = function handleResetCamera() {
        var _controller_inertiaOrbit;
        var orbiter = refOrbiter.current;
        if (!orbiter || !controller) return;
        orbiter.reset(((_controller_inertiaOrbit = controller.inertiaOrbit) !== null && _controller_inertiaOrbit !== void 0 ? _controller_inertiaOrbit : 500) * 1e-3);
    };
    react__rspack_import_3_default().useEffect(function() {
        var canvas = refCanvas.current;
        var scene = refContext.current;
        if (!canvas || !scene) return;
        var observer = new ResizeObserver(function() {
            return scene.paint();
        });
        observer.observe(canvas);
        if (!canvas.requestFullscreen) {
            canvas.requestFullscreen = canvas["webkitRequestFullscreen"];
        }
        setFullscreenAvailable(Boolean(canvas.requestFullscreen));
        return function() {
            return observer.unobserve(canvas);
        };
    }, [
        refContext.current,
        refCanvas.current
    ]);
    if (noBorder || fullscreen) {
        var style = fullscreen ? {} : {
            width: landscape ? width : height,
            height: landscape ? height : width
        };
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
            ref: refScreen,
            className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].screen, fullscreen && _tgd_module_css__rspack_import_6["default"].fullscreen),
            style: style,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
                    className: _tgd_module_css__rspack_import_6["default"].canvas,
                    ref: mountCanvas
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 205,
                    columnNumber: 5
                }, this),
                settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                    values: settingValues,
                    onChange: setSettingValues
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 207,
                    columnNumber: 6
                }, this),
                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    className: _tgd_module_css__rspack_import_6["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 209,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
            lineNumber: 197,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(className, _tgd_module_css__rspack_import_6["default"].Tgd),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].actions, !loading && _tgd_module_css__rspack_import_6["default"].enabled),
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Switch landscape / portrait",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconOrientation, {
                            onClick: function onClick() {
                                return setLandscape(!landscape);
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 223,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 222,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Take a snapshot of the scene",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconSnapshot, {
                            onClick: handleScreenshot
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 226,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 225,
                        columnNumber: 5
                    }, this),
                    fullscreenAvailable && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Go fullscreen",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                            onClick: handleFullscreen
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 230,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 229,
                        columnNumber: 6
                    }, this),
                    controller && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Save current camera position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconPin, {
                                    onClick: handleSetCameraRestPosition
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 236,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 235,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Restore camera to previously saved position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconCenter, {
                                    onClick: handleResetCamera
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 239,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 238,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 216,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: _tgd_module_css__rspack_import_6["default"].relative,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        ref: refScreen,
                        className: _tgd_module_css__rspack_import_6["default"].screen,
                        style: {
                            width: landscape ? width : height,
                            height: landscape ? height : width
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
                                className: _tgd_module_css__rspack_import_6["default"].canvas,
                                ref: mountCanvas
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 253,
                                columnNumber: 6
                            }, this),
                            settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                                values: settingValues,
                                onChange: setSettingValues
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 255,
                                columnNumber: 7
                            }, this),
                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                className: _tgd_module_css__rspack_import_6["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 257,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 245,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Spinner__rspack_import_5["default"], {}, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 265,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 259,
                        columnNumber: 5
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 244,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
        lineNumber: 215,
        columnNumber: 3
    }, this);
}
function loadAssets() {
    return _async_to_generator(function() {
        var _ref, glb, data, text, image, assets, loaders;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ref = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {}, glb = _ref.glb, data = _ref.data, text = _ref.text, image = _ref.image;
                    assets = {
                        glb: {},
                        data: {},
                        text: {},
                        image: {}
                    };
                    loaders = [];
                    if (image) {
                        Object.keys(image).forEach(function(key) {
                            loaders.push(function() {
                                return _async_to_generator(function() {
                                    var url, asset;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                url = image[key];
                                                console.log("Loading image:", url);
                                                return [
                                                    4,
                                                    (0,_tolokoban_tgd__rspack_import_1.tgdLoadImage)(url)
                                                ];
                                            case 1:
                                                asset = _state.sent();
                                                if (asset) assets.image[key] = asset;
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            });
                        });
                    }
                    if (glb) {
                        Object.keys(glb).forEach(function(key) {
                            loaders.push(function() {
                                return _async_to_generator(function() {
                                    var url, asset;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                url = glb[key];
                                                console.log("Loading GLB:", url);
                                                return [
                                                    4,
                                                    (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url)
                                                ];
                                            case 1:
                                                asset = _state.sent();
                                                if (asset) assets.glb[key] = asset;
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            });
                        });
                    }
                    if (data) {
                        Object.keys(data).forEach(function(key) {
                            loaders.push(function() {
                                return _async_to_generator(function() {
                                    var url, asset;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                url = data[key];
                                                return [
                                                    4,
                                                    (0,_tolokoban_tgd__rspack_import_1.tgdLoadArrayBuffer)(url)
                                                ];
                                            case 1:
                                                asset = _state.sent();
                                                if (asset) assets.data[key] = asset;
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            });
                        });
                    }
                    if (text) {
                        Object.keys(text).forEach(function(key) {
                            loaders.push(function() {
                                return _async_to_generator(function() {
                                    var url, asset;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                url = text[key];
                                                return [
                                                    4,
                                                    (0,_tolokoban_tgd__rspack_import_1.tgdLoadText)(url)
                                                ];
                                            case 1:
                                                asset = _state.sent();
                                                if (asset) assets.text[key] = asset;
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                })();
                            });
                        });
                    }
                    return [
                        4,
                        Promise.all(loaders.map(function(loader) {
                            return loader();
                        }))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        assets
                    ];
            }
        });
    }).apply(this, arguments);
}


},
40842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Option: () => (Option)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _Option_module_css__rspack_import_2 = __webpack_require__(15423);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);




function Option(param) {
    var _this = this;
    var label = param.label, value = param.value, onChange = param.onChange, step = param.step;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _Option_module_css__rspack_import_2["default"].option,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewLabel, {
                children: label
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                lineNumber: 16,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewOptions, {
                value: "".concat(value),
                onChange: function onChange1(v) {
                    return onChange(parseFloat(v));
                },
                children: step.map(function(caption, index) {
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: caption
                    }, index, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                        lineNumber: 19,
                        columnNumber: 6
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                lineNumber: 17,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
}


},
94599(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Option: () => (/* reexport safe */ _Option__rspack_import_0.Option)
});
/* import */ var _Option__rspack_import_0 = __webpack_require__(40842);



},
72485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Settings: () => (/* reexport safe */ _settings__rspack_import_0.Settings)
});
/* import */ var _settings__rspack_import_0 = __webpack_require__(22460);



},
22460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Settings: () => (Settings)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _Option__rspack_import_3 = __webpack_require__(94599);
/* import */ var _settings_module_css__rspack_import_4 = __webpack_require__(70743);
/* import */ var _slider__rspack_import_5 = __webpack_require__(87491);
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






function Settings(param) {
    var _this = this;
    var className = param.className, values = param.values, onChange = param.onChange;
    var _React_useState = _sliced_to_array(react__rspack_import_2_default().useState(false), 2), show = _React_useState[0], setShow = _React_useState[1];
    var update = function update(key, value) {
        var newValues = _object_spread_props(_object_spread({}, values), _define_property({}, key, _object_spread_props(_object_spread({}, values[key]), {
            value: value
        })));
        onChange(newValues);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _tolokoban_ui__rspack_import_1.Theme.classNames.join(className, _settings_module_css__rspack_import_4["default"].settings, show ? _settings_module_css__rspack_import_4["default"].show : _settings_module_css__rspack_import_4["default"].hide),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("button", {
                type: "button",
                onClick: function onClick() {
                    return setShow(!show);
                },
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("svg", {
                    style: {
                        width: "1.5em",
                        height: "1.5em"
                    },
                    viewBox: "0 0 24 24",
                    preserveAspectRatio: "xMidYMid meet",
                    strokeWidth: "1.5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("title", {
                            children: "Settings"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                            lineNumber: 56,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("path", {
                            d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
                            stroke: "none",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                            lineNumber: 57,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                    lineNumber: 50,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: Object.keys(values).map(function(key) {
                    var _item_min, _item_max, _item_step;
                    var item = values[key];
                    if (!item) return null;
                    if (Array.isArray(item.step)) {
                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Option__rspack_import_3.Option, {
                            label: item.label,
                            step: item.step,
                            value: item.value,
                            onChange: function onChange(value) {
                                return update(key, value);
                            }
                        }, key, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                            lineNumber: 71,
                            columnNumber: 8
                        }, _this);
                    }
                    var min = (_item_min = item.min) !== null && _item_min !== void 0 ? _item_min : 0;
                    var max = (_item_max = item.max) !== null && _item_max !== void 0 ? _item_max : 1;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_slider__rspack_import_5["default"], {
                        label: item.label,
                        min: min,
                        max: max,
                        step: (_item_step = item.step) !== null && _item_step !== void 0 ? _item_step : (max - min) / 100,
                        value: item.value,
                        onChange: function onChange(value) {
                            return update(key, value);
                        }
                    }, key, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                        lineNumber: 84,
                        columnNumber: 7
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 64,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, this);
}


},
87491(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _slider__rspack_import_0["default"])
});
/* import */ var _slider__rspack_import_0 = __webpack_require__(28798);



},
28798(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Slider)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _slider_module_css__rspack_import_2 = __webpack_require__(88223);



function Slider(param) {
    var className = param.className, label = param.label, min = param.min, max = param.max, step = param.step, value = param.value, onChange = param.onChange;
    var handleChange = function handleChange(event) {
        var newValue = parseFloat(event.target.value);
        onChange(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _tolokoban_ui__rspack_import_1.Theme.classNames.join(className, _slider_module_css__rspack_import_2["default"].slider),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: label
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 33,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("strong", {
                            children: value.toFixed(2)
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                            lineNumber: 35,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 34,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("input", {
                type: "range",
                step: step,
                min: min,
                max: max,
                value: value,
                onChange: handleChange
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                lineNumber: 38,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuNTQxMjY2ZDFjNmQwNTU4Zi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL1RnZC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRnZFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9UZ2RfTUVTVm14XCIsXCJzY3JlZW5cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfc2NyZWVuX053SUh2dVwiLFwiZnVsbHNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9mdWxsc2NyZWVuX2FHYTAwSVwiLFwicmVsYXRpdmVcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfcmVsYXRpdmVfSWN0SjdMXCIsXCJvdmVybGF5XCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX292ZXJsYXlfdzdFWGthXCIsXCJsb2FkaW5nXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2xvYWRpbmdfYzRUTURqXCIsXCJjYW52YXNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfY2FudmFzX092Tzd1WFwiLFwiZ2l6bW9cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZ2l6bW9fcjBlNUNhXCIsXCJhY3Rpb25zXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2FjdGlvbnNfT0JoQTE3XCIsXCJlbmFibGVkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2VuYWJsZWRfZHh0blc2XCIsXCJlcnJvclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9lcnJvcl9xZ3NETlVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm9wdGlvblwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3MtT3B0aW9uLU9wdGlvbi1tb2R1bGVfb3B0aW9uX3p2V3hIUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGdkXCI7XG4iLCJpbXBvcnQge1xuXHRUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0T3B0aW9ucyxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2RQYWludGVyR2l6bW8sXG5cdHRnZExvYWRBcnJheUJ1ZmZlcixcblx0dGdkTG9hZEdsYixcblx0dGdkTG9hZEltYWdlLFxuXHR0Z2RMb2FkVGV4dCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7XG5cdEljb25DZW50ZXIsXG5cdEljb25GdWxsc2NyZWVuLFxuXHRJY29uT3JpZW50YXRpb24sXG5cdEljb25QaW4sXG5cdEljb25TbmFwc2hvdCxcblx0VGhlbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCwgeyB0eXBlIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL1NwaW5uZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90Z2QubW9kdWxlLmNzc1wiXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG5cdGltYWdlOiBSZWNvcmQ8c3RyaW5nLCBIVE1MSW1hZ2VFbGVtZW50PlxuXHRnbGI6IFJlY29yZDxzdHJpbmcsIFRnZERhdGFHbGI+XG5cdGRhdGE6IFJlY29yZDxzdHJpbmcsIEFycmF5QnVmZmVyPlxuXHR0ZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbnR5cGUgQXNzZXRzVG9Mb2FkID0ge1xuXHRba2V5IGluIGtleW9mIEFzc2V0c106IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuaW50ZXJmYWNlIFRnZFByb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG5cdGNsYXNzTmFtZT86IHN0cmluZ1xuXHRvcHRpb25zPzogV2ViR0xDb250ZXh0QXR0cmlidXRlc1xuXHRvblJlYWR5KFxuXHRcdHNjZW5lOiBUZ2RDb250ZXh0LFxuXHRcdGFzc2V0czogQXNzZXRzLFxuXHQpOiB2b2lkIHwgdW5kZWZpbmVkIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpXG5cdHdpZHRoPzogc3RyaW5nXG5cdGhlaWdodD86IHN0cmluZ1xuXHRub0JvcmRlcj86IGJvb2xlYW5cblx0Z2l6bW8/OiBib29sZWFuXG5cdGFzc2V0cz86IFBhcnRpYWw8QXNzZXRzVG9Mb2FkPlxuXHRjb250cm9sbGVyPzogUGFydGlhbDxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXRPcHRpb25zPlxuXHRjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuXHRzZXR0aW5ncz86IFRcblx0ZnVsbHNjcmVlbj86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuXHRjbGFzc05hbWUsXG5cdG9wdGlvbnMsXG5cdG9uUmVhZHksXG5cdGdpem1vID0gZmFsc2UsXG5cdHdpZHRoID0gXCI2NDBweFwiLFxuXHRoZWlnaHQgPSBcIjQ4MHB4XCIsXG5cdG5vQm9yZGVyID0gZmFsc2UsXG5cdGFzc2V0cyxcblx0Y29udHJvbGxlcixcblx0c2V0dGluZ3MsXG5cdGNoaWxkcmVuLFxuXHRmdWxsc2NyZWVuID0gZmFsc2UsXG59OiBUZ2RQcm9wczxUPikge1xuXHRjb25zdCByZWZVcGRhdGVTZXR0aW5ncyA9IFJlYWN0LnVzZVJlZjxcblx0XHR2b2lkIHwgbnVsbCB8ICgoc2V0dGluZ3M6IFJlY29yZDxrZXlvZiBULCBudW1iZXI+KSA9PiB2b2lkKVxuXHQ+KG51bGwpXG5cdGNvbnN0IFtzZXR0aW5nVmFsdWVzLCBzZXRTZXR0aW5nVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHNldHRpbmdzKVxuXHRjb25zdCByZWR1Y2VTZXR0aW5ncyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPiA9PiB7XG5cdFx0aWYgKCFzZXR0aW5nVmFsdWVzKSByZXR1cm4ge30gYXMgUmVjb3JkPGtleW9mIFQsIG51bWJlcj5cblx0XHRjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmdWYWx1ZXMpKSB7XG5cdFx0XHR2YWx1ZXNba2V5XSA9IHNldHRpbmdWYWx1ZXNba2V5XS52YWx1ZVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVzIGFzIFJlY29yZDxrZXlvZiBULCBudW1iZXI+XG5cdH0sIFtzZXR0aW5nVmFsdWVzXSlcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc2V0dGluZ1ZhbHVlcykge1xuXHRcdFx0Y29uc3QgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmdWYWx1ZXMpKSB7XG5cdFx0XHRcdHZhbHVlc1trZXldID0gc2V0dGluZ1ZhbHVlc1trZXldLnZhbHVlXG5cdFx0XHR9XG5cdFx0XHRyZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50Py4ocmVkdWNlU2V0dGluZ3MoKSlcblx0XHR9XG5cdH0sIFtzZXR0aW5nVmFsdWVzLCByZWR1Y2VTZXR0aW5nc10pXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblx0Y29uc3QgW2xhbmRzY2FwZSwgc2V0TGFuZHNjYXBlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IFtmdWxsc2NyZWVuQXZhaWxhYmxlLCBzZXRGdWxsc2NyZWVuQXZhaWxhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZDYW52YXMgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZTY3JlZW4gPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZPcmJpdGVyID0gUmVhY3QudXNlUmVmPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCB8IG51bGw+KG51bGwpXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IG1vdW50Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcblx0XHRpZiAoIWNhbnZhcykgcmV0dXJuXG5cblx0XHRpZiAocmVmQ2FudmFzLmN1cnJlbnQpIHJldHVyblxuXG5cdFx0cmVmQ2FudmFzLmN1cnJlbnQgPSBjYW52YXNcblx0XHRpZiAoZ2l6bW8gJiYgb3B0aW9ucykgb3B0aW9ucy5hbHBoYSA9IGZhbHNlXG5cdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywge1xuXHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHR9KVxuXHRcdHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcblx0XHRzZXRMb2FkaW5nKHRydWUpXG5cdFx0bG9hZEFzc2V0cyhhc3NldHMpXG5cdFx0XHQudGhlbigobG9hZGVkQXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY29udHJvbGxlcikge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdFx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhWm9vbTogNTAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhUGFubmluZzogNTAwLFxuXHRcdFx0XHRcdFx0XHQuLi5jb250cm9sbGVyLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHJlZk9yYml0ZXIuY3VycmVudCA9IG9yYml0ZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudCA9IG9uUmVhZHkoY29udGV4dCwgbG9hZGVkQXNzZXRzKVxuXHRcdFx0XHRcdHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQ/LihyZWR1Y2VTZXR0aW5ncygpKVxuXHRcdFx0XHRcdGlmIChnaXptbykge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5hZGQobmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGV4dC5kZWJ1Z0hpZXJhcmNoeSgpXG5cdFx0XHRcdFx0Y29udGV4dC5wYWludCgpXG5cdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0c2V0RXJyb3IoZXggaW5zdGFuY2VvZiBFcnJvciA/IGV4Lm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShleCkpXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihleClcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzY2VuZSFcIiwgZXgpXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0XHR9KVxuXHR9XG5cdGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGl2ID0gcmVmU2NyZWVuLmN1cnJlbnRcblx0XHRpZiAoIWRpdikgcmV0dXJuXG5cblx0XHRkaXYucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHR9XG5cdGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuXHRcdGlmICghY29udGV4dCkgcmV0dXJuXG5cblx0XHRjb250ZXh0LnRha2VTbmFwc2hvdCgpLnRoZW4oKGltZykgPT4ge1xuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG5cdFx0XHRhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuXHRcdFx0YS5ocmVmID0gaW1nLnNyY1xuXHRcdFx0YS5kb3dubG9hZCA9IFwic25hcHNob3QucG5nXCJcblx0XHRcdGEuY2xpY2soKVxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKSwgMzAwMDApXG5cdFx0fSlcblx0fVxuXHRjb25zdCBoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb24gPSAoKSA9PiB7XG5cdFx0Y29uc3Qgb3JiaXRlciA9IHJlZk9yYml0ZXIuY3VycmVudFxuXHRcdGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcblx0XHRpZiAoIWNvbnRleHQgfHwgIW9yYml0ZXIpIHJldHVyblxuXG5cdFx0b3JiaXRlci5jYW1lcmFJbml0aWFsU3RhdGUgPSBjb250ZXh0LmNhbWVyYS5nZXRDdXJyZW50U3RhdGUoKVxuXHRcdG9yYml0ZXIuem9vbSA9IDFcblx0fVxuXHRjb25zdCBoYW5kbGVSZXNldENhbWVyYSA9ICgpID0+IHtcblx0XHRjb25zdCBvcmJpdGVyID0gcmVmT3JiaXRlci5jdXJyZW50XG5cdFx0aWYgKCFvcmJpdGVyIHx8ICFjb250cm9sbGVyKSByZXR1cm5cblxuXHRcdG9yYml0ZXIucmVzZXQoKGNvbnRyb2xsZXIuaW5lcnRpYU9yYml0ID8/IDUwMCkgKiAxZS0zKVxuXHR9XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgY2FudmFzID0gcmVmQ2FudmFzLmN1cnJlbnRcblx0XHRjb25zdCBzY2VuZSA9IHJlZkNvbnRleHQuY3VycmVudFxuXHRcdGlmICghY2FudmFzIHx8ICFzY2VuZSkgcmV0dXJuXG5cblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBzY2VuZS5wYWludCgpKVxuXHRcdG9ic2VydmVyLm9ic2VydmUoY2FudmFzKVxuXHRcdGlmICghY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG5cdFx0XHRjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4gPSAoY2FudmFzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW1xuXHRcdFx0XHRcIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuXCJcblx0XHRcdF0gYXMgKG9wdGlvbnM/OiBGdWxsc2NyZWVuT3B0aW9ucykgPT4gUHJvbWlzZTx2b2lkPlxuXHRcdH1cblx0XHRzZXRGdWxsc2NyZWVuQXZhaWxhYmxlKEJvb2xlYW4oY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKSlcblx0XHRyZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGNhbnZhcylcblx0fSwgW3JlZkNvbnRleHQuY3VycmVudCwgcmVmQ2FudmFzLmN1cnJlbnRdKVxuXG5cdGlmIChub0JvcmRlciB8fCBmdWxsc2NyZWVuKSB7XG5cdFx0Y29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSBmdWxsc2NyZWVuXG5cdFx0XHQ/IHt9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHR3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG5cdFx0XHRcdFx0aGVpZ2h0OiBsYW5kc2NhcGUgPyBoZWlnaHQgOiB3aWR0aCxcblx0XHRcdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHJlZj17cmVmU2NyZWVufVxuXHRcdFx0XHRjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihcblx0XHRcdFx0XHRzdHlsZXMuc2NyZWVuLFxuXHRcdFx0XHRcdGZ1bGxzY3JlZW4gJiYgc3R5bGVzLmZ1bGxzY3JlZW4sXG5cdFx0XHRcdCl9XG5cdFx0XHRcdHN0eWxlPXtzdHlsZX1cblx0XHRcdD5cblx0XHRcdFx0PGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IHJlZj17bW91bnRDYW52YXN9IC8+XG5cdFx0XHRcdHtzZXR0aW5nVmFsdWVzICYmIChcblx0XHRcdFx0XHQ8U2V0dGluZ3M8VD4gdmFsdWVzPXtzZXR0aW5nVmFsdWVzfSBvbkNoYW5nZT17c2V0U2V0dGluZ1ZhbHVlc30gLz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuVGdkKX0+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKFxuXHRcdFx0XHRcdHN0eWxlcy5hY3Rpb25zLFxuXHRcdFx0XHRcdCFsb2FkaW5nICYmIHN0eWxlcy5lbmFibGVkLFxuXHRcdFx0XHQpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IHRpdGxlPVwiU3dpdGNoIGxhbmRzY2FwZSAvIHBvcnRyYWl0XCI+XG5cdFx0XHRcdFx0PEljb25PcmllbnRhdGlvbiBvbkNsaWNrPXsoKSA9PiBzZXRMYW5kc2NhcGUoIWxhbmRzY2FwZSl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IHRpdGxlPVwiVGFrZSBhIHNuYXBzaG90IG9mIHRoZSBzY2VuZVwiPlxuXHRcdFx0XHRcdDxJY29uU25hcHNob3Qgb25DbGljaz17aGFuZGxlU2NyZWVuc2hvdH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtmdWxsc2NyZWVuQXZhaWxhYmxlICYmIChcblx0XHRcdFx0XHQ8ZGl2IHRpdGxlPVwiR28gZnVsbHNjcmVlblwiPlxuXHRcdFx0XHRcdFx0PEljb25GdWxsc2NyZWVuIG9uQ2xpY2s9e2hhbmRsZUZ1bGxzY3JlZW59IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtjb250cm9sbGVyICYmIChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGRpdiB0aXRsZT1cIlNhdmUgY3VycmVudCBjYW1lcmEgcG9zaXRpb25cIj5cblx0XHRcdFx0XHRcdFx0PEljb25QaW4gb25DbGljaz17aGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9ufSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHRpdGxlPVwiUmVzdG9yZSBjYW1lcmEgdG8gcHJldmlvdXNseSBzYXZlZCBwb3NpdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8SWNvbkNlbnRlciBvbkNsaWNrPXtoYW5kbGVSZXNldENhbWVyYX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17cmVmU2NyZWVufVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn1cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0d2lkdGg6IGxhbmRzY2FwZSA/IHdpZHRoIDogaGVpZ2h0LFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBsYW5kc2NhcGUgPyBoZWlnaHQgOiB3aWR0aCxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IHJlZj17bW91bnRDYW52YXN9IC8+XG5cdFx0XHRcdFx0e3NldHRpbmdWYWx1ZXMgJiYgKFxuXHRcdFx0XHRcdFx0PFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihcblx0XHRcdFx0XHRcdHN0eWxlcy5vdmVybGF5LFxuXHRcdFx0XHRcdFx0bG9hZGluZyAmJiBzdHlsZXMubG9hZGluZyxcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFNwaW5uZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBc3NldHMoe1xuXHRnbGIsXG5cdGRhdGEsXG5cdHRleHQsXG5cdGltYWdlLFxufTogUGFydGlhbDxBc3NldHNUb0xvYWQ+ID0ge30pOiBQcm9taXNlPEFzc2V0cz4ge1xuXHRjb25zdCBhc3NldHM6IEFzc2V0cyA9IHtcblx0XHRnbGI6IHt9LFxuXHRcdGRhdGE6IHt9LFxuXHRcdHRleHQ6IHt9LFxuXHRcdGltYWdlOiB7fSxcblx0fVxuXHRjb25zdCBsb2FkZXJzOiBBcnJheTwoKSA9PiBQcm9taXNlPHZvaWQ+PiA9IFtdXG5cdGlmIChpbWFnZSkge1xuXHRcdE9iamVjdC5rZXlzKGltYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGltYWdlW2tleV1cblx0XHRcdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nIGltYWdlOlwiLCB1cmwpXG5cdFx0XHRcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEltYWdlKHVybClcblx0XHRcdFx0aWYgKGFzc2V0KSBhc3NldHMuaW1hZ2Vba2V5XSA9IGFzc2V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0aWYgKGdsYikge1xuXHRcdE9iamVjdC5rZXlzKGdsYikuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBnbGJba2V5XVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgR0xCOlwiLCB1cmwpXG5cdFx0XHRcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXG5cdFx0XHRcdGlmIChhc3NldCkgYXNzZXRzLmdsYltrZXldID0gYXNzZXRcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRpZiAoZGF0YSkge1xuXHRcdE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0bG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gZGF0YVtrZXldXG5cdFx0XHRcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcblx0XHRcdFx0aWYgKGFzc2V0KSBhc3NldHMuZGF0YVtrZXldID0gYXNzZXRcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRpZiAodGV4dCkge1xuXHRcdE9iamVjdC5rZXlzKHRleHQpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0bG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gdGV4dFtrZXldXG5cdFx0XHRcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZFRleHQodXJsKVxuXHRcdFx0XHRpZiAoYXNzZXQpIGFzc2V0cy50ZXh0W2tleV0gPSBhc3NldFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdGF3YWl0IFByb21pc2UuYWxsKGxvYWRlcnMubWFwKChsb2FkZXIpID0+IGxvYWRlcigpKSlcblx0cmV0dXJuIGFzc2V0c1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vT3B0aW9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFZpZXdMYWJlbCwgVmlld09wdGlvbnMgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5leHBvcnQgdHlwZSBPcHRpb25Qcm9wcyA9IHtcblx0bGFiZWw6IHN0cmluZztcblx0dmFsdWU6IG51bWJlcjtcblx0b25DaGFuZ2UodmFsdWU6IG51bWJlcik6IHZvaWQ7XG5cdHN0ZXA6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbih7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UsIHN0ZXAgfTogT3B0aW9uUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm9wdGlvbn0+XG5cdFx0XHQ8Vmlld0xhYmVsPntsYWJlbH08L1ZpZXdMYWJlbD5cblx0XHRcdDxWaWV3T3B0aW9ucyB2YWx1ZT17YCR7dmFsdWV9YH0gb25DaGFuZ2U9eyh2KSA9PiBvbkNoYW5nZShwYXJzZUZsb2F0KHYpKX0+XG5cdFx0XHRcdHtzdGVwLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PntjYXB0aW9ufTwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvVmlld09wdGlvbnM+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9PcHRpb25cIjtcbiIsImV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzXCI7XG4iLCJpbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSBcIi4vT3B0aW9uXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2V0dGluZ3MubW9kdWxlLmNzc1wiXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL3NsaWRlclwiXG5cbmV4cG9ydCB0eXBlIFNldHRpbmdzRGVmaW5pdGlvbnMgPSBSZWNvcmQ8XG5cdHN0cmluZyxcblx0e1xuXHRcdHZhbHVlOiBudW1iZXJcblx0XHRsYWJlbDogc3RyaW5nXG5cdFx0bWluPzogbnVtYmVyXG5cdFx0bWF4PzogbnVtYmVyXG5cdFx0c3RlcD86IG51bWJlciB8IHN0cmluZ1tdXG5cdH1cbj5cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc1Byb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG5cdGNsYXNzTmFtZT86IHN0cmluZ1xuXHR2YWx1ZXM6IFRcblx0b25DaGFuZ2UodmFsdWVzOiBUKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3M8VCBleHRlbmRzIFNldHRpbmdzRGVmaW5pdGlvbnM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZXMsXG5cdG9uQ2hhbmdlLFxufTogU2V0dGluZ3NQcm9wczxUPikge1xuXHRjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgdXBkYXRlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgbmV3VmFsdWVzID0ge1xuXHRcdFx0Li4udmFsdWVzLFxuXHRcdFx0W2tleV06IHtcblx0XHRcdFx0Li4udmFsdWVzW2tleV0sXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9XG5cdFx0b25DaGFuZ2UobmV3VmFsdWVzKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHRzdHlsZXMuc2V0dGluZ3MsXG5cdFx0XHRcdHNob3cgPyBzdHlsZXMuc2hvdyA6IHN0eWxlcy5oaWRlLFxuXHRcdFx0KX1cblx0XHQ+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxLjVlbVwiLCBoZWlnaHQ6IFwiMS41ZW1cIiB9fVxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRzdHJva2VXaWR0aD1cIjEuNVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8dGl0bGU+U2V0dGluZ3M8L3RpdGxlPlxuXHRcdFx0XHRcdDxwYXRoXG5cdFx0XHRcdFx0XHRkPVwiTTEyLDE1LjVBMy41LDMuNSAwIDAsMSA4LjUsMTJBMy41LDMuNSAwIDAsMSAxMiw4LjVBMy41LDMuNSAwIDAsMSAxNS41LDEyQTMuNSwzLjUgMCAwLDEgMTIsMTUuNU0xOS40MywxMi45N0MxOS40NywxMi42NSAxOS41LDEyLjMzIDE5LjUsMTJDMTkuNSwxMS42NyAxOS40NywxMS4zNCAxOS40MywxMUwyMS41NCw5LjM3QzIxLjczLDkuMjIgMjEuNzgsOC45NSAyMS42Niw4LjczTDE5LjY2LDUuMjdDMTkuNTQsNS4wNSAxOS4yNyw0Ljk2IDE5LjA1LDUuMDVMMTYuNTYsNi4wNUMxNi4wNCw1LjY2IDE1LjUsNS4zMiAxNC44Nyw1LjA3TDE0LjUsMi40MkMxNC40NiwyLjE4IDE0LjI1LDIgMTQsMkgxMEM5Ljc1LDIgOS41NCwyLjE4IDkuNSwyLjQyTDkuMTMsNS4wN0M4LjUsNS4zMiA3Ljk2LDUuNjYgNy40NCw2LjA1TDQuOTUsNS4wNUM0LjczLDQuOTYgNC40Niw1LjA1IDQuMzQsNS4yN0wyLjM0LDguNzNDMi4yMSw4Ljk1IDIuMjcsOS4yMiAyLjQ2LDkuMzdMNC41NywxMUM0LjUzLDExLjM0IDQuNSwxMS42NyA0LjUsMTJDNC41LDEyLjMzIDQuNTMsMTIuNjUgNC41NywxMi45N0wyLjQ2LDE0LjYzQzIuMjcsMTQuNzggMi4yMSwxNS4wNSAyLjM0LDE1LjI3TDQuMzQsMTguNzNDNC40NiwxOC45NSA0LjczLDE5LjAzIDQuOTUsMTguOTVMNy40NCwxNy45NEM3Ljk2LDE4LjM0IDguNSwxOC42OCA5LjEzLDE4LjkzTDkuNSwyMS41OEM5LjU0LDIxLjgyIDkuNzUsMjIgMTAsMjJIMTRDMTQuMjUsMjIgMTQuNDYsMjEuODIgMTQuNSwyMS41OEwxNC44NywxOC45M0MxNS41LDE4LjY3IDE2LjA0LDE4LjM0IDE2LjU2LDE3Ljk0TDE5LjA1LDE4Ljk1QzE5LjI3LDE5LjAzIDE5LjU0LDE4Ljk1IDE5LjY2LDE4LjczTDIxLjY2LDE1LjI3QzIxLjc4LDE1LjA1IDIxLjczLDE0Ljc4IDIxLjU0LDE0LjYzTDE5LjQzLDEyLjk3WlwiXG5cdFx0XHRcdFx0XHRzdHJva2U9XCJub25lXCJcblx0XHRcdFx0XHRcdGZpbGw9XCIjZmZmXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e09iamVjdC5rZXlzKHZhbHVlcykubWFwKChrZXkpID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gdmFsdWVzW2tleV1cblx0XHRcdFx0XHRpZiAoIWl0ZW0pIHJldHVybiBudWxsXG5cblx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpdGVtLnN0ZXApKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8T3B0aW9uXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtrZXl9XG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdFx0c3RlcD17aXRlbS5zdGVwfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZShrZXksIHZhbHVlKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBtaW4gPSBpdGVtLm1pbiA/PyAwXG5cdFx0XHRcdFx0Y29uc3QgbWF4ID0gaXRlbS5tYXggPz8gMVxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8U2xpZGVyXG5cdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5sYWJlbH1cblx0XHRcdFx0XHRcdFx0bWluPXttaW59XG5cdFx0XHRcdFx0XHRcdG1heD17bWF4fVxuXHRcdFx0XHRcdFx0XHRzdGVwPXtpdGVtLnN0ZXAgPz8gKG1heCAtIG1pbikgLyAxMDB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3NsaWRlclwiO1xuIiwiaW1wb3J0IHR5cGUgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2xpZGVyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcm9wcyB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRzdGVwOiBudW1iZXI7XG5cdHZhbHVlOiBudW1iZXI7XG5cdG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoe1xuXHRjbGFzc05hbWUsXG5cdGxhYmVsLFxuXHRtaW4sXG5cdG1heCxcblx0c3RlcCxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxufTogU2xpZGVyUHJvcHMpIHtcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdG9uQ2hhbmdlKG5ld1ZhbHVlKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuc2xpZGVyKX0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2PntsYWJlbH08L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Ryb25nPnt2YWx1ZS50b0ZpeGVkKDIpfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJyYW5nZVwiXG5cdFx0XHRcdHN0ZXA9e3N0ZXB9XG5cdFx0XHRcdG1pbj17bWlufVxuXHRcdFx0XHRtYXg9e21heH1cblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGdkQ29udGV4dCIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZFBhaW50ZXJHaXptbyIsInRnZExvYWRBcnJheUJ1ZmZlciIsInRnZExvYWRHbGIiLCJ0Z2RMb2FkSW1hZ2UiLCJ0Z2RMb2FkVGV4dCIsIkljb25DZW50ZXIiLCJJY29uRnVsbHNjcmVlbiIsIkljb25PcmllbnRhdGlvbiIsIkljb25QaW4iLCJJY29uU25hcHNob3QiLCJUaGVtZSIsIlJlYWN0IiwiU2V0dGluZ3MiLCJTcGlubmVyIiwic3R5bGVzIiwiVGdkIiwicGFyYW0iLCJjbGFzc05hbWUiLCJvcHRpb25zIiwib25SZWFkeSIsImdpem1vIiwid2lkdGgiLCJoZWlnaHQiLCJub0JvcmRlciIsImFzc2V0cyIsImNvbnRyb2xsZXIiLCJzZXR0aW5ncyIsImNoaWxkcmVuIiwiZnVsbHNjcmVlbiIsInJlZlVwZGF0ZVNldHRpbmdzIiwiX1JlYWN0X3VzZVN0YXRlIiwic2V0dGluZ1ZhbHVlcyIsInNldFNldHRpbmdWYWx1ZXMiLCJyZWR1Y2VTZXR0aW5ncyIsInZhbHVlcyIsIl9pdGVyYXRvckVycm9yIiwiT2JqZWN0Iiwia2V5IiwiX1JlYWN0X3VzZVN0YXRlMSIsImVycm9yIiwic2V0RXJyb3IiLCJfUmVhY3RfdXNlU3RhdGUyIiwibGFuZHNjYXBlIiwic2V0TGFuZHNjYXBlIiwiX1JlYWN0X3VzZVN0YXRlMyIsImZ1bGxzY3JlZW5BdmFpbGFibGUiLCJzZXRGdWxsc2NyZWVuQXZhaWxhYmxlIiwicmVmQ29udGV4dCIsInJlZkNhbnZhcyIsInJlZlNjcmVlbiIsInJlZk9yYml0ZXIiLCJfUmVhY3RfdXNlU3RhdGU0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJtb3VudENhbnZhcyIsImNhbnZhcyIsImNvbnRleHQiLCJsb2FkQXNzZXRzIiwibG9hZGVkQXNzZXRzIiwib3JiaXRlciIsImV4IiwiX2luc3RhbmNlb2YiLCJFcnJvciIsIkpTT04iLCJjb25zb2xlIiwiaGFuZGxlRnVsbHNjcmVlbiIsImRpdiIsImhhbmRsZVNjcmVlbnNob3QiLCJpbWciLCJhIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb24iLCJoYW5kbGVSZXNldENhbWVyYSIsIl9jb250cm9sbGVyX2luZXJ0aWFPcmJpdCIsInNjZW5lIiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIkJvb2xlYW4iLCJzdHlsZSIsIm9uQ2xpY2siLCJfcmVmIiwiZ2xiIiwiZGF0YSIsInRleHQiLCJpbWFnZSIsImxvYWRlcnMiLCJ1cmwiLCJhc3NldCIsIlByb21pc2UiLCJsb2FkZXIiLCJTdHlsZXMiLCJWaWV3TGFiZWwiLCJWaWV3T3B0aW9ucyIsIk9wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInN0ZXAiLCJvbkNoYW5nZTEiLCJ2IiwicGFyc2VGbG9hdCIsImNhcHRpb24iLCJpbmRleCIsIlNsaWRlciIsInNob3ciLCJzZXRTaG93IiwidXBkYXRlIiwibmV3VmFsdWVzIiwiX2l0ZW1fbWluIiwiX2l0ZW1fbWF4IiwiX2l0ZW1fc3RlcCIsIml0ZW0iLCJBcnJheSIsIm1pbiIsIm1heCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsOHBCQUE4cEIsRTs7Ozs7Ozs7QUNEOXFCO0FBQ0Esc0RBQWUsQ0FBQyxzRUFBc0UsRTs7Ozs7Ozs7QUNEdEY7QUFDQSxzREFBZSxDQUFDLCtMQUErTCxFOzs7Ozs7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