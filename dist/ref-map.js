var RefMap = (function () {
    function RefMap() {
        this.map = new Map();
        this.count = new Map();
    }
    RefMap.prototype.add = function (key, factory) {
        var _a;
        var _b = this, map = _b.map, count = _b.count;
        if (count.has(key)) {
            count.set(key, 1 + ((_a = count.get(key)) !== null && _a !== void 0 ? _a : 0));
            var curVal = map.get(key);
            if (!curVal)
                throw Error("[CountMap] Map should not be empty!");
            return curVal;
        }
        var newVal = factory();
        map.set(key, newVal);
        count.set(key, 1);
        return newVal;
    };
    RefMap.prototype.delete = function (key) {
        var _a;
        var _b = this, map = _b.map, count = _b.count;
        if (!map.has(key))
            return;
        var newCount = ((_a = count.get(key)) !== null && _a !== void 0 ? _a : 0) - 1;
        if (newCount > 0) {
            count.set(key, newCount);
            return;
        }
        var value = map.get(key);
        map.delete(key);
        count.delete(key);
        return value;
    };
    return RefMap;
}());
export default RefMap;
//# sourceMappingURL=ref-map.js.map