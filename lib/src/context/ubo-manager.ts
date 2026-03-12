import { TgdUniformBufferObject } from "@tgd/uniform"

export class UniformBufferObjectsManager {
    private readonly uniformBuffers: TgdUniformBufferObject[] = []

    /**
     * @returns A free binding point.
     */
    add(uniformBuffer: TgdUniformBufferObject): number {
        const { uniformBuffers } = this
        let bindingPoint = 0
        while (uniformBuffers[bindingPoint]) bindingPoint++
        uniformBuffers[bindingPoint] = uniformBuffer
        return bindingPoint
    }

    remove(uniformBuffer: TgdUniformBufferObject) {
        const { uniformBuffers } = this
        if (uniformBuffers[uniformBuffer.bindingPoint] !== uniformBuffer) return

        delete uniformBuffers[uniformBuffer.bindingPoint]
    }
}
