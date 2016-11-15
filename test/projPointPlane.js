import {test} from './_dependencies';

import projPointPlane from '../src/projPointPlane';

test('projPointPlane(out, pt, planePt, planeNorm)', (t) => {
  t.vecEql(
    projPointPlane(
      [],
      [1,1,1],
      [0,0,0], [0,0,1]
    ), [1,1,0]
  );

  t.end();
});
