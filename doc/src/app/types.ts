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
    | "/articles/custom-shader"
    | "/articles/custom-shader/holes"
    | "/articles/math"
    | "/articles/math/fractal"
    | "/articles/math/fractal/pascal-triangle"
    | "/articles/painter"
    | "/articles/painter/background"
    | "/articles/painter/background/2"
    | "/articles/painter/clear"
    | "/articles/painter/custom"
    | "/articles/painter/filter"
    | "/articles/painter/filter/blur"
    | "/articles/painter/filter/chromatic-aberration"
    | "/articles/painter/filter/custom"
    | "/articles/painter/filter/hue"
    | "/articles/painter/framebuffer"
    | "/articles/painter/framebuffer/example1"
    | "/articles/painter/framebuffer/example2"
    | "/articles/painter/logic"
    | "/articles/state"
    | "/articles/state/cull"
    | "/articles/state/stencil"
    | "/articles/suzanne"
    | "/articles/test"
    | "/articles/texture"
    | "/articles/texture/cube"
    | "/tools"
    | "/tools/filter"
    | "/tools/gltf"

export function isRoutePath(path: string): path is RoutePath {
    return ["/","/api","/articles","/articles/custom-shader","/articles/custom-shader/holes","/articles/math","/articles/math/fractal","/articles/math/fractal/pascal-triangle","/articles/painter","/articles/painter/background","/articles/painter/background/2","/articles/painter/clear","/articles/painter/custom","/articles/painter/filter","/articles/painter/filter/blur","/articles/painter/filter/chromatic-aberration","/articles/painter/filter/custom","/articles/painter/filter/hue","/articles/painter/framebuffer","/articles/painter/framebuffer/example1","/articles/painter/framebuffer/example2","/articles/painter/logic","/articles/state","/articles/state/cull","/articles/state/stencil","/articles/suzanne","/articles/test","/articles/texture","/articles/texture/cube","/tools","/tools/filter","/tools/gltf"].includes(path)
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
