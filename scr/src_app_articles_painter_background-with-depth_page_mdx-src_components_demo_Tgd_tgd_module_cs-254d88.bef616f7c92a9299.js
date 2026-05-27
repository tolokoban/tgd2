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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/_background-with-depth/background-with-depth.demo.tsx",
        lineNumber: 85,
        columnNumber: 9
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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In case you have a fixed camera and a complex environment you can optimize the\npainting by pre-rendering it in Blender and generating the depth buffer with simple/fast material."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "TgdPainterBackgroundWithDepth will paint the high definition image and fill the\ndepth buffer with the meshes you give it as children. If the canvas size doesn't change, then the\nmeshes won't even been rendered. That's why you can use high poly meshes if you need accuracy."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In the following example, we used a very low-poly mesh. You can see this when the left cube is on the top.\nThe hemi-sphere at the top of the tower is bulky, and the cube acts strange in this area."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But if you know where your moving objects will be, then you can have high definition in these places\nand low poly everywhere else."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth_background_with_depth_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9iYWNrZ3JvdW5kLXdpdGgtZGVwdGhfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jcy0yNTRkODguYmVmNjE2ZjdjOTJhOTI5OS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9iYWNrZ3JvdW5kLXdpdGgtZGVwdGgvX2JhY2tncm91bmQtd2l0aC1kZXB0aC9iYWNrZ3JvdW5kLXdpdGgtZGVwdGguZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2JhY2tncm91bmQtd2l0aC1kZXB0aC9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRFZmZlY3QsIFZpZXdJbnB1dE51bWJlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7XG4gICAgdGdkQ2FsY01vZHVsbyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcbiAgICBUZ2RNYXRlcmlhbERlcHRoLFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRJTUcgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCJcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuYmFja2dyb3VuZC5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAxMDBcbiAgICBjb25zdCBkZXB0aE1ha2VyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICBub2RlOiBcIkJ1aWxkaW5nXCIsXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRGVwdGgoKSxcbiAgICAgICAgICAgIH0pLnBhaW50ZXIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcbiAgICAgICAgY2hpbGRyZW46IFtkZXB0aE1ha2VyXSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDQpXG4gICAgY29uc3QgY3ViZTIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuMDIsIDAsIC00KS5zZXRTY2FsZSg0KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmUxLCBjdWJlMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpXG4gICAgICAgICAgICBsZXQgeTEgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTEgPSBtb2QgKiAyNVxuICAgICAgICAgICAgZWxzZSB5MSA9IDI1ICogKDIgLSBtb2QpXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgxLCB6OiB6MSB9ID0gY3ViZTEudHJhbnNmby5wb3NpdGlvblxuICAgICAgICAgICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbih4MSwgeTEsIHoxKVxuICAgICAgICAgICAgY3ViZTEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXG4gICAgICAgICAgICBsZXQgeTIgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTIgPSBtb2QgKiAzMFxuICAgICAgICAgICAgZWxzZSB5MiA9IDMwICogKDIgLSBtb2QpXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgyLCB6OiB6MiB9ID0gY3ViZTIudHJhbnNmby5wb3NpdGlvblxuICAgICAgICAgICAgY3ViZTIudHJhbnNmby5zZXRQb3NpdGlvbih4MiwgeTIsIHoyKVxuICAgICAgICAgICAgY3ViZTIudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA1NywgLXRpbWUgKiAxMDMpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gYmFja2dyb3VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIC8vICAgY29uc3QgW21hdGVyaWFsLCBzZXRNYXRlcmlhbF0gPSB1c2VNYXRlcmlhbCgpO1xuICAgIC8vICAgY29uc3QgW21pbiwgc2V0TWluXSA9IFJlYWN0LnVzZVN0YXRlKG1hdGVyaWFsLm1pbik7XG4gICAgLy8gICBjb25zdCBbbWF4LCBzZXRNYXhdID0gUmVhY3QudXNlU3RhdGUobWF0ZXJpYWwubWF4KTtcbiAgICAvLyAgIHVzZURlYm91bmNlZEVmZmVjdChcbiAgICAvLyAgICAgKCkgPT4ge1xuICAgIC8vICAgICAgIG1hdGVyaWFsLm1pbiA9IG1pbjtcbiAgICAvLyAgICAgICBtYXRlcmlhbC5tYXggPSBtYXg7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIFttaW4sIG1heF0sXG4gICAgLy8gICAgIDQwMFxuICAgIC8vICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIC8vIHNldE1hdGVyaWFsKGluaXQoY29udGV4dCwgYXNzZXRzKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IGJhY2tncm91bmQ6IEJhY2tncm91bmRHTEIgfSxcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kSU1HIH0sXG4gICAgICAgICAgICB9fT48L1ZpZXc+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VNYXRlcmlhbCgpOiBbeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSwgKG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gdm9pZF0ge1xuICAgIGNvbnN0IHJlZk1hdGVyaWFsID0gUmVhY3QudXNlUmVmPHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0gfCBudWxsPihudWxsKVxuICAgIGlmICghcmVmTWF0ZXJpYWwuY3VycmVudCkgcmVmTWF0ZXJpYWwuY3VycmVudCA9IHsgbWluOiAwLjk5MiwgbWF4OiAxIH1cblxuICAgIHJldHVybiBbcmVmTWF0ZXJpYWwuY3VycmVudCwgKG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gKHJlZk1hdGVyaWFsLmN1cnJlbnQgPSBtYXQpXVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInRnZENhbGNNb2R1bG8iLCJ0Z2RNYWtlTWVzaEdsYlBhaW50ZXIiLCJUZ2RNYXRlcmlhbERlcHRoIiwiVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiQmFja2dyb3VuZElNRyIsIkJhY2tncm91bmRHTEIiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsImRlcHRoTWFrZXIiLCJvdmVycmlkZU1hdGVyaWFsIiwiYmFja2dyb3VuZCIsImN1YmUxIiwiY3ViZTIiLCJ0aW1lIiwibW9kIiwieTEiLCJfY3ViZTFfdHJhbnNmb19wb3NpdGlvbiIsIngxIiwiejEiLCJ5MiIsIl9jdWJlMl90cmFuc2ZvX3Bvc2l0aW9uIiwieDIiLCJ6MiIsIkRlbW8iLCJvblJlYWR5IiwidXNlTWF0ZXJpYWwiLCJyZWZNYXRlcmlhbCIsIm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFjRjtBQUU2QjtBQUVQO0FBQ0Q7QUFFNUMsU0FBU2MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztJQUM3Qyw0QkFBNEI7SUFDNUJELFFBQVEsTUFBTSxHQUFHQyxPQUFPLEdBQUcsQ0FBQyxVQUFV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