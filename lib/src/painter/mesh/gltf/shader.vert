#version 300 es

precision mediump float;

uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;
/**
 * Positon and normal.
 */
in vec4 POSITION;
in vec3 NORMAL;

out vec3 varNormal;

void main() {
    varNormal = NORMAL;
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * POSITION;
}
