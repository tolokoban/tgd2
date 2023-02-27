export default class PainterBackground {
    constructor(options) {
        this.options = Object.assign({ placeholder: [0, 0, 0, 1] }, options);
    }
    initialize(scene) {
        return new Promise(resolve => {
            const { image, placeholder } = this.options;
            this.texture = scene.texture.createFromAsset(image, { placeholder });
            resolve(true);
        });
    }
    destroy(scene) {
        scene.texture.destroy(this.texture);
    }
    draw(time, delay) {
        throw new Error("Method not implemented.");
    }
    play(time, delay) {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=background.js.map