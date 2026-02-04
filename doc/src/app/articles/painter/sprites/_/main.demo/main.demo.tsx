import {
    tgdCalcDegToRad,
    tgdCalcMix,
    tgdCalcModulo,
    tgdCalcRandom,
    type TgdContext,
    TgdControllerCameraOrbit,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterSprites,
    TgdPainterSpritesAtlas,
    TgdPainterState,
    TgdSprite,
    TgdTexture2D,
    TgdTimeInterval,
    webglPresetDepth,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";

import SpritesURL from "./sprites.webp";

// #begin
function init(context: TgdContext, assets: Assets) {
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const texture = new TgdTexture2D(context, {
        params: {
            magFilter: "NEAREST",
            minFilter: "NEAREST",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE",
        },
        load: assets.image.sprites,
    });
    const cell = (col: number, row: number) => ({
        x: col / 8,
        y: row / 10,
        width: 1 / 8,
        height: 1 / 10,
    });
    const atlas: TgdPainterSpritesAtlas = [];
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 8; col++) {
            atlas.push(cell(col, row));
        }
    }
    const spritesPainter1 = new TgdPainterSprites(context, {
        texture,
        atlas,
        atlasUnit: 5,
    });
    const spritesPainter2 = new TgdPainterSprites(context, {
        texture,
        atlas,
        atlasUnit: 5,
    });
    const sprites: TgdSprite[] = [];
    for (let x = -7; x < 8; x++) {
        for (let y = -3; y < 4; y += 2) {
            for (let z = 0; z < 1; z += 0.1) {
                const sprite1 = spritesPainter1.add({});
                sprite1.x = x;
                sprite1.y = y;
                sprite1.z = -z * 100;
                if (tgdCalcRandom() < 0.5) sprite1.scaleX = -1;
                sprite1.index = Math.floor(tgdCalcRandom(0, 40));
                sprites.push(sprite1);
                const sprite2 = spritesPainter2.add({});
                sprite2.x = x;
                sprite2.y = y;
                sprite2.z = -z * 100 - 100;
                if (tgdCalcRandom() < 0.5) sprite2.scaleX = -1;
                sprite2.index = Math.floor(tgdCalcRandom(0, 72));
                sprites.push(sprite2);
            }
        }
    }
    const STEPS: number[] = [
        3,
        2,
        1,
        0,
        7,
        6,
        5,
        4,
        9,
        10,
        11,
        8,
        11,
        12,
        10,
        15,
    ];
    for (let i = 0; i < 16; i++) {
        STEPS.push(STEPS[i] + 16);
    }
    STEPS.push(32, 34, 35, 36, 33, 37, 39, 38);
    for (let i = 0; i < 32; i++) {
        STEPS.push(STEPS[i] + 40);
    }
    const interval = new TgdTimeInterval({
        intervalInSeconds: 0.2,
        action(time: number) {
            for (const sprite of sprites) {
                const nextStep = STEPS[sprite.index];
                if (typeof nextStep === "number") {
                    sprite.index = nextStep;
                }
            }
        },
    });
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            children: [spritesPainter1, spritesPainter2],
        }),
        new TgdPainterLogic((time, delay) => {
            interval.update(time, delay);
            for (const sprite of sprites) {
                sprite.angle = tgdCalcDegToRad(30 * Math.sin(time));
            }
            const t = tgdCalcModulo(time * 0.05, 0, 1);
            const z = tgdCalcMix(0, -100, t);
            context.camera.transfo.setPosition(0, 0, z);
        }),
    );
    context.play();
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: { sprites: SpritesURL },
            }}
            controller={{
                inertiaOrbit: 1000,
                inertiaZoom: 1000,
                geo: {
                    minLat: tgdCalcDegToRad(-30),
                    minLng: tgdCalcDegToRad(-30),
                    maxLat: tgdCalcDegToRad(30),
                    maxLng: tgdCalcDegToRad(30),
                },
            }}
        />
    );
}
