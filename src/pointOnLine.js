import * as Ar from './arithmetic';

export default function pointOnLine(pt, pa, va, epsilon) {
  return Ar.isParallel(
    Ar.sub([], pa, pt),
    va,
    epsilon
  );
}
