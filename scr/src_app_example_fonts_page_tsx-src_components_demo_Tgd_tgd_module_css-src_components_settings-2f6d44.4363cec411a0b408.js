"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_example_fonts_page_tsx-src_components_demo_Tgd_tgd_module_css-src_components_settings-2f6d44"], {
25794(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "fnt/Fuzar_GX.5512f2ffa5ec804b.woff2";

},
56735(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.6997b22ac1d3c989.webp";

},
12444(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.4360b2d7fd824d08.webp";

},
29305(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.9ede69dc0bde1bb1.webp";

},
12599(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.4083d9709c18bba2.webp";

},
70740(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.25febb9fa4b1da65.webp";

},
68081(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.2c62d2ea48ae91f6.webp";

},
98284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PlayingWithFonts)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var fontkit__rspack_import_2 = __webpack_require__(6852);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);
/* import */ var _assets_font_Fuzar_GX_woff2__rspack_import_4 = __webpack_require__(25794);
/* import */ var _assets_cubemap_1024_warehouse_posX_webp__rspack_import_5 = __webpack_require__(12599);
/* import */ var _assets_cubemap_1024_warehouse_posY_webp__rspack_import_6 = __webpack_require__(70740);
/* import */ var _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_7 = __webpack_require__(68081);
/* import */ var _assets_cubemap_1024_warehouse_negX_webp__rspack_import_8 = __webpack_require__(56735);
/* import */ var _assets_cubemap_1024_warehouse_negY_webp__rspack_import_9 = __webpack_require__(12444);
/* import */ var _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_10 = __webpack_require__(29305);
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











