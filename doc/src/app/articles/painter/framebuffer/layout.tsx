import { isRouteEqualTo } from "@/app/routes"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            {!isRouteEqualTo("/articles/painter/framebuffer") && (
                <>
                    <hr />
                    <a href="#/articles/painters/framebuffer">Back to TgdPainterFrambuffer</a>
                </>
            )}
        </>
    )
}
