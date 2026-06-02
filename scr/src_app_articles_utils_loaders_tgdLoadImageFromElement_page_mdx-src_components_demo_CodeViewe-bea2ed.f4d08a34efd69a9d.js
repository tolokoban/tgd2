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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/element.demo.tsx",
        lineNumber: 71,
        columnNumber: 9
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
    "Loading element into texture": '    const loadImage = () => {\n        const elem = document.body.querySelector("details > div > pre")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()'
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdGeometryBox,\n    tgdLoadCanvasFromElement,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View from "@/components/demo/Tgd"\n\nfunction init(context: TgdContext) {\n    context.camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 1.2,\n            position: [0, 0, 0],\n        },\n        far: 100,\n        near: 0.1,\n        fovy: Math.PI / 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n\n    const loadImage = () => {\n        const elem = document.body.querySelector("details > div > pre")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdXRpbHNfbG9hZGVyc190Z2RMb2FkSW1hZ2VGcm9tRWxlbWVudF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1iZWEyZWQuZjRkMDhhMzRlZmQ2OWE5ZC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdXRpbHMvbG9hZGVycy90Z2RMb2FkSW1hZ2VGcm9tRWxlbWVudC9fZWxlbWVudC9lbGVtZW50LmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdXRpbHMvbG9hZGVycy90Z2RMb2FkSW1hZ2VGcm9tRWxlbWVudC9fZWxlbWVudC9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRJbWFnZUZyb21FbGVtZW50L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RHZW9tZXRyeUJveCxcblx0dGdkTG9hZENhbnZhc0Zyb21FbGVtZW50LFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZE1hdGVyaWFsTm9ybWFscyxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG5cdFx0dHJhbnNmbzoge1xuXHRcdFx0ZGlzdGFuY2U6IDEuMixcblx0XHRcdHBvc2l0aW9uOiBbMCwgMCwgMF0sXG5cdFx0fSxcblx0XHRmYXI6IDEwMCxcblx0XHRuZWFyOiAwLjEsXG5cdFx0Zm92eTogTWF0aC5QSSAvIDQsXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdFx0Y29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcblx0XHRcdFx0ZGVwdGg6IDEsXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG5cdFx0XHRcdG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjU3Myk7XG5cdFx0XHRcdG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjc0MSk7XG5cdFx0XHR9KSxcblx0XHRdLFxuXHR9KTtcblx0Y29udGV4dC5hZGQoc3RhdGUpO1xuXHRjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KTtcblx0Y29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goKTtcblx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRjb2xvcjogdGV4dHVyZSxcblx0fSk7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdGdlb21ldHJ5LFxuXHRcdG1hdGVyaWFsLFxuXHR9KTtcblx0c3RhdGUuYWRkKG1lc2gpO1xuXHRjb250ZXh0LnBsYXkoKTtcblxuXHQvLyAjYmVnaW4gTG9hZGluZyBlbGVtZW50IGludG8gdGV4dHVyZVxuXHRjb25zdCBsb2FkSW1hZ2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcImRldGFpbHMgPiBkaXYgPiBwcmVcIik7XG5cdFx0aWYgKCFlbGVtIHx8IGVsZW0uc2Nyb2xsV2lkdGggPCAxKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGxvYWRJbWFnZSwgNTAwKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc29sZS5sb2coZWxlbS5pbm5lckhUTUwpO1xuXHRcdHRnZExvYWRDYW52YXNGcm9tRWxlbWVudChlbGVtKS50aGVuKChpbWcpID0+IHtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0XHRcdHRleHR1cmUubG9hZEJpdG1hcChpbWcpO1xuXHRcdH0pO1xuXHR9O1xuXHRsb2FkSW1hZ2UoKTtcblx0Ly8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gLz47XG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vZWxlbWVudC5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkxvYWRpbmcgZWxlbWVudCBpbnRvIHRleHR1cmVcIjpcblx0XHQnICAgIGNvbnN0IGxvYWRJbWFnZSA9ICgpID0+IHtcXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJkZXRhaWxzID4gZGl2ID4gcHJlXCIpXFxuICAgICAgICBpZiAoIWVsZW0gfHwgZWxlbS5zY3JvbGxXaWR0aCA8IDEpIHtcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRJbWFnZSwgNTAwKVxcbiAgICAgICAgICAgIHJldHVyblxcbiAgICAgICAgfVxcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS5pbm5lckhUTUwpXFxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbUVsZW1lbnQoZWxlbSkudGhlbigoaW1nKSA9PiB7XFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXFxuICAgICAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGltZylcXG4gICAgICAgIH0pXFxuICAgIH1cXG4gICAgbG9hZEltYWdlKCknLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlCb3gsXFxuICAgIHRnZExvYWRDYW52YXNGcm9tRWxlbWVudCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbE5vcm1hbHMsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7XFxuICAgICAgICAgICAgZGlzdGFuY2U6IDEuMixcXG4gICAgICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDBdLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZhcjogMTAwLFxcbiAgICAgICAgbmVhcjogMC4xLFxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDQsXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzT3JFcXVhbCxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjIsIDAuMSwgMV0sXFxuICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XFxuICAgICAgICAgICAgICAgIG1lc2gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjU3MylcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuNzQxKVxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoc3RhdGUpXFxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRnZEdlb21ldHJ5Qm94KClcXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgIGNvbG9yOiB0ZXh0dXJlLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgIH0pXFxuICAgIHN0YXRlLmFkZChtZXNoKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcblxcbiAgICBjb25zdCBsb2FkSW1hZ2UgPSAoKSA9PiB7XFxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiZGV0YWlscyA+IGRpdiA+IHByZVwiKVxcbiAgICAgICAgaWYgKCFlbGVtIHx8IGVsZW0uc2Nyb2xsV2lkdGggPCAxKSB7XFxuICAgICAgICAgICAgc2V0VGltZW91dChsb2FkSW1hZ2UsIDUwMClcXG4gICAgICAgICAgICByZXR1cm5cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0uaW5uZXJIVE1MKVxcbiAgICAgICAgdGdkTG9hZENhbnZhc0Zyb21FbGVtZW50KGVsZW0pLnRoZW4oKGltZykgPT4ge1xcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxcbiAgICAgICAgICAgIHRleHR1cmUubG9hZEJpdG1hcChpbWcpXFxuICAgICAgICB9KVxcbiAgICB9XFxuICAgIGxvYWRJbWFnZSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPlxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RHZW9tZXRyeUJveCIsInRnZExvYWRDYW52YXNGcm9tRWxlbWVudCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJMb2dpYyIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJpbml0IiwiY29udGV4dCIsIk1hdGgiLCJzdGF0ZSIsInRpbWUiLCJkZWx0YSIsIm1lc2giLCJ0ZXh0dXJlIiwiZ2VvbWV0cnkiLCJtYXRlcmlhbCIsImxvYWRJbWFnZSIsImVsZW0iLCJkb2N1bWVudCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwiaW1nIiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQWF3QjtBQUNpQjtBQUV6QyxTQUFTVyxLQUFLQyxPQUFtQjtJQUNoQ0EsUUFBUSxNQUFNLEdBQUcsSUFBSVosb0RBQW9CQSxDQUFDO1FBQ3pDLFNBQVM7WUFDUixVQUFVO1lBQ1YsVUFBVTtnQkFBQztnQkFBRztnQkFBRzthQUFFO1FBQ3BCO1FBQ0EsS0FBSztRQUNMLE1BQU07UUFDTixNQUFNYSxLQUFLLEVBQUUsR0FBRztJQUNqQjtJQUNBLElBQU1DLFFBQVEsSUFBSVAsK0NBQWVBLENBQUNLLFNBQVM7UUFDMUMsT0FBT0gsNERBQTRCO1FBQ25DLFVBQVU7WUFDVCxJQUFJTCwrQ0FBZUEsQ0FBQ1EsU0FBUztnQkFDNUIsT0FBTztvQkFBQztvQkFBSztvQkFBSztvQkFBSztpQkFBRTtnQkFDekIsT0FBTztZQUNSO1lBQ0EsSUFBSVAsK0NBQWVBLENBQUMsU0FBQ1UsTUFBTUM7Z0JBQzFCQyxLQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUNELFFBQVE7Z0JBQ2xD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