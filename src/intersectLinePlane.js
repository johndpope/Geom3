import * as Ar from './arithmetic';

import planeCoef from './planeCoef';

export default function intersectLinePlane(out, linePt, lineVec, planePt, planeNorm, ep) {
  let [a,b,c,d] = planeCoef([], planePt, planeNorm),
      lineVecNormalized = Ar.norm([], lineVec),
      planeNormNormalized = [a,b,c],
      num = Ar.dot(planeNormNormalized, linePt) + d,
      den = Ar.dot(planeNormNormalized, lineVecNormalized);

  if (Ar.eq(den, 0, ep)) return null;

  let v = Ar.scale([], lineVecNormalized, num / den);

  return Ar.sub(out, linePt, v);
}
