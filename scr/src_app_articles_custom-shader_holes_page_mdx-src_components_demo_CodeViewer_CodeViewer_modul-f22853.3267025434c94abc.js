"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_custom-shader_holes_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-f22853"], {
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
        columnNumber: 9
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
    "Initialising WebGL": 'function init(context: TgdContext, assets: Assets) {\n  const asset = assets.glb.shield;\n  const background = assets.image.background;\n\n  const w = 4096;\n  const h = w;\n  const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h);\n  const holes = new TgdTexture2D(context).loadBitmap(canvas);\n  ctx.clearRect(0, 0, w, h);\n  let count = 0;\n  window.setInterval(() => {\n    if (count > 59) {\n      ctx.clearRect(0, 0, w, h);\n      count = 0;\n      return;\n    }\n\n    count++;\n    ctx.fillStyle = "#fff";\n    const x = Math.random() * w;\n    const y = Math.random() * h;\n    const r = 50 + 400 * Math.random();\n    ctx.beginPath();\n    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);\n    ctx.fill();\n    holes.loadBitmap(canvas);\n    context.paint();\n  }, 500);\n  context.camera.transfo.distance = 2.5;\n  const painter = new TgdPainterMeshGltf(context, {\n    asset,\n    material: ({ color }) => {\n      if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!");\n\n      return new MaterialHole({ abedo: color, holes });\n    },\n  });\n  const orbiter = new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 500,\n  });\n  context.add(\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.less,\n      blend: webglPresetBlend.alpha,\n      children: [\n        new TgdPainterClear(context, {\n          color: new TgdVec4(0.5, 0.5, 0.5, 1),\n          depth: 1,\n        }),\n        new TgdPainterBackground(context, {\n          texture: new TgdTexture2D(context).loadBitmap(background),\n        }),\n        painter,\n      ],\n    }),\n  );\n  context.paint();\n  context.canvas.addEventListener("dblclick", () => {\n    orbiter.reset(300);\n  });\n}',
    "Class MaterialHole": 'interface MaterialHoleOptions {\n  abedo: TgdTexture2D;\n  holes: TgdTexture2D;\n}\n\nclass MaterialHole extends TgdMaterial {\n  private readonly lightDirection = new TgdVec3(0.1, 0.2, 1);\n\n  constructor(private readonly options: MaterialHoleOptions) {\n    super({\n      uniforms: {\n        texAbedo: "sampler2D",\n        texHoles: "sampler2D",\n        uniLightDir: "vec3",\n      },\n      varyings: {\n        varNormal: "vec3",\n        varUV: "vec2",\n      },\n      fragmentShaderCode: [\n        "vec3 normal = normalize(varNormal);",\n        `float light = abs(dot(normal, uniLightDir));`,\n        `light = pow(light, 9.0) * 0.9;`,\n        `light += 0.2;`,\n        `vec3 color = texture(texAbedo, varUV).rgb;`,\n        `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n        `spec = pow(spec, 20.0);`,\n        `vec3 holes = texture(texHoles, varUV).rgb;`,\n        `if (holes.r > 0.99) discard;`,\n        `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n      ],\n      vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n      setUniforms: ({ program }: { program: TgdProgram }): void => {\n        program.uniform3fv("uniLightDir", this.lightDirection);\n\n        this.options.abedo.activate(0, program, "texAbedo");\n        this.options.holes.activate(1, program, "texHoles");\n      },\n    });\n  }\n}'
};
var FULL = 'import * as React from "react";\nimport {\n  tgdCanvasCreateWithContext2D,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  TgdMaterial,\n  TgdPainterBackground,\n  TgdPainterClear,\n  TgdPainterMeshGltf,\n  TgdPainterState,\n  TgdProgram,\n  TgdTexture2D,\n  TgdVec3,\n  TgdVec4,\n  webglPresetBlend,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { Assets } from "@/components/demo/Tgd";\nimport AssetGlb from "../assets/shield.glb";\nimport AssetBackground from "../assets/background.png";\n\nexport default function ViewShield() {\n  return (\n    <View\n      onReady={init}\n      assets={{\n        image: {\n          background: AssetBackground,\n        },\n        glb: {\n          shield: AssetGlb,\n        },\n      }}\n    />\n  );\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n  const asset = assets.glb.shield;\n  const background = assets.image.background;\n\n  const w = 4096;\n  const h = w;\n  const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h);\n  const holes = new TgdTexture2D(context).loadBitmap(canvas);\n  ctx.clearRect(0, 0, w, h);\n  let count = 0;\n  window.setInterval(() => {\n    if (count > 59) {\n      ctx.clearRect(0, 0, w, h);\n      count = 0;\n      return;\n    }\n\n    count++;\n    ctx.fillStyle = "#fff";\n    const x = Math.random() * w;\n    const y = Math.random() * h;\n    const r = 50 + 400 * Math.random();\n    ctx.beginPath();\n    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);\n    ctx.fill();\n    holes.loadBitmap(canvas);\n    context.paint();\n  }, 500);\n  context.camera.transfo.distance = 2.5;\n  const painter = new TgdPainterMeshGltf(context, {\n    asset,\n    material: ({ color }) => {\n      if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!");\n\n      return new MaterialHole({ abedo: color, holes });\n    },\n  });\n  const orbiter = new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 500,\n  });\n  context.add(\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.less,\n      blend: webglPresetBlend.alpha,\n      children: [\n        new TgdPainterClear(context, {\n          color: new TgdVec4(0.5, 0.5, 0.5, 1),\n          depth: 1,\n        }),\n        new TgdPainterBackground(context, {\n          texture: new TgdTexture2D(context).loadBitmap(background),\n        }),\n        painter,\n      ],\n    }),\n  );\n  context.paint();\n  context.canvas.addEventListener("dblclick", () => {\n    orbiter.reset(300);\n  });\n}\n\ninterface MaterialHoleOptions {\n  abedo: TgdTexture2D;\n  holes: TgdTexture2D;\n}\n\nclass MaterialHole extends TgdMaterial {\n  private readonly lightDirection = new TgdVec3(0.1, 0.2, 1);\n\n  constructor(private readonly options: MaterialHoleOptions) {\n    super({\n      uniforms: {\n        texAbedo: "sampler2D",\n        texHoles: "sampler2D",\n        uniLightDir: "vec3",\n      },\n      varyings: {\n        varNormal: "vec3",\n        varUV: "vec2",\n      },\n      fragmentShaderCode: [\n        "vec3 normal = normalize(varNormal);",\n        `float light = abs(dot(normal, uniLightDir));`,\n        `light = pow(light, 9.0) * 0.9;`,\n        `light += 0.2;`,\n        `vec3 color = texture(texAbedo, varUV).rgb;`,\n        `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n        `spec = pow(spec, 20.0);`,\n        `vec3 holes = texture(texHoles, varUV).rgb;`,\n        `if (holes.r > 0.99) discard;`,\n        `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n      ],\n      vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n      setUniforms: ({ program }: { program: TgdProgram }): void => {\n        program.uniform3fv("uniLightDir", this.lightDirection);\n\n        this.options.abedo.activate(0, program, "texAbedo");\n        this.options.holes.activate(1, program, "texHoles");\n      },\n    });\n  }\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Shield_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                lineNumber: 22,
                columnNumber: 13
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
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                lineNumber: 25,
                columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY3VzdG9tLXNoYWRlcl9ob2xlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1mMjI4NTMuMzI2NzAyNTQzNGM5NGFiYy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9fL1NoaWVsZC9TaGllbGQuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jdXN0b20tc2hhZGVyL2hvbGVzL18vU2hpZWxkL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2N1c3RvbS1zaGFkZXIvaG9sZXMvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkTWF0ZXJpYWwsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVmVjMyxcbiAgICBUZ2RWZWM0LFxuICAgIHdlYmdsUHJlc2V0QmxlbmQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgQXNzZXRHbGIgZnJvbSBcIi4uL2Fzc2V0cy9zaGllbGQuZ2xiXCJcbmltcG9ydCBBc3NldEJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdTaGllbGQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBBc3NldEJhY2tncm91bmQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hpZWxkOiBBc3NldEdsYixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbi8vICNyZWdpb24gSW5pdGlhbGlzaW5nIFdlYkdMXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29uc3QgYXNzZXQgPSBhc3NldHMuZ2xiLnNoaWVsZFxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZFxuXG4gICAgY29uc3QgdyA9IDQwOTZcbiAgICBjb25zdCBoID0gd1xuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaClcbiAgICBjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICAgIGxldCBjb3VudCA9IDBcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnQgPiA1OSkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKVxuICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvdW50KytcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogd1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGhcbiAgICAgICAgY29uc3QgciA9IDUwICsgNDAwICogTWF0aC5yYW5kb20oKVxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgaG9sZXMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH0sIDUwMClcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41XG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICBhc3NldCxcbiAgICAgICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIilcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEhvbGUoeyBhYmVkbzogY29sb3IsIGhvbGVzIH0pXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogNTAwLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxuICAgICAgICAgICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgcGFpbnRlcixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBjb250ZXh0LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBvcmJpdGVyLnJlc2V0KDMwMClcbiAgICB9KVxufVxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIENsYXNzIE1hdGVyaWFsSG9sZVxuaW50ZXJmYWNlIE1hdGVyaWFsSG9sZU9wdGlvbnMge1xuICAgIGFiZWRvOiBUZ2RUZXh0dXJlMkRcbiAgICBob2xlczogVGdkVGV4dHVyZTJEXG59XG5cbmNsYXNzIE1hdGVyaWFsSG9sZSBleHRlbmRzIFRnZE1hdGVyaWFsIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IE1hdGVyaWFsSG9sZU9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB0ZXhBYmVkbzogXCJzYW1wbGVyMkRcIixcbiAgICAgICAgICAgICAgICB0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcbiAgICAgICAgICAgICAgICB1bmlMaWdodERpcjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZ3M6IHtcbiAgICAgICAgICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgIHZhclVWOiBcInZlYzJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXG4gICAgICAgICAgICAgICAgYGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcbiAgICAgICAgICAgICAgICBgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcbiAgICAgICAgICAgICAgICBgbGlnaHQgKz0gMC4yO2AsXG4gICAgICAgICAgICAgICAgYHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXG4gICAgICAgICAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXG4gICAgICAgICAgICAgICAgYHNwZWMgPSBwb3coc3BlYywgMjAuMCk7YCxcbiAgICAgICAgICAgICAgICBgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcbiAgICAgICAgICAgICAgICBgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXG4gICAgICAgICAgICAgICAgYHJldHVybiB2ZWM0KGNvbG9yICogbGlnaHQgKyBzcGVjICsgaG9sZXMgKiAwLjI1LCAxLjAgLSBob2xlcy5yKTtgLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIiwgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfTogeyBwcm9ncmFtOiBUZ2RQcm9ncmFtIH0pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFiZWRvLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidGV4QWJlZG9cIilcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaG9sZXMuYWN0aXZhdGUoMSwgcHJvZ3JhbSwgXCJ0ZXhIb2xlc1wiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59XG4vLyNlbmRyZWdpb25cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9TaGllbGQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiSW5pdGlhbGlzaW5nIFdlYkdMXCI6XG4gICAgICAgICdmdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICBjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkO1xcbiAgY29uc3QgYmFja2dyb3VuZCA9IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kO1xcblxcbiAgY29uc3QgdyA9IDQwOTY7XFxuICBjb25zdCBoID0gdztcXG4gIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaCk7XFxuICBjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpO1xcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcXG4gIGxldCBjb3VudCA9IDA7XFxuICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICBpZiAoY291bnQgPiA1OSkge1xcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XFxuICAgICAgY291bnQgPSAwO1xcbiAgICAgIHJldHVybjtcXG4gICAgfVxcblxcbiAgICBjb3VudCsrO1xcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XFxuICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogdztcXG4gICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBoO1xcbiAgICBjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpO1xcbiAgICBjdHguYmVnaW5QYXRoKCk7XFxuICAgIGN0eC5lbGxpcHNlKHgsIHksIHIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKTtcXG4gICAgY3R4LmZpbGwoKTtcXG4gICAgaG9sZXMubG9hZEJpdG1hcChjYW52YXMpO1xcbiAgICBjb250ZXh0LnBhaW50KCk7XFxuICB9LCA1MDApO1xcbiAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDIuNTtcXG4gIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgYXNzZXQsXFxuICAgIG1hdGVyaWFsOiAoeyBjb2xvciB9KSA9PiB7XFxuICAgICAgaWYgKCEoY29sb3IgaW5zdGFuY2VvZiBUZ2RUZXh0dXJlMkQpKSB0aHJvdyBFcnJvcihcIk5vIGFiZWRvIHByb3ZpZGVkIVwiKTtcXG5cXG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSk7XFxuICAgIH0sXFxuICB9KTtcXG4gIGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgaW5lcnRpYU9yYml0OiA1MDAsXFxuICB9KTtcXG4gIGNvbnRleHQuYWRkKFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxcbiAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGJhY2tncm91bmQpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBwYWludGVyLFxcbiAgICAgIF0sXFxuICAgIH0pLFxcbiAgKTtcXG4gIGNvbnRleHQucGFpbnQoKTtcXG4gIGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XFxuICAgIG9yYml0ZXIucmVzZXQoMzAwKTtcXG4gIH0pO1xcbn0nLFxuICAgIFwiQ2xhc3MgTWF0ZXJpYWxIb2xlXCI6XG4gICAgICAgICdpbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XFxuICBhYmVkbzogVGdkVGV4dHVyZTJEO1xcbiAgaG9sZXM6IFRnZFRleHR1cmUyRDtcXG59XFxuXFxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xcbiAgcHJpdmF0ZSByZWFkb25seSBsaWdodERpcmVjdGlvbiA9IG5ldyBUZ2RWZWMzKDAuMSwgMC4yLCAxKTtcXG5cXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xcbiAgICBzdXBlcih7XFxuICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgIHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgdGV4SG9sZXM6IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICB1bmlMaWdodERpcjogXCJ2ZWMzXCIsXFxuICAgICAgfSxcXG4gICAgICB2YXJ5aW5nczoge1xcbiAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcXG4gICAgICAgIHZhclVWOiBcInZlYzJcIixcXG4gICAgICB9LFxcbiAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxcbiAgICAgICAgYGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcXG4gICAgICAgIGBsaWdodCA9IHBvdyhsaWdodCwgOS4wKSAqIDAuOTtgLFxcbiAgICAgICAgYGxpZ2h0ICs9IDAuMjtgLFxcbiAgICAgICAgYHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXFxuICAgICAgICBgZmxvYXQgc3BlYyA9IG1heCgwLjAsIHJlZmxlY3QodW5pTGlnaHREaXIsIG5vcm1hbCkueik7YCxcXG4gICAgICAgIGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXFxuICAgICAgICBgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgIGBpZiAoaG9sZXMuciA+IDAuOTkpIGRpc2NhcmQ7YCxcXG4gICAgICAgIGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcXG4gICAgICBdLFxcbiAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIiwgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxcbiAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XFxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKTtcXG5cXG4gICAgICAgIHRoaXMub3B0aW9ucy5hYmVkby5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleEFiZWRvXCIpO1xcbiAgICAgICAgdGhpcy5vcHRpb25zLmhvbGVzLmFjdGl2YXRlKDEsIHByb2dyYW0sIFwidGV4SG9sZXNcIik7XFxuICAgICAgfSxcXG4gICAgfSk7XFxuICB9XFxufScsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XFxuaW1wb3J0IHtcXG4gIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXFxuICBUZ2RDb250ZXh0LFxcbiAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgVGdkTWF0ZXJpYWwsXFxuICBUZ2RQYWludGVyQmFja2dyb3VuZCxcXG4gIFRnZFBhaW50ZXJDbGVhcixcXG4gIFRnZFBhaW50ZXJNZXNoR2x0ZixcXG4gIFRnZFBhaW50ZXJTdGF0ZSxcXG4gIFRnZFByb2dyYW0sXFxuICBUZ2RUZXh0dXJlMkQsXFxuICBUZ2RWZWMzLFxcbiAgVGdkVmVjNCxcXG4gIHdlYmdsUHJlc2V0QmxlbmQsXFxuICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcbmltcG9ydCBBc3NldEdsYiBmcm9tIFwiLi4vYXNzZXRzL3NoaWVsZC5nbGJcIjtcXG5pbXBvcnQgQXNzZXRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3U2hpZWxkKCkge1xcbiAgcmV0dXJuIChcXG4gICAgPFZpZXdcXG4gICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogQXNzZXRCYWNrZ3JvdW5kLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGdsYjoge1xcbiAgICAgICAgICBzaGllbGQ6IEFzc2V0R2xiLFxcbiAgICAgICAgfSxcXG4gICAgICB9fVxcbiAgICAvPlxcbiAgKTtcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgY29uc3QgYXNzZXQgPSBhc3NldHMuZ2xiLnNoaWVsZDtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZDtcXG5cXG4gIGNvbnN0IHcgPSA0MDk2O1xcbiAgY29uc3QgaCA9IHc7XFxuICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpO1xcbiAgY29uc3QgaG9sZXMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoY2FudmFzKTtcXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XFxuICBsZXQgY291bnQgPSAwO1xcbiAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcXG4gICAgaWYgKGNvdW50ID4gNTkpIHtcXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xcbiAgICAgIGNvdW50ID0gMDtcXG4gICAgICByZXR1cm47XFxuICAgIH1cXG5cXG4gICAgY291bnQrKztcXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xcbiAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHc7XFxuICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogaDtcXG4gICAgY29uc3QgciA9IDUwICsgNDAwICogTWF0aC5yYW5kb20oKTtcXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xcbiAgICBjdHguZWxsaXBzZSh4LCB5LCByLCByLCAwLCAwLCBNYXRoLlBJICogMik7XFxuICAgIGN0eC5maWxsKCk7XFxuICAgIGhvbGVzLmxvYWRCaXRtYXAoY2FudmFzKTtcXG4gICAgY29udGV4dC5wYWludCgpO1xcbiAgfSwgNTAwKTtcXG4gIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAyLjU7XFxuICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgIGFzc2V0LFxcbiAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4ge1xcbiAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIik7XFxuXFxuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEhvbGUoeyBhYmVkbzogY29sb3IsIGhvbGVzIH0pO1xcbiAgICB9LFxcbiAgfSk7XFxuICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgIGluZXJ0aWFPcmJpdDogNTAwLFxcbiAgfSk7XFxuICBjb250ZXh0LmFkZChcXG4gICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjUsIDAuNSwgMC41LCAxKSxcXG4gICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChiYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgcGFpbnRlcixcXG4gICAgICBdLFxcbiAgICB9KSxcXG4gICk7XFxuICBjb250ZXh0LnBhaW50KCk7XFxuICBjb250ZXh0LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xcbiAgICBvcmJpdGVyLnJlc2V0KDMwMCk7XFxuICB9KTtcXG59XFxuXFxuaW50ZXJmYWNlIE1hdGVyaWFsSG9sZU9wdGlvbnMge1xcbiAgYWJlZG86IFRnZFRleHR1cmUyRDtcXG4gIGhvbGVzOiBUZ2RUZXh0dXJlMkQ7XFxufVxcblxcbmNsYXNzIE1hdGVyaWFsSG9sZSBleHRlbmRzIFRnZE1hdGVyaWFsIHtcXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlnaHREaXJlY3Rpb24gPSBuZXcgVGdkVmVjMygwLjEsIDAuMiwgMSk7XFxuXFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IE1hdGVyaWFsSG9sZU9wdGlvbnMpIHtcXG4gICAgc3VwZXIoe1xcbiAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICB0ZXhBYmVkbzogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgIHRleEhvbGVzOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgdW5pTGlnaHREaXI6IFwidmVjM1wiLFxcbiAgICAgIH0sXFxuICAgICAgdmFyeWluZ3M6IHtcXG4gICAgICAgIHZhck5vcm1hbDogXCJ2ZWMzXCIsXFxuICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXFxuICAgICAgfSxcXG4gICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcXG4gICAgICAgIGBmbG9hdCBsaWdodCA9IGFicyhkb3Qobm9ybWFsLCB1bmlMaWdodERpcikpO2AsXFxuICAgICAgICBgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcXG4gICAgICAgIGBsaWdodCArPSAwLjI7YCxcXG4gICAgICAgIGB2ZWMzIGNvbG9yID0gdGV4dHVyZSh0ZXhBYmVkbywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXFxuICAgICAgICBgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxcbiAgICAgICAgYHZlYzMgaG9sZXMgPSB0ZXh0dXJlKHRleEhvbGVzLCB2YXJVVikucmdiO2AsXFxuICAgICAgICBgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXFxuICAgICAgICBgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXFxuICAgICAgXSxcXG4gICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBOT1JNQUw7XCIsIFwidmFyVVYgPSBURVhDT09SRF8wO1wiXSxcXG4gICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2Z2KFwidW5pTGlnaHREaXJcIiwgdGhpcy5saWdodERpcmVjdGlvbik7XFxuXFxuICAgICAgICB0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKTtcXG4gICAgICAgIHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpO1xcbiAgICAgIH0sXFxuICAgIH0pO1xcbiAgfVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWwiLCJUZ2RQYWludGVyQmFja2dyb3VuZCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFZlYzMiLCJUZ2RWZWM0Iiwid2ViZ2xQcmVzZXRCbGVuZCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQXNzZXRHbGIiLCJBc3NldEJhY2tncm91bmQiLCJWaWV3U2hpZWxkIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJhc3NldCIsImJhY2tncm91bmQiLCJ3IiwiaCIsIl90Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwiY2FudmFzIiwiY3R4IiwiaG9sZXMiLCJjb3VudCIsIndpbmRvdyIsIngiLCJNYXRoIiwieSIsInIiLCJwYWludGVyIiwibWF0ZXJpYWwiLCJjb2xvciIsIl9pbnN0YW5jZW9mIiwiRXJyb3IiLCJNYXRlcmlhbEhvbGUiLCJvcmJpdGVyIiwib3B0aW9ucyIsInNldFVuaWZvcm1zIiwicHJvZ3JhbSIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFnQlA7QUFFNkI7QUFDVDtBQUNXO0FBRXZDLFNBQVNnQjtJQUNwQixxQkFDSSxrREFBQ0gsZ0RBQUlBO1FBQ0QsU0FBU0k7UUFDVCxRQUFRO1lBQ0osT0FBTztnQkFDSCxZQUFZRix1Q0FBZUE7WUFDL0I7WUFDQSxLQUFLO2dCQUNELFFBQVFELG1DQUFRQTtZQUNwQjtRQUNKOzs7Ozs7QUFHWjtBQUVBLDZCQUE2QjtBQUM3QixTQUFTRyxLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQzdDLElBQU1DLFFBQVFELE9BQU8sR0FBRyxDQUFDLE1BQU07SUFDL0IsSUFBTUUsYUFBYUYsT0FBTyxLQUFLLENBQUMsVUFBVTtJQUUxQyxJQUFNRyxJQUFJO0lBQ1YsSUFBTUMsSUFBSUQ7SUFDVixJQUF3QkUsZ0NBQUFBLGdFQUE0QkEsQ0FBQ0YsR0FBR0MsSUFBaERFLFNBQWdCRCw4QkFBaEJDLFFBQVFDLE1BQVFGLDhCQUFSRTtJQUNoQixJQUFNQyxRQUFRLElBQUluQiw0Q0FBWUEsQ0FBQ1UsU0FBUyxVQUFVLENBQUNPO0lBQ25EQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUdKLEdBQUdDO0lBQ3ZCLElBQUlLLFFB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