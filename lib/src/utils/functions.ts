export function resolveFunction<T>(data: T | (() => T)): T {
    return typeof data === "function" ? (data as () => T)() : data
}
