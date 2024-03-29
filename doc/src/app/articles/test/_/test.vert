#version 300 es

uniform mat4 uniCameraViewModelL;
uniform mat4 uniCameraViewModelR;
uniform mat4 uniCameraProjection;

in vec4 attPosition;
in vec3 attNormal;
in vec2 attUV;

out vec3 varNormal;
out vec2 varUV;

void main() {
    varUV = attUV;
    varNormal = attNormal;
    vec4 pointL = uniCameraViewModelL * attPosition;
    vec4 pointR = uniCameraViewModelR * attPosition;
    float L = dot(pointL, pointL);
    float R = dot(pointR, pointR);
    float T = L + R;
    float a = T > 0.0 ? L / T : 0.5;
    vec4 point = mix(pointR, pointL, a);
    gl_Position = uniCameraProjection * point;
}