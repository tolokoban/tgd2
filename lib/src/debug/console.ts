interface TgdConsoleInternalItem {
    text: string
    style: string
}

interface TgdConsoleItem {
    text: string
    style?: Partial<TgdConsoleStyle>
}

interface TgdConsoleStyle {
    color: string
    bold: boolean
}

export class TgdConsole {
    private readonly items: TgdConsoleInternalItem[] = []

    constructor(...items: TgdConsoleItem[]) {
        this.clear()
        for (const item of items) this.add(item.text, item.style)
    }

    clear() {
        this.items.splice(0, this.items.length, {
            text: "%c",
            style: "background:#000;color:#fff;font-family:monospace;font-size:90%;white-space:pre;",
        })
    }

    add(
        text: string = "\n",
        { color = "#fff", bold = false }: Partial<TgdConsoleStyle> = {}
    ): this {
        this.items.push({
            text: `%c${text}`,
            style: `color:${color};font-weight:${bold ? "bold" : "normal"};`,
        })
        return this
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
        console.warn(...this.args)
    }

    error() {
        console.error(...this.args)
    }

    private get args(): string[] {
        return [
            this.items.map(({ text }) => text).join(""),
            ...this.items.map(({ style }) => style),
        ]
    }
}
