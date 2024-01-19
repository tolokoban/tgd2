#version 300 es

uniform vec3 uniCenter; // Coordonnées du centre de l'écran.
uniform vec3 uniScale; // Échelle pour garder l'aspect ratio.

// Instance
layout(location=0) in vec3 attPos;
layout(location=1) in vec4 attCell;

// Vertex
layout(location=2) in vec2 attCorner;
layout(location=3) in vec2 attUV;

out vec2 varUV;

const mat3 PROJ = mat3(
    1.0, -1.0, 0.0,
    0.5,  0.5, 0.0,
    0.0,  0.0, 1.0
);

void main() {
    varUV = attUV * attCell.zw + attCell.xy;
    vec3 pos = PROJ * (attPos - uniCenter) + vec3(attCorner, 0.0);
    gl_Position = vec4(pos * uniScale, 1.0);
}