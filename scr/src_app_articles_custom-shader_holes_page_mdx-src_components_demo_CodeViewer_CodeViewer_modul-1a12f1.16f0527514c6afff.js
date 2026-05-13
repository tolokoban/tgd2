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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/_/Shield/index.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY3VzdG9tLXNoYWRlcl9ob2xlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0xYTEyZjEuMTZmMDUyNzUxNGM2YWZmZi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jdXN0b20tc2hhZGVyL2hvbGVzL18vU2hpZWxkL1NoaWVsZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9fL1NoaWVsZC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL2N1c3RvbS1zaGFkZXIvaG9sZXMvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbCxcbiAgICBUZ2RQYWludGVyQmFja2dyb3VuZCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RQcm9ncmFtLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RWZWMzLFxuICAgIFRnZFZlYzQsXG4gICAgd2ViZ2xQcmVzZXRCbGVuZCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBBc3NldEdsYiBmcm9tIFwiLi4vYXNzZXRzL3NoaWVsZC5nbGJcIlxuaW1wb3J0IEFzc2V0QmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1NoaWVsZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEFzc2V0QmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBzaGllbGQ6IEFzc2V0R2xiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuLy8gI3JlZ2lvbiBJbml0aWFsaXNpbmcgV2ViR0xcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kXG5cbiAgICBjb25zdCB3ID0gNDA5NlxuICAgIGNvbnN0IGggPSB3XG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKVxuICAgIGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcylcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjb3VudCA+IDU5KSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpXG4gICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY291bnQrK1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogaFxuICAgICAgICBjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguZWxsaXBzZSh4LCB5LCByLCByLCAwLCAwLCBNYXRoLlBJICogMilcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICBob2xlcy5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSwgNTAwKVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAyLjVcbiAgICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgIGFzc2V0LFxuICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoY29sb3IgaW5zdGFuY2VvZiBUZ2RUZXh0dXJlMkQpKSB0aHJvdyBFcnJvcihcIk5vIGFiZWRvIHByb3ZpZGVkIVwiKVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSlcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiA1MDAsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChiYWNrZ3JvdW5kKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBwYWludGVyLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG9yYml0ZXIucmVzZXQoMzAwKVxuICAgIH0pXG59XG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gQ2xhc3MgTWF0ZXJpYWxIb2xlXG5pbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XG4gICAgYWJlZG86IFRnZFRleHR1cmUyRFxuICAgIGhvbGVzOiBUZ2RUZXh0dXJlMkRcbn1cblxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlnaHREaXJlY3Rpb24gPSBuZXcgVGdkVmVjMygwLjEsIDAuMiwgMSlcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgICAgIHRleEhvbGVzOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgICAgIHVuaUxpZ2h0RGlyOiBcInZlYzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJ5aW5nczoge1xuICAgICAgICAgICAgICAgIHZhck5vcm1hbDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xuICAgICAgICAgICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcbiAgICAgICAgICAgICAgICBgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxuICAgICAgICAgICAgICAgIGBsaWdodCA9IHBvdyhsaWdodCwgOS4wKSAqIDAuOTtgLFxuICAgICAgICAgICAgICAgIGBsaWdodCArPSAwLjI7YCxcbiAgICAgICAgICAgICAgICBgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcbiAgICAgICAgICAgICAgICBgZmxvYXQgc3BlYyA9IG1heCgwLjAsIHJlZmxlY3QodW5pTGlnaHREaXIsIG5vcm1hbCkueik7YCxcbiAgICAgICAgICAgICAgICBgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxuICAgICAgICAgICAgICAgIGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxuICAgICAgICAgICAgICAgIGBpZiAoaG9sZXMuciA+IDAuOTkpIGRpc2NhcmQ7YCxcbiAgICAgICAgICAgICAgICBgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdmVydGV4U2hhZGVyQ29kZTogW1widmFyTm9ybWFsID0gbWF0Myh1bmlNb2RlbFZpZXdNYXRyaXgpICogTk9STUFMO1wiLCBcInZhclVWID0gVEVYQ09PUkRfMDtcIl0sXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHREaXJlY3Rpb24pXG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKVxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cbn1cbi8vI2VuZHJlZ2lvblxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL1NoaWVsZC5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJJbml0aWFsaXNpbmcgV2ViR0xcIjpcbiAgICAgICAgJ2Z1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gIGNvbnN0IGFzc2V0ID0gYXNzZXRzLmdsYi5zaGllbGQ7XFxuICBjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmQ7XFxuXFxuICBjb25zdCB3ID0gNDA5NjtcXG4gIGNvbnN0IGggPSB3O1xcbiAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKTtcXG4gIGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcyk7XFxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xcbiAgbGV0IGNvdW50ID0gMDtcXG4gIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XFxuICAgIGlmIChjb3VudCA+IDU5KSB7XFxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcXG4gICAgICBjb3VudCA9IDA7XFxuICAgICAgcmV0dXJuO1xcbiAgICB9XFxuXFxuICAgIGNvdW50Kys7XFxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcXG4gICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3O1xcbiAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGg7XFxuICAgIGNvbnN0IHIgPSA1MCArIDQwMCAqIE1hdGgucmFuZG9tKCk7XFxuICAgIGN0eC5iZWdpblBhdGgoKTtcXG4gICAgY3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpO1xcbiAgICBjdHguZmlsbCgpO1xcbiAgICBob2xlcy5sb2FkQml0bWFwKGNhbnZhcyk7XFxuICAgIGNvbnRleHQucGFpbnQoKTtcXG4gIH0sIDUwMCk7XFxuICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41O1xcbiAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICBhc3NldCxcXG4gICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcXG4gICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpO1xcblxcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxIb2xlKHsgYWJlZG86IGNvbG9yLCBob2xlcyB9KTtcXG4gICAgfSxcXG4gIH0pO1xcbiAgY29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICBpbmVydGlhT3JiaXQ6IDUwMCxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXFxuICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgXSxcXG4gICAgfSksXFxuICApO1xcbiAgY29udGV4dC5wYWludCgpO1xcbiAgY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcXG4gICAgb3JiaXRlci5yZXNldCgzMDApO1xcbiAgfSk7XFxufScsXG4gICAgXCJDbGFzcyBNYXRlcmlhbEhvbGVcIjpcbiAgICAgICAgJ2ludGVyZmFjZSBNYXRlcmlhbEhvbGVPcHRpb25zIHtcXG4gIGFiZWRvOiBUZ2RUZXh0dXJlMkQ7XFxuICBob2xlczogVGdkVGV4dHVyZTJEO1xcbn1cXG5cXG5jbGFzcyBNYXRlcmlhbEhvbGUgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XFxuICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpO1xcblxcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBNYXRlcmlhbEhvbGVPcHRpb25zKSB7XFxuICAgIHN1cGVyKHtcXG4gICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgdGV4QWJlZG86IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICB0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgIHVuaUxpZ2h0RGlyOiBcInZlYzNcIixcXG4gICAgICB9LFxcbiAgICAgIHZhcnlpbmdzOiB7XFxuICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxcbiAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxcbiAgICAgIH0sXFxuICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICBcInZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXFxuICAgICAgICBgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxcbiAgICAgICAgYGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXFxuICAgICAgICBgbGlnaHQgKz0gMC4yO2AsXFxuICAgICAgICBgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgIGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxcbiAgICAgICAgYHNwZWMgPSBwb3coc3BlYywgMjAuMCk7YCxcXG4gICAgICAgIGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgYGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxcbiAgICAgICAgYHJldHVybiB2ZWM0KGNvbG9yICogbGlnaHQgKyBzcGVjICsgaG9sZXMgKiAwLjI1LCAxLjAgLSBob2xlcy5yKTtgLFxcbiAgICAgIF0sXFxuICAgICAgdmVydGV4U2hhZGVyQ29kZTogW1widmFyTm9ybWFsID0gbWF0Myh1bmlNb2RlbFZpZXdNYXRyaXgpICogTk9STUFMO1wiLCBcInZhclVWID0gVEVYQ09PUkRfMDtcIl0sXFxuICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfTogeyBwcm9ncmFtOiBUZ2RQcm9ncmFtIH0pOiB2b2lkID0+IHtcXG4gICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHREaXJlY3Rpb24pO1xcblxcbiAgICAgICAgdGhpcy5vcHRpb25zLmFiZWRvLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidGV4QWJlZG9cIik7XFxuICAgICAgICB0aGlzLm9wdGlvbnMuaG9sZXMuYWN0aXZhdGUoMSwgcHJvZ3JhbSwgXCJ0ZXhIb2xlc1wiKTtcXG4gICAgICB9LFxcbiAgICB9KTtcXG4gIH1cXG59Jyxcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcXG5pbXBvcnQge1xcbiAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcXG4gIFRnZENvbnRleHQsXFxuICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICBUZ2RNYXRlcmlhbCxcXG4gIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxcbiAgVGdkUGFpbnRlckNsZWFyLFxcbiAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgVGdkUGFpbnRlclN0YXRlLFxcbiAgVGdkUHJvZ3JhbSxcXG4gIFRnZFRleHR1cmUyRCxcXG4gIFRnZFZlYzMsXFxuICBUZ2RWZWM0LFxcbiAgd2ViZ2xQcmVzZXRCbGVuZCxcXG4gIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5cXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuaW1wb3J0IEFzc2V0R2xiIGZyb20gXCIuLi9hc3NldHMvc2hpZWxkLmdsYlwiO1xcbmltcG9ydCBBc3NldEJhY2tncm91bmQgZnJvbSBcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiO1xcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdTaGllbGQoKSB7XFxuICByZXR1cm4gKFxcbiAgICA8Vmlld1xcbiAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgYXNzZXRzPXt7XFxuICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBBc3NldEJhY2tncm91bmQsXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgIHNoaWVsZDogQXNzZXRHbGIsXFxuICAgICAgICB9LFxcbiAgICAgIH19XFxuICAgIC8+XFxuICApO1xcbn1cXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICBjb25zdCBhc3NldCA9IGFzc2V0cy5nbGIuc2hpZWxkO1xcbiAgY29uc3QgYmFja2dyb3VuZCA9IGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kO1xcblxcbiAgY29uc3QgdyA9IDQwOTY7XFxuICBjb25zdCBoID0gdztcXG4gIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQodywgaCk7XFxuICBjb25zdCBob2xlcyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpO1xcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcXG4gIGxldCBjb3VudCA9IDA7XFxuICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICBpZiAoY291bnQgPiA1OSkge1xcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XFxuICAgICAgY291bnQgPSAwO1xcbiAgICAgIHJldHVybjtcXG4gICAgfVxcblxcbiAgICBjb3VudCsrO1xcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XFxuICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpICogdztcXG4gICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBoO1xcbiAgICBjb25zdCByID0gNTAgKyA0MDAgKiBNYXRoLnJhbmRvbSgpO1xcbiAgICBjdHguYmVnaW5QYXRoKCk7XFxuICAgIGN0eC5lbGxpcHNlKHgsIHksIHIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKTtcXG4gICAgY3R4LmZpbGwoKTtcXG4gICAgaG9sZXMubG9hZEJpdG1hcChjYW52YXMpO1xcbiAgICBjb250ZXh0LnBhaW50KCk7XFxuICB9LCA1MDApO1xcbiAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDIuNTtcXG4gIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgYXNzZXQsXFxuICAgIG1hdGVyaWFsOiAoeyBjb2xvciB9KSA9PiB7XFxuICAgICAgaWYgKCEoY29sb3IgaW5zdGFuY2VvZiBUZ2RUZXh0dXJlMkQpKSB0aHJvdyBFcnJvcihcIk5vIGFiZWRvIHByb3ZpZGVkIVwiKTtcXG5cXG4gICAgICByZXR1cm4gbmV3IE1hdGVyaWFsSG9sZSh7IGFiZWRvOiBjb2xvciwgaG9sZXMgfSk7XFxuICAgIH0sXFxuICB9KTtcXG4gIGNvbnN0IG9yYml0ZXIgPSBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgaW5lcnRpYU9yYml0OiA1MDAsXFxuICB9KTtcXG4gIGNvbnRleHQuYWRkKFxcbiAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgIGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLmFscGhhLFxcbiAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAuNSwgMC41LCAwLjUsIDEpLFxcbiAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG4gICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGJhY2tncm91bmQpLFxcbiAgICAgICAgfSksXFxuICAgICAgICBwYWludGVyLFxcbiAgICAgIF0sXFxuICAgIH0pLFxcbiAgKTtcXG4gIGNvbnRleHQucGFpbnQoKTtcXG4gIGNvbnRleHQuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PiB7XFxuICAgIG9yYml0ZXIucmVzZXQoMzAwKTtcXG4gIH0pO1xcbn1cXG5cXG5pbnRlcmZhY2UgTWF0ZXJpYWxIb2xlT3B0aW9ucyB7XFxuICBhYmVkbzogVGdkVGV4dHVyZTJEO1xcbiAgaG9sZXM6IFRnZFRleHR1cmUyRDtcXG59XFxuXFxuY2xhc3MgTWF0ZXJpYWxIb2xlIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xcbiAgcHJpdmF0ZSByZWFkb25seSBsaWdodERpcmVjdGlvbiA9IG5ldyBUZ2RWZWMzKDAuMSwgMC4yLCAxKTtcXG5cXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogTWF0ZXJpYWxIb2xlT3B0aW9ucykge1xcbiAgICBzdXBlcih7XFxuICAgICAgdW5pZm9ybXM6IHtcXG4gICAgICAgIHRleEFiZWRvOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgdGV4SG9sZXM6IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICB1bmlMaWdodERpcjogXCJ2ZWMzXCIsXFxuICAgICAgfSxcXG4gICAgICB2YXJ5aW5nczoge1xcbiAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcXG4gICAgICAgIHZhclVWOiBcInZlYzJcIixcXG4gICAgICB9LFxcbiAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xcbiAgICAgICAgXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxcbiAgICAgICAgYGZsb2F0IGxpZ2h0ID0gYWJzKGRvdChub3JtYWwsIHVuaUxpZ2h0RGlyKSk7YCxcXG4gICAgICAgIGBsaWdodCA9IHBvdyhsaWdodCwgOS4wKSAqIDAuOTtgLFxcbiAgICAgICAgYGxpZ2h0ICs9IDAuMjtgLFxcbiAgICAgICAgYHZlYzMgY29sb3IgPSB0ZXh0dXJlKHRleEFiZWRvLCB2YXJVVikucmdiO2AsXFxuICAgICAgICBgZmxvYXQgc3BlYyA9IG1heCgwLjAsIHJlZmxlY3QodW5pTGlnaHREaXIsIG5vcm1hbCkueik7YCxcXG4gICAgICAgIGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXFxuICAgICAgICBgdmVjMyBob2xlcyA9IHRleHR1cmUodGV4SG9sZXMsIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgIGBpZiAoaG9sZXMuciA+IDAuOTkpIGRpc2NhcmQ7YCxcXG4gICAgICAgIGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcXG4gICAgICBdLFxcbiAgICAgIHZlcnRleFNoYWRlckNvZGU6IFtcInZhck5vcm1hbCA9IG1hdDModW5pTW9kZWxWaWV3TWF0cml4KSAqIE5PUk1BTDtcIiwgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxcbiAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XFxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodERpclwiLCB0aGlzLmxpZ2h0RGlyZWN0aW9uKTtcXG5cXG4gICAgICAgIHRoaXMub3B0aW9ucy5hYmVkby5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleEFiZWRvXCIpO1xcbiAgICAgICAgdGhpcy5vcHRpb25zLmhvbGVzLmFjdGl2YXRlKDEsIHByb2dyYW0sIFwidGV4SG9sZXNcIik7XFxuICAgICAgfSxcXG4gICAgfSk7XFxuICB9XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RNYXRlcmlhbCIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2hHbHRmIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVmVjMyIsIlRnZFZlYzQiLCJ3ZWJnbFByZXNldEJsZW5kIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJBc3NldEdsYiIsIkFzc2V0QmFja2dyb3VuZCIsIlZpZXdTaGllbGQiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImFzc2V0IiwiYmFja2dyb3VuZCIsInciLCJoIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjYW52YXMiLCJjdHgiLCJob2xlcyIsImNvdW50Iiwid2luZG93IiwieCIsIk1hdGgiLCJ5IiwiciIsInBhaW50ZXIiLCJtYXRlcmlhbCIsImNvbG9yIiwiX2luc3RhbmNlb2YiLCJFcnJvciIsIk1hdGVyaWFsSG9sZSIsIm9yYml0ZXIiLCJvcHRpb25zIiwic2V0VW5pZm9ybXMiLCJwcm9ncmFtIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQWdCUDtBQUU2QjtBQUNUO0FBQ1c7QUFFdkMsU0FBU2dCO0lBQ3BCLHFCQUNJLGtEQUFDSCxnREFBSUE7UUFDRCxTQUFTSTtRQUNULFFBQVE7WUFDSixPQUFPO2dCQUNILFlBQVlGLHVDQUFlQTtZQUMvQjtZQUNBLEtBQUs7Z0JBQ0QsUUFBUUQsbUNBQVFBO1lBQ3BCO1FBQ0o7Ozs7OztBQUdaO0FBRUEsNkJBQTZCO0FBQzdCLFNBQVNHLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsSUFBTUMsUUFBUUQsT0FBTyxHQUFHLENBQUMsTUFBTTtJQUMvQixJQUFNRSxhQUFhRixPQUFPLEtBQUssQ0FBQyxVQUFVO0lBRTFDLElBQU1HLElBQUk7SUFDVixJQUFNQyxJQUFJRDtJQUNWLElBQXdCRSxnQ0FBQUEsZ0VBQTRCQSxDQUFDRixHQUFHQyxJQUFoREUsU0FBZ0JELDhCQUFoQkMsUUFBUUMsTUFBUUYsOEJBQVJFO0lBQ2hCLElBQU1DLFFBQVEsSUFBSW5CLDRDQUFZQSxDQUFDVSxTQUFTLFVBQVUsQ0FBQ087SUFDbkRDLElBQUksU0FBUyxDQUFDLEdBQUcsR0FBR0osR0FBR0M7SUFDdkIsSUFBSUssUUFBUTtJ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