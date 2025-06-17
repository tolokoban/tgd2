export class TgdSound {
    private readonly sounds = new Map<string, HTMLAudioElement>()

    add(name: string, url: string) {
        this.remove(name)
        const audio = new Audio()
        audio.src = url
        // eslint-disable-next-line unicorn/prefer-add-event-listener
        audio.onerror = () => {
            console.error(
                `[TgdSound] Unable to load sound "${name}" from URL "${url}"!`
            )
            this.remove(name)
        }
        this.sounds.set(name, audio)
    }

    remove(...names: string[]) {
        for (const name of names) {
            const sound = this.sounds.get(name)
            if (!sound) continue

            sound.pause()
            this.sounds.delete(name)
        }
    }

    play(name: string) {
        const sound = this.sounds.get(name)
        if (!sound) {
            console.error(
                `[TgdSound] Sound "${name}" does not exist!\nAvailable sounds: ${Array.of(
                    this.sounds.keys()
                )
                    .sort()
                    .join(", ")}`
            )
            return
        }

        sound.currentTime = 0
        sound.play()
    }

    clear() {
        const names = this.sounds.keys().toArray()
        for (const name of names) {
            this.remove(name)
        }
    }
}
