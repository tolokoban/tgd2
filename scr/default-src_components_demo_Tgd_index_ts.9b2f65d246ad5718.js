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
    var className = param.className, options = param.options, onReady = param.onReady, _param_gizmo = param.gizmo, gizmo = _param_gizmo === void 0 ? false : _param_gizmo, _param_width = param.width, width = _param_width === void 0 ? "640px" : _param_width, _param_height = param.height, height = _param_height === void 0 ? "480px" : _param_height, _param_noBorder = param.noBorder, noBorder = _param_noBorder === void 0 ? false : _param_noBorder, assets = param.assets, controller = param.controller, settings = param.settings, children = param.children, _param_disableDefaultDoubleTap = param.disableDefaultDoubleTap, disableDefaultDoubleTap = _param_disableDefaultDoubleTap === void 0 ? false : _param_disableDefaultDoubleTap, _param_fullscreen = param.fullscreen, fullscreen = _param_fullscreen === void 0 ? false : _param_fullscreen;
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
                    context.inputs.pointer.eventTapMultiple.addListener(function(evt) {
                        console.log("🚀 [tgd] evt.tapsCount =", evt.tapsCount); // @FIXME: Remove this line written on 2025-11-10 at 13:36
                        evt.preventTap();
                        if (evt.tapsCount === 2 && !disableDefaultDoubleTap) {
                            var _controller_inertiaOrbit;
                            orbiter.reset(((_controller_inertiaOrbit = controller.inertiaOrbit) !== null && _controller_inertiaOrbit !== void 0 ? _controller_inertiaOrbit : 500) * 1e-3);
                        }
                    });
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
                    lineNumber: 193,
                    columnNumber: 17
                }, this),
                settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                    values: settingValues,
                    onChange: setSettingValues
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 194,
                    columnNumber: 35
                }, this),
                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                    className: _tgd_module_css__rspack_import_6["default"].error,
                    children: error
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                    lineNumber: 195,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
            lineNumber: 189,
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
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconOrientation, {
                            onClick: function onClick() {
                                return setLandscape(!landscape);
                            }
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 204,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 203,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconSnapshot, {
                            onClick: handleScreenshot
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this),
                    fullscreenAvailable && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconFullscreen, {
                            onClick: handleFullscreen
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 210,
                        columnNumber: 21
                    }, this),
                    controller && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.IconPin, {
                            onClick: handleSetCameraRestPosition
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 216,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 215,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 202,
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
                                lineNumber: 228,
                                columnNumber: 21
                            }, this),
                            settingValues && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_settings__rspack_import_4.Settings, {
                                values: settingValues,
                                onChange: setSettingValues
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 229,
                                columnNumber: 39
                            }, this),
                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                className: _tgd_module_css__rspack_import_6["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                                lineNumber: 230,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Spinner__rspack_import_5["default"], {}, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                            lineNumber: 233,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                        lineNumber: 232,
                        columnNumber: 17
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/demo/Tgd/tgd.tsx",
        lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuOWIyZjY1ZDI0NmFkNTcxOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9PcHRpb24ubW9kdWxlLmNzcz80OGNlIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcz8xMTllIiwid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci5tb2R1bGUuY3NzPzMyY2IiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL1RnZC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9PcHRpb24vT3B0aW9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL09wdGlvbi9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2xpZGVyL3NsaWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIlRnZFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9UZ2RfTUVTVm14XCIsXCJzY3JlZW5cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfc2NyZWVuX053SUh2dVwiLFwiZnVsbHNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9mdWxsc2NyZWVuX2FHYTAwSVwiLFwicmVsYXRpdmVcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfcmVsYXRpdmVfSWN0SjdMXCIsXCJvdmVybGF5XCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX292ZXJsYXlfdzdFWGthXCIsXCJsb2FkaW5nXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2xvYWRpbmdfYzRUTURqXCIsXCJjYW52YXNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfY2FudmFzX092Tzd1WFwiLFwiZ2l6bW9cIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZ2l6bW9fcjBlNUNhXCIsXCJhY3Rpb25zXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2FjdGlvbnNfT0JoQTE3XCIsXCJlbmFibGVkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2VuYWJsZWRfZHh0blc2XCIsXCJlcnJvclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9lcnJvcl9xZ3NETlVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm9wdGlvblwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3MtT3B0aW9uLU9wdGlvbi1tb2R1bGVfb3B0aW9uX3p2V3hIUVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiXG5leHBvcnQgKiBmcm9tIFwiLi90Z2RcIlxuIiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICB0eXBlIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdE9wdGlvbnMsXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxuICAgIFRnZFBhaW50ZXJHaXptbyxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXG4gICAgdGdkTG9hZEdsYixcbiAgICB0Z2RMb2FkSW1hZ2UsXG4gICAgdGdkTG9hZFRleHQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBJY29uRnVsbHNjcmVlbiwgSWNvbk9yaWVudGF0aW9uLCBJY29uUGluLCBJY29uU25hcHNob3QsIFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL1NwaW5uZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90Z2QubW9kdWxlLmNzc1wiXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG4gICAgaW1hZ2U6IFJlY29yZDxzdHJpbmcsIEhUTUxJbWFnZUVsZW1lbnQ+XG4gICAgZ2xiOiBSZWNvcmQ8c3RyaW5nLCBUZ2REYXRhR2xiPlxuICAgIGRhdGE6IFJlY29yZDxzdHJpbmcsIEFycmF5QnVmZmVyPlxuICAgIHRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxudHlwZSBBc3NldHNUb0xvYWQgPSB7XG4gICAgW2tleSBpbiBrZXlvZiBBc3NldHNdOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmludGVyZmFjZSBUZ2RQcm9wczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIG9wdGlvbnM/OiBXZWJHTENvbnRleHRBdHRyaWJ1dGVzXG4gICAgb25SZWFkeShzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiB2b2lkIHwgdW5kZWZpbmVkIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpXG4gICAgd2lkdGg/OiBzdHJpbmdcbiAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICBub0JvcmRlcj86IGJvb2xlYW5cbiAgICBnaXptbz86IGJvb2xlYW5cbiAgICBhc3NldHM/OiBQYXJ0aWFsPEFzc2V0c1RvTG9hZD5cbiAgICBjb250cm9sbGVyPzogUGFydGlhbDxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXRPcHRpb25zPlxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXA/OiBib29sZWFuXG4gICAgc2V0dGluZ3M/OiBUXG4gICAgZnVsbHNjcmVlbj86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuICAgIGNsYXNzTmFtZSxcbiAgICBvcHRpb25zLFxuICAgIG9uUmVhZHksXG4gICAgZ2l6bW8gPSBmYWxzZSxcbiAgICB3aWR0aCA9IFwiNjQwcHhcIixcbiAgICBoZWlnaHQgPSBcIjQ4MHB4XCIsXG4gICAgbm9Cb3JkZXIgPSBmYWxzZSxcbiAgICBhc3NldHMsXG4gICAgY29udHJvbGxlcixcbiAgICBzZXR0aW5ncyxcbiAgICBjaGlsZHJlbixcbiAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcCA9IGZhbHNlLFxuICAgIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbn06IFRnZFByb3BzPFQ+KSB7XG4gICAgY29uc3QgcmVmVXBkYXRlU2V0dGluZ3MgPSBSZWFjdC51c2VSZWY8dm9pZCB8IG51bGwgfCAoKHNldHRpbmdzOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPikgPT4gdm9pZCk+KG51bGwpXG4gICAgY29uc3QgW3NldHRpbmdWYWx1ZXMsIHNldFNldHRpbmdWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoc2V0dGluZ3MpXG4gICAgY29uc3QgcmVkdWNlU2V0dGluZ3MgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4gPT4ge1xuICAgICAgICBpZiAoIXNldHRpbmdWYWx1ZXMpIHJldHVybiB7fSBhcyBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPlxuICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzZXR0aW5nVmFsdWVzKSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzIGFzIFJlY29yZDxrZXlvZiBULCBudW1iZXI+XG4gICAgfSwgW3NldHRpbmdWYWx1ZXNdKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXR0aW5nVmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZ1ZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHNldHRpbmdWYWx1ZXNba2V5XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudD8uKHJlZHVjZVNldHRpbmdzKCkpXG4gICAgICAgIH1cbiAgICB9LCBbc2V0dGluZ1ZhbHVlcywgcmVkdWNlU2V0dGluZ3NdKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbGFuZHNjYXBlLCBzZXRMYW5kc2NhcGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZnVsbHNjcmVlbkF2YWlsYWJsZSwgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZkNhbnZhcyA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmU2NyZWVuID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZPcmJpdGVyID0gUmVhY3QudXNlUmVmPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBtb3VudENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgICAgICBpZiAocmVmQ2FudmFzLmN1cnJlbnQpIHJldHVyblxuXG4gICAgICAgIHJlZkNhbnZhcy5jdXJyZW50ID0gY2FudmFzXG4gICAgICAgIGlmIChnaXptbyAmJiBvcHRpb25zKSBvcHRpb25zLmFscGhhID0gZmFsc2VcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywge1xuICAgICAgICAgICAgYWxwaGE6ZmFsc2UsIC4uLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGVwdGhCaXRzID0gY29udGV4dC5nbC5nZXRQYXJhbWV0ZXIoY29udGV4dC5nbC5ERVBUSF9CSVRTKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcHRoIGJ1ZmZlciBiaXRzOlwiLCBkZXB0aEJpdHMpXG4gICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBsb2FkQXNzZXRzKGFzc2V0cylcbiAgICAgICAgICAgIC50aGVuKChsb2FkZWRBc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVBhbm5pbmc6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb250cm9sbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk9yYml0ZXIuY3VycmVudCA9IG9yYml0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXBNdWx0aXBsZS5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIFt0Z2RdIGV2dC50YXBzQ291bnQgPVwiLCBldnQudGFwc0NvdW50KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI1LTExLTEwIGF0IDEzOjM2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnRUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFwc0NvdW50ID09PSAyICYmICFkaXNhYmxlRGVmYXVsdERvdWJsZVRhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmJpdGVyLnJlc2V0KChjb250cm9sbGVyLmluZXJ0aWFPcmJpdCA/PyA1MDApICogMWUtMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQgPSBvblJlYWR5KGNvbnRleHQsIGxvYWRlZEFzc2V0cylcbiAgICAgICAgICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudD8uKHJlZHVjZVNldHRpbmdzKCkpXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaXptbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5hZGQobmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnSGllcmFyY2h5KClcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXggaW5zdGFuY2VvZiBFcnJvciA/IGV4Lm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShleCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSB0aGUgc2NlbmUhXCIsIGV4KVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSByZWZTY3JlZW4uY3VycmVudFxuICAgICAgICBpZiAoIWRpdikgcmV0dXJuXG5cbiAgICAgICAgZGl2LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU2NyZWVuc2hvdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVyblxuXG4gICAgICAgIGNvbnRleHQudGFrZVNuYXBzaG90KCkudGhlbigoaW1nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSlcbiAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBhLmhyZWYgPSBpbWcuc3JjXG4gICAgICAgICAgICBhLmRvd25sb2FkID0gXCJzbmFwc2hvdC5wbmdcIlxuICAgICAgICAgICAgYS5jbGljaygpXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpLCAzMDAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmJpdGVyID0gcmVmT3JiaXRlci5jdXJyZW50XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFvcmJpdGVyKSByZXR1cm5cblxuICAgICAgICBvcmJpdGVyLmNhbWVyYUluaXRpYWxTdGF0ZSA9IGNvbnRleHQuY2FtZXJhLmdldEN1cnJlbnRTdGF0ZSgpXG4gICAgICAgIG9yYml0ZXIuem9vbSA9IDFcbiAgICB9XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gcmVmQ2FudmFzLmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBzY2VuZS5wYWludCgpKVxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcylcbiAgICAgICAgaWYgKCFjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbiA9IChjYW52YXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiXSBhcyAoXG4gICAgICAgICAgICAgICAgb3B0aW9ucz86IEZ1bGxzY3JlZW5PcHRpb25zLFxuICAgICAgICAgICAgKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgICAgIH1cbiAgICAgICAgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZShCb29sZWFuKGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbikpXG4gICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoY2FudmFzKVxuICAgIH0sIFtyZWZDb250ZXh0LmN1cnJlbnQsIHJlZkNhbnZhcy5jdXJyZW50XSlcblxuICAgIGlmIChub0JvcmRlciB8fCBmdWxsc2NyZWVuKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gZnVsbHNjcmVlblxuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxhbmRzY2FwZSA/IGhlaWdodCA6IHdpZHRoLFxuICAgICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZTY3JlZW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oc3R5bGVzLnNjcmVlbiwgZnVsbHNjcmVlbiAmJiBzdHlsZXMuZnVsbHNjcmVlbil9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXttb3VudENhbnZhc30gLz5cbiAgICAgICAgICAgICAgICB7c2V0dGluZ1ZhbHVlcyAmJiA8U2V0dGluZ3M8VD4gdmFsdWVzPXtzZXR0aW5nVmFsdWVzfSBvbkNoYW5nZT17c2V0U2V0dGluZ1ZhbHVlc30gLz59XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuVGdkKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKHN0eWxlcy5hY3Rpb25zLCAhbG9hZGluZyAmJiBzdHlsZXMuZW5hYmxlZCl9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uT3JpZW50YXRpb24gb25DbGljaz17KCkgPT4gc2V0TGFuZHNjYXBlKCFsYW5kc2NhcGUpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uU25hcHNob3Qgb25DbGljaz17aGFuZGxlU2NyZWVuc2hvdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ZnVsbHNjcmVlbkF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkZ1bGxzY3JlZW4gb25DbGljaz17aGFuZGxlRnVsbHNjcmVlbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y29udHJvbGxlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblBpbiBvbkNsaWNrPXtoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZTY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsYW5kc2NhcGUgPyB3aWR0aCA6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbGFuZHNjYXBlID8gaGVpZ2h0IDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXttb3VudENhbnZhc30gLz5cbiAgICAgICAgICAgICAgICAgICAge3NldHRpbmdWYWx1ZXMgJiYgPFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+fVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKHN0eWxlcy5vdmVybGF5LCBsb2FkaW5nICYmIHN0eWxlcy5sb2FkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFzc2V0cyh7IGdsYiwgZGF0YSwgdGV4dCwgaW1hZ2UgfTogUGFydGlhbDxBc3NldHNUb0xvYWQ+ID0ge30pOiBQcm9taXNlPEFzc2V0cz4ge1xuICAgIGNvbnN0IGFzc2V0czogQXNzZXRzID0ge1xuICAgICAgICBnbGI6IHt9LFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGV4dDoge30sXG4gICAgICAgIGltYWdlOiB7fSxcbiAgICB9XG4gICAgY29uc3QgbG9hZGVyczogQXJyYXk8KCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBbXVxuICAgIGlmIChpbWFnZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhpbWFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGltYWdlW2tleV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgaW1hZ2U6XCIsIHVybClcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRJbWFnZSh1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMuaW1hZ2Vba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAoZ2xiKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGdsYikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGdsYltrZXldXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEdMQjpcIiwgdXJsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMuZ2xiW2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGRhdGFba2V5XVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIGFzc2V0cy5kYXRhW2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRleHRba2V5XVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZFRleHQodXJsKVxuICAgICAgICAgICAgICAgIGlmIChhc3NldCkgYXNzZXRzLnRleHRba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChsb2FkZXJzLm1hcCgobG9hZGVyKSA9PiBsb2FkZXIoKSkpXG4gICAgcmV0dXJuIGFzc2V0c1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9PcHRpb24ubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBWaWV3TGFiZWwsIFZpZXdPcHRpb25zIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5leHBvcnQgdHlwZSBPcHRpb25Qcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nXG4gICAgdmFsdWU6IG51bWJlclxuICAgIG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkXG4gICAgc3RlcDogc3RyaW5nW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9wdGlvbih7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UsIHN0ZXAgfTogT3B0aW9uUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICA8Vmlld0xhYmVsPntsYWJlbH08L1ZpZXdMYWJlbD5cbiAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17YCR7dmFsdWV9YH0gb25DaGFuZ2U9eyh2KSA9PiBvbkNoYW5nZShwYXJzZUZsb2F0KHYpKX0+XG4gICAgICAgICAgICAgICAge3N0ZXAubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PntjYXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vT3B0aW9uXCJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3NldHRpbmdzXCJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vc2xpZGVyXCJcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuL09wdGlvblwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2V0dGluZ3MubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCB0eXBlIFNldHRpbmdzRGVmaW5pdGlvbnMgPSBSZWNvcmQ8XG4gICAgc3RyaW5nLFxuICAgIHtcbiAgICAgICAgdmFsdWU6IG51bWJlclxuICAgICAgICBsYWJlbDogc3RyaW5nXG4gICAgICAgIG1pbj86IG51bWJlclxuICAgICAgICBtYXg/OiBudW1iZXJcbiAgICAgICAgc3RlcD86IG51bWJlciB8IHN0cmluZ1tdXG4gICAgfVxuPlxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzUHJvcHM8VCBleHRlbmRzIFNldHRpbmdzRGVmaW5pdGlvbnM+IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZXM6IFRcbiAgICBvbkNoYW5nZSh2YWx1ZXM6IFQpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oeyBjbGFzc05hbWUsIHZhbHVlcywgb25DaGFuZ2UgfTogU2V0dGluZ3NQcm9wczxUPikge1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHVwZGF0ZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5zZXR0aW5ncywgc2hvdyA/IHN0eWxlcy5zaG93IDogc3R5bGVzLmhpZGUpfT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEuNWVtXCIsIGhlaWdodDogXCIxLjVlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiwxNS41QTMuNSwzLjUgMCAwLDEgOC41LDEyQTMuNSwzLjUgMCAwLDEgMTIsOC41QTMuNSwzLjUgMCAwLDEgMTUuNSwxMkEzLjUsMy41IDAgMCwxIDEyLDE1LjVNMTkuNDMsMTIuOTdDMTkuNDcsMTIuNjUgMTkuNSwxMi4zMyAxOS41LDEyQzE5LjUsMTEuNjcgMTkuNDcsMTEuMzQgMTkuNDMsMTFMMjEuNTQsOS4zN0MyMS43Myw5LjIyIDIxLjc4LDguOTUgMjEuNjYsOC43M0wxOS42Niw1LjI3QzE5LjU0LDUuMDUgMTkuMjcsNC45NiAxOS4wNSw1LjA1TDE2LjU2LDYuMDVDMTYuMDQsNS42NiAxNS41LDUuMzIgMTQuODcsNS4wN0wxNC41LDIuNDJDMTQuNDYsMi4xOCAxNC4yNSwyIDE0LDJIMTBDOS43NSwyIDkuNTQsMi4xOCA5LjUsMi40Mkw5LjEzLDUuMDdDOC41LDUuMzIgNy45Niw1LjY2IDcuNDQsNi4wNUw0Ljk1LDUuMDVDNC43Myw0Ljk2IDQuNDYsNS4wNSA0LjM0LDUuMjdMMi4zNCw4LjczQzIuMjEsOC45NSAyLjI3LDkuMjIgMi40Niw5LjM3TDQuNTcsMTFDNC41MywxMS4zNCA0LjUsMTEuNjcgNC41LDEyQzQuNSwxMi4zMyA0LjUzLDEyLjY1IDQuNTcsMTIuOTdMMi40NiwxNC42M0MyLjI3LDE0Ljc4IDIuMjEsMTUuMDUgMi4zNCwxNS4yN0w0LjM0LDE4LjczQzQuNDYsMTguOTUgNC43MywxOS4wMyA0Ljk1LDE4Ljk1TDcuNDQsMTcuOTRDNy45NiwxOC4zNCA4LjUsMTguNjggOS4xMywxOC45M0w5LjUsMjEuNThDOS41NCwyMS44MiA5Ljc1LDIyIDEwLDIySDE0QzE0LjI1LDIyIDE0LjQ2LDIxLjgyIDE0LjUsMjEuNThMMTQuODcsMTguOTNDMTUuNSwxOC42NyAxNi4wNCwxOC4zNCAxNi41NiwxNy45NEwxOS4wNSwxOC45NUMxOS4yNywxOS4wMyAxOS41NCwxOC45NSAxOS42NiwxOC43M0wyMS42NiwxNS4yN0MyMS43OCwxNS4wNSAyMS43MywxNC43OCAyMS41NCwxNC42M0wxOS40MywxMi45N1pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdmFsdWVzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uc3RlcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2l0ZW0uc3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZShrZXksIHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluID0gaXRlbS5taW4gPz8gMFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBpdGVtLm1heCA/PyAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17aXRlbS5zdGVwID8/IChtYXggLSBtaW4pIC8gMTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZShrZXksIHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vc2xpZGVyXCJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2xpZGVyLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlclByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICBsYWJlbDogc3RyaW5nXG4gICAgbWluOiBudW1iZXJcbiAgICBtYXg6IG51bWJlclxuICAgIHN0ZXA6IG51bWJlclxuICAgIHZhbHVlOiBudW1iZXJcbiAgICBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoeyBjbGFzc05hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3RlcCwgdmFsdWUsIG9uQ2hhbmdlIH06IFNsaWRlclByb3BzKSB7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKGNsYXNzTmFtZSwgc3R5bGVzLnNsaWRlcil9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt2YWx1ZS50b0ZpeGVkKDIpfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgc3RlcD17c3RlcH0gbWluPXttaW59IG1heD17bWF4fSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGdkQ29udGV4dCIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZFBhaW50ZXJHaXptbyIsInRnZExvYWRBcnJheUJ1ZmZlciIsInRnZExvYWRHbGIiLCJ0Z2RMb2FkSW1hZ2UiLCJ0Z2RMb2FkVGV4dCIsIkljb25GdWxsc2NyZWVuIiwiSWNvbk9yaWVudGF0aW9uIiwiSWNvblBpbiIsIkljb25TbmFwc2hvdCIsIlRoZW1lIiwiUmVhY3QiLCJTZXR0aW5ncyIsIlNwaW5uZXIiLCJzdHlsZXMiLCJUZ2QiLCJwYXJhbSIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJvblJlYWR5IiwiZ2l6bW8iLCJ3aWR0aCIsImhlaWdodCIsIm5vQm9yZGVyIiwiYXNzZXRzIiwiY29udHJvbGxlciIsInNldHRpbmdzIiwiY2hpbGRyZW4iLCJkaXNhYmxlRGVmYXVsdERvdWJsZVRhcCIsImZ1bGxzY3JlZW4iLCJyZWZVcGRhdGVTZXR0aW5ncyIsIl9SZWFjdF91c2VTdGF0ZSIsInNldHRpbmdWYWx1ZXMiLCJzZXRTZXR0aW5nVmFsdWVzIiwicmVkdWNlU2V0dGluZ3MiLCJ2YWx1ZXMiLCJfaXRlcmF0b3JFcnJvciIsIk9iamVjdCIsImtleSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJlcnJvciIsInNldEVycm9yIiwiX1JlYWN0X3VzZVN0YXRlMiIsImxhbmRzY2FwZSIsInNldExhbmRzY2FwZSIsIl9SZWFjdF91c2VTdGF0ZTMiLCJmdWxsc2NyZWVuQXZhaWxhYmxlIiwic2V0RnVsbHNjcmVlbkF2YWlsYWJsZSIsInJlZkNvbnRleHQiLCJyZWZDYW52YXMiLCJyZWZTY3JlZW4iLCJyZWZPcmJpdGVyIiwiX1JlYWN0X3VzZVN0YXRlNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibW91bnRDYW52YXMiLCJjYW52YXMiLCJjb250ZXh0IiwiZGVwdGhCaXRzIiwiY29uc29sZSIsImxvYWRBc3NldHMiLCJsb2FkZWRBc3NldHMiLCJvcmJpdGVyIiwiZXZ0IiwiX2NvbnRyb2xsZXJfaW5lcnRpYU9yYml0IiwiZXgiLCJfaW5zdGFuY2VvZiIsIkVycm9yIiwiSlNPTiIsImhhbmRsZUZ1bGxzY3JlZW4iLCJkaXYiLCJoYW5kbGVTY3JlZW5zaG90IiwiaW1nIiwiYSIsImRvY3VtZW50Iiwid2luZG93IiwiaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uIiwic2NlbmUiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiQm9vbGVhbiIsInN0eWxlIiwib25DbGljayIsIl9yZWYiLCJnbGIiLCJkYXRhIiwidGV4dCIsImltYWdlIiwibG9hZGVycyIsInVybCIsImFzc2V0IiwiUHJvbWlzZSIsImxvYWRlciIsIlN0eWxlcyIsIlZpZXdMYWJlbCIsIlZpZXdPcHRpb25zIiwiT3B0aW9uIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic3RlcCIsIm9uQ2hhbmdlMSIsInYiLCJwYXJzZUZsb2F0IiwiY2FwdGlvbiIsImluZGV4IiwiU2xpZGVyIiwic2hvdyIsInNldFNob3ciLCJ1cGRhdGUiLCJuZXdWYWx1ZXMiLCJfaXRlbV9taW4iLCJfaXRlbV9tYXgiLCJfaXRlbV9zdGVwIiwiaXRlbSIsIkFycmF5IiwibWluIiwibWF4IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyw4cEJBQThwQixFOzs7Ozs7OztBQ0Q5cUI7QUFDQSxzREFBZSxDQUFDLHNFQUFzRSxFOzs7Ozs7OztBQ0R0RjtBQUNBLHNEQUFlLENBQUMsK0xBQStMLEU7Ozs7Ozs7O0FDRC9NO0FBQ0Esc0RBQWUsQ0FBQyxzRUFBc0UsRTs7Ozs7Ozs7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