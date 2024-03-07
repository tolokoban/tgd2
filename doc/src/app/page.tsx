import Content from "./content.mdx"

import Style from "./page.module.css"

export default function Page() {
    return (
        <div className={Style.page}>
            <main>
                <Content />
            </main>
        </div>
    )
}
