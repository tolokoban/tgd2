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
                    lineNumber: 207,
                    columnNumber: 5
                }, this),
                settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                    values: settingValues,
                    onChange: setSettingValues
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 209,
                    columnNumber: 6
                }, this),
                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    className: _tgd_module_css__rspack_import_6["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 211,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
            lineNumber: 199,
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
                            lineNumber: 225,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 224,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Take a snapshot of the scene",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconSnapshot, {
                            onClick: handleScreenshot
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 228,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 227,
                        columnNumber: 5
                    }, this),
                    fullscreenAvailable && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        title: "Go fullscreen",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                            onClick: handleFullscreen
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 232,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 231,
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
                                    lineNumber: 238,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 237,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                title: "Restore camera to previously saved position",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconCenter, {
                                    onClick: handleResetCamera
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                    lineNumber: 241,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 240,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 218,
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
                                lineNumber: 255,
                                columnNumber: 6
                            }, this),
                            settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                                values: settingValues,
                                onChange: setSettingValues
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 257,
                                columnNumber: 7
                            }, this),
                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                className: _tgd_module_css__rspack_import_6["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 259,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 247,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Spinner__rspack_import_5["default"], {}, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 267,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 261,
                        columnNumber: 5
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 246,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
        lineNumber: 217,
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
                        lineNumber: 58,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                    lineNumber: 52,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 51,
                columnNumber: 4
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
                            lineNumber: 72,
                            columnNumber: 8
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
                        lineNumber: 85,
                        columnNumber: 7
                    }, _this);
                })
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
                lineNumber: 65,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/settings/settings.tsx",
        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuMGJjYjI0YTVhMDkyNmM3NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL1RnZC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRnZFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9UZ2RfTUVTVm14XCIsXCJzY3JlZW5cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfc2NyZWVuX053SUh2dVwiLFwiZnVsbHNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9mdWxsc2NyZWVuX2FHYTAwSVwiLFwicmVsYXRpdmVcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfcmVsYXRpdmVfSWN0SjdMXCIsXCJvdmVybGF5XCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX292ZXJsYXlfdzdFWGthXCIsXCJsb2FkaW5nXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2xvYWRpbmdfYzRUTURqXCIsXCJjYW52YXNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfY2FudmFzX092Tzd1WFwiLFwiZ2l6bW9cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZ2l6bW9fcjBlNUNhXCIsXCJhY3Rpb25zXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2FjdGlvbnNfT0JoQTE3XCIsXCJlbmFibGVkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2VuYWJsZWRfZHh0blc2XCIsXCJlcnJvclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9lcnJvcl9xZ3NETlVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm9wdGlvblwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3MtT3B0aW9uLU9wdGlvbi1tb2R1bGVfb3B0aW9uX3p2V3hIUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGdkXCI7XG4iLCJpbXBvcnQge1xuXHRUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0T3B0aW9ucyxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2RQYWludGVyR2l6bW8sXG5cdHRnZExvYWRBcnJheUJ1ZmZlcixcblx0dGdkTG9hZEdsYixcblx0dGdkTG9hZEltYWdlLFxuXHR0Z2RMb2FkVGV4dCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQge1xuXHRJY29uQ2VudGVyLFxuXHRJY29uRnVsbHNjcmVlbixcblx0SWNvbk9yaWVudGF0aW9uLFxuXHRJY29uUGluLFxuXHRJY29uU25hcHNob3QsXG5cdFRoZW1lLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IFJlYWN0LCB7IHR5cGUgQ1NTUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9TcGlubmVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RnZC5tb2R1bGUuY3NzXCI7XG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG5cdGltYWdlOiBSZWNvcmQ8c3RyaW5nLCBIVE1MSW1hZ2VFbGVtZW50Pjtcblx0Z2xiOiBSZWNvcmQ8c3RyaW5nLCBUZ2REYXRhR2xiPjtcblx0ZGF0YTogUmVjb3JkPHN0cmluZywgQXJyYXlCdWZmZXI+O1xuXHR0ZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufVxuXG50eXBlIEFzc2V0c1RvTG9hZCA9IHtcblx0W2tleSBpbiBrZXlvZiBBc3NldHNdOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufTtcblxuaW50ZXJmYWNlIFRnZFByb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0b3B0aW9ucz86IFdlYkdMQ29udGV4dEF0dHJpYnV0ZXM7XG5cdG9uUmVhZHkoXG5cdFx0c2NlbmU6IFRnZENvbnRleHQsXG5cdFx0YXNzZXRzOiBBc3NldHMsXG5cdCk6IHZvaWQgfCB1bmRlZmluZWQgfCAoKHNldHRpbmdzOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPikgPT4gdm9pZCk7XG5cdHdpZHRoPzogc3RyaW5nO1xuXHRoZWlnaHQ/OiBzdHJpbmc7XG5cdG5vQm9yZGVyPzogYm9vbGVhbjtcblx0Z2l6bW8/OiBib29sZWFuO1xuXHRhc3NldHM/OiBQYXJ0aWFsPEFzc2V0c1RvTG9hZD47XG5cdGNvbnRyb2xsZXI/OiBQYXJ0aWFsPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdE9wdGlvbnM+O1xuXHRjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcblx0c2V0dGluZ3M/OiBUO1xuXHRmdWxsc2NyZWVuPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuXHRjbGFzc05hbWUsXG5cdG9wdGlvbnMsXG5cdG9uUmVhZHksXG5cdGdpem1vID0gZmFsc2UsXG5cdHdpZHRoID0gXCI2NDBweFwiLFxuXHRoZWlnaHQgPSBcIjQ4MHB4XCIsXG5cdG5vQm9yZGVyID0gZmFsc2UsXG5cdGFzc2V0cyxcblx0Y29udHJvbGxlcixcblx0c2V0dGluZ3MsXG5cdGNoaWxkcmVuLFxuXHRmdWxsc2NyZWVuID0gZmFsc2UsXG59OiBUZ2RQcm9wczxUPikge1xuXHRjb25zdCByZWZVcGRhdGVTZXR0aW5ncyA9IFJlYWN0LnVzZVJlZjxcblx0XHR2b2lkIHwgbnVsbCB8ICgoc2V0dGluZ3M6IFJlY29yZDxrZXlvZiBULCBudW1iZXI+KSA9PiB2b2lkKVxuXHQ+KG51bGwpO1xuXHRjb25zdCBbc2V0dGluZ1ZhbHVlcywgc2V0U2V0dGluZ1ZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZShzZXR0aW5ncyk7XG5cdGNvbnN0IHJlZHVjZVNldHRpbmdzID0gUmVhY3QudXNlQ2FsbGJhY2soKCk6IFJlY29yZDxrZXlvZiBULCBudW1iZXI+ID0+IHtcblx0XHRpZiAoIXNldHRpbmdWYWx1ZXMpIHJldHVybiB7fSBhcyBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPjtcblx0XHRjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzZXR0aW5nVmFsdWVzKSkge1xuXHRcdFx0dmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZXMgYXMgUmVjb3JkPGtleW9mIFQsIG51bWJlcj47XG5cdH0sIFtzZXR0aW5nVmFsdWVzXSk7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHNldHRpbmdWYWx1ZXMpIHtcblx0XHRcdGNvbnN0IHZhbHVlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZ1ZhbHVlcykpIHtcblx0XHRcdFx0dmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRyZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50Py4ocmVkdWNlU2V0dGluZ3MoKSk7XG5cdFx0fVxuXHR9LCBbc2V0dGluZ1ZhbHVlcywgcmVkdWNlU2V0dGluZ3NdKTtcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblx0Y29uc3QgW2xhbmRzY2FwZSwgc2V0TGFuZHNjYXBlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbZnVsbHNjcmVlbkF2YWlsYWJsZSwgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpO1xuXHRjb25zdCByZWZDYW52YXMgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKTtcblx0Y29uc3QgcmVmU2NyZWVuID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IHJlZk9yYml0ZXIgPSBSZWFjdC51c2VSZWY8VGdkQ29udHJvbGxlckNhbWVyYU9yYml0IHwgbnVsbD4obnVsbCk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBtb3VudENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG5cdFx0aWYgKCFjYW52YXMpIHJldHVybjtcblxuXHRcdGlmIChyZWZDYW52YXMuY3VycmVudCkgcmV0dXJuO1xuXG5cdFx0cmVmQ2FudmFzLmN1cnJlbnQgPSBjYW52YXM7XG5cdFx0aWYgKGdpem1vICYmIG9wdGlvbnMpIG9wdGlvbnMuYWxwaGEgPSBmYWxzZTtcblx0XHRjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzLCB7XG5cdFx0XHRhbHBoYTogZmFsc2UsXG5cdFx0XHQuLi5vcHRpb25zLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGRlcHRoQml0cyA9IGNvbnRleHQuZ2wuZ2V0UGFyYW1ldGVyKGNvbnRleHQuZ2wuREVQVEhfQklUUyk7XG5cdFx0Y29uc29sZS5sb2coXCJEZXB0aCBidWZmZXIgYml0czpcIiwgZGVwdGhCaXRzKTtcblx0XHRyZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0O1xuXHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cdFx0bG9hZEFzc2V0cyhhc3NldHMpXG5cdFx0XHQudGhlbigobG9hZGVkQXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY29udHJvbGxlcikge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdFx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhWm9vbTogNTAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhUGFubmluZzogNTAwLFxuXHRcdFx0XHRcdFx0XHQuLi5jb250cm9sbGVyLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRyZWZPcmJpdGVyLmN1cnJlbnQgPSBvcmJpdGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50ID0gb25SZWFkeShjb250ZXh0LCBsb2FkZWRBc3NldHMpO1xuXHRcdFx0XHRcdHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQ/LihyZWR1Y2VTZXR0aW5ncygpKTtcblx0XHRcdFx0XHRpZiAoZ2l6bW8pIHtcblx0XHRcdFx0XHRcdGNvbnRleHQuYWRkKG5ldyBUZ2RQYWludGVyR2l6bW8oY29udGV4dCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250ZXh0LmRlYnVnSGllcmFyY2h5KCk7XG5cdFx0XHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdFx0XHR9IGNhdGNoIChleCkge1xuXHRcdFx0XHRcdHNldEVycm9yKGV4IGluc3RhbmNlb2YgRXJyb3IgPyBleC5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXgpKTtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGV4KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSB0aGUgc2NlbmUhXCIsIGV4KTtcblx0XHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgaGFuZGxlRnVsbHNjcmVlbiA9ICgpID0+IHtcblx0XHRjb25zdCBkaXYgPSByZWZTY3JlZW4uY3VycmVudDtcblx0XHRpZiAoIWRpdikgcmV0dXJuO1xuXG5cdFx0ZGl2LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudDtcblx0XHRpZiAoIWNvbnRleHQpIHJldHVybjtcblxuXHRcdGNvbnRleHQudGFrZVNuYXBzaG90KCkudGhlbigoaW1nKSA9PiB7XG5cdFx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuXHRcdFx0YS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRhLmhyZWYgPSBpbWcuc3JjO1xuXHRcdFx0YS5kb3dubG9hZCA9IFwic25hcHNob3QucG5nXCI7XG5cdFx0XHRhLmNsaWNrKCk7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpLCAzMDAwMCk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGhhbmRsZVNldENhbWVyYVJlc3RQb3NpdGlvbiA9ICgpID0+IHtcblx0XHRjb25zdCBvcmJpdGVyID0gcmVmT3JiaXRlci5jdXJyZW50O1xuXHRcdGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnQ7XG5cdFx0aWYgKCFjb250ZXh0IHx8ICFvcmJpdGVyKSByZXR1cm47XG5cblx0XHRvcmJpdGVyLmNhbWVyYUluaXRpYWxTdGF0ZSA9IGNvbnRleHQuY2FtZXJhLmdldEN1cnJlbnRTdGF0ZSgpO1xuXHRcdG9yYml0ZXIuem9vbSA9IDE7XG5cdH07XG5cdGNvbnN0IGhhbmRsZVJlc2V0Q2FtZXJhID0gKCkgPT4ge1xuXHRcdGNvbnN0IG9yYml0ZXIgPSByZWZPcmJpdGVyLmN1cnJlbnQ7XG5cdFx0aWYgKCFvcmJpdGVyIHx8ICFjb250cm9sbGVyKSByZXR1cm47XG5cblx0XHRvcmJpdGVyLnJlc2V0KChjb250cm9sbGVyLmluZXJ0aWFPcmJpdCA/PyA1MDApICogMWUtMyk7XG5cdH07XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgY2FudmFzID0gcmVmQ2FudmFzLmN1cnJlbnQ7XG5cdFx0Y29uc3Qgc2NlbmUgPSByZWZDb250ZXh0LmN1cnJlbnQ7XG5cdFx0aWYgKCFjYW52YXMgfHwgIXNjZW5lKSByZXR1cm47XG5cblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBzY2VuZS5wYWludCgpKTtcblx0XHRvYnNlcnZlci5vYnNlcnZlKGNhbnZhcyk7XG5cdFx0aWYgKCFjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcblx0XHRcdGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbiA9IChjYW52YXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbXG5cdFx0XHRcdFwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW5cIlxuXHRcdFx0XSBhcyAob3B0aW9ucz86IEZ1bGxzY3JlZW5PcHRpb25zKSA9PiBQcm9taXNlPHZvaWQ+O1xuXHRcdH1cblx0XHRzZXRGdWxsc2NyZWVuQXZhaWxhYmxlKEJvb2xlYW4oY2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuKSk7XG5cdFx0cmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShjYW52YXMpO1xuXHR9LCBbcmVmQ29udGV4dC5jdXJyZW50LCByZWZDYW52YXMuY3VycmVudF0pO1xuXG5cdGlmIChub0JvcmRlciB8fCBmdWxsc2NyZWVuKSB7XG5cdFx0Y29uc3Qgc3R5bGU6IENTU1Byb3BlcnRpZXMgPSBmdWxsc2NyZWVuXG5cdFx0XHQ/IHt9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHR3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG5cdFx0XHRcdFx0aGVpZ2h0OiBsYW5kc2NhcGUgPyBoZWlnaHQgOiB3aWR0aCxcblx0XHRcdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3JlZlNjcmVlbn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oXG5cdFx0XHRcdFx0c3R5bGVzLnNjcmVlbixcblx0XHRcdFx0XHRmdWxsc2NyZWVuICYmIHN0eWxlcy5mdWxsc2NyZWVuLFxuXHRcdFx0XHQpfVxuXHRcdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0XHQ+XG5cdFx0XHRcdDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfSByZWY9e21vdW50Q2FudmFzfSAvPlxuXHRcdFx0XHR7c2V0dGluZ1ZhbHVlcyAmJiAoXG5cdFx0XHRcdFx0PFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5UZ2QpfT5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oXG5cdFx0XHRcdFx0c3R5bGVzLmFjdGlvbnMsXG5cdFx0XHRcdFx0IWxvYWRpbmcgJiYgc3R5bGVzLmVuYWJsZWQsXG5cdFx0XHRcdCl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgdGl0bGU9XCJTd2l0Y2ggbGFuZHNjYXBlIC8gcG9ydHJhaXRcIj5cblx0XHRcdFx0XHQ8SWNvbk9yaWVudGF0aW9uIG9uQ2xpY2s9eygpID0+IHNldExhbmRzY2FwZSghbGFuZHNjYXBlKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgdGl0bGU9XCJUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHNjZW5lXCI+XG5cdFx0XHRcdFx0PEljb25TbmFwc2hvdCBvbkNsaWNrPXtoYW5kbGVTY3JlZW5zaG90fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2Z1bGxzY3JlZW5BdmFpbGFibGUgJiYgKFxuXHRcdFx0XHRcdDxkaXYgdGl0bGU9XCJHbyBmdWxsc2NyZWVuXCI+XG5cdFx0XHRcdFx0XHQ8SWNvbkZ1bGxzY3JlZW4gb25DbGljaz17aGFuZGxlRnVsbHNjcmVlbn0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2NvbnRyb2xsZXIgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8ZGl2IHRpdGxlPVwiU2F2ZSBjdXJyZW50IGNhbWVyYSBwb3NpdGlvblwiPlxuXHRcdFx0XHRcdFx0XHQ8SWNvblBpbiBvbkNsaWNrPXtoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb259IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgdGl0bGU9XCJSZXN0b3JlIGNhbWVyYSB0byBwcmV2aW91c2x5IHNhdmVkIHBvc2l0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxJY29uQ2VudGVyIG9uQ2xpY2s9e2hhbmRsZVJlc2V0Q2FtZXJhfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0cmVmPXtyZWZTY3JlZW59XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuc2NyZWVufVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHR3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGxhbmRzY2FwZSA/IGhlaWdodCA6IHdpZHRoLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXttb3VudENhbnZhc30gLz5cblx0XHRcdFx0XHR7c2V0dGluZ1ZhbHVlcyAmJiAoXG5cdFx0XHRcdFx0XHQ8U2V0dGluZ3M8VD4gdmFsdWVzPXtzZXR0aW5nVmFsdWVzfSBvbkNoYW5nZT17c2V0U2V0dGluZ1ZhbHVlc30gLz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKFxuXHRcdFx0XHRcdFx0c3R5bGVzLm92ZXJsYXksXG5cdFx0XHRcdFx0XHRsb2FkaW5nICYmIHN0eWxlcy5sb2FkaW5nLFxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8U3Bpbm5lciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBc3NldHMoe1xuXHRnbGIsXG5cdGRhdGEsXG5cdHRleHQsXG5cdGltYWdlLFxufTogUGFydGlhbDxBc3NldHNUb0xvYWQ+ID0ge30pOiBQcm9taXNlPEFzc2V0cz4ge1xuXHRjb25zdCBhc3NldHM6IEFzc2V0cyA9IHtcblx0XHRnbGI6IHt9LFxuXHRcdGRhdGE6IHt9LFxuXHRcdHRleHQ6IHt9LFxuXHRcdGltYWdlOiB7fSxcblx0fTtcblx0Y29uc3QgbG9hZGVyczogQXJyYXk8KCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBbXTtcblx0aWYgKGltYWdlKSB7XG5cdFx0T2JqZWN0LmtleXMoaW1hZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0bG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gaW1hZ2Vba2V5XTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nIGltYWdlOlwiLCB1cmwpO1xuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRJbWFnZSh1cmwpO1xuXHRcdFx0XHRpZiAoYXNzZXQpIGFzc2V0cy5pbWFnZVtrZXldID0gYXNzZXQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXHRpZiAoZ2xiKSB7XG5cdFx0T2JqZWN0LmtleXMoZ2xiKS5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGdsYltrZXldO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkxvYWRpbmcgR0xCOlwiLCB1cmwpO1xuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKTtcblx0XHRcdFx0aWYgKGFzc2V0KSBhc3NldHMuZ2xiW2tleV0gPSBhc3NldDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdGlmIChkYXRhKSB7XG5cdFx0T2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBkYXRhW2tleV07XG5cdFx0XHRcdGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybCk7XG5cdFx0XHRcdGlmIChhc3NldCkgYXNzZXRzLmRhdGFba2V5XSA9IGFzc2V0O1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKHRleHQpIHtcblx0XHRPYmplY3Qua2V5cyh0ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRleHRba2V5XTtcblx0XHRcdFx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkVGV4dCh1cmwpO1xuXHRcdFx0XHRpZiAoYXNzZXQpIGFzc2V0cy50ZXh0W2tleV0gPSBhc3NldDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdGF3YWl0IFByb21pc2UuYWxsKGxvYWRlcnMubWFwKChsb2FkZXIpID0+IGxvYWRlcigpKSk7XG5cdHJldHVybiBhc3NldHM7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9PcHRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgVmlld0xhYmVsLCBWaWV3T3B0aW9ucyB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmV4cG9ydCB0eXBlIE9wdGlvblByb3BzID0ge1xuXHRsYWJlbDogc3RyaW5nO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcblx0c3RlcDogc3RyaW5nW107XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gT3B0aW9uKHsgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSwgc3RlcCB9OiBPcHRpb25Qcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMub3B0aW9ufT5cblx0XHRcdDxWaWV3TGFiZWw+e2xhYmVsfTwvVmlld0xhYmVsPlxuXHRcdFx0PFZpZXdPcHRpb25zIHZhbHVlPXtgJHt2YWx1ZX1gfSBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHBhcnNlRmxvYXQodikpfT5cblx0XHRcdFx0e3N0ZXAubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxkaXYga2V5PXtpbmRleH0+e2NhcHRpb259PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9WaWV3T3B0aW9ucz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL09wdGlvblwiO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9zbGlkZXJcIjtcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuL09wdGlvblwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NldHRpbmdzLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyA9IFJlY29yZDxcblx0c3RyaW5nLFxuXHR7XG5cdFx0dmFsdWU6IG51bWJlcjtcblx0XHRsYWJlbDogc3RyaW5nO1xuXHRcdG1pbj86IG51bWJlcjtcblx0XHRtYXg/OiBudW1iZXI7XG5cdFx0c3RlcD86IG51bWJlciB8IHN0cmluZ1tdO1xuXHR9XG4+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzUHJvcHM8VCBleHRlbmRzIFNldHRpbmdzRGVmaW5pdGlvbnM+IHtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHR2YWx1ZXM6IFQ7XG5cdG9uQ2hhbmdlKHZhbHVlczogVCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuXHRjbGFzc05hbWUsXG5cdHZhbHVlcyxcblx0b25DaGFuZ2UsXG59OiBTZXR0aW5nc1Byb3BzPFQ+KSB7XG5cdGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgdXBkYXRlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgbmV3VmFsdWVzID0ge1xuXHRcdFx0Li4udmFsdWVzLFxuXHRcdFx0W2tleV06IHtcblx0XHRcdFx0Li4udmFsdWVzW2tleV0sXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdG9uQ2hhbmdlKG5ld1ZhbHVlcyk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihcblx0XHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0XHRzdHlsZXMuc2V0dGluZ3MsXG5cdFx0XHRcdHNob3cgPyBzdHlsZXMuc2hvdyA6IHN0eWxlcy5oaWRlLFxuXHRcdFx0KX1cblx0XHQ+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxLjVlbVwiLCBoZWlnaHQ6IFwiMS41ZW1cIiB9fVxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuXHRcdFx0XHRcdHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCJcblx0XHRcdFx0XHRzdHJva2Utd2lkdGg9XCIxLjVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdGQ9XCJNMTIsMTUuNUEzLjUsMy41IDAgMCwxIDguNSwxMkEzLjUsMy41IDAgMCwxIDEyLDguNUEzLjUsMy41IDAgMCwxIDE1LjUsMTJBMy41LDMuNSAwIDAsMSAxMiwxNS41TTE5LjQzLDEyLjk3QzE5LjQ3LDEyLjY1IDE5LjUsMTIuMzMgMTkuNSwxMkMxOS41LDExLjY3IDE5LjQ3LDExLjM0IDE5LjQzLDExTDIxLjU0LDkuMzdDMjEuNzMsOS4yMiAyMS43OCw4Ljk1IDIxLjY2LDguNzNMMTkuNjYsNS4yN0MxOS41NCw1LjA1IDE5LjI3LDQuOTYgMTkuMDUsNS4wNUwxNi41Niw2LjA1QzE2LjA0LDUuNjYgMTUuNSw1LjMyIDE0Ljg3LDUuMDdMMTQuNSwyLjQyQzE0LjQ2LDIuMTggMTQuMjUsMiAxNCwySDEwQzkuNzUsMiA5LjU0LDIuMTggOS41LDIuNDJMOS4xMyw1LjA3QzguNSw1LjMyIDcuOTYsNS42NiA3LjQ0LDYuMDVMNC45NSw1LjA1QzQuNzMsNC45NiA0LjQ2LDUuMDUgNC4zNCw1LjI3TDIuMzQsOC43M0MyLjIxLDguOTUgMi4yNyw5LjIyIDIuNDYsOS4zN0w0LjU3LDExQzQuNTMsMTEuMzQgNC41LDExLjY3IDQuNSwxMkM0LjUsMTIuMzMgNC41MywxMi42NSA0LjU3LDEyLjk3TDIuNDYsMTQuNjNDMi4yNywxNC43OCAyLjIxLDE1LjA1IDIuMzQsMTUuMjdMNC4zNCwxOC43M0M0LjQ2LDE4Ljk1IDQuNzMsMTkuMDMgNC45NSwxOC45NUw3LjQ0LDE3Ljk0QzcuOTYsMTguMzQgOC41LDE4LjY4IDkuMTMsMTguOTNMOS41LDIxLjU4QzkuNTQsMjEuODIgOS43NSwyMiAxMCwyMkgxNEMxNC4yNSwyMiAxNC40NiwyMS44MiAxNC41LDIxLjU4TDE0Ljg3LDE4LjkzQzE1LjUsMTguNjcgMTYuMDQsMTguMzQgMTYuNTYsMTcuOTRMMTkuMDUsMTguOTVDMTkuMjcsMTkuMDMgMTkuNTQsMTguOTUgMTkuNjYsMTguNzNMMjEuNjYsMTUuMjdDMjEuNzgsMTUuMDUgMjEuNzMsMTQuNzggMjEuNTQsMTQuNjNMMTkuNDMsMTIuOTdaXCJcblx0XHRcdFx0XHRcdHN0cm9rZT1cIm5vbmVcIlxuXHRcdFx0XHRcdFx0ZmlsbD1cIiNmZmZcIlxuXHRcdFx0XHRcdD48L3BhdGg+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7T2JqZWN0LmtleXModmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSB2YWx1ZXNba2V5XTtcblx0XHRcdFx0XHRpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xuXG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbS5zdGVwKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9e2l0ZW0uc3RlcH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IG1pbiA9IGl0ZW0ubWluID8/IDA7XG5cdFx0XHRcdFx0Y29uc3QgbWF4ID0gaXRlbS5tYXggPz8gMTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PFNsaWRlclxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdG1pbj17bWlufVxuXHRcdFx0XHRcdFx0XHRtYXg9e21heH1cblx0XHRcdFx0XHRcdFx0c3RlcD17aXRlbS5zdGVwID8/IChtYXggLSBtaW4pIC8gMTAwfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlKGtleSwgdmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3NsaWRlclwiO1xuIiwiaW1wb3J0IHR5cGUgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2xpZGVyLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcm9wcyB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcblx0bWluOiBudW1iZXI7XG5cdG1heDogbnVtYmVyO1xuXHRzdGVwOiBudW1iZXI7XG5cdHZhbHVlOiBudW1iZXI7XG5cdG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoe1xuXHRjbGFzc05hbWUsXG5cdGxhYmVsLFxuXHRtaW4sXG5cdG1heCxcblx0c3RlcCxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxufTogU2xpZGVyUHJvcHMpIHtcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IG5ld1ZhbHVlID0gcGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdG9uQ2hhbmdlKG5ld1ZhbHVlKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuc2xpZGVyKX0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2PntsYWJlbH08L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Ryb25nPnt2YWx1ZS50b0ZpeGVkKDIpfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHR5cGU9XCJyYW5nZVwiXG5cdFx0XHRcdHN0ZXA9e3N0ZXB9XG5cdFx0XHRcdG1pbj17bWlufVxuXHRcdFx0XHRtYXg9e21heH1cblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGdkQ29udGV4dCIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZFBhaW50ZXJHaXptbyIsInRnZExvYWRBcnJheUJ1ZmZlciIsInRnZExvYWRHbGIiLCJ0Z2RMb2FkSW1hZ2UiLCJ0Z2RMb2FkVGV4dCIsIkljb25DZW50ZXIiLCJJY29uRnVsbHNjcmVlbiIsIkljb25PcmllbnRhdGlvbiIsIkljb25QaW4iLCJJY29uU25hcHNob3QiLCJUaGVtZSIsIlJlYWN0IiwiU2V0dGluZ3MiLCJTcGlubmVyIiwic3R5bGVzIiwiVGdkIiwicGFyYW0iLCJjbGFzc05hbWUiLCJvcHRpb25zIiwib25SZWFkeSIsImdpem1vIiwid2lkdGgiLCJoZWlnaHQiLCJub0JvcmRlciIsImFzc2V0cyIsImNvbnRyb2xsZXIiLCJzZXR0aW5ncyIsImNoaWxkcmVuIiwiZnVsbHNjcmVlbiIsInJlZlVwZGF0ZVNldHRpbmdzIiwiX1JlYWN0X3VzZVN0YXRlIiwic2V0dGluZ1ZhbHVlcyIsInNldFNldHRpbmdWYWx1ZXMiLCJyZWR1Y2VTZXR0aW5ncyIsInZhbHVlcyIsIl9pdGVyYXRvckVycm9yIiwiT2JqZWN0Iiwia2V5IiwiX1JlYWN0X3VzZVN0YXRlMSIsImVycm9yIiwic2V0RXJyb3IiLCJfUmVhY3RfdXNlU3RhdGUyIiwibGFuZHNjYXBlIiwic2V0TGFuZHNjYXBlIiwiX1JlYWN0X3VzZVN0YXRlMyIsImZ1bGxzY3JlZW5BdmFpbGFibGUiLCJzZXRGdWxsc2NyZWVuQXZhaWxhYmxlIiwicmVmQ29udGV4dCIsInJlZkNhbnZhcyIsInJlZlNjcmVlbiIsInJlZk9yYml0ZXIiLCJfUmVhY3RfdXNlU3RhdGU0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJtb3VudENhbnZhcyIsImNhbnZhcyIsImNvbnRleHQiLCJkZXB0aEJpdHMiLCJjb25zb2xlIiwibG9hZEFzc2V0cyIsImxvYWRlZEFzc2V0cyIsIm9yYml0ZXIiLCJleCIsIl9pbnN0YW5jZW9mIiwiRXJyb3IiLCJKU09OIiwiaGFuZGxlRnVsbHNjcmVlbiIsImRpdiIsImhhbmRsZVNjcmVlbnNob3QiLCJpbWciLCJhIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb24iLCJoYW5kbGVSZXNldENhbWVyYSIsIl9jb250cm9sbGVyX2luZXJ0aWFPcmJpdCIsInNjZW5lIiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIkJvb2xlYW4iLCJzdHlsZSIsIm9uQ2xpY2siLCJfcmVmIiwiZ2xiIiwiZGF0YSIsInRleHQiLCJpbWFnZSIsImxvYWRlcnMiLCJ1cmwiLCJhc3NldCIsIlByb21pc2UiLCJsb2FkZXIiLCJTdHlsZXMiLCJWaWV3TGFiZWwiLCJWaWV3T3B0aW9ucyIsIk9wdGlvbiIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInN0ZXAiLCJvbkNoYW5nZTEiLCJ2IiwicGFyc2VGbG9hdCIsImNhcHRpb24iLCJpbmRleCIsIlNsaWRlciIsInNob3ciLCJzZXRTaG93IiwidXBkYXRlIiwibmV3VmFsdWVzIiwiX2l0ZW1fbWluIiwiX2l0ZW1fbWF4IiwiX2l0ZW1fc3RlcCIsIml0ZW0iLCJBcnJheSIsIm1pbiIsIm1heCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsOHBCQUE4cEIsRTs7Ozs7Ozs7QUNEOXFCO0FBQ0Esc0RBQWUsQ0FBQyxzRUFBc0UsRTs7Ozs7Ozs7QUNEdEY7QUFDQSxzREFBZSxDQUFDLCtMQUErTCxFOzs7Ozs7OztBQ0QvTTtBQUNBLHNEQUFlLENBQUMsc0VBQXNFLEU7Ozs7Ozs7OztBQ0R0RDtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTRTtBQVFEO0FBQzJCO0FBQ3lCO0FBQ3ZDO0FBQ0U7QUE2QnZCLFNBQVNrQixJQUFtQ0MsS0FhN0M7UUFaYkMsWUFEMERELE1BQzFEQyxXQUNBQyxVQUYwREYsTUFFMURFLFNBQ0FDLFVBSDBESCxNQUcxREcsd0JBSDBESCxNQUkxREksT0FBQUEsa0NBQVEscUNBSmtESixNQUsxREssT0FBQUEsa0NBQVEsd0NBTGtETCxNQU0xRE0sUUFBQUEsb0NBQVMsMkNBTmlETixNQU8xRE8sVUFBQUEsd0NBQVcseUJBQ1hDLFNBUjBEUixNQVExRFEsUUFDQUMsYUFUMERULE1BUzFEUyxZQUNBQyxXQVYwRFYsTUFVMURVLFVBQ0FDLFdBWDBEWCxNQVcxRFcsOEJBWDBEWCxNQVkxRFksWUFBQUEsNENBQWE7SUFFYixJQUFNQyxvQkFBb0JsQix1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