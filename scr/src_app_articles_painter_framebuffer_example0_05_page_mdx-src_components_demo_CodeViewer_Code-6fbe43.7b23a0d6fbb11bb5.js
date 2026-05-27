"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_example0_05_page_mdx-src_components_demo_CodeViewer_Code-6fbe43"], {
86252(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/whale-1024.c7eb89e7ce4772d7.webp";

},
14428(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_whale_1024_webp__rspack_import_3 = __webpack_require__(86252);




function init(context, assets) {
    context.camera.transfo.distance = 6;
    // #begin
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    // #end
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.texture);
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: texture
        })
    });
    mesh.transfo.setPosition(-0.5, 0, 0);
    var mesh2 = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: texture
        })
    });
    mesh2.transfo.setPosition(0.5, 0, 0);
    var meshPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            clear,
            mesh,
            mesh2
        ]
    });
    var fb = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        children: [
            meshPainter
        ],
        depthBuffer: true,
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context)
    });
    var chromaticAberrationFilter = new _tolokoban_tgd__rspack_import_1.TgdFilterChromaticAberration({
        strength: 10
    });
    var hueRotationFilter = new _tolokoban_tgd__rspack_import_1.TgdFilterHueRotation();
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        filters: [
            hueRotationFilter,
            chromaticAberrationFilter
        ],
        texture: fb.textureColor0
    });
    context.add(fb, filters, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delay) {
        mesh.transfo.orbitAroundX(delay * Math.sin(time * 0.5));
        mesh.transfo.orbitAroundZ(delay * 0.341);
        mesh2.transfo.orbitAroundX(delay * Math.sin(time * 0.714));
        mesh2.transfo.orbitAroundZ(-delay * 0.471);
        chromaticAberrationFilter.strength = Math.sin(time) * 10;
        hueRotationFilter.hueShiftInRadians += delay;
    }));
    context.play();
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            image: {
                texture: _assets_image_whale_1024_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/framebuffer.demo.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}


},
15590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(14428);
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
    "Detail #1": "  const clear = new TgdPainterClear(context, {\n    color: [0, 0, 0, 1],\n    depth: 1,\n  });"
};
var FULL = 'import {\n  TgdContext,\n  TgdFilterChromaticAberration,\n  TgdFilterHueRotation,\n  TgdMaterialDiffuse,\n  TgdPainterClear,\n  TgdPainterFilter,\n  TgdPainterFramebuffer,\n  TgdPainterLogic,\n  TgdPainterMesh,\n  TgdPainterState,\n  TgdTexture2D,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport TextureURL from "@/assets/image/whale-1024.webp";\n\nfunction init(context: TgdContext, assets: Assets) {\n  context.camera.transfo.distance = 6;\n  const clear = new TgdPainterClear(context, {\n    color: [0, 0, 0, 1],\n    depth: 1,\n  });\n  const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture);\n  const mesh = new TgdPainterMesh(context, {\n    material: new TgdMaterialDiffuse({\n      color: texture,\n    }),\n  });\n  mesh.transfo.setPosition(-0.5, 0, 0);\n  const mesh2 = new TgdPainterMesh(context, {\n    material: new TgdMaterialDiffuse({\n      color: texture,\n    }),\n  });\n  mesh2.transfo.setPosition(0.5, 0, 0);\n  const meshPainter = new TgdPainterState(context, {\n    depth: webglPresetDepth.less,\n    children: [clear, mesh, mesh2],\n  });\n  const fb = new TgdPainterFramebuffer(context, {\n    children: [meshPainter],\n    depthBuffer: true,\n    textureColor0: new TgdTexture2D(context),\n  });\n  const chromaticAberrationFilter = new TgdFilterChromaticAberration({\n    strength: 10,\n  });\n  const hueRotationFilter = new TgdFilterHueRotation();\n  const filters = new TgdPainterFilter(context, {\n    filters: [hueRotationFilter, chromaticAberrationFilter],\n    texture: fb.textureColor0,\n  });\n  context.add(\n    fb,\n    filters,\n    new TgdPainterLogic((time, delay) => {\n      mesh.transfo.orbitAroundX(delay * Math.sin(time * 0.5));\n      mesh.transfo.orbitAroundZ(delay * 0.341);\n      mesh2.transfo.orbitAroundX(delay * Math.sin(time * 0.714));\n      mesh2.transfo.orbitAroundZ(-delay * 0.471);\n      chromaticAberrationFilter.strength = Math.sin(time) * 10;\n      hueRotationFilter.hueShiftInRadians += delay;\n    }),\n  );\n  context.play();\n}\n\nexport default function Demo() {\n  return (\n    <View\n      onReady={init}\n      assets={{\n        image: {\n          texture: TextureURL,\n        },\n      }}\n    />\n  );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                lineNumber: 19,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
17191(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(15590);
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
        li: "li",
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Step by step demo"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The mistake we did in the previous step was that we forgot to clear the depth\nbuffer."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example0/04",
                            children: "Previous step"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                            lineNumber: 12,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMF8wNV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS02ZmJlNDMuN2IyM2EwZDZmYmIxMWJiNS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMC8wNS9fL2ZyYW1lYnVmZmVyLmRlbW8vZnJhbWVidWZmZXIuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA1L18vZnJhbWVidWZmZXIuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA1L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcbiAgICBUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3doYWxlLTEwMjQud2VicFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNlxuICAgIC8vICNiZWdpblxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgIGNvbG9yOiB0ZXh0dXJlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIG1lc2gudHJhbnNmby5zZXRQb3NpdGlvbigtMC41LCAwLCAwKVxuICAgIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IHRleHR1cmUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgbWVzaDIudHJhbnNmby5zZXRQb3NpdGlvbigwLjUsIDAsIDApXG4gICAgY29uc3QgbWVzaFBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaCwgbWVzaDJdLFxuICAgIH0pXG4gICAgY29uc3QgZmIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoUGFpbnRlcl0sXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxuICAgIH0pXG4gICAgY29uc3QgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcbiAgICAgICAgc3RyZW5ndGg6IDEwLFxuICAgIH0pXG4gICAgY29uc3QgaHVlUm90YXRpb25GaWx0ZXIgPSBuZXcgVGdkRmlsdGVySHVlUm90YXRpb24oKVxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIGZpbHRlcnM6IFtodWVSb3RhdGlvbkZpbHRlciwgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlcl0sXG4gICAgICAgIHRleHR1cmU6IGZiLnRleHR1cmVDb2xvcjAsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgZmIsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbGF5KSA9PiB7XG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbGF5ICogTWF0aC5zaW4odGltZSAqIDAuNSkpXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRaKGRlbGF5ICogMC4zNDEpXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWxheSAqIE1hdGguc2luKHRpbWUgKiAwLjcxNCkpXG4gICAgICAgICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWigtZGVsYXkgKiAwLjQ3MSlcbiAgICAgICAgICAgIGNocm9tYXRpY0FiZXJyYXRpb25GaWx0ZXIuc3RyZW5ndGggPSBNYXRoLnNpbih0aW1lKSAqIDEwXG4gICAgICAgICAgICBodWVSb3RhdGlvbkZpbHRlci5odWVTaGlmdEluUmFkaWFucyArPSBkZWxheVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IFRleHR1cmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2ZyYW1lYnVmZmVyLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkRldGFpbCAjMVwiOiBcIiAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgZGVwdGg6IDEsXFxuICB9KTtcIixcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgVGdkQ29udGV4dCxcXG4gIFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24sXFxuICBUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcXG4gIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gIFRnZFBhaW50ZXJDbGVhcixcXG4gIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICBUZ2RQYWludGVyTG9naWMsXFxuICBUZ2RQYWludGVyTWVzaCxcXG4gIFRnZFBhaW50ZXJTdGF0ZSxcXG4gIFRnZFRleHR1cmUyRCxcXG4gIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IFRleHR1cmVVUkwgZnJvbSBcIkAvYXNzZXRzL2ltYWdlL3doYWxlLTEwMjQud2VicFwiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA2O1xcbiAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgZGVwdGg6IDEsXFxuICB9KTtcXG4gIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLnRleHR1cmUpO1xcbiAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgfSksXFxuICB9KTtcXG4gIG1lc2gudHJhbnNmby5zZXRQb3NpdGlvbigtMC41LCAwLCAwKTtcXG4gIGNvbnN0IG1lc2gyID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgIGNvbG9yOiB0ZXh0dXJlLFxcbiAgICB9KSxcXG4gIH0pO1xcbiAgbWVzaDIudHJhbnNmby5zZXRQb3NpdGlvbigwLjUsIDAsIDApO1xcbiAgY29uc3QgbWVzaFBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaCwgbWVzaDJdLFxcbiAgfSk7XFxuICBjb25zdCBmYiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICBjaGlsZHJlbjogW21lc2hQYWludGVyXSxcXG4gICAgZGVwdGhCdWZmZXI6IHRydWUsXFxuICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXFxuICB9KTtcXG4gIGNvbnN0IGNocm9tYXRpY0FiZXJyYXRpb25GaWx0ZXIgPSBuZXcgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbih7XFxuICAgIHN0cmVuZ3RoOiAxMCxcXG4gIH0pO1xcbiAgY29uc3QgaHVlUm90YXRpb25GaWx0ZXIgPSBuZXcgVGdkRmlsdGVySHVlUm90YXRpb24oKTtcXG4gIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgIGZpbHRlcnM6IFtodWVSb3RhdGlvbkZpbHRlciwgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlcl0sXFxuICAgIHRleHR1cmU6IGZiLnRleHR1cmVDb2xvcjAsXFxuICB9KTtcXG4gIGNvbnRleHQuYWRkKFxcbiAgICBmYixcXG4gICAgZmlsdGVycyxcXG4gICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbGF5ICogTWF0aC5zaW4odGltZSAqIDAuNSkpO1xcbiAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsYXkgKiAwLjM0MSk7XFxuICAgICAgbWVzaDIudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsYXkgKiBNYXRoLnNpbih0aW1lICogMC43MTQpKTtcXG4gICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWigtZGVsYXkgKiAwLjQ3MSk7XFxuICAgICAgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlci5zdHJlbmd0aCA9IE1hdGguc2luKHRpbWUpICogMTA7XFxuICAgICAgaHVlUm90YXRpb25GaWx0ZXIuaHVlU2hpZnRJblJhZGlhbnMgKz0gZGVsYXk7XFxuICAgIH0pLFxcbiAgKTtcXG4gIGNvbnRleHQucGxheSgpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgcmV0dXJuIChcXG4gICAgPFZpZXdcXG4gICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgdGV4dHVyZTogVGV4dHVyZVVSTCxcXG4gICAgICAgIH0sXFxuICAgICAgfX1cXG4gICAgLz5cXG4gICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uIiwiVGdkRmlsdGVySHVlUm90YXRpb24iLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlRleHR1cmVVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwidGV4dHVyZSIsIm1lc2giLCJtZXNoMiIsIm1lc2hQYWludGVyIiwiZmIiLCJjaHJvbWF0aWNBYmVycmF0aW9uRmlsdGVyIiwiaHVlUm90YXRpb25GaWx0ZXIiLCJmaWx0ZXJzIiwidGltZSIsImRlbGF5IiwiTWF0aCIsIkRlbW8iLCJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWF1QjtBQUM2QjtBQUVHO0FBRXZELFNBQVNhLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0NELFFBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUc7SUFDbEMsU0FBUztJQUNULElBQU1FLFFBQVEsSUFBSWIsK0NBQWVBLENBQUNXLFNBQVM7UUFDdkMsT0FBTztZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFDbkIsT0FBTztJQUNYO0lBQ0EsT0FBTztJQUNQLElBQU1HLFVBQVUsSUFBSVIsNENBQVlBLENBQUNLLFNBQVMsVUFBVSxDQUFDQyxPQUFPLEtBQUssQ0FBQyxPQUFPO0lBQ3pFLElBQU1HLE9BQU8sSUFBSVgsOENBQWNBLENBQUNPLFNBQVM7UUFDckMsVUFBVSxJQUFJWixrREFBa0JBLENBQUM7WUFDN0IsT0FBT2U7UUFDWDtJQUNKO0lBQ0FDLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxD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