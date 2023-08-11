#version 300 es

uniform vec3 uniCenter; // Coordonnées du centre de l'écran.
uniform vec3 uniScale; // Échelle pour garder l'aspect ratio.

// Instance
in vec3 attPos;
in vec4 attCell;

// Vertex
in vec2 attCorner;
in vec2 attUV;

out vec2 varUV;

const mat3 PROJ = mat3(
    1.0, -1.0, 0.0,
    0.5,  0.5, 0.0,
    0.0,  0.0, 1.0
)

void main() {
    varUV = varUV * attCell.zw + attCell.xy;
    vec3 pos = PROJ * (attPos - uniCenter);
    gl_Position = vec4(pos * uniScale, 1.0);
}