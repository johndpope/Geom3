import {test} from './_dependencies';

import pointOnLine from '../src/pointOnLine';

test('pointOnLine(pt, ptLine, vecLine, tolerance)', (t) => {
  t.notok(
    pointOnLine(
      [1,1,1],
      [0,0,0], [0,0,1]
    )
  );

  t.ok(
    pointOnLine(
      [0,0,0],
      [0,0,0], [1,0,0]
    )
  );
  t.ok(
    pointOnLine(
      [10,0,0],
      [0,0,0], [1,0,0]
    )
  );
  t.ok(
    pointOnLine(
      [-10,0,0],
      [0,0,0], [1,0,0]
    )
  );

  t.end();
});
