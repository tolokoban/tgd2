"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_test_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_settings-110d7f"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
40373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




function DemoContainer() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/_/index.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
function init(context) {
    var camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: {
            distance: 5
        },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 2,
        zoom: 1
    });
    context.camera = camera;
    camera.transfo.orientation.face("+X+Y+Z");
    camera.transfo.setPosition(0, 0, 0);
    camera.spaceHeightAtTarget = 6;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
        geo: {
            lat: 0,
            lng: 0,
            minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-60),
            maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(+60)
        }
    });
    context.paint();
    var action = function action() {
        return _async_to_generator(function() {
            var asset, axes, segments, loop, tip, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(_assets_mesh_suzanne_glb__rspack_import_3)
                        ];
                    case 1:
                        asset = _state.sent();
                        if (!asset) return [
                            2
                        ];
                        console.log("Suzanne has been loaded!");
                        axes = new _tolokoban_tgd__rspack_import_1.TgdPainterAxes(context, {
                            scale: 10
                        });
                        segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
                        for(loop = 0; loop < 12; loop++){
                            tip = new _tolokoban_tgd__rspack_import_1.TgdVec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().scale((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(1, 3));
                            segments.add([
                                0,
                                0,
                                0,
                                0.5
                            ], [
                                tip.x,
                                tip.y,
                                tip.z,
                                (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 0.5)
                            ]);
                        }
                        state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
                            depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
                            cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
                            children: [
                                new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                                    color: [
                                        0.2,
                                        0.1,
                                        0,
                                        1
                                    ],
                                    depth: 1
                                }),
                                axes,
                                new _tolokoban_tgd__rspack_import_1.TgdPainterSegments(context, {
                                    dataset: segments.makeDataset,
                                    roundness: 4
                                })
                            ]
                        });
                        context.add(state);
                        context.paint();
                        document.addEventListener("keydown", function(evt) {
                            var step = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(15);
                            var angX = 0;
                            var angY = 0;
                            switch(evt.key){
                                case "0":
                                    context.camera.transfo.orientation.face("+X+Y+Z");
                                    context.camera.zoom = 1;
                                    context.camera.transfo.setPosition(0, 0, 0).setDistance(15);
                                    break;
                                case ".":
                                    context.camera.zoom = 1;
                                    break;
                                case "6":
                                    angY = step;
                                    break;
                                case "4":
                                    angY = -step;
                                    break;
                                case "8":
                                    angX = -step;
                                    break;
                                case "2":
                                    angX = step;
                                    break;
                                case " ":
                                    context.camera.transfo.debug("SPACE");
                                    context.paint();
                                    return;
                            }
                            context.camera.transfo.orbitAroundX(angX);
                            context.camera.transfo.orbitAroundY(angY);
                            context.camera.debug("Camera");
                            context.paint();
                        });
                        return [
                            2
                        ];
                }
            });
        })();
    };
    void action();
}


},
35175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(40373);
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
                children: "Test"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGVzdF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZXR0aW5ncy0xMTBkN2YuNjdmZmMyMGQ0YjZmNGNhYi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGVzdC9fL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3Rlc3QvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdHRnZENhbGNEZWdUb1JhZCxcblx0dGdkQ2FsY1JhbmRvbSxcblx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcblx0VGdkR2VvbWV0cnlCb3gsXG5cdHRnZExvYWRHbGIsXG5cdFRnZE1hdDMsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxHaG9zdCxcblx0VGdkTWF0ZXJpYWxOb3JtYWxzLFxuXHRUZ2RQYWludGVyQXhlcyxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyRmlsdGVyLFxuXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJNZXNoR2x0Zixcblx0VGdkUGFpbnRlck5vZGUsXG5cdFRnZFBhaW50ZXJTZWdtZW50cyxcblx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RWZWMzLFxuXHR3ZWJnbFByZXNldEN1bGwsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIC8+O1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcblx0Y29uc3QgY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcblx0XHR0cmFuc2ZvOiB7IGRpc3RhbmNlOiA1IH0sXG5cdFx0ZmFyOiAxMDAsXG5cdFx0bmVhcjogMC4xLFxuXHRcdGZvdnk6IE1hdGguUEkgLyAyLFxuXHRcdHpvb206IDEsXG5cdH0pO1xuXHRjb250ZXh0LmNhbWVyYSA9IGNhbWVyYTtcblx0Y2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24uZmFjZShcIitYK1krWlwiKTtcblx0Y2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgMCk7XG5cdGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gNjtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0aW5lcnRpYU9yYml0OiA5MDAsXG5cdFx0Z2VvOiB7XG5cdFx0XHRsYXQ6IDAsXG5cdFx0XHRsbmc6IDAsXG5cdFx0XHRtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtNjApLFxuXHRcdFx0bWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoKzYwKSxcblx0XHR9LFxuXHR9KTtcblx0Y29udGV4dC5wYWludCgpO1xuXHRjb25zdCBhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG5cdFx0Y29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKFN1emFuZVVSTCk7XG5cdFx0aWYgKCFhc3NldCkgcmV0dXJuO1xuXG5cdFx0Y29uc29sZS5sb2coXCJTdXphbm5lIGhhcyBiZWVuIGxvYWRlZCFcIik7XG5cdFx0Y29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAxMCB9KTtcblx0XHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdFx0Zm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMjsgbG9vcCsrKSB7XG5cdFx0XHRjb25zdCB0aXAgPSBuZXcgVGdkVmVjMyhcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAtIDAuNSxcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAtIDAuNSxcblx0XHRcdFx0TWF0aC5yYW5kb20oKSAtIDAuNSxcblx0XHRcdClcblx0XHRcdFx0Lm5vcm1hbGl6ZSgpXG5cdFx0XHRcdC5zY2FsZSh0Z2RDYWxjUmFuZG9tKDEsIDMpKTtcblx0XHRcdHNlZ21lbnRzLmFkZChcblx0XHRcdFx0WzAsIDAsIDAsIDAuNV0sXG5cdFx0XHRcdFt0aXAueCwgdGlwLnksIHRpcC56LCB0Z2RDYWxjUmFuZG9tKDAsIDAuNSldLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0XHRcdGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLFxuXHRcdFx0XHRcdGRlcHRoOiAxLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0YXhlcyxcblx0XHRcdFx0bmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG5cdFx0XHRcdFx0ZGF0YXNldDogc2VnbWVudHMubWFrZURhdGFzZXQsXG5cdFx0XHRcdFx0cm91bmRuZXNzOiA0LFxuXHRcdFx0XHR9KSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdFx0Y29udGV4dC5hZGQoc3RhdGUpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZ0KSA9PiB7XG5cdFx0XHRjb25zdCBzdGVwID0gdGdkQ2FsY0RlZ1RvUmFkKDE1KTtcblx0XHRcdGxldCBhbmdYID0gMDtcblx0XHRcdGxldCBhbmdZID0gMDtcblx0XHRcdHN3aXRjaCAoZXZ0LmtleSkge1xuXHRcdFx0XHRjYXNlIFwiMFwiOlxuXHRcdFx0XHRcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24uZmFjZShcIitYK1krWlwiKTtcblx0XHRcdFx0XHRjb250ZXh0LmNhbWVyYS56b29tID0gMTtcblx0XHRcdFx0XHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApLnNldERpc3RhbmNlKDE1KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIi5cIjpcblx0XHRcdFx0XHRjb250ZXh0LmNhbWVyYS56b29tID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIjZcIjpcblx0XHRcdFx0XHRhbmdZID0gc3RlcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcIjRcIjpcblx0XHRcdFx0XHRhbmdZID0gLXN0ZXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCI4XCI6XG5cdFx0XHRcdFx0YW5nWCA9IC1zdGVwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiMlwiOlxuXHRcdFx0XHRcdGFuZ1ggPSBzdGVwO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiIFwiOlxuXHRcdFx0XHRcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGVidWcoXCJTUEFDRVwiKTtcblx0XHRcdFx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFgoYW5nWCk7XG5cdFx0XHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKTtcblx0XHRcdGNvbnRleHQuY2FtZXJhLmRlYnVnKFwiQ2FtZXJhXCIpO1xuXHRcdFx0Y29udGV4dC5wYWludCgpO1xuXHRcdH0pO1xuXHR9O1xuXHR2b2lkIGFjdGlvbigpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYWxjRGVnVG9SYWQiLCJ0Z2RDYWxjUmFuZG9tIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJ0Z2RMb2FkR2xiIiwiVGdkUGFpbnRlckF4ZXMiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU2VnbWVudHMiLCJUZ2RQYWludGVyU2VnbWVudHNEYXRhIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVmVjMyIsIndlYmdsUHJlc2V0Q3VsbCIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiU3V6YW5lVVJMIiwiRGVtb0NvbnRhaW5lciIsImluaXQiLCJjb250ZXh0IiwiY2FtZXJhIiwiTWF0aCIsImFjdGlvbiIsImFzc2V0IiwiYXhlcyIsInNlZ21lbnRzIiwibG9vcCIsInRpcCIsInN0YXRlIiwiY29uc29sZSIsImRvY3VtZW50IiwiZXZ0Iiwic3RlcCIsImFuZ1giLCJhbmdZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQndCO0FBRWlCO0FBRVM7QUFFbkMsU0FBU2U7SUFDdkIscUJBQU8sa0RBQUNGLGdEQUFJQTtRQUFDLFNBQVNHO1FBQU0sS0FBSzs7Ozs7O0FBQ2xDO0FBRUEsU0FBU0EsS0FBS0MsT0FBbUI7SUFDaEMsSUFBTUMsU0FBUyxJQUFJaEIsb0RBQW9CQSxDQUFDO1FBQ3ZDLFNBQVM7WUFBRSxVQUFVO1FBQUU7UUFDdkIsS0FBSztRQUNMLE1BQU07UUFDTixNQUFNaUIsS0FBSyxFQUFFLEdBQUc7UUFDaEIsTUFBTTtJQUNQO0lBQ0FGLFFBQVEsTUFBTSxHQUFHQztJQUNqQkEsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNoQ0EsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRztJQUNqQ0Es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