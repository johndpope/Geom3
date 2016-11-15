import * as Ar from './arithmetic';
import * as DCM from './directionCosineMatrix';
import intersectLinePlane from './intersectLinePlane';
import intersectLineLine from './intersectLineLine';
import distBetweenLines from './distBetweenLines';
import distBetweenPoints from './distBetweenPoints';
import projVecVec from './projVecVec';
import projPointPlane from './projPointPlane';
import pointOnLine from './pointOnLine';
import pointOnSegment from './pointOnSegment';
import pointOnSegmentStrict from './pointOnSegmentStrict';
import coplanar from './coplanar';
import planeCoef from './planeCoef';
import view2world from './view2world';
import world2view from './world2view';
import sph2cart from './sph2cart';
import cart2sph from './cart2sph';

import {quat, vec3, vec4, mat3, mat4} from './dependencies';

// const pts
const ORIGIN = [0,0,0];

// const vecs
const X_AXIS = [1,0,0];
const Y_AXIS = [0,1,0];
const Z_AXIS = [0,0,1];
const NX_AXIS = [-1,0,0];
const NY_AXIS = [0,-1,0];
const NZ_AXIS = [0,0,-1];

const constants = {
  ORIGIN,
  X_AXIS,
  Y_AXIS,
  Z_AXIS,
  NX_AXIS,
  NY_AXIS,
  NZ_AXIS,
};

module.exports = Object.assign({
  intersectLinePlane,
  intersectLineLine,
  distBetweenLines,
  distBetweenPoints,
  projVecVec,
  projPointPlane,
  pointOnLine,
  pointOnSegment,
  pointOnSegmentStrict,
  coplanar,
  planeCoef,
  view2world,
  world2view,
  sph2cart,
  cart2sph,
  DCM: DCM,
  eq: Ar.eq,
  eql: Ar.eql,
  sub: Ar.sub,
  scale: Ar.scale,
  dot: Ar.dot,
  cross: Ar.cross,
  norm: Ar.norm,
  isZeroVec: Ar.isZeroVec,
  isParallel: Ar.isParallel,
  sameDir: Ar.sameDir,
}, constants, {quat, vec3, vec4, mat3, mat4});
