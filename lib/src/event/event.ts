export class TgdEvent<T = void> {
    private readonly listeners = new Set<Listener<T>>()

    addListener(listener: Listener<T>) {
        this.listeners.add(listener)
    }

    removeListener(listener: Listener<T>) {
        this.listeners.delete(listener)
    }

    dispatch(value: T) {
        for (const listener of this.listeners) {
            const stop = listener(value)
            if (stop) return stop
        }
    }

    removeAllListeners() {
        this.listeners.clear()
    }
}

export class TgdEventPriority<T = void> {
    private readonly listeners: [listener: Listener<T>, priority: number][] = []

    addListener(listener: Listener<T>, priority = 0) {
        this.removeListener(listener)
        this.listeners.push([listener, priority])
        this.listeners.sort((a, b) => b[1] - a[1])
    }

    removeListener(listener: Listener<T>) {
        const index = this.listeners.findIndex((item) => item[0] === listener)
        if (index === -1) return

        this.listeners.splice(index, 1)
    }

    dispatch(value: T) {
        for (const [listener] of this.listeners) {
            const stop = listener(value)
            if (stop) return stop
        }
    }

    removeAllListeners() {
        this.listeners.splice(0)
    }
}

type Listener<T> = (value: T) => void | true
