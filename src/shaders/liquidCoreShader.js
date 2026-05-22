export const liquidVertexShader = `
uniform float uTime;
uniform float uStatus;
varying vec3 vNormal;
varying vec3 vPosition;

float wave(vec3 p) {
  float base = sin(p.y * 4.0 + uTime * 1.2) * 0.07;
  float ripple = sin((p.x + p.z) * 7.0 + uTime * 2.0) * 0.04;
  float caustic = sin(length(p.xz) * 22.0 - uTime * 3.2) * 0.02;
  return base + ripple + caustic * step(1.5, uStatus);
}

void main() {
  vNormal = normal;
  vec3 pos = position;
  float amp = mix(0.7, 1.35, step(0.5, uStatus));
  pos += normal * wave(position) * amp;
  vPosition = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const liquidFragmentShader = `
uniform float uTime;
uniform float uStatus;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.2);
  float pulse = 0.5 + 0.5 * sin(uTime * 4.0);
  float caustic = sin(vPosition.x * 30.0 + uTime * 2.7) * sin(vPosition.y * 30.0 - uTime * 2.2);
  vec3 color = mix(uColorA, uColorB, fresnel + pulse * 0.18 * step(0.5, uStatus));
  color += vec3(0.1, 0.2, 0.24) * caustic * step(1.5, uStatus);
  gl_FragColor = vec4(color, 0.95);
}
`;
