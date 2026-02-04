import {
    tgdCalcRandom,
    type TgdContext,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterSprites,
    TgdPainterSpritesAtlas,
    TgdPainterSpritesHue,
    TgdPainterState,
    TgdSprite,
    TgdTexture2D,
    webglPresetBlend,
    webglPresetDepth,
} from "@tolokoban/tgd";

import View, { type Assets } from "@/components/demo/Tgd";

import BricksURL from "./bricks.webp";

// #begin
function init(context: TgdContext, assets: Assets) {
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const texture = new TgdTexture2D(context, {
        load: assets.image.sprites,
    });
    const cell = (col: number, row: number) => ({
        x: col / 2,
        y: row / 4,
        width: 1 / 2,
        height: 1 / 4,
    });
    const atlas: TgdPainterSpritesAtlas = [];
    for (let col = 0; col < 2; col++) {
        for (let row = 0; row < 3; row++) {
            atlas.push(cell(col, row));
        }
    }
    const spritesPainter = new TgdPainterSpritesHue(context, {
        texture,
        atlas,
        atlasUnit: 2,
    });
    const bricks = new Map<string, TgdSprite>();
    const click = (x: number, y: number) => {
        const { aspectRatio } = context;
        x *= aspectRatio > 1 ? aspectRatio : 1;
        if (x < -1 || x > 1) return;

        y *= aspectRatio > 1 ? 1 : aspectRatio;
        if (y < -1 || y > 1) return;

        x = Math.floor(x * 2) * 2 + 1;
        y = Math.floor(y * 4) + 0.5;
        const key = `${x}/${y}`;
        const currentBrick = bricks.get(key);
        if (currentBrick) {
            if (currentBrick.index < 4) currentBrick.index++;
            else {
                console.log(
                    "Delete:",
                    currentBrick,
                );
                spritesPainter.spriteDelete(currentBrick);
                bricks.delete(key);
            }
        } else {
            const brick = spritesPainter.spriteCreate({
                x,
                y,
                hue: Math.random() * .8,
            });
            bricks.set(key, brick);
        }
        context.paint();
    };
    for (let loop = 0; loop < 10; loop++) {
        click(tgdCalcRandom(-1, +1), tgdCalcRandom(-1, +1));
    }
    context.inputs.pointer.eventTap.addListener((evt) => click(evt.x, evt.y));
    context.add(
        clear,
        new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            blend: webglPresetBlend.alpha,
            children: [spritesPainter],
        }),
        new TgdPainterLogic(() => {
            context.camera.fitSpaceAtTarget(8, 8);
        }),
    );
    context.paint();
}
// #end

export default function Demo() {
    return (
        <View
            onReady={init}
            assets={{
                image: { sprites: BricksURL },
            }}
        />
    );
}
