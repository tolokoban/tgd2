import {
    tgdCalcDegToRad,
    tgdCalcRandom,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdFilterHueRotation,
    TgdGeometryBox,
    tgdLoadGlb,
    TgdMat3,
    TgdMaterialDiffuse,
    TgdMaterialGhost,
    TgdMaterialNormals,
    TgdPainterAxes,
    TgdPainterClear,
    TgdPainterFilter,
    TgdPainterFramebuffer,
    TgdPainterLogic,
    TgdPainterMesh,
    TgdPainterMeshGltf,
    TgdPainterNode,
    TgdPainterSegments,
    TgdPainterSegmentsData,
    TgdPainterState,
    TgdVec3,
    webglPresetCull,
    webglPresetDepth,
} from "@tolokoban/tgd";

import View from "@/components/demo/Tgd";

import SuzaneURL from "@/assets/mesh/suzanne.glb";

export default function DemoContainer() {
    return <View onReady={init} gizmo />;
}

function init(context: TgdContext) {
    const camera = new TgdCameraPerspective({
        transfo: { distance: 5 },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 2,
        zoom: 1,
    });
    context.camera = camera;
    camera.transfo.orientation.face("+X+Y+Z");
    camera.transfo.setPosition(0, 0, 0);
    camera.spaceHeightAtTarget = 6;
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
        geo: {
            lat: 0,
            lng: 0,
            minLat: tgdCalcDegToRad(-60),
            maxLat: tgdCalcDegToRad(+60),
        },
    });
    context.paint();
    const action = async () => {
        const asset = await tgdLoadGlb(SuzaneURL);
        if (!asset) return;

        console.log("Suzanne has been loaded!");
        const axes = new TgdPainterAxes(context, { scale: 10 });
        const segments = new TgdPainterSegmentsData();
        for (let loop = 0; loop < 12; loop++) {
            const tip = new TgdVec3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5,
            )
                .normalize()
                .scale(tgdCalcRandom(1, 3));
            segments.add(
                [0, 0, 0, 0.5],
                [tip.x, tip.y, tip.z, tgdCalcRandom(0, 0.5)],
            );
        }
        const state = new TgdPainterState(context, {
            depth: webglPresetDepth.less,
            cull: webglPresetCull.back,
            children: [
                new TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                axes,
                new TgdPainterSegments(context, {
                    dataset: segments.makeDataset,
                    roundness: 4,
                }),
            ],
        });
        context.add(state);
        context.paint();
        document.addEventListener("keydown", (evt) => {
            const step = tgdCalcDegToRad(15);
            let angX = 0;
            let angY = 0;
            switch (evt.key) {
                case "0":
                    context.camera.transfo.orientation.face("+X+Y+Z");
                    context.camera.zoom = 1;
                    context.camera.transfo.setPosition(0, 0, 0).setDistance(15);
                    break;
                case ".":
                    context.camera.zoom = 1;
                    break;
                case "6":
                    angY = step;
                    break;
                case "4":
                    angY = -step;
                    break;
                case "8":
                    angX = -step;
                    break;
                case "2":
                    angX = step;
                    break;
                case " ":
                    context.camera.transfo.debug("SPACE");
                    context.paint();
                    return;
            }
            context.camera.transfo.orbitAroundX(angX);
            context.camera.transfo.orbitAroundY(angY);
            context.camera.debug("Camera");
            context.paint();
        });
    };
    void action();
}
