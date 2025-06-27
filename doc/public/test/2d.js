function explode(value) {
    let z = Math.floor(0xFFFFFF * value)
    const R = (z & 0xFF) / 255.0
    z >>= 8
    const G = (z & 0xFF) / 255.0
    z >>= 8
    const B = (z & 0xFF) / 255.0
    return [R, G, B]
}

function implode([R, G, B]) {
    const byte = 0xFF
    return (byte * (byte * B + G) + R) / 0xFFFF
}

function test(value) {
    const color = explode(value)
    const depth = implode(color)
    console.log(value, color, depth)
}

test(0)
test(0.33)
test(0.5)
test(0.66)
test(1)
