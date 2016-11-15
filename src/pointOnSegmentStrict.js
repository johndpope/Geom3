import * as Ar from './arithmetic';

import pointOnSegment from './pointOnSegment';

export default function pointOnSegmentStrict(pt, pta, ptb, ep) {
  if (Ar.eql(pt, pta, ep)) return false;
  if (Ar.eql(pt, ptb, ep)) return false;

  return pointOnSegment(pt, pta, ptb, ep);
}
