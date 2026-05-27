"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_volume-to-mesh_page_tsx-src_components_demo_Tgd_tgd_module_css-src_comp-c6f888"], {
43717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"flex1":"src-app-articles-mesh-volume-to-mesh-page-module_flex1_EI0H1Q"});

},
5918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CONFIGURATIONS: () => (CONFIGURATIONS)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

/**
 * For each configuration, we create triangles.
 */ var CONFIGURATIONS = (0,_tolokoban_tgd__rspack_import_0.tgdDataMarchingCubesConfigurations)().map(function(arr) {
    return arr.map(function(i) {
        return "ABCDEFGHIJKL".charAt(i);
    }).join("");
});


},
77975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCorners: () => (PainterCorners)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterCorners = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterCorners, TgdPainter);
    function PainterCorners(context) {
        _class_call_check(this, PainterCorners);
        var _this;
        _this = _call_super(this, PainterCorners), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "_caseNumber", void 0), _this.context = context, _this._caseNumber = -1;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ]);
        _this.texture = _this.createTexture();
        _this.caseNumber = 0;
        return _this;
    }
    _create_class(PainterCorners, [
        {
            key: "caseNumber",
            get: function get() {
                return this._caseNumber;
            },
            set: function set(value) {
                if (value === this._caseNumber) return;
                this._caseNumber = value;
                var colors = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
                this.dataset.set("attColor", new Float32Array(colors));
                this.vao.updateDataset(this.dataset);
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.texture.delete();
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, texture = _this.texture;
                var gl = context.gl, camera = context.camera;
                program.use();
                texture.activate(0, program, "uniTexture");
                program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawArrays(gl.POINTS, 0, 8);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3",
                    attColor: "float"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
                dataset.set("attColor", new Float32Array(_geometry__rspack_import_1.cubeVertices.length));
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniHalfScreenHeightInPixels: "float"
                    },
                    attributes: {
                        attPoint: "vec4",
                        attColor: "float"
                    },
                    varying: {
                        varColor: "float"
                    },
                    mainCode: [
                        "varColor = attColor;",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                        "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varColor: "float"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "vec2 pos = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                        "float radius = dot(pos, pos);",
                        "if (radius > 1.0) discard;",
                        "vec2 uv = vec2(varColor, .5);",
                        "FragColor = texture(uniTexture, uv);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        },
        {
            key: "createTexture",
            value: function createTexture() {
                var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
                texture.setParams({
                    magFilter: "NEAREST",
                    minFilter: "NEAREST",
                    wrapS: "CLAMP_TO_EDGE",
                    wrapT: "CLAMP_TO_EDGE"
                });
                texture.loadBitmap((0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreatePalette)([
                    "#07f",
                    "#f00"
                ]));
                return texture;
            }
        }
    ]);
    return PainterCorners;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
75506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  caseNumberToColors: () => (caseNumberToColors),
  cubeEdges: () => (cubeEdges),
  cubeMidPoints: () => (cubeMidPoints),
  cubeVertices: () => (cubeVertices),
  trianglesStringToElements: () => (trianglesStringToElements)
});
// prettier-ignore
var cubeEdges = new Uint8Array([
    0,
    1,
    0,
    2,
    0,
    4,
    1,
    3,
    1,
    5,
    2,
    3,
    2,
    6,
    3,
    7,
    4,
    5,
    4,
    6,
    5,
    7,
    6,
    7
]);
var P = +1;
var N = -1;
// prettier-ignore
var cubeVertices = new Float32Array([
    N,
    N,
    N,
    N,
    N,
    P,
    N,
    P,
    N,
    N,
    P,
    P,
    P,
    N,
    N,
    P,
    N,
    P,
    P,
    P,
    N,
    P,
    P,
    P
]);
var midPoints = [];
for(var i = 0; i < cubeEdges.length; i += 2){
    var a = 3 * cubeEdges[i];
    var b = 3 * cubeEdges[i + 1];
    var x = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 0]);
    var y = 0.5 * (cubeVertices[a + 1] + cubeVertices[b + 1]);
    var z = 0.5 * (cubeVertices[a + 2] + cubeVertices[b + 2]);
    midPoints.push(x, y, z);
}
var cubeMidPoints = new Float32Array(midPoints);
function trianglesStringToElements(value) {
    var elements = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = value.trim().toUpperCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var C = _step.value;
            if (C < "A" || C > "L") continue;
            elements.push(C.charCodeAt(0) - "A".charCodeAt(0));
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
    return elements;
}
/**
 * A case number defines what corner is inside (1) or outside (0)
 * of the volume.
 * @returns An array of 8 elements with 1 if the corner is inside,
 * and 0 if it is outside.
 */ function caseNumberToColors(value) {
    var colors = [];
    for(var i = 0; i < 8; i++){
        var mask = 1 << i;
        colors.push(value & mask ? 1 : 0);
    }
    return colors;
}


},
18866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useVolumeToMeshManager: () => (useVolumeToMeshManager)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _corners__rspack_import_2 = __webpack_require__(77975);
/* import */ var _mid_points__rspack_import_3 = __webpack_require__(32659);
/* import */ var _painter_cube__rspack_import_4 = __webpack_require__(56890);
/* import */ var _triangles__rspack_import_5 = __webpack_require__(32864);
/* import */ var _wireframe__rspack_import_6 = __webpack_require__(49043);
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}







