#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec3 top_right =        texture(image, texcoord + vec2(1.0/width, 1.0/height)).rgb;
    vec3 top_center =       texture(image, texcoord + vec2(0.0, 1.0/height)).rgb;
    vec3 top_left =         texture(image, texcoord + vec2(-1.0/width, 1.0/height)).rgb;
    vec3 bottom_right =     texture(image, texcoord + vec2(1.0/width, -1.0/height)).rgb;
    vec3 bottom_center =    texture(image, texcoord + vec2(0.0, -1.0/height)).rgb;
    vec3 bottom_left =      texture(image, texcoord + vec2(-1.0/width, -1.0/height)).rgb;
    vec3 center_left =      texture(image, texcoord + vec2(-1.0/width, 0)).rgb;
    vec3 center_right =     texture(image, texcoord + vec2(1.0/width, 0)).rgb;

    vec3 sobel_h = bottom_right + (2.0*center_right) + top_right - bottom_left - (2.0*center_left) - top_left;
    vec3 sobel_v = bottom_left + (2.0 * bottom_center) + bottom_right - top_left - (2.0 * top_center) - top_right;
    vec3 sobel_edge = sqrt(pow(sobel_h, vec3(2.0,2.0,2.0)) + pow(sobel_v, vec3(2.0,2.0,2.0)));

    if(length(sobel_edge) >= 0.5) {
        FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
    else {
        FragColor = texture(image, texcoord);
    }
}
