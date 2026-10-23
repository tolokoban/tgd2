import {
    type ArrayNumber3,
    TgdBoundingBox,
    tgdCalcClamp,
    TgdCameraOrthographic,
    type TgdContext,
    TgdFilterAntiAliasing,
    TgdFilterDeferredShading,
    TgdGeometryPath,
    TgdGeometryPlane,
    TgdLight,
    TgdMaterialFlat,
    type TgdMeshWithTextures,
    TgdPainterClear,
    TgdPainterDeferredShading,
    TgdPainterFilter,
    TgdPainterShadow,
    TgdPainterState,
    TgdTexture2D,
    TgdTextureCube,
    TgdTransfo,
    TgdVec3,
} from "@tolokoban/tgd"
import * as fontkit from "fontkit"
import View, { type Assets } from "@/components/demo/Tgd"
import FuzarFontURL from "@/assets/font/Fuzar_GX.woff2"
import PosX from "@/assets/cubemap/1024/warehouse/posX.webp"
import PosY from "@/assets/cubemap/1024/warehouse/posY.webp"
import PosZ from "@/assets/cubemap/1024/warehouse/posZ.webp"
import NegX from "@/assets/cubemap/1024/warehouse/negX.webp"
import NegY from "@/assets/cubemap/1024/warehouse/negY.webp"
import NegZ from "@/assets/cubemap/1024/warehouse/negZ.webp"

const TEXT = "Fubar"
const LIGHT_BLUE: [number, number, number, number] = [0.68, 0.85, 1, 1]

function init(context: TgdContext, assets: Assets) {
    // #begin Initializing WebGL
    // The font file has been loaded as an ArrayBuffer.
    const font = fontkit.create(new Uint8Array(assets.data.fuzar) as Buffer) as fontkit.Font
    console.log("🐞 [fonts@41] font =", font) // @FIXME: Remove this line written on 2026-10-23 at 17:56
    console.log("🐞 [fonts@42] font.variationAxes =", font.variationAxes) // @FIXME: Remove this line written on 2026-10-23 at 18:15
    const textures: TgdMeshWithTextures["textures"] = {
        metallic: new TgdTexture2D(context).fill("#fff"),
        roughness: new TgdTexture2D(context).fill("#444"),
    }
    // One mesh per glyph, so each letter casts its shadow on the others.
    const letters: TgdMeshWithTextures[] = []
    const bbox = new TgdBoundingBox()
    for (const { path, x, y } of makeGlyphPaths(font, TEXT)) {
        const geometry = new TgdGeometryPath(path, {
            // Glyphs often have overlapping contours.
            fillRule: "nonzero",
            thickness: 0.2,
            // bevel: { width: 0.02, segments: 3 },
        })
        const { min, max } = geometry.computeBoundingBox()
        bbox.addPoint(min[0] + x, min[1] + y, min[2])
        bbox.addPoint(max[0] + x, max[1] + y, max[2])
        letters.push({
            geometry,
            transfo: new TgdTransfo({ position: [x, y, 0] }),
            visible: true,
            textures,
        })
    }
    const Y = letters.map((letter) => letter.transfo.position.y)
    // The text stands on the floor (Y = 0), centered on X and Z.
    const { min, max } = bbox
    const height = max[1] - min[1]
    // The letters use the material of their parent.
    const gold: TgdMeshWithTextures = {
        transfo: new TgdTransfo({ position: [-(min[0] + max[0]) / 2, -min[1], 0] }),
        visible: true,
        material: new TgdMaterialFlat({ color: [1, 0.85, 0.45, 1] }),
        children: letters,
    }
    // The floor receives the shadow of the text.
    const floor: TgdMeshWithTextures = {
        geometry: new TgdGeometryPlane({ sizeX: 20, sizeY: 20, vecX: [1, 0, 0], vecY: [0, 0, -1] }),
        transfo: new TgdTransfo(),
        visible: true,
        material: new TgdMaterialFlat({ color: LIGHT_BLUE }),
    }
    const meshes = [gold, floor]
    const deferred = new TgdPainterDeferredShading(context, { meshes })
    const target: ArrayNumber3 = [0, height / 2, 0]
    const shadow = new TgdPainterShadow(context, {
        camera: makeShadowCamera(target),
        meshes,
        resolution: 4096,
    })
    // The light camera looks toward its -Z axis.
    const [lx, ly, lz] = shadow.camera.transfo.axisZ
    const skyboxTransfo = new TgdTransfo()
    const filter = new TgdFilterDeferredShading(context, {
        textureNormals: deferred.textureNormals,
        textureDepth: deferred.textureDepth,
        textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
        // The gold reflects this skybox, but we don't paint it: the background is light blue.
        skyboxTexture: new TgdTextureCube(context, {
            imagePosX: assets.image.posX,
            imagePosY: assets.image.posY,
            imagePosZ: assets.image.posZ,
            imageNegX: assets.image.negX,
            imageNegY: assets.image.negY,
            imageNegZ: assets.image.negZ,
        }),
        skyboxTransfo,
        light: new TgdLight({ color: [1, 0.95, 0.9, 1], direction: [-lx, -ly, -lz] }),
        shadow: { camera: shadow.camera, texture: shadow.texture },
        ambientOcclusion: { intensity: 1.5, blur: true, combineWithLight: false },
        cavity: {
            ridge: 1,
            valley: 1,
        },
    })
    context.camera.near = 0.1
    context.camera.far = 100
    context.camera.transfo.setPosition(...target)
    context.camera.transfo.orientation = new TgdTransfo({ position: [0, 2, 8] }).lookAt([0, 0, 0]).orientation
    context.camera.fitSpaceAtTarget(max[0] - min[0] + 1, height + 1)
    context.add(
        shadow,
        deferred,
        new TgdPainterClear(context, { color: LIGHT_BLUE, depth: 1 }),
        // Nothing is painted (alpha = 0) where there is no mesh.
        new TgdPainterState(context, {
            depth: "off",
            cull: "off",
            blend: "alpha",
            children: [
                new TgdPainterFilter(context, {
                    texture: deferred.textureAlbedo,
                    // The deferred shading has no anti-aliasing, and the background is transparent.
                    filters: [
                        filter,
                        new TgdFilterAntiAliasing({
                            strength: 1,
                            alpha: true,
                        }),
                    ],
                    flipY: true,
                }),
            ],
        }),
        (time, delta) => {
            const ang = time * 3
            const h = 0.3
            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i]
                const shift = (i * 2 * Math.PI) / letters.length
                const y = tgdCalcClamp(Math.sin(ang + shift), 0, 1) * h
                letter.transfo.setPosition(letter.transfo.position.x, Y[i] + y, letter.transfo.position.z)
            }
            skyboxTransfo.orbitAroundX(-delta * 0.1)
        },
    )
    context.play()
    // #end
}

