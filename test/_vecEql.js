const epsilon = 0.000001;

import defined from 'defined';

export default function addVecEql(tape) {
  tape.Test.prototype.vecEql
    = function (a, b, msg, extra) {
      this._assert(_vecEql(a, b), {
        message : defined(msg, 'should be equal'),
        operator : 'vecEqual',
        actual : a,
        expected : b,
        extra : extra
      });
    };

  tape.Test.prototype.vecEql2
    = function (a, b, msg, extra) {
      this._assert(_vecEql2(a, b), {
        message : defined(msg, 'should be equal'),
        operator : 'vecEqual',
        actual : a,
        expected : b,
        extra : extra
      });
    };
}

function _vecEql(a, b) {
  return diff(a, b, 0) < epsilon &&
    diff(a, b, 1) < epsilon &&
    diff(a, b, 2) < epsilon;
}

function _vecEql2(a, b) {
  return diff(a, b, 0) < epsilon &&
    diff(a, b, 1) < epsilon;
}

function diff(a, b, i) { return Math.abs(a[i] - b[i]); }
