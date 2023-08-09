import React from "react"
import Article from "@/components/Article"

export default function Template({ children }: { children: React.ReactNode }) {
    return <Article>{children} </Article>
}
