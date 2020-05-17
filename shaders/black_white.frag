#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texture_pixel = texture(image, texcoord);
    float lumincance = texture_pixel.r*0.299 + texture_pixel.g*0.587 + texture_pixel.b*0.144;
    FragColor = vec4(lumincance,lumincance,lumincance,1);
}
