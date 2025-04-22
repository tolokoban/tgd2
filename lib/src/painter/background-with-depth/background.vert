#version 300 es

uniform float uniScale;
in vec2 attPoint;
in vec2 attUV;
out vec2 varUV;

void main() {
    vec2 s = vec2(uniScale, 1.0);
    vec2 o = vec2(0.5, 0);
    varUV = o + (attUV - o) * s;
    gl_Position = vec4(attPoint, 1.0, 1.0);
}