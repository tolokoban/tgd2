"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_fixed-size_02_page_mdx-src_components_demo_CodeViewer_Co-b6cea9"], {
81006(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-2x2.eb55dec2a09ac483.webp";

},
9849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_2x2_webp__rspack_import_3 = __webpack_require__(81006);
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




function init(context, assets) {
    // #begin
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.texture);
    var cubeInside = new CubePainter(context, texture, 1);
    var textureColor0 = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreate)(512, 512));
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        fixedSize: true,
        depthBuffer: true,
        textureColor0: textureColor0,
        children: [
            cubeInside
        ]
    });
    var cubeOutside = new CubePainter(context, textureColor0, 0.2);
    context.camera.fitSpaceAtTarget(1.8, 1.8);
    context.add(framebuffer, cubeOutside);
    context.play();
// #end
}
var CubePainter = /*#__PURE__*/ function(TgdPainterGroup) {
    "use strict";
    _inherits(CubePainter, TgdPainterGroup);
    function CubePainter(context, texture) {
        var rotationSpeed = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        _class_call_check(this, CubePainter);
        var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
            color: [
                0.3,
                0.2,
                0.1,
                1
            ],
            depth: 1
        });
        var cube = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
            material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
                color: texture,
                light: new _tolokoban_tgd__rspack_import_1.TgdLight({
                    direction: [
                        -2,
                        1,
                        -5
                    ]
                }),
                lockLightsToCamera: true
            })
        });
        var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
            depth: "less",
            cull: "off",
            children: [
                cube,
                function(time) {
                    cube.transfo.setEulerRotation(time * rotationSpeed * 71.54, time * rotationSpeed * 47.51, 0);
                }
            ]
        });
        return _call_super(this, CubePainter, [
            [
                clear,
                state
            ]
        ]);
    }
    return CubePainter;
}(_tolokoban_tgd__rspack_import_1.TgdPainterGroup);
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: false,
        controller: {
            inertiaOrbit: 1000
        },
        assets: {
            image: {
                texture: _assets_image_uv_grid_2x2_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/framebuffer.demo.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}


},
82057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(9849);
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
    "Detail #1": "    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const cubeInside = new CubePainter(context, texture, 1)\n    const textureColor0 = new TgdTexture2D(context).loadBitmap(tgdCanvasCreate(512, 512))\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        fixedSize: true,\n        depthBuffer: true,\n        textureColor0,\n        children: [cubeInside],\n    })\n    const cubeOutside = new CubePainter(context, textureColor0, 0.2)\n    context.camera.fitSpaceAtTarget(1.8, 1.8)\n    context.add(framebuffer, cubeOutside)\n    context.play()"
};
var FULL = "import {\n    tgdCanvasCreate,\n    TgdContext,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFramebuffer,\n    TgdPainterGroup,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport ImageURL from \"@/assets/image/uv-grid-2x2.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const cubeInside = new CubePainter(context, texture, 1)\n    const textureColor0 = new TgdTexture2D(context).loadBitmap(tgdCanvasCreate(512, 512))\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        fixedSize: true,\n        depthBuffer: true,\n        textureColor0,\n        children: [cubeInside],\n    })\n    const cubeOutside = new CubePainter(context, textureColor0, 0.2)\n    context.camera.fitSpaceAtTarget(1.8, 1.8)\n    context.add(framebuffer, cubeOutside)\n    context.play()\n}\n\nclass CubePainter extends TgdPainterGroup {\n    constructor(context: TgdContext, texture: TgdTexture2D, rotationSpeed = 1) {\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.2, 0.1, 1],\n            depth: 1,\n        })\n        const cube = new TgdPainterMesh(context, {\n            material: new TgdMaterialDiffuse({\n                color: texture,\n                light: new TgdLight({\n                    direction: [-2, 1, -5],\n                }),\n                lockLightsToCamera: true,\n            }),\n        })\n        const state = new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"off\",\n            children: [\n                cube,\n                (time) => {\n                    cube.transfo.setEulerRotation(time * rotationSpeed * 71.54, time * rotationSpeed * 47.51, 0)\n                },\n            ],\n        })\n        super([clear, state])\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            gizmo={false}\n            controller={{\n                inertiaOrbit: 1000,\n            }}\n            assets={{\n                image: { texture: ImageURL },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/_/framebuffer.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
2592(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(82057);
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
        h1: "h1",
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Fixed size"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Now we paint this cube inside a framebuffer and use the resulting texture to display another cube."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/framebuffer/fixed-size/01",
                    children: "Previous step"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                    lineNumber: 11,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/fixed-size/02/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9maXhlZC1zaXplXzAyX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Dby1iNmNlYTkuZjAzNTQ2ZTg2MzhjMzZkNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2ZpeGVkLXNpemUvMDIvXy9mcmFtZWJ1ZmZlci5kZW1vL2ZyYW1lYnVmZmVyLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2ZpeGVkLXNpemUvMDIvXy9mcmFtZWJ1ZmZlci5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9maXhlZC1zaXplLzAyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckdyb3VwLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEltYWdlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTJ4Mi53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXG4gICAgY29uc3QgY3ViZUluc2lkZSA9IG5ldyBDdWJlUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlLCAxKVxuICAgIGNvbnN0IHRleHR1cmVDb2xvcjAgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlKDUxMiwgNTEyKSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBmaXhlZFNpemU6IHRydWUsXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwLFxuICAgICAgICBjaGlsZHJlbjogW2N1YmVJbnNpZGVdLFxuICAgIH0pXG4gICAgY29uc3QgY3ViZU91dHNpZGUgPSBuZXcgQ3ViZVBhaW50ZXIoY29udGV4dCwgdGV4dHVyZUNvbG9yMCwgMC4yKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS44LCAxLjgpXG4gICAgY29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGN1YmVPdXRzaWRlKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5jbGFzcyBDdWJlUGFpbnRlciBleHRlbmRzIFRnZFBhaW50ZXJHcm91cCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVGdkQ29udGV4dCwgdGV4dHVyZTogVGdkVGV4dHVyZTJELCByb3RhdGlvblNwZWVkID0gMSkge1xuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjdWJlID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcbiAgICAgICAgICAgICAgICBsaWdodDogbmV3IFRnZExpZ2h0KHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBbLTIsIDEsIC01XSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIGN1YmUsXG4gICAgICAgICAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIHJvdGF0aW9uU3BlZWQgKiA3MS41NCwgdGltZSAqIHJvdGF0aW9uU3BlZWQgKiA0Ny41MSwgMClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgc3VwZXIoW2NsZWFyLCBzdGF0ZV0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW89e2ZhbHNlfVxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZTogeyB0ZXh0dXJlOiBJbWFnZVVSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZnJhbWVidWZmZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCIgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcXG4gICAgY29uc3QgY3ViZUluc2lkZSA9IG5ldyBDdWJlUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlLCAxKVxcbiAgICBjb25zdCB0ZXh0dXJlQ29sb3IwID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZSg1MTIsIDUxMikpXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBmaXhlZFNpemU6IHRydWUsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjAsXFxuICAgICAgICBjaGlsZHJlbjogW2N1YmVJbnNpZGVdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlT3V0c2lkZSA9IG5ldyBDdWJlUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlQ29sb3IwLCAwLjIpXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS44LCAxLjgpXFxuICAgIGNvbnRleHQuYWRkKGZyYW1lYnVmZmVyLCBjdWJlT3V0c2lkZSlcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbnZhc0NyZWF0ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJHcm91cCxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBJbWFnZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTJ4Mi53ZWJwXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcXG4gICAgY29uc3QgY3ViZUluc2lkZSA9IG5ldyBDdWJlUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlLCAxKVxcbiAgICBjb25zdCB0ZXh0dXJlQ29sb3IwID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZSg1MTIsIDUxMikpXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBmaXhlZFNpemU6IHRydWUsXFxuICAgICAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgICAgIHRleHR1cmVDb2xvcjAsXFxuICAgICAgICBjaGlsZHJlbjogW2N1YmVJbnNpZGVdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjdWJlT3V0c2lkZSA9IG5ldyBDdWJlUGFpbnRlcihjb250ZXh0LCB0ZXh0dXJlQ29sb3IwLCAwLjIpXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS44LCAxLjgpXFxuICAgIGNvbnRleHQuYWRkKGZyYW1lYnVmZmVyLCBjdWJlT3V0c2lkZSlcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuY2xhc3MgQ3ViZVBhaW50ZXIgZXh0ZW5kcyBUZ2RQYWludGVyR3JvdXAge1xcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUZ2RDb250ZXh0LCB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQsIHJvdGF0aW9uU3BlZWQgPSAxKSB7XFxuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgICAgICAgICAgbGlnaHQ6IG5ldyBUZ2RMaWdodCh7XFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFstMiwgMSwgLTVdLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgICAgICBjdWJlLFxcbiAgICAgICAgICAgICAgICAodGltZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY3ViZS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSAqIHJvdGF0aW9uU3BlZWQgKiA3MS41NCwgdGltZSAqIHJvdGF0aW9uU3BlZWQgKiA0Ny41MSwgMClcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBdLFxcbiAgICAgICAgfSlcXG4gICAgICAgIHN1cGVyKFtjbGVhciwgc3RhdGVdKVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgICAgICAgZ2l6bW89e2ZhbHNlfVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3tcXG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IHRleHR1cmU6IEltYWdlVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsidGdkQ2FudmFzQ3JlYXRlIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyR3JvdXAiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlZpZXciLCJJbWFnZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwidGV4dHVyZSIsImN1YmVJbnNpZGUiLCJDdWJlUGFpbnRlciIsInRleHR1cmVDb2xvcjAiLCJmcmFtZWJ1ZmZlciIsImN1YmVPdXRzaWRlIiwicm90YXRpb25TcGVlZCIsImNsZWFyIiwiY3ViZSIsInN0YXRlIiwidGltZSIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3VCO0FBQzZCO0FBRUU7QUFFdEQsU0FBU1csS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3QyxTQUFTO0lBQ1QsSUFBTUMsVUFBVSxJQUFJTiw0Q0FBWUEsQ0FBQ0ksU0FBUyxVQUFVLENBQUNDLE9BQU8sS0FBSyxDQUFDLE9BQU87SUFDekUsSUFBTUUsYUFBYSxJQUFJQyxZQUFZSixTQUFTRSxTQUFTO0lBQ3JELElBQU1HLGdCQUFnQixJQUFJ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