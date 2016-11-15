import {test} from './_dependencies';

import coplanar from '../src/coplanar';

test('coplanar(pts, ep)', (t) => {
  let pts = [
    [-256.9593147751606, 473.3461061647696, 0.0],
    [84.6208267319301, 354.63446301387614, 0.0],
    [-199.4877405040511, 205.08926270304113, 0.0],
    [-100.07823334463518, 16.229355531213514, 0.0],
    [-408.4344477659313, -146.07899124391838, 0.0]
  ];

  t.ok(coplanar(pts));

  pts.push([1,1,1])
  t.notok(coplanar(pts));

  t.end();
});
