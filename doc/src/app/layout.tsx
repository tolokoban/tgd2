import React from "react"
import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.Layout}>
            <div>{children}</div>
            <header>
                <button onClick={() => (document.location.hash = "#/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>home</title>
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </button>
                <button onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>arrow-left-circle</title>
                        <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
                    </svg>{" "}
                </button>
                <div>ToloGameDev Library</div>
            </header>
            <footer></footer>
        </div>
    )
}
