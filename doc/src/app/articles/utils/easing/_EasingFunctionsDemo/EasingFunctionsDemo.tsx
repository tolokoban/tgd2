import * as React from "react"
import {
    tgdEasingFunctionTriangle,
    tgdEasingFunctionTriangleInverse,
    tgdEasingFunctionLinear,
    tgdEasingFunctionLinearInverse,
    tgdEasingFunctionInSine,
    tgdEasingFunctionOutSine,
    tgdEasingFunctionInOutSine,
    tgdEasingFunctionInQuad,
    tgdEasingFunctionOutQuad,
    tgdEasingFunctionInOutQuad,
    tgdEasingFunctionInCubic,
    tgdEasingFunctionOutCubic,
    tgdEasingFunctionInOutCubic,
    tgdEasingFunctionInQuart,
    tgdEasingFunctionOutQuart,
    tgdEasingFunctionInOutQuart,
    tgdEasingFunctionInQuint,
    tgdEasingFunctionOutQuint,
    tgdEasingFunctionInOutQuint,
    tgdEasingFunctionInExpo,
    tgdEasingFunctionOutExpo,
    tgdEasingFunctionInOutExpo,
    tgdEasingFunctionInCirc,
    tgdEasingFunctionOutCirc,
    tgdEasingFunctionInOutCirc,
    tgdEasingFunctionInBack,
    tgdEasingFunctionOutBack,
    tgdEasingFunctionInOutBack,
    tgdEasingFunctionInElastic,
    tgdEasingFunctionOutElastic,
    tgdEasingFunctionInOutElastic,
    tgdEasingFunctionInBounce,
    tgdEasingFunctionOutBounce,
    tgdEasingFunctionInOutBounce,
    TgdEasingFunction,
    tgdEasingCompose,
} from "@tolokoban/tgd"
import { Theme, CommonProps, styleCommon, useLocalStorageState, ViewPanel } from "@tolokoban/ui"

import Styles from "./EasingFunctionsDemo.module.css"
import { ViewPlot } from "./Plot"
import { ViewDemo } from "./Demo"
import CodeViewerView from "@/components/demo/CodeViewer"

const $ = Theme.classNames

export type ViewEasingFunctionsDemoProps = CommonProps & {}

export function ViewEasingFunctionsDemo(props: ViewEasingFunctionsDemoProps) {
    const [selectedEasingFunction, setSelectedEasingFunction] = useLocalStorageState("Linear", "selectedEasingFunction")
    const style: React.CSSProperties = {
        ...styleCommon(props),
    }
    return (
        <>
            <ViewPanel display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
                <pre>tgdEasingFunction{selectedEasingFunction}</pre>
                <ViewDemo easing={FUNCTIONS[selectedEasingFunction]} />
            </ViewPanel>
            <div className={$.join("full-width", props.className, Styles.easingFunctionsDemo)} style={style}>
                {Object.keys(FUNCTIONS).map((name) => (
                    <ViewPlot
                        key={name}
                        name={`${name}`}
                        easing={FUNCTIONS[name]}
                        onClick={setSelectedEasingFunction}
                    />
                ))}
            </div>
            <hr />
            <p>
                You can also <b>compose</b> multiple easing functions to create a new one:
            </p>
            <ViewPanel display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
                <CodeViewerView
                    language="ts"
                    value={`tgdEasingCompose(
    tgdEasingFunctionTriangle,
    tgdEasingFunctionOutBack
)`}
                />
                <ViewPlot easing={tgdEasingCompose(FUNCTIONS.Triangle, FUNCTIONS.OutBack)} />
            </ViewPanel>
            <ViewPanel display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="center">
                <CodeViewerView
                    language="ts"
                    value={`tgdEasingCompose(
    tgdEasingFunctionOutBack,
    tgdEasingFunctionTriangle,
)`}
                />
                <ViewPlot easing={tgdEasingCompose(FUNCTIONS.OutBack, FUNCTIONS.Triangle)} />
            </ViewPanel>
        </>
    )
}

const FUNCTIONS: Record<string, TgdEasingFunction> = {
    Linear: tgdEasingFunctionLinear,
    LinearInverse: tgdEasingFunctionLinearInverse,
    Triangle: tgdEasingFunctionTriangle,
    TriangleInverse: tgdEasingFunctionTriangleInverse,
    InSine: tgdEasingFunctionInSine,
    OutSine: tgdEasingFunctionOutSine,
    InOutSine: tgdEasingFunctionInOutSine,
    InQuad: tgdEasingFunctionInQuad,
    OutQuad: tgdEasingFunctionOutQuad,
    InOutQuad: tgdEasingFunctionInOutQuad,
    InCubic: tgdEasingFunctionInCubic,
    OutCubic: tgdEasingFunctionOutCubic,
    InOutCubic: tgdEasingFunctionInOutCubic,
    InQuart: tgdEasingFunctionInQuart,
    OutQuart: tgdEasingFunctionOutQuart,
    InOutQuart: tgdEasingFunctionInOutQuart,
    InQuint: tgdEasingFunctionInQuint,
    OutQuint: tgdEasingFunctionOutQuint,
    InOutQuint: tgdEasingFunctionInOutQuint,
    InExpo: tgdEasingFunctionInExpo,
    OutExpo: tgdEasingFunctionOutExpo,
    InOutExpo: tgdEasingFunctionInOutExpo,
    InCirc: tgdEasingFunctionInCirc,
    OutCirc: tgdEasingFunctionOutCirc,
    InOutCirc: tgdEasingFunctionInOutCirc,
    InBack: tgdEasingFunctionInBack,
    OutBack: tgdEasingFunctionOutBack,
    InOutBack: tgdEasingFunctionInOutBack,
    InElastic: tgdEasingFunctionInElastic,
    OutElastic: tgdEasingFunctionOutElastic,
    InOutElastic: tgdEasingFunctionInOutElastic,
    InBounce: tgdEasingFunctionInBounce,
    OutBounce: tgdEasingFunctionOutBounce,
    InOutBounce: tgdEasingFunctionInOutBounce,
}
