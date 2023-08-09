import React from "react"
import Article from "@/components/Article"

export default function Layout({ children }: { children: React.ReactNode }) {
    React.useEffect(() => {
        console.log("MOUNT Layout")
        return () => {
            console.log("UNMOUNT Layout")
        }
    }, [])
    const [value, setValue] = React.useState("Hello")
    console.log("🚀 [layout] value = ", value) // @FIXME: Remove this line written on 2023-08-09 at 15:24
    return (
        <Article>
            <input value={value} onChange={evt => setValue(evt.target.value)} />
            <div>{children}</div>
        </Article>
    )
}
