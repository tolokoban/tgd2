#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;
// camera.zoom
uniform float uniCameraZoom;
// Minimal value for the radius.
uniform float uniMinRadius;

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
in vec2 attAuv;
in vec2 attBuv;


out vec4 varColor;


float getRadius(float tip);
mat3 getTransfoMatrix(float tip);

void main() {
    float tip = attOffset.z;
    varColor = texture(uniTexture, mix(attAuv, attBuv, tip));
    float radius = getRadius(tip);
    mat3 transfo = getTransfoMatrix(tip);
    vec3 point = transfo * vec3(attOffset.xy * radius, 1.0);
    gl_Position = 
        uniProjectionMatrix 
        * vec4(point, 1);
}

float getRadius(float tip) {
    float radius = mix(
        attAxyzr.w,
        attBxyzr.w,
        tip
    );
    return max(uniMinRadius, radius * uniCameraZoom);
}

vec3 worldToCamera(vec3 v) {
    vec4 result = uniModelViewMatrix * vec4(v, 1.0);
    return result.xyz;
}

mat3 getTransfoMatrix(float tip) {
    vec3 camA = worldToCamera(attAxyzr.xyz);
    vec3 camB = worldToCamera(attBxyzr.xyz);
    // What is the current tip?
    vec3 camO = mix(camA, camB, tip);
    vec2 A = camA.xy;
    vec2 B = camB.xy;
    vec3 Y = vec3(
        A == B ? vec2(0, 1) : normalize(A - B),
        0
    );
    vec3 X = vec3(Y.y, -Y.x, 0);
    return mat3(X, Y, camO);
}