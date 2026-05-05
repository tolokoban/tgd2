"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_x-ray_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components-d3fd6a"], {
48522(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/brain.ac181199172af1fc.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/_x-ray/x-ray.demo.tsx",
        lineNumber: 61,
        columnNumber: 9
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
/* import */ var _x_ray_x_ray_demo__rspack_import_1 = __webpack_require__(87533);
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray_x_ray_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl94LXJheV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50cy1kM2ZkNmEuNmFjY2MyMDg5MTY1ZDhkZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci94LXJheS9feC1yYXkveC1yYXkuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZEdlb21ldHJ5R2x0ZixcbiAgICBUZ2RQYWludGVyWFJheSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJyYWluVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2JyYWluLmdsYlwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBicmFpbiA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDEsIDFdLFxuICAgICAgICBleHBvbmVudDogMS4yLFxuICAgICAgICBpbnRlbnNpdHk6IDQsXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHsgZGF0YTogYXNzZXRzLmdsYi5icmFpbiB9KSxcbiAgICB9KVxuICAgIGNvbnN0IHN1emFubmUgPSBuZXcgVGdkUGFpbnRlclhSYXkoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzEsIDAuMzMzLCAwLjEsIDFdLFxuICAgICAgICBleHBvbmVudDogNSxcbiAgICAgICAgaW50ZW5zaXR5OiAyMCxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdsdGYoe1xuICAgICAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zdXphbm5lLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbYnJhaW4sIHN1emFubmVdLFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMjAwMCxcbiAgICB9KVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gKHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cG9uZW50MSA9IHVuaWZvcm1zLmV4cG9uZW50MSA/PyAxLjJcbiAgICAgICAgY29uc3QgaW50ZW5zaXR5MSA9IHVuaWZvcm1zLmludGVuc2l0eTEgPz8gNFxuICAgICAgICBicmFpbi5leHBvbmVudCA9IGV4cG9uZW50MVxuICAgICAgICBicmFpbi5pbnRlbnNpdHkgPSBpbnRlbnNpdHkxXG4gICAgICAgIGNvbnN0IGV4cG9uZW50MiA9IHVuaWZvcm1zLmV4cG9uZW50MiA/PyA1XG4gICAgICAgIGNvbnN0IGludGVuc2l0eTIgPSB1bmlmb3Jtcy5pbnRlbnNpdHkyID8/IDIwXG4gICAgICAgIHN1emFubmUuZXhwb25lbnQgPSBleHBvbmVudDJcbiAgICAgICAgc3V6YW5uZS5pbnRlbnNpdHkgPSBpbnRlbnNpdHkyXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBicmFpbjogQnJhaW5VUkwsXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIGV4cG9uZW50MToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJleHBvbmVudCAoYnJhaW4pXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLjIsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5MToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJpbnRlbnRpdHkgKGJyYWluKVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwb25lbnQyOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImV4cG9uZW50IChtb25rZXkpXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0yMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVuc2l0eTI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiaW50ZW50aXR5IChtb25rZXkpXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkR2VvbWV0cnlHbHRmIiwiVGdkUGFpbnRlclhSYXkiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJyYWluVVJMIiwiU3V6YW5uZVVSTCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiY2xlYXIiLCJicmFpbiIsInN1emFubmUiLCJzdGF0ZSIsInVuaWZvcm1zIiwiX3VuaWZvcm1zX2V4cG9uZW50MSIsIl91bmlmb3Jtc19pbnRlbnNpdHkxIiwiX3VuaWZvcm1zX2V4cG9uZW50MiIsIl91bmlmb3Jtc19pbnRlbnNpdHkyIiwiZXhwb25lbnQxIiwiaW50ZW5zaXR5MSIsImV4cG9uZW50MiIsImludGVuc2l0eTIiLCJEZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdUI7QUFDNkI7QUFFTjtBQUNJO0FBRWxELFNBQVNTLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDN0MsNEJBQTRCO0lBQzVCLElBQU1DLFFBQVEsSUFBSVQsK0NBQWVBLENBQUNPLFNBQVM7UUFDdkMsT0FBTztZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7UUFDbkIsT0FBTztJQUNYO0lBQ0EsSUFBTUcsUUFBUSxJ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