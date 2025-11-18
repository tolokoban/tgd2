import { TgdEvent } from "@tgd/event"

export interface TgdInputPointerEventFinger {
    x: number
    y: number
    t: number
    fingersCount: number
}

export interface TgdInputPointerModifierKeys {
    altKey: boolean
    ctrlKey: boolean
    metaKey: boolean
    shiftKey: boolean
}

export interface TgdInputPointerEventZoom extends TgdInputPointerModifierKeys {
    current: TgdInputPointerEventFinger
    direction: -1 | 1
    preventDefault: () => void
}

export interface TgdInputPointerEventTap extends TgdInputPointerModifierKeys {
    x: number
    y: number
    t: number
    fingersCount: number
}

export interface TgdInputPointerEventTapMultiple
    extends TgdInputPointerEventTap {
    tapsCount: number
    /**
     * You can call this function if you don't want the TapMultipleEvent to also generate a TapEvent.
     */
    preventTap: () => void
}

export interface TgdInputPointerEventMove extends TgdInputPointerModifierKeys {
    current: TgdInputPointerEventFinger
    previous: TgdInputPointerEventFinger
    start: TgdInputPointerEventFinger
}
