// prettier-ignore
export const cubeEdges =  new Uint8Array([
    0, 1, 0, 2, 0, 4,
    1, 3, 1, 5,
    2, 3, 2, 6,
    3, 7,
    4, 5, 4, 6,
    5, 7,
    6, 7
])

const P = +1
const N = -1

// prettier-ignore
export const cubeVertices = new Float32Array([
    N, N, N, // 0
    N, N, P, // 1
    N, P, N, // 2
    N, P, P, // 3
    P, N, N, // 4
    P, N, P, // 5
    P, P, N, // 6
    P, P, P, // 7
])

const midPoints: number[] = []
for (let i = 0; i < cubeEdges.length; i += 2) {
    const a = 3 * cubeEdges[i]
    const b = 3 * cubeEdges[i + 1]
    const x = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 0])
    const y = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 1])
    const z = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 2])
    midPoints.push(x, y, z)
}

export const cubeMidPoints = new Float32Array(midPoints)
