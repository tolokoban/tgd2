import { TgdContext } from "@tolokoban/tgd"

export interface TestCase {
    label: string
    exec(context: TgdContext): Promise<() => void>
}
