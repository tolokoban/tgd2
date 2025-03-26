#version 300 es

uniform float uniZoom;
uniform float uniZ;

in vec4 attPoint;

out vec4 varPoint;

void main() {
    varPoint =  attPoint;
    gl_Position = vec4(attPoint.xy, uniZ, 1.0);
}