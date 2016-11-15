import * as Ar from './arithmetic';
import projVecVec from './projVecVec';

export default function projPointPlane(out, pt, planePt, planeNorm) {
  // assume plane_norm non-zero
  let offset = projVecVec(
      [],
      Ar.sub([], planePt, pt),
      planeNorm);

  out[0] = pt[0] + offset[0];
  out[1] = pt[1] + offset[1];
  out[2] = pt[2] + offset[2];

  return out;
}
