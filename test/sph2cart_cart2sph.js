import {test} from './_dependencies';
import sph2cart from '../src/sph2cart';
import cart2sph from '../src/cart2sph';

const x = [
  1, 1, 1, 1,
  -1, -1, -1, -1,
];

const y = [
  1, 1, -1, -1,
  1, 1, -1, -1,
];

const z = [
  1, -1, 1, -1,
  1, -1, 1, -1,
];

const az = [
  0.7853982, 0.7853982, -0.7853982, -0.7853982,
  2.3561945, 2.3561945, -2.3561945, -2.3561945,
];

const el = [
  0.6154797, -0.6154797, 0.6154797, -0.6154797,
  0.6154797, -0.6154797, 0.6154797, -0.6154797,
];

const r = [
  1.7320508, 1.7320508, 1.7320508, 1.7320508,
  1.7320508, 1.7320508, 1.7320508, 1.7320508,
];

test('sph2cart(az, el, r)', (t) => {
  for (let i=0;i<8;i++) {
    let input = [az[i], el[i], r[i]];
    let out = sph2cart([], input);

    t.vecEql(out, [x[i], y[i], z[i]]);
  }

  t.end();
});

test('cart2sph(x, y, z)', (t) => {
  for (let i=0;i<8;i++) {
    let input = [x[i], y[i], z[i]];
    let out = cart2sph([], input);

    t.vecEql(out, [az[i], el[i], r[i]]);
  }

  t.end();
});
