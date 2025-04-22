#version 300 es

precision highp float;

uniform sampler2D uniTexture;
uniform sampler2D uniDepth;
in vec2 varUV;
out vec4 FragColor;

void main() {
    vec3 color = texture(uniTexture, varUV).rgb;
    float depth = texture(uniDepth, varUV).r;
    FragColor = vec4(color, 1.0);
    gl_FragDepth = depth;
    gl_FragDepth = dot(cos(varUV * 30.0), cos(varUV * 30.0));
    FragColor = vec4(vec3(gl_FragDepth) * color, 1.0);
}