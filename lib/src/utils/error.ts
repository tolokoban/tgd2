export function resolveErrorMessage(error: unknown, indentation = 0): string {
    if (!error) return ""
    if (typeof error === "string") return error
    if (error instanceof Error) return error.message
    if (typeof error === "object" && "message" in error && typeof error.message === "string") {
        return error.message
    }
    return indentation > 0 ? JSON.stringify(error, null, indentation) : JSON.stringify(error)
}
