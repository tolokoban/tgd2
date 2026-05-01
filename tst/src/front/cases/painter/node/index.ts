import {
    TgdContext,
    TgdPainterClear,
    TgdPainterGroup,
    TgdPainterMesh,
    TgdPainterNode,
    TgdPainterState,
} from "@tolokoban/tgd"

import type { TestCase } from "@/types"

const testCase: TestCase = {
    label: "TgdPainterNode",
    async exec(context) {
        return () => {
            const state = new TgdPainterState(context, {
                depth: "less",
                children: [],
            })
            context.add(
                new TgdPainterClear(context, {
                    color: [0.4, 0.6, 0.3, 1],
                    depth: 1,
                }),
                state,
            )
            addChildren(context, state, 4)
        }
    },
}

export default testCase

function addChildren(context: TgdContext, group: TgdPainterGroup, levels: number) {
    group.add(new TgdPainterMesh(context))
    if (levels > 0) {
        for (const x of [-1, +1]) {
            for (const y of [-1, +1]) {
                const node = new TgdPainterNode({
                    transfo: { position: [x, y, 1], scale: [0.666, 0.666, 0.666] },
                })
                node.transfo.setEulerRotation(33, 22, 11)
                group.add(node)
                addChildren(context, node, levels - 1)
            }
        }
    }
}
