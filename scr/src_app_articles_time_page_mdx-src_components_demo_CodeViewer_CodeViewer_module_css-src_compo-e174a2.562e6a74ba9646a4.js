"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_time_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_compo-e174a2"], {
58701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(12975);
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

/**
 * Warning! This code has been generated automatically.
 */ 



var FOCUS = {
    "Detail #1": "    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()"
};
var FULL = "import {\n    ArrayNumber4,\n    tgdCalcMapRange,\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTime,\n    TgdUniformBufferObjectCamera,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\nimport { PainterPlayPause } from \"@/painter/play-pause\"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(3, 3)\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()\n    context.inputs.pointer.eventMove.addListener((evt) => {\n        if (!evt.shiftKey) return\n\n        virtualTimeGreen.seconds = tgdCalcMapRange(evt.current.x, -1, +1, 0, 3)\n        context.paint()\n    })\n    return ({ speed }: { speed: number }) => {\n        virtualTimeYellow.speed = speed\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            disableDefaultDoubleTap\n            options={{\n                preserveDrawingBuffer: true,\n                alpha: false,\n                antialias: true,\n                premultipliedAlpha: false,\n            }}\n            settings={{\n                speed: {\n                    label: \"speed\",\n                    value: 3,\n                    min: 0,\n                    max: 5,\n                    step: 0.5,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "elevated",
                            onClick: function onClick() {
                                return setFull(!full);
                            },
                            children: full ? "Show code details" : "Show full code"
                        }, void 0, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
12975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _painter_play_pause__rspack_import_3 = __webpack_require__(96565);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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




function init(context) {
    var camera = context.camera;
    if (_instanceof(camera, _tolokoban_tgd__rspack_import_1.TgdCameraPerspective)) {
        camera.near = 0.1;
        camera.far = 10;
    }
    camera.fitSpaceAtTarget(3, 3);
    // #begin
    var uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.2,
            0.1,
            0,
            1
        ],
        depth: 1
    });
    var colors = [
        [
            1,
            0.5,
            0.5,
            1
        ],
        [
            0.5,
            1,
            0.5,
            1
        ],
        [
            0.5,
            0.5,
            1,
            1
        ],
        [
            1,
            1,
            0,
            1
        ]
    ];
    var S = 0.7;
    var meshes = [];
    for(var _i = 0, _iter = [
        +S,
        -S
    ]; _i < _iter.length; _i++){
        var y = _iter[_i];
        for(var _i1 = 0, _iter1 = [
            -S,
            +S
        ]; _i1 < _iter1.length; _i1++){
            var x = _iter1[_i1];
            var color = colors.shift();
            var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                color: color
            });
            meshes.push(new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                material: material,
                uniformCamera: uniformCamera,
                transfo: {
                    position: [
                        x,
                        y,
                        0
                    ]
                }
            }));
        }
    }
    var times = [
        0,
        1,
        -1,
        3
    ].map(function(speed) {
        return new _tolokoban_tgd__rspack_import_1.TgdTime({
            speed: speed,
            context: context
        });
    });
    var virtualTimeGreen = times[1];
    var virtualTimeYellow = times[3];
    context.add(function(time) {
        uniformCamera.updateData();
        var cases = [
            0,
            1,
            2,
            3
        ].map(function(index) {
            return [
                meshes[index],
                times[index]
            ];
        });
        if (virtualTimeGreen.seconds > 3) {
            virtualTimeGreen.seconds -= 3;
        }
        for(var _i = 0, _iter = [
            0,
            1,
            2,
            3
        ]; _i < _iter.length; _i++){
            var index = _iter[_i];
            var _cases_index = _sliced_to_array(cases[index], 2), mesh = _cases_index[0], virtualTime = _cases_index[1];
            var t = index > 0 ? virtualTime.seconds : time;
            var angY = t * 30;
            mesh.transfo.setEulerRotation(0, angY, 0);
        }
    }, clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: meshes
    }), new _painter_play_pause__rspack_import_3.PainterPlayPause(context, {
        size: 128
    }));
    context.play();
    // #end
    context.inputs.pointer.eventMove.addListener(function(evt) {
        if (!evt.shiftKey) return;
        virtualTimeGreen.seconds = (0,_tolokoban_tgd__rspack_import_1.tgdCalcMapRange)(evt.current.x, -1, +1, 0, 3);
        context.paint();
    });
    return function(param) {
        var speed = param.speed;
        virtualTimeYellow.speed = speed;
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        disableDefaultDoubleTap: true,
        options: {
            preserveDrawingBuffer: true,
            alpha: false,
            antialias: true,
            premultipliedAlpha: false
        },
        settings: {
            speed: {
                label: "speed",
                value: 3,
                min: 0,
                max: 5,
                step: 0.5
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/main.demo.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}


},
96565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterPlayPause: () => (PainterPlayPause)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}

