export abstract class TgdFactory<InputType, OutputType> {
    abstract create(input: InputType): OutputType

    abstract delete(object: OutputType): void

    key(input: InputType): string {
        return JSON.stringify(input)
    }
}
