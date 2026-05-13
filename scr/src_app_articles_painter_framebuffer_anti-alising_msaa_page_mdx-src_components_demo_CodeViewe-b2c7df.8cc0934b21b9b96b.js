"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_anti-alising_msaa_page_mdx-src_components_demo_CodeViewe-b2c7df"], {
94897(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/uv-grid-3x2.a98602b61cdbb8df.webp";

},
1528(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _msaa_demo__rspack_import_4 = __webpack_require__(12609);
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
    "Detail #1": "    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0, 0, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    mesh.transfo.setEulerRotation(36, 60, 0)\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: true,\n        viewportMatchingScale: 1 / 8,\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                magFilter: \"NEAREST\",\n                minFilter: \"NEAREST\",\n            },\n        }),\n        children: [clear, meshPainter],\n    })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer.textureColor0,\n        filters: [],\n        flipY: true,\n    })\n    const red = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, \"#f00\"))\n    const green = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, \"#0f0\"))\n    const overlay = new TgdPainterOverlay(context, {\n        alignX: +1,\n        alignY: +1,\n        width: 32,\n        height: 32,\n        margin: 8,\n        texture: green,\n    })\n    context.add(framebuffer, filters, overlay)\n    context.paint()\n    overlay.eventTap.addListener(() => {\n        if (framebuffer.antiAliasing) {\n            framebuffer.antiAliasing = false\n            overlay.texture = red\n        } else {\n            framebuffer.antiAliasing = true\n            overlay.texture = green\n        }\n        context.paint()\n    })"
};
var FULL = "import {\n    TgdContext,\n    TgdFilterAntiAliasing,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdGeometryBox,\n    TgdMaterialDiffuse,\n    tgdCanvasCreateFill,\n    TgdPainterOverlay,\n    TgdPainterFramebufferWithAntiAliasing,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\n\nimport GridURL from \"@/assets/image/uv-grid-3x2.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.fitSpaceAtTarget(1.5, 1.5)\n    const clear = new TgdPainterClear(context, {\n        depth: 1,\n        color: [0, 0, 0, 1],\n    })\n    const color = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const mesh = new TgdPainterMesh(context, {\n        geometry: new TgdGeometryBox({ uvs: \"3x2\" }),\n        material: new TgdMaterialDiffuse({\n            color,\n            lockLightsToCamera: true,\n        }),\n    })\n    mesh.transfo.setEulerRotation(36, 60, 0)\n    const meshPainter = new TgdPainterState(context, {\n        depth: \"less\",\n        children: [clear, mesh],\n    })\n    const framebuffer = new TgdPainterFramebuffer(context, {\n        antiAliasing: true,\n        viewportMatchingScale: 1 / 8,\n        textureColor0: new TgdTexture2D(context, {\n            params: {\n                magFilter: \"NEAREST\",\n                minFilter: \"NEAREST\",\n            },\n        }),\n        children: [clear, meshPainter],\n    })\n    const filters = new TgdPainterFilter(context, {\n        texture: framebuffer.textureColor0,\n        filters: [],\n        flipY: true,\n    })\n    const red = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, \"#f00\"))\n    const green = new TgdTexture2D(context).loadBitmap(tgdCanvasCreateFill(1, 1, \"#0f0\"))\n    const overlay = new TgdPainterOverlay(context, {\n        alignX: +1,\n        alignY: +1,\n        width: 32,\n        height: 32,\n        margin: 8,\n        texture: green,\n    })\n    context.add(framebuffer, filters, overlay)\n    context.paint()\n    overlay.eventTap.addListener(() => {\n        if (framebuffer.antiAliasing) {\n            framebuffer.antiAliasing = false\n            overlay.texture = red\n        } else {\n            framebuffer.antiAliasing = true\n            overlay.texture = green\n        }\n        context.paint()\n    })\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            controller={{ inertiaOrbit: 1000 }}\n            assets={{\n                image: { grid: GridURL },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_msaa_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
12609(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_image_uv_grid_3x2_webp__rspack_import_3 = __webpack_require__(94897);




function init(context, assets) {
    // #begin
    context.camera.fitSpaceAtTarget(1.5, 1.5);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
        color: [
            0,
            0,
            0,
            1
        ]
    });
    var color = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.grid);
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox({
            uvs: "3x2"
        }),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: color,
            lockLightsToCamera: true
        })
    });
    mesh.transfo.setEulerRotation(36, 60, 0);
    var meshPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            clear,
            mesh
        ]
    });
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        antiAliasing: true,
        viewportMatchingScale: 1 / 8,
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                magFilter: "NEAREST",
                minFilter: "NEAREST"
            }
        }),
        children: [
            clear,
            meshPainter
        ]
    });
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: framebuffer.textureColor0,
        filters: [],
        flipY: true
    });
    var red = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateFill)(1, 1, "#f00"));
    var green = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateFill)(1, 1, "#0f0"));
    var overlay = new _tolokoban_tgd__rspack_import_1.TgdPainterOverlay(context, {
        alignX: +1,
        alignY: +1,
        width: 32,
        height: 32,
        margin: 8,
        texture: green
    });
    context.add(framebuffer, filters, overlay);
    context.paint();
    overlay.eventTap.addListener(function() {
        if (framebuffer.antiAliasing) {
            framebuffer.antiAliasing = false;
            overlay.texture = red;
        } else {
            framebuffer.antiAliasing = true;
            overlay.texture = green;
        }
        context.paint();
    });
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        controller: {
            inertiaOrbit: 1000
        },
        assets: {
            image: {
                grid: _assets_image_uv_grid_3x2_webp__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/_/msaa.demo/msaa.demo.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}


},
34942(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _msaa_demo__rspack_import_1 = __webpack_require__(1528);
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Anti-aliasing"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Activating anti-aliasing on a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                        lineNumber: 5,
                        columnNumber: 31
                    }, this),
                    " is easy: just set ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "antiAliasing"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                        lineNumber: 5,
                        columnNumber: 73
                    }, this),
                    " attribute to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "true"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                        lineNumber: 5,
                        columnNumber: 101
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Tap the red/green square to switch anti-aliasing."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_msaa_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/anti-alising/msaa/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9hbnRpLWFsaXNpbmdfbXNhYV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1iMmM3ZGYuOGNjMDkzNGIyMWI5Yjk2Yi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2FudGktYWxpc2luZy9tc2FhL18vbXNhYS5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9hbnRpLWFsaXNpbmcvbXNhYS9fL21zYWEuZGVtby9tc2FhLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2FudGktYWxpc2luZy9tc2FhL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tc2FhLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS41LCAxLjUpXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGNvbG9yID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goeyB1dnM6IFxcXCIzeDJcXFwiIH0pLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgIGNvbG9yLFxcbiAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigzNiwgNjAsIDApXFxuICAgIGNvbnN0IG1lc2hQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXFxcImxlc3NcXFwiLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICBhbnRpQWxpYXNpbmc6IHRydWUsXFxuICAgICAgICB2aWV3cG9ydE1hdGNoaW5nU2NhbGU6IDEgLyA4LFxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSksXFxuICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBtZXNoUGFpbnRlcl0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcbiAgICAgICAgZmlsdGVyczogW10sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG4gICAgY29uc3QgcmVkID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZUZpbGwoMSwgMSwgXFxcIiNmMDBcXFwiKSlcXG4gICAgY29uc3QgZ3JlZW4gPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlRmlsbCgxLCAxLCBcXFwiIzBmMFxcXCIpKVxcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcXG4gICAgICAgIGFsaWduWDogKzEsXFxuICAgICAgICBhbGlnblk6ICsxLFxcbiAgICAgICAgd2lkdGg6IDMyLFxcbiAgICAgICAgaGVpZ2h0OiAzMixcXG4gICAgICAgIG1hcmdpbjogOCxcXG4gICAgICAgIHRleHR1cmU6IGdyZWVuLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChmcmFtZWJ1ZmZlciwgZmlsdGVycywgb3ZlcmxheSlcXG4gICAgY29udGV4dC5wYWludCgpXFxuICAgIG92ZXJsYXkuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKCkgPT4ge1xcbiAgICAgICAgaWYgKGZyYW1lYnVmZmVyLmFudGlBbGlhc2luZykge1xcbiAgICAgICAgICAgIGZyYW1lYnVmZmVyLmFudGlBbGlhc2luZyA9IGZhbHNlXFxuICAgICAgICAgICAgb3ZlcmxheS50ZXh0dXJlID0gcmVkXFxuICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgIGZyYW1lYnVmZmVyLmFudGlBbGlhc2luZyA9IHRydWVcXG4gICAgICAgICAgICBvdmVybGF5LnRleHR1cmUgPSBncmVlblxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0pXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RGaWx0ZXJBbnRpQWxpYXNpbmcsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckZpbHRlcixcXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZEdlb21ldHJ5Qm94LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIHRnZENhbnZhc0NyZWF0ZUZpbGwsXFxuICAgIFRnZFBhaW50ZXJPdmVybGF5LFxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcblxcbmltcG9ydCBHcmlkVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3V2LWdyaWQtM3gyLndlYnBcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuNSwgMS41KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICB9KVxcbiAgICBjb25zdCBjb2xvciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZClcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KHsgdXZzOiBcXFwiM3gyXFxcIiB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcixcXG4gICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMzYsIDYwLCAwKVxcbiAgICBjb25zdCBtZXNoUGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIG1lc2hdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgYW50aUFsaWFzaW5nOiB0cnVlLFxcbiAgICAgICAgdmlld3BvcnRNYXRjaGluZ1NjYWxlOiAxIC8gOCxcXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcXFwiTkVBUkVTVFxcXCIsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaFBhaW50ZXJdLFxcbiAgICB9KVxcbiAgICBjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG4gICAgICAgIGZpbHRlcnM6IFtdLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnN0IHJlZCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVGaWxsKDEsIDEsIFxcXCIjZjAwXFxcIikpXFxuICAgIGNvbnN0IGdyZWVuID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKHRnZENhbnZhc0NyZWF0ZUZpbGwoMSwgMSwgXFxcIiMwZjBcXFwiKSlcXG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUZ2RQYWludGVyT3ZlcmxheShjb250ZXh0LCB7XFxuICAgICAgICBhbGlnblg6ICsxLFxcbiAgICAgICAgYWxpZ25ZOiArMSxcXG4gICAgICAgIHdpZHRoOiAzMixcXG4gICAgICAgIGhlaWdodDogMzIsXFxuICAgICAgICBtYXJnaW46IDgsXFxuICAgICAgICB0ZXh0dXJlOiBncmVlbixcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGZpbHRlcnMsIG92ZXJsYXkpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBvdmVybGF5LmV2ZW50VGFwLmFkZExpc3RlbmVyKCgpID0+IHtcXG4gICAgICAgIGlmIChmcmFtZWJ1ZmZlci5hbnRpQWxpYXNpbmcpIHtcXG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5hbnRpQWxpYXNpbmcgPSBmYWxzZVxcbiAgICAgICAgICAgIG92ZXJsYXkudGV4dHVyZSA9IHJlZFxcbiAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICBmcmFtZWJ1ZmZlci5hbnRpQWxpYXNpbmcgPSB0cnVlXFxuICAgICAgICAgICAgb3ZlcmxheS50ZXh0dXJlID0gZ3JlZW5cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9KVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuICAgICAgICAgICAgYXNzZXRzPXt7XFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGdyaWQ6IEdyaWRVUkwgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckFudGlBbGlhc2luZyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgdGdkQ2FudmFzQ3JlYXRlRmlsbCxcbiAgICBUZ2RQYWludGVyT3ZlcmxheSxcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS91di1ncmlkLTN4Mi53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMS41LCAxLjUpXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgfSlcbiAgICBjb25zdCBjb2xvciA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZClcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7IHV2czogXCIzeDJcIiB9KSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMzYsIDYwLCAwKVxuICAgIGNvbnN0IG1lc2hQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgbWVzaF0sXG4gICAgfSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICBhbnRpQWxpYXNpbmc6IHRydWUsXG4gICAgICAgIHZpZXdwb3J0TWF0Y2hpbmdTY2FsZTogMSAvIDgsXG4gICAgICAgIHRleHR1cmVDb2xvcjA6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTkVBUkVTVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIG1lc2hQYWludGVyXSxcbiAgICB9KVxuICAgIGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG4gICAgICAgIGZpbHRlcnM6IFtdLFxuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHJlZCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVGaWxsKDEsIDEsIFwiI2YwMFwiKSlcbiAgICBjb25zdCBncmVlbiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVGaWxsKDEsIDEsIFwiIzBmMFwiKSlcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRnZFBhaW50ZXJPdmVybGF5KGNvbnRleHQsIHtcbiAgICAgICAgYWxpZ25YOiArMSxcbiAgICAgICAgYWxpZ25ZOiArMSxcbiAgICAgICAgd2lkdGg6IDMyLFxuICAgICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICBtYXJnaW46IDgsXG4gICAgICAgIHRleHR1cmU6IGdyZWVuLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGZpbHRlcnMsIG92ZXJsYXkpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgb3ZlcmxheS5ldmVudFRhcC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgIGlmIChmcmFtZWJ1ZmZlci5hbnRpQWxpYXNpbmcpIHtcbiAgICAgICAgICAgIGZyYW1lYnVmZmVyLmFudGlBbGlhc2luZyA9IGZhbHNlXG4gICAgICAgICAgICBvdmVybGF5LnRleHR1cmUgPSByZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyYW1lYnVmZmVyLmFudGlBbGlhc2luZyA9IHRydWVcbiAgICAgICAgICAgIG92ZXJsYXkudGV4dHVyZSA9IGdyZWVuXG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfSlcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZ3JpZDogR3JpZFVSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwidGdkQ2FudmFzQ3JlYXRlRmlsbCIsIlRnZFBhaW50ZXJPdmVybGF5IiwiVmlldyIsIkdyaWRVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImNsZWFyIiwiY29sb3IiLCJtZXNoIiwibWVzaFBh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