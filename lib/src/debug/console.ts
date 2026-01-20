interface TgdConsoleInternalItem {
    text: string
    style: string
}

export type TgdConsoleItem = Partial<TgdConsoleStyle> & { text: string }

export interface TgdConsoleStyle {
    color: string
    background: string
    bold: boolean
}

export class TgdConsole {
    /**
     * Return a function that will log only if a value has changed.
     */
    static memo(defaultLogger?: (out: TgdConsole) => void) {
        let previousValue: unknown = null
        const out = new TgdConsole()
        return (value: unknown, logger?: (out: TgdConsole) => void) => {
            if (value === previousValue) return

            previousValue = value
            const simpleLogger = (o: TgdConsole) => {
                o.add(JSON.stringify(value)).debug()
            }
            out.clear()
            ;(logger ?? defaultLogger ?? simpleLogger)(out)
        }
    }

    static log(...items: (TgdConsoleItem | string)[]) {
        new TgdConsole(...items).log()
    }

    static info(...items: (TgdConsoleItem | string)[]) {
        new TgdConsole(...items).info()
    }

    static debug(...items: (TgdConsoleItem | string)[]) {
        new TgdConsole(...items).debug()
    }

    static warn(...items: (TgdConsoleItem | string)[]) {
        new TgdConsole(...items).warn()
    }

    static error(...items: (TgdConsoleItem | string)[]) {
        new TgdConsole(...items).error()
    }

    private readonly items: TgdConsoleInternalItem[] = []

    constructor(...items: (TgdConsoleItem | string)[]) {
        this.clear()
        for (const item of items) {
            if (typeof item === "string") this.add(item)
            else this.add(item.text, item)
        }
    }

    clear() {
        this.items.splice(0, this.items.length, {
            text: "%c",
            style: "background:#000;color:#fff;font-family:monospace;font-size:90%;white-space:pre;",
        })
    }

    add(
        text = "\n",
        {
            color = "currentColor",
            background = "transparent",
            bold = false,
        }: Partial<TgdConsoleStyle> = {}
    ): this {
        this.items.push({
            text: `%c${text}`,
            style: `color:${color};background:${background};font-weight:${bold ? "bold" : "normal"};`,
        })
        return this
    }

    nl() {
        return this.add()
    }

    log() {
        console.log(...this.args)
    }

    info() {
        console.info(...this.args)
    }

    debug() {
        console.debug(...this.args)
    }

    warn() {
        console.warn(
            ...this.args.map(
                setDefaultStyle({ color: "#fff", background: "#990" })
            )
        )
    }

    error() {
        console.error(
            ...this.args.map(
                setDefaultStyle({ color: "#fff", background: "#a00" })
            )
        )
    }

    private get args(): string[] {
        return [
            this.items.map(({ text }) => text).join(""),
            ...this.items.map(({ style }) => style),
        ]
    }
}

function setDefaultStyle(defaultStyle: Partial<TgdConsoleStyle>) {
    return (item: TgdConsoleItem | string) => {
        if (typeof item === "string")
            return {
                text: item,
                style: defaultStyle,
            }

        return {
            text: item.text,
            style: {
                ...defaultStyle,
                ...item,
            },
        }
    }
}
