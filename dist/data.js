var Data = (function () {
    function Data(def) {
        this.buffer = undefined;
        this.data = {};
        var stride = 0;
        var data = {};
        var definitions = {};
        for (var _i = 0, _a = Object.keys(def); _i < _a.length; _i++) {
            var key = _a[_i];
            data[key] = new ArrayBuffer(0);
            var dataDef = makeDataDefinition(def[key]);
            definitions[key] = dataDef;
            stride += dataDef.bytesPerElement * dataDef.dimension;
        }
        this.data = data;
        this.definitions = definitions;
        this.stride = stride;
    }
    Data.prototype.get = function (verticesCount) {
        var byteLength = this.stride * verticesCount;
        if (!this.buffer || this.buffer.byteLength < byteLength) {
            this.checkIfWeHaveEnoughData(verticesCount);
            this.buffer = new ArrayBuffer(byteLength);
            var viewDestination = new DataView(this.buffer);
            var offsetDestination = 0;
            var _a = this, data = _a.data, definitions = _a.definitions;
            for (var vertex = 0; vertex < verticesCount; vertex++) {
                for (var _i = 0, _b = Object.keys(definitions); _i < _b.length; _i++) {
                    var key = _b[_i];
                    var def = definitions[key];
                    var buff = data[key];
                    var viewSource = new DataView(buff);
                    var offsetSource = def.bytesPerElement * def.dimension * vertex;
                    for (var dim = 0; dim < def.dimension; dim++) {
                        def.setter(viewDestination, offsetDestination, def.getter(viewSource, offsetSource));
                        offsetSource += def.bytesPerElement;
                        offsetDestination += def.bytesPerElement;
                    }
                }
            }
        }
        return this.buffer;
    };
    Data.prototype.set = function (attribName, value) {
        if (isObject(value) && value.buffer instanceof ArrayBuffer) {
            value = value.buffer;
        }
        this.data[attribName] = value;
        this.buffer = undefined;
    };
    Data.prototype.checkIfWeHaveEnoughData = function (verticesCount) {
        var _a = this, data = _a.data, definitions = _a.definitions;
        for (var _i = 0, _b = Object.keys(definitions); _i < _b.length; _i++) {
            var key = _b[_i];
            var buff = data[key];
            if (!buff) {
                throw Error("No data has been set for attribute \"".concat(key, "\"!\nPlease use something like this:\n    data.set(\"").concat(key, "\", new Float32Array([4, 3]))"));
            }
            var def = definitions[key];
            var byteLength = def.bytesPerElement * def.dimension * verticesCount;
            if (buff.byteLength < byteLength) {
                throw Error("Attribute \"".concat(key, "\" has only ").concat(buff.byteLength, " bytes, but we need at least ").concat(byteLength, "!"));
            }
        }
    };
    return Data;
}());
export function makeData(def) {
    return new Data(def);
}
function makeDataDefinition(attribute) {
    var dataDef = typeof attribute === "number"
        ? {
            dimension: attribute,
            type: "float",
        }
        : attribute;
    switch (dataDef.type) {
        case "float":
            return makeDataDefinitionFloat(dataDef);
            break;
        default:
            throw Error("Unable to create a Data for an attribute of type \"".concat(dataDef.type, "\"!"));
    }
}
function makeDataDefinitionFloat(dataDef) {
    var bytesPerElement = Float32Array.BYTES_PER_ELEMENT;
    return {
        dimension: dataDef.dimension,
        bytesPerElement: bytesPerElement,
        getter: function (view, byteOffset) {
            return view.getFloat32(byteOffset);
        },
        setter: function (view, byteOffset, value) {
            view.setFloat32(byteOffset, value);
        },
    };
}
function isObject(data) {
    if (!data)
        return false;
    return typeof data === "object";
}
//# sourceMappingURL=data.js.map