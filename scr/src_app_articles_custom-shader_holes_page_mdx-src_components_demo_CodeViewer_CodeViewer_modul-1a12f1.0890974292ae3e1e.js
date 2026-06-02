"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_custom-shader_holes_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-1a12f1"], {
67496(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.208b55e8a2b87b4d.png";

},
67467(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/shield.01e1d6d9a55620b3.glb";

},
62268(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (ViewShield)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _assets_shield_glb__rspack_import_4 = __webpack_require__(67467);
/* import */ var _assets_background_png__rspack_import_5 = __webpack_require__(67496);
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
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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






function ViewShield() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: init,
        assets: {
            image: {
                background: _assets_background_png__rspack_import_5
            },
            glb: {
                shield: _assets_shield_glb__rspack_import_4
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/Shield.demo.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
}
// #region Initialising WebGL
function init(context, assets) {
    var asset = assets.glb.shield;
    var background = assets.image.background;
    var w = 4096;
    var h = w;
    var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_2.tgdCanvasCreateWithContext2D)(w, h), canvas = _tgdCanvasCreateWithContext2D.canvas, ctx = _tgdCanvasCreateWithContext2D.ctx;
    var holes = new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(canvas);
    ctx.clearRect(0, 0, w, h);
    var count = 0;
    window.setInterval(function() {
        if (count > 59) {
            ctx.clearRect(0, 0, w, h);
            count = 0;
            return;
        }
        count++;
        ctx.fillStyle = "#fff";
        var x = Math.random() * w;
        var y = Math.random() * h;
        var r = 50 + 400 * Math.random();
        ctx.beginPath();
        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
        ctx.fill();
        holes.loadBitmap(canvas);
        context.paint();
    }, 500);
    context.camera.transfo.distance = 2.5;
    var painter = new _tolokoban_tgd__rspack_import_2.TgdPainterMeshGltf(context, {
        asset: asset,
        material: function material(param) {
            var color = param.color;
            if (!_instanceof(color, _tolokoban_tgd__rspack_import_2.TgdTexture2D)) throw Error("No abedo provided!");
            return new MaterialHole({
                abedo: color,
                holes: holes
            });
        }
    });
    var orbiter = new _tolokoban_tgd__rspack_import_2.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 500
    });
    context.add(new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less,
        blend: _tolokoban_tgd__rspack_import_2.webglPresetBlend.alpha,
        children: [
            new _tolokoban_tgd__rspack_import_2.TgdPainterClear(context, {
                color: new _tolokoban_tgd__rspack_import_2.TgdVec4(0.5, 0.5, 0.5, 1),
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_2.TgdPainterBackground(context, {
                texture: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(background)
            }),
            painter
        ]
    }));
    context.paint();
    context.canvas.addEventListener("dblclick", function() {
        orbiter.reset(300);
    });
}
var MaterialHole = /*#__PURE__*/ function(TgdMaterial) {
    "use strict";
    _inherits(MaterialHole, TgdMaterial);
    function MaterialHole(options) {
        _class_call_check(this, MaterialHole);
        var _this;
        _this = _call_super(this, MaterialHole, [
            {
                uniforms: {
                    texAbedo: "sampler2D",
                    texHoles: "sampler2D",
                    uniLightDir: "vec3"
                },
                varyings: {
                    varNormal: "vec3",
                    varUV: "vec2"
                },
                fragmentShaderCode: [
                    "vec3 normal = normalize(varNormal);",
                    "float light = abs(dot(normal, uniLightDir));",
                    "light = pow(light, 9.0) * 0.9;",
                    "light += 0.2;",
                    "vec3 color = texture(texAbedo, varUV).rgb;",
                    "float spec = max(0.0, reflect(uniLightDir, normal).z);",
                    "spec = pow(spec, 20.0);",
                    "vec3 holes = texture(texHoles, varUV).rgb;",
                    "if (holes.r > 0.99) discard;",
                    "return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);"
                ],
                vertexShaderCode: [
                    "varNormal = mat3(uniModelViewMatrix) * NORMAL;",
                    "varUV = TEXCOORD_0;"
                ],
                setUniforms: function setUniforms(param) {
                    var program = param.program;
                    program.uniform3fv("uniLightDir", _assert_this_initialized(_this).lightDirection);
                    _assert_this_initialized(_this).options.abedo.activate(0, program, "texAbedo");
                    _assert_this_initialized(_this).options.holes.activate(1, program, "texHoles");
                }
            }
        ]), _define_property(_this, "options", void 0), _define_property(_this, "lightDirection", void 0), _this.options = options, _this.lightDirection = new _tolokoban_tgd__rspack_import_2.TgdVec3(0.1, 0.2, 1);
        return _this;
    }
    return MaterialHole;
} //#endregion
(_tolokoban_tgd__rspack_import_2.TgdMaterial);


},
54262(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _Shield_demo__rspack_import_4 = __webpack_require__(62268);
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
    "Initialising WebGL": 'function init(context: TgdContext, assets: Assets) {\n    const asset = assets.glb.shield\n    const background = assets.image.background\n\n    const w = 4096\n    const h = w\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n    const holes = new TgdTexture2D(context).loadBitmap(canvas)\n    ctx.clearRect(0, 0, w, h)\n    let count = 0\n    window.setInterval(() => {\n        if (count > 59) {\n            ctx.clearRect(0, 0, w, h)\n            count = 0\n            return\n        }\n\n        count++\n        ctx.fillStyle = "#fff"\n        const x = Math.random() * w\n        const y = Math.random() * h\n        const r = 50 + 400 * Math.random()\n        ctx.beginPath()\n        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2)\n        ctx.fill()\n        holes.loadBitmap(canvas)\n        context.paint()\n    }, 500)\n    context.camera.transfo.distance = 2.5\n    const painter = new TgdPainterMeshGltf(context, {\n        asset,\n        material: ({ color }) => {\n            if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!")\n\n            return new MaterialHole({ abedo: color, holes })\n        },\n    })\n    const orbiter = new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 500,\n    })\n    context.add(\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [\n                new TgdPainterClear(context, {\n                    color: new TgdVec4(0.5, 0.5, 0.5, 1),\n                    depth: 1,\n                }),\n                new TgdPainterBackground(context, {\n                    texture: new TgdTexture2D(context).loadBitmap(background),\n                }),\n                painter,\n            ],\n        }),\n    )\n    context.paint()\n    context.canvas.addEventListener("dblclick", () => {\n        orbiter.reset(300)\n    })\n}',
    "Class MaterialHole": 'interface MaterialHoleOptions {\n    abedo: TgdTexture2D\n    holes: TgdTexture2D\n}\n\nclass MaterialHole extends TgdMaterial {\n    private readonly lightDirection = new TgdVec3(0.1, 0.2, 1)\n\n    constructor(private readonly options: MaterialHoleOptions) {\n        super({\n            uniforms: {\n                texAbedo: "sampler2D",\n                texHoles: "sampler2D",\n                uniLightDir: "vec3",\n            },\n            varyings: {\n                varNormal: "vec3",\n                varUV: "vec2",\n            },\n            fragmentShaderCode: [\n                "vec3 normal = normalize(varNormal);",\n                `float light = abs(dot(normal, uniLightDir));`,\n                `light = pow(light, 9.0) * 0.9;`,\n                `light += 0.2;`,\n                `vec3 color = texture(texAbedo, varUV).rgb;`,\n                `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n                `spec = pow(spec, 20.0);`,\n                `vec3 holes = texture(texHoles, varUV).rgb;`,\n                `if (holes.r > 0.99) discard;`,\n                `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n            ],\n            vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n            setUniforms: ({ program }: { program: TgdProgram }): void => {\n                program.uniform3fv("uniLightDir", this.lightDirection)\n\n                this.options.abedo.activate(0, program, "texAbedo")\n                this.options.holes.activate(1, program, "texHoles")\n            },\n        })\n    }\n}'
};
var FULL = 'import * as React from "react"\nimport {\n    tgdCanvasCreateWithContext2D,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterial,\n    TgdPainterBackground,\n    TgdPainterClear,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    type TgdProgram,\n    TgdTexture2D,\n    TgdVec3,\n    TgdVec4,\n    webglPresetBlend,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\nimport AssetGlb from "../assets/shield.glb"\nimport AssetBackground from "../assets/background.png"\n\nexport default function ViewShield() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    background: AssetBackground,\n                },\n                glb: {\n                    shield: AssetGlb,\n                },\n            }}\n        />\n    )\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n    const asset = assets.glb.shield\n    const background = assets.image.background\n\n    const w = 4096\n    const h = w\n    const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h)\n    const holes = new TgdTexture2D(context).loadBitmap(canvas)\n    ctx.clearRect(0, 0, w, h)\n    let count = 0\n    window.setInterval(() => {\n        if (count > 59) {\n            ctx.clearRect(0, 0, w, h)\n            count = 0\n            return\n        }\n\n        count++\n        ctx.fillStyle = "#fff"\n        const x = Math.random() * w\n        const y = Math.random() * h\n        const r = 50 + 400 * Math.random()\n        ctx.beginPath()\n        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2)\n        ctx.fill()\n        holes.loadBitmap(canvas)\n        context.paint()\n    }, 500)\n    context.camera.transfo.distance = 2.5\n    const painter = new TgdPainterMeshGltf(context, {\n        asset,\n        material: ({ color }) => {\n            if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!")\n\n            return new MaterialHole({ abedo: color, holes })\n        },\n    })\n    const orbiter = new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 500,\n    })\n    context.add(\n        new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            blend: webglPresetBlend.alpha,\n            children: [\n                new TgdPainterClear(context, {\n                    color: new TgdVec4(0.5, 0.5, 0.5, 1),\n                    depth: 1,\n                }),\n                new TgdPainterBackground(context, {\n                    texture: new TgdTexture2D(context).loadBitmap(background),\n                }),\n                painter,\n            ],\n        }),\n    )\n    context.paint()\n    context.canvas.addEventListener("dblclick", () => {\n        orbiter.reset(300)\n    })\n}\n\ninterface MaterialHoleOptions {\n    abedo: TgdTexture2D\n    holes: TgdTexture2D\n}\n\nclass MaterialHole extends TgdMaterial {\n    private readonly lightDirection = new TgdVec3(0.1, 0.2, 1)\n\n    constructor(private readonly options: MaterialHoleOptions) {\n        super({\n            uniforms: {\n                texAbedo: "sampler2D",\n                texHoles: "sampler2D",\n                uniLightDir: "vec3",\n            },\n            varyings: {\n                varNormal: "vec3",\n                varUV: "vec2",\n            },\n            fragmentShaderCode: [\n                "vec3 normal = normalize(varNormal);",\n                `float light = abs(dot(normal, uniLightDir));`,\n                `light = pow(light, 9.0) * 0.9;`,\n                `light += 0.2;`,\n                `vec3 color = texture(texAbedo, varUV).rgb;`,\n                `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n                `spec = pow(spec, 20.0);`,\n                `vec3 holes = texture(texHoles, varUV).rgb;`,\n                `if (holes.r > 0.99) discard;`,\n                `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n            ],\n            vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n            setUniforms: ({ program }: { program: TgdProgram }): void => {\n                program.uniform3fv("uniLightDir", this.lightDirection)\n\n                this.options.abedo.activate(0, program, "texAbedo")\n                this.options.holes.activate(1, program, "texHoles")\n            },\n        })\n    }\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Shield_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                lineNumber: 22,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                            lineNumber: 27,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 26,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                lineNumber: 25,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
76272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _Shield__rspack_import_1 = __webpack_require__(54262);
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
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Punching holes in a shield"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this example, we randomly punch some holes in a mesh. For this, we use two\ntextures: one for the abedo of the mesh, and another one for the holes."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As usual, you can move the shield with your pointer."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Shield__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY3VzdG9tLXNoYWRlcl9ob2xlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0xYTEyZjEuMDg5MDk3NDI5MmFlM2UxZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9fL1NoaWVsZC9TaGllbGQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jdXN0b20tc2hhZGVyL2hvbGVzL18vU2hpZWxkL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2N1c3RvbS1zaGFkZXIvaG9sZXMvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcblx0dGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZE1hdGVyaWFsLFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaEdsdGYsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0dHlwZSBUZ2RQcm9ncmFtLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFZlYzMsXG5cdFRnZFZlYzQsXG5cdHdlYmdsUHJlc2V0QmxlbmQsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcbmltcG9ydCBBc3NldEdsYiBmcm9tIFwiLi4vYXNzZXRzL3NoaWVsZC5nbGJcIjtcbmltcG9ydCBBc3NldEJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3U2hpZWxkKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxWaWV3XG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogQXNzZXRCYWNrZ3JvdW5kLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRzaGllbGQ6IEFzc2V0R2xiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG4vLyAjcmVnaW9uIEluaXRpYWxpc2luZyBXZWJHTFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkO1xuXHRjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmQ7XG5cblx0Y29uc3QgdyA9IDQwOTY7XG5cdGNvbnN0IGggPSB3O1xuXHRjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpO1xuXHRjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXHRsZXQgY291bnQgPSAwO1xuXHR3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdGlmIChjb3VudCA+IDU5KSB7XG5cdFx0XHRjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuXHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvdW50Kys7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuXHRcdGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogdztcblx0XHRjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGg7XG5cdFx0Y29uc3QgciA9IDUwICsgNDAwICogTWF0aC5yYW5kb20oKTtcblx0XHRjdHguYmVnaW5QYXRoKCk7XG5cdFx0Y3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpO1xuXHRcdGN0eC5maWxsKCk7XG5cdFx0aG9sZXMubG9hZEJpdG1hcChjYW52YXMpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fSwgNTAwKTtcblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDIuNTtcblx0Y29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0LFxuXHRcdG1hdGVyaWFsOiAoeyBjb2xvciB9KSA9PiB7XG5cdFx0XHRpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSk7XG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDUwMCxcblx0fSk7XG5cdGNvbnRleHQuYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRcdFx0Y29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxuXHRcdFx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcblx0XHRcdFx0XHR0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRwYWludGVyLFxuXHRcdFx0XSxcblx0XHR9KSxcblx0KTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRjb250ZXh0LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuXHRcdG9yYml0ZXIucmVzZXQoMzAwKTtcblx0fSk7XG59XG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gQ2xhc3MgTWF0ZXJpYWxIb2xlXG5pbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XG5cdGFiZWRvOiBUZ2RUZXh0dXJlMkQ7XG5cdGhvbGVzOiBUZ2RUZXh0dXJlMkQ7XG59XG5cbmNsYXNzIE1hdGVyaWFsSG9sZSBleHRlbmRzIFRnZE1hdGVyaWFsIHtcblx0cHJpdmF0ZSByZWFkb25seSBsaWdodERpcmVjdGlvbiA9IG5ldyBUZ2RWZWMzKDAuMSwgMC4yLCAxKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IE1hdGVyaWFsSG9sZU9wdGlvbnMpIHtcblx0XHRzdXBlcih7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0ZXhBYmVkbzogXCJzYW1wbGVyMkRcIixcblx0XHRcdFx0dGV4SG9sZXM6IFwic2FtcGxlcjJEXCIsXG5cdFx0XHRcdHVuaUxpZ2h0RGlyOiBcInZlYzNcIixcblx0XHRcdH0sXG5cdFx0XHR2YXJ5aW5nczoge1xuXHRcdFx0XHR2YXJOb3JtYWw6IFwidmVjM1wiLFxuXHRcdFx0XHR2YXJVVjogXCJ2ZWMyXCIsXG5cdFx0XHR9LFxuXHRcdFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG5cdFx0XHRcdFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcblx0XHRcdFx0YGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcblx0XHRcdFx0YGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXG5cdFx0XHRcdGBsaWdodCArPSAwLjI7YCxcblx0XHRcdFx0YHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXG5cdFx0XHRcdGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxuXHRcdFx0XHRgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxuXHRcdFx0XHRgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcblx0XHRcdFx0YGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxuXHRcdFx0XHRgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXG5cdFx0XHRdLFxuXHRcdFx0dmVydGV4U2hhZGVyQ29kZTogW1xuXHRcdFx0XHRcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIixcblx0XHRcdFx0XCJ2YXJVViA9IFRFWENPT1JEXzA7XCIsXG5cdFx0XHRdLFxuXHRcdFx0c2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfTogeyBwcm9ncmFtOiBUZ2RQcm9ncmFtIH0pOiB2b2lkID0+IHtcblx0XHRcdFx0cHJvZ3JhbS51bmlmb3JtM2Z2KFwidW5pTGlnaHREaXJcIiwgdGhpcy5saWdodERpcmVjdGlvbik7XG5cblx0XHRcdFx0dGhpcy5vcHRpb25zLmFiZWRvLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidGV4QWJlZG9cIik7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuLy8jZW5kcmVnaW9uXG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vU2hpZWxkLmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiSW5pdGlhbGlzaW5nIFdlYkdMXCI6XG5cdFx0J2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgYXNzZXQgPSBhc3NldHMuZ2xiLnNoaWVsZFxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmRcXG5cXG4gICAgY29uc3QgdyA9IDQwOTZcXG4gICAgY29uc3QgaCA9IHdcXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxcbiAgICBjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcXG4gICAgbGV0IGNvdW50ID0gMFxcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICAgICAgaWYgKGNvdW50ID4gNTkpIHtcXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpXFxuICAgICAgICAgICAgY291bnQgPSAwXFxuICAgICAgICAgICAgcmV0dXJuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBjb3VudCsrXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCJcXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogd1xcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBoXFxuICAgICAgICBjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIHIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICAgICAgaG9sZXMubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSwgNTAwKVxcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41XFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0LFxcbiAgICAgICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcXG4gICAgICAgICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEhvbGUoeyBhYmVkbzogY29sb3IsIGhvbGVzIH0pXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDUwMCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGJhY2tncm91bmQpLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgcGFpbnRlcixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XFxuICAgICAgICBvcmJpdGVyLnJlc2V0KDMwMClcXG4gICAgfSlcXG59Jyxcblx0XCJDbGFzcyBNYXRlcmlhbEhvbGVcIjpcblx0XHQnaW50ZXJmYWNlIE1hdGVyaWFsSG9sZU9wdGlvbnMge1xcbiAgICBhYmVkbzogVGdkVGV4dHVyZTJEXFxuICAgIGhvbGVzOiBUZ2RUZXh0dXJlMkRcXG59XFxuXFxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpXFxuXFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xcbiAgICAgICAgc3VwZXIoe1xcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgIHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgICAgICAgICB0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgICAgICAgICAgdW5pTGlnaHREaXI6IFwidmVjM1wiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFyeWluZ3M6IHtcXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcXG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcXG4gICAgICAgICAgICAgICAgYGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcXG4gICAgICAgICAgICAgICAgYGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXFxuICAgICAgICAgICAgICAgIGBsaWdodCArPSAwLjI7YCxcXG4gICAgICAgICAgICAgICAgYHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXFxuICAgICAgICAgICAgICAgIGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxcbiAgICAgICAgICAgICAgICBgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxcbiAgICAgICAgICAgICAgICBgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgICAgICAgICAgYGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxcbiAgICAgICAgICAgICAgICBgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBOT1JNQUw7XCIsIFwidmFyVVYgPSBURVhDT09SRF8wO1wiXSxcXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKVxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaG9sZXMuYWN0aXZhdGUoMSwgcHJvZ3JhbSwgXCJ0ZXhIb2xlc1wiKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICB9XFxufScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxcbmltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbCxcXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHR5cGUgVGdkUHJvZ3JhbSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RWZWMzLFxcbiAgICBUZ2RWZWM0LFxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcbmltcG9ydCBBc3NldEdsYiBmcm9tIFwiLi4vYXNzZXRzL3NoaWVsZC5nbGJcIlxcbmltcG9ydCBBc3NldEJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiXFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1NoaWVsZCgpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEFzc2V0QmFja2dyb3VuZCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBzaGllbGQ6IEFzc2V0R2xiLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgYXNzZXQgPSBhc3NldHMuZ2xiLnNoaWVsZFxcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmRcXG5cXG4gICAgY29uc3QgdyA9IDQwOTZcXG4gICAgY29uc3QgaCA9IHdcXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxcbiAgICBjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcXG4gICAgbGV0IGNvdW50ID0gMFxcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICAgICAgaWYgKGNvdW50ID4gNTkpIHtcXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpXFxuICAgICAgICAgICAgY291bnQgPSAwXFxuICAgICAgICAgICAgcmV0dXJuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBjb3VudCsrXFxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCJcXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogd1xcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBoXFxuICAgICAgICBjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpXFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIHIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKVxcbiAgICAgICAgY3R4LmZpbGwoKVxcbiAgICAgICAgaG9sZXMubG9hZEJpdG1hcChjYW52YXMpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSwgNTAwKVxcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41XFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgIGFzc2V0LFxcbiAgICAgICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcXG4gICAgICAgICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEhvbGUoeyBhYmVkbzogY29sb3IsIGhvbGVzIH0pXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDUwMCxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGJhY2tncm91bmQpLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgcGFpbnRlcixcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XFxuICAgICAgICBvcmJpdGVyLnJlc2V0KDMwMClcXG4gICAgfSlcXG59XFxuXFxuaW50ZXJmYWNlIE1hdGVyaWFsSG9sZU9wdGlvbnMge1xcbiAgICBhYmVkbzogVGdkVGV4dHVyZTJEXFxuICAgIGhvbGVzOiBUZ2RUZXh0dXJlMkRcXG59XFxuXFxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpXFxuXFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xcbiAgICAgICAgc3VwZXIoe1xcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICAgICAgICAgIHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgICAgICAgICB0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgICAgICAgICAgdW5pTGlnaHREaXI6IFwidmVjM1wiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgdmFyeWluZ3M6IHtcXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcXG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICAgICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcXG4gICAgICAgICAgICAgICAgYGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcXG4gICAgICAgICAgICAgICAgYGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXFxuICAgICAgICAgICAgICAgIGBsaWdodCArPSAwLjI7YCxcXG4gICAgICAgICAgICAgICAgYHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXFxuICAgICAgICAgICAgICAgIGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxcbiAgICAgICAgICAgICAgICBgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxcbiAgICAgICAgICAgICAgICBgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgICAgICAgICAgYGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxcbiAgICAgICAgICAgICAgICBgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBOT1JNQUw7XCIsIFwidmFyVVYgPSBURVhDT09SRF8wO1wiXSxcXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKVxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaG9sZXMuYWN0aXZhdGUoMSwgcHJvZ3JhbSwgXCJ0ZXhIb2xlc1wiKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICB9XFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RNYXRlcmlhbCIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVmVjMyIsIlRnZFZlYzQiLCJ3ZWJnbFByZXNldEJsZW5kIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJBc3NldEdsYiIsIkFzc2V0QmFja2dyb3VuZCIsIlZpZXdTaGllbGQiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImFzc2V0IiwiYmFja2dyb3VuZCIsInciLCJoIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjYW52YXMiLCJjdHgiLCJob2xlcyIsImNvdW50Iiwid2luZG93IiwieCIsIk1hdGgiLCJ5IiwiciIsInBhaW50ZXIiLCJtYXRlcmlhbCIsImNvbG9yIiwiX2luc3RhbmNlb2YiLCJFcnJvciIsIk1hdGVyaWFsSG9sZSIsIm9yYml0ZXIiLCJvcHRpb25zIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQWdCUDtBQUVrQztBQUNkO0FBQ1c7QUFFeEMsU0FBU2dCO0lBQ3ZCLHFCQUNDLGtEQUFDSCxnREFBSUE7UUFDSixTQUFTSTtRQUNULFFBQVE7WUFDUCxPQUFPO2dCQUNOLFlBQVlGLHVDQUFlQTtZQUM1QjtZQUNBLEtBQUs7Z0JBQ0osUUFBUUQsbUNBQVFBO1lBQ2pCO1FBQ0Q7Ozs7OztBQUdIO0FBRUEsNkJBQTZCO0FBQzdCLFNBQVNHLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsSUFBTUMsUUFBUUQsT0FBTyxHQUFHLENBQUMsTUFBTTtJQUMvQixJQUFNRSxhQUFhRixPQUFPLEtBQUssQ0FBQyxVQUFVO0lBRTFDLElBQU1HLElBQUk7SUFDVixJQUFNQyxJQUFJRDtJQUNWLElBQXdCRSxnQ0FBQUEsZ0VBQTRCQSxDQUFDRixHQUFHQyxJQUFoREUsU0FBZ0JELDhCQUFoQkMsUUFBUUMsTUFBUUYsOEJBQVJFO0lBQ2hCLElBQU1DLFFBQVEsSUFBSW5CLDRDQUFZQSxDQUFDVSxTQUFTLFVBQVUsQ0FBQ087SUFDbkRDLElBQUksU0FBUyxDQUFDLEdBQUcsR0FBR0osR0FBR0M7SUFDdkIsSUFBSUssUUFBUTtJQUNaQyxPQUFPLFdBQVcsQ0FBQztRQUNsQixJQUFJRCxRQUFRLElBQUk7WUFDZkYsSUFBSSxTQUFTLENBQUMsR0FBRyxHQUFHSixHQUFHQztZQUN2QkssUUFBUTtZQUNSO1FBQ0Q7UUFFQUE7UUFDQUYsSUFBSSxTQUFTLEdBQUc7UUFDaEIsSUFBTUksSUFBSUMsS0FBSyxNQUFNLEtBQUtUO1FBQzFCLElBQU1VLElBQUlELEtBQUssTUFBTSxLQUFLUjtRQUMxQixJQUFNVSxJQUFJLEtBQUssTUFBTUYsS0FBSyxNQUFNO1FBQ2hDTCxJQUFJLFNBQVM7UUFDYkEsSUFBSSxPQUFPLENBQUNJLEdBQUdFLEdBQUdDLEdBQUdBLEdBQUcsR0FBRyxHQUFHRixLQUFLLEVBQUUsR0FBRztRQUN4Q0wsSUFBSSxJQUFJO1FBQ1JDLE1BQU0sVUFBVSxDQUFDRjtRQUNqQlAsUUFBUSxLQUFLO0lBQ2QsR0FBRztJQUNIQSxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHO0lBQ2xDLElBQU1nQixVQUFVLElBQUk1QixrREFBa0JBLENBQUNZLFNBQVM7UUFDL0NFLE9BQUFBO1FBQ0FlLFVBQVUsU0FBVkE7Z0JBQWFDLGNBQUFBO1lBQ1osSUFBSSxDQUFPQyxZQUFMRCxPQUFpQjVCLDRDQUFZQSxHQUFHLE1BQU04QixNQUFNO1lBRWxELE9BQU8sSUFBSUMsYUFBYTtnQkFBRSxPQUFPSDtnQkFBT1QsT0FBQUE7WUFBTTtRQUMvQztJQUNEO0lBQ0EsSUFBTWEsVUFBVSxJQUFJdEMsd0RBQXdCQSxDQUFDZ0IsU0FBUztRQUNyRCxjQUFjO0lBQ2Y7SUFDQUEsUUFBUSxHQUFHLENBQ1YsSUFBSVgsK0NBQWVBLENBQUNXLFNBQVM7UUFDNUIsT0FBT04scURBQXFCO1FBQzVCLE9BQU9ELHNEQUFzQjtRQUM3QixVQUFVO1lBQ1QsSUFBSU4sK0NBQWVBLENBQUNhLFNBQVM7Z0JBQzVCLE9BQU8sSUFBSVIsdUNBQU9BLENBQUMsS0FBSyxLQUFLLEtBQUs7Z0JBQ2xDLE9BQU87WUFDUjtZQUNBLElBQUlOLG9EQUFvQkEsQ0FBQ2MsU0FBUztnQkFDakMsU0FBUyxJQUFJViw0Q0FBWUEsQ0FBQ1UsU0FBUyxVQUFVLENBQUNHO1lBQy9DO1lBQ0FhO1NBQ0E7SUFDRjtJQUVEaEIsUUFBUSxLQUFLO0lBQ2JBLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVk7UUFDM0NzQixRQUFRLEtBQUssQ0FBQztJQUNmO0FBQ0Q7QUFTQSxJQUFNRCw2QkFBTjs7Y0FBTUE7YUFBQUEsYUFHd0JFLE9BQTRCO2dDQUhwREY7O2dCQUlKLGtCQUpJQTtZQUlFO2dCQUNMLFVBQVU7b0JBQ1QsVUFBVTtvQkFDVixVQUFVO29CQUNWLGFBQWE7Z0JBQ2Q7Z0JBQ0EsVUFBVTtvQkFDVCxXQUFXO29CQUNYLE9BQU87Z0JBQ1I7Z0JBQ0Esb0JBQW9CO29CQUNuQjtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtvQkFDQTtpQkFDQTtnQkFDRCxrQkFBa0I7b0JBQ2pCO29CQUNBO2lCQUNBO2dCQUNERyxhQUFhLFNBQWJBO3dCQUFnQkMsZ0JBQUFBO29CQUNmQSxRQUFRLFVBQVUsQ0FBQyxlQUFlLGdDQUFLLGNBQWM7b0JBRXJELGdDQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUdBLFNBQVM7b0JBQ3hDLGdDQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUdBLFNBQVM7Z0JBQ3pDO1lBQ0Q7d0RBbkNELHdCQUFpQixrQkFBakIsZUFFNkJGLFVBQUFBLGVBRlosaUJBQWlCLElBQUloQyx1Q0FBT0EsQ0FBQyxLQUFLLEtBQUs7OztXQURuRDhCO0VBdUNOLFlBQVk7Q0F2Q2VwQywyQ0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUd0Qzs7Q0FFQyxHQUN5QjtBQUNpQjtBQUNXO0FBQ3JCO0FBRWpDLElBQU00QyxRQUFRO0lBQ2Isc0JBQ0M7SUFDRCxzQkFDQztBQUNGO0FBQ0EsSUFBTUMsT0FDTDtBQUVjLFNBQVNDO0lBQ3ZCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFDQzs7MEJBQ0Msa0RBQUM7Z0JBQUksV0FBVTswQkFDZCxnRUFBQ0osd0NBQUlBOzs7Ozs7Ozs7OzBCQUVOLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNkLGtEQUFDO2tDQUNBLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ3JEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR2hDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFJcEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdUI7Ozs7Ozs7OzswQkFFckI7Ozs7Ozs7OzBCQUVGOzs7Ozs7OzswQkFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksb0NBQW9DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4QkFBOEI7QUFDNUM7QUFDQSxjQUFjLDhEQUE4RDtBQUM1RTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7O0FBRXlCOztBQUV6QixXQUFXLHlCQUF5QjtBQUNwQzs7QUFFQSxtQkFBbUIsb0NBQW1COztBQUV0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUE4RDtBQUN6RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCw0QkFBNEIsaUNBQWdCOztBQUU1QztBQUNBLFNBQVMsOEJBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLGFBQWE7QUFDYjtBQUNBLGVBQWU7QUFDZjtBQUNPO0FBQ1AsYUFBYSx5QkFBeUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLFNBQVMsb0NBQW1CO0FBQzVCO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7QUFDQTtBQUNBIn0=