import React from "react"
import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className={Style.Layout}>{children}</div>
}
