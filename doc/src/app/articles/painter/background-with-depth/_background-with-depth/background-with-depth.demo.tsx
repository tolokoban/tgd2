import React from "react";
import { useDebouncedEffect, ViewInputNumber } from "@tolokoban/ui";
import {
  tgdCalcModulo,
  TgdContext,
  tgdMakeMeshGlbPainter,
  TgdMaterialDepth,
  TgdPainterBackgroundWithDepth,
  TgdPainterLogic,
  TgdPainterMesh,
  TgdPainterState,
  TgdTexture2D,
  webglPresetCull,
  webglPresetDepth,
} from "@tolokoban/tgd";

import View, { Assets } from "@/components/demo/Tgd";

import BackgroundIMG from "./background.webp";
import BackgroundGLB from "./background.glb";

function init(context: TgdContext, assets: Assets) {
  // #begin Initializing WebGL
  context.camera = assets.glb.background.createCameraByName("Camera");
  context.camera.far = 100
  const depthMaker = new TgdPainterState(context, {
    cull: webglPresetCull.back,
    children: [
      tgdMakeMeshGlbPainter({
        context,
        data: assets.glb.background,
        node: "Building",
        overrideMaterial: () => () => new TgdMaterialDepth(),
      }).painter,
    ],
  });
  const background = new TgdPainterBackgroundWithDepth(context, {
    background: new TgdTexture2D(context).loadBitmap(assets.image.background),
    children: [depthMaker],
  });
  const cube = new TgdPainterMesh(context);
  cube.transfo.setPosition(11.02, 0, -8.75).setScale(4);
  context.add(
    background,
    new TgdPainterState(context, {
      depth: webglPresetDepth.less,
      children: [cube],
    }),
    new TgdPainterLogic((time) => {
      const mod = tgdCalcModulo(time * 0.1, 0, 2);
      let y = 0;
      if (mod < 1) y = mod * 25;
      else y = 25 * (2 - mod);
      const { x, z } = cube.transfo.position;
      cube.transfo.setPosition(x, y, z);
      cube.transfo.setEulerRotation(time, time * 47, -time * 120);
    })
  );
  context.play();
  // #end
  return background;
}

export default function Demo() {
//   const [material, setMaterial] = useMaterial();
//   const [min, setMin] = React.useState(material.min);
//   const [max, setMax] = React.useState(material.max);
//   useDebouncedEffect(
//     () => {
//       material.min = min;
//       material.max = max;
//     },
//     [min, max],
//     400
//   );
  return (
    <View
      onReady={(context, assets) => {
        init(context, assets);
        // setMaterial(init(context, assets));
      }}
      options={{
        antialias: false,
      }}
      assets={{
        glb: { background: BackgroundGLB },
        image: { background: BackgroundIMG },
      }}
    >
    </View>
  );
}

function useMaterial(): [
  { min: number; max: number },
  (mat: { min: number; max: number }) => void
] {
  const refMaterial = React.useRef<{ min: number; max: number } | null>(null);
  if (!refMaterial.current) refMaterial.current = { min: 0.992, max: 1 };

  return [
    refMaterial.current,
    (mat: { min: number; max: number }) => (refMaterial.current = mat),
  ];
}
