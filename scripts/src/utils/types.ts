export interface Route {
    name: string
    path: string
    page?: "tsx" | "mdx"
    layout: boolean
    children: Route[]
}
