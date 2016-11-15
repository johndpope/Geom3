import * as Ar from './arithmetic';

export default function planeCoef(out, pt, normal) {
  // ax + by + cz + d = 0
  let n = Ar.norm([], normal);
  let d = -1 * Ar.dot(pt, n);

  out[0] = n[0];
  out[1] = n[1];
  out[2] = n[2];
  out[3] = d;

  return out;
}
