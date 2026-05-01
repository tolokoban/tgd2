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
    | "/cases"
    | "/cases/painter"
    | "/cases/painter/clear"
    | "/cases/painter/clear/red"
    | "/cases/painter/mesh"
    | "/cases/painter/mesh/box"
    | "/cases/painter/node"

export function isRoutePath(path: string): path is RoutePath {
    return ["/","/cases","/cases/painter","/cases/painter/clear","/cases/painter/clear/red","/cases/painter/mesh","/cases/painter/mesh/box","/cases/painter/node"].includes(path)
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
