import * as Ar from './arithmetic';

import planeCoef from './planeCoef';

export default function coplanar(pts, ep) {
  if (pts.length < 3) throw('GeomError: should at least include 3 points');

  let [a,b,c,d] = planeCoef(
    [],
    pts[0],
    Ar.cross([],
      Ar.sub([], pts[1], pts[0]),
      Ar.sub([], pts[2], pts[1]))
  );

  return [...pts].reduce((m, pt) =>
    m && Ar.eq(a*pt[0] + b*pt[1] + c*pt[2] + d, 0, ep)
    , true);
}
