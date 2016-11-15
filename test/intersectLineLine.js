import {test} from './_dependencies';

import intersectLineLine from '../src/intersectLineLine';

test('intersectLineLine(out, line1Pt, line1Vec, line2Pt, line2Vec, ep)', (t) => {
  t.vecEql(
    intersectLineLine(
      [],
      [ 0.020444921432165586, 565.2143615321565, 0.0 ],
      [ -0.7631685108186335, -0.48968812617553353, 0.42163890140446497 ],
      [ -348.6697972774182, 300.08682356917825, 293.40832187652893 ],
      [ 0.7037238567201773, 0.0, 0.7104735980195742 ]
    ), [-413.17517389920306, 300.08682356917825, 228.28424432474236]
  );

  t.notok(
    intersectLineLine(
      [],
      [0,0,0],[1,0,0],
      [0,0,1],[1,1,1]
    )
  );

  t.notok(
    intersectLineLine(
      [],
      [0,0,0],[1,0,0],
      [0,1,0],[-1,0,0]
    )
  );

  t.notok(
    intersectLineLine(
      [],
      [0,0,0],[1,0,0],
      [0,0,0],[-1,0,0]
    )
  );

  t.end();
});
