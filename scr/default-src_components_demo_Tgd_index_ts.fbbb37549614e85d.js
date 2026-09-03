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
        return _async_to_generator(function() {
            var context, ext, img, a;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        context = refContext.current;
                        if (!context) return [
                            2
                        ];
                        ext = "webp";
                        return [
                            4,
                            context.takeSnapshot({
                                type: "image/".concat(ext)
                            })
                        ];
                    case 1:
                        img = _state.sent();
                        a = document.createElement("a");
                        document.body.appendChild(a);
                        a.style.display = "none";
                        a.href = img.src;
                        a.download = "snapshot.".concat(ext);
                        a.click();
                        window.setTimeout(function() {
                            return document.body.removeChild(a);
                        }, 30000);
                        return [
                            2
                        ];
                }
            });
        })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuZmJiYjM3NTQ5NjE0ZTg1ZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL1RnZC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRnZFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9UZ2RfTUVTVm14XCIsXCJzY3JlZW5cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfc2NyZWVuX053SUh2dVwiLFwiZnVsbHNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9mdWxsc2NyZWVuX2FHYTAwSVwiLFwicmVsYXRpdmVcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfcmVsYXRpdmVfSWN0SjdMXCIsXCJvdmVybGF5XCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX292ZXJsYXlfdzdFWGthXCIsXCJsb2FkaW5nXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2xvYWRpbmdfYzRUTURqXCIsXCJjYW52YXNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfY2FudmFzX092Tzd1WFwiLFwiZ2l6bW9cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZ2l6bW9fcjBlNUNhXCIsXCJhY3Rpb25zXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2FjdGlvbnNfT0JoQTE3XCIsXCJlbmFibGVkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2VuYWJsZWRfZHh0blc2XCIsXCJlcnJvclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9lcnJvcl9xZ3NETlVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm9wdGlvblwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3MtT3B0aW9uLU9wdGlvbi1tb2R1bGVfb3B0aW9uX3p2V3hIUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGdkXCI7XG4iLCJpbXBvcnQge1xuXHRUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdHR5cGUgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0T3B0aW9ucyxcblx0dHlwZSBUZ2REYXRhR2xiLFxuXHRUZ2RQYWludGVyR2l6bW8sXG5cdHRnZExvYWRBcnJheUJ1ZmZlcixcblx0dGdkTG9hZEdsYixcblx0dGdkTG9hZEltYWdlLFxuXHR0Z2RMb2FkVGV4dCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7XG5cdEljb25DZW50ZXIsXG5cdEljb25GdWxsc2NyZWVuLFxuXHRJY29uT3JpZW50YXRpb24sXG5cdEljb25QaW4sXG5cdEljb25TbmFwc2hvdCxcblx0VGhlbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCwgeyB0eXBlIENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL1NwaW5uZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90Z2QubW9kdWxlLmNzc1wiXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG5cdGltYWdlOiBSZWNvcmQ8c3RyaW5nLCBIVE1MSW1hZ2VFbGVtZW50PlxuXHRnbGI6IFJlY29yZDxzdHJpbmcsIFRnZERhdGFHbGI+XG5cdGRhdGE6IFJlY29yZDxzdHJpbmcsIEFycmF5QnVmZmVyPlxuXHR0ZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbnR5cGUgQXNzZXRzVG9Mb2FkID0ge1xuXHRba2V5IGluIGtleW9mIEFzc2V0c106IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuaW50ZXJmYWNlIFRnZFByb3BzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPiB7XG5cdGNsYXNzTmFtZT86IHN0cmluZ1xuXHRvcHRpb25zPzogV2ViR0xDb250ZXh0QXR0cmlidXRlc1xuXHRvblJlYWR5KFxuXHRcdHNjZW5lOiBUZ2RDb250ZXh0LFxuXHRcdGFzc2V0czogQXNzZXRzLFxuXHQpOiB2b2lkIHwgdW5kZWZpbmVkIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpXG5cdHdpZHRoPzogc3RyaW5nXG5cdGhlaWdodD86IHN0cmluZ1xuXHRub0JvcmRlcj86IGJvb2xlYW5cblx0Z2l6bW8/OiBib29sZWFuXG5cdGFzc2V0cz86IFBhcnRpYWw8QXNzZXRzVG9Mb2FkPlxuXHRjb250cm9sbGVyPzogUGFydGlhbDxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXRPcHRpb25zPlxuXHRjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuXHRzZXR0aW5ncz86IFRcblx0ZnVsbHNjcmVlbj86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuXHRjbGFzc05hbWUsXG5cdG9wdGlvbnMsXG5cdG9uUmVhZHksXG5cdGdpem1vID0gZmFsc2UsXG5cdHdpZHRoID0gXCI2NDBweFwiLFxuXHRoZWlnaHQgPSBcIjQ4MHB4XCIsXG5cdG5vQm9yZGVyID0gZmFsc2UsXG5cdGFzc2V0cyxcblx0Y29udHJvbGxlcixcblx0c2V0dGluZ3MsXG5cdGNoaWxkcmVuLFxuXHRmdWxsc2NyZWVuID0gZmFsc2UsXG59OiBUZ2RQcm9wczxUPikge1xuXHRjb25zdCByZWZVcGRhdGVTZXR0aW5ncyA9IFJlYWN0LnVzZVJlZjxcblx0XHR2b2lkIHwgbnVsbCB8ICgoc2V0dGluZ3M6IFJlY29yZDxrZXlvZiBULCBudW1iZXI+KSA9PiB2b2lkKVxuXHQ+KG51bGwpXG5cdGNvbnN0IFtzZXR0aW5nVmFsdWVzLCBzZXRTZXR0aW5nVmFsdWVzXSA9IFJlYWN0LnVzZVN0YXRlKHNldHRpbmdzKVxuXHRjb25zdCByZWR1Y2VTZXR0aW5ncyA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPiA9PiB7XG5cdFx0aWYgKCFzZXR0aW5nVmFsdWVzKSByZXR1cm4ge30gYXMgUmVjb3JkPGtleW9mIFQsIG51bWJlcj5cblx0XHRjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmdWYWx1ZXMpKSB7XG5cdFx0XHR2YWx1ZXNba2V5XSA9IHNldHRpbmdWYWx1ZXNba2V5XS52YWx1ZVxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWVzIGFzIFJlY29yZDxrZXlvZiBULCBudW1iZXI+XG5cdH0sIFtzZXR0aW5nVmFsdWVzXSlcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoc2V0dGluZ1ZhbHVlcykge1xuXHRcdFx0Y29uc3QgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge31cblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmdWYWx1ZXMpKSB7XG5cdFx0XHRcdHZhbHVlc1trZXldID0gc2V0dGluZ1ZhbHVlc1trZXldLnZhbHVlXG5cdFx0XHR9XG5cdFx0XHRyZWZVcGRhdGVTZXR0aW5ncy5jdXJyZW50Py4ocmVkdWNlU2V0dGluZ3MoKSlcblx0XHR9XG5cdH0sIFtzZXR0aW5nVmFsdWVzLCByZWR1Y2VTZXR0aW5nc10pXG5cdGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcblx0Y29uc3QgW2xhbmRzY2FwZSwgc2V0TGFuZHNjYXBlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IFtmdWxsc2NyZWVuQXZhaWxhYmxlLCBzZXRGdWxsc2NyZWVuQXZhaWxhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZDYW52YXMgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZTY3JlZW4gPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKVxuXHRjb25zdCByZWZPcmJpdGVyID0gUmVhY3QudXNlUmVmPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCB8IG51bGw+KG51bGwpXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cdGNvbnN0IG1vdW50Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcblx0XHRpZiAoIWNhbnZhcykgcmV0dXJuXG5cblx0XHRpZiAocmVmQ2FudmFzLmN1cnJlbnQpIHJldHVyblxuXG5cdFx0cmVmQ2FudmFzLmN1cnJlbnQgPSBjYW52YXNcblx0XHRpZiAoZ2l6bW8gJiYgb3B0aW9ucykgb3B0aW9ucy5hbHBoYSA9IGZhbHNlXG5cdFx0Y29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywge1xuXHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHR9KVxuXHRcdHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcblx0XHRzZXRMb2FkaW5nKHRydWUpXG5cdFx0bG9hZEFzc2V0cyhhc3NldHMpXG5cdFx0XHQudGhlbigobG9hZGVkQXNzZXRzOiBBc3NldHMpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY29udHJvbGxlcikge1xuXHRcdFx0XHRcdFx0Y29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdFx0XHRcdFx0XHRkZWJ1ZzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhWm9vbTogNTAwLFxuXHRcdFx0XHRcdFx0XHRpbmVydGlhUGFubmluZzogNTAwLFxuXHRcdFx0XHRcdFx0XHQuLi5jb250cm9sbGVyLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHJlZk9yYml0ZXIuY3VycmVudCA9IG9yYml0ZXJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudCA9IG9uUmVhZHkoY29udGV4dCwgbG9hZGVkQXNzZXRzKVxuXHRcdFx0XHRcdHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQ/LihyZWR1Y2VTZXR0aW5ncygpKVxuXHRcdFx0XHRcdGlmIChnaXptbykge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5hZGQobmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29udGV4dC5kZWJ1Z0hpZXJhcmNoeSgpXG5cdFx0XHRcdFx0Y29udGV4dC5wYWludCgpXG5cdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0c2V0RXJyb3IoZXggaW5zdGFuY2VvZiBFcnJvciA/IGV4Lm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShleCkpXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihleClcblx0XHRcdFx0fVxuXHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZXgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIHRoZSBzY2VuZSFcIiwgZXgpXG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpXG5cdFx0XHR9KVxuXHR9XG5cdGNvbnN0IGhhbmRsZUZ1bGxzY3JlZW4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGl2ID0gcmVmU2NyZWVuLmN1cnJlbnRcblx0XHRpZiAoIWRpdikgcmV0dXJuXG5cblx0XHRkaXYucmVxdWVzdEZ1bGxzY3JlZW4oKVxuXHR9XG5cdGNvbnN0IGhhbmRsZVNjcmVlbnNob3QgPSBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuXHRcdGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZXh0ID0gXCJ3ZWJwXCJcblx0XHRjb25zdCBpbWcgPSBhd2FpdCBjb250ZXh0LnRha2VTbmFwc2hvdCh7XG4gICAgICAgICAgICB0eXBlOiBgaW1hZ2UvJHtleHR9YFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKVxuICAgICAgICBhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBhLmhyZWYgPSBpbWcuc3JjXG4gICAgICAgIGEuZG93bmxvYWQgPSBgc25hcHNob3QuJHtleHR9YFxuICAgICAgICBhLmNsaWNrKClcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKSwgMzAwMDApXG5cdH1cblx0Y29uc3QgaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdGNvbnN0IG9yYml0ZXIgPSByZWZPcmJpdGVyLmN1cnJlbnRcblx0XHRjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG5cdFx0aWYgKCFjb250ZXh0IHx8ICFvcmJpdGVyKSByZXR1cm5cblxuXHRcdG9yYml0ZXIuY2FtZXJhSW5pdGlhbFN0YXRlID0gY29udGV4dC5jYW1lcmEuZ2V0Q3VycmVudFN0YXRlKClcblx0XHRvcmJpdGVyLnpvb20gPSAxXG5cdH1cblx0Y29uc3QgaGFuZGxlUmVzZXRDYW1lcmEgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgb3JiaXRlciA9IHJlZk9yYml0ZXIuY3VycmVudFxuXHRcdGlmICghb3JiaXRlciB8fCAhY29udHJvbGxlcikgcmV0dXJuXG5cblx0XHRvcmJpdGVyLnJlc2V0KChjb250cm9sbGVyLmluZXJ0aWFPcmJpdCA/PyA1MDApICogMWUtMylcblx0fVxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHJlZkNhbnZhcy5jdXJyZW50XG5cdFx0Y29uc3Qgc2NlbmUgPSByZWZDb250ZXh0LmN1cnJlbnRcblx0XHRpZiAoIWNhbnZhcyB8fCAhc2NlbmUpIHJldHVyblxuXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4gc2NlbmUucGFpbnQoKSlcblx0XHRvYnNlcnZlci5vYnNlcnZlKGNhbnZhcylcblx0XHRpZiAoIWNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbikge1xuXHRcdFx0Y2FudmFzLnJlcXVlc3RGdWxsc2NyZWVuID0gKGNhbnZhcyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtcblx0XHRcdFx0XCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiXG5cdFx0XHRdIGFzIChvcHRpb25zPzogRnVsbHNjcmVlbk9wdGlvbnMpID0+IFByb21pc2U8dm9pZD5cblx0XHR9XG5cdFx0c2V0RnVsbHNjcmVlbkF2YWlsYWJsZShCb29sZWFuKGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbikpXG5cdFx0cmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShjYW52YXMpXG5cdH0sIFtyZWZDb250ZXh0LmN1cnJlbnQsIHJlZkNhbnZhcy5jdXJyZW50XSlcblxuXHRpZiAobm9Cb3JkZXIgfHwgZnVsbHNjcmVlbikge1xuXHRcdGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gZnVsbHNjcmVlblxuXHRcdFx0PyB7fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0d2lkdGg6IGxhbmRzY2FwZSA/IHdpZHRoIDogaGVpZ2h0LFxuXHRcdFx0XHRcdGhlaWdodDogbGFuZHNjYXBlID8gaGVpZ2h0IDogd2lkdGgsXG5cdFx0XHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRyZWY9e3JlZlNjcmVlbn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oXG5cdFx0XHRcdFx0c3R5bGVzLnNjcmVlbixcblx0XHRcdFx0XHRmdWxsc2NyZWVuICYmIHN0eWxlcy5mdWxsc2NyZWVuLFxuXHRcdFx0XHQpfVxuXHRcdFx0XHRzdHlsZT17c3R5bGV9XG5cdFx0XHQ+XG5cdFx0XHRcdDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfSByZWY9e21vdW50Q2FudmFzfSAvPlxuXHRcdFx0XHR7c2V0dGluZ1ZhbHVlcyAmJiAoXG5cdFx0XHRcdFx0PFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9kaXY+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKGNsYXNzTmFtZSwgc3R5bGVzLlRnZCl9PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihcblx0XHRcdFx0XHRzdHlsZXMuYWN0aW9ucyxcblx0XHRcdFx0XHQhbG9hZGluZyAmJiBzdHlsZXMuZW5hYmxlZCxcblx0XHRcdFx0KX1cblx0XHRcdD5cblx0XHRcdFx0PGRpdiB0aXRsZT1cIlN3aXRjaCBsYW5kc2NhcGUgLyBwb3J0cmFpdFwiPlxuXHRcdFx0XHRcdDxJY29uT3JpZW50YXRpb24gb25DbGljaz17KCkgPT4gc2V0TGFuZHNjYXBlKCFsYW5kc2NhcGUpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiB0aXRsZT1cIlRha2UgYSBzbmFwc2hvdCBvZiB0aGUgc2NlbmVcIj5cblx0XHRcdFx0XHQ8SWNvblNuYXBzaG90IG9uQ2xpY2s9e2hhbmRsZVNjcmVlbnNob3R9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7ZnVsbHNjcmVlbkF2YWlsYWJsZSAmJiAoXG5cdFx0XHRcdFx0PGRpdiB0aXRsZT1cIkdvIGZ1bGxzY3JlZW5cIj5cblx0XHRcdFx0XHRcdDxJY29uRnVsbHNjcmVlbiBvbkNsaWNrPXtoYW5kbGVGdWxsc2NyZWVufSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Y29udHJvbGxlciAmJiAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxkaXYgdGl0bGU9XCJTYXZlIGN1cnJlbnQgY2FtZXJhIHBvc2l0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxJY29uUGluIG9uQ2xpY2s9e2hhbmRsZVNldENhbWVyYVJlc3RQb3NpdGlvbn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB0aXRsZT1cIlJlc3RvcmUgY2FtZXJhIHRvIHByZXZpb3VzbHkgc2F2ZWQgcG9zaXRpb25cIj5cblx0XHRcdFx0XHRcdFx0PEljb25DZW50ZXIgb25DbGljaz17aGFuZGxlUmVzZXRDYW1lcmF9IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZX0+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e3JlZlNjcmVlbn1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW59XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdHdpZHRoOiBsYW5kc2NhcGUgPyB3aWR0aCA6IGhlaWdodCxcblx0XHRcdFx0XHRcdGhlaWdodDogbGFuZHNjYXBlID8gaGVpZ2h0IDogd2lkdGgsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxjYW52YXMgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfSByZWY9e21vdW50Q2FudmFzfSAvPlxuXHRcdFx0XHRcdHtzZXR0aW5nVmFsdWVzICYmIChcblx0XHRcdFx0XHRcdDxTZXR0aW5nczxUPiB2YWx1ZXM9e3NldHRpbmdWYWx1ZXN9IG9uQ2hhbmdlPXtzZXRTZXR0aW5nVmFsdWVzfSAvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oXG5cdFx0XHRcdFx0XHRzdHlsZXMub3ZlcmxheSxcblx0XHRcdFx0XHRcdGxvYWRpbmcgJiYgc3R5bGVzLmxvYWRpbmcsXG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxTcGlubmVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkQXNzZXRzKHtcblx0Z2xiLFxuXHRkYXRhLFxuXHR0ZXh0LFxuXHRpbWFnZSxcbn06IFBhcnRpYWw8QXNzZXRzVG9Mb2FkPiA9IHt9KTogUHJvbWlzZTxBc3NldHM+IHtcblx0Y29uc3QgYXNzZXRzOiBBc3NldHMgPSB7XG5cdFx0Z2xiOiB7fSxcblx0XHRkYXRhOiB7fSxcblx0XHR0ZXh0OiB7fSxcblx0XHRpbWFnZToge30sXG5cdH1cblx0Y29uc3QgbG9hZGVyczogQXJyYXk8KCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBbXVxuXHRpZiAoaW1hZ2UpIHtcblx0XHRPYmplY3Qua2V5cyhpbWFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBpbWFnZVtrZXldXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTG9hZGluZyBpbWFnZTpcIiwgdXJsKVxuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRJbWFnZSh1cmwpXG5cdFx0XHRcdGlmIChhc3NldCkgYXNzZXRzLmltYWdlW2tleV0gPSBhc3NldFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cdGlmIChnbGIpIHtcblx0XHRPYmplY3Qua2V5cyhnbGIpLmZvckVhY2goKGtleSkgPT4ge1xuXHRcdFx0bG9hZGVycy5wdXNoKGFzeW5jICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXJsID0gZ2xiW2tleV1cblx0XHRcdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nIEdMQjpcIiwgdXJsKVxuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKVxuXHRcdFx0XHRpZiAoYXNzZXQpIGFzc2V0cy5nbGJba2V5XSA9IGFzc2V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0aWYgKGRhdGEpIHtcblx0XHRPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGRhdGFba2V5XVxuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRBcnJheUJ1ZmZlcih1cmwpXG5cdFx0XHRcdGlmIChhc3NldCkgYXNzZXRzLmRhdGFba2V5XSA9IGFzc2V0XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblx0aWYgKHRleHQpIHtcblx0XHRPYmplY3Qua2V5cyh0ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcblx0XHRcdGxvYWRlcnMucHVzaChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IHRleHRba2V5XVxuXHRcdFx0XHRjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRUZXh0KHVybClcblx0XHRcdFx0aWYgKGFzc2V0KSBhc3NldHMudGV4dFtrZXldID0gYXNzZXRcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXHRhd2FpdCBQcm9taXNlLmFsbChsb2FkZXJzLm1hcCgobG9hZGVyKSA9PiBsb2FkZXIoKSkpXG5cdHJldHVybiBhc3NldHNcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL09wdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBWaWV3TGFiZWwsIFZpZXdPcHRpb25zIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcblxuZXhwb3J0IHR5cGUgT3B0aW9uUHJvcHMgPSB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHZhbHVlOiBudW1iZXI7XG5cdG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXHRzdGVwOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBPcHRpb24oeyBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlLCBzdGVwIH06IE9wdGlvblByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1N0eWxlcy5vcHRpb259PlxuXHRcdFx0PFZpZXdMYWJlbD57bGFiZWx9PC9WaWV3TGFiZWw+XG5cdFx0XHQ8Vmlld09wdGlvbnMgdmFsdWU9e2Ake3ZhbHVlfWB9IG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2UocGFyc2VGbG9hdCh2KSl9PlxuXHRcdFx0XHR7c3RlcC5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fT57Y2FwdGlvbn08L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L1ZpZXdPcHRpb25zPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9uXCI7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuIiwiaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuL09wdGlvblwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NldHRpbmdzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9zbGlkZXJcIlxuXG5leHBvcnQgdHlwZSBTZXR0aW5nc0RlZmluaXRpb25zID0gUmVjb3JkPFxuXHRzdHJpbmcsXG5cdHtcblx0XHR2YWx1ZTogbnVtYmVyXG5cdFx0bGFiZWw6IHN0cmluZ1xuXHRcdG1pbj86IG51bWJlclxuXHRcdG1heD86IG51bWJlclxuXHRcdHN0ZXA/OiBudW1iZXIgfCBzdHJpbmdbXVxuXHR9XG4+XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NQcm9wczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4ge1xuXHRjbGFzc05hbWU/OiBzdHJpbmdcblx0dmFsdWVzOiBUXG5cdG9uQ2hhbmdlKHZhbHVlczogVCk6IHZvaWRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzPFQgZXh0ZW5kcyBTZXR0aW5nc0RlZmluaXRpb25zPih7XG5cdGNsYXNzTmFtZSxcblx0dmFsdWVzLFxuXHRvbkNoYW5nZSxcbn06IFNldHRpbmdzUHJvcHM8VD4pIHtcblx0Y29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IHVwZGF0ZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IG5ld1ZhbHVlcyA9IHtcblx0XHRcdC4uLnZhbHVlcyxcblx0XHRcdFtrZXldOiB7XG5cdFx0XHRcdC4uLnZhbHVlc1trZXldLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdH0sXG5cdFx0fVxuXHRcdG9uQ2hhbmdlKG5ld1ZhbHVlcylcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oXG5cdFx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdFx0c3R5bGVzLnNldHRpbmdzLFxuXHRcdFx0XHRzaG93ID8gc3R5bGVzLnNob3cgOiBzdHlsZXMuaGlkZSxcblx0XHRcdCl9XG5cdFx0PlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMS41ZW1cIiwgaGVpZ2h0OiBcIjEuNWVtXCIgfX1cblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI0IDI0XCJcblx0XHRcdFx0XHRwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG5cdFx0XHRcdFx0c3Ryb2tlV2lkdGg9XCIxLjVcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHRpdGxlPlNldHRpbmdzPC90aXRsZT5cblx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0ZD1cIk0xMiwxNS41QTMuNSwzLjUgMCAwLDEgOC41LDEyQTMuNSwzLjUgMCAwLDEgMTIsOC41QTMuNSwzLjUgMCAwLDEgMTUuNSwxMkEzLjUsMy41IDAgMCwxIDEyLDE1LjVNMTkuNDMsMTIuOTdDMTkuNDcsMTIuNjUgMTkuNSwxMi4zMyAxOS41LDEyQzE5LjUsMTEuNjcgMTkuNDcsMTEuMzQgMTkuNDMsMTFMMjEuNTQsOS4zN0MyMS43Myw5LjIyIDIxLjc4LDguOTUgMjEuNjYsOC43M0wxOS42Niw1LjI3QzE5LjU0LDUuMDUgMTkuMjcsNC45NiAxOS4wNSw1LjA1TDE2LjU2LDYuMDVDMTYuMDQsNS42NiAxNS41LDUuMzIgMTQuODcsNS4wN0wxNC41LDIuNDJDMTQuNDYsMi4xOCAxNC4yNSwyIDE0LDJIMTBDOS43NSwyIDkuNTQsMi4xOCA5LjUsMi40Mkw5LjEzLDUuMDdDOC41LDUuMzIgNy45Niw1LjY2IDcuNDQsNi4wNUw0Ljk1LDUuMDVDNC43Myw0Ljk2IDQuNDYsNS4wNSA0LjM0LDUuMjdMMi4zNCw4LjczQzIuMjEsOC45NSAyLjI3LDkuMjIgMi40Niw5LjM3TDQuNTcsMTFDNC41MywxMS4zNCA0LjUsMTEuNjcgNC41LDEyQzQuNSwxMi4zMyA0LjUzLDEyLjY1IDQuNTcsMTIuOTdMMi40NiwxNC42M0MyLjI3LDE0Ljc4IDIuMjEsMTUuMDUgMi4zNCwxNS4yN0w0LjM0LDE4LjczQzQuNDYsMTguOTUgNC43MywxOS4wMyA0Ljk1LDE4Ljk1TDcuNDQsMTcuOTRDNy45NiwxOC4zNCA4LjUsMTguNjggOS4xMywxOC45M0w5LjUsMjEuNThDOS41NCwyMS44MiA5Ljc1LDIyIDEwLDIySDE0QzE0LjI1LDIyIDE0LjQ2LDIxLjgyIDE0LjUsMjEuNThMMTQuODcsMTguOTNDMTUuNSwxOC42NyAxNi4wNCwxOC4zNCAxNi41NiwxNy45NEwxOS4wNSwxOC45NUMxOS4yNywxOS4wMyAxOS41NCwxOC45NSAxOS42NiwxOC43M0wyMS42NiwxNS4yN0MyMS43OCwxNS4wNSAyMS43MywxNC43OCAyMS41NCwxNC42M0wxOS40MywxMi45N1pcIlxuXHRcdFx0XHRcdFx0c3Ryb2tlPVwibm9uZVwiXG5cdFx0XHRcdFx0XHRmaWxsPVwiI2ZmZlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtPYmplY3Qua2V5cyh2YWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHZhbHVlc1trZXldXG5cdFx0XHRcdFx0aWYgKCFpdGVtKSByZXR1cm4gbnVsbFxuXG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaXRlbS5zdGVwKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0PE9wdGlvblxuXHRcdFx0XHRcdFx0XHRcdGtleT17a2V5fVxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLmxhYmVsfVxuXHRcdFx0XHRcdFx0XHRcdHN0ZXA9e2l0ZW0uc3RlcH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgbWluID0gaXRlbS5taW4gPz8gMFxuXHRcdFx0XHRcdGNvbnN0IG1heCA9IGl0ZW0ubWF4ID8/IDFcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PFNsaWRlclxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubGFiZWx9XG5cdFx0XHRcdFx0XHRcdG1pbj17bWlufVxuXHRcdFx0XHRcdFx0XHRtYXg9e21heH1cblx0XHRcdFx0XHRcdFx0c3RlcD17aXRlbS5zdGVwID8/IChtYXggLSBtaW4pIC8gMTAwfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlKGtleSwgdmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9zbGlkZXJcIjtcbiIsImltcG9ydCB0eXBlIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NsaWRlci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyUHJvcHMge1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdG1pbjogbnVtYmVyO1xuXHRtYXg6IG51bWJlcjtcblx0c3RlcDogbnVtYmVyO1xuXHR2YWx1ZTogbnVtYmVyO1xuXHRvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHtcblx0Y2xhc3NOYW1lLFxuXHRsYWJlbCxcblx0bWluLFxuXHRtYXgsXG5cdHN0ZXAsXG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcbn06IFNsaWRlclByb3BzKSB7XG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRjb25zdCBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcblx0XHRvbkNoYW5nZShuZXdWYWx1ZSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKGNsYXNzTmFtZSwgc3R5bGVzLnNsaWRlcil9PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdj57bGFiZWx9PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57dmFsdWUudG9GaXhlZCgyKX08L3N0cm9uZz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR0eXBlPVwicmFuZ2VcIlxuXHRcdFx0XHRzdGVwPXtzdGVwfVxuXHRcdFx0XHRtaW49e21pbn1cblx0XHRcdFx0bWF4PXttYXh9XG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsIlRnZENvbnRleHQiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RQYWludGVyR2l6bW8iLCJ0Z2RMb2FkQXJyYXlCdWZmZXIiLCJ0Z2RMb2FkR2xiIiwidGdkTG9hZEltYWdlIiwidGdkTG9hZFRleHQiLCJJY29uQ2VudGVyIiwiSWNvbkZ1bGxzY3JlZW4iLCJJY29uT3JpZW50YXRpb24iLCJJY29uUGluIiwiSWNvblNuYXBzaG90IiwiVGhlbWUiLCJSZWFjdCIsIlNldHRpbmdzIiwiU3Bpbm5lciIsInN0eWxlcyIsIlRnZCIsInBhcmFtIiwiY2xhc3NOYW1lIiwib3B0aW9ucyIsIm9uUmVhZHkiLCJnaXptbyIsIndpZHRoIiwiaGVpZ2h0Iiwibm9Cb3JkZXIiLCJhc3NldHMiLCJjb250cm9sbGVyIiwic2V0dGluZ3MiLCJjaGlsZHJlbiIsImZ1bGxzY3JlZW4iLCJyZWZVcGRhdGVTZXR0aW5ncyIsIl9SZWFjdF91c2VTdGF0ZSIsInNldHRpbmdWYWx1ZXMiLCJzZXRTZXR0aW5nVmFsdWVzIiwicmVkdWNlU2V0dGluZ3MiLCJ2YWx1ZXMiLCJfaXRlcmF0b3JFcnJvciIsIk9iamVjdCIsImtleSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJlcnJvciIsInNldEVycm9yIiwiX1JlYWN0X3VzZVN0YXRlMiIsImxhbmRzY2FwZSIsInNldExhbmRzY2FwZSIsIl9SZWFjdF91c2VTdGF0ZTMiLCJmdWxsc2NyZWVuQXZhaWxhYmxlIiwic2V0RnVsbHNjcmVlbkF2YWlsYWJsZSIsInJlZkNvbnRleHQiLCJyZWZDYW52YXMiLCJyZWZTY3JlZW4iLCJyZWZPcmJpdGVyIiwiX1JlYWN0X3VzZVN0YXRlNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW91bnRDYW52YXMiLCJjYW52YXMiLCJjb250ZXh0IiwibG9hZEFzc2V0cyIsImxvYWRlZEFzc2V0cyIsIm9yYml0ZXIiLCJleCIsIl9pbnN0YW5jZW9mIiwiRXJyb3IiLCJKU09OIiwiY29uc29sZSIsImhhbmRsZUZ1bGxzY3JlZW4iLCJkaXYiLCJoYW5kbGVTY3JlZW5zaG90IiwiZXh0IiwiaW1nIiwiYSIsImRvY3VtZW50Iiwid2luZG93IiwiaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uIiwiaGFuZGxlUmVzZXRDYW1lcmEiLCJfY29udHJvbGxlcl9pbmVydGlhT3JiaXQiLCJzY2VuZSIsIm9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJCb29sZWFuIiwic3R5bGUiLCJvbkNsaWNrIiwiX3JlZiIsImdsYiIsImRhdGEiLCJ0ZXh0IiwiaW1hZ2UiLCJsb2FkZXJzIiwidXJsIiwiYXNzZXQiLCJQcm9taXNlIiwibG9hZGVyIiwiU3R5bGVzIiwiVmlld0xhYmVsIiwiVmlld09wdGlvbnMiLCJPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJzdGVwIiwib25DaGFuZ2UxIiwidiIsInBhcnNlRmxvYXQiLCJjYXB0aW9uIiwiaW5kZXgiLCJTbGlkZXIiLCJzaG93Iiwic2V0U2hvdyIsInVwZGF0ZSIsIm5ld1ZhbHVlcyIsIl9pdGVtX21pbiIsIl9pdGVtX21heCIsIl9pdGVtX3N0ZXAiLCJpdGVtIiwiQXJyYXkiLCJtaW4iLCJtYXgiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFB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