#version 300 es

precision mediump float;

out vec4 FragColor;

in vec3 varColor;

void main() {
    FragColor = vec4(varColor, 1);
}