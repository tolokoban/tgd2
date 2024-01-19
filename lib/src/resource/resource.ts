import { TgdFactory } from "@/factory/factory"

/**
 * This class deals with WebGL resources.
 *
 * It prevents you from creatng multiple times the
 * same resource by holding an internal ref counter.
 */
export class TgdResource<InputType, OutputType> {
    private readonly keys = new Map<OutputType, string>()
    private readonly objects = new Map<string, OutputType>()
    private readonly factories = new Map<
        string,
        TgdFactory<InputType, OutputType>
    >()
    private readonly references = new Map<string, number>()

    /**
     * @param factory The object that can actually create/delete
     * a resource.
     * @example
     * ```ts
     * const factory = new TgdFactoryProgram(gl)
     * const programs = new TgdResource(factory)
     * const prg: TgdProgram = programs.create({
     *   vert: VERT,
     *   frag: FRAG
     * })
     * ```
     */
    constructor(public readonly factory: TgdFactory<InputType, OutputType>) {}

    create(input: InputType): OutputType {
        const { factory } = this
        const key = factory.key(input)
        const refCount = this.references.get(key) ?? 0
        if (refCount < 1) {
            const object = factory.create(input)
            this.keys.set(object, key)
            this.objects.set(key, object)
            this.factories.set(key, factory)
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

        const factory = this.factories.get(key)
        if (!factory) throw Error("[TgdResource.delete] Panic!")

        this.keys.delete(object)
        this.objects.delete(key)
        this.factories.delete(key)
        this.references.delete(key)
        factory.delete(object)
    }
}
