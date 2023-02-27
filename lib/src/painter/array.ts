import Scene from "../scene"
import { PainterInterface } from "./painter-interface"

export default class PainterArray implements PainterInterface {
    public enabled = true
    private readonly containers: Container[] = []
    private scene: Scene | null = null

    add(...painters: PainterInterface[]) {
        for (const painter of painters) {
            this.containers.push({
                painter,
                status: ContainerStatusEnum.Created,
            })
        }
    }

    async initialize(scene: Scene): Promise<boolean> {
        for (const container of this.containers) {
            if (container.status !== ContainerStatusEnum.Created) continue

            container.status = ContainerStatusEnum.Initializing
            const working = await container.painter.initialize(scene)
            container.status = working
                ? ContainerStatusEnum.Initialized
                : ContainerStatusEnum.Broken
        }
        return true
    }

    destroy(scene: Scene): void {
        for (const container of this.containers) {
            container.painter.destroy(scene)
            container.status = ContainerStatusEnum.Destroyed
        }
    }

    paint(time: number, delay: number, scene: Scene): void {
        if (!this.enabled) return

        for (const container of this.containers) {
            if (container.status !== ContainerStatusEnum.Initialized) continue

            container.painter.paint(time, delay, scene)
        }
    }

    update(time: number, delay: number, scene: Scene): void {
        if (!this.enabled) return

        let needInitialization = false
        for (const container of this.containers) {
            if (container.status !== ContainerStatusEnum.Initialized) continue

            container.painter.update(time, delay, scene)
        }
        if (needInitialization) {
            // trigger a late initialialization.
            const { scene } = this
            if (scene) void this.initialize(scene)
        }
    }
}

enum ContainerStatusEnum {
    Created = 0,
    Initializing = 1,
    Initialized = 2,
    Broken = 3,
    Destroyed = 4,
}

interface Container {
    readonly painter: PainterInterface
    status: ContainerStatusEnum
}
