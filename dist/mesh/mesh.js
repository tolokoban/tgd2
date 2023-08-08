var TgdMesh = (function () {
    function TgdMesh(options) {
        var _a, _b, _c, _d;
        this.dirty = true;
        if (!options) {
            this.vertices = [];
            this.normals = [];
            this.faces = [];
            this.faceNormals = [];
            this.elements = [];
            return;
        }
        this.vertices = options.vertices;
        this.normals = (_a = options.normals) !== null && _a !== void 0 ? _a : [];
        this.faces = (_b = options.faces) !== null && _b !== void 0 ? _b : [];
        this.faceNormals = (_c = options.faceNormals) !== null && _c !== void 0 ? _c : [];
        this.elements = (_d = options.elements) !== null && _d !== void 0 ? _d : [];
    }
    TgdMesh.prototype.update = function () {
        if (!this.dirty)
            return;
        this.dirty = false;
    };
    return TgdMesh;
}());
export { TgdMesh };
//# sourceMappingURL=mesh.js.map