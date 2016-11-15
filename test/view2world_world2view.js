import {test} from './_dependencies';
import world2view from '../src/world2view';
import view2world from '../src/view2world';

const view_mat = [
  0.951, 0.085, -0.297, 0,
  0, 0.961, 0.276, 0,
  0.309, -0.262, 0.914,
  0, -3.09, 2.62, -9.14, 1
];

const proj_mat = [
  2.14, 0, 0, 0,
  0, 2.14, 0, 0,
  0, 0, -1, -1,
  0, 0, -0.2, 0
];

test('world2view(out, matProj, matView, viewWidth, viewHeight, p3d)', (t) => {
  t.fail('pending');
  //t.vecEql(
  //  world2view([],
  //    view_mat,
  //    proj_mat,
  //    1920,
  //    1080,
  //    [1,2,3]
  //  ),
  //  [1, 2, 0]
  //);

  t.end();
});

test('view2world(out, matProj, matView, viewWidth, viewHeight, p2d)', (t) => {
  t.fail('pending');
  //t.vecEql(
  //  view2world([],
  //    view_mat,
  //    proj_mat,
  //    1920,
  //    1080,
  //    [345,876,0]
  //  ),
  //  [0.002984, -0.004383, 0.022768]
  //);

  t.end();
});
