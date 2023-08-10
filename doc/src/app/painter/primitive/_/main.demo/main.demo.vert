void compute() {
    float len = attPos.x;
    float ang = attPos.y;
    float x = cos(ang) * len;
    float y = sin(ang) * len;
    varColor = vec4(
        mix(varColor.rgb, vec3(0, 0.5, 0.8), len), 
        1.0
    );
    gl_Position = vec4(x, y, 0.0, 1.0);
}