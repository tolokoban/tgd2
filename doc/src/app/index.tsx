/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */

import React from "react"

import { matchRoute, useRouteContext, ROUTES } from "./routes"
import { RouteMatch, RoutePath } from "./types"

export * from "./routes"
export * from "./types"


import Layout0 from "./layout"
import Layout2 from "./articles/layout"
import Layout38 from "./articles/painter/layout"
import Layout55 from "./articles/painter/framebuffer/layout"
import Layout116 from "./tricks/layout"
import Loading0 from "./loading"
import NotFound0 from "./404"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./api/page"))
const Page2 = React.lazy(() => import("./articles/page.mdx"))
const Page3 = React.lazy(() => import("./articles/animation/page.mdx"))
const Page4 = React.lazy(() => import("./articles/animation/basic/page.mdx"))
const Page5 = React.lazy(() => import("./articles/animation/chain/page.mdx"))
const Page6 = React.lazy(() => import("./articles/animation/transfo/page.mdx"))
const Page7 = React.lazy(() => import("./articles/camera/page.mdx"))
const Page8 = React.lazy(() => import("./articles/camera/screen-coords/page.mdx"))
const Page9 = React.lazy(() => import("./articles/context/page.mdx"))
const Page10 = React.lazy(() => import("./articles/context/painters/page.mdx"))
const Page11 = React.lazy(() => import("./articles/context/play-pause/page.mdx"))
const Page13 = React.lazy(() => import("./articles/custom-shader/holes/page.mdx"))
const Page14 = React.lazy(() => import("./articles/gltf/page.mdx"))
const Page17 = React.lazy(() => import("./articles/math/fractal/pascal-triangle/page.mdx"))
const Page18 = React.lazy(() => import("./articles/mesh/page.mdx"))
const Page19 = React.lazy(() => import("./articles/mesh/geometry/page.mdx"))
const Page20 = React.lazy(() => import("./articles/mesh/geometry/box/page.mdx"))
const Page21 = React.lazy(() => import("./articles/mesh/geometry/sphere-ico/page.mdx"))
const Page22 = React.lazy(() => import("./articles/mesh/marching-cubes/page.mdx"))
const Page23 = React.lazy(() => import("./articles/mesh/material/page.mdx"))
const Page24 = React.lazy(() => import("./articles/mesh/material/depth/page.mdx"))
const Page25 = React.lazy(() => import("./articles/mesh/material/diffuse/page.mdx"))
const Page26 = React.lazy(() => import("./articles/mesh/material/face-orientation/page.mdx"))
const Page27 = React.lazy(() => import("./articles/mesh/material/flat/page.mdx"))
const Page28 = React.lazy(() => import("./articles/mesh/material/flat-texture/page.mdx"))
const Page29 = React.lazy(() => import("./articles/mesh/material/ghost/page.mdx"))
const Page30 = React.lazy(() => import("./articles/mesh/material/glass/page.mdx"))
const Page31 = React.lazy(() => import("./articles/mesh/material/global/page.mdx"))
const Page32 = React.lazy(() => import("./articles/mesh/material/hull/page.mdx"))
const Page33 = React.lazy(() => import("./articles/mesh/material/mask/page.mdx"))
const Page34 = React.lazy(() => import("./articles/mesh/material/mirror/page.mdx"))
const Page35 = React.lazy(() => import("./articles/mesh/material/normal-map/page.mdx"))
const Page36 = React.lazy(() => import("./articles/mesh/material/solid/page.mdx"))
const Page37 = React.lazy(() => import("./articles/mesh/volume-to-mesh/page"))
const Page38 = React.lazy(() => import("./articles/painter/page.mdx"))
const Page39 = React.lazy(() => import("./articles/painter/background/page.mdx"))
const Page41 = React.lazy(() => import("./articles/painter/background-with-depth/page.mdx"))
const Page40 = React.lazy(() => import("./articles/painter/background/2/page.mdx"))
const Page42 = React.lazy(() => import("./articles/painter/clear/page.mdx"))
const Page43 = React.lazy(() => import("./articles/painter/custom/page.mdx"))
const Page44 = React.lazy(() => import("./articles/painter/filter/page.mdx"))
const Page45 = React.lazy(() => import("./articles/painter/filter/bloom/page.mdx"))
const Page46 = React.lazy(() => import("./articles/painter/filter/blur/page.mdx"))
const Page47 = React.lazy(() => import("./articles/painter/filter/chromatic-aberration/page.mdx"))
const Page48 = React.lazy(() => import("./articles/painter/filter/custom/page.mdx"))
const Page49 = React.lazy(() => import("./articles/painter/filter/hue/page.mdx"))
const Page50 = React.lazy(() => import("./articles/painter/filter/several/page.mdx"))
const Page51 = React.lazy(() => import("./articles/painter/fragment-shader/page.mdx"))
const Page52 = React.lazy(() => import("./articles/painter/fragment-shader/flame/page.mdx"))
const Page53 = React.lazy(() => import("./articles/painter/fragment-shader/pattern/page.mdx"))
const Page54 = React.lazy(() => import("./articles/painter/fragment-shader/tunnel/page.mdx"))
const Page55 = React.lazy(() => import("./articles/painter/framebuffer/page.mdx"))
const Page56 = React.lazy(() => import("./articles/painter/framebuffer/anti-alising/page.mdx"))
const Page57 = React.lazy(() => import("./articles/painter/framebuffer/anti-alising/msaa/page.mdx"))
const Page59 = React.lazy(() => import("./articles/painter/framebuffer/example0/01/page.mdx"))
const Page60 = React.lazy(() => import("./articles/painter/framebuffer/example0/02/page.mdx"))
const Page61 = React.lazy(() => import("./articles/painter/framebuffer/example0/03/page.mdx"))
const Page62 = React.lazy(() => import("./articles/painter/framebuffer/example0/04/page.mdx"))
const Page63 = React.lazy(() => import("./articles/painter/framebuffer/example0/05/page.mdx"))
const Page64 = React.lazy(() => import("./articles/painter/framebuffer/example1/page.mdx"))
const Page65 = React.lazy(() => import("./articles/painter/framebuffer/example2/page.mdx"))
const Page66 = React.lazy(() => import("./articles/painter/framebuffer/example3/page.mdx"))
const Page68 = React.lazy(() => import("./articles/painter/framebuffer/fixed-size/01/page.mdx"))
const Page69 = React.lazy(() => import("./articles/painter/framebuffer/fixed-size/02/page.mdx"))
const Page70 = React.lazy(() => import("./articles/painter/gizmo/page.mdx"))
const Page71 = React.lazy(() => import("./articles/painter/lod/page.mdx"))
const Page72 = React.lazy(() => import("./articles/painter/lod/detail/page.mdx"))
const Page73 = React.lazy(() => import("./articles/painter/lod/neuron/page.mdx"))
const Page74 = React.lazy(() => import("./articles/painter/lod/neuron-test/page.mdx"))
const Page75 = React.lazy(() => import("./articles/painter/logic/page.mdx"))
const Page76 = React.lazy(() => import("./articles/painter/node/page.mdx"))
const Page77 = React.lazy(() => import("./articles/painter/overlay/page.mdx"))
const Page78 = React.lazy(() => import("./articles/painter/particles/page.mdx"))
const Page79 = React.lazy(() => import("./articles/painter/particles/example1/page.mdx"))
const Page80 = React.lazy(() => import("./articles/painter/particles/example2/page.mdx"))
const Page81 = React.lazy(() => import("./articles/painter/particles/example3/page.mdx"))
const Page82 = React.lazy(() => import("./articles/painter/particles/example4/page.mdx"))
const Page83 = React.lazy(() => import("./articles/painter/points-cloud/page.mdx"))
const Page84 = React.lazy(() => import("./articles/painter/program/page.mdx"))
const Page85 = React.lazy(() => import("./articles/painter/segments/page.mdx"))
const Page86 = React.lazy(() => import("./articles/painter/segments/02/page.mdx"))
const Page87 = React.lazy(() => import("./articles/painter/segments/morphing/page.mdx"))
const Page88 = React.lazy(() => import("./articles/painter/sprites/page.mdx"))
const Page89 = React.lazy(() => import("./articles/painter/x-ray/page.mdx"))
const Page90 = React.lazy(() => import("./articles/state/page.mdx"))
const Page91 = React.lazy(() => import("./articles/state/blend/page.mdx"))
const Page92 = React.lazy(() => import("./articles/state/cull/page.mdx"))
const Page93 = React.lazy(() => import("./articles/state/stencil/page.mdx"))
const Page94 = React.lazy(() => import("./articles/suzanne/page.mdx"))
const Page95 = React.lazy(() => import("./articles/test/page.mdx"))
const Page96 = React.lazy(() => import("./articles/texture/page.mdx"))
const Page98 = React.lazy(() => import("./articles/texture/2d/bitmap/page.mdx"))
const Page99 = React.lazy(() => import("./articles/texture/2d/data/page.mdx"))
const Page100 = React.lazy(() => import("./articles/texture/2d/video/page.mdx"))
const Page101 = React.lazy(() => import("./articles/texture/cube/page.mdx"))
const Page102 = React.lazy(() => import("./articles/time/page.mdx"))
const Page103 = React.lazy(() => import("./articles/utils/page.mdx"))
const Page105 = React.lazy(() => import("./articles/utils/loaders/tgdLoadImageFromElement/page.mdx"))
const Page107 = React.lazy(() => import("./example/retro-futuristic-screen/page"))
const Page108 = React.lazy(() => import("./quick-start/page.mdx"))
const Page109 = React.lazy(() => import("./tools/page.mdx"))
const Page110 = React.lazy(() => import("./tools/filter/page"))
const Page111 = React.lazy(() => import("./tools/gltf/page"))
const Page112 = React.lazy(() => import("./tools/palette/page"))
const Page115 = React.lazy(() => import("./tools/palette/[value]/page"))
const Page116 = React.lazy(() => import("./tricks/page.mdx"))
const Page117 = React.lazy(() => import("./tricks/color-mask/page.mdx"))
const Page118 = React.lazy(() => import("./tricks/color-mask/2/page.mdx"))
const Page119 = React.lazy(() => import("./tricks/color-mask/3/page.mdx"))
const Page120 = React.lazy(() => import("./tricks/stereo-vision/page.mdx"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb0 = <Loading0/>
    const ly0 = Layout0
    const pg0 = Page0
    const pg1 = Page1
    const ly2 = Layout2
    const pg2 = Page2
    const pg3 = Page3
    const pg4 = Page4
    const pg5 = Page5
    const pg6 = Page6
    const pg7 = Page7
    const pg8 = Page8
    const pg9 = Page9
    const pg10 = Page10
    const pg11 = Page11
    const pg13 = Page13
    const pg14 = Page14
    const pg17 = Page17
    const pg18 = Page18
    const pg19 = Page19
    const pg20 = Page20
    const pg21 = Page21
    const pg22 = Page22
    const pg23 = Page23
    const pg24 = Page24
    const pg25 = Page25
    const pg26 = Page26
    const pg27 = Page27
    const pg28 = Page28
    const pg29 = Page29
    const pg30 = Page30
    const pg31 = Page31
    const pg32 = Page32
    const pg33 = Page33
    const pg34 = Page34
    const pg35 = Page35
    const pg36 = Page36
    const pg37 = Page37
    const ly38 = Layout38
    const pg38 = Page38
    const pg39 = Page39
    const pg41 = Page41
    const pg40 = Page40
    const pg42 = Page42
    const pg43 = Page43
    const pg44 = Page44
    const pg45 = Page45
    const pg46 = Page46
    const pg47 = Page47
    const pg48 = Page48
    const pg49 = Page49
    const pg50 = Page50
    const pg51 = Page51
    const pg52 = Page52
    const pg53 = Page53
    const pg54 = Page54
    const ly55 = Layout55
    const pg55 = Page55
    const pg56 = Page56
    const pg57 = Page57
    const pg59 = Page59
    const pg60 = Page60
    const pg61 = Page61
    const pg62 = Page62
    const pg63 = Page63
    const pg64 = Page64
    const pg65 = Page65
    const pg66 = Page66
    const pg68 = Page68
    const pg69 = Page69
    const pg70 = Page70
    const pg71 = Page71
    const pg72 = Page72
    const pg73 = Page73
    const pg74 = Page74
    const pg75 = Page75
    const pg76 = Page76
    const pg77 = Page77
    const pg78 = Page78
    const pg79 = Page79
    const pg80 = Page80
    const pg81 = Page81
    const pg82 = Page82
    const pg83 = Page83
    const pg84 = Page84
    const pg85 = Page85
    const pg86 = Page86
    const pg87 = Page87
    const pg88 = Page88
    const pg89 = Page89
    const pg90 = Page90
    const pg91 = Page91
    const pg92 = Page92
    const pg93 = Page93
    const pg94 = Page94
    const pg95 = Page95
    const pg96 = Page96
    const pg98 = Page98
    const pg99 = Page99
    const pg100 = Page100
    const pg101 = Page101
    const pg102 = Page102
    const pg103 = Page103
    const pg105 = Page105
    const pg107 = Page107
    const pg108 = Page108
    const pg109 = Page109
    const pg110 = Page110
    const pg111 = Page111
    const pg112 = Page112
    const pg115 = Page115
    const ly116 = Layout116
    const pg116 = Page116
    const pg117 = Page117
    const pg118 = Page118
    const pg119 = Page119
    const pg120 = Page120
    return (
        <Route path="/" Page={pg0} Layout={ly0} NotFound={NotFound0} fallback={fb0} context={context}>
            <Route path="/api" Page={pg1} NotFound={NotFound0} fallback={fb0} context={context}/>
            <Route path="/articles" Page={pg2} Layout={ly2} NotFound={NotFound0} fallback={fb0} context={context}>
                <Route path="/articles/animation" Page={pg3} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/animation/basic" Page={pg4} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/animation/chain" Page={pg5} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/animation/transfo" Page={pg6} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/camera" Page={pg7} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/camera/screen-coords" Page={pg8} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/context" Page={pg9} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/context/painters" Page={pg10} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/context/play-pause" Page={pg11} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/custom-shader" NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/custom-shader/holes" Page={pg13} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/gltf" Page={pg14} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/articles/math" NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/math/fractal" NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/math/fractal/pascal-triangle" Page={pg17} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                </Route>
                <Route path="/articles/mesh" Page={pg18} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/mesh/geometry" Page={pg19} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/mesh/geometry/box" Page={pg20} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/geometry/sphere-ico" Page={pg21} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/mesh/marching-cubes" Page={pg22} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/mesh/material" Page={pg23} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/mesh/material/depth" Page={pg24} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/diffuse" Page={pg25} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/face-orientation" Page={pg26} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/flat" Page={pg27} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/flat-texture" Page={pg28} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/ghost" Page={pg29} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/glass" Page={pg30} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/global" Page={pg31} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/hull" Page={pg32} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/mask" Page={pg33} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/mirror" Page={pg34} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/normal-map" Page={pg35} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/mesh/material/solid" Page={pg36} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/mesh/volume-to-mesh" Page={pg37} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/painter" Page={pg38} Layout={ly38} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/painter/background" Page={pg39} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/background/2" Page={pg40} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/background-with-depth" Page={pg41} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/clear" Page={pg42} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/custom" Page={pg43} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/filter" Page={pg44} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/filter/bloom" Page={pg45} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/blur" Page={pg46} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/chromatic-aberration" Page={pg47} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/custom" Page={pg48} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/hue" Page={pg49} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/filter/several" Page={pg50} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/fragment-shader" Page={pg51} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/fragment-shader/flame" Page={pg52} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/fragment-shader/pattern" Page={pg53} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/fragment-shader/tunnel" Page={pg54} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/framebuffer" Page={pg55} Layout={ly55} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/framebuffer/anti-alising" Page={pg56} NotFound={NotFound0} fallback={fb0} context={context}>
                            <Route path="/articles/painter/framebuffer/anti-alising/msaa" Page={pg57} NotFound={NotFound0} fallback={fb0} context={context}/>
                        </Route>
                        <Route path="/articles/painter/framebuffer/example0" NotFound={NotFound0} fallback={fb0} context={context}>
                            <Route path="/articles/painter/framebuffer/example0/01" Page={pg59} NotFound={NotFound0} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/02" Page={pg60} NotFound={NotFound0} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/03" Page={pg61} NotFound={NotFound0} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/04" Page={pg62} NotFound={NotFound0} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/example0/05" Page={pg63} NotFound={NotFound0} fallback={fb0} context={context}/>
                        </Route>
                        <Route path="/articles/painter/framebuffer/example1" Page={pg64} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/framebuffer/example2" Page={pg65} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/framebuffer/example3" Page={pg66} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/framebuffer/fixed-size" NotFound={NotFound0} fallback={fb0} context={context}>
                            <Route path="/articles/painter/framebuffer/fixed-size/01" Page={pg68} NotFound={NotFound0} fallback={fb0} context={context}/>
                            <Route path="/articles/painter/framebuffer/fixed-size/02" Page={pg69} NotFound={NotFound0} fallback={fb0} context={context}/>
                        </Route>
                    </Route>
                    <Route path="/articles/painter/gizmo" Page={pg70} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/lod" Page={pg71} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/lod/detail" Page={pg72} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/lod/neuron" Page={pg73} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/lod/neuron-test" Page={pg74} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/logic" Page={pg75} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/node" Page={pg76} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/overlay" Page={pg77} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/particles" Page={pg78} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/particles/example1" Page={pg79} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/particles/example2" Page={pg80} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/particles/example3" Page={pg81} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/particles/example4" Page={pg82} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/points-cloud" Page={pg83} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/program" Page={pg84} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/segments" Page={pg85} NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/painter/segments/02" Page={pg86} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/painter/segments/morphing" Page={pg87} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/painter/sprites" Page={pg88} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/painter/x-ray" Page={pg89} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/state" Page={pg90} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/state/blend" Page={pg91} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/state/cull" Page={pg92} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/articles/state/stencil" Page={pg93} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/suzanne" Page={pg94} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/articles/test" Page={pg95} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/articles/texture" Page={pg96} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/texture/2d" NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/texture/2d/bitmap" Page={pg98} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/texture/2d/data" Page={pg99} NotFound={NotFound0} fallback={fb0} context={context}/>
                        <Route path="/articles/texture/2d/video" Page={pg100} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/articles/texture/cube" Page={pg101} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/articles/time" Page={pg102} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/articles/utils" Page={pg103} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/articles/utils/loaders" NotFound={NotFound0} fallback={fb0} context={context}>
                        <Route path="/articles/utils/loaders/tgdLoadImageFromElement" Page={pg105} NotFound={NotFound0} fallback={fb0} context={context}/>
                    </Route>
                </Route>
            </Route>
            <Route path="/example" NotFound={NotFound0} fallback={fb0} context={context}>
                <Route path="/example/retro-futuristic-screen" Page={pg107} NotFound={NotFound0} fallback={fb0} context={context}/>
            </Route>
            <Route path="/quick-start" Page={pg108} NotFound={NotFound0} fallback={fb0} context={context}/>
            <Route path="/tools" Page={pg109} NotFound={NotFound0} fallback={fb0} context={context}>
                <Route path="/tools/filter" Page={pg110} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/tools/gltf" Page={pg111} NotFound={NotFound0} fallback={fb0} context={context}/>
                <Route path="/tools/palette" Page={pg112} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/tools/palette/PalettePreviewDisk" NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/tools/palette/PalettePreviewHorizontal" NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/tools/palette/[value]" Page={pg115} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
            </Route>
            <Route path="/tricks" Page={pg116} Layout={ly116} NotFound={NotFound0} fallback={fb0} context={context}>
                <Route path="/tricks/color-mask" Page={pg117} NotFound={NotFound0} fallback={fb0} context={context}>
                    <Route path="/tricks/color-mask/2" Page={pg118} NotFound={NotFound0} fallback={fb0} context={context}/>
                    <Route path="/tricks/color-mask/3" Page={pg119} NotFound={NotFound0} fallback={fb0} context={context}/>
                </Route>
                <Route path="/tricks/stereo-vision" Page={pg120} NotFound={NotFound0} fallback={fb0} context={context}/>
            </Route>
        </Route>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function intl<T extends PageComponent | ContainerComponent | React.ReactNode>(
    page: T,
    translations: Record<string, T>,
    lang = ""
): T {
    const candidate1 = translations[lang]
    if (candidate1) return candidate1

    const [prefix] = lang.split("-")
    const candidate2 = translations[prefix]
    if (candidate2) return candidate2

    return page
}

type PageComponent = React.FC<{ params: Record<string, string> }>
type ContainerComponent = React.FC<{
    children: React.ReactNode
    params: Record<string, string>
}>

interface RouteProps {
    path: string
    element?: React.ReactNode
    fallback?: React.ReactNode
    children?: React.ReactNode
    Page?: PageComponent
    Layout?: ContainerComponent
    Template?: ContainerComponent
    NotFound?: React.FC
    context: RouteMatch | null
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    NotFound,
    context,
}: RouteProps) {
    const match = context && matchRoute(context.path, ROUTES[path as RoutePath])

    if (!match) return null

    if (match.distance === 0) {
        if (!Page) {
            if (NotFound) return Layout ? (
                <Layout params={match.params}><NotFound /></Layout>
            ) : <NotFound />
            return null
        }

        const element = Template ? (
            <Template params={match.params}>
                <Page params={match.params} />
            </Template>
        ) : (
            <Page params={match.params} />
        )
        if (Layout) {
            return (
                <Layout params={match.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }

    if (NotFound && !hasMatchingChild(context.path, children)) {
        return Layout ? (
            <Layout params={match.params}><NotFound /></Layout>
        ) : (
            <NotFound />
        )
    }

    return Layout ? (
        <Layout params={match.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}

function hasMatchingChild(path: string, children: React.ReactNode): boolean {
    return React.Children.toArray(children).some(child => {
        if (!React.isValidElement(child)) return false
        const childPath = (child.props as { path?: string }).path
        if (!childPath) return false
        return matchRoute(path, ROUTES[childPath as RoutePath]) !== null
    })
}
