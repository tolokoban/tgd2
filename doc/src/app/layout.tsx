import { Theme, ViewStrip, ViewPanel, ModalProvider } from "@tolokoban/ui"

import { version } from "../../../package.json"
import { isRouteEqualTo, makeGoto } from "./routes"
import { RoutePath } from "./types"

import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <ViewStrip
                className={Style.layout}
                fullsize
                color="primary-1"
                orientation="row"
                template="*1"
            >
                <aside>
                    <button
                        className={classFor("/")}
                        type="button"
                        onClick={makeGoto("/")}
                    >
                        Welcome
                    </button>
                    <button
                        className={classFor("/articles")}
                        type="button"
                        onClick={makeGoto("/articles")}
                    >
                        Examples
                    </button>
                    <button
                        className={classFor("/tools")}
                        type="button"
                        onClick={makeGoto("/tools")}
                    >
                        Tools
                    </button>
                    <button
                        className={classFor("/api")}
                        type="button"
                        onClick={makeGoto("/api")}
                    >
                        Reference
                    </button>
                    <div>
                        @tolokoban/tgd v<b>{version}</b>
                    </div>
                </aside>
                <main>
                    <ViewPanel color="neutral-1" padding="S" overflow="auto">
                        {children}
                    </ViewPanel>
                </main>
            </ViewStrip>
        </ModalProvider>
    )
}

function classFor(route: RoutePath) {
    return Theme.classNames.join(isRouteEqualTo(route) && Style.active)
}
