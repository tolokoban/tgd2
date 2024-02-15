#version 300 es

precision mediump float;

uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;

in vec3 attPos;
in vec4 attColor;

out vec4 varColor;

void main() {
    varColor = attColor;
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(attPos * 100.0, 1.0);
}
