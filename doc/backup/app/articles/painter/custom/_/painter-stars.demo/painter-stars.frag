#version 300 es

precision mediump float;

in vec4 varColor;
in float varRadiusLimit;

out vec4 FragColor;

void main() {
    vec2 point = 2.0 * gl_PointCoord.xy - vec2(1.0);
    float radius = length(point);
    if (radius > 1.0) discard;
    
    float alpha = varColor.a;
    alpha *= 1.0 - pow(radius, 2.0);
    float fade = 1.0 - smoothstep(varRadiusLimit, varRadiusLimit * 2.0, radius) * 0.9;
    alpha *= fade;
    FragColor = vec4(varColor.rgb, alpha);
}