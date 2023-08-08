import RefMap from "../../ref-map";
var Asset = (function () {
    function Asset() {
        this.images = new RefMap();
    }
    Asset.prototype.createImage = function (src) {
        var key = src;
        return this.images.add(key, function () {
            var image = new Image();
            image.loading = "eager";
            return {
                type: "TgdAssetImage",
                key: key,
                image: image,
                isSuccessfullyLoaded: new Promise(function (resolve) {
                    image.src = src;
                    image.onload = function () { return resolve(true); };
                    image.onerror = function () { return resolve(false); };
                }),
            };
        });
    };
    Asset.prototype.destroyImage = function (asset) {
        this.images.delete(asset.key);
    };
    return Asset;
}());
export default Asset;
//# sourceMappingURL=asset.js.map