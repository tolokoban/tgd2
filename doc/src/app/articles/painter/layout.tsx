import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <hr />
            <a href="#/articles/painters">Back to the list</a>
        </>
    )
}
