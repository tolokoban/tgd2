"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_camera_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-src_com-a94ddf"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
26062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);
/* import */ var _components_demo_Tgd__rspack_import_5 = __webpack_require__(43475);
/* import */ var _utils_hooks_float__rspack_import_6 = __webpack_require__(24429);
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







function init(context, assets) {
    // #begin Initializing WebGL
    var texBackgroundOrtho = createBackground(context, "Orthographic");
    var texBackgroundPersp = createBackground(context, "Perspective");
    var color = _tolokoban_tgd__rspack_import_1.TgdColor.fromString("#9df").toArayNumber4();
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: color,
        ambient: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                0.8,
                0.8,
                0.8,
                0
            ]
        }),
        lockLightsToCamera: true
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.suzane,
        material: material
    });
    var bbox = _tolokoban_tgd__rspack_import_1.TgdBoundingBox.from(mesh.computeBoundingBox());
    console.log("🐞 [camera.demo@51] bbox =", bbox); // @FIXME: Remove this line written on 2026-06-16 at 14:15
    var camOrtho = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
        name: "Orthographic"
    });
    var camPersp = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        name: "Perspective"
    });
    for(var _i = 0, _iter = [
        context.camera,
        camOrtho,
        camPersp
    ]; _i < _iter.length; _i++){
        var camera = _iter[_i];
        camera.fitBoundingBox(bbox);
        camera.debug();
    }
    // #end
    var scissor1 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
                texture: texBackgroundOrtho,
                mode: "contain"
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
                camera: camOrtho,
                children: [
                    mesh
                ]
            })
        ],
        x: 0,
        y: 0,
        width: 0.5,
        height: 1
    });
    var scissor2 = new _tolokoban_tgd__rspack_import_1.TgdPainterScissor(context, {
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
                texture: texBackgroundPersp,
                mode: "contain"
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterGroupCamera(context, {
                camera: camPersp,
                children: [
                    mesh
                ]
            })
        ],
        x: 0.5,
        y: 0,
        width: 0.5,
        height: 1
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function() {
        var camera = context.camera;
        camPersp.fromTransfo(camera.transfo);
        camPersp.zoom = camera.zoom;
        camOrtho.fromTransfo(camera.transfo);
        camOrtho.zoom = camera.zoom;
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.4,
            0.4,
            0.4,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            scissor1,
            scissor2
        ]
    }));
    context.inputs.pointer.eventTap.addListener(function(evt) {
        if (evt.x < 0) {
            camOrtho.debug();
        } else {
            camPersp.debug();
        }
    });
    context.paint();
    return {
        split: function split(value) {
            var a = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(value, 0, 1);
            scissor1.x = 0;
            scissor1.width = a;
            scissor2.x = a;
            scissor2.width = 1 - a;
            context.paint();
        },
        zoom: function zoom(value) {
            context.camera.zoom = value;
            camOrtho.zoom = value;
            camPersp.zoom = value;
            context.paint();
        },
        fitBoundingBox: function fitBoundingBox() {
            console.log("fitBoundingBox()", bbox);
            camOrtho.fitBoundingBox(bbox);
            camPersp.fitBoundingBox(bbox);
            context.paint();
        }
    };
}
function Demo() {
    var ref = react__rspack_import_3_default().useRef(null);
    var srv = ref.current;
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_6.useFloat)(0.5, srv === null || srv === void 0 ? void 0 : srv.split), 2), split = _useFloat[0], setSplit = _useFloat[1];
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(1), 2), zoom = _React_useState[0], setZoom = _React_useState[1];
    var handleApplyZoom = function handleApplyZoom() {
        srv === null || srv === void 0 ? void 0 : srv.zoom(zoom);
    };
    var handleFitBBox = function handleFitBBox() {
        console.log("🐞 [camera.demo@152] srv =", srv); // @FIXME: Remove this line written on 2026-06-16 at 14:14
        srv === null || srv === void 0 ? void 0 : srv.fitBoundingBox();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_5["default"], {
            onReady: function onReady(scene, assets) {
                ref.current = init(scene, assets);
            },
            assets: {
                glb: {
                    suzane: _assets_mesh_suzanne_glb__rspack_import_4
                }
            },
            gizmo: true,
            controller: {
                inertiaOrbit: 1000,
                inertiaPanning: 1000
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                    value: split,
                    onChange: setSplit,
                    min: 0,
                    max: 1,
                    step: 1e-2
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 169,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    fullwidth: true,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "secondary-5",
                            onClick: function onClick() {
                                return setSplit(1);
                            },
                            children: "Orthographic"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 182,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "text",
                            color: "secondary-5",
                            onClick: function onClick() {
                                return setSplit(0);
                            },
                            children: "Perspective"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 189,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 176,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "M",
                    fullwidth: true,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                            display: "flex",
                            alignItems: "center",
                            gap: "M",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                                    value: zoom,
                                    onChange: setZoom,
                                    onEnterKeyPressed: handleApplyZoom,
                                    fullwidth: true
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                                    lineNumber: 205,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                                    onClick: handleApplyZoom,
                                    children: "Apply zoom"
                                }, void 0, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                                    lineNumber: 211,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 204,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            onClick: handleFitBBox,
                            children: "fitBoundingBox()"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                            lineNumber: 213,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
                    lineNumber: 197,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
            lineNumber: 154,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/camera.demo.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, this);
}
function createBackground(context, text) {
    var W = 2048;
    var H = 2048;
    var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(W, H), canvas = _tgdCanvasCreateWithContext2D.canvas, ctx = _tgdCanvasCreateWithContext2D.ctx;
    ctx.font = "128px bold sans-serif";
    ctx.fillStyle = new _tolokoban_tgd__rspack_import_1.TgdColor(0.4, 0.4, 0.4, 1).toString();
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#000";
    var measure = ctx.measureText(text);
    var textWidth = measure.width;
    var textAsc = measure.actualBoundingBoxAscent;
    var textDsc = measure.actualBoundingBoxDescent;
    ctx.fillText(text, 0, H - textDsc);
    ctx.fillText(text, 0, textAsc);
    ctx.fillText(text, W - textWidth, H - textDsc);
    ctx.fillText(text, W - textWidth, textAsc);
    return new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(canvas);
}


},
57418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _camera_demo__rspack_import_4 = __webpack_require__(26062);
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
    "Initializing WebGL": "\tconst texBackgroundOrtho = createBackground(context, \"Orthographic\")\n\tconst texBackgroundPersp = createBackground(context, \"Perspective\")\n\tconst color: ArrayNumber4 = TgdColor.fromString(\"#9df\").toArayNumber4()\n\tconst material = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t\tlockLightsToCamera: true,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t})\n\tconst bbox = TgdBoundingBox.from(mesh.computeBoundingBox())\n\tconsole.log(\"🐞 [camera.demo@51] bbox =\", bbox) // @FIXME: Remove this line written on 2026-06-16 at 14:15\n\tconst camOrtho = new TgdCameraOrthographic({ name: \"Orthographic\" })\n\tconst camPersp = new TgdCameraPerspective({ name: \"Perspective\" })\n\tfor (const camera of [context.camera, camOrtho, camPersp]) {\n\t\tcamera.fitBoundingBox(bbox)\n\t\tcamera.debug()\n\t}"
};
var FULL = "import {\n\ttype ArrayNumber4,\n\tTgdBoundingBox,\n\tTgdCameraOrthographic,\n\tTgdCameraPerspective,\n\tTgdColor,\n\ttype TgdContext,\n\tTgdLight,\n\tTgdMaterialDiffuse,\n\tTgdPainterBackground,\n\tTgdPainterClear,\n\tTgdPainterGroupCamera,\n\tTgdPainterLogic,\n\tTgdPainterMeshGltf,\n\tTgdPainterScissor,\n\tTgdPainterState,\n\tTgdTexture2D,\n\ttgdCalcClamp,\n\ttgdCanvasCreateWithContext2D,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport {\n\tViewButton,\n\tViewInputNumber,\n\tViewPanel,\n\tViewSlider,\n} from \"@tolokoban/ui\"\nimport React from \"react\"\nimport SuzaneURL from \"@/assets/mesh/suzanne.glb\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport { useFloat } from \"@/utils/hooks/float\"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst texBackgroundOrtho = createBackground(context, \"Orthographic\")\n\tconst texBackgroundPersp = createBackground(context, \"Perspective\")\n\tconst color: ArrayNumber4 = TgdColor.fromString(\"#9df\").toArayNumber4()\n\tconst material = new TgdMaterialDiffuse({\n\t\tcolor,\n\t\tambient: new TgdLight({\n\t\t\tcolor: [0.8, 0.8, 0.8, 0],\n\t\t}),\n\t\tlockLightsToCamera: true,\n\t})\n\tconst mesh = new TgdPainterMeshGltf(context, {\n\t\tasset: assets.glb.suzane,\n\t\tmaterial,\n\t})\n\tconst bbox = TgdBoundingBox.from(mesh.computeBoundingBox())\n\tconsole.log(\"🐞 [camera.demo@51] bbox =\", bbox) // @FIXME: Remove this line written on 2026-06-16 at 14:15\n\tconst camOrtho = new TgdCameraOrthographic({ name: \"Orthographic\" })\n\tconst camPersp = new TgdCameraPerspective({ name: \"Perspective\" })\n\tfor (const camera of [context.camera, camOrtho, camPersp]) {\n\t\tcamera.fitBoundingBox(bbox)\n\t\tcamera.debug()\n\t}\n\tconst scissor1 = new TgdPainterScissor(context, {\n\t\tchildren: [\n\t\t\tnew TgdPainterBackground(context, {\n\t\t\t\ttexture: texBackgroundOrtho,\n\t\t\t\tmode: \"contain\",\n\t\t\t}),\n\t\t\tnew TgdPainterGroupCamera(context, {\n\t\t\t\tcamera: camOrtho,\n\t\t\t\tchildren: [mesh],\n\t\t\t}),\n\t\t],\n\t\tx: 0,\n\t\ty: 0,\n\t\twidth: 0.5,\n\t\theight: 1,\n\t})\n\tconst scissor2 = new TgdPainterScissor(context, {\n\t\tchildren: [\n\t\t\tnew TgdPainterBackground(context, {\n\t\t\t\ttexture: texBackgroundPersp,\n\t\t\t\tmode: \"contain\",\n\t\t\t}),\n\t\t\tnew TgdPainterGroupCamera(context, {\n\t\t\t\tcamera: camPersp,\n\t\t\t\tchildren: [mesh],\n\t\t\t}),\n\t\t],\n\t\tx: 0.5,\n\t\ty: 0,\n\t\twidth: 0.5,\n\t\theight: 1,\n\t})\n\tcontext.add(\n\t\tnew TgdPainterLogic(() => {\n\t\t\tconst { camera } = context\n\t\t\tcamPersp.fromTransfo(camera.transfo)\n\t\t\tcamPersp.zoom = camera.zoom\n\t\t\tcamOrtho.fromTransfo(camera.transfo)\n\t\t\tcamOrtho.zoom = camera.zoom\n\t\t}),\n\t\tnew TgdPainterClear(context, {\n\t\t\tcolor: [0.4, 0.4, 0.4, 1],\n\t\t\tdepth: 1,\n\t\t}),\n\t\tnew TgdPainterState(context, {\n\t\t\tdepth: webglPresetDepth.less,\n\t\t\tchildren: [scissor1, scissor2],\n\t\t}),\n\t)\n\tcontext.inputs.pointer.eventTap.addListener((evt) => {\n\t\tif (evt.x < 0) {\n\t\t\tcamOrtho.debug()\n\t\t} else {\n\t\t\tcamPersp.debug()\n\t\t}\n\t})\n\tcontext.paint()\n\treturn {\n\t\tsplit(value: number) {\n\t\t\tconst a = tgdCalcClamp(value, 0, 1)\n\t\t\tscissor1.x = 0\n\t\t\tscissor1.width = a\n\t\t\tscissor2.x = a\n\t\t\tscissor2.width = 1 - a\n\t\t\tcontext.paint()\n\t\t},\n\t\tzoom(value: number) {\n\t\t\tcontext.camera.zoom = value\n\t\t\tcamOrtho.zoom = value\n\t\t\tcamPersp.zoom = value\n\t\t\tcontext.paint()\n\t\t},\n\t\tfitBoundingBox() {\n\t\t\tconsole.log(\"fitBoundingBox()\", bbox)\n\t\t\tcamOrtho.fitBoundingBox(bbox)\n\t\t\tcamPersp.fitBoundingBox(bbox)\n\t\t\tcontext.paint()\n\t\t},\n\t}\n}\n\nexport default function Demo() {\n\tconst ref = React.useRef<ReturnType<typeof init> | null>(null)\n\tconst srv = ref.current\n\tconst [split, setSplit] = useFloat(0.5, srv?.split)\n\tconst [zoom, setZoom] = React.useState(1)\n\tconst handleApplyZoom = () => {\n\t\tsrv?.zoom(zoom)\n\t}\n\tconst handleFitBBox = () => {\n\t\tconsole.log(\"🐞 [camera.demo@152] srv =\", srv) // @FIXME: Remove this line written on 2026-06-16 at 14:14\n\t\tsrv?.fitBoundingBox()\n\t}\n\n\treturn (\n\t\t<div>\n\t\t\t<View\n\t\t\t\tonReady={(scene: TgdContext, assets: Assets) => {\n\t\t\t\t\tref.current = init(scene, assets)\n\t\t\t\t}}\n\t\t\t\tassets={{\n\t\t\t\t\tglb: {\n\t\t\t\t\t\tsuzane: SuzaneURL,\n\t\t\t\t\t},\n\t\t\t\t}}\n\t\t\t\tgizmo\n\t\t\t\tcontroller={{\n\t\t\t\t\tinertiaOrbit: 1000,\n\t\t\t\t\tinertiaPanning: 1000,\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t<ViewSlider\n\t\t\t\t\tvalue={split}\n\t\t\t\t\tonChange={setSplit}\n\t\t\t\t\tmin={0}\n\t\t\t\t\tmax={1}\n\t\t\t\t\tstep={1e-2}\n\t\t\t\t/>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tfullwidth\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-between\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"secondary-5\"\n\t\t\t\t\t\tonClick={() => setSplit(1)}\n\t\t\t\t\t>\n\t\t\t\t\t\tOrthographic\n\t\t\t\t\t</ViewButton>\n\t\t\t\t\t<ViewButton\n\t\t\t\t\t\tvariant=\"text\"\n\t\t\t\t\t\tcolor=\"secondary-5\"\n\t\t\t\t\t\tonClick={() => setSplit(0)}\n\t\t\t\t\t>\n\t\t\t\t\t\tPerspective\n\t\t\t\t\t</ViewButton>\n\t\t\t\t</ViewPanel>\n\t\t\t\t<ViewPanel\n\t\t\t\t\tdisplay=\"flex\"\n\t\t\t\t\tjustifyContent=\"space-between\"\n\t\t\t\t\talignItems=\"center\"\n\t\t\t\t\tgap=\"M\"\n\t\t\t\t\tfullwidth\n\t\t\t\t>\n\t\t\t\t\t<ViewPanel display=\"flex\" alignItems=\"center\" gap=\"M\">\n\t\t\t\t\t\t<ViewInputNumber\n\t\t\t\t\t\t\tvalue={zoom}\n\t\t\t\t\t\t\tonChange={setZoom}\n\t\t\t\t\t\t\tonEnterKeyPressed={handleApplyZoom}\n\t\t\t\t\t\t\tfullwidth\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ViewButton onClick={handleApplyZoom}>Apply zoom</ViewButton>\n\t\t\t\t\t</ViewPanel>\n\t\t\t\t\t<ViewButton onClick={handleFitBBox}>fitBoundingBox()</ViewButton>\n\t\t\t\t</ViewPanel>\n\t\t\t</View>\n\t\t</div>\n\t)\n}\n\nfunction createBackground(context: TgdContext, text: string) {\n\tconst W = 2048\n\tconst H = 2048\n\tconst { canvas, ctx } = tgdCanvasCreateWithContext2D(W, H)\n\tctx.font = \"128px bold sans-serif\"\n\tctx.fillStyle = new TgdColor(0.4, 0.4, 0.4, 1).toString()\n\tctx.fillRect(0, 0, W, H)\n\tctx.fillStyle = \"#000\"\n\tconst measure = ctx.measureText(text)\n\tconst textWidth = measure.width\n\tconst textAsc = measure.actualBoundingBoxAscent\n\tconst textDsc = measure.actualBoundingBoxDescent\n\tctx.fillText(text, 0, H - textDsc)\n\tctx.fillText(text, 0, textAsc)\n\tctx.fillText(text, W - textWidth, H - textDsc)\n\tctx.fillText(text, W - textWidth, textAsc)\n\treturn new TgdTexture2D(context).loadBitmap(canvas)\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/_/camera/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
24429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
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

