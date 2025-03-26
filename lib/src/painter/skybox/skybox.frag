#version 300 es

precision highp float;

uniform mat4 uniMatrix;
uniform samplerCube uniTexture;

in vec4 varPoint;

out vec4 FragColor;

void main() {
    vec4 t = uniMatrix * varPoint;
    FragColor = texture(uniTexture, normalize(t.xyz));
}