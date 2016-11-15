import {test} from './_dependencies';

import projVecVec from '../src/projVecVec';

test('projVecVec(out, vec, base)', (t) => {
  t.vecEql(
    projVecVec(
      [],
      new Float64Array([3,6,9]),
      new Float64Array([0,1,0])
    ), [0,6,0]
  );

  t.end();
});