var VolumeToMeshManager = /*#__PURE__*/ function() {
    "use strict";
    function VolumeToMeshManager() {
        _class_call_check(this, VolumeToMeshManager);
        _define_property(this, "_context", null);
        _define_property(this, "midPointsPainter", null);
        _define_property(this, "cornersPainter", null);
        _define_property(this, "trianglesPainter", null);
        _define_property(this, "wireframePainter", null);
    }
    _create_class(VolumeToMeshManager, [
        {
            key: "context",
            set: function set(context) {
                var camera = context.camera;
                if (_instanceof(camera, _tolokoban_tgd__rspack_import_0.TgdCameraPerspective)) {
                    camera.fovy = (0,_tolokoban_tgd__rspack_import_0.tgdCalcDegToRad)(90);
                    camera.transfo.distance = 3;
                }
                new _tolokoban_tgd__rspack_import_0.TgdControllerCameraOrbit(context, {
                    inertiaOrbit: 1000
                });
                if (this._context) this._context.delete();
                this._context = context;
                var clear = new _tolokoban_tgd__rspack_import_0.TgdPainterClear(context, {
                    color: [
                        0,
                        0,
                        0,
                        1
                    ],
                    depth: 1
                });
                var state = new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
                    depth: _tolokoban_tgd__rspack_import_0.webglPresetDepth.less,
                    cull: _tolokoban_tgd__rspack_import_0.webglPresetCull.off
                });
                var wireframe = new _wireframe__rspack_import_6.PainterWireframe(context);
                this.wireframePainter = wireframe;
                var midPoints = new _mid_points__rspack_import_3.PainterMidPoints(context);
                this.midPointsPainter = midPoints;
                var corners = new _corners__rspack_import_2.PainterCorners(context);
                this.cornersPainter = corners;
                var triangles = new _triangles__rspack_import_5.PainterTriangles(context);
                this.trianglesPainter = triangles;
                state.add(// new TgdPainterAxes(context, { scale: 2 }),
                new _painter_cube__rspack_import_4.PainterCube(context), wireframe, new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
                    blend: _tolokoban_tgd__rspack_import_0.webglPresetBlend.premultipliedAlpha,
                    children: [
                        midPoints,
                        corners,
                        triangles
                    ]
                }));
                context.add(clear, state);
                context.paint();
            }
        },
        {
            key: "caseNumber",
            get: function get() {
                var _ref;
                var _this_cornersPainter;
                return (_ref = (_this_cornersPainter = this.cornersPainter) === null || _this_cornersPainter === void 0 ? void 0 : _this_cornersPainter.caseNumber) !== null && _ref !== void 0 ? _ref : 0;
            },
            set: /**
     * There are 256 cases, ranging from 0 to 255.
     */ function set(value) {
                var _this = this, corners = _this.cornersPainter, midPoints = _this.midPointsPainter;
                if (corners) corners.caseNumber = value;
                if (midPoints) midPoints.caseNumber = value;
            }
        },
        {
            key: "triangles",
            set: function set(value) {
                var _this = this, trianglesPainter = _this.trianglesPainter, wireframePainter = _this.wireframePainter;
                if (trianglesPainter) trianglesPainter.triangles = value;
                if (wireframePainter) wireframePainter.triangles = value;
            }
        }
    ]);
    return VolumeToMeshManager;
}();
function useVolumeToMeshManager() {
    var ref = react__rspack_import_1_default().useRef(null);
    if (!ref.current) ref.current = new VolumeToMeshManager();
    return ref.current;
}


},
32659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterMidPoints: () => (PainterMidPoints)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterMidPoints = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterMidPoints, TgdPainter);
    function PainterMidPoints(context) {
        _class_call_check(this, PainterMidPoints);
        var _this;
        _this = _call_super(this, PainterMidPoints), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "_caseNumber", void 0), _this.context = context, _this._caseNumber = 0;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ]);
        _this.texture = _this.createTexture();
        return _this;
    }
    _create_class(PainterMidPoints, [
        {
            key: "caseNumber",
            get: function get() {
                return this._caseNumber;
            },
            set: function set(value) {
                if (value === this._caseNumber) return;
                this._caseNumber = value;
                var corners = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
                var visibles = [];
                for(var i = 0; i < 12; i++){
                    var a = corners[_geometry__rspack_import_1.cubeEdges[i * 2]];
                    var b = corners[_geometry__rspack_import_1.cubeEdges[i * 2 + 1]];
                    visibles.push(a === b ? 0 : 1);
                }
                this.dataset.set("attVisible", new Float32Array(visibles));
                this.vao.updateDataset(this.dataset);
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.texture.delete();
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, texture = _this.texture;
                var gl = context.gl, camera = context.camera;
                program.use();
                texture.activate(0, program, "uniTexture");
                program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawArrays(gl.POINTS, 0, 12);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3",
                    attVisible: "float"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniHalfScreenHeightInPixels: "float"
                    },
                    attributes: {
                        attPoint: "vec4",
                        attVisible: "float"
                    },
                    varying: {
                        varU: "float"
                    },
                    mainCode: [
                        "varU = float(gl_VertexID) / 12.0;",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                        "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
                        "gl_PointSize *= attVisible;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varU: "float"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "vec2 uv = vec2(varU, 0.0) + gl_PointCoord.xy * vec2(1.0 / 12.0, 1.0);",
                        "FragColor = texture(uniTexture, uv);",
                        "if (FragColor.a < .1) discard;"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        },
        {
            key: "createTexture",
            value: function createTexture() {
                var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
                texture.setParams({
                    magFilter: "LINEAR",
                    minFilter: "LINEAR"
                });
                var letters = "ABCDEFGHIJKL";
                var count = letters.length;
                var size = 64;
                var width = size * count;
                var height = size;
                var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreateWithContext2D)(width, height), ctx = _tgdCanvasCreateWithContext2D.ctx, canvas = _tgdCanvasCreateWithContext2D.canvas;
                ctx.font = "bold ".concat(size, "px sans-serif");
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#0f0";
                for(var i = 0; i < count; i++){
                    var letter = letters.charAt(i);
                    var x = (i + 0.5) / count;
                    var y = 0.5;
                    ctx.fillText(letter, x * width, y * height);
                }
                texture.loadBitmap(canvas);
                return texture;
            }
        }
    ]);
    return PainterMidPoints;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
