import * as Ar from './arithmetic';

export default function projVecVec(out, a, b) {
  let mag_b = Ar.mag(b);
  let dot = Ar.dot(a, b);

  out[0] = dot / mag_b / mag_b * b[0];
  out[1] = dot / mag_b / mag_b * b[1];
  out[2] = dot / mag_b / mag_b * b[2];

  return out;
}
