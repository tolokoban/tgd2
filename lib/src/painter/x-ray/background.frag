#version 300 es

precision highp float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

void main() {
    FragColor = vec4(texture(uniTexture, varUV).rgb, 1.0);
}