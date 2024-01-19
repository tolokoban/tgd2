import Style from "./Article.module.css"

export interface ArticleProps {
    className?: string
    children: React.ReactNode
}

export default function Article({ className, children }: ArticleProps) {
    return <div className={join(className, Style.Article)}>{children}</div>
}

function join(...classes: unknown[]): string {
    return classes.filter(cls => typeof cls === "string").join(" ")
}
