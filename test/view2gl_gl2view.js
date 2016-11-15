import {test} from './_dependencies';
import view2gl from '../src/view2gl';
import gl2view from '../src/gl2view';

test('view2gl(out, width, height, p2dView)', (t) => {
  t.vecEql2(
    view2gl([], 1024, 768, [0,0]),
    [-1, 1]
  );

  t.vecEql2(
    view2gl([], 1024, 768, [1024,768]),
    [1, -1]
  );

  t.end();
});

test('gl2view(out, width, height, p2dGL)', (t) => {
  t.vecEql2(
    gl2view([], 1024, 768, [-1, 1]),
    [0, 0]
  );

  t.vecEql2(
    gl2view([], 1024, 768, [1, -1]),
    [1024,768]
  );

  t.end();
});
