import {test} from './_dependencies';

import * as Ar from '../src/arithmetic';

test('add(): preserve type', (t) => {
  let a = new Float64Array([1,2,3]);

  Ar.add(a, a, [1,1,1]);
  t.equal(a.constructor.name, 'Float64Array');

  t.end();
});

test('isZeroVec(v)', (t) => {
  t.ok(Ar.isZeroVec(new Float64Array([0,0,0])));
  t.notok(Ar.isZeroVec(new Float64Array([0,0,0.001])));

  t.end();
});

test('isParallel(u, v)', (t) => {
  t.ok(
    Ar.isParallel(
      new Float64Array([0,0,0]),
      new Float64Array([0,0,1])
    ));

  t.ok(
    Ar.isParallel(
      new Float64Array([0,0,1]),
      new Float64Array([0,0,0])
    ));

  t.ok(
    Ar.isParallel(
      new Float64Array([0,0,0]),
      new Float64Array([0,0,0])
    ));

  t.ok(
    Ar.isParallel(
      new Float64Array([1,2,3]),
      new Float64Array([-2,-4,-6])
    ));

  t.end();
});

test('sameDir(u, v)', (t) => {
  t.throws(() => {
    Ar.sameDir(
      new Float64Array([0,0,0]),
      new Float64Array([0,0,1])
    );
  });

  t.throws(() => {
    Ar.sameDir(
      new Float64Array([0,0,1]),
      new Float64Array([0,0,0])
    );
  });

  t.ok(Ar.sameDir(
    new Float64Array([0,0,1]),
    new Float64Array([0,0,2])
  ));

  t.notok(Ar.sameDir(
    new Float64Array([0,0,1]),
    new Float64Array([0,0,-2])
  ));

  t.end();
});
