import {test} from './_dependencies';

import distBetweenLines from '../src/distBetweenLines';

const ORIGIN = [0,0,0],
      NZ_AXIS = [0,0,-1],
      Z_AXIS = [0,0,1],
      X_AXIS = [1,0,0];

test('distBetweenLines(line1Pt, line1Vec, line2Pt, line2Vec, ep)', (t) => {
  t.equal(
    distBetweenLines(
      [1,0,0], X_AXIS,
      [0,1,1], NZ_AXIS
    ), 1
  );

  t.equal(
    distBetweenLines(
      [0,0,10], Z_AXIS,
      [0,1,20], NZ_AXIS
    ), 1
  );

  t.equal(
    distBetweenLines(
      [0,0,10], Z_AXIS,
      [0,0,20], NZ_AXIS
    ), 0
  );

  t.end();
});
