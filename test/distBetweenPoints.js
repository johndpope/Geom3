import {test} from './_dependencies';

import distBetweenPoints from '../src/distBetweenPoints';

test('distBetweenPoints(pt1, pt2)', (t) => {
  t.equal(
    distBetweenPoints(
      new Float64Array([3,0,0]),
      new Float64Array([0,4,0])
    ), 5
  );

  t.end();
});
