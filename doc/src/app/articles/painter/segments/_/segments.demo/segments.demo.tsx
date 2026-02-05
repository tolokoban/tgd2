import {
    ArrayNumber2,
    ArrayNumber4,
    tgdCanvasCreatePalette,
    TgdContext,
    TgdControllerCameraOrbit,
    TgdMaterialDiffuse,
    TgdPainterClear,
    TgdPainterLogic,
    TgdPainterSegments,
    TgdPainterSegmentsData,
    TgdPainterSegmentsMorphing,
    TgdPainterState,
    TgdTexture2D,
    webglPresetDepth,
} from "@tolokoban/tgd";
import View from "@/components/demo/Tgd";

function init(context: TgdContext) {
    // #begin
    context.camera.transfo.distance = 75;
    new TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        maxZoom: 2,
        minZoom: 0.5,
        speedZoom: 1,
    });
    const clear = new TgdPainterClear(context, {
        color: [0.3, 0.3, 0.3, 1],
        depth: 1,
    });
    const radius = 10;
    const width = 50;
    const data1 = new TgdPainterSegmentsData();
    const nodes1: ArrayNumber4[] = [];
    for (let step = -width; step < width; step++) {
        const ang = step * 0.5;
        const r = radius * Math.cos((step * Math.PI * 0.5) / width);
        const x = r * Math.cos(ang);
        const y = step * 0.2;
        const z = r * Math.sin(ang);
        const thickness = Math.max(0, 1.0 - Math.abs(step) / width);
        nodes1.push([x, y, z, thickness]);
    }
    for (let i = 1; i < nodes1.length; i++) {
        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes1.length + 1), 0];
        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes1.length + 1), 0];
        data1.add(nodes1[i - 1], nodes1[i], uv0, uv1);
    }
    const data2 = new TgdPainterSegmentsData();
    const nodes2: ArrayNumber4[] = [];
    for (let step = -width; step < width; step++) {
        const ang = step * 0.25;
        const r = radius * Math.cos((step * Math.PI * 0.5) / width) * .5;
        const x = r * Math.cos(ang);
        const y = step * 0.3;
        const z = r * Math.sin(ang);
        const thickness = Math.max(0, 1.0 - Math.abs(step) / width);
        nodes2.push([x, y, z, thickness]);
    }
    for (let i = 1; i < nodes2.length; i++) {
        const uv0: ArrayNumber2 = [(i - 0.5) / (nodes2.length + 1), 0];
        const uv1: ArrayNumber2 = [(i + 0.5) / (nodes2.length + 1), 0];
        data2.add(nodes2[i - 1], nodes2[i], uv0, uv1);
    }
    const palette = new TgdTexture2D(context).loadBitmap(
        tgdCanvasCreatePalette(["#f44", "#ff4", "#4f4", "#4ff", "#44f"]),
    );
    const segments1 = new TgdPainterSegments(context, {
        dataset: data1.makeDataset,
        roundness: 32,
        minRadius: 4,
        material: new TgdMaterialDiffuse({
            color: palette,
            lockLightsToCamera: true,
        }),
    });
    segments1.transfo.setPosition(-10, 0, 0);
    const segments2 = new TgdPainterSegmentsMorphing(context, {
        datasetsPairs: [[data1.makeDataset, data2.makeDataset]],
        roundness: 32,
        minRadius: 4,
        material: new TgdMaterialDiffuse({
            color: palette,
            lockLightsToCamera: true,
        }),
    });
    segments2.transfo.setPosition(+10, 0, 0);
    const state = new TgdPainterState(context, {
        depth: webglPresetDepth.less,
        children: [segments1, segments2],
    });
    context.add(
        clear,
        state,
        new TgdPainterLogic((time) => {
            segments2.mix = Math.abs(Math.sin(time));
        }),
    );
    context.play();
    // #end
    context.inputs.pointer.eventHover.addListener((event) => {
        const { x, y } = event.current;
        const [R, G, B] = context.readPixel(x, y);
        console.log(
            `%c(${R}, ${G}, ${B})]`,
            `color:#777;background:rgb(${R},${G},${B})`,
        );
    });
}

export default function Demo() {
    return (
        <View
            onReady={init}
            gizmo
            options={{
                preserveDrawingBuffer: true,
            }}
        />
    );
}
