import * as Ar from './arithmetic';

import intersectLinePlane from './intersectLinePlane';

export default function intersectLineLine(
  out,
  line1Pt, line1Vec,
  line2Pt, line2Vec,
  ep
) {
  let vc = Ar.norm([], Ar.cross([], line1Vec, line2Vec)),
    pt1 = intersectLinePlane([], line1Pt, line1Vec, line2Pt, Ar.cross([], line2Vec, vc)),
    pt2 = intersectLinePlane([], line2Pt, line2Vec, line1Pt, Ar.cross([], line1Vec, vc));

  if (pt1 && pt2 && Ar.eql(pt1, pt2, ep)) {
    out[0] = pt1[0];
    out[1] = pt1[1];
    out[2] = pt1[2];
    return out;
  } else {
    return null;
  }
}
