import Style from "./layout.module.css"

const PAINTERS = [
    "Background",
    "Clear",
    "Isometric",
    "Logic",
    "Primitive",
].sort()

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.Layout}>
            <div>
                <ul>
                    {PAINTERS.map(name => (
                        <li key={name}>
                            <a href={`#/painter/${name.toLowerCase()}`}>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{children}</div>
        </div>
    )
}
