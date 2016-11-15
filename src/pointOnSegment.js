import * as Ar from './arithmetic';

export default function pointOnSegment(pt, pta, ptb, ep) {
  if (Ar.eql(pt, pta, ep)) return true;
  if (Ar.eql(pt, ptb, ep)) return true;

  return Ar.sameDir(
    Ar.sub([], pt, pta),
    Ar.sub([], ptb, pt),
    ep
  );
}
