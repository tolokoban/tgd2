#version 300 es

precision mediump float;

uniform vec3 uniAxisZ;
uniform sampler2D uniTexture;

out vec4 FragColor;

in vec2 varUV;
in vec3 varNormal;

const vec3 SUN_1 = normalize(vec3(1, 2, 4));
const vec3 SUN_2 = normalize(vec3(0, 0, -1));

float calcDiffuse(vec3 normal, vec3 lightVector, float lightIntensity);
float calcSpecular(vec3 normal, vec3 cameraZ, vec3 lightVector, float lightIntensity, float sharpness);

void main() {
    vec3 color = texture(uniTexture, varUV).rgb;
    vec3 normal = normalize(varNormal);
    float ambient = 0.2;
    float diffuse = calcDiffuse(
        normal,
        SUN_1,
        1.0
    ) + calcDiffuse(
        normal,
        SUN_2,
        0.0
    );
    float specular = calcSpecular(
        normal,
        uniAxisZ,
        SUN_1,
        0.7,
        50.0
    ) + calcSpecular(
        normal,
        uniAxisZ,
        SUN_2,
        0.0,
        1.0
    );
    FragColor = vec4(
        color * (ambient + diffuse) + vec3(specular), 
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
