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
        var depthBits = context.gl.getParameter(context.gl.DEPTH_BITS);
        console.log("Depth buffer bits:", depthBits);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this),
                settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                    values: settingValues,
                    onChange: setSettingValues
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 192,
                    columnNumber: 35
                }, this),
                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    className: _tgd_module_css__rspack_import_6["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 193,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
            lineNumber: 187,
            columnNumber: 13
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Take a snapshot of the scene",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconSnapshot, {
                            onClick: handleScreenshot
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    fullscreenAvailable && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Go fullscreen",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                            onClick: handleFullscreen
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 208,
                        columnNumber: 21
                    }, this),
                    controller && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Save current camera position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconPin, {
                                    onClick: handleSetCameraRestPosition
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Restore camera to previously saved position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconCenter, {
                                    onClick: handleResetCamera
                                }, void 0, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 200,
                columnNumber: 13
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
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this),
                            settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                                values: settingValues,
                                onChange: setSettingValues
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 232,
                                columnNumber: 39
                            }, this),
                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                className: _tgd_module_css__rspack_import_6["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 233,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Spinner__rspack_import_5["default"], {}, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
        lineNumber: 199,
        columnNumber: 9
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                lineNumber: 16,
                columnNumber: 13
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
        lineNumber: 15,
        columnNumber: 9
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
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _slider__rspack_import_3 = __webpack_require__(87491);
/* import */ var _Option__rspack_import_4 = __webpack_require__(94599);
/* import */ var _settings_module_css__rspack_import_5 = __webpack_require__(70743);
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
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), show = _React_useState[0], setShow = _React_useState[1];
    var update = function update(key, value) {
        var newValues = _object_spread_props(_object_spread({}, values), _define_property({}, key, _object_spread_props(_object_spread({}, values[key]), {
            value: value
        })));
        onChange(newValues);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(className, _settings_module_css__rspack_import_5["default"].settings, show ? _settings_module_css__rspack_import_5["default"].show : _settings_module_css__rspack_import_5["default"].hide),
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
                    "stroke-width": "1.5",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("path", {
                        d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",
                        stroke: "none",
                        fill: "#fff"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: Object.keys(values).map(function(key) {
                    var _item_min, _item_max, _item_step;
                    var item = values[key];
                    if (!item) return null;
                    if (Array.isArray(item.step)) {
                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Option__rspack_import_4.Option, {
                            label: item.label,
                            step: item.step,
                            value: item.value,
                            onChange: function onChange(value) {
                                return update(key, value);
                            }
                        }, key, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                            lineNumber: 60,
                            columnNumber: 29
                        }, _this);
                    }
                    var min = (_item_min = item.min) !== null && _item_min !== void 0 ? _item_min : 0;
                    var max = (_item_max = item.max) !== null && _item_max !== void 0 ? _item_max : 1;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_slider__rspack_import_3["default"], {
                        label: item.label,
                        min: min,
                        max: max,
                        step: (_item_step = item.step) !== null && _item_step !== void 0 ? _item_step : (max - min) / 100,
                        value: item.value,
                        onChange: function onChange(value) {
                            return update(key, value);
                        }
                    }, key, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                        lineNumber: 73,
                        columnNumber: 25
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
        lineNumber: 40,
        columnNumber: 9
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
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _slider_module_css__rspack_import_3 = __webpack_require__(88223);




function Slider(param) {
    var className = param.className, label = param.label, min = param.min, max = param.max, step = param.step, value = param.value, onChange = param.onChange;
    var handleChange = function handleChange(event) {
        var newValue = parseFloat(event.target.value);
        onChange(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(className, _slider_module_css__rspack_import_3["default"].slider),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: label
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("strong", {
                            children: value.toFixed(2)
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("input", {
                type: "range",
                step: step,
                min: min,
                max: max,
                value: value,
                onChange: handleChange
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuMjMxODBkZjdjOGVmNGI2Ni5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NsaWRlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9zbGlkZXIvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiVGdkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX1RnZF9NRVNWbXhcIixcInNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9zY3JlZW5fTndJSHZ1XCIsXCJmdWxsc2NyZWVuXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2Z1bGxzY3JlZW5fYUdhMDBJXCIsXCJyZWxhdGl2ZVwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9yZWxhdGl2ZV9JY3RKN0xcIixcIm92ZXJsYXlcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfb3ZlcmxheV93N0VYa2FcIixcImxvYWRpbmdcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfbG9hZGluZ19jNFRNRGpcIixcImNhbnZhc1wiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9jYW52YXNfT3ZPN3VYXCIsXCJnaXptb1wiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9naXptb19yMGU1Q2FcIixcImFjdGlvbnNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfYWN0aW9uc19PQmhBMTdcIixcImVuYWJsZWRcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZW5hYmxlZF9keHRuVzZcIixcImVycm9yXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2Vycm9yX3Fnc0ROVVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wib3B0aW9uXCI6XCJzcmMtY29tcG9uZW50cy1zZXR0aW5ncy1PcHRpb24tT3B0aW9uLW1vZHVsZV9vcHRpb25fenZXeEhRXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzZXR0aW5nc1wiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX3NldHRpbmdzX08zZVV3MlwiLFwic2hvd1wiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX3Nob3dfZmg2TDJhXCIsXCJoaWRlXCI6XCJzcmMtY29tcG9uZW50cy1zZXR0aW5ncy1zZXR0aW5ncy1tb2R1bGVfaGlkZV9MRnlhWG5cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInNsaWRlclwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2xpZGVyLXNsaWRlci1tb2R1bGVfc2xpZGVyX3U4SGF5bVwifTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vdGdkXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RnZFwiXG4iLCJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIHR5cGUgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0T3B0aW9ucyxcbiAgICB0eXBlIFRnZERhdGFHbGIsXG4gICAgVGdkUGFpbnRlckdpem1vLFxuICAgIHRnZExvYWRBcnJheUJ1ZmZlcixcbiAgICB0Z2RMb2FkR2xiLFxuICAgIHRnZExvYWRJbWFnZSxcbiAgICB0Z2RMb2FkVGV4dCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IEljb25DZW50ZXIsIEljb25GdWxsc2NyZWVuLCBJY29uT3JpZW50YXRpb24sIEljb25QaW4sIEljb25TbmFwc2hvdCwgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBTZXR0aW5ncywgdHlwZSBTZXR0aW5nc0RlZmluaXRpb25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9zZXR0aW5nc1wiXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vLi4vU3Bpbm5lclwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RnZC5tb2R1bGUuY3NzXCJcbmV4cG9ydCBpbnRlcmZhY2UgQXNzZXRzIHtcbiAgICBpbWFnZTogUmVjb3JkPHN0cmluZywgSFRNTEltYWdlRWxlbWVudD5cbiAgICBnbGI6IFJlY29yZDxzdHJpbmcsIFRnZERhdGFHbGI+XG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgQXJyYXlCdWZmZXI+XG4gICAgdGV4dDogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG50eXBlIEFzc2V0c1RvTG9hZCA9IHtcbiAgICBba2V5IGluIGtleW9mIEFzc2V0c106IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuaW50ZXJmYWNlIFRnZFByb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgb3B0aW9ucz86IFdlYkdMQ29udGV4dEF0dHJpYnV0ZXNcbiAgICBvblJlYWR5KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cyk6IHZvaWQgfCB1bmRlZmluZWQgfCAoKHNldHRpbmdzOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPikgPT4gdm9pZClcbiAgICB3aWR0aD86IHN0cmluZ1xuICAgIGhlaWdodD86IHN0cmluZ1xuICAgIG5vQm9yZGVyPzogYm9vbGVhblxuICAgIGdpem1vPzogYm9vbGVhblxuICAgIGFzc2V0cz86IFBhcnRpYWw8QXNzZXRzVG9Mb2FkPlxuICAgIGNvbnRyb2xsZXI/OiBQYXJ0aWFsPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdE9wdGlvbnM+XG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbiAgICBzZXR0aW5ncz86IFRcbiAgICBmdWxsc2NyZWVuPzogYm9vbGVhblxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGdkPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPih7XG4gICAgY2xhc3NOYW1lLFxuICAgIG9wdGlvbnMsXG4gICAgb25SZWFkeSxcbiAgICBnaXptbyA9IGZhbHNlLFxuICAgIHdpZHRoID0gXCI2NDBweFwiLFxuICAgIGhlaWdodCA9IFwiNDgwcHhcIixcbiAgICBub0JvcmRlciA9IGZhbHNlLFxuICAgIGFzc2V0cyxcbiAgICBjb250cm9sbGVyLFxuICAgIHNldHRpbmdzLFxuICAgIGNoaWxkcmVuLFxuICAgIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbn06IFRnZFByb3BzPFQ+KSB7XG4gICAgY29uc3QgcmVmVXBkYXRlU2V0dGluZ3MgPSBSZWFjdC51c2VSZWY8dm9pZCB8IG51bGwgfCAoKHNldHRpbmdzOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPikgPT4gdm9pZCk+KG51bGwpXG4gICAgY29uc3QgW3NldHRpbmdWYWx1ZXMsIHNldFNldHRpbmdWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoc2V0dGluZ3MpXG4gICAgY29uc3QgcmVkdWNlU2V0dGluZ3MgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4gPT4ge1xuICAgICAgICBpZiAoIXNldHRpbmdWYWx1ZXMpIHJldHVybiB7fSBhcyBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPlxuICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzZXR0aW5nVmFsdWVzKSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzIGFzIFJlY29yZDxrZXlvZiBULCBudW1iZXI+XG4gICAgfSwgW3NldHRpbmdWYWx1ZXNdKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXR0aW5nVmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZ1ZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHNldHRpbmdWYWx1ZXNba2V5XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudD8uKHJlZHVjZVNldHRpbmdzKCkpXG4gICAgICAgIH1cbiAgICB9LCBbc2V0dGluZ1ZhbHVlcywgcmVkdWNlU2V0dGluZ3NdKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbGFuZHNjYXBlLCBzZXRMYW5kc2NhcGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZnVsbHNjcmVlbkF2YWlsYWJsZSwgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZkNhbnZhcyA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmU2NyZWVuID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZPcmJpdGVyID0gUmVhY3QudXNlUmVmPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBtb3VudENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgICAgICBpZiAocmVmQ2FudmFzLmN1cnJlbnQpIHJldHVyblxuXG4gICAgICAgIHJlZkNhbnZhcy5jdXJyZW50ID0gY2FudmFzXG4gICAgICAgIGlmIChnaXptbyAmJiBvcHRpb25zKSBvcHRpb25zLmFscGhhID0gZmFsc2VcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywge1xuICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGVwdGhCaXRzID0gY29udGV4dC5nbC5nZXRQYXJhbWV0ZXIoY29udGV4dC5nbC5ERVBUSF9CSVRTKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcHRoIGJ1ZmZlciBiaXRzOlwiLCBkZXB0aEJpdHMpXG4gICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBsb2FkQXNzZXRzKGFzc2V0cylcbiAgICAgICAgICAgIC50aGVuKChsb2FkZWRBc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVBhbm5pbmc6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb250cm9sbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk9yYml0ZXIuY3VycmVudCA9IG9yYml0ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50ID0gb25SZWFkeShjb250ZXh0LCBsb2FkZWRBc3NldHMpXG4gICAgICAgICAgICAgICAgICAgIHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQ/LihyZWR1Y2VTZXR0aW5ncygpKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2l6bW8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYWRkKG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1Z0hpZXJhcmNoeSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGV4IGluc3RhbmNlb2YgRXJyb3IgPyBleC5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXgpKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGluaXRpYWxpemUgdGhlIHNjZW5lIVwiLCBleClcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlRnVsbHNjcmVlbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gcmVmU2NyZWVuLmN1cnJlbnRcbiAgICAgICAgaWYgKCFkaXYpIHJldHVyblxuXG4gICAgICAgIGRpdi5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnRha2VTbmFwc2hvdCgpLnRoZW4oKGltZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpXG4gICAgICAgICAgICBhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICAgICAgYS5ocmVmID0gaW1nLnNyY1xuICAgICAgICAgICAgYS5kb3dubG9hZCA9IFwic25hcHNob3QucG5nXCJcbiAgICAgICAgICAgIGEuY2xpY2soKVxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKSwgMzAwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNldENhbWVyYVJlc3RQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JiaXRlciA9IHJlZk9yYml0ZXIuY3VycmVudFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhb3JiaXRlcikgcmV0dXJuXG5cbiAgICAgICAgb3JiaXRlci5jYW1lcmFJbml0aWFsU3RhdGUgPSBjb250ZXh0LmNhbWVyYS5nZXRDdXJyZW50U3RhdGUoKVxuICAgICAgICBvcmJpdGVyLnpvb20gPSAxXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVJlc2V0Q2FtZXJhID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmJpdGVyID0gcmVmT3JiaXRlci5jdXJyZW50XG4gICAgICAgIGlmICghb3JiaXRlciB8fCAhY29udHJvbGxlcikgcmV0dXJuXG5cbiAgICAgICAgb3JiaXRlci5yZXNldCgoY29udHJvbGxlci5pbmVydGlhT3JiaXQgPz8gNTAwKSAqIDFlLTMpXG4gICAgfVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHJlZkNhbnZhcy5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gc2NlbmUucGFpbnQoKSlcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYW52YXMpXG4gICAgICAgIGlmICghY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4gPSAoY2FudmFzIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pW1wid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIl0gYXMgKFxuICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBGdWxsc2NyZWVuT3B0aW9ucyxcbiAgICAgICAgICAgICkgPT4gUHJvbWlzZTx2b2lkPlxuICAgICAgICB9XG4gICAgICAgIHNldEZ1bGxzY3JlZW5BdmFpbGFibGUoQm9vbGVhbihjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4pKVxuICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGNhbnZhcylcbiAgICB9LCBbcmVmQ29udGV4dC5jdXJyZW50LCByZWZDYW52YXMuY3VycmVudF0pXG5cbiAgICBpZiAobm9Cb3JkZXIgfHwgZnVsbHNjcmVlbikge1xuICAgICAgICBjb25zdCBzdHlsZTogQ1NTUHJvcGVydGllcyA9IGZ1bGxzY3JlZW5cbiAgICAgICAgICAgID8ge31cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGxhbmRzY2FwZSA/IHdpZHRoIDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBsYW5kc2NhcGUgPyBoZWlnaHQgOiB3aWR0aCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHJlZj17cmVmU2NyZWVufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKHN0eWxlcy5zY3JlZW4sIGZ1bGxzY3JlZW4gJiYgc3R5bGVzLmZ1bGxzY3JlZW4pfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IHJlZj17bW91bnRDYW52YXN9IC8+XG4gICAgICAgICAgICAgICAge3NldHRpbmdWYWx1ZXMgJiYgPFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+fVxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKGNsYXNzTmFtZSwgc3R5bGVzLlRnZCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihzdHlsZXMuYWN0aW9ucywgIWxvYWRpbmcgJiYgc3R5bGVzLmVuYWJsZWQpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVwiU3dpdGNoIGxhbmRzY2FwZSAvIHBvcnRyYWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uT3JpZW50YXRpb24gb25DbGljaz17KCkgPT4gc2V0TGFuZHNjYXBlKCFsYW5kc2NhcGUpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XCJUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHNjZW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uU25hcHNob3Qgb25DbGljaz17aGFuZGxlU2NyZWVuc2hvdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ZnVsbHNjcmVlbkF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XCJHbyBmdWxsc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkZ1bGxzY3JlZW4gb25DbGljaz17aGFuZGxlRnVsbHNjcmVlbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y29udHJvbGxlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVwiU2F2ZSBjdXJyZW50IGNhbWVyYSBwb3NpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uUGluIG9uQ2xpY2s9e2hhbmRsZVNldENhbWVyYVJlc3RQb3NpdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cIlJlc3RvcmUgY2FtZXJhIHRvIHByZXZpb3VzbHkgc2F2ZWQgcG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkNlbnRlciBvbkNsaWNrPXtoYW5kbGVSZXNldENhbWVyYX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVmU2NyZWVufVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxhbmRzY2FwZSA/IGhlaWdodCA6IHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IHJlZj17bW91bnRDYW52YXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIHtzZXR0aW5nVmFsdWVzICYmIDxTZXR0aW5nczxUPiB2YWx1ZXM9e3NldHRpbmdWYWx1ZXN9IG9uQ2hhbmdlPXtzZXRTZXR0aW5nVmFsdWVzfSAvPn1cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihzdHlsZXMub3ZlcmxheSwgbG9hZGluZyAmJiBzdHlsZXMubG9hZGluZyl9PlxuICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBc3NldHMoeyBnbGIsIGRhdGEsIHRleHQsIGltYWdlIH06IFBhcnRpYWw8QXNzZXRzVG9Mb2FkPiA9IHt9KTogUHJvbWlzZTxBc3NldHM+IHtcbiAgICBjb25zdCBhc3NldHM6IEFzc2V0cyA9IHtcbiAgICAgICAgZ2xiOiB7fSxcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIHRleHQ6IHt9LFxuICAgICAgICBpbWFnZToge30sXG4gICAgfVxuICAgIGNvbnN0IGxvYWRlcnM6IEFycmF5PCgpID0+IFByb21pc2U8dm9pZD4+ID0gW11cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaW1hZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBpbWFnZVtrZXldXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIGltYWdlOlwiLCB1cmwpXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkSW1hZ2UodXJsKVxuICAgICAgICAgICAgICAgIGlmIChhc3NldCkgYXNzZXRzLmltYWdlW2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGdsYikge1xuICAgICAgICBPYmplY3Qua2V5cyhnbGIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBnbGJba2V5XVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBHTEI6XCIsIHVybClcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKVxuICAgICAgICAgICAgICAgIGlmIChhc3NldCkgYXNzZXRzLmdsYltrZXldID0gYXNzZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBkYXRhW2tleV1cbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRBcnJheUJ1ZmZlcih1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMuZGF0YVtrZXldID0gYXNzZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRleHQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0ZXh0W2tleV1cbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRUZXh0KHVybClcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIGFzc2V0cy50ZXh0W2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobG9hZGVycy5tYXAoKGxvYWRlcikgPT4gbG9hZGVyKCkpKVxuICAgIHJldHVybiBhc3NldHNcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vT3B0aW9uLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgVmlld0xhYmVsLCBWaWV3T3B0aW9ucyB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuZXhwb3J0IHR5cGUgT3B0aW9uUHJvcHMgPSB7XG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIHZhbHVlOiBudW1iZXJcbiAgICBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZFxuICAgIHN0ZXA6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPcHRpb24oeyBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlLCBzdGVwIH06IE9wdGlvblByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgPFZpZXdMYWJlbD57bGFiZWx9PC9WaWV3TGFiZWw+XG4gICAgICAgICAgICA8Vmlld09wdGlvbnMgdmFsdWU9e2Ake3ZhbHVlfWB9IG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2UocGFyc2VGbG9hdCh2KSl9PlxuICAgICAgICAgICAgICAgIHtzdGVwLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57Y2FwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL09wdGlvblwiXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nc1wiXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuL3NsaWRlclwiXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tIFwiLi9PcHRpb25cIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NldHRpbmdzLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgdHlwZSBTZXR0aW5nc0RlZmluaXRpb25zID0gUmVjb3JkPFxuICAgIHN0cmluZyxcbiAgICB7XG4gICAgICAgIHZhbHVlOiBudW1iZXJcbiAgICAgICAgbGFiZWw6IHN0cmluZ1xuICAgICAgICBtaW4/OiBudW1iZXJcbiAgICAgICAgbWF4PzogbnVtYmVyXG4gICAgICAgIHN0ZXA/OiBudW1iZXIgfCBzdHJpbmdbXVxuICAgIH1cbj5cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc1Byb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWVzOiBUXG4gICAgb25DaGFuZ2UodmFsdWVzOiBUKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2V0dGluZ3M8VCBleHRlbmRzIFNldHRpbmdzRGVmaW5pdGlvbnM+KHsgY2xhc3NOYW1lLCB2YWx1ZXMsIG9uQ2hhbmdlIH06IFNldHRpbmdzUHJvcHM8VD4pIHtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVzID0ge1xuICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgICAgICAuLi52YWx1ZXNba2V5XSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWVzKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuc2V0dGluZ3MsIHNob3cgPyBzdHlsZXMuc2hvdyA6IHN0eWxlcy5oaWRlKX0+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxLjVlbVwiLCBoZWlnaHQ6IFwiMS41ZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIsMTUuNUEzLjUsMy41IDAgMCwxIDguNSwxMkEzLjUsMy41IDAgMCwxIDEyLDguNUEzLjUsMy41IDAgMCwxIDE1LjUsMTJBMy41LDMuNSAwIDAsMSAxMiwxNS41TTE5LjQzLDEyLjk3QzE5LjQ3LDEyLjY1IDE5LjUsMTIuMzMgMTkuNSwxMkMxOS41LDExLjY3IDE5LjQ3LDExLjM0IDE5LjQzLDExTDIxLjU0LDkuMzdDMjEuNzMsOS4yMiAyMS43OCw4Ljk1IDIxLjY2LDguNzNMMTkuNjYsNS4yN0MxOS41NCw1LjA1IDE5LjI3LDQuOTYgMTkuMDUsNS4wNUwxNi41Niw2LjA1QzE2LjA0LDUuNjYgMTUuNSw1LjMyIDE0Ljg3LDUuMDdMMTQuNSwyLjQyQzE0LjQ2LDIuMTggMTQuMjUsMiAxNCwySDEwQzkuNzUsMiA5LjU0LDIuMTggOS41LDIuNDJMOS4xMyw1LjA3QzguNSw1LjMyIDcuOTYsNS42NiA3LjQ0LDYuMDVMNC45NSw1LjA1QzQuNzMsNC45NiA0LjQ2LDUuMDUgNC4zNCw1LjI3TDIuMzQsOC43M0MyLjIxLDguOTUgMi4yNyw5LjIyIDIuNDYsOS4zN0w0LjU3LDExQzQuNTMsMTEuMzQgNC41LDExLjY3IDQuNSwxMkM0LjUsMTIuMzMgNC41MywxMi42NSA0LjU3LDEyLjk3TDIuNDYsMTQuNjNDMi4yNywxNC43OCAyLjIxLDE1LjA1IDIuMzQsMTUuMjdMNC4zNCwxOC43M0M0LjQ2LDE4Ljk1IDQuNzMsMTkuMDMgNC45NSwxOC45NUw3LjQ0LDE3Ljk0QzcuOTYsMTguMzQgOC41LDE4LjY4IDkuMTMsMTguOTNMOS41LDIxLjU4QzkuNTQsMjEuODIgOS43NSwyMiAxMCwyMkgxNEMxNC4yNSwyMiAxNC40NiwyMS44MiAxNC41LDIxLjU4TDE0Ljg3LDE4LjkzQzE1LjUsMTguNjcgMTYuMDQsMTguMzQgMTYuNTYsMTcuOTRMMTkuMDUsMTguOTVDMTkuMjcsMTkuMDMgMTkuNTQsMTguOTUgMTkuNjYsMTguNzNMMjEuNjYsMTUuMjdDMjEuNzgsMTUuMDUgMjEuNzMsMTQuNzggMjEuNTQsMTQuNjNMMTkuNDMsMTIuOTdaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHZhbHVlcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHZhbHVlc1trZXldXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbSkgcmV0dXJuIG51bGxcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLnN0ZXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtpdGVtLnN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IGl0ZW0ubWluID8/IDBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gaXRlbS5tYXggPz8gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2l0ZW0uc3RlcCA/PyAobWF4IC0gbWluKSAvIDEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3NsaWRlclwiXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NsaWRlci5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBzdGVwOiBudW1iZXJcbiAgICB2YWx1ZTogbnVtYmVyXG4gICAgb25DaGFuZ2UodmFsdWU6IG51bWJlcik6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgY2xhc3NOYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN0ZXAsIHZhbHVlLCBvbkNoYW5nZSB9OiBTbGlkZXJQcm9wcykge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5zbGlkZXIpfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dmFsdWUudG9GaXhlZCgyKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHN0ZXA9e3N0ZXB9IG1pbj17bWlufSBtYXg9e21heH0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIlRnZENvbnRleHQiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RQYWludGVyR2l6bW8iLCJ0Z2RMb2FkQXJyYXlCdWZmZXIiLCJ0Z2RMb2FkR2xiIiwidGdkTG9hZEltYWdlIiwidGdkTG9hZFRleHQiLCJJY29uQ2VudGVyIiwiSWNvbkZ1bGxzY3JlZW4iLCJJY29uT3JpZW50YXRpb24iLCJJY29uUGluIiwiSWNvblNuYXBzaG90IiwiVGhlbWUiLCJSZWFjdCIsIlNldHRpbmdzIiwiU3Bpbm5lciIsInN0eWxlcyIsIlRnZCIsInBhcmFtIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsIm9uUmVhZHkiLCJnaXptbyIsIndpZHRoIiwiaGVpZ2h0Iiwibm9Cb3JkZXIiLCJhc3NldHMiLCJjb250cm9sbGVyIiwic2V0dGluZ3MiLCJjaGlsZHJlbiIsImZ1bGxzY3JlZW4iLCJyZWZVcGRhdGVTZXR0aW5ncyIsIl9SZWFjdF91c2VTdGF0ZSIsInNldHRpbmdWYWx1ZXMiLCJzZXRTZXR0aW5nVmFsdWVzIiwicmVkdWNlU2V0dGluZ3MiLCJ2YWx1ZXMiLCJfaXRlcmF0b3JFcnJvciIsIk9iamVjdCIsImtleSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJlcnJvciIsInNldEVycm9yIiwiX1JlYWN0X3VzZVN0YXRlMiIsImxhbmRzY2FwZSIsInNldExhbmRzY2FwZSIsIl9SZWFjdF91c2VTdGF0ZTMiLCJmdWxsc2NyZWVuQXZhaWxhYmxlIiwic2V0RnVsbHNjcmVlbkF2YWlsYWJsZSIsInJlZkNvbnRleHQiLCJyZWZDYW52YXMiLCJyZWZTY3JlZW4iLCJyZWZPcmJpdGVyIiwiX1JlYWN0X3VzZVN0YXRlNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW91bnRDYW52YXMiLCJjYW52YXMiLCJjb250ZXh0IiwiZGVwdGhCaXRzIiwiY29uc29sZSIsImxvYWRBc3NldHMiLCJsb2FkZWRBc3NldHMiLCJvcmJpdGVyIiwiZXgiLCJfaW5zdGFuY2VvZiIsIkVycm9yIiwiSlNPTiIsImhhbmRsZUZ1bGxzY3JlZW4iLCJkaXYiLCJoYW5kbGVTY3JlZW5zaG90IiwiaW1nIiwiYSIsImRvY3VtZW50Iiwid2luZG93IiwiaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uIiwiaGFuZGxlUmVzZXRDYW1lcmEiLCJfY29udHJvbGxlcl9pbmVydGlhT3JiaXQiLCJzY2VuZSIsIm9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJCb29sZWFuIiwic3R5bGUiLCJvbkNsaWNrIiwiX3JlZiIsImdsYiIsImRhdGEiLCJ0ZXh0IiwiaW1hZ2UiLCJsb2FkZXJzIiwidXJsIiwiYXNzZXQiLCJQcm9taXNlIiwibG9hZGVyIiwiU3R5bGVzIiwiVmlld0xhYmVsIiwiVmlld09wdGlvbnMiLCJPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJzdGVwIiwib25DaGFuZ2UxIiwidiIsInBhcnNlRmxvYXQiLCJjYXB0aW9uIiwiaW5kZXgiLCJTbGlkZXIiLCJzaG93Iiwic2V0U2hvdyIsInVwZGF0ZSIsIm5ld1ZhbHVlcyIsIl9pdGVtX21pbiIsIl9pdGVtX21heCIsIl9pdGVtX3N0ZXAiLCJpdGVtIiwiQXJyYXkiLCJtaW4iLCJtYXgiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDhwQkFBOHBCLEU7Ozs7Ozs7O0FDRDlxQjtBQUNBLHNEQUFlLENBQUMsc0VBQXNFLEU7Ozs7Ozs7O0FDRHRGO0FBQ0Esc0RBQWUsQ0FBQywrTEFBK0wsRTs7Ozs7Ozs7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