var TEXT = "Fubar";
var LIGHT_BLUE = [
    0.68,
    0.85,
    1,
    1
];
function init(context, assets) {
    var _context_camera_transfo;
    // #begin Initializing WebGL
    // The font file has been loaded as an ArrayBuffer.
    var font = fontkit__rspack_import_2.create(new Uint8Array(assets.data.fuzar));
    console.log("🐞 [fonts@41] font =", font); // @FIXME: Remove this line written on 2026-10-23 at 17:56
    console.log("🐞 [fonts@42] font.variationAxes =", font.variationAxes); // @FIXME: Remove this line written on 2026-10-23 at 18:15
    var textures = {
        metallic: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).fill("#fff"),
        roughness: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).fill("#444")
    };
    // One mesh per glyph, so each letter casts its shadow on the others.
    var letters = [];
    var bbox = new _tolokoban_tgd__rspack_import_1.TgdBoundingBox();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = makeGlyphPaths(font, TEXT)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, path = _step_value.path, x = _step_value.x, y = _step_value.y;
            var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometryPath(path, {
                // Glyphs often have overlapping contours.
                fillRule: "nonzero",
                thickness: 0.2
            });
            var _geometry_computeBoundingBox = geometry.computeBoundingBox(), min = _geometry_computeBoundingBox.min, max = _geometry_computeBoundingBox.max;
            bbox.addPoint(min[0] + x, min[1] + y, min[2]);
            bbox.addPoint(max[0] + x, max[1] + y, max[2]);
            letters.push({
                geometry: geometry,
                transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
                    position: [
                        x,
                        y,
                        0
                    ]
                }),
                visible: true,
                textures: textures
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var Y = letters.map(function(letter) {
        return letter.transfo.position.y;
    });
    // The text stands on the floor (Y = 0), centered on X and Z.
    var min1 = bbox.min, max1 = bbox.max;
    var height = max1[1] - min1[1];
    // The letters use the material of their parent.
    var gold = {
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                -(min1[0] + max1[0]) / 2,
                -min1[1],
                0
            ]
        }),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                1,
                0.85,
                0.45,
                1
            ]
        }),
        children: letters
    };
    // The floor receives the shadow of the text.
    var floor = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 20,
            sizeY: 20,
            vecX: [
                1,
                0,
                0
            ],
            vecY: [
                0,
                0,
                -1
            ]
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: LIGHT_BLUE
        })
    };
    var meshes = [
        gold,
        floor
    ];
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: meshes
    });
    var target = [
        0,
        height / 2,
        0
    ];
    var shadow = new _tolokoban_tgd__rspack_import_1.TgdPainterShadow(context, {
        camera: makeShadowCamera(target),
        meshes: meshes,
        resolution: 4096
    });
    // The light camera looks toward its -Z axis.
    var _shadow_camera_transfo_axisZ = _sliced_to_array(shadow.camera.transfo.axisZ, 3), lx = _shadow_camera_transfo_axisZ[0], ly = _shadow_camera_transfo_axisZ[1], lz = _shadow_camera_transfo_axisZ[2];
    var skyboxTransfo = new _tolokoban_tgd__rspack_import_1.TgdTransfo();
    var filter = new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        // The gold reflects this skybox, but we don't paint it: the background is light blue.
        skyboxTexture: new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
            imagePosX: assets.image.posX,
            imagePosY: assets.image.posY,
            imagePosZ: assets.image.posZ,
            imageNegX: assets.image.negX,
            imageNegY: assets.image.negY,
            imageNegZ: assets.image.negZ
        }),
        skyboxTransfo: skyboxTransfo,
        light: new _tolokoban_tgd__rspack_import_1.TgdLight({
            color: [
                1,
                0.95,
                0.9,
                1
            ],
            direction: [
                -lx,
                -ly,
                -lz
            ]
        }),
        shadow: {
            camera: shadow.camera,
            texture: shadow.texture
        },
        ambientOcclusion: {
            intensity: 1.5,
            blur: true,
            combineWithLight: false
        },
        cavity: {
            ridge: 1,
            valley: 1
        }
    });
    context.camera.near = 0.1;
    context.camera.far = 100;
    (_context_camera_transfo = context.camera.transfo).setPosition.apply(_context_camera_transfo, _to_consumable_array(target));
    context.camera.transfo.orientation = new _tolokoban_tgd__rspack_import_1.TgdTransfo({
        position: [
            0,
            2,
            8
        ]
    }).lookAt([
        0,
        0,
        0
    ]).orientation;
    context.camera.fitSpaceAtTarget(max1[0] - min1[0] + 1, height + 1);
    context.add(shadow, deferred, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: LIGHT_BLUE,
        depth: 1
    }), // Nothing is painted (alpha = 0) where there is no mesh.
    new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
                texture: deferred.textureAlbedo,
                // The deferred shading has no anti-aliasing, and the background is transparent.
                filters: [
                    filter,
                    new _tolokoban_tgd__rspack_import_1.TgdFilterAntiAliasing({
                        strength: 1,
                        alpha: true
                    })
                ],
                flipY: true
            })
        ]
    }), function(time, delta) {
        var ang = time * 3;
        var h = 0.3;
        for(var i = 0; i < letters.length; i++){
            var letter = letters[i];
            var shift = i * 2 * Math.PI / letters.length;
            var y = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(Math.sin(ang + shift), 0, 1) * h;
            letter.transfo.setPosition(letter.transfo.position.x, Y[i] + y, letter.transfo.position.z);
        }
        skyboxTransfo.orbitAroundX(-delta * 0.1);
    });
    context.play();
