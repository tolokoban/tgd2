export class OctreeCache<T> {
    private readonly cache = new Map<string, T>()

    set(x: number, y: number, z: number, level: number, item: T) {
        this.cache.set(this.makeKey(x, y, z, level), item)
    }

    get(x: number, y: number, z: number, level: number): T | undefined {
        return this.cache.get(this.makeKey(x, y, z, level))
    }

    remove(x: number, y: number, z: number, level: number) {
        this.cache.delete(this.makeKey(x, y, z, level))
    }

    clear() {
        this.cache.clear()
    }

    private makeKey(x: number, y: number, z: number, level: number) {
        return `${level}/${x}/${y}/${z}`
    }
}

// At some point w will nee to benchmark another solution to
// find the fastest octree cache.

// private readonly cache: T[][][][] = []

// set(x: number, y: number, z: number, level: number, item: T) {
//     const { cache } = this
//     const arrLevel = cache[level]
//     if (arrLevel === undefined) {
//         const arrX: T[][][] = []
//         const arrY: T[][] = []
//         const arrZ: T[] = []
//         arrZ[z] = item
//         arrY[y] = arrZ
//         arrX[x] = arrY
//         cache[level] = arrX
//     } else {
//         const arrX: T[][][] | undefined = arrLevel[x]
//         if (arrX === undefined) {
//             const arrY: T[][] = []
//             const arrZ: T[] = []
//             arrZ[z] = item
//             arrY[y] = arrZ
//             arrLevel[x] = arrY
//         } else {
//             const arrY: T[][]|undefined = arrX[y]
//         }
//     }
// }

// get(x: number, y: number, z: number, level: number): T | undefined {
//     const arrLevel = this.cache[level]
//     if (arrLevel === undefined) return undefined

//     const arrX = arrLevel[x]
//     if (arrX === undefined) return undefined

//     const arrY = arrX[y]
//     if (arrY === undefined) return undefined

//     return arrY[z]
// }

// clear() {
//     this.cache.splice(0)
// }
