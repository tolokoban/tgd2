export function getElement(selector: string): Element {
    const elem = document.querySelector(selector)
    if (!elem)
        throw Error(`Unable to find an element with selector "${selector}"!`)

    return elem
}

export function onClick(elemOrSelector: Element | string, action: () => void) {
    const elem =
        typeof elemOrSelector === "string"
            ? getElement(elemOrSelector)
            : elemOrSelector

    elem.addEventListener("click", action)
}

/**
 * Attach an action to the pression of a key.
 * @param key Identifier of the key.
 * @param action The action to execute when this key is pressed.
 * @returns A function to unregister this event.
 */
export function onKey(key: string, action: () => void) {
    const handler = (evt: KeyboardEvent) => {
        if (evt.key === key) {
            evt.preventDefault()
            action()
        }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
}

export function dom<Type extends keyof HTMLElementTagNameMap>(
    tagName: Type,
    ...params: Array<string | Element[] | Record<string, string>>
) {
    const elem: HTMLElementTagNameMap[Type] = document.createElement(tagName)
    for (const param of params) {
        if (typeof param === "string") {
            elem.appendChild(document.createTextNode(param))
        } else if (Array.isArray(param)) {
            for (const child of param) {
                elem.appendChild(child)
            }
        } else {
            for (const attName of Object.keys(param)) {
                const attValue = param[attName]
                elem.setAttribute(attName, attValue)
            }
        }
    }
    return elem
}

export function div(
    ...params: Array<string | Element[] | Record<string, string>>
): HTMLDivElement {
    return dom("div", ...params)
}
