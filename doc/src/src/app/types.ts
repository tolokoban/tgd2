/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */
export type RoutePath =
    | "/"
    | "/api"
    | "/articles"
    | "/articles/animation"
    | "/articles/animation/basic"
    | "/articles/animation/chain"
    | "/articles/animation/transfo"
    | "/articles/context"
    | "/articles/context/painters"
    | "/articles/context/play-pause"
    | "/articles/custom-shader"
    | "/articles/custom-shader/holes"
    | "/articles/gltf"
    | "/articles/material"
    | "/articles/material/depth"
    | "/articles/material/face-orientation"
    | "/articles/material/flat"
    | "/articles/material/ghost"
    | "/articles/material/hull"
    | "/articles/math"
    | "/articles/math/fractal"
    | "/articles/math/fractal/pascal-triangle"
    | "/articles/mesh"
    | "/articles/mesh/marching-cubes"
    | "/articles/mesh/volume-to-mesh"
    | "/articles/painter"
    | "/articles/painter/background"
    | "/articles/painter/background-with-depth"
    | "/articles/painter/background/2"
    | "/articles/painter/clear"
    | "/articles/painter/custom"
    | "/articles/painter/filter"
    | "/articles/painter/filter/blur"
    | "/articles/painter/filter/chromatic-aberration"
    | "/articles/painter/filter/custom"
    | "/articles/painter/filter/hue"
    | "/articles/painter/framebuffer"
    | "/articles/painter/framebuffer/example0"
    | "/articles/painter/framebuffer/example0/01"
    | "/articles/painter/framebuffer/example0/02"
    | "/articles/painter/framebuffer/example0/03"
    | "/articles/painter/framebuffer/example0/04"
    | "/articles/painter/framebuffer/example0/05"
    | "/articles/painter/framebuffer/example1"
    | "/articles/painter/framebuffer/example2"
    | "/articles/painter/framebuffer/example3"
    | "/articles/painter/logic"
    | "/articles/painter/node"
    | "/articles/painter/segments"
    | "/articles/painter/segments/02"
    | "/articles/painter/x-ray"
    | "/articles/state"
    | "/articles/state/cull"
    | "/articles/state/stencil"
    | "/articles/suzanne"
    | "/articles/test"
    | "/articles/texture"
    | "/articles/texture/2d"
    | "/articles/texture/2d/bitmap"
    | "/articles/texture/2d/data"
    | "/articles/texture/cube"
    | "/tools"
    | "/tools/filter"
    | "/tools/gltf"
    | "/tricks"
    | "/tricks/color-mask"
    | "/tricks/color-mask/2"
    | "/tricks/color-mask/3"

export function isRoutePath(path: string): path is RoutePath {
    return ["/","/api","/articles","/articles/animation","/articles/animation/basic","/articles/animation/chain","/articles/animation/transfo","/articles/context","/articles/context/painters","/articles/context/play-pause","/articles/custom-shader","/articles/custom-shader/holes","/articles/gltf","/articles/material","/articles/material/depth","/articles/material/face-orientation","/articles/material/flat","/articles/material/ghost","/articles/material/hull","/articles/math","/articles/math/fractal","/articles/math/fractal/pascal-triangle","/articles/mesh","/articles/mesh/marching-cubes","/articles/mesh/volume-to-mesh","/articles/painter","/articles/painter/background","/articles/painter/background-with-depth","/articles/painter/background/2","/articles/painter/clear","/articles/painter/custom","/articles/painter/filter","/articles/painter/filter/blur","/articles/painter/filter/chromatic-aberration","/articles/painter/filter/custom","/articles/painter/filter/hue","/articles/painter/framebuffer","/articles/painter/framebuffer/example0","/articles/painter/framebuffer/example0/01","/articles/painter/framebuffer/example0/02","/articles/painter/framebuffer/example0/03","/articles/painter/framebuffer/example0/04","/articles/painter/framebuffer/example0/05","/articles/painter/framebuffer/example1","/articles/painter/framebuffer/example2","/articles/painter/framebuffer/example3","/articles/painter/logic","/articles/painter/node","/articles/painter/segments","/articles/painter/segments/02","/articles/painter/x-ray","/articles/state","/articles/state/cull","/articles/state/stencil","/articles/suzanne","/articles/test","/articles/texture","/articles/texture/2d","/articles/texture/2d/bitmap","/articles/texture/2d/data","/articles/texture/cube","/tools","/tools/filter","/tools/gltf","/tricks","/tricks/color-mask","/tricks/color-mask/2","/tricks/color-mask/3"].includes(path)
}

export interface RouteMatch {
    path: string
    route: RoutePath
    params: Record<string, string>
    /**
     * 0 means a perfect match.
     */
    distance: number
}
