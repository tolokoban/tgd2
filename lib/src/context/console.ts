export class Console {
	constructor(private readonly context: { verbose: boolean }) {}

	readonly log = (...args: unknown[]) => {
		if (!this.context.verbose) return

		console.log(...args)
	}

	readonly info = (...args: unknown[]) => {
		if (!this.context.verbose) return

		console.info(...args)
	}

	readonly debug = (...args: unknown[]) => {
		if (!this.context.verbose) return

		console.debug(...args)
	}

	readonly error = (...args: unknown[]) => {
		if (!this.context.verbose) return

		console.error(...args)
	}

	readonly warn = (...args: unknown[]) => {
		if (!this.context.verbose) return

		console.warn(...args)
	}
}
