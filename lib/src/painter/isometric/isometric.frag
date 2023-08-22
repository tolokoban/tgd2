#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

const float EPSILON = 1.0 / 256.0;

void main() {
    vec4 color = texture(uniTexture, varUV);
    if (color.a < EPSILON) discard;

    FragColor = color;
    float light = color.g < 0.001 ? 1.0 : 0.0;
    FragColor =mix(vec4(varUV, 0, 1), vec4(light, light, light, 1), 0.5);
    if (color.b < 0.001) FragColor = vec4(0,0,1,1);
}