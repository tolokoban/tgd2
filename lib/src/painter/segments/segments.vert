#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;

//===================
// Vertex attributes
//-------------------

// Position of the vertex, relative to
// the current center and assuming a
// radius of 1.
// Z tells you what tip is your center: 0 for A and 1 for B.
in vec3 attOffset;

//=====================
// Instance attributes
//---------------------

// Coords and radious of tip A.
in vec4 attAxyzr;
// Coords and radious of tip B.
in vec4 attBxyzr;
// // The color is taken from a texture.
// in vec2 attUV;


out vec4 varColor;

float getRadius(float tip);
mat3 getTransfoMatrix(float tip);

void main() {
    varColor = vec4(0, 1, 0, 1);

    float tip = attOffset.z;
    float radius = getRadius(tip);
    mat3 transfo = getTransfoMatrix(tip);
    vec3 point = transfo * vec3(attOffset.xy, 1.0);
    gl_Position = 
        uniProjectionMatrix 
        * uniModelViewMatrix 
        * vec4(point, 1);
}

float getRadius(float tip) {
    float radius = mix(
        attAxyzr.w,
        attBxyzr.w,
        tip
    );
    return radius;
}

vec3 worldToCamera(vec3 v) {
    vec4 out = uniModelViewMatrix * vec4(v, 1.0);
    return out.xyz;
}

mat3 getTransfoMatrix(float tip) {
    vec3 camA = worldToCamera(attAxyzr.xyz);
    vec3 camB = worldToCamera(attBxyzr.xyz);
    // What is the current tip?
    vec3 camO = mix(camA, camB, tip);
    vec3 Y = camA == camB ? vec3(0, 1, 0) : normalize(camA - camB);
    vec3 X = vec3(Y.y, -Y.x, 0);
    return mat3(X, Y, camO);
}