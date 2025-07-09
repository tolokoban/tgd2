import { ViewCanvas2d } from "@/components/Canvas2d"
import { makeCanvasTriangleSlow } from "./canvas"

export function Test() {
    return <ViewCanvas2d factory={() => makeCanvasTriangleSlow(1024, 13)} />
}
