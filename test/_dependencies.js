import tape from 'tape';

import addVecEql from './_vecEql';
addVecEql(tape);

module.exports = {
  test: tape,
}
