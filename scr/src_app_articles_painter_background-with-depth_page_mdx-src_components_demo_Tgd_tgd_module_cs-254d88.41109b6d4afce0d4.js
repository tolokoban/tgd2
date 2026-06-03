"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_background-with-depth_page_mdx-src_components_demo_Tgd_tgd_module_cs-254d88"], {
35875(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
14756(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
7195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _background_webp__rspack_import_4 = __webpack_require__(14756);
/* import */ var _background_glb__rspack_import_5 = __webpack_require__(35875);






function init(context, assets) {
    // #begin Initializing WebGL
    context.camera = assets.glb.background.createCameraByName("Camera");
    context.camera.far = 100;
    var depthMaker = new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        cull: _tolokoban_tgd__rspack_import_2.webglPresetCull.back,
        children: [
            (0,_tolokoban_tgd__rspack_import_2.tgdMakeMeshGlbPainter)({
                context: context,
                data: assets.glb.background,
                node: "Building",
                overrideMaterial: function overrideMaterial() {
                    return function() {
                        return new _tolokoban_tgd__rspack_import_2.TgdMaterialDepth();
                    };
                }
            }).painter
        ]
    });
    var background = new _tolokoban_tgd__rspack_import_2.TgdPainterBackgroundWithDepth(context, {
        background: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(assets.image.background),
        children: [
            depthMaker
        ]
    });
    var cube1 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4);
    var cube2 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube2.transfo.setPosition(0.02, 0, -4).setScale(4);
    context.add(background, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less,
        children: [
            cube1,
            cube2
        ]
    }), new _tolokoban_tgd__rspack_import_2.TgdPainterLogic(function(time) {
        var mod = (0,_tolokoban_tgd__rspack_import_2.tgdCalcModulo)(time * 0.1, 0, 2);
        var y1 = 0;
        if (mod < 1) y1 = mod * 25;
        else y1 = 25 * (2 - mod);
        var _cube1_transfo_position = cube1.transfo.position, x1 = _cube1_transfo_position.x, z1 = _cube1_transfo_position.z;
        cube1.transfo.setPosition(x1, y1, z1);
        cube1.transfo.setEulerRotation(time, time * 47, -time * 120);
        var y2 = 0;
        if (mod < 1) y2 = mod * 30;
        else y2 = 30 * (2 - mod);
        var _cube2_transfo_position = cube2.transfo.position, x2 = _cube2_transfo_position.x, z2 = _cube2_transfo_position.z;
        cube2.transfo.setPosition(x2, y2, z2);
        cube2.transfo.setEulerRotation(time, time * 57, -time * 103);
    }));
    context.play();
    // #end
    return background;
}
function Demo() {
    //   const [material, setMaterial] = useMaterial();
    //   const [min, setMin] = React.useState(material.min);
    //   const [max, setMax] = React.useState(material.max);
    //   useDebouncedEffect(
    //     () => {
    //       material.min = min;
    //       material.max = max;
    //     },
    //     [min, max],
    //     400
    //   );
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: function onReady(context, assets) {
            init(context, assets);
        // setMaterial(init(context, assets));
        },
        options: {
            antialias: false
        },
        assets: {
            glb: {
                background: _background_glb__rspack_import_5
            },
            image: {
                background: _background_webp__rspack_import_4
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/background-with-depth.demo.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, this);
}
function useMaterial() {
    var refMaterial = react__rspack_import_1_default().useRef(null);
    if (!refMaterial.current) refMaterial.current = {
        min: 0.992,
        max: 1
    };
    return [
        refMaterial.current,
        function(mat) {
            return refMaterial.current = mat;
        }
    ];
}


},
63799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _background_with_depth_background_with_depth_demo__rspack_import_1 = __webpack_require__(7195);
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
        h2: "h2",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterBackgroundWithDepth.html",
                    children: "TgdPainterBackgroundWithDepth"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In case you have a fixed camera and a complex environment you can optimize the\npainting by pre-rendering it in Blender and generating the depth buffer with simple/fast material."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "TgdPainterBackgroundWithDepth will paint the high definition image and fill the\ndepth buffer with the meshes you give it as children. If the canvas size doesn't change, then the\nmeshes won't even been rendered. That's why you can use high poly meshes if you need accuracy."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In the following example, we used a very low-poly mesh. You can see this when the left cube is on the top.\nThe hemi-sphere at the top of the tower is bulky, and the cube acts strange in this area."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But if you know where your moving objects will be, then you can have high definition in these places\nand low poly everywhere else."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth_background_with_depth_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9iYWNrZ3JvdW5kLXdpdGgtZGVwdGhfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jcy0yNTRkODguNDExMDliNmQ0YWZjZTBkNC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2JhY2tncm91bmQtd2l0aC1kZXB0aC9fYmFja2dyb3VuZC13aXRoLWRlcHRoL2JhY2tncm91bmQtd2l0aC1kZXB0aC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9iYWNrZ3JvdW5kLXdpdGgtZGVwdGgvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGVib3VuY2VkRWZmZWN0LCBWaWV3SW5wdXROdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IHtcblx0dGdkQ2FsY01vZHVsbyxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHR0Z2RNYWtlTWVzaEdsYlBhaW50ZXIsXG5cdFRnZE1hdGVyaWFsRGVwdGgsXG5cdFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxuXHRUZ2RQYWludGVyTG9naWMsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFRleHR1cmUyRCxcblx0d2ViZ2xQcmVzZXRDdWxsLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBCYWNrZ3JvdW5kSU1HIGZyb20gXCIuL2JhY2tncm91bmQud2VicFwiO1xuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHQvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG5cdGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5iYWNrZ3JvdW5kLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKTtcblx0Y29udGV4dC5jYW1lcmEuZmFyID0gMTAwO1xuXHRjb25zdCBkZXB0aE1ha2VyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdHRnZE1ha2VNZXNoR2xiUGFpbnRlcih7XG5cdFx0XHRcdGNvbnRleHQsXG5cdFx0XHRcdGRhdGE6IGFzc2V0cy5nbGIuYmFja2dyb3VuZCxcblx0XHRcdFx0bm9kZTogXCJCdWlsZGluZ1wiLFxuXHRcdFx0XHRvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxEZXB0aCgpLFxuXHRcdFx0fSkucGFpbnRlcixcblx0XHRdLFxuXHR9KTtcblx0Y29uc3QgYmFja2dyb3VuZCA9IG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZFdpdGhEZXB0aChjb250ZXh0LCB7XG5cdFx0YmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcblx0XHRjaGlsZHJlbjogW2RlcHRoTWFrZXJdLFxuXHR9KTtcblx0Y29uc3QgY3ViZTEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XG5cdGN1YmUxLnRyYW5zZm8uc2V0UG9zaXRpb24oMTEuMDIsIDAsIC04Ljc1KS5zZXRTY2FsZSg0KTtcblx0Y29uc3QgY3ViZTIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCk7XG5cdGN1YmUyLnRyYW5zZm8uc2V0UG9zaXRpb24oMC4wMiwgMCwgLTQpLnNldFNjYWxlKDQpO1xuXHRjb250ZXh0LmFkZChcblx0XHRiYWNrZ3JvdW5kLFxuXHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbY3ViZTEsIGN1YmUyXSxcblx0XHR9KSxcblx0XHRuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG5cdFx0XHRjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpO1xuXHRcdFx0bGV0IHkxID0gMDtcblx0XHRcdGlmIChtb2QgPCAxKSB5MSA9IG1vZCAqIDI1O1xuXHRcdFx0ZWxzZSB5MSA9IDI1ICogKDIgLSBtb2QpO1xuXHRcdFx0Y29uc3QgeyB4OiB4MSwgejogejEgfSA9IGN1YmUxLnRyYW5zZm8ucG9zaXRpb247XG5cdFx0XHRjdWJlMS50cmFuc2ZvLnNldFBvc2l0aW9uKHgxLCB5MSwgejEpO1xuXHRcdFx0Y3ViZTEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApO1xuXHRcdFx0bGV0IHkyID0gMDtcblx0XHRcdGlmIChtb2QgPCAxKSB5MiA9IG1vZCAqIDMwO1xuXHRcdFx0ZWxzZSB5MiA9IDMwICogKDIgLSBtb2QpO1xuXHRcdFx0Y29uc3QgeyB4OiB4MiwgejogejIgfSA9IGN1YmUyLnRyYW5zZm8ucG9zaXRpb247XG5cdFx0XHRjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKHgyLCB5MiwgejIpO1xuXHRcdFx0Y3ViZTIudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA1NywgLXRpbWUgKiAxMDMpO1xuXHRcdH0pLFxuXHQpO1xuXHRjb250ZXh0LnBsYXkoKTtcblx0Ly8gI2VuZFxuXHRyZXR1cm4gYmFja2dyb3VuZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Ly8gICBjb25zdCBbbWF0ZXJpYWwsIHNldE1hdGVyaWFsXSA9IHVzZU1hdGVyaWFsKCk7XG5cdC8vICAgY29uc3QgW21pbiwgc2V0TWluXSA9IFJlYWN0LnVzZVN0YXRlKG1hdGVyaWFsLm1pbik7XG5cdC8vICAgY29uc3QgW21heCwgc2V0TWF4XSA9IFJlYWN0LnVzZVN0YXRlKG1hdGVyaWFsLm1heCk7XG5cdC8vICAgdXNlRGVib3VuY2VkRWZmZWN0KFxuXHQvLyAgICAgKCkgPT4ge1xuXHQvLyAgICAgICBtYXRlcmlhbC5taW4gPSBtaW47XG5cdC8vICAgICAgIG1hdGVyaWFsLm1heCA9IG1heDtcblx0Ly8gICAgIH0sXG5cdC8vICAgICBbbWluLCBtYXhdLFxuXHQvLyAgICAgNDAwXG5cdC8vICAgKTtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0b25SZWFkeT17KGNvbnRleHQsIGFzc2V0cykgPT4ge1xuXHRcdFx0XHRpbml0KGNvbnRleHQsIGFzc2V0cyk7XG5cdFx0XHRcdC8vIHNldE1hdGVyaWFsKGluaXQoY29udGV4dCwgYXNzZXRzKSk7XG5cdFx0XHR9fVxuXHRcdFx0b3B0aW9ucz17e1xuXHRcdFx0XHRhbnRpYWxpYXM6IGZhbHNlLFxuXHRcdFx0fX1cblx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRnbGI6IHsgYmFja2dyb3VuZDogQmFja2dyb3VuZEdMQiB9LFxuXHRcdFx0XHRpbWFnZTogeyBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kSU1HIH0sXG5cdFx0XHR9fVxuXHRcdD48L1ZpZXc+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHVzZU1hdGVyaWFsKCk6IFtcblx0eyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSxcblx0KG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gdm9pZCxcbl0ge1xuXHRjb25zdCByZWZNYXRlcmlhbCA9IFJlYWN0LnVzZVJlZjx7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9IHwgbnVsbD4obnVsbCk7XG5cdGlmICghcmVmTWF0ZXJpYWwuY3VycmVudCkgcmVmTWF0ZXJpYWwuY3VycmVudCA9IHsgbWluOiAwLjk5MiwgbWF4OiAxIH07XG5cblx0cmV0dXJuIFtcblx0XHRyZWZNYXRlcmlhbC5jdXJyZW50LFxuXHRcdChtYXQ6IHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0pID0+IChyZWZNYXRlcmlhbC5jdXJyZW50ID0gbWF0KSxcblx0XTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0Z2RDYWxjTW9kdWxvIiwidGdkTWFrZU1lc2hHbGJQYWludGVyIiwiVGdkTWF0ZXJpYWxEZXB0aCIsIlRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIkJhY2tncm91bmRJTUciLCJCYWNrZ3JvdW5kR0xCIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJkZXB0aE1ha2VyIiwib3ZlcnJpZGVNYXRlcmlhbCIsImJhY2tncm91bmQiLCJjdWJlMSIsImN1YmUyIiwidGltZSIsIm1vZCIsInkxIiwiX2N1YmUxX3RyYW5zZm9fcG9zaXRpb24iLCJ4MSIsInoxIiwieTIiLCJfY3ViZTJfdHJhbnNmb19wb3NpdGlvbiIsIngyIiwiejIiLCJEZW1vIiwib25SZWFkeSIsInVzZU1hdGVyaWFsIiwicmVmTWF0ZXJpYWwiLCJtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBY0Y7QUFFa0M7QUFFWjtBQUNEO0FBRTdDLFNBQVNjLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsNEJBQTRCO0lBQzVCRCxRQUFRLE1BQU0sR0FBR0MsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0lBQzFERCxRQUFRLE1BQU0sQ0FBQyxHQUFHLEdBQUc7SUFDckIsSUFBTUUsYUFBYSxJQUFJViwrQ0FBZUEsQ0FBQ1EsU0FBUztRQUMvQyxNQUFNTixvREFBb0I7UUFDMUIsVUFBVTtZQUNUUCx5REFBcUJBLENBQUM7Z0JBQ3JCYSxTQUFBQTtnQkFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQyxVQUFVO2dCQUMzQixNQUFNO2dCQUNORSxrQkFBa0IsU0FBbEJBOzJCQUF3QjsrQkFBTSxJQUFJZixnREFBZ0JBOzs7WUFDbkQsR0FBRyxPQUFPO1NB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