#version 300 es

precision mediump float;

uniform vec3 uniAxisZ;

out vec4 FragColor;

in vec3 varColor;
in vec3 varNormal;

const vec3 SUN = normalize(vec3(1, 2, 3));

void main() {
    vec3 normal = normalize(varNormal);
    vec3 ray = reflect(SUN, normal);
    float d = clamp(dot(ray, uniAxisZ), 0.0, 1.0);
    float s = pow(d, 2.0);
    d += 0.5;
    FragColor = vec4(varColor * d + vec3(s), 1);
}