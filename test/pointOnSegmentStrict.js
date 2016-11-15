import {test} from './_dependencies';

import pointOnSegmentStrict from '../src/pointOnSegmentStrict';

test('pointOnSegmentStrict(pt, pta, ptb, tolerance)', (t) => {
  t.notok(
    pointOnSegmentStrict(
      [0,0,0],
      [0,0,0], [0,0,1]
    )
  );

  t.notok(
    pointOnSegmentStrict(
      [0,0,1],
      [0,0,0], [0,0,1]
    )
  );

  t.ok(
    pointOnSegmentStrict(
      [0,0,0.5],
      [0,0,0], [0,0,1]
    )
  );

  t.end();
});
