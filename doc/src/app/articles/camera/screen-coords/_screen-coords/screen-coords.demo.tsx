import { TgdContext } from "@tolokoban/tgd"
import View from "@/components/demo/Tgd"

function init(ctx: TgdContext) {
    // #begin Initializing WebGL
    ctx.paint()
    // #end
}

export default function Demo() {
    return <View onReady={init} />
}
