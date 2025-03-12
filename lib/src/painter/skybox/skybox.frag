#version 300 es

precision highp float;

uniform samplerCube uniTexture;

in vec4 varPoint;

out vec4 FragColor;

void main() {
    vec4 t = varPoint;
    FragColor = texture(uniTexture, normalize(t.xyz / t.w));
}