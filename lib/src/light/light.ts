import { TgdVec3, TgdVec4 } from "@tgd/math"
import { ArrayNumber3, ArrayNumber4 } from "@tgd/types"
import { ensureTgdVec3 } from "@tgd/utils"

export interface TgdLightOptions {
    color: TgdVec4 | ArrayNumber4
    direction: TgdVec3 | ArrayNumber3
}

export class TgdLight {
    /**
     * The alpha channel is the intensity of the light.
     */
    public color: TgdVec4

    private readonly _direction = new TgdVec3()

    constructor(options: Partial<TgdLightOptions> = {}) {
        this.color = options.color ? new TgdVec4(options.color) : new TgdVec4(0.8, 0.8, 0.8, 1)
        this.direction = ensureTgdVec3(options.direction ?? new TgdVec3(0, 0, -1))
    }

    get direction() {
        return this._direction
    }
    set direction(v: TgdVec3) {
        this._direction.from(v).normalize()
    }
}
