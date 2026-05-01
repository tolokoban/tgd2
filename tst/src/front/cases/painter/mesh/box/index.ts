import { TgdPainterClear, TgdPainterMesh, TgdPainterState } from "@tolokoban/tgd"

import type { TestCase } from "@/types"

const testCase: TestCase = {
    label: "Simple cube",
    async exec(context) {
        return () => {
            context.add(
                new TgdPainterClear(context, {
                    color: [0.7, 0.3, 0.1, 1],
                    depth: 1,
                }),
                new TgdPainterState(context, {
                    depth: "less",
                    children: [new TgdPainterMesh(context)],
                }),
            )
        }
    },
}

export default testCase
