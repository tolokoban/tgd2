#version 300 es

precision highp float;

uniform float uniContrast;
uniform float uniSpecularIntensity;
uniform float uniSpecularExponent;

in vec4 varColor;
in vec3 varNormal;

out vec4 FragColor;


void main() {
    vec4 color = vec4(gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0), varColor.a);
    float z = normalize(varNormal).z;
    float diffuse = abs(z);
    // float light = z * uniContrast + (1.0 - uniContrast);
    // float spec = pow(z, uniSpecularExponent) * uniSpecularIntensity;
    float spec = 0.0;
    FragColor =vec4(color.rgb * diffuse + vec3(spec), color.w);
}
