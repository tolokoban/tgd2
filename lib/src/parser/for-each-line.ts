/**
 * Generator to iterate on each lines of a big string content.
 */
export const forEachLine = function* (content: string) {
    const length = content.length
    let index = 0
    let cursor = 0
    while (index > -1 && index < length) {
        index = content.indexOf("\n", cursor)
        if (index < 0) break

        yield content.slice(cursor, index).trim()
        cursor = index + 1
    }
    return content.slice(cursor).trim()
}
