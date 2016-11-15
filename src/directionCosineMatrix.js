import {quat, vec3, vec4, mat3, mat4} from './dependencies';

const sin = Math.sin;
const cos = Math.cos;

export function roll(out, r) {
  return mat3.copy(out, [
    1,     0,    0,
    0,  cos(r), sin(r),
    0, -sin(r), cos(r),
  ]);
}

export function pitch(out, p) {
  return mat3.copy(out, [
    cos(p), 0, -sin(p),
    0,      1, 0,
    sin(p), 0, cos(p),
  ]);
}

export function yaw(out, p) {
  return mat3.copy(out, [
    cos(p),  sin(p), 0,
    -sin(p), cos(p), 0,
    0,       0,      1,
  ]);
}

export function yawPitchRoll(out, phi, theta, psi) {
  let r = roll([], phi),
      p = pitch([], theta),
      y = yaw([], psi);

  // y * p * r
  return mat3.mul(out, mat3.mul([], y, p), r);
}
