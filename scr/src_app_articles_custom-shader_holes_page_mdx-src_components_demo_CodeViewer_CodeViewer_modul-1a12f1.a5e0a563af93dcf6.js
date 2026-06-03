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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/Shield.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                    lineNumber: 23,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                            lineNumber: 27,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 26,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 31,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this example, we randomly punch some holes in a mesh. For this, we use two\ntextures: one for the abedo of the mesh, and another one for the holes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As usual, you can move the shield with your pointer."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Shield__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY3VzdG9tLXNoYWRlcl9ob2xlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0xYTEyZjEuYTVlMGE1NjNhZjkzZGNmNi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jdXN0b20tc2hhZGVyL2hvbGVzL18vU2hpZWxkL1NoaWVsZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9fL1NoaWVsZC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2N1c3RvbS1zaGFkZXIvaG9sZXMvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHR0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkTWF0ZXJpYWwsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR0eXBlIFRnZFByb2dyYW0sXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVmVjMyxcblx0VGdkVmVjNCxcblx0d2ViZ2xQcmVzZXRCbGVuZCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuaW1wb3J0IEFzc2V0R2xiIGZyb20gXCIuLi9hc3NldHMvc2hpZWxkLmdsYlwiO1xuaW1wb3J0IEFzc2V0QmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdTaGllbGQoKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBBc3NldEJhY2tncm91bmQsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdHNoaWVsZDogQXNzZXRHbGIsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG5cbi8vICNyZWdpb24gSW5pdGlhbGlzaW5nIFdlYkdMXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdGNvbnN0IGFzc2V0ID0gYXNzZXRzLmdsYi5zaGllbGQ7XG5cdGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZDtcblxuXHRjb25zdCB3ID0gNDA5Njtcblx0Y29uc3QgaCA9IHc7XG5cdGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaCk7XG5cdGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcyk7XG5cdGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cdGxldCBjb3VudCA9IDA7XG5cdHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0aWYgKGNvdW50ID4gNTkpIHtcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG5cdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y291bnQrKztcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG5cdFx0Y29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3O1xuXHRcdGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogaDtcblx0XHRjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpO1xuXHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRjdHguZWxsaXBzZSh4LCB5LCByLCByLCAwLCAwLCBNYXRoLlBJICogMik7XG5cdFx0Y3R4LmZpbGwoKTtcblx0XHRob2xlcy5sb2FkQml0bWFwKGNhbnZhcyk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9LCA1MDApO1xuXHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41O1xuXHRjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG5cdFx0YXNzZXQsXG5cdFx0bWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcblx0XHRcdGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIik7XG5cblx0XHRcdHJldHVybiBuZXcgTWF0ZXJpYWxIb2xlKHsgYWJlZG86IGNvbG9yLCBob2xlcyB9KTtcblx0XHR9LFxuXHR9KTtcblx0Y29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogNTAwLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0YmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdFx0XHRjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXG5cdFx0XHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuXHRcdFx0XHRcdHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChiYWNrZ3JvdW5kKSxcblx0XHRcdFx0fSksXG5cdFx0XHRcdHBhaW50ZXIsXG5cdFx0XHRdLFxuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG5cdFx0b3JiaXRlci5yZXNldCgzMDApO1xuXHR9KTtcbn1cbi8vICNlbmRyZWdpb25cblxuLy8gI3JlZ2lvbiBDbGFzcyBNYXRlcmlhbEhvbGVcbmludGVyZmFjZSBNYXRlcmlhbEhvbGVPcHRpb25zIHtcblx0YWJlZG86IFRnZFRleHR1cmUyRDtcblx0aG9sZXM6IFRnZFRleHR1cmUyRDtcbn1cblxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xuXHRwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xuXHRcdHN1cGVyKHtcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxuXHRcdFx0XHR0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcblx0XHRcdFx0dW5pTGlnaHREaXI6IFwidmVjM1wiLFxuXHRcdFx0fSxcblx0XHRcdHZhcnlpbmdzOiB7XG5cdFx0XHRcdHZhck5vcm1hbDogXCJ2ZWMzXCIsXG5cdFx0XHRcdHZhclVWOiBcInZlYzJcIixcblx0XHRcdH0sXG5cdFx0XHRmcmFnbWVudFNoYWRlckNvZGU6IFtcblx0XHRcdFx0XCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxuXHRcdFx0XHRgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxuXHRcdFx0XHRgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcblx0XHRcdFx0YGxpZ2h0ICs9IDAuMjtgLFxuXHRcdFx0XHRgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcblx0XHRcdFx0YGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXG5cdFx0XHRcdGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXG5cdFx0XHRcdGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxuXHRcdFx0XHRgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXG5cdFx0XHRcdGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcblx0XHRcdF0sXG5cdFx0XHR2ZXJ0ZXhTaGFkZXJDb2RlOiBbXG5cdFx0XHRcdFwidmFyTm9ybWFsID0gbWF0Myh1bmlNb2RlbFZpZXdNYXRyaXgpICogTk9STUFMO1wiLFxuXHRcdFx0XHRcInZhclVWID0gVEVYQ09PUkRfMDtcIixcblx0XHRcdF0sXG5cdFx0XHRzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKTtcblxuXHRcdFx0XHR0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKTtcblx0XHRcdFx0dGhpcy5vcHRpb25zLmhvbGVzLmFjdGl2YXRlKDEsIHByb2dyYW0sIFwidGV4SG9sZXNcIik7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG4vLyNlbmRyZWdpb25cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9TaGllbGQuZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJJbml0aWFsaXNpbmcgV2ViR0xcIjpcblx0XHQnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZFxcblxcbiAgICBjb25zdCB3ID0gNDA5NlxcbiAgICBjb25zdCBoID0gd1xcbiAgICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpXFxuICAgIGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxcbiAgICBsZXQgY291bnQgPSAwXFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XFxuICAgICAgICBpZiAoY291bnQgPiA1OSkge1xcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcXG4gICAgICAgICAgICBjb3VudCA9IDBcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGNvdW50KytcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3XFxuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGhcXG4gICAgICAgIGNvbnN0IHIgPSA1MCArIDQwMCAqIE1hdGgucmFuZG9tKClcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgICAgICBob2xlcy5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9LCA1MDApXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAyLjVcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQsXFxuICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIilcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogNTAwLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXFxuICAgICAgICAgICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBwYWludGVyLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcXG4gICAgICAgIG9yYml0ZXIucmVzZXQoMzAwKVxcbiAgICB9KVxcbn0nLFxuXHRcIkNsYXNzIE1hdGVyaWFsSG9sZVwiOlxuXHRcdCdpbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XFxuICAgIGFiZWRvOiBUZ2RUZXh0dXJlMkRcXG4gICAgaG9sZXM6IFRnZFRleHR1cmUyRFxcbn1cXG5cXG5jbGFzcyBNYXRlcmlhbEhvbGUgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlnaHREaXJlY3Rpb24gPSBuZXcgVGdkVmVjMygwLjEsIDAuMiwgMSlcXG5cXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBNYXRlcmlhbEhvbGVPcHRpb25zKSB7XFxuICAgICAgICBzdXBlcih7XFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgdGV4QWJlZG86IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICAgICAgICAgIHRleEhvbGVzOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgICAgICAgICB1bmlMaWdodERpcjogXCJ2ZWMzXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2YXJ5aW5nczoge1xcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICAgICAgXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxcbiAgICAgICAgICAgICAgICBgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxcbiAgICAgICAgICAgICAgICBgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcXG4gICAgICAgICAgICAgICAgYGxpZ2h0ICs9IDAuMjtgLFxcbiAgICAgICAgICAgICAgICBgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgICAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXFxuICAgICAgICAgICAgICAgIGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXFxuICAgICAgICAgICAgICAgIGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgICAgICAgICBgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXFxuICAgICAgICAgICAgICAgIGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIiwgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XFxuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHREaXJlY3Rpb24pXFxuXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hYmVkby5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleEFiZWRvXCIpXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgIH1cXG59Jyxcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXFxuaW1wb3J0IHtcXG4gICAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZE1hdGVyaWFsLFxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgdHlwZSBUZ2RQcm9ncmFtLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFZlYzMsXFxuICAgIFRnZFZlYzQsXFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuaW1wb3J0IEFzc2V0R2xiIGZyb20gXCIuLi9hc3NldHMvc2hpZWxkLmdsYlwiXFxuaW1wb3J0IEFzc2V0QmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCJcXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3U2hpZWxkKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQXNzZXRCYWNrZ3JvdW5kLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHNoaWVsZDogQXNzZXRHbGIsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkXFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZFxcblxcbiAgICBjb25zdCB3ID0gNDA5NlxcbiAgICBjb25zdCBoID0gd1xcbiAgICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpXFxuICAgIGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxcbiAgICBsZXQgY291bnQgPSAwXFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XFxuICAgICAgICBpZiAoY291bnQgPiA1OSkge1xcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcXG4gICAgICAgICAgICBjb3VudCA9IDBcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGNvdW50KytcXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3XFxuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGhcXG4gICAgICAgIGNvbnN0IHIgPSA1MCArIDQwMCAqIE1hdGgucmFuZG9tKClcXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpXFxuICAgICAgICBjdHguZmlsbCgpXFxuICAgICAgICBob2xlcy5sb2FkQml0bWFwKGNhbnZhcylcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9LCA1MDApXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAyLjVcXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgYXNzZXQsXFxuICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4ge1xcbiAgICAgICAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIilcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSlcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogNTAwLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXFxuICAgICAgICAgICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgICAgICBwYWludGVyLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcXG4gICAgICAgIG9yYml0ZXIucmVzZXQoMzAwKVxcbiAgICB9KVxcbn1cXG5cXG5pbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XFxuICAgIGFiZWRvOiBUZ2RUZXh0dXJlMkRcXG4gICAgaG9sZXM6IFRnZFRleHR1cmUyRFxcbn1cXG5cXG5jbGFzcyBNYXRlcmlhbEhvbGUgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlnaHREaXJlY3Rpb24gPSBuZXcgVGdkVmVjMygwLjEsIDAuMiwgMSlcXG5cXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBNYXRlcmlhbEhvbGVPcHRpb25zKSB7XFxuICAgICAgICBzdXBlcih7XFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgICAgICAgICAgdGV4QWJlZG86IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICAgICAgICAgIHRleEhvbGVzOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgICAgICAgICB1bmlMaWdodERpcjogXCJ2ZWMzXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB2YXJ5aW5nczoge1xcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgICAgICAgICAgXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxcbiAgICAgICAgICAgICAgICBgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxcbiAgICAgICAgICAgICAgICBgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcXG4gICAgICAgICAgICAgICAgYGxpZ2h0ICs9IDAuMjtgLFxcbiAgICAgICAgICAgICAgICBgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgICAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXFxuICAgICAgICAgICAgICAgIGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXFxuICAgICAgICAgICAgICAgIGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgICAgICAgICBgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXFxuICAgICAgICAgICAgICAgIGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIiwgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XFxuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHREaXJlY3Rpb24pXFxuXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hYmVkby5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleEFiZWRvXCIpXFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgIH1cXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZE1hdGVyaWFsIiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RWZWMzIiwiVGdkVmVjNCIsIndlYmdsUHJlc2V0QmxlbmQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkFzc2V0R2xiIiwiQXNzZXRCYWNrZ3JvdW5kIiwiVmlld1NoaWVsZCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiYXNzZXQiLCJiYWNrZ3JvdW5kIiwidyIsImgiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImNhbnZhcyIsImN0eCIsImhvbGVzIiwiY291bnQiLCJ3aW5kb3ciLCJ4IiwiTWF0aCIsInkiLCJyIiwicGFpbnRlciIsIm1hdGVyaWFsIiwiY29sb3IiLCJfaW5zdGFuY2VvZiIsIkVycm9yIiwiTWF0ZXJpYWxIb2xlIiwib3JiaXRlciIsIm9wdGlvbnMiLCJzZXRVbmlmb3JtcyIsInByb2dyYW0iLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBZ0JQO0FBRWtDO0FBQ2Q7QUFDVztBQUV4QyxTQUFTZ0I7SUFDdkIscUJBQ0Msa0RBQUNILGdEQUFJQTtRQUNKLFNBQVNJO1FBQ1QsUUFBUTtZQUNQLE9BQU87Z0JBQ04sWUFBWUYsdUNBQWVBO1lBQzVCO1lBQ0EsS0FBSztnQkFDSixRQUFRRCxtQ0FBUUE7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