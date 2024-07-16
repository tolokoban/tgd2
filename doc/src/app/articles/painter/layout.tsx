import Style from "./layout.module.css"

const PAINTERS = ["Background", "Clear", "Logic", "Filter"].sort()

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="margin-left">
                <ul>
                    {PAINTERS.map(name => (
                        <li key={name}>
                            <a
                                href={`#/articles/painter/${name.toLowerCase()}`}
                            >
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {children}
        </>
    )
}
