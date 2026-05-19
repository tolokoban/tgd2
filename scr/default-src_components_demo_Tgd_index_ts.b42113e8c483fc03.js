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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this),
                settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                    values: settingValues,
                    onChange: setSettingValues
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 192,
                    columnNumber: 35
                }, this),
                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    className: _tgd_module_css__rspack_import_6["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 193,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 202,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Take a snapshot of the scene",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconSnapshot, {
                            onClick: handleScreenshot
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    fullscreenAvailable && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Go fullscreen",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                            onClick: handleFullscreen
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 209,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
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
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 215,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Restore camera to previously saved position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconCenter, {
                                    onClick: handleResetCamera
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 218,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this),
                            settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                                values: settingValues,
                                onChange: setSettingValues
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 232,
                                columnNumber: 39
                            }, this),
                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                className: _tgd_module_css__rspack_import_6["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 233,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Spinner__rspack_import_5["default"], {}, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/Option/Option.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                        lineNumber: 73,
                        columnNumber: 25
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("strong", {
                            children: value.toFixed(2)
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/slider/slider.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuYjQyMTEzZThjNDgzZmMwMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL1RnZC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRnZFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9UZ2RfTUVTVm14XCIsXCJzY3JlZW5cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfc2NyZWVuX053SUh2dVwiLFwiZnVsbHNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9mdWxsc2NyZWVuX2FHYTAwSVwiLFwicmVsYXRpdmVcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfcmVsYXRpdmVfSWN0SjdMXCIsXCJvdmVybGF5XCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX292ZXJsYXlfdzdFWGthXCIsXCJsb2FkaW5nXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2xvYWRpbmdfYzRUTURqXCIsXCJjYW52YXNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfY2FudmFzX092Tzd1WFwiLFwiZ2l6bW9cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZ2l6bW9fcjBlNUNhXCIsXCJhY3Rpb25zXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2FjdGlvbnNfT0JoQTE3XCIsXCJlbmFibGVkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2VuYWJsZWRfZHh0blc2XCIsXCJlcnJvclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9lcnJvcl9xZ3NETlVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm9wdGlvblwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3MtT3B0aW9uLU9wdGlvbi1tb2R1bGVfb3B0aW9uX3p2V3hIUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiXG5leHBvcnQgKiBmcm9tIFwiLi90Z2RcIlxuIiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICB0eXBlIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdE9wdGlvbnMsXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxuICAgIFRnZFBhaW50ZXJHaXptbyxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXG4gICAgdGdkTG9hZEdsYixcbiAgICB0Z2RMb2FkSW1hZ2UsXG4gICAgdGdkTG9hZFRleHQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBJY29uQ2VudGVyLCBJY29uRnVsbHNjcmVlbiwgSWNvbk9yaWVudGF0aW9uLCBJY29uUGluLCBJY29uU25hcHNob3QsIFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL1NwaW5uZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90Z2QubW9kdWxlLmNzc1wiXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG4gICAgaW1hZ2U6IFJlY29yZDxzdHJpbmcsIEhUTUxJbWFnZUVsZW1lbnQ+XG4gICAgZ2xiOiBSZWNvcmQ8c3RyaW5nLCBUZ2REYXRhR2xiPlxuICAgIGRhdGE6IFJlY29yZDxzdHJpbmcsIEFycmF5QnVmZmVyPlxuICAgIHRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxudHlwZSBBc3NldHNUb0xvYWQgPSB7XG4gICAgW2tleSBpbiBrZXlvZiBBc3NldHNdOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmludGVyZmFjZSBUZ2RQcm9wczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIG9wdGlvbnM/OiBXZWJHTENvbnRleHRBdHRyaWJ1dGVzXG4gICAgb25SZWFkeShzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiB2b2lkIHwgdW5kZWZpbmVkIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpXG4gICAgd2lkdGg/OiBzdHJpbmdcbiAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICBub0JvcmRlcj86IGJvb2xlYW5cbiAgICBnaXptbz86IGJvb2xlYW5cbiAgICBhc3NldHM/OiBQYXJ0aWFsPEFzc2V0c1RvTG9hZD5cbiAgICBjb250cm9sbGVyPzogUGFydGlhbDxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXRPcHRpb25zPlxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gICAgc2V0dGluZ3M/OiBUXG4gICAgZnVsbHNjcmVlbj86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuICAgIGNsYXNzTmFtZSxcbiAgICBvcHRpb25zLFxuICAgIG9uUmVhZHksXG4gICAgZ2l6bW8gPSBmYWxzZSxcbiAgICB3aWR0aCA9IFwiNjQwcHhcIixcbiAgICBoZWlnaHQgPSBcIjQ4MHB4XCIsXG4gICAgbm9Cb3JkZXIgPSBmYWxzZSxcbiAgICBhc3NldHMsXG4gICAgY29udHJvbGxlcixcbiAgICBzZXR0aW5ncyxcbiAgICBjaGlsZHJlbixcbiAgICBmdWxsc2NyZWVuID0gZmFsc2UsXG59OiBUZ2RQcm9wczxUPikge1xuICAgIGNvbnN0IHJlZlVwZGF0ZVNldHRpbmdzID0gUmVhY3QudXNlUmVmPHZvaWQgfCBudWxsIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpPihudWxsKVxuICAgIGNvbnN0IFtzZXR0aW5nVmFsdWVzLCBzZXRTZXR0aW5nVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHNldHRpbmdzKVxuICAgIGNvbnN0IHJlZHVjZVNldHRpbmdzID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IFJlY29yZDxrZXlvZiBULCBudW1iZXI+ID0+IHtcbiAgICAgICAgaWYgKCFzZXR0aW5nVmFsdWVzKSByZXR1cm4ge30gYXMgUmVjb3JkPGtleW9mIFQsIG51bWJlcj5cbiAgICAgICAgY29uc3QgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZ1ZhbHVlcykpIHtcbiAgICAgICAgICAgIHZhbHVlc1trZXldID0gc2V0dGluZ1ZhbHVlc1trZXldLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcyBhcyBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPlxuICAgIH0sIFtzZXR0aW5nVmFsdWVzXSlcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2V0dGluZ1ZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmdWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQ/LihyZWR1Y2VTZXR0aW5ncygpKVxuICAgICAgICB9XG4gICAgfSwgW3NldHRpbmdWYWx1ZXMsIHJlZHVjZVNldHRpbmdzXSlcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2xhbmRzY2FwZSwgc2V0TGFuZHNjYXBlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Z1bGxzY3JlZW5BdmFpbGFibGUsIHNldEZ1bGxzY3JlZW5BdmFpbGFibGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZDYW52YXMgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZlNjcmVlbiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmT3JiaXRlciA9IFJlYWN0LnVzZVJlZjxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgbW91bnRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuXG5cbiAgICAgICAgaWYgKHJlZkNhbnZhcy5jdXJyZW50KSByZXR1cm5cblxuICAgICAgICByZWZDYW52YXMuY3VycmVudCA9IGNhbnZhc1xuICAgICAgICBpZiAoZ2l6bW8gJiYgb3B0aW9ucykgb3B0aW9ucy5hbHBoYSA9IGZhbHNlXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHtcbiAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRlcHRoQml0cyA9IGNvbnRleHQuZ2wuZ2V0UGFyYW1ldGVyKGNvbnRleHQuZ2wuREVQVEhfQklUUylcbiAgICAgICAgY29uc29sZS5sb2coXCJEZXB0aCBidWZmZXIgYml0czpcIiwgZGVwdGhCaXRzKVxuICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgbG9hZEFzc2V0cyhhc3NldHMpXG4gICAgICAgICAgICAudGhlbigobG9hZGVkQXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0aWFQYW5uaW5nOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29udHJvbGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZPcmJpdGVyLmN1cnJlbnQgPSBvcmJpdGVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudCA9IG9uUmVhZHkoY29udGV4dCwgbG9hZGVkQXNzZXRzKVxuICAgICAgICAgICAgICAgICAgICByZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50Py4ocmVkdWNlU2V0dGluZ3MoKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpem1vKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmFkZChuZXcgVGdkUGFpbnRlckdpem1vKGNvbnRleHQpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWdIaWVyYXJjaHkoKVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihleCBpbnN0YW5jZW9mIEVycm9yID8gZXgubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGV4KSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzY2VuZSFcIiwgZXgpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IHJlZlNjcmVlbi5jdXJyZW50XG4gICAgICAgIGlmICghZGl2KSByZXR1cm5cblxuICAgICAgICBkaXYucmVxdWVzdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTY3JlZW5zaG90ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29udGV4dC50YWtlU25hcHNob3QoKS50aGVuKChpbWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKVxuICAgICAgICAgICAgYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgICAgIGEuaHJlZiA9IGltZy5zcmNcbiAgICAgICAgICAgIGEuZG93bmxvYWQgPSBcInNuYXBzaG90LnBuZ1wiXG4gICAgICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSksIDMwMDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yYml0ZXIgPSByZWZPcmJpdGVyLmN1cnJlbnRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIW9yYml0ZXIpIHJldHVyblxuXG4gICAgICAgIG9yYml0ZXIuY2FtZXJhSW5pdGlhbFN0YXRlID0gY29udGV4dC5jYW1lcmEuZ2V0Q3VycmVudFN0YXRlKClcbiAgICAgICAgb3JiaXRlci56b29tID0gMVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSZXNldENhbWVyYSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JiaXRlciA9IHJlZk9yYml0ZXIuY3VycmVudFxuICAgICAgICBpZiAoIW9yYml0ZXIgfHwgIWNvbnRyb2xsZXIpIHJldHVyblxuXG4gICAgICAgIG9yYml0ZXIucmVzZXQoKGNvbnRyb2xsZXIuaW5lcnRpYU9yYml0ID8/IDUwMCkgKiAxZS0zKVxuICAgIH1cbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSByZWZDYW52YXMuY3VycmVudFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHNjZW5lLnBhaW50KCkpXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY2FudmFzKVxuICAgICAgICBpZiAoIWNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuID0gKGNhbnZhcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtcIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuXCJdIGFzIChcbiAgICAgICAgICAgICAgICBvcHRpb25zPzogRnVsbHNjcmVlbk9wdGlvbnMsXG4gICAgICAgICAgICApID0+IFByb21pc2U8dm9pZD5cbiAgICAgICAgfVxuICAgICAgICBzZXRGdWxsc2NyZWVuQXZhaWxhYmxlKEJvb2xlYW4oY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKSlcbiAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShjYW52YXMpXG4gICAgfSwgW3JlZkNvbnRleHQuY3VycmVudCwgcmVmQ2FudmFzLmN1cnJlbnRdKVxuXG4gICAgaWYgKG5vQm9yZGVyIHx8IGZ1bGxzY3JlZW4pIHtcbiAgICAgICAgY29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSBmdWxsc2NyZWVuXG4gICAgICAgICAgICA/IHt9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBsYW5kc2NhcGUgPyB3aWR0aCA6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogbGFuZHNjYXBlID8gaGVpZ2h0IDogd2lkdGgsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICByZWY9e3JlZlNjcmVlbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihzdHlsZXMuc2NyZWVuLCBmdWxsc2NyZWVuICYmIHN0eWxlcy5mdWxsc2NyZWVuKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfSByZWY9e21vdW50Q2FudmFzfSAvPlxuICAgICAgICAgICAgICAgIHtzZXR0aW5nVmFsdWVzICYmIDxTZXR0aW5nczxUPiB2YWx1ZXM9e3NldHRpbmdWYWx1ZXN9IG9uQ2hhbmdlPXtzZXRTZXR0aW5nVmFsdWVzfSAvPn1cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5UZ2QpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oc3R5bGVzLmFjdGlvbnMsICFsb2FkaW5nICYmIHN0eWxlcy5lbmFibGVkKX0+XG4gICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cIlN3aXRjaCBsYW5kc2NhcGUgLyBwb3J0cmFpdFwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbk9yaWVudGF0aW9uIG9uQ2xpY2s9eygpID0+IHNldExhbmRzY2FwZSghbGFuZHNjYXBlKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVwiVGFrZSBhIHNuYXBzaG90IG9mIHRoZSBzY2VuZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvblNuYXBzaG90IG9uQ2xpY2s9e2hhbmRsZVNjcmVlbnNob3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Z1bGxzY3JlZW5BdmFpbGFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPVwiR28gZnVsbHNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25GdWxsc2NyZWVuIG9uQ2xpY2s9e2hhbmRsZUZ1bGxzY3JlZW59IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2NvbnRyb2xsZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cIlNhdmUgY3VycmVudCBjYW1lcmEgcG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblBpbiBvbkNsaWNrPXtoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9XCJSZXN0b3JlIGNhbWVyYSB0byBwcmV2aW91c2x5IHNhdmVkIHBvc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25DZW50ZXIgb25DbGljaz17aGFuZGxlUmVzZXRDYW1lcmF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZX0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZlNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGxhbmRzY2FwZSA/IHdpZHRoIDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBsYW5kc2NhcGUgPyBoZWlnaHQgOiB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfSByZWY9e21vdW50Q2FudmFzfSAvPlxuICAgICAgICAgICAgICAgICAgICB7c2V0dGluZ1ZhbHVlcyAmJiA8U2V0dGluZ3M8VD4gdmFsdWVzPXtzZXR0aW5nVmFsdWVzfSBvbkNoYW5nZT17c2V0U2V0dGluZ1ZhbHVlc30gLz59XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oc3R5bGVzLm92ZXJsYXksIGxvYWRpbmcgJiYgc3R5bGVzLmxvYWRpbmcpfT5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQXNzZXRzKHsgZ2xiLCBkYXRhLCB0ZXh0LCBpbWFnZSB9OiBQYXJ0aWFsPEFzc2V0c1RvTG9hZD4gPSB7fSk6IFByb21pc2U8QXNzZXRzPiB7XG4gICAgY29uc3QgYXNzZXRzOiBBc3NldHMgPSB7XG4gICAgICAgIGdsYjoge30sXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICB0ZXh0OiB7fSxcbiAgICAgICAgaW1hZ2U6IHt9LFxuICAgIH1cbiAgICBjb25zdCBsb2FkZXJzOiBBcnJheTwoKSA9PiBQcm9taXNlPHZvaWQ+PiA9IFtdXG4gICAgaWYgKGltYWdlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGltYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gaW1hZ2Vba2V5XVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBpbWFnZTpcIiwgdXJsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEltYWdlKHVybClcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIGFzc2V0cy5pbWFnZVtrZXldID0gYXNzZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGlmIChnbGIpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZ2xiKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZ2xiW2tleV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgR0xCOlwiLCB1cmwpXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIGFzc2V0cy5nbGJba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZGF0YVtrZXldXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkQXJyYXlCdWZmZXIodXJsKVxuICAgICAgICAgICAgICAgIGlmIChhc3NldCkgYXNzZXRzLmRhdGFba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAodGV4dCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdGV4dFtrZXldXG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkVGV4dCh1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMudGV4dFtrZXldID0gYXNzZXRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKGxvYWRlcnMubWFwKChsb2FkZXIpID0+IGxvYWRlcigpKSlcbiAgICByZXR1cm4gYXNzZXRzXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL09wdGlvbi5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFZpZXdMYWJlbCwgVmlld09wdGlvbnMgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmV4cG9ydCB0eXBlIE9wdGlvblByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmdcbiAgICB2YWx1ZTogbnVtYmVyXG4gICAgb25DaGFuZ2UodmFsdWU6IG51bWJlcik6IHZvaWRcbiAgICBzdGVwOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gT3B0aW9uKHsgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSwgc3RlcCB9OiBPcHRpb25Qcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgIDxWaWV3TGFiZWw+e2xhYmVsfTwvVmlld0xhYmVsPlxuICAgICAgICAgICAgPFZpZXdPcHRpb25zIHZhbHVlPXtgJHt2YWx1ZX1gfSBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHBhcnNlRmxvYXQodikpfT5cbiAgICAgICAgICAgICAgICB7c3RlcC5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+e2NhcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9PcHRpb25cIlxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9zbGlkZXJcIlxuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSBcIi4vT3B0aW9uXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zZXR0aW5ncy5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyA9IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAge1xuICAgICAgICB2YWx1ZTogbnVtYmVyXG4gICAgICAgIGxhYmVsOiBzdHJpbmdcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBzdGVwPzogbnVtYmVyIHwgc3RyaW5nW11cbiAgICB9XG4+XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NQcm9wczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlczogVFxuICAgIG9uQ2hhbmdlKHZhbHVlczogVCk6IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPih7IGNsYXNzTmFtZSwgdmFsdWVzLCBvbkNoYW5nZSB9OiBTZXR0aW5nc1Byb3BzPFQ+KSB7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgdXBkYXRlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHtcbiAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAgICAgLi4udmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlcylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKGNsYXNzTmFtZSwgc3R5bGVzLnNldHRpbmdzLCBzaG93ID8gc3R5bGVzLnNob3cgOiBzdHlsZXMuaGlkZSl9PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMS41ZW1cIiwgaGVpZ2h0OiBcIjEuNWVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLDE1LjVBMy41LDMuNSAwIDAsMSA4LjUsMTJBMy41LDMuNSAwIDAsMSAxMiw4LjVBMy41LDMuNSAwIDAsMSAxNS41LDEyQTMuNSwzLjUgMCAwLDEgMTIsMTUuNU0xOS40MywxMi45N0MxOS40NywxMi42NSAxOS41LDEyLjMzIDE5LjUsMTJDMTkuNSwxMS42NyAxOS40NywxMS4zNCAxOS40MywxMUwyMS41NCw5LjM3QzIxLjczLDkuMjIgMjEuNzgsOC45NSAyMS42Niw4LjczTDE5LjY2LDUuMjdDMTkuNTQsNS4wNSAxOS4yNyw0Ljk2IDE5LjA1LDUuMDVMMTYuNTYsNi4wNUMxNi4wNCw1LjY2IDE1LjUsNS4zMiAxNC44Nyw1LjA3TDE0LjUsMi40MkMxNC40NiwyLjE4IDE0LjI1LDIgMTQsMkgxMEM5Ljc1LDIgOS41NCwyLjE4IDkuNSwyLjQyTDkuMTMsNS4wN0M4LjUsNS4zMiA3Ljk2LDUuNjYgNy40NCw2LjA1TDQuOTUsNS4wNUM0LjczLDQuOTYgNC40Niw1LjA1IDQuMzQsNS4yN0wyLjM0LDguNzNDMi4yMSw4Ljk1IDIuMjcsOS4yMiAyLjQ2LDkuMzdMNC41NywxMUM0LjUzLDExLjM0IDQuNSwxMS42NyA0LjUsMTJDNC41LDEyLjMzIDQuNTMsMTIuNjUgNC41NywxMi45N0wyLjQ2LDE0LjYzQzIuMjcsMTQuNzggMi4yMSwxNS4wNSAyLjM0LDE1LjI3TDQuMzQsMTguNzNDNC40NiwxOC45NSA0LjczLDE5LjAzIDQuOTUsMTguOTVMNy40NCwxNy45NEM3Ljk2LDE4LjM0IDguNSwxOC42OCA5LjEzLDE4LjkzTDkuNSwyMS41OEM5LjU0LDIxLjgyIDkuNzUsMjIgMTAsMjJIMTRDMTQuMjUsMjIgMTQuNDYsMjEuODIgMTQuNSwyMS41OEwxNC44NywxOC45M0MxNS41LDE4LjY3IDE2LjA0LDE4LjM0IDE2LjU2LDE3Ljk0TDE5LjA1LDE4Ljk1QzE5LjI3LDE5LjAzIDE5LjU0LDE4Ljk1IDE5LjY2LDE4LjczTDIxLjY2LDE1LjI3QzIxLjc4LDE1LjA1IDIxLjczLDE0Ljc4IDIxLjU0LDE0LjYzTDE5LjQzLDEyLjk3WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB2YWx1ZXNba2V5XVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5zdGVwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17aXRlbS5zdGVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlKGtleSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW4gPSBpdGVtLm1pbiA/PyAwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IGl0ZW0ubWF4ID8/IDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXtpdGVtLnN0ZXAgPz8gKG1heCAtIG1pbikgLyAxMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlKGtleSwgdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9zbGlkZXJcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zbGlkZXIubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIGxhYmVsOiBzdHJpbmdcbiAgICBtaW46IG51bWJlclxuICAgIG1heDogbnVtYmVyXG4gICAgc3RlcDogbnVtYmVyXG4gICAgdmFsdWU6IG51bWJlclxuICAgIG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcih7IGNsYXNzTmFtZSwgbGFiZWwsIG1pbiwgbWF4LCBzdGVwLCB2YWx1ZSwgb25DaGFuZ2UgfTogU2xpZGVyUHJvcHMpIHtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuc2xpZGVyKX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3ZhbHVlLnRvRml4ZWQoMil9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBzdGVwPXtzdGVwfSBtaW49e21pbn0gbWF4PXttYXh9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJUZ2RDb250ZXh0IiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkUGFpbnRlckdpem1vIiwidGdkTG9hZEFycmF5QnVmZmVyIiwidGdkTG9hZEdsYiIsInRnZExvYWRJbWFnZSIsInRnZExvYWRUZXh0IiwiSWNvbkNlbnRlciIsIkljb25GdWxsc2NyZWVuIiwiSWNvbk9yaWVudGF0aW9uIiwiSWNvblBpbiIsIkljb25TbmFwc2hvdCIsIlRoZW1lIiwiUmVhY3QiLCJTZXR0aW5ncyIsIlNwaW5uZXIiLCJzdHlsZXMiLCJUZ2QiLCJwYXJhbSIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJvblJlYWR5IiwiZ2l6bW8iLCJ3aWR0aCIsImhlaWdodCIsIm5vQm9yZGVyIiwiYXNzZXRzIiwiY29udHJvbGxlciIsInNldHRpbmdzIiwiY2hpbGRyZW4iLCJmdWxsc2NyZWVuIiwicmVmVXBkYXRlU2V0dGluZ3MiLCJfUmVhY3RfdXNlU3RhdGUiLCJzZXR0aW5nVmFsdWVzIiwic2V0U2V0dGluZ1ZhbHVlcyIsInJlZHVjZVNldHRpbmdzIiwidmFsdWVzIiwiX2l0ZXJhdG9yRXJyb3IiLCJPYmplY3QiLCJrZXkiLCJfUmVhY3RfdXNlU3RhdGUxIiwiZXJyb3IiLCJzZXRFcnJvciIsIl9SZWFjdF91c2VTdGF0ZTIiLCJsYW5kc2NhcGUiLCJzZXRMYW5kc2NhcGUiLCJfUmVhY3RfdXNlU3RhdGUzIiwiZnVsbHNjcmVlbkF2YWlsYWJsZSIsInNldEZ1bGxzY3JlZW5BdmFpbGFibGUiLCJyZWZDb250ZXh0IiwicmVmQ2FudmFzIiwicmVmU2NyZWVuIiwicmVmT3JiaXRlciIsIl9SZWFjdF91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1vdW50Q2FudmFzIiwiY2FudmFzIiwiY29udGV4dCIsImRlcHRoQml0cyIsImNvbnNvbGUiLCJsb2FkQXNzZXRzIiwibG9hZGVkQXNzZXRzIiwib3JiaXRlciIsImV4IiwiX2luc3RhbmNlb2YiLCJFcnJvciIsIkpTT04iLCJoYW5kbGVGdWxsc2NyZWVuIiwiZGl2IiwiaGFuZGxlU2NyZWVuc2hvdCIsImltZyIsImEiLCJkb2N1bWVudCIsIndpbmRvdyIsImhhbmRsZVNldENhbWVyYVJlc3RQb3NpdGlvbiIsImhhbmRsZVJlc2V0Q2FtZXJhIiwiX2NvbnRyb2xsZXJfaW5lcnRpYU9yYml0Iiwic2NlbmUiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiQm9vbGVhbiIsInN0eWxlIiwib25DbGljayIsIl9yZWYiLCJnbGIiLCJkYXRhIiwidGV4dCIsImltYWdlIiwibG9hZGVycyIsInVybCIsImFzc2V0IiwiUHJvbWlzZSIsImxvYWRlciIsIlN0eWxlcyIsIlZpZXdMYWJlbCIsIlZpZXdPcHRpb25zIiwiT3B0aW9uIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic3RlcCIsIm9uQ2hhbmdlMSIsInYiLCJwYXJzZUZsb2F0IiwiY2FwdGlvbiIsImluZGV4IiwiU2xpZGVyIiwic2hvdyIsInNldFNob3ciLCJ1cGRhdGUiLCJuZXdWYWx1ZXMiLCJfaXRlbV9taW4iLCJfaXRlbV9tYXgiLCJfaXRlbV9zdGVwIiwiaXRlbSIsIkFycmF5IiwibWluIiwibWF4IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyw4cEJBQThwQixFOzs7Ozs7OztBQ0Q5cUI7QUFDQSxzREFBZSxDQUFDLHNFQUFzRSxFOzs7Ozs7OztBQ0R0RjtBQUNBLHNEQUFlLENBQUMsK0xBQStMLEU7Ozs7Ozs7O0FDRC9NO0FB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