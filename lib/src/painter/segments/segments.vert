#version 300 es

precision highp float;

uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;
uniform float uniMinRadius;

//===================
// Vertex attributes
//-------------------

// Position of the vertex, relative to
// the current center and assuming a
// radius of 1.
in vec3 POSITION;
// What tip is your center: 0 (base) or 1 (tip).
in float attTip;
// Normals of the tube that represents the segment.
in vec3 NORMAL;

//=====================
// Instance attributes
//---------------------

// Coords and radius of base.
in vec4 attXYZR0;
// Coords and radius of tip.
in vec4 attXYZR1;
// The color is taken from a texture.
in vec2 attUV0;
in vec2 attUV1;

void main() {
    vec3 pos = POSITION;
    vec4 xyzr = mix(attXYZR0, attXYZR1, attTip);
    vec3 center = xyzr.xyz;
    float radius = max(
        xyzr.w,
        uniMinRadius * (uniProjectionMatrix * uniModelViewMatrix * vec4(center, 1)).w
    );
    vec3 dir = attXYZR1.xyz - attXYZR0.xyz;
    float len = length(dir);
    if (len == 0.0) {
        // Just a sphere
        pos *= radius;
        pos += center.xyz;
        varNormal = NORMAL;
    } else {
        // Full capsule
        vec3 Z = dir / len;
        vec3 v = abs(Z.z) > 0.7 ? vec3(1,0,0) : vec3(0,0,1);
        vec3 Y = cross(v, Z);
        vec3 X = cross(Y, Z);
        mat3 mat = mat3(X, Y, Z);
        pos *= radius;
        pos = mat * pos + center.xyz;
        varNormal = mat * NORMAL;
    }
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(pos, 1);
}

