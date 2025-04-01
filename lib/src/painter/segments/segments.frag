#version 300 es

precision mediump float;

uniform float uniContrast;
uniform float uniSpecularIntensity;
uniform float uniSpecularExponent;

in vec4 varColor;
in vec3 varNormal;

out vec4 FragColor;


void main() {
    if (varColor.a < 1.0) discard;

    float z = normalize(varNormal).z;
    float light = z * uniContrast + (1.0 - uniContrast);
    float spec = pow(z, uniSpecularExponent) * uniSpecularIntensity;
    FragColor =vec4(varColor.rgb * light + vec3(spec), varColor.w); // varColor;
}
