export class TgdMath {
    static readonly TAU = Math.PI * 2

    static readonly INVERSE_TAU = 0.5 / Math.PI

    static readonly INVERSE_PI = 1 / Math.PI

    static readonly INVERSE_180 = 1 / 180

    static radiansToDegrees(radians: number): number {
        return radians * 180 * TgdMath.INVERSE_PI
    }

    static degreesToRadians(degrees: number): number {
        return degrees * Math.PI * TgdMath.INVERSE_180
    }
}
