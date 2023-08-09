import Style from "./layout.module.css"

const PAINTERS = ["Background", "Logic"].sort()

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.Layout}>
            <div>
                <ul>
                    {PAINTERS.map(name => (
                        <li>
                            <a
                                key={name}
                                href={`#/painter/${name.toLowerCase()}`}
                            >
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