export default function PlayingWithFonts() {
    return (
        <View
            fullscreen
            onReady={init}
            assets={{
                data: { fuzar: FuzarFontURL },
                image: {
                    posX: PosX,
                    posY: PosY,
                    posZ: PosZ,
                    negX: NegX,
                    negY: NegY,
                    negZ: NegZ,
                },
            }}
            controller={{ inertiaOrbit: 1000 }}
        />
    )
}

// #begin makeGlyphPaths()
/**
 * SVG path of each glyph of `text`, with its position in the text.
 * The unit is the em, and the font space has its Y axis pointing up, like WebGL.
 * Glyphs without outline (spaces) are skipped.
 */
function makeGlyphPaths(font: fontkit.Font, text: string): Array<{ path: string; x: number; y: number }> {
    const run = font.layout(text)
    const scale = 1 / font.unitsPerEm
    const glyphs: Array<{ path: string; x: number; y: number }> = []
    let x = 0
    let y = 0
    for (let i = 0; i < run.glyphs.length; i++) {
        const glyphPath = run.glyphs[i].path
        const position = run.positions[i]
        if (glyphPath.commands.length > 0) {
            glyphs.push({
                path: glyphPath.scale(scale).toSVG(),
                x: (x + position.xOffset) * scale,
                y: (y + position.yOffset) * scale,
            })
        }
        x += position.xAdvance
        y += position.yAdvance
    }
    return glyphs
}
// #end

// #begin makeShadowCamera()
/**
 * The light is at the top left of the text, in front of it,
 * and looks at `target`.
 */
function makeShadowCamera(target: ArrayNumber3) {
    const position = new TgdVec3(-4, 2, 5)
    const distance = new TgdVec3(position).subtract(new TgdVec3(target)).size
    const light = new TgdCameraOrthographic({
        transfo: new TgdTransfo({ distance: 0, position }),
        // Half of the height of the visible area.
        spaceHeight: 4,
        near: Math.max(0.1, distance - 6),
        far: distance + 16,
    })
    light.transfo.lookAt(target)
    // Square shadow texture.
    light.screenWidth = 1
    light.screenHeight = 1
    return light
}
// #end
