import * as Ar from './arithmetic';

export default function distBetweenPoints(pt1, pt2) {
  return Ar.mag(Ar.sub([], pt1, pt2));
}
