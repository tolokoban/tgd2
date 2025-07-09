#version 300 es

precision mediump float;

uniform sampler2D uniTexture;

in vec2 varUV;
in float varAlpha;

out vec4 FragColor;

void main() {
    FragColor = texture(uniTexture, varUV);
    FragColor.a *= varAlpha;
}