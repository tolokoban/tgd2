#version 300 es

precision highp float;

in vec3 varNormal;
out vec4 FragColor;


vec4 applyMaterial();

void main() {
    FragColor = applyMaterial();
}