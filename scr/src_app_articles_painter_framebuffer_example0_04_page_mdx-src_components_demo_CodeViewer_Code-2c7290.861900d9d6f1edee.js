"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_example0_04_page_mdx-src_components_demo_CodeViewer_Code-2c7290"], {
86252(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/whale-1024.c7eb89e7ce4772d7.webp";

},
86593(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_whale_1024_webp__rspack_import_3 = __webpack_require__(86252);




function init(context, assets) {
    context.camera.transfo.distance = 5;
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ]
    });
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.texture);
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: texture
        })
    });
    var meshPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            clear,
            mesh
        ]
    });
    // #begin
    var fb = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebufferWithAntiAliasing(context, {
        children: [
            meshPainter
        ],
        depthBuffer: true,
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context)
    });
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilterChromaticAberration({
                strength: 10
            })
        ],
        texture: fb.textureColor0
    });
    context.add(fb, filters, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delay) {
        mesh.transfo.orbitAroundX(delay * Math.sin(time));
        mesh.transfo.orbitAroundZ(delay * 1.341);
    }));
    // #end
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/framebuffer.demo.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}


},
43217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(86593);
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
    "Detail #1": "    const fb = new TgdPainterFramebufferWithAntiAliasing(context, {\n        children: [meshPainter],\n        depthBuffer: true,\n        textureColor0: new TgdTexture2D(context),\n    })\n    const filters = new TgdPainterFilter(context, {\n        filters: [\n            new TgdFilterChromaticAberration({\n                strength: 10,\n            }),\n        ],\n        texture: fb.textureColor0,\n    })\n    context.add(\n        fb,\n        filters,\n        new TgdPainterLogic((time, delay) => {\n            mesh.transfo.orbitAroundX(delay * Math.sin(time))\n            mesh.transfo.orbitAroundZ(delay * 1.341)\n        }),\n    )"
};
var FULL = "import {\n    TgdContext,\n    TgdFilterChromaticAberration,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterFramebufferWithAntiAliasing,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport TextureURL from \"@/assets/image/whale-1024.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 5\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n    })\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.texture)\n    const mesh = new TgdPainterMesh(context, {\n        material: new TgdMaterialDiffuse({\n            color: texture,\n        }),\n    })\n    const meshPainter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        children: [clear, mesh],\n    })\n    const fb = new TgdPainterFramebufferWithAntiAliasing(context, {\n        children: [meshPainter],\n        depthBuffer: true,\n        textureColor0: new TgdTexture2D(context),\n    })\n    const filters = new TgdPainterFilter(context, {\n        filters: [\n            new TgdFilterChromaticAberration({\n                strength: 10,\n            }),\n        ],\n        texture: fb.textureColor0,\n    })\n    context.add(\n        fb,\n        filters,\n        new TgdPainterLogic((time, delay) => {\n            mesh.transfo.orbitAroundX(delay * Math.sin(time))\n            mesh.transfo.orbitAroundZ(delay * 1.341)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    texture: TextureURL,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/_/framebuffer.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
78560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(43217);
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Step by step demo"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "We now create a framebuffer and use its output texture as an input for the\nfilter."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "But, as you can see, ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("strong", {
                        children: "there are some issues here"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                        lineNumber: 8,
                        columnNumber: 22
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example0/03",
                            children: "Previous step"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                            lineNumber: 14,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example0/05",
                            children: "Next step"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                            lineNumber: 15,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example0/04/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMF8wNF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZS0yYzcyOTAuODYxOTAwZDlkNmYxZWRlZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA0L18vZnJhbWVidWZmZXIuZGVtby9mcmFtZWJ1ZmZlci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMC8wNC9fL2ZyYW1lYnVmZmVyLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUwLzA0L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyV2l0aEFudGlBbGlhc2luZyxcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBUZXh0dXJlVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS93aGFsZS0xMDI0LndlYnBcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxuICAgIH0pXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UudGV4dHVyZSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IHRleHR1cmUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaFBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaF0sXG4gICAgfSlcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBmYiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFttZXNoUGFpbnRlcl0sXG4gICAgICAgIGRlcHRoQnVmZmVyOiB0cnVlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxuICAgIH0pXG4gICAgY29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcbiAgICAgICAgZmlsdGVyczogW1xuICAgICAgICAgICAgbmV3IFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24oe1xuICAgICAgICAgICAgICAgIHN0cmVuZ3RoOiAxMCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICB0ZXh0dXJlOiBmYi50ZXh0dXJlQ29sb3IwLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGZiLFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lLCBkZWxheSkgPT4ge1xuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWxheSAqIE1hdGguc2luKHRpbWUpKVxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWxheSAqIDEuMzQxKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgLy8gI2VuZFxuICAgIGNvbnRleHQucGxheSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBUZXh0dXJlVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9mcmFtZWJ1ZmZlci5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcIiAgICBjb25zdCBmYiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaFBhaW50ZXJdLFxcbiAgICAgICAgZGVwdGhCdWZmZXI6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgICAgICAgICAgICAgc3RyZW5ndGg6IDEwLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmU6IGZiLnRleHR1cmVDb2xvcjAsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZmIsXFxuICAgICAgICBmaWx0ZXJzLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbGF5ICogTWF0aC5zaW4odGltZSkpXFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWxheSAqIDEuMzQxKVxcbiAgICAgICAgfSksXFxuICAgIClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZEZpbHRlckNocm9tYXRpY0FiZXJyYXRpb24sXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcldpdGhBbnRpQWxpYXNpbmcsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBUZXh0dXJlVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3doYWxlLTEwMjQud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS50ZXh0dXJlKVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIG1lc2hdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmYiA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbbWVzaFBhaW50ZXJdLFxcbiAgICAgICAgZGVwdGhCdWZmZXI6IHRydWUsXFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJDaHJvbWF0aWNBYmVycmF0aW9uKHtcXG4gICAgICAgICAgICAgICAgc3RyZW5ndGg6IDEwLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgICAgIHRleHR1cmU6IGZiLnRleHR1cmVDb2xvcjAsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZmIsXFxuICAgICAgICBmaWx0ZXJzLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsYXkpID0+IHtcXG4gICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbGF5ICogTWF0aC5zaW4odGltZSkpXFxuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWxheSAqIDEuMzQxKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmU6IFRleHR1cmVVUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkRmlsdGVyQ2hyb21hdGljQWJlcnJhdGlvbiIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIlRleHR1cmVVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwidGV4dHVyZSIsIm1lc2giLCJtZXNoUGFpbnRlciIsImZiIiwiZmlsdGVycyIsInRpbWUiLCJkZWxheSIsIk1hdGgiLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdUI7QUFDNkI7QUFFRztBQUV2RCxTQUFTWSxLQUFLQyxPQUFtQixFQUFFQyxNQUFj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