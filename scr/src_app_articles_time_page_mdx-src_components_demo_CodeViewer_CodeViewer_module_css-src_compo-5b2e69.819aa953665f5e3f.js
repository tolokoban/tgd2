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
    "Detail #1": '    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: "less",\n            cull: "back",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()'
};
var FULL = 'import {\n    type ArrayNumber4,\n    tgdCalcMapRange,\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTime,\n    TgdUniformBufferObjectCamera,\n} from "@tolokoban/tgd"\n\nimport View from "@/components/demo/Tgd"\nimport { PainterPlayPause } from "@/painter/play-pause"\n\nfunction init(context: TgdContext) {\n    const { camera } = context\n    if (camera instanceof TgdCameraPerspective) {\n        camera.near = 0.1\n        camera.far = 10\n    }\n    camera.fitSpaceAtTarget(3, 3)\n    const uniformCamera = new TgdUniformBufferObjectCamera(context)\n    const clear = new TgdPainterClear(context, { color: [0.2, 0.1, 0, 1], depth: 1 })\n    const colors: ArrayNumber4[] = [\n        [1, 0.5, 0.5, 1],\n        [0.5, 1, 0.5, 1],\n        [0.5, 0.5, 1, 1],\n        [1, 1, 0, 1],\n    ]\n    const S = 0.7\n    const meshes: TgdPainterMesh[] = []\n    for (const y of [+S, -S]) {\n        for (const x of [-S, +S]) {\n            const color = colors.shift()\n            const material = new TgdMaterialDiffuse({\n                color,\n            })\n            meshes.push(\n                new TgdPainterMesh(context, {\n                    material,\n                    uniformCamera,\n                    transfo: { position: [x, y, 0] },\n                }),\n            )\n        }\n    }\n    const times: TgdTime[] = [0, 1, -1, 3].map((speed) => new TgdTime({ speed, context }))\n    const virtualTimeGreen = times[1]\n    const virtualTimeYellow = times[3]\n    context.add(\n        (time) => {\n            uniformCamera.updateData()\n            const cases: Array<[mesh: TgdPainterMesh, time: TgdTime]> = [0, 1, 2, 3].map((index) => [\n                meshes[index],\n                times[index],\n            ])\n            if (virtualTimeGreen.seconds > 3) {\n                virtualTimeGreen.seconds -= 3\n            }\n            for (const index of [0, 1, 2, 3]) {\n                const [mesh, virtualTime] = cases[index]\n                const t = index > 0 ? virtualTime.seconds : time\n                const angY = t * 30\n                mesh.transfo.setEulerRotation(0, angY, 0)\n            }\n        },\n        clear,\n        new TgdPainterState(context, {\n            depth: "less",\n            cull: "back",\n            children: meshes,\n        }),\n        new PainterPlayPause(context, { size: 128 }),\n    )\n    context.play()\n    context.inputs.pointer.eventMove.addListener((evt) => {\n        if (!evt.shiftKey) return\n\n        virtualTimeGreen.seconds = tgdCalcMapRange(evt.current.x, -1, +1, 0, 3)\n        context.paint()\n    })\n    return ({ speed }: { speed: number }) => {\n        virtualTimeYellow.speed = speed\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            disableDefaultDoubleTap\n            options={{\n                preserveDrawingBuffer: true,\n                alpha: false,\n                antialias: true,\n                premultipliedAlpha: false,\n            }}\n            settings={{\n                speed: {\n                    label: "speed",\n                    value: 3,\n                    min: 0,\n                    max: 5,\n                    step: 0.5,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        lineNumber: 97,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGltZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyY19jb21wby01YjJlNjkuODE5YWE5NTM2NjVmNWUzZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9fL21haW4uZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3BhaW50ZXIvcGxheS1wYXVzZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RpbWUvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiRGV0YWlsICMxXCI6XG5cdFx0JyAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sIGRlcHRoOiAxIH0pXFxuICAgIGNvbnN0IGNvbG9yczogQXJyYXlOdW1iZXI0W10gPSBbXFxuICAgICAgICBbMSwgMC41LCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDAuNSwgMSwgMV0sXFxuICAgICAgICBbMSwgMSwgMCwgMV0sXFxuICAgIF1cXG4gICAgY29uc3QgUyA9IDAuN1xcbiAgICBjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXVxcbiAgICBmb3IgKGNvbnN0IHkgb2YgWytTLCAtU10pIHtcXG4gICAgICAgIGZvciAoY29uc3QgeCBvZiBbLVMsICtTXSkge1xcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzLnNoaWZ0KClcXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBjb2xvcixcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLFxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmbzogeyBwb3NpdGlvbjogW3gsIHksIDBdIH0sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBjb25zdCB0aW1lczogVGdkVGltZVtdID0gWzAsIDEsIC0xLCAzXS5tYXAoKHNwZWVkKSA9PiBuZXcgVGdkVGltZSh7IHNwZWVkLCBjb250ZXh0IH0pKVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZUdyZWVuID0gdGltZXNbMV1cXG4gICAgY29uc3QgdmlydHVhbFRpbWVZZWxsb3cgPSB0aW1lc1szXVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgICh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgdW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKClcXG4gICAgICAgICAgICBjb25zdCBjYXNlczogQXJyYXk8W21lc2g6IFRnZFBhaW50ZXJNZXNoLCB0aW1lOiBUZ2RUaW1lXT4gPSBbMCwgMSwgMiwgM10ubWFwKChpbmRleCkgPT4gW1xcbiAgICAgICAgICAgICAgICBtZXNoZXNbaW5kZXhdLFxcbiAgICAgICAgICAgICAgICB0aW1lc1tpbmRleF0sXFxuICAgICAgICAgICAgXSlcXG4gICAgICAgICAgICBpZiAodmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID4gMykge1xcbiAgICAgICAgICAgICAgICB2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgLT0gM1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIFswLCAxLCAyLCAzXSkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBbbWVzaCwgdmlydHVhbFRpbWVdID0gY2FzZXNbaW5kZXhdXFxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBpbmRleCA+IDAgPyB2aXJ0dWFsVGltZS5zZWNvbmRzIDogdGltZVxcbiAgICAgICAgICAgICAgICBjb25zdCBhbmdZID0gdCAqIDMwXFxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIGFuZ1ksIDApXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxcbiAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBQYWludGVyUGxheVBhdXNlKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpJyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0Z2RDYWxjTWFwUmFuZ2UsXFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUaW1lLFxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5pbXBvcnQgeyBQYWludGVyUGxheVBhdXNlIH0gZnJvbSBcIkAvcGFpbnRlci9wbGF5LXBhdXNlXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG4gICAgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuICAgICAgICBjYW1lcmEubmVhciA9IDAuMVxcbiAgICAgICAgY2FtZXJhLmZhciA9IDEwXFxuICAgIH1cXG4gICAgY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMywgMylcXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjb2xvcnM6IEFycmF5TnVtYmVyNFtdID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDEsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAwLjUsIDEsIDFdLFxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxcbiAgICBdXFxuICAgIGNvbnN0IFMgPSAwLjdcXG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG4gICAgZm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXFxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3IsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFt4LCB5LCAwXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSlcXG4gICAgY29uc3QgdmlydHVhbFRpbWVHcmVlbiA9IHRpbWVzWzFdXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXFxuICAgICAgICAgICAgY29uc3QgY2FzZXM6IEFycmF5PFttZXNoOiBUZ2RQYWludGVyTWVzaCwgdGltZTogVGdkVGltZV0+ID0gWzAsIDEsIDIsIDNdLm1hcCgoaW5kZXgpID0+IFtcXG4gICAgICAgICAgICAgICAgbWVzaGVzW2luZGV4XSxcXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxcbiAgICAgICAgICAgIF0pXFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA+IDMpIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBbMCwgMSwgMiwgM10pIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWVcXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nWSA9IHQgKiAzMFxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50TW92ZS5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoIWV2dC5zaGlmdEtleSkgcmV0dXJuXFxuXFxuICAgICAgICB2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPSB0Z2RDYWxjTWFwUmFuZ2UoZXZ0LmN1cnJlbnQueCwgLTEsICsxLCAwLCAzKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXFxuICAgIHJldHVybiAoeyBzcGVlZCB9OiB7IHNwZWVkOiBudW1iZXIgfSkgPT4ge1xcbiAgICAgICAgdmlydHVhbFRpbWVZZWxsb3cuc3BlZWQgPSBzcGVlZFxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXBcXG4gICAgICAgICAgICBvcHRpb25zPXt7XFxuICAgICAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXFxuICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBzZXR0aW5ncz17e1xcbiAgICAgICAgICAgICAgICBzcGVlZDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic3BlZWRcIixcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAzLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA1LFxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogMC41LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdHRnZENhbGNNYXBSYW5nZSxcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRpbWUsXG5cdFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQgeyBQYWludGVyUGxheVBhdXNlIH0gZnJvbSBcIkAvcGFpbnRlci9wbGF5LXBhdXNlXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dDtcblx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XG5cdFx0Y2FtZXJhLm5lYXIgPSAwLjE7XG5cdFx0Y2FtZXJhLmZhciA9IDEwO1xuXHR9XG5cdGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpO1xuXHQvLyAjYmVnaW5cblx0Y29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpO1xuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcblx0XHRbMSwgMC41LCAwLjUsIDFdLFxuXHRcdFswLjUsIDEsIDAuNSwgMV0sXG5cdFx0WzAuNSwgMC41LCAxLCAxXSxcblx0XHRbMSwgMSwgMCwgMV0sXG5cdF07XG5cdGNvbnN0IFMgPSAwLjc7XG5cdGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IHkgb2YgWytTLCAtU10pIHtcblx0XHRmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcblx0XHRcdGNvbnN0IGNvbG9yID0gY29sb3JzLnNoaWZ0KCk7XG5cdFx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuXHRcdFx0XHRjb2xvcixcblx0XHRcdH0pO1xuXHRcdFx0bWVzaGVzLnB1c2goXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0XHRcdFx0bWF0ZXJpYWwsXG5cdFx0XHRcdFx0dW5pZm9ybUNhbWVyYSxcblx0XHRcdFx0XHR0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRjb25zdCB0aW1lczogVGdkVGltZVtdID0gWzAsIDEsIC0xLCAzXS5tYXAoXG5cdFx0KHNwZWVkKSA9PiBuZXcgVGdkVGltZSh7IHNwZWVkLCBjb250ZXh0IH0pLFxuXHQpO1xuXHRjb25zdCB2aXJ0dWFsVGltZUdyZWVuID0gdGltZXNbMV07XG5cdGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM107XG5cdGNvbnRleHQuYWRkKFxuXHRcdCh0aW1lKSA9PiB7XG5cdFx0XHR1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKTtcblx0XHRcdGNvbnN0IGNhc2VzOiBBcnJheTxbbWVzaDogVGdkUGFpbnRlck1lc2gsIHRpbWU6IFRnZFRpbWVdPiA9IFtcblx0XHRcdFx0MCwgMSwgMiwgMyxcblx0XHRcdF0ubWFwKChpbmRleCkgPT4gW21lc2hlc1tpbmRleF0sIHRpbWVzW2luZGV4XV0pO1xuXHRcdFx0aWYgKHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA+IDMpIHtcblx0XHRcdFx0dmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDM7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGluZGV4IG9mIFswLCAxLCAyLCAzXSkge1xuXHRcdFx0XHRjb25zdCBbbWVzaCwgdmlydHVhbFRpbWVdID0gY2FzZXNbaW5kZXhdO1xuXHRcdFx0XHRjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWU7XG5cdFx0XHRcdGNvbnN0IGFuZ1kgPSB0ICogMzA7XG5cdFx0XHRcdG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDAsIGFuZ1ksIDApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y2xlYXIsXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0XHRjdWxsOiBcImJhY2tcIixcblx0XHRcdGNoaWxkcmVuOiBtZXNoZXMsXG5cdFx0fSksXG5cdFx0bmV3IFBhaW50ZXJQbGF5UGF1c2UoY29udGV4dCwgeyBzaXplOiAxMjggfSksXG5cdCk7XG5cdGNvbnRleHQucGxheSgpO1xuXHQvLyAjZW5kXG5cdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRNb3ZlLmFkZExpc3RlbmVyKChldnQpID0+IHtcblx0XHRpZiAoIWV2dC5zaGlmdEtleSkgcmV0dXJuO1xuXG5cdFx0dmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID0gdGdkQ2FsY01hcFJhbmdlKGV2dC5jdXJyZW50LngsIC0xLCArMSwgMCwgMyk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9KTtcblx0cmV0dXJuICh7IHNwZWVkIH06IHsgc3BlZWQ6IG51bWJlciB9KSA9PiB7XG5cdFx0dmlydHVhbFRpbWVZZWxsb3cuc3BlZWQgPSBzcGVlZDtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXG5cdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdFx0YWxwaGE6IGZhbHNlLFxuXHRcdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0XHRcdHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0c3BlZWQ6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJzcGVlZFwiLFxuXHRcdFx0XHRcdHZhbHVlOiAzLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDUsXG5cdFx0XHRcdFx0c3RlcDogMC41LFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RQYWludGVySWNvbixcblx0dHlwZSBUZ2RQYWludGVySWNvbk9wdGlvbnMsXG5cdFRnZFRleHR1cmUyRCxcblx0dGdkTG9hZENhbnZhc0Zyb21TdmcsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhaW50ZXJQbGF5UGF1c2VPcHRpb25zXG5cdGV4dGVuZHMgT21pdDxcblx0XHRUZ2RQYWludGVySWNvbk9wdGlvbnMsXG5cdFx0XCJ3aWR0aFwiIHwgXCJoZWlnaHRcIiB8IFwidGV4dHVyZVwiIHwgXCJhdGxhc1wiXG5cdD4ge1xuXHRzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyUGxheVBhdXNlIGV4dGVuZHMgVGdkUGFpbnRlckljb24ge1xuXHRwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVJY29uczogVGdkVGV4dHVyZTJEO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0LFxuXHRcdG9wdGlvbnM6IFBhcnRpYWw8UGFpbnRlclBsYXlQYXVzZU9wdGlvbnM+ID0ge30sXG5cdCkge1xuXHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0XHRtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHR0ZXh0dXJlLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjZjAwXCIsIFwiIzBmMFwiXSkpO1xuXHRcdHRnZExvYWRDYW52YXNGcm9tU3ZnKFNWRykudGhlbigoYm1wKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLmxvYWRCaXRtYXAoYm1wKTtcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdH0pO1xuXHRcdGNvbnN0IHNpemUgPSBvcHRpb25zLnNpemUgPz8gNjQ7XG5cdFx0c3VwZXIoY29udGV4dCwge1xuXHRcdFx0YWxpZ25YOiAwLFxuXHRcdFx0YWxpZ25ZOiAwLFxuXHRcdFx0bWFyZ2luOiAwLFxuXHRcdFx0Li4ub3B0aW9ucyxcblx0XHRcdHRleHR1cmUsXG5cdFx0XHRhdGxhczogW1xuXHRcdFx0XHR7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLjUsIGhlaWdodDogMSB9LFxuXHRcdFx0XHR7IHg6IDAuNSwgeTogMCwgd2lkdGg6IDAuNSwgaGVpZ2h0OiAxIH0sXG5cdFx0XHRdLFxuXHRcdFx0d2lkdGg6IHNpemUsXG5cdFx0XHRoZWlnaHQ6IHNpemUsXG5cdFx0fSk7XG5cdFx0dGhpcy50ZXh0dXJlSWNvbnMgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuaGFuZGxlUGxheWluZ0NoYW5nZSgpO1xuXHRcdHRoaXMuZXZlbnRQb2ludGVyVGFwLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlVGFwKTtcblx0XHRjb250ZXh0LmV2ZW50UGxheWluZ0NoYW5nZS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UpO1xuXHR9XG5cblx0ZGVsZXRlKCkge1xuXHRcdHRoaXMudGV4dHVyZUljb25zLmRlbGV0ZSgpO1xuXHRcdHRoaXMuZXZlbnRQb2ludGVyVGFwLnJlbW92ZUxpc3RlbmVyKHRoaXMuaGFuZGxlVGFwKTtcblx0XHR0aGlzLmNvbnRleHQuZXZlbnRQbGF5aW5nQ2hhbmdlLnJlbW92ZUxpc3RlbmVyKHRoaXMuaGFuZGxlUGxheWluZ0NoYW5nZSk7XG5cdFx0c3VwZXIuZGVsZXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIHJlYWRvbmx5IGhhbmRsZVRhcCA9ICgpID0+IHtcblx0XHRjb25zdCB7IGNvbnRleHQgfSA9IHRoaXM7XG5cdFx0aWYgKGNvbnRleHQucGxheWluZykge1xuXHRcdFx0Y29udGV4dC5wYXVzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZXh0LnBsYXkoKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSByZWFkb25seSBoYW5kbGVQbGF5aW5nQ2hhbmdlID0gKCkgPT4ge1xuXHRcdHRoaXMuaW5kZXggPSB0aGlzLmNvbnRleHQucGxheWluZyA/IDEgOiAwO1xuXHR9O1xufVxuXG5jb25zdCBTVkcgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0OCAyNFwiIHdpZHRoPVwiNTEyXCIgaGVpZ2h0PVwiMjU2XCI+XG4gPGcgZmlsbD1cIiNGRkZcIj5cbiAgPHBhdGggZD1cIk0xMiwyMEM3LjU5LDIwIDQsMTYuNDEgNCwxMkM0LDcuNTkgNy41OSw0IDEyLDRDMTYuNDEsNCAyMCw3LjU5IDIwLDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEwLDE2LjVMMTYsMTJMMTAsNy41VjE2LjVaXCIgLz5cbiAgPHBhdGggdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI0LDApXCIgZD1cIk0xMywxNlY4SDE1VjE2SDEzTTksMTZWOEgxMVYxNkg5TTEyLDJBMTAsMTAgMCAwLDEgMjIsMTJBMTAsMTAgMCAwLDEgMTIsMjJBMTAsMTAgMCAwLDEgMiwxMkExMCwxMCAwIDAsMSAxMiwyTTEyLDRBOCw4IDAgMCwwIDQsMTJBOCw4IDAgMCwwIDEyLDIwQTgsOCAwIDAsMCAyMCwxMkE4LDggMCAwLDAgMTIsNFpcIiAvPlxuIDwvZz5cbjwvc3ZnPmA7XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNNYXBSYW5nZSIsIlRnZENhbWVyYVBlcnNwZWN0aXZlIiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUaW1lIiwiVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSIsIlZpZXciLCJQYWludGVyUGxheVBhdXNlIiwiaW5pdCIsImNvbnRleHQiLCJjYW1lcmEiLCJfaW5zdGFuY2VvZiIsInVuaWZvcm1DYW1lcmEiLCJjbGVhciIsImNvbG9ycyIsIlMiLCJtZXNoZXMiLCJfaXRlciIsInkiLCJfaXRlcjEiLCJ4IiwiY29sb3IiLCJtYXRlcmlhbCIsInRpbWVzIiwic3BlZWQiLCJ2aXJ0dWFsVGltZUdyZWVuIiwidmlydHVhbFRpbWVZZWxsb3ciLCJ0aW1lIiwiY2FzZXMiLCJpbmRleCIsIl9jYXNlc19pbmRleCIsIm1lc2giLCJ2aXJ0dWFsVGltZSIsInQiLCJhbmdZIiwiZXZ0IiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsIlRnZFBhaW50ZXJJY29uIiwiVGdkVGV4dHVyZTJEIiwidGdkTG9hZENhbnZhc0Zyb21TdmciLCJvcHRpb25zIiwiX29wdGlvbnNfc2l6ZSIsInRleHR1cmUiLCJTVkciLCJibXAiLCJzaXplIiwiXyRjb250ZXh0IiwiX2RlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUN2QjtBQUUvQixJQUFNSSxRQUFRO0lBQ2IsYUFDQztBQUNGO0FBQ0EsSUFBTUMsT0FDTDtBQUVjLFNBQVNDO0lBQ3ZCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFDQzs7MEJBQ0Msa0RBQUM7Z0JBQUksV0FBVTswQkFDZCxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUVOLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNkLGtEQUFDO2tDQUNBLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ3JEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR2hDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ3QjtBQUVpQjtBQUNlO0FBRXhELFNBQVNpQixLQUFLQyxPQUFtQjtJQUNoQyxJQUFRQyxTQUFXRCxRQUFYQztJQUNSLElBQVVDLFlBQU5ELFFBQWtCWCxvREFBb0JBLEdBQUU7UUFDM0NXLE9BQU8s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