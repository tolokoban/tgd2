#version 300 es

uniform float uniScale;
in vec2 attPoint;
in vec2 attUV;

out vec2 varUV;
out vec2 varUVDepth;

void main() {
    vec2 s = vec2(uniScale, 1.0);
    vec2 o = vec2(0.5, 0);
    varUV = o + (attUV - o) * s;
    varUVDepth = attUV;
    gl_Position = vec4(attPoint, 1.0, 1.0);
}