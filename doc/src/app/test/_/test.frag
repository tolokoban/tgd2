#version 300 es

precision mediump float;

uniform vec3 uniAxisZ;

out vec4 FragColor;

in vec3 varColor;
in vec3 varNormal;

const vec3 SUN = normalize(vec3(1, 2, 4));

float calcDiffuse(vec3 normal, vec3 lightVector, float lightIntensity);
float calcSpecular(vec3 normal, vec3 cameraZ, vec3 lightVector, float lightIntensity, float sharpness);

void main() {
    vec3 normal = normalize(varNormal);
    float ambient = 0.3;
    float diffuse = calcDiffuse(
        normal,
        SUN,
        1.5
    );
    float specular = calcSpecular(
        normal,
        uniAxisZ,
        SUN,
        2.0,
        10.0
    );
    diffuse = dot(normal, uniAxisZ);
    specular = 0.0;
    FragColor = vec4(
        varColor * (ambient + diffuse) + vec3(specular), 
        1
    );
}

float calcDiffuse(
    vec3 normal,
    vec3 lightVector,
    float lightIntensity
) {
    return lightIntensity * max(
        0.0,
        dot(normal, lightVector)
    );
}

float calcSpecular(
    vec3 normal,
    vec3 cameraZ,
    vec3 lightVector,
    float lightIntensity,
    float sharpness
) {
    if (dot(normal, lightVector) > 0.0) {
        vec3 H = normalize(cameraZ + lightVector);
        return lightIntensity * pow(
            dot(normal, cameraZ),
            sharpness
        );
    }
    return 0.0;
}