// #end
}
function PlayingWithFonts() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        fullscreen: true,
        onReady: init,
        assets: {
            data: {
                fuzar: _assets_font_Fuzar_GX_woff2__rspack_import_4
            },
            image: {
                posX: _assets_cubemap_1024_warehouse_posX_webp__rspack_import_5,
                posY: _assets_cubemap_1024_warehouse_posY_webp__rspack_import_6,
                posZ: _assets_cubemap_1024_warehouse_posZ_webp__rspack_import_7,
                negX: _assets_cubemap_1024_warehouse_negX_webp__rspack_import_8,
                negY: _assets_cubemap_1024_warehouse_negY_webp__rspack_import_9,
                negZ: _assets_cubemap_1024_warehouse_negZ_webp__rspack_import_10
            }
        },
        controller: {
            inertiaOrbit: 1000
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/example/fonts/fonts.tsx",
        lineNumber: 165,
        columnNumber: 9
    }, this);
}
// #begin makeGlyphPaths()
/**
 * SVG path of each glyph of `text`, with its position in the text.
 * The unit is the em, and the font space has its Y axis pointing up, like WebGL.
 * Glyphs without outline (spaces) are skipped.
 */ function makeGlyphPaths(font, text) {
    var run = font.layout(text);
    var scale = 1 / font.unitsPerEm;
    var glyphs = [];
    var x = 0;
    var y = 0;
    for(var i = 0; i < run.glyphs.length; i++){
        var glyphPath = run.glyphs[i].path;
        var position = run.positions[i];
        if (glyphPath.commands.length > 0) {
            glyphs.push({
                path: glyphPath.scale(scale).toSVG(),
                x: (x + position.xOffset) * scale,
                y: (y + position.yOffset) * scale
            });
        }
        x += position.xAdvance;
        y += position.yAdvance;
    }
    return glyphs;
}
// #end
// #begin makeShadowCamera()
/**
 * The light is at the top left of the text, in front of it,
 * and looks at `target`.
 */ function makeShadowCamera(target) {
    var position = new _tolokoban_tgd__rspack_import_1.TgdVec3(-4, 2, 5);
    var distance = new _tolokoban_tgd__rspack_import_1.TgdVec3(position).subtract(new _tolokoban_tgd__rspack_import_1.TgdVec3(target)).size;
    var light = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            distance: 0,
            position: position
        }),
        // Half of the height of the visible area.
        spaceHeight: 4,
        near: Math.max(0.1, distance - 6),
        far: distance + 16
    });
    light.transfo.lookAt(target);
    // Square shadow texture.
    light.screenWidth = 1;
    light.screenHeight = 1;
    return light;
} // #end


},
42513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _fonts__rspack_import_1 = __webpack_require__(98284);


