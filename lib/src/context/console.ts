export class Console {
    constructor(private readonly context: { verbose: boolean }) { }

    log(...args: unknown[]) {
        if (!this.context.verbose) return

        console.log(...args)
    }

    info(...args: unknown[]) {
        if (!this.context.verbose) return

        console.info(...args)
    }

    debug(...args: unknown[]) {
        if (!this.context.verbose) return

        console.debug(...args)
    }

    error(...args: unknown[]) {
        if (!this.context.verbose) return

        console.error(...args)
    }

    warn(...args: unknown[]) {
        if (!this.context.verbose) return

        console.warn(...args)
    }
}