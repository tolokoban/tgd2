#version 300 es

precision highp float;

uniform sampler2D uniTexture;
uniform sampler2D uniTextureDepth;

in vec2 varUV;
in vec2 varUVDepth;

out vec4 FragColor;

float computeDepth(vec4 vec) {
    float byte = 255.0;
    float R = vec.r * byte;
    float G = vec.g * byte;
    float B = vec.b * byte;
    return (R + G * float(0x100) + B * float(0x10000)) / float(0xFFFFFF);
}

void main() {
    vec3 color = texture(uniTexture, varUV).rgb;
    FragColor = vec4(color, 1.0);
    float depth = computeDepth(texture(uniTextureDepth, varUVDepth));
    gl_FragDepth = depth;
}