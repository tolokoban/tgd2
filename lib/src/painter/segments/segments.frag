#version 300 es

precision mediump float;

in vec3 varColor;
out vec4 FragColor;


void main() {
    FragColor = varColor;
}
