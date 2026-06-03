"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_x-ray_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components-f82c07"], {
48522(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/brain.ac181199172af1fc.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

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
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray_x_ray_demo__rspack_import_1["default"], {}, undefined, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl94LXJheV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50cy1mODJjMDcuMTkxYTM5YTU5NWQ3YzZlOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L194LXJheS94LXJheS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci94LXJheS9wYWdlLm1keCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkR2VvbWV0cnlHbHRmLFxuXHRUZ2RQYWludGVyWFJheSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBCcmFpblVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9icmFpbi5nbGJcIjtcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Ly8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdGNvbG9yOiBbMCwgMCwgMCwgMV0sXG5cdFx0ZGVwdGg6IDEsXG5cdH0pO1xuXHRjb25zdCBicmFpbiA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFswLjEsIDAuMiwgMSwgMV0sXG5cdFx0ZXhwb25lbnQ6IDEuMixcblx0XHRpbnRlbnNpdHk6IDQsXG5cdFx0Z2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdsdGYoeyBkYXRhOiBhc3NldHMuZ2xiLmJyYWluIH0pLFxuXHR9KTtcblx0Y29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XG5cdFx0Y29sb3I6IFsxLCAwLjMzMywgMC4xLCAxXSxcblx0XHRleHBvbmVudDogNSxcblx0XHRpbnRlbnNpdHk6IDIwLFxuXHRcdGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHtcblx0XHRcdGRhdGE6IGFzc2V0cy5nbGIuc3V6YW5uZSxcblx0XHR9KSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFticmFpbiwgc3V6YW5uZV0sXG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdGNvbnRleHQucGFpbnQoKTtcblx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDU7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuXHRcdGluZXJ0aWFPcmJpdDogMjAwMCxcblx0fSk7XG5cdC8vICNlbmRcblx0cmV0dXJuICh1bmlmb3JtczogUmVjb3JkPHN0cmluZywgbnVtYmVyPikgPT4ge1xuXHRcdGNvbnN0IGV4cG9uZW50MSA9IHVuaWZvcm1zLmV4cG9uZW50MSA/PyAxLjI7XG5cdFx0Y29uc3QgaW50ZW5zaXR5MSA9IHVuaWZvcm1zLmludGVuc2l0eTEgPz8gNDtcblx0XHRicmFpbi5leHBvbmVudCA9IGV4cG9uZW50MTtcblx0XHRicmFpbi5pbnRlbnNpdHkgPSBpbnRlbnNpdHkxO1xuXHRcdGNvbnN0IGV4cG9uZW50MiA9IHVuaWZvcm1zLmV4cG9uZW50MiA/PyA1O1xuXHRcdGNvbnN0IGludGVuc2l0eTIgPSB1bmlmb3Jtcy5pbnRlbnNpdHkyID8/IDIwO1xuXHRcdHN1emFubmUuZXhwb25lbnQgPSBleHBvbmVudDI7XG5cdFx0c3V6YW5uZS5pbnRlbnNpdHkgPSBpbnRlbnNpdHkyO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17aW5pdH1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHtcblx0XHRcdFx0XHRicmFpbjogQnJhaW5VUkwsXG5cdFx0XHRcdFx0c3V6YW5uZTogU3V6YW5uZVVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0XHRzZXR0aW5ncz17e1xuXHRcdFx0XHRleHBvbmVudDE6IHtcblx0XHRcdFx0XHRsYWJlbDogXCJleHBvbmVudCAoYnJhaW4pXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDEuMixcblx0XHRcdFx0XHRtaW46IC0yMCxcblx0XHRcdFx0XHRtYXg6IDIwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbnRlbnNpdHkxOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiaW50ZW50aXR5IChicmFpbilcIixcblx0XHRcdFx0XHR2YWx1ZTogNCxcblx0XHRcdFx0XHRtaW46IDAsXG5cdFx0XHRcdFx0bWF4OiAyMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXhwb25lbnQyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiZXhwb25lbnQgKG1vbmtleSlcIixcblx0XHRcdFx0XHR2YWx1ZTogNSxcblx0XHRcdFx0XHRtaW46IC0yMCxcblx0XHRcdFx0XHRtYXg6IDIwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbnRlbnNpdHkyOiB7XG5cdFx0XHRcdFx0bGFiZWw6IFwiaW50ZW50aXR5IChtb25rZXkpXCIsXG5cdFx0XHRcdFx0dmFsdWU6IDIwLFxuXHRcdFx0XHRcdG1pbjogMCxcblx0XHRcdFx0XHRtYXg6IDIwLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RHZW9tZXRyeUdsdGYiLCJUZ2RQYWludGVyWFJheSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQnJhaW5VUkwiLCJTdXphbm5lVVJMIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJjbGVhciIsImJyYWluIiwic3V6YW5uZSIsInN0YXRlIiwidW5pZm9ybXMiLCJfdW5pZm9ybXNfZXhwb25lbnQxIiwiX3VuaWZvcm1zX2ludGVuc2l0eTEiLCJfdW5pZm9ybXNfZXhwb25lbnQyIiwiX3VuaWZvcm1zX2ludGVuc2l0eTIiLCJleHBvbmVudDEiLCJpbnRlbnNpdHkxIiwiZXhwb25lbnQyIiwiaW50ZW5zaXR5MiIsIkRlbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF3QjtBQUNrQztBQUVYO0FBQ0k7QUFFbkQsU0FBU1MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUNoRCw0QkFBNEI7SUFDNUIsSUFBTUMsUUFBUSxJQUFJVCwrQ0FBZUEsQ0FBQ08sU0FBUztRQUMxQyxPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUNuQixPQUFPO0lBQ1I7SUFDQSxJQUFNRyxRQUFRLElBQUlYLDhDQUFjQSxDQUFDUSxTQUFTO1FBQ3pDLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBRztTQUFFO1FBQ3ZCLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVSxJQUFJVCwrQ0FBZUEsQ0FBQztZQUFFLE1BQU1VLE9BQU8sR0FBRyxDQUFDLEtBQUs7UUFBQztJQUN4RDtJQUNBLElBQU1HLFVBQVUsSUFBSVosOENBQWNBLENBQUNRLFNBQVM7UUFDM0MsT0FBTztZQUFDO1lBQUc7WUFBTztZQUFLO1NBQUU7UUFDekIsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVLElBQUlULCtDQUFlQSxDQUFDO1lBQzdCLE1BQU1VLE9BQU8sR0FBRyxDQUFDLE9BQU87UUFDekI7SUFDRDtJQUNBLElBQU1JLFFBQVEsSUFBSVgsK0NBQWVBLENBQUNNLFNBQVM7UUFDMUMsVUFBVTtZQUFDRztZQUFPQztTQUFRO1FBQzFCLE9BQU9ULHFEQUFxQjtJQUM3QjtJQUNBSyxR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