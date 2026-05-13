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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/framebuffer.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/_/framebuffer.demo/index.tsx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Step by step demo"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The mistake we did in the previous step was that we forgot to clear the depth\nbuffer."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                            lineNumber: 12,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/05/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMF8wNV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS02ZmJlNDMuYTY1OGQ1Y2VkZDI3NzE0OC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA1L18vZnJhbWVidWZmZXIuZGVtby9mcmFtZWJ1ZmZlci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMC8wNS9fL2ZyYW1lYnVmZmVyLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA1L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uLFxuICAgIFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgVGV4dHVyZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2Uvd2hhbGUtMTAyNC53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA2XG4gICAgLy8gI2JlZ2luXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICAvLyAjZW5kXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IHRleHR1cmUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKC0wLjUsIDAsIDApXG4gICAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICBtZXNoMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuNSwgMCwgMClcbiAgICBjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBtZXNoLCBtZXNoMl0sXG4gICAgfSlcbiAgICBjb25zdCBmYiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBjaGlsZHJlbjogW21lc2hQYWludGVyXSxcbiAgICAgICAgZGVwdGhCdWZmZXI6IHRydWUsXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCksXG4gICAgfSlcbiAgICBjb25zdCBjaHJvbWF0aWNBYmVycmF0aW9uRmlsdGVyID0gbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xuICAgICAgICBzdHJlbmd0aDogMTAsXG4gICAgfSlcbiAgICBjb25zdCBodWVSb3RhdGlvbkZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbigpXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgZmlsdGVyczogW2h1ZVJvdGF0aW9uRmlsdGVyLCBjaHJvbWF0aWNBYmVycmF0aW9uRmlsdGVyXSxcbiAgICAgICAgdGV4dHVyZTogZmIudGV4dHVyZUNvbG9yMCxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBmYixcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsYXkgKiBNYXRoLnNpbih0aW1lICogMC41KSlcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFooZGVsYXkgKiAwLjM0MSlcbiAgICAgICAgICAgIG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbGF5ICogTWF0aC5zaW4odGltZSAqIDAuNzE0KSlcbiAgICAgICAgICAgIG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRaKC1kZWxheSAqIDAuNDcxKVxuICAgICAgICAgICAgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlci5zdHJlbmd0aCA9IE1hdGguc2luKHRpbWUpICogMTBcbiAgICAgICAgICAgIGh1ZVJvdGF0aW9uRmlsdGVyLmh1ZVNoaWZ0SW5SYWRpYW5zICs9IGRlbGF5XG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogVGV4dHVyZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZnJhbWVidWZmZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6IFwiICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICBkZXB0aDogMSxcXG4gIH0pO1wiLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICBUZ2RDb250ZXh0LFxcbiAgVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbixcXG4gIFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxcbiAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgVGdkUGFpbnRlckNsZWFyLFxcbiAgVGdkUGFpbnRlckZpbHRlcixcXG4gIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gIFRnZFBhaW50ZXJMb2dpYyxcXG4gIFRnZFBhaW50ZXJNZXNoLFxcbiAgVGdkUGFpbnRlclN0YXRlLFxcbiAgVGdkVGV4dHVyZTJELFxcbiAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5cXG5pbXBvcnQgVGV4dHVyZVVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2Uvd2hhbGUtMTAyNC53ZWJwXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDY7XFxuICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICBkZXB0aDogMSxcXG4gIH0pO1xcbiAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSk7XFxuICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgIGNvbG9yOiB0ZXh0dXJlLFxcbiAgICB9KSxcXG4gIH0pO1xcbiAgbWVzaC50cmFuc2ZvLnNldFBvc2l0aW9uKC0wLjUsIDAsIDApO1xcbiAgY29uc3QgbWVzaDIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgIH0pLFxcbiAgfSk7XFxuICBtZXNoMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuNSwgMCwgMCk7XFxuICBjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICBjaGlsZHJlbjogW2NsZWFyLCBtZXNoLCBtZXNoMl0sXFxuICB9KTtcXG4gIGNvbnN0IGZiID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgIGNoaWxkcmVuOiBbbWVzaFBhaW50ZXJdLFxcbiAgICBkZXB0aEJ1ZmZlcjogdHJ1ZSxcXG4gICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gIH0pO1xcbiAgY29uc3QgY2hyb21hdGljQWJlcnJhdGlvbkZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgc3RyZW5ndGg6IDEwLFxcbiAgfSk7XFxuICBjb25zdCBodWVSb3RhdGlvbkZpbHRlciA9IG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbigpO1xcbiAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgZmlsdGVyczogW2h1ZVJvdGF0aW9uRmlsdGVyLCBjaHJvbWF0aWNBYmVycmF0aW9uRmlsdGVyXSxcXG4gICAgdGV4dHVyZTogZmIudGV4dHVyZUNvbG9yMCxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoXFxuICAgIGZiLFxcbiAgICBmaWx0ZXJzLFxcbiAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xcbiAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsYXkgKiBNYXRoLnNpbih0aW1lICogMC41KSk7XFxuICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWxheSAqIDAuMzQxKTtcXG4gICAgICBtZXNoMi50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWxheSAqIE1hdGguc2luKHRpbWUgKiAwLjcxNCkpO1xcbiAgICAgIG1lc2gyLnRyYW5zZm8ub3JiaXRBcm91bmRaKC1kZWxheSAqIDAuNDcxKTtcXG4gICAgICBjaHJvbWF0aWNBYmVycmF0aW9uRmlsdGVyLnN0cmVuZ3RoID0gTWF0aC5zaW4odGltZSkgKiAxMDtcXG4gICAgICBodWVSb3RhdGlvbkZpbHRlci5odWVTaGlmdEluUmFkaWFucyArPSBkZWxheTtcXG4gICAgfSksXFxuICApO1xcbiAgY29udGV4dC5wbGF5KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICByZXR1cm4gKFxcbiAgICA8Vmlld1xcbiAgICAgIG9uUmVhZHk9e2luaXR9XFxuICAgICAgYXNzZXRzPXt7XFxuICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICB0ZXh0dXJlOiBUZXh0dXJlVVJMLFxcbiAgICAgICAgfSxcXG4gICAgICB9fVxcbiAgICAvPlxcbiAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24iLCJUZ2RGaWx0ZXJIdWVSb3RhdGlvbiIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiVGV4dHVyZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJ0ZXh0dXJlIiwibWVzaCIsIm1lc2gyIiwibWVzaFBhaW50ZXIiLCJmYiIsImNocm9tYXRpY0FiZXJyYXRpb25GaWx0ZXIiLCJodWVSb3RhdGlvbkZpbHRlciIsImZpbHRlcnMiLCJ0aW1lIiwiZGVsYXkiLCJNYXRoIiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBYXVCO0FBQzZCO0FBRUc7QUFFdkQsU0FBU2EsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3Q0QsUUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRztJQUNsQyxTQUFTO0lBQ1QsSUFBTUUsUUFBUSxJQUFJYiwrQ0FBZUEsQ0FBQ1csU0FBUztRQUN2QyxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUNuQixPQUFPO0lBQ1g7SUFDQSxPQUFPO0lBQ1AsSUFBTUcsVUFBVSxJQUFJUiw0Q0FBWUEsQ0FBQ0ssU0FBUyxVQUFVLENBQUNDLE9BQU8sS0FBSyxDQUFDLE9BQU87SUFDekUsSUFBTUcsT0FBTyxJQUFJWCw4Q0FBY0EsQ0FBQ08sU0FBUztRQUNyQyxVQUFVLElBQUlaLGtEQUFrQkEsQ0FBQztZQUM3QixPQUFPZTtRQUNYO0lBQ0o7SUFDQUMsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMs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