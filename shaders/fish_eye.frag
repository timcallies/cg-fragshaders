#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 coord = texcoord * 2.0 - 1.0;
    float theta = atan(coord.y, coord.x);
    float radius = pow(length(coord), 1.5);
    vec2 final_coord = vec2(radius*cos(theta), radius*sin(theta));
    FragColor = texture(image, ((final_coord+1.0)/2.0));
}
