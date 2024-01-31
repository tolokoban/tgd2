#version 300 es

uniform mat4 uniCameraViewModel;
uniform mat4 uniCameraProjection;

in vec4 attPosition;
in vec3 attNormal;
out vec3 varColor;

void main() {
    float l = 1.0 + (dot(attNormal, normalize(vec3(1, 2, 3))) * .5);
    varColor = vec3(1, .667, .1) * l;
    vec4 point = uniCameraViewModel * attPosition;
    gl_Position = uniCameraProjection * point;
}