#version 300 es

precision mediump float;

uniform float uniAspect;
uniform float uniAspectInverse;
uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;

in vec2 attCorner;
in vec2 attLatLng;
in vec3 attUV;

out vec2 varUV;
out float varAlpha;

const float H = 1.0 / 32.0;

void main() {
    varUV = attUV.xy + attCorner * vec2(attUV.z, H);
    float longitude = attLatLng.x;
    float latitude = attLatLng.y;
    float r = cos(latitude);
    float z = sin(latitude);
    float x = cos(longitude) * r;
    float y = sin(longitude) * r;
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(x, y, z, 1.0);
    vec2 point = gl_Position.xy / max(1.0, gl_Position.w);
    float size = pow(dot(point, point), 1.5);
    varAlpha = size;
    size *= max(uniAspect, uniAspectInverse) * 5.0;
    gl_Position.xy += (attCorner * size * vec2(attUV.z, H) * gl_Position.w) * vec2(uniAspectInverse, -1.0);
    gl_Position.z = gl_Position.w;
}