function DemoContainer() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_fonts__rspack_import_1["default"], {}, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/example/fonts/page.tsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfZXhhbXBsZV9mb250c19wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZXR0aW5ncy0yZjZkNDQuNDM2M2NlYzQxMWEwYjQwOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9leGFtcGxlL2ZvbnRzL2ZvbnRzLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvZXhhbXBsZS9mb250cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIFRnZEJvdW5kaW5nQm94LFxuICAgIHRnZENhbGNDbGFtcCxcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckFudGlBbGlhc2luZyxcbiAgICBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXG4gICAgVGdkR2VvbWV0cnlQYXRoLFxuICAgIFRnZEdlb21ldHJ5UGxhbmUsXG4gICAgVGdkTGlnaHQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxuICAgIHR5cGUgVGdkTWVzaFdpdGhUZXh0dXJlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJTaGFkb3csXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcbiAgICBUZ2RUcmFuc2ZvLFxuICAgIFRnZFZlYzMsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgKiBhcyBmb250a2l0IGZyb20gXCJmb250a2l0XCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXCJAL2Fzc2V0cy9mb250L0Z1emFyX0dYLndvZmYyXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL3Bvc1gud2VicFwiXG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvcG9zWi53ZWJwXCJcbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvd2FyZWhvdXNlL25lZ1gud2VicFwiXG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L3dhcmVob3VzZS9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC93YXJlaG91c2UvbmVnWi53ZWJwXCJcblxuY29uc3QgVEVYVCA9IFwiRnViYXJcIlxuY29uc3QgTElHSFRfQkxVRTogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gPSBbMC42OCwgMC44NSwgMSwgMV1cblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBUaGUgZm9udCBmaWxlIGhhcyBiZWVuIGxvYWRlZCBhcyBhbiBBcnJheUJ1ZmZlci5cbiAgICBjb25zdCBmb250ID0gZm9udGtpdC5jcmVhdGUobmV3IFVpbnQ4QXJyYXkoYXNzZXRzLmRhdGEuZnV6YXIpIGFzIEJ1ZmZlcikgYXMgZm9udGtpdC5Gb250XG4gICAgY29uc29sZS5sb2coXCLwn5CeIFtmb250c0A0MV0gZm9udCA9XCIsIGZvbnQpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMTAtMjMgYXQgMTc6NTZcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW2ZvbnRzQDQyXSBmb250LnZhcmlhdGlvbkF4ZXMgPVwiLCBmb250LnZhcmlhdGlvbkF4ZXMpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMTAtMjMgYXQgMTg6MTVcbiAgICBjb25zdCB0ZXh0dXJlczogVGdkTWVzaFdpdGhUZXh0dXJlc1tcInRleHR1cmVzXCJdID0ge1xuICAgICAgICBtZXRhbGxpYzogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5maWxsKFwiI2ZmZlwiKSxcbiAgICAgICAgcm91Z2huZXNzOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmZpbGwoXCIjNDQ0XCIpLFxuICAgIH1cbiAgICAvLyBPbmUgbWVzaCBwZXIgZ2x5cGgsIHNvIGVhY2ggbGV0dGVyIGNhc3RzIGl0cyBzaGFkb3cgb24gdGhlIG90aGVycy5cbiAgICBjb25zdCBsZXR0ZXJzOiBUZ2RNZXNoV2l0aFRleHR1cmVzW10gPSBbXVxuICAgIGNvbnN0IGJib3ggPSBuZXcgVGdkQm91bmRpbmdCb3goKVxuICAgIGZvciAoY29uc3QgeyBwYXRoLCB4LCB5IH0gb2YgbWFrZUdseXBoUGF0aHMoZm9udCwgVEVYVCkpIHtcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlQYXRoKHBhdGgsIHtcbiAgICAgICAgICAgIC8vIEdseXBocyBvZnRlbiBoYXZlIG92ZXJsYXBwaW5nIGNvbnRvdXJzLlxuICAgICAgICAgICAgZmlsbFJ1bGU6IFwibm9uemVyb1wiLFxuICAgICAgICAgICAgdGhpY2tuZXNzOiAwLjIsXG4gICAgICAgICAgICAvLyBiZXZlbDogeyB3aWR0aDogMC4wMiwgc2VnbWVudHM6IDMgfSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KClcbiAgICAgICAgYmJveC5hZGRQb2ludChtaW5bMF0gKyB4LCBtaW5bMV0gKyB5LCBtaW5bMl0pXG4gICAgICAgIGJib3guYWRkUG9pbnQobWF4WzBdICsgeCwgbWF4WzFdICsgeSwgbWF4WzJdKVxuICAgICAgICBsZXR0ZXJzLnB1c2goe1xuICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbeCwgeSwgMF0gfSksXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dHVyZXMsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IFkgPSBsZXR0ZXJzLm1hcCgobGV0dGVyKSA9PiBsZXR0ZXIudHJhbnNmby5wb3NpdGlvbi55KVxuICAgIC8vIFRoZSB0ZXh0IHN0YW5kcyBvbiB0aGUgZmxvb3IgKFkgPSAwKSwgY2VudGVyZWQgb24gWCBhbmQgWi5cbiAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSBiYm94XG4gICAgY29uc3QgaGVpZ2h0ID0gbWF4WzFdIC0gbWluWzFdXG4gICAgLy8gVGhlIGxldHRlcnMgdXNlIHRoZSBtYXRlcmlhbCBvZiB0aGVpciBwYXJlbnQuXG4gICAgY29uc3QgZ29sZDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWy0obWluWzBdICsgbWF4WzBdKSAvIDIsIC1taW5bMV0sIDBdIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMC44NSwgMC40NSwgMV0gfSksXG4gICAgICAgIGNoaWxkcmVuOiBsZXR0ZXJzLFxuICAgIH1cbiAgICAvLyBUaGUgZmxvb3IgcmVjZWl2ZXMgdGhlIHNoYWRvdyBvZiB0aGUgdGV4dC5cbiAgICBjb25zdCBmbG9vcjogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeVBsYW5lKHsgc2l6ZVg6IDIwLCBzaXplWTogMjAsIHZlY1g6IFsxLCAwLCAwXSwgdmVjWTogWzAsIDAsIC0xXSB9KSxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogTElHSFRfQkxVRSB9KSxcbiAgICB9XG4gICAgY29uc3QgbWVzaGVzID0gW2dvbGQsIGZsb29yXVxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXMgfSlcbiAgICBjb25zdCB0YXJnZXQ6IEFycmF5TnVtYmVyMyA9IFswLCBoZWlnaHQgLyAyLCAwXVxuICAgIGNvbnN0IHNoYWRvdyA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcbiAgICAgICAgY2FtZXJhOiBtYWtlU2hhZG93Q2FtZXJhKHRhcmdldCksXG4gICAgICAgIG1lc2hlcyxcbiAgICAgICAgcmVzb2x1dGlvbjogNDA5NixcbiAgICB9KVxuICAgIC8vIFRoZSBsaWdodCBjYW1lcmEgbG9va3MgdG93YXJkIGl0cyAtWiBheGlzLlxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IHNoYWRvdy5jYW1lcmEudHJhbnNmby5heGlzWlxuICAgIGNvbnN0IHNreWJveFRyYW5zZm8gPSBuZXcgVGdkVHJhbnNmbygpXG4gICAgY29uc3QgZmlsdGVyID0gbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcbiAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXG4gICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxuICAgICAgICAvLyBUaGUgZ29sZCByZWZsZWN0cyB0aGlzIHNreWJveCwgYnV0IHdlIGRvbid0IHBhaW50IGl0OiB0aGUgYmFja2dyb3VuZCBpcyBsaWdodCBibHVlLlxuICAgICAgICBza3lib3hUZXh0dXJlOiBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxuICAgICAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxuICAgICAgICB9KSxcbiAgICAgICAgc2t5Ym94VHJhbnNmbyxcbiAgICAgICAgbGlnaHQ6IG5ldyBUZ2RMaWdodCh7IGNvbG9yOiBbMSwgMC45NSwgMC45LCAxXSwgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSksXG4gICAgICAgIHNoYWRvdzogeyBjYW1lcmE6IHNoYWRvdy5jYW1lcmEsIHRleHR1cmU6IHNoYWRvdy50ZXh0dXJlIH0sXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb246IHsgaW50ZW5zaXR5OiAxLjUsIGJsdXI6IHRydWUsIGNvbWJpbmVXaXRoTGlnaHQ6IGZhbHNlIH0sXG4gICAgICAgIGNhdml0eToge1xuICAgICAgICAgICAgcmlkZ2U6IDEsXG4gICAgICAgICAgICB2YWxsZXk6IDEsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMC4xXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAwXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbiguLi50YXJnZXQpXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbiA9IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFswLCAyLCA4XSB9KS5sb29rQXQoWzAsIDAsIDBdKS5vcmllbnRhdGlvblxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQobWF4WzBdIC0gbWluWzBdICsgMSwgaGVpZ2h0ICsgMSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgc2hhZG93LFxuICAgICAgICBkZWZlcnJlZCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBMSUdIVF9CTFVFLCBkZXB0aDogMSB9KSxcbiAgICAgICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2guXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwib2ZmXCIsXG4gICAgICAgICAgICBjdWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZGVmZXJyZWQgc2hhZGluZyBoYXMgbm8gYW50aS1hbGlhc2luZywgYW5kIHRoZSBiYWNrZ3JvdW5kIGlzIHRyYW5zcGFyZW50LlxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGdkRmlsdGVyQW50aUFsaWFzaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlbmd0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgICAgICAodGltZSwgZGVsdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZyA9IHRpbWUgKiAzXG4gICAgICAgICAgICBjb25zdCBoID0gMC4zXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBsZXR0ZXJzW2ldXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpZnQgPSAoaSAqIDIgKiBNYXRoLlBJKSAvIGxldHRlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHRnZENhbGNDbGFtcChNYXRoLnNpbihhbmcgKyBzaGlmdCksIDAsIDEpICogaFxuICAgICAgICAgICAgICAgIGxldHRlci50cmFuc2ZvLnNldFBvc2l0aW9uKGxldHRlci50cmFuc2ZvLnBvc2l0aW9uLngsIFlbaV0gKyB5LCBsZXR0ZXIudHJhbnNmby5wb3NpdGlvbi56KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2t5Ym94VHJhbnNmby5vcmJpdEFyb3VuZFgoLWRlbHRhICogMC4xKVxuICAgICAgICB9LFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWluZ1dpdGhGb250cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgZnVsbHNjcmVlblxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGRhdGE6IHsgZnV6YXI6IEZ1emFyRm9udFVSTCB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXG4gICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXG4gICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuLy8gI2JlZ2luIG1ha2VHbHlwaFBhdGhzKClcbi8qKlxuICogU1ZHIHBhdGggb2YgZWFjaCBnbHlwaCBvZiBgdGV4dGAsIHdpdGggaXRzIHBvc2l0aW9uIGluIHRoZSB0ZXh0LlxuICogVGhlIHVuaXQgaXMgdGhlIGVtLCBhbmQgdGhlIGZvbnQgc3BhY2UgaGFzIGl0cyBZIGF4aXMgcG9pbnRpbmcgdXAsIGxpa2UgV2ViR0wuXG4gKiBHbHlwaHMgd2l0aG91dCBvdXRsaW5lIChzcGFjZXMpIGFyZSBza2lwcGVkLlxuICovXG5mdW5jdGlvbiBtYWtlR2x5cGhQYXRocyhmb250OiBmb250a2l0LkZvbnQsIHRleHQ6IHN0cmluZyk6IEFycmF5PHsgcGF0aDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiB7XG4gICAgY29uc3QgcnVuID0gZm9udC5sYXlvdXQodGV4dClcbiAgICBjb25zdCBzY2FsZSA9IDEgLyBmb250LnVuaXRzUGVyRW1cbiAgICBjb25zdCBnbHlwaHM6IEFycmF5PHsgcGF0aDogc3RyaW5nOyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiA9IFtdXG4gICAgbGV0IHggPSAwXG4gICAgbGV0IHkgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydW4uZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdseXBoUGF0aCA9IHJ1bi5nbHlwaHNbaV0ucGF0aFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHJ1bi5wb3NpdGlvbnNbaV1cbiAgICAgICAgaWYgKGdseXBoUGF0aC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBnbHlwaHMucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aDogZ2x5cGhQYXRoLnNjYWxlKHNjYWxlKS50b1NWRygpLFxuICAgICAgICAgICAgICAgIHg6ICh4ICsgcG9zaXRpb24ueE9mZnNldCkgKiBzY2FsZSxcbiAgICAgICAgICAgICAgICB5OiAoeSArIHBvc2l0aW9uLnlPZmZzZXQpICogc2NhbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHggKz0gcG9zaXRpb24ueEFkdmFuY2VcbiAgICAgICAgeSArPSBwb3NpdGlvbi55QWR2YW5jZVxuICAgIH1cbiAgICByZXR1cm4gZ2x5cGhzXG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBtYWtlU2hhZG93Q2FtZXJhKClcbi8qKlxuICogVGhlIGxpZ2h0IGlzIGF0IHRoZSB0b3AgbGVmdCBvZiB0aGUgdGV4dCwgaW4gZnJvbnQgb2YgaXQsXG4gKiBhbmQgbG9va3MgYXQgYHRhcmdldGAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VTaGFkb3dDYW1lcmEodGFyZ2V0OiBBcnJheU51bWJlcjMpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKC00LCAyLCA1KVxuICAgIGNvbnN0IGRpc3RhbmNlID0gbmV3IFRnZFZlYzMocG9zaXRpb24pLnN1YnRyYWN0KG5ldyBUZ2RWZWMzKHRhcmdldCkpLnNpemVcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwLCBwb3NpdGlvbiB9KSxcbiAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXG4gICAgICAgIHNwYWNlSGVpZ2h0OiA0LFxuICAgICAgICBuZWFyOiBNYXRoLm1heCgwLjEsIGRpc3RhbmNlIC0gNiksXG4gICAgICAgIGZhcjogZGlzdGFuY2UgKyAxNixcbiAgICB9KVxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcbiAgICAvLyBTcXVhcmUgc2hhZG93IHRleHR1cmUuXG4gICAgbGlnaHQuc2NyZWVuV2lkdGggPSAxXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxuICAgIHJldHVybiBsaWdodFxufVxuLy8gI2VuZFxuIiwiaW1wb3J0IERlbW8gZnJvbSBcIi4vZm9udHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRyZXR1cm4gPERlbW8gLz5cbn1cbiJdLCJuYW1lcyI6WyJUZ2RCb3VuZGluZ0JveCIsInRnZENhbGNDbGFtcCIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZEZpbHRlckFudGlBbGlhc2luZyIsIlRnZEZpbHRlckRlZmVycmVkU2hhZGluZyIsIlRnZEdlb21ldHJ5UGF0aCIsIlRnZEdlb21ldHJ5UGxhbmUiLCJUZ2RMaWdodCIsIlRnZE1hdGVyaWFsRmxhdCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlclNoYWRvdyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFRleHR1cmVDdWJlIiwiVGdkVHJhbnNmbyIsIlRnZFZlYzMiLCJmb250a2l0IiwiVmlldyIsIkZ1emFyRm9udFVSTCIsIlBvc1giLCJQb3NZIiwiUG9zWiIsIk5lZ1giLCJOZWdZIiwiTmVnWiIsIlRFWFQiLCJMSUdIVF9CTFVFIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfY29udGV4dF9jYW1lcmFfdHJhbnNmbyIsImZvbnQiLCJVaW50OEFycmF5IiwiY29uc29sZSIsInRleHR1cmVzIiwibGV0dGVycyIsImJib3giLCJfaXRlcmF0b3JFcnJvciIsIm1ha2VHbHlwaFBhdGhzIiwicGF0aCIsIngiLCJ5IiwiZ2VvbWV0cnkiLCJfZ2VvbWV0cnlfY29tcHV0ZUJvdW5kaW5nQm94IiwibWluIiwibWF4IiwiWSIsImxldHRlciIsIm1pbjEiLCJtYXgxIiwiaGVpZ2h0IiwiZ29sZCIsImZsb29yIiwibWVzaGVzIiwiZGVmZXJyZWQiLCJ0YXJnZXQiLCJzaGFkb3ciLCJtYWtlU2hhZG93Q2FtZXJhIiwiX3NoYWRvd19jYW1lcmFfdHJhbnNmb19heGlzWiIsImx4IiwibHkiLCJseiIsInNreWJveFRyYW5zZm8iLCJmaWx0ZXIiLCJ0aW1lIiwiZGVsdGEiLCJhbmciLCJoIiwiaSIsInNoaWZ0IiwiTWF0aCIsIlBsYXlpbmdXaXRoRm9udHMiLCJ0ZXh0IiwicnVuIiwic2NhbGUiLCJnbHlwaHMiLCJnbHlwaFBhdGgiLCJwb3NpdGlvbiIsImRpc3RhbmNlIiwibGlnaHQiLCJEZW1vIiwiRGVtb0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J1QjtBQUNXO0FBQ3VCO0FBQ0Y7QUFDSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFNUQsSUFBTTJCLE9BQU87QUFDYixJQUFNQyxhQUErQztJQUFDO0lBQU07SUFBTTtJQUFHO0NBQUU7QUFFdkUsU0FBU0MsS0FBS0MsT0FBbUIsRUFBRUMsTUFBYztRQW1GN0NDO0lBbEZBLDRCQUE0QjtJQUM1QixtREFBbUQ7SUFDbkQsSUFBTUMsT0FBT2YsK0JBQWMsQ0FBQyxJQUFJZ0IsV0FBV0gsT0FBTyxJQUFJLENBQUMsS0FBSztJQUM1REksUUFBUSxHQUFHLENBQUMsd0JBQXdCRixPQUFN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