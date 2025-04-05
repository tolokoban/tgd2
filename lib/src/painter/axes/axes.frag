#version 300 es

precision highp float;

in vec4 varColor;

out vec4 FragColor;

void main() {
    FragColor = varColor;
}