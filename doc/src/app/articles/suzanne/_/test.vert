#version 300 es

uniform mat4 uniCameraModelView;
uniform mat4 uniCameraProjection;

in vec4 attPosition;
in vec3 attNormal;
in vec2 attUV;

out vec3 varNormal;
out vec2 varUV;

void main() {
    varUV = attUV;
    varNormal = attNormal;
    vec4 point = uniCameraModelView * attPosition;
    gl_Position = uniCameraProjection * point;
}