56890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCube: () => (PainterCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterCube = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterCube, TgdPainter);
    function PainterCube(context) {
        _class_call_check(this, PainterCube);
        var _this;
        _this = _call_super(this, PainterCube), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _this.context = context;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        // prettier-ignore
        var elements = _geometry__rspack_import_1.cubeEdges;
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterCube, [
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    varying: {
                        varColor: "vec3"
                    },
                    mainCode: [
                        "varColor = abs(attPoint.xyz);",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varColor: "vec3"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "FragColor = vec4(varColor, 1.0);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterCube;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
32864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterTriangles: () => (PainterTriangles)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterTriangles = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterTriangles, TgdPainter);
    function PainterTriangles(context) {
        _class_call_check(this, PainterTriangles);
        var _this;
        _this = _call_super(this, PainterTriangles), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "elementsCount", void 0), _define_property(_this, "_triangles", void 0), _this.context = context, _this.elementsCount = 0, _this._triangles = "";
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        var elements = new Uint8Array();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterTriangles, [
        {
            key: "triangles",
            set: function set(value) {
                var elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
                this.vao.updateElements(elements);
                this.elementsCount = elements.length;
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, elementsCount = _this.elementsCount;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.TRIANGLES, elementsCount, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniLight: "float"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    mainCode: [
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "float a = 1.0;",
                        "FragColor = vec4(",
                        "  .8 * (gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0)),",
                        "  a",
                        ");"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterTriangles;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
49043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterWireframe: () => (PainterWireframe)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterWireframe = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterWireframe, TgdPainter);
    function PainterWireframe(context) {
        _class_call_check(this, PainterWireframe);
        var _this;
        _this = _call_super(this, PainterWireframe), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "elementsCount", void 0), _this.context = context, _this.elementsCount = 0;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        var elements = new Uint8Array();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterWireframe, [
        {
            key: "triangles",
            set: function set(value) {
                var elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
                var wireframe = [];
                for(var i = 0; i < elements.length; i += 3){
                    var a = elements[i];
                    var b = elements[i + 1];
                    var c = elements[i + 2];
                    wireframe.push(a, b, c, a);
                }
                this.vao.updateElements(wireframe);
                this.elementsCount = wireframe.length;
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, elementsCount = _this.elementsCount;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.LINES, elementsCount, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniLight: "float"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    mainCode: [
                        "gl_Position = uniProjectionMatrix * ",
                        "  (uniModelViewMatrix * attPoint + vec4(0, 0, 0.02, 0));"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "FragColor = vec4(0,0,0,1);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterWireframe;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
88412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_4 = __webpack_require__(47578);
/* import */ var _manager__rspack_import_5 = __webpack_require__(18866);
/* import */ var _tolokoban_type_guards__rspack_import_6 = __webpack_require__(2197);
/* import */ var _page_module_css__rspack_import_7 = __webpack_require__(43717);
/* import */ var _geometry__rspack_import_8 = __webpack_require__(75506);
/* import */ var _configurations__rspack_import_9 = __webpack_require__(5918);
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










function Page() {
    var _useLocalStorageState = _sliced_to_array((0,_tolokoban_ui__rspack_import_3.useLocalStorageState)(0, "volume-to-mesh/caseNumber", function(value) {
        return (0,_tolokoban_tgd__rspack_import_4.tgdCalcClamp)(Math.floor((0,_tolokoban_type_guards__rspack_import_6.ensureNumber)(value, 0)), 0, 255);
    }), 2), caseNumber = _useLocalStorageState[0], setCaseNumber = _useLocalStorageState[1];
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(""), 2), triangles = _React_useState[0], setTriangles = _React_useState[1];
    var key = "volume-to-mesh/triangles/".concat(caseNumber);
    react__rspack_import_1_default().useEffect(function() {
        var _globalThis_localStorage_getItem;
        setTriangles((_globalThis_localStorage_getItem = globalThis.localStorage.getItem(key)) !== null && _globalThis_localStorage_getItem !== void 0 ? _globalThis_localStorage_getItem : _configurations__rspack_import_9.CONFIGURATIONS[caseNumber]);
        manager.caseNumber = caseNumber;
    }, [
        caseNumber
    ]);
    react__rspack_import_1_default().useEffect(function() {
        globalThis.localStorage.setItem(key, triangles.trim().toUpperCase());
        manager.triangles = triangles;
    }, [
        triangles
    ]);
    var handleLeft = function handleLeft() {
        setCaseNumber(caseNumber + 255 & 0xff);
    };
    var handleRight = function handleRight() {
        setCaseNumber(caseNumber + 1 & 0xff);
    };
    var manager = (0,_manager__rspack_import_5.useVolumeToMeshManager)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h1", {
                children: "Marching cubes"
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("a", {
                        href: "https://en.wikipedia.org/wiki/Marching_cubes",
                        children: "Marching cubes"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    " is a technique to generate meshes from a volume.",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    "A volume is a function that tells you, for each point in a box, it you are inside or outside an object."
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: [
                    "A voxel is a unit cube. Each corner of a voxel is either inside the volume (",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("b", {
                        children: "red"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 54,
                        columnNumber: 93
                    }, this),
                    ") or outside (",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("b", {
                        children: "blue"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    "). With triangles, touching the edges of the voxel, we need to separate the space between red and blue corners."
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: "A voxel has 8 corners, so we have 256 configurations."
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
                onReady: function onReady(context) {
                    manager.context = context;
                }
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewSlider, {
                className: _page_module_css__rspack_import_7["default"].flex1,
                wide: true,
                text: "".concat(caseNumber),
                value: caseNumber,
                onChange: setCaseNumber,
                min: 0,
                max: 255,
                step: 1
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                        display: "flex",
                        alignItems: "center",
                        fullwidth: true,
                        gap: "M",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewInputText, {
                                label: "Triangles (from mid points ABCDEFGHIJKL)",
                                value: triangles,
                                onChange: setTriangles
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, {
                                icon: _tolokoban_ui__rspack_import_3.IconArrowLeft,
                                onClick: handleLeft
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, {
                                icon: _tolokoban_ui__rspack_import_3.IconArrowRight,
                                onClick: handleRight
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewButton, {
                        onClick: handleReset,
                        icon: _tolokoban_ui__rspack_import_3.IconReset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("details", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("summary", {
                        children: "List of triangles per configuration"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("pre", {
                        children: getTriangles()
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
function handleReset() {
    var configurations = (0,_tolokoban_tgd__rspack_import_4.tgdDataMarchingCubesConfigurations)();
    for(var i = 0; i < configurations.length; i++){
        var config = configurations[i];
        var code = config.map(function(i) {
            return "ABCDEFGHIJKL".charAt(i);
        }).join("");
        globalThis.localStorage.setItem("volume-to-mesh/triangles/".concat(i), code);
    }
    location.reload();
}
function getTriangles() {
    var lines = [];
    for(var i = 0; i < 256; i++){
        var _globalThis_localStorage_getItem;
        var text = (_globalThis_localStorage_getItem = globalThis.localStorage.getItem("volume-to-mesh/triangles/".concat(i))) !== null && _globalThis_localStorage_getItem !== void 0 ? _globalThis_localStorage_getItem : "?";
        if (text === "?") lines.push("[ /* N/A /* ],");
        else {
            var elements = (0,_geometry__rspack_import_8.trianglesStringToElements)(text);
            lines.push("".concat(JSON.stringify(elements), ","));
        }
    }
    return lines.join("\n");
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF92b2x1bWUtdG8tbWVzaF9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC1jNmY4ODguOGE5MjhiNmIzY2U0YzI2MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL3BhZ2UubW9kdWxlLmNzcz9iOTY1IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL2NvbmZpZ3VyYXRpb25zLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL2Nvcm5lcnMudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vZ2VvbWV0cnkudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vbWFuYWdlci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy9taWQtcG9pbnRzLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL3BhaW50ZXItY3ViZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy90cmlhbmdsZXMudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vd2lyZWZyYW1lLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZmxleDFcIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWVzaC12b2x1bWUtdG8tbWVzaC1wYWdlLW1vZHVsZV9mbGV4MV9FSTBIMVFcIn07IiwiaW1wb3J0IHsgdGdkRGF0YU1hcmNoaW5nQ3ViZXNDb25maWd1cmF0aW9ucyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbi8qKlxuICogRm9yIGVhY2ggY29uZmlndXJhdGlvbiwgd2UgY3JlYXRlIHRyaWFuZ2xlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTkZJR1VSQVRJT05TOiBSZWFkb25seTxzdHJpbmdbXT4gPSB0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zKCkubWFwKChhcnIpID0+XG4gICAgYXJyLm1hcCgoaSkgPT4gXCJBQkNERUZHSElKS0xcIi5jaGFyQXQoaSkpLmpvaW4oXCJcIiksXG4pXG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlcnRleEFycmF5LFxuICAgIHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjYXNlTnVtYmVyVG9Db2xvcnMsIGN1YmVWZXJ0aWNlcyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJDb3JuZXJzIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXlcbiAgICBwcml2YXRlIF9jYXNlTnVtYmVyID0gLTFcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuZGF0YXNldCA9IHRoaXMuY3JlYXRlRGF0YXNldCgpXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG4gICAgICAgIHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJvZ3JhbSwgW3RoaXMuZGF0YXNldF0pXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgICAgIHRoaXMuY2FzZU51bWJlciA9IDBcbiAgICB9XG5cbiAgICBnZXQgY2FzZU51bWJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhc2VOdW1iZXJcbiAgICB9XG4gICAgc2V0IGNhc2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX2Nhc2VOdW1iZXIpIHJldHVyblxuXG4gICAgICAgIHRoaXMuX2Nhc2VOdW1iZXIgPSB2YWx1ZVxuICAgICAgICBjb25zdCBjb2xvcnMgPSBjYXNlTnVtYmVyVG9Db2xvcnModmFsdWUpXG4gICAgICAgIHRoaXMuZGF0YXNldC5zZXQoXCJhdHRDb2xvclwiLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycykpXG4gICAgICAgIHRoaXMudmFvLnVwZGF0ZURhdGFzZXQodGhpcy5kYXRhc2V0KVxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgcHJvZ3JhbS51c2UoKVxuICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSlcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDgpXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzNcIixcbiAgICAgICAgICAgIGF0dENvbG9yOiBcImZsb2F0XCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZVZlcnRpY2VzKVxuICAgICAgICBkYXRhc2V0LnNldChcImF0dENvbG9yXCIsIG5ldyBGbG9hdDMyQXJyYXkoY3ViZVZlcnRpY2VzLmxlbmd0aCkpXG4gICAgICAgIHJldHVybiBkYXRhc2V0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtKCk6IFRnZFByb2dyYW0ge1xuICAgICAgICBjb25zdCB2ZXJ0ID0gbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgdW5pUHJvamVjdGlvbk1hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgICAgICAgICAgdW5pSGFsZlNjcmVlbkhlaWdodEluUGl4ZWxzOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICBhdHRDb2xvcjogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyQ29sb3I6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gYXR0Q29sb3I7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiBhdHRQb2ludDtcIixcbiAgICAgICAgICAgICAgICBcImdsX1BvaW50U2l6ZSA9IDAuMiAqIHVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVscyAvIGdsX1Bvc2l0aW9uLnc7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyQ29sb3I6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgb3V0cHV0czogeyBGcmFnQ29sb3I6IFwidmVjNFwiIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgIFwidmVjMiBwb3MgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcIixcbiAgICAgICAgICAgICAgICBcImZsb2F0IHJhZGl1cyA9IGRvdChwb3MsIHBvcyk7XCIsXG4gICAgICAgICAgICAgICAgXCJpZiAocmFkaXVzID4gMS4wKSBkaXNjYXJkO1wiLFxuICAgICAgICAgICAgICAgIFwidmVjMiB1diA9IHZlYzIodmFyQ29sb3IsIC41KTtcIixcbiAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSkuY29kZVxuICAgICAgICBjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSlcbiAgICAgICAgcmV0dXJuIHByb2dyYW1cbiAgICB9XG5cbiAgICBjcmVhdGVUZXh0dXJlKCk6IFRnZFRleHR1cmUyRCB7XG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKHRoaXMuY29udGV4dClcbiAgICAgICAgdGV4dHVyZS5zZXRQYXJhbXMoe1xuICAgICAgICAgICAgbWFnRmlsdGVyOiBcIk5FQVJFU1RcIixcbiAgICAgICAgICAgIG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG4gICAgICAgICAgICB3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgICAgICB3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG4gICAgICAgIH0pXG4gICAgICAgIHRleHR1cmUubG9hZEJpdG1hcCh0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiMwN2ZcIiwgXCIjZjAwXCJdKSlcbiAgICAgICAgcmV0dXJuIHRleHR1cmVcbiAgICB9XG59XG4iLCIvLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBjdWJlRWRnZXMgPSAgbmV3IFVpbnQ4QXJyYXkoW1xuICAgIDAsIDEsIDAsIDIsIDAsIDQsXG4gICAgMSwgMywgMSwgNSxcbiAgICAyLCAzLCAyLCA2LFxuICAgIDMsIDcsXG4gICAgNCwgNSwgNCwgNixcbiAgICA1LCA3LFxuICAgIDYsIDdcbl0pXG5cbmNvbnN0IFAgPSArMVxuY29uc3QgTiA9IC0xXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZXhwb3J0IGNvbnN0IGN1YmVWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIE4sIE4sIE4sIC8vIDBcbiAgICBOLCBOLCBQLCAvLyAxXG4gICAgTiwgUCwgTiwgLy8gMlxuICAgIE4sIFAsIFAsIC8vIDNcbiAgICBQLCBOLCBOLCAvLyA0XG4gICAgUCwgTiwgUCwgLy8gNVxuICAgIFAsIFAsIE4sIC8vIDZcbiAgICBQLCBQLCBQLCAvLyA3XG5dKVxuXG5jb25zdCBtaWRQb2ludHM6IG51bWJlcltdID0gW11cbmZvciAobGV0IGkgPSAwOyBpIDwgY3ViZUVkZ2VzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgY29uc3QgYSA9IDMgKiBjdWJlRWRnZXNbaV1cbiAgICBjb25zdCBiID0gMyAqIGN1YmVFZGdlc1tpICsgMV1cbiAgICBjb25zdCB4ID0gMC41ICogKGN1YmVWZXJ0aWNlc1thICsgMF0gKyBjdWJlVmVydGljZXNbYiArIDBdKVxuICAgIGNvbnN0IHkgPSAwLjUgKiAoY3ViZVZlcnRpY2VzW2EgKyAxXSArIGN1YmVWZXJ0aWNlc1tiICsgMV0pXG4gICAgY29uc3QgeiA9IDAuNSAqIChjdWJlVmVydGljZXNbYSArIDJdICsgY3ViZVZlcnRpY2VzW2IgKyAyXSlcbiAgICBtaWRQb2ludHMucHVzaCh4LCB5LCB6KVxufVxuXG5leHBvcnQgY29uc3QgY3ViZU1pZFBvaW50cyA9IG5ldyBGbG9hdDMyQXJyYXkobWlkUG9pbnRzKVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudHM6IG51bWJlcltdID0gW11cbiAgICBmb3IgKGNvbnN0IEMgb2YgdmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgaWYgKEMgPCBcIkFcIiB8fCBDID4gXCJMXCIpIGNvbnRpbnVlXG5cbiAgICAgICAgZWxlbWVudHMucHVzaChDLmNoYXJDb2RlQXQoMCkgLSBcIkFcIi5jaGFyQ29kZUF0KDApKVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHNcbn1cblxuLyoqXG4gKiBBIGNhc2UgbnVtYmVyIGRlZmluZXMgd2hhdCBjb3JuZXIgaXMgaW5zaWRlICgxKSBvciBvdXRzaWRlICgwKVxuICogb2YgdGhlIHZvbHVtZS5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIDggZWxlbWVudHMgd2l0aCAxIGlmIHRoZSBjb3JuZXIgaXMgaW5zaWRlLFxuICogYW5kIDAgaWYgaXQgaXMgb3V0c2lkZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc2VOdW1iZXJUb0NvbG9ycyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IGNvbG9yczogbnVtYmVyW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSAxIDw8IGlcbiAgICAgICAgY29sb3JzLnB1c2godmFsdWUgJiBtYXNrID8gMSA6IDApXG4gICAgfVxuICAgIHJldHVybiBjb2xvcnNcbn1cbiIsImltcG9ydCB7XG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RQYWludGVyQXhlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFBhaW50ZXJDb3JuZXJzIH0gZnJvbSBcIi4vY29ybmVyc1wiXG5pbXBvcnQgeyBQYWludGVyTWlkUG9pbnRzIH0gZnJvbSBcIi4vbWlkLXBvaW50c1wiXG5pbXBvcnQgeyBQYWludGVyQ3ViZSB9IGZyb20gXCIuL3BhaW50ZXItY3ViZVwiXG5pbXBvcnQgeyBQYWludGVyVHJpYW5nbGVzIH0gZnJvbSBcIi4vdHJpYW5nbGVzXCJcbmltcG9ydCB7IFBhaW50ZXJXaXJlZnJhbWUgfSBmcm9tIFwiLi93aXJlZnJhbWVcIlxuXG5jbGFzcyBWb2x1bWVUb01lc2hNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9jb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGxcbiAgICBwcml2YXRlIG1pZFBvaW50c1BhaW50ZXI6IFBhaW50ZXJNaWRQb2ludHMgfCBudWxsID0gbnVsbFxuICAgIHByaXZhdGUgY29ybmVyc1BhaW50ZXI6IFBhaW50ZXJDb3JuZXJzIHwgbnVsbCA9IG51bGxcbiAgICBwcml2YXRlIHRyaWFuZ2xlc1BhaW50ZXI6IFBhaW50ZXJUcmlhbmdsZXMgfCBudWxsID0gbnVsbFxuICAgIHByaXZhdGUgd2lyZWZyYW1lUGFpbnRlcjogUGFpbnRlcldpcmVmcmFtZSB8IG51bGwgPSBudWxsXG5cbiAgICBzZXQgY29udGV4dChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuICAgICAgICAgICAgY2FtZXJhLmZvdnkgPSB0Z2RDYWxjRGVnVG9SYWQoOTApXG4gICAgICAgICAgICBjYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDNcbiAgICAgICAgfVxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuZGVsZXRlKClcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwub2ZmLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCB3aXJlZnJhbWUgPSBuZXcgUGFpbnRlcldpcmVmcmFtZShjb250ZXh0KVxuICAgICAgICB0aGlzLndpcmVmcmFtZVBhaW50ZXIgPSB3aXJlZnJhbWVcbiAgICAgICAgY29uc3QgbWlkUG9pbnRzID0gbmV3IFBhaW50ZXJNaWRQb2ludHMoY29udGV4dClcbiAgICAgICAgdGhpcy5taWRQb2ludHNQYWludGVyID0gbWlkUG9pbnRzXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSBuZXcgUGFpbnRlckNvcm5lcnMoY29udGV4dClcbiAgICAgICAgdGhpcy5jb3JuZXJzUGFpbnRlciA9IGNvcm5lcnNcbiAgICAgICAgY29uc3QgdHJpYW5nbGVzID0gbmV3IFBhaW50ZXJUcmlhbmdsZXMoY29udGV4dClcbiAgICAgICAgdGhpcy50cmlhbmdsZXNQYWludGVyID0gdHJpYW5nbGVzXG4gICAgICAgIHN0YXRlLmFkZChcbiAgICAgICAgICAgIC8vIG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAyIH0pLFxuICAgICAgICAgICAgbmV3IFBhaW50ZXJDdWJlKGNvbnRleHQpLFxuICAgICAgICAgICAgd2lyZWZyYW1lLFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQucHJlbXVsdGlwbGllZEFscGhhLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbWlkUG9pbnRzLCBjb3JuZXJzLCB0cmlhbmdsZXNdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIClcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGVyZSBhcmUgMjU2IGNhc2VzLCByYW5naW5nIGZyb20gMCB0byAyNTUuXG4gICAgICovXG4gICAgc2V0IGNhc2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBjb25zdCB7IGNvcm5lcnNQYWludGVyOiBjb3JuZXJzLCBtaWRQb2ludHNQYWludGVyOiBtaWRQb2ludHMgfSA9IHRoaXNcbiAgICAgICAgaWYgKGNvcm5lcnMpIGNvcm5lcnMuY2FzZU51bWJlciA9IHZhbHVlXG4gICAgICAgIGlmIChtaWRQb2ludHMpIG1pZFBvaW50cy5jYXNlTnVtYmVyID0gdmFsdWVcbiAgICB9XG4gICAgZ2V0IGNhc2VOdW1iZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvcm5lcnNQYWludGVyPy5jYXNlTnVtYmVyID8/IDBcbiAgICB9XG5cbiAgICBzZXQgdHJpYW5nbGVzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgeyB0cmlhbmdsZXNQYWludGVyLCB3aXJlZnJhbWVQYWludGVyIH0gPSB0aGlzXG4gICAgICAgIGlmICh0cmlhbmdsZXNQYWludGVyKSB0cmlhbmdsZXNQYWludGVyLnRyaWFuZ2xlcyA9IHZhbHVlXG4gICAgICAgIGlmICh3aXJlZnJhbWVQYWludGVyKSB3aXJlZnJhbWVQYWludGVyLnRyaWFuZ2xlcyA9IHZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm9sdW1lVG9NZXNoTWFuYWdlcigpOiBWb2x1bWVUb01lc2hNYW5hZ2VyIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8Vm9sdW1lVG9NZXNoTWFuYWdlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgVm9sdW1lVG9NZXNoTWFuYWdlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlcnRleEFycmF5LFxuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjYXNlTnVtYmVyVG9Db2xvcnMsIGN1YmVFZGdlcywgY3ViZU1pZFBvaW50cyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJNaWRQb2ludHMgZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuICAgIHByaXZhdGUgX2Nhc2VOdW1iZXIgPSAwXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICB0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByb2dyYW0sIFt0aGlzLmRhdGFzZXRdKVxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKVxuICAgIH1cblxuICAgIGdldCBjYXNlTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FzZU51bWJlclxuICAgIH1cbiAgICBzZXQgY2FzZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fY2FzZU51bWJlcikgcmV0dXJuXG5cbiAgICAgICAgdGhpcy5fY2FzZU51bWJlciA9IHZhbHVlXG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSBjYXNlTnVtYmVyVG9Db2xvcnModmFsdWUpXG4gICAgICAgIGNvbnN0IHZpc2libGVzOiBudW1iZXJbXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYSA9IGNvcm5lcnNbY3ViZUVkZ2VzW2kgKiAyXV1cbiAgICAgICAgICAgIGNvbnN0IGIgPSBjb3JuZXJzW2N1YmVFZGdlc1tpICogMiArIDFdXVxuICAgICAgICAgICAgdmlzaWJsZXMucHVzaChhID09PSBiID8gMCA6IDEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhc2V0LnNldChcImF0dFZpc2libGVcIiwgbmV3IEZsb2F0MzJBcnJheSh2aXNpYmxlcykpXG4gICAgICAgIHRoaXMudmFvLnVwZGF0ZURhdGFzZXQodGhpcy5kYXRhc2V0KVxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpc1xuICAgICAgICBjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHRcbiAgICAgICAgcHJvZ3JhbS51c2UoKVxuICAgICAgICB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSlcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDEyKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICBhdHRWaXNpYmxlOiBcImZsb2F0XCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZU1pZFBvaW50cylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlIYWxmU2NyZWVuSGVpZ2h0SW5QaXhlbHM6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgIGF0dFZpc2libGU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJ5aW5nOiB7IHZhclU6IFwiZmxvYXRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhclUgPSBmbG9hdChnbF9WZXJ0ZXhJRCkgLyAxMi4wO1wiLFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb2ludFNpemUgPSAwLjIgKiB1bmlIYWxmU2NyZWVuSGVpZ2h0SW5QaXhlbHMgLyBnbF9Qb3NpdGlvbi53O1wiLFxuICAgICAgICAgICAgICAgIFwiZ2xfUG9pbnRTaXplICo9IGF0dFZpc2libGU7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHsgdmFyVTogXCJmbG9hdFwiIH0sXG4gICAgICAgICAgICBvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgXCJ2ZWMyIHV2ID0gdmVjMih2YXJVLCAwLjApICsgZ2xfUG9pbnRDb29yZC54eSAqIHZlYzIoMS4wIC8gMTIuMCwgMS4wKTtcIixcbiAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZSwgdXYpO1wiLFxuICAgICAgICAgICAgICAgIFwiaWYgKEZyYWdDb2xvci5hIDwgLjEpIGRpc2NhcmQ7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBuZXcgVGdkUHJvZ3JhbSh0aGlzLmNvbnRleHQuZ2wsIHsgdmVydCwgZnJhZyB9KVxuICAgICAgICByZXR1cm4gcHJvZ3JhbVxuICAgIH1cblxuICAgIGNyZWF0ZVRleHR1cmUoKTogVGdkVGV4dHVyZTJEIHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQodGhpcy5jb250ZXh0KVxuICAgICAgICB0ZXh0dXJlLnNldFBhcmFtcyh7XG4gICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICBtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdISUpLTFwiXG4gICAgICAgIGNvbnN0IGNvdW50ID0gbGV0dGVycy5sZW5ndGhcbiAgICAgICAgY29uc3Qgc2l6ZSA9IDY0XG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZSAqIGNvdW50XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7c2l6ZX1weCBzYW5zLXNlcmlmYFxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIlxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMGYwXCJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBsZXR0ZXJzLmNoYXJBdChpKVxuICAgICAgICAgICAgY29uc3QgeCA9IChpICsgMC41KSAvIGNvdW50XG4gICAgICAgICAgICBjb25zdCB5ID0gMC41XG4gICAgICAgICAgICBjdHguZmlsbFRleHQobGV0dGVyLCB4ICogd2lkdGgsIHkgKiBoZWlnaHQpXG4gICAgICAgIH1cbiAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgcmV0dXJuIHRleHR1cmVcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjdWJlRWRnZXMsIGN1YmVWZXJ0aWNlcyB9IGZyb20gXCIuL2dlb21ldHJ5XCJcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJDdWJlIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBjdWJlRWRnZXNcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcm9ncmFtLCBbdGhpcy5kYXRhc2V0XSwgZWxlbWVudHMpXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcm9ncmFtLCB2YW8gfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCwgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIHByb2dyYW0udXNlKClcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCAyNCwgZ2wuVU5TSUdORURfQllURSwgMClcbiAgICAgICAgdmFvLnVuYmluZCgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVEYXRhc2V0KCkge1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjM1wiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LnNldChcImF0dFBvaW50XCIsIGN1YmVWZXJ0aWNlcylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgYXR0UG9pbnQ6IFwidmVjNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICB2YXJDb2xvcjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcInZhckNvbG9yID0gYWJzKGF0dFBvaW50Lnh5eik7XCIsXG4gICAgICAgICAgICAgICAgXCJnbF9Qb3NpdGlvbiA9IHVuaVByb2plY3Rpb25NYXRyaXggKiB1bmlNb2RlbFZpZXdNYXRyaXggKiBhdHRQb2ludDtcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmU6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgIHZhckNvbG9yOiBcInZlYzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcbiAgICAgICAgICAgIG1haW5Db2RlOiBbXCJGcmFnQ29sb3IgPSB2ZWM0KHZhckNvbG9yLCAxLjApO1wiXSxcbiAgICAgICAgfSkuY29kZVxuICAgICAgICBjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSlcbiAgICAgICAgcmV0dXJuIHByb2dyYW1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2REYXRhc2V0LFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUHJvZ3JhbSxcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICBUZ2RTaGFkZXJWZXJ0ZXgsXG4gICAgVGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBjdWJlTWlkUG9pbnRzLCB0cmlhbmdsZXNTdHJpbmdUb0VsZW1lbnRzIH0gZnJvbSBcIi4vZ2VvbWV0cnlcIlxuXG5leHBvcnQgY2xhc3MgUGFpbnRlclRyaWFuZ2xlcyBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuICAgIHByaXZhdGUgZWxlbWVudHNDb3VudCA9IDBcbiAgICBwcml2YXRlIF90cmlhbmdsZXMgPSBcIlwiXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKVxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KClcbiAgICAgICAgdGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoY29udGV4dC5nbCwgdGhpcy5wcm9ncmFtLCBbdGhpcy5kYXRhc2V0XSwgZWxlbWVudHMpXG4gICAgfVxuXG4gICAgc2V0IHRyaWFuZ2xlcyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZSlcbiAgICAgICAgdGhpcy52YW8udXBkYXRlRWxlbWVudHMoZWxlbWVudHMpXG4gICAgICAgIHRoaXMuZWxlbWVudHNDb3VudCA9IGVsZW1lbnRzLmxlbmd0aFxuICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgIH1cblxuICAgIGRlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgcHJvZ3JhbSwgdmFvLCBlbGVtZW50c0NvdW50IH0gPSB0aGlzXG4gICAgICAgIGNvbnN0IHsgZ2wsIGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICBwcm9ncmFtLnVzZSgpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBjYW1lcmEubWF0cml4TW9kZWxWaWV3KVxuICAgICAgICBwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKVxuICAgICAgICB2YW8uYmluZCgpXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIGVsZW1lbnRzQ291bnQsIGdsLlVOU0lHTkVEX0JZVEUsIDApXG4gICAgICAgIHZhby51bmJpbmQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcbiAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzNcIixcbiAgICAgICAgfSlcbiAgICAgICAgZGF0YXNldC5zZXQoXCJhdHRQb2ludFwiLCBjdWJlTWlkUG9pbnRzKVxuICAgICAgICByZXR1cm4gZGF0YXNldFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvZ3JhbSgpOiBUZ2RQcm9ncmFtIHtcbiAgICAgICAgY29uc3QgdmVydCA9IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgIHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuICAgICAgICAgICAgICAgIHVuaUxpZ2h0OiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGF0dFBvaW50OiBcInZlYzRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCJdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IGZyYWcgPSBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dHB1dHM6IHsgRnJhZ0NvbG9yOiBcInZlYzRcIiB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcImZsb2F0IGEgPSAxLjA7XCIsXG4gICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgIFwiICAuOCAqIChnbF9Gcm9udEZhY2luZyA/IHZlYzMoMCwgLjUsIDEpIDogdmVjMygxLCAwLCAwKSksXCIsXG4gICAgICAgICAgICAgICAgXCIgIGFcIixcbiAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KS5jb2RlXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSBuZXcgVGdkUHJvZ3JhbSh0aGlzLmNvbnRleHQuZ2wsIHsgdmVydCwgZnJhZyB9KVxuICAgICAgICByZXR1cm4gcHJvZ3JhbVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQcm9ncmFtLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IGN1YmVNaWRQb2ludHMsIHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMgfSBmcm9tIFwiLi9nZW9tZXRyeVwiXG5cbmV4cG9ydCBjbGFzcyBQYWludGVyV2lyZWZyYW1lIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG4gICAgcHJpdmF0ZSBlbGVtZW50c0NvdW50ID0gMFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gdGhpcy5jcmVhdGVEYXRhc2V0KClcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKClcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBuZXcgVWludDhBcnJheSgpXG4gICAgICAgIHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHRoaXMucHJvZ3JhbSwgW3RoaXMuZGF0YXNldF0sIGVsZW1lbnRzKVxuICAgIH1cblxuICAgIHNldCB0cmlhbmdsZXModmFsdWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHModmFsdWUpXG4gICAgICAgIGNvbnN0IHdpcmVmcmFtZTogbnVtYmVyW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCBhID0gZWxlbWVudHNbaV1cbiAgICAgICAgICAgIGNvbnN0IGIgPSBlbGVtZW50c1tpICsgMV1cbiAgICAgICAgICAgIGNvbnN0IGMgPSBlbGVtZW50c1tpICsgMl1cbiAgICAgICAgICAgIHdpcmVmcmFtZS5wdXNoKGEsIGIsIGMsIGEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YW8udXBkYXRlRWxlbWVudHMod2lyZWZyYW1lKVxuICAgICAgICB0aGlzLmVsZW1lbnRzQ291bnQgPSB3aXJlZnJhbWUubGVuZ3RoXG4gICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICAgICAgdGhpcy52YW8uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0LCBwcm9ncmFtLCB2YW8sIGVsZW1lbnRzQ291bnQgfSA9IHRoaXNcbiAgICAgICAgY29uc3QgeyBnbCwgY2FtZXJhIH0gPSBjb250ZXh0XG4gICAgICAgIHByb2dyYW0udXNlKClcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpXG4gICAgICAgIHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCBlbGVtZW50c0NvdW50LCBnbC5VTlNJR05FRF9CWVRFLCAwKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG4gICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWMzXCIsXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZU1pZFBvaW50cylcbiAgICAgICAgcmV0dXJuIGRhdGFzZXRcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyYW0oKTogVGdkUHJvZ3JhbSB7XG4gICAgICAgIGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pTW9kZWxWaWV3TWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcbiAgICAgICAgICAgICAgICB1bmlMaWdodDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBhdHRQb2ludDogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIFwiLFxuICAgICAgICAgICAgICAgIFwiICAodW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQgKyB2ZWM0KDAsIDAsIDAuMDIsIDApKTtcIixcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmU6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3V0cHV0czogeyBGcmFnQ29sb3I6IFwidmVjNFwiIH0sXG4gICAgICAgICAgICBtYWluQ29kZTogW1wiRnJhZ0NvbG9yID0gdmVjNCgwLDAsMCwxKTtcIl0sXG4gICAgICAgIH0pLmNvZGVcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IG5ldyBUZ2RQcm9ncmFtKHRoaXMuY29udGV4dC5nbCwgeyB2ZXJ0LCBmcmFnIH0pXG4gICAgICAgIHJldHVybiBwcm9ncmFtXG4gICAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7XG4gICAgSWNvbkFycm93TGVmdCxcbiAgICBJY29uQXJyb3dSaWdodCxcbiAgICBJY29uUmVzZXQsXG4gICAgdXNlTG9jYWxTdG9yYWdlU3RhdGUsXG4gICAgVmlld0J1dHRvbixcbiAgICBWaWV3RmxvYXRpbmdCdXR0b24sXG4gICAgVmlld0lucHV0VGV4dCxcbiAgICBWaWV3UGFuZWwsXG4gICAgVmlld1NsaWRlcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgdGdkQ2FsY0NsYW1wLCB0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IHsgdXNlVm9sdW1lVG9NZXNoTWFuYWdlciB9IGZyb20gXCIuL18vbWFuYWdlclwiXG5pbXBvcnQgeyBlbnN1cmVOdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi90eXBlLWd1YXJkc1wiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMgfSBmcm9tIFwiLi9fL2dlb21ldHJ5XCJcbmltcG9ydCB7IENPTkZJR1VSQVRJT05TIH0gZnJvbSBcIi4vXy9jb25maWd1cmF0aW9uc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgW2Nhc2VOdW1iZXIsIHNldENhc2VOdW1iZXJdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoMCwgXCJ2b2x1bWUtdG8tbWVzaC9jYXNlTnVtYmVyXCIsICh2YWx1ZSkgPT5cbiAgICAgICAgdGdkQ2FsY0NsYW1wKE1hdGguZmxvb3IoZW5zdXJlTnVtYmVyKHZhbHVlLCAwKSksIDAsIDI1NSksXG4gICAgKVxuICAgIGNvbnN0IFt0cmlhbmdsZXMsIHNldFRyaWFuZ2xlc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IGtleSA9IGB2b2x1bWUtdG8tbWVzaC90cmlhbmdsZXMvJHtjYXNlTnVtYmVyfWBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRUcmlhbmdsZXMoZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID8/IENPTkZJR1VSQVRJT05TW2Nhc2VOdW1iZXJdKVxuICAgICAgICBtYW5hZ2VyLmNhc2VOdW1iZXIgPSBjYXNlTnVtYmVyXG4gICAgfSwgW2Nhc2VOdW1iZXJdKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0cmlhbmdsZXMudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIG1hbmFnZXIudHJpYW5nbGVzID0gdHJpYW5nbGVzXG4gICAgfSwgW3RyaWFuZ2xlc10pXG4gICAgY29uc3QgaGFuZGxlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDI1NSkgJiAweGZmKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSaWdodCA9ICgpID0+IHtcbiAgICAgICAgc2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDEpICYgMHhmZilcbiAgICB9XG4gICAgY29uc3QgbWFuYWdlciA9IHVzZVZvbHVtZVRvTWVzaE1hbmFnZXIoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+TWFyY2hpbmcgY3ViZXM8L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01hcmNoaW5nX2N1YmVzXCI+TWFyY2hpbmcgY3ViZXM8L2E+IGlzIGEgdGVjaG5pcXVlIHRvIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgbWVzaGVzIGZyb20gYSB2b2x1bWUuXG4gICAgICAgICAgICAgICAgPGJyIC8+QSB2b2x1bWUgaXMgYSBmdW5jdGlvbiB0aGF0IHRlbGxzIHlvdSwgZm9yIGVhY2ggcG9pbnQgaW4gYSBib3gsIGl0IHlvdSBhcmUgaW5zaWRlIG9yIG91dHNpZGUgYW5cbiAgICAgICAgICAgICAgICBvYmplY3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBIHZveGVsIGlzIGEgdW5pdCBjdWJlLiBFYWNoIGNvcm5lciBvZiBhIHZveGVsIGlzIGVpdGhlciBpbnNpZGUgdGhlIHZvbHVtZSAoPGI+cmVkPC9iPikgb3Igb3V0c2lkZSAoXG4gICAgICAgICAgICAgICAgPGI+Ymx1ZTwvYj4pLiBXaXRoIHRyaWFuZ2xlcywgdG91Y2hpbmcgdGhlIGVkZ2VzIG9mIHRoZSB2b3hlbCwgd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgc3BhY2UgYmV0d2VlbiByZWRcbiAgICAgICAgICAgICAgICBhbmQgYmx1ZSBjb3JuZXJzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+QSB2b3hlbCBoYXMgOCBjb3JuZXJzLCBzbyB3ZSBoYXZlIDI1NiBjb25maWd1cmF0aW9ucy48L3A+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1hbmFnZXIuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaWV3U2xpZGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxleDF9XG4gICAgICAgICAgICAgICAgd2lkZVxuICAgICAgICAgICAgICAgIHRleHQ9e2Ake2Nhc2VOdW1iZXJ9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FzZU51bWJlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0Q2FzZU51bWJlcn1cbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsyNTV9XG4gICAgICAgICAgICAgICAgc3RlcD17MX0+PC9WaWV3U2xpZGVyPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZnVsbHdpZHRoIGdhcD1cIk1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJpYW5nbGVzIChmcm9tIG1pZCBwb2ludHMgQUJDREVGR0hJSktMKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dHJpYW5nbGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRyaWFuZ2xlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdGbG9hdGluZ0J1dHRvbiBpY29uPXtJY29uQXJyb3dMZWZ0fSBvbkNsaWNrPXtoYW5kbGVMZWZ0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0Zsb2F0aW5nQnV0dG9uIGljb249e0ljb25BcnJvd1JpZ2h0fSBvbkNsaWNrPXtoYW5kbGVSaWdodH0gLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gaWNvbj17SWNvblJlc2V0fT5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5MaXN0IG9mIHRyaWFuZ2xlcyBwZXIgY29uZmlndXJhdGlvbjwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8cHJlPntnZXRUcmlhbmdsZXMoKX08L3ByZT5cbiAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNldCgpIHtcbiAgICBjb25zdCBjb25maWd1cmF0aW9ucyA9IHRnZERhdGFNYXJjaGluZ0N1YmVzQ29uZmlndXJhdGlvbnMoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlndXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlndXJhdGlvbnNbaV1cbiAgICAgICAgY29uc3QgY29kZSA9IGNvbmZpZy5tYXAoKGkpID0+IFwiQUJDREVGR0hJSktMXCIuY2hhckF0KGkpKS5qb2luKFwiXCIpXG4gICAgICAgIGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYHZvbHVtZS10by1tZXNoL3RyaWFuZ2xlcy8ke2l9YCwgY29kZSlcbiAgICB9XG4gICAgbG9jYXRpb24ucmVsb2FkKClcbn1cblxuZnVuY3Rpb24gZ2V0VHJpYW5nbGVzKCkge1xuICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXh0ID0gZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdm9sdW1lLXRvLW1lc2gvdHJpYW5nbGVzLyR7aX1gKSA/PyBcIj9cIlxuICAgICAgICBpZiAodGV4dCA9PT0gXCI/XCIpIGxpbmVzLnB1c2goXCJbIC8qIE4vQSAvKiBdLFwiKVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh0ZXh0KVxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtKU09OLnN0cmluZ2lmeShlbGVtZW50cyl9LGApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oXCJcXG5cIilcbn1cbiJdLCJuYW1lcyI6WyJ0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zIiwiQ09ORklHVVJBVElPTlMiLCJhcnIiLCJpIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RWZXJ0ZXhBcnJheSIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJjYXNlTnVtYmVyVG9Db2xvcnMiLCJjdWJlVmVydGljZXMiLCJQYWludGVyQ29ybmVycyIsImNvbnRleHQiLCJ2YWx1ZSIsImNvbG9ycyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsIl90aGlzIiwicHJvZ3JhbSIsInZhbyIsInRleHR1cmUiLCJnbCIsImNhbWVyYSIsImNyZWF0ZURhdGFzZXQiLCJkYXRhc2V0IiwiY3JlYXRlUHJvZ3JhbSIsInZlcnQiLCJmcmFnIiwiY3JlYXRlVGV4dHVyZSIsImN1YmVFZGdlcyIsIlVpbnQ4QXJyYXkiLCJQIiwiTiIsIm1pZFBvaW50cyIsImEiLCJiIiwieCIsInkiLCJ6IiwiY3ViZU1pZFBvaW50cyIsInRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMiLCJlbGVtZW50cyIsIl9pdGVyYXRvckVycm9yIiwiQyIsIm1hc2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTdGF0ZSIsInRnZENhbGNEZWdUb1JhZCIsIndlYmdsUHJlc2V0QmxlbmQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiUmVhY3QiLCJQYWludGVyTWlkUG9pbnRzIiwiUGFpbnRlckN1YmUiLCJQYWludGVyVHJpYW5nbGVzIiwiUGFpbnRlcldpcmVmcmFtZSIsIlZvbHVtZVRvTWVzaE1hbmFnZXIiLCJfaW5zdGFuY2VvZiIsImNsZWFyIiwic3RhdGUiLCJ3aXJlZnJhbWUiLCJjb3JuZXJzIiwidHJpYW5nbGVzIiwiX3RoaXNfY29ybmVyc1BhaW50ZXIiLCJ0cmlhbmdsZXNQYWludGVyIiwid2lyZWZyYW1lUGFpbnRlciIsInVzZVZvbHVtZVRvTWVzaE1hbmFnZXIiLCJyZWYiLCJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwidmlzaWJsZXMiLCJsZXR0ZXJzIiwiY291bnQiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImN0eCIsImNhbnZhcyIsImxldHRlciIsImVsZW1lbnRzQ291bnQiLCJjIiwiVmlldyIsIkljb25BcnJvd0xlZnQiLCJJY29uQXJyb3dSaWdodCIsIkljb25SZXNldCIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiVmlld0J1dHRvbiIsIlZpZXdGbG9hdGluZ0J1dHRvbiIsIlZpZXdJbnB1dFRleHQiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwidGdkQ2FsY0NsYW1wIiwiZW5zdXJlTnVtYmVyIiwic3R5bGVzIiwiUGFnZSIsIl91c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIk1hdGgiLCJjYXNlTnVtYmVyIiwic2V0Q2FzZU51bWJlciIsIl9SZWFjdF91c2VTdGF0ZSIsInNldFRyaWFuZ2xlcyIsImtleSIsIl9nbG9iYWxUaGlzX2xvY2FsU3RvcmFnZV9nZXRJdGVtIiwibWFuYWdlciIsImdsb2JhbFRoaXMiLCJoYW5kbGVMZWZ0IiwiaGFuZGxlUmlnaHQiLCJvblJlYWR5IiwiaGFuZGxlUmVzZXQiLCJnZXRUcmlhbmdsZXMiLCJjb25maWd1cmF0aW9ucyIsImNvbmZpZyIsImNvZGUiLCJsb2NhdGlvbiIsImxpbmVzIiwidGV4dCIsIkpTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsd0VBQXdFLEU7Ozs7Ozs7OztBQ0RyQjtBQUVuRTs7Q0FFQyxHQUNNLElBQU1DLGlCQUFxQ0Qsc0VBQWtDQSxHQUFHLEdBQUcsQ0FBQyxTQUFDRTtXQUN4RkEsSUFBSSxHQUFHLENBQUMsU0FBQ0M7ZUFBTSxlQUFlLE1BQU0sQ0FBQ0E7T0FBSSxJQUFJLENBQUM7R0FDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNH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