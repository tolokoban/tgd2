#version 300 es

precision mediump float;

uniform mat4 uniModelViewMatrix;
uniform mat4 uniProjectionMatrix;
uniform float uniVegaSizeInPixels;

in vec4 attStar;

out vec4 varColor;
out float varRadiusLimit;

void main() {
    float longitude = attStar.x;
    float latitude = attStar.y;
    float brightness = attStar.z;
    float temperature = attStar.w;
    
    vec3 color = mix(
        vec3(.5, .1, .1), 
        vec3(.1, .2, .5), 
        temperature
    ) * (2.0 + brightness * 5.0);
    varColor = vec4(color, 0.1 + 0.9 * brightness);

    float r = cos(latitude);
    float z = sin(latitude);
    float x = cos(longitude) * r;
    float y = sin(longitude) * r;
    gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(x, y, z, 1.0);
    gl_Position.z = gl_Position.w;
    
    gl_PointSize = max(uniVegaSizeInPixels * brightness, 1.0);
    float radiusLimit = clamp(sqrt(gl_PointSize), 0.2, 10.0);
    varRadiusLimit = radiusLimit / gl_PointSize;
}
