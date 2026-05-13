"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_utils_loaders_tgdLoadImageFromElement_page_mdx-src_components_demo_CodeViewe-bea2ed"], {
98409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(context) {
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: {
            distance: 1.2,
            position: [
                0,
                0,
                0
            ]
        },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: [
                    0.3,
                    0.2,
                    0.1,
                    1
                ],
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
                mesh.transfo.orbitAroundX(delta * 0.573);
                mesh.transfo.orbitAroundY(delta * 0.741);
            })
        ]
    });
    context.add(state);
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox();
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: texture
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
    state.add(mesh);
    context.play();
    // #begin Loading element into texture
    var loadImage = function loadImage1() {
        var elem = document.body.querySelector("details > div > pre");
        if (!elem || elem.scrollWidth < 1) {
            setTimeout(loadImage, 500);
            return;
        }
        console.log(elem.innerHTML);
        (0,_tolokoban_tgd__rspack_import_1.tgdLoadCanvasFromElement)(elem).then(function(img) {
            document.body.appendChild(img);
            texture.loadBitmap(img);
        });
    };
    loadImage();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/element.demo.tsx",
        lineNumber: 71,
        columnNumber: 12
    }, this);
}


},
5336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _element_demo__rspack_import_4 = __webpack_require__(98409);
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
    "Loading element into texture": "    const loadImage = () => {\n        const elem = document.body.querySelector(\"details > div > pre\")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()"
};
var FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdGeometryBox,\n    tgdLoadCanvasFromElement,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    context.camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 1.2,\n            position: [0, 0, 0],\n        },\n        far: 100,\n        near: 0.1,\n        fovy: Math.PI / 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n\n    const loadImage = () => {\n        const elem = document.body.querySelector(\"details > div > pre\")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
78146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _element__rspack_import_1 = __webpack_require__(5336);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Create an image from a DOM element"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdXRpbHNfbG9hZGVyc190Z2RMb2FkSW1hZ2VGcm9tRWxlbWVudF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1iZWEyZWQuZjNkZjY5Y2VlNzJkMmNkOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRJbWFnZUZyb21FbGVtZW50L19lbGVtZW50L2VsZW1lbnQuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3V0aWxzL2xvYWRlcnMvdGdkTG9hZEltYWdlRnJvbUVsZW1lbnQvX2VsZW1lbnQvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRJbWFnZUZyb21FbGVtZW50L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICB0Z2RMb2FkQ2FudmFzRnJvbUVsZW1lbnQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiAxLjIsXG4gICAgICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDBdLFxuICAgICAgICB9LFxuICAgICAgICBmYXI6IDEwMCxcbiAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC41NzMpXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuNzQxKVxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChzdGF0ZSlcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5Qm94KClcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICBjb2xvcjogdGV4dHVyZSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgbWF0ZXJpYWwsXG4gICAgfSlcbiAgICBzdGF0ZS5hZGQobWVzaClcbiAgICBjb250ZXh0LnBsYXkoKVxuXG4gICAgLy8gI2JlZ2luIExvYWRpbmcgZWxlbWVudCBpbnRvIHRleHR1cmVcbiAgICBjb25zdCBsb2FkSW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJkZXRhaWxzID4gZGl2ID4gcHJlXCIpXG4gICAgICAgIGlmICghZWxlbSB8fCBlbGVtLnNjcm9sbFdpZHRoIDwgMSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkSW1hZ2UsIDUwMClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJIVE1MKVxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbUVsZW1lbnQoZWxlbSkudGhlbigoaW1nKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChpbWcpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxvYWRJbWFnZSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2VsZW1lbnQuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiTG9hZGluZyBlbGVtZW50IGludG8gdGV4dHVyZVwiOlwiICAgIGNvbnN0IGxvYWRJbWFnZSA9ICgpID0+IHtcXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXFxcImRldGFpbHMgPiBkaXYgPiBwcmVcXFwiKVxcbiAgICAgICAgaWYgKCFlbGVtIHx8IGVsZW0uc2Nyb2xsV2lkdGggPCAxKSB7XFxuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkSW1hZ2UsIDUwMClcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJIVE1MKVxcbiAgICAgICAgdGdkTG9hZENhbnZhc0Zyb21FbGVtZW50KGVsZW0pLnRoZW4oKGltZykgPT4ge1xcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxcbiAgICAgICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChpbWcpXFxuICAgICAgICB9KVxcbiAgICB9XFxuICAgIGxvYWRJbWFnZSgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIHRnZExvYWRDYW52YXNGcm9tRWxlbWVudCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogMS4yLFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgMF0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZmFyOiAxMDAsXFxuICAgICAgICBuZWFyOiAwLjEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNTczKVxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhICogMC43NDEpXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChzdGF0ZSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goKVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgc3RhdGUuYWRkKG1lc2gpXFxuICAgIGNvbnRleHQucGxheSgpXFxuXFxuICAgIGNvbnN0IGxvYWRJbWFnZSA9ICgpID0+IHtcXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXFxcImRldGFpbHMgPiBkaXYgPiBwcmVcXFwiKVxcbiAgICAgICAgaWYgKCFlbGVtIHx8IGVsZW0uc2Nyb2xsV2lkdGggPCAxKSB7XFxuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkSW1hZ2UsIDUwMClcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJIVE1MKVxcbiAgICAgICAgdGdkTG9hZENhbnZhc0Zyb21FbGVtZW50KGVsZW0pLnRoZW4oKGltZykgPT4ge1xcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxcbiAgICAgICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChpbWcpXFxuICAgICAgICB9KVxcbiAgICB9XFxuICAgIGxvYWRJbWFnZSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZEdlb21ldHJ5Qm94IiwidGdkTG9hZENhbnZhc0Zyb21FbGVtZW50IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiTWF0aCIsInN0YXRlIiwidGltZSIsImRlbHRhIiwibWVzaCIsInRleHR1cmUiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwibG9hZEltYWdlIiwiZWxlbSIsImRvY3VtZW50Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJpbWciLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYXVCO0FBQ2lCO0FBRXhDLFNBQVNXLEtBQUtDLE9BQW1CO0lBQzdCQSxRQUFRLE1BQU0sR0FBRyxJQUFJWixvREFBb0JBLENBQUM7UUFDdEMsU0FBUztZQUNMLFVBQVU7WUFDVixVQUFVO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7UUFDdkI7UUFDQSxLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU1hLEtBQUssRUFBRSxHQUFHO0lBQ3BCO0lBQ0EsSUFBTUMsUUFBUSxJQUFJUCwrQ0FBZUEsQ0FBQ0ssU0FBUztRQUN2QyxP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