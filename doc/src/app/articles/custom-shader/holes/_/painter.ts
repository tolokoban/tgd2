import {
    TgdContext,
    TgdMaterialNormals,
    TgdPainterMesh,
    TgdDataGlb,
    TgdTexture2D,
} from "@tolokoban/tgd"

export class ShieldPainter extends TgdPainterMesh {
    private readonly texAbedo: TgdTexture2D

    constructor(context: TgdContext, glb: TgdDataGlb, abedo: HTMLImageElement) {
        const texAbedo = new TgdTexture2D(context).loadBitmap(abedo)
        // const material = new TgdMaterialDiffuse({
        //     color: texAbedo,
        //     light: new TgdLight({
        //         color: new TgdVec4(1, 1, 1, 1),
        //         direction: new TgdVec3(1, 1, 1),
        //     }),
        // })
        const material = new TgdMaterialNormals()
        const geometry = glb.makeGeometry()
        super(context, {
            geometry,
            material,
        })
        console.log("🚀 [painter] geometry = ", geometry) // @FIXME: Remove this line written on 2024-11-06 at 12:20
        console.log("🚀 [painter] abedo = ", abedo) // @FIXME: Remove this line written on 2024-11-06 at 12:45
        this.texAbedo = texAbedo
    }

    delete(): void {
        this.texAbedo.delete()
    }
}
