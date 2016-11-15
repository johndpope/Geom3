import {test} from './_dependencies';

import pointOnSegment from '../src/pointOnSegment';

test('pointOnSegment(pt, pta, ptb, tolerance): return true if pt on endpoints', (t) => {
  t.ok(
    pointOnSegment(
      [0,0,1],
      [0,0,0], [0,0,1]
    )
  );

  t.ok(
    pointOnSegment(
      [0,0,0],
      [0,0,0], [0,0,1]
    )
  );

  t.end();
});

test('pointOnSegment(pt, pta, ptb, tolerance)', (t) => {
  t.ok(
    pointOnSegment(
      [0,0,0.5],
      [0,0,0], [0,0,1]
    )
  );

  t.notok(
    pointOnSegment(
      [0,0,1.1],
      [0,0,0], [0,0,1]
    )
  );

  t.notok(
    pointOnSegment(
      [0.1,0,0.5],
      [0,0,0], [0,0,1]
    )
  );

  t.end();
});
