#version 300 es

uniform mat4 uniMatrix;
uniform mat4 uniTransform;
uniform float uniZoom;

in vec4 attPoint;

out vec4 varPoint;

void main() {
    varPoint = uniTransform * uniMatrix * attPoint;
    gl_Position = vec4(attPoint.xy * uniZoom, 0.99999999, 1.0);
}