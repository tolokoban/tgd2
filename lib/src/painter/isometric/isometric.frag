#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

const float EPSILON = 1.0 / 256.0;

void main() {
    vec4 color = texture(uniTexture, varUV);
    if (color.a < EPSILON) discard;

    FragColor = color;
}