var PainterPlayPause = /*#__PURE__*/ function(TgdPainterIcon) {
    "use strict";
    _inherits(PainterPlayPause, TgdPainterIcon);
    function PainterPlayPause(context) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _class_call_check(this, PainterPlayPause);
        var _this;
        var _options_size;
        var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST"
            }
        });
        texture.loadBitmap((0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreatePalette)([
            "#f00",
            "#0f0"
        ]));
        (0,_tolokoban_tgd__rspack_import_0.tgdLoadCanvasFromSvg)(SVG).then(function(bmp) {
            texture.loadBitmap(bmp);
            _assert_this_initialized(_this).refresh();
        });
        var size = (_options_size = options.size) !== null && _options_size !== void 0 ? _options_size : 64;
        _this = _call_super(this, PainterPlayPause, [
            context,
            _object_spread_props(_object_spread({
                alignX: 0,
                alignY: 0,
                margin: 0
            }, options), {
                texture: texture,
                atlas: [
                    {
                        x: 0,
                        y: 0,
                        width: 0.5,
                        height: 1
                    },
                    {
                        x: 0.5,
                        y: 0,
                        width: 0.5,
                        height: 1
                    }
                ],
                width: size,
                height: size
            })
        ]), _define_property(_this, "context", void 0), _define_property(_this, "textureIcons", void 0), _define_property(_this, "handleTap", void 0), _define_property(_this, "handlePlayingChange", void 0), _this.context = context, _this.handleTap = function() {
            var _$context = _this.context;
            if (_$context.playing) {
                _$context.pause();
            } else {
                _$context.play();
            }
        }, _this.handlePlayingChange = function() {
            _this.index = _this.context.playing ? 1 : 0;
        };
        _this.textureIcons = texture;
        _this.handlePlayingChange();
        _this.eventPointerTap.addListener(_this.handleTap);
        context.eventPlayingChange.addListener(_this.handlePlayingChange);
        return _this;
    }
    _create_class(PainterPlayPause, [
        {
            key: "delete",
            value: function _delete() {
                this.textureIcons.delete();
                this.eventPointerTap.removeListener(this.handleTap);
                this.context.eventPlayingChange.removeListener(this.handlePlayingChange);
                _get(_get_prototype_of(PainterPlayPause.prototype), "delete", this).call(this);
            }
        }
    ]);
    return PainterPlayPause;
}(_tolokoban_tgd__rspack_import_0.TgdPainterIcon);
var SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 24" width="512" height="256">\n <g fill="#FFF">\n  <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />\n  <path transform="translate(24,0)" d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />\n </g>\n</svg>';


},
86698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(58701);
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
        h1: "h1",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "TgdTime"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The time ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 5,
                        columnNumber: 10
                    }, this),
                    " gives you in the painters is the real machine time, expressed in seconds.\nEven if you are not playing the animation, the time goes on.\nIt is the number of seconds elapsed since the creation of the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 7,
                        columnNumber: 63
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdTime.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdTime"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                            lineNumber: 9,
                            columnNumber: 2
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    " class allows you to use a virtual time instead, that can be speed up/slow down and paused.\nEven reversed.\nAnd the time is not readonly: you can change it at any ... time!"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "red"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 15,
                                columnNumber: 7
                            }, this),
                            " cube uses the context time."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "green"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 7
                            }, this),
                            " cude uses a virtual time with speed ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 53
                            }, this),
                            ". And after 3 seconds, we reset it three seconds sooner. In pause mode, you can use shift-mouse to change the time."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "blue"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 7
                            }, this),
                            " cude uses a negative speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "-1"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 44
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "yellow"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 7
                            }, this),
                            " cude uses a triple speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "3"
                            }, undefined, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 44
                            }, this),
                            ". Use the slider to change this speed."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Tap the screen to switch between ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "play"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 34
                    }, this),
                    "/",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "pause"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 43
                    }, this),
                    ", and see how it is dealt by ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdTime"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 81
                    }, this),
                    ".\nPay attention at the red cube and how it \"jumps\" when you start again a paused animation."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGltZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyY19jb21wby1lMTc0YTIuNTYyZTZhNzRiYTk2NDZhNC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9fL21haW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3BhaW50ZXIvcGxheS1wYXVzZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RpbWUvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAxLCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcXG4gICAgICAgIFsxLCAxLCAwLCAxXSxcXG4gICAgXVxcbiAgICBjb25zdCBTID0gMC43XFxuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuICAgIGZvciAoY29uc3QgeSBvZiBbK1MsIC1TXSkge1xcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMuc2hpZnQoKVxcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgbWVzaGVzLnB1c2goXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHRpbWVzOiBUZ2RUaW1lW10gPSBbMCwgMSwgLTEsIDNdLm1hcCgoc3BlZWQpID0+IG5ldyBUZ2RUaW1lKHsgc3BlZWQsIGNvbnRleHQgfSkpXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxcbiAgICAgICAgICAgIGNvbnN0IGNhc2VzOiBBcnJheTxbbWVzaDogVGdkUGFpbnRlck1lc2gsIHRpbWU6IFRnZFRpbWVdPiA9IFswLCAxLCAyLCAzXS5tYXAoKGluZGV4KSA9PiBbXFxuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXFxuICAgICAgICAgICAgICAgIHRpbWVzW2luZGV4XSxcXG4gICAgICAgICAgICBdKVxcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFttZXNoLCB2aXJ0dWFsVGltZV0gPSBjYXNlc1tpbmRleF1cXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IGluZGV4ID4gMCA/IHZpcnR1YWxUaW1lLnNlY29uZHMgOiB0aW1lXFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgYW5nWSwgMClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUaW1lLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IFBhaW50ZXJQbGF5UGF1c2UgfSBmcm9tIFxcXCJAL3BhaW50ZXIvcGxheS1wYXVzZVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuICAgICAgICBjYW1lcmEubmVhciA9IDAuMVxcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXFxuICAgIH1cXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjb2xvcnM6IEFycmF5TnVtYmVyNFtdID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDEsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAwLjUsIDEsIDFdLFxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxcbiAgICBdXFxuICAgIGNvbnN0IFMgPSAwLjdcXG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG4gICAgZm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXFxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3IsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFt4LCB5LCAwXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSlcXG4gICAgY29uc3QgdmlydHVhbFRpbWVHcmVlbiA9IHRpbWVzWzFdXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXFxuICAgICAgICAgICAgY29uc3QgY2FzZXM6IEFycmF5PFttZXNoOiBUZ2RQYWludGVyTWVzaCwgdGltZTogVGdkVGltZV0+ID0gWzAsIDEsIDIsIDNdLm1hcCgoaW5kZXgpID0+IFtcXG4gICAgICAgICAgICAgICAgbWVzaGVzW2luZGV4XSxcXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxcbiAgICAgICAgICAgIF0pXFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA+IDMpIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBbMCwgMSwgMiwgM10pIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWVcXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nWSA9IHQgKiAzMFxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBQYWludGVyUGxheVBhdXNlKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRNb3ZlLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGlmICghZXZ0LnNoaWZ0S2V5KSByZXR1cm5cXG5cXG4gICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA9IHRnZENhbGNNYXBSYW5nZShldnQuY3VycmVudC54LCAtMSwgKzEsIDAsIDMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSlcXG4gICAgcmV0dXJuICh7IHNwZWVkIH06IHsgc3BlZWQ6IG51bWJlciB9KSA9PiB7XFxuICAgICAgICB2aXJ0dWFsVGltZVllbGxvdy5zcGVlZCA9IHNwZWVkXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcXG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIHNldHRpbmdzPXt7XFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXFxcInNwZWVkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA1LFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIEFycmF5TnVtYmVyNCxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRpbWUsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyBQYWludGVyUGxheVBhdXNlIH0gZnJvbSBcIkAvcGFpbnRlci9wbGF5LXBhdXNlXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICBpZiAoY2FtZXJhIGluc3RhbmNlb2YgVGdkQ2FtZXJhUGVyc3BlY3RpdmUpIHtcbiAgICAgICAgY2FtZXJhLm5lYXIgPSAwLjFcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXG4gICAgfVxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcbiAgICAgICAgWzAuNSwgMSwgMC41LCAxXSxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxuICAgIF1cbiAgICBjb25zdCBTID0gMC43XG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cbiAgICBmb3IgKGNvbnN0IHkgb2YgWytTLCAtU10pIHtcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0aW1lczogVGdkVGltZVtdID0gWzAsIDEsIC0xLCAzXS5tYXAoKHNwZWVkKSA9PiBuZXcgVGdkVGltZSh7IHNwZWVkLCBjb250ZXh0IH0pKVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXG4gICAgICAgICAgICBjb25zdCBjYXNlczogQXJyYXk8W21lc2g6IFRnZFBhaW50ZXJNZXNoLCB0aW1lOiBUZ2RUaW1lXT4gPSBbMCwgMSwgMiwgM10ubWFwKChpbmRleCkgPT4gW1xuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBpbmRleCA+IDAgPyB2aXJ0dWFsVGltZS5zZWNvbmRzIDogdGltZVxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudE1vdmUuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBpZiAoIWV2dC5zaGlmdEtleSkgcmV0dXJuXG5cbiAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID0gdGdkQ2FsY01hcFJhbmdlKGV2dC5jdXJyZW50LngsIC0xLCArMSwgMCwgMylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSlcbiAgICByZXR1cm4gKHsgc3BlZWQgfTogeyBzcGVlZDogbnVtYmVyIH0pID0+IHtcbiAgICAgICAgdmlydHVhbFRpbWVZZWxsb3cuc3BlZWQgPSBzcGVlZFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC41LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJJY29uLFxuICAgIFRnZFBhaW50ZXJJY29uT3B0aW9ucyxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgdGdkTG9hZENhbnZhc0Zyb21TdmcsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFpbnRlclBsYXlQYXVzZU9wdGlvbnMgZXh0ZW5kcyBPbWl0PFRnZFBhaW50ZXJJY29uT3B0aW9ucywgXCJ3aWR0aFwiIHwgXCJoZWlnaHRcIiB8IFwidGV4dHVyZVwiIHwgXCJhdGxhc1wiPiB7XG4gICAgc2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyUGxheVBhdXNlIGV4dGVuZHMgVGdkUGFpbnRlckljb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUljb25zOiBUZ2RUZXh0dXJlMkRcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgb3B0aW9uczogUGFydGlhbDxQYWludGVyUGxheVBhdXNlT3B0aW9ucz4gPSB7fSxcbiAgICApIHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2YwMFwiLCBcIiMwZjBcIl0pKVxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbVN2ZyhTVkcpLnRoZW4oKGJtcCkgPT4ge1xuICAgICAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGJtcClcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHNpemUgPSBvcHRpb25zLnNpemUgPz8gNjRcbiAgICAgICAgc3VwZXIoY29udGV4dCwge1xuICAgICAgICAgICAgYWxpZ25YOiAwLFxuICAgICAgICAgICAgYWxpZ25ZOiAwLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIHRleHR1cmUsXG4gICAgICAgICAgICBhdGxhczogW1xuICAgICAgICAgICAgICAgIHsgeDogMCwgeTogMCwgd2lkdGg6IDAuNSwgaGVpZ2h0OiAxIH0sXG4gICAgICAgICAgICAgICAgeyB4OiAwLjUsIHk6IDAsIHdpZHRoOiAwLjUsIGhlaWdodDogMSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnRleHR1cmVJY29ucyA9IHRleHR1cmVcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5aW5nQ2hhbmdlKClcbiAgICAgICAgdGhpcy5ldmVudFBvaW50ZXJUYXAuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVUYXApXG4gICAgICAgIGNvbnRleHQuZXZlbnRQbGF5aW5nQ2hhbmdlLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlUGxheWluZ0NoYW5nZSlcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMudGV4dHVyZUljb25zLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMuZXZlbnRQb2ludGVyVGFwLnJlbW92ZUxpc3RlbmVyKHRoaXMuaGFuZGxlVGFwKVxuICAgICAgICB0aGlzLmNvbnRleHQuZXZlbnRQbGF5aW5nQ2hhbmdlLnJlbW92ZUxpc3RlbmVyKHRoaXMuaGFuZGxlUGxheWluZ0NoYW5nZSlcbiAgICAgICAgc3VwZXIuZGVsZXRlKClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZVRhcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGlmIChjb250ZXh0LnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnRleHQucGF1c2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5wbGF5KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlUGxheWluZ0NoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuY29udGV4dC5wbGF5aW5nID8gMSA6IDBcbiAgICB9XG59XG5cbmNvbnN0IFNWRyA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ4IDI0XCIgd2lkdGg9XCI1MTJcIiBoZWlnaHQ9XCIyNTZcIj5cbiA8ZyBmaWxsPVwiI0ZGRlwiPlxuICA8cGF0aCBkPVwiTTEyLDIwQzcuNTksMjAgNCwxNi40MSA0LDEyQzQsNy41OSA3LjU5LDQgMTIsNEMxNi40MSw0IDIwLDcuNTkgMjAsMTJDMjAsMTYuNDEgMTYuNDEsMjAgMTIsMjBNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJNMTAsMTYuNUwxNiwxMkwxMCw3LjVWMTYuNVpcIiAvPlxuICA8cGF0aCB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjQsMClcIiBkPVwiTTEzLDE2VjhIMTVWMTZIMTNNOSwxNlY4SDExVjE2SDlNMTIsMkExMCwxMCAwIDAsMSAyMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJNMTIsNEE4LDggMCAwLDAgNCwxMkE4LDggMCAwLDAgMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0WlwiIC8+XG4gPC9nPlxuPC9zdmc+YFxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjTWFwUmFuZ2UiLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGltZSIsIlRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEiLCJWaWV3IiwiUGFpbnRlclBsYXlQYXVzZSIsImluaXQiLCJjb250ZXh0IiwiY2FtZXJhIiwiX2luc3RhbmNlb2YiLCJ1bmlmb3JtQ2FtZXJhIiwiY2xlYXIiLCJjb2xvcnMiLCJTIiwibWVzaGVzIiwiX2l0ZXIiLCJ5IiwiX2l0ZXIxIiwieCIsImNvbG9yIiwibWF0ZXJpYWwiLCJ0aW1lcyIsInNwZWVkIiwidmlydHVhbFRpbWVHcmVlbiIsInZpcnR1YWxUaW1lWWVsbG93IiwidGltZSIsImNhc2VzIiwiaW5kZXgiLCJfY2FzZXNfaW5kZXgiLCJtZXNoIiwidmlydHVhbFRpbWUiLCJ0IiwiYW5nWSIsImV2dCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJUZ2RQYWludGVySWNvbiIsIlRnZFRleHR1cmUyRCIsInRnZExvYWRDYW52YXNGcm9tU3ZnIiwib3B0aW9ucyIsIl9vcHRpb25zX3NpemUiLCJ0ZXh0dXJlIiwiU1ZHIiwiYm1wIiwic2l6ZSIsIl8kY29udGV4dCIsIl9kZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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