import {test} from './_dependencies';

import intersectLinePlane from '../src/intersectLinePlane';

const ORIGIN = [0,0,0],
      NZ_AXIS = [0,0,-1],
      Z_AXIS = [0,0,1],
      X_AXIS = [1,0,0];

test('intersectLinePlane(out, linePt, lineVec, planePt, planeNorm, ep)', (t) => {
  t.vecEql(
    intersectLinePlane(
      [],
      [1,1,1], NZ_AXIS,
      ORIGIN, Z_AXIS
    ), [1,1,0]
  );

  t.vecEql(
    intersectLinePlane(
      [],

          [0,1,20], NZ_AXIS,
          [0,0,10], Z_AXIS
    ), [0,1,10]
  );

  t.notok(
    intersectLinePlane(
      [],
      [0,0,1], X_AXIS,
      ORIGIN, Z_AXIS
    )
  );

  t.notok(
    intersectLinePlane(
      [],
      ORIGIN, X_AXIS,
      ORIGIN, Z_AXIS
    )
  );

  t.end();
});
