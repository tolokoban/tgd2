"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_time_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_compo-5b2e69"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/main.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 5,
                        columnNumber: 10
                    }, this),
                    " gives you in the painters is the real machine time, expressed in seconds.\nEven if you are not playing the animation, the time goes on.\nIt is the number of seconds elapsed since the creation of the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 7,
                        columnNumber: 63
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                            lineNumber: 9,
                            columnNumber: 2
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    " class allows you to use a virtual time instead, that can be speed up/slow down and paused.\nEven reversed.\nAnd the time is not readonly: you can change it at any ... time!"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 15,
                                columnNumber: 7
                            }, this),
                            " cube uses the context time."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 7
                            }, this),
                            " cude uses a virtual time with speed ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 16,
                                columnNumber: 53
                            }, this),
                            ". And after 3 seconds, we reset it three seconds sooner. In pause mode, you can use shift-mouse to change the time."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 7
                            }, this),
                            " cude uses a negative speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "-1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 17,
                                columnNumber: 44
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 7
                            }, this),
                            " cude uses a triple speed: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "3"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                                lineNumber: 18,
                                columnNumber: 44
                            }, this),
                            ". Use the slider to change this speed."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 34
                    }, this),
                    "/",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "pause"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 43
                    }, this),
                    ", and see how it is dealt by ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdTime"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                        lineNumber: 20,
                        columnNumber: 81
                    }, this),
                    ".\nPay attention at the red cube and how it \"jumps\" when you start again a paused animation."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGltZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyY19jb21wby01YjJlNjkuOTFjMTNkYjI4NzM0ZmMzYy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3BhaW50ZXIvcGxheS1wYXVzZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNvbG9yczogQXJyYXlOdW1iZXI0W10gPSBbXFxuICAgICAgICBbMSwgMC41LCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDAuNSwgMSwgMV0sXFxuICAgICAgICBbMSwgMSwgMCwgMV0sXFxuICAgIF1cXG4gICAgY29uc3QgUyA9IDAuN1xcbiAgICBjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXVxcbiAgICBmb3IgKGNvbnN0IHkgb2YgWytTLCAtU10pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzLnNoaWZ0KClcXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBjb2xvcixcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzogeyBwb3NpdGlvbjogW3gsIHksIDBdIH0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCB0aW1lczogVGdkVGltZVtdID0gWzAsIDEsIC0xLCAzXS5tYXAoKHNwZWVkKSA9PiBuZXcgVGdkVGltZSh7IHNwZWVkLCBjb250ZXh0IH0pKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZUdyZWVuID0gdGltZXNbMV1cXG4gICAgY29uc3QgdmlydHVhbFRpbWVZZWxsb3cgPSB0aW1lc1szXVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG4gICAgICAgICAgICBjb25zdCBjYXNlczogQXJyYXk8W21lc2g6IFRnZFBhaW50ZXJNZXNoLCB0aW1lOiBUZ2RUaW1lXT4gPSBbMCwgMSwgMiwgM10ubWFwKChpbmRleCkgPT4gW1xcbiAgICAgICAgICAgICAgICBtZXNoZXNbaW5kZXhdLFxcbiAgICAgICAgICAgICAgICB0aW1lc1tpbmRleF0sXFxuICAgICAgICAgICAgXSlcXG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID4gMykge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgLT0gM1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIFswLCAxLCAyLCAzXSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBbbWVzaCwgdmlydHVhbFRpbWVdID0gY2FzZXNbaW5kZXhdXFxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBpbmRleCA+IDAgPyB2aXJ0dWFsVGltZS5zZWNvbmRzIDogdGltZVxcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdZID0gdCAqIDMwXFxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIGFuZ1ksIDApXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IG1lc2hlcyxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFBhaW50ZXJQbGF5UGF1c2UoY29udGV4dCwgeyBzaXplOiAxMjggfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGltZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBQYWludGVyUGxheVBhdXNlIH0gZnJvbSBcXFwiQC9wYWludGVyL3BsYXktcGF1c2VcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xcbiAgICAgICAgY2FtZXJhLm5lYXIgPSAwLjFcXG4gICAgICAgIGNhbWVyYS5mYXIgPSAxMFxcbiAgICB9XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAxLCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcXG4gICAgICAgIFsxLCAxLCAwLCAxXSxcXG4gICAgXVxcbiAgICBjb25zdCBTID0gMC43XFxuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuICAgIGZvciAoY29uc3QgeSBvZiBbK1MsIC1TXSkge1xcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMuc2hpZnQoKVxcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgbWVzaGVzLnB1c2goXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHRpbWVzOiBUZ2RUaW1lW10gPSBbMCwgMSwgLTEsIDNdLm1hcCgoc3BlZWQpID0+IG5ldyBUZ2RUaW1lKHsgc3BlZWQsIGNvbnRleHQgfSkpXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxcbiAgICAgICAgICAgIGNvbnN0IGNhc2VzOiBBcnJheTxbbWVzaDogVGdkUGFpbnRlck1lc2gsIHRpbWU6IFRnZFRpbWVdPiA9IFswLCAxLCAyLCAzXS5tYXAoKGluZGV4KSA9PiBbXFxuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXFxuICAgICAgICAgICAgICAgIHRpbWVzW2luZGV4XSxcXG4gICAgICAgICAgICBdKVxcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFttZXNoLCB2aXJ0dWFsVGltZV0gPSBjYXNlc1tpbmRleF1cXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IGluZGV4ID4gMCA/IHZpcnR1YWxUaW1lLnNlY29uZHMgOiB0aW1lXFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgYW5nWSwgMClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgICAgIGN1bGw6IFxcXCJiYWNrXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50TW92ZS5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoIWV2dC5zaGlmdEtleSkgcmV0dXJuXFxuXFxuICAgICAgICB2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPSB0Z2RDYWxjTWFwUmFuZ2UoZXZ0LmN1cnJlbnQueCwgLTEsICsxLCAwLCAzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoeyBzcGVlZCB9OiB7IHNwZWVkOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgdmlydHVhbFRpbWVZZWxsb3cuc3BlZWQgPSBzcGVlZFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXFxuICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBzcGVlZDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFxcXCJzcGVlZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNSxcXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuNSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBBcnJheU51bWJlcjQsXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUaW1lLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgUGFpbnRlclBsYXlQYXVzZSB9IGZyb20gXCJAL3BhaW50ZXIvcGxheS1wYXVzZVwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XG4gICAgICAgIGNhbWVyYS5uZWFyID0gMC4xXG4gICAgICAgIGNhbWVyYS5mYXIgPSAxMFxuICAgIH1cbiAgICBjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKVxuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KVxuICAgIGNvbnN0IGNvbG9yczogQXJyYXlOdW1iZXI0W10gPSBbXG4gICAgICAgIFsxLCAwLjUsIDAuNSwgMV0sXG4gICAgICAgIFswLjUsIDEsIDAuNSwgMV0sXG4gICAgICAgIFswLjUsIDAuNSwgMSwgMV0sXG4gICAgICAgIFsxLCAxLCAwLCAxXSxcbiAgICBdXG4gICAgY29uc3QgUyA9IDAuN1xuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXG4gICAgZm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XG4gICAgICAgIGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMuc2hpZnQoKVxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzogeyBwb3NpdGlvbjogW3gsIHksIDBdIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSlcbiAgICBjb25zdCB2aXJ0dWFsVGltZUdyZWVuID0gdGltZXNbMV1cbiAgICBjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxuICAgICAgICAgICAgY29uc3QgY2FzZXM6IEFycmF5PFttZXNoOiBUZ2RQYWludGVyTWVzaCwgdGltZTogVGdkVGltZV0+ID0gWzAsIDEsIDIsIDNdLm1hcCgoaW5kZXgpID0+IFtcbiAgICAgICAgICAgICAgICBtZXNoZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgIHRpbWVzW2luZGV4XSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID4gMykge1xuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIFswLCAxLCAyLCAzXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZXNoLCB2aXJ0dWFsVGltZV0gPSBjYXNlc1tpbmRleF1cbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWVcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdZID0gdCAqIDMwXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgYW5nWSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFBhaW50ZXJQbGF5UGF1c2UoY29udGV4dCwgeyBzaXplOiAxMjggfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxuICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRNb3ZlLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgaWYgKCFldnQuc2hpZnRLZXkpIHJldHVyblxuXG4gICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA9IHRnZENhbGNNYXBSYW5nZShldnQuY3VycmVudC54LCAtMSwgKzEsIDAsIDMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH0pXG4gICAgcmV0dXJuICh7IHNwZWVkIH06IHsgc3BlZWQ6IG51bWJlciB9KSA9PiB7XG4gICAgICAgIHZpcnR1YWxUaW1lWWVsbG93LnNwZWVkID0gc3BlZWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcbiAgICAgICAgICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJzcGVlZFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVySWNvbixcbiAgICBUZ2RQYWludGVySWNvbk9wdGlvbnMsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHRnZExvYWRDYW52YXNGcm9tU3ZnLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFBhaW50ZXJQbGF5UGF1c2VPcHRpb25zIGV4dGVuZHMgT21pdDxUZ2RQYWludGVySWNvbk9wdGlvbnMsIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCIgfCBcInRleHR1cmVcIiB8IFwiYXRsYXNcIj4ge1xuICAgIHNpemU6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgUGFpbnRlclBsYXlQYXVzZSBleHRlbmRzIFRnZFBhaW50ZXJJY29uIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVJY29uczogVGdkVGV4dHVyZTJEXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIG9wdGlvbnM6IFBhcnRpYWw8UGFpbnRlclBsYXlQYXVzZU9wdGlvbnM+ID0ge30sXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiNmMDBcIiwgXCIjMGYwXCJdKSlcbiAgICAgICAgdGdkTG9hZENhbnZhc0Zyb21TdmcoU1ZHKS50aGVuKChibXApID0+IHtcbiAgICAgICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChibXApXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzaXplID0gb3B0aW9ucy5zaXplID8/IDY0XG4gICAgICAgIHN1cGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGFsaWduWDogMCxcbiAgICAgICAgICAgIGFsaWduWTogMCxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgICAgYXRsYXM6IFtcbiAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLjUsIGhlaWdodDogMSB9LFxuICAgICAgICAgICAgICAgIHsgeDogMC41LCB5OiAwLCB3aWR0aDogMC41LCBoZWlnaHQ6IDEgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50ZXh0dXJlSWNvbnMgPSB0ZXh0dXJlXG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWluZ0NoYW5nZSgpXG4gICAgICAgIHRoaXMuZXZlbnRQb2ludGVyVGFwLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlVGFwKVxuICAgICAgICBjb250ZXh0LmV2ZW50UGxheWluZ0NoYW5nZS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UpXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnRleHR1cmVJY29ucy5kZWxldGUoKVxuICAgICAgICB0aGlzLmV2ZW50UG9pbnRlclRhcC5yZW1vdmVMaXN0ZW5lcih0aGlzLmhhbmRsZVRhcClcbiAgICAgICAgdGhpcy5jb250ZXh0LmV2ZW50UGxheWluZ0NoYW5nZS5yZW1vdmVMaXN0ZW5lcih0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UpXG4gICAgICAgIHN1cGVyLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVUYXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpc1xuICAgICAgICBpZiAoY29udGV4dC5wbGF5aW5nKSB7XG4gICAgICAgICAgICBjb250ZXh0LnBhdXNlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQucGxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZVBsYXlpbmdDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5kZXggPSB0aGlzLmNvbnRleHQucGxheWluZyA/IDEgOiAwXG4gICAgfVxufVxuXG5jb25zdCBTVkcgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCAyNFwiIHdpZHRoPVwiNTEyXCIgaGVpZ2h0PVwiMjU2XCI+XG4gPGcgZmlsbD1cIiNGRkZcIj5cbiAgPHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEwLDE2LjVMMTYsMTJMMTAsNy41VjE2LjVaXCIgLz5cbiAgPHBhdGggdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI0LDApXCIgZD1cIk0xMywxNlY4SDE1VjE2SDEzTTksMTZWOEgxMVYxNkg5TTEyLDJBMTAsMTAgMCAwLDEgMjIsMTJBMTAsMTAgMCAwLDEgMTIsMjJBMTAsMTAgMCAwLDEgMiwxMkExMCwxMCAwIDAsMSAxMiwyTTEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNFpcIiAvPlxuIDwvZz5cbjwvc3ZnPmBcbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY01hcFJhbmdlIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRpbWUiLCJUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhIiwiVmlldyIsIlBhaW50ZXJQbGF5UGF1c2UiLCJpbml0IiwiY29udGV4dCIsImNhbWVyYSIsIl9pbnN0YW5jZW9mIiwidW5pZm9ybUNhbWVyYSIsImNsZWFyIiwiY29sb3JzIiwiUyIsIm1lc2hlcyIsIl9pdGVyIiwieSIsIl9pdGVyMSIsIngiLCJjb2xvciIsIm1hdGVyaWFsIiwidGltZXMiLCJzcGVlZCIsInZpcnR1YWxUaW1lR3JlZW4iLCJ2aXJ0dWFsVGltZVllbGxvdyIsInRpbWUiLCJjYXNlcyIsImluZGV4IiwiX2Nhc2VzX2luZGV4IiwibWVzaCIsInZpcnR1YWxUaW1lIiwidCIsImFuZ1kiLCJldnQiLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwiVGdkUGFpbnRlckljb24iLCJUZ2RUZXh0dXJlMkQiLCJ0Z2RMb2FkQ2FudmFzRnJvbVN2ZyIsIm9wdGlvbnMiLCJfb3B0aW9uc19zaXplIiwidGV4dHVyZSIsIlNWRyIsImJtcCIsInNpemUiLCJfJGNvbnRleHQiLCJfZGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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