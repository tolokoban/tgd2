"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_x-ray_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css--6e56b8"], {
48522(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/brain.ac181199172af1fc.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
21935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _x_ray_demo__rspack_import_4 = __webpack_require__(87533);
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
    "Initializing WebGL": "    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        color: [0.1, 0.2, 1, 1],\n        exponent: 1.2,\n        intensity: 4,\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.333, 0.1, 1],\n        exponent: 5,\n        intensity: 20,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })"
};
var FULL = 'import {\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdGeometryGltf,\n    TgdPainterXRay,\n    TgdPainterClear,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BrainURL from "@/assets/mesh/brain.glb"\nimport SuzanneURL from "@/assets/mesh/suzanne.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n    const clear = new TgdPainterClear(context, {\n        color: [0, 0, 0, 1],\n        depth: 1,\n    })\n    const brain = new TgdPainterXRay(context, {\n        color: [0.1, 0.2, 1, 1],\n        exponent: 1.2,\n        intensity: 4,\n        geometry: new TgdGeometryGltf({ data: assets.glb.brain }),\n    })\n    const suzanne = new TgdPainterXRay(context, {\n        color: [1, 0.333, 0.1, 1],\n        exponent: 5,\n        intensity: 20,\n        geometry: new TgdGeometryGltf({\n            data: assets.glb.suzanne,\n        }),\n    })\n    const state = new TgdPainterState(context, {\n        children: [brain, suzanne],\n        depth: webglPresetDepth.less,\n    })\n    context.add(clear, state)\n    context.paint()\n    context.camera.transfo.distance = 5\n    new TgdControllerCameraOrbit(context, {\n        inertiaOrbit: 2000,\n    })\n    return (uniforms: Record<string, number>) => {\n        const exponent1 = uniforms.exponent1 ?? 1.2\n        const intensity1 = uniforms.intensity1 ?? 4\n        brain.exponent = exponent1\n        brain.intensity = intensity1\n        const exponent2 = uniforms.exponent2 ?? 5\n        const intensity2 = uniforms.intensity2 ?? 20\n        suzanne.exponent = exponent2\n        suzanne.intensity = intensity2\n        context.paint()\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    brain: BrainURL,\n                    suzanne: SuzanneURL,\n                },\n            }}\n            settings={{\n                exponent1: {\n                    label: "exponent (brain)",\n                    value: 1.2,\n                    min: -20,\n                    max: 20,\n                },\n                intensity1: {\n                    label: "intentity (brain)",\n                    value: 4,\n                    min: 0,\n                    max: 20,\n                },\n                exponent2: {\n                    label: "exponent (monkey)",\n                    value: 5,\n                    min: -20,\n                    max: 20,\n                },\n                intensity2: {\n                    label: "intentity (monkey)",\n                    value: 20,\n                    min: 0,\n                    max: 20,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
87533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_brain_glb__rspack_import_3 = __webpack_require__(48522);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(context, assets) {
    // #begin Initializing WebGL
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    var brain = new _tolokoban_tgd__rspack_import_1.TgdPainterXRay(context, {
        color: [
            0.1,
            0.2,
            1,
            1
        ],
        exponent: 1.2,
        intensity: 4,
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryGltf({
            data: assets.glb.brain
        })
    });
    var suzanne = new _tolokoban_tgd__rspack_import_1.TgdPainterXRay(context, {
        color: [
            1,
            0.333,
            0.1,
            1
        ],
        exponent: 5,
        intensity: 20,
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryGltf({
            data: assets.glb.suzanne
        })
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [
            brain,
            suzanne
        ],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    context.add(clear, state);
    context.paint();
    context.camera.transfo.distance = 5;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 2000
    });
    // #end
    return function(uniforms) {
        var _uniforms_exponent1, _uniforms_intensity1, _uniforms_exponent2, _uniforms_intensity2;
        var exponent1 = (_uniforms_exponent1 = uniforms.exponent1) !== null && _uniforms_exponent1 !== void 0 ? _uniforms_exponent1 : 1.2;
        var intensity1 = (_uniforms_intensity1 = uniforms.intensity1) !== null && _uniforms_intensity1 !== void 0 ? _uniforms_intensity1 : 4;
        brain.exponent = exponent1;
        brain.intensity = intensity1;
        var exponent2 = (_uniforms_exponent2 = uniforms.exponent2) !== null && _uniforms_exponent2 !== void 0 ? _uniforms_exponent2 : 5;
        var intensity2 = (_uniforms_intensity2 = uniforms.intensity2) !== null && _uniforms_intensity2 !== void 0 ? _uniforms_intensity2 : 20;
        suzanne.exponent = exponent2;
        suzanne.intensity = intensity2;
        context.paint();
    };
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        assets: {
            glb: {
                brain: _assets_mesh_brain_glb__rspack_import_3,
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4
            }
        },
        settings: {
            exponent1: {
                label: "exponent (brain)",
                value: 1.2,
                min: -20,
                max: 20
            },
            intensity1: {
                label: "intentity (brain)",
                value: 4,
                min: 0,
                max: 20
            },
            exponent2: {
                label: "exponent (monkey)",
                value: 5,
                min: -20,
                max: 20
            },
            intensity2: {
                label: "intentity (monkey)",
                value: 20,
                min: 0,
                max: 20
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/x-ray.demo.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}


},
63330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _x_ray__rspack_import_1 = __webpack_require__(21935);
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
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterXRay.html",
                    children: "TgdPainterXRay"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl94LXJheV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bGVfY3NzLS02ZTU2YjguYTEyYmNhODZlYjExMDYxNy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L194LXJheS9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIveC1yYXkvX3gtcmF5L3gtcmF5LmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi94LXJheS5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkluaXRpYWxpemluZyBXZWJHTFwiOlxuXHRcdFwiICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJyYWluID0gbmV3IFRnZFBhaW50ZXJYUmF5KGNvbnRleHQsIHtcXG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDEsIDFdLFxcbiAgICAgICAgZXhwb25lbnQ6IDEuMixcXG4gICAgICAgIGludGVuc2l0eTogNCxcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHsgZGF0YTogYXNzZXRzLmdsYi5icmFpbiB9KSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzEsIDAuMzMzLCAwLjEsIDFdLFxcbiAgICAgICAgZXhwb25lbnQ6IDUsXFxuICAgICAgICBpbnRlbnNpdHk6IDIwLFxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdsdGYoe1xcbiAgICAgICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuc3V6YW5uZSxcXG4gICAgICAgIH0pLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgY2hpbGRyZW46IFticmFpbiwgc3V6YW5uZV0sXFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gNVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMjAwMCxcXG4gICAgfSlcIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RHZW9tZXRyeUdsdGYsXFxuICAgIFRnZFBhaW50ZXJYUmF5LFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgQnJhaW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvYnJhaW4uZ2xiXCJcXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgIGRlcHRoOiAxLFxcbiAgICB9KVxcbiAgICBjb25zdCBicmFpbiA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAxLCAxXSxcXG4gICAgICAgIGV4cG9uZW50OiAxLjIsXFxuICAgICAgICBpbnRlbnNpdHk6IDQsXFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5R2x0Zih7IGRhdGE6IGFzc2V0cy5nbGIuYnJhaW4gfSksXFxuICAgIH0pXFxuICAgIGNvbnN0IHN1emFubmUgPSBuZXcgVGdkUGFpbnRlclhSYXkoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IFsxLCAwLjMzMywgMC4xLCAxXSxcXG4gICAgICAgIGV4cG9uZW50OiA1LFxcbiAgICAgICAgaW50ZW5zaXR5OiAyMCxcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHtcXG4gICAgICAgICAgICBkYXRhOiBhc3NldHMuZ2xiLnN1emFubmUsXFxuICAgICAgICB9KSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGNoaWxkcmVuOiBbYnJhaW4sIHN1emFubmVdLFxcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICBjb250ZXh0LnBhaW50KClcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDIwMDAsXFxuICAgIH0pXFxuICAgIHJldHVybiAodW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcXG4gICAgICAgIGNvbnN0IGV4cG9uZW50MSA9IHVuaWZvcm1zLmV4cG9uZW50MSA/PyAxLjJcXG4gICAgICAgIGNvbnN0IGludGVuc2l0eTEgPSB1bmlmb3Jtcy5pbnRlbnNpdHkxID8/IDRcXG4gICAgICAgIGJyYWluLmV4cG9uZW50ID0gZXhwb25lbnQxXFxuICAgICAgICBicmFpbi5pbnRlbnNpdHkgPSBpbnRlbnNpdHkxXFxuICAgICAgICBjb25zdCBleHBvbmVudDIgPSB1bmlmb3Jtcy5leHBvbmVudDIgPz8gNVxcbiAgICAgICAgY29uc3QgaW50ZW5zaXR5MiA9IHVuaWZvcm1zLmludGVuc2l0eTIgPz8gMjBcXG4gICAgICAgIHN1emFubmUuZXhwb25lbnQgPSBleHBvbmVudDJcXG4gICAgICAgIHN1emFubmUuaW50ZW5zaXR5ID0gaW50ZW5zaXR5MlxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBicmFpbjogQnJhaW5VUkwsXFxuICAgICAgICAgICAgICAgICAgICBzdXphbm5lOiBTdXphbm5lVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgc2V0dGluZ3M9e3tcXG4gICAgICAgICAgICAgICAgZXhwb25lbnQxOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJleHBvbmVudCAoYnJhaW4pXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMS4yLFxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMjAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHkxOiB7XFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJpbnRlbnRpdHkgKGJyYWluKVwiLFxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDQsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBleHBvbmVudDI6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImV4cG9uZW50IChtb25rZXkpXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNSxcXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyMCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5Mjoge1xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiaW50ZW50aXR5IChtb25rZXkpXCIsXFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjAsXFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZEdlb21ldHJ5R2x0Zixcblx0VGdkUGFpbnRlclhSYXksXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5pbXBvcnQgQnJhaW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvYnJhaW4uZ2xiXCI7XG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRjb2xvcjogWzAsIDAsIDAsIDFdLFxuXHRcdGRlcHRoOiAxLFxuXHR9KTtcblx0Y29uc3QgYnJhaW4gPSBuZXcgVGdkUGFpbnRlclhSYXkoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMC4xLCAwLjIsIDEsIDFdLFxuXHRcdGV4cG9uZW50OiAxLjIsXG5cdFx0aW50ZW5zaXR5OiA0LFxuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHsgZGF0YTogYXNzZXRzLmdsYi5icmFpbiB9KSxcblx0fSk7XG5cdGNvbnN0IHN1emFubmUgPSBuZXcgVGdkUGFpbnRlclhSYXkoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMSwgMC4zMzMsIDAuMSwgMV0sXG5cdFx0ZXhwb25lbnQ6IDUsXG5cdFx0aW50ZW5zaXR5OiAyMCxcblx0XHRnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5R2x0Zih7XG5cdFx0XHRkYXRhOiBhc3NldHMuZ2xiLnN1emFubmUsXG5cdFx0fSksXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbYnJhaW4sIHN1emFubmVdLFxuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRjb250ZXh0LnBhaW50KCk7XG5cdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1O1xuXHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDIwMDAsXG5cdH0pO1xuXHQvLyAjZW5kXG5cdHJldHVybiAodW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcblx0XHRjb25zdCBleHBvbmVudDEgPSB1bmlmb3Jtcy5leHBvbmVudDEgPz8gMS4yO1xuXHRcdGNvbnN0IGludGVuc2l0eTEgPSB1bmlmb3Jtcy5pbnRlbnNpdHkxID8/IDQ7XG5cdFx0YnJhaW4uZXhwb25lbnQgPSBleHBvbmVudDE7XG5cdFx0YnJhaW4uaW50ZW5zaXR5ID0gaW50ZW5zaXR5MTtcblx0XHRjb25zdCBleHBvbmVudDIgPSB1bmlmb3Jtcy5leHBvbmVudDIgPz8gNTtcblx0XHRjb25zdCBpbnRlbnNpdHkyID0gdW5pZm9ybXMuaW50ZW5zaXR5MiA/PyAyMDtcblx0XHRzdXphbm5lLmV4cG9uZW50ID0gZXhwb25lbnQyO1xuXHRcdHN1emFubmUuaW50ZW5zaXR5ID0gaW50ZW5zaXR5Mjtcblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0Z2xiOiB7XG5cdFx0XHRcdFx0YnJhaW46IEJyYWluVVJMLFxuXHRcdFx0XHRcdHN1emFubmU6IFN1emFubmVVUkwsXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdFx0c2V0dGluZ3M9e3tcblx0XHRcdFx0ZXhwb25lbnQxOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiZXhwb25lbnQgKGJyYWluKVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAxLjIsXG5cdFx0XHRcdFx0bWluOiAtMjAsXG5cdFx0XHRcdFx0bWF4OiAyMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW50ZW5zaXR5MToge1xuXHRcdFx0XHRcdGxhYmVsOiBcImludGVudGl0eSAoYnJhaW4pXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDQsXG5cdFx0XHRcdFx0bWluOiAwLFxuXHRcdFx0XHRcdG1heDogMjAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV4cG9uZW50Mjoge1xuXHRcdFx0XHRcdGxhYmVsOiBcImV4cG9uZW50IChtb25rZXkpXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDUsXG5cdFx0XHRcdFx0bWluOiAtMjAsXG5cdFx0XHRcdFx0bWF4OiAyMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0aW50ZW5zaXR5Mjoge1xuXHRcdFx0XHRcdGxhYmVsOiBcImludGVudGl0eSAobW9ua2V5KVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAyMCxcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiAyMCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlHbHRmIiwiVGdkUGFpbnRlclhSYXkiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJyYWluVVJMIiwiU3V6YW5uZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJicmFpbiIsInN1emFubmUiLCJzdGF0ZSIsInVuaWZvcm1zIiwiX3VuaWZvcm1zX2V4cG9uZW50MSIsIl91bmlmb3Jtc19pbnRlbnNpdHkxIiwiX3VuaWZvcm1zX2V4cG9uZW50MiIsIl91bmlmb3Jtc19pbnRlbnNpdHkyIiwiZXhwb25lbnQxIiwiaW50ZW5zaXR5MSIsImV4cG9uZW50MiIsImludGVuc2l0eTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDeUI7QUFDaUI7QUFDVztBQUN0QjtBQUVoQyxJQUFNSSxRQUFRO0lBQ2Isc0JBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0M7OzBCQUNDLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ2QsZ0VBQUNKLHVDQUFJQTs7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