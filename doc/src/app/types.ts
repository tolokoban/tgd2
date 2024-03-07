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
    | "/articles"
    | "/articles/painter"
    | "/articles/painter/background"
    | "/articles/painter/clear"
    | "/articles/painter/logic"
    | "/articles/test"
    | "/articles/texture"
    | "/articles/texture/cube"
    | "/tools"
    | "/tools/gltf"

export interface RouteMatch {
    path: string
    route: RoutePath
    params: Record<string, string>
    /**
     * 0 means a perfect match.
     */
    distance: number
}