function useFloat(initialValue, onChange) {
    var _React_useState = _sliced_to_array(react__rspack_import_0_default().useState(initialValue), 2), value = _React_useState[0], setValue = _React_useState[1];
    react__rspack_import_0_default().useEffect(function() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        value
    ]);
    return [
        value,
        setValue
    ];
}


},
73068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _camera__rspack_import_1 = __webpack_require__(57418);
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
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Camera"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/camera/screen-coords",
                            children: "Screen coordinates"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                            lineNumber: 5,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_camera__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/camera/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY2FtZXJhX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZV9jc3Mtc3JjX2NvbS1hOTRkZGYuNTQ0Mzg2YWRmNzNiMDdjYS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvY2FtZXJhLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvXy9jYW1lcmEvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL3V0aWxzL2hvb2tzL2Zsb2F0LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jYW1lcmEvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdFRnZEJvdW5kaW5nQm94LFxuXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG5cdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuXHRUZ2RDb2xvcixcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RMaWdodCxcblx0VGdkTWF0ZXJpYWxEaWZmdXNlLFxuXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyR3JvdXBDYW1lcmEsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2hHbHRmLFxuXHRUZ2RQYWludGVyU2Npc3Nvcixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdHRnZENhbGNDbGFtcCxcblx0dGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7XG5cdFZpZXdCdXR0b24sXG5cdFZpZXdJbnB1dE51bWJlcixcblx0Vmlld1BhbmVsLFxuXHRWaWV3U2xpZGVyLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29uc3QgdGV4QmFja2dyb3VuZE9ydGhvID0gY3JlYXRlQmFja2dyb3VuZChjb250ZXh0LCBcIk9ydGhvZ3JhcGhpY1wiKVxuXHRjb25zdCB0ZXhCYWNrZ3JvdW5kUGVyc3AgPSBjcmVhdGVCYWNrZ3JvdW5kKGNvbnRleHQsIFwiUGVyc3BlY3RpdmVcIilcblx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFRnZENvbG9yLmZyb21TdHJpbmcoXCIjOWRmXCIpLnRvQXJheU51bWJlcjQoKVxuXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuXHRcdGNvbG9yLFxuXHRcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XG5cdFx0XHRjb2xvcjogWzAuOCwgMC44LCAwLjgsIDBdLFxuXHRcdH0pLFxuXHRcdGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcblx0fSlcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuXHRcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcblx0XHRtYXRlcmlhbCxcblx0fSlcblx0Y29uc3QgYmJveCA9IFRnZEJvdW5kaW5nQm94LmZyb20obWVzaC5jb21wdXRlQm91bmRpbmdCb3goKSlcblx0Y29uc29sZS5sb2coXCLwn5CeIFtjYW1lcmEuZGVtb0A1MV0gYmJveCA9XCIsIGJib3gpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMTYgYXQgMTQ6MTVcblx0Y29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmFtZTogXCJPcnRob2dyYXBoaWNcIiB9KVxuXHRjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5hbWU6IFwiUGVyc3BlY3RpdmVcIiB9KVxuXHRmb3IgKGNvbnN0IGNhbWVyYSBvZiBbY29udGV4dC5jYW1lcmEsIGNhbU9ydGhvLCBjYW1QZXJzcF0pIHtcblx0XHRjYW1lcmEuZml0Qm91bmRpbmdCb3goYmJveClcblx0XHRjYW1lcmEuZGVidWcoKVxuXHR9XG5cdC8vICNlbmRcblx0Y29uc3Qgc2Npc3NvcjEgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xuXHRcdFx0XHR0ZXh0dXJlOiB0ZXhCYWNrZ3JvdW5kT3J0aG8sXG5cdFx0XHRcdG1vZGU6IFwiY29udGFpblwiLFxuXHRcdFx0fSksXG5cdFx0XHRuZXcgVGdkUGFpbnRlckdyb3VwQ2FtZXJhKGNvbnRleHQsIHtcblx0XHRcdFx0Y2FtZXJhOiBjYW1PcnRobyxcblx0XHRcdFx0Y2hpbGRyZW46IFttZXNoXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdFx0eDogMCxcblx0XHR5OiAwLFxuXHRcdHdpZHRoOiAwLjUsXG5cdFx0aGVpZ2h0OiAxLFxuXHR9KVxuXHRjb25zdCBzY2lzc29yMiA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XG5cdFx0XHRcdHRleHR1cmU6IHRleEJhY2tncm91bmRQZXJzcCxcblx0XHRcdFx0bW9kZTogXCJjb250YWluXCIsXG5cdFx0XHR9KSxcblx0XHRcdG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xuXHRcdFx0XHRjYW1lcmE6IGNhbVBlcnNwLFxuXHRcdFx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0XHR4OiAwLjUsXG5cdFx0eTogMCxcblx0XHR3aWR0aDogMC41LFxuXHRcdGhlaWdodDogMSxcblx0fSlcblx0Y29udGV4dC5hZGQoXG5cdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XG5cdFx0XHRjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuXHRcdFx0Y2FtUGVyc3AuZnJvbVRyYW5zZm8oY2FtZXJhLnRyYW5zZm8pXG5cdFx0XHRjYW1QZXJzcC56b29tID0gY2FtZXJhLnpvb21cblx0XHRcdGNhbU9ydGhvLmZyb21UcmFuc2ZvKGNhbWVyYS50cmFuc2ZvKVxuXHRcdFx0Y2FtT3J0aG8uem9vbSA9IGNhbWVyYS56b29tXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG5cdFx0XHRjb2xvcjogWzAuNCwgMC40LCAwLjQsIDFdLFxuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0fSksXG5cdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxuXHRcdH0pLFxuXHQpXG5cdGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXAuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuXHRcdGlmIChldnQueCA8IDApIHtcblx0XHRcdGNhbU9ydGhvLmRlYnVnKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FtUGVyc3AuZGVidWcoKVxuXHRcdH1cblx0fSlcblx0Y29udGV4dC5wYWludCgpXG5cdHJldHVybiB7XG5cdFx0c3BsaXQodmFsdWU6IG51bWJlcikge1xuXHRcdFx0Y29uc3QgYSA9IHRnZENhbGNDbGFtcCh2YWx1ZSwgMCwgMSlcblx0XHRcdHNjaXNzb3IxLnggPSAwXG5cdFx0XHRzY2lzc29yMS53aWR0aCA9IGFcblx0XHRcdHNjaXNzb3IyLnggPSBhXG5cdFx0XHRzY2lzc29yMi53aWR0aCA9IDEgLSBhXG5cdFx0XHRjb250ZXh0LnBhaW50KClcblx0XHR9LFxuXHRcdHpvb20odmFsdWU6IG51bWJlcikge1xuXHRcdFx0Y29udGV4dC5jYW1lcmEuem9vbSA9IHZhbHVlXG5cdFx0XHRjYW1PcnRoby56b29tID0gdmFsdWVcblx0XHRcdGNhbVBlcnNwLnpvb20gPSB2YWx1ZVxuXHRcdFx0Y29udGV4dC5wYWludCgpXG5cdFx0fSxcblx0XHRmaXRCb3VuZGluZ0JveCgpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiZml0Qm91bmRpbmdCb3goKVwiLCBiYm94KVxuXHRcdFx0Y2FtT3J0aG8uZml0Qm91bmRpbmdCb3goYmJveClcblx0XHRcdGNhbVBlcnNwLmZpdEJvdW5kaW5nQm94KGJib3gpXG5cdFx0XHRjb250ZXh0LnBhaW50KClcblx0XHR9LFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG5cdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XG5cdGNvbnN0IFtzcGxpdCwgc2V0U3BsaXRdID0gdXNlRmxvYXQoMC41LCBzcnY/LnNwbGl0KVxuXHRjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSBSZWFjdC51c2VTdGF0ZSgxKVxuXHRjb25zdCBoYW5kbGVBcHBseVpvb20gPSAoKSA9PiB7XG5cdFx0c3J2Py56b29tKHpvb20pXG5cdH1cblx0Y29uc3QgaGFuZGxlRml0QkJveCA9ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIvCfkJ4gW2NhbWVyYS5kZW1vQDE1Ml0gc3J2ID1cIiwgc3J2KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTE2IGF0IDE0OjE0XG5cdFx0c3J2Py5maXRCb3VuZGluZ0JveCgpXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8Vmlld1xuXHRcdFx0XHRvblJlYWR5PXsoc2NlbmU6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG5cdFx0XHRcdFx0cmVmLmN1cnJlbnQgPSBpbml0KHNjZW5lLCBhc3NldHMpXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFzc2V0cz17e1xuXHRcdFx0XHRcdGdsYjoge1xuXHRcdFx0XHRcdFx0c3V6YW5lOiBTdXphbmVVUkwsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0Z2l6bW9cblx0XHRcdFx0Y29udHJvbGxlcj17e1xuXHRcdFx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdFx0XHRpbmVydGlhUGFubmluZzogMTAwMCxcblx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXdTbGlkZXJcblx0XHRcdFx0XHR2YWx1ZT17c3BsaXR9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldFNwbGl0fVxuXHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRtYXg9ezF9XG5cdFx0XHRcdFx0c3RlcD17MWUtMn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGZ1bGx3aWR0aFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNvbG9yPVwic2Vjb25kYXJ5LTVcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U3BsaXQoMSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0T3J0aG9ncmFwaGljXG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjb2xvcj1cInNlY29uZGFyeS01XCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNwbGl0KDApfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L1ZpZXdQYW5lbD5cblx0XHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRcdGRpc3BsYXk9XCJmbGV4XCJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuXHRcdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0XHRcdGdhcD1cIk1cIlxuXHRcdFx0XHRcdGZ1bGx3aWR0aFxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCJNXCI+XG5cdFx0XHRcdFx0XHQ8Vmlld0lucHV0TnVtYmVyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt6b29tfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17c2V0Wm9vbX1cblx0XHRcdFx0XHRcdFx0b25FbnRlcktleVByZXNzZWQ9e2hhbmRsZUFwcGx5Wm9vbX1cblx0XHRcdFx0XHRcdFx0ZnVsbHdpZHRoXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PFZpZXdCdXR0b24gb25DbGljaz17aGFuZGxlQXBwbHlab29tfT5BcHBseSB6b29tPC9WaWV3QnV0dG9uPlxuXHRcdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZpdEJCb3h9PmZpdEJvdW5kaW5nQm94KCk8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0PC9WaWV3PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQoY29udGV4dDogVGdkQ29udGV4dCwgdGV4dDogc3RyaW5nKSB7XG5cdGNvbnN0IFcgPSAyMDQ4XG5cdGNvbnN0IEggPSAyMDQ4XG5cdGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoVywgSClcblx0Y3R4LmZvbnQgPSBcIjEyOHB4IGJvbGQgc2Fucy1zZXJpZlwiXG5cdGN0eC5maWxsU3R5bGUgPSBuZXcgVGdkQ29sb3IoMC40LCAwLjQsIDAuNCwgMSkudG9TdHJpbmcoKVxuXHRjdHguZmlsbFJlY3QoMCwgMCwgVywgSClcblx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwMFwiXG5cdGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQodGV4dClcblx0Y29uc3QgdGV4dFdpZHRoID0gbWVhc3VyZS53aWR0aFxuXHRjb25zdCB0ZXh0QXNjID0gbWVhc3VyZS5hY3R1YWxCb3VuZGluZ0JveEFzY2VudFxuXHRjb25zdCB0ZXh0RHNjID0gbWVhc3VyZS5hY3R1YWxCb3VuZGluZ0JveERlc2NlbnRcblx0Y3R4LmZpbGxUZXh0KHRleHQsIDAsIEggLSB0ZXh0RHNjKVxuXHRjdHguZmlsbFRleHQodGV4dCwgMCwgdGV4dEFzYylcblx0Y3R4LmZpbGxUZXh0KHRleHQsIFcgLSB0ZXh0V2lkdGgsIEggLSB0ZXh0RHNjKVxuXHRjdHguZmlsbFRleHQodGV4dCwgVyAtIHRleHRXaWR0aCwgdGV4dEFzYylcblx0cmV0dXJuIG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChjYW52YXMpXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vY2FtZXJhLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3QgdGV4QmFja2dyb3VuZE9ydGhvID0gY3JlYXRlQmFja2dyb3VuZChjb250ZXh0LCBcXFwiT3J0aG9ncmFwaGljXFxcIilcXG5cXHRjb25zdCB0ZXhCYWNrZ3JvdW5kUGVyc3AgPSBjcmVhdGVCYWNrZ3JvdW5kKGNvbnRleHQsIFxcXCJQZXJzcGVjdGl2ZVxcXCIpXFxuXFx0Y29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFRnZENvbG9yLmZyb21TdHJpbmcoXFxcIiM5ZGZcXFwiKS50b0FyYXlOdW1iZXI0KClcXG5cXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcblxcdFxcdGNvbG9yLFxcblxcdFxcdGFtYmllbnQ6IG5ldyBUZ2RMaWdodCh7XFxuXFx0XFx0XFx0Y29sb3I6IFswLjgsIDAuOCwgMC44LCAwXSxcXG5cXHRcXHR9KSxcXG5cXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0fSlcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuXFx0XFx0YXNzZXQ6IGFzc2V0cy5nbGIuc3V6YW5lLFxcblxcdFxcdG1hdGVyaWFsLFxcblxcdH0pXFxuXFx0Y29uc3QgYmJveCA9IFRnZEJvdW5kaW5nQm94LmZyb20obWVzaC5jb21wdXRlQm91bmRpbmdCb3goKSlcXG5cXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbY2FtZXJhLmRlbW9ANTFdIGJib3ggPVxcXCIsIGJib3gpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMTYgYXQgMTQ6MTVcXG5cXHRjb25zdCBjYW1PcnRobyA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoeyBuYW1lOiBcXFwiT3J0aG9ncmFwaGljXFxcIiB9KVxcblxcdGNvbnN0IGNhbVBlcnNwID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHsgbmFtZTogXFxcIlBlcnNwZWN0aXZlXFxcIiB9KVxcblxcdGZvciAoY29uc3QgY2FtZXJhIG9mIFtjb250ZXh0LmNhbWVyYSwgY2FtT3J0aG8sIGNhbVBlcnNwXSkge1xcblxcdFxcdGNhbWVyYS5maXRCb3VuZGluZ0JveChiYm94KVxcblxcdFxcdGNhbWVyYS5kZWJ1ZygpXFxuXFx0fVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHRUZ2RCb3VuZGluZ0JveCxcXG5cXHRUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuXFx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuXFx0VGdkQ29sb3IsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZExpZ2h0LFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG5cXHRUZ2RQYWludGVyQmFja2dyb3VuZCxcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckdyb3VwQ2FtZXJhLFxcblxcdFRnZFBhaW50ZXJMb2dpYyxcXG5cXHRUZ2RQYWludGVyTWVzaEdsdGYsXFxuXFx0VGdkUGFpbnRlclNjaXNzb3IsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHR0Z2RDYWxjQ2xhbXAsXFxuXFx0dGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHtcXG5cXHRWaWV3QnV0dG9uLFxcblxcdFZpZXdJbnB1dE51bWJlcixcXG5cXHRWaWV3UGFuZWwsXFxuXFx0Vmlld1NsaWRlcixcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHRleEJhY2tncm91bmRPcnRobyA9IGNyZWF0ZUJhY2tncm91bmQoY29udGV4dCwgXFxcIk9ydGhvZ3JhcGhpY1xcXCIpXFxuXFx0Y29uc3QgdGV4QmFja2dyb3VuZFBlcnNwID0gY3JlYXRlQmFja2dyb3VuZChjb250ZXh0LCBcXFwiUGVyc3BlY3RpdmVcXFwiKVxcblxcdGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBUZ2RDb2xvci5mcm9tU3RyaW5nKFxcXCIjOWRmXFxcIikudG9BcmF5TnVtYmVyNCgpXFxuXFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRjb2xvcixcXG5cXHRcXHRhbWJpZW50OiBuZXcgVGdkTGlnaHQoe1xcblxcdFxcdFxcdGNvbG9yOiBbMC44LCAwLjgsIDAuOCwgMF0sXFxuXFx0XFx0fSksXFxuXFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdH0pXFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLnN1emFuZSxcXG5cXHRcXHRtYXRlcmlhbCxcXG5cXHR9KVxcblxcdGNvbnN0IGJib3ggPSBUZ2RCb3VuZGluZ0JveC5mcm9tKG1lc2guY29tcHV0ZUJvdW5kaW5nQm94KCkpXFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW2NhbWVyYS5kZW1vQDUxXSBiYm94ID1cXFwiLCBiYm94KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA2LTE2IGF0IDE0OjE1XFxuXFx0Y29uc3QgY2FtT3J0aG8gPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHsgbmFtZTogXFxcIk9ydGhvZ3JhcGhpY1xcXCIgfSlcXG5cXHRjb25zdCBjYW1QZXJzcCA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7IG5hbWU6IFxcXCJQZXJzcGVjdGl2ZVxcXCIgfSlcXG5cXHRmb3IgKGNvbnN0IGNhbWVyYSBvZiBbY29udGV4dC5jYW1lcmEsIGNhbU9ydGhvLCBjYW1QZXJzcF0pIHtcXG5cXHRcXHRjYW1lcmEuZml0Qm91bmRpbmdCb3goYmJveClcXG5cXHRcXHRjYW1lcmEuZGVidWcoKVxcblxcdH1cXG5cXHRjb25zdCBzY2lzc29yMSA9IG5ldyBUZ2RQYWludGVyU2Npc3Nvcihjb250ZXh0LCB7XFxuXFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdHRleHR1cmU6IHRleEJhY2tncm91bmRPcnRobyxcXG5cXHRcXHRcXHRcXHRtb2RlOiBcXFwiY29udGFpblxcXCIsXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJHcm91cENhbWVyYShjb250ZXh0LCB7XFxuXFx0XFx0XFx0XFx0Y2FtZXJhOiBjYW1PcnRobyxcXG5cXHRcXHRcXHRcXHRjaGlsZHJlbjogW21lc2hdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdF0sXFxuXFx0XFx0eDogMCxcXG5cXHRcXHR5OiAwLFxcblxcdFxcdHdpZHRoOiAwLjUsXFxuXFx0XFx0aGVpZ2h0OiAxLFxcblxcdH0pXFxuXFx0Y29uc3Qgc2Npc3NvcjIgPSBuZXcgVGdkUGFpbnRlclNjaXNzb3IoY29udGV4dCwge1xcblxcdFxcdGNoaWxkcmVuOiBbXFxuXFx0XFx0XFx0bmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHR0ZXh0dXJlOiB0ZXhCYWNrZ3JvdW5kUGVyc3AsXFxuXFx0XFx0XFx0XFx0bW9kZTogXFxcImNvbnRhaW5cXFwiLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyR3JvdXBDYW1lcmEoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGNhbWVyYTogY2FtUGVyc3AsXFxuXFx0XFx0XFx0XFx0Y2hpbGRyZW46IFttZXNoXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdFxcdHg6IDAuNSxcXG5cXHRcXHR5OiAwLFxcblxcdFxcdHdpZHRoOiAwLjUsXFxuXFx0XFx0aGVpZ2h0OiAxLFxcblxcdH0pXFxuXFx0Y29udGV4dC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJMb2dpYygoKSA9PiB7XFxuXFx0XFx0XFx0Y29uc3QgeyBjYW1lcmEgfSA9IGNvbnRleHRcXG5cXHRcXHRcXHRjYW1QZXJzcC5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcXG5cXHRcXHRcXHRjYW1QZXJzcC56b29tID0gY2FtZXJhLnpvb21cXG5cXHRcXHRcXHRjYW1PcnRoby5mcm9tVHJhbnNmbyhjYW1lcmEudHJhbnNmbylcXG5cXHRcXHRcXHRjYW1PcnRoby56b29tID0gY2FtZXJhLnpvb21cXG5cXHRcXHR9KSxcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjb2xvcjogWzAuNCwgMC40LCAwLjQsIDFdLFxcblxcdFxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdH0pLFxcblxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0XFx0Y2hpbGRyZW46IFtzY2lzc29yMSwgc2Npc3NvcjJdLFxcblxcdFxcdH0pLFxcblxcdClcXG5cXHRjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG5cXHRcXHRpZiAoZXZ0LnggPCAwKSB7XFxuXFx0XFx0XFx0Y2FtT3J0aG8uZGVidWcoKVxcblxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0Y2FtUGVyc3AuZGVidWcoKVxcblxcdFxcdH1cXG5cXHR9KVxcblxcdGNvbnRleHQucGFpbnQoKVxcblxcdHJldHVybiB7XFxuXFx0XFx0c3BsaXQodmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnN0IGEgPSB0Z2RDYWxjQ2xhbXAodmFsdWUsIDAsIDEpXFxuXFx0XFx0XFx0c2Npc3NvcjEueCA9IDBcXG5cXHRcXHRcXHRzY2lzc29yMS53aWR0aCA9IGFcXG5cXHRcXHRcXHRzY2lzc29yMi54ID0gYVxcblxcdFxcdFxcdHNjaXNzb3IyLndpZHRoID0gMSAtIGFcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHRcXHR9LFxcblxcdFxcdHpvb20odmFsdWU6IG51bWJlcikge1xcblxcdFxcdFxcdGNvbnRleHQuY2FtZXJhLnpvb20gPSB2YWx1ZVxcblxcdFxcdFxcdGNhbU9ydGhvLnpvb20gPSB2YWx1ZVxcblxcdFxcdFxcdGNhbVBlcnNwLnpvb20gPSB2YWx1ZVxcblxcdFxcdFxcdGNvbnRleHQucGFpbnQoKVxcblxcdFxcdH0sXFxuXFx0XFx0Zml0Qm91bmRpbmdCb3goKSB7XFxuXFx0XFx0XFx0Y29uc29sZS5sb2coXFxcImZpdEJvdW5kaW5nQm94KClcXFwiLCBiYm94KVxcblxcdFxcdFxcdGNhbU9ydGhvLmZpdEJvdW5kaW5nQm94KGJib3gpXFxuXFx0XFx0XFx0Y2FtUGVyc3AuZml0Qm91bmRpbmdCb3goYmJveClcXG5cXHRcXHRcXHRjb250ZXh0LnBhaW50KClcXG5cXHRcXHR9LFxcblxcdH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UmV0dXJuVHlwZTx0eXBlb2YgaW5pdD4gfCBudWxsPihudWxsKVxcblxcdGNvbnN0IHNydiA9IHJlZi5jdXJyZW50XFxuXFx0Y29uc3QgW3NwbGl0LCBzZXRTcGxpdF0gPSB1c2VGbG9hdCgwLjUsIHNydj8uc3BsaXQpXFxuXFx0Y29uc3QgW3pvb20sIHNldFpvb21dID0gUmVhY3QudXNlU3RhdGUoMSlcXG5cXHRjb25zdCBoYW5kbGVBcHBseVpvb20gPSAoKSA9PiB7XFxuXFx0XFx0c3J2Py56b29tKHpvb20pXFxuXFx0fVxcblxcdGNvbnN0IGhhbmRsZUZpdEJCb3ggPSAoKSA9PiB7XFxuXFx0XFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW2NhbWVyYS5kZW1vQDE1Ml0gc3J2ID1cXFwiLCBzcnYpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDYtMTYgYXQgMTQ6MTRcXG5cXHRcXHRzcnY/LmZpdEJvdW5kaW5nQm94KClcXG5cXHR9XFxuXFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdDxWaWV3XFxuXFx0XFx0XFx0XFx0b25SZWFkeT17KHNjZW5lOiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcblxcdFxcdFxcdFxcdFxcdHJlZi5jdXJyZW50ID0gaW5pdChzY2VuZSwgYXNzZXRzKVxcblxcdFxcdFxcdFxcdH19XFxuXFx0XFx0XFx0XFx0YXNzZXRzPXt7XFxuXFx0XFx0XFx0XFx0XFx0Z2xiOiB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0c3V6YW5lOiBTdXphbmVVUkwsXFxuXFx0XFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdFxcdGdpem1vXFxuXFx0XFx0XFx0XFx0Y29udHJvbGxlcj17e1xcblxcdFxcdFxcdFxcdFxcdGluZXJ0aWFPcmJpdDogMTAwMCxcXG5cXHRcXHRcXHRcXHRcXHRpbmVydGlhUGFubmluZzogMTAwMCxcXG5cXHRcXHRcXHRcXHR9fVxcblxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHQ8Vmlld1NsaWRlclxcblxcdFxcdFxcdFxcdFxcdHZhbHVlPXtzcGxpdH1cXG5cXHRcXHRcXHRcXHRcXHRvbkNoYW5nZT17c2V0U3BsaXR9XFxuXFx0XFx0XFx0XFx0XFx0bWluPXswfVxcblxcdFxcdFxcdFxcdFxcdG1heD17MX1cXG5cXHRcXHRcXHRcXHRcXHRzdGVwPXsxZS0yfVxcblxcdFxcdFxcdFxcdC8+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGZ1bGx3aWR0aFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvblxcblxcdFxcdFxcdFxcdFxcdFxcdHZhcmlhbnQ9XFxcInRleHRcXFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I9XFxcInNlY29uZGFyeS01XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdG9uQ2xpY2s9eygpID0+IHNldFNwbGl0KDEpfVxcblxcdFxcdFxcdFxcdFxcdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRPcnRob2dyYXBoaWNcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b25cXG5cXHRcXHRcXHRcXHRcXHRcXHR2YXJpYW50PVxcXCJ0ZXh0XFxcIlxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yPVxcXCJzZWNvbmRhcnktNVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvbkNsaWNrPXsoKSA9PiBzZXRTcGxpdCgwKX1cXG5cXHRcXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0XFx0UGVyc3BlY3RpdmVcXG5cXHRcXHRcXHRcXHRcXHQ8L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0PC9WaWV3UGFuZWw+XFxuXFx0XFx0XFx0XFx0PFZpZXdQYW5lbFxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk9XFxcImZsZXhcXFwiXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWJldHdlZW5cXFwiXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIlxcblxcdFxcdFxcdFxcdFxcdGdhcD1cXFwiTVxcXCJcXG5cXHRcXHRcXHRcXHRcXHRmdWxsd2lkdGhcXG5cXHRcXHRcXHRcXHQ+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBhbGlnbkl0ZW1zPVxcXCJjZW50ZXJcXFwiIGdhcD1cXFwiTVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PFZpZXdJbnB1dE51bWJlclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHZhbHVlPXt6b29tfVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG9uQ2hhbmdlPXtzZXRab29tfVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG9uRW50ZXJLZXlQcmVzc2VkPXtoYW5kbGVBcHBseVpvb219XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZnVsbHdpZHRoXFxuXFx0XFx0XFx0XFx0XFx0XFx0Lz5cXG5cXHRcXHRcXHRcXHRcXHRcXHQ8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVBcHBseVpvb219PkFwcGx5IHpvb208L1ZpZXdCdXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0PC9WaWV3UGFuZWw+XFxuXFx0XFx0XFx0XFx0XFx0PFZpZXdCdXR0b24gb25DbGljaz17aGFuZGxlRml0QkJveH0+Zml0Qm91bmRpbmdCb3goKTwvVmlld0J1dHRvbj5cXG5cXHRcXHRcXHRcXHQ8L1ZpZXdQYW5lbD5cXG5cXHRcXHRcXHQ8L1ZpZXc+XFxuXFx0XFx0PC9kaXY+XFxuXFx0KVxcbn1cXG5cXG5mdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kKGNvbnRleHQ6IFRnZENvbnRleHQsIHRleHQ6IHN0cmluZykge1xcblxcdGNvbnN0IFcgPSAyMDQ4XFxuXFx0Y29uc3QgSCA9IDIwNDhcXG5cXHRjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKFcsIEgpXFxuXFx0Y3R4LmZvbnQgPSBcXFwiMTI4cHggYm9sZCBzYW5zLXNlcmlmXFxcIlxcblxcdGN0eC5maWxsU3R5bGUgPSBuZXcgVGdkQ29sb3IoMC40LCAwLjQsIDAuNCwgMSkudG9TdHJpbmcoKVxcblxcdGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKVxcblxcdGN0eC5maWxsU3R5bGUgPSBcXFwiIzAwMFxcXCJcXG5cXHRjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpXFxuXFx0Y29uc3QgdGV4dFdpZHRoID0gbWVhc3VyZS53aWR0aFxcblxcdGNvbnN0IHRleHRBc2MgPSBtZWFzdXJlLmFjdHVhbEJvdW5kaW5nQm94QXNjZW50XFxuXFx0Y29uc3QgdGV4dERzYyA9IG1lYXN1cmUuYWN0dWFsQm91bmRpbmdCb3hEZXNjZW50XFxuXFx0Y3R4LmZpbGxUZXh0KHRleHQsIDAsIEggLSB0ZXh0RHNjKVxcblxcdGN0eC5maWxsVGV4dCh0ZXh0LCAwLCB0ZXh0QXNjKVxcblxcdGN0eC5maWxsVGV4dCh0ZXh0LCBXIC0gdGV4dFdpZHRoLCBIIC0gdGV4dERzYylcXG5cXHRjdHguZmlsbFRleHQodGV4dCwgVyAtIHRleHRXaWR0aCwgdGV4dEFzYylcXG5cXHRyZXR1cm4gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcylcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZsb2F0KFxuXHRpbml0aWFsVmFsdWU6IG51bWJlcixcblx0b25DaGFuZ2U/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCxcbik6IFt2YWx1ZTogbnVtYmVyLCBzZXRWYWx1ZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRdIHtcblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4gb25DaGFuZ2U/Lih2YWx1ZSksIFt2YWx1ZV0pO1xuXHRyZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRnZEJvdW5kaW5nQm94IiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ2FtZXJhUGVyc3BlY3RpdmUiLCJUZ2RDb2xvciIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckJhY2tncm91bmQiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyR3JvdXBDYW1lcmEiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaEdsdGYiLCJUZ2RQYWludGVyU2Npc3NvciIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsInRnZENhbGNDbGFtcCIsInRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlld0J1dHRvbiIsIlZpZXdJbnB1dE51bWJlciIsIlZpZXdQYW5lbCIsIlZpZXdTbGlkZXIiLCJSZWFjdCIsIlN1emFuZVVSTCIsIlZpZXciLCJ1c2VGbG9hdCIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwidGV4QmFja2dyb3VuZE9ydGhvIiwiY3JlYXRlQmFja2dyb3VuZCIsInRleEJhY2tncm91bmRQZXJzcCIsImNvbG9yIiwibWF0ZXJpYWwiLCJtZXNoIiwiYmJveCIsImNvbnNvbGUiLCJjYW1PcnRobyIsImNhbVBlcnNwIiwiX2l0ZXIiLCJjYW1lcmEiLCJzY2lzc29yMSIsInNjaXNzb3IyIiwiZXZ0Iiwic3BsaXQiLCJ2YWx1ZSIsImEiLCJ6b29tIiwiZml0Qm91bmRpbmdCb3giLCJEZW1vIiwicmVmIiwic3J2IiwiX3VzZUZsb2F0Iiwic2V0U3BsaXQiLCJfUmVhY3RfdXNlU3RhdGUiLCJzZXRab29tIiwiaGFuZGxlQXBwbHlab29tIiwiaGFuZGxlRml0QkJveCIsIm9uUmVhZHkiLCJzY2VuZSIsIm9uQ2xpY2siLCJ0ZXh0IiwiVyIsIkgiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImNhbnZhcyIsImN0eCIsIm1lYXN1cmUiLCJ0ZXh0V2lkdGgiLCJ0ZXh0QXNjIiwidGV4dERzYyIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiZnVsbCIsInNldEZ1bGwiLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnVCO0FBTUQ7QUFDRztBQUN3QjtBQUNRO0FBQ1g7QUFFOUMsU0FBU3lCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsNEJBQTRCO0lBQzVCLElBQU1DLHFCQUFxQkMsaUJBQWlCSCxTQUFTO0lBQ3JELElBQU1JLHFCQUFxQkQsaUJBQWlCSCxTQUFTO0lBQ3JELElBQU1LLFFBQXNCNUIsbURBQW1CLENBQUMsUUFBUSxhQUFhO0lBQ3JFLElBQU02QixXQUFXLElBQUkzQixrREFBa0JBLENB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