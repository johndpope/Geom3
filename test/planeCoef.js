import {test} from './_dependencies';

import planeCoef from '../src/planeCoef';

test('planeCoef(out, pt, normal)', (t) => {
  t.vecEql(
    planeCoef(
      [],
      [-89.25955144821351, 16.229009354221006, 1294.1732283464573],
      [-98.71882578602354, 0, -15.955984314003818]
    ), [-0.987188, 0, -0.159559, 118.382096]
  );

  t.end();
});
