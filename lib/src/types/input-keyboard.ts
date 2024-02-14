export interface TgdInputKeyboard {
    isDown(...keys: string[]): boolean
    hasClicked(key: string): boolean
}
