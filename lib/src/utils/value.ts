/**
 * In some asynchronous scenarios, we don't know if a value has been initialized when we need it.
 * This class allows you to wait for the value to be defined.
 */
export class TgdValueWaitable<T> {
	private _value: T | undefined = undefined
	private resolvers: ((value: T) => void)[] = []

	public get value() {
		return this._value
	}

	public set value(v: T | undefined) {
		this._value = v
		if (v !== undefined) {
			this.resolvers.forEach((resolve) => resolve(v))
			this.resolvers = []
		}
	}

	public waitUntiDefined(): Promise<T> {
		return new Promise<T>((resolve) => {
			const { value } = this
			if (value !== undefined) {
				resolve(value)
				return
			}
			this.resolvers.push(resolve)
		})
	}
}
