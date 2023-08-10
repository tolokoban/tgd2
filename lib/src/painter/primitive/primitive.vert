#version 300 es

uniform vec4 uniColor;
out vec4 varColor;
{{COMPUTE}}

void main() {
    varColor = uniColor;
    compute();
}
