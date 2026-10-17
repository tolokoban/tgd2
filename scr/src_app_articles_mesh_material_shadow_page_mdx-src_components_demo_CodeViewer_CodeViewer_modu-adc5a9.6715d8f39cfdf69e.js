"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_material_shadow_page_mdx-src_components_demo_CodeViewer_CodeViewer_modu-adc5a9"], {
86252(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/whale-1024.c7eb89e7ce4772d7.webp";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
74576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _components_demo_Tgd__rspack_import_4 = __webpack_require__(43475);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_5 = __webpack_require__(21278);
/* import */ var _assets_image_whale_1024_webp__rspack_import_6 = __webpack_require__(86252);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}







function init(context, assets, refScene) {
    // #begin Initializing WebGL
    // The light looks at (0,0,0) from the opposite side of the corner,
    // so the shadow of Suzanne falls on the three planes.
    var light = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            distance: 0,
            position: [
                -4.5,
                6,
                -6
            ]
        }),
        // Half of the height of the visible area.
        spaceHeight: 5,
        near: 0.1,
        far: 30
    });
    light.transfo.lookAt([
        0,
        0,
        0
    ]);
    // Square shadow texture.
    light.screenWidth = 1;
    light.screenHeight = 1;
    // The diffuse materials are lit from the same direction.
    // The light camera looks toward its -Z axis.
    var _light_transfo_axisZ = _sliced_to_array(light.transfo.axisZ, 3), lx = _light_transfo_axisZ[0], ly = _light_transfo_axisZ[1], lz = _light_transfo_axisZ[2];
    var diffuseLight = new _tolokoban_tgd__rspack_import_1.TgdLight({
        direction: [
            -lx,
            -ly,
            -lz
        ]
    });
    var suzanne = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: "#e99",
            light: diffuseLight
        }),
        // Slightly moved toward the camera.
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                -0.31,
                0.25,
                -0.31
            ],
            scale: [
                1.5,
                1.5,
                1.5
            ]
        }),
        visible: true
    };
    // Shared between all the shaders, so we load it only once.
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.grid);
    var scene = {
        light: light,
        diffuseLight: diffuseLight,
        suzanne: suzanne,
        texture: texture
    };
    refScene.current = scene;
    addPainters(context, "multiply", false, scene);
    // Look into the corner formed by the three planes,
    // a bit from the right to see the shadow behind Suzanne.
    var _ref = [
        -1.4,
        0.8,
        -0.5
    ], cx = _ref[0], cy = _ref[1], cz = _ref[2];
    context.camera.transfo.orientation = new _tolokoban_tgd__rspack_import_1.TgdTransfo({
        position: [
            cx,
            cy,
            cz
        ]
    }).lookAt([
        0,
        0,
        0
    ]).orientation;
    context.camera.fitSpaceAtTarget(7, 7);
    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,
    // so we look away from the camera to make her face it.
    var _suzanne_transfo_position = _sliced_to_array(suzanne.transfo.position, 3), sx = _suzanne_transfo_position[0], sy = _suzanne_transfo_position[1], sz = _suzanne_transfo_position[2];
    suzanne.transfo.lookAt([
        sx - cx,
        sy - cy,
        sz - cz
    ]);
    context.play();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refScene = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("multiply"), 2), shader = _React_useState[0], setShader = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(false), 2), inverted = _React_useState1[0], setInverted = _React_useState1[1];
    var handleShaderChange = function handleShaderChange(value) {
        setShader(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        addPainters(context, value, inverted, scene);
        context.paint();
    };
    var handleInvertedChange = function handleInvertedChange(value) {
        setInverted(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        addPainters(context, shader, value, scene);
        context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refContext.current = context;
            init(context, assets, refScene);
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_5
            },
            image: {
                grid: _assets_image_whale_1024_webp__rspack_import_6
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                    value: shader,
                    onChange: handleShaderChange,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "multiply"
                        }, "multiply", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "color"
                        }, "color", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "add"
                        }, "add", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "halftone"
                        }, "halftone", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                            children: "discard"
                        }, "discard", false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                    lineNumber: 117,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                    value: inverted,
                    onChange: handleInvertedChange,
                    children: "Inverted"
                }, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
            lineNumber: 116,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
}
// #begin addPainters()
/**
 * Clear the context and recreate the painters that depend on `shader`.
 */ function addPainters(context, shader, inverted, param) {
    var light = param.light, diffuseLight = param.diffuseLight, suzanne = param.suzanne, texture = param.texture;
    context.removeAll();
    // Only Suzanne casts a shadow.
    var shadow = new _tolokoban_tgd__rspack_import_1.TgdPainterShadow(context, {
        camera: light,
        meshes: [
            suzanne
        ],
        resolution: 1024
    });
    // Only the planes catch the shadow.
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialShadow({
        camera: light,
        texture: shadow.texture,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: texture,
            light: diffuseLight
        }),
        shader: shader,
        inverted: inverted
    });
    var planes = [
        // Facing +Y
        makePlane(material, [
            0,
            -3,
            0
        ], [
            1,
            0,
            0
        ], [
            0,
            0,
            -1
        ]),
        // Facing -X
        makePlane(material, [
            3,
            0,
            0
        ], [
            0,
            0,
            1
        ], [
            0,
            1,
            0
        ]),
        // Facing -Z
        makePlane(material, [
            0,
            0,
            3
        ], [
            -1,
            0,
            0
        ], [
            0,
            1,
            0
        ])
    ];
    context.add(shadow, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.2,
            0.4,
            0.8,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshes(context, {
                meshes: [
                    suzanne
                ].concat(_to_consumable_array(planes))
            })
        ]
    }), function(time) {
        var y = Math.abs(Math.sin(time)) * 2 - 1.5;
        suzanne.transfo.setPosition(-0.31, y, -0.31);
    });
}
// #end
// #begin makePlane()
var SIZE = 6;
/**
 * The normal of a plane is `vecX ^ vecY`.
 */ function makePlane(material, position, vecX, vecY) {
    return {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: SIZE,
            sizeY: SIZE,
            vecX: vecX,
            vecY: vecY
        }),
        material: material,
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: position
        }),
        visible: true
    };
} // #end


},
9186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _corner_demo__rspack_import_4 = __webpack_require__(74576);
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
    "Initializing WebGL": "    // The light looks at (0,0,0) from the opposite side of the corner,\n    // so the shadow of Suzanne falls on the three planes.\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position: [-4.5, 6, -6] }),\n        // Half of the height of the visible area.\n        spaceHeight: 5,\n        near: 0.1,\n        far: 30,\n    })\n    light.transfo.lookAt([0, 0, 0])\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    // The diffuse materials are lit from the same direction.\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = light.transfo.axisZ\n    const diffuseLight = new TgdLight({ direction: [-lx, -ly, -lz] })\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialDiffuse({\n            color: \"#e99\",\n            light: diffuseLight,\n        }),\n        // Slightly moved toward the camera.\n        transfo: new TgdTransfo({ position: [-0.31, 0.25, -0.31], scale: [1.5, 1.5, 1.5] }),\n        visible: true,\n    }\n    // Shared between all the shaders, so we load it only once.\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scene: Scene = { light, diffuseLight, suzanne, texture }\n    refScene.current = scene\n    addPainters(context, \"multiply\", false, scene)\n    // Look into the corner formed by the three planes,\n    // a bit from the right to see the shadow behind Suzanne.\n    const [cx, cy, cz] = [-1.4, 0.8, -0.5]\n    context.camera.transfo.orientation = new TgdTransfo({ position: [cx, cy, cz] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(7, 7)\n    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,\n    // so we look away from the camera to make her face it.\n    const [sx, sy, sz] = suzanne.transfo.position\n    suzanne.transfo.lookAt([sx - cx, sy - cy, sz - cz])\n    context.play()",
    "addPainters()": "/**\n * Clear the context and recreate the painters that depend on `shader`.\n */\nfunction addPainters(\n    context: TgdContext,\n    shader: Shader,\n    inverted: boolean,\n    { light, diffuseLight, suzanne, texture }: Scene,\n) {\n    context.removeAll()\n    // Only Suzanne casts a shadow.\n    const shadow = new TgdPainterShadow(context, {\n        camera: light,\n        meshes: [suzanne],\n        resolution: 1024,\n    })\n    // Only the planes catch the shadow.\n    const material = new TgdMaterialShadow({\n        camera: light,\n        texture: shadow.texture,\n        material: new TgdMaterialDiffuse({\n            color: texture,\n            light: diffuseLight,\n        }),\n        shader,\n        inverted,\n    })\n    const planes = [\n        // Facing +Y\n        makePlane(material, [0, -3, 0], [1, 0, 0], [0, 0, -1]),\n        // Facing -X\n        makePlane(material, [3, 0, 0], [0, 0, 1], [0, 1, 0]),\n        // Facing -Z\n        makePlane(material, [0, 0, 3], [-1, 0, 0], [0, 1, 0]),\n    ]\n    context.add(\n        shadow,\n        new TgdPainterClear(context, { color: [0.2, 0.4, 0.8, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [suzanne, ...planes],\n                }),\n            ],\n        }),\n        (time) => {\n            const y = Math.abs(Math.sin(time)) * 2 - 1.5\n            suzanne.transfo.setPosition(-0.31, y, -0.31)\n        },\n    )\n}",
    "makePlane()": "const SIZE = 6\n\n/**\n * The normal of a plane is `vecX ^ vecY`.\n */\nfunction makePlane(\n    material: TgdMaterialShadow,\n    position: ArrayNumber3,\n    vecX: ArrayNumber3,\n    vecY: ArrayNumber3,\n): TgdMesh {\n    return {\n        geometry: new TgdGeometryPlane({ sizeX: SIZE, sizeY: SIZE, vecX, vecY }),\n        material,\n        transfo: new TgdTransfo({ position }),\n        visible: true,\n    }\n}"
};
var FULL = "import {\n    type ArrayNumber3,\n    TgdCameraOrthographic,\n    type TgdContext,\n    TgdGeometryPlane,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdMaterialShadow,\n    type TgdMesh,\n    TgdPainterClear,\n    TgdPainterMeshes,\n    TgdPainterShadow,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel, ViewSwitch } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\nimport UVGridURL from \"@/assets/image/whale-1024.webp\"\n\ntype Shader = \"multiply\" | \"color\" | \"add\" | \"halftone\"\n\n/** Everything that does not depend on `shader`. */\ninterface Scene {\n    light: TgdCameraOrthographic\n    diffuseLight: TgdLight\n    suzanne: TgdMesh\n    texture: TgdTexture2D\n}\n\nfunction init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {\n    // The light looks at (0,0,0) from the opposite side of the corner,\n    // so the shadow of Suzanne falls on the three planes.\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position: [-4.5, 6, -6] }),\n        // Half of the height of the visible area.\n        spaceHeight: 5,\n        near: 0.1,\n        far: 30,\n    })\n    light.transfo.lookAt([0, 0, 0])\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    // The diffuse materials are lit from the same direction.\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = light.transfo.axisZ\n    const diffuseLight = new TgdLight({ direction: [-lx, -ly, -lz] })\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialDiffuse({\n            color: \"#e99\",\n            light: diffuseLight,\n        }),\n        // Slightly moved toward the camera.\n        transfo: new TgdTransfo({ position: [-0.31, 0.25, -0.31], scale: [1.5, 1.5, 1.5] }),\n        visible: true,\n    }\n    // Shared between all the shaders, so we load it only once.\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scene: Scene = { light, diffuseLight, suzanne, texture }\n    refScene.current = scene\n    addPainters(context, \"multiply\", false, scene)\n    // Look into the corner formed by the three planes,\n    // a bit from the right to see the shadow behind Suzanne.\n    const [cx, cy, cz] = [-1.4, 0.8, -0.5]\n    context.camera.transfo.orientation = new TgdTransfo({ position: [cx, cy, cz] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(7, 7)\n    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,\n    // so we look away from the camera to make her face it.\n    const [sx, sy, sz] = suzanne.transfo.position\n    suzanne.transfo.lookAt([sx - cx, sy - cy, sz - cz])\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refScene = React.useRef<Scene | null>(null)\n    const [shader, setShader] = React.useState<Shader>(\"multiply\")\n    const [inverted, setInverted] = React.useState(false)\n    const handleShaderChange = (value: Shader) => {\n        setShader(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        addPainters(context, value, inverted, scene)\n        context.paint()\n    }\n    const handleInvertedChange = (value: boolean) => {\n        setInverted(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        addPainters(context, shader, value, scene)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refScene)\n            }}\n            assets={{\n                glb: { suzanne: SuzanneURL },\n                image: { grid: UVGridURL },\n            }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\">\n                <ViewOptions value={shader} onChange={handleShaderChange}>\n                    <div key=\"multiply\">multiply</div>\n                    <div key=\"color\">color</div>\n                    <div key=\"add\">add</div>\n                    <div key=\"halftone\">halftone</div>\n                    <div key=\"discard\">discard</div>\n                </ViewOptions>\n                <ViewSwitch value={inverted} onChange={handleInvertedChange}>\n                    Inverted\n                </ViewSwitch>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Clear the context and recreate the painters that depend on `shader`.\n */\nfunction addPainters(\n    context: TgdContext,\n    shader: Shader,\n    inverted: boolean,\n    { light, diffuseLight, suzanne, texture }: Scene,\n) {\n    context.removeAll()\n    // Only Suzanne casts a shadow.\n    const shadow = new TgdPainterShadow(context, {\n        camera: light,\n        meshes: [suzanne],\n        resolution: 1024,\n    })\n    // Only the planes catch the shadow.\n    const material = new TgdMaterialShadow({\n        camera: light,\n        texture: shadow.texture,\n        material: new TgdMaterialDiffuse({\n            color: texture,\n            light: diffuseLight,\n        }),\n        shader,\n        inverted,\n    })\n    const planes = [\n        // Facing +Y\n        makePlane(material, [0, -3, 0], [1, 0, 0], [0, 0, -1]),\n        // Facing -X\n        makePlane(material, [3, 0, 0], [0, 0, 1], [0, 1, 0]),\n        // Facing -Z\n        makePlane(material, [0, 0, 3], [-1, 0, 0], [0, 1, 0]),\n    ]\n    context.add(\n        shadow,\n        new TgdPainterClear(context, { color: [0.2, 0.4, 0.8, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [suzanne, ...planes],\n                }),\n            ],\n        }),\n        (time) => {\n            const y = Math.abs(Math.sin(time)) * 2 - 1.5\n            suzanne.transfo.setPosition(-0.31, y, -0.31)\n        },\n    )\n}\n\nconst SIZE = 6\n\n/**\n * The normal of a plane is `vecX ^ vecY`.\n */\nfunction makePlane(\n    material: TgdMaterialShadow,\n    position: ArrayNumber3,\n    vecX: ArrayNumber3,\n    vecY: ArrayNumber3,\n): TgdMesh {\n    return {\n        geometry: new TgdGeometryPlane({ sizeX: SIZE, sizeY: SIZE, vecX, vecY }),\n        material,\n        transfo: new TgdTransfo({ position }),\n        visible: true,\n    }\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_corner_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
54579(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _corner__rspack_import_1 = __webpack_require__(9186);
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
        h2: "h2",
        hr: "hr",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdMaterialShadow.html",
                    children: "TgdMaterialShadow"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Wrap a material to tint the fragments that are hidden from a light.\nThe distances from the light are read from a texture computed by a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/shadow",
                        children: "TgdPainterShadow"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    " using the same camera."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_corner__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Who casts, who catches"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Casting and catching shadows are independent:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Only the meshes given to the ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdPainterShadow"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                                lineNumber: 16,
                                columnNumber: 32
                            }, this),
                            " ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "cast"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                                lineNumber: 16,
                                columnNumber: 51
                            }, this),
                            " a shadow."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Only the meshes using a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdMaterialShadow"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                                lineNumber: 17,
                                columnNumber: 27
                            }, this),
                            " ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                                children: "catch"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                                lineNumber: 17,
                                columnNumber: 47
                            }, this),
                            " a shadow."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here, only Suzanne casts a shadow, and only the three planes catch it."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/mesh/material",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                    lineNumber: 23,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9zaGFkb3dfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hZGM1YTkuNjcxNWQ4ZjM5Y2ZkZjY5ZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL3NoYWRvdy9fY29ybmVyL2Nvcm5lci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9zaGFkb3cvX2Nvcm5lci9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvc2hhZG93L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbFNoYWRvdyxcbiAgICB0eXBlIFRnZE1lc2gsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoZXMsXG4gICAgVGdkUGFpbnRlclNoYWRvdyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRyYW5zZm8sXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsLCBWaWV3U3dpdGNoIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS93aGFsZS0xMDI0LndlYnBcIlxuXG50eXBlIFNoYWRlciA9IFwibXVsdGlwbHlcIiB8IFwiY29sb3JcIiB8IFwiYWRkXCIgfCBcImhhbGZ0b25lXCJcblxuLyoqIEV2ZXJ5dGhpbmcgdGhhdCBkb2VzIG5vdCBkZXBlbmQgb24gYHNoYWRlcmAuICovXG5pbnRlcmZhY2UgU2NlbmUge1xuICAgIGxpZ2h0OiBUZ2RDYW1lcmFPcnRob2dyYXBoaWNcbiAgICBkaWZmdXNlTGlnaHQ6IFRnZExpZ2h0XG4gICAgc3V6YW5uZTogVGdkTWVzaFxuICAgIHRleHR1cmU6IFRnZFRleHR1cmUyRFxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZTY2VuZTogeyBjdXJyZW50OiBTY2VuZSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBUaGUgbGlnaHQgbG9va3MgYXQgKDAsMCwwKSBmcm9tIHRoZSBvcHBvc2l0ZSBzaWRlIG9mIHRoZSBjb3JuZXIsXG4gICAgLy8gc28gdGhlIHNoYWRvdyBvZiBTdXphbm5lIGZhbGxzIG9uIHRoZSB0aHJlZSBwbGFuZXMuXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb246IFstNC41LCA2LCAtNl0gfSksXG4gICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxuICAgICAgICBzcGFjZUhlaWdodDogNSxcbiAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICBmYXI6IDMwLFxuICAgIH0pXG4gICAgbGlnaHQudHJhbnNmby5sb29rQXQoWzAsIDAsIDBdKVxuICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcbiAgICBsaWdodC5zY3JlZW5IZWlnaHQgPSAxXG4gICAgLy8gVGhlIGRpZmZ1c2UgbWF0ZXJpYWxzIGFyZSBsaXQgZnJvbSB0aGUgc2FtZSBkaXJlY3Rpb24uXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXG4gICAgY29uc3QgW2x4LCBseSwgbHpdID0gbGlnaHQudHJhbnNmby5heGlzWlxuICAgIGNvbnN0IGRpZmZ1c2VMaWdodCA9IG5ldyBUZ2RMaWdodCh7IGRpcmVjdGlvbjogWy1seCwgLWx5LCAtbHpdIH0pXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IFwiI2U5OVwiLFxuICAgICAgICAgICAgbGlnaHQ6IGRpZmZ1c2VMaWdodCxcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFNsaWdodGx5IG1vdmVkIHRvd2FyZCB0aGUgY2FtZXJhLlxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbLTAuMzEsIDAuMjUsIC0wLjMxXSwgc2NhbGU6IFsxLjUsIDEuNSwgMS41XSB9KSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gYWxsIHRoZSBzaGFkZXJzLCBzbyB3ZSBsb2FkIGl0IG9ubHkgb25jZS5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxuICAgIGNvbnN0IHNjZW5lOiBTY2VuZSA9IHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9XG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHNjZW5lXG4gICAgYWRkUGFpbnRlcnMoY29udGV4dCwgXCJtdWx0aXBseVwiLCBmYWxzZSwgc2NlbmUpXG4gICAgLy8gTG9vayBpbnRvIHRoZSBjb3JuZXIgZm9ybWVkIGJ5IHRoZSB0aHJlZSBwbGFuZXMsXG4gICAgLy8gYSBiaXQgZnJvbSB0aGUgcmlnaHQgdG8gc2VlIHRoZSBzaGFkb3cgYmVoaW5kIFN1emFubmUuXG4gICAgY29uc3QgW2N4LCBjeSwgY3pdID0gWy0xLjQsIDAuOCwgLTAuNV1cbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uID0gbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogW2N4LCBjeSwgY3pdIH0pLmxvb2tBdChbMCwgMCwgMF0pLm9yaWVudGF0aW9uXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg3LCA3KVxuICAgIC8vIFN1emFubmUgZmFjZXMgK1osIGFuZCBgbG9va0F0KClgIG1ha2VzIC1aIHBvaW50IHRvIHRoZSB0YXJnZXQsXG4gICAgLy8gc28gd2UgbG9vayBhd2F5IGZyb20gdGhlIGNhbWVyYSB0byBtYWtlIGhlciBmYWNlIGl0LlxuICAgIGNvbnN0IFtzeCwgc3ksIHN6XSA9IHN1emFubmUudHJhbnNmby5wb3NpdGlvblxuICAgIHN1emFubmUudHJhbnNmby5sb29rQXQoW3N4IC0gY3gsIHN5IC0gY3ksIHN6IC0gY3pdKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmU2NlbmUgPSBSZWFjdC51c2VSZWY8U2NlbmUgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFtzaGFkZXIsIHNldFNoYWRlcl0gPSBSZWFjdC51c2VTdGF0ZTxTaGFkZXI+KFwibXVsdGlwbHlcIilcbiAgICBjb25zdCBbaW52ZXJ0ZWQsIHNldEludmVydGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGhhbmRsZVNoYWRlckNoYW5nZSA9ICh2YWx1ZTogU2hhZGVyKSA9PiB7XG4gICAgICAgIHNldFNoYWRlcih2YWx1ZSlcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgYWRkUGFpbnRlcnMoY29udGV4dCwgdmFsdWUsIGludmVydGVkLCBzY2VuZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUludmVydGVkQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldEludmVydGVkKHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhZGRQYWludGVycyhjb250ZXh0LCBzaGFkZXIsIHZhbHVlLCBzY2VuZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlNjZW5lKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBzdXphbm5lOiBTdXphbm5lVVJMIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZ3JpZDogVVZHcmlkVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17c2hhZGVyfSBvbkNoYW5nZT17aGFuZGxlU2hhZGVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJtdWx0aXBseVwiPm11bHRpcGx5PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiY29sb3JcIj5jb2xvcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImFkZFwiPmFkZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImhhbGZ0b25lXCI+aGFsZnRvbmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJkaXNjYXJkXCI+ZGlzY2FyZDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e2ludmVydGVkfSBvbkNoYW5nZT17aGFuZGxlSW52ZXJ0ZWRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICBJbnZlcnRlZFxuICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuXG4vLyAjYmVnaW4gYWRkUGFpbnRlcnMoKVxuLyoqXG4gKiBDbGVhciB0aGUgY29udGV4dCBhbmQgcmVjcmVhdGUgdGhlIHBhaW50ZXJzIHRoYXQgZGVwZW5kIG9uIGBzaGFkZXJgLlxuICovXG5mdW5jdGlvbiBhZGRQYWludGVycyhcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgIHNoYWRlcjogU2hhZGVyLFxuICAgIGludmVydGVkOiBib29sZWFuLFxuICAgIHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9OiBTY2VuZSxcbikge1xuICAgIGNvbnRleHQucmVtb3ZlQWxsKClcbiAgICAvLyBPbmx5IFN1emFubmUgY2FzdHMgYSBzaGFkb3cuXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xuICAgICAgICBjYW1lcmE6IGxpZ2h0LFxuICAgICAgICBtZXNoZXM6IFtzdXphbm5lXSxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcbiAgICB9KVxuICAgIC8vIE9ubHkgdGhlIHBsYW5lcyBjYXRjaCB0aGUgc2hhZG93LlxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcbiAgICAgICAgdGV4dHVyZTogc2hhZG93LnRleHR1cmUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgIGNvbG9yOiB0ZXh0dXJlLFxuICAgICAgICAgICAgbGlnaHQ6IGRpZmZ1c2VMaWdodCxcbiAgICAgICAgfSksXG4gICAgICAgIHNoYWRlcixcbiAgICAgICAgaW52ZXJ0ZWQsXG4gICAgfSlcbiAgICBjb25zdCBwbGFuZXMgPSBbXG4gICAgICAgIC8vIEZhY2luZyArWVxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAtMywgMF0sIFsxLCAwLCAwXSwgWzAsIDAsIC0xXSksXG4gICAgICAgIC8vIEZhY2luZyAtWFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFszLCAwLCAwXSwgWzAsIDAsIDFdLCBbMCwgMSwgMF0pLFxuICAgICAgICAvLyBGYWNpbmcgLVpcbiAgICAgICAgbWFrZVBsYW5lKG1hdGVyaWFsLCBbMCwgMCwgM10sIFstMSwgMCwgMF0sIFswLCAxLCAwXSksXG4gICAgXVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBzaGFkb3csXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMiwgMC40LCAwLjgsIDFdLCBkZXB0aDogMSB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjdWxsOiBcImJhY2tcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBtZXNoZXM6IFtzdXphbm5lLCAuLi5wbGFuZXNdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogMiAtIDEuNVxuICAgICAgICAgICAgc3V6YW5uZS50cmFuc2ZvLnNldFBvc2l0aW9uKC0wLjMxLCB5LCAtMC4zMSlcbiAgICAgICAgfSxcbiAgICApXG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlUGxhbmUoKVxuY29uc3QgU0laRSA9IDZcblxuLyoqXG4gKiBUaGUgbm9ybWFsIG9mIGEgcGxhbmUgaXMgYHZlY1ggXiB2ZWNZYC5cbiAqL1xuZnVuY3Rpb24gbWFrZVBsYW5lKFxuICAgIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbFNoYWRvdyxcbiAgICBwb3NpdGlvbjogQXJyYXlOdW1iZXIzLFxuICAgIHZlY1g6IEFycmF5TnVtYmVyMyxcbiAgICB2ZWNZOiBBcnJheU51bWJlcjMsXG4pOiBUZ2RNZXNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoeyBzaXplWDogU0laRSwgc2l6ZVk6IFNJWkUsIHZlY1gsIHZlY1kgfSksXG4gICAgICAgIG1hdGVyaWFsLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH1cbn1cbi8vICNlbmRcbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb3JuZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgLy8gVGhlIGxpZ2h0IGxvb2tzIGF0ICgwLDAsMCkgZnJvbSB0aGUgb3Bwb3NpdGUgc2lkZSBvZiB0aGUgY29ybmVyLFxcbiAgICAvLyBzbyB0aGUgc2hhZG93IG9mIFN1emFubmUgZmFsbHMgb24gdGhlIHRocmVlIHBsYW5lcy5cXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgZGlzdGFuY2U6IDAsIHBvc2l0aW9uOiBbLTQuNSwgNiwgLTZdIH0pLFxcbiAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXFxuICAgICAgICBzcGFjZUhlaWdodDogNSxcXG4gICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgIGZhcjogMzAsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KFswLCAwLCAwXSlcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICAvLyBUaGUgZGlmZnVzZSBtYXRlcmlhbHMgYXJlIGxpdCBmcm9tIHRoZSBzYW1lIGRpcmVjdGlvbi5cXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXFxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IGxpZ2h0LnRyYW5zZm8uYXhpc1pcXG4gICAgY29uc3QgZGlmZnVzZUxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldHMuZ2xiLnN1emFubmUubWFrZUdlb21ldHJ5KCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgY29sb3I6IFxcXCIjZTk5XFxcIixcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBTbGlnaHRseSBtb3ZlZCB0b3dhcmQgdGhlIGNhbWVyYS5cXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFstMC4zMSwgMC4yNSwgLTAuMzFdLCBzY2FsZTogWzEuNSwgMS41LCAxLjVdIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBhbGwgdGhlIHNoYWRlcnMsIHNvIHdlIGxvYWQgaXQgb25seSBvbmNlLlxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxcbiAgICBjb25zdCBzY2VuZTogU2NlbmUgPSB7IGxpZ2h0LCBkaWZmdXNlTGlnaHQsIHN1emFubmUsIHRleHR1cmUgfVxcbiAgICByZWZTY2VuZS5jdXJyZW50ID0gc2NlbmVcXG4gICAgYWRkUGFpbnRlcnMoY29udGV4dCwgXFxcIm11bHRpcGx5XFxcIiwgZmFsc2UsIHNjZW5lKVxcbiAgICAvLyBMb29rIGludG8gdGhlIGNvcm5lciBmb3JtZWQgYnkgdGhlIHRocmVlIHBsYW5lcyxcXG4gICAgLy8gYSBiaXQgZnJvbSB0aGUgcmlnaHQgdG8gc2VlIHRoZSBzaGFkb3cgYmVoaW5kIFN1emFubmUuXFxuICAgIGNvbnN0IFtjeCwgY3ksIGN6XSA9IFstMS40LCAwLjgsIC0wLjVdXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbY3gsIGN5LCBjel0gfSkubG9va0F0KFswLCAwLCAwXSkub3JpZW50YXRpb25cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg3LCA3KVxcbiAgICAvLyBTdXphbm5lIGZhY2VzICtaLCBhbmQgYGxvb2tBdCgpYCBtYWtlcyAtWiBwb2ludCB0byB0aGUgdGFyZ2V0LFxcbiAgICAvLyBzbyB3ZSBsb29rIGF3YXkgZnJvbSB0aGUgY2FtZXJhIHRvIG1ha2UgaGVyIGZhY2UgaXQuXFxuICAgIGNvbnN0IFtzeCwgc3ksIHN6XSA9IHN1emFubmUudHJhbnNmby5wb3NpdGlvblxcbiAgICBzdXphbm5lLnRyYW5zZm8ubG9va0F0KFtzeCAtIGN4LCBzeSAtIGN5LCBzeiAtIGN6XSlcXG4gICAgY29udGV4dC5wbGF5KClcIixcImFkZFBhaW50ZXJzKClcIjpcIi8qKlxcbiAqIENsZWFyIHRoZSBjb250ZXh0IGFuZCByZWNyZWF0ZSB0aGUgcGFpbnRlcnMgdGhhdCBkZXBlbmQgb24gYHNoYWRlcmAuXFxuICovXFxuZnVuY3Rpb24gYWRkUGFpbnRlcnMoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIHNoYWRlcjogU2hhZGVyLFxcbiAgICBpbnZlcnRlZDogYm9vbGVhbixcXG4gICAgeyBsaWdodCwgZGlmZnVzZUxpZ2h0LCBzdXphbm5lLCB0ZXh0dXJlIH06IFNjZW5lLFxcbikge1xcbiAgICBjb250ZXh0LnJlbW92ZUFsbCgpXFxuICAgIC8vIE9ubHkgU3V6YW5uZSBjYXN0cyBhIHNoYWRvdy5cXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcXG4gICAgICAgIG1lc2hlczogW3N1emFubmVdLFxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcXG4gICAgfSlcXG4gICAgLy8gT25seSB0aGUgcGxhbmVzIGNhdGNoIHRoZSBzaGFkb3cuXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQsXFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICBzaGFkZXIsXFxuICAgICAgICBpbnZlcnRlZCxcXG4gICAgfSlcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgLy8gRmFjaW5nICtZXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAtMywgMF0sIFsxLCAwLCAwXSwgWzAsIDAsIC0xXSksXFxuICAgICAgICAvLyBGYWNpbmcgLVhcXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzMsIDAsIDBdLCBbMCwgMCwgMV0sIFswLCAxLCAwXSksXFxuICAgICAgICAvLyBGYWNpbmcgLVpcXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzAsIDAsIDNdLCBbLTEsIDAsIDBdLCBbMCwgMSwgMF0pLFxcbiAgICBdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgc2hhZG93LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjQsIDAuOCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBbc3V6YW5uZSwgLi4ucGxhbmVzXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogMiAtIDEuNVxcbiAgICAgICAgICAgIHN1emFubmUudHJhbnNmby5zZXRQb3NpdGlvbigtMC4zMSwgeSwgLTAuMzEpXFxuICAgICAgICB9LFxcbiAgICApXFxufVwiLFwibWFrZVBsYW5lKClcIjpcImNvbnN0IFNJWkUgPSA2XFxuXFxuLyoqXFxuICogVGhlIG5vcm1hbCBvZiBhIHBsYW5lIGlzIGB2ZWNYIF4gdmVjWWAuXFxuICovXFxuZnVuY3Rpb24gbWFrZVBsYW5lKFxcbiAgICBtYXRlcmlhbDogVGdkTWF0ZXJpYWxTaGFkb3csXFxuICAgIHBvc2l0aW9uOiBBcnJheU51bWJlcjMsXFxuICAgIHZlY1g6IEFycmF5TnVtYmVyMyxcXG4gICAgdmVjWTogQXJyYXlOdW1iZXIzLFxcbik6IFRnZE1lc2gge1xcbiAgICByZXR1cm4ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHsgc2l6ZVg6IFNJWkUsIHNpemVZOiBTSVpFLCB2ZWNYLCB2ZWNZIH0pLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkTWF0ZXJpYWxTaGFkb3csXFxuICAgIHR5cGUgVGdkTWVzaCxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaGVzLFxcbiAgICBUZ2RQYWludGVyU2hhZG93LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVHJhbnNmbyxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFZpZXdPcHRpb25zLCBWaWV3UGFuZWwsIFZpZXdTd2l0Y2ggfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXFxcIlxcbmltcG9ydCBVVkdyaWRVUkwgZnJvbSBcXFwiQC9hc3NldHMvaW1hZ2Uvd2hhbGUtMTAyNC53ZWJwXFxcIlxcblxcbnR5cGUgU2hhZGVyID0gXFxcIm11bHRpcGx5XFxcIiB8IFxcXCJjb2xvclxcXCIgfCBcXFwiYWRkXFxcIiB8IFxcXCJoYWxmdG9uZVxcXCJcXG5cXG4vKiogRXZlcnl0aGluZyB0aGF0IGRvZXMgbm90IGRlcGVuZCBvbiBgc2hhZGVyYC4gKi9cXG5pbnRlcmZhY2UgU2NlbmUge1xcbiAgICBsaWdodDogVGdkQ2FtZXJhT3J0aG9ncmFwaGljXFxuICAgIGRpZmZ1c2VMaWdodDogVGdkTGlnaHRcXG4gICAgc3V6YW5uZTogVGdkTWVzaFxcbiAgICB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkRcXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgcmVmU2NlbmU6IHsgY3VycmVudDogU2NlbmUgfCBudWxsIH0pIHtcXG4gICAgLy8gVGhlIGxpZ2h0IGxvb2tzIGF0ICgwLDAsMCkgZnJvbSB0aGUgb3Bwb3NpdGUgc2lkZSBvZiB0aGUgY29ybmVyLFxcbiAgICAvLyBzbyB0aGUgc2hhZG93IG9mIFN1emFubmUgZmFsbHMgb24gdGhlIHRocmVlIHBsYW5lcy5cXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgZGlzdGFuY2U6IDAsIHBvc2l0aW9uOiBbLTQuNSwgNiwgLTZdIH0pLFxcbiAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXFxuICAgICAgICBzcGFjZUhlaWdodDogNSxcXG4gICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgIGZhcjogMzAsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KFswLCAwLCAwXSlcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICAvLyBUaGUgZGlmZnVzZSBtYXRlcmlhbHMgYXJlIGxpdCBmcm9tIHRoZSBzYW1lIGRpcmVjdGlvbi5cXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXFxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IGxpZ2h0LnRyYW5zZm8uYXhpc1pcXG4gICAgY29uc3QgZGlmZnVzZUxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldHMuZ2xiLnN1emFubmUubWFrZUdlb21ldHJ5KCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgY29sb3I6IFxcXCIjZTk5XFxcIixcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBTbGlnaHRseSBtb3ZlZCB0b3dhcmQgdGhlIGNhbWVyYS5cXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFstMC4zMSwgMC4yNSwgLTAuMzFdLCBzY2FsZTogWzEuNSwgMS41LCAxLjVdIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBhbGwgdGhlIHNoYWRlcnMsIHNvIHdlIGxvYWQgaXQgb25seSBvbmNlLlxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxcbiAgICBjb25zdCBzY2VuZTogU2NlbmUgPSB7IGxpZ2h0LCBkaWZmdXNlTGlnaHQsIHN1emFubmUsIHRleHR1cmUgfVxcbiAgICByZWZTY2VuZS5jdXJyZW50ID0gc2NlbmVcXG4gICAgYWRkUGFpbnRlcnMoY29udGV4dCwgXFxcIm11bHRpcGx5XFxcIiwgZmFsc2UsIHNjZW5lKVxcbiAgICAvLyBMb29rIGludG8gdGhlIGNvcm5lciBmb3JtZWQgYnkgdGhlIHRocmVlIHBsYW5lcyxcXG4gICAgLy8gYSBiaXQgZnJvbSB0aGUgcmlnaHQgdG8gc2VlIHRoZSBzaGFkb3cgYmVoaW5kIFN1emFubmUuXFxuICAgIGNvbnN0IFtjeCwgY3ksIGN6XSA9IFstMS40LCAwLjgsIC0wLjVdXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbY3gsIGN5LCBjel0gfSkubG9va0F0KFswLCAwLCAwXSkub3JpZW50YXRpb25cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg3LCA3KVxcbiAgICAvLyBTdXphbm5lIGZhY2VzICtaLCBhbmQgYGxvb2tBdCgpYCBtYWtlcyAtWiBwb2ludCB0byB0aGUgdGFyZ2V0LFxcbiAgICAvLyBzbyB3ZSBsb29rIGF3YXkgZnJvbSB0aGUgY2FtZXJhIHRvIG1ha2UgaGVyIGZhY2UgaXQuXFxuICAgIGNvbnN0IFtzeCwgc3ksIHN6XSA9IHN1emFubmUudHJhbnNmby5wb3NpdGlvblxcbiAgICBzdXphbm5lLnRyYW5zZm8ubG9va0F0KFtzeCAtIGN4LCBzeSAtIGN5LCBzeiAtIGN6XSlcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgcmVmU2NlbmUgPSBSZWFjdC51c2VSZWY8U2NlbmUgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbc2hhZGVyLCBzZXRTaGFkZXJdID0gUmVhY3QudXNlU3RhdGU8U2hhZGVyPihcXFwibXVsdGlwbHlcXFwiKVxcbiAgICBjb25zdCBbaW52ZXJ0ZWQsIHNldEludmVydGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxcbiAgICBjb25zdCBoYW5kbGVTaGFkZXJDaGFuZ2UgPSAodmFsdWU6IFNoYWRlcikgPT4ge1xcbiAgICAgICAgc2V0U2hhZGVyKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFkZFBhaW50ZXJzKGNvbnRleHQsIHZhbHVlLCBpbnZlcnRlZCwgc2NlbmUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVJbnZlcnRlZENoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0SW52ZXJ0ZWQodmFsdWUpXFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcXG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxcblxcbiAgICAgICAgYWRkUGFpbnRlcnMoY29udGV4dCwgc2hhZGVyLCB2YWx1ZSwgc2NlbmUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxcbiAgICAgICAgICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cywgcmVmU2NlbmUpXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZ3JpZDogVVZHcmlkVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcbiAgICAgICAgICAgIGdpem1vPlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17c2hhZGVyfSBvbkNoYW5nZT17aGFuZGxlU2hhZGVyQ2hhbmdlfT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJtdWx0aXBseVxcXCI+bXVsdGlwbHk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJjb2xvclxcXCI+Y29sb3I8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJhZGRcXFwiPmFkZDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImhhbGZ0b25lXFxcIj5oYWxmdG9uZTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImRpc2NhcmRcXFwiPmRpc2NhcmQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cXG4gICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e2ludmVydGVkfSBvbkNoYW5nZT17aGFuZGxlSW52ZXJ0ZWRDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgSW52ZXJ0ZWRcXG4gICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblxcbi8qKlxcbiAqIENsZWFyIHRoZSBjb250ZXh0IGFuZCByZWNyZWF0ZSB0aGUgcGFpbnRlcnMgdGhhdCBkZXBlbmQgb24gYHNoYWRlcmAuXFxuICovXFxuZnVuY3Rpb24gYWRkUGFpbnRlcnMoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIHNoYWRlcjogU2hhZGVyLFxcbiAgICBpbnZlcnRlZDogYm9vbGVhbixcXG4gICAgeyBsaWdodCwgZGlmZnVzZUxpZ2h0LCBzdXphbm5lLCB0ZXh0dXJlIH06IFNjZW5lLFxcbikge1xcbiAgICBjb250ZXh0LnJlbW92ZUFsbCgpXFxuICAgIC8vIE9ubHkgU3V6YW5uZSBjYXN0cyBhIHNoYWRvdy5cXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcXG4gICAgICAgIG1lc2hlczogW3N1emFubmVdLFxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcXG4gICAgfSlcXG4gICAgLy8gT25seSB0aGUgcGxhbmVzIGNhdGNoIHRoZSBzaGFkb3cuXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQsXFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICBzaGFkZXIsXFxuICAgICAgICBpbnZlcnRlZCxcXG4gICAgfSlcXG4gICAgY29uc3QgcGxhbmVzID0gW1xcbiAgICAgICAgLy8gRmFjaW5nICtZXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAtMywgMF0sIFsxLCAwLCAwXSwgWzAsIDAsIC0xXSksXFxuICAgICAgICAvLyBGYWNpbmcgLVhcXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzMsIDAsIDBdLCBbMCwgMCwgMV0sIFswLCAxLCAwXSksXFxuICAgICAgICAvLyBGYWNpbmcgLVpcXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzAsIDAsIDNdLCBbLTEsIDAsIDBdLCBbMCwgMSwgMF0pLFxcbiAgICBdXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgc2hhZG93LFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4yLCAwLjQsIDAuOCwgMV0sIGRlcHRoOiAxIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IFxcXCJsZXNzXFxcIixcXG4gICAgICAgICAgICBjdWxsOiBcXFwiYmFja1xcXCIsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoZXMoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBbc3V6YW5uZSwgLi4ucGxhbmVzXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgKHRpbWUpID0+IHtcXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5hYnMoTWF0aC5zaW4odGltZSkpICogMiAtIDEuNVxcbiAgICAgICAgICAgIHN1emFubmUudHJhbnNmby5zZXRQb3NpdGlvbigtMC4zMSwgeSwgLTAuMzEpXFxuICAgICAgICB9LFxcbiAgICApXFxufVxcblxcbmNvbnN0IFNJWkUgPSA2XFxuXFxuLyoqXFxuICogVGhlIG5vcm1hbCBvZiBhIHBsYW5lIGlzIGB2ZWNYIF4gdmVjWWAuXFxuICovXFxuZnVuY3Rpb24gbWFrZVBsYW5lKFxcbiAgICBtYXRlcmlhbDogVGdkTWF0ZXJpYWxTaGFkb3csXFxuICAgIHBvc2l0aW9uOiBBcnJheU51bWJlcjMsXFxuICAgIHZlY1g6IEFycmF5TnVtYmVyMyxcXG4gICAgdmVjWTogQXJyYXlOdW1iZXIzLFxcbik6IFRnZE1lc2gge1xcbiAgICByZXR1cm4ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHsgc2l6ZVg6IFNJWkUsIHNpemVZOiBTSVpFLCB2ZWNYLCB2ZWNZIH0pLFxcbiAgICAgICAgbWF0ZXJpYWwsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFPcnRob2dyYXBoaWMiLCJUZ2RHZW9tZXRyeVBsYW5lIiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RNYXRlcmlhbFNoYWRvdyIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoZXMiLCJUZ2RQYWludGVyU2hhZG93IiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkVGV4dHVyZTJEIiwiVGdkVHJhbnNmbyIsIlZpZXdPcHRpb25zIiwiVmlld1BhbmVsIiwiVmlld1N3aXRjaCIsIlJlYWN0IiwiVmlldyIsIlN1emFubmVVUkwiLCJVVkdyaWRVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsInJlZlNjZW5lIiwibGlnaHQiLCJfbGlnaHRfdHJhbnNmb19heGlzWiIsImx4IiwibHkiLCJseiIsImRpZmZ1c2VMaWdodCIsInN1emFubmUiLCJ0ZXh0dXJlIiwic2NlbmUiLCJhZGRQYWludGVycyIsIl9yZWYiLCJjeCIsImN5IiwiY3oiLCJfc3V6YW5uZV90cmFuc2ZvX3Bvc2l0aW9uIiwic3giLCJzeSIsInN6IiwiRGVtbyIsInJlZkNvbnRleHQiLCJfUmVhY3RfdXNlU3RhdGUiLCJzaGFkZXIiLCJzZXRTaGFkZXIiLCJfUmVhY3RfdXNlU3RhdGUxIiwiaW52ZXJ0ZWQiLCJzZXRJbnZlcnRlZCIsImhhbmRsZVNoYWRlckNoYW5nZSIsInZhbHVlIiwiaGFuZGxlSW52ZXJ0ZWRDaGFuZ2UiLCJvblJlYWR5IiwicGFyYW0iLCJzaGFkb3ciLCJtYXRlcmlhbCIsInBsYW5lcyIsIm1ha2VQbGFuZSIsInRpbWUiLCJ5IiwiTWF0aCIsIlNJWkUiLCJwb3NpdGlvbiIsInZlY1giLCJ2ZWNZIiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXVCO0FBQzJDO0FBQ3pDO0FBQ2dDO0FBRVA7QUFDSTtBQVl0RCxTQUFTa0IsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYyxFQUFFQyxRQUFtQztJQUNsRiw0QkFBNEI7SUFDNUIsbUVBQW1FO0lBQ25FLHNEQUFzRDtJQUN0RCxJQUFNQyxRQUFRLElBQUl0QixxREFBcUJBLENBQUM7UUFDcEMsU0FBUyxJQUFJVSwwQ0FBVUEsQ0FBQztZQUFFLFVBQVU7WUFBRyxVQUFVO2dCQUFDLENBQUM7Z0JBQUs7Z0JBQUcsQ0FBQzthQUFFO1FBQUM7UUFDL0QsMENBQTBDO1FBQzFDLGFBQWE7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