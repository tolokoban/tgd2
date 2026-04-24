export const FRAG = `#version 300 es

precision highp float;

uniform mat4 uniTransfo;
uniform mat4 uniMatrix;
uniform samplerCube uniTexture;
uniform vec4 uniTint;

in vec4 varPoint;

out vec4 FragColor;

void main() {
    vec4 t = uniTransfo * uniMatrix * varPoint;
    FragColor = texture(uniTexture, normalize(t.xyz)) * uniTint;
}`
