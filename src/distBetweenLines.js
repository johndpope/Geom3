import * as Ar from './arithmetic';
import intersectLinePlane from './intersectLinePlane';

export default function distBetweenLines(line1Pt, line1Vec, line2Pt, line2Vec, ep) {
  let vc = Ar.norm([], Ar.cross([], line1Vec, line2Vec));

  let pt1, pt2;

  if (Ar.isParallel(line1Vec, line2Vec)) {
    pt1 = line1Pt,
    pt2 = intersectLinePlane([], line2Pt, line2Vec, line1Pt, line1Vec);
  } else {
    pt1 = intersectLinePlane([], line1Pt, line1Vec, line2Pt, Ar.cross([], line2Vec, vc));
    pt2 = intersectLinePlane([], line2Pt, line2Vec, line1Pt, Ar.cross([], line1Vec, vc));
  }

  if (!pt1 || !pt2) return 0;

  return Ar.mag(Ar.sub([], pt1, pt2));
}
