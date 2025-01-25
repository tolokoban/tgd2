#version 300 es

in vec2 attPoint;

void main() {
    gl_Position = vec4(attPoint, 0.0, 1.0);
}