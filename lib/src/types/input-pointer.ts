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
    /**
     * A number representing one or more buttons. For more than one button pressed simultaneously,
     * the values are combined (e.g., 3 is primary + secondary).
     *
     * - 0: No button or un-initialized
     * - 1: Primary button (usually the left button)
     * - 2: Secondary button (usually the right button)
     * - 4: Auxiliary button (usually the mouse wheel button or middle button)
     * - 8: 4th button (typically the "Browser Back" button)
     * - 16 : 5th button (typically the "Browser Forward" button)
     */
    buttons: number
    buttonLeft: boolean
    buttonRight: boolean
    buttonMiddle: boolean
    buttonBack: boolean
    buttonForward: boolean
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
    start: {
        x: number
        y: number
        t: number
    }
    fingersCount: number
}

export interface TgdInputPointerEventTapMultiple extends TgdInputPointerEventTap {
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
