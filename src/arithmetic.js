import {quat, vec3, vec4, mat3, mat4} from './dependencies';

const epsilon = 0.000001;

export function eq(s1, s2, ep=epsilon) {
  // dynamic epsilon?
  return Math.abs(s1 - s2) < ep;
}

export function eql(v1, v2, ep=epsilon) {
  return eq(v1[0], v2[0], ep) &&
         eq(v1[1], v2[1], ep) &&
         eq(v1[2], v2[2], ep);
}

export function mag(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

export function add(...args) { return vec3.add(...args); }
export function sub(...args) { return vec3.sub(...args); }
export function mul(...args) { return vec3.scale(...args); }
export function scale(...args) { return vec3.scale(...args); }
export function dot(...args) { return vec3.dot(...args); }
export function cross(...args) { return vec3.cross(...args); }
export function norm(...args) { return vec3.normalize(...args); }

export function isZeroVec(v, ep=epsilon) { return eql(v, [0,0,0], ep); }

/**
 * Tow vectors u and v are said to be parallel if and only if they have same direction or opposite direction.
 * A zero vector is considered to be parallel to every other vector.
 */
export function isParallel(u, v, ep=epsilon) {
  return isZeroVec(cross([], u, v), ep);
}

export function sameDir(u, v, ep=epsilon) {
  if (isZeroVec(v) || isZeroVec(u)) throw('Error');
  return eql(norm([], u), norm([], v), ep);
}
