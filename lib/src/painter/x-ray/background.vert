#version 300 es

in vec2 attPoint;
in vec2 attUV;
out vec2 varUV;

void main() {
    varUV = attUV;
    float x = attPoint.x;
    float y = attPoint.y;
    gl_Position = vec4(x, y, 0.0, 1.0);
}