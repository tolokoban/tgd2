#version 300 es

#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;

// Position of the vertex, relative to
// the current center and assuming a
// radius of 1.
in vec2 attOffset;
// The color is taken from a texture.
in vec2 attUV;


out vec4 varColor;

void main() {
    varPoint = attPoint;

    vec4 point = vec4(attOffset, 0.0, 1.0);
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * point;
}