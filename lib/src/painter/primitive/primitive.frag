#version 300 es

precision mediump float;

uniform vec4 uniColor;
out vec4 FragColor;

void main() {
    FragColor = uniColor;
}
