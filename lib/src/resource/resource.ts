/**
 * This class deals with WebGL resources.
 *
 * It prevents you from creatng multiple times the
 * same resource by holding an internal ref counter.
 */
export abstract class TgdResource<InputType, OutputType, KeyType = InputType> {
    private readonly keys = new Map<OutputType, KeyType>()
    private readonly objects = new Map<KeyType, OutputType>()
    private readonly references = new Map<KeyType, number>()

    create(input: InputType): OutputType {
        const key = this.makeKeyFromInput(input)
        const refCount = this.references.get(key) ?? 0
        if (refCount < 1) {
            const object = this.actualCreate(input)
            this.keys.set(object, key)
            this.objects.set(key, object)
            this.references.set(key, 1)
            return object
        }
        const object = this.objects.get(key)
        if (!object) throw Error("[TgdResource.create] Panic!")

        this.references.set(key, refCount + 1)
        return object
    }

    delete(object: OutputType) {
        const key = this.keys.get(object)
        if (!key) return

        const refCount = this.references.get(key) ?? 0
        if (refCount < 1) return

        if (refCount > 1) {
            this.references.set(key, refCount - 1)
            return
        }

        this.keys.delete(object)
        this.objects.delete(key)
        this.references.delete(key)
        this.actualDelete(object)
    }

    protected abstract actualCreate(input: InputType): OutputType

    protected abstract actualDelete(object: OutputType): void

    protected abstract makeKeyFromInput(input: InputType): KeyType
}
