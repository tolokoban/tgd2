#version 300 es

precision highp float;

uniform sampler2D uniTexture;
uniform sampler2D uniTextureDepth;
uniform float uniMin;
uniform float uniMax;

in vec2 varUV;
in vec2 varUVDepth;

out vec4 FragColor;

void main() {
    float depth = texture(uniTextureDepth, varUVDepth).r;
    vec3 color = texture(uniTexture, varUV).rgb;
    FragColor = vec4(color * smoothstep(0.999, 1.0, gl_FragDepth), 1.0);
    float min = uniMin;
    float max = uniMax;
    float light = clamp(
        (depth - min) / (max - min),
        0.0,
        1.0
    );
    FragColor = mix(FragColor, vec4(vec3(light), 1), .999);
    gl_FragDepth = depth;
}