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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/time/_/main.demo/main.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGltZV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLXNyY19jb21wby01YjJlNjkuNWQ5YzQ4MmNkMzY2NmIzNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90aW1lL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3BhaW50ZXIvcGxheS1wYXVzZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGltZS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdCcgICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLCBkZXB0aDogMSB9KVxcbiAgICBjb25zdCBjb2xvcnM6IEFycmF5TnVtYmVyNFtdID0gW1xcbiAgICAgICAgWzEsIDAuNSwgMC41LCAxXSxcXG4gICAgICAgIFswLjUsIDEsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAwLjUsIDEsIDFdLFxcbiAgICAgICAgWzEsIDEsIDAsIDFdLFxcbiAgICBdXFxuICAgIGNvbnN0IFMgPSAwLjdcXG4gICAgY29uc3QgbWVzaGVzOiBUZ2RQYWludGVyTWVzaFtdID0gW11cXG4gICAgZm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XFxuICAgICAgICBmb3IgKGNvbnN0IHggb2YgWy1TLCArU10pIHtcXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpXFxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgY29sb3IsXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICBtZXNoZXMucHVzaChcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybUNhbWVyYSxcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm86IHsgcG9zaXRpb246IFt4LCB5LCAwXSB9LFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSlcXG4gICAgY29uc3QgdmlydHVhbFRpbWVHcmVlbiA9IHRpbWVzWzFdXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lWWVsbG93ID0gdGltZXNbM11cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEudXBkYXRlRGF0YSgpXFxuICAgICAgICAgICAgY29uc3QgY2FzZXM6IEFycmF5PFttZXNoOiBUZ2RQYWludGVyTWVzaCwgdGltZTogVGdkVGltZV0+ID0gWzAsIDEsIDIsIDNdLm1hcCgoaW5kZXgpID0+IFtcXG4gICAgICAgICAgICAgICAgbWVzaGVzW2luZGV4XSxcXG4gICAgICAgICAgICAgICAgdGltZXNbaW5kZXhdLFxcbiAgICAgICAgICAgIF0pXFxuICAgICAgICAgICAgaWYgKHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA+IDMpIHtcXG4gICAgICAgICAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzIC09IDNcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBbMCwgMSwgMiwgM10pIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XVxcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gaW5kZXggPiAwID8gdmlydHVhbFRpbWUuc2Vjb25kcyA6IHRpbWVcXG4gICAgICAgICAgICAgICAgY29uc3QgYW5nWSA9IHQgKiAzMFxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgUGFpbnRlclBsYXlQYXVzZShjb250ZXh0LCB7IHNpemU6IDEyOCB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG4gICAgdGdkQ2FsY01hcFJhbmdlLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGltZSxcXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuaW1wb3J0IHsgUGFpbnRlclBsYXlQYXVzZSB9IGZyb20gXCJAL3BhaW50ZXIvcGxheS1wYXVzZVwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xcbiAgICAgICAgY2FtZXJhLm5lYXIgPSAwLjFcXG4gICAgICAgIGNhbWVyYS5mYXIgPSAxMFxcbiAgICB9XFxuICAgIGNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDMsIDMpXFxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSwgZGVwdGg6IDEgfSlcXG4gICAgY29uc3QgY29sb3JzOiBBcnJheU51bWJlcjRbXSA9IFtcXG4gICAgICAgIFsxLCAwLjUsIDAuNSwgMV0sXFxuICAgICAgICBbMC41LCAxLCAwLjUsIDFdLFxcbiAgICAgICAgWzAuNSwgMC41LCAxLCAxXSxcXG4gICAgICAgIFsxLCAxLCAwLCAxXSxcXG4gICAgXVxcbiAgICBjb25zdCBTID0gMC43XFxuICAgIGNvbnN0IG1lc2hlczogVGdkUGFpbnRlck1lc2hbXSA9IFtdXFxuICAgIGZvciAoY29uc3QgeSBvZiBbK1MsIC1TXSkge1xcbiAgICAgICAgZm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XFxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnMuc2hpZnQoKVxcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgbWVzaGVzLnB1c2goXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbCxcXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1DYW1lcmEsXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2ZvOiB7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIGNvbnN0IHRpbWVzOiBUZ2RUaW1lW10gPSBbMCwgMSwgLTEsIDNdLm1hcCgoc3BlZWQpID0+IG5ldyBUZ2RUaW1lKHsgc3BlZWQsIGNvbnRleHQgfSkpXFxuICAgIGNvbnN0IHZpcnR1YWxUaW1lR3JlZW4gPSB0aW1lc1sxXVxcbiAgICBjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICB1bmlmb3JtQ2FtZXJhLnVwZGF0ZURhdGEoKVxcbiAgICAgICAgICAgIGNvbnN0IGNhc2VzOiBBcnJheTxbbWVzaDogVGdkUGFpbnRlck1lc2gsIHRpbWU6IFRnZFRpbWVdPiA9IFswLCAxLCAyLCAzXS5tYXAoKGluZGV4KSA9PiBbXFxuICAgICAgICAgICAgICAgIG1lc2hlc1tpbmRleF0sXFxuICAgICAgICAgICAgICAgIHRpbWVzW2luZGV4XSxcXG4gICAgICAgICAgICBdKVxcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XFxuICAgICAgICAgICAgICAgIHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2YgWzAsIDEsIDIsIDNdKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFttZXNoLCB2aXJ0dWFsVGltZV0gPSBjYXNlc1tpbmRleF1cXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IGluZGV4ID4gMCA/IHZpcnR1YWxUaW1lLnNlY29uZHMgOiB0aW1lXFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ1kgPSB0ICogMzBcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMCwgYW5nWSwgMClcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IG1lc2hlcyxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFBhaW50ZXJQbGF5UGF1c2UoY29udGV4dCwgeyBzaXplOiAxMjggfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudE1vdmUuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKCFldnQuc2hpZnRLZXkpIHJldHVyblxcblxcbiAgICAgICAgdmlydHVhbFRpbWVHcmVlbi5zZWNvbmRzID0gdGdkQ2FsY01hcFJhbmdlKGV2dC5jdXJyZW50LngsIC0xLCArMSwgMCwgMylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbiAgICByZXR1cm4gKHsgc3BlZWQgfTogeyBzcGVlZDogbnVtYmVyIH0pID0+IHtcXG4gICAgICAgIHZpcnR1YWxUaW1lWWVsbG93LnNwZWVkID0gc3BlZWRcXG4gICAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0RG91YmxlVGFwXFxuICAgICAgICAgICAgb3B0aW9ucz17e1xcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXFxuICAgICAgICAgICAgICAgIGFscGhhOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNwZWVkXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcXG4gICAgICAgICAgICAgICAgICAgIG1heDogNSxcXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuNSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0Z2RDYWxjTWFwUmFuZ2UsXG5cdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUaW1lLFxuXHRUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IHsgUGFpbnRlclBsYXlQYXVzZSB9IGZyb20gXCJAL3BhaW50ZXIvcGxheS1wYXVzZVwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuXHRcdGNhbWVyYS5uZWFyID0gMC4xO1xuXHRcdGNhbWVyYS5mYXIgPSAxMDtcblx0fVxuXHRjYW1lcmEuZml0U3BhY2VBdFRhcmdldCgzLCAzKTtcblx0Ly8gI2JlZ2luXG5cdGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSxcblx0XHRkZXB0aDogMSxcblx0fSk7XG5cdGNvbnN0IGNvbG9yczogQXJyYXlOdW1iZXI0W10gPSBbXG5cdFx0WzEsIDAuNSwgMC41LCAxXSxcblx0XHRbMC41LCAxLCAwLjUsIDFdLFxuXHRcdFswLjUsIDAuNSwgMSwgMV0sXG5cdFx0WzEsIDEsIDAsIDFdLFxuXHRdO1xuXHRjb25zdCBTID0gMC43O1xuXHRjb25zdCBtZXNoZXM6IFRnZFBhaW50ZXJNZXNoW10gPSBbXTtcblx0Zm9yIChjb25zdCB5IG9mIFsrUywgLVNdKSB7XG5cdFx0Zm9yIChjb25zdCB4IG9mIFstUywgK1NdKSB7XG5cdFx0XHRjb25zdCBjb2xvciA9IGNvbG9ycy5zaGlmdCgpO1xuXHRcdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdFx0Y29sb3IsXG5cdFx0XHR9KTtcblx0XHRcdG1lc2hlcy5wdXNoKFxuXHRcdFx0XHRuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdFx0XHRcdG1hdGVyaWFsLFxuXHRcdFx0XHRcdHVuaWZvcm1DYW1lcmEsXG5cdFx0XHRcdFx0dHJhbnNmbzogeyBwb3NpdGlvbjogW3gsIHksIDBdIH0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0Y29uc3QgdGltZXM6IFRnZFRpbWVbXSA9IFswLCAxLCAtMSwgM10ubWFwKFxuXHRcdChzcGVlZCkgPT4gbmV3IFRnZFRpbWUoeyBzcGVlZCwgY29udGV4dCB9KSxcblx0KTtcblx0Y29uc3QgdmlydHVhbFRpbWVHcmVlbiA9IHRpbWVzWzFdO1xuXHRjb25zdCB2aXJ0dWFsVGltZVllbGxvdyA9IHRpbWVzWzNdO1xuXHRjb250ZXh0LmFkZChcblx0XHQodGltZSkgPT4ge1xuXHRcdFx0dW5pZm9ybUNhbWVyYS51cGRhdGVEYXRhKCk7XG5cdFx0XHRjb25zdCBjYXNlczogQXJyYXk8W21lc2g6IFRnZFBhaW50ZXJNZXNoLCB0aW1lOiBUZ2RUaW1lXT4gPSBbXG5cdFx0XHRcdDAsIDEsIDIsIDMsXG5cdFx0XHRdLm1hcCgoaW5kZXgpID0+IFttZXNoZXNbaW5kZXhdLCB0aW1lc1tpbmRleF1dKTtcblx0XHRcdGlmICh2aXJ0dWFsVGltZUdyZWVuLnNlY29uZHMgPiAzKSB7XG5cdFx0XHRcdHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyAtPSAzO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBpbmRleCBvZiBbMCwgMSwgMiwgM10pIHtcblx0XHRcdFx0Y29uc3QgW21lc2gsIHZpcnR1YWxUaW1lXSA9IGNhc2VzW2luZGV4XTtcblx0XHRcdFx0Y29uc3QgdCA9IGluZGV4ID4gMCA/IHZpcnR1YWxUaW1lLnNlY29uZHMgOiB0aW1lO1xuXHRcdFx0XHRjb25zdCBhbmdZID0gdCAqIDMwO1xuXHRcdFx0XHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigwLCBhbmdZLCAwKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNsZWFyLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IFwibGVzc1wiLFxuXHRcdFx0Y3VsbDogXCJiYWNrXCIsXG5cdFx0XHRjaGlsZHJlbjogbWVzaGVzLFxuXHRcdH0pLFxuXHRcdG5ldyBQYWludGVyUGxheVBhdXNlKGNvbnRleHQsIHsgc2l6ZTogMTI4IH0pLFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Ly8gI2VuZFxuXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50TW92ZS5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG5cdFx0aWYgKCFldnQuc2hpZnRLZXkpIHJldHVybjtcblxuXHRcdHZpcnR1YWxUaW1lR3JlZW4uc2Vjb25kcyA9IHRnZENhbGNNYXBSYW5nZShldnQuY3VycmVudC54LCAtMSwgKzEsIDAsIDMpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fSk7XG5cdHJldHVybiAoeyBzcGVlZCB9OiB7IHNwZWVkOiBudW1iZXIgfSkgPT4ge1xuXHRcdHZpcnR1YWxUaW1lWWVsbG93LnNwZWVkID0gc3BlZWQ7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRkaXNhYmxlRGVmYXVsdERvdWJsZVRhcFxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHRcdGFscGhhOiBmYWxzZSxcblx0XHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdFx0XHRwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLFxuXHRcdFx0fX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdHNwZWVkOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwic3BlZWRcIixcblx0XHRcdFx0XHR2YWx1ZTogMyxcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiA1LFxuXHRcdFx0XHRcdHN0ZXA6IDAuNSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckljb24sXG5cdHR5cGUgVGdkUGFpbnRlckljb25PcHRpb25zLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZExvYWRDYW52YXNGcm9tU3ZnLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQYWludGVyUGxheVBhdXNlT3B0aW9uc1xuXHRleHRlbmRzIE9taXQ8XG5cdFx0VGdkUGFpbnRlckljb25PcHRpb25zLFxuXHRcdFwid2lkdGhcIiB8IFwiaGVpZ2h0XCIgfCBcInRleHR1cmVcIiB8IFwiYXRsYXNcIlxuXHQ+IHtcblx0c2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUGFpbnRlclBsYXlQYXVzZSBleHRlbmRzIFRnZFBhaW50ZXJJY29uIHtcblx0cHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlSWNvbnM6IFRnZFRleHR1cmUyRDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcblx0XHRvcHRpb25zOiBQYXJ0aWFsPFBhaW50ZXJQbGF5UGF1c2VPcHRpb25zPiA9IHt9LFxuXHQpIHtcblx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0XHRwYXJhbXM6IHtcblx0XHRcdFx0bWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdFx0bWluRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0dGV4dHVyZS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1wiI2YwMFwiLCBcIiMwZjBcIl0pKTtcblx0XHR0Z2RMb2FkQ2FudmFzRnJvbVN2ZyhTVkcpLnRoZW4oKGJtcCkgPT4ge1xuXHRcdFx0dGV4dHVyZS5sb2FkQml0bWFwKGJtcCk7XG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblx0XHR9KTtcblx0XHRjb25zdCBzaXplID0gb3B0aW9ucy5zaXplID8/IDY0O1xuXHRcdHN1cGVyKGNvbnRleHQsIHtcblx0XHRcdGFsaWduWDogMCxcblx0XHRcdGFsaWduWTogMCxcblx0XHRcdG1hcmdpbjogMCxcblx0XHRcdC4uLm9wdGlvbnMsXG5cdFx0XHR0ZXh0dXJlLFxuXHRcdFx0YXRsYXM6IFtcblx0XHRcdFx0eyB4OiAwLCB5OiAwLCB3aWR0aDogMC41LCBoZWlnaHQ6IDEgfSxcblx0XHRcdFx0eyB4OiAwLjUsIHk6IDAsIHdpZHRoOiAwLjUsIGhlaWdodDogMSB9LFxuXHRcdFx0XSxcblx0XHRcdHdpZHRoOiBzaXplLFxuXHRcdFx0aGVpZ2h0OiBzaXplLFxuXHRcdH0pO1xuXHRcdHRoaXMudGV4dHVyZUljb25zID0gdGV4dHVyZTtcblx0XHR0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UoKTtcblx0XHR0aGlzLmV2ZW50UG9pbnRlclRhcC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVRhcCk7XG5cdFx0Y29udGV4dC5ldmVudFBsYXlpbmdDaGFuZ2UuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVQbGF5aW5nQ2hhbmdlKTtcblx0fVxuXG5cdGRlbGV0ZSgpIHtcblx0XHR0aGlzLnRleHR1cmVJY29ucy5kZWxldGUoKTtcblx0XHR0aGlzLmV2ZW50UG9pbnRlclRhcC5yZW1vdmVMaXN0ZW5lcih0aGlzLmhhbmRsZVRhcCk7XG5cdFx0dGhpcy5jb250ZXh0LmV2ZW50UGxheWluZ0NoYW5nZS5yZW1vdmVMaXN0ZW5lcih0aGlzLmhhbmRsZVBsYXlpbmdDaGFuZ2UpO1xuXHRcdHN1cGVyLmRlbGV0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSByZWFkb25seSBoYW5kbGVUYXAgPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBjb250ZXh0IH0gPSB0aGlzO1xuXHRcdGlmIChjb250ZXh0LnBsYXlpbmcpIHtcblx0XHRcdGNvbnRleHQucGF1c2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dC5wbGF5KCk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlUGxheWluZ0NoYW5nZSA9ICgpID0+IHtcblx0XHR0aGlzLmluZGV4ID0gdGhpcy5jb250ZXh0LnBsYXlpbmcgPyAxIDogMDtcblx0fTtcbn1cblxuY29uc3QgU1ZHID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDggMjRcIiB3aWR0aD1cIjUxMlwiIGhlaWdodD1cIjI1NlwiPlxuIDxnIGZpbGw9XCIjRkZGXCI+XG4gIDxwYXRoIGQ9XCJNMTIsMjBDNy41OSwyMCA0LDE2LjQxIDQsMTJDNCw3LjU5IDcuNTksNCAxMiw0QzE2LjQxLDQgMjAsNy41OSAyMCwxMkMyMCwxNi40MSAxNi40MSwyMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMk0xMCwxNi41TDE2LDEyTDEwLDcuNVYxNi41WlwiIC8+XG4gIDxwYXRoIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNCwwKVwiIGQ9XCJNMTMsMTZWOEgxNVYxNkgxM005LDE2VjhIMTFWMTZIOU0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRaXCIgLz5cbiA8L2c+XG48L3N2Zz5gO1xuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjTWFwUmFuZ2UiLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGltZSIsIlRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEiLCJWaWV3IiwiUGFpbnRlclBsYXlQYXVzZSIsImluaXQiLCJjb250ZXh0IiwiY2FtZXJhIiwiX2luc3RhbmNlb2YiLCJ1bmlmb3JtQ2FtZXJhIiwiY2xlYXIiLCJjb2xvcnMiLCJTIiwibWVzaGVzIiwiX2l0ZXIiLCJ5IiwiX2l0ZXIxIiwieCIsImNvbG9yIiwibWF0ZXJpYWwiLCJ0aW1lcyIsInNwZWVkIiwidmlydHVhbFRpbWVHcmVlbiIsInZpcnR1YWxUaW1lWWVsbG93IiwidGltZSIsImNhc2VzIiwiaW5kZXgiLCJfY2FzZXNfaW5kZXgiLCJtZXNoIiwidmlydHVhbFRpbWUiLCJ0IiwiYW5nWSIsImV2dCIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJUZ2RQYWludGVySWNvbiIsIlRnZFRleHR1cmUyRCIsInRnZExvYWRDYW52YXNGcm9tU3ZnIiwib3B0aW9ucyIsIl9vcHRpb25zX3NpemUiLCJ0ZXh0dXJlIiwiU1ZHIiwiYm1wIiwic2l6ZSIsIl8kY29udGV4dCIsIl9kZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3lCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFL0IsSUFBTUksUUFBUTtJQUNiLGFBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0M7OzBCQUNDLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ2QsZ0VBQUNKLHNDQUFJQTs7Ozs7Ozs7OzswQkFFTixrREFBQztnQkFBSSxXQUFVOztrQ0FDZCxrREFBQztrQ0FDQSxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNyREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUdoQyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBSXBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCd0I7QUFFaUI7QUFDZTtBQUV4RCxTQUFTaUIsS0FBS0MsT0FBbUI7SUFDaEMsSUFBUUMsU0FBV0QsUUFBWEM7SUFDUixJQUFVQyxZQUFORCxRQUFrQlgsb0RBQW9CQSxHQUFFO1FBQzNDVyxPQUFPLElBQUksR0FBRztRQUNkQSxPQUFPLEdBQUcsR0FBRztJQUNkO0lBQ0FBLE9BQU8sZ0JBQWdCLENBQUMsR0FBRztJQUMzQixTQUFTO0lBQ1QsSUFBTUUsZ0JBQWdCLElBQUlQLDREQUE0QkEsQ0FBQ0k7SUFDdkQsSUFBTUksUUFBUSxJQUFJWiwrQ0FBZUEsQ0FBQ1EsU0FBUztRQUMxQyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUc7U0FBRTtRQUN2QixPQUFPO0lBQ1I7SUFDQSxJQUFNSyxTQUF5QjtRQUM5QjtZQUFDO1lBQUc7WUFBSztZQUFLO1NBQUU7UUFDaEI7WUFBQztZQUFLO1lBQUc7WUFBSztTQUFFO1FBQ2hCO1lBQUM7WUFBSztZQUFLO1lBQUc7U0FBRTtRQUNoQjtZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7S0FDWjtJQUNELElBQU1DLElBQUk7SUFDVixJQUFNQyxTQUEyQixFQUFFO0lBQ25DLGdCQUFnQkMsUUFBQUE7UUFBQyxDQUFDRjtRQUFHLENBQUNBO0tBQUUsT0FBUkUsbUJBQVU7WUFBZkMsSUFBS0Q7UUFDZixpQkFBZ0JFLFNBQUFBO1lBQUMsQ0FBQ0o7WUFBRyxDQUFDQTtTQUFFLFFBQVJJLHFCQUFVO2dCQUFmQyxJQUFLRDtZQUNmLElBQU1FLFFBQVFQLE9BQU8sS0FBSztZQUMxQixJQUFNUSxXQUFXLElBQUl0QixrREFBa0JBLENBQUM7Z0JBQ3ZDcUIsT0FBQUE7WUFDRDtZQUNBTCxPQUFPLElBQUksQ0FDVixJQUFJZCw4Q0FBY0EsQ0FBQ08sU0FBUztnQkFDM0JhLFVBQUFBO2dCQUNBVixlQUFBQTtnQkFDQSxTQUFTO29CQUFFLFVBQVU7d0JBQUNRO3dCQUFHRjt3QkFBRztxQkFBRTtnQkFBQztZQUNoQztRQUVGO0lBQ0Q7SUFDQSxJQUFNSyxRQUFtQjtRQUFDO1FBQUc7UUFBRyxDQUFDO1FBQUc7S0FBRSxDQUFDLEdBQUcsQ0FDekMsU0FBQ0M7ZUFBVSxJQUFJcEIsdUNBQU9BLENBQUM7WUFBRW9CLE9BQUFBO1lBQU9mLFNBQUFBO1FBQVE7O0lBRXpDLElBQU1nQixtQkFBbUJGLEtBQUssQ0FBQyxFQUFFO0lBQ2pDLElBQU1HLG9CQUFvQkgsS0FBSyxDQUFDLEVBQUU7SUFDbENkLFFBQVEsR0FBRyxDQUNWLFNBQUNrQjtRQUNBZixjQUFjLFVBQVU7UUFDeEIsSUFBTWdCLFFBQXNEO1lBQzNEO1lBQUc7WUFBRztZQUFHO1NBQ1QsQ0FBQyxHQUFHLENBQUMsU0FBQ0M7bUJBQVU7Z0JBQUNiLE1BQU0sQ0FBQ2EsTUFBTTtnQkFBRU4sS0FBSyxDQUFDTSxNQUFNO2FBQUM7O1FBQzlDLElBQUlKLGlCQUFpQixPQUFPLEdBQUcsR0FBRztZQUNqQ0EsaUJBQWlCLE9BQU8sSUFBSTtRQUM3QjtRQUNBLGdCQUFvQlIsUUFBQUE7WUFBQztZQUFHO1lBQUc7WUFBRztTQUFFLE9BQVpBLG1CQUFjO2dCQUF2QlksUUFBU1o7WUFDbkIsSUFBNEJhLGdDQUFBQSxLQUFLLENBQUNELE1BQU0sTUFBakNFLE9BQXFCRCxpQkFBZkUsY0FBZUY7WUFDNUIsSUFBTUcsSUFBSUosUUFBUSxJQUFJRyxZQUFZLE9BQU8sR0FBR0w7WUFDNUMsSUFBTU8sT0FBT0QsSUFBSTtZQUNqQkYsS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBR0csTUFBTTtRQUN4QztJQUNELEdBQ0FyQixPQUNBLElBQUlWLCtDQUFlQSxDQUFDTSxTQUFTO1FBQzVCLE9BQU87UUFDUCxNQUFNO1FBQ04sVUFBVU87SUFDWCxJQUNBLElBQUlULHFEQUFnQkEsQ0FBQ0UsU0FBUztRQUFFLE1BQU07SUFBSTtJQUUzQ0EsUUFBUSxJQUFJO0lBQ1osT0FBTztJQUNQQSxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFDMEI7UUFDN0MsSUFBSSxDQUFDQSxJQUFJLFFBQVEsRUFBRTtRQUVuQlYsaUJBQWlCLE9BQU8sR0FBRzNCLG1EQUFlQSxDQUFDcUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRztRQUNyRTFCLFFBQVEsS0FBSztJQUNkO0lBQ0EsT0FBTztZQUFHZSxjQUFBQTtRQUNURSxrQkFBa0IsS0FBSyxHQUFHRjtJQUMzQjtBQUNEO0FBRWUsU0FBU2xDO0lBQ3ZCLHFCQUNDLGtEQUFDZ0IsZ0RBQUlBO1FBQ0osU0FBU0U7UUFDVCx1QkFBdUI7UUFDdkIsU0FBUztZQUNSLHVCQUF1QjtZQUN2QixPQUFPO1lBQ1AsV0FBVztZQUNYLG9CQUFvQjtRQUNyQjtRQUNBLFVBQVU7WUFDVCxPQUFPO2dCQUNOLE9BQU87Z0JBQ1AsT0FBTztnQkFDUCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsTUFBTTtZQUNQO1FBQ0Q7Ozs7OztBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHd0I7QUFVakIsSUFBTUQsaUNBQU47O2NBQU1BO2FBQUFBLGlCQUlLRSxPQUFtQjtZQUNuQytCLFVBQUFBLGlFQUE0QyxDQUFDO2dDQUxsQ2pDOztZQWtCRWtDO1FBWGIsSUFBTUMsVUFBVSxJQUFJSiw0Q0FBWUEsQ0FBQzdCLFNBQVM7WUFDekMsUUFBUTtnQkFDUCxXQUFXO2dCQUNYLFdBQVc7WUFDWjtRQUNEO1FBQ0FpQyxRQUFRLFVBQVUsQ0FBQ04sMERBQXNCQSxDQUFDO1lBQUM7WUFBUTtTQUFPO1FBQzFERyx3REFBb0JBLENBQUNJLEtBQUssSUFBSSxDQUFDLFNBQUNDO1lBQy9CRixRQUFRLFVBQVUsQ0FBQ0U7WUFDbkIsZ0NBQUssT0FBTztRQUNiO1FBQ0EsSUFBTUMsUUFBT0osZ0JBQUFBLFFBQVEsSUFBSSxjQUFaQSwyQkFBQUEsZ0JBQWdCO2dCQUM3QixrQkFuQldsQztZQW1CTEU7WUFBUztnQkFDZCxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtlQUNMK0I7Z0JBQ0hFLFNBQUFBO2dCQUNBLE9BQU87b0JBQ047d0JBQUUsR0FBRzt3QkFBRyxHQUFHO3dCQUFHLE9BQU87d0JBQUssUUFBUTtvQkFBRTtvQkFDcEM7d0JBQUUsR0FBRzt3QkFBSyxHQUFHO3dCQUFHLE9BQU87d0JBQUssUUFBUTtvQkFBRTtpQkFDdEM7Z0JBQ0QsT0FBT0c7Z0JBQ1AsUUFBUUE7O3dEQTdCVix3QkFBaUIsZ0JBQWpCLFNBNENBLHdCQUFpQixhQUFqQixTQVNBLHdCQUFpQix1QkFBakIsZUFsRGlCcEMsVUFBQUEsZUF5Q0EsWUFBWTtZQUM1QixJQUFRcUMsa0JBQUFBO1lBQ1IsSUFBSUEsVUFBUSxPQUFPLEVBQUU7Z0JBQ3BCQSxVQUFRLEtBQUs7WUFDZCxPQUFPO2dCQUNOQSxVQUFRLElBQUk7WUFDYjtRQUNELFNBRWlCLHNCQUFzQjtZQUN0QyxNQUFLLEtBQUssR0FBRyxNQUFLLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUN6QztRQXhCQyxNQUFLLFlBQVksR0FBR0o7UUFDcEIsTUFBSyxtQkFBbUI7UUFDeEIsTUFBSyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQUssU0FBUztRQUMvQ2pDLFFBQVEsa0JBQWtCLENBQUMsV0FBVyxDQUFDLE1BQUssbUJBQW1COzs7a0JBbkNwREY7O1lBc0Nad0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7Z0JBQ3ZFLHVCQTFDV3hDLDZCQTBDTCxVQUFOLElBQUs7WUFDTjs7O1dBM0NZQTtFQUF5QjhCLDhDQUFjQSxFQXlEbkQ7QUFFRCxJQUFNTSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUs7Ozs7Ozs7Ozs7Ozs7OzBCQUVmOzs7Ozs7Ozs7b0JBRUY7b0JBQUE7a0NBQVM7Ozs7OztvQkFBWTtvQkFBQTtrQ0FFeUM7Ozs7OztvQkFBWTtpQkFBQTs7Ozs7Ozs7Ozs7O3NDQUV6RTs7Ozs7Ozs7Ozs7b0JBQXFDO2lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTXBDOzRCQUFBOzBDQUFNOzs7Ozs7NEJBQUs7eUJBQUE7Ozs7Ozs7Ozs0QkFDWDs0QkFBQTswQ0FBTTs7Ozs7OzRCQUFPOzRCQUFBOzBDQUF1Qzs7Ozs7OzRCQUFHO3lCQUFBOzs7Ozs7Ozs7NEJBQ3ZEOzRCQUFBOzBDQUFNOzs7Ozs7NEJBQU07NEJBQUE7MENBQStCOzs7Ozs7NEJBQUk7eUJBQUE7Ozs7Ozs7Ozs0QkFDL0M7NEJBQUE7MENBQU07Ozs7Ozs0QkFBUTs0QkFBQTswQ0FBNkI7Ozs7Ozs0QkFBRzt5QkFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkFFaEQ7b0JBQUE7a0NBQW1DOzs7Ozs7b0JBQU07b0JBQUE7a0NBQUc7Ozs7OztvQkFBTztvQkFBQTtrQ0FBNkI7Ozs7OztvQkFBUztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CekY7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==