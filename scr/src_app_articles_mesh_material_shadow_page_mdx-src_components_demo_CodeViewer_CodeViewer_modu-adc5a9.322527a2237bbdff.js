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
    addPainters(context, "halftone", scene);
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
    context.paint();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refScene = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState("halftone"), 2), shader = _React_useState[0], setShader = _React_useState[1];
    var handleShaderChange = function handleShaderChange(value) {
        setShader(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        addPainters(context, value, scene);
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
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                label: "Shader",
                value: shader,
                onChange: handleShaderChange,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "multiply"
                    }, "multiply", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "color"
                    }, "color", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "add"
                    }, "add", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "halftone"
                    }, "halftone", false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                        lineNumber: 111,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
                lineNumber: 107,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
            lineNumber: 106,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/material/shadow/_corner/corner.demo.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
// #begin addPainters()
/**
 * Clear the context and recreate the painters that depend on `shader`.
 */ function addPainters(context, shader, param) {
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
        shader: shader
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
            0.1,
            0.1,
            0.1,
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
    }));
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
    "Initializing WebGL": "    // The light looks at (0,0,0) from the opposite side of the corner,\n    // so the shadow of Suzanne falls on the three planes.\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position: [-4.5, 6, -6] }),\n        // Half of the height of the visible area.\n        spaceHeight: 5,\n        near: 0.1,\n        far: 30,\n    })\n    light.transfo.lookAt([0, 0, 0])\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    // The diffuse materials are lit from the same direction.\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = light.transfo.axisZ\n    const diffuseLight = new TgdLight({ direction: [-lx, -ly, -lz] })\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialDiffuse({\n            color: \"#e99\",\n            light: diffuseLight,\n        }),\n        // Slightly moved toward the camera.\n        transfo: new TgdTransfo({ position: [-0.31, 0.25, -0.31], scale: [1.5, 1.5, 1.5] }),\n        visible: true,\n    }\n    // Shared between all the shaders, so we load it only once.\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scene: Scene = { light, diffuseLight, suzanne, texture }\n    refScene.current = scene\n    addPainters(context, \"halftone\", scene)\n    // Look into the corner formed by the three planes,\n    // a bit from the right to see the shadow behind Suzanne.\n    const [cx, cy, cz] = [-1.4, 0.8, -0.5]\n    context.camera.transfo.orientation = new TgdTransfo({ position: [cx, cy, cz] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(7, 7)\n    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,\n    // so we look away from the camera to make her face it.\n    const [sx, sy, sz] = suzanne.transfo.position\n    suzanne.transfo.lookAt([sx - cx, sy - cy, sz - cz])\n    context.paint()",
    "addPainters()": "/**\n * Clear the context and recreate the painters that depend on `shader`.\n */\nfunction addPainters(context: TgdContext, shader: Shader, { light, diffuseLight, suzanne, texture }: Scene) {\n    context.removeAll()\n    // Only Suzanne casts a shadow.\n    const shadow = new TgdPainterShadow(context, {\n        camera: light,\n        meshes: [suzanne],\n        resolution: 1024,\n    })\n    // Only the planes catch the shadow.\n    const material = new TgdMaterialShadow({\n        camera: light,\n        texture: shadow.texture,\n        material: new TgdMaterialDiffuse({\n            color: texture,\n            light: diffuseLight,\n        }),\n        shader,\n    })\n    const planes = [\n        // Facing +Y\n        makePlane(material, [0, -3, 0], [1, 0, 0], [0, 0, -1]),\n        // Facing -X\n        makePlane(material, [3, 0, 0], [0, 0, 1], [0, 1, 0]),\n        // Facing -Z\n        makePlane(material, [0, 0, 3], [-1, 0, 0], [0, 1, 0]),\n    ]\n    context.add(\n        shadow,\n        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [suzanne, ...planes],\n                }),\n            ],\n        }),\n    )\n}",
    "makePlane()": "const SIZE = 6\n\n/**\n * The normal of a plane is `vecX ^ vecY`.\n */\nfunction makePlane(\n    material: TgdMaterialShadow,\n    position: ArrayNumber3,\n    vecX: ArrayNumber3,\n    vecY: ArrayNumber3,\n): TgdMesh {\n    return {\n        geometry: new TgdGeometryPlane({ sizeX: SIZE, sizeY: SIZE, vecX, vecY }),\n        material,\n        transfo: new TgdTransfo({ position }),\n        visible: true,\n    }\n}"
};
var FULL = "import {\n    type ArrayNumber3,\n    TgdCameraOrthographic,\n    type TgdContext,\n    TgdGeometryPlane,\n    TgdLight,\n    TgdMaterialDiffuse,\n    TgdMaterialShadow,\n    type TgdMesh,\n    TgdPainterClear,\n    TgdPainterMeshes,\n    TgdPainterShadow,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport { ViewOptions, ViewPanel } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\n\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\nimport UVGridURL from \"@/assets/image/whale-1024.webp\"\n\ntype Shader = \"multiply\" | \"color\" | \"add\" | \"halftone\"\n\n/** Everything that does not depend on `shader`. */\ninterface Scene {\n    light: TgdCameraOrthographic\n    diffuseLight: TgdLight\n    suzanne: TgdMesh\n    texture: TgdTexture2D\n}\n\nfunction init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {\n    // The light looks at (0,0,0) from the opposite side of the corner,\n    // so the shadow of Suzanne falls on the three planes.\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position: [-4.5, 6, -6] }),\n        // Half of the height of the visible area.\n        spaceHeight: 5,\n        near: 0.1,\n        far: 30,\n    })\n    light.transfo.lookAt([0, 0, 0])\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    // The diffuse materials are lit from the same direction.\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = light.transfo.axisZ\n    const diffuseLight = new TgdLight({ direction: [-lx, -ly, -lz] })\n    const suzanne: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialDiffuse({\n            color: \"#e99\",\n            light: diffuseLight,\n        }),\n        // Slightly moved toward the camera.\n        transfo: new TgdTransfo({ position: [-0.31, 0.25, -0.31], scale: [1.5, 1.5, 1.5] }),\n        visible: true,\n    }\n    // Shared between all the shaders, so we load it only once.\n    const texture = new TgdTexture2D(context).loadBitmap(assets.image.grid)\n    const scene: Scene = { light, diffuseLight, suzanne, texture }\n    refScene.current = scene\n    addPainters(context, \"halftone\", scene)\n    // Look into the corner formed by the three planes,\n    // a bit from the right to see the shadow behind Suzanne.\n    const [cx, cy, cz] = [-1.4, 0.8, -0.5]\n    context.camera.transfo.orientation = new TgdTransfo({ position: [cx, cy, cz] }).lookAt([0, 0, 0]).orientation\n    context.camera.fitSpaceAtTarget(7, 7)\n    // Suzanne faces +Z, and `lookAt()` makes -Z point to the target,\n    // so we look away from the camera to make her face it.\n    const [sx, sy, sz] = suzanne.transfo.position\n    suzanne.transfo.lookAt([sx - cx, sy - cy, sz - cz])\n    context.paint()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refScene = React.useRef<Scene | null>(null)\n    const [shader, setShader] = React.useState<Shader>(\"halftone\")\n    const handleShaderChange = (value: Shader) => {\n        setShader(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        addPainters(context, value, scene)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refScene)\n            }}\n            assets={{\n                glb: { suzanne: SuzanneURL },\n                image: { grid: UVGridURL },\n            }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\">\n                <ViewOptions label=\"Shader\" value={shader} onChange={handleShaderChange}>\n                    <div key=\"multiply\">multiply</div>\n                    <div key=\"color\">color</div>\n                    <div key=\"add\">add</div>\n                    <div key=\"halftone\">halftone</div>\n                </ViewOptions>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Clear the context and recreate the painters that depend on `shader`.\n */\nfunction addPainters(context: TgdContext, shader: Shader, { light, diffuseLight, suzanne, texture }: Scene) {\n    context.removeAll()\n    // Only Suzanne casts a shadow.\n    const shadow = new TgdPainterShadow(context, {\n        camera: light,\n        meshes: [suzanne],\n        resolution: 1024,\n    })\n    // Only the planes catch the shadow.\n    const material = new TgdMaterialShadow({\n        camera: light,\n        texture: shadow.texture,\n        material: new TgdMaterialDiffuse({\n            color: texture,\n            light: diffuseLight,\n        }),\n        shader,\n    })\n    const planes = [\n        // Facing +Y\n        makePlane(material, [0, -3, 0], [1, 0, 0], [0, 0, -1]),\n        // Facing -X\n        makePlane(material, [3, 0, 0], [0, 0, 1], [0, 1, 0]),\n        // Facing -Z\n        makePlane(material, [0, 0, 3], [-1, 0, 0], [0, 1, 0]),\n    ]\n    context.add(\n        shadow,\n        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [suzanne, ...planes],\n                }),\n            ],\n        }),\n    )\n}\n\nconst SIZE = 6\n\n/**\n * The normal of a plane is `vecX ^ vecY`.\n */\nfunction makePlane(\n    material: TgdMaterialShadow,\n    position: ArrayNumber3,\n    vecX: ArrayNumber3,\n    vecY: ArrayNumber3,\n): TgdMesh {\n    return {\n        geometry: new TgdGeometryPlane({ sizeX: SIZE, sizeY: SIZE, vecX, vecY }),\n        material,\n        transfo: new TgdTransfo({ position }),\n        visible: true,\n    }\n}\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXRlcmlhbF9zaGFkb3dfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdS1hZGM1YTkuMzIyNTI3YTIyMzdiYmRmZi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hdGVyaWFsL3NoYWRvdy9fY29ybmVyL2Nvcm5lci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXRlcmlhbC9zaGFkb3cvX2Nvcm5lci9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWF0ZXJpYWwvc2hhZG93L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbFNoYWRvdyxcbiAgICB0eXBlIFRnZE1lc2gsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoZXMsXG4gICAgVGdkUGFpbnRlclNoYWRvdyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRyYW5zZm8sXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXCJAL2Fzc2V0cy9pbWFnZS93aGFsZS0xMDI0LndlYnBcIlxuXG50eXBlIFNoYWRlciA9IFwibXVsdGlwbHlcIiB8IFwiY29sb3JcIiB8IFwiYWRkXCIgfCBcImhhbGZ0b25lXCJcblxuLyoqIEV2ZXJ5dGhpbmcgdGhhdCBkb2VzIG5vdCBkZXBlbmQgb24gYHNoYWRlcmAuICovXG5pbnRlcmZhY2UgU2NlbmUge1xuICAgIGxpZ2h0OiBUZ2RDYW1lcmFPcnRob2dyYXBoaWNcbiAgICBkaWZmdXNlTGlnaHQ6IFRnZExpZ2h0XG4gICAgc3V6YW5uZTogVGdkTWVzaFxuICAgIHRleHR1cmU6IFRnZFRleHR1cmUyRFxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZTY2VuZTogeyBjdXJyZW50OiBTY2VuZSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBUaGUgbGlnaHQgbG9va3MgYXQgKDAsMCwwKSBmcm9tIHRoZSBvcHBvc2l0ZSBzaWRlIG9mIHRoZSBjb3JuZXIsXG4gICAgLy8gc28gdGhlIHNoYWRvdyBvZiBTdXphbm5lIGZhbGxzIG9uIHRoZSB0aHJlZSBwbGFuZXMuXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb246IFstNC41LCA2LCAtNl0gfSksXG4gICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxuICAgICAgICBzcGFjZUhlaWdodDogNSxcbiAgICAgICAgbmVhcjogMC4xLFxuICAgICAgICBmYXI6IDMwLFxuICAgIH0pXG4gICAgbGlnaHQudHJhbnNmby5sb29rQXQoWzAsIDAsIDBdKVxuICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcbiAgICBsaWdodC5zY3JlZW5IZWlnaHQgPSAxXG4gICAgLy8gVGhlIGRpZmZ1c2UgbWF0ZXJpYWxzIGFyZSBsaXQgZnJvbSB0aGUgc2FtZSBkaXJlY3Rpb24uXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXG4gICAgY29uc3QgW2x4LCBseSwgbHpdID0gbGlnaHQudHJhbnNmby5heGlzWlxuICAgIGNvbnN0IGRpZmZ1c2VMaWdodCA9IG5ldyBUZ2RMaWdodCh7IGRpcmVjdGlvbjogWy1seCwgLWx5LCAtbHpdIH0pXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgY29sb3I6IFwiI2U5OVwiLFxuICAgICAgICAgICAgbGlnaHQ6IGRpZmZ1c2VMaWdodCxcbiAgICAgICAgfSksXG4gICAgICAgIC8vIFNsaWdodGx5IG1vdmVkIHRvd2FyZCB0aGUgY2FtZXJhLlxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbLTAuMzEsIDAuMjUsIC0wLjMxXSwgc2NhbGU6IFsxLjUsIDEuNSwgMS41XSB9KSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gYWxsIHRoZSBzaGFkZXJzLCBzbyB3ZSBsb2FkIGl0IG9ubHkgb25jZS5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxuICAgIGNvbnN0IHNjZW5lOiBTY2VuZSA9IHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9XG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHNjZW5lXG4gICAgYWRkUGFpbnRlcnMoY29udGV4dCwgXCJoYWxmdG9uZVwiLCBzY2VuZSlcbiAgICAvLyBMb29rIGludG8gdGhlIGNvcm5lciBmb3JtZWQgYnkgdGhlIHRocmVlIHBsYW5lcyxcbiAgICAvLyBhIGJpdCBmcm9tIHRoZSByaWdodCB0byBzZWUgdGhlIHNoYWRvdyBiZWhpbmQgU3V6YW5uZS5cbiAgICBjb25zdCBbY3gsIGN5LCBjel0gPSBbLTEuNCwgMC44LCAtMC41XVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbY3gsIGN5LCBjel0gfSkubG9va0F0KFswLCAwLCAwXSkub3JpZW50YXRpb25cbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDcsIDcpXG4gICAgLy8gU3V6YW5uZSBmYWNlcyArWiwgYW5kIGBsb29rQXQoKWAgbWFrZXMgLVogcG9pbnQgdG8gdGhlIHRhcmdldCxcbiAgICAvLyBzbyB3ZSBsb29rIGF3YXkgZnJvbSB0aGUgY2FtZXJhIHRvIG1ha2UgaGVyIGZhY2UgaXQuXG4gICAgY29uc3QgW3N4LCBzeSwgc3pdID0gc3V6YW5uZS50cmFuc2ZvLnBvc2l0aW9uXG4gICAgc3V6YW5uZS50cmFuc2ZvLmxvb2tBdChbc3ggLSBjeCwgc3kgLSBjeSwgc3ogLSBjel0pXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmU2NlbmUgPSBSZWFjdC51c2VSZWY8U2NlbmUgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IFtzaGFkZXIsIHNldFNoYWRlcl0gPSBSZWFjdC51c2VTdGF0ZTxTaGFkZXI+KFwiaGFsZnRvbmVcIilcbiAgICBjb25zdCBoYW5kbGVTaGFkZXJDaGFuZ2UgPSAodmFsdWU6IFNoYWRlcikgPT4ge1xuICAgICAgICBzZXRTaGFkZXIodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFkZFBhaW50ZXJzKGNvbnRleHQsIHZhbHVlLCBzY2VuZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlNjZW5lKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBzdXphbm5lOiBTdXphbm5lVVJMIH0sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZ3JpZDogVVZHcmlkVVJMIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyBsYWJlbD1cIlNoYWRlclwiIHZhbHVlPXtzaGFkZXJ9IG9uQ2hhbmdlPXtoYW5kbGVTaGFkZXJDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIm11bHRpcGx5XCI+bXVsdGlwbHk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XCJjb2xvclwiPmNvbG9yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiYWRkXCI+YWRkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiaGFsZnRvbmVcIj5oYWxmdG9uZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuLy8gI2JlZ2luIGFkZFBhaW50ZXJzKClcbi8qKlxuICogQ2xlYXIgdGhlIGNvbnRleHQgYW5kIHJlY3JlYXRlIHRoZSBwYWludGVycyB0aGF0IGRlcGVuZCBvbiBgc2hhZGVyYC5cbiAqL1xuZnVuY3Rpb24gYWRkUGFpbnRlcnMoY29udGV4dDogVGdkQ29udGV4dCwgc2hhZGVyOiBTaGFkZXIsIHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9OiBTY2VuZSkge1xuICAgIGNvbnRleHQucmVtb3ZlQWxsKClcbiAgICAvLyBPbmx5IFN1emFubmUgY2FzdHMgYSBzaGFkb3cuXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xuICAgICAgICBjYW1lcmE6IGxpZ2h0LFxuICAgICAgICBtZXNoZXM6IFtzdXphbm5lXSxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcbiAgICB9KVxuICAgIC8vIE9ubHkgdGhlIHBsYW5lcyBjYXRjaCB0aGUgc2hhZG93LlxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcbiAgICAgICAgdGV4dHVyZTogc2hhZG93LnRleHR1cmUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgIGNvbG9yOiB0ZXh0dXJlLFxuICAgICAgICAgICAgbGlnaHQ6IGRpZmZ1c2VMaWdodCxcbiAgICAgICAgfSksXG4gICAgICAgIHNoYWRlcixcbiAgICB9KVxuICAgIGNvbnN0IHBsYW5lcyA9IFtcbiAgICAgICAgLy8gRmFjaW5nICtZXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzAsIC0zLCAwXSwgWzEsIDAsIDBdLCBbMCwgMCwgLTFdKSxcbiAgICAgICAgLy8gRmFjaW5nIC1YXG4gICAgICAgIG1ha2VQbGFuZShtYXRlcmlhbCwgWzMsIDAsIDBdLCBbMCwgMCwgMV0sIFswLCAxLCAwXSksXG4gICAgICAgIC8vIEZhY2luZyAtWlxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAwLCAzXSwgWy0xLCAwLCAwXSwgWzAsIDEsIDBdKSxcbiAgICBdXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIHNoYWRvdyxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4xLCAwLjEsIDAuMSwgMV0sIGRlcHRoOiAxIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGN1bGw6IFwiYmFja1wiLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hlcyhjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc2hlczogW3N1emFubmUsIC4uLnBsYW5lc10sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICApXG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlUGxhbmUoKVxuY29uc3QgU0laRSA9IDZcblxuLyoqXG4gKiBUaGUgbm9ybWFsIG9mIGEgcGxhbmUgaXMgYHZlY1ggXiB2ZWNZYC5cbiAqL1xuZnVuY3Rpb24gbWFrZVBsYW5lKFxuICAgIG1hdGVyaWFsOiBUZ2RNYXRlcmlhbFNoYWRvdyxcbiAgICBwb3NpdGlvbjogQXJyYXlOdW1iZXIzLFxuICAgIHZlY1g6IEFycmF5TnVtYmVyMyxcbiAgICB2ZWNZOiBBcnJheU51bWJlcjMsXG4pOiBUZ2RNZXNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoeyBzaXplWDogU0laRSwgc2l6ZVk6IFNJWkUsIHZlY1gsIHZlY1kgfSksXG4gICAgICAgIG1hdGVyaWFsLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH1cbn1cbi8vICNlbmRcbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9jb3JuZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgLy8gVGhlIGxpZ2h0IGxvb2tzIGF0ICgwLDAsMCkgZnJvbSB0aGUgb3Bwb3NpdGUgc2lkZSBvZiB0aGUgY29ybmVyLFxcbiAgICAvLyBzbyB0aGUgc2hhZG93IG9mIFN1emFubmUgZmFsbHMgb24gdGhlIHRocmVlIHBsYW5lcy5cXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgZGlzdGFuY2U6IDAsIHBvc2l0aW9uOiBbLTQuNSwgNiwgLTZdIH0pLFxcbiAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXFxuICAgICAgICBzcGFjZUhlaWdodDogNSxcXG4gICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgIGZhcjogMzAsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KFswLCAwLCAwXSlcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICAvLyBUaGUgZGlmZnVzZSBtYXRlcmlhbHMgYXJlIGxpdCBmcm9tIHRoZSBzYW1lIGRpcmVjdGlvbi5cXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXFxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IGxpZ2h0LnRyYW5zZm8uYXhpc1pcXG4gICAgY29uc3QgZGlmZnVzZUxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcXG4gICAgY29uc3Qgc3V6YW5uZTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldHMuZ2xiLnN1emFubmUubWFrZUdlb21ldHJ5KCksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuICAgICAgICAgICAgY29sb3I6IFxcXCIjZTk5XFxcIixcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBTbGlnaHRseSBtb3ZlZCB0b3dhcmQgdGhlIGNhbWVyYS5cXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFstMC4zMSwgMC4yNSwgLTAuMzFdLCBzY2FsZTogWzEuNSwgMS41LCAxLjVdIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfVxcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBhbGwgdGhlIHNoYWRlcnMsIHNvIHdlIGxvYWQgaXQgb25seSBvbmNlLlxcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5ncmlkKVxcbiAgICBjb25zdCBzY2VuZTogU2NlbmUgPSB7IGxpZ2h0LCBkaWZmdXNlTGlnaHQsIHN1emFubmUsIHRleHR1cmUgfVxcbiAgICByZWZTY2VuZS5jdXJyZW50ID0gc2NlbmVcXG4gICAgYWRkUGFpbnRlcnMoY29udGV4dCwgXFxcImhhbGZ0b25lXFxcIiwgc2NlbmUpXFxuICAgIC8vIExvb2sgaW50byB0aGUgY29ybmVyIGZvcm1lZCBieSB0aGUgdGhyZWUgcGxhbmVzLFxcbiAgICAvLyBhIGJpdCBmcm9tIHRoZSByaWdodCB0byBzZWUgdGhlIHNoYWRvdyBiZWhpbmQgU3V6YW5uZS5cXG4gICAgY29uc3QgW2N4LCBjeSwgY3pdID0gWy0xLjQsIDAuOCwgLTAuNV1cXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbiA9IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFtjeCwgY3ksIGN6XSB9KS5sb29rQXQoWzAsIDAsIDBdKS5vcmllbnRhdGlvblxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDcsIDcpXFxuICAgIC8vIFN1emFubmUgZmFjZXMgK1osIGFuZCBgbG9va0F0KClgIG1ha2VzIC1aIHBvaW50IHRvIHRoZSB0YXJnZXQsXFxuICAgIC8vIHNvIHdlIGxvb2sgYXdheSBmcm9tIHRoZSBjYW1lcmEgdG8gbWFrZSBoZXIgZmFjZSBpdC5cXG4gICAgY29uc3QgW3N4LCBzeSwgc3pdID0gc3V6YW5uZS50cmFuc2ZvLnBvc2l0aW9uXFxuICAgIHN1emFubmUudHJhbnNmby5sb29rQXQoW3N4IC0gY3gsIHN5IC0gY3ksIHN6IC0gY3pdKVxcbiAgICBjb250ZXh0LnBhaW50KClcIixcImFkZFBhaW50ZXJzKClcIjpcIi8qKlxcbiAqIENsZWFyIHRoZSBjb250ZXh0IGFuZCByZWNyZWF0ZSB0aGUgcGFpbnRlcnMgdGhhdCBkZXBlbmQgb24gYHNoYWRlcmAuXFxuICovXFxuZnVuY3Rpb24gYWRkUGFpbnRlcnMoY29udGV4dDogVGdkQ29udGV4dCwgc2hhZGVyOiBTaGFkZXIsIHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9OiBTY2VuZSkge1xcbiAgICBjb250ZXh0LnJlbW92ZUFsbCgpXFxuICAgIC8vIE9ubHkgU3V6YW5uZSBjYXN0cyBhIHNoYWRvdy5cXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcXG4gICAgICAgIG1lc2hlczogW3N1emFubmVdLFxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcXG4gICAgfSlcXG4gICAgLy8gT25seSB0aGUgcGxhbmVzIGNhdGNoIHRoZSBzaGFkb3cuXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQsXFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICBzaGFkZXIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBsYW5lcyA9IFtcXG4gICAgICAgIC8vIEZhY2luZyArWVxcbiAgICAgICAgbWFrZVBsYW5lKG1hdGVyaWFsLCBbMCwgLTMsIDBdLCBbMSwgMCwgMF0sIFswLCAwLCAtMV0pLFxcbiAgICAgICAgLy8gRmFjaW5nIC1YXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFszLCAwLCAwXSwgWzAsIDAsIDFdLCBbMCwgMSwgMF0pLFxcbiAgICAgICAgLy8gRmFjaW5nIC1aXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAwLCAzXSwgWy0xLCAwLCAwXSwgWzAsIDEsIDBdKSxcXG4gICAgXVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHNoYWRvdyxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1lc2hlczogW3N1emFubmUsIC4uLnBsYW5lc10sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbn1cIixcIm1ha2VQbGFuZSgpXCI6XCJjb25zdCBTSVpFID0gNlxcblxcbi8qKlxcbiAqIFRoZSBub3JtYWwgb2YgYSBwbGFuZSBpcyBgdmVjWCBeIHZlY1lgLlxcbiAqL1xcbmZ1bmN0aW9uIG1ha2VQbGFuZShcXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsU2hhZG93LFxcbiAgICBwb3NpdGlvbjogQXJyYXlOdW1iZXIzLFxcbiAgICB2ZWNYOiBBcnJheU51bWJlcjMsXFxuICAgIHZlY1k6IEFycmF5TnVtYmVyMyxcXG4pOiBUZ2RNZXNoIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7IHNpemVYOiBTSVpFLCBzaXplWTogU0laRSwgdmVjWCwgdmVjWSB9KSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXFxuICAgIFRnZExpZ2h0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsU2hhZG93LFxcbiAgICB0eXBlIFRnZE1lc2gsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2hlcyxcXG4gICAgVGdkUGFpbnRlclNoYWRvdyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUZXh0dXJlMkQsXFxuICAgIFRnZFRyYW5zZm8sXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5pbXBvcnQgeyBWaWV3T3B0aW9ucywgVmlld1BhbmVsIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5pbXBvcnQgVVZHcmlkVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL3doYWxlLTEwMjQud2VicFxcXCJcXG5cXG50eXBlIFNoYWRlciA9IFxcXCJtdWx0aXBseVxcXCIgfCBcXFwiY29sb3JcXFwiIHwgXFxcImFkZFxcXCIgfCBcXFwiaGFsZnRvbmVcXFwiXFxuXFxuLyoqIEV2ZXJ5dGhpbmcgdGhhdCBkb2VzIG5vdCBkZXBlbmQgb24gYHNoYWRlcmAuICovXFxuaW50ZXJmYWNlIFNjZW5lIHtcXG4gICAgbGlnaHQ6IFRnZENhbWVyYU9ydGhvZ3JhcGhpY1xcbiAgICBkaWZmdXNlTGlnaHQ6IFRnZExpZ2h0XFxuICAgIHN1emFubmU6IFRnZE1lc2hcXG4gICAgdGV4dHVyZTogVGdkVGV4dHVyZTJEXFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMsIHJlZlNjZW5lOiB7IGN1cnJlbnQ6IFNjZW5lIHwgbnVsbCB9KSB7XFxuICAgIC8vIFRoZSBsaWdodCBsb29rcyBhdCAoMCwwLDApIGZyb20gdGhlIG9wcG9zaXRlIHNpZGUgb2YgdGhlIGNvcm5lcixcXG4gICAgLy8gc28gdGhlIHNoYWRvdyBvZiBTdXphbm5lIGZhbGxzIG9uIHRoZSB0aHJlZSBwbGFuZXMuXFxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7XFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwLCBwb3NpdGlvbjogWy00LjUsIDYsIC02XSB9KSxcXG4gICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxcbiAgICAgICAgc3BhY2VIZWlnaHQ6IDUsXFxuICAgICAgICBuZWFyOiAwLjEsXFxuICAgICAgICBmYXI6IDMwLFxcbiAgICB9KVxcbiAgICBsaWdodC50cmFuc2ZvLmxvb2tBdChbMCwgMCwgMF0pXFxuICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cXG4gICAgbGlnaHQuc2NyZWVuV2lkdGggPSAxXFxuICAgIGxpZ2h0LnNjcmVlbkhlaWdodCA9IDFcXG4gICAgLy8gVGhlIGRpZmZ1c2UgbWF0ZXJpYWxzIGFyZSBsaXQgZnJvbSB0aGUgc2FtZSBkaXJlY3Rpb24uXFxuICAgIC8vIFRoZSBsaWdodCBjYW1lcmEgbG9va3MgdG93YXJkIGl0cyAtWiBheGlzLlxcbiAgICBjb25zdCBbbHgsIGx5LCBsel0gPSBsaWdodC50cmFuc2ZvLmF4aXNaXFxuICAgIGNvbnN0IGRpZmZ1c2VMaWdodCA9IG5ldyBUZ2RMaWdodCh7IGRpcmVjdGlvbjogWy1seCwgLWx5LCAtbHpdIH0pXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgIGNvbG9yOiBcXFwiI2U5OVxcXCIsXFxuICAgICAgICAgICAgbGlnaHQ6IGRpZmZ1c2VMaWdodCxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLy8gU2xpZ2h0bHkgbW92ZWQgdG93YXJkIHRoZSBjYW1lcmEuXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbLTAuMzEsIDAuMjUsIC0wLjMxXSwgc2NhbGU6IFsxLjUsIDEuNSwgMS41XSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gYWxsIHRoZSBzaGFkZXJzLCBzbyB3ZSBsb2FkIGl0IG9ubHkgb25jZS5cXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChhc3NldHMuaW1hZ2UuZ3JpZClcXG4gICAgY29uc3Qgc2NlbmU6IFNjZW5lID0geyBsaWdodCwgZGlmZnVzZUxpZ2h0LCBzdXphbm5lLCB0ZXh0dXJlIH1cXG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHNjZW5lXFxuICAgIGFkZFBhaW50ZXJzKGNvbnRleHQsIFxcXCJoYWxmdG9uZVxcXCIsIHNjZW5lKVxcbiAgICAvLyBMb29rIGludG8gdGhlIGNvcm5lciBmb3JtZWQgYnkgdGhlIHRocmVlIHBsYW5lcyxcXG4gICAgLy8gYSBiaXQgZnJvbSB0aGUgcmlnaHQgdG8gc2VlIHRoZSBzaGFkb3cgYmVoaW5kIFN1emFubmUuXFxuICAgIGNvbnN0IFtjeCwgY3ksIGN6XSA9IFstMS40LCAwLjgsIC0wLjVdXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24gPSBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbY3gsIGN5LCBjel0gfSkubG9va0F0KFswLCAwLCAwXSkub3JpZW50YXRpb25cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg3LCA3KVxcbiAgICAvLyBTdXphbm5lIGZhY2VzICtaLCBhbmQgYGxvb2tBdCgpYCBtYWtlcyAtWiBwb2ludCB0byB0aGUgdGFyZ2V0LFxcbiAgICAvLyBzbyB3ZSBsb29rIGF3YXkgZnJvbSB0aGUgY2FtZXJhIHRvIG1ha2UgaGVyIGZhY2UgaXQuXFxuICAgIGNvbnN0IFtzeCwgc3ksIHN6XSA9IHN1emFubmUudHJhbnNmby5wb3NpdGlvblxcbiAgICBzdXphbm5lLnRyYW5zZm8ubG9va0F0KFtzeCAtIGN4LCBzeSAtIGN5LCBzeiAtIGN6XSlcXG4gICAgY29udGV4dC5wYWludCgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHJlZlNjZW5lID0gUmVhY3QudXNlUmVmPFNjZW5lIHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgW3NoYWRlciwgc2V0U2hhZGVyXSA9IFJlYWN0LnVzZVN0YXRlPFNoYWRlcj4oXFxcImhhbGZ0b25lXFxcIilcXG4gICAgY29uc3QgaGFuZGxlU2hhZGVyQ2hhbmdlID0gKHZhbHVlOiBTaGFkZXIpID0+IHtcXG4gICAgICAgIHNldFNoYWRlcih2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXFxuXFxuICAgICAgICBhZGRQYWludGVycyhjb250ZXh0LCB2YWx1ZSwgc2NlbmUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcXG4gICAgICAgICAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxcbiAgICAgICAgICAgICAgICBpbml0KGNvbnRleHQsIGFzc2V0cywgcmVmU2NlbmUpXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHsgZ3JpZDogVVZHcmlkVVJMIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxcbiAgICAgICAgICAgIGdpem1vPlxcbiAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyBsYWJlbD1cXFwiU2hhZGVyXFxcIiB2YWx1ZT17c2hhZGVyfSBvbkNoYW5nZT17aGFuZGxlU2hhZGVyQ2hhbmdlfT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJtdWx0aXBseVxcXCI+bXVsdGlwbHk8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJjb2xvclxcXCI+Y29sb3I8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJhZGRcXFwiPmFkZDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImhhbGZ0b25lXFxcIj5oYWxmdG9uZTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdPcHRpb25zPlxcbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblxcbi8qKlxcbiAqIENsZWFyIHRoZSBjb250ZXh0IGFuZCByZWNyZWF0ZSB0aGUgcGFpbnRlcnMgdGhhdCBkZXBlbmQgb24gYHNoYWRlcmAuXFxuICovXFxuZnVuY3Rpb24gYWRkUGFpbnRlcnMoY29udGV4dDogVGdkQ29udGV4dCwgc2hhZGVyOiBTaGFkZXIsIHsgbGlnaHQsIGRpZmZ1c2VMaWdodCwgc3V6YW5uZSwgdGV4dHVyZSB9OiBTY2VuZSkge1xcbiAgICBjb250ZXh0LnJlbW92ZUFsbCgpXFxuICAgIC8vIE9ubHkgU3V6YW5uZSBjYXN0cyBhIHNoYWRvdy5cXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBsaWdodCxcXG4gICAgICAgIG1lc2hlczogW3N1emFubmVdLFxcbiAgICAgICAgcmVzb2x1dGlvbjogMTAyNCxcXG4gICAgfSlcXG4gICAgLy8gT25seSB0aGUgcGxhbmVzIGNhdGNoIHRoZSBzaGFkb3cuXFxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsU2hhZG93KHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQsXFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogdGV4dHVyZSxcXG4gICAgICAgICAgICBsaWdodDogZGlmZnVzZUxpZ2h0LFxcbiAgICAgICAgfSksXFxuICAgICAgICBzaGFkZXIsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBsYW5lcyA9IFtcXG4gICAgICAgIC8vIEZhY2luZyArWVxcbiAgICAgICAgbWFrZVBsYW5lKG1hdGVyaWFsLCBbMCwgLTMsIDBdLCBbMSwgMCwgMF0sIFswLCAwLCAtMV0pLFxcbiAgICAgICAgLy8gRmFjaW5nIC1YXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFszLCAwLCAwXSwgWzAsIDAsIDFdLCBbMCwgMSwgMF0pLFxcbiAgICAgICAgLy8gRmFjaW5nIC1aXFxuICAgICAgICBtYWtlUGxhbmUobWF0ZXJpYWwsIFswLCAwLCAzXSwgWy0xLCAwLCAwXSwgWzAsIDEsIDBdKSxcXG4gICAgXVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHNoYWRvdyxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1lc2hlczogW3N1emFubmUsIC4uLnBsYW5lc10sXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIF0sXFxuICAgICAgICB9KSxcXG4gICAgKVxcbn1cXG5cXG5jb25zdCBTSVpFID0gNlxcblxcbi8qKlxcbiAqIFRoZSBub3JtYWwgb2YgYSBwbGFuZSBpcyBgdmVjWCBeIHZlY1lgLlxcbiAqL1xcbmZ1bmN0aW9uIG1ha2VQbGFuZShcXG4gICAgbWF0ZXJpYWw6IFRnZE1hdGVyaWFsU2hhZG93LFxcbiAgICBwb3NpdGlvbjogQXJyYXlOdW1iZXIzLFxcbiAgICB2ZWNYOiBBcnJheU51bWJlcjMsXFxuICAgIHZlY1k6IEFycmF5TnVtYmVyMyxcXG4pOiBUZ2RNZXNoIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7IHNpemVYOiBTSVpFLCBzaXplWTogU0laRSwgdmVjWCwgdmVjWSB9KSxcXG4gICAgICAgIG1hdGVyaWFsLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkR2VvbWV0cnlQbGFuZSIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkTWF0ZXJpYWxTaGFkb3ciLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaGVzIiwiVGdkUGFpbnRlclNoYWRvdyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFRyYW5zZm8iLCJWaWV3T3B0aW9ucyIsIlZpZXdQYW5lbCIsIlJlYWN0IiwiVmlldyIsIlN1emFubmVVUkwiLCJVVkdyaWRVUkwiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsInJlZlNjZW5lIiwibGlnaHQiLCJfbGlnaHRfdHJhbnNmb19heGlzWiIsImx4IiwibHkiLCJseiIsImRpZmZ1c2VMaWdodCIsInN1emFubmUiLCJ0ZXh0dXJlIiwic2NlbmUiLCJhZGRQYWludGVycyIsIl9yZWYiLCJjeCIsImN5IiwiY3oiLCJfc3V6YW5uZV90cmFuc2ZvX3Bvc2l0aW9uIiwic3giLCJzeSIsInN6IiwiRGVtbyIsInJlZkNvbnRleHQiLCJfUmVhY3RfdXNlU3RhdGUiLCJzaGFkZXIiLCJzZXRTaGFkZXIiLCJoYW5kbGVTaGFkZXJDaGFuZ2UiLCJ2YWx1ZSIsIm9uUmVhZHkiLCJwYXJhbSIsInNoYWRvdyIsIm1hdGVyaWFsIiwicGxhbmVzIiwibWFrZVBsYW5lIiwiU0laRSIsInBvc2l0aW9uIiwidmVjWCIsInZlY1kiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFldUI7QUFDK0I7QUFDN0I7QUFDZ0M7QUFFUDtBQUNJO0FBWXRELFNBQVNpQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjLEVBQUVDLFFBQW1DO0lBQ2xGLDRCQUE0QjtJQUM1QixtRUFBbUU7SUFDbkUsc0RBQXNEO0lBQ3RELElBQU1DLFFBQVEsSUFBSXJCLHFEQUFxQkEsQ0FBQztRQUNwQyxTQUFTLElBQUlVLDBDQUFVQSxDQUFDO1lBQUUsVUFBVTtZQUFHLFVBQVU7Z0JBQUMsQ0FBQztnQkFBSztnQkFBRyxDQUFDO2FBQUU7UUFBQztRQUMvRCwwQ0FBMEM7UUFDMUMsYUFBYTtRQUNiLE1BQU07UUFDTixLQUFLO0lBQ1Q7SUFDQVcsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQUM7UUFBRztRQUFHO0tBQUU7SUFDOUIseUJBQXlCO0lB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